import { ProcessorConfig } from './common/processorBase'
import { handleSet } from './handler/extrinsics/timestamp/set'

export default {
    chainName: 'kusama',
    dataSource: {
        archive: 'https://polkadot.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://polkadot.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 250,
    eventHandlers: {},
    extrinsicsHandlers: {
        timestamp: {
            set: {
                handler: handleSet,
            },
        },
    },
} as ProcessorConfig
