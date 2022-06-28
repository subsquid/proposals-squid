import { UnknownVersionError } from '../../../common/errors'
import { TipsNewTipEvent, TipsTipClosedEvent, TipsTipRetractedEvent, TipsTipSlashedEvent } from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface ClosedData {
    hash: Uint8Array
    reward: bigint
}

export function getClosedData(ctx: EventContext): ClosedData {
    const event = new TipsTipClosedEvent(ctx)
    if (event.isV2000) {
        const [hash, , reward] = event.asV2000
        return {
            hash,
            reward,
        }
    } else if (event.isV2011) {
        const { tipHash: hash, payout: reward } = event.asV2011
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface NewTipData {
    hash: Uint8Array
}

export function getNewTipData(ctx: EventContext): NewTipData {
    const event = new TipsNewTipEvent(ctx)
    if (event.isV2000) {
        const hash = event.asV2000
        return {
            hash,
        }
    } else if (event.isV2011) {
        const { tipHash: hash } = event.asV2011
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface RectractedData {
    hash: Uint8Array
}

export function getRectractedData(ctx: EventContext): RectractedData {
    const event = new TipsTipRetractedEvent(ctx)
    if (event.isV2000) {
        const hash = event.asV2000
        return {
            hash,
        }
    } else if (event.isV2011) {
        const { tipHash: hash } = event.asV2011
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface SlashedData {
    hash: Uint8Array
}

export function getSlashedData(ctx: EventContext): SlashedData {
    const event = new TipsTipSlashedEvent(ctx)
    if (event.isV2000) {
        const [hash] = event.asV2000
        return {
            hash,
        }
    } else if (event.isV2011) {
        const { tipHash: hash } = event.asV2011
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
