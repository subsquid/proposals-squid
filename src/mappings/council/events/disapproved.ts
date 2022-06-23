import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getDissaprovedData } from './getters'

export async function handleDisapproved(ctx: EventHandlerContext) {
    const hash = getDissaprovedData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        isEnded: true,
        status: ProposalStatus.Disapproved,
    })
}
