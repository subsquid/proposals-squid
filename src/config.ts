import { ProcessorConfig } from './common/processorBase'

export default {
    chainName: 'kusama',
    dataSource: {
        archive: 'https://kusama.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://kusama-rpc.polkadot.io',
    },
    typesBundle: 'kusama',
    batchSize: 10,
    eventHandlers: {},
    extrinsicsHandlers: {},
} as ProcessorConfig
