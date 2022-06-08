import { Store } from '@subsquid/typeorm-store'
import { Vote } from '../model'
import { Manager } from './Manager'

export class VoteManager extends Manager<Vote> {
    async get(store: Store, id: string): Promise<Vote | undefined> {
        return await store.findOne(Vote, id)
    }

    async save(store: Store, item: Vote): Promise<Vote> {
        await store.save(item)
        return item
    }
}

export const voteManager = new VoteManager()
