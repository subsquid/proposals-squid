import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v1000 from './v1000'
import * as v1001 from './v1001'
import * as v1002 from './v1002'
import * as v1003 from './v1003'
import * as v1005 from './v1005'
import * as v1007 from './v1007'
import * as v1008 from './v1008'
import * as v1009 from './v1009'
import * as v1010 from './v1010'
import * as v1011 from './v1011'
import * as v1014 from './v1014'
import * as v1019 from './v1019'
import * as v2001 from './v2001'
import * as v2010 from './v2010'
import * as v2011 from './v2011'
import * as v2012 from './v2012'
import * as v2013 from './v2013'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2032 from './v2032'
import * as v2033 from './v2033'
import * as v2040 from './v2040'
import * as v2041 from './v2041'
import * as v2042 from './v2042'
import * as v2050 from './v2050'
import * as v2051 from './v2051'
import * as v2061 from './v2061'
import * as v2063 from './v2063'
import * as v2064 from './v2064'
import * as v2070 from './v2070'
import * as v2080 from './v2080'

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
  get isV1000() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1000(): Promise<v1000.Balance> {
    assert(this.isV1000)
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
  get isV1019() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV1019(key: number): Promise<v1019.Bounty | undefined> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV1019(keys: number[]): Promise<(v1019.Bounty | undefined)[]> {
    assert(this.isV1019)
    return this._chain.queryStorage(this.blockHash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1001(key: v1001.Hash): Promise<v1001.PreimageStatus | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1001(keys: v1001.Hash[]): Promise<(v1001.PreimageStatus | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1019() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.PreimageStatus | undefined> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1019(keys: v1019.H256[]): Promise<(v1019.PreimageStatus | undefined)[]> {
    assert(this.isV1019)
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV1001(): Promise<v1001.PropIndex> {
    assert(this.isV1001)
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV1001(): Promise<[v1001.PropIndex, v1001.Hash, v1001.AccountId][]> {
    assert(this.isV1001)
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV1001(key: v1001.ReferendumIndex): Promise<v1001.ReferendumInfo | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1001(keys: v1001.ReferendumIndex[]): Promise<(v1001.ReferendumInfo | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV1019() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV1019(key: number): Promise<v1019.ReferendumInfo | undefined> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1019(keys: number[]): Promise<(v1019.ReferendumInfo | undefined)[]> {
    assert(this.isV1019)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class GeneralCouncilMembersStorage {
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
  get isV1019() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1019(): Promise<v1019.AccountId32[]> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'Members') != null
  }
}

export class GeneralCouncilProposalCountStorage {
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
  get isV1019() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1019(): Promise<number> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalCount') != null
  }
}

export class GeneralCouncilProposalOfStorage {
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
  get isV1019() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '900a8391262eaa1b4df18c6b5b4fb105dbc6c11f562ed9f2d0a9f7eb775a682c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.Call | undefined> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV1019(keys: v1019.H256[]): Promise<(v1019.Call | undefined)[]> {
    assert(this.isV1019)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2001() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '38b7dba9448d6c10ed61ae94cd1cf7955e828c54bd4115e14d0fde52f2a06d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2001(key: v2001.H256): Promise<v2001.Call | undefined> {
    assert(this.isV2001)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2001(keys: v2001.H256[]): Promise<(v2001.Call | undefined)[]> {
    assert(this.isV2001)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2010() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '28203cc49362b175e7cbf56ac009dba56c7bd6dc5734aba623ed871c1e21a0f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2010(key: v2010.H256): Promise<v2010.Call | undefined> {
    assert(this.isV2010)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2010(keys: v2010.H256[]): Promise<(v2010.Call | undefined)[]> {
    assert(this.isV2010)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'd12dcb671048bd3fcc7c4728867b1277f83494c9d04680587115b0b823ecd65f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: v2011.H256): Promise<v2011.Call | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: v2011.H256[]): Promise<(v2011.Call | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2012() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'af9d36d7f75f583031cbd6b40f3133408cadcfdc4ac44e13ccc80b27df7f1daa'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2012(key: v2012.H256): Promise<v2012.Call | undefined> {
    assert(this.isV2012)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2012(keys: v2012.H256[]): Promise<(v2012.Call | undefined)[]> {
    assert(this.isV2012)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '2b74a2588504014e4234753a94d66682cb6563f2b506d22d0cebd87ee7882a25'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: v2013.H256): Promise<v2013.Call | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: v2013.H256[]): Promise<(v2013.Call | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'ee6aab8a0164a498b164c05f1e42b7a98de319885a6d19691a3ed10ad11d019d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: v2022.H256): Promise<v2022.Call | undefined> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: v2022.H256[]): Promise<(v2022.Call | undefined)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '88aa5cfebdfef1ca0833ada52d0fd1f8b900847cc4550e2fc40cff43c225b4ca'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: v2023.H256): Promise<v2023.Call | undefined> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: v2023.H256[]): Promise<(v2023.Call | undefined)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2032() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '5ff54f61506b39edb9475c891a9fe2a4165ec659fad1e1427433e83d032c7649'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2032(key: v2032.H256): Promise<v2032.Call | undefined> {
    assert(this.isV2032)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2032(keys: v2032.H256[]): Promise<(v2032.Call | undefined)[]> {
    assert(this.isV2032)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2033() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '366eb99463d79ca016de7538a845e56d04699815e7e8793cd997e0f18c9755e8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2033(key: v2033.H256): Promise<v2033.Call | undefined> {
    assert(this.isV2033)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2033(keys: v2033.H256[]): Promise<(v2033.Call | undefined)[]> {
    assert(this.isV2033)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2040() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '84928adeafc6956d39cacdfcec34f054aad5abebcc5015dfed8c83518f8b9b11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2040(key: v2040.H256): Promise<v2040.Call | undefined> {
    assert(this.isV2040)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2040(keys: v2040.H256[]): Promise<(v2040.Call | undefined)[]> {
    assert(this.isV2040)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2041() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '0169f65d27dfbe8a58c4d1083cfce2a6e645bad120637dc42ac36195a7000839'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2041(key: v2041.H256): Promise<v2041.Call | undefined> {
    assert(this.isV2041)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2041(keys: v2041.H256[]): Promise<(v2041.Call | undefined)[]> {
    assert(this.isV2041)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '6a4d6cce0b5f45b93e88e954e88faf6d62f0eee2756843a9afe0b9aa8018d363'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2042(key: v2042.H256): Promise<v2042.Call | undefined> {
    assert(this.isV2042)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2042(keys: v2042.H256[]): Promise<(v2042.Call | undefined)[]> {
    assert(this.isV2042)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2050() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '92e9e3a938af5df80daa33a87229f46f4151bf6f2266961b1266afa54e95a02c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2050(key: v2050.H256): Promise<v2050.Call | undefined> {
    assert(this.isV2050)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2050(keys: v2050.H256[]): Promise<(v2050.Call | undefined)[]> {
    assert(this.isV2050)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2051() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '8c8cbb6da75e250a4fc49aa95696531ed6cd768244da64bc236e556b1b631d40'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2051(key: v2051.H256): Promise<v2051.Call | undefined> {
    assert(this.isV2051)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2051(keys: v2051.H256[]): Promise<(v2051.Call | undefined)[]> {
    assert(this.isV2051)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2061() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '8f732ea58e1f62d5219d3555eb9e61e3b9aef867992e29f8f35e669c7325cf5f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2061(key: v2061.H256): Promise<v2061.Call | undefined> {
    assert(this.isV2061)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2061(keys: v2061.H256[]): Promise<(v2061.Call | undefined)[]> {
    assert(this.isV2061)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2063() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'b30dac7fd65ed4855facb60adb0f1658ff94cd8126d7b3e9d98777c9500a801c'
  }

  async getAsV2063(key: v2063.H256): Promise<v2063.Call | undefined> {
    assert(this.isV2063)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2063(keys: v2063.H256[]): Promise<(v2063.Call | undefined)[]> {
    assert(this.isV2063)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2064() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '33c245165539a9674245bef9dd5b4ea10c79d1f75dc60d3c9bf61efd895b853c'
  }

  async getAsV2064(key: v2064.H256): Promise<v2064.Call | undefined> {
    assert(this.isV2064)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2064(keys: v2064.H256[]): Promise<(v2064.Call | undefined)[]> {
    assert(this.isV2064)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2070() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '2fd4cc8d7568aa3a7fe064eeb4cad1ea05d0c32d914ee5947f03d86004927515'
  }

  async getAsV2070(key: v2070.H256): Promise<v2070.Call | undefined> {
    assert(this.isV2070)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2070(keys: v2070.H256[]): Promise<(v2070.Call | undefined)[]> {
    assert(this.isV2070)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2080() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'b9fd5c4c01021726ca3fb2da15dc530bdda12756fb4488399f0aa843928b7055'
  }

  async getAsV2080(key: v2080.H256): Promise<v2080.Call | undefined> {
    assert(this.isV2080)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2080(keys: v2080.H256[]): Promise<(v2080.Call | undefined)[]> {
    assert(this.isV2080)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') != null
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
  get isV1000() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1000(): Promise<v1000.AccountId[]> {
    assert(this.isV1000)
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
  get isV1000() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1000(): Promise<number> {
    assert(this.isV1000)
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
  get isV1000() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'b68cd768c6007f9510bda66161a6a2748c800661e9b16a75e6896bbcae4f9d70'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1000(key: v1000.Hash): Promise<v1000.Proposal | undefined> {
    assert(this.isV1000)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1000(keys: v1000.Hash[]): Promise<(v1000.Proposal | undefined)[]> {
    assert(this.isV1000)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e270faad6cf1392601870d2d12af84791dc449a6979daf63fda013dd63aed182'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1001(key: v1001.Hash): Promise<v1001.Proposal | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1001(keys: v1001.Hash[]): Promise<(v1001.Proposal | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1002() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '80adaf799f7aa054805136999ad4a29b70966bd2a40376b1eb593880f4073a9f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1002(key: v1002.Hash): Promise<v1002.Proposal | undefined> {
    assert(this.isV1002)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1002(keys: v1002.Hash[]): Promise<(v1002.Proposal | undefined)[]> {
    assert(this.isV1002)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1003() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'bb5fa40cda94b2a51e30230207d2b3de9603c3518b0964b0b272ffba8517dc2d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1003(key: v1003.Hash): Promise<v1003.Proposal | undefined> {
    assert(this.isV1003)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1003(keys: v1003.Hash[]): Promise<(v1003.Proposal | undefined)[]> {
    assert(this.isV1003)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1005() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '89db079ee0ac5c8b0a3bd81dc76cdc65768c8d12512150364770a4eea3383f62'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1005(key: v1005.Hash): Promise<v1005.Proposal | undefined> {
    assert(this.isV1005)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1005(keys: v1005.Hash[]): Promise<(v1005.Proposal | undefined)[]> {
    assert(this.isV1005)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1007() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ac485477f82f2885b1a599b0cf6b7c2da750d9888320c500269a195a38321ffd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1007(key: v1007.Hash): Promise<v1007.Proposal | undefined> {
    assert(this.isV1007)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1007(keys: v1007.Hash[]): Promise<(v1007.Proposal | undefined)[]> {
    assert(this.isV1007)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1008() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '92877c8fd61f3b05a4fc4a34e924e1965cfdef65f063eb44a55877cffea74e3d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1008(key: v1008.Hash): Promise<v1008.Proposal | undefined> {
    assert(this.isV1008)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1008(keys: v1008.Hash[]): Promise<(v1008.Proposal | undefined)[]> {
    assert(this.isV1008)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1009() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '1faf4c448c4fc41d0eda82bcd178579737881449a4e8cc00f2b982e65b3ab70b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1009(key: v1009.Hash): Promise<v1009.Proposal | undefined> {
    assert(this.isV1009)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1009(keys: v1009.Hash[]): Promise<(v1009.Proposal | undefined)[]> {
    assert(this.isV1009)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1010() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '96a91c2759c1351a1a03877c9f54bb047cf27d2052728afc2a3f37a417bce5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1010(key: v1010.Hash): Promise<v1010.Proposal | undefined> {
    assert(this.isV1010)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1010(keys: v1010.Hash[]): Promise<(v1010.Proposal | undefined)[]> {
    assert(this.isV1010)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1011() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5b71457767c3ac17284be063a50b7e5fa619a4a075e3ef0ea35e69066ba086ca'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1011(key: v1011.Hash): Promise<v1011.Proposal | undefined> {
    assert(this.isV1011)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1011(keys: v1011.Hash[]): Promise<(v1011.Proposal | undefined)[]> {
    assert(this.isV1011)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1014() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '2cf6a51a505a3b576043a44dd0d52ec11cee2aad721f1d59f93e0d39eacae397'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1014(key: v1014.Hash): Promise<v1014.Proposal | undefined> {
    assert(this.isV1014)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1014(keys: v1014.Hash[]): Promise<(v1014.Proposal | undefined)[]> {
    assert(this.isV1014)
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
  get isV1000() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'b68cd768c6007f9510bda66161a6a2748c800661e9b16a75e6896bbcae4f9d70'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1000(key: v1000.Hash): Promise<v1000.Proposal | undefined> {
    assert(this.isV1000)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1000(keys: v1000.Hash[]): Promise<(v1000.Proposal | undefined)[]> {
    assert(this.isV1000)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e270faad6cf1392601870d2d12af84791dc449a6979daf63fda013dd63aed182'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1001(key: v1001.Hash): Promise<v1001.Proposal | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1001(keys: v1001.Hash[]): Promise<(v1001.Proposal | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1002() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '80adaf799f7aa054805136999ad4a29b70966bd2a40376b1eb593880f4073a9f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1002(key: v1002.Hash): Promise<v1002.Proposal | undefined> {
    assert(this.isV1002)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1002(keys: v1002.Hash[]): Promise<(v1002.Proposal | undefined)[]> {
    assert(this.isV1002)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1003() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'bb5fa40cda94b2a51e30230207d2b3de9603c3518b0964b0b272ffba8517dc2d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1003(key: v1003.Hash): Promise<v1003.Proposal | undefined> {
    assert(this.isV1003)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1003(keys: v1003.Hash[]): Promise<(v1003.Proposal | undefined)[]> {
    assert(this.isV1003)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1005() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '89db079ee0ac5c8b0a3bd81dc76cdc65768c8d12512150364770a4eea3383f62'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1005(key: v1005.Hash): Promise<v1005.Proposal | undefined> {
    assert(this.isV1005)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1005(keys: v1005.Hash[]): Promise<(v1005.Proposal | undefined)[]> {
    assert(this.isV1005)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1007() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ac485477f82f2885b1a599b0cf6b7c2da750d9888320c500269a195a38321ffd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1007(key: v1007.Hash): Promise<v1007.Proposal | undefined> {
    assert(this.isV1007)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1007(keys: v1007.Hash[]): Promise<(v1007.Proposal | undefined)[]> {
    assert(this.isV1007)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1008() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '92877c8fd61f3b05a4fc4a34e924e1965cfdef65f063eb44a55877cffea74e3d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1008(key: v1008.Hash): Promise<v1008.Proposal | undefined> {
    assert(this.isV1008)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1008(keys: v1008.Hash[]): Promise<(v1008.Proposal | undefined)[]> {
    assert(this.isV1008)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1009() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '1faf4c448c4fc41d0eda82bcd178579737881449a4e8cc00f2b982e65b3ab70b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1009(key: v1009.Hash): Promise<v1009.Proposal | undefined> {
    assert(this.isV1009)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1009(keys: v1009.Hash[]): Promise<(v1009.Proposal | undefined)[]> {
    assert(this.isV1009)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1010() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '96a91c2759c1351a1a03877c9f54bb047cf27d2052728afc2a3f37a417bce5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1010(key: v1010.Hash): Promise<v1010.Proposal | undefined> {
    assert(this.isV1010)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1010(keys: v1010.Hash[]): Promise<(v1010.Proposal | undefined)[]> {
    assert(this.isV1010)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1011() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5b71457767c3ac17284be063a50b7e5fa619a4a075e3ef0ea35e69066ba086ca'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1011(key: v1011.Hash): Promise<v1011.Proposal | undefined> {
    assert(this.isV1011)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1011(keys: v1011.Hash[]): Promise<(v1011.Proposal | undefined)[]> {
    assert(this.isV1011)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1014() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '2cf6a51a505a3b576043a44dd0d52ec11cee2aad721f1d59f93e0d39eacae397'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1014(key: v1014.Hash): Promise<v1014.Proposal | undefined> {
    assert(this.isV1014)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1014(keys: v1014.Hash[]): Promise<(v1014.Proposal | undefined)[]> {
    assert(this.isV1014)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
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
  get isV1019() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '900a8391262eaa1b4df18c6b5b4fb105dbc6c11f562ed9f2d0a9f7eb775a682c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.Call | undefined> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV1019(keys: v1019.H256[]): Promise<(v1019.Call | undefined)[]> {
    assert(this.isV1019)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2001() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '38b7dba9448d6c10ed61ae94cd1cf7955e828c54bd4115e14d0fde52f2a06d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2001(key: v2001.H256): Promise<v2001.Call | undefined> {
    assert(this.isV2001)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2001(keys: v2001.H256[]): Promise<(v2001.Call | undefined)[]> {
    assert(this.isV2001)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2010() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '28203cc49362b175e7cbf56ac009dba56c7bd6dc5734aba623ed871c1e21a0f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2010(key: v2010.H256): Promise<v2010.Call | undefined> {
    assert(this.isV2010)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2010(keys: v2010.H256[]): Promise<(v2010.Call | undefined)[]> {
    assert(this.isV2010)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'd12dcb671048bd3fcc7c4728867b1277f83494c9d04680587115b0b823ecd65f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: v2011.H256): Promise<v2011.Call | undefined> {
    assert(this.isV2011)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: v2011.H256[]): Promise<(v2011.Call | undefined)[]> {
    assert(this.isV2011)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2012() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'af9d36d7f75f583031cbd6b40f3133408cadcfdc4ac44e13ccc80b27df7f1daa'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2012(key: v2012.H256): Promise<v2012.Call | undefined> {
    assert(this.isV2012)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2012(keys: v2012.H256[]): Promise<(v2012.Call | undefined)[]> {
    assert(this.isV2012)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2b74a2588504014e4234753a94d66682cb6563f2b506d22d0cebd87ee7882a25'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: v2013.H256): Promise<v2013.Call | undefined> {
    assert(this.isV2013)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: v2013.H256[]): Promise<(v2013.Call | undefined)[]> {
    assert(this.isV2013)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ee6aab8a0164a498b164c05f1e42b7a98de319885a6d19691a3ed10ad11d019d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: v2022.H256): Promise<v2022.Call | undefined> {
    assert(this.isV2022)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: v2022.H256[]): Promise<(v2022.Call | undefined)[]> {
    assert(this.isV2022)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '88aa5cfebdfef1ca0833ada52d0fd1f8b900847cc4550e2fc40cff43c225b4ca'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: v2023.H256): Promise<v2023.Call | undefined> {
    assert(this.isV2023)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: v2023.H256[]): Promise<(v2023.Call | undefined)[]> {
    assert(this.isV2023)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2032() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '5ff54f61506b39edb9475c891a9fe2a4165ec659fad1e1427433e83d032c7649'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2032(key: v2032.H256): Promise<v2032.Call | undefined> {
    assert(this.isV2032)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2032(keys: v2032.H256[]): Promise<(v2032.Call | undefined)[]> {
    assert(this.isV2032)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2033() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '366eb99463d79ca016de7538a845e56d04699815e7e8793cd997e0f18c9755e8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2033(key: v2033.H256): Promise<v2033.Call | undefined> {
    assert(this.isV2033)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2033(keys: v2033.H256[]): Promise<(v2033.Call | undefined)[]> {
    assert(this.isV2033)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2040() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '84928adeafc6956d39cacdfcec34f054aad5abebcc5015dfed8c83518f8b9b11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2040(key: v2040.H256): Promise<v2040.Call | undefined> {
    assert(this.isV2040)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2040(keys: v2040.H256[]): Promise<(v2040.Call | undefined)[]> {
    assert(this.isV2040)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2041() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '0169f65d27dfbe8a58c4d1083cfce2a6e645bad120637dc42ac36195a7000839'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2041(key: v2041.H256): Promise<v2041.Call | undefined> {
    assert(this.isV2041)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2041(keys: v2041.H256[]): Promise<(v2041.Call | undefined)[]> {
    assert(this.isV2041)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '6a4d6cce0b5f45b93e88e954e88faf6d62f0eee2756843a9afe0b9aa8018d363'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2042(key: v2042.H256): Promise<v2042.Call | undefined> {
    assert(this.isV2042)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2042(keys: v2042.H256[]): Promise<(v2042.Call | undefined)[]> {
    assert(this.isV2042)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2050() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '92e9e3a938af5df80daa33a87229f46f4151bf6f2266961b1266afa54e95a02c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2050(key: v2050.H256): Promise<v2050.Call | undefined> {
    assert(this.isV2050)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2050(keys: v2050.H256[]): Promise<(v2050.Call | undefined)[]> {
    assert(this.isV2050)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2051() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '8c8cbb6da75e250a4fc49aa95696531ed6cd768244da64bc236e556b1b631d40'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2051(key: v2051.H256): Promise<v2051.Call | undefined> {
    assert(this.isV2051)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2051(keys: v2051.H256[]): Promise<(v2051.Call | undefined)[]> {
    assert(this.isV2051)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2061() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '8f732ea58e1f62d5219d3555eb9e61e3b9aef867992e29f8f35e669c7325cf5f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2061(key: v2061.H256): Promise<v2061.Call | undefined> {
    assert(this.isV2061)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2061(keys: v2061.H256[]): Promise<(v2061.Call | undefined)[]> {
    assert(this.isV2061)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2063() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'b30dac7fd65ed4855facb60adb0f1658ff94cd8126d7b3e9d98777c9500a801c'
  }

  async getAsV2063(key: v2063.H256): Promise<v2063.Call | undefined> {
    assert(this.isV2063)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2063(keys: v2063.H256[]): Promise<(v2063.Call | undefined)[]> {
    assert(this.isV2063)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2064() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '33c245165539a9674245bef9dd5b4ea10c79d1f75dc60d3c9bf61efd895b853c'
  }

  async getAsV2064(key: v2064.H256): Promise<v2064.Call | undefined> {
    assert(this.isV2064)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2064(keys: v2064.H256[]): Promise<(v2064.Call | undefined)[]> {
    assert(this.isV2064)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2070() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2fd4cc8d7568aa3a7fe064eeb4cad1ea05d0c32d914ee5947f03d86004927515'
  }

  async getAsV2070(key: v2070.H256): Promise<v2070.Call | undefined> {
    assert(this.isV2070)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2070(keys: v2070.H256[]): Promise<(v2070.Call | undefined)[]> {
    assert(this.isV2070)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  get isV2080() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'b9fd5c4c01021726ca3fb2da15dc530bdda12756fb4488399f0aa843928b7055'
  }

  async getAsV2080(key: v2080.H256): Promise<v2080.Call | undefined> {
    assert(this.isV2080)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2080(keys: v2080.H256[]): Promise<(v2080.Call | undefined)[]> {
    assert(this.isV2080)
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
  get isV1019() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.OpenTip | undefined> {
    assert(this.isV1019)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV1019(keys: v1019.H256[]): Promise<(v1019.OpenTip | undefined)[]> {
    assert(this.isV1019)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') != null
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
  get isV1000() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1000(key: v1000.ProposalIndex): Promise<v1000.TreasuryProposal | undefined> {
    assert(this.isV1000)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV1000(keys: v1000.ProposalIndex[]): Promise<(v1000.TreasuryProposal | undefined)[]> {
    assert(this.isV1000)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
