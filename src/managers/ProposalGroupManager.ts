import { BlockHandlerContext, EventHandlerContext } from '@subsquid/substrate-processor'
import { ProposalGroup, ProposalType } from '../model'
import { Manager } from './Manager'

export class ProposalGroupManager extends Manager<ProposalGroup> {
    async get(ctx: EventHandlerContext, hash: string, type: ProposalType.Preimage): Promise<ProposalGroup>
    async get(
        ctx: EventHandlerContext,
        index: number,
        type: ProposalType.TreasuryProposal | ProposalType.Bounty
    ): Promise<ProposalGroup>
    async get(
        ctx: EventHandlerContext,
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

        let link = await ctx.store.findOne<ProposalGroup>(ProposalGroup, condition, { cache: true })
        if (!link) {
            link = await this.save(
                ctx,
                new ProposalGroup({
                    id: ctx.event.id,
                    ...condition,
                })
            )
        }

        return link
    }

    async save(ctx: EventHandlerContext | BlockHandlerContext, item: ProposalGroup): Promise<ProposalGroup> {
        return await ctx.store.save(item)
    }
}

export const proposalGroupManager = new ProposalGroupManager()
