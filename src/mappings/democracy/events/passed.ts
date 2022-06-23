import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getPassedData } from './getters'

export async function handlePassed(ctx: EventHandlerContext) {
    const index = getPassedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Referendum, {
        isEnded: true,
        status: ProposalStatus.Passed,
    })
}
