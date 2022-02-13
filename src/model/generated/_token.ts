import assert from "assert"
import * as marshal from "./marshal"

export class Token {
  private _name!: string
  private _symbol!: string
  private _address!: string

  constructor(props?: Partial<Omit<Token, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._name = marshal.string.fromJSON(json.name)
      this._symbol = marshal.string.fromJSON(json.symbol)
      this._address = marshal.string.fromJSON(json.address)
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

  get address(): string {
    assert(this._address != null, 'uninitialized access')
    return this._address
  }

  set address(value: string) {
    this._address = value
  }

  toJSON(): object {
    return {
      name: this.name,
      symbol: this.symbol,
      address: this.address,
    }
  }
}
