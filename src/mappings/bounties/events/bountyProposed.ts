/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { BountiesBountyProposedEvent, TreasuryBountyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'

interface BountyEventData {
    index: number
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyProposedEvent(ctx)
    if (event.isV25) {
        const index = event.asV25
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyProposedEvent(ctx)
    if (event.isV28) {
        const index = event.asV28
        return {
            index,
        }
    } else if (event.isV9140) {
        const { index } = event.asV9140
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'bounties' ? getBountyEventData : getTreasuryEventData
    const { index } = getEventData(ctx)

    const storageData = await storage.bounties.getBounties(ctx, index)
    if (!storageData) {
        new StorageNotExists(ProposalType.Bounty, index, ctx.block.height)
        return
    }

    const { proposer, value, bond } = storageData

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.Bounty,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
    })
}
