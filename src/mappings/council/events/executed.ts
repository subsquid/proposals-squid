import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../contexts'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { CouncilExecutedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new CouncilExecutedEvent(ctx)
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

export async function handleExecuted(
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
        status: ProposalStatus.Executed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.CouncilMotion, hexHash, ctx.block.height)
    }
}
