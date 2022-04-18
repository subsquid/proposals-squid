import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { DemocracyPublicPropsStorage } from '../../../types/storage'
import { EventContext, StorageContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalGroupManager, proposalManager } from '../../../managers'
import { encodeId } from '../../../common/tools'
import config from '../../../config'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

interface DemocracyProposalStorageData {
    index: number
    hash: Uint8Array
    proposer: Uint8Array
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

async function getStorageData(ctx: StorageContext): Promise<DemocracyProposalStorageData[] | undefined> {
    const storage = new DemocracyPublicPropsStorage(ctx)
    if (storage.isV1020) {
        return undefined
    } else if (storage.isV1022) {
        const storageData = await storage.getAsV1022()
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            return {
                index,
                hash,
                proposer,
            }
        })
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, deposit } = getEventData(ctx)

    const storageData = await getStorageData(ctx)
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
