import { ApiPromise, WsProvider } from '@polkadot/api'
import { ApiDecoration, ApiOptions } from '@polkadot/api/types'
import { u128, u32, Vec } from '@polkadot/types'
import { Hash, AccountId32 } from '@polkadot/types/interfaces'
import * as ss58 from '@subsquid/ss58'
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

    public async getCouncilMembers(hash: Hash | Uint8Array | string): Promise<Vec<AccountId32> | undefined> {
        const apiAt = await this.apiAt(hash)
        return (await apiAt?.query.council.members()) as unknown as Vec<AccountId32>
    }

    public async getCouncilProposalsCount(hash: Hash | Uint8Array | string): Promise<number> {
        const apiAt = await this.apiAt(hash)
        const count = (await apiAt?.query.council.proposalCount?.()) as u32 | undefined
        return count?.toNumber() || 0
    }

    public async getDemocracyProposalsCount(hash: Hash | Uint8Array | string): Promise<number> {
        const apiAt = await this.apiAt(hash)
        const count = (await apiAt?.query.democracy.publicPropCount?.()) as u32 | undefined
        return count?.toNumber() || 0
    }

    public async getTotalIssuance(hash: Hash | Uint8Array | string): Promise<bigint> {
        const apiAt = await this.apiAt(hash)
        const count = (await apiAt?.query.balances.totalIssuance?.()) as u128 | undefined
        return count?.toBigInt() || 0n
    }

    public async getHoldersCount(hash: Hash | Uint8Array | string): Promise<number> {
        const apiAt = await this.apiAt(hash)

        const keys =
            (await (
                apiAt.query.system.account ||
                apiAt.query.balances.account ||
                apiAt.query.system.accountNonce
            )?.keys()) || 0

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
