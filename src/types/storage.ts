import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v2000 from './v2000'
import * as v2011 from './v2011'
import * as v2020 from './v2020'
import * as v2021 from './v2021'
import * as v2022 from './v2022'
import * as v2032 from './v2032'
import * as v2033 from './v2033'
import * as v2034 from './v2034'
import * as v2042 from './v2042'
import * as v2050 from './v2050'
import * as v2060 from './v2060'
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV2000(): Promise<bigint> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV2000(key: number): Promise<v2000.Bounty | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV2000(keys: number[]): Promise<(v2000.Bounty | undefined)[]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.PreimageStatus | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV2000(keys: v2000.H256[]): Promise<(v2000.PreimageStatus | undefined)[]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV2000(): Promise<number> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV2000(): Promise<[number, v2000.H256, v2000.AccountId32][]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV2000(key: number): Promise<v2000.ReferendumInfo | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV2000(keys: number[]): Promise<(v2000.ReferendumInfo | undefined)[]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV2000(): Promise<v2000.AccountId32[]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV2000(): Promise<number> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '5bb0f7ab07f2fe07ffa2dd974c435f37056f3956795ff0ea181bba24127f1154'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.Call | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2000(keys: v2000.H256[]): Promise<(v2000.Call | undefined)[]> {
    assert(this.isV2000)
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
  get isV2020() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'a5be5b3b3e20f61f84f244d2bdcf0670ff840fd65fcf4e2db8df1b377c032d43'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2020(key: v2020.H256): Promise<v2020.Call | undefined> {
    assert(this.isV2020)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2020(keys: v2020.H256[]): Promise<(v2020.Call | undefined)[]> {
    assert(this.isV2020)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2021() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '2b74a2588504014e4234753a94d66682cb6563f2b506d22d0cebd87ee7882a25'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2021(key: v2021.H256): Promise<v2021.Call | undefined> {
    assert(this.isV2021)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2021(keys: v2021.H256[]): Promise<(v2021.Call | undefined)[]> {
    assert(this.isV2021)
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
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'b251028f87c230a17726a947067927223166a2d67172dd18f6a5e100b7498f39'
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
  get isV2034() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '4f478e7c496c822b5f720fae5273961100338e47ca6a0e8ff37ad11811decd55'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2034(key: v2034.H256): Promise<v2034.Call | undefined> {
    assert(this.isV2034)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2034(keys: v2034.H256[]): Promise<(v2034.Call | undefined)[]> {
    assert(this.isV2034)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '834f0b62be464f7b17d9fd7fdfc3c4292376ab91d4e10930f5ac8ba550056e6e'
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
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'ba52c6e6023e4b8bd5ec53bed88158fb36d4193ac0a1d19a86b2864b79898da2'
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
  get isV2060() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '99fe0ccf063ef62a3656f9d38fbf253859ad76171700edebdf2919da2a6085ab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2060(key: v2060.H256): Promise<v2060.Call | undefined> {
    assert(this.isV2060)
    return this._chain.getStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', key)
  }

  async getManyAsV2060(keys: v2060.H256[]): Promise<(v2060.Call | undefined)[]> {
    assert(this.isV2060)
    return this._chain.queryStorage(this.blockHash, 'GeneralCouncil', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2061() {
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'df2d5d6adc4404122c35260dda306533fc4597c076a2fbbc963445ffe9e81aba'
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
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '98b67f869f750ba30ac737af44aa25be905457034aaf0d130cd462221d719b56'
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
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '001b69d4f4f38f572c3670cb08c858f65167e61a9924838f4d4439689f24d4c9'
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
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '7b2331bafb10dad9da99946788d45f01cf4fd10301de8b3f828e4b9143d2dbc7'
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
    return this._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '49ba433e70ba136670a2ce319781e1c735198557b29c5cb364a1c50cf7b55e30'
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '5bb0f7ab07f2fe07ffa2dd974c435f37056f3956795ff0ea181bba24127f1154'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.Call | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2000(keys: v2000.H256[]): Promise<(v2000.Call | undefined)[]> {
    assert(this.isV2000)
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
  get isV2020() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'a5be5b3b3e20f61f84f244d2bdcf0670ff840fd65fcf4e2db8df1b377c032d43'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2020(key: v2020.H256): Promise<v2020.Call | undefined> {
    assert(this.isV2020)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2020(keys: v2020.H256[]): Promise<(v2020.Call | undefined)[]> {
    assert(this.isV2020)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2021() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2b74a2588504014e4234753a94d66682cb6563f2b506d22d0cebd87ee7882a25'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2021(key: v2021.H256): Promise<v2021.Call | undefined> {
    assert(this.isV2021)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2021(keys: v2021.H256[]): Promise<(v2021.Call | undefined)[]> {
    assert(this.isV2021)
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
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'b251028f87c230a17726a947067927223166a2d67172dd18f6a5e100b7498f39'
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
  get isV2034() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '4f478e7c496c822b5f720fae5273961100338e47ca6a0e8ff37ad11811decd55'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2034(key: v2034.H256): Promise<v2034.Call | undefined> {
    assert(this.isV2034)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2034(keys: v2034.H256[]): Promise<(v2034.Call | undefined)[]> {
    assert(this.isV2034)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '834f0b62be464f7b17d9fd7fdfc3c4292376ab91d4e10930f5ac8ba550056e6e'
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
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ba52c6e6023e4b8bd5ec53bed88158fb36d4193ac0a1d19a86b2864b79898da2'
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
  get isV2060() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '99fe0ccf063ef62a3656f9d38fbf253859ad76171700edebdf2919da2a6085ab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2060(key: v2060.H256): Promise<v2060.Call | undefined> {
    assert(this.isV2060)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV2060(keys: v2060.H256[]): Promise<(v2060.Call | undefined)[]> {
    assert(this.isV2060)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2061() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'df2d5d6adc4404122c35260dda306533fc4597c076a2fbbc963445ffe9e81aba'
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
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '98b67f869f750ba30ac737af44aa25be905457034aaf0d130cd462221d719b56'
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
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '001b69d4f4f38f572c3670cb08c858f65167e61a9924838f4d4439689f24d4c9'
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
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7b2331bafb10dad9da99946788d45f01cf4fd10301de8b3f828e4b9143d2dbc7'
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
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '49ba433e70ba136670a2ce319781e1c735198557b29c5cb364a1c50cf7b55e30'
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.OpenTip | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV2000(keys: v2000.H256[]): Promise<(v2000.OpenTip | undefined)[]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV2000(key: number): Promise<v2000.Proposal | undefined> {
    assert(this.isV2000)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV2000(keys: number[]): Promise<(v2000.Proposal | undefined)[]> {
    assert(this.isV2000)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
