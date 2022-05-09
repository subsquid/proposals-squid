import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { ss58codec } from '../../../common/tools'
import config from '../../../config'
import { storage } from '../../../storage'

interface DemocracyProposalEventData {
    index: number
    deposit: bigint
}

function getEventData(ctx: EventContext): DemocracyProposalEventData {
    const event = new DemocracyProposedEvent(ctx)
    if (event.isV15) {
        const [index, deposit] = event.asV15
        return {
            index,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, deposit } = getEventData(ctx)

    const storageData = await storage.democracy.getProposals(ctx)
    if (!storageData) {
        console.warn(`Storage doesn't exist for democracy proposals at block ${ctx.block.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        new StorageNotExists(ProposalType.DemocracyProposal, index, ctx.block.height)
        return
    }
    const { hash, proposer } = proposalData
    const hexHash = toHex(hash)

    await proposalManager.create(ctx, {
        hash: hexHash,
        index,
        proposer: ss58codec.encode(proposer),
        type: ProposalType.DemocracyProposal,
        status: ProposalStatus.Proposed,
        deposit,
    })
}
