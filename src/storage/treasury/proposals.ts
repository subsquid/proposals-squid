import { UnknownVersionError } from '../../common/errors'
import { TreasuryProposalsStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

interface TreasuryProposalStorageData {
    proposer: Uint8Array
    value: bigint
    beneficiary: Uint8Array
    bond: bigint
}

async function getStorageData(ctx: BlockContext, index: number): Promise<TreasuryProposalStorageData | undefined> {
    const storage = new TreasuryProposalsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020(index)
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: BlockContext, index: number) {
    return await getStorageData(ctx, index)
}
