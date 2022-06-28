import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1 from './v1'
import * as v803 from './v803'
import * as v804 from './v804'
import * as v805 from './v805'
import * as v900 from './v900'
import * as v901 from './v901'
import * as v902 from './v902'
import * as v906 from './v906'
import * as v908 from './v908'
import * as v910 from './v910'
import * as v912 from './v912'
import * as v914 from './v914'
import * as v915 from './v915'
import * as v916 from './v916'
import * as v918 from './v918'
import * as v920 from './v920'
import * as v922 from './v922'
import * as v923 from './v923'
import * as v926 from './v926'
import * as v927 from './v927'
import * as v930 from './v930'
import * as v932 from './v932'
import * as v940 from './v940'
import * as v942 from './v942'
import * as v944 from './v944'

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
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV1(key: v1.AccountId): Promise<v1.AccountData> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV1(keys: v1.AccountId[]): Promise<(v1.AccountData)[]> {
    assert(this.isV1)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1(): Promise<v1.Balance> {
    assert(this.isV1)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV906(key: number): Promise<v906.Bounty | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV906(keys: number[]): Promise<(v906.Bounty | undefined)[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV906(): Promise<v906.AccountId32[]> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV906(): Promise<number> {
    assert(this.isV906)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '41895466e484ffa23b7dce58e3c36fada1543bdff8c033fab32033d59628c150'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV906(key: v906.H256): Promise<v906.Call | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV906(keys: v906.H256[]): Promise<(v906.Call | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '690a5633a50cd13e473e9dcc5c576014cfb055286f7c0054a91c7f29fefd7b90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV908(key: v908.H256): Promise<v908.Call | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV908(keys: v908.H256[]): Promise<(v908.Call | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1ecec68300532c998b4551cf99ce181f6826d6f6c8e38901df3c23db0280297d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV910(key: v910.H256): Promise<v910.Call | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV910(keys: v910.H256[]): Promise<(v910.Call | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV912() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'dc88f3110f06d2704c3da45bbdbf60387114d13f45ad9ffdd3db2d14565383f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV912(key: v912.H256): Promise<v912.Call | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV912(keys: v912.H256[]): Promise<(v912.Call | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV914() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7ced8245fec2975a273e6f351a8d598f3af18165feac4c1f10236009606f45f3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV914(key: v914.H256): Promise<v914.Call | undefined> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV914(keys: v914.H256[]): Promise<(v914.Call | undefined)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1e918700e1dd96a255f0d980be19c7c28355c65562bb46da88e77b83116ba8d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV915(key: v915.H256): Promise<v915.Call | undefined> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV915(keys: v915.H256[]): Promise<(v915.Call | undefined)[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '8c2cc4aa9d2b11c8a02176a53ac560695d1215ce845eb72055640f11fa25fb24'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV916(key: v916.H256): Promise<v916.Call | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV916(keys: v916.H256[]): Promise<(v916.Call | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV918() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '91d446b09651888e05603553cd1881d423771f5c4bbc24936bf852dce0e0ac30'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV918(key: v918.H256): Promise<v918.Call | undefined> {
    assert(this.isV918)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV918(keys: v918.H256[]): Promise<(v918.Call | undefined)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '2359beb434f4906be1cf8a6b6d819b843bd3e32e4f7e84d9ffafa67c1f8cd01f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV920(key: v920.H256): Promise<v920.Call | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV920(keys: v920.H256[]): Promise<(v920.Call | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV922() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'f2c90c5e28a249a8a63e87e07a144d212939b2128843259f2ecc3ae9ceb56278'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV922(key: v922.H256): Promise<v922.Call | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV922(keys: v922.H256[]): Promise<(v922.Call | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '36778b6486e7905fb44c224ed7a1ebe484bf90ff84bc88243587097c4c81e823'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV923(key: v923.H256): Promise<v923.Call | undefined> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV923(keys: v923.H256[]): Promise<(v923.Call | undefined)[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '72a42d145d4f0bb245e27a4f74ddc798556dda2ac6d14e986193e028d5a5cbba'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV926(key: v926.H256): Promise<v926.Call | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV926(keys: v926.H256[]): Promise<(v926.Call | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '670120d70275c84a31001af3920abe6dd849af83fa2dbe769f7d2f520f26116f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV927(key: v927.H256): Promise<v927.Call | undefined> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV927(keys: v927.H256[]): Promise<(v927.Call | undefined)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'fb352241aae80ef757c31ef21203b9293151b4270b6be049b51c725daa71abdc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV930(key: v930.H256): Promise<v930.Call | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV930(keys: v930.H256[]): Promise<(v930.Call | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '25fe55775902f2abb191f8b9c1674426625631228fcd7e4eced19ea48cb2871c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV932(key: v932.H256): Promise<v932.Call | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV932(keys: v932.H256[]): Promise<(v932.Call | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'df6253374412980fc5896c54587a1d449e717e4ed60cbe2f8f49f09868d23369'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV940(key: v940.H256): Promise<v940.Call | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV940(keys: v940.H256[]): Promise<(v940.Call | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV942() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'acb12cb1ab21af37b1c2d950487dea4fd812b945be09e101b1cce41fb26cfc1d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV942(key: v942.H256): Promise<v942.Call | undefined> {
    assert(this.isV942)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV942(keys: v942.H256[]): Promise<(v942.Call | undefined)[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7ad9cb5b33ba3ae7bd221f747303eb870e60069f1b54692a54272943a6b1000e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV944(key: v944.H256): Promise<v944.Call | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV944(keys: v944.H256[]): Promise<(v944.Call | undefined)[]> {
    assert(this.isV944)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV803(key: v803.Hash): Promise<v803.PreimageStatus | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV803(keys: v803.Hash[]): Promise<(v803.PreimageStatus | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV906(key: v906.H256): Promise<v906.PreimageStatus | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV906(keys: v906.H256[]): Promise<(v906.PreimageStatus | undefined)[]> {
    assert(this.isV906)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV803(): Promise<v803.PropIndex> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV803(): Promise<[v803.PropIndex, v803.Hash, v803.AccountId][]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV803(key: v803.ReferendumIndex): Promise<v803.ReferendumInfo | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV803(keys: v803.ReferendumIndex[]): Promise<(v803.ReferendumInfo | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV906() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV906(key: number): Promise<v906.ReferendumInfo | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV906(keys: number[]): Promise<(v906.ReferendumInfo | undefined)[]> {
    assert(this.isV906)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV803(): Promise<v803.AccountId[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ff3f2ad65672f17d3bbc15457e62e22594f0b89856bb4e3159d7b9c9c2d7b5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV803(key: v803.Hash): Promise<v803.Proposal | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV803(keys: v803.Hash[]): Promise<(v803.Proposal | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f469074e9c9227a3e912f03dcac5c4ed936205a77048a65c6e2a9dc835688e27'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV804(key: v804.Hash): Promise<v804.Proposal | undefined> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV804(keys: v804.Hash[]): Promise<(v804.Proposal | undefined)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV805() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ce8853364959a90ac79e6f73e0a72998a069c8fbb65c307d892d8fcdbcadfa3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV805(key: v805.Hash): Promise<v805.Proposal | undefined> {
    assert(this.isV805)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV805(keys: v805.Hash[]): Promise<(v805.Proposal | undefined)[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '16b177961a30ecf818ebad48a3d0a06b91074a16dec95709286a5ebfcaac2fd3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: v900.Hash): Promise<v900.Proposal | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV900(keys: v900.Hash[]): Promise<(v900.Proposal | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV901() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a1795356664688824aad7064b1edcc104c2d0fdfb18b9f5631fc180ad884c439'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV901(key: v901.Hash): Promise<v901.Proposal | undefined> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV901(keys: v901.Hash[]): Promise<(v901.Proposal | undefined)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f097e7fa22ba32e212600e411788d686ba0dcdf264e5ddbb1a5c0ce950919e77'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV902(key: v902.Hash): Promise<v902.Proposal | undefined> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV902(keys: v902.Hash[]): Promise<(v902.Proposal | undefined)[]> {
    assert(this.isV902)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ff3f2ad65672f17d3bbc15457e62e22594f0b89856bb4e3159d7b9c9c2d7b5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV803(key: v803.Hash): Promise<v803.Proposal | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV803(keys: v803.Hash[]): Promise<(v803.Proposal | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV804() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f469074e9c9227a3e912f03dcac5c4ed936205a77048a65c6e2a9dc835688e27'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV804(key: v804.Hash): Promise<v804.Proposal | undefined> {
    assert(this.isV804)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV804(keys: v804.Hash[]): Promise<(v804.Proposal | undefined)[]> {
    assert(this.isV804)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV805() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ce8853364959a90ac79e6f73e0a72998a069c8fbb65c307d892d8fcdbcadfa3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV805(key: v805.Hash): Promise<v805.Proposal | undefined> {
    assert(this.isV805)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV805(keys: v805.Hash[]): Promise<(v805.Proposal | undefined)[]> {
    assert(this.isV805)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '16b177961a30ecf818ebad48a3d0a06b91074a16dec95709286a5ebfcaac2fd3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: v900.Hash): Promise<v900.Proposal | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV900(keys: v900.Hash[]): Promise<(v900.Proposal | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV901() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a1795356664688824aad7064b1edcc104c2d0fdfb18b9f5631fc180ad884c439'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV901(key: v901.Hash): Promise<v901.Proposal | undefined> {
    assert(this.isV901)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV901(keys: v901.Hash[]): Promise<(v901.Proposal | undefined)[]> {
    assert(this.isV901)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV902() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f097e7fa22ba32e212600e411788d686ba0dcdf264e5ddbb1a5c0ce950919e77'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV902(key: v902.Hash): Promise<v902.Proposal | undefined> {
    assert(this.isV902)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV902(keys: v902.Hash[]): Promise<(v902.Proposal | undefined)[]> {
    assert(this.isV902)
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
  get isV1() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV1(key: v1.AccountId): Promise<v1.AccountInfo> {
    assert(this.isV1)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV1(keys: v1.AccountId[]): Promise<(v1.AccountInfo)[]> {
    assert(this.isV1)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '41895466e484ffa23b7dce58e3c36fada1543bdff8c033fab32033d59628c150'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV906(key: v906.H256): Promise<v906.Call | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV906(keys: v906.H256[]): Promise<(v906.Call | undefined)[]> {
    assert(this.isV906)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV908() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '690a5633a50cd13e473e9dcc5c576014cfb055286f7c0054a91c7f29fefd7b90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV908(key: v908.H256): Promise<v908.Call | undefined> {
    assert(this.isV908)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV908(keys: v908.H256[]): Promise<(v908.Call | undefined)[]> {
    assert(this.isV908)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV910() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1ecec68300532c998b4551cf99ce181f6826d6f6c8e38901df3c23db0280297d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV910(key: v910.H256): Promise<v910.Call | undefined> {
    assert(this.isV910)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV910(keys: v910.H256[]): Promise<(v910.Call | undefined)[]> {
    assert(this.isV910)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV912() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'dc88f3110f06d2704c3da45bbdbf60387114d13f45ad9ffdd3db2d14565383f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV912(key: v912.H256): Promise<v912.Call | undefined> {
    assert(this.isV912)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV912(keys: v912.H256[]): Promise<(v912.Call | undefined)[]> {
    assert(this.isV912)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV914() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7ced8245fec2975a273e6f351a8d598f3af18165feac4c1f10236009606f45f3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV914(key: v914.H256): Promise<v914.Call | undefined> {
    assert(this.isV914)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV914(keys: v914.H256[]): Promise<(v914.Call | undefined)[]> {
    assert(this.isV914)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV915() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1e918700e1dd96a255f0d980be19c7c28355c65562bb46da88e77b83116ba8d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV915(key: v915.H256): Promise<v915.Call | undefined> {
    assert(this.isV915)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV915(keys: v915.H256[]): Promise<(v915.Call | undefined)[]> {
    assert(this.isV915)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV916() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '8c2cc4aa9d2b11c8a02176a53ac560695d1215ce845eb72055640f11fa25fb24'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV916(key: v916.H256): Promise<v916.Call | undefined> {
    assert(this.isV916)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV916(keys: v916.H256[]): Promise<(v916.Call | undefined)[]> {
    assert(this.isV916)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV918() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '91d446b09651888e05603553cd1881d423771f5c4bbc24936bf852dce0e0ac30'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV918(key: v918.H256): Promise<v918.Call | undefined> {
    assert(this.isV918)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV918(keys: v918.H256[]): Promise<(v918.Call | undefined)[]> {
    assert(this.isV918)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV920() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2359beb434f4906be1cf8a6b6d819b843bd3e32e4f7e84d9ffafa67c1f8cd01f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV920(key: v920.H256): Promise<v920.Call | undefined> {
    assert(this.isV920)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV920(keys: v920.H256[]): Promise<(v920.Call | undefined)[]> {
    assert(this.isV920)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV922() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f2c90c5e28a249a8a63e87e07a144d212939b2128843259f2ecc3ae9ceb56278'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV922(key: v922.H256): Promise<v922.Call | undefined> {
    assert(this.isV922)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV922(keys: v922.H256[]): Promise<(v922.Call | undefined)[]> {
    assert(this.isV922)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV923() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '36778b6486e7905fb44c224ed7a1ebe484bf90ff84bc88243587097c4c81e823'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV923(key: v923.H256): Promise<v923.Call | undefined> {
    assert(this.isV923)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV923(keys: v923.H256[]): Promise<(v923.Call | undefined)[]> {
    assert(this.isV923)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV926() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '72a42d145d4f0bb245e27a4f74ddc798556dda2ac6d14e986193e028d5a5cbba'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV926(key: v926.H256): Promise<v926.Call | undefined> {
    assert(this.isV926)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV926(keys: v926.H256[]): Promise<(v926.Call | undefined)[]> {
    assert(this.isV926)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV927() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '670120d70275c84a31001af3920abe6dd849af83fa2dbe769f7d2f520f26116f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV927(key: v927.H256): Promise<v927.Call | undefined> {
    assert(this.isV927)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV927(keys: v927.H256[]): Promise<(v927.Call | undefined)[]> {
    assert(this.isV927)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV930() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'fb352241aae80ef757c31ef21203b9293151b4270b6be049b51c725daa71abdc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV930(key: v930.H256): Promise<v930.Call | undefined> {
    assert(this.isV930)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV930(keys: v930.H256[]): Promise<(v930.Call | undefined)[]> {
    assert(this.isV930)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV932() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '25fe55775902f2abb191f8b9c1674426625631228fcd7e4eced19ea48cb2871c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV932(key: v932.H256): Promise<v932.Call | undefined> {
    assert(this.isV932)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV932(keys: v932.H256[]): Promise<(v932.Call | undefined)[]> {
    assert(this.isV932)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV940() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'df6253374412980fc5896c54587a1d449e717e4ed60cbe2f8f49f09868d23369'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV940(key: v940.H256): Promise<v940.Call | undefined> {
    assert(this.isV940)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV940(keys: v940.H256[]): Promise<(v940.Call | undefined)[]> {
    assert(this.isV940)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV942() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'acb12cb1ab21af37b1c2d950487dea4fd812b945be09e101b1cce41fb26cfc1d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV942(key: v942.H256): Promise<v942.Call | undefined> {
    assert(this.isV942)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV942(keys: v942.H256[]): Promise<(v942.Call | undefined)[]> {
    assert(this.isV942)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV944() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7ad9cb5b33ba3ae7bd221f747303eb870e60069f1b54692a54272943a6b1000e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV944(key: v944.H256): Promise<v944.Call | undefined> {
    assert(this.isV944)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV944(keys: v944.H256[]): Promise<(v944.Call | undefined)[]> {
    assert(this.isV944)
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
  get isV906() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV906(key: v906.H256): Promise<v906.OpenTip | undefined> {
    assert(this.isV906)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV906(keys: v906.H256[]): Promise<(v906.OpenTip | undefined)[]> {
    assert(this.isV906)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV803(key: v803.BountyIndex): Promise<v803.Bounty | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Bounties', key)
  }

  async getManyAsV803(keys: v803.BountyIndex[]): Promise<(v803.Bounty | undefined)[]> {
    assert(this.isV803)
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
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV803(key: v803.ProposalIndex): Promise<v803.TreasuryProposal | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV803(keys: v803.ProposalIndex[]): Promise<(v803.TreasuryProposal | undefined)[]> {
    assert(this.isV803)
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
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV803() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV803(key: v803.Hash): Promise<v803.OpenTip | undefined> {
    assert(this.isV803)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Tips', key)
  }

  async getManyAsV803(keys: v803.Hash[]): Promise<(v803.OpenTip | undefined)[]> {
    assert(this.isV803)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
