/* eslint-disable @typescript-eslint/ban-ts-comment */
import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { CouncilProposedEvent } from '../../../types/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec, parseProposalCall } from '../../../common/tools'
import { storage } from '../../../storage'
import { createCoucilMotion } from '../../utils/proposals'

interface CouncilProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

function getEventData(ctx: EventContext): CouncilProposalEventData {
    const event = new CouncilProposedEvent(ctx)
    if (event.isV1020) {
        const [proposer, index, hash, threshold] = event.asV1020
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV9130) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV9130
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
        ctx.log.warn(StorageNotExistsWarn(ProposalType.CouncilMotion, index))
        return
    }

    const { section, method, args, description } = parseProposalCall(ctx._chain, storageData)

    await createCoucilMotion(ctx, {
        index,
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
