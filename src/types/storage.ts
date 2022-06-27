import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v49 from './v49'
import * as v53 from './v53'
import * as v155 from './v155'
import * as v159 from './v159'
import * as v200 from './v200'
import * as v400 from './v400'
import * as v501 from './v501'
import * as v600 from './v600'
import * as v701 from './v701'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1101 from './v1101'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1502 from './v1502'
import * as v1605 from './v1605'

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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1001(): Promise<bigint> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class CouncilCollectiveMembersStorage {
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'Members') === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1001(): Promise<v1001.AccountId20[]> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'Members') != null
  }
}

export class CouncilCollectiveProposalCountStorage {
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1001(): Promise<number> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalCount') != null
  }
}

export class CouncilCollectiveProposalOfStorage {
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '865c942056a01b1dd23fb27cb999c2ba92166cdecf033312955cc6d93d809fe3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1001(key: v1001.H256): Promise<v1001.Call | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1001(keys: v1001.H256[]): Promise<(v1001.Call | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1101() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '9f9097d7732298fa1b657f6d495d6cc0b4bb70d62f1a6c8197a0998cf2757623'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1101(key: v1101.H256): Promise<v1101.Call | undefined> {
    assert(this.isV1101)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1101(keys: v1101.H256[]): Promise<(v1101.Call | undefined)[]> {
    assert(this.isV1101)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1201() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'adac8b1e930f0dfc4bbaf266955a2478dcb8f27995a57c8bf984083640bdfe19'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1201(key: v1201.H256): Promise<v1201.Call | undefined> {
    assert(this.isV1201)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1201(keys: v1201.H256[]): Promise<(v1201.Call | undefined)[]> {
    assert(this.isV1201)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1300() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'e299c91b5dedd2fa94ef2428f108832be8fa9944f78bfc107925d77dd2dee53b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1300(key: v1300.H256): Promise<v1300.Call | undefined> {
    assert(this.isV1300)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1300(keys: v1300.H256[]): Promise<(v1300.Call | undefined)[]> {
    assert(this.isV1300)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1401() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'bc7932a09e814473cdd716a9c2c5940e312ba50d329c093bff71b700152d184f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1401(key: v1401.H256): Promise<v1401.Call | undefined> {
    assert(this.isV1401)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1401(keys: v1401.H256[]): Promise<(v1401.Call | undefined)[]> {
    assert(this.isV1401)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1502() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'f976c79855f0698ff6ccd64ec7d4dddca3feb15a401c5d44fa21d5f686f74f04'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1502(key: v1502.H256): Promise<v1502.Call | undefined> {
    assert(this.isV1502)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1502(keys: v1502.H256[]): Promise<(v1502.Call | undefined)[]> {
    assert(this.isV1502)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1605() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '1f14895f26d5ac760fd669f6323ae4dc26ecc8011a9bd93ec4f5dfa603e740f6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1605(key: v1605.H256): Promise<v1605.Call | undefined> {
    assert(this.isV1605)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV1605(keys: v1605.H256[]): Promise<(v1605.Call | undefined)[]> {
    assert(this.isV1605)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '30d56581e955e0a747e440dc53c3fb3bab066b651da862046e5832ebf1009946'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: v900.H256): Promise<v900.Call | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', key)
  }

  async getManyAsV900(keys: v900.H256[]): Promise<(v900.Call | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'CouncilCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') != null
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
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1001(key: v1001.H256): Promise<v1001.PreimageStatus | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1001(keys: v1001.H256[]): Promise<(v1001.PreimageStatus | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV155() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '4cfebf1c3ec4cbc591b367aceaef472ee18ccb1d7b4a188ca5284e65390f4835'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV155(key: v155.Hash): Promise<v155.PreimageStatus | undefined> {
    assert(this.isV155)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV155(keys: v155.Hash[]): Promise<(v155.PreimageStatus | undefined)[]> {
    assert(this.isV155)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1605() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1605(key: v1605.H256): Promise<v1605.PreimageStatus | undefined> {
    assert(this.isV1605)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1605(keys: v1605.H256[]): Promise<(v1605.PreimageStatus | undefined)[]> {
    assert(this.isV1605)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV200() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '4cfebf1c3ec4cbc591b367aceaef472ee18ccb1d7b4a188ca5284e65390f4835'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV200(key: v200.Hash): Promise<v200.PreimageStatus | undefined> {
    assert(this.isV200)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV200(keys: v200.Hash[]): Promise<(v200.PreimageStatus | undefined)[]> {
    assert(this.isV200)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV900(key: v900.H256): Promise<v900.PreimageStatus | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV900(keys: v900.H256[]): Promise<(v900.PreimageStatus | undefined)[]> {
    assert(this.isV900)
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
  async getAsV1001(): Promise<number> {
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
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV1001(): Promise<[number, v1001.H256, v1001.AccountId20][]> {
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
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV1001(key: number): Promise<v1001.ReferendumInfo | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1001(keys: number[]): Promise<(v1001.ReferendumInfo | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV155() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV155(key: v155.ReferendumIndex): Promise<v155.ReferendumInfo | undefined> {
    assert(this.isV155)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV155(keys: v155.ReferendumIndex[]): Promise<(v155.ReferendumInfo | undefined)[]> {
    assert(this.isV155)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV1605() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV1605(key: number): Promise<v1605.ReferendumInfo | undefined> {
    assert(this.isV1605)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1605(keys: number[]): Promise<(v1605.ReferendumInfo | undefined)[]> {
    assert(this.isV1605)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV200() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV200(key: v200.ReferendumIndex): Promise<v200.ReferendumInfo | undefined> {
    assert(this.isV200)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV200(keys: v200.ReferendumIndex[]): Promise<(v200.ReferendumInfo | undefined)[]> {
    assert(this.isV200)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV900(key: number): Promise<v900.ReferendumInfo | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV900(keys: number[]): Promise<(v900.ReferendumInfo | undefined)[]> {
    assert(this.isV900)
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
  get isV155() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV155(): Promise<v155.AccountId[]> {
    assert(this.isV155)
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
  get isV155() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV155(): Promise<number> {
    assert(this.isV155)
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
  get isV155() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '1698a2e163eda774fc7e9effa5397f8e6597a94a943d34f38afa17a689729c9d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV155(key: v155.Hash): Promise<v155.Proposal | undefined> {
    assert(this.isV155)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV155(keys: v155.Hash[]): Promise<(v155.Proposal | undefined)[]> {
    assert(this.isV155)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV159() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '0695bc404c3922c4fd7e6cf05f231f024b824b91c7ccfd63c86da4be37b32306'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV159(key: v159.Hash): Promise<v159.Proposal | undefined> {
    assert(this.isV159)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV159(keys: v159.Hash[]): Promise<(v159.Proposal | undefined)[]> {
    assert(this.isV159)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV200() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '89edc09b41416965160715ea8700e9d5d57b6667c95d040389906e7931cce743'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV200(key: v200.Hash): Promise<v200.Proposal | undefined> {
    assert(this.isV200)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV200(keys: v200.Hash[]): Promise<(v200.Proposal | undefined)[]> {
    assert(this.isV200)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV400() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'bf7b3112a6afb03bf21afffc8233b3e0d390ec4260eb05a72bfe834516d6dcbe'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV400(key: v400.Hash): Promise<v400.Proposal | undefined> {
    assert(this.isV400)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV400(keys: v400.Hash[]): Promise<(v400.Proposal | undefined)[]> {
    assert(this.isV400)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV49() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c2200d55dc010bd1db0de89316bebc8bbe807286cce4a413847783c70617e45f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV49(key: v49.Hash): Promise<v49.Proposal | undefined> {
    assert(this.isV49)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV49(keys: v49.Hash[]): Promise<(v49.Proposal | undefined)[]> {
    assert(this.isV49)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV501() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '0446b2b69d4000eba992dbc30c60f62bdcf45854155a1773e649b8d69cb9c41d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV501(key: v501.Hash): Promise<v501.Proposal | undefined> {
    assert(this.isV501)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV501(keys: v501.Hash[]): Promise<(v501.Proposal | undefined)[]> {
    assert(this.isV501)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV53() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '33a59e33fccb1519e3a6069b550bff656c5271028bf91b77931e1f0b94dd4d47'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV53(key: v53.Hash): Promise<v53.Proposal | undefined> {
    assert(this.isV53)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV53(keys: v53.Hash[]): Promise<(v53.Proposal | undefined)[]> {
    assert(this.isV53)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV600() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'bf7b3112a6afb03bf21afffc8233b3e0d390ec4260eb05a72bfe834516d6dcbe'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV600(key: v600.Hash): Promise<v600.Proposal | undefined> {
    assert(this.isV600)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV600(keys: v600.Hash[]): Promise<(v600.Proposal | undefined)[]> {
    assert(this.isV600)
    return this._chain.queryStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV701() {
    return this._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ee6b01382208f65f572d48f976f6aed61ffaa0ab5504b21b5063d134cdbd4153'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV701(key: v701.Hash): Promise<v701.Proposal | undefined> {
    assert(this.isV701)
    return this._chain.getStorage(this.blockHash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV701(keys: v701.Hash[]): Promise<(v701.Proposal | undefined)[]> {
    assert(this.isV701)
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
  get isV155() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '1698a2e163eda774fc7e9effa5397f8e6597a94a943d34f38afa17a689729c9d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV155(key: v155.Hash): Promise<v155.Proposal | undefined> {
    assert(this.isV155)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV155(keys: v155.Hash[]): Promise<(v155.Proposal | undefined)[]> {
    assert(this.isV155)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV159() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '0695bc404c3922c4fd7e6cf05f231f024b824b91c7ccfd63c86da4be37b32306'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV159(key: v159.Hash): Promise<v159.Proposal | undefined> {
    assert(this.isV159)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV159(keys: v159.Hash[]): Promise<(v159.Proposal | undefined)[]> {
    assert(this.isV159)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV200() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '89edc09b41416965160715ea8700e9d5d57b6667c95d040389906e7931cce743'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV200(key: v200.Hash): Promise<v200.Proposal | undefined> {
    assert(this.isV200)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV200(keys: v200.Hash[]): Promise<(v200.Proposal | undefined)[]> {
    assert(this.isV200)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV400() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'bf7b3112a6afb03bf21afffc8233b3e0d390ec4260eb05a72bfe834516d6dcbe'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV400(key: v400.Hash): Promise<v400.Proposal | undefined> {
    assert(this.isV400)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV400(keys: v400.Hash[]): Promise<(v400.Proposal | undefined)[]> {
    assert(this.isV400)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV49() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c2200d55dc010bd1db0de89316bebc8bbe807286cce4a413847783c70617e45f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV49(key: v49.Hash): Promise<v49.Proposal | undefined> {
    assert(this.isV49)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV49(keys: v49.Hash[]): Promise<(v49.Proposal | undefined)[]> {
    assert(this.isV49)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV501() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '0446b2b69d4000eba992dbc30c60f62bdcf45854155a1773e649b8d69cb9c41d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV501(key: v501.Hash): Promise<v501.Proposal | undefined> {
    assert(this.isV501)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV501(keys: v501.Hash[]): Promise<(v501.Proposal | undefined)[]> {
    assert(this.isV501)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV53() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '33a59e33fccb1519e3a6069b550bff656c5271028bf91b77931e1f0b94dd4d47'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV53(key: v53.Hash): Promise<v53.Proposal | undefined> {
    assert(this.isV53)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV53(keys: v53.Hash[]): Promise<(v53.Proposal | undefined)[]> {
    assert(this.isV53)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV600() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'bf7b3112a6afb03bf21afffc8233b3e0d390ec4260eb05a72bfe834516d6dcbe'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV600(key: v600.Hash): Promise<v600.Proposal | undefined> {
    assert(this.isV600)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV600(keys: v600.Hash[]): Promise<(v600.Proposal | undefined)[]> {
    assert(this.isV600)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV701() {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ee6b01382208f65f572d48f976f6aed61ffaa0ab5504b21b5063d134cdbd4153'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV701(key: v701.Hash): Promise<v701.Proposal | undefined> {
    assert(this.isV701)
    return this._chain.getStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV701(keys: v701.Hash[]): Promise<(v701.Proposal | undefined)[]> {
    assert(this.isV701)
    return this._chain.queryStorage(this.blockHash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
  }
}

export class TechCommitteeCollectiveProposalOfStorage {
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '865c942056a01b1dd23fb27cb999c2ba92166cdecf033312955cc6d93d809fe3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1001(key: v1001.H256): Promise<v1001.Call | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1001(keys: v1001.H256[]): Promise<(v1001.Call | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1101() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '9f9097d7732298fa1b657f6d495d6cc0b4bb70d62f1a6c8197a0998cf2757623'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1101(key: v1101.H256): Promise<v1101.Call | undefined> {
    assert(this.isV1101)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1101(keys: v1101.H256[]): Promise<(v1101.Call | undefined)[]> {
    assert(this.isV1101)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1201() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'adac8b1e930f0dfc4bbaf266955a2478dcb8f27995a57c8bf984083640bdfe19'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1201(key: v1201.H256): Promise<v1201.Call | undefined> {
    assert(this.isV1201)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1201(keys: v1201.H256[]): Promise<(v1201.Call | undefined)[]> {
    assert(this.isV1201)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1300() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'e299c91b5dedd2fa94ef2428f108832be8fa9944f78bfc107925d77dd2dee53b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1300(key: v1300.H256): Promise<v1300.Call | undefined> {
    assert(this.isV1300)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1300(keys: v1300.H256[]): Promise<(v1300.Call | undefined)[]> {
    assert(this.isV1300)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1401() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'bc7932a09e814473cdd716a9c2c5940e312ba50d329c093bff71b700152d184f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1401(key: v1401.H256): Promise<v1401.Call | undefined> {
    assert(this.isV1401)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1401(keys: v1401.H256[]): Promise<(v1401.Call | undefined)[]> {
    assert(this.isV1401)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1502() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'f976c79855f0698ff6ccd64ec7d4dddca3feb15a401c5d44fa21d5f686f74f04'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1502(key: v1502.H256): Promise<v1502.Call | undefined> {
    assert(this.isV1502)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1502(keys: v1502.H256[]): Promise<(v1502.Call | undefined)[]> {
    assert(this.isV1502)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1605() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '1f14895f26d5ac760fd669f6323ae4dc26ecc8011a9bd93ec4f5dfa603e740f6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1605(key: v1605.H256): Promise<v1605.Call | undefined> {
    assert(this.isV1605)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV1605(keys: v1605.H256[]): Promise<(v1605.Call | undefined)[]> {
    assert(this.isV1605)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '30d56581e955e0a747e440dc53c3fb3bab066b651da862046e5832ebf1009946'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: v900.H256): Promise<v900.Call | undefined> {
    assert(this.isV900)
    return this._chain.getStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  async getManyAsV900(keys: v900.H256[]): Promise<(v900.Call | undefined)[]> {
    assert(this.isV900)
    return this._chain.queryStorage(this.blockHash, 'TechCommitteeCollective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') != null
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
  get isV1001() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1001(key: number): Promise<v1001.Proposal | undefined> {
    assert(this.isV1001)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV1001(keys: number[]): Promise<(v1001.Proposal | undefined)[]> {
    assert(this.isV1001)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
