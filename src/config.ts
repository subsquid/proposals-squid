import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'moonbeam',
        prefix: 'moonbeam',
    },
    dataSource: {
        archive: 'https://moonbeam.archive.subsquid.io/graphql',
        chain: 'wss://moonbeam.api.onfinality.io/public-ws',
    },
    typesBundle: 'moonbeam',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
