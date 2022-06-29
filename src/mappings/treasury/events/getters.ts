import { UnknownVersionError } from '../../../common/errors'
import { TreasuryAwardedEvent, TreasuryProposedEvent, TreasuryRejectedEvent } from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface ProposedData {
    index: number
}

export function getProposedData(ctx: EventContext): ProposedData {
    const event = new TreasuryProposedEvent(ctx)
    if (event.isV0) {
        const index = event.asV0
        return {
            index,
        }
    } else if (event.isV9170) {
        const { proposalIndex: index } = event.asV9170
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
    if (event.isV0) {
        const [index] = event.asV0
        return {
            index,
        }
    } else if (event.isV9170) {
        const { proposalIndex: index } = event.asV9170
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
    if (event.isV0) {
        const [index] = event.asV0
        return {
            index,
        }
    } else if (event.isV9170) {
        const { proposalIndex: index } = event.asV9170
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
