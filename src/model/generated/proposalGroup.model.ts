import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {Proposal} from "./proposal.model"

@Entity_()
export class ProposalGroup {
  constructor(props?: Partial<ProposalGroup>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  preimageHash!: string | undefined | null

  @Column_("int4", {nullable: true})
  treasuryIndex!: number | undefined | null

  @Column_("int4", {nullable: true})
  bountyIndex!: number | undefined | null

  @Column_("text", {nullable: true})
  tipHash!: string | undefined | null

  @OneToMany_(() => Proposal, e => e.group)
  proposals!: Proposal[]
}
