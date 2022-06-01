import { SubstrateProcessor } from '@subsquid/substrate-processor'
import { ChainName } from './types'

type Parameters<T> = T extends (...args: infer T) => any ? T : never

enum HandlerParams {
    NAME,
    OPTIONS,
    FUNC,
}

export type ChainConfig = Readonly<{
    name: ChainName
    prefix: number | string
}>

export type ProcessorConfig<S> = Readonly<{
    chain: ChainConfig
    dataSource: Parameters<SubstrateProcessor<S>['setDataSource']>[HandlerParams.NAME]
    typesBundle: Parameters<SubstrateProcessor<S>['setTypesBundle']>[HandlerParams.NAME]
    batchSize?: Parameters<SubstrateProcessor<S>['setBatchSize']>[HandlerParams.NAME]
    port?: Parameters<SubstrateProcessor<S>['setPrometheusPort']>[HandlerParams.NAME]
    blockRange?: Parameters<SubstrateProcessor<S>['setBlockRange']>[HandlerParams.NAME]
}>
