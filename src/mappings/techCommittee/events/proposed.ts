/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TechnicalCommitteeProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import {
    MotionThreshold,
    Proposal,
    ProposalGroup,
    ProposalStatus,
    ProposalType,
    StatusHistoryItem,
} from '../../../model'
import { ProposedCall } from '../../../model/generated/_proposedCall'
import { proposalGroupManager, proposalManager } from '../../../managers'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'
import { storage } from '../../../storage'

interface TechnicalCommitteeProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

function getEventData(ctx: EventContext): TechnicalCommitteeProposalEventData {
    const event = new TechnicalCommitteeProposedEvent(ctx)
    if (event.isV1020) {
        const [proposer, index, hash, threshold] = event.asV1020
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV9130) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV9130
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, proposer, hash, threshold } = getEventData(ctx)

    const storageData = await storage.techCommittee.getProposalOf(ctx, hash)
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.TechCommitteeProposal, index, ctx.block.height))
        return
    }

    const { section, method, args } = parseProposalCall(storageData)
    // @ts-ignore
    const description = (ctx._chain.calls.get(`${section}.${method}`).docs as string[]).join('\n')

    let group: ProposalGroup | undefined
    if (args['proposalHash']) {
        const hexHash = args['proposalHash'] as string
        group = await proposalGroupManager.get(ctx, hexHash, ProposalType.Preimage)
    } else if (args['bountyId']) {
        const index = args['bountyId'] as number
        group = await proposalGroupManager.get(ctx, index, ProposalType.Bounty)
    } else if (args['proposalId']) {
        const index = args['proposalId'] as number
        group = await proposalGroupManager.get(ctx, index, ProposalType.TreasuryProposal)
    }

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            index,
            type: ProposalType.TechCommitteeProposal,
            hash: toHex(hash),
            proposer: encodeId(proposer, config.prefix),
            createdAt: ctx.block.height,
            status: ProposalStatus.Proposed,
            threshold: new MotionThreshold({
                value: threshold,
            }),
            proposedCall: new ProposedCall({
                section,
                method,
                description,
                args: JSON.stringify(args),
            }),
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
