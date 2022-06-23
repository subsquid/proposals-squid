import { ProposalStatus, ProposalType, ReferendumThresholdType } from '../../model'

export type IndexProposal =
    | ProposalType.DemocracyProposal
    | ProposalType.Referendum
    | ProposalType.TreasuryProposal
    | ProposalType.Bounty
    | ProposalType.TechCommitteeProposal
    | ProposalType.CouncilMotion

export type HashProposal =
    | ProposalType.Preimage
    | ProposalType.Tip
    | ProposalType.CouncilMotion
    | ProposalType.TechCommitteeProposal

export interface ProposedCallData {
    section: string
    method: string
    description: string
    args?: Record<string, unknown>
}

export interface BaseProposalData {
    status: ProposalStatus
}
export interface DemocracyProposalData extends BaseProposalData {
    index: number
    hash: string
    proposer: string
    deposit: bigint
}

export interface ReferendumData extends BaseProposalData {
    index: number
    hash: string
    threshold: ReferendumThresholdType
}

export interface CouncilMotionData extends BaseProposalData {
    index: number
    hash: string
    threshold: number
    proposer: string
    call: ProposedCallData
}

export type TechCommitteeMotionData = CouncilMotionData

export interface TipData extends BaseProposalData {
    hash: string
    proposer?: string
    payee: string
    deposit?: bigint
    status: ProposalStatus
}

export interface BountyData extends BaseProposalData {
    index: number
    proposer: string
    reward: bigint
    deposit: bigint
}

export interface TreasuryData extends BaseProposalData {
    index: number
    proposer: string
    reward: bigint
    deposit: bigint
    payee: string
}

export interface PreimageData extends BaseProposalData {
    hash: string
    proposer: string
    deposit: bigint
    call?: ProposedCallData
}
