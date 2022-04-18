import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPreimageUsedEvent } from '../../../types/events'

interface PreimageEventData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageUsedEvent(ctx)
    if (event.isV1022) {
        const [hash, provider, deposit] = event.asV1022
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, provider, deposit } = event.asV9130
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePreimageUsed(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.Preimage)
    if (!proposal) {
        console.warn(`Missing record for preimage with hash ${hexHash} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Used
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
