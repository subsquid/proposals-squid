import { SubstrateProcessor } from '@subsquid/substrate-processor'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters<T> = T extends (...args: infer T) => any ? T : never
type ChainName = 'polkadot' | 'kusama'

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

type Handlers<T> = Record<
    string,
    Record<
        string,
        {
            handler: Parameters<T>[HandlerParams.FUNC]
            options?: Parameters<T>[HandlerParams.OPTIONS]
        }
    >
>

export interface ProcessorConfig {
    chainName: ChainName
    dataSource: Parameters<SubstrateProcessor['setDataSource']>[HandlerParams.NAME]
    typesBundle: Parameters<SubstrateProcessor['setTypesBundle']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor['setBatchSize']>[HandlerParams.NAME]
    eventHandlers?: Handlers<SubstrateProcessor['addEventHandler']>
    extrinsicsHandlers?: Handlers<SubstrateProcessor['addExtrinsicHandler']>
    port?: Parameters<SubstrateProcessor['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor['setBlockRange']>[HandlerParams.NAME]
}

const DEFAULT_BATCH_SIZE = 500
const DEFAULT_PORT = 3000

export function setupNewProcessor(config: ProcessorConfig): SubstrateProcessor {
    const processor = new SubstrateProcessor(`${config.chainName}-processor`)

    processor.setTypesBundle(config.typesBundle)
    processor.setBatchSize(config.batchSize || DEFAULT_BATCH_SIZE)
    processor.setDataSource(config.dataSource)
    processor.setPrometheusPort(config.port || DEFAULT_PORT)
    processor.setBlockRange(config.blockRange || { from: 0 })

    for (const sectionName in config.eventHandlers) {
        const section = config.eventHandlers[sectionName]
        for (const methodName in section) {
            const method = section[methodName]
            processor.addEventHandler(`${sectionName}.${methodName}`, method.options || {}, method.handler)
        }
    }

    for (const sectionName in config.extrinsicsHandlers) {
        const section = config.extrinsicsHandlers[sectionName]
        for (const methodName in section) {
            const method = section[methodName]
            processor.addExtrinsicHandler(`${sectionName}.${methodName}`, method.options || {}, method.handler)
        }
    }

    return processor
}
