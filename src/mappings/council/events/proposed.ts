/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { CouncilProposedEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { CouncilProposalOfStorage, Instance1CollectiveProposalOfStorage } from '../../../types/storage'
import { EventContext, StorageContext } from '../../../types/support'
import {
    MotionThreshold,
    Proposal,
    ProposalGroup,
    ProposalStatus,
    ProposalType,
    StatusHistoryItem,
} from '../../../model'
import { ProposedCall } from '../../../model/generated/_proposedCall'
import { Call } from '../../../types/v9170'
import { proposalGroupManager, proposalManager } from '../../../managers'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'

type ProposalCall = Call

interface CouncilProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

type CouncilProposalStorageData = ProposalCall

function getEventData(ctx: EventContext): CouncilProposalEventData {
    const event = new CouncilProposedEvent(ctx)
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

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: StorageContext, hash: Uint8Array): Promise<CouncilProposalStorageData | undefined> {
    let storage: CouncilProposalOfStorage | Instance1CollectiveProposalOfStorage = new CouncilProposalOfStorage(ctx)
    if (storage.isExists) {
        if (storage.isV9111) {
            return (await storage.getAsV9111(hash)) as ProposalCall
        } else if (storage.isV9122) {
            return (await storage.getAsV9122(hash)) as ProposalCall
        } else if (storage.isV9130) {
            return (await storage.getAsV9130(hash)) as ProposalCall
        } else if (storage.isV9160) {
            return (await storage.getAsV9160(hash)) as ProposalCall
        } else if (storage.isV9170) {
            return (await storage.getAsV9170(hash)) as ProposalCall
        } else if (storage.isV9180) {
            return (await storage.getAsV9180(hash)) as ProposalCall
        } else {
            throw new UnknownVersionError(storage.constructor.name)
        }
    } else {
        storage = new Instance1CollectiveProposalOfStorage(ctx)
        if (storage.isExists) {
            if (storage.isV1020) {
                return (await storage.getAsV1020(hash)) as ProposalCall
            } else if (storage.isV1022) {
                return (await storage.getAsV1022(hash)) as ProposalCall
            } else if (storage.isV1024) {
                return (await storage.getAsV1024(hash)) as ProposalCall
            } else if (storage.isV1027) {
                return (await storage.getAsV1027(hash)) as ProposalCall
            } else if (storage.isV1029) {
                return (await storage.getAsV1029(hash)) as ProposalCall
            } else if (storage.isV1030) {
                return (await storage.getAsV1030(hash)) as ProposalCall
            } else if (storage.isV1031) {
                return (await storage.getAsV1031(hash)) as ProposalCall
            } else if (storage.isV1032) {
                return (await storage.getAsV1032(hash)) as ProposalCall
            } else if (storage.isV1038) {
                return (await storage.getAsV1038(hash)) as ProposalCall
            } else if (storage.isV1039) {
                return (await storage.getAsV1039(hash)) as ProposalCall
            } else if (storage.isV1040) {
                return (await storage.getAsV1040(hash)) as ProposalCall
            } else if (storage.isV1042) {
                return (await storage.getAsV1042(hash)) as ProposalCall
            } else if (storage.isV1050) {
                return (await storage.getAsV1050(hash)) as ProposalCall
            } else if (storage.isV1054) {
                return (await storage.getAsV1054(hash)) as ProposalCall
            } else if (storage.isV1055) {
                return (await storage.getAsV1055(hash)) as ProposalCall
            } else if (storage.isV1058) {
                return (await storage.getAsV1058(hash)) as ProposalCall
            } else if (storage.isV1062) {
                return (await storage.getAsV1062(hash)) as ProposalCall
            } else if (storage.isV2005) {
                return (await storage.getAsV2005(hash)) as ProposalCall
            } else if (storage.isV2007) {
                return (await storage.getAsV2007(hash)) as ProposalCall
            } else if (storage.isV2011) {
                return (await storage.getAsV2011(hash)) as ProposalCall
            } else if (storage.isV2013) {
                return (await storage.getAsV2013(hash)) as ProposalCall
            } else if (storage.isV2015) {
                return (await storage.getAsV2015(hash)) as ProposalCall
            } else if (storage.isV2022) {
                return (await storage.getAsV2022(hash)) as ProposalCall
            } else if (storage.isV2023) {
                return (await storage.getAsV2023(hash)) as ProposalCall
            } else if (storage.isV2024) {
                return (await storage.getAsV2024(hash)) as ProposalCall
            } else if (storage.isV2025) {
                return (await storage.getAsV2025(hash)) as ProposalCall
            } else if (storage.isV2026) {
                return (await storage.getAsV2026(hash)) as ProposalCall
            } else if (storage.isV2028) {
                return (await storage.getAsV2028(hash)) as ProposalCall
            } else if (storage.isV2029) {
                return (await storage.getAsV2029(hash)) as ProposalCall
            } else if (storage.isV2030) {
                return (await storage.getAsV2030(hash)) as ProposalCall
            } else if (storage.isV9010) {
                return (await storage.getAsV9010(hash)) as ProposalCall
            } else if (storage.isV9030) {
                return (await storage.getAsV9030(hash)) as ProposalCall
            } else if (storage.isV9040) {
                return (await storage.getAsV9040(hash)) as ProposalCall
            } else if (storage.isV9050) {
                return (await storage.getAsV9050(hash)) as ProposalCall
            } else if (storage.isV9080) {
                return (await storage.getAsV9080(hash)) as ProposalCall
            } else if (storage.isV9090) {
                return (await storage.getAsV9090(hash)) as ProposalCall
            } else if (storage.isV9100) {
                return (await storage.getAsV9100(hash)) as ProposalCall
            } else {
                throw new UnknownVersionError(storage.constructor.name)
            }
        }
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, proposer, hash, threshold } = getEventData(ctx)

    const storageData = await getStorageData(ctx, hash)
    if (!storageData) {
        console.warn(`Storage for council motion doesn't exist at block ${ctx.block.height}`)
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
            type: ProposalType.CouncilMotion,
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
