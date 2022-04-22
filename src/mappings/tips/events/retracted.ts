import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TipsTipRetractedEvent } from '../../../types/events'

interface TipEventData {
    hash: Uint8Array
}

function getEventData(ctx: EventContext): TipEventData {
    const event = new TipsTipRetractedEvent(ctx)
    if (event.isV13) {
        const hash = event.asV13
        return {
            hash,
        }
    } else if (event.isV29) {
        const { tipHash: hash } = event.asV29
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleRetracted(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Tip, {
        status: ProposalStatus.Retracted,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Tip, hexHash, ctx.block.height)
    }
}
