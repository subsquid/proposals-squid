import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'

export async function handleExecuted(ctx: EventHandlerContext) {
    const index = getExecutedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.Executed,
    })
}
