import { CallHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn } from '../../../common/errors'
import {
    Proposal,
    ProposalType,
    SplitVoteBalance,
    StandardVoteBalance,
    Vote,
    VoteBalance,
    VoteDecision,
    VoteType,
} from '../../../model'
import { getOriginAccountId } from '../../../common/tools'
import { getVotesCount } from '../../utils/votes'
import { getVoteData } from './getters'

export async function handleVote(ctx: CallHandlerContext) {
    if (!ctx.call.success) return

    const { index, vote } = getVoteData(ctx)

    const proposal = await ctx.store.get(Proposal, { where: { index, type: ProposalType.Referendum } })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.Referendum, index))
        return
    }

    let decision: VoteDecision
    switch (vote.type) {
        case 'Standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'Split':
            decision = VoteDecision.abstain
            break
    }

    let lockPeriod: number | undefined
    let balance: VoteBalance | undefined
    if (vote.type === 'Split') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
        })
    } else if (vote.type === 'Standard') {
        balance = new StandardVoteBalance({
            value: vote.balance,
        })
        lockPeriod = vote.value < 128 ? vote.value : vote.value - 128
    }

    const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: `${proposal.id}-${count.toString().padStart(8, '0')}`,
            voter: ctx.call.origin ? getOriginAccountId(ctx.call.origin) : null,
            blockNumber: ctx.block.height,
            decision,
            lockPeriod,
            proposal,
            balance,
            timestamp: new Date(ctx.block.timestamp),
            type: VoteType.Referendum,
        })
    )
}
