import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'phala',
        prefix: 'phala',
    },
    dataSource: {
        archive: 'https://phala.archive.subsquid.io/graphql',
        chain: 'wss://phala.api.onfinality.io/public-ws',
    },
    typesBundle: 'phala',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
