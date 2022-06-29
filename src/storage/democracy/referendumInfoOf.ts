import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'

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
    if (storage.isV15) {
        const storageData = await storage.getAsV15(index)
        if (!storageData) return undefined

        const { proposalHash: hash, end, delay, threshold } = storageData
        return {
            status: 'Ongoing',
            hash,
            end,
            delay,
            threshold: threshold.__kind,
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getReferendumInfoOf(ctx: BlockContext, index: number) {
    return await getStorageData(ctx, index)
}
