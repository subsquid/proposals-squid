import { Store } from '@subsquid/typeorm-store'
import { Vote } from '../model'
import { Manager } from './Manager'

export class VoteManager extends Manager<Vote> {
    async get(store: Store, id: string): Promise<Vote | undefined> {
        return await store.findOne(Vote, id, { cache: true })
    }

    async save(store: Store, item: Vote): Promise<Vote> {
        return await store.save(item)
    }
}

export const voteManager = new VoteManager()
