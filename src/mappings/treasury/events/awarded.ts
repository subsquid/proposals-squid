import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { TreasuryAwardedEvent } from '../../../types/events'

interface TreasuryEventData {
    index: number
}

function getEventData(ctx: EventContext): TreasuryEventData {
    const event = new TreasuryAwardedEvent(ctx)
    if (event.isV1020) {
        const [index] = event.asV1020
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

export async function handleAwarded(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.get(ctx, index, ProposalType.TreasuryProposal)
    if (!proposal) {
        console.warn(`Missing record for TreasuryProposal with index ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Awarded
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
