import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { DemocracyExecutedEvent } from '../../../types/events'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020[0]
    } else if (event.isV9090) {
        return event.asV9090[0]
    } else if (event.isV9111) {
        return event.asV9111[0]
    } else if (event.isV9130) {
        return event.asV9130.refIndex
    } else if (event.isV9160) {
        return event.asV9160.refIndex
    } else if (event.isV9170) {
        return event.asV9170.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleExecuted(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.Executed,
    })
}
