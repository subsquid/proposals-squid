import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalGroupManager, proposalManager } from '../../../managers'
import { encodeId } from '../../../common/tools'
import config from '../../../config'
import { storage } from '../../../storage'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

function getEventData(ctx: EventContext): DemocracyProposalEventData {
    const event = new DemocracyProposedEvent(ctx)
    if (event.isV1020) {
        const [index, deposit] = event.asV1020
        return {
            index,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalIndex: index, deposit } = event.asV9130
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, deposit } = getEventData(ctx)

    const storageData = await storage.democracy.getProposals(ctx)
    if (!storageData) {
        console.warn(`Storage doesn't exist for democracy proposals at block ${ctx.block.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        console.warn(new StorageNotExists(ProposalType.DemocracyProposal, index, ctx.block.height))
        return
    }
    const { hash, proposer } = proposalData
    const hexHash = toHex(hash)

    const group = await proposalGroupManager.get(ctx, hexHash, ProposalType.Preimage)

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            index,
            type: ProposalType.DemocracyProposal,
            hash: hexHash,
            proposer: encodeId(proposer, config.prefix),
            deposit,
            createdAt: ctx.block.height,
            status: ProposalStatus.Proposed,
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status: ProposalStatus.Proposed,
                }),
            ],
            group,
        })
    )
}
