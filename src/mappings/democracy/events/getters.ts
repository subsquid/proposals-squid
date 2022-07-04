import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    DemocracyCancelledEvent,
    DemocracyExecutedEvent,
    DemocracyNotPassedEvent,
    DemocracyPassedEvent,
    DemocracyPreimageInvalidEvent,
    DemocracyPreimageMissingEvent,
    DemocracyPreimageNotedEvent,
    DemocracyPreimageReapedEvent,
    DemocracyPreimageUsedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getCancelledData(ctx: EventContext): number {
    const event = new DemocracyCancelledEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export function getExecutedData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV13) {
        return event.asV13[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export function getNotPassedData(ctx: EventContext): number {
    const event = new DemocracyNotPassedEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export function getPassedData(ctx: EventContext): number {
    const event = new DemocracyPassedEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export interface PreimageInvalidData {
    hash: Uint8Array
    index: number
}

export function getPreimageInvalidData(ctx: EventContext): PreimageInvalidData {
    const event = new DemocracyPreimageInvalidEvent(ctx)
    if (event.isV13) {
        const [hash, index] = event.asV13
        return {
            hash,
            index,
        }
    } else if (event.isV29) {
        const { proposalHash: hash, refIndex: index } = event.asV29
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageMissingData {
    hash: Uint8Array
    index: number
}

export function getPreimageMissingData(ctx: EventContext): PreimageMissingData {
    const event = new DemocracyPreimageMissingEvent(ctx)
    if (event.isV13) {
        const [hash, index] = event.asV13
        return {
            hash,
            index,
        }
    } else if (event.isV29) {
        const { proposalHash: hash, refIndex: index } = event.asV29
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface PreimageNotedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageNotedData(ctx: EventContext): PreimageNotedData {
    const event = new DemocracyPreimageNotedEvent(ctx)
    if (event.isV13) {
        const [hash, provider, deposit] = event.asV13
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV29) {
        const { proposalHash: hash, who: provider, deposit } = event.asV29
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageReapedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageReapedData(ctx: EventContext): PreimageReapedData {
    const event = new DemocracyPreimageReapedEvent(ctx)
    if (event.isV13) {
        const [hash, provider, deposit] = event.asV13
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV29) {
        const { proposalHash: hash, provider, deposit } = event.asV29
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageUsedData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

export function getPreimageUsedData(ctx: EventContext): PreimageUsedData {
    const event = new DemocracyPreimageUsedEvent(ctx)
    if (event.isV13) {
        const [hash, provider, deposit] = event.asV13
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV29) {
        const { proposalHash: hash, provider, deposit } = event.asV29
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
