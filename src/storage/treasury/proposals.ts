import { UnknownVersionError } from '../../common/errors'
import { TreasuryProposalsStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'

interface TreasuryProposalStorageData {
    proposer: Uint8Array
    value: bigint
    beneficiary: Uint8Array
    bond: bigint
}

async function getStorageData(ctx: StorageContext, index: number): Promise<TreasuryProposalStorageData | undefined> {
    const storage = new TreasuryProposalsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV13) {
        return await storage.getAsV13(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: StorageContext, index: number) {
    return await getStorageData(ctx, index)
}
