/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { BountiesBountiesStorage, TreasuryBountiesStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'

interface BountyStorageData {
    proposer: Uint8Array
    value: bigint
    bond: bigint
}

async function getBountyStorageData(ctx: StorageContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new BountiesBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9110) {
        return await storage.getAsV9110(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: StorageContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new TreasuryBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV25) {
        return await storage.getAsV25(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBounties(ctx: StorageContext, index: number) {
    return (await getBountyStorageData(ctx, index)) || (await getTreasuryStorageData(ctx, index))
}
