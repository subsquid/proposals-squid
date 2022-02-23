import { Store } from '@subsquid/substrate-processor'
import { ChainInfo, RelayChain, Token } from '../model'

const chainInfo: ChainInfo = new ChainInfo({
    name: 'Kusama',
    token: new Token({
        symbol: 'KSM',
        decimal: 12,
    }),
    paraId: 0,
    relayChain: RelayChain.KUSAMA,
})

function getId() {
    const relayId = chainInfo.relayChain === RelayChain.POLKADOT ? 0 : 1
    chainInfo.id = `${relayId.toString().padStart(4, '0000')}-${chainInfo.paraId.toString().padStart(4, '0000')}`
}

getId()

export async function getChainInfo(store: Store): Promise<ChainInfo> {
    let info = await store.findOne(ChainInfo, chainInfo.id)
    if (!info) {
        info = new ChainInfo(chainInfo)
        await store.save(info)
    }

    return info
}
