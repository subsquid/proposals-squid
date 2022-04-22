import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'hydradx',
    prefix: 'hydradx',
    dataSource: {
        archive: 'https://hydradx.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://archive.snakenet.hydradx.io',
    },
    typesBundle: 'hydradx',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
} as ProcessorConfig
