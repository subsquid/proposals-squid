import assert from "assert"
import * as marshal from "./marshal"
import {ProposalStatus} from "./_proposalStatus"

export class StatusHistoryItem {
  private _status!: ProposalStatus
  private _block!: number
  private _timestamp!: Date

  constructor(props?: Partial<Omit<StatusHistoryItem, 'toJSON'>>, json?: any) {
    Object.assign(this, props)
    if (json != null) {
      this._status = marshal.string.fromJSON(json.status) as any
      this._block = marshal.int.fromJSON(json.block)
      this._timestamp = marshal.datetime.fromJSON(json.timestamp)
    }
  }

  get status(): ProposalStatus {
    assert(this._status != null, 'uninitialized access')
    return this._status
  }

  set status(value: ProposalStatus) {
    this._status = value
  }

  get block(): number {
    assert(this._block != null, 'uninitialized access')
    return this._block
  }

  set block(value: number) {
    this._block = value
  }

  get timestamp(): Date {
    assert(this._timestamp != null, 'uninitialized access')
    return this._timestamp
  }

  set timestamp(value: Date) {
    this._timestamp = value
  }

  toJSON(): object {
    return {
      status: this.status,
      block: this.block,
      timestamp: marshal.datetime.toJSON(this.timestamp),
    }
  }
}
