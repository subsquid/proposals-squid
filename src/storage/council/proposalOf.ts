import { CouncilCollectiveProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v1502'

type CouncilCollectiveProposalStorageData = Call

async function getCoucilStorageData(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<CouncilCollectiveProposalStorageData | undefined> {
    const storage = new CouncilCollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'CouncilCollective', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<CouncilCollectiveProposalStorageData | undefined> {
    return await getCoucilStorageData(ctx, hash)
}
