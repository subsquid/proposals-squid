import { UnknownVersionError } from '../../common/errors'
import { BlockContext } from '../../types/support'
import { DemocracyReferendumInfoOfStorage } from '../../types/storage'
import * as v1055 from '../../types/v1055'
import * as v9111 from '../../types/v9111'

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
    if (storage.isV1020) {
        const storageData = await storage.asV1020.get(index)
        if (!storageData) return undefined

        const { proposalHash: hash, end, delay, threshold } = storageData
        return {
            status: 'Ongoing',
            hash,
            end,
            delay,
            threshold: threshold.__kind,
        }
    } else if (storage.isV1055) {
        const storageData = await storage.asV1055.get(index)
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
    } else if (storage.isV9111) {
        const storageData = await storage.asV9111.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposalHash: hash, end, delay, threshold } = (storageData as v9111.ReferendumInfo_Ongoing).value
            return {
                status,
                hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v9111.ReferendumInfo_Finished
            return {
                status,
                end,
                approved,
            }
        }
    } else if (storage.isV9320) {
        const storageData = await storage.asV9320.get(index)
        if (!storageData) return undefined

        const { __kind: status } = storageData
        if (status === 'Ongoing') {
            const { proposal, end, delay, threshold } = storageData.value
            return {
                status,
                hash: proposal.__kind === 'Inline' ? proposal.value : proposal.hash,
                end,
                delay,
                threshold: threshold.__kind,
            }
        } else {
            const { end, approved } = storageData as v9111.ReferendumInfo_Finished
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
