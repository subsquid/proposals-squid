import { UnknownVersionError } from '../../../common/errors'
import { TreasuryAwardedEvent, TreasuryProposedEvent, TreasuryRejectedEvent } from '../../../types/events'
import { EventContext } from '../../types/contexts'

export function getProposedData(ctx: EventContext): number {
    const event = new TreasuryProposedEvent(ctx)
    if (event.isV155) {
        return event.asV155
    } else if (event.isV200) {
        return event.asV200
    } else if (event.isV1001) {
        return event.asV1001
    } else if (event.isV1300) {
        return event.asV1300.proposalIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getRejectedData(ctx: EventContext): number {
    const event = new TreasuryRejectedEvent(ctx)
    if (event.isV155) {
        return event.asV155[0]
    } else if (event.isV200) {
        return event.asV200[0]
    } else if (event.isV1001) {
        return event.asV1001[0]
    } else if (event.isV1300) {
        return event.asV1300.proposalIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getAwarderData(ctx: EventContext): number {
    const event = new TreasuryAwardedEvent(ctx)
    if (event.isV155) {
        return event.asV155[0]
    } else if (event.isV200) {
        return event.asV200[0]
    } else if (event.isV1001) {
        return event.asV1001[0]
    } else if (event.isV1300) {
        return event.asV1300.proposalIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
