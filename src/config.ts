import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'crust',
    prefix: 'crust',
    dataSource: {
        archive: 'https://crust.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://rpc.crust.network',
    },
    typesBundle: 'crust',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
