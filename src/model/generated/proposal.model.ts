import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {ProposalType} from "./_proposalType"
import {Threshold, fromJsonThreshold} from "./_threshold"
import {ProposedCall} from "./_proposedCall"
import {Vote} from "./vote.model"
import {ProposalStatus} from "./_proposalStatus"
import {StatusHistoryItem} from "./_statusHistoryItem"
import {ProposalGroup} from "./proposalGroup.model"

@Entity_()
export class Proposal {
  constructor(props?: Partial<Proposal>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("varchar", {length: 21, nullable: false})
  type!: ProposalType

  @Column_("text", {nullable: true})
  hash!: string | undefined | null

  @Column_("int4", {nullable: true})
  index!: number | undefined | null

  @Column_("text", {nullable: true})
  proposer!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  deposit!: bigint | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonThreshold(obj)}, nullable: true})
  threshold!: Threshold | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new ProposedCall(undefined, obj)}, nullable: true})
  proposedCall!: ProposedCall | undefined | null

  @Column_("text", {nullable: true})
  curator!: string | undefined | null

  @Column_("text", {nullable: true})
  payee!: string | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  reward!: bigint | undefined | null

  @OneToMany_(() => Vote, e => e.proposal)
  voting!: Vote[]

  @Column_("varchar", {length: 11, nullable: false})
  status!: ProposalStatus

  @Column_("jsonb", {transformer: {to: obj => obj.map((val: any) => val.toJSON()), from: obj => marshal.fromList(obj, val => new StatusHistoryItem(undefined, marshal.nonNull(val)))}, nullable: false})
  statusHistory!: (StatusHistoryItem)[]

  @Column_("int4", {nullable: false})
  createdAtBlock!: number

  @Column_("timestamp with time zone", {nullable: false})
  createdAt!: Date

  @Column_("int4", {nullable: true})
  endedAtBlock!: number | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  endedAt!: Date | undefined | null

  @Column_("int4", {nullable: true})
  updatedAtBlock!: number | undefined | null

  @Column_("timestamp with time zone", {nullable: true})
  updatedAt!: Date | undefined | null

  @Index_()
  @ManyToOne_(() => ProposalGroup, {nullable: true})
  group!: ProposalGroup | undefined | null
}
