/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { TreasuryProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { proposalGroupManager, proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'
import { storage } from '../../../storage'

interface TreasuryProposalEventData {
    index: number
}

function getEventData(ctx: EventContext): TreasuryProposalEventData {
    const event = new TreasuryProposedEvent(ctx)
    if (event.isV1020) {
        const index = event.asV1020
        return {
            index,
        }
    } else if (event.isV9160) {
        const { proposalIndex: index } = event.asV9160
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const storageData = await storage.treasury.getProposals(ctx, index)
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.TreasuryProposal, index, ctx.block.height))
        return
    }

    const { proposer, beneficiary, value, bond } = storageData

    const group = await proposalGroupManager.get(ctx, index, ProposalType.TreasuryProposal)

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            index,
            type: ProposalType.TreasuryProposal,
            proposer: encodeId(proposer, config.prefix),
            createdAt: ctx.block.height,
            status: ProposalStatus.Proposed,
            reward: value,
            deposit: bond,
            payee: encodeId(beneficiary, config.prefix),
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
