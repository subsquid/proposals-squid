import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TipsNewTipEvent, TreasuryNewTipEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'
import { storage } from '../../../storage'

interface TipEventData {
    hash: Uint8Array
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

export async function handleNewTip(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'tips' ? getTipsEventData : getTreasuryEventData
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const storageData = await storage.tips.getTips(ctx, hash)
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.Tip, hexHash, ctx.block.height))
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
