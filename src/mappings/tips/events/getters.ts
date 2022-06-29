import { UnknownVersionError } from '../../../common/errors'
import {
    TipsNewTipEvent,
    TipsTipClosedEvent,
    TipsTipRetractedEvent,
    TipsTipSlashedEvent
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface ClosedData {
    hash: Uint8Array
    reward: bigint
}

export function getClosedData(ctx: EventContext): ClosedData {
    const event = new TipsTipClosedEvent(ctx)
    if (event.isV15) {
        const [hash, , reward] = event.asV15
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
    if (event.isV15) {
        const hash = event.asV15
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
    if (event.isV15) {
        const hash = event.asV15
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
    if (event.isV15) {
        const [hash] = event.asV15
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
