import { Store } from '@subsquid/substrate-processor'
import { ChainInfo, Token } from '../model'

const chainInfo: ChainInfo = new ChainInfo({
    id: '2',
    name: 'kusama',
    token: new Token({
        name: 'kusama',
        symbol: 'KSM',
    }),
})

export async function getChainInfo(store: Store): Promise<ChainInfo> {
    let info = await store.findOne(ChainInfo, chainInfo.id)
    if (!info) {
        info = new ChainInfo(chainInfo)
        await store.save(info)
    }

    return info
}
