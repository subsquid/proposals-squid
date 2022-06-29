import { toHex } from '@subsquid/substrate-processor'
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTip } from '../../utils/proposals'
import { getNewTipData, getNewTipDataOld } from './getters'

export async function handleNewTip(ctx: EventHandlerContext) {
    const section = ctx.event.name.split('.')[0]
    const getEventData = section === 'Tips' ? getNewTipData : getNewTipDataOld
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const storageData = await storage.tips.getTips(ctx, hash)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.Tip, hexHash))
        return
    }

    const { who, deposit, finder } = storageData

    await createTip(ctx, {
        hash: hexHash,
        proposer: finder ? ss58codec.encode(finder) : undefined,
        payee: ss58codec.encode(who),
        deposit,
        status: ProposalStatus.Proposed,
    })
}
