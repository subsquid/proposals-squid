import { MissingProposalRecordWarn, UnknownVersionError } from '../../../common/errors'
import { getOriginAccountId } from '../../../common/tools'
import { Proposal, ProposalType } from '../../../model'
import { BountiesAcceptCuratorCall, TreasuryAcceptCuratorCall } from '../../../types/calls'
import { CallContext } from '../../../types/support'
import { CallHandlerContext } from '../../types/contexts'

interface CallData {
    index: number
}

function getTrasuryCallData(ctx: CallContext): CallData {
    const call = new TreasuryAcceptCuratorCall(ctx)
    if (call.isV2025) {
        const { bountyId } = call.asV2025
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

function getBountyCallData(ctx: CallContext): CallData {
    const call = new BountiesAcceptCuratorCall(ctx)
    if (call.isV2028) {
        const { bountyId } = call.asV2028
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export async function handleAcceptCurator(ctx: CallHandlerContext) {
    if (!ctx.call.success) return

    const section = ctx.call.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyCallData : getTrasuryCallData
    const { index } = getEventData(ctx)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    const origin = getOriginAccountId(ctx.call.origin)
    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    proposal.curator = getOriginAccountId(ctx.call.origin)

    await ctx.store.save(proposal)
}
