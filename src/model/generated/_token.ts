import assert from "assert"
import * as marshal from "./marshal"

export class Token {
  private _symbol!: string
  private _decimal!: number

  constructor(props?: Partial<Omit<Token, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._symbol = marshal.string.fromJSON(json.symbol)
      this._decimal = marshal.int.fromJSON(json.decimal)
    }
  }

  get symbol(): string {
    assert(this._symbol != null, 'uninitialized access')
    return this._symbol
  }

  set symbol(value: string) {
    this._symbol = value
  }

  get decimal(): number {
    assert(this._decimal != null, 'uninitialized access')
    return this._decimal
  }

  set decimal(value: number) {
    this._decimal = value
  }

  toJSON(): object {
    return {
      symbol: this.symbol,
      decimal: this.decimal,
    }
  }
}
