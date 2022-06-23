import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { TreasuryRejectedEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

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

    await updateProposalStatus(ctx, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Rejected,
    })
}
