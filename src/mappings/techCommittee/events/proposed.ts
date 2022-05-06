/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TechnicalCommitteeProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'
import { storage } from '../../../storage'
import { toCamelCase } from '@subsquid/util'

interface TechnicalCommitteeProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

function getEventData(ctx: EventContext): TechnicalCommitteeProposalEventData {
    const event = new TechnicalCommitteeProposedEvent(ctx)
    if (event.isV15) {
        const [proposer, index, hash, threshold] = event.asV15
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, proposer, hash, threshold } = getEventData(ctx)

    const storageData = await storage.techCommittee.getProposalOf(ctx, hash)
    if (!storageData) {
        new StorageNotExists(ProposalType.TechCommitteeProposal, index, ctx.block.height)
        return
    }

    const { section, method, args, description } = parseProposalCall(ctx._chain, storageData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.TechCommitteeProposal,
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
