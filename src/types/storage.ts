import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v13 from './v13'
import * as v14 from './v14'
import * as v22 from './v22'
import * as v29 from './v29'

export class BalancesAccountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The balance of an account.
   * 
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV13(key: Uint8Array): Promise<v13.AccountData> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'Account', key)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV13(): Promise<bigint> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class CouncilMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV29(): Promise<v29.AccountId32[]> {
    assert(this.isV29)
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
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV29(): Promise<number> {
    assert(this.isV29)
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
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '3192f29a2618555bd1d712b640211503f8b99ad53cdd8a1015408cf6c175aea2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV29(key: v29.H256): Promise<v29.Call | undefined> {
    assert(this.isV29)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV13(key: Uint8Array): Promise<v13.PreimageStatus | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV29(key: v29.H256): Promise<v29.PreimageStatus | undefined> {
    assert(this.isV29)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV13(): Promise<number> {
    assert(this.isV13)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV13(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV13)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV13(key: number): Promise<v13.ReferendumInfo | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV29(key: number): Promise<v29.ReferendumInfo | undefined> {
    assert(this.isV29)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV13(): Promise<Uint8Array[]> {
    assert(this.isV13)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV13(): Promise<number> {
    assert(this.isV13)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e35e51bc2a99253fafbbd1a38a3fd280853e55c4f9ea52d83a61158053814a23'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV13(key: Uint8Array): Promise<v13.Type_232 | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV14() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '68e38565bbeb1e8dd8e05e83fb48d50d6855dd4b170859e9f578be3f63fa8d63'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV14(key: Uint8Array): Promise<v14.Type_232 | undefined> {
    assert(this.isV14)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV22() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'e4b57537ff43b25a42e329425097b898a68b17028632f36b55245f08d1857198'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV22(key: Uint8Array): Promise<v22.Type_243 | undefined> {
    assert(this.isV22)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e35e51bc2a99253fafbbd1a38a3fd280853e55c4f9ea52d83a61158053814a23'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV13(key: Uint8Array): Promise<v13.Type_232 | undefined> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV14() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '68e38565bbeb1e8dd8e05e83fb48d50d6855dd4b170859e9f578be3f63fa8d63'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV14(key: Uint8Array): Promise<v14.Type_232 | undefined> {
    assert(this.isV14)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV22() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'e4b57537ff43b25a42e329425097b898a68b17028632f36b55245f08d1857198'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV22(key: Uint8Array): Promise<v22.Type_243 | undefined> {
    assert(this.isV22)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV13(key: Uint8Array): Promise<v13.AccountInfoWithTripleRefCount> {
    assert(this.isV13)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'System', 'Account', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '3192f29a2618555bd1d712b640211503f8b99ad53cdd8a1015408cf6c175aea2'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV29(key: v29.H256): Promise<v29.Call | undefined> {
    assert(this.isV29)
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
  get isV29() {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV29(key: v29.H256): Promise<v29.OpenTip | undefined> {
    assert(this.isV29)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Tips', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TreasuryProposalsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals that have been made.
   */
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV13(key: number): Promise<v13.TreasuryProposal | undefined> {
    assert(this.isV13)
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
  get isV13() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
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
