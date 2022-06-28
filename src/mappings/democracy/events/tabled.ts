import { EventHandlerContext } from '../../types/contexts'
import { DemocracyTabledEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'

interface TabledEventData {
    index: number
    deposit: bigint
    depositors: Uint8Array[]
}

function getEventData(ctx: EventContext): TabledEventData {
    const event = new DemocracyTabledEvent(ctx)
    if (event.isV803) {
        const [index, deposit, depositors] = event.asV803
        return {
            index,
            deposit,
            depositors,
        }
    } else if (event.isV916) {
        const { proposalIndex: index, deposit, depositors } = event.asV916
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

    await updateProposalStatus(ctx, index, ProposalType.DemocracyProposal, {
        status: ProposalStatus.Used,
        isEnded: true,
    })
}
