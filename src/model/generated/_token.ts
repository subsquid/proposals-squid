import assert from "assert"
import * as marshal from "./marshal"

export class Token {
  private _symbol!: string | undefined | null
  private _decimals!: number | undefined | null

  constructor(props?: Partial<Omit<Token, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._symbol = json.symbol == null ? undefined : marshal.string.fromJSON(json.symbol)
      this._decimals = json.decimals == null ? undefined : marshal.int.fromJSON(json.decimals)
    }
  }

  get symbol(): string | undefined | null {
    return this._symbol
  }

  set symbol(value: string | undefined | null) {
    this._symbol = value
  }

  get decimals(): number | undefined | null {
    return this._decimals
  }

  set decimals(value: number | undefined | null) {
    this._decimals = value
  }

  toJSON(): object {
    return {
      symbol: this.symbol,
      decimals: this.decimals,
    }
  }
}
