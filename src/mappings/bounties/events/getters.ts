import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesBountyAwardedEvent,
    BountiesBountyBecameActiveEvent,
    BountiesBountyCanceledEvent,
    BountiesBountyClaimedEvent,
    BountiesBountyExtendedEvent,
    BountiesBountyProposedEvent,
    BountiesBountyRejectedEvent,
} from '../../../types/events'
import { EventContext } from '../../types/contexts'

interface BountyAwardedData {
    index: number
    beneficiary: Uint8Array
}

export function getBountyAwardedData(ctx: EventContext): BountyAwardedData {
    const event = new BountiesBountyAwardedEvent(ctx)
    if (event.isV2000) {
        const [index, beneficiary] = event.asV2000
        return {
            index,
            beneficiary,
        }
    } else if (event.isV2011) {
        const { index, beneficiary } = event.asV2011
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
    if (event.isV2000) {
        const index = event.asV2000
        return {
            index,
        }
    } else if (event.isV2011) {
        const { index } = event.asV2011
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
    if (event.isV2000) {
        const index = event.asV2000
        return {
            index,
        }
    } else if (event.isV2011) {
        const { index } = event.asV2011
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
    if (event.isV2000) {
        const [index, payout, beneficiary] = event.asV2000
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV2011) {
        const { index, payout, beneficiary } = event.asV2011
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
    if (event.isV2000) {
        const index = event.asV2000
        return {
            index,
        }
    } else if (event.isV2011) {
        const { index } = event.asV2011
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
    if (event.isV2000) {
        const index = event.asV2000
        return {
            index,
        }
    } else if (event.isV2011) {
        const { index } = event.asV2011
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
    if (event.isV2000) {
        const [index] = event.asV2000
        return {
            index,
        }
    } else if (event.isV2011) {
        const { index } = event.asV2011
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}
