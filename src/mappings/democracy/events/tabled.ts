import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getTabledData } from './getters'

export async function handleTabled(ctx: EventHandlerContext) {
    const { index } = getTabledData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.DemocracyProposal, {
        status: ProposalStatus.Used,
        isEnded: true,
    })
}
