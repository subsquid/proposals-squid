import assert from 'assert'
import { UnknownVersionError } from '../../../common/errors'
import {
    CouncilApprovedEvent,
    CouncilClosedEvent,
    CouncilDisapprovedEvent,
    CouncilExecutedEvent,
    CouncilProposedEvent,
    CouncilVotedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getApprovedData(ctx: EventContext): Uint8Array {
    const event = new CouncilApprovedEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getClosedData(ctx: EventContext): Uint8Array {
    const event = new CouncilClosedEvent(ctx)
    if (event.isV13) {
        return event.asV13[0]
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getDissaprovedData(ctx: EventContext): Uint8Array {
    const event = new CouncilDisapprovedEvent(ctx)
    if (event.isV13) {
        return event.asV13
    } else {
        const data = ctx._chain.decodeEvent(ctx.event)
        assert(Buffer.isBuffer(data.proposalHash))
        return data.proposalHash
    }
}

export function getExecutedData(ctx: EventContext): Uint8Array {
    const event = new CouncilExecutedEvent(ctx)
    if (event.isV13) {
        return event.asV13[0]
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
    const event = new CouncilProposedEvent(ctx)
    if (event.isV13) {
        const [proposer, index, hash, threshold] = event.asV13
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV29) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV29
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
    const event = new CouncilVotedEvent(ctx)
    if (event.isV13) {
        const [voter, hash, decision] = event.asV13
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV29) {
        const { account, proposalHash, voted } = event.asV29
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
