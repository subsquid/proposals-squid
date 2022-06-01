import { Store } from '@subsquid/typeorm-store'

export abstract class Manager<T, S = Store> {
    abstract get(store: S, ...args: unknown[]): Promise<T | undefined>
}
