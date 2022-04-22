import { UnknownVersionError } from '../../common/errors'
import { StorageContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'
import * as v1055 from '../../types/v15'

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
async function getStorageData(ctx: StorageContext, index: number): Promise<ReferendumStorageData | undefined> {
    const storage = new DemocracyReferendumInfoOfStorage(ctx)
    if (storage.isV15) {
        const storageData = await storage.getAsV15(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v1055.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = (storageData as v1055.ReferendumInfo_Finished).value
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

export async function getReferendumInfoOf(ctx: StorageContext, index: number) {
    return await getStorageData(ctx, index)
}
