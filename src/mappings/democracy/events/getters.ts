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
    if (event.isV1020) {
        return event.asV1020
    } else if (event.isV9130) {
        return event.asV9130.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getExecutedData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020[0]
    } else if (event.isV9090) {
        return event.asV9090[0]
    } else if (event.isV9111) {
        return event.asV9111[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        return data.refIndex
    }
}

export function getNotPassedData(ctx: EventContext): number {
    const event = new DemocracyNotPassedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020
    } else if (event.isV9130) {
        return event.asV9130.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getPassedData(ctx: EventContext): number {
    const event = new DemocracyPassedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020
    } else if (event.isV9130) {
        return event.asV9130.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface PreimageInvalidData {
    hash: Uint8Array
    index: number
}

export function getPreimageInvalidData(ctx: EventContext): PreimageInvalidData {
    const event = new DemocracyPreimageInvalidEvent(ctx)
    if (event.isV1022) {
        const [hash, index] = event.asV1022
        return {
            hash,
            index,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, refIndex: index } = event.asV9130
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
    if (event.isV1022) {
        const [hash, index] = event.asV1022
        return {
            hash,
            index,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, refIndex: index } = event.asV9130
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
    if (event.isV1022) {
        const [hash, provider, deposit] = event.asV1022
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, who: provider, deposit } = event.asV9130
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
    if (event.isV1022) {
        const [hash, provider, deposit] = event.asV1022
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, provider, deposit } = event.asV9130
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
    if (event.isV1022) {
        const [hash, provider, deposit] = event.asV1022
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, provider, deposit } = event.asV9130
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
