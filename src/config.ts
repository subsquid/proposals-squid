import { ProcessorConfig } from './common/processorConfig'
import { Store } from '@subsquid/typeorm-store'

const config: ProcessorConfig<Store> = {
    chain: {
        name: 'hydradx',
        prefix: 'hydradx',
    },
    dataSource: {
        archive: 'https://hydradx-snakenet.archive.subsquid.io/graphql',
        chain: 'wss://archive.snakenet.hydradx.io',
    },
    typesBundle: 'hydradx',
    batchSize: 500,
    blockRange: {
        from: 0,
    },
}

export default config
