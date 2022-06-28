import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'acala',
        prefix: 'acala',
    },
    dataSource: {
        archive: 'https://acala.archive.subsquid.io/graphql',
        chain: 'wss://acala.api.onfinality.io/public-ws',
    },
    typesBundle: 'acala',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
