import { EventHandlerContext } from '../../contexts'
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

export async function handleTabled(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx.store, index, ProposalType.DemocracyProposal, {
        block: ctx.block,
        status: ProposalStatus.Tabled,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.DemocracyProposal, index, ctx.block.height)
    }
}
