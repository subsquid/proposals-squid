import { BlockHandlerContext } from '@subsquid/substrate-processor'
import { Chain, ChainState, RelayChain, Token } from './model'
import {
    BalancesAccountStorage,
    BalancesTotalIssuanceStorage,
    CouncilMembersStorage,
    CouncilProposalCountStorage,
    DemocracyPublicPropCountStorage,
    Instance1CollectiveMembersStorage,
    Instance1CollectiveProposalCountStorage,
    SystemAccountNonceStorage,
    SystemAccountStorage,
} from './types/storage'
import { PERIOD } from './consts/consts'
import { StorageContext } from './types/support'
import chains from './consts/chains'
import config from './config'
import { UnknownVersionError } from './common/errors'
import { ChainInfo } from './common/types'
import { Chain as ProcessorChain } from '@subsquid/substrate-processor/lib/chain'
import { ResilientRpcClient } from '@subsquid/rpc-client/lib/resilient'
import * as sto from '@subsquid/substrate-processor/lib/util/storage'
import { Store } from '@subsquid/typeorm-store'

let lastStateTimestamp = 0

export async function handleChainState(ctx: BlockHandlerContext<Store>) {
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

async function saveChainState(ctx: BlockHandlerContext<Store>) {
    const state = new ChainState({ id: ctx.block.id })

    state.chain = await getChainInfo(ctx.store)
    state.timestamp = new Date(ctx.block.timestamp)
    state.councilMembers = (await getCouncilMembers(ctx))?.length || 0
    state.councilProposals = (await getCouncilProposalsCount(ctx)) || 0
    state.democracyProposals = (await getDemocracyProposalsCount(ctx)) || 0
    state.tokenBalance = (await getTotalIssuance(ctx)) || 0n

    state.tokenHolders = (await getHoldersCount(ctx)) || 0

    await ctx.store.save(state)
}

async function getChainInfo(store: Store) {
    const id = config.chain.name

    let chain = await store.findOne(Chain, id)

    if (!chain) {
        const chainInfo = chains.find((ch: ChainInfo) => ch.name === id)
        if (!chainInfo) throw new Error(`Unknown chain ${config.chain.name}`)

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

        await store.save(chain)
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

    if (storage.isV9111) {
        return await storage.getAsV9111()
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

    if (storage.isV9111) {
        return await storage.getAsV9111()
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

    if (storage.isV1020) {
        return await storage.getAsV1020()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getTotalIssuance(ctx: StorageContext) {
    const storage = new BalancesTotalIssuanceStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1020) {
        return await storage.getAsV1020()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getHoldersCount(ctx: StorageContext) {
    return (
        (await getSystemAccountKeysCount(ctx)) ||
        (await getBalancesAccountKeysCount(ctx)) ||
        (await getSystemAccountNonceKeysCount(ctx))
    )
}

async function getSystemAccountNonceKeysCount(ctx: StorageContext): Promise<number | undefined> {
    const storage = new SystemAccountNonceStorage(ctx)
    if (!storage.isExists) return undefined

    return await countKeys(ctx, 'System', 'AccountNonce')
}

async function getSystemAccountKeysCount(ctx: StorageContext): Promise<number | undefined> {
    const storage = new SystemAccountStorage(ctx)
    if (!storage.isExists) return undefined

    return await countKeys(ctx, 'System', 'Account')
}

async function getBalancesAccountKeysCount(ctx: StorageContext): Promise<number | undefined> {
    const storage = new BalancesAccountStorage(ctx)
    if (!storage.isExists) return undefined

    return await countKeys(ctx, 'Balances', 'Account')
}

async function countKeys(ctx: StorageContext, prefix: string, name: string) {
    const chain = ctx._chain as ProcessorChain

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const client = (chain as any).client as ResilientRpcClient

    const req = sto.getNameHash(prefix) + sto.getNameHash(name).slice(2)

    const totalSize = (await client.call('state_getStorageSizeAt', [req, ctx.block.hash])) as number
    if (totalSize === 0 || !totalSize) return 0

    const keys = (await client.call('state_getKeysPagedAt', [req, 1, null, ctx.block.hash])) as string[]

    const keySize = (await client.call('state_getStorageSizeAt', [keys[0], ctx.block.hash])) as number

    return totalSize / keySize
}
