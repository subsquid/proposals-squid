import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { CouncilDisapprovedEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

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

export async function handleDisapproved(ctx: EventHandlerContext) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
    })
}
