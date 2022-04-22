import { UnknownVersionError } from '../../common/errors'
import { Instance2CollectiveProposalOfStorage, TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v29'

type TechnicalCommitteeProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV13) {
        return (await storage.getAsV13(hash)) as Call
    } else if (storage.isV14) {
        return (await storage.getAsV14(hash)) as Call
    } else if (storage.isV22) {
        return (await storage.getAsV22(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getCoucilStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV29) {
        return (await storage.getAsV29(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash)) || (await getInstanceStorageData(ctx, hash))
}
