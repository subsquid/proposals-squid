/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { BountiesBountyProposedEvent, TreasuryBountyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { BountiesBountiesStorage, TreasuryBountiesStorage } from '../../../types/storage'
import { EventContext, StorageContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalGroupManager, proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'

interface BountyEventData {
    index: number
}

interface BountyStorageData {
    proposer: Uint8Array
    value: bigint
    bond: bigint
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyProposedEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyProposedEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getBountyStorageData(ctx: StorageContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new BountiesBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.getAsV9111(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: StorageContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new TreasuryBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV2025) {
        return await storage.getAsV2025(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'bounties' ? getBountyEventData : getTreasuryEventData
    const { index } = getEventData(ctx)

    const storageData = (await getBountyStorageData(ctx, index)) || (await getTreasuryStorageData(ctx, index))
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.Bounty, index, ctx.block.height))
        return
    }

    const { proposer, value, bond } = storageData

    const group = await proposalGroupManager.get(ctx, index, ProposalType.Bounty)

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            index,
            type: ProposalType.Bounty,
            proposer: encodeId(proposer, config.prefix),
            createdAt: ctx.block.height,
            status: ProposalStatus.Proposed,
            reward: value,
            deposit: bond,
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
