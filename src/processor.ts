import { SubstrateProcessor } from '@subsquid/substrate-processor'
import config from './config'

const processor = new SubstrateProcessor(`${config.chainName}-processor`)

processor.setTypesBundle(config.typesBundle)
processor.setBatchSize(config.batchSize || 100)
processor.setDataSource(config.dataSource)
processor.setPrometheusPort(config.port || 3000)
processor.setBlockRange(config.blockRange || { from: 0 })

processor.addPreHook(handleSet)

processor.run()
