import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getApprovedData } from './getters'

export async function handleApproved(ctx: EventHandlerContext) {
    const hash = getApprovedData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        isEnded: true,
        status: ProposalStatus.Approved,
    })
}
