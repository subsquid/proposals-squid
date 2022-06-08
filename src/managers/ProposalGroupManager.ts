import { Store } from '@subsquid/typeorm-store'
import { ProposalGroup, ProposalType } from '../model'
import { Manager } from './Manager'

export class ProposalGroupManager extends Manager<ProposalGroup> {
    private async getId(store: Store) {
        return (await store.count(ProposalGroup)).toString()
    }

    async get(store: Store, hash: string, type: ProposalType.Preimage): Promise<ProposalGroup>
    async get(
        store: Store,
        index: number,
        type: ProposalType.TreasuryProposal | ProposalType.Bounty
    ): Promise<ProposalGroup>
    async get(
        store: Store,
        indexOrHash: number | string,
        type: ProposalType.TreasuryProposal | ProposalType.Bounty | ProposalType.Preimage
    ): Promise<ProposalGroup | undefined> {
        const condition: Partial<ProposalGroup> = {}

        switch (type) {
            case ProposalType.Bounty:
                condition.bountyIndex = indexOrHash as number
                break
            case ProposalType.TreasuryProposal:
                condition.treasuryIndex = indexOrHash as number
                break
            case ProposalType.Preimage:
                condition.preimageHash = indexOrHash as string
                break
            default:
                return undefined
        }

        let link = await store.findOne<ProposalGroup>(ProposalGroup, condition)
        if (!link) {
            const id = await this.getId(store)
            link = await this.save(
                store,
                new ProposalGroup({
                    id,
                    ...condition,
                })
            )
        }

        return link
    }

    async save(store: Store, item: ProposalGroup): Promise<ProposalGroup> {
        await store.save(item)
        return item
    }
}

export const proposalGroupManager = new ProposalGroupManager()
