/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ss58 from '@subsquid/ss58'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Parser } from './parser'
import { Codec } from '@subsquid/scale-codec'
import config from '../config'

export const ss58codec = ss58.codec(config.chain.prefix)

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
