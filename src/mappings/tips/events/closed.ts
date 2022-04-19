import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TipsTipClosedEvent, TreasuryTipClosedEvent } from '../../../types/events'

interface TipEventData {
    hash: Uint8Array
    reward: bigint
}

function getTreasuryEventData(ctx: EventContext): TipEventData {
    const event = new TreasuryTipClosedEvent(ctx)
    if (event.isV1038) {
        const [hash, , reward] = event.asV1038
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getTipsEventData(ctx: EventContext): TipEventData {
    const event = new TipsTipClosedEvent(ctx)
    if (event.isV2028) {
        const [hash, , reward] = event.asV2028
        return {
            hash,
            reward,
        }
    } else if (event.isV9130) {
        const { tipHash: hash, payout: reward } = event.asV9130
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClosed(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'tips' ? getTipsEventData : getTreasuryEventData
    const { hash, reward } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Tip, {
        status: ProposalStatus.Closed,
        isEnded: true,
    })
    if (!proposal) {
        console.warn(new MissingProposalRecord(ProposalType.Tip, hexHash, ctx.block.height))
        return
    }

    proposal.reward = reward

    await proposalManager.update(ctx, proposal)
}
