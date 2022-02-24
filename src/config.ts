import { ProcessorConfig } from './common/processorBase'
import { handleSet } from './handler/extrinsics/timestamp/set'

export default {
    chainName: 'darwinia',
    dataSource: {
        archive: 'https://darwinia.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://rpc.darwinia.network',
    },
    typesBundle: './jsons/newTypesBundle.json',
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
