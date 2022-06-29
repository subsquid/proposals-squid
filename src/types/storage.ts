import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v0 from './v0'
import * as v5 from './v5'
import * as v6 from './v6'
import * as v7 from './v7'
import * as v9 from './v9'
import * as v10 from './v10'
import * as v11 from './v11'
import * as v13 from './v13'
import * as v14 from './v14'
import * as v15 from './v15'
import * as v17 from './v17'
import * as v18 from './v18'
import * as v23 from './v23'
import * as v24 from './v24'
import * as v25 from './v25'
import * as v26 from './v26'
import * as v28 from './v28'
import * as v29 from './v29'
import * as v30 from './v30'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9110 from './v9110'
import * as v9140 from './v9140'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9220 from './v9220'
import * as v9230 from './v9230'

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  async getAsV0(key: v0.AccountId): Promise<v0.AccountData> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV0(keys: v0.AccountId[]): Promise<(v0.AccountData)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV0(): Promise<v0.Balance> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BountiesBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounties that have been made.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV9110(key: number): Promise<v9110.Bounty | undefined> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV9110(keys: number[]): Promise<(v9110.Bounty | undefined)[]> {
    assert(this.isV9110)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class CouncilMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV9110(): Promise<v9110.AccountId32[]> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV9110(): Promise<number> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.Call | undefined> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9110(keys: v9110.H256[]): Promise<(v9110.Call | undefined)[]> {
    assert(this.isV9110)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9140() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '46630105cac13d25403727b2ba5a9f33dd1995e1c7551f8890b7d09074b2e29e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9140(key: v9140.H256): Promise<v9140.Call | undefined> {
    assert(this.isV9140)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9140(keys: v9140.H256[]): Promise<(v9140.Call | undefined)[]> {
    assert(this.isV9140)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'cf07c81d23704ed462b6bfe0b42583c05b23158e6683c37e8d868a238aaa2a66'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: v9170.H256): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: v9170.H256[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'f97a19253893953ac9957fd5cc3c6eb738010d8ad3fa671e3874d151c99c6297'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: v9180.H256): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: v9180.H256[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '4f1bb8ab04112d992f0d47816b692572d385241d80cdbd7d5f07a66c65036f3b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: v9190.H256): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: v9190.H256[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '80f4da00d906dc4fa47ad0b8c6e903103f231cec48bf93ba8e721b558299fcca'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: v9220.H256): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: v9220.H256[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'bde9173c84a0b1d6a79d0d321515c35c8835437f3a0e65d119dfd09ccb13c6f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9230(key: v9230.H256): Promise<v9230.Call | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9230(keys: v9230.H256[]): Promise<(v9230.Call | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
  }
}

export class DemocracyPreimagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV0(key: v0.Hash): Promise<v0.PreimageStatus | undefined> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV0(keys: v0.Hash[]): Promise<(v0.PreimageStatus | undefined)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.PreimageStatus | undefined> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV9110(keys: v9110.H256[]): Promise<(v9110.PreimageStatus | undefined)[]> {
    assert(this.isV9110)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyPublicPropCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV0(): Promise<v0.PropIndex> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV0(): Promise<[v0.PropIndex, v0.Hash, v0.AccountId][]> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV0(key: v0.ReferendumIndex): Promise<v0.ReferendumInfo | undefined> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV0(keys: v0.ReferendumIndex[]): Promise<(v0.ReferendumInfo | undefined)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV9110(key: number): Promise<v9110.ReferendumInfo | undefined> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV9110(keys: number[]): Promise<(v9110.ReferendumInfo | undefined)[]> {
    assert(this.isV9110)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class Instance1CollectiveMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV0(): Promise<v0.AccountId[]> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') != null
  }
}

export class Instance1CollectiveProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV0(): Promise<number> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') != null
  }
}

export class Instance1CollectiveProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '4eee2ab8a81eacc38d656284879b9440184a60b8850a6c9b916714fe8af9ccfb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV0(key: v0.Hash): Promise<v0.Proposal | undefined> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV0(keys: v0.Hash[]): Promise<(v0.Proposal | undefined)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV10() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ac7bf477eedf27326e7fec8dc372980842b991dd06c0b7d47263f2750aae1d4b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV10(key: v10.Hash): Promise<v10.Proposal | undefined> {
    assert(this.isV10)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV10(keys: v10.Hash[]): Promise<(v10.Proposal | undefined)[]> {
    assert(this.isV10)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV11() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '18b87d2b7b25e7fc34a59770b3150a08debdae1a7c6386d28d70881f0c086bb9'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV11(key: v11.Hash): Promise<v11.Proposal | undefined> {
    assert(this.isV11)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV11(keys: v11.Hash[]): Promise<(v11.Proposal | undefined)[]> {
    assert(this.isV11)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV13() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9ab4dcd2a087db075a84bcb07e9754345f86f096c16cfcdc18afb8a4edd3b0f1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV13(key: v13.Hash): Promise<v13.Proposal | undefined> {
    assert(this.isV13)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV13(keys: v13.Hash[]): Promise<(v13.Proposal | undefined)[]> {
    assert(this.isV13)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV14() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f5916654b4ec0cb5f07cdeb1d98c7b811a714c7108e50e3952bd20a138550cb4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV14(key: v14.Hash): Promise<v14.Proposal | undefined> {
    assert(this.isV14)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV14(keys: v14.Hash[]): Promise<(v14.Proposal | undefined)[]> {
    assert(this.isV14)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV15() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '3c0bbc9211a4b508b59ee4f5aa9e676ae74f55fbe7219f56b0130869ae7385a0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV15(key: v15.Hash): Promise<v15.Proposal | undefined> {
    assert(this.isV15)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV15(keys: v15.Hash[]): Promise<(v15.Proposal | undefined)[]> {
    assert(this.isV15)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV17() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '7b3eef5af813c84f4803df042d60e4085f8af6cf4245dbe803af27ec812ed6fe'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV17(key: v17.Hash): Promise<v17.Proposal | undefined> {
    assert(this.isV17)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV17(keys: v17.Hash[]): Promise<(v17.Proposal | undefined)[]> {
    assert(this.isV17)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV18() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8703ad8122a71cb72f6ee6c324ae62ec2693c2def1058c705f27dfcf7cd2514a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV18(key: v18.Hash): Promise<v18.Proposal | undefined> {
    assert(this.isV18)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV18(keys: v18.Hash[]): Promise<(v18.Proposal | undefined)[]> {
    assert(this.isV18)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV23() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f9e433d21aa5d81da4171a87bc952bf65065d04b8d1cd20e7723b7453e4b3d6f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV23(key: v23.Hash): Promise<v23.Proposal | undefined> {
    assert(this.isV23)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV23(keys: v23.Hash[]): Promise<(v23.Proposal | undefined)[]> {
    assert(this.isV23)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV24() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '77f0ca7ee3e60a31f9e5f8d5fb7ec5cdc72f5357e26c3d55fe884aec60cc7ee2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV24(key: v24.Hash): Promise<v24.Proposal | undefined> {
    assert(this.isV24)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV24(keys: v24.Hash[]): Promise<(v24.Proposal | undefined)[]> {
    assert(this.isV24)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV25() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5854d23dc50ce2884a3ca63757e8f214260f0c37e208282e18ac4ba7b1152d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV25(key: v25.Hash): Promise<v25.Proposal | undefined> {
    assert(this.isV25)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV25(keys: v25.Hash[]): Promise<(v25.Proposal | undefined)[]> {
    assert(this.isV25)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV26() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8a34c96a87244da07e57787a940ba03659723c5844b048793efc9db21d872b4d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV26(key: v26.Hash): Promise<v26.Proposal | undefined> {
    assert(this.isV26)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV26(keys: v26.Hash[]): Promise<(v26.Proposal | undefined)[]> {
    assert(this.isV26)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV28() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'd862a682fc4da1eee86ad1e491bf819e414c985a2f70b586f9f7ac7ea357742a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV28(key: v28.Hash): Promise<v28.Proposal | undefined> {
    assert(this.isV28)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV28(keys: v28.Hash[]): Promise<(v28.Proposal | undefined)[]> {
    assert(this.isV28)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV29() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '2e38012ace8bb91a1d4c531488d33af19c81fbb1d771d26419475d3cda74dd17'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV29(key: v29.Hash): Promise<v29.Proposal | undefined> {
    assert(this.isV29)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV29(keys: v29.Hash[]): Promise<(v29.Proposal | undefined)[]> {
    assert(this.isV29)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV30() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8b6802378a21fc585cdfe2345c8d74ee7b8c5425854af5f9e221bab1cfd5b2a4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV30(key: v30.Hash): Promise<v30.Proposal | undefined> {
    assert(this.isV30)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV30(keys: v30.Hash[]): Promise<(v30.Proposal | undefined)[]> {
    assert(this.isV30)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV5() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '81254d13fa4dbd4e5b9a7bca2858d8d55376506d78b687d10af31971c418b7a1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV5(key: v5.Hash): Promise<v5.Proposal | undefined> {
    assert(this.isV5)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV5(keys: v5.Hash[]): Promise<(v5.Proposal | undefined)[]> {
    assert(this.isV5)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV6() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '607d49b96af7c3993eb24b2dd450744b1181eba14569fccdd17f484120c339a2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV6(key: v6.Hash): Promise<v6.Proposal | undefined> {
    assert(this.isV6)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV6(keys: v6.Hash[]): Promise<(v6.Proposal | undefined)[]> {
    assert(this.isV6)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV7() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'b0696de307869ba3350bbb6c9885534b572ca2d6a9d02fb702300571d47fca9f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV7(key: v7.Hash): Promise<v7.Proposal | undefined> {
    assert(this.isV7)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV7(keys: v7.Hash[]): Promise<(v7.Proposal | undefined)[]> {
    assert(this.isV7)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '310ed8dc2d046a7c421453420cf63d6279566046cf647b18d48e115fa7b87265'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9(key: v9.Hash): Promise<v9.Proposal | undefined> {
    assert(this.isV9)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9(keys: v9.Hash[]): Promise<(v9.Proposal | undefined)[]> {
    assert(this.isV9)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '55eed3615c53a5b80bc00c7ea60c465c9d7a77c8bc528b5dfbc308a24a2fdbe0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: v9050.Hash): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: v9050.Hash[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'cae4ef0d7e499483043059936d3e674e960b94a9e66ce8299fd5d27f03691ecf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: v9080.Hash): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: v9080.Hash[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '4e4818cf9eee67ec60567879ec8aeb7eb5c417f2e47b284c327e8cfdb3f82c1b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: v9090.Hash): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: v9090.Hash[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'dc3aa6c501fb2c10f6e308b7b27be4def42773b2aaf5f63a9c1f50c58593f87c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: v9100.Hash): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: v9100.Hash[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') != null
  }
}

export class Instance2CollectiveProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '4eee2ab8a81eacc38d656284879b9440184a60b8850a6c9b916714fe8af9ccfb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV0(key: v0.Hash): Promise<v0.Proposal | undefined> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV0(keys: v0.Hash[]): Promise<(v0.Proposal | undefined)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV10() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ac7bf477eedf27326e7fec8dc372980842b991dd06c0b7d47263f2750aae1d4b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV10(key: v10.Hash): Promise<v10.Proposal | undefined> {
    assert(this.isV10)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV10(keys: v10.Hash[]): Promise<(v10.Proposal | undefined)[]> {
    assert(this.isV10)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV11() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '18b87d2b7b25e7fc34a59770b3150a08debdae1a7c6386d28d70881f0c086bb9'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV11(key: v11.Hash): Promise<v11.Proposal | undefined> {
    assert(this.isV11)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV11(keys: v11.Hash[]): Promise<(v11.Proposal | undefined)[]> {
    assert(this.isV11)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV13() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9ab4dcd2a087db075a84bcb07e9754345f86f096c16cfcdc18afb8a4edd3b0f1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV13(key: v13.Hash): Promise<v13.Proposal | undefined> {
    assert(this.isV13)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV13(keys: v13.Hash[]): Promise<(v13.Proposal | undefined)[]> {
    assert(this.isV13)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV14() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f5916654b4ec0cb5f07cdeb1d98c7b811a714c7108e50e3952bd20a138550cb4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV14(key: v14.Hash): Promise<v14.Proposal | undefined> {
    assert(this.isV14)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV14(keys: v14.Hash[]): Promise<(v14.Proposal | undefined)[]> {
    assert(this.isV14)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV15() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '3c0bbc9211a4b508b59ee4f5aa9e676ae74f55fbe7219f56b0130869ae7385a0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV15(key: v15.Hash): Promise<v15.Proposal | undefined> {
    assert(this.isV15)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV15(keys: v15.Hash[]): Promise<(v15.Proposal | undefined)[]> {
    assert(this.isV15)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV17() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '7b3eef5af813c84f4803df042d60e4085f8af6cf4245dbe803af27ec812ed6fe'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV17(key: v17.Hash): Promise<v17.Proposal | undefined> {
    assert(this.isV17)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV17(keys: v17.Hash[]): Promise<(v17.Proposal | undefined)[]> {
    assert(this.isV17)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV18() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8703ad8122a71cb72f6ee6c324ae62ec2693c2def1058c705f27dfcf7cd2514a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV18(key: v18.Hash): Promise<v18.Proposal | undefined> {
    assert(this.isV18)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV18(keys: v18.Hash[]): Promise<(v18.Proposal | undefined)[]> {
    assert(this.isV18)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV23() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f9e433d21aa5d81da4171a87bc952bf65065d04b8d1cd20e7723b7453e4b3d6f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV23(key: v23.Hash): Promise<v23.Proposal | undefined> {
    assert(this.isV23)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV23(keys: v23.Hash[]): Promise<(v23.Proposal | undefined)[]> {
    assert(this.isV23)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV24() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '77f0ca7ee3e60a31f9e5f8d5fb7ec5cdc72f5357e26c3d55fe884aec60cc7ee2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV24(key: v24.Hash): Promise<v24.Proposal | undefined> {
    assert(this.isV24)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV24(keys: v24.Hash[]): Promise<(v24.Proposal | undefined)[]> {
    assert(this.isV24)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV25() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5854d23dc50ce2884a3ca63757e8f214260f0c37e208282e18ac4ba7b1152d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV25(key: v25.Hash): Promise<v25.Proposal | undefined> {
    assert(this.isV25)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV25(keys: v25.Hash[]): Promise<(v25.Proposal | undefined)[]> {
    assert(this.isV25)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV26() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8a34c96a87244da07e57787a940ba03659723c5844b048793efc9db21d872b4d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV26(key: v26.Hash): Promise<v26.Proposal | undefined> {
    assert(this.isV26)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV26(keys: v26.Hash[]): Promise<(v26.Proposal | undefined)[]> {
    assert(this.isV26)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV28() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'd862a682fc4da1eee86ad1e491bf819e414c985a2f70b586f9f7ac7ea357742a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV28(key: v28.Hash): Promise<v28.Proposal | undefined> {
    assert(this.isV28)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV28(keys: v28.Hash[]): Promise<(v28.Proposal | undefined)[]> {
    assert(this.isV28)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV29() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '2e38012ace8bb91a1d4c531488d33af19c81fbb1d771d26419475d3cda74dd17'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV29(key: v29.Hash): Promise<v29.Proposal | undefined> {
    assert(this.isV29)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV29(keys: v29.Hash[]): Promise<(v29.Proposal | undefined)[]> {
    assert(this.isV29)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV30() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8b6802378a21fc585cdfe2345c8d74ee7b8c5425854af5f9e221bab1cfd5b2a4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV30(key: v30.Hash): Promise<v30.Proposal | undefined> {
    assert(this.isV30)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV30(keys: v30.Hash[]): Promise<(v30.Proposal | undefined)[]> {
    assert(this.isV30)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV5() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '81254d13fa4dbd4e5b9a7bca2858d8d55376506d78b687d10af31971c418b7a1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV5(key: v5.Hash): Promise<v5.Proposal | undefined> {
    assert(this.isV5)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV5(keys: v5.Hash[]): Promise<(v5.Proposal | undefined)[]> {
    assert(this.isV5)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV6() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '607d49b96af7c3993eb24b2dd450744b1181eba14569fccdd17f484120c339a2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV6(key: v6.Hash): Promise<v6.Proposal | undefined> {
    assert(this.isV6)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV6(keys: v6.Hash[]): Promise<(v6.Proposal | undefined)[]> {
    assert(this.isV6)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV7() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'b0696de307869ba3350bbb6c9885534b572ca2d6a9d02fb702300571d47fca9f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV7(key: v7.Hash): Promise<v7.Proposal | undefined> {
    assert(this.isV7)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV7(keys: v7.Hash[]): Promise<(v7.Proposal | undefined)[]> {
    assert(this.isV7)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '310ed8dc2d046a7c421453420cf63d6279566046cf647b18d48e115fa7b87265'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9(key: v9.Hash): Promise<v9.Proposal | undefined> {
    assert(this.isV9)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9(keys: v9.Hash[]): Promise<(v9.Proposal | undefined)[]> {
    assert(this.isV9)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '55eed3615c53a5b80bc00c7ea60c465c9d7a77c8bc528b5dfbc308a24a2fdbe0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: v9050.Hash): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: v9050.Hash[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'cae4ef0d7e499483043059936d3e674e960b94a9e66ce8299fd5d27f03691ecf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: v9080.Hash): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: v9080.Hash[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '4e4818cf9eee67ec60567879ec8aeb7eb5c417f2e47b284c327e8cfdb3f82c1b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: v9090.Hash): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: v9090.Hash[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'dc3aa6c501fb2c10f6e308b7b27be4def42773b2aaf5f63a9c1f50c58593f87c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: v9100.Hash): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: v9100.Hash[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV0(key: v0.AccountId): Promise<v0.AccountInfo> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV0(keys: v0.AccountId[]): Promise<(v0.AccountInfo)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV25() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV25(key: v25.AccountId): Promise<v25.AccountInfo> {
    assert(this.isV25)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV25(keys: v25.AccountId[]): Promise<(v25.AccountInfo)[]> {
    assert(this.isV25)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV28() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV28(key: v28.AccountId): Promise<v28.AccountInfo> {
    assert(this.isV28)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV28(keys: v28.AccountId[]): Promise<(v28.AccountInfo)[]> {
    assert(this.isV28)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV30() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV30(key: v30.AccountId): Promise<v30.AccountInfo> {
    assert(this.isV30)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV30(keys: v30.AccountId[]): Promise<(v30.AccountInfo)[]> {
    assert(this.isV30)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV5() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV5(key: v5.AccountId): Promise<v5.AccountInfo> {
    assert(this.isV5)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV5(keys: v5.AccountId[]): Promise<(v5.AccountInfo)[]> {
    assert(this.isV5)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV9050(key: v9050.AccountId): Promise<v9050.AccountInfo> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV9050(keys: v9050.AccountId[]): Promise<(v9050.AccountInfo)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.Call | undefined> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9110(keys: v9110.H256[]): Promise<(v9110.Call | undefined)[]> {
    assert(this.isV9110)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9140() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '46630105cac13d25403727b2ba5a9f33dd1995e1c7551f8890b7d09074b2e29e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9140(key: v9140.H256): Promise<v9140.Call | undefined> {
    assert(this.isV9140)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9140(keys: v9140.H256[]): Promise<(v9140.Call | undefined)[]> {
    assert(this.isV9140)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'cf07c81d23704ed462b6bfe0b42583c05b23158e6683c37e8d868a238aaa2a66'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: v9170.H256): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: v9170.H256[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f97a19253893953ac9957fd5cc3c6eb738010d8ad3fa671e3874d151c99c6297'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: v9180.H256): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: v9180.H256[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '4f1bb8ab04112d992f0d47816b692572d385241d80cdbd7d5f07a66c65036f3b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: v9190.H256): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: v9190.H256[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '80f4da00d906dc4fa47ad0b8c6e903103f231cec48bf93ba8e721b558299fcca'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: v9220.H256): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: v9220.H256[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9230() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'bde9173c84a0b1d6a79d0d321515c35c8835437f3a0e65d119dfd09ccb13c6f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9230(key: v9230.H256): Promise<v9230.Call | undefined> {
    assert(this.isV9230)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9230(keys: v9230.H256[]): Promise<(v9230.Call | undefined)[]> {
    assert(this.isV9230)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TipsTipsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV9110() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.OpenTip | undefined> {
    assert(this.isV9110)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV9110(keys: v9110.H256[]): Promise<(v9110.OpenTip | undefined)[]> {
    assert(this.isV9110)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TreasuryBountiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Bounties that have been made.
   */
  get isV25() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV25(key: v25.BountyIndex): Promise<v25.Bounty | undefined> {
    assert(this.isV25)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Bounties', key)
  }

  async getManyAsV25(keys: v25.BountyIndex[]): Promise<(v25.Bounty | undefined)[]> {
    assert(this.isV25)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Bounties', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') != null
  }
}

export class TreasuryProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals that have been made.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV0(key: v0.ProposalIndex): Promise<v0.TreasuryProposal | undefined> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV0(keys: v0.ProposalIndex[]): Promise<(v0.TreasuryProposal | undefined)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}

export class TreasuryTipsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV0() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV0(key: v0.Hash): Promise<v0.OpenTip | undefined> {
    assert(this.isV0)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV0(keys: v0.Hash[]): Promise<(v0.OpenTip | undefined)[]> {
    assert(this.isV0)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV13() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV13(key: v13.Hash): Promise<v13.OpenTip | undefined> {
    assert(this.isV13)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV13(keys: v13.Hash[]): Promise<(v13.OpenTip | undefined)[]> {
    assert(this.isV13)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV5() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV5(key: v5.Hash): Promise<v5.OpenTip | undefined> {
    assert(this.isV5)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV5(keys: v5.Hash[]): Promise<(v5.OpenTip | undefined)[]> {
    assert(this.isV5)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV9050() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV9050(key: v9050.Hash): Promise<v9050.OpenTip | undefined> {
    assert(this.isV9050)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV9050(keys: v9050.Hash[]): Promise<(v9050.OpenTip | undefined)[]> {
    assert(this.isV9050)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
