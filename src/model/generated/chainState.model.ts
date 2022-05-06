import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Chain} from "./chain.model"

@Entity_()
export class ChainState {
  constructor(props?: Partial<ChainState>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => Chain, {nullable: false})
  chain!: Chain

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  tokenBalance!: bigint

  @Column_("int4", {nullable: false})
  tokenHolders!: number

  @Column_("int4", {nullable: false})
  councilMembers!: number

  @Column_("int4", {nullable: false})
  democracyProposals!: number

  @Column_("int4", {nullable: false})
  councilProposals!: number

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date
}
