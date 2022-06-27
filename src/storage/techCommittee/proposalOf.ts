import { TechCommitteeCollectiveProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v1502'

type TechnicalCommitteeProposalStorageData = Call

async function getCoucilStorageData(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechCommitteeCollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return await getCoucilStorageData(ctx, hash)
}
