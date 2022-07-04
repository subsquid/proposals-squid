import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'bifrost',
        prefix: 'bifrost',
    },
    dataSource: {
        archive: 'https://bifrost.archive.subsquid.io/graphql',
        chain: 'eu.bifrost-rpc.liebi.com',
    },
    typesBundle: 'bifrost',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
