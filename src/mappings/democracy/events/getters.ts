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
    DemocracyProposedEvent,
    DemocracyStartedEvent,
    DemocracyTabledEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getCancelledData(ctx: EventContext): number {
    const event = new DemocracyCancelledEvent(ctx)
    if (event.isV155) {
        return event.asV155
    } else if (event.isV200) {
        return event.asV200
    } else if (event.isV1001) {
        return event.asV1001
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export function getExecutedData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV155) {
        return event.asV155[0]
    } else if (event.isV200) {
        return event.asV200[0]
    } else if (event.isV1001) {
        return event.asV1001[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export function getNotPassedData(ctx: EventContext): number {
    const event = new DemocracyNotPassedEvent(ctx)
    if (event.isV155) {
        return event.asV155
    } else if (event.isV200) {
        return event.asV200
    } else if (event.isV1001) {
        return event.asV1001
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(typeof data.refIndex === 'number')
        return data.refIndex
    }
}

export function getPassedData(ctx: EventContext): number {
    const event = new DemocracyPassedEvent(ctx)
    if (event.isV155) {
        return event.asV155
    } else if (event.isV200) {
        return event.asV200
    } else if (event.isV1001) {
        return event.asV1001
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
    if (event.isV155) {
        const [hash, index] = event.asV155
        return {
            hash,
            index,
        }
    } else if (event.isV200) {
        const [hash, index] = event.asV200
        return {
            hash,
            index,
        }
    } else if (event.isV1001) {
        const [hash, index] = event.asV1001
        return {
            hash,
            index,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, refIndex: index } = event.asV1201
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
    if (event.isV155) {
        const [hash, index] = event.asV155
        return {
            hash,
            index,
        }
    } else if (event.isV200) {
        const [hash, index] = event.asV200
        return {
            hash,
            index,
        }
    } else if (event.isV1001) {
        const [hash, index] = event.asV1001
        return {
            hash,
            index,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, refIndex: index } = event.asV1201
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
    if (event.isV155) {
        const [hash, provider, deposit] = event.asV155
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV200) {
        const [hash, provider, deposit] = event.asV200
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1001) {
        const [hash, provider, deposit] = event.asV1001
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, who: provider, deposit } = event.asV1201
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
    if (event.isV155) {
        const [hash, provider, deposit] = event.asV155
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV200) {
        const [hash, provider, deposit] = event.asV200
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1001) {
        const [hash, provider, deposit] = event.asV1001
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, provider, deposit } = event.asV1201
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
    if (event.isV155) {
        const [hash, provider, deposit] = event.asV155
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV200) {
        const [hash, provider, deposit] = event.asV200
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1001) {
        const [hash, provider, deposit] = event.asV1001
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, provider, deposit } = event.asV1201
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface TabledEventData {
    index: number
    deposit: bigint
    depositors: Uint8Array[]
}

export function getTabledData(ctx: EventContext): TabledEventData {
    const event = new DemocracyTabledEvent(ctx)
    if (event.isV155) {
        const [index, deposit, depositors] = event.asV155
        return {
            index,
            deposit,
            depositors,
        }
    } else if (event.isV200) {
        const [index, deposit, depositors] = event.asV200
        return {
            index,
            deposit,
            depositors,
        }
    } else if (event.isV1001) {
        const [index, deposit, depositors] = event.asV1001
        return {
            index,
            deposit,
            depositors,
        }
    } else if (event.isV1201) {
        const { proposalIndex: index, deposit, depositors } = event.asV1201
        return {
            index,
            deposit,
            depositors,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface DemocracyProposalData {
    index: number
    deposit: bigint
}

export function getProposedData(ctx: EventContext): DemocracyProposalData {
    const event = new DemocracyProposedEvent(ctx)
    if (event.isV155) {
        const [index, deposit] = event.asV155
        return {
            index,
            deposit,
        }
    } else if (event.isV200) {
        const [index, deposit] = event.asV200
        return {
            index,
            deposit,
        }
    } else if (event.isV1001) {
        const [index, deposit] = event.asV1001
        return {
            index,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalIndex: index, deposit } = event.asV1201
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface StartedData {
    index: number
    threshold: string
}

export function getStartedData(ctx: EventContext): StartedData {
    const event = new DemocracyStartedEvent(ctx)
    if (event.isV155) {
        const [index, threshold] = event.asV155
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (event.isV200) {
        const [index, threshold] = event.asV200
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (event.isV1001) {
        const [index, threshold] = event.asV1001
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (event.isV1201) {
        const { refIndex: index, threshold } = event.asV1201
        return {
            index,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
