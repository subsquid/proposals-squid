import type {Result} from './support'

export interface TreasuryProposal {
  proposer: Uint8Array
  value: bigint
  beneficiary: Uint8Array
  bond: bigint
}
