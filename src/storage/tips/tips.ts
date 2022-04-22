import { UnknownVersionError } from '../../common/errors'
import { TipsTipsStorage, TreasuryTipsStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'

interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
}

async function getTipsStorageData(ctx: StorageContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TipsTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV29) {
        return await storage.getAsV29(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: StorageContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TreasuryTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV13) {
        return await storage.getAsV13(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTips(ctx: StorageContext, hash: Uint8Array) {
    return (await getTipsStorageData(ctx, hash)) || (await getTreasuryStorageData(ctx, hash))
}
