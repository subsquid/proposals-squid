import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPassedEvent } from '../../../types/events'

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

    const proposal = await proposalManager.get(ctx, index, ProposalType.Referendum)
    if (!proposal) {
        console.warn(`Missing record for referendum with index ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Passed
    proposal.endedAt = ctx.block.height
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
