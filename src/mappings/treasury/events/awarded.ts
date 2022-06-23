import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getAwarderData } from './getters'

export async function handleAwarded(ctx: EventHandlerContext) {
    const { index } = getAwarderData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.TreasuryProposal, {
        isEnded: true,
        status: ProposalStatus.Awarded,
    })
}
