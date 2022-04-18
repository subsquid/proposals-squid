import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'kusama',
    prefix: 'kusama',
    dataSource: {
        archive: 'https://kusama.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 5,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
