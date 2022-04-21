import { UnknownVersionError } from '../../common/errors'
import { Instance2CollectiveProposalOfStorage, TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v9170'

type TechnicalCommitteeProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV0) {
        return (await storage.getAsV0(hash)) as Call
    } else if (storage.isV5) {
        return (await storage.getAsV5(hash)) as Call
    } else if (storage.isV6) {
        return (await storage.getAsV6(hash)) as Call
    } else if (storage.isV7) {
        return (await storage.getAsV7(hash)) as Call
    } else if (storage.isV9) {
        return (await storage.getAsV9(hash)) as Call
    } else if (storage.isV10) {
        return (await storage.getAsV10(hash)) as Call
    } else if (storage.isV11) {
        return (await storage.getAsV11(hash)) as Call
    } else if (storage.isV13) {
        return (await storage.getAsV13(hash)) as Call
    } else if (storage.isV14) {
        return (await storage.getAsV14(hash)) as Call
    } else if (storage.isV15) {
        return (await storage.getAsV15(hash)) as Call
    } else if (storage.isV17) {
        return (await storage.getAsV17(hash)) as Call
    } else if (storage.isV18) {
        return (await storage.getAsV18(hash)) as Call
    } else if (storage.isV23) {
        return (await storage.getAsV23(hash)) as Call
    } else if (storage.isV24) {
        return (await storage.getAsV24(hash)) as Call
    } else if (storage.isV25) {
        return (await storage.getAsV25(hash)) as Call
    } else if (storage.isV26) {
        return (await storage.getAsV26(hash)) as Call
    } else if (storage.isV28) {
        return (await storage.getAsV28(hash)) as Call
    } else if (storage.isV29) {
        return (await storage.getAsV29(hash)) as Call
    } else if (storage.isV30) {
        return (await storage.getAsV30(hash)) as Call
    } else if (storage.isV9050) {
        return (await storage.getAsV9050(hash)) as Call
    } else if (storage.isV9080) {
        return (await storage.getAsV9080(hash)) as Call
    } else if (storage.isV9090) {
        return (await storage.getAsV9090(hash)) as Call
    } else if (storage.isV9100) {
        return (await storage.getAsV9100(hash)) as Call
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

    if (storage.isV9110) {
        return (await storage.getAsV9110(hash)) as Call
    } else if (storage.isV9140) {
        return (await storage.getAsV9140(hash)) as Call
    } else if (storage.isV9170) {
        return (await storage.getAsV9170(hash)) as Call
    } else if (storage.isV9180) {
        return (await storage.getAsV9180(hash)) as Call
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
