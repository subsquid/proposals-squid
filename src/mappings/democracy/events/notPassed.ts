import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyNotPassedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyNotPassedEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else if (event.isV29) {
        return event.asV29.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleNotPassed(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.NotPassed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Referendum, index, ctx.block.height)
    }
}
