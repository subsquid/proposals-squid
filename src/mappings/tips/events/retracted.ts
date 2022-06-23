import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { ProposalStatus, ProposalType } from '../../../model'
import { updateProposalStatus } from '../../utils/proposals'
import { getRectractedData, getRectractedDataOld } from './getters'

export async function handleRetracted(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Tips' ? getRectractedData : getRectractedDataOld
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Tip, {
        isEnded: true,
        status: ProposalStatus.Retracted,
    })
}
