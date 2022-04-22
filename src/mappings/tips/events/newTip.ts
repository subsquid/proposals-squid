import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TipsNewTipEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'
import { storage } from '../../../storage'

interface TipEventData {
    hash: Uint8Array
}

function getEventData(ctx: EventContext): TipEventData {
    const event = new TipsNewTipEvent(ctx)
    if (event.isV13) {
        const hash = event.asV13
        return {
            hash,
        }
    } else if (event.isV29) {
        const { tipHash: hash } = event.asV29
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleNewTip(ctx: EventHandlerContext) {
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
        proposer: finder ? encodeId(finder, config.prefix) : undefined,
        payee: encodeId(who, config.prefix),
        deposit,
        status: ProposalStatus.Proposed,
    })
}
