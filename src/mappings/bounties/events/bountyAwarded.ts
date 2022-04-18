import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyAwardedEvent, TreasuryBountyAwardedEvent } from '../../../types/events'
import { encodeId } from '../../../common/tools'
import config from '../../../config'

interface BountyEventData {
    index: number
    beneficiary: Uint8Array
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyAwardedEvent(ctx)
    if (event.isV2025) {
        const [index, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyAwardedEvent(ctx)
    if (event.isV2028) {
        const [index, beneficiary] = event.asV2028
        return {
            index,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, beneficiary } = event.asV9130
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAwarded(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'bounties' ? getBountyEventData : getTreasuryEventData
    const { index, beneficiary } = getEventData(ctx)

    const proposal = await proposalManager.get(ctx, index, ProposalType.Bounty)
    if (!proposal) {
        console.warn(`Missing record for Bounty ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Awarded
    proposal.payee = encodeId(beneficiary, config.prefix)
    proposal.endedAt = ctx.block.height
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
