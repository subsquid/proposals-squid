import { TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { BlockContext } from '../../types/support'

import { Call as Call_v1090 } from '../../types/v1090'
import { Call as Call_v1148 } from '../../types/v1148'
import { Call as Call_v1160 } from '../../types/v1160'

type TechnicalCommitteeProposalStorageData = Call_v1090 | Call_v1148 | Call_v1160

async function getCoucilStorageData(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: BlockContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return await getCoucilStorageData(ctx, hash)
}
