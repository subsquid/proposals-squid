import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyCancelledEvent } from '../../../types/events'
import { EventHandlerContext } from '../../contexts'

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

export async function handleCancelled(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const index = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx.store, index, ProposalType.Referendum, {
        block: ctx.block,
        status: ProposalStatus.Cancelled,       
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Referendum, index, ctx.block.height)
    }
}
