/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { CouncilProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'
import { storage } from '../../../storage'
import { toCamelCase } from '@subsquid/util'

interface CouncilProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

function getEventData(ctx: EventContext): CouncilProposalEventData {
    const event = new CouncilProposedEvent(ctx)
    if (event.isV0) {
        const [proposer, index, hash, threshold] = event.asV0
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV9140) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV9140
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.CouncilMotion,
        hash: toHex(hash),
        proposer: encodeId(proposer, config.prefix),
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
