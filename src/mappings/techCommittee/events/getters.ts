import { assert } from 'console'
import { UnknownVersionError } from '../../../common/errors'
import {
    TechCommitteeCollectiveApprovedEvent,
    TechCommitteeCollectiveClosedEvent,
    TechCommitteeCollectiveDisapprovedEvent,
    TechCommitteeCollectiveExecutedEvent,
    TechCommitteeCollectiveProposedEvent,
    TechCommitteeCollectiveVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getApprovedData(ctx: EventContext): Uint8Array {
    const event = new TechCommitteeCollectiveApprovedEvent(ctx)
    if (event.isV900) {
        return event.asV900
    } else if (event.isV1001) {
        return event.asV1001
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getClosedData(ctx: EventContext): Uint8Array {
    const event = new TechCommitteeCollectiveClosedEvent(ctx)
    if (event.isV900) {
        return event.asV900[0]
    } else if (event.isV1001) {
        return event.asV1001[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getDissaprovedData(ctx: EventContext): Uint8Array {
    const event = new TechCommitteeCollectiveDisapprovedEvent(ctx)
    if (event.isV900) {
        return event.asV900
    } else if (event.isV1001) {
        return event.asV1001
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getExecutedData(ctx: EventContext): Uint8Array {
    const event = new TechCommitteeCollectiveExecutedEvent(ctx)
    if (event.isV900) {
        return event.asV900[0]
    } else if (event.isV1001) {
        return event.asV1001[0]
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
    const event = new TechCommitteeCollectiveProposedEvent(ctx)
    if (event.isV900) {
        const [proposer, index, hash, threshold] = event.asV900
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV1001) {
        const [proposer, index, hash, threshold] = event.asV1001
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV1201) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV1201
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
    const event = new TechCommitteeCollectiveVotedEvent(ctx)
    if (event.isV900) {
        const [voter, hash, decision] = event.asV900
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV1001) {
        const [voter, hash, decision] = event.asV1001
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV1201) {
        const { account, proposalHash, voted } = event.asV1201
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
