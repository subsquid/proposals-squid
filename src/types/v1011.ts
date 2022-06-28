import type {Result} from './support'

export type Hash = Uint8Array

export type Proposal = Proposal_System | Proposal_Timestamp | Proposal_Scheduler | Proposal_Utility | Proposal_Multisig | Proposal_Proxy | Proposal_TransactionPause | Proposal_Balances | Proposal_Currencies | Proposal_Vesting | Proposal_TransactionPayment | Proposal_Treasury | Proposal_Bounties | Proposal_Tips | Proposal_ParachainSystem | Proposal_Authorship | Proposal_CollatorSelection | Proposal_Session | Proposal_SessionManager | Proposal_XcmpQueue | Proposal_PolkadotXcm | Proposal_DmpQueue | Proposal_XTokens | Proposal_OrmlXcm | Proposal_Authority | Proposal_GeneralCouncil | Proposal_GeneralCouncilMembership | Proposal_FinancialCouncil | Proposal_FinancialCouncilMembership | Proposal_HomaCouncil | Proposal_HomaCouncilMembership | Proposal_TechnicalCommittee | Proposal_TechnicalCommitteeMembership | Proposal_Democracy | Proposal_AcalaOracle | Proposal_OperatorMembershipAcala | Proposal_Auction | Proposal_Rewards | Proposal_Prices | Proposal_Dex | Proposal_AuctionManager | Proposal_Loans | Proposal_Honzon | Proposal_CdpTreasury | Proposal_CdpEngine | Proposal_EmergencyShutdown | Proposal_HomaLite | Proposal_Incentives | Proposal_NFT | Proposal_EVM | Proposal_EvmAccounts | Proposal_Sudo

export interface Proposal_System {
  __kind: 'System'
  value: SystemCall
}

export interface Proposal_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Proposal_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Proposal_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Proposal_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Proposal_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface Proposal_TransactionPause {
  __kind: 'TransactionPause'
  value: TransactionPauseCall
}

export interface Proposal_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Proposal_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Proposal_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Proposal_TransactionPayment {
  __kind: 'TransactionPayment'
  value: TransactionPaymentCall
}

export interface Proposal_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Proposal_Bounties {
  __kind: 'Bounties'
  value: BountiesCall
}

export interface Proposal_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Proposal_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Proposal_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Proposal_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface Proposal_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Proposal_SessionManager {
  __kind: 'SessionManager'
  value: SessionManagerCall
}

export interface Proposal_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Proposal_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Proposal_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Proposal_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Proposal_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface Proposal_Authority {
  __kind: 'Authority'
  value: AuthorityCall
}

export interface Proposal_GeneralCouncil {
  __kind: 'GeneralCouncil'
  value: GeneralCouncilCall
}

export interface Proposal_GeneralCouncilMembership {
  __kind: 'GeneralCouncilMembership'
  value: GeneralCouncilMembershipCall
}

export interface Proposal_FinancialCouncil {
  __kind: 'FinancialCouncil'
  value: FinancialCouncilCall
}

export interface Proposal_FinancialCouncilMembership {
  __kind: 'FinancialCouncilMembership'
  value: FinancialCouncilMembershipCall
}

export interface Proposal_HomaCouncil {
  __kind: 'HomaCouncil'
  value: HomaCouncilCall
}

export interface Proposal_HomaCouncilMembership {
  __kind: 'HomaCouncilMembership'
  value: HomaCouncilMembershipCall
}

export interface Proposal_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Proposal_TechnicalCommitteeMembership {
  __kind: 'TechnicalCommitteeMembership'
  value: TechnicalCommitteeMembershipCall
}

export interface Proposal_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Proposal_AcalaOracle {
  __kind: 'AcalaOracle'
  value: AcalaOracleCall
}

export interface Proposal_OperatorMembershipAcala {
  __kind: 'OperatorMembershipAcala'
  value: OperatorMembershipAcalaCall
}

export interface Proposal_Auction {
  __kind: 'Auction'
  value: AuctionCall
}

export interface Proposal_Rewards {
  __kind: 'Rewards'
  value: RewardsCall
}

export interface Proposal_Prices {
  __kind: 'Prices'
  value: PricesCall
}

export interface Proposal_Dex {
  __kind: 'Dex'
  value: DexCall
}

export interface Proposal_AuctionManager {
  __kind: 'AuctionManager'
  value: AuctionManagerCall
}

export interface Proposal_Loans {
  __kind: 'Loans'
  value: LoansCall
}

export interface Proposal_Honzon {
  __kind: 'Honzon'
  value: HonzonCall
}

export interface Proposal_CdpTreasury {
  __kind: 'CdpTreasury'
  value: CdpTreasuryCall
}

export interface Proposal_CdpEngine {
  __kind: 'CdpEngine'
  value: CdpEngineCall
}

export interface Proposal_EmergencyShutdown {
  __kind: 'EmergencyShutdown'
  value: EmergencyShutdownCall
}

export interface Proposal_HomaLite {
  __kind: 'HomaLite'
  value: HomaLiteCall
}

export interface Proposal_Incentives {
  __kind: 'Incentives'
  value: IncentivesCall
}

export interface Proposal_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface Proposal_EVM {
  __kind: 'EVM'
  value: EVMCall
}

export interface Proposal_EvmAccounts {
  __kind: 'EvmAccounts'
  value: EvmAccountsCall
}

export interface Proposal_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: Perbill
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
  __kind: 'set_changes_trie_config'
  changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: KeyValue[]
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Key[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Key
  subkeys: number
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: BlockNumber
  maybePeriodic: (Period | undefined)
  priority: Priority
  call: Type_54
}

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: BlockNumber
  index: number
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: BlockNumber
  maybePeriodic: (Period | undefined)
  priority: Priority
  call: Type_54
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named'
  id: Uint8Array
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after'
  after: BlockNumber
  maybePeriodic: (Period | undefined)
  priority: Priority
  call: Type_54
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`](Self::schedule_named).
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: BlockNumber
  maybePeriodic: (Period | undefined)
  priority: Priority
  call: Type_54
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Type_54[]
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
  __kind: 'as_derivative'
  index: number
  call: Type_54
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
  __kind: 'batch_all'
  calls: Type_54[]
}

export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 *  Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `other_signatories`: The accounts (other than the sender) who are part of the
 *  multi-signature, but do not participate in the approval process.
 *  - `call`: The call to be executed.
 * 
 *  Result is equivalent to the dispatched result.
 * 
 *  # <weight>
 *  O(Z + C) where Z is the length of the call and C its execution weight.
 *  -------------------------------
 *  - DB Weight: None
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
  __kind: 'as_multi_threshold_1'
  otherSignatories: AccountId[]
  call: Type_54
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  If there are enough, then dispatch the call.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call`: The call to be executed.
 * 
 *  NOTE: Unless this is the final approval, you will generally want to use
 *  `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 *  Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 *  on success, result is `Ok` and the result from the interior call, if it was executed,
 *  may be found in the deposited `MultisigExecuted` event.
 * 
 *  # <weight>
 *  - `O(S + Z + Call)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - The weight of the `call`.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  -------------------------------
 *  - DB Weight:
 *      - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *      - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *  - Plus Call Weight
 *  # </weight>
 */
export interface MultisigCall_as_multi {
  __kind: 'as_multi'
  threshold: number
  otherSignatories: AccountId[]
  maybeTimepoint: (Timepoint | undefined)
  call: OpaqueCall
  storeCall: boolean
  maxWeight: Weight
}

/**
 *  Register approval for a dispatch to be made from a deterministic composite account if
 *  approved by a total of `threshold - 1` of `other_signatories`.
 * 
 *  Payment: `DepositBase` will be reserved if this is the first approval, plus
 *  `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 *  is cancelled.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 *  not the first approval, then it must be `Some`, with the timepoint (block number and
 *  transaction index) of the first approval transaction.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - Up to one binary search and insert (`O(logS + S)`).
 *  - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 *  - One event.
 *  - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
 *    deposit taken for its lifetime of
 *    `DepositBase + threshold * DepositFactor`.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account]
 *      - Write: Multisig Storage, [Caller Account]
 *  # </weight>
 */
export interface MultisigCall_approve_as_multi {
  __kind: 'approve_as_multi'
  threshold: number
  otherSignatories: AccountId[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
  maxWeight: Weight
}

/**
 *  Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 *  for this operation will be unreserved on success.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `threshold`: The total number of approvals for this dispatch before it is executed.
 *  - `other_signatories`: The accounts (other than the sender) who can approve this
 *  dispatch. May not be empty.
 *  - `timepoint`: The timepoint (block number and transaction index) of the first approval
 *  transaction for this dispatch.
 *  - `call_hash`: The hash of the call to be executed.
 * 
 *  # <weight>
 *  - `O(S)`.
 *  - Up to one balance-reserve or unreserve operation.
 *  - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *    signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 *  - One encode & hash, both of complexity `O(S)`.
 *  - One event.
 *  - I/O: 1 read `O(S)`, one remove.
 *  - Storage: removes one item.
 *  ----------------------------------
 *  - DB Weight:
 *      - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *      - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 *  # </weight>
 */
export interface MultisigCall_cancel_as_multi {
  __kind: 'cancel_as_multi'
  threshold: number
  otherSignatories: AccountId[]
  timepoint: Timepoint
  callHash: Uint8Array
}

export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 *  Dispatch the given `call` from an account that the sender is authorised for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_proxy {
  __kind: 'proxy'
  real: AccountId
  forceProxyType: (ProxyType | undefined)
  call: Type_54
}

/**
 *  Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to make a proxy.
 *  - `proxy_type`: The permissions allowed for this proxy account.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_add_proxy {
  __kind: 'add_proxy'
  delegate: AccountId
  proxyType: ProxyType
  delay: BlockNumber
}

/**
 *  Unregister a proxy account for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `proxy`: The account that the `caller` would like to remove as a proxy.
 *  - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxy {
  __kind: 'remove_proxy'
  delegate: AccountId
  proxyType: ProxyType
  delay: BlockNumber
}

/**
 *  Unregister all proxy accounts for the sender.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  WARNING: This may be called on accounts created by `anonymous`, however if done, then
 *  the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_remove_proxies {
  __kind: 'remove_proxies'
}

/**
 *  Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 *  initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 *  Requires a `Signed` origin.
 * 
 *  - `proxy_type`: The type of the proxy that the sender will be registered as over the
 *  new account. This will almost always be the most permissive `ProxyType` possible to
 *  allow for maximum flexibility.
 *  - `index`: A disambiguation index, in case this is called multiple times in the same
 *  transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 *  want to use `0`.
 *  - `delay`: The announcement period required of the initial proxy. Will generally be
 *  zero.
 * 
 *  Fails with `Duplicate` if this has already been called in this transaction, from the
 *  same sender, with the same parameters.
 * 
 *  Fails if there are insufficient funds to pay for deposit.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 *  TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
  __kind: 'anonymous'
  proxyType: ProxyType
  delay: BlockNumber
  index: number
}

/**
 *  Removes a previously spawned anonymous proxy.
 * 
 *  WARNING: **All access to this account will be lost.** Any funds held in it will be
 *  inaccessible.
 * 
 *  Requires a `Signed` origin, and the sender account must have been created by a call to
 *  `anonymous` with corresponding parameters.
 * 
 *  - `spawner`: The account that originally called `anonymous` to create this account.
 *  - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 *  - `proxy_type`: The proxy type originally passed to `anonymous`.
 *  - `height`: The height of the chain when the call to `anonymous` was processed.
 *  - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 *  Fails with `NoPermission` in case the caller is not a previously created anonymous
 *  account whose `anonymous` call has corresponding parameters.
 * 
 *  # <weight>
 *  Weight is a function of the number of proxies the user has (P).
 *  # </weight>
 */
export interface ProxyCall_kill_anonymous {
  __kind: 'kill_anonymous'
  spawner: AccountId
  proxyType: ProxyType
  index: number
  height: number
  extIndex: number
}

/**
 *  Publish the hash of a proxy-call that will be made in the future.
 * 
 *  This must be called some number of blocks before the corresponding `proxy` is attempted
 *  if the delay associated with the proxy relationship is greater than zero.
 * 
 *  No more than `MaxPending` announcements may be made at any one time.
 * 
 *  This will take a deposit of `AnnouncementDepositFactor` as well as
 *  `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 *  The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_announce {
  __kind: 'announce'
  real: AccountId
  callHash: CallHashOf
}

/**
 *  Remove a given announcement.
 * 
 *  May be called by a proxy account to remove a call they previously announced and return
 *  the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_remove_announcement {
  __kind: 'remove_announcement'
  real: AccountId
  callHash: CallHashOf
}

/**
 *  Remove the given announcement of a delegate.
 * 
 *  May be called by a target (proxied) account to remove a call that one of their delegates
 *  (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `delegate`: The account that previously announced the call.
 *  - `call_hash`: The hash of the call to be made.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_reject_announcement {
  __kind: 'reject_announcement'
  delegate: AccountId
  callHash: CallHashOf
}

/**
 *  Dispatch the given `call` from an account that the sender is authorized for through
 *  `add_proxy`.
 * 
 *  Removes any corresponding announcement(s).
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Parameters:
 *  - `real`: The account that the proxy will make a call on behalf of.
 *  - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 *  - `call`: The call to be made by the `real` account.
 * 
 *  # <weight>
 *  Weight is a function of:
 *  - A: the number of announcements made.
 *  - P: the number of proxies the user has.
 *  # </weight>
 */
export interface ProxyCall_proxy_announced {
  __kind: 'proxy_announced'
  delegate: AccountId
  real: AccountId
  forceProxyType: (ProxyType | undefined)
  call: Type_54
}

export type TransactionPauseCall = TransactionPauseCall_pause_transaction | TransactionPauseCall_unpause_transaction

export interface TransactionPauseCall_pause_transaction {
  __kind: 'pause_transaction'
  palletName: Uint8Array
  functionName: Uint8Array
}

export interface TransactionPauseCall_unpause_transaction {
  __kind: 'unpause_transaction'
  palletName: Uint8Array
  functionName: Uint8Array
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: LookupSource
  value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: LookupSource
  newFree: bigint
  newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: LookupSource
  dest: LookupSource
  value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: LookupSource
  value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: LookupSource
  keepAlive: boolean
}

export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance | CurrenciesCall_sweep_dust

/**
 *  Transfer some balance to another account under `currency_id`.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrenciesCall_transfer {
  __kind: 'transfer'
  dest: LookupSource
  currencyId: CurrencyIdOf
  amount: bigint
}

/**
 *  Transfer some native currency to another account.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
  __kind: 'transfer_native_currency'
  dest: LookupSource
  amount: bigint
}

/**
 *  update amount of account `who` under `currency_id`.
 * 
 *  The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
  __kind: 'update_balance'
  who: LookupSource
  currencyId: CurrencyIdOf
  amount: AmountOf
}

export interface CurrenciesCall_sweep_dust {
  __kind: 'sweep_dust'
  currencyId: CurrencyIdOf
  accounts: AccountId[]
}

export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
  __kind: 'claim'
}

export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer'
  dest: LookupSource
  schedule: VestingScheduleOf
}

export interface VestingCall_update_vesting_schedules {
  __kind: 'update_vesting_schedules'
  who: LookupSource
  vestingSchedules: VestingScheduleOf[]
}

export interface VestingCall_claim_for {
  __kind: 'claim_for'
  dest: LookupSource
}

export type TransactionPaymentCall = TransactionPaymentCall_set_alternative_fee_swap_path

/**
 *  Set fee swap path
 */
export interface TransactionPaymentCall_set_alternative_fee_swap_path {
  __kind: 'set_alternative_fee_swap_path'
  feeSwapPath: (CurrencyId[] | undefined)
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `ProposalCount`, `origin account`
 *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: LookupSource
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `Proposals`, `rejected proposer account`
 *  - DbWrites: `Proposals`, `rejected proposer account`
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1).
 *  - DbReads: `Proposals`, `Approvals`
 *  - DbWrite: `Approvals`
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 *  Propose a new bounty.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 *  or slashed when rejected.
 * 
 *  - `curator`: The curator account whom will manage this bounty.
 *  - `fee`: The curator fee.
 *  - `value`: The total payment amount of this bounty, curator fee included.
 *  - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
  __kind: 'propose_bounty'
  value: bigint
  description: Uint8Array
}

/**
 *  Approve a bounty proposal. At a later time, the bounty will be funded and become active
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_approve_bounty {
  __kind: 'approve_bounty'
  bountyId: number
}

/**
 *  Assign a curator to a funded bounty.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_propose_curator {
  __kind: 'propose_curator'
  bountyId: number
  curator: LookupSource
  fee: bigint
}

/**
 *  Unassign curator from a bounty.
 * 
 *  This function can only be called by the `RejectOrigin` a signed origin.
 * 
 *  If this function is called by the `RejectOrigin`, we assume that the curator is malicious
 *  or inactive. As a result, we will slash the curator when possible.
 * 
 *  If the origin is the curator, we take this as a sign they are unable to do their job and
 *  they willingly give up. We could slash them, but for now we allow them to recover their
 *  deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 *  Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 *  anyone in the community to call out that a curator is not doing their due diligence, and
 *  we should pick a new curator. In this case the curator should also be slashed.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_unassign_curator {
  __kind: 'unassign_curator'
  bountyId: number
}

/**
 *  Accept the curator role for a bounty.
 *  A deposit will be reserved from curator and refund upon successful payout.
 * 
 *  May only be called from the curator.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_accept_curator {
  __kind: 'accept_curator'
  bountyId: number
}

/**
 *  Award bounty to a beneficiary account. The beneficiary will be able to claim the funds after a delay.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to award.
 *  - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_award_bounty {
  __kind: 'award_bounty'
  bountyId: number
  beneficiary: LookupSource
}

/**
 *  Claim the payout from an awarded bounty after payout delay.
 * 
 *  The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to claim.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_claim_bounty {
  __kind: 'claim_bounty'
  bountyId: number
}

/**
 *  Cancel a proposed or active bounty. All the funds will be sent to treasury and
 *  the curator deposit will be unreserved if possible.
 * 
 *  Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 *  - `bounty_id`: Bounty ID to cancel.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_close_bounty {
  __kind: 'close_bounty'
  bountyId: number
}

/**
 *  Extend the expiry time of an active bounty.
 * 
 *  The dispatch origin for this call must be the curator of this bounty.
 * 
 *  - `bounty_id`: Bounty ID to extend.
 *  - `remark`: additional information.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
  __kind: 'extend_bounty_expiry'
  bountyId: number
  remark: Uint8Array
}

export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where `R` length of `reason`.
 *    - encoding and hashing of 'reason'
 *  - DbReads: `Reasons`, `Tips`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_report_awesome {
  __kind: 'report_awesome'
  reason: Uint8Array
  who: AccountId
}

/**
 *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 *  If successful, the original deposit will be unreserved.
 * 
 *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 *  must have been reported by the signing account through `report_awesome` (and not
 *  through `tip_new`).
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  Emits `TipRetracted` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    - Depends on the length of `T::Hash` which is fixed.
 *  - DbReads: `Tips`, `origin account`
 *  - DbWrites: `Reasons`, `Tips`, `origin account`
 *  # </weight>
 */
export interface TipsCall_retract_tip {
  __kind: 'retract_tip'
  hash: Hash
}

/**
 *  Give a tip for something new; no finder's fee will be taken.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *    - `O(T)`: decoding `Tipper` vec of length `T`
 *      `T` is charged as upper bound given by `ContainsLengthBound`.
 *      The actual cost depends on the implementation of `T::Tippers`.
 *    - `O(R)`: hashing and encoding of reason of length `R`
 *  - DbReads: `Tippers`, `Reasons`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_tip_new {
  __kind: 'tip_new'
  reason: Uint8Array
  who: AccountId
  tipValue: bigint
}

/**
 *  Declare a tip value for an already-open tip.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *    account ID.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 *  has started.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`, insert tip and check closing,
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 * 
 *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *    is weighted as if almost full i.e of length `T-1`.
 *  - DbReads: `Tippers`, `Tips`
 *  - DbWrites: `Tips`
 *  # </weight>
 */
export interface TipsCall_tip {
  __kind: 'tip'
  hash: Hash
  tipValue: bigint
}

/**
 *  Close and payout a tip.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  The tip identified by `hash` must have finished its countdown period.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`.
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  - DbReads: `Tips`, `Tippers`, `tip finder`
 *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 *  # </weight>
 */
export interface TipsCall_close_tip {
  __kind: 'close_tip'
  hash: Hash
}

/**
 *  Remove and slash an already-open tip.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  As a result, the finder is slashed and the deposits are lost.
 * 
 *  Emits `TipSlashed` if successful.
 * 
 *  # <weight>
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  # </weight>
 */
export interface TipsCall_slash_tip {
  __kind: 'slash_tip'
  hash: Hash
}

export type ParachainSystemCall = ParachainSystemCall_set_upgrade_block | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 *  Force an already scheduled validation function upgrade to happen on a particular block.
 * 
 *  Note that coordinating this block for the upgrade has to happen independently on the
 *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
 *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
 *  if done wrong.
 */
export interface ParachainSystemCall_set_upgrade_block {
  __kind: 'set_upgrade_block'
  relayChainBlock: RelayChainBlockNumber
}

/**
 *  Set the current validation data.
 * 
 *  This should be invoked exactly once per block. It will panic at the finalization
 *  phase if the call was not invoked.
 * 
 *  The dispatch origin for this call must be `Inherent`
 * 
 *  As a side effect, this function upgrades the current validation function
 *  if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
  __kind: 'set_validation_data'
  data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
  __kind: 'sudo_send_upward_message'
  message: UpwardMessage
}

export interface ParachainSystemCall_authorize_upgrade {
  __kind: 'authorize_upgrade'
  codeHash: Hash
}

export interface ParachainSystemCall_enact_authorized_upgrade {
  __kind: 'enact_authorized_upgrade'
  code: Uint8Array
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_register_candidate | CollatorSelectionCall_leave_intent | CollatorSelectionCall_withdraw_bond

export interface CollatorSelectionCall_set_invulnerables {
  __kind: 'set_invulnerables'
  new: AccountId[]
}

export interface CollatorSelectionCall_set_desired_candidates {
  __kind: 'set_desired_candidates'
  max: number
}

export interface CollatorSelectionCall_set_candidacy_bond {
  __kind: 'set_candidacy_bond'
  bond: BalanceOf
}

export interface CollatorSelectionCall_register_as_candidate {
  __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_register_candidate {
  __kind: 'register_candidate'
  newCandidate: AccountId
}

export interface CollatorSelectionCall_leave_intent {
  __kind: 'leave_intent'
}

export interface CollatorSelectionCall_withdraw_bond {
  __kind: 'withdraw_bond'
}

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: Keys
  proof: Uint8Array
}

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

export type SessionManagerCall = SessionManagerCall_schedule_session_duration

/**
 *  Schedule a new session duration in the specified session index.
 * 
 *  - `start_session`: the session index that the new change become effective.
 *  - `duration`:  new session duration.
 */
export interface SessionManagerCall_schedule_session_duration {
  __kind: 'schedule_session_duration'
  startSession: SessionIndex
  duration: BlockNumber
}

export type XcmpQueueCall = never

export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: MultiLocation
  message: Xcm
}

/**
 *  Teleport some assets from the local chain to some destination chain.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: MultiLocation
  beneficiary: MultiLocation
  assets: MultiAsset[]
  destWeight: Weight
}

/**
 *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 *  a notification XCM.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets'
  dest: MultiLocation
  beneficiary: MultiLocation
  assets: MultiAsset[]
  destWeight: Weight
}

/**
 *  Execute an XCM message from a local, signed, origin.
 * 
 *  An event is deposited indicating whether `msg` could be executed completely or only
 *  partially.
 * 
 *  No more than `max_weight` will be used in its attempted execution. If this is less than the
 *  maximum amount of weight that the message could take to be executed, then no execution
 *  attempt will be made.
 * 
 *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 *  to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
  __kind: 'execute'
  message: Xcm
  maxWeight: Weight
}

export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 *  Service a single overweight message.
 * 
 *  - `origin`: Must pass `ExecuteOverweightOrigin`.
 *  - `index`: The index of the overweight message to service.
 *  - `weight_limit`: The amount of weight that message execution may take.
 * 
 *  Errors:
 *  - `Unknown`: Message of `index` is unknown.
 *  - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 *  Events:
 *  - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: OverweightIndex
  weightLimit: Weight
}

export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset

/**
 *  Transfer native currencies.
 * 
 *  `dest_weight` is the weight for XCM execution on the dest chain, and
 *  it would be charged from the transferred assets. If set below
 *  requirements, the execution may fail and assets wouldn't be
 *  received.
 * 
 *  It's a no-op if any error on local XCM execution or message sending.
 *  Note sending assets out per se doesn't guarantee they would be
 *  received. Receiving depends on if the XCM message could be delivered
 *  by the network, and if the receiving chain would handle
 *  messages correctly.
 */
export interface XTokensCall_transfer {
  __kind: 'transfer'
  currencyId: CurrencyId
  amount: Balance
  dest: MultiLocation
  destWeight: Weight
}

/**
 *  Transfer `MultiAsset`.
 * 
 *  `dest_weight` is the weight for XCM execution on the dest chain, and
 *  it would be charged from the transferred assets. If set below
 *  requirements, the execution may fail and assets wouldn't be
 *  received.
 * 
 *  It's a no-op if any error on local XCM execution or message sending.
 *  Note sending assets out per se doesn't guarantee they would be
 *  received. Receiving depends on if the XCM message could be delivered
 *  by the network, and if the receiving chain would handle
 *  messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
  __kind: 'transfer_multiasset'
  asset: MultiAsset
  dest: MultiLocation
  destWeight: Weight
}

export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 *  Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
  __kind: 'send_as_sovereign'
  dest: MultiLocation
  message: Xcm
}

export type AuthorityCall = AuthorityCall_dispatch_as | AuthorityCall_schedule_dispatch | AuthorityCall_fast_track_scheduled_dispatch | AuthorityCall_delay_scheduled_dispatch | AuthorityCall_cancel_scheduled_dispatch | AuthorityCall_authorize_call | AuthorityCall_remove_authorized_call | AuthorityCall_trigger_call

/**
 *  Dispatch a dispatchable on behalf of other origin
 */
export interface AuthorityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: AsOriginId
  call: CallOf
}

/**
 *  Schedule a dispatchable to be dispatched at later block.
 *  This is the only way to dispatch a call with `DelayedOrigin`.
 */
export interface AuthorityCall_schedule_dispatch {
  __kind: 'schedule_dispatch'
  when: DispatchTime
  priority: Priority
  withDelayedOrigin: boolean
  call: CallOf
}

/**
 *  Fast track a scheduled dispatchable.
 */
export interface AuthorityCall_fast_track_scheduled_dispatch {
  __kind: 'fast_track_scheduled_dispatch'
  initialOrigin: PalletsOrigin
  taskId: ScheduleTaskIndex
  when: DispatchTime
}

/**
 *  Delay a scheduled dispatchable.
 */
export interface AuthorityCall_delay_scheduled_dispatch {
  __kind: 'delay_scheduled_dispatch'
  initialOrigin: PalletsOrigin
  taskId: ScheduleTaskIndex
  additionalDelay: BlockNumber
}

/**
 *  Cancel a scheduled dispatchable.
 */
export interface AuthorityCall_cancel_scheduled_dispatch {
  __kind: 'cancel_scheduled_dispatch'
  initialOrigin: PalletsOrigin
  taskId: ScheduleTaskIndex
}

export interface AuthorityCall_authorize_call {
  __kind: 'authorize_call'
  call: CallOf
  caller: (AccountId | undefined)
}

export interface AuthorityCall_remove_authorized_call {
  __kind: 'remove_authorized_call'
  hash: Hash
}

export interface AuthorityCall_trigger_call {
  __kind: 'trigger_call'
  hash: Hash
  callWeightBound: bigint
}

export type GeneralCouncilCall = GeneralCouncilCall_set_members | GeneralCouncilCall_execute | GeneralCouncilCall_propose | GeneralCouncilCall_vote | GeneralCouncilCall_close | GeneralCouncilCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface GeneralCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId[]
  prime: (AccountId | undefined)
  oldCount: MemberCount
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface GeneralCouncilCall_execute {
  __kind: 'execute'
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface GeneralCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface GeneralCouncilCall_vote {
  __kind: 'vote'
  proposal: Hash
  index: number
  approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface GeneralCouncilCall_close {
  __kind: 'close'
  proposalHash: Hash
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface GeneralCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Hash
}

export type GeneralCouncilMembershipCall = GeneralCouncilMembershipCall_add_member | GeneralCouncilMembershipCall_remove_member | GeneralCouncilMembershipCall_swap_member | GeneralCouncilMembershipCall_reset_members | GeneralCouncilMembershipCall_change_key | GeneralCouncilMembershipCall_set_prime | GeneralCouncilMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface GeneralCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface GeneralCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface GeneralCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId
  add: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface GeneralCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface GeneralCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface GeneralCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface GeneralCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type FinancialCouncilCall = FinancialCouncilCall_set_members | FinancialCouncilCall_execute | FinancialCouncilCall_propose | FinancialCouncilCall_vote | FinancialCouncilCall_close | FinancialCouncilCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface FinancialCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId[]
  prime: (AccountId | undefined)
  oldCount: MemberCount
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface FinancialCouncilCall_execute {
  __kind: 'execute'
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface FinancialCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface FinancialCouncilCall_vote {
  __kind: 'vote'
  proposal: Hash
  index: number
  approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface FinancialCouncilCall_close {
  __kind: 'close'
  proposalHash: Hash
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface FinancialCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Hash
}

export type FinancialCouncilMembershipCall = FinancialCouncilMembershipCall_add_member | FinancialCouncilMembershipCall_remove_member | FinancialCouncilMembershipCall_swap_member | FinancialCouncilMembershipCall_reset_members | FinancialCouncilMembershipCall_change_key | FinancialCouncilMembershipCall_set_prime | FinancialCouncilMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface FinancialCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface FinancialCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface FinancialCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId
  add: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface FinancialCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface FinancialCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface FinancialCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface FinancialCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type HomaCouncilCall = HomaCouncilCall_set_members | HomaCouncilCall_execute | HomaCouncilCall_propose | HomaCouncilCall_vote | HomaCouncilCall_close | HomaCouncilCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface HomaCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId[]
  prime: (AccountId | undefined)
  oldCount: MemberCount
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface HomaCouncilCall_execute {
  __kind: 'execute'
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface HomaCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface HomaCouncilCall_vote {
  __kind: 'vote'
  proposal: Hash
  index: number
  approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface HomaCouncilCall_close {
  __kind: 'close'
  proposalHash: Hash
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface HomaCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Hash
}

export type HomaCouncilMembershipCall = HomaCouncilMembershipCall_add_member | HomaCouncilMembershipCall_remove_member | HomaCouncilMembershipCall_swap_member | HomaCouncilMembershipCall_reset_members | HomaCouncilMembershipCall_change_key | HomaCouncilMembershipCall_set_prime | HomaCouncilMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface HomaCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface HomaCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface HomaCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId
  add: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface HomaCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface HomaCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface HomaCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface HomaCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId[]
  prime: (AccountId | undefined)
  oldCount: MemberCount
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: Hash
  index: number
  approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface TechnicalCommitteeCall_close {
  __kind: 'close'
  proposalHash: Hash
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Hash
}

export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_swap_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId
  add: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  Weight: `O(p)`
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: Hash
  value: bigint
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
  secondsUpperBound: number
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to vote for.
 *  - `vote`: The vote configuration.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: AccountVote
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: ReferendumIndex
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: Hash
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: Hash
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: Hash
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: Hash
  votingPeriod: BlockNumber
  delay: BlockNumber
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: Hash
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: ReferendumIndex
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: AccountId
  conviction: Conviction
  balance: BalanceOf
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
  __kind: 'note_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
  __kind: 'note_imminent_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: Hash
  proposalLenUpperBound: number
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
  __kind: 'unlock'
  target: AccountId
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote'
  index: ReferendumIndex
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote'
  target: AccountId
  index: ReferendumIndex
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: Hash
  index: ReferendumIndex
}

/**
 *  Permanently place a proposal into the blacklist. This prevents it from ever being
 *  proposed again.
 * 
 *  If called on a queued public or external proposal, then this will result in it being
 *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *  then it will be cancelled.
 * 
 *  The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 *  - `proposal_hash`: The proposal hash to blacklist permanently.
 *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *  cancelled.
 * 
 *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *    reasonable value).
 */
export interface DemocracyCall_blacklist {
  __kind: 'blacklist'
  proposalHash: Hash
  maybeRefIndex: (ReferendumIndex | undefined)
}

/**
 *  Remove a proposal.
 * 
 *  The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 *  - `prop_index`: The index of the proposal to cancel.
 * 
 *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal'
  propIndex: number
}

export type AcalaOracleCall = AcalaOracleCall_feed_values

/**
 *  Feed the external value.
 * 
 *  Require authorized operator.
 */
export interface AcalaOracleCall_feed_values {
  __kind: 'feed_values'
  values: [OracleKey, OracleValue][]
}

export type OperatorMembershipAcalaCall = OperatorMembershipAcalaCall_add_member | OperatorMembershipAcalaCall_remove_member | OperatorMembershipAcalaCall_swap_member | OperatorMembershipAcalaCall_reset_members | OperatorMembershipAcalaCall_change_key | OperatorMembershipAcalaCall_set_prime | OperatorMembershipAcalaCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface OperatorMembershipAcalaCall_add_member {
  __kind: 'add_member'
  who: AccountId
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface OperatorMembershipAcalaCall_remove_member {
  __kind: 'remove_member'
  who: AccountId
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface OperatorMembershipAcalaCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId
  add: AccountId
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface OperatorMembershipAcalaCall_reset_members {
  __kind: 'reset_members'
  members: AccountId[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface OperatorMembershipAcalaCall_change_key {
  __kind: 'change_key'
  new: AccountId
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface OperatorMembershipAcalaCall_set_prime {
  __kind: 'set_prime'
  who: AccountId
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface OperatorMembershipAcalaCall_clear_prime {
  __kind: 'clear_prime'
}

export type AuctionCall = AuctionCall_bid

/**
 *  Bid an auction.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface AuctionCall_bid {
  __kind: 'bid'
  id: AuctionId
  value: bigint
}

export type RewardsCall = never

export type PricesCall = PricesCall_lock_price | PricesCall_unlock_price

/**
 *  Lock the price and feed it to system.
 * 
 *  The dispatch origin of this call must be `LockOrigin`.
 * 
 *  - `currency_id`: currency type.
 */
export interface PricesCall_lock_price {
  __kind: 'lock_price'
  currencyId: CurrencyId
}

/**
 *  Unlock the price and get the price from `PriceProvider` again
 * 
 *  The dispatch origin of this call must be `LockOrigin`.
 * 
 *  - `currency_id`: currency type.
 */
export interface PricesCall_unlock_price {
  __kind: 'unlock_price'
  currencyId: CurrencyId
}

export type DexCall = DexCall_swap_with_exact_supply | DexCall_swap_with_exact_target | DexCall_add_liquidity | DexCall_add_provision | DexCall_claim_dex_share | DexCall_remove_liquidity | DexCall_list_provisioning | DexCall_update_provisioning_parameters | DexCall_end_provisioning | DexCall_enable_trading_pair | DexCall_disable_trading_pair

/**
 *  Trading with DEX, swap with exact supply amount
 * 
 *  - `path`: trading path.
 *  - `supply_amount`: exact supply amount.
 *  - `min_target_amount`: acceptable minimum target amount.
 */
export interface DexCall_swap_with_exact_supply {
  __kind: 'swap_with_exact_supply'
  path: CurrencyId[]
  supplyAmount: bigint
  minTargetAmount: bigint
}

/**
 *  Trading with DEX, swap with exact target amount
 * 
 *  - `path`: trading path.
 *  - `target_amount`: exact target amount.
 *  - `max_supply_amount`: acceptable maximum supply amount.
 */
export interface DexCall_swap_with_exact_target {
  __kind: 'swap_with_exact_target'
  path: CurrencyId[]
  targetAmount: bigint
  maxSupplyAmount: bigint
}

/**
 *  Add liquidity to Enabled trading pair.
 *  - Add provision success will record the provision, issue shares to caller in the initial
 *    exchange rate when trading pair convert to Enabled.
 * 
 *  - `currency_id_a`: currency id A.
 *  - `currency_id_b`: currency id B.
 *  - `max_amount_a`: maximum amount of currency_id_a is allowed to inject to liquidity
 *    pool.
 *  - `max_amount_b`: maximum amount of currency_id_b is allowed to inject to liquidity
 *    pool.
 *  - `min_share_increment`: minimum acceptable share amount.
 *  - `stake_increment_share`: indicates whether to stake increased dex share to earn
 *    incentives
 */
export interface DexCall_add_liquidity {
  __kind: 'add_liquidity'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  maxAmountA: bigint
  maxAmountB: bigint
  minShareIncrement: bigint
  stakeIncrementShare: boolean
}

/**
 *  Add provision to Provisioning trading pair.
 *  If succecced, will record the provision, but shares issuing will happen after the
 *  trading pair convert to Enabled status.
 * 
 *  - `currency_id_a`: currency id A.
 *  - `currency_id_b`: currency id B.
 *  - `amount_a`: provision amount for currency_id_a.
 *  - `amount_b`: provision amount for currency_id_b.
 */
export interface DexCall_add_provision {
  __kind: 'add_provision'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  amountA: bigint
  amountB: bigint
}

/**
 *  Claim dex share for founders who have participated in trading pair provision.
 * 
 *  - `owner`: founder account.
 *  - `currency_id_a`: currency id A.
 *  - `currency_id_b`: currency id B.
 */
export interface DexCall_claim_dex_share {
  __kind: 'claim_dex_share'
  owner: AccountId
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 *  Remove liquidity from specific liquidity pool in the form of burning
 *  shares, and withdrawing currencies in trading pairs from liquidity
 *  pool in proportion, and withdraw liquidity incentive interest.
 * 
 *  - `currency_id_a`: currency id A.
 *  - `currency_id_b`: currency id B.
 *  - `remove_share`: liquidity amount to remove.
 *  - `min_withdrawn_a`: minimum acceptable withrawn for currency_id_a.
 *  - `min_withdrawn_b`: minimum acceptable withrawn for currency_id_b.
 *  - `by_unstake`: this flag indicates whether to withdraw share which is on incentives.
 */
export interface DexCall_remove_liquidity {
  __kind: 'remove_liquidity'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  removeShare: bigint
  minWithdrawnA: bigint
  minWithdrawnB: bigint
  byUnstake: boolean
}

/**
 *  List a new provisioning trading pair.
 */
export interface DexCall_list_provisioning {
  __kind: 'list_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  minContributionA: Balance
  minContributionB: Balance
  targetProvisionA: Balance
  targetProvisionB: Balance
  notBefore: BlockNumber
}

/**
 *  List a new trading pair, trading pair will become Enabled status
 *  after provision process.
 */
export interface DexCall_update_provisioning_parameters {
  __kind: 'update_provisioning_parameters'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  minContributionA: Balance
  minContributionB: Balance
  targetProvisionA: Balance
  targetProvisionB: Balance
  notBefore: BlockNumber
}

/**
 *  Enable a Provisioning trading pair if meet the condition.
 */
export interface DexCall_end_provisioning {
  __kind: 'end_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 *  Enable a trading pair
 *  if the status of trading pair is `Disabled`, or `Provisioning` without any accumulated
 *  provision, enable it directly.
 */
export interface DexCall_enable_trading_pair {
  __kind: 'enable_trading_pair'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 *  Disable a `Enabled` trading pair.
 */
export interface DexCall_disable_trading_pair {
  __kind: 'disable_trading_pair'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export type AuctionManagerCall = AuctionManagerCall_cancel

/**
 *  Cancel active auction after system shutdown
 * 
 *  The dispatch origin of this call must be _None_.
 */
export interface AuctionManagerCall_cancel {
  __kind: 'cancel'
  id: AuctionId
}

export type LoansCall = never

export type HonzonCall = HonzonCall_adjust_loan | HonzonCall_close_loan_has_debit_by_dex | HonzonCall_transfer_loan_from | HonzonCall_authorize | HonzonCall_unauthorize | HonzonCall_unauthorize_all

/**
 *  Adjust the loans of `currency_id` by specific
 *  `collateral_adjustment` and `debit_adjustment`
 * 
 *  - `currency_id`: collateral currency id.
 *  - `collateral_adjustment`: signed amount, positive means to deposit collateral currency
 *    into CDP, negative means withdraw collateral currency from CDP.
 *  - `debit_adjustment`: signed amount, positive means to issue some amount of stablecoin
 *    to caller according to the debit adjustment, negative means caller will payback some
 *    amount of stablecoin to CDP according to to the debit adjustment.
 */
export interface HonzonCall_adjust_loan {
  __kind: 'adjust_loan'
  currencyId: CurrencyId
  collateralAdjustment: Amount
  debitAdjustment: Amount
}

/**
 *  Close caller's CDP which has debit but still in safe by use collateral to swap
 *  stable token on DEX for clearing debit.
 * 
 *  - `currency_id`: collateral currency id.
 *  - `max_collateral_amount`: the max collateral amount which is used to swap enough
 *  	stable token to clear debit.
 *  - `maybe_path`: the custom swap path.
 */
export interface HonzonCall_close_loan_has_debit_by_dex {
  __kind: 'close_loan_has_debit_by_dex'
  currencyId: CurrencyId
  maxCollateralAmount: Balance
  maybePath: (CurrencyId[] | undefined)
}

/**
 *  Transfer the whole CDP of `from` under `currency_id` to caller's CDP
 *  under the same `currency_id`, caller must have the authorization of
 *  `from` for the specific collateral type
 * 
 *  - `currency_id`: collateral currency id.
 *  - `from`: authorizer account
 */
export interface HonzonCall_transfer_loan_from {
  __kind: 'transfer_loan_from'
  currencyId: CurrencyId
  from: LookupSource
}

/**
 *  Authorize `to` to manipulate the loan under `currency_id`
 * 
 *  - `currency_id`: collateral currency id.
 *  - `to`: authorizee account
 */
export interface HonzonCall_authorize {
  __kind: 'authorize'
  currencyId: CurrencyId
  to: LookupSource
}

/**
 *  Cancel the authorization for `to` under `currency_id`
 * 
 *  - `currency_id`: collateral currency id.
 *  - `to`: authorizee account
 */
export interface HonzonCall_unauthorize {
  __kind: 'unauthorize'
  currencyId: CurrencyId
  to: LookupSource
}

/**
 *  Cancel all authorization of caller
 */
export interface HonzonCall_unauthorize_all {
  __kind: 'unauthorize_all'
}

export type CdpTreasuryCall = CdpTreasuryCall_extract_surplus_to_treasury | CdpTreasuryCall_auction_collateral | CdpTreasuryCall_set_expected_collateral_auction_size

export interface CdpTreasuryCall_extract_surplus_to_treasury {
  __kind: 'extract_surplus_to_treasury'
  amount: Balance
}

export interface CdpTreasuryCall_auction_collateral {
  __kind: 'auction_collateral'
  currencyId: CurrencyId
  amount: Balance
  target: Balance
  splited: boolean
}

/**
 *  Update parameters related to collateral auction under specific
 *  collateral type
 * 
 *  The dispatch origin of this call must be `UpdateOrigin`.
 * 
 *  - `currency_id`: collateral type
 *  - `amount`: expected size of per lot collateral auction
 */
export interface CdpTreasuryCall_set_expected_collateral_auction_size {
  __kind: 'set_expected_collateral_auction_size'
  currencyId: CurrencyId
  size: Balance
}

export type CdpEngineCall = CdpEngineCall_liquidate | CdpEngineCall_settle | CdpEngineCall_set_global_params | CdpEngineCall_set_collateral_params

/**
 *  Liquidate unsafe CDP
 * 
 *  The dispatch origin of this call must be _None_.
 * 
 *  - `currency_id`: CDP's collateral type.
 *  - `who`: CDP's owner.
 */
export interface CdpEngineCall_liquidate {
  __kind: 'liquidate'
  currencyId: CurrencyId
  who: LookupSource
}

/**
 *  Settle CDP has debit after system shutdown
 * 
 *  The dispatch origin of this call must be _None_.
 * 
 *  - `currency_id`: CDP's collateral type.
 *  - `who`: CDP's owner.
 */
export interface CdpEngineCall_settle {
  __kind: 'settle'
  currencyId: CurrencyId
  who: LookupSource
}

/**
 *  Update global parameters related to risk management of CDP
 * 
 *  The dispatch origin of this call must be `UpdateOrigin`.
 * 
 *  - `global_interest_rate_per_sec`: global interest rate per sec.
 */
export interface CdpEngineCall_set_global_params {
  __kind: 'set_global_params'
  globalInterestRatePerSec: Rate
}

/**
 *  Update parameters related to risk management of CDP under specific
 *  collateral type
 * 
 *  The dispatch origin of this call must be `UpdateOrigin`.
 * 
 *  - `currency_id`: collateral type.
 *  - `interest_rate_per_sec`: extra interest rate per sec, `None` means do not update,
 *    `Some(None)` means update it to `None`.
 *  - `liquidation_ratio`: liquidation ratio, `None` means do not update, `Some(None)` means
 *    update it to `None`.
 *  - `liquidation_penalty`: liquidation penalty, `None` means do not update, `Some(None)`
 *    means update it to `None`.
 *  - `required_collateral_ratio`: required collateral ratio, `None` means do not update,
 *    `Some(None)` means update it to `None`.
 *  - `maximum_total_debit_value`: maximum total debit value.
 */
export interface CdpEngineCall_set_collateral_params {
  __kind: 'set_collateral_params'
  currencyId: CurrencyId
  interestRatePerSec: ChangeOptionRate
  liquidationRatio: ChangeOptionRatio
  liquidationPenalty: ChangeOptionRate
  requiredCollateralRatio: ChangeOptionRatio
  maximumTotalDebitValue: ChangeBalance
}

export type EmergencyShutdownCall = EmergencyShutdownCall_emergency_shutdown | EmergencyShutdownCall_open_collateral_refund | EmergencyShutdownCall_refund_collaterals

/**
 *  Start emergency shutdown
 * 
 *  The dispatch origin of this call must be `ShutdownOrigin`.
 */
export interface EmergencyShutdownCall_emergency_shutdown {
  __kind: 'emergency_shutdown'
}

/**
 *  Open final redemption if settlement is completed.
 * 
 *  The dispatch origin of this call must be `ShutdownOrigin`.
 */
export interface EmergencyShutdownCall_open_collateral_refund {
  __kind: 'open_collateral_refund'
}

/**
 *  Refund a basket of remaining collateral assets to caller
 * 
 *  - `amount`: stable currency amount used to refund.
 */
export interface EmergencyShutdownCall_refund_collaterals {
  __kind: 'refund_collaterals'
  amount: bigint
}

export type HomaLiteCall = HomaLiteCall_mint | HomaLiteCall_set_total_staking_currency | HomaLiteCall_adjust_total_staking_currency | HomaLiteCall_set_minting_cap | HomaLiteCall_set_xcm_dest_weight

/**
 *  Mint some Liquid currency, by locking up the given amount of Staking currency.
 *  The exchange rate is calculated using the ratio of the total amount of the staking and
 *  liquid currency. A portion is reducted (defined as T::MaxRewardPerEra) to make up for
 *  the fact that staking is only effective from the next era on (on the relaychain).
 * 
 *  Parameters:
 *  - `amount`: The amount of Staking currency to be exchanged.
 */
export interface HomaLiteCall_mint {
  __kind: 'mint'
  amount: Balance
}

/**
 *  Sets the total amount of the Staking currency that are currently on the relaychain.
 *  Requires `T::GovernanceOrigin`
 * 
 *  Parameters:
 *  - `staking_total`: The current amount of the Staking currency. Used to calculate
 *    conversion rate.
 */
export interface HomaLiteCall_set_total_staking_currency {
  __kind: 'set_total_staking_currency'
  stakingTotal: Balance
}

/**
 *  Adjusts the total_staking_currency by the given difference.
 *  Requires `T::GovernanceOrigin`
 * 
 *  Parameters:
 *  - `adjustment`: The difference in amount the total_staking_currency should be adjusted
 *    by.
 */
export interface HomaLiteCall_adjust_total_staking_currency {
  __kind: 'adjust_total_staking_currency'
  byAmount: AmountOf
}

/**
 *  Updates the cap for how much Staking currency can be used to Mint liquid currency.
 *  Requires `T::GovernanceOrigin`
 * 
 *  Parameters:
 *  - `new_cap`: The new cap for staking currency.
 */
export interface HomaLiteCall_set_minting_cap {
  __kind: 'set_minting_cap'
  newCap: Balance
}

/**
 *  Sets the xcm_dest_weight for XCM transfers.
 *  Requires `T::GovernanceOrigin`
 * 
 *  Parameters:
 *  - `xcm_dest_weight`: The new weight for XCM transfers.
 */
export interface HomaLiteCall_set_xcm_dest_weight {
  __kind: 'set_xcm_dest_weight'
  xcmDestWeight: Weight
}

export type IncentivesCall = IncentivesCall_deposit_dex_share | IncentivesCall_withdraw_dex_share | IncentivesCall_claim_rewards | IncentivesCall_update_incentive_rewards | IncentivesCall_update_dex_saving_rewards | IncentivesCall_update_claim_reward_deduction_rates

/**
 *  Stake LP token to add shares of Pool::Dex
 * 
 *  The dispatch origin of this call must be `Signed` by the transactor.
 * 
 *  - `lp_currency_id`: LP token type
 *  - `amount`: amount to stake
 */
export interface IncentivesCall_deposit_dex_share {
  __kind: 'deposit_dex_share'
  lpCurrencyId: CurrencyId
  amount: Balance
}

/**
 *  Unstake LP token to remove shares of Pool::Dex
 * 
 *  The dispatch origin of this call must be `Signed` by the transactor.
 * 
 *  - `lp_currency_id`: LP token type
 *  - `amount`: amount to unstake
 */
export interface IncentivesCall_withdraw_dex_share {
  __kind: 'withdraw_dex_share'
  lpCurrencyId: CurrencyId
  amount: Balance
}

/**
 *  Claim all avalible multi currencies rewards for specific PoolId.
 * 
 *  The dispatch origin of this call must be `Signed` by the transactor.
 * 
 *  - `pool_id`: pool type
 */
export interface IncentivesCall_claim_rewards {
  __kind: 'claim_rewards'
  poolId: PoolId
}

/**
 *  Update incentive reward amount for specific PoolId
 * 
 *  The dispatch origin of this call must be `UpdateOrigin`.
 * 
 *  - `updates`: Vec<(PoolId, Vec<(RewardCurrencyId, FixedAmountPerPeriod)>)>
 */
export interface IncentivesCall_update_incentive_rewards {
  __kind: 'update_incentive_rewards'
  updates: [PoolId, [CurrencyId, Balance][]][]
}

/**
 *  Update DEX saving reward rate for specific PoolId
 * 
 *  The dispatch origin of this call must be `UpdateOrigin`.
 * 
 *  - `updates`: Vec<(PoolId, Rate)>
 */
export interface IncentivesCall_update_dex_saving_rewards {
  __kind: 'update_dex_saving_rewards'
  updates: [PoolId, Rate][]
}

/**
 *  Update claim rewards deduction rates for all rewards currencies of specific PoolId
 * 
 *  The dispatch origin of this call must be `UpdateOrigin`.
 * 
 *  - `updates`: Vec<(PoolId, DecutionRate>)>
 */
export interface IncentivesCall_update_claim_reward_deduction_rates {
  __kind: 'update_claim_reward_deduction_rates'
  updates: [PoolId, Rate][]
}

export type NFTCall = NFTCall_create_class | NFTCall_mint | NFTCall_transfer | NFTCall_burn | NFTCall_burn_with_remark | NFTCall_destroy_class | NFTCall_update_class_properties

/**
 *  Create NFT class, tokens belong to the class.
 * 
 *  - `metadata`: external metadata
 *  - `properties`: class property, include `Transferable` `Burnable`
 */
export interface NFTCall_create_class {
  __kind: 'create_class'
  metadata: CID
  properties: number
  attributes: Attributes
}

/**
 *  Mint NFT token
 * 
 *  - `to`: the token owner's account
 *  - `class_id`: token belong to the class id
 *  - `metadata`: external metadata
 *  - `quantity`: token quantity
 */
export interface NFTCall_mint {
  __kind: 'mint'
  to: LookupSource
  classId: ClassIdOf
  metadata: CID
  attributes: Attributes
  quantity: number
}

/**
 *  Transfer NFT token to another account
 * 
 *  - `to`: the token owner's account
 *  - `token`: (class_id, token_id)
 */
export interface NFTCall_transfer {
  __kind: 'transfer'
  to: LookupSource
  token: [ClassIdOf, TokenIdOf]
}

/**
 *  Burn NFT token
 * 
 *  - `token`: (class_id, token_id)
 */
export interface NFTCall_burn {
  __kind: 'burn'
  token: [ClassIdOf, TokenIdOf]
}

/**
 *  Burn NFT token
 * 
 *  - `token`: (class_id, token_id)
 *  - `remark`: Vec<u8>
 */
export interface NFTCall_burn_with_remark {
  __kind: 'burn_with_remark'
  token: [ClassIdOf, TokenIdOf]
  remark: Uint8Array
}

/**
 *  Destroy NFT class, remove dest from proxy, and send all the free
 *  balance to dest
 * 
 *  - `class_id`: The class ID to destroy
 *  - `dest`: The proxy account that will receive free balance
 */
export interface NFTCall_destroy_class {
  __kind: 'destroy_class'
  classId: ClassIdOf
  dest: LookupSource
}

/**
 *  Update NFT class properties. The current class properties must contains
 *  ClassPropertiesMutable.
 * 
 *  - `class_id`: The class ID to update
 *  - `properties`: The new properties
 */
export interface NFTCall_update_class_properties {
  __kind: 'update_class_properties'
  classId: ClassIdOf
  properties: number
}

export type EVMCall = EVMCall_eth_call | EVMCall_call | EVMCall_scheduled_call | EVMCall_create | EVMCall_create2 | EVMCall_create_network_contract | EVMCall_create_predeploy_contract | EVMCall_transfer_maintainer | EVMCall_deploy | EVMCall_deploy_free | EVMCall_enable_contract_development | EVMCall_disable_contract_development | EVMCall_set_code | EVMCall_selfdestruct

export interface EVMCall_eth_call {
  __kind: 'eth_call'
  action: TransactionAction
  input: Uint8Array
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
  validUntil: BlockNumber
}

/**
 *  Issue an EVM call operation. This is similar to a message call
 *  transaction in Ethereum.
 * 
 *  - `target`: the contract address to call
 *  - `input`: the data supplied for the call
 *  - `value`: the amount sent for payable calls
 *  - `gas_limit`: the maximum gas the call can use
 *  - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_call {
  __kind: 'call'
  target: EvmAddress
  input: Uint8Array
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
}

/**
 *  Issue an EVM call operation on a scheduled contract call, and
 *  refund the unused gas reserved when the call was scheduled.
 * 
 *  - `from`: the address the scheduled call originates from
 *  - `target`: the contract address to call
 *  - `input`: the data supplied for the call
 *  - `value`: the amount sent for payable calls
 *  - `gas_limit`: the maximum gas the call can use
 *  - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_scheduled_call {
  __kind: 'scheduled_call'
  from: EvmAddress
  target: EvmAddress
  input: Uint8Array
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
}

/**
 *  Issue an EVM create operation. This is similar to a contract
 *  creation transaction in Ethereum.
 * 
 *  - `init`: the data supplied for the contract's constructor
 *  - `value`: the amount sent to the contract upon creation
 *  - `gas_limit`: the maximum gas the call can use
 *  - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create {
  __kind: 'create'
  init: Uint8Array
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
}

/**
 *  Issue an EVM create2 operation.
 * 
 *  - `target`: the contract address to call
 *  - `init`: the data supplied for the contract's constructor
 *  - `salt`: used for generating the new contract's address
 *  - `value`: the amount sent for payable calls
 *  - `gas_limit`: the maximum gas the call can use
 *  - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create2 {
  __kind: 'create2'
  init: Uint8Array
  salt: H256
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
}

/**
 *  Issue an EVM create operation. The next available system contract
 *  address will be used as created contract address.
 * 
 *  - `init`: the data supplied for the contract's constructor
 *  - `value`: the amount sent for payable calls
 *  - `gas_limit`: the maximum gas the call can use
 *  - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create_network_contract {
  __kind: 'create_network_contract'
  init: Uint8Array
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
}

/**
 *  Issue an EVM create operation. The address specified
 *  will be used as created contract address.
 * 
 *  - `target`: the address specified by the contract
 *  - `init`: the data supplied for the contract's constructor
 *  - `value`: the amount sent for payable calls
 *  - `gas_limit`: the maximum gas the call can use
 *  - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create_predeploy_contract {
  __kind: 'create_predeploy_contract'
  target: EvmAddress
  init: Uint8Array
  value: BalanceOf
  gasLimit: bigint
  storageLimit: number
}

/**
 *  Transfers Contract maintainership to a new EVM Address.
 * 
 *  - `contract`: the contract whose maintainership is being transferred, the caller must be
 *    the contract's maintainer
 *  - `new_maintainer`: the address of the new maintainer
 */
export interface EVMCall_transfer_maintainer {
  __kind: 'transfer_maintainer'
  contract: EvmAddress
  newMaintainer: EvmAddress
}

/**
 *  Mark a given contract as deployed.
 * 
 *  - `contract`: The contract to mark as deployed, the caller must the contract's
 *    maintainer
 */
export interface EVMCall_deploy {
  __kind: 'deploy'
  contract: EvmAddress
}

/**
 *  Mark a given contract as deployed without paying the deployment fee
 * 
 *  - `contract`: The contract to mark as deployed, the caller must be the contract's
 *    maintainer.
 */
export interface EVMCall_deploy_free {
  __kind: 'deploy_free'
  contract: EvmAddress
}

/**
 *  Mark the caller's address to allow contract development.
 *  This allows the address to interact with non-deployed contracts.
 */
export interface EVMCall_enable_contract_development {
  __kind: 'enable_contract_development'
}

/**
 *  Mark the caller's address to disable contract development.
 *  This disallows the address to interact with non-deployed contracts.
 */
export interface EVMCall_disable_contract_development {
  __kind: 'disable_contract_development'
}

/**
 *  Set the code of a contract at a given address.
 * 
 *  - `contract`: The contract whose code is being set, must not be marked as deployed
 *  - `code`: The new ABI bundle for the contract
 */
export interface EVMCall_set_code {
  __kind: 'set_code'
  contract: EvmAddress
  code: Uint8Array
}

/**
 *  Remove a contract at a given address.
 * 
 *  - `contract`: The contract to remove, must not be marked as deployed
 */
export interface EVMCall_selfdestruct {
  __kind: 'selfdestruct'
  contract: EvmAddress
}

export type EvmAccountsCall = EvmAccountsCall_claim_account | EvmAccountsCall_claim_default_account

/**
 *  Claim account mapping between Substrate accounts and EVM accounts.
 *  Ensure eth_address has not been mapped.
 * 
 *  - `eth_address`: The address to bind to the caller's account
 *  - `eth_signature`: A signature generated by the address to prove ownership
 */
export interface EvmAccountsCall_claim_account {
  __kind: 'claim_account'
  ethAddress: EvmAddress
  ethSignature: EcdsaSignature
}

/**
 *  Claim account mapping between Substrate accounts and a generated EVM
 *  address based off of those accounts.
 *  Ensure eth_address has not been mapped
 */
export interface EvmAccountsCall_claim_default_account {
  __kind: 'claim_default_account'
}

export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo {
  __kind: 'sudo'
  call: Type_54
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 *  This function does not check the weight of the call, and instead allows the
 *  Sudo user to specify the weight of the call.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - The weight of this call is defined by the caller.
 *  # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight'
  call: Type_54
  weight: Weight
}

/**
 *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface SudoCall_set_key {
  __kind: 'set_key'
  new: LookupSource
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *  a given account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
  __kind: 'sudo_as'
  who: LookupSource
  call: Type_54
}

export type Perbill = number

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}

export type StorageKey = Uint8Array

export type StorageData = Uint8Array

export type KeyValue = [StorageKey, StorageData]

export type Key = Uint8Array

export type BlockNumber = number

export type Period = [BlockNumber, number]

export type Priority = number

export type Type_54 = Type_54_System | Type_54_Timestamp | Type_54_Scheduler | Type_54_Utility | Type_54_Multisig | Type_54_Proxy | Type_54_TransactionPause | Type_54_Balances | Type_54_Currencies | Type_54_Vesting | Type_54_TransactionPayment | Type_54_Treasury | Type_54_Bounties | Type_54_Tips | Type_54_ParachainSystem | Type_54_Authorship | Type_54_CollatorSelection | Type_54_Session | Type_54_SessionManager | Type_54_XcmpQueue | Type_54_PolkadotXcm | Type_54_DmpQueue | Type_54_XTokens | Type_54_OrmlXcm | Type_54_Authority | Type_54_GeneralCouncil | Type_54_GeneralCouncilMembership | Type_54_FinancialCouncil | Type_54_FinancialCouncilMembership | Type_54_HomaCouncil | Type_54_HomaCouncilMembership | Type_54_TechnicalCommittee | Type_54_TechnicalCommitteeMembership | Type_54_Democracy | Type_54_AcalaOracle | Type_54_OperatorMembershipAcala | Type_54_Auction | Type_54_Rewards | Type_54_Prices | Type_54_Dex | Type_54_AuctionManager | Type_54_Loans | Type_54_Honzon | Type_54_CdpTreasury | Type_54_CdpEngine | Type_54_EmergencyShutdown | Type_54_HomaLite | Type_54_Incentives | Type_54_NFT | Type_54_EVM | Type_54_EvmAccounts | Type_54_Sudo

export interface Type_54_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_54_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_54_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Type_54_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Type_54_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Type_54_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface Type_54_TransactionPause {
  __kind: 'TransactionPause'
  value: TransactionPauseCall
}

export interface Type_54_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_54_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Type_54_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Type_54_TransactionPayment {
  __kind: 'TransactionPayment'
  value: TransactionPaymentCall
}

export interface Type_54_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_54_Bounties {
  __kind: 'Bounties'
  value: BountiesCall
}

export interface Type_54_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Type_54_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Type_54_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_54_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface Type_54_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_54_SessionManager {
  __kind: 'SessionManager'
  value: SessionManagerCall
}

export interface Type_54_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Type_54_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Type_54_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Type_54_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Type_54_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface Type_54_Authority {
  __kind: 'Authority'
  value: AuthorityCall
}

export interface Type_54_GeneralCouncil {
  __kind: 'GeneralCouncil'
  value: GeneralCouncilCall
}

export interface Type_54_GeneralCouncilMembership {
  __kind: 'GeneralCouncilMembership'
  value: GeneralCouncilMembershipCall
}

export interface Type_54_FinancialCouncil {
  __kind: 'FinancialCouncil'
  value: FinancialCouncilCall
}

export interface Type_54_FinancialCouncilMembership {
  __kind: 'FinancialCouncilMembership'
  value: FinancialCouncilMembershipCall
}

export interface Type_54_HomaCouncil {
  __kind: 'HomaCouncil'
  value: HomaCouncilCall
}

export interface Type_54_HomaCouncilMembership {
  __kind: 'HomaCouncilMembership'
  value: HomaCouncilMembershipCall
}

export interface Type_54_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_54_TechnicalCommitteeMembership {
  __kind: 'TechnicalCommitteeMembership'
  value: TechnicalCommitteeMembershipCall
}

export interface Type_54_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_54_AcalaOracle {
  __kind: 'AcalaOracle'
  value: AcalaOracleCall
}

export interface Type_54_OperatorMembershipAcala {
  __kind: 'OperatorMembershipAcala'
  value: OperatorMembershipAcalaCall
}

export interface Type_54_Auction {
  __kind: 'Auction'
  value: AuctionCall
}

export interface Type_54_Rewards {
  __kind: 'Rewards'
  value: RewardsCall
}

export interface Type_54_Prices {
  __kind: 'Prices'
  value: PricesCall
}

export interface Type_54_Dex {
  __kind: 'Dex'
  value: DexCall
}

export interface Type_54_AuctionManager {
  __kind: 'AuctionManager'
  value: AuctionManagerCall
}

export interface Type_54_Loans {
  __kind: 'Loans'
  value: LoansCall
}

export interface Type_54_Honzon {
  __kind: 'Honzon'
  value: HonzonCall
}

export interface Type_54_CdpTreasury {
  __kind: 'CdpTreasury'
  value: CdpTreasuryCall
}

export interface Type_54_CdpEngine {
  __kind: 'CdpEngine'
  value: CdpEngineCall
}

export interface Type_54_EmergencyShutdown {
  __kind: 'EmergencyShutdown'
  value: EmergencyShutdownCall
}

export interface Type_54_HomaLite {
  __kind: 'HomaLite'
  value: HomaLiteCall
}

export interface Type_54_Incentives {
  __kind: 'Incentives'
  value: IncentivesCall
}

export interface Type_54_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface Type_54_EVM {
  __kind: 'EVM'
  value: EVMCall
}

export interface Type_54_EvmAccounts {
  __kind: 'EvmAccounts'
  value: EvmAccountsCall
}

export interface Type_54_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export type AccountId = Uint8Array

export interface Timepoint {
  height: BlockNumber
  index: number
}

export type OpaqueCall = Uint8Array

export type Weight = bigint

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_Auction | ProxyType_Swap | ProxyType_Loan

export interface ProxyType_Any {
  __kind: 'Any'
}

export interface ProxyType_CancelProxy {
  __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
  __kind: 'Governance'
}

export interface ProxyType_Auction {
  __kind: 'Auction'
}

export interface ProxyType_Swap {
  __kind: 'Swap'
}

export interface ProxyType_Loan {
  __kind: 'Loan'
}

export type CallHashOf = Uint8Array

export type LookupSource = LookupSource_Id | LookupSource_Index | LookupSource_Raw | LookupSource_Address32 | LookupSource_Address20

export interface LookupSource_Id {
  __kind: 'Id'
  value: AccountId
}

export interface LookupSource_Index {
  __kind: 'Index'
  value: number
}

export interface LookupSource_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface LookupSource_Address32 {
  __kind: 'Address32'
  value: H256
}

export interface LookupSource_Address20 {
  __kind: 'Address20'
  value: H160
}

export type CurrencyIdOf = CurrencyIdOf_Token | CurrencyIdOf_DEXShare | CurrencyIdOf_ERC20 | CurrencyIdOf_StableAssetPoolToken | CurrencyIdOf_LiquidCroadloan | CurrencyIdOf_ForeignAsset

export interface CurrencyIdOf_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyIdOf_DEXShare {
  __kind: 'DEXShare'
  value: [DexShare, DexShare]
}

export interface CurrencyIdOf_ERC20 {
  __kind: 'ERC20'
  value: EvmAddress
}

export interface CurrencyIdOf_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export interface CurrencyIdOf_LiquidCroadloan {
  __kind: 'LiquidCroadloan'
  value: number
}

export interface CurrencyIdOf_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type AmountOf = bigint

export interface VestingScheduleOf {
  start: BlockNumber
  period: BlockNumber
  periodCount: number
  perPeriod: bigint
}

export type CurrencyId = CurrencyId_Token | CurrencyId_DEXShare | CurrencyId_ERC20 | CurrencyId_StableAssetPoolToken | CurrencyId_LiquidCroadloan | CurrencyId_ForeignAsset

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_DEXShare {
  __kind: 'DEXShare'
  value: [DexShare, DexShare]
}

export interface CurrencyId_ERC20 {
  __kind: 'ERC20'
  value: EvmAddress
}

export interface CurrencyId_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export interface CurrencyId_LiquidCroadloan {
  __kind: 'LiquidCroadloan'
  value: number
}

export interface CurrencyId_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type RelayChainBlockNumber = number

export interface ParachainInherentData {
  validationData: PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [ParaId, VecInboundHrmpMessage][]
}

export type UpwardMessage = Uint8Array

export interface Header {
  parentHash: Hash
  number: number
  stateRoot: Hash
  extrinsicsRoot: Hash
  digest: Digest
}

export type BalanceOf = bigint

export type Keys = Uint8Array

export type SessionIndex = number

export type MultiLocation = MultiLocation_Here | MultiLocation_X1 | MultiLocation_X2 | MultiLocation_X3 | MultiLocation_X4 | MultiLocation_X5 | MultiLocation_X6 | MultiLocation_X7 | MultiLocation_X8

export interface MultiLocation_Here {
  __kind: 'Here'
  value: null
}

export interface MultiLocation_X1 {
  __kind: 'X1'
  value: JunctionV0
}

export interface MultiLocation_X2 {
  __kind: 'X2'
  value: [JunctionV0, JunctionV0]
}

export interface MultiLocation_X3 {
  __kind: 'X3'
  value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X4 {
  __kind: 'X4'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X5 {
  __kind: 'X5'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X6 {
  __kind: 'X6'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X7 {
  __kind: 'X7'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X8 {
  __kind: 'X8'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export type Xcm = Xcm_WithdrawAsset | Xcm_ReserveAssetDeposit | Xcm_ReceiveTeleportedAsset | Xcm_QueryResponse | Xcm_TransferAsset | Xcm_TransferReserveAsset | Xcm_Transact | Xcm_HrmpNewChannelOpenRequest | Xcm_HrmpChannelAccepted | Xcm_HrmpChannelClosing | Xcm_RelayedFrom

export interface Xcm_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface Xcm_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface Xcm_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface Xcm_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: ResponseV0
}

export interface Xcm_TransferAsset {
  __kind: 'TransferAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
}

export interface Xcm_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface Xcm_Transact {
  __kind: 'Transact'
  originType: XcmOriginKind
  requireWeightAtMost: bigint
  call: DoubleEncodedCall
}

export interface Xcm_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Xcm_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Xcm_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Xcm_RelayedFrom {
  __kind: 'RelayedFrom'
  who: MultiLocationV0
  message: XcmV0
}

export type MultiAsset = MultiAsset_None | MultiAsset_All | MultiAsset_AllFungible | MultiAsset_AllNonFungible | MultiAsset_AllAbstractFungible | MultiAsset_AllAbstractNonFungible | MultiAsset_AllConcreteFungible | MultiAsset_AllConcreteNonFungible | MultiAsset_AbstractFungible | MultiAsset_AbstractNonFungible | MultiAsset_ConcreteFungible | MultiAsset_ConcreteNonFungible

export interface MultiAsset_None {
  __kind: 'None'
  value: null
}

export interface MultiAsset_All {
  __kind: 'All'
  value: null
}

export interface MultiAsset_AllFungible {
  __kind: 'AllFungible'
  value: null
}

export interface MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
  value: null
}

export interface MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  value: Uint8Array
}

export interface MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  value: Uint8Array
}

export interface MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  value: MultiLocationV0
}

export interface MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  value: MultiLocationV0
}

export interface MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  instance: bigint
}

export interface MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: AssetInstanceV0
}

export interface MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: MultiLocationV0
  amount: bigint
}

export interface MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: MultiLocationV0
  instance: AssetInstanceV0
}

export type OverweightIndex = bigint

export type Balance = bigint

export type AsOriginId = AsOriginId_Root | AsOriginId_Treasury | AsOriginId_HonzonTreasury | AsOriginId_HomaTreasury | AsOriginId_TreasuryReserve

export interface AsOriginId_Root {
  __kind: 'Root'
}

export interface AsOriginId_Treasury {
  __kind: 'Treasury'
}

export interface AsOriginId_HonzonTreasury {
  __kind: 'HonzonTreasury'
}

export interface AsOriginId_HomaTreasury {
  __kind: 'HomaTreasury'
}

export interface AsOriginId_TreasuryReserve {
  __kind: 'TreasuryReserve'
}

export type CallOf = CallOf_System | CallOf_Timestamp | CallOf_Scheduler | CallOf_Utility | CallOf_Multisig | CallOf_Proxy | CallOf_TransactionPause | CallOf_Balances | CallOf_Currencies | CallOf_Vesting | CallOf_TransactionPayment | CallOf_Treasury | CallOf_Bounties | CallOf_Tips | CallOf_ParachainSystem | CallOf_Authorship | CallOf_CollatorSelection | CallOf_Session | CallOf_SessionManager | CallOf_XcmpQueue | CallOf_PolkadotXcm | CallOf_DmpQueue | CallOf_XTokens | CallOf_OrmlXcm | CallOf_Authority | CallOf_GeneralCouncil | CallOf_GeneralCouncilMembership | CallOf_FinancialCouncil | CallOf_FinancialCouncilMembership | CallOf_HomaCouncil | CallOf_HomaCouncilMembership | CallOf_TechnicalCommittee | CallOf_TechnicalCommitteeMembership | CallOf_Democracy | CallOf_AcalaOracle | CallOf_OperatorMembershipAcala | CallOf_Auction | CallOf_Rewards | CallOf_Prices | CallOf_Dex | CallOf_AuctionManager | CallOf_Loans | CallOf_Honzon | CallOf_CdpTreasury | CallOf_CdpEngine | CallOf_EmergencyShutdown | CallOf_HomaLite | CallOf_Incentives | CallOf_NFT | CallOf_EVM | CallOf_EvmAccounts | CallOf_Sudo

export interface CallOf_System {
  __kind: 'System'
  value: SystemCall
}

export interface CallOf_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface CallOf_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface CallOf_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface CallOf_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface CallOf_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface CallOf_TransactionPause {
  __kind: 'TransactionPause'
  value: TransactionPauseCall
}

export interface CallOf_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface CallOf_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface CallOf_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface CallOf_TransactionPayment {
  __kind: 'TransactionPayment'
  value: TransactionPaymentCall
}

export interface CallOf_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface CallOf_Bounties {
  __kind: 'Bounties'
  value: BountiesCall
}

export interface CallOf_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface CallOf_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface CallOf_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface CallOf_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface CallOf_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface CallOf_SessionManager {
  __kind: 'SessionManager'
  value: SessionManagerCall
}

export interface CallOf_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface CallOf_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface CallOf_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface CallOf_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface CallOf_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface CallOf_Authority {
  __kind: 'Authority'
  value: AuthorityCall
}

export interface CallOf_GeneralCouncil {
  __kind: 'GeneralCouncil'
  value: GeneralCouncilCall
}

export interface CallOf_GeneralCouncilMembership {
  __kind: 'GeneralCouncilMembership'
  value: GeneralCouncilMembershipCall
}

export interface CallOf_FinancialCouncil {
  __kind: 'FinancialCouncil'
  value: FinancialCouncilCall
}

export interface CallOf_FinancialCouncilMembership {
  __kind: 'FinancialCouncilMembership'
  value: FinancialCouncilMembershipCall
}

export interface CallOf_HomaCouncil {
  __kind: 'HomaCouncil'
  value: HomaCouncilCall
}

export interface CallOf_HomaCouncilMembership {
  __kind: 'HomaCouncilMembership'
  value: HomaCouncilMembershipCall
}

export interface CallOf_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface CallOf_TechnicalCommitteeMembership {
  __kind: 'TechnicalCommitteeMembership'
  value: TechnicalCommitteeMembershipCall
}

export interface CallOf_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface CallOf_AcalaOracle {
  __kind: 'AcalaOracle'
  value: AcalaOracleCall
}

export interface CallOf_OperatorMembershipAcala {
  __kind: 'OperatorMembershipAcala'
  value: OperatorMembershipAcalaCall
}

export interface CallOf_Auction {
  __kind: 'Auction'
  value: AuctionCall
}

export interface CallOf_Rewards {
  __kind: 'Rewards'
  value: RewardsCall
}

export interface CallOf_Prices {
  __kind: 'Prices'
  value: PricesCall
}

export interface CallOf_Dex {
  __kind: 'Dex'
  value: DexCall
}

export interface CallOf_AuctionManager {
  __kind: 'AuctionManager'
  value: AuctionManagerCall
}

export interface CallOf_Loans {
  __kind: 'Loans'
  value: LoansCall
}

export interface CallOf_Honzon {
  __kind: 'Honzon'
  value: HonzonCall
}

export interface CallOf_CdpTreasury {
  __kind: 'CdpTreasury'
  value: CdpTreasuryCall
}

export interface CallOf_CdpEngine {
  __kind: 'CdpEngine'
  value: CdpEngineCall
}

export interface CallOf_EmergencyShutdown {
  __kind: 'EmergencyShutdown'
  value: EmergencyShutdownCall
}

export interface CallOf_HomaLite {
  __kind: 'HomaLite'
  value: HomaLiteCall
}

export interface CallOf_Incentives {
  __kind: 'Incentives'
  value: IncentivesCall
}

export interface CallOf_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface CallOf_EVM {
  __kind: 'EVM'
  value: EVMCall
}

export interface CallOf_EvmAccounts {
  __kind: 'EvmAccounts'
  value: EvmAccountsCall
}

export interface CallOf_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export type DispatchTime = DispatchTime_At | DispatchTime_After

export interface DispatchTime_At {
  __kind: 'At'
  value: BlockNumber
}

export interface DispatchTime_After {
  __kind: 'After'
  value: BlockNumber
}

export type PalletsOrigin = PalletsOrigin_System | PalletsOrigin_Authority | PalletsOrigin_GeneralCouncil | PalletsOrigin_TechnicalCommittee

export interface PalletsOrigin_System {
  __kind: 'System'
  value: SystemOrigin
}

export interface PalletsOrigin_Authority {
  __kind: 'Authority'
  value: AuthorityOrigin
}

export interface PalletsOrigin_GeneralCouncil {
  __kind: 'GeneralCouncil'
  value: CollectiveOrigin
}

export interface PalletsOrigin_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: CollectiveOrigin
}

export type ScheduleTaskIndex = number

export type MemberCount = number

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  value: AccountVoteStandard
}

export interface AccountVote_Split {
  __kind: 'Split'
  value: AccountVoteSplit
}

export type ReferendumIndex = number

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
  __kind: 'None'
}

export interface Conviction_Locked1x {
  __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
  __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
  __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
  __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
  __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
  __kind: 'Locked6x'
}

export type OracleKey = OracleKey_Token | OracleKey_DEXShare | OracleKey_ERC20 | OracleKey_StableAssetPoolToken | OracleKey_LiquidCroadloan | OracleKey_ForeignAsset

export interface OracleKey_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface OracleKey_DEXShare {
  __kind: 'DEXShare'
  value: [DexShare, DexShare]
}

export interface OracleKey_ERC20 {
  __kind: 'ERC20'
  value: EvmAddress
}

export interface OracleKey_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export interface OracleKey_LiquidCroadloan {
  __kind: 'LiquidCroadloan'
  value: number
}

export interface OracleKey_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type OracleValue = bigint

export type AuctionId = number

export type Amount = bigint

export type Rate = bigint

export type ChangeOptionRate = ChangeOptionRate_NoChange | ChangeOptionRate_NewValue

export interface ChangeOptionRate_NoChange {
  __kind: 'NoChange'
  value: null
}

export interface ChangeOptionRate_NewValue {
  __kind: 'NewValue'
  value: OptionRate
}

export type ChangeOptionRatio = ChangeOptionRatio_NoChange | ChangeOptionRatio_NewValue

export interface ChangeOptionRatio_NoChange {
  __kind: 'NoChange'
  value: null
}

export interface ChangeOptionRatio_NewValue {
  __kind: 'NewValue'
  value: OptionRatio
}

export type ChangeBalance = ChangeBalance_NoChange | ChangeBalance_NewValue

export interface ChangeBalance_NoChange {
  __kind: 'NoChange'
  value: null
}

export interface ChangeBalance_NewValue {
  __kind: 'NewValue'
  value: Balance
}

export type PoolId = PoolId_Loans | PoolId_Dex

export interface PoolId_Loans {
  __kind: 'Loans'
  value: CurrencyId
}

export interface PoolId_Dex {
  __kind: 'Dex'
  value: CurrencyId
}

export type CID = Uint8Array

export type Attributes = [Uint8Array, Uint8Array][]

export type ClassIdOf = number

export type TokenIdOf = bigint

export type TransactionAction = TransactionAction_Call | TransactionAction_Create

export interface TransactionAction_Call {
  __kind: 'Call'
  value: H160
}

export interface TransactionAction_Create {
  __kind: 'Create'
  value: null
}

export type EvmAddress = Uint8Array

export type H256 = Uint8Array

export type EcdsaSignature = Uint8Array

export type H160 = Uint8Array

export type TokenSymbol = TokenSymbol_ACA | TokenSymbol_AUSD | TokenSymbol_DOT | TokenSymbol_LDOT | TokenSymbol_RENBTC | TokenSymbol_CASH | TokenSymbol_KAR | TokenSymbol_KUSD | TokenSymbol_KSM | TokenSymbol_LKSM | TokenSymbol_BNC | TokenSymbol_VSKSM

export interface TokenSymbol_ACA {
  __kind: 'ACA'
}

export interface TokenSymbol_AUSD {
  __kind: 'AUSD'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export interface TokenSymbol_LDOT {
  __kind: 'LDOT'
}

export interface TokenSymbol_RENBTC {
  __kind: 'RENBTC'
}

export interface TokenSymbol_CASH {
  __kind: 'CASH'
}

export interface TokenSymbol_KAR {
  __kind: 'KAR'
}

export interface TokenSymbol_KUSD {
  __kind: 'KUSD'
}

export interface TokenSymbol_KSM {
  __kind: 'KSM'
}

export interface TokenSymbol_LKSM {
  __kind: 'LKSM'
}

export interface TokenSymbol_BNC {
  __kind: 'BNC'
}

export interface TokenSymbol_VSKSM {
  __kind: 'VSKSM'
}

export type DexShare = DexShare_Token | DexShare_Erc20

export interface DexShare_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface DexShare_Erc20 {
  __kind: 'Erc20'
  value: EvmAddress
}

export interface PersistedValidationData {
  parentHead: HeadData
  relayParentNumber: RelayChainBlockNumber
  relayParentStorageRoot: Hash
  maxPovSize: number
}

export interface StorageProof {
  trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
  pubSentAt: BlockNumber
  pubMsg: DownwardMessage
}

export type ParaId = number

export interface InboundHrmpMessage {
  sentAt: BlockNumber
  data: Uint8Array
}

export type VecInboundHrmpMessage = InboundHrmpMessage[]

export interface Digest {
  logs: DigestItem[]
}

export type JunctionV0 = JunctionV0_Parent | JunctionV0_Parachain | JunctionV0_AccountId32 | JunctionV0_AccountIndex64 | JunctionV0_AccountKey20 | JunctionV0_PalletInstance | JunctionV0_GeneralIndex | JunctionV0_GeneralKey | JunctionV0_OnlyChild | JunctionV0_Plurality

export interface JunctionV0_Parent {
  __kind: 'Parent'
  value: null
}

export interface JunctionV0_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface JunctionV0_AccountId32 {
  __kind: 'AccountId32'
  network: NetworkId
  id: AccountId
}

export interface JunctionV0_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: NetworkId
  index: bigint
}

export interface JunctionV0_AccountKey20 {
  __kind: 'AccountKey20'
  network: NetworkId
  key: Uint8Array
}

export interface JunctionV0_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface JunctionV0_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface JunctionV0_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface JunctionV0_OnlyChild {
  __kind: 'OnlyChild'
  value: null
}

export interface JunctionV0_Plurality {
  __kind: 'Plurality'
  id: BodyId
  part: BodyPart
}

export type MultiAssetV0 = MultiAssetV0_None | MultiAssetV0_All | MultiAssetV0_AllFungible | MultiAssetV0_AllNonFungible | MultiAssetV0_AllAbstractFungible | MultiAssetV0_AllAbstractNonFungible | MultiAssetV0_AllConcreteFungible | MultiAssetV0_AllConcreteNonFungible | MultiAssetV0_AbstractFungible | MultiAssetV0_AbstractNonFungible | MultiAssetV0_ConcreteFungible | MultiAssetV0_ConcreteNonFungible

export interface MultiAssetV0_None {
  __kind: 'None'
  value: null
}

export interface MultiAssetV0_All {
  __kind: 'All'
  value: null
}

export interface MultiAssetV0_AllFungible {
  __kind: 'AllFungible'
  value: null
}

export interface MultiAssetV0_AllNonFungible {
  __kind: 'AllNonFungible'
  value: null
}

export interface MultiAssetV0_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  value: Uint8Array
}

export interface MultiAssetV0_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  value: Uint8Array
}

export interface MultiAssetV0_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  value: MultiLocationV0
}

export interface MultiAssetV0_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  value: MultiLocationV0
}

export interface MultiAssetV0_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  instance: bigint
}

export interface MultiAssetV0_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: AssetInstanceV0
}

export interface MultiAssetV0_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: MultiLocationV0
  amount: bigint
}

export interface MultiAssetV0_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: MultiLocationV0
  instance: AssetInstanceV0
}

export type XcmOrderV0 = XcmOrderV0_Null | XcmOrderV0_DepositAsset | XcmOrderV0_DepositReserveAsset | XcmOrderV0_ExchangeAsset | XcmOrderV0_InitiateReserveWithdraw | XcmOrderV0_InitiateTeleport | XcmOrderV0_QueryHolding | XcmOrderV0_BuyExecution

export interface XcmOrderV0_Null {
  __kind: 'Null'
  value: null
}

export interface XcmOrderV0_DepositAsset {
  __kind: 'DepositAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
}

export interface XcmOrderV0_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmOrderV0_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: MultiAssetV0[]
  receive: MultiAssetV0[]
}

export interface XcmOrderV0_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: MultiAssetV0[]
  reserve: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmOrderV0_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: MultiAsset[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmOrderV0_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: MultiLocationV0
  assets: MultiAssetV0[]
}

export interface XcmOrderV0_BuyExecution {
  __kind: 'BuyExecution'
  fees: MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: XcmV0[]
}

export type ResponseV0 = ResponseV0_Assets

export interface ResponseV0_Assets {
  __kind: 'Assets'
  value: MultiAssetV0[]
}

export type MultiLocationV0 = MultiLocationV0_Here | MultiLocationV0_X1 | MultiLocationV0_X2 | MultiLocationV0_X3 | MultiLocationV0_X4 | MultiLocationV0_X5 | MultiLocationV0_X6 | MultiLocationV0_X7 | MultiLocationV0_X8

export interface MultiLocationV0_Here {
  __kind: 'Here'
  value: null
}

export interface MultiLocationV0_X1 {
  __kind: 'X1'
  value: JunctionV0
}

export interface MultiLocationV0_X2 {
  __kind: 'X2'
  value: [JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X3 {
  __kind: 'X3'
  value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X4 {
  __kind: 'X4'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X5 {
  __kind: 'X5'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X6 {
  __kind: 'X6'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X7 {
  __kind: 'X7'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X8 {
  __kind: 'X8'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export type XcmOriginKind = XcmOriginKind_Native | XcmOriginKind_SovereignAccount | XcmOriginKind_Superuser | XcmOriginKind_Xcm

export interface XcmOriginKind_Native {
  __kind: 'Native'
}

export interface XcmOriginKind_SovereignAccount {
  __kind: 'SovereignAccount'
}

export interface XcmOriginKind_Superuser {
  __kind: 'Superuser'
}

export interface XcmOriginKind_Xcm {
  __kind: 'Xcm'
}

export interface DoubleEncodedCall {
  encoded: Uint8Array
}

export type XcmV0 = XcmV0_WithdrawAsset | XcmV0_ReserveAssetDeposit | XcmV0_ReceiveTeleportedAsset | XcmV0_QueryResponse | XcmV0_TransferAsset | XcmV0_TransferReserveAsset | XcmV0_Transact | XcmV0_HrmpNewChannelOpenRequest | XcmV0_HrmpChannelAccepted | XcmV0_HrmpChannelClosing | XcmV0_RelayedFrom

export interface XcmV0_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface XcmV0_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface XcmV0_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface XcmV0_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: ResponseV0
}

export interface XcmV0_TransferAsset {
  __kind: 'TransferAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
}

export interface XcmV0_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmV0_Transact {
  __kind: 'Transact'
  originType: XcmOriginKind
  requireWeightAtMost: bigint
  call: DoubleEncodedCall
}

export interface XcmV0_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface XcmV0_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface XcmV0_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface XcmV0_RelayedFrom {
  __kind: 'RelayedFrom'
  who: MultiLocationV0
  message: XcmV0
}

export type AssetInstanceV0 = AssetInstanceV0_Undefined | AssetInstanceV0_Index8 | AssetInstanceV0_Index16 | AssetInstanceV0_Index32 | AssetInstanceV0_Index64 | AssetInstanceV0_Index128 | AssetInstanceV0_Array4 | AssetInstanceV0_Array8 | AssetInstanceV0_Array16 | AssetInstanceV0_Array32 | AssetInstanceV0_Blob

export interface AssetInstanceV0_Undefined {
  __kind: 'Undefined'
  value: null
}

export interface AssetInstanceV0_Index8 {
  __kind: 'Index8'
  value: number
}

export interface AssetInstanceV0_Index16 {
  __kind: 'Index16'
  value: number
}

export interface AssetInstanceV0_Index32 {
  __kind: 'Index32'
  value: number
}

export interface AssetInstanceV0_Index64 {
  __kind: 'Index64'
  value: bigint
}

export interface AssetInstanceV0_Index128 {
  __kind: 'Index128'
  value: bigint
}

export interface AssetInstanceV0_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface AssetInstanceV0_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface AssetInstanceV0_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface AssetInstanceV0_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface AssetInstanceV0_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type SystemOrigin = SystemOrigin_Root | SystemOrigin_Signed | SystemOrigin_None

export interface SystemOrigin_Root {
  __kind: 'Root'
  value: null
}

export interface SystemOrigin_Signed {
  __kind: 'Signed'
  value: AccountId
}

export interface SystemOrigin_None {
  __kind: 'None'
  value: null
}

export interface AuthorityOrigin {
  delay: BlockNumber
  origin: PalletsOrigin
}

export type CollectiveOrigin = CollectiveOrigin_Members | CollectiveOrigin_Member

export interface CollectiveOrigin_Members {
  __kind: 'Members'
  value: [MemberCount, MemberCount]
}

export interface CollectiveOrigin_Member {
  __kind: 'Member'
  value: AccountId
}

export interface AccountVoteStandard {
  vote: Vote
  balance: Balance
}

export interface AccountVoteSplit {
  aye: Balance
  nay: Balance
}

export type OptionRate = (Rate | undefined)

export type Ratio = bigint

export type OptionRatio = (Ratio | undefined)

export type HeadData = Uint8Array

export type DownwardMessage = Uint8Array

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
  __kind: 'AuthoritiesChange'
  value: AuthorityId[]
}

export interface DigestItem_ChangesTrieRoot {
  __kind: 'ChangesTrieRoot'
  value: Hash
}

export interface DigestItem_SealV0 {
  __kind: 'SealV0'
  value: SealV0
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: Consensus
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: Seal
}

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: PreRuntime
}

export interface DigestItem_ChangesTrieSignal {
  __kind: 'ChangesTrieSignal'
  value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
  value: null
}

export type NetworkId = NetworkId_Any | NetworkId_Named | NetworkId_Polkadot | NetworkId_Kusama

export interface NetworkId_Any {
  __kind: 'Any'
  value: null
}

export interface NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface NetworkId_Polkadot {
  __kind: 'Polkadot'
  value: null
}

export interface NetworkId_Kusama {
  __kind: 'Kusama'
  value: null
}

export type BodyId = BodyId_Unit | BodyId_Named | BodyId_Index | BodyId_Executive | BodyId_Technical | BodyId_Legislative | BodyId_Judicial

export interface BodyId_Unit {
  __kind: 'Unit'
  value: null
}

export interface BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface BodyId_Executive {
  __kind: 'Executive'
  value: null
}

export interface BodyId_Technical {
  __kind: 'Technical'
  value: null
}

export interface BodyId_Legislative {
  __kind: 'Legislative'
  value: null
}

export interface BodyId_Judicial {
  __kind: 'Judicial'
  value: null
}

export type BodyPart = BodyPart_Voice | BodyPart_Members | BodyPart_Fraction | BodyPart_AtLeastProportion | BodyPart_MoreThanProportion

export interface BodyPart_Voice {
  __kind: 'Voice'
  value: null
}

export interface BodyPart_Members {
  __kind: 'Members'
  value: number
}

export interface BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export type Vote = number

export type AuthorityId = Uint8Array

export type Signature = Uint8Array

export type SealV0 = [bigint, Signature]

export type ConsensusEngineId = Uint8Array

export type Consensus = [ConsensusEngineId, Uint8Array]

export type Seal = [ConsensusEngineId, Uint8Array]

export type PreRuntime = [ConsensusEngineId, Uint8Array]

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}
