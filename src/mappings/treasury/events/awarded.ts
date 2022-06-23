import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { TreasuryAwardedEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

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

    await updateProposalStatus(ctx, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Awarded,
    })
}
