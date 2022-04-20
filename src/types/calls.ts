import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v0 from './v0'
import * as v9110 from './v9110'

export class DemocracyVoteCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'democracy.vote')
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `ref_index`: The index of the referendum to vote for.
   *  - `vote`: The vote configuration.
   * 
   *  # <weight>
   *  - Complexity: `O(R)` where R is the number of referendums the voter has voted on.
   *    weight is charged as if maximum votes.
   *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`
   *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
   *  --------------------
   *  - Base Weight:
   *      - Vote New: 49.24 + .333 * R µs
   *      - Vote Existing: 49.94 + .343 * R µs
   *  # </weight>
   */
  get isV0(): boolean {
    return this.ctx._chain.getCallHash('democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `ref_index`: The index of the referendum to vote for.
   *  - `vote`: The vote configuration.
   * 
   *  # <weight>
   *  - Complexity: `O(R)` where R is the number of referendums the voter has voted on.
   *    weight is charged as if maximum votes.
   *  - Db reads: `ReferendumInfoOf`, `VotingOf`, `balances locks`
   *  - Db writes: `ReferendumInfoOf`, `VotingOf`, `balances locks`
   *  --------------------
   *  - Base Weight:
   *      - Vote New: 49.24 + .333 * R µs
   *      - Vote Existing: 49.94 + .343 * R µs
   *  # </weight>
   */
  get asV0(): {refIndex: number, vote: v0.AccountVote} {
    assert(this.isV0)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV9110(): boolean {
    return this.ctx._chain.getCallHash('democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV9110(): {refIndex: number, vote: v9110.AccountVote} {
    assert(this.isV9110)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9110
  }

  get asLatest(): {refIndex: number, vote: v9110.AccountVote} {
    deprecateLatest()
    return this.asV9110
  }
}
