import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TipsNewTipEvent, TreasuryNewTipEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'

interface TipEventData {
    hash: Uint8Array
}

function getTreasuryEventData(ctx: EventContext): TipEventData {
    const event = new TreasuryNewTipEvent(ctx)
    if (event.isV0) {
        const hash = event.asV0
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getTipsEventData(ctx: EventContext): TipEventData {
    const event = new TipsNewTipEvent(ctx)
    if (event.isV28) {
        const hash = event.asV28
        return {
            hash,
        }
    } else if (event.isV9140) {
        const { tipHash: hash } = event.asV9140
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
        new StorageNotExists(ProposalType.Tip, hexHash, ctx.block.height)
        return
    }

    const { who, deposit, finder } = storageData

    await proposalManager.create(ctx, {
        type: ProposalType.Tip,
        hash: hexHash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Proposed,
    })
}
