import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getNotPassedData } from './getters'

export async function handleNotPassed(ctx: EventHandlerContext) {
    const index = getNotPassedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.NotPassed,
    })
}
