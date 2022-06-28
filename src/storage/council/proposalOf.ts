import { GeneralCouncilProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v2080'

type CouncilProposalStorageData = Call

async function getCoucilStorageData(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new GeneralCouncilProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'GeneralCouncil', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    return await getCoucilStorageData(ctx, hash)
}
