import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { ChainName } from './chainInfo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export interface ProcessorConfig {
    chainName: ChainName
    prefix: number | string
    dataSource: Parameters<SubstrateProcessor['setDataSource']>[HandlerParams.NAME]
    typesBundle: Parameters<SubstrateProcessor['setTypesBundle']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor['setBatchSize']>[HandlerParams.NAME]
    // eventHandlers?: Handlers<SubstrateProcessor['addEventHandler']>
    // extrinsicsHandlers?: Handlers<SubstrateProcessor['addExtrinsicHandler']>
    port?: Parameters<SubstrateProcessor['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor['setBlockRange']>[HandlerParams.NAME]
}
