import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { getLastChainState, saveChainState } from '../../../common/chainState'
import { PERIOD } from '../../../common/consts'

let lastStateTimestamp = 0

export async function handleSet(ctx: ExtrinsicHandlerContext) {
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
