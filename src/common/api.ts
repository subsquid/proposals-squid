import { ApiPromise, WsProvider } from '@polkadot/api'
import { ApiDecoration, ApiOptions } from '@polkadot/api/types'
import { Hash } from '@polkadot/types/interfaces'
import config from '../config'

export class SubstrateApi {
    private _api?: ApiPromise
    private _lastHash?: Hash | Uint8Array | string
    private _chachedApiAt?: ApiDecoration<'promise'>

    public async init(options: ApiOptions) {
        await this.connect(options)
        return this
    }

    private async connect(options: ApiOptions) {
        this._api = await ApiPromise.create(options)
        this._api.on('error', async (e) => {
            console.log(`Api error: ${JSON.stringify(e)}, reconnecting....`)
            await this.connect(options)
        })
    }

    public async getHoldersCount(hash: Hash | Uint8Array | string): Promise<number> {
        const apiAt = await this.apiAt(hash)

        const keys =
            (await (
                apiAt.query.system.account ||
                apiAt.query.balances.account ||
                apiAt.query.system.accountNonce
            )?.keys()) || []

        return keys.length
    }

    private async apiAt(hash: Hash | Uint8Array | string): Promise<ApiDecoration<'promise'>> {
        if (!this._api) throw new Error('Api not initialized')

        if (this._lastHash !== hash || !this._chachedApiAt) {
            this._chachedApiAt = await this._api.at(hash)
        }

        return this._chachedApiAt
    }
}

let api: SubstrateApi

export async function getApi() {
    if (!api) {
        const provider = new WsProvider(config.dataSource.chain)
        api = await new SubstrateApi().init({
            provider: provider,
        })
    }

    return api
}
