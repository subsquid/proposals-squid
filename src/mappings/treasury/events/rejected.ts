import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getRejectedData } from './getters'

export async function handleRejected(ctx: EventHandlerContext) {
    const { index } = getRejectedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Rejected,
    })
}
