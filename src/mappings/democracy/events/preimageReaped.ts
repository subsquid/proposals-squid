import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getPreimageReapedData } from './getters'

export async function handlePreimageReaped(ctx: EventHandlerContext) {
    const { hash } = getPreimageReapedData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Preimage, {
        isEnded: true,
        status: ProposalStatus.Missing,
    })
}
