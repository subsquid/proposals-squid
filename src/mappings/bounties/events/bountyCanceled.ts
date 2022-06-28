import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyCanceledData } from './getters'

export async function handleCanceled(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = getBountyCanceledData
    const { index } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Cancelled,
        isEnded: true,
    })
}
