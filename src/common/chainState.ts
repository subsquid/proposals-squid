import { EventHandlerContext, Store } from '@subsquid/substrate-processor'
import { ChainState } from '../model'
import {
    BalancesTotalIssuanceStorage,
    CouncilMembersStorage,
    CouncilProposalCountStorage,
    DemocracyPublicPropCountStorage,
} from '../types/storage'
import { getApi } from './api'
import { getChainInfo } from './chainInfo'

export async function saveChainState(ctx: EventHandlerContext) {
    const state = new ChainState({ id: ctx.block.id })

    state.chain = await getChainInfo(ctx.store)
    state.timestamp = new Date(ctx.block.timestamp)
    state.councilMembers = (await getCouncilMembers(ctx))?.length
    state.councilProposals = await getCouncilProposalsCount(ctx)
    state.democracyProposals = await getDemocracyProposalsCount(ctx)
    state.tokenBalance = await getTotalIssuance(ctx)

    const api = await getApi()
    state.tokenHolders = await api.getHoldersCount(ctx.block.hash)

    await ctx.store.save(state)
}

export async function getLastChainState(store: Store) {
    return await store.findOne(
        ChainState,
        {},
        {
            order: {
                timestamp: 'DESC',
            },
        }
    )
}
async function getCouncilMembers(ctx: EventHandlerContext) {
    const storage = new CouncilMembersStorage(ctx)

    try {
        if (storage.isV9111) {
            return await storage.getAsV9111()
        }
    } catch (error) {
        return []
    }

    return []
}

async function getCouncilProposalsCount(ctx: EventHandlerContext) {
    const storage = new CouncilProposalCountStorage(ctx)
    try {
        if (storage.isV9111) {
            return await storage.getAsV9111()
        }
    } catch (error) {
        return 0
    }
    return 0
}

async function getDemocracyProposalsCount(ctx: EventHandlerContext) {
    const storage = new DemocracyPublicPropCountStorage(ctx)

    try {
        if (storage.isV1020) {
            return await storage.getAsV1020()
        }
    } catch (error) {
        return 0
    }

    return 0
}

async function getTotalIssuance(ctx: EventHandlerContext) {
    const storage = new BalancesTotalIssuanceStorage(ctx)

    try {
        if (storage.isV1020) {
            return await storage.getAsV1020()
        }
    } catch (error) {
        return 0n
    }

    return 0n
}
// function getHoldersCount(ctx: EventHandlerContext) {
//     const storage = new BalancesTotalIssuanceStorage(ctx)

//     if (storage.isV1020) {
//         return await storage.getAsV1020()
//     }

//     return undefined
// }
