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

export function getBountyAwardedDataOld(ctx: EventContext): BountyAwardedData {
    const event = new TreasuryBountyAwardedEvent(ctx)
    if (event.isV2025) {
        const [index, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyAwardedData(ctx: EventContext): BountyAwardedData {
    const event = new BountiesBountyAwardedEvent(ctx)
    if (event.isV2028) {
        const [index, beneficiary] = event.asV2028
        return {
            index,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, beneficiary } = event.asV9130
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

export function getBountyBacameActiveDataOld(ctx: EventContext): BountyBacameActiveData {
    const event = new TreasuryBountyBecameActiveEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyBacameActiveData(ctx: EventContext): BountyBacameActiveData {
    const event = new BountiesBountyBecameActiveEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
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

export function getBountyCanceledDataOld(ctx: EventContext): BountyCanceledData {
    const event = new TreasuryBountyCanceledEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyCanceledData(ctx: EventContext): BountyCanceledData {
    const event = new BountiesBountyCanceledEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
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

export function getBountyClaimedDataOld(ctx: EventContext): BountyClaimedData {
    const event = new TreasuryBountyClaimedEvent(ctx)
    if (event.isV2025) {
        const [index, payout, beneficiary] = event.asV2025
        return {
            index,
            beneficiary,
            payout,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyClaimedData(ctx: EventContext): BountyClaimedData {
    const event = new BountiesBountyClaimedEvent(ctx)
    if (event.isV2028) {
        const [index, payout, beneficiary] = event.asV2028
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV9130) {
        const { index, payout, beneficiary } = event.asV9130
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

export function getBountyExtendedDataOld(ctx: EventContext): BountyExtendedData {
    const event = new TreasuryBountyExtendedEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyExtendedData(ctx: EventContext): BountyExtendedData {
    const event = new BountiesBountyExtendedEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
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

export function getBountyProposedDataOld(ctx: EventContext): BountyProposedData {
    const event = new TreasuryBountyProposedEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyProposedData(ctx: EventContext): BountyProposedData {
    const event = new BountiesBountyProposedEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
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

export function getBountyRejectedDataOld(ctx: EventContext): BountyRejectedData {
    const event = new TreasuryBountyRejectedEvent(ctx)
    if (event.isV2025) {
        const [index] = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export function getBountyRejectedData(ctx: EventContext): BountyRejectedData {
    const event = new BountiesBountyRejectedEvent(ctx)
    if (event.isV2028) {
        const [index] = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
