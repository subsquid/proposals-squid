import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { TreasuryRejectedEvent } from '../../../types/events'

interface TreasuryEventData {
    index: number
}

function getEventData(ctx: EventContext): TreasuryEventData {
    const event = new TreasuryRejectedEvent(ctx)
    if (event.isV1032) {
        const [index] = event.asV1032
        return {
            index,
        }
    } else if (event.isV9160) {
        const { proposalIndex: index } = event.asV9160
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleRejected(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.get(ctx, index, ProposalType.TreasuryProposal)
    if (!proposal) {
        console.warn(`Missing record for TreasuryProposal with index ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Rejected
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
