import { BlockHandlerContext, EventHandlerContext } from '@subsquid/substrate-processor'

export abstract class Manager<T> {
    abstract get(ctx: EventHandlerContext | BlockHandlerContext, ...args: unknown[]): Promise<T | undefined>

    abstract save(ctx: EventHandlerContext | BlockHandlerContext, item: T): Promise<T>
}
