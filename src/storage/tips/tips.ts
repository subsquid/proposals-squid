import { UnknownVersionError } from '../../common/errors'
import { TreasuryTipsStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'

interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
}

async function getTreasuryStorageData(ctx: StorageContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TreasuryTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV15) {
        return await storage.getAsV15(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTips(ctx: StorageContext, hash: Uint8Array) {
    return await getTreasuryStorageData(ctx, hash)
}
