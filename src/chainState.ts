import { BlockHandlerContext, Store } from '@subsquid/substrate-processor'
import { Chain, ChainState, RelayChain, Token } from './model'
import {
    BalancesTotalIssuanceStorage,
    CouncilMembersStorage,
    CouncilProposalCountStorage,
    DemocracyPublicPropCountStorage,
    Instance1CollectiveMembersStorage,
    Instance1CollectiveProposalCountStorage,
} from './types/storage'
import { getApi } from './common/api'
import { PERIOD } from './consts/consts'
import { StorageContext } from './types/support'
import chains from './consts/chains'
import config from './config'
import { UnknownVersionError } from './common/errors'
import { ChainInfo } from './common/types'

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
    state.councilMembers = (await getCouncilMembers(ctx))?.length || 0
    state.councilProposals = (await getCouncilProposalsCount(ctx)) || 0
    state.democracyProposals = (await getDemocracyProposalsCount(ctx)) || 0
    state.tokenBalance = (await getTotalIssuance(ctx)) || 0n

    const api = await getApi()
    state.tokenHolders = await api.getHoldersCount(ctx.block.hash)

    await ctx.store.save(state)
}

async function getChainInfo(store: Store) {
    const id = config.chainName

    let chain = await store.findOne(Chain, id, { cache: true })

    if (!chain) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const chainInfo = chains.find((ch: ChainInfo) => ch.name === id)!

        chain = new Chain({
            id,
            token: new Token(chainInfo.tokens[0]),
            paraId: chainInfo.paraId,
            relayChain: chainInfo.relay
                ? chainInfo.relay == 'polkadot'
                    ? RelayChain.polkadot
                    : RelayChain.kusama
                : null,
        })

        await store.insert(Chain, chain)
    }

    return chain
}

async function getLastChainState(store: Store) {
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
    if (!storage.isExists) return await getInstance1Members(ctx)

    if (storage.isV9110) {
        return await storage.getAsV9110()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getInstance1Members(ctx: StorageContext) {
    const storage = new Instance1CollectiveMembersStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getCouncilProposalsCount(ctx: StorageContext) {
    const storage = new CouncilProposalCountStorage(ctx)
    if (!storage.isExists) return await getInstance1ProposalsCount(ctx)

    if (storage.isV9110) {
        return await storage.getAsV9110()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getInstance1ProposalsCount(ctx: StorageContext) {
    const storage = new Instance1CollectiveProposalCountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getDemocracyProposalsCount(ctx: StorageContext) {
    const storage = new DemocracyPublicPropCountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV0) {
        return await storage.getAsV0()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getTotalIssuance(ctx: StorageContext) {
    const storage = new BalancesTotalIssuanceStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV0) {
        return await storage.getAsV0()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

// function getHoldersCount(ctx: EventHandlerContext) {
//     const storage = new BalancesTotalIssuanceStorage(ctx)

//     if (storage.isV0) {
//         return await storage.getasV0()
//     }

//     return undefined
// }
