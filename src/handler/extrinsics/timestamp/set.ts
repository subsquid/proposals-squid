import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { getLastChainState, saveChainState } from '../../../common/chainState'
import { INTERVAL } from '../../../common/consts'

let lastStateTimestamp: number | undefined

export async function handleSet(ctx: ExtrinsicHandlerContext) {
    if (!lastStateTimestamp) {
        const lastChainState = await getLastChainState(ctx.store)
        lastStateTimestamp = lastChainState?.timestamp?.getMilliseconds() || 0
    }

    if (ctx.block.timestamp - lastStateTimestamp >= INTERVAL) {
        await saveChainState(ctx.store, ctx.block)
        lastStateTimestamp = ctx.block.timestamp
    }
}
