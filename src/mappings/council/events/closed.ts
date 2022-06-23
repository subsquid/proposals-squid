import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getClosedData } from './getters'

export async function handleClosed(ctx: EventHandlerContext) {
    const hash = getClosedData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        isEnded: true,
        status: ProposalStatus.Closed,
    })
}
