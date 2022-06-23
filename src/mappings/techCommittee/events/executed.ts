import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getExecutedData } from './getters'

export async function handleExecuted(ctx: EventHandlerContext) {
    const hash = getExecutedData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.TechCommitteeProposal, {
        status: ProposalStatus.Executed,
    })
}
