import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../contexts'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TipsTipRetractedEvent, TreasuryTipRetractedEvent } from '../../../types/events'

interface TipEventData {
    hash: Uint8Array
}

function getTreasuryEventData(ctx: EventContext): TipEventData {
    const event = new TreasuryTipRetractedEvent(ctx)
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
    const event = new TipsTipRetractedEvent(ctx)
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

export async function handleRetracted(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Tips' ? getTipsEventData : getTreasuryEventData
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx.store, hexHash, ProposalType.Tip, {
        block: ctx.block,
        status: ProposalStatus.Retracted,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Tip, hexHash, ctx.block.height)
    }
}
