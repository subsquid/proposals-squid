import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyBacameActiveData } from './getters'

export async function handleBecameActive(ctx: EventHandlerContext) {
    const { index } = getBountyBacameActiveData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Active,
    })
}
