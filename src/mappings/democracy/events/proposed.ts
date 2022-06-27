import { toHex } from '@subsquid/substrate-processor'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { encodeId } from '../../../common/tools'
import { storage } from '../../../storage'
import { EventHandlerContext } from '../../types/contexts'
import { createDemocracyProposal } from '../../utils/proposals'
import { getProposedData } from './getters'

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, deposit } = getProposedData(ctx)

    const storageData = await storage.democracy.getProposals(ctx)
    if (!storageData) {
        ctx.log.warn(`Storage doesn't exist for democracy proposals at block ${ctx.block.height}`)
        return
    }

    const proposalData = storageData.find((prop) => prop.index === index)
    if (!proposalData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.DemocracyProposal, index))
        return
    }
    const { hash, proposer } = proposalData
    const hexHash = toHex(hash)

    await createDemocracyProposal(ctx, {
        hash: hexHash,
        index,
        proposer: encodeId(proposer),
        status: ProposalStatus.Proposed,
        deposit,
    })
}
