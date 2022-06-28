import { MissingProposalRecordWarn } from '../../../common/errors'
import { getOriginAccountId } from '../../../common/tools'
import { Proposal, ProposalType } from '../../../model'
import { CallHandlerContext } from '../../types/contexts'
import { getAccepterCuratorData, getAccepterCuratorDataOld } from './getters'

export async function handleAcceptCurator(ctx: CallHandlerContext) {
    if (!ctx.call.success) return

    const section = ctx.call.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getAccepterCuratorData : getAccepterCuratorDataOld
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
