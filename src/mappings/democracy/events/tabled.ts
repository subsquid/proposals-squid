import { EventHandlerContext } from '@subsquid/substrate-processor'
import { DemocracyTabledEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
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

    const proposal = await proposalManager.get(ctx, index, ProposalType.DemocracyProposal)
    if (!proposal) {
        console.warn(`Missing record for proposal with index ${index} at block ${ctx.block.height}`)
        return
    }

    proposal.status = ProposalStatus.Tabled
    proposal.statusHistory.push(
        new StatusHistoryItem({
            block: ctx.block.height,
            timestamp: new Date(ctx.block.timestamp),
            status: proposal.status,
        })
    )

    await proposalManager.save(ctx, proposal)
}
