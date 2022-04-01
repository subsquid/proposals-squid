import { BlockHandlerContext, Store } from '@subsquid/substrate-processor'
import { ChainState } from './model'
import {
    BalancesTotalIssuanceStorage,
    CouncilMembersStorage,
    CouncilProposalCountStorage,
    DemocracyPublicPropCountStorage,
} from './types/storage'
import { getApi } from './common/api'
import { getChainInfo } from './common/chainInfo'
import { PERIOD } from './common/consts'
import { StorageContext } from './types/support'

let lastStateTimestamp = 0

export async function handleChainState(ctx: BlockHandlerContext) {
    if (!lastStateTimestamp) {
        const lastChainState = await getLastChainState(ctx.store)
        if (lastChainState) lastStateTimestamp = lastChainState.timestamp?.getTime() || 0
    }

    if (ctx.block.timestamp - lastStateTimestamp >= PERIOD) {
        await saveChainState(ctx)
        lastStateTimestamp = ctx.block.timestamp
        console.log(`Chain state updated at block ${ctx.block.height}`)
    }
}

async function saveChainState(ctx: BlockHandlerContext) {
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
async function getCouncilMembers(ctx: StorageContext) {
    const storage = new CouncilMembersStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.getAsV9111()
    }
}

async function getCouncilProposalsCount(ctx: StorageContext) {
    const storage = new CouncilProposalCountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV9111) {
        return await storage.getAsV9111()
    }
}

async function getDemocracyProposalsCount(ctx: StorageContext) {
    const storage = new DemocracyPublicPropCountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    }
}

async function getTotalIssuance(ctx: StorageContext) {
    const storage = new BalancesTotalIssuanceStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    }
}

// function getHoldersCount(ctx: EventHandlerContext) {
//     const storage = new BalancesTotalIssuanceStorage(ctx)

//     if (storage.isV1020) {
//         return await storage.getAsV1020()
//     }

//     return undefined
// }
