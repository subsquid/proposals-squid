import { ProposalType } from '../model'

export class UnknownVersionError extends Error {
    constructor(name: string) {
        super(`There is no relevant version for ${name}`)
    }
}

export function MissingProposalRecordWarn(proposal: ProposalType, hashOrIndex: string | number) {
    return `Missing record for ${proposal} ${hashOrIndex}`
}

export function StorageNotExistsWarn(proposal: ProposalType, hashOrIndex: string | number) {
    return `Storage doesn't exist for ${proposal} ${hashOrIndex}`
}
