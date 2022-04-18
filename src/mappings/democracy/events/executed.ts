import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyExecutedEvent } from '../../../types/events'

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

    const proposal = await proposalManager.get(ctx, index, ProposalType.Referendum)
    if (!proposal) {
        console.warn(`Missing record for referendum with index ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Executed
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
