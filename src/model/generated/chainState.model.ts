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
  @ManyToOne_(() => ChainInfo, {nullable: true})
  chain!: ChainInfo | undefined | null

  @Index_()
  @Column_("timestamp with time zone", {nullable: true})
  timestamp!: Date | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  tokenBalance!: bigint | undefined | null

  @Column_("integer", {nullable: true})
  tokenHolders!: number | undefined | null

  @Column_("integer", {nullable: true})
  councilMembers!: number | undefined | null

  @Column_("integer", {nullable: true})
  democracyProposals!: number | undefined | null

  @Column_("integer", {nullable: true})
  councilProposals!: number | undefined | null
}
