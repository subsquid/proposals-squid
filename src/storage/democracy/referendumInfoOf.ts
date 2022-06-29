import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'
import {
    ReferendumInfo_Finished as ReferendumInfo_FinishedV9110,
    ReferendumInfo_Ongoing as ReferendumInfo_OngoingV9110,
} from '../../types/v9110'
import {
    ReferendumInfo_Finished as ReferendumInfo_FinishedV0,
    ReferendumInfo_Ongoing as ReferendumInfo_OngoingV0,
} from '../../types/v0'

type Threshold = 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority'

type FinishedReferendumData = {
    status: 'Finished'
    approved: boolean
    end: number
}

type OngoingReferendumData = {
    status: 'Ongoing'
    end: number
    hash: Uint8Array
    threshold: Threshold
    delay: number
}

type ReferendumStorageData = FinishedReferendumData | OngoingReferendumData

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(ctx: BlockContext, index: number): Promise<ReferendumStorageData | undefined> {
    const storage = new DemocracyReferendumInfoOfStorage(ctx)
    if (storage.isV0) {
        const storageData = await storage.getAsV0(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as ReferendumInfo_OngoingV0).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as ReferendumInfo_FinishedV0).value
            return {
                status,
                end,
                approved,
            }
        }
    } else if (storage.isV9110) {
        const storageData = await storage.getAsV9110(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as ReferendumInfo_OngoingV9110).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as ReferendumInfo_FinishedV9110
            return {
                status,
                end,
                approved,
            }
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getReferendumInfoOf(ctx: BlockContext, index: number) {
    return await getStorageData(ctx, index)
}
