import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalManager } from '../../../managers'
import { TechnicalCommitteeExecutedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeExecutedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020[0]
    } else if (event.isV2005) {
        return event.asV2005[0]
    } else if (event.isV9111) {
        return event.asV9111[0]
    } else if (event.isV9130) {
        return event.asV9130.proposalHash
    } else if (event.isV9160) {
        return event.asV9160.proposalHash
    } else if (event.isV9170) {
        return event.asV9170.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleExecuted(ctx: EventHandlerContext) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.TechCommitteeProposal)
    if (!proposal) {
        console.warn(`Missing record for TechnicalCommittee motion with hash ${hash} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Executed
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
