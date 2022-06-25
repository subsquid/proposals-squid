import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType, ReferendumThresholdType } from '../../../model'
import { storage } from '../../../storage'
import { createReferendum } from '../../utils/proposals'
import { getStartedData } from './getters'

export async function handleStarted(ctx: EventHandlerContext) {
    const { index, threshold } = getStartedData(ctx)

    const storageData = await storage.democracy.getReferendumInfoOf(ctx, index)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Referendum, index))
        return
    }

    if (storageData.status === 'Finished') {
        ctx.log.warn(`Referendum with index ${index} has already finished at block ${ctx.block.height}`)
        return
    }

    const { hash } = storageData
    const hexHash = toHex(hash)

    await createReferendum(ctx, {
        index,
        threshold: threshold as ReferendumThresholdType,
        status: ProposalStatus.Started,
        hash: hexHash,
    })
}
