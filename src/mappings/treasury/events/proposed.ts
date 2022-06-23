/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '../../types/contexts'
import { StorageNotExistsWarn } from '../../../common/errors'
import { ProposalStatus, ProposalType } from '../../../model'
import { ss58codec } from '../../../common/tools'
import { storage } from '../../../storage'
import { createTreasury } from '../../utils/proposals'
import { getProposedData } from './getters'

export async function handleProposed(ctx: EventHandlerContext) {
    const { index } = getProposedData(ctx)

    const storageData = await storage.treasury.getProposals(ctx, index)
    if (!storageData) {
        ctx.log.warn(StorageNotExistsWarn(ProposalType.TreasuryProposal, index))
        return
    }

    const { proposer, beneficiary, value, bond } = storageData

    await createTreasury(ctx, {
        index,
        proposer: ss58codec.encode(proposer),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: ss58codec.encode(beneficiary),
    })
}
