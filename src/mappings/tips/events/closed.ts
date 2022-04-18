import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
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
    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.Tip)
    if (!proposal) {
        console.warn(`Missing record for Tip with hash ${hexHash} at block ${ctx.block.height}`)
        return
    }

    proposal.reward = reward
    proposal.status = ProposalStatus.Closed
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
