import { MissingProposalRecordWarn } from '../../../common/errors'
import { Proposal, ProposalType } from '../../../model'
import { CallHandlerContext } from '../../types/contexts'
import { getUnassingCuratorData, getUnassingCuratorDataOld } from './getters'

export async function handleUnassignCurator(ctx: CallHandlerContext) {
    if (!ctx.call.success) return

    const section = ctx.call.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getUnassingCuratorData : getUnassingCuratorDataOld
    const { index } = getEventData(ctx)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Bounty } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Bounty, index))
        return
    }

    proposal.curator = null

    await ctx.store.save(proposal)
}
