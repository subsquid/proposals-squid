import { toHex } from '@subsquid/substrate-processor'
import { ProposalStatus, ProposalType } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'
import { updateProposalStatus } from '../../utils/proposals'
import { getPreimageInvalidData } from './getters'

export async function handlePreimageInvalid(ctx: EventHandlerContext) {
    const { hash } = getPreimageInvalidData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Preimage, {
        status: ProposalStatus.Invalid,
    })
}
