import type {Result} from './support'

export type ProposalIndex = number

export type Balance = bigint

export type AccountId = Uint8Array

export interface AccountData {
  free: Balance
  reserved: Balance
  miscFrozen: Balance
  feeFrozen: Balance
}

export interface AccountInfo {
  nonce: Index
  consumers: RefCount
  providers: RefCount
  data: AccountData
}

export interface TreasuryProposal {
  proposer: AccountId
  value: Balance
  beneficiary: AccountId
  bond: Balance
}

export type Index = number

export type RefCount = number
