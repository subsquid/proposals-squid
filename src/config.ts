import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'polkadot',
    prefix: 'polkadot',
    dataSource: {
        archive: 'https://polkadot.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://polkadot-rpc.dwellir.com',
    },
    typesBundle: 'polkadot',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
