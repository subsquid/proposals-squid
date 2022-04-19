import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
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

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
    })
    if (!proposal) {
        console.warn(new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height))
        return
    }

    proposal.payee = encodeId(beneficiary, config.prefix)
    proposal.reward = payout

    await proposalManager.update(ctx, proposal)
}
