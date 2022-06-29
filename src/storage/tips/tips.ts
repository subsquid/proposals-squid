import { UnknownVersionError } from '../../common/errors'
import { TreasuryTipsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
}

/* async function getTipsStorageData(ctx: BlockContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TipsTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.getAsV9111(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}
 */
async function getTreasuryStorageData(ctx: BlockContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TreasuryTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV15) {
        return await storage.getAsV15(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTips(ctx: BlockContext, hash: Uint8Array) {
    return /* await getTipsStorageData(ctx, hash)) || */ (await getTreasuryStorageData(ctx, hash))
}
