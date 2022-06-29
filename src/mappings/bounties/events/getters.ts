import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesBountyAwardedEvent,
    BountiesBountyBecameActiveEvent,
    BountiesBountyCanceledEvent,
    BountiesBountyClaimedEvent,
    BountiesBountyExtendedEvent,
    BountiesBountyProposedEvent,
    BountiesBountyRejectedEvent,
    TreasuryBountyAwardedEvent,
    TreasuryBountyBecameActiveEvent,
    TreasuryBountyCanceledEvent,
    TreasuryBountyClaimedEvent,
    TreasuryBountyExtendedEvent,
    TreasuryBountyProposedEvent,
    TreasuryBountyRejectedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface BountyAwardedData {
    index: number
    beneficiary: Uint8Array
}

export function getBountyAwardedData(ctx: EventContext): BountyAwardedData {
    const event = new BountiesBountyAwardedEvent(ctx)
    if (event.isV28) {
        const [index, beneficiary] = event.asV28
        return {
            index,
            beneficiary,
        }
    } else if (event.isV9140) {
        const { index, beneficiary } = event.asV9140
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyBacameActiveData {
    index: number
}

export function getBountyBacameActiveData(ctx: EventContext): BountyBacameActiveData {
    const event = new BountiesBountyBecameActiveEvent(ctx)
    if (event.isV28) {
        const index = event.asV28
        return {
            index,
        }
    } else if (event.isV9140) {
        const { index } = event.asV9140
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyCanceledData {
    index: number
}

export function getBountyCanceledData(ctx: EventContext): BountyCanceledData {
    const event = new BountiesBountyCanceledEvent(ctx)
    if (event.isV28) {
        const index = event.asV28
        return {
            index,
        }
    } else if (event.isV9140) {
        const { index } = event.asV9140
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyClaimedData {
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

export function getBountyClaimedData(ctx: EventContext): BountyClaimedData {
    const event = new BountiesBountyClaimedEvent(ctx)
    if (event.isV28) {
        const [index, payout, beneficiary] = event.asV28
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV9140) {
        const { index, payout, beneficiary } = event.asV9140
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyExtendedData {
    index: number
}

export function getBountyExtendedData(ctx: EventContext): BountyExtendedData {
    const event = new BountiesBountyExtendedEvent(ctx)
    if (event.isV28) {
        const index = event.asV28
        return {
            index,
        }
    } else if (event.isV9140) {
        const { index } = event.asV9140
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyProposedData {
    index: number
}

export function getBountyProposedData(ctx: EventContext): BountyProposedData {
    const event = new BountiesBountyProposedEvent(ctx)
    if (event.isV28) {
        const index = event.asV28
        return {
            index,
        }
    } else if (event.isV9140) {
        const { index } = event.asV9140
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

interface BountyRejectedData {
    index: number
}

export function getBountyRejectedData(ctx: EventContext): BountyRejectedData {
    const event = new BountiesBountyRejectedEvent(ctx)
    if (event.isV28) {
        const [index] = event.asV28
        return {
            index,
        }
    } else if (event.isV9140) {
        const { index } = event.asV9140
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyAwardedDataOld(ctx: EventContext): BountyAwardedData {
    const event = new TreasuryBountyAwardedEvent(ctx)
    if (event.isV25) {
        const [index, beneficiary] = event.asV25
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyBacameActiveDataOld(ctx: EventContext): BountyBacameActiveData {
    const event = new TreasuryBountyBecameActiveEvent(ctx)
    if (event.isV25) {
        const index = event.asV25
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyCanceledDataOld(ctx: EventContext): BountyCanceledData {
    const event = new TreasuryBountyCanceledEvent(ctx)
    if (event.isV25) {
        const index = event.asV25
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyClaimedDataOld(ctx: EventContext): BountyClaimedData {
    const event = new TreasuryBountyClaimedEvent(ctx)
    if (event.isV25) {
        const [index, payout, beneficiary] = event.asV25
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyExtendedDataOld(ctx: EventContext): BountyExtendedData {
    const event = new TreasuryBountyExtendedEvent(ctx)
    if (event.isV25) {
        const index = event.asV25
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyProposedDataOld(ctx: EventContext): BountyProposedData {
    const event = new TreasuryBountyProposedEvent(ctx)
    if (event.isV25) {
        const index = event.asV25
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyRejectedDataOld(ctx: EventContext): BountyRejectedData {
    const event = new TreasuryBountyRejectedEvent(ctx)
    if (event.isV25) {
        const [index] = event.asV25
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
