import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { encodeId } from '../../../common/tools'
import config from '../../../config'
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
    if (event.isV13) {
        const [voter, hash, decision] = event.asV13
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV29) {
        const { account, proposalHash, voted } = event.asV29
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleVoted(ctx: EventHandlerContext) {
    const { voter, hash, decision } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.CouncilMotion)

    await voteManager.save(
        ctx,
        new Vote({
            id: ctx.event.id,
            voter: encodeId(voter, config.prefix),
            createdAt: ctx.block.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(ctx.block.timestamp),
        })
    )
}
