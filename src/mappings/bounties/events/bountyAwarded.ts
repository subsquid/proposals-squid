import { EventHandlerContext } from '../../contexts'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyAwardedEvent, TreasuryBountyAwardedEvent } from '../../../types/events'
import { ss58codec } from '../../../common/tools'

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

export async function handleAwarded(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyEventData : getTreasuryEventData
    const { index, beneficiary } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx.store, index, ProposalType.Bounty, {
        block: ctx.block,
        status: ProposalStatus.Awarded,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height)
        return
    }

    proposal.payee = ss58codec.encode(beneficiary)
    await proposalManager.update(ctx.store, proposal, { block: ctx.block })
}
