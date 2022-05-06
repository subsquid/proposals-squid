import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./_token"
import {RelayChain} from "./_relayChain"
import {ChainState} from "./chainState.model"

@Entity_()
export class Chain {
  constructor(props?: Partial<Chain>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => new Token(undefined, marshal.nonNull(obj))}, nullable: false})
  token!: Token

  @Column_("int4", {nullable: true})
  paraId!: number | undefined | null

  @Column_("varchar", {length: 8, nullable: true})
  relayChain!: RelayChain | undefined | null

  @OneToMany_(() => ChainState, e => e.chain)
  states!: ChainState[]
}
