import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v155 from './v155'
import * as v200 from './v200'
import * as v701 from './v701'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1605 from './v1605'

export class CouncilCollectiveApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV1001(): v1001.H256 {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV155(): v155.Hash {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1605(): {proposalHash: v1605.H256} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('CouncilCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV200(): v200.Hash {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get asV1001(): [v1001.H256, number, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1201(): {proposalHash: v1201.H256, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV155(): [v155.Hash, v155.MemberCount, v155.MemberCount] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1605(): {proposalHash: v1605.H256, yes: number, no: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('CouncilCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV200(): [v200.Hash, v200.MemberCount, v200.MemberCount] {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV1001(): v1001.H256 {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV155(): v155.Hash {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1605(): {proposalHash: v1605.H256} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('CouncilCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV200(): v200.Hash {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV1001(): [v1001.H256, Result<null, v1001.DispatchError>] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: v1201.H256, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: v1300.H256, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: v1401.H256, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV155(): [v155.Hash, v155.DispatchResult] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1605(): {proposalHash: v1605.H256, result: Result<null, v1605.DispatchError>} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV200(): [v200.Hash, v200.DispatchResult] {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('CouncilCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [v900.H256, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV1001(): [v1001.AccountId20, number, v1001.H256, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalIndex: number, proposalHash: v1201.H256, threshold: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV155(): [v155.AccountId, v155.ProposalIndex, v155.Hash, v155.MemberCount] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1605(): {account: v1605.AccountId20, proposalIndex: number, proposalHash: v1605.H256, threshold: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('CouncilCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV200(): [v200.AccountId, v200.ProposalIndex, v200.Hash, v200.MemberCount] {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilCollectiveVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CouncilCollective.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get asV1001(): [v1001.AccountId20, v1001.H256, boolean, number, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalHash: v1201.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV155(): [v155.AccountId, v155.Hash, boolean, v155.MemberCount, v155.MemberCount] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1605(): {account: v1605.AccountId20, proposalHash: v1605.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('CouncilCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV200(): [v200.AccountId, v200.Hash, boolean, v200.MemberCount, v200.MemberCount] {
    assert(this.isV200)
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
   * A referendum has been cancelled. \[ref_index\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A referendum has been cancelled. \[ref_index\]
   */
  get asV1001(): number {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV155(): v155.ReferendumIndex {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV1605(): {refIndex: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV200(): v200.ReferendumIndex {
    assert(this.isV200)
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
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV1001(): [number, Result<null, v1001.DispatchError>] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1201(): {refIndex: number, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1300(): {refIndex: number, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1401(): {refIndex: number, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV155(): [v155.ReferendumIndex, boolean] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '2abe2e7ca2af8b119eb4f3a1f669843943049e3f4e2f613fc3b077115902ca2b'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1605(): {refIndex: number, result: Result<null, v1605.DispatchError>} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV200(): [v200.ReferendumIndex, boolean] {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get isV701(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '8d7c54bbac5b548a558504b413146fe5bff0b9275a2e7f4c831a148273ee173a'
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get asV701(): [v701.ReferendumIndex, v701.DispatchResult] {
    assert(this.isV701)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV900(): [number, Result<null, v900.DispatchError>] {
    assert(this.isV900)
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
   * A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV1001(): number {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV155(): v155.ReferendumIndex {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV1605(): {refIndex: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV200(): v200.ReferendumIndex {
    assert(this.isV200)
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
   * A proposal has been approved by referendum. \[ref_index\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A proposal has been approved by referendum. \[ref_index\]
   */
  get asV1001(): number {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV155(): v155.ReferendumIndex {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV1605(): {refIndex: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV200(): v200.ReferendumIndex {
    assert(this.isV200)
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
   * A proposal could not be executed because its preimage was invalid.
   * \[proposal_hash, ref_index\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   * \[proposal_hash, ref_index\]
   */
  get asV1001(): [v1001.H256, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV1201(): {proposalHash: v1201.H256, refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV155(): [v155.Hash, v155.ReferendumIndex] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV1605(): {proposalHash: v1605.H256, refIndex: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV200(): [v200.Hash, v200.ReferendumIndex] {
    assert(this.isV200)
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
   * A proposal could not be executed because its preimage was missing.
   * \[proposal_hash, ref_index\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   * \[proposal_hash, ref_index\]
   */
  get asV1001(): [v1001.H256, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV1201(): {proposalHash: v1201.H256, refIndex: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV155(): [v155.Hash, v155.ReferendumIndex] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV1605(): {proposalHash: v1605.H256, refIndex: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV200(): [v200.Hash, v200.ReferendumIndex] {
    assert(this.isV200)
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
   * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV1001(): [v1001.H256, v1001.AccountId20, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV1201(): {proposalHash: v1201.H256, who: v1201.AccountId20, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV155(): [v155.Hash, v155.AccountId, v155.Balance] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV1605(): {proposalHash: v1605.H256, who: v1605.AccountId20, deposit: bigint} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV200(): [v200.Hash, v200.AccountId, v200.Balance] {
    assert(this.isV200)
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
   * A registered preimage was removed and the deposit collected by the reaper.
   * \[proposal_hash, provider, deposit, reaper\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   * \[proposal_hash, provider, deposit, reaper\]
   */
  get asV1001(): [v1001.H256, v1001.AccountId20, bigint, v1001.AccountId20] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV1201(): {proposalHash: v1201.H256, provider: v1201.AccountId20, deposit: bigint, reaper: v1201.AccountId20} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV155(): [v155.Hash, v155.AccountId, v155.Balance, v155.AccountId] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV1605(): {proposalHash: v1605.H256, provider: v1605.AccountId20, deposit: bigint, reaper: v1605.AccountId20} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV200(): [v200.Hash, v200.AccountId, v200.Balance, v200.AccountId] {
    assert(this.isV200)
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
   * A proposal preimage was removed and used (the deposit was returned).
   * \[proposal_hash, provider, deposit\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   * \[proposal_hash, provider, deposit\]
   */
  get asV1001(): [v1001.H256, v1001.AccountId20, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV1201(): {proposalHash: v1201.H256, provider: v1201.AccountId20, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV155(): [v155.Hash, v155.AccountId, v155.Balance] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV1605(): {proposalHash: v1605.H256, provider: v1605.AccountId20, deposit: bigint} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV200(): [v200.Hash, v200.AccountId, v200.Balance] {
    assert(this.isV200)
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
   * A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   * A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV1001(): [number, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV1201(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV155(): [v155.PropIndex, v155.Balance] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV1605(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV200(): [v200.PropIndex, v200.Balance] {
    assert(this.isV200)
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
   * A referendum has begun. \[ref_index, threshold\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   * A referendum has begun. \[ref_index, threshold\]
   */
  get asV1001(): [number, v1001.VoteThreshold] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has begun.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV1201(): {refIndex: number, threshold: v1201.VoteThreshold} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV155(): [v155.ReferendumIndex, v155.VoteThreshold] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A referendum has begun.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV1605(): {refIndex: number, threshold: v1605.VoteThreshold} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV200(): [v200.ReferendumIndex, v200.VoteThreshold] {
    assert(this.isV200)
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
   * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
   * depositors\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
  }

  /**
   * A public proposal has been tabled for referendum vote. \[proposal_index, deposit,
   * depositors\]
   */
  get asV1001(): [number, bigint, v1001.AccountId20[]] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV1201(): {proposalIndex: number, deposit: bigint, depositors: v1201.AccountId20[]} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV155(): [v155.PropIndex, v155.Balance, v155.AccountId[]] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV1605(): {proposalIndex: number, deposit: bigint, depositors: v1605.AccountId20[]} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV200(): [v200.PropIndex, v200.Balance, v200.AccountId[]] {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV1001(): v1001.H256 {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): v900.H256 {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get asV1001(): [v1001.H256, number, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1201(): {proposalHash: v1201.H256, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get asV900(): [v900.H256, number, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV1001(): v1001.H256 {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): v900.H256 {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV1001(): [v1001.H256, Result<null, v1001.DispatchError>] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: v1201.H256, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: v1300.H256, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: v1401.H256, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1605(): {proposalHash: v1605.H256, result: Result<null, v1605.DispatchError>} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [v900.H256, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV1001(): [v1001.AccountId20, number, v1001.H256, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalIndex: number, proposalHash: v1201.H256, threshold: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV900(): [v900.H160, number, v900.H256, number] {
    assert(this.isV900)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechCommitteeCollectiveVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechCommitteeCollective.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get asV1001(): [v1001.AccountId20, v1001.H256, boolean, number, number] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1201(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalHash: v1201.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV1201)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get isV900(): boolean {
    return this._chain.getEventHash('TechCommitteeCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get asV900(): [v900.H160, v900.H256, boolean, number, number] {
    assert(this.isV900)
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
   * Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
  }

  /**
   * Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV1001(): [number, bigint, v1001.AccountId20] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '6f95fbb8a91e310ee6d32f9a9933578e41f325c1506fac22a1f57925002cd904'
  }

  /**
   * Some funds have been allocated.
   */
  get asV1300(): {proposalIndex: number, award: bigint, account: v1300.AccountId20} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV155(): [v155.ProposalIndex, v155.Balance, v155.AccountId] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '6f95fbb8a91e310ee6d32f9a9933578e41f325c1506fac22a1f57925002cd904'
  }

  /**
   * Some funds have been allocated.
   */
  get asV1605(): {proposalIndex: number, award: bigint, account: v1605.AccountId20} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV200(): [v200.ProposalIndex, v200.Balance, v200.AccountId] {
    assert(this.isV200)
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
   * New proposal. \[proposal_index\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * New proposal. \[proposal_index\]
   */
  get asV1001(): number {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New proposal.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV1300(): {proposalIndex: number} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV155(): v155.ProposalIndex {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New proposal.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV1605(): {proposalIndex: number} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV200(): v200.ProposalIndex {
    assert(this.isV200)
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
   * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV1001(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   * A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV1001(): [number, bigint] {
    assert(this.isV1001)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV1300(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV1300(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV1300)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV155(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV155(): [v155.ProposalIndex, v155.Balance] {
    assert(this.isV155)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV1605(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV1605(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV1605)
    return this._chain.decodeEvent(this.event)
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV200(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV200(): [v200.ProposalIndex, v200.Balance] {
    assert(this.isV200)
    return this._chain.decodeEvent(this.event)
  }
}
