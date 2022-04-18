import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyStartedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext, StorageContext } from '../../../types/support'
import {
    Proposal,
    ProposalStatus,
    ProposalType,
    ReferendumThreshold,
    ReferendumThresholdType,
    StatusHistoryItem,
} from '../../../model'
import { DemocracyReferendumInfoOfStorage } from '../../../types/storage'
import * as v1055 from '../../../types/v1055'
import * as v9111 from '../../../types/v9111'
import { proposalGroupManager, proposalManager } from '../../../managers'

type Threshold = 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority'

interface ReferendumEventData {
    index: number
    threshold: Threshold
}

type FinishedReferendumData = {
    approved: boolean
    end: number
}

type OngoingReferendumData = {
    end: number
    hash: Uint8Array
    threshold: Threshold
    delay: number
}

interface ReferendumStorageData {
    status: 'Finished' | 'Ongoing'
    info: FinishedReferendumData | OngoingReferendumData
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

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: StorageContext, index: number): Promise<ReferendumStorageData | undefined> {
    const storage = new DemocracyReferendumInfoOfStorage(ctx)
    if (storage.isV1020) {
        const storageData = await storage.getAsV1020(index)
        if (!storageData) return undefined

        const { proposalHash: hash, end, delay, threshold } = storageData
        return {
            status: 'Ongoing',
            info: {
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            },
        }
    } else if (storage.isV1055) {
        const storageData = await storage.getAsV1055(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v1055.ReferendumInfo_Ongoing).value
            return {
                status,
                info: {
                    hash,
                    end,
                    delay,
                    threshold: threshold.__kind,
                },
            }
        } else {
            const { end, approved } = (storageData as v1055.ReferendumInfo_Finished).value
            return {
                status,
                info: {
                    end,
                    approved,
                },
            }
        }
    } else if (storage.isV9111) {
        const storageData = await storage.getAsV9111(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v9111.ReferendumInfo_Ongoing).value
            return {
                status,
                info: {
                    hash,
                    end,
                    delay,
                    threshold: threshold.__kind,
                },
            }
        } else {
            const { end, approved } = storageData as v9111.ReferendumInfo_Finished
            return {
                status,
                info: {
                    end,
                    approved,
                },
            }
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleStarted(ctx: EventHandlerContext) {
    fixThreshold(ctx)

    const { index, threshold } = getEventData(ctx)

    const storageData = await getStorageData(ctx, index)
    if (!storageData) {
        console.warn(new StorageNotExists(ProposalType.Referendum, index, ctx.block.height))
        return
    }

    if (storageData.status === 'Finished') {
        console.warn(`Referendum with index ${index} has already finished at block ${ctx.block.height}`)
        return
    }

    const { hash } = storageData.info as OngoingReferendumData
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
