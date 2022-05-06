/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { TreasuryProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { ss58codec } from '../../../common/tools'
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
        (new StorageNotExists(ProposalType.TreasuryProposal, index, ctx.block.height))
        return
    }

    const { proposer, beneficiary, value, bond } = storageData

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.TreasuryProposal,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: ss58codec.encode(beneficiary),
    })
}
