import { Store } from '@subsquid/typeorm-store'
import {
    BlockHandlerContext as PrBlockHandlerContext,
    EventHandlerContext as PrEventHandlerContext,
    CallHandlerContext as PrCallHandlerContext,
} from '@subsquid/substrate-processor'
import { ContextRequest } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

export type EventHandlerContext<T extends ContextRequest = { event: true }> = PrEventHandlerContext<Store, T>
export type BlockHandlerContext = PrBlockHandlerContext<Store>
export type CallHandlerContext<T extends ContextRequest = { call: true; extrinsic: true }> = PrCallHandlerContext<
    Store,
    T
>
