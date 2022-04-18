import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TipsNewTipEvent, TreasuryNewTipEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { TipsTipsStorage, TreasuryTipsStorage } from '../../../types/storage'
import { EventContext, StorageContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'

interface TipEventData {
    hash: Uint8Array
}

interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
}

function getTreasuryEventData(ctx: EventContext): TipEventData {
    const event = new TreasuryNewTipEvent(ctx)
    if (event.isV1038) {
        const hash = event.asV1038
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getTipsEventData(ctx: EventContext): TipEventData {
    const event = new TipsNewTipEvent(ctx)
    if (event.isV2028) {
        const hash = event.asV2028
        return {
            hash,
        }
    } else if (event.isV9130) {
        const { tipHash: hash } = event.asV9130
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: StorageContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TreasuryTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1038) {
        const storageData = await storage.getAsV1038(hash)
        if (!storageData) return undefined

        const { who, finder } = storageData
        return {
            who,
            finder: finder?.[0],
            deposit: finder?.[1],
        }
    } else if (storage.isV2013) {
        return await storage.getAsV2013(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTipsStorageData(ctx: StorageContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TipsTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.getAsV9111(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleNewTip(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'tips' ? getTipsEventData : getTreasuryEventData
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const storageData = (await getTipsStorageData(ctx, hash)) || (await getTreasuryStorageData(ctx, hash))
    if (!storageData) {
        console.warn(`Storage for tip ${hexHash} doesn't exist at block ${ctx.block.height}`)
        return
    }

    const { who, deposit, finder } = storageData

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            hash: hexHash,
            type: ProposalType.Tip,
            proposer: finder ? encodeId(finder, config.prefix) : null,
            createdAt: ctx.block.height,
            status: ProposalStatus.Proposed,
            deposit,
            payee: encodeId(who, config.prefix),
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status: ProposalStatus.Proposed,
                }),
            ],
        })
    )
}
