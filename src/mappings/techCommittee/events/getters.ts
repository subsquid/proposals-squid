import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    TechnicalCommitteeApprovedEvent,
    TechnicalCommitteeClosedEvent,
    TechnicalCommitteeDisapprovedEvent,
    TechnicalCommitteeExecutedEvent,
    TechnicalCommitteeProposedEvent,
    TechnicalCommitteeVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getApprovedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeApprovedEvent(ctx)
    if (event.isV803) {
        return event.asV803
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getClosedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeClosedEvent(ctx)
    if (event.isV803) {
        return event.asV803[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getDissaprovedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeDisapprovedEvent(ctx)
    if (event.isV803) {
        return event.asV803
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getExecutedData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeExecutedEvent(ctx)
    if (event.isV803) {
        return event.asV803[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export interface ProposedData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

export function getProposedData(ctx: EventContext): ProposedData {
    const event = new TechnicalCommitteeProposedEvent(ctx)
    if (event.isV803) {
        const [proposer, index, hash, threshold] = event.asV803
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV916) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV916
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export interface VotedData {
    voter: Uint8Array
    hash: Uint8Array
    decision: boolean
}

export function getVotedData(ctx: EventContext): VotedData {
    const event = new TechnicalCommitteeVotedEvent(ctx)
    if (event.isV803) {
        const [voter, hash, decision] = event.asV803
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV916) {
        const { account, proposalHash, voted } = event.asV916
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
