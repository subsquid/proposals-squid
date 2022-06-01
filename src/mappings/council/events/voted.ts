import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../contexts'
import { UnknownVersionError } from '../../../common/errors'
import { ss58codec } from '../../../common/tools'
import { proposalManager, voteManager } from '../../../managers'
import { ProposalType, Vote, VoteDecision } from '../../../model'
import { CouncilVotedEvent } from '../../../types/events'
import { EventContext } from '../../../types/support'

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
    const proposal = await proposalManager.get(ctx.store, hexHash, ProposalType.CouncilMotion)

    await voteManager.save(
        ctx.store,
        new Vote({
            id: ctx.event.id,
            voter: ss58codec.encode(voter),
            createdAt: ctx.block.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(ctx.block.timestamp),
        })
    )
}
