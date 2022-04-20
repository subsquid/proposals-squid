import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1020 from './v1020'
import * as v2005 from './v2005'
import * as v9090 from './v9090'
import * as v9111 from './v9111'
import * as v9130 from './v9130'
import * as v9160 from './v9160'
import * as v9170 from './v9170'

export class BountiesBountyAwardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyAwarded')
  }

  /**
   *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  A bounty is awarded to a beneficiary. \[index, beneficiary\]
   */
  get asV2028(): [number, Uint8Array] {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get asV9130(): {index: number, beneficiary: v9130.AccountId32} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number, beneficiary: v9130.AccountId32} {
    deprecateLatest()
    return this.asV9130
  }
}

export class BountiesBountyBecameActiveEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyBecameActive')
  }

  /**
   *  A bounty proposal is funded and became active. \[index\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty proposal is funded and became active. \[index\]
   */
  get asV2028(): number {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get asV9130(): {index: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class BountiesBountyCanceledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyCanceled')
  }

  /**
   *  A bounty is cancelled. \[index\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty is cancelled. \[index\]
   */
  get asV2028(): number {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A bounty is cancelled.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty is cancelled.
   */
  get asV9130(): {index: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class BountiesBountyClaimedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyClaimed')
  }

  /**
   *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  A bounty is claimed by beneficiary. \[index, payout, beneficiary\]
   */
  get asV2028(): [number, bigint, Uint8Array] {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get asV9130(): {index: number, payout: bigint, beneficiary: v9130.AccountId32} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number, payout: bigint, beneficiary: v9130.AccountId32} {
    deprecateLatest()
    return this.asV9130
  }
}

export class BountiesBountyExtendedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyExtended')
  }

  /**
   *  A bounty expiry is extended. \[index\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty expiry is extended. \[index\]
   */
  get asV2028(): number {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A bounty expiry is extended.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty expiry is extended.
   */
  get asV9130(): {index: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class BountiesBountyProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyProposed')
  }

  /**
   *  New bounty proposal. \[index\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New bounty proposal. \[index\]
   */
  get asV2028(): number {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * New bounty proposal.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * New bounty proposal.
   */
  get asV9130(): {index: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class BountiesBountyRejectedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'bounties.BountyRejected')
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. \[index, bond\]
   */
  get asV2028(): [number, bigint] {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get asV9130(): {index: number, bond: bigint} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {index: number, bond: bigint} {
    deprecateLatest()
    return this.asV9130
  }
}

export class CouncilApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Approved')
  }

  /**
   *  A motion was approved by the required threshold.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   */
  get asV1020(): Uint8Array {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV9130(): {proposalHash: v9130.H256} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256} {
    deprecateLatest()
    return this.asV9130
  }
}

export class CouncilClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Closed')
  }

  /**
   *  A proposal was closed after its duration was up.
   */
  get isV1050(): boolean {
    return this.ctx._chain.getEventHash('council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed after its duration was up.
   */
  get asV1050(): [Uint8Array, number, number] {
    assert(this.isV1050)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV9130(): {proposalHash: v9130.H256, yes: number, no: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, yes: number, no: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class CouncilDisapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Disapproved')
  }

  /**
   *  A motion was not approved by the required threshold.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   */
  get asV1020(): Uint8Array {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV9130(): {proposalHash: v9130.H256} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256} {
    deprecateLatest()
    return this.asV9130
  }
}

export class CouncilExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Executed')
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === '3e84284a56e2d90e928c790a4788cf7ee237d5a6d76716a3e8584e3dcc0319a0'
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get asV1020(): [Uint8Array, boolean] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get isV2005(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get asV2005(): [Uint8Array, Result<null, v2005.DispatchError>] {
    assert(this.isV2005)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV9111(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV9111(): [v9111.H256, Result<null, v9111.DispatchError>] {
    assert(this.isV9111)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV9130(): {proposalHash: v9130.H256, result: Result<null, v9130.DispatchError>} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV9160(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV9160(): {proposalHash: v9160.H256, result: Result<null, v9160.DispatchError>} {
    assert(this.isV9160)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV9170(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV9170(): {proposalHash: v9170.H256, result: Result<null, v9170.DispatchError>} {
    assert(this.isV9170)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9170
  }

  get asLatest(): {proposalHash: v9170.H256, result: Result<null, v9170.DispatchError>} {
    deprecateLatest()
    return this.asV9170
  }
}

export class CouncilProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Proposed')
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   */
  get asV1020(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV9130(): {account: v9130.AccountId32, proposalIndex: number, proposalHash: v9130.H256, threshold: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {account: v9130.AccountId32, proposalIndex: number, proposalHash: v9130.H256, threshold: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class CouncilVotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Voted')
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1020(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV9130(): {account: v9130.AccountId32, proposalHash: v9130.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {account: v9130.AccountId32, proposalHash: v9130.H256, voted: boolean, yes: number, no: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyCancelledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Cancelled')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV1020(): number {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV9130(): {refIndex: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Executed')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  get asV1020(): [number, boolean] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '8d7c54bbac5b548a558504b413146fe5bff0b9275a2e7f4c831a148273ee173a'
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get asV9090(): [number, Result<null, v9090.DispatchError>] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV9111(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV9111(): [number, Result<null, v9111.DispatchError>] {
    assert(this.isV9111)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV9130(): {refIndex: number, result: Result<null, v9130.DispatchError>} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV9160(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV9160(): {refIndex: number, result: Result<null, v9160.DispatchError>} {
    assert(this.isV9160)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV9170(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV9170(): {refIndex: number, result: Result<null, v9170.DispatchError>} {
    assert(this.isV9170)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9170
  }

  get asLatest(): {refIndex: number, result: Result<null, v9170.DispatchError>} {
    deprecateLatest()
    return this.asV9170
  }
}

export class DemocracyNotPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.NotPassed')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV1020(): number {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV9130(): {refIndex: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Passed')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV1020(): number {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV9130(): {refIndex: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyPreimageInvalidEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageInvalid')
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   */
  get isV1022(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   */
  get asV1022(): [Uint8Array, number] {
    assert(this.isV1022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV9130(): {proposalHash: v9130.H256, refIndex: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, refIndex: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyPreimageMissingEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageMissing')
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   */
  get isV1022(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   */
  get asV1022(): [Uint8Array, number] {
    assert(this.isV1022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV9130(): {proposalHash: v9130.H256, refIndex: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, refIndex: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyPreimageNotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageNoted')
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken.
   */
  get isV1022(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken.
   */
  get asV1022(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV9130(): {proposalHash: v9130.H256, who: v9130.AccountId32, deposit: bigint} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, who: v9130.AccountId32, deposit: bigint} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyPreimageReapedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageReaped')
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper (last item).
   */
  get isV1022(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper (last item).
   */
  get asV1022(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV1022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV9130(): {proposalHash: v9130.H256, provider: v9130.AccountId32, deposit: bigint, reaper: v9130.AccountId32} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, provider: v9130.AccountId32, deposit: bigint, reaper: v9130.AccountId32} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyPreimageUsedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageUsed')
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   */
  get isV1022(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   */
  get asV1022(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV9130(): {proposalHash: v9130.H256, provider: v9130.AccountId32, deposit: bigint} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, provider: v9130.AccountId32, deposit: bigint} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Proposed')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  get asV1020(): [number, bigint] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV9130(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalIndex: number, deposit: bigint} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyStartedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Started')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  get asV1020(): [number, v1020.VoteThreshold] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A referendum has begun.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV9130(): {refIndex: number, threshold: v9130.VoteThreshold} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {refIndex: number, threshold: v9130.VoteThreshold} {
    deprecateLatest()
    return this.asV9130
  }
}

export class DemocracyTabledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Tabled')
  }

  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
  }

  get asV1020(): [number, bigint, Uint8Array[]] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV9130(): {proposalIndex: number, deposit: bigint, depositors: v9130.AccountId32[]} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalIndex: number, deposit: bigint, depositors: v9130.AccountId32[]} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TechnicalCommitteeApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Approved')
  }

  /**
   *  A motion was approved by the required threshold.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   */
  get asV1020(): Uint8Array {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV9130(): {proposalHash: v9130.H256} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TechnicalCommitteeClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Closed')
  }

  /**
   *  A proposal was closed after its duration was up.
   */
  get isV1050(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed after its duration was up.
   */
  get asV1050(): [Uint8Array, number, number] {
    assert(this.isV1050)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV9130(): {proposalHash: v9130.H256, yes: number, no: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256, yes: number, no: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TechnicalCommitteeDisapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Disapproved')
  }

  /**
   *  A motion was not approved by the required threshold.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   */
  get asV1020(): Uint8Array {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV9130(): {proposalHash: v9130.H256} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {proposalHash: v9130.H256} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TechnicalCommitteeExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Executed')
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === '3e84284a56e2d90e928c790a4788cf7ee237d5a6d76716a3e8584e3dcc0319a0'
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get asV1020(): [Uint8Array, boolean] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get isV2005(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; `bool` is true if returned without error.
   */
  get asV2005(): [Uint8Array, Result<null, v2005.DispatchError>] {
    assert(this.isV2005)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV9111(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV9111(): [v9111.H256, Result<null, v9111.DispatchError>] {
    assert(this.isV9111)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV9130(): {proposalHash: v9130.H256, result: Result<null, v9130.DispatchError>} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV9160(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV9160(): {proposalHash: v9160.H256, result: Result<null, v9160.DispatchError>} {
    assert(this.isV9160)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV9170(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV9170(): {proposalHash: v9170.H256, result: Result<null, v9170.DispatchError>} {
    assert(this.isV9170)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9170
  }

  get asLatest(): {proposalHash: v9170.H256, result: Result<null, v9170.DispatchError>} {
    deprecateLatest()
    return this.asV9170
  }
}

export class TechnicalCommitteeProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Proposed')
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   */
  get asV1020(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV9130(): {account: v9130.AccountId32, proposalIndex: number, proposalHash: v9130.H256, threshold: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {account: v9130.AccountId32, proposalIndex: number, proposalHash: v9130.H256, threshold: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TechnicalCommitteeVotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Voted')
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1020(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV9130(): {account: v9130.AccountId32, proposalHash: v9130.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {account: v9130.AccountId32, proposalHash: v9130.H256, voted: boolean, yes: number, no: number} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TipsNewTipEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.NewTip')
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get asV2028(): Uint8Array {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A new tip suggestion has been opened.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A new tip suggestion has been opened.
   */
  get asV9130(): {tipHash: v9130.H256} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {tipHash: v9130.H256} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TipsTipClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipClosed')
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get asV2028(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A tip suggestion has been closed.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
  }

  /**
   * A tip suggestion has been closed.
   */
  get asV9130(): {tipHash: v9130.H256, who: v9130.AccountId32, payout: bigint} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {tipHash: v9130.H256, who: v9130.AccountId32, payout: bigint} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TipsTipRetractedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipRetracted')
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get asV2028(): Uint8Array {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A tip suggestion has been retracted.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has been retracted.
   */
  get asV9130(): {tipHash: v9130.H256} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {tipHash: v9130.H256} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TipsTipSlashedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipSlashed')
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get isV2028(): boolean {
    return this.ctx._chain.getEventHash('tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get asV2028(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV2028)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A tip suggestion has been slashed.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
  }

  /**
   * A tip suggestion has been slashed.
   */
  get asV9130(): {tipHash: v9130.H256, finder: v9130.AccountId32, deposit: bigint} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {tipHash: v9130.H256, finder: v9130.AccountId32, deposit: bigint} {
    deprecateLatest()
    return this.asV9130
  }
}

export class TreasuryAwardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Awarded')
  }

  /**
   *  Some funds have been allocated.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  Some funds have been allocated.
   */
  get asV1020(): [number, bigint, Uint8Array] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV9160(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asV9160(): {proposalIndex: number, award: bigint, account: v9160.AccountId32} {
    assert(this.isV9160)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9160
  }

  get asLatest(): {proposalIndex: number, award: bigint, account: v9160.AccountId32} {
    deprecateLatest()
    return this.asV9160
  }
}

export class TreasuryBountyAwardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyAwarded')
  }

  /**
   *  A bounty is awarded to a beneficiary. [index, beneficiary]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyAwarded') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  A bounty is awarded to a beneficiary. [index, beneficiary]
   */
  get asV2025(): [number, Uint8Array] {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): [number, Uint8Array] {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryBountyBecameActiveEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyBecameActive')
  }

  /**
   *  A bounty proposal is funded and became active. [index]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyBecameActive') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty proposal is funded and became active. [index]
   */
  get asV2025(): number {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryBountyCanceledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyCanceled')
  }

  /**
   *  A bounty is cancelled. [index]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyCanceled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty is cancelled. [index]
   */
  get asV2025(): number {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryBountyClaimedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyClaimed')
  }

  /**
   *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyClaimed') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  A bounty is claimed by beneficiary. [index, payout, beneficiary]
   */
  get asV2025(): [number, bigint, Uint8Array] {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): [number, bigint, Uint8Array] {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryBountyExtendedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyExtended')
  }

  /**
   *  A bounty expiry is extended. [index]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyExtended') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A bounty expiry is extended. [index]
   */
  get asV2025(): number {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryBountyProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyProposed')
  }

  /**
   *  New bounty proposal. [index]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyProposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New bounty proposal. [index]
   */
  get asV2025(): number {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryBountyRejectedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.BountyRejected')
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. [index, bond]
   */
  get isV2025(): boolean {
    return this.ctx._chain.getEventHash('treasury.BountyRejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A bounty proposal was rejected; funds were slashed. [index, bond]
   */
  get asV2025(): [number, bigint] {
    assert(this.isV2025)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2025
  }

  get asLatest(): [number, bigint] {
    deprecateLatest()
    return this.asV2025
  }
}

export class TreasuryNewTipEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.NewTip')
  }

  /**
   *  A new tip suggestion has been opened.
   */
  get isV1038(): boolean {
    return this.ctx._chain.getEventHash('treasury.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new tip suggestion has been opened.
   */
  get asV1038(): Uint8Array {
    assert(this.isV1038)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1038
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV1038
  }
}

export class TreasuryProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Proposed')
  }

  /**
   *  New proposal.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal.
   */
  get asV1020(): number {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * New proposal.
   */
  get isV9160(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV9160(): {proposalIndex: number} {
    assert(this.isV9160)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9160
  }

  get asLatest(): {proposalIndex: number} {
    deprecateLatest()
    return this.asV9160
  }
}

export class TreasuryRejectedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Rejected')
  }

  /**
   *  A proposal was rejected; funds were slashed.
   */
  get isV1032(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed.
   */
  get asV1032(): [number, bigint] {
    assert(this.isV1032)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV9160(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV9160(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV9160)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9160
  }

  get asLatest(): {proposalIndex: number, slashed: bigint} {
    deprecateLatest()
    return this.asV9160
  }
}

export class TreasuryTipClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.TipClosed')
  }

  /**
   *  A tip suggestion has been closed.
   */
  get isV1038(): boolean {
    return this.ctx._chain.getEventHash('treasury.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been closed.
   */
  get asV1038(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1038)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1038
  }

  get asLatest(): [Uint8Array, Uint8Array, bigint] {
    deprecateLatest()
    return this.asV1038
  }
}

export class TreasuryTipRetractedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.TipRetracted')
  }

  /**
   *  A tip suggestion has been retracted.
   */
  get isV1038(): boolean {
    return this.ctx._chain.getEventHash('treasury.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has been retracted.
   */
  get asV1038(): Uint8Array {
    assert(this.isV1038)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1038
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV1038
  }
}
