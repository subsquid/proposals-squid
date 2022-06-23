import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { getVotesCount } from '../../utils/votes'
import { getVotedData } from './getters'

export async function handleVoted(ctx: EventHandlerContext) {
    const { voter, hash, decision } = getVotedData(ctx)

    const hexHash = toHex(hash)
    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hexHash, type: ProposalType.TechCommitteeProposal },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.TechCommitteeProposal, hexHash))
        return
    }

    const count = await getVotesCount(ctx, proposal.id)

    await ctx.store.insert(
        new Vote({
            id: `${proposal.id}-${count.toString().padStart(8, '0')}`,
            voter: ss58codec.encode(voter),
            blockNumber: ctx.block.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(ctx.block.timestamp),
            type: VoteType.Motion,
        })
    )
}
