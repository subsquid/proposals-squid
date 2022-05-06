import { BlockHandlerContext, EventHandlerContext } from '@subsquid/substrate-processor'
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

interface DemocracyProposalData {
    type: ProposalType.DemocracyProposal
    index: number
    hash: string
    proposer: string
    deposit: bigint
    status: ProposalStatus
}

interface ReferendumData {
    type: ProposalType.Referendum
    index: number
    hash: string
    threshold: Threshold
    status: ProposalStatus
}

interface CouncilMotionData {
    type: ProposalType.CouncilMotion
    index: number
    hash: string
    threshold: number
    proposer: string
    call: ProposedCallData
    status: ProposalStatus
}

interface TechCommitteeData {
    type: ProposalType.TechCommitteeProposal
    index: number
    hash: string
    threshold: number
    proposer: string
    call: ProposedCallData
    status: ProposalStatus
}

interface TipData {
    type: ProposalType.Tip
    hash: string
    proposer?: string
    payee: string
    deposit?: bigint
    status: ProposalStatus
}

interface BountyData {
    type: ProposalType.Bounty
    index: number
    proposer: string
    status: ProposalStatus
    reward: bigint
    deposit: bigint
}

interface TreasuryData {
    type: ProposalType.TreasuryProposal
    index: number
    proposer: string
    status: ProposalStatus
    reward: bigint
    deposit: bigint
    payee: string
}

interface PreimageData {
    type: ProposalType.Preimage
    hash: string
    proposer: string
    status: ProposalStatus
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
    async get(
        ctx: EventHandlerContext | BlockHandlerContext,
        index: number,
        type: IndexProposal
    ): Promise<Proposal | undefined>
    async get(
        ctx: EventHandlerContext | BlockHandlerContext,
        hash: string,
        type: HashProposal
    ): Promise<Proposal | undefined>
    async get(
        ctx: EventHandlerContext | BlockHandlerContext,
        hashOrIndex: string | number,
        type: ProposalType
    ): Promise<Proposal | undefined> {
        const condition = typeof hashOrIndex === 'string' ? { hash: hashOrIndex } : { index: hashOrIndex }

        return await ctx.store.findOne(Proposal, { type, ...condition }, { cache: true })
    }

    async getLast(ctx: EventHandlerContext | BlockHandlerContext, type: ProposalType): Promise<Proposal | undefined> {
        return await ctx.store.findOne(Proposal, { type }, { order: { createdAt: 'DESC' } })
    }

    async updateStatus(
        ctx: EventHandlerContext | BlockHandlerContext,
        index: number,
        type: IndexProposal,
        options: {
            status: ProposalStatus
            isEnded?: boolean
        }
    ): Promise<Proposal | undefined>
    async updateStatus(
        ctx: EventHandlerContext | BlockHandlerContext,
        hash: string,
        type: HashProposal,
        options: {
            status: ProposalStatus
            isEnded?: boolean
        }
    ): Promise<Proposal | undefined>
    async updateStatus(
        ctx: EventHandlerContext | BlockHandlerContext,
        hashOrIndex: string | number,
        type: ProposalType,
        options: {
            status: ProposalStatus
            isEnded?: boolean
        }
    ): Promise<Proposal | undefined> {
        let proposal: Proposal | undefined
        if (typeof hashOrIndex === 'string') {
            proposal = await this.get(ctx, hashOrIndex as string, type as HashProposal)
        } else {
            proposal = await this.get(ctx, hashOrIndex as number, type as IndexProposal)
        }
        if (!proposal) return undefined

        proposal.status = options.status
        proposal.statusHistory.push(
            new StatusHistoryItem({
                block: ctx.block.height,
                timestamp: new Date(ctx.block.timestamp),
                status: proposal.status,
            })
        )

        if (options.isEnded) {
            proposal.endedAtBlock = ctx.block.height
            proposal.endedAt = new Date(ctx.block.timestamp)
        }

        return await this.update(ctx, proposal)
    }

    async create(ctx: EventHandlerContext, data: ProposalData): Promise<Proposal> {
        let proposal: Proposal

        switch (data.type) {
            case ProposalType.DemocracyProposal:
                proposal = await this.createDemocracyProposal(ctx, data)
                break
            case ProposalType.Referendum:
                proposal = await this.createReferendum(ctx, data)
                break
            case ProposalType.CouncilMotion:
            case ProposalType.TechCommitteeProposal:
                proposal = await this.createCoucilMotion(ctx, data)
                break
            case ProposalType.Tip:
                proposal = await this.createTip(ctx, data)
                break
            case ProposalType.TreasuryProposal:
                proposal = await this.createTreasury(ctx, data)
                break
            case ProposalType.Bounty:
                proposal = await this.createBounty(ctx, data)
                break
            case ProposalType.Preimage:
                proposal = await this.createPreimage(ctx, data)
                break
        }

        await ctx.store.save(Proposal, proposal)

        return proposal
    }

    async update(ctx: EventHandlerContext | BlockHandlerContext, item: Proposal): Promise<Proposal> {
        item.updatedAtBlock = ctx.block.height
        item.updatedAt = new Date(ctx.block.timestamp)
        return await ctx.store.save(item)
    }

    private async createDemocracyProposal(ctx: EventHandlerContext, data: DemocracyProposalData): Promise<Proposal> {
        const { index, type, hash, proposer, deposit, status } = data

        const group = await proposalGroupManager.get(ctx, hash, ProposalType.Preimage)

        return new Proposal({
            id: ctx.event.id,
            index,
            type,
            hash,
            proposer,
            deposit,
            status,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createReferendum(ctx: EventHandlerContext, data: ReferendumData): Promise<Proposal> {
        const { index, type, status, threshold, hash } = data

        const group = await proposalGroupManager.get(ctx, hash, ProposalType.Preimage)

        return new Proposal({
            id: ctx.event.id,
            index,
            type,
            hash,
            threshold: new ReferendumThreshold({
                type: threshold as ReferendumThresholdType,
            }),
            status,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createCoucilMotion(
        ctx: EventHandlerContext,
        data: CouncilMotionData | TechCommitteeData
    ): Promise<Proposal> {
        const { index, type, status, threshold, hash, call, proposer } = data

        let group: ProposalGroup | undefined
        if (call.args['proposalHash']) {
            const hexHash = call.args['proposalHash'] as string
            group = await proposalGroupManager.get(ctx, hexHash, ProposalType.Preimage)
        } else if (call.args['bountyId']) {
            const index = call.args['bountyId'] as number
            group = await proposalGroupManager.get(ctx, index, ProposalType.Bounty)
        } else if (call.args['proposalId']) {
            const index = call.args['proposalId'] as number
            group = await proposalGroupManager.get(ctx, index, ProposalType.TreasuryProposal)
        }

        return new Proposal({
            id: ctx.event.id,
            index,
            type,
            hash,
            proposer,
            status,
            threshold: new MotionThreshold({
                value: threshold,
            }),
            proposedCall: call ? this.createProposedCall(call) : null,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createTip(ctx: EventHandlerContext, data: TipData): Promise<Proposal> {
        const { type, status, hash, proposer, payee, deposit } = data

        return new Proposal({
            id: ctx.event.id,
            type,
            hash,
            proposer,
            payee,
            deposit,
            status,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status,
                }),
            ],
        })
    }

    private async createBounty(ctx: EventHandlerContext, data: BountyData): Promise<Proposal> {
        const { type, status, index, proposer, deposit, reward } = data

        const group = await proposalGroupManager.get(ctx, index, ProposalType.Bounty)

        return new Proposal({
            id: ctx.event.id,
            type,
            index,
            proposer,
            deposit,
            reward,
            status,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createTreasury(ctx: EventHandlerContext, data: TreasuryData): Promise<Proposal> {
        const { type, status, index, proposer, deposit, reward, payee } = data

        const group = await proposalGroupManager.get(ctx, index, ProposalType.TreasuryProposal)

        return new Proposal({
            id: ctx.event.id,
            type,
            index,
            proposer,
            deposit,
            reward,
            status,
            payee,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status,
                }),
            ],
            group,
        })
    }

    private async createPreimage(ctx: EventHandlerContext, data: PreimageData): Promise<Proposal> {
        const { type, status, hash, proposer, deposit, call } = data

        const group = await proposalGroupManager.get(ctx, hash, ProposalType.Preimage)

        return new Proposal({
            id: ctx.event.id,
            type,
            hash,
            proposer,
            deposit,
            status,
            proposedCall: call ? this.createProposedCall(call) : null,
            createdAtBlock: ctx.block.height,
            createdAt: new Date(ctx.block.timestamp),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
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
