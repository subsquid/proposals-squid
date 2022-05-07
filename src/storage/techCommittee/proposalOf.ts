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

    return ctx._chain.getStorage(ctx.block.hash, 'Instance2Collective', 'ProposalOf', hash)
}

async function getCoucilStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash)) || (await getInstanceStorageData(ctx, hash))
}
