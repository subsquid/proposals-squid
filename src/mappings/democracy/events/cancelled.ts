import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getCancelledData } from './getters'

export async function handleCancelled(ctx: EventHandlerContext) {
    const index = getCancelledData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Cancelled,
    })
}
