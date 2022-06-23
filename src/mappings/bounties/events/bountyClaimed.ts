import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { BountiesBountyClaimedEvent, TreasuryBountyClaimedEvent } from '../../../types/events'
import { ss58codec } from '../../../common/tools'
import { updateProposalStatus } from '../../utils/proposals'

interface BountyEventData {
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyClaimedEvent(ctx)
    if (event.isV2025) {
        const [index, payout, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyClaimedEvent(ctx)
    if (event.isV2028) {
        const [index, payout, beneficiary] = event.asV2028
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, payout, beneficiary } = event.asV9130
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClaimed(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyEventData : getTreasuryEventData
    const { index, payout, beneficiary } = getEventData(ctx)

    await updateProposalStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
        data: {
            reward: payout,
            payee: ss58codec.encode(beneficiary),
        },
    })
}
