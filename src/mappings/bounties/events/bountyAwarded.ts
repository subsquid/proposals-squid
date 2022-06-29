import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'
import { getBountyAwardedData, getBountyAwardedDataOld } from './getters'

export async function handleAwarded(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyAwardedData : getBountyAwardedDataOld
    const { index, beneficiary } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}
