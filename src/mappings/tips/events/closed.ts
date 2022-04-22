import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TipsTipClosedEvent } from '../../../types/events'

interface TipEventData {
    hash: Uint8Array
    reward: bigint
}

function getEventData(ctx: EventContext): TipEventData {
    const event = new TipsTipClosedEvent(ctx)
    if (event.isV13) {
        const [hash, , reward] = event.asV13
        return {
            hash,
            reward,
        }
    } else if (event.isV29) {
        const { tipHash: hash, payout: reward } = event.asV29
        return {
            hash,
            reward,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClosed(ctx: EventHandlerContext) {
    const { hash, reward } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Tip, {
        status: ProposalStatus.Closed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Tip, hexHash, ctx.block.height)
        return
    }

    proposal.reward = reward

    await proposalManager.update(ctx, proposal)
}
