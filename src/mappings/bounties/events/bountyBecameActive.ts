import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyBacameActiveData } from './getters'

export async function handleBecameActive(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = getBountyBacameActiveData
    const { index } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Active,
    })
}
