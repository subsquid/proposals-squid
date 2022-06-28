import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyClaimedData } from './getters'

export async function handleClaimed(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = getBountyClaimedData
    const { index, payout, beneficiary } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}
