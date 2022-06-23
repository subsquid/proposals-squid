import { Vote } from '../../model'
import { CommonHandlerContext } from '../types/contexts'

const proposals = new Map<string, number>()

export async function getVotesCount(ctx: CommonHandlerContext, proposalId: string) {
    let count = proposals.get(proposalId)
    if (count == null) {
        count = await ctx.store.count(Vote, {
            where: {
                proposalId,
            },
        })
    }
    proposals.set(proposalId, count + 1)
    return count
}
