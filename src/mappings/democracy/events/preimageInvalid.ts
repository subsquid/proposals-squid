import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPreimageInvalidEvent } from '../../../types/events'

interface PreimageEventData {
    hash: Uint8Array
    index: number
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageInvalidEvent(ctx)
    if (event.isV15) {
        const [hash, index] = event.asV15
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

    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Preimage, {
        status: ProposalStatus.Invalid,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Preimage, hexHash, ctx.block.height)
    }
}
