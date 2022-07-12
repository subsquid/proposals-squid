import { UnknownVersionError } from '../../common/errors'
import { TipsTipsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface TipStorageData {
    who: Uint8Array
    finder?: Uint8Array
    deposit?: bigint
}

async function getTipsStorageData(ctx: BlockContext, hash: Uint8Array): Promise<TipStorageData | undefined> {
    const storage = new TipsTipsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1090) {
        return await storage.getAsV1090(hash)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getTips(ctx: BlockContext, hash: Uint8Array) {
    return await getTipsStorageData(ctx, hash)
}
