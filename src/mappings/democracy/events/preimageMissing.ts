import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { DemocracyPreimageMissingEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

interface PreimageEventData {
    hash: Uint8Array
    index: number
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageMissingEvent(ctx)
    if (event.isV1022) {
        const [hash, index] = event.asV1022
        return {
            hash,
            index,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, refIndex: index } = event.asV9130
        return {
            hash,
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePreimageMissing(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Preimage, {
        status: ProposalStatus.Missing,
    })
}
