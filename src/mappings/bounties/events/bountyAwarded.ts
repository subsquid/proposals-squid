import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyAwardedData } from './getters'

export async function handleAwarded(ctx: EventHandlerContext) {
    const { index, beneficiary } = getBountyAwardedData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}
