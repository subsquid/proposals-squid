import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v1020 from './v1020'
import * as v1055 from './v1055'
import * as v9111 from './v9111'

export class BountiesAcceptCuratorCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.call.name === 'Bounties.accept_curator')
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get isV2028(): boolean {
    return this.ctx._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get asV2028(): {bountyId: number} {
    assert(this.isV2028)
    return this.ctx._chain.decodeCall(this.ctx.call)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2028
  }

  get asLatest(): {bountyId: number} {
    deprecateLatest()
    return this.asV2028
  }
}

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
  get asV1020(): {refIndex: number, vote: v1020.Vote} {
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

export class TreasuryAcceptCuratorCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.call.name === 'Treasury.accept_curator')
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get isV2025(): boolean {
    return this.ctx._chain.getCallHash('Treasury.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Accept the curator role for a bounty.
   *  A deposit will be reserved from curator and refund upon successful payout.
   * 
   *  May only be called from the curator.
   * 
   *  # <weight>
   *  - O(1).
   *  - Limited storage reads.
   *  - One DB change.
   *  # </weight>
   */
  get asV2025(): {bountyId: number} {
    assert(this.isV2025)
    return this.ctx._chain.decodeCall(this.ctx.call)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): {bountyId: number} {
    deprecateLatest()
    return this.asV2025
  }
}
