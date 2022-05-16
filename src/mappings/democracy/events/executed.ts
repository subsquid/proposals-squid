import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyExecutedEvent } from '../../../types/events'
import assert from 'assert'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020[0]
    } else if (event.isV9090) {
        return event.asV9090[0]
    } else if (event.isV9111) {
        return event.asV9111[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
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
