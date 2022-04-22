import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { CouncilApprovedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new CouncilApprovedEvent(ctx)
    if (event.isV15) {
        return event.asV15
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleApproved(ctx: EventHandlerContext) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        status: ProposalStatus.Approved,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.CouncilMotion, hexHash, ctx.block.height)
    }
}
