import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../contexts'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TechnicalCommitteeClosedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeClosedEvent(ctx)
    if (event.isV1050) {
        return event.asV1050[0]
    } else if (event.isV9130) {
        return event.asV9130.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClosed(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx.store, hexHash, ProposalType.TechCommitteeProposal, {
        block: ctx.block,
        status: ProposalStatus.Closed,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.TechCommitteeProposal, hexHash, ctx.block.height)
    }
}
