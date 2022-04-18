import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPreimageInvalidEvent } from '../../../types/events'

interface PreimageEventData {
    hash: Uint8Array
    index: number
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageInvalidEvent(ctx)
    if (event.isV1022) {
        const [hash, index] = event.asV1022
        return {
            hash,
            index,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, refIndex: index } = event.asV9130
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePreimageInvalid(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.Preimage)
    if (!proposal) {
        console.warn(`Missing record for preimage with hash ${hexHash} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Invalid
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
