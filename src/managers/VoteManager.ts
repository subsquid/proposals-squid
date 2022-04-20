import { BlockHandlerContext, EventHandlerContext } from '@subsquid/substrate-processor'
import { Vote } from '../model'
import { Manager } from './Manager'

export class VoteManager extends Manager<Vote> {
    async get(ctx: EventHandlerContext | BlockHandlerContext, id: string): Promise<Vote | undefined> {
        return await ctx.store.findOne(Vote, id, { cache: true })
    }

    async save(ctx: EventHandlerContext | BlockHandlerContext, item: Vote): Promise<Vote> {
        return await ctx.store.save(item)
    }
}

export const voteManager = new VoteManager()
