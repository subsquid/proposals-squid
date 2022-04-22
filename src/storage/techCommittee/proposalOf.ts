import { UnknownVersionError } from '../../common/errors'
import { Instance2CollectiveProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Type_103 } from '../../types/v18'

type TechnicalCommitteeProposalStorageData = Type_103

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV15) {
        return (await storage.getAsV15(hash)) as TechnicalCommitteeProposalStorageData
    } else if (storage.isV16) {
        return (await storage.getAsV16(hash)) as TechnicalCommitteeProposalStorageData
    } else if (storage.isV17) {
        return (await storage.getAsV17(hash)) as TechnicalCommitteeProposalStorageData
    } else if (storage.isV18) {
        return (await storage.getAsV18(hash)) as TechnicalCommitteeProposalStorageData
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return await getInstanceStorageData(ctx, hash)
}
