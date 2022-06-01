import { EventHandlerContext } from '../../../common/contexts'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
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

    const proposal = await proposalManager.updateStatus(ctx.store, index, ProposalType.TreasuryProposal, {
        status: ProposalStatus.Awarded,
        isEnded: true,
    })
    if (!proposal) {
        (new MissingProposalRecord(ProposalType.TreasuryProposal, index, ctx.block.height))
    }
}
