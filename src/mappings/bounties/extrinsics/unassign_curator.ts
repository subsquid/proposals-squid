import { UnknownVersionError } from '../../../common/errors'
import { proposalManager } from '../../../managers'
import { ProposalType } from '../../../model'
import { BountiesUnassignCuratorCall, TreasuryUnassignCuratorCall } from '../../../types/calls'
import { CallContext } from '../../../types/support'
import { CallHandlerContext } from '../../contexts'

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

export async function handleUnassignCurator(
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

    proposal.curator = null

    await proposalManager.update(ctx.store, proposal, { block: ctx.block })
}
