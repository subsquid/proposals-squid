import { UnknownVersionError } from '../../common/errors'
import { TipsTipsStorage, TreasuryTipsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
}

async function getTipsStorageData(ctx: BlockContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TipsTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.getAsV9111(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: BlockContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TreasuryTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1038) {
        const storageData = await storage.getAsV1038(hash)
        if (!storageData) return undefined

        const { who, finder } = storageData
        return {
            who,
            finder: finder?.[0],
            deposit: finder?.[1],
        }
    } else if (storage.isV2013) {
        return await storage.getAsV2013(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTips(ctx: BlockContext, hash: Uint8Array) {
    return (await getTipsStorageData(ctx, hash)) || (await getTreasuryStorageData(ctx, hash))
}
