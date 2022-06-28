import { GeneralCouncilProposalOfStorage, Instance1CollectiveProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'
import { Call } from '../../types/v2080'

type CouncilProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getInstanceStorageData(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new Instance1CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'Instance1Collective', 'ProposalOf', hash)
}

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
    return (await getCoucilStorageData(ctx, hash)) || (await getInstanceStorageData(ctx, hash))
}
