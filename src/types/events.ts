import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v13 from './v13'
import * as v29 from './v29'

export class CouncilApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Approved')
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV13(): Uint8Array {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV29(): {proposalHash: v29.H256} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256} {
    deprecateLatest()
    return this.asV29
  }
}

export class CouncilClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Closed')
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV13(): [Uint8Array, number, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV29(): {proposalHash: v29.H256, yes: number, no: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, yes: number, no: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class CouncilDisapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Disapproved')
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV13(): Uint8Array {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV29(): {proposalHash: v29.H256} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256} {
    deprecateLatest()
    return this.asV29
  }
}

export class CouncilExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Executed')
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV13(): [Uint8Array, Result<null, v13.DispatchError>] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV29(): {proposalHash: v29.H256, result: Result<null, v29.DispatchError>} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, result: Result<null, v29.DispatchError>} {
    deprecateLatest()
    return this.asV29
  }
}

export class CouncilProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Proposed')
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV13(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV29(): {account: v29.AccountId32, proposalIndex: number, proposalHash: v29.H256, threshold: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {account: v29.AccountId32, proposalIndex: number, proposalHash: v29.H256, threshold: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class CouncilVotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Voted')
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV13(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV29(): {account: v29.AccountId32, proposalHash: v29.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {account: v29.AccountId32, proposalHash: v29.H256, voted: boolean, yes: number, no: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyCancelledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Cancelled')
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV13(): number {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV29(): {refIndex: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Executed')
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV13(): [number, boolean] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV29(): {refIndex: number, result: Result<null, v29.DispatchError>} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {refIndex: number, result: Result<null, v29.DispatchError>} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyNotPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.NotPassed')
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV13(): number {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV29(): {refIndex: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Passed')
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV13(): number {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV29(): {refIndex: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyPreimageInvalidEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageInvalid')
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV13(): [Uint8Array, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV29(): {proposalHash: v29.H256, refIndex: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, refIndex: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyPreimageMissingEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageMissing')
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV13(): [Uint8Array, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV29(): {proposalHash: v29.H256, refIndex: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, refIndex: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyPreimageNotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageNoted')
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV13(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV29(): {proposalHash: v29.H256, who: v29.AccountId32, deposit: bigint} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, who: v29.AccountId32, deposit: bigint} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyPreimageReapedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageReaped')
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV13(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV29(): {proposalHash: v29.H256, provider: v29.AccountId32, deposit: bigint, reaper: v29.AccountId32} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, provider: v29.AccountId32, deposit: bigint, reaper: v29.AccountId32} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyPreimageUsedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageUsed')
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV13(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV29(): {proposalHash: v29.H256, provider: v29.AccountId32, deposit: bigint} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, provider: v29.AccountId32, deposit: bigint} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Proposed')
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV13(): [number, bigint] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV29(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalIndex: number, deposit: bigint} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyStartedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Started')
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV13(): [number, v13.VoteThreshold] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A referendum has begun.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV29(): {refIndex: number, threshold: v29.VoteThreshold} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {refIndex: number, threshold: v29.VoteThreshold} {
    deprecateLatest()
    return this.asV29
  }
}

export class DemocracyTabledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Tabled')
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV13(): [number, bigint, Uint8Array[]] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV29(): {proposalIndex: number, deposit: bigint, depositors: v29.AccountId32[]} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalIndex: number, deposit: bigint, depositors: v29.AccountId32[]} {
    deprecateLatest()
    return this.asV29
  }
}

export class TechnicalCommitteeApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Approved')
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV13(): Uint8Array {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV29(): {proposalHash: v29.H256} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256} {
    deprecateLatest()
    return this.asV29
  }
}

export class TechnicalCommitteeClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Closed')
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV13(): [Uint8Array, number, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV29(): {proposalHash: v29.H256, yes: number, no: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, yes: number, no: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class TechnicalCommitteeDisapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Disapproved')
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV13(): Uint8Array {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV29(): {proposalHash: v29.H256} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256} {
    deprecateLatest()
    return this.asV29
  }
}

export class TechnicalCommitteeExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Executed')
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV13(): [Uint8Array, Result<null, v13.DispatchError>] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV29(): {proposalHash: v29.H256, result: Result<null, v29.DispatchError>} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalHash: v29.H256, result: Result<null, v29.DispatchError>} {
    deprecateLatest()
    return this.asV29
  }
}

export class TechnicalCommitteeProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Proposed')
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV13(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV29(): {account: v29.AccountId32, proposalIndex: number, proposalHash: v29.H256, threshold: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {account: v29.AccountId32, proposalIndex: number, proposalHash: v29.H256, threshold: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class TechnicalCommitteeVotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'technicalCommittee.Voted')
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV13(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV29(): {account: v29.AccountId32, proposalHash: v29.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {account: v29.AccountId32, proposalHash: v29.H256, voted: boolean, yes: number, no: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class TipsNewTipEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.NewTip')
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get asV13(): Uint8Array {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A new tip suggestion has been opened.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A new tip suggestion has been opened.
   */
  get asV29(): {tipHash: v29.H256} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {tipHash: v29.H256} {
    deprecateLatest()
    return this.asV29
  }
}

export class TipsTipClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipClosed')
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get asV13(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A tip suggestion has been closed.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
  }

  /**
   * A tip suggestion has been closed.
   */
  get asV29(): {tipHash: v29.H256, who: v29.AccountId32, payout: bigint} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {tipHash: v29.H256, who: v29.AccountId32, payout: bigint} {
    deprecateLatest()
    return this.asV29
  }
}

export class TipsTipRetractedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipRetracted')
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get asV13(): Uint8Array {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A tip suggestion has been retracted.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has been retracted.
   */
  get asV29(): {tipHash: v29.H256} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {tipHash: v29.H256} {
    deprecateLatest()
    return this.asV29
  }
}

export class TipsTipSlashedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipSlashed')
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get asV13(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A tip suggestion has been slashed.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
  }

  /**
   * A tip suggestion has been slashed.
   */
  get asV29(): {tipHash: v29.H256, finder: v29.AccountId32, deposit: bigint} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {tipHash: v29.H256, finder: v29.AccountId32, deposit: bigint} {
    deprecateLatest()
    return this.asV29
  }
}

export class TreasuryAwardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Awarded')
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV13(): [number, bigint, Uint8Array] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asV29(): {proposalIndex: number, award: bigint, account: v29.AccountId32} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalIndex: number, award: bigint, account: v29.AccountId32} {
    deprecateLatest()
    return this.asV29
  }
}

export class TreasuryProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Proposed')
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV13(): number {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * New proposal.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV29(): {proposalIndex: number} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalIndex: number} {
    deprecateLatest()
    return this.asV29
  }
}

export class TreasuryRejectedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Rejected')
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV13(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV13(): [number, bigint] {
    assert(this.isV13)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV29(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV29(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV29)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV29
  }

  get asLatest(): {proposalIndex: number, slashed: bigint} {
    deprecateLatest()
    return this.asV29
  }
}
