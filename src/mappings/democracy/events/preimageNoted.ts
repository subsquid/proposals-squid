/* eslint-disable @typescript-eslint/ban-ts-comment */
import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { BlockContext } from '../../../types/support'
import { DemocracyPreimagesStorage } from '../../../types/storage'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec, parseProposalCall } from '../../../common/tools'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { createPreimage } from '../../utils/proposals'
import { getPreimageNotedData } from './getters'

import { Call as Call_v1090 } from '../../../types/v1090'
import { Call as Call_v1148 } from '../../../types/v1148'
import { Call as Call_v1160 } from '../../../types/v1160'

type ProposalCall = Call_v1090 | Call_v1148 | Call_v1160

interface PreimageStorageData {
    data: Uint8Array
    provider: Uint8Array
    deposit: bigint
    block: number
}

function decodeProposal(chain: Chain, data: Uint8Array): ProposalCall {
    // @ts-ignore
    return chain.scaleCodec.decodeBinary(chain.description.call, data)
}

async function getStorageData(ctx: BlockContext, hash: Uint8Array): Promise<PreimageStorageData | undefined> {
    const storage = new DemocracyPreimagesStorage(ctx)
    if (storage.isV1090) {
        const storageData = await storage.getAsV1090(hash)
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
    const { hash, provider, deposit } = getPreimageNotedData(ctx)
    const hexHash = toHex(hash)

    const storageData = await getStorageData(ctx, hash)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Preimage, hexHash))
        return
    }

    let decodedCall:
        | {
              section: string
              method: string
              description: string
              args: Record<string, unknown>
          }
        | undefined

    try {
        const proposal = decodeProposal(ctx._chain as Chain, storageData.data)

        const { section, method, args, description } = parseProposalCall(ctx._chain, proposal)

        decodedCall = {
            section,
            method,
            description,
            args: args as Record<string, unknown>,
        }
    } catch (e) {
        ctx.log.warn(`Failed to decode ProposedCall of Preimage ${hexHash} at block ${ctx.block.height}:\n ${e}`)
    }

    const proposer = ss58codec.encode(provider)

    await createPreimage(ctx, {
        hash: hexHash,
        proposer,
        deposit,
        call: decodedCall,
        status: ProposalStatus.Noted,
    })
}
