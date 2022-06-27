import { assert } from 'console'
import { UnknownVersionError } from '../../../common/errors'
import {
    CouncilCollectiveApprovedEvent,
    CouncilCollectiveClosedEvent,
    CouncilCollectiveDisapprovedEvent,
    CouncilCollectiveExecutedEvent,
    CouncilCollectiveProposedEvent,
    CouncilCollectiveVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getApprovedData(ctx: EventContext): Uint8Array {
    const event = new CouncilCollectiveApprovedEvent(ctx)
    if (event.isV155) {
        return event.asV155
    } else if (event.isV200) {
        return event.asV200
    } else if (event.isV1001) {
        return event.asV1001
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getClosedData(ctx: EventContext): Uint8Array {
    const event = new CouncilCollectiveClosedEvent(ctx)
    if (event.isV155) {
        return event.asV155[0]
    } else if (event.isV200) {
        return event.asV200[0]
    } else if (event.isV1001) {
        return event.asV1001[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getDissaprovedData(ctx: EventContext): Uint8Array {
    const event = new CouncilCollectiveDisapprovedEvent(ctx)
    if (event.isV155) {
        return event.asV155
    } else if (event.isV200) {
        return event.asV200
    } else if (event.isV1001) {
        return event.asV1001
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getExecutedData(ctx: EventContext): Uint8Array {
    const event = new CouncilCollectiveExecutedEvent(ctx)
    if (event.isV155) {
        return event.asV155[0]
    } else if (event.isV200) {
        return event.asV200[0]
    } else if (event.isV900) {
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
    const event = new CouncilCollectiveProposedEvent(ctx)
    if (event.isV155) {
        const [proposer, index, hash, threshold] = event.asV155
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV200) {
        const [proposer, index, hash, threshold] = event.asV200
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
    const event = new CouncilCollectiveVotedEvent(ctx)
    if (event.isV155) {
        const [voter, hash, decision] = event.asV155
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV200) {
        const [voter, hash, decision] = event.asV200
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
