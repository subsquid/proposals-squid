import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v803 from './v803'
import * as v804 from './v804'
import * as v906 from './v906'
import * as v916 from './v916'
import * as v926 from './v926'
import * as v932 from './v932'
import * as v942 from './v942'

export class BountiesBountyAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyAwarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
   */
  get asV803(): [v803.BountyIndex, v803.AccountId] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get asV916(): {index: number, beneficiary: v916.AccountId32} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyBecameActiveEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyBecameActive')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty proposal is funded and became active. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty proposal is funded and became active. \[index\]
   */
  get asV803(): v803.BountyIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyCanceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty is cancelled. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty is cancelled. \[index\]
   */
  get asV803(): v803.BountyIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty is cancelled.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty is cancelled.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
   */
  get asV803(): [v803.BountyIndex, v803.Balance, v803.AccountId] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get asV916(): {index: number, payout: bigint, beneficiary: v916.AccountId32} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyExtendedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyExtended')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty expiry is extended. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty expiry is extended. \[index\]
   */
  get asV803(): v803.BountyIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty expiry is extended.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty expiry is extended.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyProposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  New bounty proposal. \[index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New bounty proposal. \[index\]
   */
  get asV803(): v803.BountyIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New bounty proposal.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * New bounty proposal.
   */
  get asV916(): {index: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyRejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Bounties.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
   */
  get asV803(): [v803.BountyIndex, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get asV916(): {index: number, bond: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): v803.Hash {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV916(): {proposalHash: v916.H256} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV803(): [v803.Hash, v803.MemberCount, v803.MemberCount] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV916(): {proposalHash: v916.H256, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): v803.Hash {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV916(): {proposalHash: v916.H256} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV803(): [v803.Hash, v803.DispatchResult] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Council.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV906(): [v906.H256, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV916(): {proposalHash: v916.H256, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Council.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV926(): {proposalHash: v926.H256, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV932(): {proposalHash: v932.H256, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Council.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV942(): {proposalHash: v942.H256, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV803(): [v803.AccountId, v803.ProposalIndex, v803.Hash, v803.MemberCount] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV916(): {account: v916.AccountId32, proposalIndex: number, proposalHash: v916.H256, threshold: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV803(): [v803.AccountId, v803.Hash, boolean, v803.MemberCount, v803.MemberCount] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV916(): {account: v916.AccountId32, proposalHash: v916.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Cancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV803(): v803.ReferendumIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV916(): {refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV803(): [v803.ReferendumIndex, boolean] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get isV804(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '8d7c54bbac5b548a558504b413146fe5bff0b9275a2e7f4c831a148273ee173a'
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get asV804(): [v804.ReferendumIndex, v804.DispatchResult] {
    assert(this.isV804)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV906(): [number, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV916(): {refIndex: number, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV926(): {refIndex: number, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV932(): {refIndex: number, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '2abe2e7ca2af8b119eb4f3a1f669843943049e3f4e2f613fc3b077115902ca2b'
  }

  /**
   * A proposal has been enacted.
   */
  get asV942(): {refIndex: number, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyNotPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.NotPassed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV803(): v803.ReferendumIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV916(): {refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Passed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV803(): v803.ReferendumIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV916(): {refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageInvalidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageInvalid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV803(): [v803.Hash, v803.ReferendumIndex] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV916(): {proposalHash: v916.H256, refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageMissingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageMissing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV803(): [v803.Hash, v803.ReferendumIndex] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV916(): {proposalHash: v916.H256, refIndex: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageNoted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV803(): [v803.Hash, v803.AccountId, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV916(): {proposalHash: v916.H256, who: v916.AccountId32, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageReapedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageReaped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV803(): [v803.Hash, v803.AccountId, v803.Balance, v803.AccountId] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV916(): {proposalHash: v916.H256, provider: v916.AccountId32, deposit: bigint, reaper: v916.AccountId32} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageUsedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageUsed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV803(): [v803.Hash, v803.AccountId, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV916(): {proposalHash: v916.H256, provider: v916.AccountId32, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV803(): [v803.PropIndex, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV916(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Started')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV803(): [v803.ReferendumIndex, v803.VoteThreshold] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has begun.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV916(): {refIndex: number, threshold: v916.VoteThreshold} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Tabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV803(): [v803.PropIndex, v803.Balance, v803.AccountId[]] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV916(): {proposalIndex: number, deposit: bigint, depositors: v916.AccountId32[]} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): v803.Hash {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV916(): {proposalHash: v916.H256} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV803(): [v803.Hash, v803.MemberCount, v803.MemberCount] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV916(): {proposalHash: v916.H256, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV803(): v803.Hash {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV916(): {proposalHash: v916.H256} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV803(): [v803.Hash, v803.DispatchResult] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV906(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV906(): [v906.H256, Result<null, v906.DispatchError>] {
    assert(this.isV906)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV916(): {proposalHash: v916.H256, result: Result<null, v916.DispatchError>} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV926(): {proposalHash: v926.H256, result: Result<null, v926.DispatchError>} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV932(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV932(): {proposalHash: v932.H256, result: Result<null, v932.DispatchError>} {
    assert(this.isV932)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV942(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV942(): {proposalHash: v942.H256, result: Result<null, v942.DispatchError>} {
    assert(this.isV942)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV803(): [v803.AccountId, v803.ProposalIndex, v803.Hash, v803.MemberCount] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV916(): {account: v916.AccountId32, proposalIndex: number, proposalHash: v916.H256, threshold: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV803(): [v803.AccountId, v803.Hash, boolean, v803.MemberCount, v803.MemberCount] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV916(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV916(): {account: v916.AccountId32, proposalHash: v916.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsNewTipEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.NewTip')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get asV803(): v803.Hash {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new tip suggestion has been opened.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A new tip suggestion has been opened.
   */
  get asV916(): {tipHash: v916.H256} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipClosed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get asV803(): [v803.Hash, v803.AccountId, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has been closed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
  }

  /**
   * A tip suggestion has been closed.
   */
  get asV916(): {tipHash: v916.H256, who: v916.AccountId32, payout: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipRetractedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipRetracted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get asV803(): v803.Hash {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has been retracted.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has been retracted.
   */
  get asV916(): {tipHash: v916.H256} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get asV803(): [v803.Hash, v803.AccountId, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A tip suggestion has been slashed.
   */
  get isV916(): boolean {
    return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
  }

  /**
   * A tip suggestion has been slashed.
   */
  get asV916(): {tipHash: v916.H256, finder: v916.AccountId32, deposit: bigint} {
    assert(this.isV916)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Awarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV803(): [v803.ProposalIndex, v803.Balance, v803.AccountId] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asV926(): {proposalIndex: number, award: bigint, account: v926.AccountId32} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV803(): v803.ProposalIndex {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New proposal.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV926(): {proposalIndex: number} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV803(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV803(): [v803.ProposalIndex, v803.Balance] {
    assert(this.isV803)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV926(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV926(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV926)
    return this._chain.decodeEvent(this.event)
  }
}
