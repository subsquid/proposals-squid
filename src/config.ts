import { ProcessorConfig } from './common/processorBase'
import { handleSet } from './handler/extrinsics/timestamp/set'

export default {
    chainName: 'moonbeam',
    dataSource: {
        archive: 'https://moonbeam.indexer.gc.subsquid.io/v4/graphql',
        chain: 'wss://moonbeam.api.onfinality.io/public-ws',
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
