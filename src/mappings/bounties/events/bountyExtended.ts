import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyExtendedData } from './getters'

export async function handleExtended(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = getBountyExtendedData
    const { index } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Extended,
    })
}
