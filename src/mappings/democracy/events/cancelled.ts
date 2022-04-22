import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyCancelledEvent } from '../../../types/events'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyCancelledEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else if (event.isV29) {
        return event.asV29.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCancelled(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.Cancelled,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Referendum, index, ctx.block.height)
    }
}
