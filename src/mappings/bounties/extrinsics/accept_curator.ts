import { UnknownVersionError } from '../../../common/errors'
import { getOriginAccountId } from '../../../common/tools'
import { proposalManager } from '../../../managers'
import { ProposalType } from '../../../model'
import { BountiesAcceptCuratorCall, TreasuryAcceptCuratorCall } from '../../../types/calls'
import { CallContext } from '../../../types/support'
import { CallHandlerContext } from '../../contexts'

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

export async function handleAcceptCurator(
    ctx: CallHandlerContext<{
        call: {
            name: true
            args: true
            origin: true
        }
    }>
) {
    const section = ctx.call.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyCallData : getTrasuryCallData
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.get(ctx.store, index, ProposalType.Bounty)
    if (!proposal) {
        ctx.log.warn(`Missing record for bounty ${index}`)
        return
    }

    if (!origin) {
        ctx.log.warn(`Origin for accept_curator is null`)
        return
    }
    proposal.curator = getOriginAccountId(ctx.call.origin)

    await proposalManager.update(ctx.store, proposal, { block: ctx.block })
}
