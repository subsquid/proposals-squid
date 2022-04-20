import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v0 from './v0'
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
import * as v5 from './v5'
import * as v6 from './v6'
import * as v7 from './v7'
import * as v9 from './v9'
import * as v9050 from './v9050'
import * as v9080 from './v9080'
import * as v9090 from './v9090'
import * as v9100 from './v9100'
import * as v9110 from './v9110'
import * as v9140 from './v9140'
import * as v9170 from './v9170'
import * as v9180 from './v9180'

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV0(): Promise<bigint> {
    assert(this.isV0)
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
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV9110(key: number): Promise<v9110.Bounty | undefined> {
    assert(this.isV9110)
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
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV9110(): Promise<v9110.AccountId32[]> {
    assert(this.isV9110)
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
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV9110(): Promise<number> {
    assert(this.isV9110)
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
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.Call | undefined> {
    assert(this.isV9110)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9140() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'a980d3db9298ef7abe69200e3d17617f3dd55420383735072495abe042152109'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9140(key: v9140.H256): Promise<v9140.Call | undefined> {
    assert(this.isV9140)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '964aaf0992db47aa0acde7facf84bd91d5c78634e1e31600d54c70677d103391'
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
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'd2823e296fca82e2252a5675ba825f5a72da0bce96b2e34cce4957fe8f1bd7ff'
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
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV0(key: Uint8Array): Promise<v0.PreimageStatus | undefined> {
    assert(this.isV0)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.PreimageStatus | undefined> {
    assert(this.isV9110)
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
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV0(): Promise<number> {
    assert(this.isV0)
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
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV0(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV0)
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
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV0(key: number): Promise<v0.ReferendumInfo | undefined> {
    assert(this.isV0)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV9110(key: number): Promise<v9110.ReferendumInfo | undefined> {
    assert(this.isV9110)
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
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '6cae007d8d787f6bc6dd824607a2f44937a0333594c27f7b289cc89f5faeaf8e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV0(key: Uint8Array): Promise<v0.Type_182 | undefined> {
    assert(this.isV0)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV5() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '12900b20425a39428a5f52142f3f5ec9438362eafd20d25f791e4411f895a607'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV5(key: Uint8Array): Promise<v5.Type_180 | undefined> {
    assert(this.isV5)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV6() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ab942d89f6d9c69a48a9764035b80aefbd0be0c50f3adc1e0d1fd7ecbeacd8dd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV6(key: Uint8Array): Promise<v6.Type_180 | undefined> {
    assert(this.isV6)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV7() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '53ebae9f980772434ec3409c4eb15d613ce40ee707988247a4a28a6e0da11e2d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV7(key: Uint8Array): Promise<v7.Type_181 | undefined> {
    assert(this.isV7)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '45326f449ff9ee9d9c5fc4555528e9ca2266d5ba0f7da62c8a28551bb6017349'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9(key: Uint8Array): Promise<v9.Type_181 | undefined> {
    assert(this.isV9)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV10() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e766f5706086fd573c3a0ec21bf510d67e9c273bed05c1deea3d8a14d2c0e035'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV10(key: Uint8Array): Promise<v10.Type_181 | undefined> {
    assert(this.isV10)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV11() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '7cf859e9777c7e3798882e6b70ae36e40ce022bc8b64e8c14979979f811accb1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV11(key: Uint8Array): Promise<v11.Type_182 | undefined> {
    assert(this.isV11)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '141b1411ce777c96968996e2263d8db1e6e00f5d2c774a7a82d021ff67414ac4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV13(key: Uint8Array): Promise<v13.Type_182 | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV14() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5f84c64a04346ac248f4c0d4107db59eb1df9cc172dc2d95a787ce764e5a4d26'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV14(key: Uint8Array): Promise<v14.Type_184 | undefined> {
    assert(this.isV14)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '320b3d7f91c73224e4928814a515b2d0b071a82d295d3cfcca0c8c6d2448128b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV15(key: Uint8Array): Promise<v15.Type_184 | undefined> {
    assert(this.isV15)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV17() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e9d8975517945494372e94959a6113f45899c5dd0f8be2d785e2c88ab93ab436'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV17(key: Uint8Array): Promise<v17.Type_184 | undefined> {
    assert(this.isV17)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV18() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '4caa236c590c5d35a6833e19ba3f4ce838cc832318a3d2a4d6c6ba3eb100ecf2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV18(key: Uint8Array): Promise<v18.Type_184 | undefined> {
    assert(this.isV18)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV23() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f9e433d21aa5d81da4171a87bc952bf65065d04b8d1cd20e7723b7453e4b3d6f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV23(key: Uint8Array): Promise<v23.Type_186 | undefined> {
    assert(this.isV23)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV24() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '77f0ca7ee3e60a31f9e5f8d5fb7ec5cdc72f5357e26c3d55fe884aec60cc7ee2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV24(key: Uint8Array): Promise<v24.Type_186 | undefined> {
    assert(this.isV24)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV25() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '5854d23dc50ce2884a3ca63757e8f214260f0c37e208282e18ac4ba7b1152d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV25(key: Uint8Array): Promise<v25.Type_187 | undefined> {
    assert(this.isV25)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV26() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8a34c96a87244da07e57787a940ba03659723c5844b048793efc9db21d872b4d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV26(key: Uint8Array): Promise<v26.Type_186 | undefined> {
    assert(this.isV26)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV28() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'd862a682fc4da1eee86ad1e491bf819e414c985a2f70b586f9f7ac7ea357742a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV28(key: Uint8Array): Promise<v28.Type_191 | undefined> {
    assert(this.isV28)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '2e38012ace8bb91a1d4c531488d33af19c81fbb1d771d26419475d3cda74dd17'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV29(key: Uint8Array): Promise<v29.Type_191 | undefined> {
    assert(this.isV29)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV30() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '8b6802378a21fc585cdfe2345c8d74ee7b8c5425854af5f9e221bab1cfd5b2a4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV30(key: Uint8Array): Promise<v30.Type_130 | undefined> {
    assert(this.isV30)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '55eed3615c53a5b80bc00c7ea60c465c9d7a77c8bc528b5dfbc308a24a2fdbe0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.Type_131 | undefined> {
    assert(this.isV9050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'cae4ef0d7e499483043059936d3e674e960b94a9e66ce8299fd5d27f03691ecf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: Uint8Array): Promise<v9080.Type_130 | undefined> {
    assert(this.isV9080)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '4e4818cf9eee67ec60567879ec8aeb7eb5c417f2e47b284c327e8cfdb3f82c1b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: Uint8Array): Promise<v9090.Type_130 | undefined> {
    assert(this.isV9090)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'dc3aa6c501fb2c10f6e308b7b27be4def42773b2aaf5f63a9c1f50c58593f87c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: Uint8Array): Promise<v9100.Type_130 | undefined> {
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
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '6cae007d8d787f6bc6dd824607a2f44937a0333594c27f7b289cc89f5faeaf8e'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV0(key: Uint8Array): Promise<v0.Type_182 | undefined> {
    assert(this.isV0)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV5() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '12900b20425a39428a5f52142f3f5ec9438362eafd20d25f791e4411f895a607'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV5(key: Uint8Array): Promise<v5.Type_180 | undefined> {
    assert(this.isV5)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV6() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ab942d89f6d9c69a48a9764035b80aefbd0be0c50f3adc1e0d1fd7ecbeacd8dd'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV6(key: Uint8Array): Promise<v6.Type_180 | undefined> {
    assert(this.isV6)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV7() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '53ebae9f980772434ec3409c4eb15d613ce40ee707988247a4a28a6e0da11e2d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV7(key: Uint8Array): Promise<v7.Type_181 | undefined> {
    assert(this.isV7)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '45326f449ff9ee9d9c5fc4555528e9ca2266d5ba0f7da62c8a28551bb6017349'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9(key: Uint8Array): Promise<v9.Type_181 | undefined> {
    assert(this.isV9)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV10() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e766f5706086fd573c3a0ec21bf510d67e9c273bed05c1deea3d8a14d2c0e035'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV10(key: Uint8Array): Promise<v10.Type_181 | undefined> {
    assert(this.isV10)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV11() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '7cf859e9777c7e3798882e6b70ae36e40ce022bc8b64e8c14979979f811accb1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV11(key: Uint8Array): Promise<v11.Type_182 | undefined> {
    assert(this.isV11)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '141b1411ce777c96968996e2263d8db1e6e00f5d2c774a7a82d021ff67414ac4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV13(key: Uint8Array): Promise<v13.Type_182 | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV14() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5f84c64a04346ac248f4c0d4107db59eb1df9cc172dc2d95a787ce764e5a4d26'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV14(key: Uint8Array): Promise<v14.Type_184 | undefined> {
    assert(this.isV14)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '320b3d7f91c73224e4928814a515b2d0b071a82d295d3cfcca0c8c6d2448128b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV15(key: Uint8Array): Promise<v15.Type_184 | undefined> {
    assert(this.isV15)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV17() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e9d8975517945494372e94959a6113f45899c5dd0f8be2d785e2c88ab93ab436'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV17(key: Uint8Array): Promise<v17.Type_184 | undefined> {
    assert(this.isV17)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV18() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '4caa236c590c5d35a6833e19ba3f4ce838cc832318a3d2a4d6c6ba3eb100ecf2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV18(key: Uint8Array): Promise<v18.Type_184 | undefined> {
    assert(this.isV18)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV23() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f9e433d21aa5d81da4171a87bc952bf65065d04b8d1cd20e7723b7453e4b3d6f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV23(key: Uint8Array): Promise<v23.Type_186 | undefined> {
    assert(this.isV23)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV24() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '77f0ca7ee3e60a31f9e5f8d5fb7ec5cdc72f5357e26c3d55fe884aec60cc7ee2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV24(key: Uint8Array): Promise<v24.Type_186 | undefined> {
    assert(this.isV24)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV25() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '5854d23dc50ce2884a3ca63757e8f214260f0c37e208282e18ac4ba7b1152d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV25(key: Uint8Array): Promise<v25.Type_187 | undefined> {
    assert(this.isV25)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV26() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8a34c96a87244da07e57787a940ba03659723c5844b048793efc9db21d872b4d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV26(key: Uint8Array): Promise<v26.Type_186 | undefined> {
    assert(this.isV26)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV28() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'd862a682fc4da1eee86ad1e491bf819e414c985a2f70b586f9f7ac7ea357742a'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV28(key: Uint8Array): Promise<v28.Type_191 | undefined> {
    assert(this.isV28)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '2e38012ace8bb91a1d4c531488d33af19c81fbb1d771d26419475d3cda74dd17'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV29(key: Uint8Array): Promise<v29.Type_191 | undefined> {
    assert(this.isV29)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV30() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '8b6802378a21fc585cdfe2345c8d74ee7b8c5425854af5f9e221bab1cfd5b2a4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV30(key: Uint8Array): Promise<v30.Type_130 | undefined> {
    assert(this.isV30)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9050() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '55eed3615c53a5b80bc00c7ea60c465c9d7a77c8bc528b5dfbc308a24a2fdbe0'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9050(key: Uint8Array): Promise<v9050.Type_131 | undefined> {
    assert(this.isV9050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9080() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'cae4ef0d7e499483043059936d3e674e960b94a9e66ce8299fd5d27f03691ecf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9080(key: Uint8Array): Promise<v9080.Type_130 | undefined> {
    assert(this.isV9080)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9090() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '4e4818cf9eee67ec60567879ec8aeb7eb5c417f2e47b284c327e8cfdb3f82c1b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9090(key: Uint8Array): Promise<v9090.Type_130 | undefined> {
    assert(this.isV9090)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9100() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'dc3aa6c501fb2c10f6e308b7b27be4def42773b2aaf5f63a9c1f50c58593f87c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9100(key: Uint8Array): Promise<v9100.Type_130 | undefined> {
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
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '63d24c0129919827fa9023228f4c71d3c81178663e2b642fce64b99d6fe01202'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.Call | undefined> {
    assert(this.isV9110)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9140() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'a980d3db9298ef7abe69200e3d17617f3dd55420383735072495abe042152109'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV9140(key: v9140.H256): Promise<v9140.Call | undefined> {
    assert(this.isV9140)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV9170() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '964aaf0992db47aa0acde7facf84bd91d5c78634e1e31600d54c70677d103391'
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
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'd2823e296fca82e2252a5675ba825f5a72da0bce96b2e34cce4957fe8f1bd7ff'
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
  get isV9110() {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV9110(key: v9110.H256): Promise<v9110.OpenTip | undefined> {
    assert(this.isV9110)
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
  get isV25() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV25(key: number): Promise<v25.Bounty | undefined> {
    assert(this.isV25)
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
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV0(key: number): Promise<v0.TreasuryProposal | undefined> {
    assert(this.isV0)
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
  get isV0() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '04a94fc868891debd43b4077251f040bf182373364459a957722242a70afa20d'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV0(key: Uint8Array): Promise<v0.OpenTipTo225 | undefined> {
    assert(this.isV0)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  Tips that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV13(key: Uint8Array): Promise<v13.OpenTip | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
