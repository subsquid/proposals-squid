/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '../../contexts'
import { BountiesBountyProposedEvent, TreasuryBountyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'

interface BountyEventData {
    index: number
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyProposedEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyProposedEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(
    ctx: EventHandlerContext<{
        event: {
            name: true
            args: true
        }
    }>
) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyEventData : getTreasuryEventData
    const { index } = getEventData(ctx)

    const storageData = await storage.bounties.getBounties(ctx, index)
    if (!storageData) {
        new StorageNotExists(ProposalType.Bounty, index, ctx.block.height)
        return
    }

    const { proposer, value, bond } = storageData

    await proposalManager.create(ctx.store, {
        id: ctx.event.id,
        index,
        type: ProposalType.Bounty,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        block: ctx.block,
    })
}
