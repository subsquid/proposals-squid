import * as ss58 from '@subsquid/ss58'
import { toHex } from '@subsquid/substrate-processor'
import { toCamelCase } from '@subsquid/util'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Parser } from './parser'
import { Codec } from '@subsquid/scale-codec'

export function encodeId(id: Uint8Array, prefix: string | number): string {
    try {
        return ss58.codec(prefix).encode(id)
    } catch (e) {
        console.error(`Failed to encode id ${toHex(id)} with prefix ${prefix}: ${e}`)
        return toHex(id)
    }
}

interface Call {
    __kind: string
    value: any
}

export function parseProposalCall(chain: Chain, call: Call) {
    const section = call.__kind as string
    const method = call.value.__kind as string

    const name = `${toCamelCase(section)}.${method}`

    const description = ((chain as any).calls.get(name).docs as string[]).join('\n')

    const codec = (chain as any).scaleCodec as Codec

    const args = new Parser((codec as any).types).parse(0, call)

    return {
        section,
        method,
        description,
        args,
    }
}
