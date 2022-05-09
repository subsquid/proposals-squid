import type {Result} from './support'

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export interface AccountInfoWithDualRefCount {
  nonce: number
  consumers: number
  providers: number
  data: AccountData
}

export interface TreasuryProposal {
  proposer: Uint8Array
  value: bigint
  beneficiary: Uint8Array
  bond: bigint
}
