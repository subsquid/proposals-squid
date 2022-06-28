import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyRejectedData } from './getters'

export async function handleRejected(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = getBountyRejectedData
    const { index } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
}
