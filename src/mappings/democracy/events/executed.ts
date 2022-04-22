import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyExecutedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV15) {
        return event.asV15[0]
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleExecuted(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.Executed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Referendum, index, ctx.block.height)
    }
}
