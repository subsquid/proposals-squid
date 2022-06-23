import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getSlashedData } from './getters'

export async function handleSlashed(ctx: EventHandlerContext) {
    const { hash } = getSlashedData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Slashed,
    })
}
