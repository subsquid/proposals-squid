import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v1020 from './v1020'
import * as v1022 from './v1022'
import * as v1024 from './v1024'
import * as v1027 from './v1027'
import * as v1029 from './v1029'
import * as v1030 from './v1030'
import * as v1031 from './v1031'
import * as v1032 from './v1032'
import * as v1038 from './v1038'
import * as v1039 from './v1039'
import * as v1040 from './v1040'
import * as v1042 from './v1042'
import * as v1050 from './v1050'
import * as v1054 from './v1054'
import * as v1055 from './v1055'
import * as v1058 from './v1058'
import * as v1062 from './v1062'
import * as v2005 from './v2005'
import * as v2007 from './v2007'
import * as v2011 from './v2011'
import * as v2013 from './v2013'
import * as v2015 from './v2015'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2024 from './v2024'
import * as v2025 from './v2025'
import * as v2026 from './v2026'
import * as v2028 from './v2028'
import * as v2029 from './v2029'
import * as v2030 from './v2030'
import * as v9010 from './v9010'
import * as v9030 from './v9030'
import * as v9040 from './v9040'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9111 from './v9111'
import * as v9122 from './v9122'
import * as v9130 from './v9130'
import * as v9160 from './v9160'
import * as v9170 from './v9170'
import * as v9180 from './v9180'
import * as v9190 from './v9190'
import * as v9220 from './v9220'

export class BalancesAccountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  get isV1050() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
   *  is ever zero, then the entry *MUST* be removed.
   * 
   *  NOTE: This is only used in the case that this module is used to store balances.
   */
  async getAsV1050(key: v1050.AccountId): Promise<v1050.AccountData> {
    assert(this.isV1050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'Account', key)
  }

  async getManyAsV1050(keys: v1050.AccountId[]): Promise<(v1050.AccountData)[]> {
    assert(this.isV1050)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Balances', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1020(): Promise<v1020.Balance> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BountiesBountiesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Bounties that have been made.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV9111(key: number): Promise<v9111.Bounty | undefined> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Bounties', 'Bounties', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.Bounty | undefined)[]> {
    assert(this.isV9111)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Bounties', 'Bounties', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class CouncilMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV9111(): Promise<v9111.AccountId32[]> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilProposalCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals so far.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV9111(): Promise<number> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9111(key: v9111.H256): Promise<v9111.Call | undefined> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9111(keys: v9111.H256[]): Promise<(v9111.Call | undefined)[]> {
    assert(this.isV9111)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9122() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9122(key: v9122.H256): Promise<v9122.Call | undefined> {
    assert(this.isV9122)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9122(keys: v9122.H256[]): Promise<(v9122.Call | undefined)[]> {
    assert(this.isV9122)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9130() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '771a0827eb13fc4190ea879c908b28cd46e50cc4eea92ce695433a0d34417fd2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9130(key: v9130.H256): Promise<v9130.Call | undefined> {
    assert(this.isV9130)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9130(keys: v9130.H256[]): Promise<(v9130.Call | undefined)[]> {
    assert(this.isV9130)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9160() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '836dba8139435bbad397865c8087e909e07155ca6789f28117be9be78a76f03a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9160(key: v9160.H256): Promise<v9160.Call | undefined> {
    assert(this.isV9160)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9160(keys: v9160.H256[]): Promise<(v9160.Call | undefined)[]> {
    assert(this.isV9160)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '981edb925a6901db31fe53126d4c3e9d318989d80da8eeb384d62bb46163e280'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: v9170.H256): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: v9170.H256[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '6a2618971629efc0cc2b9299f5ea8071f2a98eb975d38abbfe1179b62abbfdcd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: v9180.H256): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: v9180.H256[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '81b65eb804da3365d8cdd24c14cfc9e7b042151c9f94f42b7210ef3337145243'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: v9190.H256): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: v9190.H256[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '4498453a1226fec5bf63af9bd29732d3c48e950007698929b56326f760588995'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: v9220.H256): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: v9220.H256[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
  }
}

export class DemocracyPreimagesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1022() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '8d49bec84532cce5991ad4c420ddf4ab792644a27de5f8450488e36a6c1c40ef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1022(key: v1022.Hash): Promise<[Uint8Array, v1022.AccountId, v1022.BalanceOf, v1022.BlockNumber] | undefined> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1022(keys: v1022.Hash[]): Promise<([Uint8Array, v1022.AccountId, v1022.BalanceOf, v1022.BlockNumber] | undefined)[]> {
    assert(this.isV1022)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1058() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1058(key: v1058.Hash): Promise<v1058.PreimageStatus | undefined> {
    assert(this.isV1058)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV1058(keys: v1058.Hash[]): Promise<(v1058.PreimageStatus | undefined)[]> {
    assert(this.isV1058)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV9111(key: v9111.H256): Promise<v9111.PreimageStatus | undefined> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV9111(keys: v9111.H256[]): Promise<(v9111.PreimageStatus | undefined)[]> {
    assert(this.isV9111)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyPublicPropCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV1020(): Promise<v1020.PropIndex> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The public proposals. Unsorted.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '73cb1a7c4424f713001c8416e3f33d8a4cff058377ae880f2cae103ae0ffec18'
  }

  /**
   *  The public proposals. Unsorted.
   */
  async getAsV1020(): Promise<[v1020.PropIndex, v1020.Proposal, v1020.AccountId][]> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'PublicProps')
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV1022() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV1022(): Promise<[v1022.PropIndex, v1022.Hash, v1022.AccountId][]> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Information concerning any given referendum.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === 'b841a2a79796892945d8a9256375f0a9e422926b95cb3e85c8edae023ec07300'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1020(key: v1020.ReferendumIndex): Promise<v1020.Type_283 | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1020(keys: v1020.ReferendumIndex[]): Promise<(v1020.Type_283 | undefined)[]> {
    assert(this.isV1020)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   */
  get isV1055() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   */
  async getAsV1055(key: v1055.ReferendumIndex): Promise<v1055.ReferendumInfo | undefined> {
    assert(this.isV1055)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV1055(keys: v1055.ReferendumIndex[]): Promise<(v1055.ReferendumInfo | undefined)[]> {
    assert(this.isV1055)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV9111(key: number): Promise<v9111.ReferendumInfo | undefined> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV9111(keys: number[]): Promise<(v9111.ReferendumInfo | undefined)[]> {
    assert(this.isV9111)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class Instance1CollectiveMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1020(): Promise<v1020.AccountId[]> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'Members') != null
  }
}

export class Instance1CollectiveProposalCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals so far.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1020(): Promise<number> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') != null
  }
}

export class Instance1CollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '988b54a69200501d1caa21231c09e8d115ce376b26e5cfe53b9efe6d1aa2353f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: v1020.Hash): Promise<v1020.Proposal | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1020(keys: v1020.Hash[]): Promise<(v1020.Proposal | undefined)[]> {
    assert(this.isV1020)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'dd07ea6860eb31afbcf979619a9f751f46be77411e9c22ab6d968f1cbb826975'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: v1022.Hash): Promise<v1022.Proposal | undefined> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1022(keys: v1022.Hash[]): Promise<(v1022.Proposal | undefined)[]> {
    assert(this.isV1022)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'd1057f90e4da1f4375c8e1942f93abac694f8f1e3eb41ae19b49794a3cd7754c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: v1024.Hash): Promise<v1024.Proposal | undefined> {
    assert(this.isV1024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1024(keys: v1024.Hash[]): Promise<(v1024.Proposal | undefined)[]> {
    assert(this.isV1024)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '952306cf3b40b722e8a89f97348456e7288504655b1fef8f8848728064e020d6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: v1027.Hash): Promise<v1027.Proposal | undefined> {
    assert(this.isV1027)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1027(keys: v1027.Hash[]): Promise<(v1027.Proposal | undefined)[]> {
    assert(this.isV1027)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c684ff44da66806df8f7b0311e8b461bcd53a6438c7321d8065c89376d754173'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: v1029.Hash): Promise<v1029.Proposal | undefined> {
    assert(this.isV1029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1029(keys: v1029.Hash[]): Promise<(v1029.Proposal | undefined)[]> {
    assert(this.isV1029)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a5dece5dab1ee986977b4658ed7c0dcc0ead6936604d3359ae5d56497127c435'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: v1030.Hash): Promise<v1030.Proposal | undefined> {
    assert(this.isV1030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1030(keys: v1030.Hash[]): Promise<(v1030.Proposal | undefined)[]> {
    assert(this.isV1030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '491d769f67c8b91e6c1892535c8a0d6726eac1c321ce672b23b722cea1b1ab46'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: v1031.Hash): Promise<v1031.Proposal | undefined> {
    assert(this.isV1031)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1031(keys: v1031.Hash[]): Promise<(v1031.Proposal | undefined)[]> {
    assert(this.isV1031)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '3cec838f63976aa29bba710d21944d10bd6aaf418ca780e11fe2c2d0e628d629'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: v1032.Hash): Promise<v1032.Proposal | undefined> {
    assert(this.isV1032)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1032(keys: v1032.Hash[]): Promise<(v1032.Proposal | undefined)[]> {
    assert(this.isV1032)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6f242fd68c6cf6b13795cb7c87e22bc4d5cb344260c9c4976f712b389f1a72e5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: v1038.Hash): Promise<v1038.Proposal | undefined> {
    assert(this.isV1038)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1038(keys: v1038.Hash[]): Promise<(v1038.Proposal | undefined)[]> {
    assert(this.isV1038)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '46ed4057a9e44696c823f53a2afcf45ec0e1319fff4b984ff2a78dac066632b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: v1039.Hash): Promise<v1039.Proposal | undefined> {
    assert(this.isV1039)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1039(keys: v1039.Hash[]): Promise<(v1039.Proposal | undefined)[]> {
    assert(this.isV1039)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '09964938a6344ce4017f443d37b809998da5205b97ba32089dc34e25517d8727'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: v1040.Hash): Promise<v1040.Proposal | undefined> {
    assert(this.isV1040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1040(keys: v1040.Hash[]): Promise<(v1040.Proposal | undefined)[]> {
    assert(this.isV1040)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c5be77395b90894b0b9d89a8bfd40c3969fd90f48d12a513d31f62f19ba198b2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: v1042.Hash): Promise<v1042.Proposal | undefined> {
    assert(this.isV1042)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1042(keys: v1042.Hash[]): Promise<(v1042.Proposal | undefined)[]> {
    assert(this.isV1042)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '75a26ba5a11378b5ec0d7e80a5150e53f1723bf825534c48ac8df88d46f8ad11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: v1050.Hash): Promise<v1050.Proposal | undefined> {
    assert(this.isV1050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1050(keys: v1050.Hash[]): Promise<(v1050.Proposal | undefined)[]> {
    assert(this.isV1050)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ecb491dab152e949512780951867e171f6a72abd7ec8510103dcec7c8482218c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: v1054.Hash): Promise<v1054.Proposal | undefined> {
    assert(this.isV1054)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1054(keys: v1054.Hash[]): Promise<(v1054.Proposal | undefined)[]> {
    assert(this.isV1054)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f76941917fe1c97effc3b54c45775b17c3dd7b8644e859888214965a3d2c1915'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: v1055.Hash): Promise<v1055.Proposal | undefined> {
    assert(this.isV1055)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1055(keys: v1055.Hash[]): Promise<(v1055.Proposal | undefined)[]> {
    assert(this.isV1055)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a40aebf7430950292287f9ba1ac41514aec633d7ce9c595b51922b2d00f766c4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: v1058.Hash): Promise<v1058.Proposal | undefined> {
    assert(this.isV1058)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1058(keys: v1058.Hash[]): Promise<(v1058.Proposal | undefined)[]> {
    assert(this.isV1058)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f1964574c2acdf7657cebbec13992465e146c9c1d70a9ebfe5cb2c849e33a8fb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: v1062.Hash): Promise<v1062.Proposal | undefined> {
    assert(this.isV1062)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV1062(keys: v1062.Hash[]): Promise<(v1062.Proposal | undefined)[]> {
    assert(this.isV1062)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '59d62f9580ec29b948bb61b54782d0eb894f759082f4cd66b3d721cd51fc6eab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: v2005.Hash): Promise<v2005.Proposal | undefined> {
    assert(this.isV2005)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2005(keys: v2005.Hash[]): Promise<(v2005.Proposal | undefined)[]> {
    assert(this.isV2005)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9b8403a58da018e039e7d02e03c58751e5f3966f734c0a805247c8f819ebe6e6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: v2007.Hash): Promise<v2007.Proposal | undefined> {
    assert(this.isV2007)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2007(keys: v2007.Hash[]): Promise<(v2007.Proposal | undefined)[]> {
    assert(this.isV2007)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '72ae96a40c2e115fd196fda8aba62965500743102911195e5db6bffe5c730a89'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: v2011.Hash): Promise<v2011.Proposal | undefined> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: v2011.Hash[]): Promise<(v2011.Proposal | undefined)[]> {
    assert(this.isV2011)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '646a7b14d2d0c7e0302ab7e697eb7a22ce351bc30f8ed014a36febdee8fd066c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: v2013.Hash): Promise<v2013.Proposal | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: v2013.Hash[]): Promise<(v2013.Proposal | undefined)[]> {
    assert(this.isV2013)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '49cb7fd61e09b6e09885d9254e3179527de1bb56a3bac4e41806540efa177504'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: v2015.Hash): Promise<v2015.Proposal | undefined> {
    assert(this.isV2015)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2015(keys: v2015.Hash[]): Promise<(v2015.Proposal | undefined)[]> {
    assert(this.isV2015)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e940a02bab509e8f3c662c3743d99681461dc41eb7807d9f724137541d6d6888'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: v2022.Hash): Promise<v2022.Proposal | undefined> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: v2022.Hash[]): Promise<(v2022.Proposal | undefined)[]> {
    assert(this.isV2022)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '28ae6082aa3659f3eb665b763906f5f43dfc25a261e76bc3bfaae2bf35809886'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: v2023.Hash): Promise<v2023.Proposal | undefined> {
    assert(this.isV2023)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: v2023.Hash[]): Promise<(v2023.Proposal | undefined)[]> {
    assert(this.isV2023)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2024() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '30c3471266df7fa23a52dd4c3eee936e8a38a242733b19606a6d8434b8818044'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2024(key: v2024.Hash): Promise<v2024.Proposal | undefined> {
    assert(this.isV2024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2024(keys: v2024.Hash[]): Promise<(v2024.Proposal | undefined)[]> {
    assert(this.isV2024)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2025() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'c6aa8f92b929d74aa84d6bc73ac4de7208eb9ea79b0633b7ece10545e71bc6bc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2025(key: v2025.Hash): Promise<v2025.Proposal | undefined> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2025(keys: v2025.Hash[]): Promise<(v2025.Proposal | undefined)[]> {
    assert(this.isV2025)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2026() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8273b8a7016b06dcb65adf9f34a09480690bdb5cd14cc410c9b0899a03dd8f22'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2026(key: v2026.Hash): Promise<v2026.Proposal | undefined> {
    assert(this.isV2026)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2026(keys: v2026.Hash[]): Promise<(v2026.Proposal | undefined)[]> {
    assert(this.isV2026)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2028() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '90dd79f7117af09c072af285850479432c5a99791d1cb8011e2307aefaf37418'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2028(key: v2028.Hash): Promise<v2028.Proposal | undefined> {
    assert(this.isV2028)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2028(keys: v2028.Hash[]): Promise<(v2028.Proposal | undefined)[]> {
    assert(this.isV2028)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2029() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '9a9b6f49439518cb37672ca52b7e5cdb2843109031f61e24e5cf371f32c697a7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2029(key: v2029.Hash): Promise<v2029.Proposal | undefined> {
    assert(this.isV2029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2029(keys: v2029.Hash[]): Promise<(v2029.Proposal | undefined)[]> {
    assert(this.isV2029)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '25b92df233c91ed77e0904a09051cb0985d8c95cc1fce890170e11c95ab35140'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2030(key: v2030.Hash): Promise<v2030.Proposal | undefined> {
    assert(this.isV2030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV2030(keys: v2030.Hash[]): Promise<(v2030.Proposal | undefined)[]> {
    assert(this.isV2030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9010() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5bf6f4d6a582b79d1aee1559e4425bb7d7571ed6552fd0809e0e4b0dbbf14be1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9010(key: v9010.Hash): Promise<v9010.Proposal | undefined> {
    assert(this.isV9010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9010(keys: v9010.Hash[]): Promise<(v9010.Proposal | undefined)[]> {
    assert(this.isV9010)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '267a1fbacfcf39c6f41faa7e15dafc885f811d4264d1b98fd4dedb06864a2336'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9030(key: v9030.Hash): Promise<v9030.Proposal | undefined> {
    assert(this.isV9030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9030(keys: v9030.Hash[]): Promise<(v9030.Proposal | undefined)[]> {
    assert(this.isV9030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9040() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5972aac9112d1be3d00a2d2b08c3514aa87c25a026ecea82cc1e4313f6ab53fd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9040(key: v9040.Hash): Promise<v9040.Proposal | undefined> {
    assert(this.isV9040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9040(keys: v9040.Hash[]): Promise<(v9040.Proposal | undefined)[]> {
    assert(this.isV9040)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '13cccf90ea77264605ec33f6f3b06b5c5099212f507d16348a4307e25e0037c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: v9050.Hash): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: v9050.Hash[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a06f31f28526e77b614a3b1ddf8bbed59ba55c22b665429e9747768d6a8dabcb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: v9080.Hash): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: v9080.Hash[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '56cdb3f333767ac0c8f3522af138085a5e74d4faaeea50fddc95031771c85058'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: v9090.Hash): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: v9090.Hash[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'eaae83c0de21b5d6a3d1072074b4bb2172d61801a9d623da700c1b0b85c82321'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: v9100.Hash): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: v9100.Hash[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') != null
  }
}

export class Instance2CollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '988b54a69200501d1caa21231c09e8d115ce376b26e5cfe53b9efe6d1aa2353f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: v1020.Hash): Promise<v1020.Proposal | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1020(keys: v1020.Hash[]): Promise<(v1020.Proposal | undefined)[]> {
    assert(this.isV1020)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'dd07ea6860eb31afbcf979619a9f751f46be77411e9c22ab6d968f1cbb826975'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: v1022.Hash): Promise<v1022.Proposal | undefined> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1022(keys: v1022.Hash[]): Promise<(v1022.Proposal | undefined)[]> {
    assert(this.isV1022)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'd1057f90e4da1f4375c8e1942f93abac694f8f1e3eb41ae19b49794a3cd7754c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: v1024.Hash): Promise<v1024.Proposal | undefined> {
    assert(this.isV1024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1024(keys: v1024.Hash[]): Promise<(v1024.Proposal | undefined)[]> {
    assert(this.isV1024)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '952306cf3b40b722e8a89f97348456e7288504655b1fef8f8848728064e020d6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: v1027.Hash): Promise<v1027.Proposal | undefined> {
    assert(this.isV1027)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1027(keys: v1027.Hash[]): Promise<(v1027.Proposal | undefined)[]> {
    assert(this.isV1027)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c684ff44da66806df8f7b0311e8b461bcd53a6438c7321d8065c89376d754173'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: v1029.Hash): Promise<v1029.Proposal | undefined> {
    assert(this.isV1029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1029(keys: v1029.Hash[]): Promise<(v1029.Proposal | undefined)[]> {
    assert(this.isV1029)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a5dece5dab1ee986977b4658ed7c0dcc0ead6936604d3359ae5d56497127c435'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: v1030.Hash): Promise<v1030.Proposal | undefined> {
    assert(this.isV1030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1030(keys: v1030.Hash[]): Promise<(v1030.Proposal | undefined)[]> {
    assert(this.isV1030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '491d769f67c8b91e6c1892535c8a0d6726eac1c321ce672b23b722cea1b1ab46'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: v1031.Hash): Promise<v1031.Proposal | undefined> {
    assert(this.isV1031)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1031(keys: v1031.Hash[]): Promise<(v1031.Proposal | undefined)[]> {
    assert(this.isV1031)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '3cec838f63976aa29bba710d21944d10bd6aaf418ca780e11fe2c2d0e628d629'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: v1032.Hash): Promise<v1032.Proposal | undefined> {
    assert(this.isV1032)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1032(keys: v1032.Hash[]): Promise<(v1032.Proposal | undefined)[]> {
    assert(this.isV1032)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6f242fd68c6cf6b13795cb7c87e22bc4d5cb344260c9c4976f712b389f1a72e5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: v1038.Hash): Promise<v1038.Proposal | undefined> {
    assert(this.isV1038)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1038(keys: v1038.Hash[]): Promise<(v1038.Proposal | undefined)[]> {
    assert(this.isV1038)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '46ed4057a9e44696c823f53a2afcf45ec0e1319fff4b984ff2a78dac066632b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: v1039.Hash): Promise<v1039.Proposal | undefined> {
    assert(this.isV1039)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1039(keys: v1039.Hash[]): Promise<(v1039.Proposal | undefined)[]> {
    assert(this.isV1039)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '09964938a6344ce4017f443d37b809998da5205b97ba32089dc34e25517d8727'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: v1040.Hash): Promise<v1040.Proposal | undefined> {
    assert(this.isV1040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1040(keys: v1040.Hash[]): Promise<(v1040.Proposal | undefined)[]> {
    assert(this.isV1040)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c5be77395b90894b0b9d89a8bfd40c3969fd90f48d12a513d31f62f19ba198b2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: v1042.Hash): Promise<v1042.Proposal | undefined> {
    assert(this.isV1042)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1042(keys: v1042.Hash[]): Promise<(v1042.Proposal | undefined)[]> {
    assert(this.isV1042)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '75a26ba5a11378b5ec0d7e80a5150e53f1723bf825534c48ac8df88d46f8ad11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: v1050.Hash): Promise<v1050.Proposal | undefined> {
    assert(this.isV1050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1050(keys: v1050.Hash[]): Promise<(v1050.Proposal | undefined)[]> {
    assert(this.isV1050)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ecb491dab152e949512780951867e171f6a72abd7ec8510103dcec7c8482218c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: v1054.Hash): Promise<v1054.Proposal | undefined> {
    assert(this.isV1054)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1054(keys: v1054.Hash[]): Promise<(v1054.Proposal | undefined)[]> {
    assert(this.isV1054)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f76941917fe1c97effc3b54c45775b17c3dd7b8644e859888214965a3d2c1915'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: v1055.Hash): Promise<v1055.Proposal | undefined> {
    assert(this.isV1055)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1055(keys: v1055.Hash[]): Promise<(v1055.Proposal | undefined)[]> {
    assert(this.isV1055)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a40aebf7430950292287f9ba1ac41514aec633d7ce9c595b51922b2d00f766c4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: v1058.Hash): Promise<v1058.Proposal | undefined> {
    assert(this.isV1058)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1058(keys: v1058.Hash[]): Promise<(v1058.Proposal | undefined)[]> {
    assert(this.isV1058)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f1964574c2acdf7657cebbec13992465e146c9c1d70a9ebfe5cb2c849e33a8fb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: v1062.Hash): Promise<v1062.Proposal | undefined> {
    assert(this.isV1062)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV1062(keys: v1062.Hash[]): Promise<(v1062.Proposal | undefined)[]> {
    assert(this.isV1062)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '59d62f9580ec29b948bb61b54782d0eb894f759082f4cd66b3d721cd51fc6eab'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: v2005.Hash): Promise<v2005.Proposal | undefined> {
    assert(this.isV2005)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2005(keys: v2005.Hash[]): Promise<(v2005.Proposal | undefined)[]> {
    assert(this.isV2005)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9b8403a58da018e039e7d02e03c58751e5f3966f734c0a805247c8f819ebe6e6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: v2007.Hash): Promise<v2007.Proposal | undefined> {
    assert(this.isV2007)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2007(keys: v2007.Hash[]): Promise<(v2007.Proposal | undefined)[]> {
    assert(this.isV2007)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '72ae96a40c2e115fd196fda8aba62965500743102911195e5db6bffe5c730a89'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: v2011.Hash): Promise<v2011.Proposal | undefined> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2011(keys: v2011.Hash[]): Promise<(v2011.Proposal | undefined)[]> {
    assert(this.isV2011)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '646a7b14d2d0c7e0302ab7e697eb7a22ce351bc30f8ed014a36febdee8fd066c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: v2013.Hash): Promise<v2013.Proposal | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2013(keys: v2013.Hash[]): Promise<(v2013.Proposal | undefined)[]> {
    assert(this.isV2013)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '49cb7fd61e09b6e09885d9254e3179527de1bb56a3bac4e41806540efa177504'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: v2015.Hash): Promise<v2015.Proposal | undefined> {
    assert(this.isV2015)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2015(keys: v2015.Hash[]): Promise<(v2015.Proposal | undefined)[]> {
    assert(this.isV2015)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e940a02bab509e8f3c662c3743d99681461dc41eb7807d9f724137541d6d6888'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: v2022.Hash): Promise<v2022.Proposal | undefined> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2022(keys: v2022.Hash[]): Promise<(v2022.Proposal | undefined)[]> {
    assert(this.isV2022)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '28ae6082aa3659f3eb665b763906f5f43dfc25a261e76bc3bfaae2bf35809886'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: v2023.Hash): Promise<v2023.Proposal | undefined> {
    assert(this.isV2023)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2023(keys: v2023.Hash[]): Promise<(v2023.Proposal | undefined)[]> {
    assert(this.isV2023)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2024() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '30c3471266df7fa23a52dd4c3eee936e8a38a242733b19606a6d8434b8818044'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2024(key: v2024.Hash): Promise<v2024.Proposal | undefined> {
    assert(this.isV2024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2024(keys: v2024.Hash[]): Promise<(v2024.Proposal | undefined)[]> {
    assert(this.isV2024)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2025() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'c6aa8f92b929d74aa84d6bc73ac4de7208eb9ea79b0633b7ece10545e71bc6bc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2025(key: v2025.Hash): Promise<v2025.Proposal | undefined> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2025(keys: v2025.Hash[]): Promise<(v2025.Proposal | undefined)[]> {
    assert(this.isV2025)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2026() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8273b8a7016b06dcb65adf9f34a09480690bdb5cd14cc410c9b0899a03dd8f22'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2026(key: v2026.Hash): Promise<v2026.Proposal | undefined> {
    assert(this.isV2026)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2026(keys: v2026.Hash[]): Promise<(v2026.Proposal | undefined)[]> {
    assert(this.isV2026)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2028() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '90dd79f7117af09c072af285850479432c5a99791d1cb8011e2307aefaf37418'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2028(key: v2028.Hash): Promise<v2028.Proposal | undefined> {
    assert(this.isV2028)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2028(keys: v2028.Hash[]): Promise<(v2028.Proposal | undefined)[]> {
    assert(this.isV2028)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2029() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '9a9b6f49439518cb37672ca52b7e5cdb2843109031f61e24e5cf371f32c697a7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2029(key: v2029.Hash): Promise<v2029.Proposal | undefined> {
    assert(this.isV2029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2029(keys: v2029.Hash[]): Promise<(v2029.Proposal | undefined)[]> {
    assert(this.isV2029)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '25b92df233c91ed77e0904a09051cb0985d8c95cc1fce890170e11c95ab35140'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2030(key: v2030.Hash): Promise<v2030.Proposal | undefined> {
    assert(this.isV2030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV2030(keys: v2030.Hash[]): Promise<(v2030.Proposal | undefined)[]> {
    assert(this.isV2030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9010() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5bf6f4d6a582b79d1aee1559e4425bb7d7571ed6552fd0809e0e4b0dbbf14be1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9010(key: v9010.Hash): Promise<v9010.Proposal | undefined> {
    assert(this.isV9010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9010(keys: v9010.Hash[]): Promise<(v9010.Proposal | undefined)[]> {
    assert(this.isV9010)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '267a1fbacfcf39c6f41faa7e15dafc885f811d4264d1b98fd4dedb06864a2336'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9030(key: v9030.Hash): Promise<v9030.Proposal | undefined> {
    assert(this.isV9030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9030(keys: v9030.Hash[]): Promise<(v9030.Proposal | undefined)[]> {
    assert(this.isV9030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9040() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5972aac9112d1be3d00a2d2b08c3514aa87c25a026ecea82cc1e4313f6ab53fd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9040(key: v9040.Hash): Promise<v9040.Proposal | undefined> {
    assert(this.isV9040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9040(keys: v9040.Hash[]): Promise<(v9040.Proposal | undefined)[]> {
    assert(this.isV9040)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '13cccf90ea77264605ec33f6f3b06b5c5099212f507d16348a4307e25e0037c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: v9050.Hash): Promise<v9050.Proposal | undefined> {
    assert(this.isV9050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9050(keys: v9050.Hash[]): Promise<(v9050.Proposal | undefined)[]> {
    assert(this.isV9050)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a06f31f28526e77b614a3b1ddf8bbed59ba55c22b665429e9747768d6a8dabcb'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: v9080.Hash): Promise<v9080.Proposal | undefined> {
    assert(this.isV9080)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9080(keys: v9080.Hash[]): Promise<(v9080.Proposal | undefined)[]> {
    assert(this.isV9080)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '56cdb3f333767ac0c8f3522af138085a5e74d4faaeea50fddc95031771c85058'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: v9090.Hash): Promise<v9090.Proposal | undefined> {
    assert(this.isV9090)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9090(keys: v9090.Hash[]): Promise<(v9090.Proposal | undefined)[]> {
    assert(this.isV9090)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'eaae83c0de21b5d6a3d1072074b4bb2172d61801a9d623da700c1b0b85c82321'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: v9100.Hash): Promise<v9100.Proposal | undefined> {
    assert(this.isV9100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  async getManyAsV9100(keys: v9100.Hash[]): Promise<(v9100.Proposal | undefined)[]> {
    assert(this.isV9100)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
  }
}

export class SystemAccountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The full account information for a particular account ID.
   */
  get isV1050() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') === '2208f857b7cd6fecf78ca393cf3d17ec424773727d0028f07c9f0dc608fc1b7a'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV1050(key: v1050.AccountId): Promise<v1050.AccountInfo> {
    assert(this.isV1050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
  }

  async getManyAsV1050(keys: v1050.AccountId[]): Promise<(v1050.AccountInfo)[]> {
    assert(this.isV1050)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2025() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') === 'eb40f1d91f26d72e29c60e034d53a72b9b529014c7e108f422d8ad5f03f0c902'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2025(key: v2025.AccountId): Promise<v2025.AccountInfo> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
  }

  async getManyAsV2025(keys: v2025.AccountId[]): Promise<(v2025.AccountInfo)[]> {
    assert(this.isV2025)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2028() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') === '73070b537f1805475b37167271b33ac7fd6ffad8ba62da08bc14937a017b8bb2'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2028(key: v2028.AccountId): Promise<v2028.AccountInfo> {
    assert(this.isV2028)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
  }

  async getManyAsV2028(keys: v2028.AccountId[]): Promise<(v2028.AccountInfo)[]> {
    assert(this.isV2028)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV2030() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV2030(key: v2030.AccountId): Promise<v2030.AccountInfo> {
    assert(this.isV2030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
  }

  async getManyAsV2030(keys: v2030.AccountId[]): Promise<(v2030.AccountInfo)[]> {
    assert(this.isV2030)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'System', 'Account', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAccountNonceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Extrinsics nonce for accounts.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'AccountNonce') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  Extrinsics nonce for accounts.
   */
  async getAsV1020(key: v1020.AccountId): Promise<v1020.Index> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'AccountNonce', key)
  }

  async getManyAsV1020(keys: v1020.AccountId[]): Promise<(v1020.Index)[]> {
    assert(this.isV1020)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'System', 'AccountNonce', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'AccountNonce') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '54e55db1bed5771689c23398470e3d79c164300b3002e905baf8a07324946142'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9111(key: v9111.H256): Promise<v9111.Call | undefined> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9111(keys: v9111.H256[]): Promise<(v9111.Call | undefined)[]> {
    assert(this.isV9111)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9122() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '35e9c06eaf393488c6b16cf365c09693bf1c81cc6d198b6016c29648cb8b11db'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9122(key: v9122.H256): Promise<v9122.Call | undefined> {
    assert(this.isV9122)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9122(keys: v9122.H256[]): Promise<(v9122.Call | undefined)[]> {
    assert(this.isV9122)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9130() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '771a0827eb13fc4190ea879c908b28cd46e50cc4eea92ce695433a0d34417fd2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9130(key: v9130.H256): Promise<v9130.Call | undefined> {
    assert(this.isV9130)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9130(keys: v9130.H256[]): Promise<(v9130.Call | undefined)[]> {
    assert(this.isV9130)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9160() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '836dba8139435bbad397865c8087e909e07155ca6789f28117be9be78a76f03a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9160(key: v9160.H256): Promise<v9160.Call | undefined> {
    assert(this.isV9160)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9160(keys: v9160.H256[]): Promise<(v9160.Call | undefined)[]> {
    assert(this.isV9160)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '981edb925a6901db31fe53126d4c3e9d318989d80da8eeb384d62bb46163e280'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9170(key: v9170.H256): Promise<v9170.Call | undefined> {
    assert(this.isV9170)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9170(keys: v9170.H256[]): Promise<(v9170.Call | undefined)[]> {
    assert(this.isV9170)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9180() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '6a2618971629efc0cc2b9299f5ea8071f2a98eb975d38abbfe1179b62abbfdcd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9180(key: v9180.H256): Promise<v9180.Call | undefined> {
    assert(this.isV9180)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9180(keys: v9180.H256[]): Promise<(v9180.Call | undefined)[]> {
    assert(this.isV9180)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9190() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '81b65eb804da3365d8cdd24c14cfc9e7b042151c9f94f42b7210ef3337145243'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9190(key: v9190.H256): Promise<v9190.Call | undefined> {
    assert(this.isV9190)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9190(keys: v9190.H256[]): Promise<(v9190.Call | undefined)[]> {
    assert(this.isV9190)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9220() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '4498453a1226fec5bf63af9bd29732d3c48e950007698929b56326f760588995'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9220(key: v9220.H256): Promise<v9220.Call | undefined> {
    assert(this.isV9220)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV9220(keys: v9220.H256[]): Promise<(v9220.Call | undefined)[]> {
    assert(this.isV9220)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TipsTipsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV9111() {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV9111(key: v9111.H256): Promise<v9111.OpenTip | undefined> {
    assert(this.isV9111)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Tips', 'Tips', key)
  }

  async getManyAsV9111(keys: v9111.H256[]): Promise<(v9111.OpenTip | undefined)[]> {
    assert(this.isV9111)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TreasuryBountiesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Bounties that have been made.
   */
  get isV2025() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV2025(key: v2025.BountyIndex): Promise<v2025.Bounty | undefined> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Bounties', key)
  }

  async getManyAsV2025(keys: v2025.BountyIndex[]): Promise<(v2025.Bounty | undefined)[]> {
    assert(this.isV2025)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Treasury', 'Bounties', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Bounties') != null
  }
}

export class TreasuryProposalsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals that have been made.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1020(key: v1020.ProposalIndex): Promise<v1020.TreasuryProposal | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV1020(keys: v1020.ProposalIndex[]): Promise<(v1020.TreasuryProposal | undefined)[]> {
    assert(this.isV1020)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}

export class TreasuryTipsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV1038() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV1038(key: v1038.Hash): Promise<v1038.OpenTip | undefined> {
    assert(this.isV1038)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  async getManyAsV1038(keys: v1038.Hash[]): Promise<(v1038.OpenTip | undefined)[]> {
    assert(this.isV1038)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV2013(key: v2013.Hash): Promise<v2013.OpenTip | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  async getManyAsV2013(keys: v2013.Hash[]): Promise<(v2013.OpenTip | undefined)[]> {
    assert(this.isV2013)
    return this.ctx._chain.queryStorage(this.ctx.block.hash, 'Treasury', 'Tips', keys.map(k => [k]))
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
