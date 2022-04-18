import { BlockHandlerContext, EventHandlerContext } from '@subsquid/substrate-processor'
import { Proposal, ProposalType } from '../model'
import { Manager } from './Manager'

export class ProposalManager extends Manager<Proposal> {
    async get(
        ctx: EventHandlerContext | BlockHandlerContext,
        index: number,
        type: ProposalType
    ): Promise<Proposal | undefined>
    async get(
        ctx: EventHandlerContext | BlockHandlerContext,
        hash: string,
        type: ProposalType
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
        return await ctx.store.findOne(
            Proposal,
            { type },
            {
                cache: true,
                order: {
                    createdAt: 'DESC',
                },
            }
        )
    }

    async save(ctx: EventHandlerContext | BlockHandlerContext, item: Proposal): Promise<Proposal> {
        item.updatedAt = ctx.block.height
        return await ctx.store.save(item)
    }
}

export const proposalManager = new ProposalManager()
