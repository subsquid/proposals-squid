import { CallHandlerContext } from '../../../common/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { proposalManager, voteManager } from '../../../managers'
import { ProposalType, SplitVoteBalance, StandardVoteBalance, Vote, VoteBalance, VoteDecision } from '../../../model'
import { DemocracyVoteCall } from '../../../types/calls'

type DemocracyVote =
    | {
          type: 'old'
          value: number
      }
    | {
          type: 'standard'
          balance?: bigint
          value: number
      }
    | {
          type: 'split'
          aye: bigint
          nay: bigint
      }

interface DemocracyVoteCallData {
    index: number
    vote: DemocracyVote
}

function getCallData(ctx: CallHandlerContext): DemocracyVoteCallData {
    const event = new DemocracyVoteCall(ctx)
    if (event.isV1020) {
        const { refIndex, vote } = event.asV1020
        return {
            index: refIndex,
            vote: {
                type: 'old',
                value: vote,
            },
        }
    } else if (event.isV1055) {
        const { refIndex, vote } = event.asV1055
        if (vote.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'standard',
                    value: vote.value.vote,
                    balance: vote.value.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'split',
                    aye: vote.value.aye,
                    nay: vote.value.nay,
                },
            }
        }
    } else if (event.isV9111) {
        const { refIndex, vote } = event.asV9111
        if (vote.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'standard',
                    value: vote.vote,
                    balance: vote.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'split',
                    aye: vote.aye,
                    nay: vote.nay,
                },
            }
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleVote(ctx: CallHandlerContext) {
    const { index, vote } = getCallData(ctx)

    const proposal = await proposalManager.get(ctx.store, index, ProposalType.Referendum)
    if (!proposal) return

    let decision: VoteDecision
    switch (vote.type) {
        case 'old':
        case 'standard':
            decision = vote.value < 128 ? VoteDecision.no : VoteDecision.yes
            break
        case 'split':
            decision = VoteDecision.abstain
            break
    }

    let lockPeriod: number | undefined
    if (vote.type != 'split') {
        lockPeriod = vote.value < 128 ? vote.value : vote.value - 128
    }

    let balance: VoteBalance | undefined
    if (vote.type === 'split') {
        balance = new SplitVoteBalance({
            aye: vote.aye,
            nay: vote.nay,
        })
    } else if (vote.type === 'standard') {
        balance = new StandardVoteBalance({
            value: vote.balance,
        })
    }

    await voteManager.save(
        ctx,
        new Vote({
            id: ctx.call.id,
            voter: ctx.extrinsic.signature?.address,
            createdAt: ctx.block.height,
            decision,
            lockPeriod,
            proposal,
            balance,
            timestamp: new Date(ctx.block.timestamp),
        })
    )
}
