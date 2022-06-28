import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyRejectedData } from './getters'

export async function handleRejected(ctx: EventHandlerContext) {
    const { index } = getBountyRejectedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
}
