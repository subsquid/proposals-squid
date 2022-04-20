import { ProposalType } from '../model'

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export class MissingProposalRecord {
    constructor(proposal: ProposalType, hashOrIndex: string | number, block: number) {
        console.warn(`Missing record for ${proposal} ${hashOrIndex} at block ${block}`)
    }
}

export class StorageNotExists {
    constructor(proposal: ProposalType, hashOrIndex: string | number, block: number) {
        console.warn(`Storage doesn't exist for ${proposal} ${hashOrIndex} at block ${block}`)
    }
}
