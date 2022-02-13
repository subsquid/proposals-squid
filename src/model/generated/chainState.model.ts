import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {ChainInfo} from "./chainInfo.model"

@Entity_()
export class ChainState {
  constructor(props?: Partial<ChainState>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Index_()
  @ManyToOne_(() => ChainInfo, {nullable: false})
  chain!: ChainInfo

  @Index_()
  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  tokenBalance!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  tokenHolders!: bigint

  @Column_("integer", {nullable: false})
  councilMembers!: number

  @Column_("integer", {nullable: false})
  democracyProposals!: number

  @Column_("integer", {nullable: false})
  councilProposals!: number
}
