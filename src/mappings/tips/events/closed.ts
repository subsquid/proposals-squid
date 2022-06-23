import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { TipsTipClosedEvent, TreasuryTipClosedEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

interface TipEventData {
    hash: Uint8Array
    reward: bigint
}

function getTreasuryEventData(ctx: EventContext): TipEventData {
    const event = new TreasuryTipClosedEvent(ctx)
    if (event.isV1038) {
        const [hash, , reward] = event.asV1038
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getTipsEventData(ctx: EventContext): TipEventData {
    const event = new TipsTipClosedEvent(ctx)
    if (event.isV2028) {
        const [hash, , reward] = event.asV2028
        return {
            hash,
            reward,
        }
    } else if (event.isV9130) {
        const { tipHash: hash, payout: reward } = event.asV9130
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClosed(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Tips' ? getTipsEventData : getTreasuryEventData
    const { hash, reward } = getEventData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Closed,
        data: {
            reward,
        },
    })
}
