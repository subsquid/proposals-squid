import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'crust',
        prefix: 'crust',
    },
    dataSource: {
        archive: 'https://crust.archive.subsquid.io/graphql',
        chain: 'wss://rpc.crust.network',
    },
    typesBundle: 'crust',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
