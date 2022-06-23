import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn, UnknownVersionError } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { Proposal, ProposalType, Vote, VoteDecision, VoteType } from '../../../model'
import { CouncilVotedEvent } from '../../../types/events'
import { EventContext } from '../../../types/support'
import { getVotesCount } from '../../utils/votes'

interface CouncilVoteEventData {
    voter: Uint8Array
    hash: Uint8Array
    decision: boolean
}

function getEventData(ctx: EventContext): CouncilVoteEventData {
    const event = new CouncilVotedEvent(ctx)
    if (event.isV1020) {
        const [voter, hash, decision] = event.asV1020
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV9130) {
        const { account, proposalHash, voted } = event.asV9130
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleVoted(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const { voter, hash, decision } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await ctx.store.get(Proposal, {
        where: { hash: hexHash, type: ProposalType.CouncilMotion },
    })
    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(ProposalType.CouncilMotion, hexHash))
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
