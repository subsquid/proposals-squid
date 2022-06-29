/* eslint-disable @typescript-eslint/ban-ts-comment */
import { UnknownVersionError } from '../../common/errors'
import { BountiesBountiesStorage, TreasuryBountiesStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface BountyStorageData {
    proposer: Uint8Array
    value: bigint
    bond: bigint
}

async function getBountyStorageData(ctx: BlockContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new BountiesBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9110) {
        return await storage.getAsV9110(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getTreasuryStorageData(ctx: BlockContext, index: number): Promise<BountyStorageData | undefined> {
    const storage = new TreasuryBountiesStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV25) {
        return await storage.getAsV25(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getBounties(ctx: BlockContext, index: number) {
    return (await getBountyStorageData(ctx, index)) || (await getTreasuryStorageData(ctx, index))
}
