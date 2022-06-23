import { MissingProposalRecordWarn, UnknownVersionError } from '../../../common/errors'
import { Proposal, ProposalType } from '../../../model'
import { BountiesUnassignCuratorCall, TreasuryUnassignCuratorCall } from '../../../types/calls'
import { CallContext } from '../../../types/support'
import { CallHandlerContext } from '../../types/contexts'

interface CallData {
    index: number
}

function getTrasuryCallData(ctx: CallContext): CallData {
    const call = new TreasuryUnassignCuratorCall(ctx)
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
    const call = new BountiesUnassignCuratorCall(ctx)
    if (call.isV2028) {
        const { bountyId } = call.asV2028
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export async function handleUnassignCurator(ctx: CallHandlerContext) {
    if (!ctx.call.success) return

    const section = ctx.call.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyCallData : getTrasuryCallData
    const { index } = getEventData(ctx)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    proposal.curator = null

    await ctx.store.save(proposal)
}
