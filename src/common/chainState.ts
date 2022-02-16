import { Store, SubstrateBlock } from '@subsquid/substrate-processor'
import { ChainState } from '../model'
import { getApi } from './api'
import { getChainInfo } from './chainInfo'
import { getOrCreate } from './helpers'

export async function saveChainState(store: Store, block: SubstrateBlock) {
    const state = await getOrCreate(store, ChainState, block.id)

    const api = await getApi()

    state.chain = await getChainInfo(store)
    state.timestamp = new Date(block.timestamp)
    state.councilMembers = (await api.getCouncilMembers(block.hash))?.length || 0
    state.councilProposals = await api.getCouncilProposalsCount(block.hash)
    state.democracyProposals = await api.getDemocracyProposalsCount(block.hash)
    state.tokenBalance = await api.getTotalIssuance(block.hash)
    state.tokenHolders = await api.getHoldersCount(block.hash)

    await store.save(state)
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
