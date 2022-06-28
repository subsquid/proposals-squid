import { FindOneOptions, Store } from '@subsquid/typeorm-store'
import { toJSON } from '@subsquid/util-internal-json'
import { MissingProposalRecordWarn } from '../../common/errors'
import {
    MotionThreshold,
    Proposal,
    ProposalGroup,
    ProposalStatus,
    ProposalType,
    ProposedCall,
    ReferendumThreshold,
    ReferendumThresholdType,
    StatusHistory,
} from '../../model'
import { EventHandlerContext } from '../types/contexts'
import {
    BountyData,
    CouncilMotionData,
    DemocracyProposalData,
    HashProposal,
    IndexProposal,
    PreimageData,
    ProposedCallData,
    ReferendumData,
    TechCommitteeMotionData,
    TipData,
    TreasuryData,
} from '../types/data'

type ProposalUpdateData = Partial<
    Omit<
        Proposal,
        'updatedAt' | 'updatedAtBlock' | 'endedAt' | 'endedAtBlock' | 'status' | 'voting' | 'statusHistory' | 'id'
    >
>

export async function updateProposalStatus(
    ctx: EventHandlerContext,
    index: number,
    type: IndexProposal,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: EventHandlerContext,
    hash: string,
    type: HashProposal,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void>
export async function updateProposalStatus(
    ctx: EventHandlerContext,
    hashOrIndex: string | number,
    type: ProposalType,
    options: {
        status: ProposalStatus
        isEnded?: boolean
        data?: ProposalUpdateData
    }
): Promise<void> {
    const proposal = await ctx.store.get(Proposal, {
        where:
            typeof hashOrIndex === 'string'
                ? {
                      hash: hashOrIndex,
                      type,
                  }
                : {
                      index: hashOrIndex,
                      type,
                  },
    })

    if (!proposal) {
        ctx.log.warn(MissingProposalRecordWarn(type, hashOrIndex))
        return
    }

    Object.assign(proposal, options.data)
    proposal.updatedAt = new Date(ctx.block.timestamp)
    proposal.updatedAtBlock = ctx.block.height
    proposal.status = options.status

    if (options.isEnded) {
        proposal.endedAtBlock = proposal.updatedAtBlock
        proposal.endedAt = proposal.updatedAt
    }

    await ctx.store.save(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.updatedAtBlock,
            timestamp: proposal.updatedAt,
            status: proposal.status,
            proposal,
        })
    )
}

// async function create(store: Store, data: ProposalData): Promise<Proposal> {
//     let proposal: Proposal

//     switch (data.type) {
//         case ProposalType.DemocracyProposal:
//             proposal = await createDemocracyProposal(store, data)
//             break
//         case ProposalType.Referendum:
//             proposal = await createReferendum(store, data)
//             break
//         case ProposalType.CouncilMotion:
//         case ProposalType.TechCommitteeProposal:
//             proposal = await createCoucilMotion(store, data)
//             break
//         case ProposalType.Tip:
//             proposal = await createTip(store, data)
//             break
//         case ProposalType.TreasuryProposal:
//             proposal = await createTreasury(store, data)
//             break
//         case ProposalType.Bounty:
//             proposal = await createBounty(store, data)
//             break
//         case ProposalType.Preimage:
//             proposal = await createPreimage(store, data)
//             break
//     }

//     await store.save(proposal)

//     return proposal
// }

// export async function update(store: Store, item: Proposal, options: { block: SubstrateBlock }): Promise<Proposal> {
//     item.updatedAtBlock = options.block.height
//     item.updatedAt = new Date(options.block.timestamp)
//     await store.save(item)
//     return item
// }

async function getOrCreateProposalGroup(
    ctx: EventHandlerContext,
    hash: string,
    type: ProposalType.Preimage
): Promise<ProposalGroup>
async function getOrCreateProposalGroup(
    ctx: EventHandlerContext,
    index: number,
    type: ProposalType.TreasuryProposal | ProposalType.Bounty
): Promise<ProposalGroup>
async function getOrCreateProposalGroup(
    ctx: EventHandlerContext,
    indexOrHash: number | string,
    type: ProposalType.TreasuryProposal | ProposalType.Bounty | ProposalType.Preimage
): Promise<ProposalGroup> {
    const condition: FindOneOptions<ProposalGroup>['where'] = {}
    switch (type) {
        case ProposalType.Bounty:
            condition.bountyIndex = indexOrHash as number
            break
        case ProposalType.TreasuryProposal:
            condition.treasuryIndex = indexOrHash as number
            break
        case ProposalType.Preimage:
            condition.preimageHash = indexOrHash as string
            break
        default:
            throw new Error(`Unknown proposal type ${type}`)
    }
    let link = await ctx.store.get(ProposalGroup, { where: condition })
    if (!link) {
        const id = await ctx.store.count(ProposalGroup)
        link = new ProposalGroup({
            id: id.toString(),
        })
        switch (type) {
            case ProposalType.Bounty:
                link.bountyIndex = indexOrHash as number
                break
            case ProposalType.TreasuryProposal:
                link.treasuryIndex = indexOrHash as number
                break
            case ProposalType.Preimage:
                link.preimageHash = indexOrHash as string
                break
            default:
                throw new Error(`Unknown proposal type ${type}`)
        }
        await ctx.store.insert(link)
    }

    return link
}

async function getProposalId(store: Store, type: ProposalType) {
    const count = await store.count(Proposal, { where: { type } })

    return `${Buffer.from(type.toLowerCase()).toString('hex').slice(0, 8).padEnd(8, '0')}-${count
        .toString()
        .padStart(8, '0')}`
}

export async function createDemocracyProposal(
    ctx: EventHandlerContext,
    data: DemocracyProposalData
): Promise<Proposal> {
    const { index, hash, proposer, deposit, status } = data

    const type = ProposalType.DemocracyProposal

    const id = await getProposalId(ctx.store, type)

    const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        proposer,
        deposit,
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createReferendum(ctx: EventHandlerContext, data: ReferendumData): Promise<Proposal> {
    const { index, threshold, hash, status } = data

    const type = ProposalType.Referendum

    const id = await getProposalId(ctx.store, type)

    const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        threshold: new ReferendumThreshold({
            type: threshold as ReferendumThresholdType,
        }),
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createCoucilMotion(
    ctx: EventHandlerContext,
    data: CouncilMotionData,
    type: ProposalType.CouncilMotion | ProposalType.TechCommitteeProposal = ProposalType.CouncilMotion
): Promise<Proposal> {
    const { index, status, threshold, hash, call, proposer } = data

    let group: ProposalGroup | undefined

    const id = await getProposalId(ctx.store, type)

    if (call.args) {
        if (call.args['proposalHash']) {
            const hexHash = call.args['proposalHash'] as string
            group = await getOrCreateProposalGroup(ctx, hexHash, ProposalType.Preimage)
        } else if (call.args['bountyId']) {
            const index = call.args['bountyId'] as number
            group = await getOrCreateProposalGroup(ctx, index, ProposalType.Bounty)
        } else if (call.args['proposalId']) {
            const index = call.args['proposalId'] as number
            group = await getOrCreateProposalGroup(ctx, index, ProposalType.TreasuryProposal)
        }
    }

    const proposal = new Proposal({
        id,
        index,
        type,
        hash,
        proposer,
        status,
        threshold: new MotionThreshold({
            value: threshold,
        }),
        proposedCall: call ? createProposedCall(call) : null,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createTechCommitteeMotion(
    ctx: EventHandlerContext,
    data: TechCommitteeMotionData
): Promise<Proposal> {
    return await createCoucilMotion(ctx, data, ProposalType.TechCommitteeProposal)
}

export async function createTip(ctx: EventHandlerContext, data: TipData): Promise<Proposal> {
    const { status, hash, proposer, payee, deposit } = data

    const type = ProposalType.Tip

    const id = await getProposalId(ctx.store, type)

    const proposal = new Proposal({
        id,
        type,
        hash,
        proposer,
        payee,
        deposit,
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createBounty(ctx: EventHandlerContext, data: BountyData): Promise<Proposal> {
    const { status, index, proposer, deposit, reward } = data

    const type = ProposalType.Bounty

    const id = await getProposalId(ctx.store, type)

    const group = await getOrCreateProposalGroup(ctx, index, ProposalType.Bounty)

    const proposal = new Proposal({
        id,
        type,
        index,
        proposer,
        deposit,
        reward,
        status,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createTreasury(ctx: EventHandlerContext, data: TreasuryData): Promise<Proposal> {
    const { status, index, proposer, deposit, reward, payee } = data

    const type = ProposalType.TreasuryProposal

    const id = await getProposalId(ctx.store, type)

    const group = await getOrCreateProposalGroup(ctx, index, ProposalType.TreasuryProposal)

    const proposal = new Proposal({
        id,
        type,
        index,
        proposer,
        deposit,
        reward,
        status,
        payee,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

export async function createPreimage(ctx: EventHandlerContext, data: PreimageData): Promise<Proposal> {
    const { status, hash, proposer, deposit, call } = data

    const type = ProposalType.Preimage

    const id = await getProposalId(ctx.store, type)

    const group = await getOrCreateProposalGroup(ctx, hash, ProposalType.Preimage)

    const proposal = new Proposal({
        id,
        type,
        hash,
        proposer,
        deposit,
        status,
        proposedCall: call ? createProposedCall(call) : null,
        createdAtBlock: ctx.block.height,
        createdAt: new Date(ctx.block.timestamp),
        group,
    })

    await ctx.store.insert(proposal)

    await ctx.store.insert(
        new StatusHistory({
            id: ctx.event.id,
            block: proposal.createdAtBlock,
            timestamp: proposal.createdAt,
            status: proposal.status,
            proposal,
        })
    )

    return proposal
}

function createProposedCall(data: ProposedCallData): ProposedCall {
    return new ProposedCall(toJSON(data))
}
