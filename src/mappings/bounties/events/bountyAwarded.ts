import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
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

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Awarded,
        isEnded: true,
    })
    if (!proposal) {
        console.warn(new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height))
        return
    }

    proposal.payee = encodeId(beneficiary, config.prefix)
    await proposalManager.update(ctx, proposal)
}
