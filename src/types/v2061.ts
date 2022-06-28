import type {Result} from './support'

export type H256 = Uint8Array

export type Call = Call_System | Call_Timestamp | Call_Scheduler | Call_Utility | Call_Multisig | Call_Proxy | Call_TransactionPause | Call_IdleScheduler | Call_Preimage | Call_Balances | Call_Currencies | Call_Vesting | Call_TransactionPayment | Call_Treasury | Call_Bounties | Call_Tips | Call_Authorship | Call_CollatorSelection | Call_Session | Call_SessionManager | Call_XcmpQueue | Call_PolkadotXcm | Call_DmpQueue | Call_XTokens | Call_OrmlXcm | Call_Authority | Call_GeneralCouncil | Call_GeneralCouncilMembership | Call_FinancialCouncil | Call_FinancialCouncilMembership | Call_HomaCouncil | Call_HomaCouncilMembership | Call_TechnicalCommittee | Call_TechnicalCommitteeMembership | Call_Democracy | Call_AcalaOracle | Call_OperatorMembershipAcala | Call_Auction | Call_Rewards | Call_Prices | Call_Dex | Call_DexOracle | Call_AuctionManager | Call_Loans | Call_Honzon | Call_CdpTreasury | Call_CdpEngine | Call_EmergencyShutdown | Call_HonzonBridge | Call_Homa | Call_XcmInterface | Call_Incentives | Call_NFT | Call_AssetRegistry | Call_EVM | Call_EvmAccounts | Call_StableAsset | Call_ParachainSystem | Call_Sudo

export interface Call_System {
  __kind: 'System'
  value: SystemCall
}

export interface Call_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Call_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Call_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Call_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Call_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface Call_TransactionPause {
  __kind: 'TransactionPause'
  value: TransactionPauseCall
}

export interface Call_IdleScheduler {
  __kind: 'IdleScheduler'
  value: IdleSchedulerCall
}

export interface Call_Preimage {
  __kind: 'Preimage'
  value: PreimageCall
}

export interface Call_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Call_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Call_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Call_TransactionPayment {
  __kind: 'TransactionPayment'
  value: TransactionPaymentCall
}

export interface Call_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Call_Bounties {
  __kind: 'Bounties'
  value: BountiesCall
}

export interface Call_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Call_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Call_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface Call_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Call_SessionManager {
  __kind: 'SessionManager'
  value: SessionManagerCall
}

export interface Call_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Call_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Call_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Call_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Call_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface Call_Authority {
  __kind: 'Authority'
  value: AuthorityCall
}

export interface Call_GeneralCouncil {
  __kind: 'GeneralCouncil'
  value: GeneralCouncilCall
}

export interface Call_GeneralCouncilMembership {
  __kind: 'GeneralCouncilMembership'
  value: GeneralCouncilMembershipCall
}

export interface Call_FinancialCouncil {
  __kind: 'FinancialCouncil'
  value: FinancialCouncilCall
}

export interface Call_FinancialCouncilMembership {
  __kind: 'FinancialCouncilMembership'
  value: FinancialCouncilMembershipCall
}

export interface Call_HomaCouncil {
  __kind: 'HomaCouncil'
  value: HomaCouncilCall
}

export interface Call_HomaCouncilMembership {
  __kind: 'HomaCouncilMembership'
  value: HomaCouncilMembershipCall
}

export interface Call_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Call_TechnicalCommitteeMembership {
  __kind: 'TechnicalCommitteeMembership'
  value: TechnicalCommitteeMembershipCall
}

export interface Call_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Call_AcalaOracle {
  __kind: 'AcalaOracle'
  value: AcalaOracleCall
}

export interface Call_OperatorMembershipAcala {
  __kind: 'OperatorMembershipAcala'
  value: OperatorMembershipAcalaCall
}

export interface Call_Auction {
  __kind: 'Auction'
  value: AuctionCall
}

export interface Call_Rewards {
  __kind: 'Rewards'
  value: RewardsCall
}

export interface Call_Prices {
  __kind: 'Prices'
  value: PricesCall
}

export interface Call_Dex {
  __kind: 'Dex'
  value: DexCall
}

export interface Call_DexOracle {
  __kind: 'DexOracle'
  value: DexOracleCall
}

export interface Call_AuctionManager {
  __kind: 'AuctionManager'
  value: AuctionManagerCall
}

export interface Call_Loans {
  __kind: 'Loans'
  value: LoansCall
}

export interface Call_Honzon {
  __kind: 'Honzon'
  value: HonzonCall
}

export interface Call_CdpTreasury {
  __kind: 'CdpTreasury'
  value: CdpTreasuryCall
}

export interface Call_CdpEngine {
  __kind: 'CdpEngine'
  value: CdpEngineCall
}

export interface Call_EmergencyShutdown {
  __kind: 'EmergencyShutdown'
  value: EmergencyShutdownCall
}

export interface Call_HonzonBridge {
  __kind: 'HonzonBridge'
  value: HonzonBridgeCall
}

export interface Call_Homa {
  __kind: 'Homa'
  value: HomaCall
}

export interface Call_XcmInterface {
  __kind: 'XcmInterface'
  value: XcmInterfaceCall
}

export interface Call_Incentives {
  __kind: 'Incentives'
  value: IncentivesCall
}

export interface Call_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface Call_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryCall
}

export interface Call_EVM {
  __kind: 'EVM'
  value: EVMCall
}

export interface Call_EvmAccounts {
  __kind: 'EvmAccounts'
  value: EvmAccountsCall
}

export interface Call_StableAsset {
  __kind: 'StableAsset'
  value: StableAssetCall
}

export interface Call_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Call_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: Perbill
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: number
  index: number
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named'
  id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after'
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Call[]
}

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
  __kind: 'as_derivative'
  index: number
  call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
  __kind: 'batch_all'
  calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: OriginCaller
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
  __kind: 'as_multi_threshold_1'
  otherSignatories: AccountId32[]
  call: Call
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
  __kind: 'as_multi'
  threshold: number
  otherSignatories: AccountId32[]
  maybeTimepoint: (Timepoint | undefined)
  call: Uint8Array
  storeCall: boolean
  maxWeight: bigint
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface MultisigCall_approve_as_multi {
  __kind: 'approve_as_multi'
  threshold: number
  otherSignatories: AccountId32[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
  maxWeight: bigint
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
  __kind: 'cancel_as_multi'
  threshold: number
  otherSignatories: AccountId32[]
  timepoint: Timepoint
  callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_proxy {
  __kind: 'proxy'
  real: AccountId32
  forceProxyType: (ProxyType | undefined)
  call: Call
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_add_proxy {
  __kind: 'add_proxy'
  delegate: AccountId32
  proxyType: ProxyType
  delay: number
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxy {
  __kind: 'remove_proxy'
  delegate: AccountId32
  proxyType: ProxyType
  delay: number
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `anonymous`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxies {
  __kind: 'remove_proxies'
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 * TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
  __kind: 'anonymous'
  proxyType: ProxyType
  delay: number
  index: number
}

/**
 * Removes a previously spawned anonymous proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `anonymous` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `anonymous` to create this account.
 * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `anonymous`.
 * - `height`: The height of the chain when the call to `anonymous` was processed.
 * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created anonymous
 * account whose `anonymous` call has corresponding parameters.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_kill_anonymous {
  __kind: 'kill_anonymous'
  spawner: AccountId32
  proxyType: ProxyType
  index: number
  height: number
  extIndex: number
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_announce {
  __kind: 'announce'
  real: AccountId32
  callHash: H256
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_remove_announcement {
  __kind: 'remove_announcement'
  real: AccountId32
  callHash: H256
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_reject_announcement {
  __kind: 'reject_announcement'
  delegate: AccountId32
  callHash: H256
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_proxy_announced {
  __kind: 'proxy_announced'
  delegate: AccountId32
  real: AccountId32
  forceProxyType: (ProxyType | undefined)
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IdleSchedulerCall = IdleSchedulerCall_schedule_task

export interface IdleSchedulerCall_schedule_task {
  __kind: 'schedule_task'
  task: ScheduledTasks
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
  __kind: 'note_preimage'
  bytes: Uint8Array
}

/**
 * Clear an unrequested preimage from the runtime storage.
 */
export interface PreimageCall_unnote_preimage {
  __kind: 'unnote_preimage'
  hash: H256
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
  __kind: 'request_preimage'
  hash: H256
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
  __kind: 'unrequest_preimage'
  hash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: MultiAddress
  newFree: bigint
  newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: MultiAddress
  dest: MultiAddress
  value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: MultiAddress
  value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: MultiAddress
  keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
  __kind: 'force_unreserve'
  who: MultiAddress
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance | CurrenciesCall_sweep_dust

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
  __kind: 'transfer_native_currency'
  dest: MultiAddress
  amount: bigint
}

/**
 * Update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
  __kind: 'update_balance'
  who: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

export interface CurrenciesCall_sweep_dust {
  __kind: 'sweep_dust'
  currencyId: CurrencyId
  accounts: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
  __kind: 'claim'
}

export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer'
  dest: MultiAddress
  schedule: VestingSchedule
}

export interface VestingCall_update_vesting_schedules {
  __kind: 'update_vesting_schedules'
  who: MultiAddress
  vestingSchedules: VestingSchedule[]
}

export interface VestingCall_claim_for {
  __kind: 'claim_for'
  dest: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TransactionPaymentCall = TransactionPaymentCall_set_alternative_fee_swap_path | TransactionPaymentCall_enable_charge_fee_pool | TransactionPaymentCall_disable_charge_fee_pool | TransactionPaymentCall_with_fee_path | TransactionPaymentCall_with_fee_currency

/**
 * Set fee swap path
 */
export interface TransactionPaymentCall_set_alternative_fee_swap_path {
  __kind: 'set_alternative_fee_swap_path'
  feeSwapPath: (CurrencyId[] | undefined)
}

/**
 * Enable and initialize charge fee pool.
 */
export interface TransactionPaymentCall_enable_charge_fee_pool {
  __kind: 'enable_charge_fee_pool'
  currencyId: CurrencyId
  swapPath: CurrencyId[]
  poolSize: bigint
  swapThreshold: bigint
}

/**
 * Disable charge fee pool.
 */
export interface TransactionPaymentCall_disable_charge_fee_pool {
  __kind: 'disable_charge_fee_pool'
  currencyId: CurrencyId
}

/**
 * Dapp wrap call, and user pay tx fee as provided trading path. this dispatch call should
 * make sure the trading path is valid.
 */
export interface TransactionPaymentCall_with_fee_path {
  __kind: 'with_fee_path'
  feeSwapPath: CurrencyId[]
  call: Call
}

/**
 * Dapp wrap call, and user pay tx fee as provided currency, this dispatch call should make
 * sure the currency is exist in tx fee pool.
 */
export interface TransactionPaymentCall_with_fee_currency {
  __kind: 'with_fee_currency'
  currencyId: CurrencyId
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
  __kind: 'propose_bounty'
  value: bigint
  description: Uint8Array
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_approve_bounty {
  __kind: 'approve_bounty'
  bountyId: number
}

/**
 * Assign a curator to a funded bounty.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_propose_curator {
  __kind: 'propose_curator'
  bountyId: number
  curator: MultiAddress
  fee: bigint
}

/**
 * Unassign curator from a bounty.
 * 
 * This function can only be called by the `RejectOrigin` a signed origin.
 * 
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 * 
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_unassign_curator {
  __kind: 'unassign_curator'
  bountyId: number
}

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 * 
 * May only be called from the curator.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_accept_curator {
  __kind: 'accept_curator'
  bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_award_bounty {
  __kind: 'award_bounty'
  bountyId: number
  beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_claim_bounty {
  __kind: 'claim_bounty'
  bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_close_bounty {
  __kind: 'close_bounty'
  bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
  __kind: 'extend_bounty_expiry'
  bountyId: number
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R)` where `R` length of `reason`.
 *   - encoding and hashing of 'reason'
 * - DbReads: `Reasons`, `Tips`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_report_awesome {
  __kind: 'report_awesome'
  reason: Uint8Array
  who: AccountId32
}

/**
 * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 * If successful, the original deposit will be unreserved.
 * 
 * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 * must have been reported by the signing account through `report_awesome` (and not
 * through `tip_new`).
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * Emits `TipRetracted` if successful.
 * 
 * # <weight>
 * - Complexity: `O(1)`
 *   - Depends on the length of `T::Hash` which is fixed.
 * - DbReads: `Tips`, `origin account`
 * - DbWrites: `Reasons`, `Tips`, `origin account`
 * # </weight>
 */
export interface TipsCall_retract_tip {
  __kind: 'retract_tip'
  hash: H256
}

/**
 * Give a tip for something new; no finder's fee will be taken.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *     `ContainsLengthBound`. The actual cost depends on the implementation of
 *     `T::Tippers`.
 *   - `O(R)`: hashing and encoding of reason of length `R`
 * - DbReads: `Tippers`, `Reasons`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_tip_new {
  __kind: 'tip_new'
  reason: Uint8Array
  who: AccountId32
  tipValue: bigint
}

/**
 * Declare a tip value for an already-open tip.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *   account ID.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 * has started.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`, insert tip and check closing, `T` is charged as upper bound given by
 *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
 * 
 *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *   is weighted as if almost full i.e of length `T-1`.
 * - DbReads: `Tippers`, `Tips`
 * - DbWrites: `Tips`
 * # </weight>
 */
export interface TipsCall_tip {
  __kind: 'tip'
  hash: H256
  tipValue: bigint
}

/**
 * Close and payout a tip.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * The tip identified by `hash` must have finished its countdown period.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
 *   depends on the implementation of `T::Tippers`.
 * - DbReads: `Tips`, `Tippers`, `tip finder`
 * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 * # </weight>
 */
export interface TipsCall_close_tip {
  __kind: 'close_tip'
  hash: H256
}

/**
 * Remove and slash an already-open tip.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * As a result, the finder is slashed and the deposits are lost.
 * 
 * Emits `TipSlashed` if successful.
 * 
 * # <weight>
 *   `T` is charged as upper bound given by `ContainsLengthBound`.
 *   The actual cost depends on the implementation of `T::Tippers`.
 * # </weight>
 */
export interface TipsCall_slash_tip {
  __kind: 'slash_tip'
  hash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_register_candidate | CollatorSelectionCall_leave_intent | CollatorSelectionCall_withdraw_bond

export interface CollatorSelectionCall_set_invulnerables {
  __kind: 'set_invulnerables'
  new: AccountId32[]
}

export interface CollatorSelectionCall_set_desired_candidates {
  __kind: 'set_desired_candidates'
  max: number
}

export interface CollatorSelectionCall_set_candidacy_bond {
  __kind: 'set_candidacy_bond'
  bond: bigint
}

export interface CollatorSelectionCall_register_as_candidate {
  __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_register_candidate {
  __kind: 'register_candidate'
  newCandidate: AccountId32
}

export interface CollatorSelectionCall_leave_intent {
  __kind: 'leave_intent'
}

export interface CollatorSelectionCall_withdraw_bond {
  __kind: 'withdraw_bond'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: SessionKeys
  proof: Uint8Array
}

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionManagerCall = SessionManagerCall_schedule_session_duration

/**
 * Schedule a new session duration in the specified session index.
 * 
 * - `start_session`: the session index that the new change become effective.
 * - `duration`:  new session duration.
 */
export interface SessionManagerCall_schedule_session_duration {
  __kind: 'schedule_session_duration'
  startSession: number
  duration: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * Services a single overweight XCM.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight XCM to service
 * - `weight_limit`: The amount of weight that XCM execution may take.
 * 
 * Errors:
 * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
 * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
 * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface XcmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
  __kind: 'suspend_xcm_execution'
}

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
  __kind: 'resume_xcm_execution'
}

/**
 * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
 * suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
  __kind: 'update_suspend_threshold'
  new: number
}

/**
 * Overwrites the number of pages of messages which must be in the queue after which we drop any further
 * messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
  __kind: 'update_drop_threshold'
  new: number
}

/**
 * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
 * message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
  __kind: 'update_resume_threshold'
  new: number
}

/**
 * Overwrites the amount of remaining weight under which we stop processing messages.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.threshold_weight`
 */
export interface XcmpQueueCall_update_threshold_weight {
  __kind: 'update_threshold_weight'
  new: bigint
}

/**
 * Overwrites the speed to which the available weight approaches the maximum weight.
 * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
  __kind: 'update_weight_restrict_decay'
  new: bigint
}

/**
 * Overwrite the maximum amount of weight any individual message may consume.
 * Messages above this weight go into the overweight queue and may only be serviced explicitly.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
  __kind: 'update_xcmp_max_individual_weight'
  new: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: VersionedMultiLocation
  message: VersionedXcm_245
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
  __kind: 'execute'
  message: VersionedXcm_256
  maxWeight: bigint
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
  __kind: 'force_xcm_version'
  location: V1MultiLocation
  xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
  __kind: 'force_default_xcm_version'
  maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
  __kind: 'force_subscribe_version_notify'
  location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
  __kind: 'force_unsubscribe_version_notify'
  location: VersionedMultiLocation
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
  __kind: 'limited_reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
  __kind: 'limited_teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * Transfer native currencies.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
  __kind: 'transfer'
  currencyId: CurrencyId
  amount: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
  __kind: 'transfer_multiasset'
  asset: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
  __kind: 'transfer_with_fee'
  currencyId: CurrencyId
  amount: bigint
  fee: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
  __kind: 'transfer_multiasset_with_fee'
  asset: VersionedMultiAsset
  fee: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
  __kind: 'transfer_multicurrencies'
  currencies: [CurrencyId, bigint][]
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
  __kind: 'transfer_multiassets'
  assets: VersionedMultiAssets
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
  __kind: 'send_as_sovereign'
  dest: VersionedMultiLocation
  message: VersionedXcm_245
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorityCall = AuthorityCall_dispatch_as | AuthorityCall_schedule_dispatch | AuthorityCall_fast_track_scheduled_dispatch | AuthorityCall_delay_scheduled_dispatch | AuthorityCall_cancel_scheduled_dispatch | AuthorityCall_authorize_call | AuthorityCall_remove_authorized_call | AuthorityCall_trigger_call

/**
 * Dispatch a dispatchable on behalf of other origin
 */
export interface AuthorityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: AuthoritysOriginId
  call: Call
}

/**
 * Schedule a dispatchable to be dispatched at later block.
 * This is the only way to dispatch a call with `DelayedOrigin`.
 */
export interface AuthorityCall_schedule_dispatch {
  __kind: 'schedule_dispatch'
  when: DispatchTime
  priority: number
  withDelayedOrigin: boolean
  call: Call
}

/**
 * Fast track a scheduled dispatchable.
 */
export interface AuthorityCall_fast_track_scheduled_dispatch {
  __kind: 'fast_track_scheduled_dispatch'
  initialOrigin: OriginCaller
  taskId: number
  when: DispatchTime
}

/**
 * Delay a scheduled dispatchable.
 */
export interface AuthorityCall_delay_scheduled_dispatch {
  __kind: 'delay_scheduled_dispatch'
  initialOrigin: OriginCaller
  taskId: number
  additionalDelay: number
}

/**
 * Cancel a scheduled dispatchable.
 */
export interface AuthorityCall_cancel_scheduled_dispatch {
  __kind: 'cancel_scheduled_dispatch'
  initialOrigin: OriginCaller
  taskId: number
}

export interface AuthorityCall_authorize_call {
  __kind: 'authorize_call'
  call: Call
  caller: (AccountId32 | undefined)
}

export interface AuthorityCall_remove_authorized_call {
  __kind: 'remove_authorized_call'
  hash: H256
}

export interface AuthorityCall_trigger_call {
  __kind: 'trigger_call'
  hash: H256
  callWeightBound: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GeneralCouncilCall = GeneralCouncilCall_set_members | GeneralCouncilCall_execute | GeneralCouncilCall_propose | GeneralCouncilCall_vote | GeneralCouncilCall_close | GeneralCouncilCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface GeneralCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface GeneralCouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface GeneralCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface GeneralCouncilCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface GeneralCouncilCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface GeneralCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GeneralCouncilMembershipCall = GeneralCouncilMembershipCall_add_member | GeneralCouncilMembershipCall_remove_member | GeneralCouncilMembershipCall_swap_member | GeneralCouncilMembershipCall_reset_members | GeneralCouncilMembershipCall_change_key | GeneralCouncilMembershipCall_set_prime | GeneralCouncilMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface GeneralCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface GeneralCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface GeneralCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface GeneralCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface GeneralCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface GeneralCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface GeneralCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FinancialCouncilCall = FinancialCouncilCall_set_members | FinancialCouncilCall_execute | FinancialCouncilCall_propose | FinancialCouncilCall_vote | FinancialCouncilCall_close | FinancialCouncilCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface FinancialCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface FinancialCouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface FinancialCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface FinancialCouncilCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface FinancialCouncilCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface FinancialCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FinancialCouncilMembershipCall = FinancialCouncilMembershipCall_add_member | FinancialCouncilMembershipCall_remove_member | FinancialCouncilMembershipCall_swap_member | FinancialCouncilMembershipCall_reset_members | FinancialCouncilMembershipCall_change_key | FinancialCouncilMembershipCall_set_prime | FinancialCouncilMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface FinancialCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface FinancialCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface FinancialCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface FinancialCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface FinancialCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface FinancialCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface FinancialCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HomaCouncilCall = HomaCouncilCall_set_members | HomaCouncilCall_execute | HomaCouncilCall_propose | HomaCouncilCall_vote | HomaCouncilCall_close | HomaCouncilCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface HomaCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface HomaCouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface HomaCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface HomaCouncilCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface HomaCouncilCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface HomaCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HomaCouncilMembershipCall = HomaCouncilMembershipCall_add_member | HomaCouncilMembershipCall_remove_member | HomaCouncilMembershipCall_swap_member | HomaCouncilMembershipCall_reset_members | HomaCouncilMembershipCall_change_key | HomaCouncilMembershipCall_set_prime | HomaCouncilMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface HomaCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface HomaCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface HomaCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface HomaCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface HomaCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface HomaCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface HomaCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_swap_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalCommitteeMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalCommitteeMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 * 
 * Weight: `O(p)`
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: H256
  value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *   proposal. Extrinsic is weighted according to this value with no refund.
 * 
 * Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
  secondsUpperBound: number
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: AccountVote
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *   Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: H256
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: H256
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: H256
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *   `FastTrackVotingPeriod` if too low.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: H256
  votingPeriod: number
  delay: number
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: H256
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 * Cancel a proposal queued for enactment.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `which`: The index of the referendum to cancel.
 * 
 * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: number
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: AccountId32
  conviction: Conviction
  balance: bigint
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

/**
 * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 * in the dispatch queue but does require a deposit, returned once enacted.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
  __kind: 'note_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 * Register the preimage for an upcoming proposal. This requires the proposal to be
 * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 * the preimage has not been uploaded before and matches some imminent proposal,
 * no fee is paid.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
  __kind: 'note_imminent_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 * Remove an expired proposal preimage and collect the deposit.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `proposal_hash`: The preimage hash of a proposal.
 * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
 *   weighted according to this value with no refund.
 * 
 * This will only work after `VotingPeriod` blocks from the time that the preimage was
 * noted, if it's the same account doing it. If it's a different account, then it'll only
 * work an additional `EnactmentPeriod` later.
 * 
 * Emits `PreimageReaped`.
 * 
 * Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: H256
  proposalLenUpperBound: number
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
  __kind: 'unlock'
  target: AccountId32
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote'
  index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote'
  target: AccountId32
  index: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: H256
  index: number
}

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
  __kind: 'blacklist'
  proposalHash: H256
  maybeRefIndex: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal'
  propIndex: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AcalaOracleCall = AcalaOracleCall_feed_values

/**
 * Feed the external value.
 * 
 * Require authorized operator.
 */
export interface AcalaOracleCall_feed_values {
  __kind: 'feed_values'
  values: [CurrencyId, FixedU128][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OperatorMembershipAcalaCall = OperatorMembershipAcalaCall_add_member | OperatorMembershipAcalaCall_remove_member | OperatorMembershipAcalaCall_swap_member | OperatorMembershipAcalaCall_reset_members | OperatorMembershipAcalaCall_change_key | OperatorMembershipAcalaCall_set_prime | OperatorMembershipAcalaCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface OperatorMembershipAcalaCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface OperatorMembershipAcalaCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface OperatorMembershipAcalaCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface OperatorMembershipAcalaCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface OperatorMembershipAcalaCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface OperatorMembershipAcalaCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface OperatorMembershipAcalaCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuctionCall = AuctionCall_bid

/**
 * Bid an auction.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface AuctionCall_bid {
  __kind: 'bid'
  id: number
  value: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RewardsCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PricesCall = PricesCall_lock_price | PricesCall_unlock_price

/**
 * Lock the price and feed it to system.
 * 
 * The dispatch origin of this call must be `LockOrigin`.
 * 
 * - `currency_id`: currency type.
 */
export interface PricesCall_lock_price {
  __kind: 'lock_price'
  currencyId: CurrencyId
}

/**
 * Unlock the price and get the price from `PriceProvider` again
 * 
 * The dispatch origin of this call must be `LockOrigin`.
 * 
 * - `currency_id`: currency type.
 */
export interface PricesCall_unlock_price {
  __kind: 'unlock_price'
  currencyId: CurrencyId
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DexCall = DexCall_swap_with_exact_supply | DexCall_swap_with_exact_target | DexCall_add_liquidity | DexCall_add_provision | DexCall_claim_dex_share | DexCall_remove_liquidity | DexCall_list_provisioning | DexCall_update_provisioning_parameters | DexCall_end_provisioning | DexCall_enable_trading_pair | DexCall_disable_trading_pair | DexCall_refund_provision | DexCall_abort_provisioning

/**
 * Trading with DEX, swap with exact supply amount
 * 
 * - `path`: trading path.
 * - `supply_amount`: exact supply amount.
 * - `min_target_amount`: acceptable minimum target amount.
 */
export interface DexCall_swap_with_exact_supply {
  __kind: 'swap_with_exact_supply'
  path: CurrencyId[]
  supplyAmount: bigint
  minTargetAmount: bigint
}

/**
 * Trading with DEX, swap with exact target amount
 * 
 * - `path`: trading path.
 * - `target_amount`: exact target amount.
 * - `max_supply_amount`: acceptable maximum supply amount.
 */
export interface DexCall_swap_with_exact_target {
  __kind: 'swap_with_exact_target'
  path: CurrencyId[]
  targetAmount: bigint
  maxSupplyAmount: bigint
}

/**
 * Add liquidity to Enabled trading pair.
 * - Add provision success will record the provision, issue shares to caller in the initial
 *   exchange rate when trading pair convert to Enabled.
 * 
 * - `currency_id_a`: currency id A.
 * - `currency_id_b`: currency id B.
 * - `max_amount_a`: maximum amount of currency_id_a is allowed to inject to liquidity
 *   pool.
 * - `max_amount_b`: maximum amount of currency_id_b is allowed to inject to liquidity
 *   pool.
 * - `min_share_increment`: minimum acceptable share amount.
 * - `stake_increment_share`: indicates whether to stake increased dex share to earn
 *   incentives
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
 * Add provision to Provisioning trading pair.
 * If succecced, will record the provision, but shares issuing will happen after the
 * trading pair convert to Enabled status.
 * 
 * - `currency_id_a`: currency id A.
 * - `currency_id_b`: currency id B.
 * - `amount_a`: provision amount for currency_id_a.
 * - `amount_b`: provision amount for currency_id_b.
 */
export interface DexCall_add_provision {
  __kind: 'add_provision'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  amountA: bigint
  amountB: bigint
}

/**
 * Claim dex share for founders who have participated in trading pair provision.
 * 
 * - `owner`: founder account.
 * - `currency_id_a`: currency id A.
 * - `currency_id_b`: currency id B.
 */
export interface DexCall_claim_dex_share {
  __kind: 'claim_dex_share'
  owner: AccountId32
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Remove liquidity from specific liquidity pool in the form of burning
 * shares, and withdrawing currencies in trading pairs from liquidity
 * pool in proportion, and withdraw liquidity incentive interest.
 * 
 * - `currency_id_a`: currency id A.
 * - `currency_id_b`: currency id B.
 * - `remove_share`: liquidity amount to remove.
 * - `min_withdrawn_a`: minimum acceptable withrawn for currency_id_a.
 * - `min_withdrawn_b`: minimum acceptable withrawn for currency_id_b.
 * - `by_unstake`: this flag indicates whether to withdraw share which is on incentives.
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
 * List a new provisioning trading pair.
 */
export interface DexCall_list_provisioning {
  __kind: 'list_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  minContributionA: bigint
  minContributionB: bigint
  targetProvisionA: bigint
  targetProvisionB: bigint
  notBefore: number
}

/**
 * List a new trading pair, trading pair will become Enabled status
 * after provision process.
 */
export interface DexCall_update_provisioning_parameters {
  __kind: 'update_provisioning_parameters'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  minContributionA: bigint
  minContributionB: bigint
  targetProvisionA: bigint
  targetProvisionB: bigint
  notBefore: number
}

/**
 * Enable a Provisioning trading pair if meet the condition.
 */
export interface DexCall_end_provisioning {
  __kind: 'end_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Enable a trading pair
 * if the status of trading pair is `Disabled`, or `Provisioning` without any accumulated
 * provision, enable it directly.
 */
export interface DexCall_enable_trading_pair {
  __kind: 'enable_trading_pair'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Disable a `Enabled` trading pair.
 */
export interface DexCall_disable_trading_pair {
  __kind: 'disable_trading_pair'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Refund provision if the provision has already aborted.
 * 
 * - `owner`: founder account.
 * - `currency_id_a`: currency id A.
 * - `currency_id_b`: currency id B.
 */
export interface DexCall_refund_provision {
  __kind: 'refund_provision'
  owner: AccountId32
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Abort provision when it's don't meet the target and expired.
 */
export interface DexCall_abort_provisioning {
  __kind: 'abort_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DexOracleCall = DexOracleCall_enable_average_price | DexOracleCall_disable_average_price | DexOracleCall_update_average_price_interval

/**
 * Enabled average price for trading pair.
 * 
 * Requires `UpdateOrigin`
 * 
 * - `currency_id_a`: one currency_id that forms a trading pair
 * - `currency_id_b`: another currency_id that forms a trading pair
 * - `interval`: the timestamp interval to update average price.
 */
export interface DexOracleCall_enable_average_price {
  __kind: 'enable_average_price'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  interval: bigint
}

/**
 * Disable average price for trading pair.
 * 
 * Requires `UpdateOrigin`
 * 
 * - `currency_id_a`: one currency_id that forms a trading pair
 * - `currency_id_b`: another currency_id that forms a trading pair
 */
export interface DexOracleCall_disable_average_price {
  __kind: 'disable_average_price'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

/**
 * Update the interval of the trading pair that enabled average price.
 * 
 * Requires `UpdateOrigin`
 * 
 * - `currency_id_a`: one currency_id that forms a trading pair
 * - `currency_id_b`: another currency_id that forms a trading pair
 * - `new_interval`: the new interval.
 */
export interface DexOracleCall_update_average_price_interval {
  __kind: 'update_average_price_interval'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  newInterval: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuctionManagerCall = AuctionManagerCall_cancel

/**
 * Cancel active auction after system shutdown
 * 
 * The dispatch origin of this call must be _None_.
 */
export interface AuctionManagerCall_cancel {
  __kind: 'cancel'
  id: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LoansCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HonzonCall = HonzonCall_adjust_loan | HonzonCall_close_loan_has_debit_by_dex | HonzonCall_transfer_loan_from | HonzonCall_authorize | HonzonCall_unauthorize | HonzonCall_unauthorize_all | HonzonCall_expand_position_collateral | HonzonCall_shrink_position_debit

/**
 * Adjust the loans of `currency_id` by specific
 * `collateral_adjustment` and `debit_adjustment`
 * 
 * - `currency_id`: collateral currency id.
 * - `collateral_adjustment`: signed amount, positive means to deposit collateral currency
 *   into CDP, negative means withdraw collateral currency from CDP.
 * - `debit_adjustment`: signed amount, positive means to issue some amount of stablecoin
 *   to caller according to the debit adjustment, negative means caller will payback some
 *   amount of stablecoin to CDP according to to the debit adjustment.
 */
export interface HonzonCall_adjust_loan {
  __kind: 'adjust_loan'
  currencyId: CurrencyId
  collateralAdjustment: bigint
  debitAdjustment: bigint
}

/**
 * Close caller's CDP which has debit but still in safe by use collateral to swap
 * stable token on DEX for clearing debit.
 * 
 * - `currency_id`: collateral currency id.
 * - `max_collateral_amount`: the max collateral amount which is used to swap enough
 * 	stable token to clear debit.
 */
export interface HonzonCall_close_loan_has_debit_by_dex {
  __kind: 'close_loan_has_debit_by_dex'
  currencyId: CurrencyId
  maxCollateralAmount: bigint
}

/**
 * Transfer the whole CDP of `from` under `currency_id` to caller's CDP
 * under the same `currency_id`, caller must have the authorization of
 * `from` for the specific collateral type
 * 
 * - `currency_id`: collateral currency id.
 * - `from`: authorizer account
 */
export interface HonzonCall_transfer_loan_from {
  __kind: 'transfer_loan_from'
  currencyId: CurrencyId
  from: MultiAddress
}

/**
 * Authorize `to` to manipulate the loan under `currency_id`
 * 
 * - `currency_id`: collateral currency id.
 * - `to`: authorizee account
 */
export interface HonzonCall_authorize {
  __kind: 'authorize'
  currencyId: CurrencyId
  to: MultiAddress
}

/**
 * Cancel the authorization for `to` under `currency_id`
 * 
 * - `currency_id`: collateral currency id.
 * - `to`: authorizee account
 */
export interface HonzonCall_unauthorize {
  __kind: 'unauthorize'
  currencyId: CurrencyId
  to: MultiAddress
}

/**
 * Cancel all authorization of caller
 */
export interface HonzonCall_unauthorize_all {
  __kind: 'unauthorize_all'
}

/**
 * Generate new debit in advance, buy collateral and deposit it into CDP.
 * 
 * - `currency_id`: collateral currency id.
 * - `increase_debit_value`: the specific increased debit value for CDP
 * - `min_increase_collateral`: the minimal increased collateral amount for CDP
 */
export interface HonzonCall_expand_position_collateral {
  __kind: 'expand_position_collateral'
  currencyId: CurrencyId
  increaseDebitValue: bigint
  minIncreaseCollateral: bigint
}

/**
 * Sell ​​the collateral locked in CDP to get stable coin to repay the debit.
 * 
 * - `currency_id`: collateral currency id.
 * - `decrease_collateral`: the specific decreased collateral amount for CDP
 * - `min_decrease_debit_value`: the minimal decreased debit value for CDP
 */
export interface HonzonCall_shrink_position_debit {
  __kind: 'shrink_position_debit'
  currencyId: CurrencyId
  decreaseCollateral: bigint
  minDecreaseDebitValue: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CdpTreasuryCall = CdpTreasuryCall_extract_surplus_to_treasury | CdpTreasuryCall_auction_collateral | CdpTreasuryCall_exchange_collateral_to_stable | CdpTreasuryCall_set_expected_collateral_auction_size

export interface CdpTreasuryCall_extract_surplus_to_treasury {
  __kind: 'extract_surplus_to_treasury'
  amount: bigint
}

/**
 * Auction the collateral not occupied by the auction.
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `currency_id`: collateral type
 * - `amount`: collateral amount
 * - `target`: target amount
 * - `splited`: splite collateral to multiple auction according to the config size
 */
export interface CdpTreasuryCall_auction_collateral {
  __kind: 'auction_collateral'
  currencyId: CurrencyId
  amount: bigint
  target: bigint
  splited: boolean
}

/**
 * Swap the collateral not occupied by the auction to stable.
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `currency_id`: collateral type
 * - `swap_limit`: target amount
 */
export interface CdpTreasuryCall_exchange_collateral_to_stable {
  __kind: 'exchange_collateral_to_stable'
  currencyId: CurrencyId
  swapLimit: SwapLimit
}

/**
 * Update parameters related to collateral auction under specific
 * collateral type
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `currency_id`: collateral type
 * - `amount`: expected size of per lot collateral auction
 */
export interface CdpTreasuryCall_set_expected_collateral_auction_size {
  __kind: 'set_expected_collateral_auction_size'
  currencyId: CurrencyId
  size: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CdpEngineCall = CdpEngineCall_liquidate | CdpEngineCall_settle | CdpEngineCall_set_collateral_params

/**
 * Liquidate unsafe CDP
 * 
 * The dispatch origin of this call must be _None_.
 * 
 * - `currency_id`: CDP's collateral type.
 * - `who`: CDP's owner.
 */
export interface CdpEngineCall_liquidate {
  __kind: 'liquidate'
  currencyId: CurrencyId
  who: MultiAddress
}

/**
 * Settle CDP has debit after system shutdown
 * 
 * The dispatch origin of this call must be _None_.
 * 
 * - `currency_id`: CDP's collateral type.
 * - `who`: CDP's owner.
 */
export interface CdpEngineCall_settle {
  __kind: 'settle'
  currencyId: CurrencyId
  who: MultiAddress
}

/**
 * Update parameters related to risk management of CDP under specific
 * collateral type
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `currency_id`: collateral type.
 * - `interest_rate_per_sec`: extra interest rate per sec, `None` means do not update,
 *   `Some(None)` means update it to `None`.
 * - `liquidation_ratio`: liquidation ratio, `None` means do not update, `Some(None)` means
 *   update it to `None`.
 * - `liquidation_penalty`: liquidation penalty, `None` means do not update, `Some(None)`
 *   means update it to `None`.
 * - `required_collateral_ratio`: required collateral ratio, `None` means do not update,
 *   `Some(None)` means update it to `None`.
 * - `maximum_total_debit_value`: maximum total debit value.
 */
export interface CdpEngineCall_set_collateral_params {
  __kind: 'set_collateral_params'
  currencyId: CurrencyId
  interestRatePerSec: Change_300
  liquidationRatio: Change_300
  liquidationPenalty: Change_300
  requiredCollateralRatio: Change_300
  maximumTotalDebitValue: Change_301
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EmergencyShutdownCall = EmergencyShutdownCall_emergency_shutdown | EmergencyShutdownCall_open_collateral_refund | EmergencyShutdownCall_refund_collaterals

/**
 * Start emergency shutdown
 * 
 * The dispatch origin of this call must be `ShutdownOrigin`.
 */
export interface EmergencyShutdownCall_emergency_shutdown {
  __kind: 'emergency_shutdown'
}

/**
 * Open final redemption if settlement is completed.
 * 
 * The dispatch origin of this call must be `ShutdownOrigin`.
 */
export interface EmergencyShutdownCall_open_collateral_refund {
  __kind: 'open_collateral_refund'
}

/**
 * Refund a basket of remaining collateral assets to caller
 * 
 * - `amount`: stable currency amount used to refund.
 */
export interface EmergencyShutdownCall_refund_collaterals {
  __kind: 'refund_collaterals'
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HonzonBridgeCall = HonzonBridgeCall_to_bridged | HonzonBridgeCall_from_bridged

/**
 * Exchange some amount of Native stable coin into Bridge's stable coin
 * 
 * Parameters:
 * - `amount`: The amount of stable coin to exchange.
 */
export interface HonzonBridgeCall_to_bridged {
  __kind: 'to_bridged'
  amount: bigint
}

/**
 * Exchange some amount of Bridge's stable coin into Native stable coin
 * 
 * Parameters:
 * - `amount`: The amount of stable coin to exchange.
 */
export interface HonzonBridgeCall_from_bridged {
  __kind: 'from_bridged'
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HomaCall = HomaCall_mint | HomaCall_request_redeem | HomaCall_fast_match_redeems | HomaCall_claim_redemption | HomaCall_update_homa_params | HomaCall_update_bump_era_params | HomaCall_reset_ledgers | HomaCall_reset_current_era | HomaCall_force_bump_current_era | HomaCall_fast_match_redeems_completely

/**
 * Mint liquid currency by put locking up amount of staking currency.
 * 
 * Parameters:
 * - `amount`: The amount of staking currency used to mint liquid currency.
 */
export interface HomaCall_mint {
  __kind: 'mint'
  amount: bigint
}

/**
 * Build/Cancel/Overwrite a redeem request, use liquid currency to redeem staking currency.
 * The redeem request will be executed in two ways:
 * 1. Redeem by fast match: Homa use staking currency in ToBondPool to match redeem request
 * in the current era, setting a higher fee_rate can increase the possibility of being fast
 * matched. 2. Redeem by unbond on relaychain: if redeem request has not been fast matched
 * in current era, Homa will unbond staking currency on relaychain when the next era
 * bumped. So redeemer at least wait for the unbonding period + extra 1 era to get the
 * redemption.
 * 
 * Parameters:
 * - `amount`: The amount of liquid currency to be requested  redeemed into Staking
 *   currency.
 * - `allow_fast_match`: allow the request to be fast matched, fast match will take a fixed
 *   rate as fee.
 */
export interface HomaCall_request_redeem {
  __kind: 'request_redeem'
  amount: bigint
  allowFastMatch: boolean
}

/**
 * Execute fast match for specific redeem requests.
 * 
 * Parameters:
 * - `redeemer_list`: The list of redeem requests to execute fast redeem.
 */
export interface HomaCall_fast_match_redeems {
  __kind: 'fast_match_redeems'
  redeemerList: AccountId32[]
}

/**
 * Withdraw the expired redemption of specific redeemer by unbond.
 * 
 * Parameters:
 * - `redeemer`: redeemer.
 */
export interface HomaCall_claim_redemption {
  __kind: 'claim_redemption'
  redeemer: AccountId32
}

/**
 * Sets the params of Homa.
 * Requires `GovernanceOrigin`
 * 
 * Parameters:
 * - `soft_bonded_cap_per_sub_account`:  soft cap of staking amount for a single nominator
 *   on relaychain to obtain the best staking rewards.
 * - `estimated_reward_rate_per_era`: the estimated staking yield of each era on the
 *   current relay chain.
 * - `commission_rate`: the rate to draw from estimated staking rewards as commission to
 *   HomaTreasury
 * - `fast_match_fee_rate`: the fixed fee rate when redeem request is been fast matched.
 */
export interface HomaCall_update_homa_params {
  __kind: 'update_homa_params'
  softBondedCapPerSubAccount: (bigint | undefined)
  estimatedRewardRatePerEra: (FixedU128 | undefined)
  commissionRate: (FixedU128 | undefined)
  fastMatchFeeRate: (FixedU128 | undefined)
}

/**
 * Sets the params that control when to bump local current era.
 * Requires `GovernanceOrigin`
 * 
 * Parameters:
 * - `fix_last_era_bumped_block`: fix the relaychain block number of last era bumped.
 * - `frequency`: the frequency of block number on parachain.
 */
export interface HomaCall_update_bump_era_params {
  __kind: 'update_bump_era_params'
  lastEraBumpedBlock: (number | undefined)
  frequency: (number | undefined)
}

/**
 * Reset the bonded and unbonding to local subaccounts ledger according to the ledger on
 * relaychain. Requires `GovernanceOrigin`
 * 
 * Parameters:
 * - `updates`: update list of subaccount.
 */
export interface HomaCall_reset_ledgers {
  __kind: 'reset_ledgers'
  updates: [number, (bigint | undefined), (UnlockChunk[] | undefined)][]
}

/**
 * Reset the RelayChainCurrentEra.
 * If there is a deviation of more than 1 EraIndex between current era of relaychain and
 * current era on local, should reset era to current era of relaychain as soon as possible.
 * At the same time, check whether the unlocking of ledgers should be updated.
 * Requires `GovernanceOrigin`
 * 
 * Parameters:
 * - `era_index`: the latest era index of relaychain.
 */
export interface HomaCall_reset_current_era {
  __kind: 'reset_current_era'
  eraIndex: number
}

export interface HomaCall_force_bump_current_era {
  __kind: 'force_bump_current_era'
  bumpAmount: number
}

/**
 * Execute fast match for specific redeem requests, require completely matched.
 * 
 * Parameters:
 * - `redeemer_list`: The list of redeem requests to execute fast redeem.
 */
export interface HomaCall_fast_match_redeems_completely {
  __kind: 'fast_match_redeems_completely'
  redeemerList: AccountId32[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmInterfaceCall = XcmInterfaceCall_update_xcm_dest_weight_and_fee

/**
 * Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
 * 
 * Parameters:
 * - `updates`: vec of tuple: (XcmInterfaceOperation, WeightChange, FeeChange).
 */
export interface XcmInterfaceCall_update_xcm_dest_weight_and_fee {
  __kind: 'update_xcm_dest_weight_and_fee'
  updates: [XcmInterfaceOperation, (bigint | undefined), (bigint | undefined)][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type IncentivesCall = IncentivesCall_deposit_dex_share | IncentivesCall_withdraw_dex_share | IncentivesCall_claim_rewards | IncentivesCall_update_incentive_rewards | IncentivesCall_update_dex_saving_rewards | IncentivesCall_update_claim_reward_deduction_rates

/**
 * Stake LP token to add shares of Pool::Dex
 * 
 * The dispatch origin of this call must be `Signed` by the transactor.
 * 
 * - `lp_currency_id`: LP token type
 * - `amount`: amount to stake
 */
export interface IncentivesCall_deposit_dex_share {
  __kind: 'deposit_dex_share'
  lpCurrencyId: CurrencyId
  amount: bigint
}

/**
 * Unstake LP token to remove shares of Pool::Dex
 * 
 * The dispatch origin of this call must be `Signed` by the transactor.
 * 
 * - `lp_currency_id`: LP token type
 * - `amount`: amount to unstake
 */
export interface IncentivesCall_withdraw_dex_share {
  __kind: 'withdraw_dex_share'
  lpCurrencyId: CurrencyId
  amount: bigint
}

/**
 * Claim all avalible multi currencies rewards for specific PoolId.
 * 
 * The dispatch origin of this call must be `Signed` by the transactor.
 * 
 * - `pool_id`: pool type
 */
export interface IncentivesCall_claim_rewards {
  __kind: 'claim_rewards'
  poolId: PoolId
}

/**
 * Update incentive reward amount for specific PoolId
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `updates`: Vec<(PoolId, Vec<(RewardCurrencyId, FixedAmountPerPeriod)>)>
 */
export interface IncentivesCall_update_incentive_rewards {
  __kind: 'update_incentive_rewards'
  updates: [PoolId, [CurrencyId, bigint][]][]
}

/**
 * Update DEX saving reward rate for specific PoolId
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `updates`: Vec<(PoolId, Rate)>
 */
export interface IncentivesCall_update_dex_saving_rewards {
  __kind: 'update_dex_saving_rewards'
  updates: [PoolId, FixedU128][]
}

/**
 * Update claim rewards deduction rates for all rewards currencies of specific PoolId
 * 
 * The dispatch origin of this call must be `UpdateOrigin`.
 * 
 * - `updates`: Vec<(PoolId, DecutionRate>)>
 */
export interface IncentivesCall_update_claim_reward_deduction_rates {
  __kind: 'update_claim_reward_deduction_rates'
  updates: [PoolId, FixedU128][]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NFTCall = NFTCall_create_class | NFTCall_mint | NFTCall_transfer | NFTCall_burn | NFTCall_burn_with_remark | NFTCall_destroy_class | NFTCall_update_class_properties

/**
 * Create NFT class, tokens belong to the class.
 * 
 * - `metadata`: external metadata
 * - `properties`: class property, include `Transferable` `Burnable`
 */
export interface NFTCall_create_class {
  __kind: 'create_class'
  metadata: Uint8Array
  properties: BitFlags
  attributes: [Uint8Array, Uint8Array][]
}

/**
 * Mint NFT token
 * 
 * - `to`: the token owner's account
 * - `class_id`: token belong to the class id
 * - `metadata`: external metadata
 * - `quantity`: token quantity
 */
export interface NFTCall_mint {
  __kind: 'mint'
  to: MultiAddress
  classId: number
  metadata: Uint8Array
  attributes: [Uint8Array, Uint8Array][]
  quantity: number
}

/**
 * Transfer NFT token to another account
 * 
 * - `to`: the token owner's account
 * - `token`: (class_id, token_id)
 */
export interface NFTCall_transfer {
  __kind: 'transfer'
  to: MultiAddress
  token: [number, bigint]
}

/**
 * Burn NFT token
 * 
 * - `token`: (class_id, token_id)
 */
export interface NFTCall_burn {
  __kind: 'burn'
  token: [number, bigint]
}

/**
 * Burn NFT token
 * 
 * - `token`: (class_id, token_id)
 * - `remark`: Vec<u8>
 */
export interface NFTCall_burn_with_remark {
  __kind: 'burn_with_remark'
  token: [number, bigint]
  remark: Uint8Array
}

/**
 * Destroy NFT class, remove dest from proxy, and send all the free
 * balance to dest
 * 
 * - `class_id`: The class ID to destroy
 * - `dest`: The proxy account that will receive free balance
 */
export interface NFTCall_destroy_class {
  __kind: 'destroy_class'
  classId: number
  dest: MultiAddress
}

/**
 * Update NFT class properties. The current class properties must contains
 * ClassPropertiesMutable.
 * 
 * - `class_id`: The class ID to update
 * - `properties`: The new properties
 */
export interface NFTCall_update_class_properties {
  __kind: 'update_class_properties'
  classId: number
  properties: BitFlags
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetRegistryCall = AssetRegistryCall_register_foreign_asset | AssetRegistryCall_update_foreign_asset | AssetRegistryCall_register_stable_asset | AssetRegistryCall_update_stable_asset | AssetRegistryCall_register_erc20_asset | AssetRegistryCall_update_erc20_asset | AssetRegistryCall_register_native_asset | AssetRegistryCall_update_native_asset

export interface AssetRegistryCall_register_foreign_asset {
  __kind: 'register_foreign_asset'
  location: VersionedMultiLocation
  metadata: AssetMetadata
}

export interface AssetRegistryCall_update_foreign_asset {
  __kind: 'update_foreign_asset'
  foreignAssetId: number
  location: VersionedMultiLocation
  metadata: AssetMetadata
}

export interface AssetRegistryCall_register_stable_asset {
  __kind: 'register_stable_asset'
  metadata: AssetMetadata
}

export interface AssetRegistryCall_update_stable_asset {
  __kind: 'update_stable_asset'
  stableAssetId: number
  metadata: AssetMetadata
}

export interface AssetRegistryCall_register_erc20_asset {
  __kind: 'register_erc20_asset'
  contract: H160
  minimalBalance: bigint
}

export interface AssetRegistryCall_update_erc20_asset {
  __kind: 'update_erc20_asset'
  contract: H160
  metadata: AssetMetadata
}

export interface AssetRegistryCall_register_native_asset {
  __kind: 'register_native_asset'
  currencyId: CurrencyId
  metadata: AssetMetadata
}

export interface AssetRegistryCall_update_native_asset {
  __kind: 'update_native_asset'
  currencyId: CurrencyId
  metadata: AssetMetadata
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EVMCall = EVMCall_eth_call | EVMCall_call | EVMCall_scheduled_call | EVMCall_create | EVMCall_create2 | EVMCall_create_nft_contract | EVMCall_create_predeploy_contract | EVMCall_transfer_maintainer | EVMCall_publish_contract | EVMCall_publish_free | EVMCall_enable_contract_development | EVMCall_disable_contract_development | EVMCall_set_code | EVMCall_selfdestruct

export interface EVMCall_eth_call {
  __kind: 'eth_call'
  action: TransactionAction
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
  validUntil: number
}

/**
 * Issue an EVM call operation. This is similar to a message call
 * transaction in Ethereum.
 * 
 * - `target`: the contract address to call
 * - `input`: the data supplied for the call
 * - `value`: the amount sent for payable calls
 * - `gas_limit`: the maximum gas the call can use
 * - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_call {
  __kind: 'call'
  target: H160
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

/**
 * Issue an EVM call operation on a scheduled contract call, and
 * refund the unused gas reserved when the call was scheduled.
 * 
 * - `from`: the address the scheduled call originates from
 * - `target`: the contract address to call
 * - `input`: the data supplied for the call
 * - `value`: the amount sent for payable calls
 * - `gas_limit`: the maximum gas the call can use
 * - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_scheduled_call {
  __kind: 'scheduled_call'
  from: H160
  target: H160
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

/**
 * Issue an EVM create operation. This is similar to a contract
 * creation transaction in Ethereum.
 * 
 * - `input`: the data supplied for the contract's constructor
 * - `value`: the amount sent to the contract upon creation
 * - `gas_limit`: the maximum gas the call can use
 * - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create {
  __kind: 'create'
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

/**
 * Issue an EVM create2 operation.
 * 
 * - `target`: the contract address to call
 * - `input`: the data supplied for the contract's constructor
 * - `salt`: used for generating the new contract's address
 * - `value`: the amount sent for payable calls
 * - `gas_limit`: the maximum gas the call can use
 * - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create2 {
  __kind: 'create2'
  input: Uint8Array
  salt: H256
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

/**
 * Create mirrored NFT contract. The next available system contract
 * address will be used as created contract address.
 * 
 * - `input`: the data supplied for the contract's constructor
 * - `value`: the amount sent for payable calls
 * - `gas_limit`: the maximum gas the call can use
 * - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create_nft_contract {
  __kind: 'create_nft_contract'
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

/**
 * Issue an EVM create operation. The address specified
 * will be used as created contract address.
 * 
 * - `target`: the address specified by the contract
 * - `input`: the data supplied for the contract's constructor
 * - `value`: the amount sent for payable calls
 * - `gas_limit`: the maximum gas the call can use
 * - `storage_limit`: the total bytes the contract's storage can increase by
 */
export interface EVMCall_create_predeploy_contract {
  __kind: 'create_predeploy_contract'
  target: H160
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

/**
 * Transfers Contract maintainership to a new EVM Address.
 * 
 * - `contract`: the contract whose maintainership is being transferred, the caller must be
 *   the contract's maintainer
 * - `new_maintainer`: the address of the new maintainer
 */
export interface EVMCall_transfer_maintainer {
  __kind: 'transfer_maintainer'
  contract: H160
  newMaintainer: H160
}

/**
 * Mark a given contract as published.
 * 
 * - `contract`: The contract to mark as published, the caller must the contract's
 *   maintainer
 */
export interface EVMCall_publish_contract {
  __kind: 'publish_contract'
  contract: H160
}

/**
 * Mark a given contract as published without paying the publication fee
 * 
 * - `contract`: The contract to mark as published, the caller must be the contract's
 *   maintainer.
 */
export interface EVMCall_publish_free {
  __kind: 'publish_free'
  contract: H160
}

/**
 * Mark the caller's address to allow contract development.
 * This allows the address to interact with non-published contracts.
 */
export interface EVMCall_enable_contract_development {
  __kind: 'enable_contract_development'
}

/**
 * Mark the caller's address to disable contract development.
 * This disallows the address to interact with non-published contracts.
 */
export interface EVMCall_disable_contract_development {
  __kind: 'disable_contract_development'
}

/**
 * Set the code of a contract at a given address.
 * 
 * - `contract`: The contract whose code is being set, must not be marked as published
 * - `code`: The new ABI bundle for the contract
 */
export interface EVMCall_set_code {
  __kind: 'set_code'
  contract: H160
  code: Uint8Array
}

/**
 * Remove a contract at a given address.
 * 
 * - `contract`: The contract to remove, must not be marked as published
 */
export interface EVMCall_selfdestruct {
  __kind: 'selfdestruct'
  contract: H160
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EvmAccountsCall = EvmAccountsCall_claim_account | EvmAccountsCall_claim_default_account

/**
 * Claim account mapping between Substrate accounts and EVM accounts.
 * Ensure eth_address has not been mapped.
 * 
 * - `eth_address`: The address to bind to the caller's account
 * - `eth_signature`: A signature generated by the address to prove ownership
 */
export interface EvmAccountsCall_claim_account {
  __kind: 'claim_account'
  ethAddress: H160
  ethSignature: Uint8Array
}

/**
 * Claim account mapping between Substrate accounts and a generated EVM
 * address based off of those accounts.
 * Ensure eth_address has not been mapped
 */
export interface EvmAccountsCall_claim_default_account {
  __kind: 'claim_default_account'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StableAssetCall = StableAssetCall_create_pool | StableAssetCall_mint | StableAssetCall_swap | StableAssetCall_redeem_proportion | StableAssetCall_redeem_single | StableAssetCall_redeem_multi | StableAssetCall_modify_a

export interface StableAssetCall_create_pool {
  __kind: 'create_pool'
  poolAsset: CurrencyId
  assets: CurrencyId[]
  precisions: bigint[]
  mintFee: bigint
  swapFee: bigint
  redeemFee: bigint
  initialA: bigint
  feeRecipient: AccountId32
  yieldRecipient: AccountId32
  precision: bigint
}

export interface StableAssetCall_mint {
  __kind: 'mint'
  poolId: number
  amounts: bigint[]
  minMintAmount: bigint
}

export interface StableAssetCall_swap {
  __kind: 'swap'
  poolId: number
  i: number
  j: number
  dx: bigint
  minDy: bigint
  assetLength: number
}

export interface StableAssetCall_redeem_proportion {
  __kind: 'redeem_proportion'
  poolId: number
  amount: bigint
  minRedeemAmounts: bigint[]
}

export interface StableAssetCall_redeem_single {
  __kind: 'redeem_single'
  poolId: number
  amount: bigint
  i: number
  minRedeemAmount: bigint
  assetLength: number
}

export interface StableAssetCall_redeem_multi {
  __kind: 'redeem_multi'
  poolId: number
  amounts: bigint[]
  maxRedeemAmount: bigint
}

export interface StableAssetCall_modify_a {
  __kind: 'modify_a'
  poolId: number
  a: bigint
  futureABlock: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
  __kind: 'set_validation_data'
  data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
  __kind: 'sudo_send_upward_message'
  message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
  __kind: 'authorize_upgrade'
  codeHash: H256
}

export interface ParachainSystemCall_enact_authorized_upgrade {
  __kind: 'enact_authorized_upgrade'
  code: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo {
  __kind: 'sudo'
  call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight'
  call: Call
  weight: bigint
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
 */
export interface SudoCall_set_key {
  __kind: 'set_key'
  new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
  __kind: 'sudo_as'
  who: MultiAddress
  call: Call
}

export type Perbill = number

export type MaybeHashed = MaybeHashed_Value | MaybeHashed_Hash

export interface MaybeHashed_Value {
  __kind: 'Value'
  value: Call
}

export interface MaybeHashed_Hash {
  __kind: 'Hash'
  value: H256
}

export type OriginCaller = OriginCaller_system | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Authority | OriginCaller_GeneralCouncil | OriginCaller_FinancialCouncil | OriginCaller_HomaCouncil | OriginCaller_TechnicalCommittee | OriginCaller_Void

export interface OriginCaller_system {
  __kind: 'system'
  value: RawOrigin_115
}

export interface OriginCaller_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: Origin_116
}

export interface OriginCaller_CumulusXcm {
  __kind: 'CumulusXcm'
  value: Origin_117
}

export interface OriginCaller_Authority {
  __kind: 'Authority'
  value: DelayedOrigin
}

export interface OriginCaller_GeneralCouncil {
  __kind: 'GeneralCouncil'
  value: RawOrigin_119
}

export interface OriginCaller_FinancialCouncil {
  __kind: 'FinancialCouncil'
  value: RawOrigin_119
}

export interface OriginCaller_HomaCouncil {
  __kind: 'HomaCouncil'
  value: RawOrigin_119
}

export interface OriginCaller_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: RawOrigin_119
}

export interface OriginCaller_Void {
  __kind: 'Void'
  value: Void
}

export type AccountId32 = Uint8Array

export interface Timepoint {
  height: number
  index: number
}

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_Auction | ProxyType_Swap | ProxyType_Loan | ProxyType_DexLiquidity | ProxyType_StableAssetSwap | ProxyType_StableAssetLiquidity

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

export interface ProxyType_DexLiquidity {
  __kind: 'DexLiquidity'
}

export interface ProxyType_StableAssetSwap {
  __kind: 'StableAssetSwap'
}

export interface ProxyType_StableAssetLiquidity {
  __kind: 'StableAssetLiquidity'
}

export type ScheduledTasks = ScheduledTasks_EvmTask

export interface ScheduledTasks_EvmTask {
  __kind: 'EvmTask'
  value: EvmTask
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
  __kind: 'Id'
  value: AccountId32
}

export interface MultiAddress_Index {
  __kind: 'Index'
  value: number
}

export interface MultiAddress_Raw {
  __kind: 'Raw'
  value: Uint8Array
}

export interface MultiAddress_Address32 {
  __kind: 'Address32'
  value: Uint8Array
}

export interface MultiAddress_Address20 {
  __kind: 'Address20'
  value: Uint8Array
}

export type CurrencyId = CurrencyId_Token | CurrencyId_DexShare | CurrencyId_Erc20 | CurrencyId_StableAssetPoolToken | CurrencyId_LiquidCrowdloan | CurrencyId_ForeignAsset

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_DexShare {
  __kind: 'DexShare'
  value: [DexShare, DexShare]
}

export interface CurrencyId_Erc20 {
  __kind: 'Erc20'
  value: H160
}

export interface CurrencyId_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export interface CurrencyId_LiquidCrowdloan {
  __kind: 'LiquidCrowdloan'
  value: number
}

export interface CurrencyId_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export interface VestingSchedule {
  start: number
  period: number
  periodCount: number
  perPeriod: bigint
}

export interface Header {
  parentHash: H256
  number: number
  stateRoot: H256
  extrinsicsRoot: H256
  digest: Digest
}

export interface SessionKeys {
  aura: Public
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: V1MultiLocation
}

export type VersionedXcm_245 = VersionedXcm_245_V0 | VersionedXcm_245_V1 | VersionedXcm_245_V2

export interface VersionedXcm_245_V0 {
  __kind: 'V0'
  value: V0Xcm_246
}

export interface VersionedXcm_245_V1 {
  __kind: 'V1'
  value: V1Xcm_251
}

export interface VersionedXcm_245_V2 {
  __kind: 'V2'
  value: V2Instruction_84[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAssets
}

export type VersionedXcm_256 = VersionedXcm_256_V0 | VersionedXcm_256_V1 | VersionedXcm_256_V2

export interface VersionedXcm_256_V0 {
  __kind: 'V0'
  value: V0Xcm_257
}

export interface VersionedXcm_256_V1 {
  __kind: 'V1'
  value: V1Xcm_262
}

export interface VersionedXcm_256_V2 {
  __kind: 'V2'
  value: V2Instruction_268[]
}

export interface V1MultiLocation {
  parents: number
  interior: V1Junctions
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited'
  value: bigint
}

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
  __kind: 'V0'
  value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
  __kind: 'V1'
  value: V1MultiAsset
}

export type AuthoritysOriginId = AuthoritysOriginId_Root | AuthoritysOriginId_Treasury | AuthoritysOriginId_HonzonTreasury | AuthoritysOriginId_HomaTreasury | AuthoritysOriginId_TreasuryReserve

export interface AuthoritysOriginId_Root {
  __kind: 'Root'
}

export interface AuthoritysOriginId_Treasury {
  __kind: 'Treasury'
}

export interface AuthoritysOriginId_HonzonTreasury {
  __kind: 'HonzonTreasury'
}

export interface AuthoritysOriginId_HomaTreasury {
  __kind: 'HomaTreasury'
}

export interface AuthoritysOriginId_TreasuryReserve {
  __kind: 'TreasuryReserve'
}

export type DispatchTime = DispatchTime_At | DispatchTime_After

export interface DispatchTime_At {
  __kind: 'At'
  value: number
}

export interface DispatchTime_After {
  __kind: 'After'
  value: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  vote: Vote
  balance: bigint
}

export interface AccountVote_Split {
  __kind: 'Split'
  aye: bigint
  nay: bigint
}

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

export type FixedU128 = bigint

export type SwapLimit = SwapLimit_ExactSupply | SwapLimit_ExactTarget

export interface SwapLimit_ExactSupply {
  __kind: 'ExactSupply'
  value: [bigint, bigint]
}

export interface SwapLimit_ExactTarget {
  __kind: 'ExactTarget'
  value: [bigint, bigint]
}

export type Change_300 = Change_300_NoChange | Change_300_NewValue

export interface Change_300_NoChange {
  __kind: 'NoChange'
}

export interface Change_300_NewValue {
  __kind: 'NewValue'
  value: (FixedU128 | undefined)
}

export type Change_301 = Change_301_NoChange | Change_301_NewValue

export interface Change_301_NoChange {
  __kind: 'NoChange'
}

export interface Change_301_NewValue {
  __kind: 'NewValue'
  value: bigint
}

export interface UnlockChunk {
  value: bigint
  era: number
}

export type XcmInterfaceOperation = XcmInterfaceOperation_XtokensTransfer | XcmInterfaceOperation_HomaWithdrawUnbonded | XcmInterfaceOperation_HomaBondExtra | XcmInterfaceOperation_HomaUnbond | XcmInterfaceOperation_ParachainFee

export interface XcmInterfaceOperation_XtokensTransfer {
  __kind: 'XtokensTransfer'
}

export interface XcmInterfaceOperation_HomaWithdrawUnbonded {
  __kind: 'HomaWithdrawUnbonded'
}

export interface XcmInterfaceOperation_HomaBondExtra {
  __kind: 'HomaBondExtra'
}

export interface XcmInterfaceOperation_HomaUnbond {
  __kind: 'HomaUnbond'
}

export interface XcmInterfaceOperation_ParachainFee {
  __kind: 'ParachainFee'
  value: V1MultiLocation
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

export type BitFlags = number

export interface AssetMetadata {
  name: Uint8Array
  symbol: Uint8Array
  decimals: number
  minimalBalance: bigint
}

export type H160 = Uint8Array

export type TransactionAction = TransactionAction_Call | TransactionAction_Create

export interface TransactionAction_Call {
  __kind: 'Call'
  value: H160
}

export interface TransactionAction_Create {
  __kind: 'Create'
}

export interface AccessListItem {
  address: H160
  storageKeys: H256[]
}

export interface ParachainInherentData {
  validationData: V2PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export type RawOrigin_115 = RawOrigin_115_Root | RawOrigin_115_Signed | RawOrigin_115_None

export interface RawOrigin_115_Root {
  __kind: 'Root'
}

export interface RawOrigin_115_Signed {
  __kind: 'Signed'
  value: AccountId32
}

export interface RawOrigin_115_None {
  __kind: 'None'
}

export type Origin_116 = Origin_116_Xcm | Origin_116_Response

export interface Origin_116_Xcm {
  __kind: 'Xcm'
  value: V1MultiLocation
}

export interface Origin_116_Response {
  __kind: 'Response'
  value: V1MultiLocation
}

export type Origin_117 = Origin_117_Relay | Origin_117_SiblingParachain

export interface Origin_117_Relay {
  __kind: 'Relay'
}

export interface Origin_117_SiblingParachain {
  __kind: 'SiblingParachain'
  value: Id
}

export interface DelayedOrigin {
  delay: number
  origin: OriginCaller
}

export type RawOrigin_119 = RawOrigin_119_Members | RawOrigin_119_Member | RawOrigin_119__Phantom

export interface RawOrigin_119_Members {
  __kind: 'Members'
  value: [number, number]
}

export interface RawOrigin_119_Member {
  __kind: 'Member'
  value: AccountId32
}

export interface RawOrigin_119__Phantom {
  __kind: '_Phantom'
}

export type Void = never

export type EvmTask = EvmTask_Schedule | EvmTask_Remove

export interface EvmTask_Schedule {
  __kind: 'Schedule'
  from: H160
  target: H160
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
}

export interface EvmTask_Remove {
  __kind: 'Remove'
  caller: H160
  contract: H160
  maintainer: H160
}

export type TokenSymbol = TokenSymbol_ACA | TokenSymbol_AUSD | TokenSymbol_DOT | TokenSymbol_LDOT | TokenSymbol_RENBTC | TokenSymbol_CASH | TokenSymbol_KAR | TokenSymbol_KUSD | TokenSymbol_KSM | TokenSymbol_LKSM | TokenSymbol_TAI | TokenSymbol_BNC | TokenSymbol_VSKSM | TokenSymbol_PHA | TokenSymbol_KINT | TokenSymbol_KBTC

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

export interface TokenSymbol_TAI {
  __kind: 'TAI'
}

export interface TokenSymbol_BNC {
  __kind: 'BNC'
}

export interface TokenSymbol_VSKSM {
  __kind: 'VSKSM'
}

export interface TokenSymbol_PHA {
  __kind: 'PHA'
}

export interface TokenSymbol_KINT {
  __kind: 'KINT'
}

export interface TokenSymbol_KBTC {
  __kind: 'KBTC'
}

export type DexShare = DexShare_Token | DexShare_Erc20 | DexShare_LiquidCrowdloan | DexShare_ForeignAsset | DexShare_StableAssetPoolToken

export interface DexShare_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface DexShare_Erc20 {
  __kind: 'Erc20'
  value: H160
}

export interface DexShare_LiquidCrowdloan {
  __kind: 'LiquidCrowdloan'
  value: number
}

export interface DexShare_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export interface DexShare_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export interface Digest {
  logs: DigestItem[]
}

export type Public = Uint8Array

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
  __kind: 'Null'
}

export interface V0MultiLocation_X1 {
  __kind: 'X1'
  value: V0Junction
}

export interface V0MultiLocation_X2 {
  __kind: 'X2'
  value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
  __kind: 'X3'
  value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
  __kind: 'X4'
  value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
  __kind: 'X5'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
  __kind: 'X6'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
  __kind: 'X7'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
  __kind: 'X8'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export type V0Xcm_246 = V0Xcm_246_WithdrawAsset | V0Xcm_246_ReserveAssetDeposit | V0Xcm_246_TeleportAsset | V0Xcm_246_QueryResponse | V0Xcm_246_TransferAsset | V0Xcm_246_TransferReserveAsset | V0Xcm_246_Transact | V0Xcm_246_HrmpNewChannelOpenRequest | V0Xcm_246_HrmpChannelAccepted | V0Xcm_246_HrmpChannelClosing | V0Xcm_246_RelayedFrom

export interface V0Xcm_246_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_248[]
}

export interface V0Xcm_246_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_248[]
}

export interface V0Xcm_246_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_248[]
}

export interface V0Xcm_246_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_246_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_246_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Xcm_246_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_246_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_246_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_246_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_246_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_246
}

export type V1Xcm_251 = V1Xcm_251_WithdrawAsset | V1Xcm_251_ReserveAssetDeposited | V1Xcm_251_ReceiveTeleportedAsset | V1Xcm_251_QueryResponse | V1Xcm_251_TransferAsset | V1Xcm_251_TransferReserveAsset | V1Xcm_251_Transact | V1Xcm_251_HrmpNewChannelOpenRequest | V1Xcm_251_HrmpChannelAccepted | V1Xcm_251_HrmpChannelClosing | V1Xcm_251_RelayedFrom | V1Xcm_251_SubscribeVersion | V1Xcm_251_UnsubscribeVersion

export interface V1Xcm_251_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_253[]
}

export interface V1Xcm_251_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_253[]
}

export interface V1Xcm_251_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_253[]
}

export interface V1Xcm_251_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_251_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_251_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Xcm_251_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_251_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_251_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_251_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_251_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_251
}

export interface V1Xcm_251_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_251_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction_84 = V2Instruction_84_WithdrawAsset | V2Instruction_84_ReserveAssetDeposited | V2Instruction_84_ReceiveTeleportedAsset | V2Instruction_84_QueryResponse | V2Instruction_84_TransferAsset | V2Instruction_84_TransferReserveAsset | V2Instruction_84_Transact | V2Instruction_84_HrmpNewChannelOpenRequest | V2Instruction_84_HrmpChannelAccepted | V2Instruction_84_HrmpChannelClosing | V2Instruction_84_ClearOrigin | V2Instruction_84_DescendOrigin | V2Instruction_84_ReportError | V2Instruction_84_DepositAsset | V2Instruction_84_DepositReserveAsset | V2Instruction_84_ExchangeAsset | V2Instruction_84_InitiateReserveWithdraw | V2Instruction_84_InitiateTeleport | V2Instruction_84_QueryHolding | V2Instruction_84_BuyExecution | V2Instruction_84_RefundSurplus | V2Instruction_84_SetErrorHandler | V2Instruction_84_SetAppendix | V2Instruction_84_ClearError | V2Instruction_84_ClaimAsset | V2Instruction_84_Trap | V2Instruction_84_SubscribeVersion | V2Instruction_84_UnsubscribeVersion

export interface V2Instruction_84_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_84_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_84_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_84_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_84_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_84_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_84_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_84_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_84_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_84_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_84_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_84_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_84_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_84_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_84_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_84_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_84_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_84_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_84_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_84_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_84_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_84_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_84[]
}

export interface V2Instruction_84_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_84[]
}

export interface V2Instruction_84_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_84_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_84_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_84_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_84_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
  __kind: 'None'
}

export interface V0MultiAsset_All {
  __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
  __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: V0MultiLocation
  amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: V0MultiLocation
  instance: V1AssetInstance
}

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export type V1MultiAssets = V1MultiAsset[]

export type V0Xcm_257 = V0Xcm_257_WithdrawAsset | V0Xcm_257_ReserveAssetDeposit | V0Xcm_257_TeleportAsset | V0Xcm_257_QueryResponse | V0Xcm_257_TransferAsset | V0Xcm_257_TransferReserveAsset | V0Xcm_257_Transact | V0Xcm_257_HrmpNewChannelOpenRequest | V0Xcm_257_HrmpChannelAccepted | V0Xcm_257_HrmpChannelClosing | V0Xcm_257_RelayedFrom

export interface V0Xcm_257_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_259[]
}

export interface V0Xcm_257_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_259[]
}

export interface V0Xcm_257_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_259[]
}

export interface V0Xcm_257_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_257_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_257_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Xcm_257_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_257_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_257_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_257_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_257_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_257
}

export type V1Xcm_262 = V1Xcm_262_WithdrawAsset | V1Xcm_262_ReserveAssetDeposited | V1Xcm_262_ReceiveTeleportedAsset | V1Xcm_262_QueryResponse | V1Xcm_262_TransferAsset | V1Xcm_262_TransferReserveAsset | V1Xcm_262_Transact | V1Xcm_262_HrmpNewChannelOpenRequest | V1Xcm_262_HrmpChannelAccepted | V1Xcm_262_HrmpChannelClosing | V1Xcm_262_RelayedFrom | V1Xcm_262_SubscribeVersion | V1Xcm_262_UnsubscribeVersion

export interface V1Xcm_262_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_264[]
}

export interface V1Xcm_262_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_264[]
}

export interface V1Xcm_262_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_264[]
}

export interface V1Xcm_262_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_262_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_262_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Xcm_262_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_262_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_262_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_262_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_262_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_262
}

export interface V1Xcm_262_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_262_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction_268 = V2Instruction_268_WithdrawAsset | V2Instruction_268_ReserveAssetDeposited | V2Instruction_268_ReceiveTeleportedAsset | V2Instruction_268_QueryResponse | V2Instruction_268_TransferAsset | V2Instruction_268_TransferReserveAsset | V2Instruction_268_Transact | V2Instruction_268_HrmpNewChannelOpenRequest | V2Instruction_268_HrmpChannelAccepted | V2Instruction_268_HrmpChannelClosing | V2Instruction_268_ClearOrigin | V2Instruction_268_DescendOrigin | V2Instruction_268_ReportError | V2Instruction_268_DepositAsset | V2Instruction_268_DepositReserveAsset | V2Instruction_268_ExchangeAsset | V2Instruction_268_InitiateReserveWithdraw | V2Instruction_268_InitiateTeleport | V2Instruction_268_QueryHolding | V2Instruction_268_BuyExecution | V2Instruction_268_RefundSurplus | V2Instruction_268_SetErrorHandler | V2Instruction_268_SetAppendix | V2Instruction_268_ClearError | V2Instruction_268_ClaimAsset | V2Instruction_268_Trap | V2Instruction_268_SubscribeVersion | V2Instruction_268_UnsubscribeVersion

export interface V2Instruction_268_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_268_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_268_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_268_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_268_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_268_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_268_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_268_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_268_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_268_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_268_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_268_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_268_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_268_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_268_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_268_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_268_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_268_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_268_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_268_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_268_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_268_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_268[]
}

export interface V2Instruction_268_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_268[]
}

export interface V2Instruction_268_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_268_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_268_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_268_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_268_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
  __kind: 'Here'
}

export interface V1Junctions_X1 {
  __kind: 'X1'
  value: V1Junction
}

export interface V1Junctions_X2 {
  __kind: 'X2'
  value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
  __kind: 'X3'
  value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
  __kind: 'X4'
  value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
  __kind: 'X5'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
  __kind: 'X6'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
  __kind: 'X7'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
  __kind: 'X8'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type Vote = number

export interface V2PersistedValidationData {
  parentHead: HeadData
  relayParentNumber: number
  relayParentStorageRoot: H256
  maxPovSize: number
}

export interface StorageProof {
  trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
  sentAt: number
  msg: Uint8Array
}

export type Id = number

export interface InboundHrmpMessage {
  sentAt: number
  data: Uint8Array
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
  __kind: 'Parent'
}

export interface V0Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V0Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V0Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V0Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V0Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V0Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V0Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V0Order_248 = V0Order_248_Null | V0Order_248_DepositAsset | V0Order_248_DepositReserveAsset | V0Order_248_ExchangeAsset | V0Order_248_InitiateReserveWithdraw | V0Order_248_InitiateTeleport | V0Order_248_QueryHolding | V0Order_248_BuyExecution

export interface V0Order_248_Null {
  __kind: 'Null'
}

export interface V0Order_248_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_248_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Order_248_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_248_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Order_248_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Order_248_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_248_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_246[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
  __kind: 'Assets'
  value: V0MultiAsset[]
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
  __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
  __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
  __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
  __kind: 'Xcm'
}

export interface DoubleEncoded {
  encoded: Uint8Array
}

export type V1Order_253 = V1Order_253_Noop | V1Order_253_DepositAsset | V1Order_253_DepositReserveAsset | V1Order_253_ExchangeAsset | V1Order_253_InitiateReserveWithdraw | V1Order_253_InitiateTeleport | V1Order_253_QueryHolding | V1Order_253_BuyExecution

export interface V1Order_253_Noop {
  __kind: 'Noop'
}

export interface V1Order_253_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_253_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Order_253_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_253_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Order_253_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Order_253_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_253_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_251[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
  __kind: 'Assets'
  value: V1MultiAssets
}

export interface V1Response_Version {
  __kind: 'Version'
  value: number
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
  __kind: 'Null'
}

export interface V2Response_Assets {
  __kind: 'Assets'
  value: V1MultiAssets
}

export interface V2Response_ExecutionResult {
  __kind: 'ExecutionResult'
  value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
  __kind: 'Version'
  value: number
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
  __kind: 'Definite'
  value: V1MultiAssets
}

export interface V1MultiAssetFilter_Wild {
  __kind: 'Wild'
  value: V1WildMultiAsset
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
  __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
  __kind: 'Index'
  value: bigint
}

export interface V1AssetInstance_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface V1AssetInstance_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface V1AssetInstance_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface V1AssetInstance_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface V1AssetInstance_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
  __kind: 'Concrete'
  value: V1MultiLocation
}

export interface V1AssetId_Abstract {
  __kind: 'Abstract'
  value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface V1Fungibility_NonFungible {
  __kind: 'NonFungible'
  value: V1AssetInstance
}

export type V0Order_259 = V0Order_259_Null | V0Order_259_DepositAsset | V0Order_259_DepositReserveAsset | V0Order_259_ExchangeAsset | V0Order_259_InitiateReserveWithdraw | V0Order_259_InitiateTeleport | V0Order_259_QueryHolding | V0Order_259_BuyExecution

export interface V0Order_259_Null {
  __kind: 'Null'
}

export interface V0Order_259_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_259_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Order_259_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_259_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Order_259_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_248[]
}

export interface V0Order_259_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_259_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_257[]
}

export type V1Order_264 = V1Order_264_Noop | V1Order_264_DepositAsset | V1Order_264_DepositReserveAsset | V1Order_264_ExchangeAsset | V1Order_264_InitiateReserveWithdraw | V1Order_264_InitiateTeleport | V1Order_264_QueryHolding | V1Order_264_BuyExecution

export interface V1Order_264_Noop {
  __kind: 'Noop'
}

export interface V1Order_264_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_264_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Order_264_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_264_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Order_264_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_253[]
}

export interface V1Order_264_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_264_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_262[]
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V1Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V1Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V1Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V1Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V1Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V1Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type HeadData = Uint8Array

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
  __kind: 'Any'
}

export interface V0NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0NetworkId_Polkadot {
  __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
  __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
  __kind: 'Unit'
}

export interface V0BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface V0BodyId_Executive {
  __kind: 'Executive'
}

export interface V0BodyId_Technical {
  __kind: 'Technical'
}

export interface V0BodyId_Legislative {
  __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
  __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
  __kind: 'Voice'
}

export interface V0BodyPart_Members {
  __kind: 'Members'
  count: number
}

export interface V0BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface V0BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface V0BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
  __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
  __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
  __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
  __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
  __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
  __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
  __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
  __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
  __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
  __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
  __kind: 'Transport'
}

export interface V2Error_Unroutable {
  __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
  __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
  __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
  __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
  __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
  __kind: 'TooExpensive'
}

export interface V2Error_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Error_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
  __kind: 'WeightLimitReached'
  value: bigint
}

export interface V2Error_Barrier {
  __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
  __kind: 'WeightNotComputable'
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
  __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
  __kind: 'AllOf'
  id: V1AssetId
  fun: V1WildFungibility
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
  __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
  __kind: 'NonFungible'
}
