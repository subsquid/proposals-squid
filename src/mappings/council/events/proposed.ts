/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { CouncilProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { ss58codec, parseProposalCall } from '../../../common/tools'
import { storage } from '../../../storage'

interface CouncilProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

function getEventData(ctx: EventContext): CouncilProposalEventData {
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

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, proposer, hash, threshold } = getEventData(ctx)

    const storageData = await storage.council.getProposalOf(ctx, hash)
    if (!storageData) {
        new StorageNotExists(ProposalType.CouncilMotion, index, ctx.block.height)
        return
    }

    const { section, method, args, description } = parseProposalCall(ctx._chain, storageData)

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.CouncilMotion,
        hash: toHex(hash),
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        threshold,
        call: {
            section,
            method,
            description,
            args: args as Record<string, unknown>,
        },
    })
}
