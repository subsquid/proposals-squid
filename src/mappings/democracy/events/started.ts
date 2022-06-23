import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { DemocracyStartedEvent } from '../../../types/events'
import { StorageNotExistsWarn, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType, ReferendumThresholdType } from '../../../model'
import { storage } from '../../../storage'
import { createReferendum } from '../../utils/proposals'

interface ReferendumEventData {
    index: number
    threshold: string
}

function getEventData(ctx: EventContext): ReferendumEventData {
    const event = new DemocracyStartedEvent(ctx)
    if (event.isV1020) {
        const [index, threshold] = event.asV1020
        return {
            index,
            threshold: threshold.__kind,
        }
    } else if (event.isV9130) {
        const { refIndex: index, threshold } = event.asV9130
        return {
            index,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleStarted(ctx: EventHandlerContext) {
    const { index, threshold } = getEventData(ctx)

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
