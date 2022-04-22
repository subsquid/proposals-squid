import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TreasuryRejectedEvent } from '../../../types/events'

interface TreasuryEventData {
    index: number
}

function getEventData(ctx: EventContext): TreasuryEventData {
    const event = new TreasuryRejectedEvent(ctx)
    if (event.isV13) {
        const [index] = event.asV13
        return {
            index,
        }
    } else if (event.isV29) {
        const { proposalIndex: index } = event.asV29
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleRejected(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.TreasuryProposal, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.TreasuryProposal, index, ctx.block.height)
    }
}
