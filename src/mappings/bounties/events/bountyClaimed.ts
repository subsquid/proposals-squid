import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyClaimedEvent, TreasuryBountyClaimedEvent } from '../../../types/events'
import { encodeId } from '../../../common/tools'
import config from '../../../config'

interface BountyEventData {
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyClaimedEvent(ctx)
    if (event.isV2025) {
        const [index, payout, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyClaimedEvent(ctx)
    if (event.isV2028) {
        const [index, payout, beneficiary] = event.asV2028
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, payout, beneficiary } = event.asV9130
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClaimed(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'bounties' ? getBountyEventData : getTreasuryEventData
    const { index, payout, beneficiary } = getEventData(ctx)

    const proposal = await proposalManager.get(ctx, index, ProposalType.Bounty)
    if (!proposal) {
        console.warn(`Missing record for Bounty ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Claimed
    proposal.payee = encodeId(beneficiary, config.prefix)
    proposal.reward = payout
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
