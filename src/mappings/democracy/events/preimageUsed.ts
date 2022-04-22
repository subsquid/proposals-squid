import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPreimageUsedEvent } from '../../../types/events'

interface PreimageEventData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageUsedEvent(ctx)
    if (event.isV15) {
        const [hash, provider, deposit] = event.asV15
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

    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Preimage, {
        status: ProposalStatus.Used,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Preimage, hexHash, ctx.block.height)
    }
}
