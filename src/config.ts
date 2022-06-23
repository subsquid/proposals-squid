import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'kusama',
        prefix: 'kusama',
    },
    dataSource: {
        archive: 'https://kusama.archive.subsquid.io/graphql',
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
