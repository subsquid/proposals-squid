/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Parser } from './parser'
import { Codec } from '@subsquid/scale-codec'
import { decodeHex } from '@subsquid/util-internal-hex'
import { getAddress } from '@ethersproject/address'
import { toHex } from '@subsquid/substrate-processor'

// const ss58codec = ss58.codec(config.chain.prefix)

interface Call {
    __kind: string
    value: any
}

export function parseProposalCall(chain: Chain, data: Call) {
    const section = data.__kind as string
    const method = data.value.__kind as string

    const name = `${section}.${method}`

    const description = ((chain as any).calls.get(name).docs as string[]).join('\n')

    const codec = (chain as any).scaleCodec as Codec

    const args = new Parser((codec as any).types).parse(chain.description.call, data)

    return {
        section,
        method,
        description,
        args,
    }
}

export function getOriginAccountId(origin: any) {
    // eslint-disable-next-line sonarjs/no-small-switch
    if (!origin) return undefined
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    return encodeId(decodeHex(origin.value.value))
                default:
                    return undefined
            }
        default:
            return undefined
    }
}

export function decodeId(id: string): Uint8Array {
    return Buffer.from(id.slice(2), 'hex')
}

export function encodeId(id: Uint8Array): string {
    return getAddress(toHex(id))
}
