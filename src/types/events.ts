import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v15 from './v15'

export class CouncilApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'council.Approved')
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('council.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV15(): Uint8Array {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('council.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV15(): [Uint8Array, number, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, number, number] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('council.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV15(): Uint8Array {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('council.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV15(): [Uint8Array, Result<null, v15.DispatchError>] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Result<null, v15.DispatchError>] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('council.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV15(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, number, Uint8Array, number] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('council.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV15(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, boolean, number, number] {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyCancelledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Cancelled')
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV15(): number {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Executed')
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV15(): [number, boolean] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [number, boolean] {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyNotPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.NotPassed')
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV15(): number {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Passed')
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV15(): number {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV15(): [Uint8Array, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, number] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV15(): [Uint8Array, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, number] {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyPreimageNotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageNoted')
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV15(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, bigint] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === 'b60e8c24758d2dae6f1d75c508a3141a304f756181262747ee8d704bd555ac86'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV15(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV15(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, bigint] {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Proposed')
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV15(): [number, bigint] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [number, bigint] {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyStartedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Started')
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV15(): [number, v15.VoteThreshold] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [number, v15.VoteThreshold] {
    deprecateLatest()
    return this.asV15
  }
}

export class DemocracyTabledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Tabled')
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === '21f3d10122d183ae1df61d3456ae07c362a2e0cdffab1829f4febb4f7b53f6bd'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV15(): [number, bigint, Uint8Array[]] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [number, bigint, Uint8Array[]] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV15(): Uint8Array {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV15(): [Uint8Array, number, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, number, number] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV15(): Uint8Array {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV15(): [Uint8Array, Result<null, v15.DispatchError>] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Result<null, v15.DispatchError>] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Proposed') === '8d3dc2ef388c0264b2a1bd5e18788f415f4c08186c50dbbee2c60e61d81cb025'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV15(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, number, Uint8Array, number] {
    deprecateLatest()
    return this.asV15
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
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('technicalCommittee.Voted') === '5693223b18444daea47c5d959a8026ce5084d3e9c76fe5a2be5ef93f3526e0ac'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV15(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, boolean, number, number] {
    deprecateLatest()
    return this.asV15
  }
}

export class TipsNewTipEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.NewTip')
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('tips.NewTip') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A new tip suggestion has been opened. \[tip_hash\]
   */
  get asV15(): Uint8Array {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV15
  }
}

export class TipsTipClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipClosed')
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('tips.TipClosed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been closed. \[tip_hash, who, payout\]
   */
  get asV15(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, bigint] {
    deprecateLatest()
    return this.asV15
  }
}

export class TipsTipRetractedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipRetracted')
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('tips.TipRetracted') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A tip suggestion has been retracted. \[tip_hash\]
   */
  get asV15(): Uint8Array {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): Uint8Array {
    deprecateLatest()
    return this.asV15
  }
}

export class TipsTipSlashedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'tips.TipSlashed')
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get isV15(): boolean {
    return this.ctx._chain.getEventHash('tips.TipSlashed') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
   */
  get asV15(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV15)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV15
  }

  get asLatest(): [Uint8Array, Uint8Array, bigint] {
    deprecateLatest()
    return this.asV15
  }
}

export class TreasuryAwardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Awarded')
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV1(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '86708250ac506876b8d63d9c97b4ca0fa73f0199c633da6fb2a8956aaab8c743'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV1(): [number, bigint, Uint8Array] {
    assert(this.isV1)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): [number, bigint, Uint8Array] {
    deprecateLatest()
    return this.asV1
  }
}

export class TreasuryProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Proposed')
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV1(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV1(): number {
    assert(this.isV1)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): number {
    deprecateLatest()
    return this.asV1
  }
}

export class TreasuryRejectedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Rejected')
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV1(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV1(): [number, bigint] {
    assert(this.isV1)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): [number, bigint] {
    deprecateLatest()
    return this.asV1
  }
}
