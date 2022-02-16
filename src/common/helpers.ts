import { Store } from '@subsquid/substrate-processor'

export async function getOrCreate<T extends { id: string }>(
    store: Store,
    entityConstructor: EntityConstructor<T>,
    id: string
): Promise<T>
export async function getOrCreate<T extends { id: string }>(
    store: Store,
    entityConstructor: EntityConstructor<T>,
    id: Partial<T>
): Promise<T>
export async function getOrCreate<T extends { id: string }>(
    store: Store,
    entityConstructor: EntityConstructor<T>,
    idOrOptions: string | Partial<T>
): Promise<T> {
    let e

    if (typeof idOrOptions == 'string') {
        e = await store.findOne<T>(entityConstructor, idOrOptions)
    } else {
        e = await store.findOne<T>(entityConstructor, { where: idOrOptions })
    }

    if (!e) {
        if (typeof idOrOptions == 'string') {
            e = new entityConstructor({ id: idOrOptions })
        } else {
            e = new entityConstructor(idOrOptions)
        }
    }

    return e
}

export type EntityConstructor<T> = {
    new (...args: any[]): T
}
