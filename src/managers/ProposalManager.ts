import { BlockHandlerContext, EventHandlerContext } from '@subsquid/substrate-processor'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../model'
import { Manager } from './Manager'

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
            proposal.endedAt = ctx.block.height
        }

        return await this.save(ctx, proposal)
    }

    async save(ctx: EventHandlerContext | BlockHandlerContext, item: Proposal): Promise<Proposal> {
        item.updatedAt = ctx.block.height
        return await ctx.store.save(item)
    }
}

export const proposalManager = new ProposalManager()
