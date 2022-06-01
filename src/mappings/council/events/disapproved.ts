import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../contexts'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { CouncilDisapprovedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new CouncilDisapprovedEvent(ctx)
    if (event.isV1020) {
        return event.asV1020
    } else if (event.isV9130) {
        return event.asV9130.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleDisapproved(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx.store, hexHash, ProposalType.CouncilMotion, {
        block: ctx.block,
        status: ProposalStatus.Disapproved,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.CouncilMotion, hexHash, ctx.block.height)
    }
}
