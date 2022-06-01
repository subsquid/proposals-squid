import { SubstrateBlock } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { Threshold } from '../common/types'
import {
    MotionThreshold,
    Proposal,
    ProposalGroup,
    ProposalStatus,
    ProposalType,
    ProposedCall,
    ReferendumThreshold,
    ReferendumThresholdType,
    StatusHistoryItem,
} from '../model'
import { Manager } from './Manager'
import { proposalGroupManager } from './ProposalGroupManager'

type IndexProposal =
    | ProposalType.DemocracyProposal
    | ProposalType.Referendum
    | ProposalType.TreasuryProposal
    | ProposalType.Bounty
    | ProposalType.TechCommitteeProposal
    | ProposalType.CouncilMotion

type HashProposal =
    | ProposalType.Preimage
    | ProposalType.Tip
    | ProposalType.CouncilMotion
    | ProposalType.TechCommitteeProposal

interface ProposedCallData {
    section: string
    method: string
    description: string
    args: Record<string, unknown>
}

interface BaseProposalData {
    id: string
    type: ProposalType
    status: ProposalStatus
    block: SubstrateBlock
}
interface DemocracyProposalData extends BaseProposalData {
    type: ProposalType.DemocracyProposal
    index: number
    hash: string
    proposer: string
    deposit: bigint
}

interface ReferendumData extends BaseProposalData {
    type: ProposalType.Referendum
    index: number
    hash: string
    threshold: Threshold
}

interface CouncilMotionData extends BaseProposalData {
    id: string
    type: ProposalType.CouncilMotion
    index: number
    hash: string
    threshold: number
    proposer: string
    call: ProposedCallData
}

interface TechCommitteeData extends BaseProposalData {
    type: ProposalType.TechCommitteeProposal
    index: number
    hash: string
    threshold: number
    proposer: string
    call: ProposedCallData
    status: ProposalStatus
}

interface TipData extends BaseProposalData {
    type: ProposalType.Tip
    hash: string
    proposer?: string
    payee: string
    deposit?: bigint
    status: ProposalStatus
}

interface BountyData extends BaseProposalData {
    type: ProposalType.Bounty
    index: number
    proposer: string
    reward: bigint
    deposit: bigint
}

interface TreasuryData extends BaseProposalData {
    type: ProposalType.TreasuryProposal
    index: number
    proposer: string
    reward: bigint
    deposit: bigint
    payee: string
}

interface PreimageData extends BaseProposalData {
    type: ProposalType.Preimage
    hash: string
    proposer: string
    deposit: bigint
    call?: ProposedCallData
}

type ProposalData =
    | DemocracyProposalData
    | ReferendumData
    | CouncilMotionData
    | TechCommitteeData
    | TipData
    | BountyData
    | TreasuryData
    | PreimageData

export class ProposalManager extends Manager<Proposal> {
    async get(store: Store, index: number, type: IndexProposal): Promise<Proposal | undefined>
    async get(store: Store, hash: string, type: HashProposal): Promise<Proposal | undefined>
    async get(store: Store, hashOrIndex: string | number, type: ProposalType): Promise<Proposal | undefined> {
        const condition = typeof hashOrIndex === 'string' ? { hash: hashOrIndex } : { index: hashOrIndex }

        return await store.findOne(Proposal, { type, ...condition }, { cache: true })
    }

    async getLast(store: Store, type: ProposalType): Promise<Proposal | undefined> {
        return await store.findOne(Proposal, { type }, { order: { createdAt: 'DESC' } })
    }

    async updateStatus(
        store: Store,
        index: number,
        type: IndexProposal,
        options: {
            block: SubstrateBlock
            status: ProposalStatus
            isEnded?: boolean
        }
    ): Promise<Proposal | undefined>
    async updateStatus(
        store: Store,
        hash: string,
        type: HashProposal,
        options: {
            block: SubstrateBlock
            status: ProposalStatus
            isEnded?: boolean
        }
    ): Promise<Proposal | undefined>
    async updateStatus(
        store: Store,
        hashOrIndex: string | number,
        type: ProposalType,
        options: {
            block: SubstrateBlock
            status: ProposalStatus
            isEnded?: boolean
        }
    ): Promise<Proposal | undefined> {
        const { block, status, isEnded } = options

        let proposal: Proposal | undefined
        if (typeof hashOrIndex === 'string') {
            proposal = await this.get(store, hashOrIndex as string, type as HashProposal)
        } else {
            proposal = await this.get(store, hashOrIndex as number, type as IndexProposal)
        }
        if (!proposal) return undefined

        proposal.status = status
        proposal.statusHistory.push(
            new StatusHistoryItem({
                block: block.height,
                timestamp: new Date(block.timestamp),
                status: proposal.status,
            })
        )

        if (isEnded) {
            proposal.endedAtBlock = block.height
            proposal.endedAt = new Date(block.timestamp)
        }

        return await this.update(store, proposal, { block })
    }

    async create(store: Store, data: ProposalData): Promise<Proposal> {
        let proposal: Proposal

        switch (data.type) {
            case ProposalType.DemocracyProposal:
                proposal = await this.createDemocracyProposal(store, data)
                break
            case ProposalType.Referendum:
                proposal = await this.createReferendum(store, data)
                break
            case ProposalType.CouncilMotion:
            case ProposalType.TechCommitteeProposal:
                proposal = await this.createCoucilMotion(store, data)
                break
            case ProposalType.Tip:
                proposal = await this.createTip(store, data)
                break
            case ProposalType.TreasuryProposal:
                proposal = await this.createTreasury(store, data)
                break
            case ProposalType.Bounty:
                proposal = await this.createBounty(store, data)
                break
            case ProposalType.Preimage:
                proposal = await this.createPreimage(store, data)
                break
        }

        await store.save(proposal)

        return proposal
    }

    async update(store: Store, item: Proposal, options: { block: SubstrateBlock }): Promise<Proposal> {
        item.updatedAtBlock = options.block.height
        item.updatedAt = new Date(options.block.timestamp)
        return await store.save(item)
    }

    private async createDemocracyProposal(store: Store, data: DemocracyProposalData): Promise<Proposal> {
        const { id, index, type, hash, proposer, deposit, status, block } = data

        const group = await proposalGroupManager.get(store, hash, ProposalType.Preimage)

        return new Proposal({
            id,
            index,
            type,
            hash,
            proposer,
            deposit,
            status,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createReferendum(store: Store, data: ReferendumData): Promise<Proposal> {
        const { id, index, type, status, threshold, hash, block } = data

        const group = await proposalGroupManager.get(store, hash, ProposalType.Preimage)

        return new Proposal({
            id,
            index,
            type,
            hash,
            threshold: new ReferendumThreshold({
                type: threshold as ReferendumThresholdType,
            }),
            status,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createCoucilMotion(store: Store, data: CouncilMotionData | TechCommitteeData): Promise<Proposal> {
        const { id, index, type, status, threshold, hash, call, proposer, block } = data

        let group: ProposalGroup | undefined
        if (call.args['proposalHash']) {
            const hexHash = call.args['proposalHash'] as string
            group = await proposalGroupManager.get(store, hexHash, ProposalType.Preimage)
        } else if (call.args['bountyId']) {
            const index = call.args['bountyId'] as number
            group = await proposalGroupManager.get(store, index, ProposalType.Bounty)
        } else if (call.args['proposalId']) {
            const index = call.args['proposalId'] as number
            group = await proposalGroupManager.get(store, index, ProposalType.TreasuryProposal)
        }

        return new Proposal({
            id,
            index,
            type,
            hash,
            proposer,
            status,
            threshold: new MotionThreshold({
                value: threshold,
            }),
            proposedCall: call ? this.createProposedCall(call) : null,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createTip(store: Store, data: TipData): Promise<Proposal> {
        const { id, type, status, hash, proposer, payee, deposit, block } = data

        return new Proposal({
            id,
            type,
            hash,
            proposer,
            payee,
            deposit,
            status,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
        })
    }

    private async createBounty(store: Store, data: BountyData): Promise<Proposal> {
        const { id, type, status, index, proposer, deposit, reward, block } = data

        const group = await proposalGroupManager.get(store, index, ProposalType.Bounty)

        return new Proposal({
            id,
            type,
            index,
            proposer,
            deposit,
            reward,
            status,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createTreasury(store: Store, data: TreasuryData): Promise<Proposal> {
        const { id, type, status, index, proposer, deposit, reward, payee, block } = data

        const group = await proposalGroupManager.get(store, index, ProposalType.TreasuryProposal)

        return new Proposal({
            id,
            type,
            index,
            proposer,
            deposit,
            reward,
            status,
            payee,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createPreimage(store: Store, data: PreimageData): Promise<Proposal> {
        const { id, type, status, hash, proposer, deposit, call, block } = data

        const group = await proposalGroupManager.get(store, hash, ProposalType.Preimage)

        return new Proposal({
            id,
            type,
            hash,
            proposer,
            deposit,
            status,
            proposedCall: call ? this.createProposedCall(call) : null,
            createdAtBlock: block.height,
            createdAt: new Date(block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: block.height,
                    timestamp: new Date(block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private createProposedCall(data: ProposedCallData): ProposedCall {
        return new ProposedCall(data)
    }
}

export const proposalManager = new ProposalManager()
