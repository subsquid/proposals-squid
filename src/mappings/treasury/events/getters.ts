import { UnknownVersionError } from '../../../common/errors'
import { TreasuryAwardedEvent, TreasuryProposedEvent, TreasuryRejectedEvent } from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface ProposedData {
    index: number
}

export function getProposedData(ctx: EventContext): ProposedData {
    const event = new TreasuryProposedEvent(ctx)
    if (event.isV2000) {
        const index = event.asV2000
        return {
            index,
        }
    } else if (event.isV2032) {
        const { proposalIndex: index } = event.asV2032
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface RejectedData {
    index: number
}

export function getRejectedData(ctx: EventContext): RejectedData {
    const event = new TreasuryRejectedEvent(ctx)
    if (event.isV2000) {
        const [index] = event.asV2000
        return {
            index,
        }
    } else if (event.isV2032) {
        const { proposalIndex: index } = event.asV2032
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface AwarderData {
    index: number
}

export function getAwarderData(ctx: EventContext): AwarderData {
    const event = new TreasuryAwardedEvent(ctx)
    if (event.isV2000) {
        const [index] = event.asV2000
        return {
            index,
        }
    } else if (event.isV2032) {
        const { proposalIndex: index } = event.asV2032
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
