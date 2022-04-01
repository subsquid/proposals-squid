import { ProcessorConfig } from './common/processorConfig'

export default {
    chainName: 'kusama',
    dataSource: {
        archive: 'https://kusama.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 250,
} as ProcessorConfig
