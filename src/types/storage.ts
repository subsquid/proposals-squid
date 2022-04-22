import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v1 from './v1'
import * as v15 from './v15'
import * as v16 from './v16'
import * as v17 from './v17'
import * as v18 from './v18'

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV1() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class DemocracyPreimagesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV15(key: Uint8Array): Promise<v15.PreimageStatus | undefined> {
    assert(this.isV15)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV15(): Promise<number> {
    assert(this.isV15)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV15(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV15)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV15(key: number): Promise<v15.ReferendumInfo | undefined> {
    assert(this.isV15)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV15(): Promise<Uint8Array[]> {
    assert(this.isV15)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV15(): Promise<number> {
    assert(this.isV15)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '506176533bcb3e7c6416a42b0168f3b246972854c0ccdd8cf148a0d047a49f9d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV15(key: Uint8Array): Promise<v15.Type_103 | undefined> {
    assert(this.isV15)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV16() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a867432fbdb7e5b8bbe03d7f109ad1f31fd8d7d087d50bd33676cc149a56a2fa'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV16(key: Uint8Array): Promise<v16.Type_103 | undefined> {
    assert(this.isV16)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV17() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '2e75fb6813fcad57454b356ab0f2ce9b9a08e63f55119ec1d85d0b5429240572'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV17(key: Uint8Array): Promise<v17.Type_103 | undefined> {
    assert(this.isV17)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV18() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '7132c231574291a4d223eac1e48c37523e3ee6f0b82dce5adc02ce10bbf8e0ba'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV18(key: Uint8Array): Promise<v18.Type_103 | undefined> {
    assert(this.isV18)
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
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '506176533bcb3e7c6416a42b0168f3b246972854c0ccdd8cf148a0d047a49f9d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV15(key: Uint8Array): Promise<v15.Type_103 | undefined> {
    assert(this.isV15)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV16() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a867432fbdb7e5b8bbe03d7f109ad1f31fd8d7d087d50bd33676cc149a56a2fa'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV16(key: Uint8Array): Promise<v16.Type_103 | undefined> {
    assert(this.isV16)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV17() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '2e75fb6813fcad57454b356ab0f2ce9b9a08e63f55119ec1d85d0b5429240572'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV17(key: Uint8Array): Promise<v17.Type_103 | undefined> {
    assert(this.isV17)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV18() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '7132c231574291a4d223eac1e48c37523e3ee6f0b82dce5adc02ce10bbf8e0ba'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV18(key: Uint8Array): Promise<v18.Type_103 | undefined> {
    assert(this.isV18)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
  }
}

export class TreasuryProposalsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals that have been made.
   */
  get isV1() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1(key: number): Promise<v1.TreasuryProposal | undefined> {
    assert(this.isV1)
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
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV15() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV15(key: Uint8Array): Promise<v15.OpenTip | undefined> {
    assert(this.isV15)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
