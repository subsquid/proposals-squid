import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v900 from './v900'
import * as v1001 from './v1001'
import * as v1101 from './v1101'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v1502 from './v1502'

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
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '919af622d951de732d3f1c7b7c7ddcf243abf5da10b66cab64909ba5624c46aa'
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
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '6ead1e9c0d2fca989310366d152236346152ea4c00b150c42a830863adbd42b7'
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
  get isV900() {
    return this._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'd51fefa76f62a2b7ceac95525ba89c61cddd3315a5e7ee25d057967ccf5a99c8'
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
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
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
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '919af622d951de732d3f1c7b7c7ddcf243abf5da10b66cab64909ba5624c46aa'
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
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '6ead1e9c0d2fca989310366d152236346152ea4c00b150c42a830863adbd42b7'
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
  get isV900() {
    return this._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'd51fefa76f62a2b7ceac95525ba89c61cddd3315a5e7ee25d057967ccf5a99c8'
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
