import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { CouncilClosedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new CouncilClosedEvent(ctx)
    if (event.isV13) {
        return event.asV13[0]
    } else if (event.isV29) {
        return event.asV29.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClosed(ctx: EventHandlerContext) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        status: ProposalStatus.Approved,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.CouncilMotion, hexHash, ctx.block.height)
    }
}
