import * as ss58 from '@subsquid/ss58'
import { toHex } from '@subsquid/substrate-processor'
import config from '../config'

export function encodeId(id: Uint8Array, prefix: string | number): string {
    try {
        return ss58.codec(prefix).encode(id)
    } catch (e) {
        console.error(`Failed to encode id ${toHex(id)} with prefix ${prefix}: ${e}`)
        return toHex(id)
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseProposalCall(call: any) {
    const section = (call.__kind[0].toLowerCase() + call.__kind.slice(1)) as string
    const method = call.value.__kind as string

    const args = parseValue(call.value)

    return {
        section,
        method,
        args,
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseValue(value: Record<string, any>): Record<string, unknown> {
    const result: Record<string, unknown> = {}
    for (const paramName in value) {
        if (paramName === '__kind') continue

        result[paramName] = parseObjectArg(value[paramName])
    }
    return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseObjectArg(arg: any): unknown {
    if (!arg) {
        return null
    } else if (arg.__kind) {
        if (arg.__kind === 'AccountId') {
            return encodeId(arg.value, config.prefix)
        } else {
            return parseObjectArg(arg.value)
        }
    } else if (Buffer.isBuffer(arg)) {
        return toHex(arg)
    } else if (Array.isArray(arg)) {
        return parseArrayArg(arg)
    } else {
        return arg
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseArrayArg(arg: Array<any>): Array<unknown> {
    const result: Array<unknown> = []
    for (const item of arg) {
        result.push(parseObjectArg(item))
    }
    return result
}
