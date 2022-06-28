import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'karura',
        prefix: 'karura',
    },
    dataSource: {
        archive: 'https://karura.archive.subsquid.io/graphql',
        chain: 'wss://karura.api.onfinality.io/public-ws',
    },
    typesBundle: 'karura',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
