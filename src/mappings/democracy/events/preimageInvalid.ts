import { toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPreimageInvalidEvent } from '../../../types/events'
import { EventHandlerContext } from '../../contexts'

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

export async function handlePreimageInvalid(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    const proposal = await proposalManager.updateStatus(ctx.store, hexHash, ProposalType.Preimage, {
        block: ctx.block,
        status: ProposalStatus.Invalid,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Preimage, hexHash, ctx.block.height)
    }
}
