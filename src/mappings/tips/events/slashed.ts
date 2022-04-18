import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { TipsTipSlashedEvent } from '../../../types/events'

interface TipEventData {
    hash: Uint8Array
}

function getEventData(ctx: EventContext): TipEventData {
    const event = new TipsTipSlashedEvent(ctx)
    if (event.isV2028) {
        const [hash] = event.asV2028
        return {
            hash,
        }
    } else if (event.isV9130) {
        const { tipHash: hash } = event.asV9130
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleSlashed(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.Tip)
    if (!proposal) {
        console.warn(`Missing record for Tip with hash ${hexHash} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Slashed
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
