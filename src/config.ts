import { ProcessorConfig } from './common/processorBase'
import { handleSet } from './handler/extrinsics/timestamp/set'

export default {
    chainName: 'kusama',
    dataSource: {
        archive: 'https://kusama.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://kusama.api.onfinality.io/public-ws',
    },
    typesBundle: 'kusama',
    batchSize: 100,
    eventHandlers: {
        balances: {
            Transfer: {
                handler: handleSet,
            },
        },
    },
    extrinsicsHandlers: {},
} as ProcessorConfig
