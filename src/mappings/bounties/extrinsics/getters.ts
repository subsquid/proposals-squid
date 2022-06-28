import { UnknownVersionError } from '../../../common/errors'
import {
    BountiesAcceptCuratorCall,
    BountiesUnassignCuratorCall,
    TreasuryAcceptCuratorCall,
    TreasuryUnassignCuratorCall,
} from '../../../types/calls'
import { CallContext } from '../../types/contexts'

interface AccepterCuratorData {
    index: number
}

export function getAccepterCuratorDataOld(ctx: CallContext): AccepterCuratorData {
    const call = new TreasuryAcceptCuratorCall(ctx)
    if (call.isV2025) {
        const { bountyId } = call.asV2025
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export function getAccepterCuratorData(ctx: CallContext): AccepterCuratorData {
    const call = new BountiesAcceptCuratorCall(ctx)
    if (call.isV2028) {
        const { bountyId } = call.asV2028
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

interface UnassingCuratorData {
    index: number
}

export function getUnassingCuratorDataOld(ctx: CallContext): UnassingCuratorData {
    const call = new TreasuryUnassignCuratorCall(ctx)
    if (call.isV2025) {
        const { bountyId } = call.asV2025
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

export function getUnassingCuratorData(ctx: CallContext): UnassingCuratorData {
    const call = new BountiesUnassignCuratorCall(ctx)
    if (call.isV2028) {
        const { bountyId } = call.asV2028
        return {
            index: bountyId,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}
