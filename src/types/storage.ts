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
  async getAsV1020(): Promise<bigint> {
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
  async getAsV1022(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint, number] | undefined> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
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
  async getAsV1058(key: Uint8Array): Promise<v1058.PreimageStatus | undefined> {
    assert(this.isV1058)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
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
  async getAsV1020(): Promise<number> {
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
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '122caf335a68e3eddbffd464850dbfe993ebed62828c44065c82ac05fe1b211f'
  }

  /**
   *  The public proposals. Unsorted.
   */
  async getAsV1020(): Promise<[number, v1020.Type_88, Uint8Array][]> {
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
  async getAsV1022(): Promise<[number, Uint8Array, Uint8Array][]> {
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
  async getAsV1020(key: number): Promise<v1020.Type_273 | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
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
  async getAsV1055(key: number): Promise<v1055.ReferendumInfo | undefined> {
    assert(this.isV1055)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
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

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class Instance1CollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1020() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '734cb82f65ce49357861d4fac0afaa7783ab0fa388ea82b9bae26f325fdbaf3a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Type_88 | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '2f845f504652aa9a4dbed577436a564b6aa7e0878f0c77c1bbec8f2c228b6887'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: Uint8Array): Promise<v1022.Type_96 | undefined> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'd237c4ceb71b076111adad357bd8b1ba6755c161482c1470cdb175883e53bc57'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: Uint8Array): Promise<v1024.Type_96 | undefined> {
    assert(this.isV1024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f1d854821a0f6967dcc795dcfe69dbd42bad6bdd397a27b85983226bdac10b17'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: Uint8Array): Promise<v1027.Type_96 | undefined> {
    assert(this.isV1027)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6581c961890f55a85c44104096219cb91ae2fcab378d3b21acff5f8d54ab8608'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: Uint8Array): Promise<v1029.Type_96 | undefined> {
    assert(this.isV1029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '0b3600d629ff77ec095f7772155565c63fde27af54304a55403d042b140ec7f5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Type_96 | undefined> {
    assert(this.isV1030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'be130898e048e44587d4c5ed6d2c54a2e37786a305323cb80081d08abf87700c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: Uint8Array): Promise<v1031.Type_96 | undefined> {
    assert(this.isV1031)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'acc7397fb726869e20cfca9368f836337e5a4d33e86436e82d82f0953c326b97'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Type_96 | undefined> {
    assert(this.isV1032)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6cbae638b09571065cd37dd4c7f849dbbe227b4c042f88dc7b5dada4dc1a0bac'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.Type_96 | undefined> {
    assert(this.isV1038)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '90ef1909b19f79bc67f4ad4cb000034ec5c1f64258b8402a82385329b7ce185a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: Uint8Array): Promise<v1039.Type_96 | undefined> {
    assert(this.isV1039)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '606333b698c6d83708bc3693069fecb27c614328e40974f449aff7323bd9c434'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.Type_96 | undefined> {
    assert(this.isV1040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '289628d9ffef7d37a802e58b6536a3d01da6021d0a4c5dfc12cba1299dfa1d93'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: Uint8Array): Promise<v1042.Type_96 | undefined> {
    assert(this.isV1042)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '3748fc31dec3ff97c3a4382666883b4d0164591adb135c9606f27464e6390e9b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Type_99 | undefined> {
    assert(this.isV1050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '7389e6d7a1767d2c61c135dbf147bca82754cc34012faf67d89cefe50059d442'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: Uint8Array): Promise<v1054.Type_99 | undefined> {
    assert(this.isV1054)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '7e347f2a5184c19e99f1844d452f0c7a84c9340138fb27ff24f18b5f03970c2d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Type_102 | undefined> {
    assert(this.isV1055)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'fe7db31682cb6c482f40e99863ee72c56368678c84e7d337f0ed371264b4003d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.Type_162 | undefined> {
    assert(this.isV1058)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '7476450e6d8e4e4ad9791c14c52fbc024c26d82bd9bc3216fd0551291a0f7a7b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: Uint8Array): Promise<v1062.Type_161 | undefined> {
    assert(this.isV1062)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ae3a0cda1f7d5ce44093e4881826f153ade69580ca6a8f545c049288639190bf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.Type_174 | undefined> {
    assert(this.isV2005)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a19d56cbac5bc5d8271a0386d2ec4737556c2ccd14bd734a49cd6b44cf669e19'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: Uint8Array): Promise<v2007.Type_175 | undefined> {
    assert(this.isV2007)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a1bad54afef22e91c8437cc5e49ccd48eaf734135b5d57ecdae6b31037b516b6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: Uint8Array): Promise<v2011.Type_176 | undefined> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'fd10882c553c6c13d6c2c999c8c906ff9bd8b96c668ee3693a60c2b9d16b6c3d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.Type_176 | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6026bea5884a6f5dae6c50dbbeabdda4972a59604ffa9384b56db7984b084830'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: Uint8Array): Promise<v2015.Type_178 | undefined> {
    assert(this.isV2015)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '15084b5f90884c9eb88947d09da6acc8f67964bd9fefc92e8b61044f0d1e7e95'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: Uint8Array): Promise<v2022.Type_178 | undefined> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2023(key: Uint8Array): Promise<v2023.Type_180 | undefined> {
    assert(this.isV2023)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2024(key: Uint8Array): Promise<v2024.Type_180 | undefined> {
    assert(this.isV2024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2025(key: Uint8Array): Promise<v2025.Type_181 | undefined> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2026(key: Uint8Array): Promise<v2026.Type_180 | undefined> {
    assert(this.isV2026)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2028(key: Uint8Array): Promise<v2028.Type_185 | undefined> {
    assert(this.isV2028)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2029(key: Uint8Array): Promise<v2029.Type_185 | undefined> {
    assert(this.isV2029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV2030(key: Uint8Array): Promise<v2030.Type_124 | undefined> {
    assert(this.isV2030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9010(key: Uint8Array): Promise<v9010.Type_124 | undefined> {
    assert(this.isV9010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9030(key: Uint8Array): Promise<v9030.Type_124 | undefined> {
    assert(this.isV9030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9040(key: Uint8Array): Promise<v9040.Type_124 | undefined> {
    assert(this.isV9040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9050(key: Uint8Array): Promise<v9050.Type_125 | undefined> {
    assert(this.isV9050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9080(key: Uint8Array): Promise<v9080.Type_124 | undefined> {
    assert(this.isV9080)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9090(key: Uint8Array): Promise<v9090.Type_124 | undefined> {
    assert(this.isV9090)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
  async getAsV9100(key: Uint8Array): Promise<v9100.Type_124 | undefined> {
    assert(this.isV9100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
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
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '734cb82f65ce49357861d4fac0afaa7783ab0fa388ea82b9bae26f325fdbaf3a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1020(key: Uint8Array): Promise<v1020.Type_88 | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '2f845f504652aa9a4dbed577436a564b6aa7e0878f0c77c1bbec8f2c228b6887'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1022(key: Uint8Array): Promise<v1022.Type_96 | undefined> {
    assert(this.isV1022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1024() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'd237c4ceb71b076111adad357bd8b1ba6755c161482c1470cdb175883e53bc57'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1024(key: Uint8Array): Promise<v1024.Type_96 | undefined> {
    assert(this.isV1024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1027() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f1d854821a0f6967dcc795dcfe69dbd42bad6bdd397a27b85983226bdac10b17'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1027(key: Uint8Array): Promise<v1027.Type_96 | undefined> {
    assert(this.isV1027)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1029() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6581c961890f55a85c44104096219cb91ae2fcab378d3b21acff5f8d54ab8608'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1029(key: Uint8Array): Promise<v1029.Type_96 | undefined> {
    assert(this.isV1029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1030() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '0b3600d629ff77ec095f7772155565c63fde27af54304a55403d042b140ec7f5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1030(key: Uint8Array): Promise<v1030.Type_96 | undefined> {
    assert(this.isV1030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1031() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'be130898e048e44587d4c5ed6d2c54a2e37786a305323cb80081d08abf87700c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1031(key: Uint8Array): Promise<v1031.Type_96 | undefined> {
    assert(this.isV1031)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1032() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'acc7397fb726869e20cfca9368f836337e5a4d33e86436e82d82f0953c326b97'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1032(key: Uint8Array): Promise<v1032.Type_96 | undefined> {
    assert(this.isV1032)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1038() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6cbae638b09571065cd37dd4c7f849dbbe227b4c042f88dc7b5dada4dc1a0bac'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1038(key: Uint8Array): Promise<v1038.Type_96 | undefined> {
    assert(this.isV1038)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1039() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '90ef1909b19f79bc67f4ad4cb000034ec5c1f64258b8402a82385329b7ce185a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1039(key: Uint8Array): Promise<v1039.Type_96 | undefined> {
    assert(this.isV1039)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1040() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '606333b698c6d83708bc3693069fecb27c614328e40974f449aff7323bd9c434'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1040(key: Uint8Array): Promise<v1040.Type_96 | undefined> {
    assert(this.isV1040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1042() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '289628d9ffef7d37a802e58b6536a3d01da6021d0a4c5dfc12cba1299dfa1d93'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1042(key: Uint8Array): Promise<v1042.Type_96 | undefined> {
    assert(this.isV1042)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '3748fc31dec3ff97c3a4382666883b4d0164591adb135c9606f27464e6390e9b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1050(key: Uint8Array): Promise<v1050.Type_99 | undefined> {
    assert(this.isV1050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1054() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '7389e6d7a1767d2c61c135dbf147bca82754cc34012faf67d89cefe50059d442'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1054(key: Uint8Array): Promise<v1054.Type_99 | undefined> {
    assert(this.isV1054)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1055() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '7e347f2a5184c19e99f1844d452f0c7a84c9340138fb27ff24f18b5f03970c2d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1055(key: Uint8Array): Promise<v1055.Type_102 | undefined> {
    assert(this.isV1055)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1058() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'fe7db31682cb6c482f40e99863ee72c56368678c84e7d337f0ed371264b4003d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1058(key: Uint8Array): Promise<v1058.Type_162 | undefined> {
    assert(this.isV1058)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1062() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '7476450e6d8e4e4ad9791c14c52fbc024c26d82bd9bc3216fd0551291a0f7a7b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1062(key: Uint8Array): Promise<v1062.Type_161 | undefined> {
    assert(this.isV1062)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2005() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ae3a0cda1f7d5ce44093e4881826f153ade69580ca6a8f545c049288639190bf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2005(key: Uint8Array): Promise<v2005.Type_174 | undefined> {
    assert(this.isV2005)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2007() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a19d56cbac5bc5d8271a0386d2ec4737556c2ccd14bd734a49cd6b44cf669e19'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2007(key: Uint8Array): Promise<v2007.Type_175 | undefined> {
    assert(this.isV2007)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a1bad54afef22e91c8437cc5e49ccd48eaf734135b5d57ecdae6b31037b516b6'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: Uint8Array): Promise<v2011.Type_176 | undefined> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'fd10882c553c6c13d6c2c999c8c906ff9bd8b96c668ee3693a60c2b9d16b6c3d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: Uint8Array): Promise<v2013.Type_176 | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2015() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6026bea5884a6f5dae6c50dbbeabdda4972a59604ffa9384b56db7984b084830'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2015(key: Uint8Array): Promise<v2015.Type_178 | undefined> {
    assert(this.isV2015)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '15084b5f90884c9eb88947d09da6acc8f67964bd9fefc92e8b61044f0d1e7e95'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: Uint8Array): Promise<v2022.Type_178 | undefined> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2023(key: Uint8Array): Promise<v2023.Type_180 | undefined> {
    assert(this.isV2023)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2024(key: Uint8Array): Promise<v2024.Type_180 | undefined> {
    assert(this.isV2024)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2025(key: Uint8Array): Promise<v2025.Type_181 | undefined> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2026(key: Uint8Array): Promise<v2026.Type_180 | undefined> {
    assert(this.isV2026)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2028(key: Uint8Array): Promise<v2028.Type_185 | undefined> {
    assert(this.isV2028)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2029(key: Uint8Array): Promise<v2029.Type_185 | undefined> {
    assert(this.isV2029)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV2030(key: Uint8Array): Promise<v2030.Type_124 | undefined> {
    assert(this.isV2030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9010(key: Uint8Array): Promise<v9010.Type_124 | undefined> {
    assert(this.isV9010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9030(key: Uint8Array): Promise<v9030.Type_124 | undefined> {
    assert(this.isV9030)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9040(key: Uint8Array): Promise<v9040.Type_124 | undefined> {
    assert(this.isV9040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9050(key: Uint8Array): Promise<v9050.Type_125 | undefined> {
    assert(this.isV9050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9080(key: Uint8Array): Promise<v9080.Type_124 | undefined> {
    assert(this.isV9080)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9090(key: Uint8Array): Promise<v9090.Type_124 | undefined> {
    assert(this.isV9090)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  async getAsV9100(key: Uint8Array): Promise<v9100.Type_124 | undefined> {
    assert(this.isV9100)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
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
  async getAsV2025(key: number): Promise<v2025.Bounty | undefined> {
    assert(this.isV2025)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Bounties', key)
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
  async getAsV1020(key: number): Promise<v1020.TreasuryProposal | undefined> {
    assert(this.isV1020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Proposals', key)
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
  async getAsV1038(key: Uint8Array): Promise<v1038.OpenTipTo225 | undefined> {
    assert(this.isV1038)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
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
  async getAsV2013(key: Uint8Array): Promise<v2013.OpenTip | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
