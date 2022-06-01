import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v1055 from './v1055'
import * as v9111 from './v9111'

export class DemocracyVoteCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.call.name === 'Democracy.vote')
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  # <weight>
   *  - O(1).
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get isV1020(): boolean {
    return this.ctx._chain.getCallHash('Democracy.vote') === '3a01fd8d5e95145a311b99cf21decce5be8578650f311f3a6091395407f5efe9'
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  # <weight>
   *  - O(1).
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get asV1020(): {refIndex: number, vote: number} {
    assert(this.isV1020)
    return this.ctx._chain.decodeCall(this.ctx.call)
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
   *  - `O(1)`.
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get isV1055(): boolean {
    return this.ctx._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
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
   *  - `O(1)`.
   *  - One DB change, one DB entry.
   *  # </weight>
   */
  get asV1055(): {refIndex: number, vote: v1055.AccountVote} {
    assert(this.isV1055)
    return this.ctx._chain.decodeCall(this.ctx.call)
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
  get isV9111(): boolean {
    return this.ctx._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
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
  get asV9111(): {refIndex: number, vote: v9111.AccountVote} {
    assert(this.isV9111)
    return this.ctx._chain.decodeCall(this.ctx.call)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9111
  }

  get asLatest(): {refIndex: number, vote: v9111.AccountVote} {
    deprecateLatest()
    return this.asV9111
  }
}
