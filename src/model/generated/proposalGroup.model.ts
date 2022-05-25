import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Proposal} from "./proposal.model"

@Entity_()
export class ProposalGroup {
  constructor(props?: Partial<ProposalGroup>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @Column_("text", {nullable: true})
  preimageHash!: string | undefined | null

  @Index_()
  @Column_("int4", {nullable: true})
  treasuryIndex!: number | undefined | null

  @Index_()
  @Column_("int4", {nullable: true})
  bountyIndex!: number | undefined | null

  @Index_()
  @Column_("text", {nullable: true})
  tipHash!: string | undefined | null

  @OneToMany_(() => Proposal, e => e.group)
  proposals!: Proposal[]
}
