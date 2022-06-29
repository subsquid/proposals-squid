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
    if (event.isV15) {
        const { refIndex, vote } = event.asV15
        return {
            index: refIndex,
            vote: {
                type: 'Standard',
                value: vote,
            },
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
