/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyPreimageNotedEvent } from '../../../types/events'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext, StorageContext } from '../../../types/support'
import { DemocracyPreimagesStorage } from '../../../types/storage'
import { Proposal, ProposalStatus, ProposalType, StatusHistoryItem } from '../../../model'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'
import { ProposedCall } from '../../../model/generated/_proposedCall'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Call } from '../../../types/v9111'
import { proposalGroupManager, proposalManager } from '../../../managers'

type ProposalCall = Call

interface PreimageEventData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

interface PreimageStorageData {
    data: Uint8Array
    provider: Uint8Array
    deposit: bigint
    block: number
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageNotedEvent(ctx)
    if (event.isV1022) {
        const [hash, provider, deposit] = event.asV1022
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, who: provider, deposit } = event.asV9130
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function decodeProposal(chain: Chain, data: Uint8Array): ProposalCall {
    // @ts-ignore
    return chain.scaleCodec.decodeBinary(chain.description.call, data)
}

async function getStorageData(ctx: StorageContext, hash: Uint8Array): Promise<PreimageStorageData | undefined> {
    const storage = new DemocracyPreimagesStorage(ctx)
    if (storage.isV1022) {
        const storageData = await storage.getAsV1022(hash)
        if (!storageData) return undefined

        const [data, provider, deposit, block] = storageData

        return {
            data,
            provider,
            deposit,
            block,
        }
    } else if (storage.isV1058) {
        const storageData = await storage.getAsV1058(hash)
        if (!storageData || storageData.__kind === 'Missing') return undefined

        const { provider, deposit, since, data } = storageData.value

        return {
            data,
            provider,
            deposit,
            block: since,
        }
    } else if (storage.isV9111) {
        const storageData = await storage.getAsV9111(hash)
        if (!storageData || storageData.__kind === 'Missing') return undefined

        const { provider, deposit, since, data } = storageData

        return {
            data,
            provider,
            deposit,
            block: since,
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handlePreimageNoted(ctx: EventHandlerContext) {
    const { hash, provider, deposit } = getEventData(ctx)
    const hexHash = toHex(hash)

    const storageData = await getStorageData(ctx, hash)
    if (!storageData) return

    let proposedCall: ProposedCall | null = null

    try {
        const proposal = decodeProposal(ctx._chain as Chain, storageData.data)

        const { section, method, args } = parseProposalCall(proposal)
        // @ts-ignore
        const meta = ctx._chain.calls.get(`${section}.${method}`)
        const description = (meta.docs as string[]).join('\n')

        proposedCall = new ProposedCall({
            section,
            method,
            description,
            args: JSON.stringify(args),
        })
    } catch (e) {
        console.warn(`Failed to decode ProposedCall of Preimage ${hash} at block ${ctx.block.height}`)
    }

    const proposer = encodeId(provider, config.prefix)

    const group = await proposalGroupManager.get(ctx, hexHash, ProposalType.Preimage)

    await proposalManager.save(
        ctx,
        new Proposal({
            id: ctx.event.id,
            hash: hexHash,
            type: ProposalType.Preimage,
            proposer,
            deposit,
            createdAt: storageData.block,
            proposedCall,
            status: ProposalStatus.Noted,
            statusHistory: [
                new StatusHistoryItem({
                    block: ctx.block.height,
                    timestamp: new Date(ctx.block.timestamp),
                    status: ProposalStatus.Noted,
                }),
            ],
            group,
        })
    )
}
