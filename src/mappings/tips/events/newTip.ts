import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { TipsNewTipEvent, TreasuryNewTipEvent } from '../../../types/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTip } from '../../utils/proposals'

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
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Tips' ? getTipsEventData : getTreasuryEventData
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const storageData = await storage.tips.getTips(ctx, hash)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hexHash))
        return
    }

    const { who, deposit, finder } = storageData

    await createTip(ctx, {
        hash: hexHash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Proposed,
    })
}
