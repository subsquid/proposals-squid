import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { DemocracyPreimageUsedEvent } from '../../../types/events'
import { updateProposalStatus } from '../../utils/proposals'

interface PreimageEventData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageUsedEvent(ctx)
    if (event.isV1022) {
        const [hash, provider, deposit] = event.asV1022
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV9130) {
        const { proposalHash: hash, provider, deposit } = event.asV9130
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePreimageUsed(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    await updateProposalStatus(ctx, hexHash, ProposalType.Preimage, {
        status: ProposalStatus.Used,
    })
}
