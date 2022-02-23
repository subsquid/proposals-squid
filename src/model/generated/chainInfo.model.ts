import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {Token} from "./_token"
import {RelayChain} from "./_relayChain"

@Entity_()
export class ChainInfo {
  constructor(props?: Partial<ChainInfo>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  name!: string

  @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => new Token(undefined, marshal.nonNull(obj))}, nullable: false})
  token!: Token

  @Column_("integer", {nullable: false})
  paraId!: number

  @Column_("varchar", {length: 8, nullable: false})
  relayChain!: RelayChain
}
