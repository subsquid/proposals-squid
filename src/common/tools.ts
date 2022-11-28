/* eslint-disable @typescript-eslint/no-explicit-any */
import * as ss58 from '@subsquid/ss58'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Parser } from './parser'
import { Codec } from '@subsquid/scale-codec'
import config from '../config'
import { decodeHex } from '@subsquid/util-internal-hex'

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

export function getOriginAccountId(origin: any) {
    // eslint-disable-next-line sonarjs/no-small-switch
    if (!origin) return undefined
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    let accountID
                    try {
                        // origin.value:
                        // {
                        //     __kind: 'Signed',
                        //     value: '0x988740c0cb624d6228e22704f9dddd8a526775c81506cb9eab96d3be870d4a04'
                        // }
                        accountID = ss58codec.encode(decodeHex(origin.value.value))
                    } catch (e) {
                        // origin.value:
                        // {
                        //     __kind: 'Signed',
                        //     value: {
                        //         __kind: 'Id',
                        //         value: '0x988740c0cb624d6228e22704f9dddd8a526775c81506cb9eab96d3be870d4a04'
                        //     }
                        // }
                        accountID = ss58codec.encode(decodeHex(origin.value.value.value))
                    }
                    return accountID
                default:
                    return undefined
            }
        default:
            return undefined
    }
}
