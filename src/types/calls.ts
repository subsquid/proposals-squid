import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v1001 from './v1001'
import * as v1019 from './v1019'

export class BountiesAcceptCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Bounties.accept_curator')
    this._chain = ctx._chain
    this.call = call
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
  get isV1000(): boolean {
    return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
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
  get asV1000(): {bountyId: number} {
    assert(this.isV1000)
    return this._chain.decodeCall(this.call)
  }
}

export class BountiesUnassignCuratorCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Bounties.unassign_curator')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Unassign curator from a bounty.
   * 
   *  This function can only be called by the `RejectOrigin` a signed origin.
   * 
   *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
   *  or inactive. As a result, we will slash the curator when possible.
   * 
   *  If the origin is the curator, we take this as a sign they are unable to do their job and
   *  they willingly give up. We could slash them, but for now we allow them to recover their
   *  deposit and exit without issue. (We may want to change this if it is abused.)
   * 
   *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
   *  anyone in the community to call out that a curator is not doing their due diligence, and
   *  we should pick a new curator. In this case the curator should also be slashed.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get isV1000(): boolean {
    return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   *  Unassign curator from a bounty.
   * 
   *  This function can only be called by the `RejectOrigin` a signed origin.
   * 
   *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
   *  or inactive. As a result, we will slash the curator when possible.
   * 
   *  If the origin is the curator, we take this as a sign they are unable to do their job and
   *  they willingly give up. We could slash them, but for now we allow them to recover their
   *  deposit and exit without issue. (We may want to change this if it is abused.)
   * 
   *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
   *  anyone in the community to call out that a curator is not doing their due diligence, and
   *  we should pick a new curator. In this case the curator should also be slashed.
   * 
   *  # <weight>
   *  - O(1).
   *  # </weight>
   */
  get asV1000(): {bountyId: number} {
    assert(this.isV1000)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.vote')
    this._chain = ctx._chain
    this.call = call
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
   *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV1001(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
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
   *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV1001(): {refIndex: number, vote: v1001.AccountVote} {
    assert(this.isV1001)
    return this._chain.decodeCall(this.call)
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
  get isV1019(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
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
  get asV1019(): {refIndex: number, vote: v1019.AccountVote} {
    assert(this.isV1019)
    return this._chain.decodeCall(this.call)
  }
}
