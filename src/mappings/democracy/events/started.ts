import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyStartedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import {
    Proposal,
    ProposalStatus,
    ProposalType,
    ReferendumThreshold,
    ReferendumThresholdType,
    StatusHistoryItem,
} from '../../../model'
import { proposalGroupManager, proposalManager } from '../../../managers'
import { storage } from '../../../storage'

type Threshold = 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority'

interface ReferendumEventData {
    index: number
    threshold: Threshold
}

function fixThreshold(ctx: EventHandlerContext) {
    const threshold = ctx.event.params[1].value as string
    if (threshold.toLowerCase() === 'simplemajority') {
        ctx.event.params[1].value = 'SimpleMajority'
    } else if (threshold.toLowerCase() === 'supermajorityapproval') {
        ctx.event.params[1].value = 'SuperMajorityApprove'
    } else {
        ctx.event.params[1].value = 'SuperMajorityAgainst'
    }
}

function getEventData(ctx: EventContext): ReferendumEventData {
    const event = new DemocracyStartedEvent(ctx)
    if (event.isV1020) {
        const [index, threshold] = event.asV1020
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (event.isV9130) {
        const { refIndex: index, threshold } = event.asV9130
        return {
            index,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleStarted(ctx: EventHandlerContext) {
    fixThreshold(ctx)

    const { index, threshold } = getEventData(ctx)

    const storageData = await storage.democracy.getReferendumInfoOf(ctx, index)
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.Referendum, index, ctx.block.height))
        return
    }

    if (storageData.status === 'Finished') {
        console.warn(`Referendum with index ${index} has already finished at block ${ctx.block.height}`)
        return
    }

    const { hash } = storageData
    const hexHash = toHex(hash)

    const group = await proposalGroupManager.get(ctx, hexHash, ProposalType.Preimage)

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            index,
            type: ProposalType.Referendum,
            createdAt: ctx.block.height,
            threshold: new ReferendumThreshold({
                type: threshold as ReferendumThresholdType,
            }),
            status: ProposalStatus.Started,
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status: ProposalStatus.Started,
                }),
            ],
            group,
        })
    )
}
