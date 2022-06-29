import { UnknownVersionError } from '../../../common/errors'
import {
    TipsNewTipEvent,
    TipsTipClosedEvent,
    TipsTipRetractedEvent,
    TipsTipSlashedEvent,
    TreasuryNewTipEvent,
    TreasuryTipClosedEvent,
    TreasuryTipRetractedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface ClosedData {
    hash: Uint8Array
    reward: bigint
}

export function getClosedDataOld(ctx: EventContext): ClosedData {
    const event = new TreasuryTipClosedEvent(ctx)
    if (event.isV0) {
        const [hash, , reward] = event.asV0
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getClosedData(ctx: EventContext): ClosedData {
    const event = new TipsTipClosedEvent(ctx)
    if (event.isV28) {
        const [hash, , reward] = event.asV28
        return {
            hash,
            reward,
        }
    } else if (event.isV9140) {
        const { tipHash: hash, payout: reward } = event.asV9140
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

export function getNewTipDataOld(ctx: EventContext): NewTipData {
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

export function getNewTipData(ctx: EventContext): NewTipData {
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

interface RectractedData {
    hash: Uint8Array
}

export function getRectractedDataOld(ctx: EventContext): RectractedData {
    const event = new TreasuryTipRetractedEvent(ctx)
    if (event.isV0) {
        const hash = event.asV0
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getRectractedData(ctx: EventContext): RectractedData {
    const event = new TipsTipRetractedEvent(ctx)
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

interface SlashedData {
    hash: Uint8Array
}

export function getSlashedData(ctx: EventContext): SlashedData {
    const event = new TipsTipSlashedEvent(ctx)
    if (event.isV28) {
        const [hash] = event.asV28
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
