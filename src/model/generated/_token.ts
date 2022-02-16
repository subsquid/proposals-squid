import assert from "assert"
import * as marshal from "./marshal"

export class Token {
  private _name!: string
  private _symbol!: string

  constructor(props?: Partial<Omit<Token, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._name = marshal.string.fromJSON(json.name)
      this._symbol = marshal.string.fromJSON(json.symbol)
    }
  }

  get name(): string {
    assert(this._name != null, 'uninitialized access')
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get symbol(): string {
    assert(this._symbol != null, 'uninitialized access')
    return this._symbol
  }

  set symbol(value: string) {
    this._symbol = value
  }

  toJSON(): object {
    return {
      name: this.name,
      symbol: this.symbol,
    }
  }
}
