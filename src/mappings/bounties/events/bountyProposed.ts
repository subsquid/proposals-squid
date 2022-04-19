/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { BountiesBountyProposedEvent, TreasuryBountyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalGroupManager, proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'
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

export async function handleProposed(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'bounties' ? getBountyEventData : getTreasuryEventData
    const { index } = getEventData(ctx)

    const storageData = await storage.bounties.getBounties(ctx, index)
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.Bounty, index, ctx.block.height))
        return
    }

    const { proposer, value, bond } = storageData

    const group = await proposalGroupManager.get(ctx, index, ProposalType.Bounty)

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            index,
            type: ProposalType.Bounty,
            proposer: encodeId(proposer, config.prefix),
            createdAt: ctx.block.height,
            status: ProposalStatus.Proposed,
            reward: value,
            deposit: bond,
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status: ProposalStatus.Proposed,
                }),
            ],
            group,
        })
    )
}
