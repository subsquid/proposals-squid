import { CallHandlerContext } from '../../types/contexts'
import { MissingProposalRecordWarn, UnknownVersionError } from '../../../common/errors'
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
import { DemocracyVoteCall } from '../../../types/calls'
import { CallContext } from '../../../types/support'
import { getOriginAccountId } from '../../../common/tools'
import { getVotesCount } from '../../utils/votes'

type DemocracyVote =
    | {
          type: 'Standard'
          balance?: bigint
          value: number
      }
    | {
          type: 'Split'
          aye: bigint
          nay: bigint
      }

interface DemocracyVoteCallData {
    index: number
    vote: DemocracyVote
}

function getCallData(ctx: CallContext): DemocracyVoteCallData {
    const event = new DemocracyVoteCall(ctx)
    if (event.isV1020) {
        const { refIndex, vote } = event.asV1020
        return {
            index: refIndex,
            vote: {
                type: 'Standard',
                value: vote,
            },
        }
    } else if (event.isV1055) {
        const { refIndex, vote } = event.asV1055
        if (vote.__kind === 'Standard') {
            return {
                index: refIndex,
                vote: {
                    type: 'Standard',
                    value: vote.value.vote,
                    balance: vote.value.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
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
                    type: 'Standard',
                    value: vote.vote,
                    balance: vote.balance,
                },
            }
        } else {
            return {
                index: refIndex,
                vote: {
                    type: 'Split',
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
    if (!ctx.call.success) return

    const { index, vote } = getCallData(ctx)

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
