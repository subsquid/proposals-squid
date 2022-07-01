import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'
import * as V803 from '../../types/v803'
import * as V906 from '../../types/v906'

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
    if (storage.isV803) {
        const storageData = await storage.getAsV803(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as V803.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as V803.ReferendumInfo_Finished).value
            return {
                status,
                end,
                approved,
            }
        }
    } else if (storage.isV906) {
        const storageData = await storage.getAsV906(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as V906.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as V906.ReferendumInfo_Finished
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
