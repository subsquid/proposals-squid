import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyExtendedData } from './getters'

export async function handleExtended(ctx: EventHandlerContext) {
    const { index } = getBountyExtendedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Extended,
    })
}
