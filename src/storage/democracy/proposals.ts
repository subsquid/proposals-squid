import { UnknownVersionError } from '../../common/errors'
import { StorageContext } from '../../types/support'
import { DemocracyPublicPropsStorage } from '../../types/storage'

interface DemocracyProposalStorageData {
    index: number
    hash: Uint8Array
    proposer: Uint8Array
}

async function getStorageData(ctx: StorageContext): Promise<DemocracyProposalStorageData[] | undefined> {
    const storage = new DemocracyPublicPropsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV15) {
        const storageData = await storage.getAsV15()
        if (!storageData) return undefined

        return storageData.map((proposal): DemocracyProposalStorageData => {
            const [index, hash, proposer] = proposal
            return {
                index,
                hash,
                proposer,
            }
        })
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposals(ctx: StorageContext) {
    return await getStorageData(ctx)
}
