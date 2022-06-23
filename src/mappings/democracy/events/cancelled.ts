import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { DemocracyCancelledEvent } from '../../../types/events'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyCancelledEvent(ctx)
    if (event.isV1020) {
        return event.asV1020
    } else if (event.isV9130) {
        return event.asV9130.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCancelled(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}
