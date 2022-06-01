import { ProcessorConfig } from './common/processorConfig'

export default {
    chain: {
        name: 'kusama',
        prefix: 'kusama',
    },
    dataSource: {
        archive: 'https://kusama.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
