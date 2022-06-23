import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { BountiesBountyAwardedEvent, TreasuryBountyAwardedEvent } from '../../../types/events'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'

interface BountyEventData {
    index: number
    beneficiary: Uint8Array
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyAwardedEvent(ctx)
    if (event.isV2025) {
        const [index, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyAwardedEvent(ctx)
    if (event.isV2028) {
        const [index, beneficiary] = event.asV2028
        return {
            index,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, beneficiary } = event.asV9130
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAwarded(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyEventData : getTreasuryEventData
    const { index, beneficiary } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        isEnded: true,
        status: ProposalStatus.Awarded,
        data: {
            payee: ss58codec.encode(beneficiary),
        },
    })
}
