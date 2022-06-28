import { UnknownVersionError } from '../../../common/errors'
import { DemocracyVoteCall } from '../../../types/calls'
import { CallContext } from '../../types/contexts'

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

export function getVoteData(ctx: CallContext): DemocracyVoteCallData {
    const event = new DemocracyVoteCall(ctx)
    if (event.isV803) {
        const { refIndex, vote } = event.asV803
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
    } else if (event.isV906) {
        const { refIndex, vote } = event.asV906
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
