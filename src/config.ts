import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'kusama',
    prefix: 'kusama',
    dataSource: {
        archive: 'https://polkadot.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://polkadot.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
