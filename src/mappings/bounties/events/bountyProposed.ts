import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createBounty } from '../../utils/proposals'
import { getBountyProposedData, getBountyProposedDataOld } from './getters'

export async function handleProposed(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Bounties' ? getBountyProposedData : getBountyProposedDataOld
    const { index } = getEventData(ctx)

    let storageData
    try {
        storageData = await storage.bounties.getBounties(ctx, index)
    } catch (e) {
        if (e instanceof Error) {
            ctx.log.warn(e.message)
        }
    } finally {
        if (!storageData) {
            ctx.log.warn(StorageNotExistsWarn(ProposalType.Bounty, index))
            return
        }

        const { proposer, value, bond } = storageData

        await createBounty(ctx, {
            index,
            proposer: ss58codec.encode(proposer),
            status: ProposalStatus.Proposed,
            reward: value,
            deposit: bond,
        })
    }
}
