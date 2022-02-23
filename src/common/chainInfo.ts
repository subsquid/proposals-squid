import { Store } from '@subsquid/substrate-processor'
import { ChainInfo, RelayChain, Token } from '../model'

const chainInfo: ChainInfo = new ChainInfo({
    id: '2',
    name: 'Kusama',
    token: new Token({
        symbol: 'KSM',
        decimal: 12,
    }),
    paraId: 0,
    relayChain: RelayChain.KUSAMA,
})

export async function getChainInfo(store: Store): Promise<ChainInfo> {
    let info = await store.findOne(ChainInfo, chainInfo.id)
    if (!info) {
        info = new ChainInfo(chainInfo)
        await store.save(info)
    }

    return info
}
