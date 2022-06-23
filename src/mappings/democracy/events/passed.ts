import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { DemocracyPassedEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyPassedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020
    } else if (event.isV9130) {
        return event.asV9130.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePassed(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Passed,
    })
}
