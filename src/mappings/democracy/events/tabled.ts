import { EventHandlerContext } from '@subsquid/substrate-processor'
import { DemocracyTabledEvent } from '../../../types/events'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'

interface TabledEventData {
    index: number
    deposit: bigint
    depositors: Uint8Array[]
}

function getEventData(ctx: EventContext): TabledEventData {
    const event = new DemocracyTabledEvent(ctx)
    if (event.isV1020) {
        const [index, deposit, depositors] = event.asV1020
        return {
            index,
            deposit,
            depositors,
        }
    } else if (event.isV9130) {
        const { proposalIndex: index, deposit, depositors } = event.asV9130
        return {
            index,
            deposit,
            depositors,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTabled(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.DemocracyProposal, {
        status: ProposalStatus.Tabled,
    })
    if (!proposal) {
        console.warn(new MissingProposalRecord(ProposalType.DemocracyProposal, index, ctx.block.height))
    }
}
