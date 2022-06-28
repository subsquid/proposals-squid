import type {Result} from './support'

export type H256 = Uint8Array

export type Call = Call_System | Call_Timestamp | Call_Indices | Call_ParachainSystem | Call_Balances | Call_Authorship | Call_CollatorSelection | Call_Session | Call_Democracy | Call_Council | Call_TechnicalCommittee | Call_PhragmenElection | Call_CouncilMembership | Call_TechnicalMembership | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_Utility | Call_Scheduler | Call_Proxy | Call_Multisig | Call_Identity | Call_Vesting | Call_Treasury | Call_Bounties | Call_Tips | Call_XTokens | Call_Tokens | Call_Currencies | Call_OrmlXcm | Call_ZenlinkProtocol | Call_MerkleDistributor | Call_FlexibleFee | Call_Salp | Call_LiquidityMiningDOT | Call_LiquidityMining | Call_TokenIssuer | Call_LighteningRedeem | Call_SalpLite | Call_CallSwitchgear | Call_VSBondAuction

export interface Call_System {
  __kind: 'System'
  value: SystemCall
}

export interface Call_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Call_Indices {
  __kind: 'Indices'
  value: IndicesCall
}

export interface Call_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Call_Balances {
  __kind: 'Balances'
  value: BalancesCall
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

export interface Call_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Call_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Call_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Call_PhragmenElection {
  __kind: 'PhragmenElection'
  value: PhragmenElectionCall
}

export interface Call_CouncilMembership {
  __kind: 'CouncilMembership'
  value: CouncilMembershipCall
}

export interface Call_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Call_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Call_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Call_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmCall
}

export interface Call_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Call_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Call_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Call_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface Call_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Call_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Call_Vesting {
  __kind: 'Vesting'
  value: VestingCall
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

export interface Call_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Call_Tokens {
  __kind: 'Tokens'
  value: TokensCall
}

export interface Call_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Call_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface Call_ZenlinkProtocol {
  __kind: 'ZenlinkProtocol'
  value: ZenlinkProtocolCall
}

export interface Call_MerkleDistributor {
  __kind: 'MerkleDistributor'
  value: MerkleDistributorCall
}

export interface Call_FlexibleFee {
  __kind: 'FlexibleFee'
  value: FlexibleFeeCall
}

export interface Call_Salp {
  __kind: 'Salp'
  value: SalpCall
}

export interface Call_LiquidityMiningDOT {
  __kind: 'LiquidityMiningDOT'
  value: LiquidityMiningDOTCall
}

export interface Call_LiquidityMining {
  __kind: 'LiquidityMining'
  value: LiquidityMiningCall
}

export interface Call_TokenIssuer {
  __kind: 'TokenIssuer'
  value: TokenIssuerCall
}

export interface Call_LighteningRedeem {
  __kind: 'LighteningRedeem'
  value: LighteningRedeemCall
}

export interface Call_SalpLite {
  __kind: 'SalpLite'
  value: SalpLiteCall
}

export interface Call_CallSwitchgear {
  __kind: 'CallSwitchgear'
  value: CallSwitchgearCall
}

export interface Call_VSBondAuction {
  __kind: 'VSBondAuction'
  value: VSBondAuctionCall
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

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
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write.
 * - Base Weight: 1.405 µs
 * - 1 write to HEAP_PAGES
 * - 1 digest item
 * # </weight>
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
 * Set the new changes trie configuration.
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write or delete (codec `O(1)`).
 * - 1 call to `deposit_log`: Uses `append` API, so O(1)
 * - Base Weight: 7.218 µs
 * - DB Weight:
 *     - Writes: Changes Trie, System Digest
 * # </weight>
 */
export interface SystemCall_set_changes_trie_config {
  __kind: 'set_changes_trie_config'
  changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 * Set some items of storage.
 * 
 * # <weight>
 * - `O(I)` where `I` length of `items`
 * - `I` storage writes (`O(1)`).
 * - Base Weight: 0.568 * i µs
 * - Writes: Number of items
 * # </weight>
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 * 
 * # <weight>
 * - `O(IK)` where `I` length of `keys` and `K` length of one key
 * - `I` storage deletions.
 * - Base Weight: .378 * i µs
 * - Writes: Number of items
 * # </weight>
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
 * 
 * # <weight>
 * - `O(P)` where `P` amount of keys with prefix `prefix`
 * - `P` storage deletions.
 * - Base Weight: 0.834 * P µs
 * - Writes: Number of subkeys + 1
 * # </weight>
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 * 
 * # <weight>
 * - `O(b)` where b is the length of the remark.
 * - 1 event.
 * # </weight>
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
export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 * Assign an previously unassigned index.
 * 
 * Payment: `Deposit` is reserved from the sender account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be claimed. This must not be in use.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One reserve operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_claim {
  __kind: 'claim'
  index: number
}

/**
 * Assign an index already owned by the sender to another account. The balance reservation
 * is effectively transferred to the new account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `index`: the index to be re-assigned. This must be owned by the sender.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One transfer operation.
 * - One event.
 * -------------------
 * - DB Weight:
 *    - Reads: Indices Accounts, System Account (recipient)
 *    - Writes: Indices Accounts, System Account (recipient)
 * # </weight>
 */
export interface IndicesCall_transfer {
  __kind: 'transfer'
  new: AccountId32
  index: number
}

/**
 * Free up an index owned by the sender.
 * 
 * Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 * - `index`: the index to be freed. This must be owned by the sender.
 * 
 * Emits `IndexFreed` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - One reserve operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_free {
  __kind: 'free'
  index: number
}

/**
 * Force an index to an account. This doesn't require a deposit. If the index is already
 * held, then any deposit is reimbursed to its current owner.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `index`: the index to be (re-)assigned.
 * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 * Emits `IndexAssigned` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - Up to one reserve operation.
 * - One event.
 * -------------------
 * - DB Weight:
 *    - Reads: Indices Accounts, System Account (original owner)
 *    - Writes: Indices Accounts, System Account (original owner)
 * # </weight>
 */
export interface IndicesCall_force_transfer {
  __kind: 'force_transfer'
  new: AccountId32
  index: number
  freeze: boolean
}

/**
 * Freeze an index so it will always point to the sender account. This consumes the
 * deposit.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must have a
 * non-frozen account `index`.
 * 
 * - `index`: the index to be frozen in place.
 * 
 * Emits `IndexFrozen` if successful.
 * 
 * # <weight>
 * - `O(1)`.
 * - One storage mutation (codec `O(1)`).
 * - Up to one slash operation.
 * - One event.
 * -------------------
 * - DB Weight: 1 Read/Write (Accounts)
 * # </weight>
 */
export interface IndicesCall_freeze {
  __kind: 'freeze'
  index: number
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
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the `TransferFee`.
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
 * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 * - DB Weight: 1 Read and 1 Write to destination account
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
 * also decrease the total issuance of the system (`TotalIssuance`).
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 * 
 * # <weight>
 * - Independent of the arguments.
 * - Contains a limited number of reads and writes.
 * ---------------------
 * - Base Weight:
 *     - Creating: 27.56 µs
 *     - Killing: 35.11 µs
 * - DB Weight: 1 Read, 1 Write to `who`
 * # </weight>
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
 * # <weight>
 * - Cheaper than transfer because account cannot be killed.
 * - Base Weight: 51.4 µs
 * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 * #</weight>
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
export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

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

export interface CollatorSelectionCall_leave_intent {
  __kind: 'leave_intent'
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
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

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
export interface CouncilCall_set_members {
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
export interface CouncilCall_execute {
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
export interface CouncilCall_propose {
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
export interface CouncilCall_vote {
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
export interface CouncilCall_close {
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
export interface CouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
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
export type PhragmenElectionCall = PhragmenElectionCall_vote | PhragmenElectionCall_remove_voter | PhragmenElectionCall_submit_candidacy | PhragmenElectionCall_renounce_candidacy | PhragmenElectionCall_remove_member | PhragmenElectionCall_clean_defunct_voters

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 * 
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 * 
 * If `value` is more than `who`'s total balance, then the maximum of the two is used.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 * 
 * # <weight>
 * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 * # </weight>
 */
export interface PhragmenElectionCall_vote {
  __kind: 'vote'
  votes: AccountId32[]
  value: bigint
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface PhragmenElectionCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 * # <weight>
 * The number of current candidates must be provided as witness data.
 * # </weight>
 */
export interface PhragmenElectionCall_submit_candidacy {
  __kind: 'submit_candidacy'
  candidateCount: number
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 * 
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 * 
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 * # <weight>
 * The type of renouncing must be provided as witness data.
 * # </weight>
 */
export interface PhragmenElectionCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
  renouncing: Renouncing
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, a new phragmen election is started.
 * 
 * The dispatch origin of this call must be root.
 * 
 * Note that this does not affect the designated block number of the next election.
 * 
 * # <weight>
 * If we have a replacement, we use a small weight. Else, since this is a root call and
 * will go into phragmen, we assume full block for now.
 * # </weight>
 */
export interface PhragmenElectionCall_remove_member {
  __kind: 'remove_member'
  who: MultiAddress
  hasReplacement: boolean
}

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 * 
 * This is an root function to be used only for cleaning the state.
 * 
 * The dispatch origin of this call must be root.
 * 
 * # <weight>
 * The total number of voters and those that are defunct must be provided as witness data.
 * # </weight>
 */
export interface PhragmenElectionCall_clean_defunct_voters {
  __kind: 'clean_defunct_voters'
  numVoters: number
  numDefunct: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilMembershipCall = CouncilMembershipCall_add_member | CouncilMembershipCall_remove_member | CouncilMembershipCall_swap_member | CouncilMembershipCall_reset_members | CouncilMembershipCall_change_key | CouncilMembershipCall_set_prime | CouncilMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface CouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface CouncilMembershipCall_remove_member {
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
export interface CouncilMembershipCall_swap_member {
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
export interface CouncilMembershipCall_reset_members {
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
export interface CouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface CouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
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
export interface TechnicalMembershipCall_swap_member {
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
export interface TechnicalMembershipCall_reset_members {
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
export interface TechnicalMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: VersionedMultiLocation
  message: VersionedXcm_259
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
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
  message: VersionedXcm_270
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
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
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
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
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
export type CumulusXcmCall = never

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
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 22.29 + .126 * S µs
 * - DB Weight:
 *     - Read: Agenda
 *     - Write: Agenda
 * - Will use base weight of 25 which should be good for up to 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Call
}

/**
 * Cancel an anonymously scheduled task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 22.15 + 2.869 * S µs
 * - DB Weight:
 *     - Read: Agenda
 *     - Write: Agenda, Lookup
 * - Will use base weight of 100 which should be good for up to 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: number
  index: number
}

/**
 * Schedule a named task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 29.6 + .159 * S µs
 * - DB Weight:
 *     - Read: Agenda, Lookup
 *     - Write: Agenda, Lookup
 * - Will use base weight of 35 which should be good for more than 30 scheduled calls
 * # </weight>
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Call
}

/**
 * Cancel a named scheduled task.
 * 
 * # <weight>
 * - S = Number of already scheduled calls
 * - Base Weight: 24.91 + 2.907 * S µs
 * - DB Weight:
 *     - Read: Agenda, Lookup
 *     - Write: Agenda, Lookup
 * - Will use base weight of 100 which should be good for up to 30 scheduled calls
 * # </weight>
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
  call: Call
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
  call: Call
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
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
  __kind: 'add_registrar'
  account: AccountId32
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
  __kind: 'set_identity'
  info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
 */
export interface IdentityCall_set_subs {
  __kind: 'set_subs'
  subs: [AccountId32, Data][]
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
  __kind: 'clear_identity'
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
  __kind: 'request_judgement'
  regIndex: number
  maxFee: bigint
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
  __kind: 'cancel_request'
  regIndex: number
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
  __kind: 'set_fee'
  index: number
  fee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
  __kind: 'set_account_id'
  index: number
  new: AccountId32
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
  __kind: 'set_fields'
  index: number
  fields: BitFlags
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
  __kind: 'provide_judgement'
  regIndex: number
  target: MultiAddress
  judgement: Judgement
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
  __kind: 'kill_identity'
  target: MultiAddress
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
  __kind: 'add_sub'
  sub: MultiAddress
  data: Data
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
  __kind: 'rename_sub'
  sub: MultiAddress
  data: Data
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
  __kind: 'remove_sub'
  sub: MultiAddress
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
  __kind: 'quit_sub'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_vest | VestingCall_vest_other | VestingCall_vested_transfer | VestingCall_force_vested_transfer | VestingCall_force_set_vested | VestingCall_init_vesting_start_at

/**
 * Unlock any vested funds of the sender account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 2 Reads, 2 Writes
 *     - Reads: Vesting Storage, Balances Locks, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vest {
  __kind: 'vest'
}

/**
 * Unlock any vested funds of a `target` account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account whose vested funds should be unlocked. Must have funds still
 * locked under this pallet.
 * 
 * Emits either `VestingCompleted` or `VestingUpdated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account
 * # </weight>
 */
export interface VestingCall_vest_other {
  __kind: 'vest_other'
  target: MultiAddress
}

/**
 * Create a vested transfer.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `target`: The account that should be transferred the vested funds.
 * - `amount`: The amount of funds to transfer and will be vested.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 3 Reads, 3 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 *     - Writes: Vesting Storage, Balances Locks, Target Account, [Sender Account]
 * # </weight>
 */
export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer'
  target: MultiAddress
  schedule: VestingInfo
}

/**
 * Force a vested transfer.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The account whose funds should be transferred.
 * - `target`: The account that should be transferred the vested funds.
 * - `amount`: The amount of funds to transfer and will be vested.
 * - `schedule`: The vesting schedule attached to the transfer.
 * 
 * Emits `VestingCreated`.
 * 
 * # <weight>
 * - `O(1)`.
 * - DbWeight: 4 Reads, 4 Writes
 *     - Reads: Vesting Storage, Balances Locks, Target Account, Source Account
 *     - Writes: Vesting Storage, Balances Locks, Target Account, Source Account
 * # </weight>
 */
export interface VestingCall_force_vested_transfer {
  __kind: 'force_vested_transfer'
  source: MultiAddress
  target: MultiAddress
  schedule: VestingInfo
}

export interface VestingCall_force_set_vested {
  __kind: 'force_set_vested'
  source: MultiAddress
  target: MultiAddress
  schedule: VestingInfo
}

export interface VestingCall_init_vesting_start_at {
  __kind: 'init_vesting_start_at'
  vestingStartAt: number
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
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset

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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokensCall = TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive | TokensCall_force_transfer | TokensCall_set_balance

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the
 * `TransferFee`. If the sender's account is below the existential
 * deposit as a result of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Transfer all remaining balance to the given account.
 * 
 * NOTE: This function only attempts to transfer _transferable_
 * balances. This means that any locked, reserved, or existential
 * deposits (when `keep_alive` is `true`), will not be transferred by
 * this function. To ensure that this function results in a killed
 * account, you might need to prepare the account by removing any
 * reference counters, storage deposits, etc...
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `keep_alive`: A boolean to determine if the `transfer_all`
 *   operation should send all of the funds the account has, causing
 *   the sender account to be killed (false), or transfer everything
 *   except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
  __kind: 'transfer_all'
  dest: MultiAddress
  currencyId: CurrencyId
  keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer
 * will not kill the origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source
 * account may be specified.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The sender of the transfer.
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
  __kind: 'force_transfer'
  source: MultiAddress
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it
 * will also decrease the total issuance of the system
 * (`TotalIssuance`). If the new free or reserved balance is below the
 * existential deposit, it will reap the `AccountInfo`.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
  __kind: 'set_balance'
  who: MultiAddress
  currencyId: CurrencyId
  newFree: bigint
  newReserved: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

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
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
  __kind: 'update_balance'
  who: MultiAddress
  currencyId: CurrencyId
  amount: bigint
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
  dest: V1MultiLocation
  message: V2Instruction_64[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ZenlinkProtocolCall = ZenlinkProtocolCall_set_fee_receiver | ZenlinkProtocolCall_set_fee_point | ZenlinkProtocolCall_transfer | ZenlinkProtocolCall_transfer_to_parachain | ZenlinkProtocolCall_create_pair | ZenlinkProtocolCall_add_liquidity | ZenlinkProtocolCall_remove_liquidity | ZenlinkProtocolCall_swap_exact_assets_for_assets | ZenlinkProtocolCall_swap_assets_for_exact_assets | ZenlinkProtocolCall_bootstrap_create | ZenlinkProtocolCall_bootstrap_contribute | ZenlinkProtocolCall_bootstrap_claim | ZenlinkProtocolCall_bootstrap_end | ZenlinkProtocolCall_bootstrap_update | ZenlinkProtocolCall_bootstrap_refund | ZenlinkProtocolCall_bootstrap_charge_reward | ZenlinkProtocolCall_bootstrap_withdraw_reward

/**
 * Set the new receiver of the protocol fee.
 * 
 * # Arguments
 * 
 * - `send_to`:
 * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
 * (2) None: it turn off the protocol fee.
 */
export interface ZenlinkProtocolCall_set_fee_receiver {
  __kind: 'set_fee_receiver'
  sendTo: (MultiAddress | undefined)
}

/**
 * Set the protocol fee point.
 * 
 * # Arguments
 * 
 * - `fee_point`:
 * The fee_point which integer between [0,30]
 * 0 means no protocol fee.
 * 30 means 0.3% * 100% = 0.0030.
 * default is 5 and means 0.3% * 1 / 6 = 0.0005.
 */
export interface ZenlinkProtocolCall_set_fee_point {
  __kind: 'set_fee_point'
  feePoint: number
}

/**
 * Move some assets from one holder to another.
 * 
 * # Arguments
 * 
 * - `asset_id`: The foreign id.
 * - `target`: The receiver of the foreign.
 * - `amount`: The amount of the foreign to transfer.
 */
export interface ZenlinkProtocolCall_transfer {
  __kind: 'transfer'
  assetId: AssetId
  recipient: MultiAddress
  amount: bigint
}

/**
 * Transfer zenlink assets to a sibling parachain.
 * 
 * Zenlink assets can be either native or foreign to the sending parachain.
 * 
 * # Arguments
 * 
 * - `asset_id`: Global identifier for a zenlink foreign
 * - `para_id`: Destination parachain
 * - `account`: Destination account
 * - `amount`: Amount to transfer
 */
export interface ZenlinkProtocolCall_transfer_to_parachain {
  __kind: 'transfer_to_parachain'
  assetId: AssetId
  paraId: Id
  recipient: AccountId32
  amount: bigint
  maxWeight: bigint
}

/**
 * Create pair by two assets.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up Pair
 * - `asset_1`: Asset which make up Pair
 */
export interface ZenlinkProtocolCall_create_pair {
  __kind: 'create_pair'
  asset0: AssetId
  asset1: AssetId
}

/**
 * Provide liquidity to a pair.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
 * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
 * - `amount_0_min`: Minimum amount of asset_0 added to the pair
 * - `amount_1_min`: Minimum amount of asset_1 added to the pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_add_liquidity {
  __kind: 'add_liquidity'
  asset0: AssetId
  asset1: AssetId
  amount0Desired: bigint
  amount1Desired: bigint
  amount0Min: bigint
  amount1Min: bigint
  deadline: number
}

/**
 * Extract liquidity.
 * 
 * The order of foreign dot effect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up pair
 * - `asset_1`: Asset which make up pair
 * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
 * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
 * - `recipient`: Account that accepts withdrawal of assets
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_remove_liquidity {
  __kind: 'remove_liquidity'
  asset0: AssetId
  asset1: AssetId
  liquidity: bigint
  amount0Min: bigint
  amount1Min: bigint
  recipient: MultiAddress
  deadline: number
}

/**
 * Sell amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_in`: Amount of the foreign will be sold
 * - `amount_out_min`: Minimum amount of target foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_swap_exact_assets_for_assets {
  __kind: 'swap_exact_assets_for_assets'
  amountIn: bigint
  amountOutMin: bigint
  path: AssetId[]
  recipient: MultiAddress
  deadline: number
}

/**
 * Buy amount of foreign by path.
 * 
 * # Arguments
 * 
 * - `amount_out`: Amount of the foreign will be bought
 * - `amount_in_max`: Maximum amount of sold foreign
 * - `path`: path can convert to pairs.
 * - `recipient`: Account that receive the target foreign
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_swap_assets_for_exact_assets {
  __kind: 'swap_assets_for_exact_assets'
  amountOut: bigint
  amountInMax: bigint
  path: AssetId[]
  recipient: MultiAddress
  deadline: number
}

/**
 * Create bootstrap pair
 * 
 * The order of asset don't affect result.
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `target_supply_0`: Target amount of asset_0 total contribute
 * - `target_supply_0`: Target amount of asset_1 total contribute
 * - `capacity_supply_0`: The max amount of asset_0 total contribute
 * - `capacity_supply_1`: The max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
 */
export interface ZenlinkProtocolCall_bootstrap_create {
  __kind: 'bootstrap_create'
  asset0: AssetId
  asset1: AssetId
  targetSupply0: bigint
  targetSupply1: bigint
  capacitySupply0: bigint
  capacitySupply1: bigint
  end: number
  rewards: AssetId[]
  limits: [AssetId, bigint][]
}

/**
 * Contribute some asset to a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
 * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_contribute {
  __kind: 'bootstrap_contribute'
  asset0: AssetId
  asset1: AssetId
  amount0Contribute: bigint
  amount1Contribute: bigint
  deadline: number
}

/**
 * Claim lp asset from a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `deadline`: Height of the cutoff block of this transaction
 */
export interface ZenlinkProtocolCall_bootstrap_claim {
  __kind: 'bootstrap_claim'
  recipient: MultiAddress
  asset0: AssetId
  asset1: AssetId
  deadline: number
}

/**
 * End a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_end {
  __kind: 'bootstrap_end'
  asset0: AssetId
  asset1: AssetId
}

/**
 * update a bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 * - `min_contribution_0`: The new min amount of asset_0 contribute
 * - `min_contribution_0`: The new min amount of asset_1 contribute
 * - `target_supply_0`: The new target amount of asset_0 total contribute
 * - `target_supply_0`: The new target amount of asset_1 total contribute
 * - `capacity_supply_0`: The new max amount of asset_0 total contribute
 * - `capacity_supply_1`: The new max amount of asset_1 total contribute
 * - `end`: The earliest ending block.
 */
export interface ZenlinkProtocolCall_bootstrap_update {
  __kind: 'bootstrap_update'
  asset0: AssetId
  asset1: AssetId
  targetSupply0: bigint
  targetSupply1: bigint
  capacitySupply0: bigint
  capacitySupply1: bigint
  end: number
  rewards: AssetId[]
  limits: [AssetId, bigint][]
}

/**
 * Contributor refund from disable bootstrap pair
 * 
 * # Arguments
 * 
 * - `asset_0`: Asset which make up bootstrap pair
 * - `asset_1`: Asset which make up bootstrap pair
 */
export interface ZenlinkProtocolCall_bootstrap_refund {
  __kind: 'bootstrap_refund'
  asset0: AssetId
  asset1: AssetId
}

export interface ZenlinkProtocolCall_bootstrap_charge_reward {
  __kind: 'bootstrap_charge_reward'
  asset0: AssetId
  asset1: AssetId
  chargeRewards: [AssetId, bigint][]
}

export interface ZenlinkProtocolCall_bootstrap_withdraw_reward {
  __kind: 'bootstrap_withdraw_reward'
  asset0: AssetId
  asset1: AssetId
  recipient: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MerkleDistributorCall = MerkleDistributorCall_create_merkle_distributor | MerkleDistributorCall_claim | MerkleDistributorCall_charge | MerkleDistributorCall_emergency_withdraw

/**
 * `create_merkle_distributor` will create a merkle distributor,
 *  which allow specified users claim asset.
 * 
 * The dispatch origin for this call must be `Signed` by root.
 * 
 * - `merkle_root`: The root of a merkle tree.
 * - `description`: About the purpose of this distribution.
 * - `distribute_currency`: The id of currency about this distribution.
 * - `distribute_amount`: The total currency amount of this distribution.
 */
export interface MerkleDistributorCall_create_merkle_distributor {
  __kind: 'create_merkle_distributor'
  merkleRoot: H256
  description: Uint8Array
  distributeCurrency: CurrencyId
  distributeAmount: bigint
}

/**
 * `claim` Claim rewards through user information and merkle proof.
 * 
 * - `merkle_distributor_id`: ID of a merkle distributor.
 * - `index`: The index of the merkle tree leaf.
 * - `account`: The owner's account of merkle proof.
 * - `merkle_proof`: The hashes with merkle tree leaf can get merkle tree root.
 */
export interface MerkleDistributorCall_claim {
  __kind: 'claim'
  merkleDistributorId: number
  index: number
  account: MultiAddress
  amount: bigint
  merkleProof: H256[]
}

/**
 * Charge currency to the account of merkle distributor
 * 
 * `merkle_distributor_id`: ID of a merkle distributor.
 */
export interface MerkleDistributorCall_charge {
  __kind: 'charge'
  merkleDistributorId: number
}

export interface MerkleDistributorCall_emergency_withdraw {
  __kind: 'emergency_withdraw'
  merkleDistributorId: number
  recipient: MultiAddress
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FlexibleFeeCall = FlexibleFeeCall_set_user_fee_charge_order

/**
 * Set user fee charge assets order.
 */
export interface FlexibleFeeCall_set_user_fee_charge_order {
  __kind: 'set_user_fee_charge_order'
  assetOrderListVec: (CurrencyId[] | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SalpCall = SalpCall_set_multisig_confirm_account | SalpCall_fund_success | SalpCall_fund_fail | SalpCall_fund_retire | SalpCall_fund_end | SalpCall_edit | SalpCall_unlock | SalpCall_batch_unlock | SalpCall_create | SalpCall_contribute | SalpCall_confirm_contribute | SalpCall_withdraw | SalpCall_refund | SalpCall_batch_refund | SalpCall_redeem | SalpCall_dissolve | SalpCall_add_proxy | SalpCall_remove_proxy | SalpCall_mint

export interface SalpCall_set_multisig_confirm_account {
  __kind: 'set_multisig_confirm_account'
  account: AccountId32
}

export interface SalpCall_fund_success {
  __kind: 'fund_success'
  index: number
}

export interface SalpCall_fund_fail {
  __kind: 'fund_fail'
  index: number
}

export interface SalpCall_fund_retire {
  __kind: 'fund_retire'
  index: number
}

export interface SalpCall_fund_end {
  __kind: 'fund_end'
  index: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 * 
 * Can only be called by Root origin.
 */
export interface SalpCall_edit {
  __kind: 'edit'
  index: number
  cap: bigint
  firstSlot: number
  lastSlot: number
  fundStatus: (FundStatus_351 | undefined)
}

/**
 * Unlock the reserved vsToken/vsBond after fund success
 */
export interface SalpCall_unlock {
  __kind: 'unlock'
  who: AccountId32
  index: number
}

/**
 * Unlock the reserved vsToken/vsBond after fund success
 */
export interface SalpCall_batch_unlock {
  __kind: 'batch_unlock'
  index: number
}

/**
 * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
 */
export interface SalpCall_create {
  __kind: 'create'
  index: number
  cap: bigint
  firstSlot: number
  lastSlot: number
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
 * slot is unable to be purchased and the timeout expires.
 */
export interface SalpCall_contribute {
  __kind: 'contribute'
  index: number
  value: bigint
}

/**
 * Confirm contribute
 */
export interface SalpCall_confirm_contribute {
  __kind: 'confirm_contribute'
  who: AccountId32
  index: number
  isSuccess: boolean
  messageId: Uint8Array
}

/**
 * Withdraw full balance of the parachain.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface SalpCall_withdraw {
  __kind: 'withdraw'
  index: number
}

export interface SalpCall_refund {
  __kind: 'refund'
  index: number
}

export interface SalpCall_batch_refund {
  __kind: 'batch_refund'
  index: number
}

export interface SalpCall_redeem {
  __kind: 'redeem'
  index: number
  value: bigint
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpCall_dissolve {
  __kind: 'dissolve'
  index: number
}

/**
 * Add proxy for parachain account
 * - `delegate`: The delegate proxy account
 */
export interface SalpCall_add_proxy {
  __kind: 'add_proxy'
  delegate: AccountId32
}

/**
 * Add proxy for parachain account
 * - `delegate`: The delegate proxy account
 */
export interface SalpCall_remove_proxy {
  __kind: 'remove_proxy'
  delegate: AccountId32
}

/**
 * transfer to parachain salp account
 */
export interface SalpCall_mint {
  __kind: 'mint'
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningDOTCall = LiquidityMiningDOTCall_create_single_token_pool | LiquidityMiningDOTCall_create_mining_pool | LiquidityMiningDOTCall_create_farming_pool | LiquidityMiningDOTCall_create_eb_farming_pool | LiquidityMiningDOTCall_charge | LiquidityMiningDOTCall_kill_pool | LiquidityMiningDOTCall_force_retire_pool | LiquidityMiningDOTCall_deposit | LiquidityMiningDOTCall_redeem | LiquidityMiningDOTCall_redeem_all | LiquidityMiningDOTCall_volunteer_to_redeem | LiquidityMiningDOTCall_claim

/**
 * Create a liquidity-pool which type is `PoolType::SingleToken`, accepts any token as
 * deposit.
 */
export interface LiquidityMiningDOTCall_create_single_token_pool {
  __kind: 'create_single_token_pool'
  token: CurrencyId
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Mining`, Only accepts `lpToken` as
 * deposit.
 */
export interface LiquidityMiningDOTCall_create_mining_pool {
  __kind: 'create_mining_pool'
  tradingPair: [CurrencyId, CurrencyId]
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts free `vsToken`
 * and free `vsBond` as deposit.
 */
export interface LiquidityMiningDOTCall_create_farming_pool {
  __kind: 'create_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts reserved
 * `vsToken` and reserved `vsBond` as deposit.
 */
export interface LiquidityMiningDOTCall_create_eb_farming_pool {
  __kind: 'create_eb_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Transfer the rewards which are used to distribute to depositors to a liquidity-pool.
 * 
 * _NOTE_: The extrinsic is only applied to the liquidity-pool at `PoolState::UnCharged`;
 * 	When the extrinsic was executed successfully, the liquidity-pool would be at
 * 	`PoolState::Charged`.
 */
export interface LiquidityMiningDOTCall_charge {
  __kind: 'charge'
  pid: number
}

/**
 * Kill a liquidity-pool at `PoolState::Uncharged`.
 */
export interface LiquidityMiningDOTCall_kill_pool {
  __kind: 'kill_pool'
  pid: number
}

/**
 * Make a liquidity-pool be at `PoolState::Retired` forcefully.
 * 
 * __NOTE__:
 * 1. If the pool is at `PoolState::Charged` but doesn't have any deposit, the data about
 * 	the pool would be deleted and the rewards charged would be returned back.
 * 
 * 2. If the pool is at `PoolState::Charged` and has some deposit, or `PoolState::Ongoing`,
 * 	the field `block_retired` of the pool would be set to the current block height.
 */
export interface LiquidityMiningDOTCall_force_retire_pool {
  __kind: 'force_retire_pool'
  pid: number
}

/**
 * Caller deposits some token to a liquidity-pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * The conditions to deposit:
 * - The deposit caller was contributed to the pool should be bigger than
 *   `T::MinimumDeposit`;
 * - The pool is at `PoolState::Charged` or `PoolState::Ongoing`;
 */
export interface LiquidityMiningDOTCall_deposit {
  __kind: 'deposit'
  pid: number
  value: bigint
}

/**
 * Caller redeems some deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired`, the extrinsic will redeem all deposits
 * owned by the caller, whatever the `value` is.
 * 
 * 2. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be returned
 * back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningDOTCall_redeem {
  __kind: 'redeem'
  pid: number
  value: bigint
}

/**
 * Caller redeems all deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be
 * returned back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningDOTCall_redeem_all {
  __kind: 'redeem_all'
  pid: number
}

/**
 * A selfless man intimately helps depositors of the pool to redeem their deposit,
 * aaaaaaah, such a grateful!!
 * 
 * If the `account` is `Option::None`, the extrinsic will give "freedom" for a lucky man
 * randomly;
 * 
 * If the `account` is specific and a depositor of the pool indeed, who will be given
 * "freedom" by the extrinsic.
 * 
 * The condition to redeem:
 * - The pool is at `PoolState::Retired`.
 */
export interface LiquidityMiningDOTCall_volunteer_to_redeem {
  __kind: 'volunteer_to_redeem'
  pid: number
  account: (AccountId32 | undefined)
}

/**
 * Caller withdraw the unclaimed rewards owned by self from a pool.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to claim:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing`.
 */
export interface LiquidityMiningDOTCall_claim {
  __kind: 'claim'
  pid: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningCall = LiquidityMiningCall_create_single_token_pool | LiquidityMiningCall_create_mining_pool | LiquidityMiningCall_create_farming_pool | LiquidityMiningCall_create_eb_farming_pool | LiquidityMiningCall_charge | LiquidityMiningCall_kill_pool | LiquidityMiningCall_force_retire_pool | LiquidityMiningCall_deposit | LiquidityMiningCall_redeem | LiquidityMiningCall_redeem_all | LiquidityMiningCall_volunteer_to_redeem | LiquidityMiningCall_claim

/**
 * Create a liquidity-pool which type is `PoolType::SingleToken`, accepts any token as
 * deposit.
 */
export interface LiquidityMiningCall_create_single_token_pool {
  __kind: 'create_single_token_pool'
  token: CurrencyId
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Mining`, Only accepts `lpToken` as
 * deposit.
 */
export interface LiquidityMiningCall_create_mining_pool {
  __kind: 'create_mining_pool'
  tradingPair: [CurrencyId, CurrencyId]
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts free `vsToken`
 * and free `vsBond` as deposit.
 */
export interface LiquidityMiningCall_create_farming_pool {
  __kind: 'create_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Create a liquidity-pool which type is `PoolType::Farming`, Only accepts reserved
 * `vsToken` and reserved `vsBond` as deposit.
 */
export interface LiquidityMiningCall_create_eb_farming_pool {
  __kind: 'create_eb_farming_pool'
  index: number
  firstSlot: number
  lastSlot: number
  mainReward: [CurrencyId, bigint]
  optionRewards: [CurrencyId, bigint][]
  duration: number
  minDepositToStart: bigint
  afterBlockToStart: number
}

/**
 * Transfer the rewards which are used to distribute to depositors to a liquidity-pool.
 * 
 * _NOTE_: The extrinsic is only applied to the liquidity-pool at `PoolState::UnCharged`;
 * 	When the extrinsic was executed successfully, the liquidity-pool would be at
 * 	`PoolState::Charged`.
 */
export interface LiquidityMiningCall_charge {
  __kind: 'charge'
  pid: number
}

/**
 * Kill a liquidity-pool at `PoolState::Uncharged`.
 */
export interface LiquidityMiningCall_kill_pool {
  __kind: 'kill_pool'
  pid: number
}

/**
 * Make a liquidity-pool be at `PoolState::Retired` forcefully.
 * 
 * __NOTE__:
 * 1. If the pool is at `PoolState::Charged` but doesn't have any deposit, the data about
 * 	the pool would be deleted and the rewards charged would be returned back.
 * 
 * 2. If the pool is at `PoolState::Charged` and has some deposit, or `PoolState::Ongoing`,
 * 	the field `block_retired` of the pool would be set to the current block height.
 */
export interface LiquidityMiningCall_force_retire_pool {
  __kind: 'force_retire_pool'
  pid: number
}

/**
 * Caller deposits some token to a liquidity-pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * The conditions to deposit:
 * - The deposit caller was contributed to the pool should be bigger than
 *   `T::MinimumDeposit`;
 * - The pool is at `PoolState::Charged` or `PoolState::Ongoing`;
 */
export interface LiquidityMiningCall_deposit {
  __kind: 'deposit'
  pid: number
  value: bigint
}

/**
 * Caller redeems some deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired`, the extrinsic will redeem all deposits
 * owned by the caller, whatever the `value` is.
 * 
 * 2. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be returned
 * back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningCall_redeem {
  __kind: 'redeem'
  pid: number
  value: bigint
}

/**
 * Caller redeems all deposit owned by self from a pool.
 * 
 * __NOTE__: The unclaimed rewards of caller will be withdrawn automatically if there has.
 * 
 * __NOTE__:
 * 0. If the pool is at `PoolState::Ongoing`, the caller may not redeem successfully
 * because of 	the `reward algorithm`, which requires `pool-ongoing` must have deposit more
 * than `T::MinimumDeposit`.
 * 
 * 1. If the pool is at `PoolState::Retired` and the deposit in the pool will become zero
 * after calling the extrinsic, the remaining rewards left in the pool will be
 * returned back to the charger.
 * 
 * The condition to redeem:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing` or `PoolState::Retired`.
 */
export interface LiquidityMiningCall_redeem_all {
  __kind: 'redeem_all'
  pid: number
}

/**
 * A selfless man intimately helps depositors of the pool to redeem their deposit,
 * aaaaaaah, such a grateful!!
 * 
 * If the `account` is `Option::None`, the extrinsic will give "freedom" for a lucky man
 * randomly;
 * 
 * If the `account` is specific and a depositor of the pool indeed, who will be given
 * "freedom" by the extrinsic.
 * 
 * The condition to redeem:
 * - The pool is at `PoolState::Retired`.
 */
export interface LiquidityMiningCall_volunteer_to_redeem {
  __kind: 'volunteer_to_redeem'
  pid: number
  account: (AccountId32 | undefined)
}

/**
 * Caller withdraw the unclaimed rewards owned by self from a pool.
 * 
 * __NOTE__: The extrinsic will retire the pool, which is reached the end of life.
 * 
 * The conditions to claim:
 * - There is enough deposit owned by the caller in the pool.
 * - The pool is at `PoolState::Ongoing`.
 */
export interface LiquidityMiningCall_claim {
  __kind: 'claim'
  pid: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokenIssuerCall = TokenIssuerCall_add_to_issue_whitelist | TokenIssuerCall_remove_from_issue_whitelist | TokenIssuerCall_add_to_transfer_whitelist | TokenIssuerCall_remove_from_transfer_whitelist | TokenIssuerCall_issue | TokenIssuerCall_transfer

export interface TokenIssuerCall_add_to_issue_whitelist {
  __kind: 'add_to_issue_whitelist'
  currencyId: CurrencyId
  account: AccountId32
}

export interface TokenIssuerCall_remove_from_issue_whitelist {
  __kind: 'remove_from_issue_whitelist'
  currencyId: CurrencyId
  account: AccountId32
}

export interface TokenIssuerCall_add_to_transfer_whitelist {
  __kind: 'add_to_transfer_whitelist'
  currencyId: CurrencyId
  account: AccountId32
}

export interface TokenIssuerCall_remove_from_transfer_whitelist {
  __kind: 'remove_from_transfer_whitelist'
  currencyId: CurrencyId
  account: AccountId32
}

export interface TokenIssuerCall_issue {
  __kind: 'issue'
  dest: AccountId32
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Destroy some balance from an account.
 * 
 * The dispatch origin for this call must be `Root` by the
 * transactor.
 */
export interface TokenIssuerCall_transfer {
  __kind: 'transfer'
  dest: AccountId32
  currencyId: CurrencyId
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LighteningRedeemCall = LighteningRedeemCall_add_ksm_to_pool | LighteningRedeemCall_exchange_for_ksm | LighteningRedeemCall_edit_exchange_price | LighteningRedeemCall_edit_release_per_day | LighteningRedeemCall_edit_release_start_and_end_block

/**
 * Anyone can add KSM to the pool.
 */
export interface LighteningRedeemCall_add_ksm_to_pool {
  __kind: 'add_ksm_to_pool'
  tokenAmount: bigint
}

export interface LighteningRedeemCall_exchange_for_ksm {
  __kind: 'exchange_for_ksm'
  tokenAmount: bigint
}

export interface LighteningRedeemCall_edit_exchange_price {
  __kind: 'edit_exchange_price'
  price: bigint
}

export interface LighteningRedeemCall_edit_release_per_day {
  __kind: 'edit_release_per_day'
  amountPerDay: bigint
}

export interface LighteningRedeemCall_edit_release_start_and_end_block {
  __kind: 'edit_release_start_and_end_block'
  start: number
  end: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SalpLiteCall = SalpLiteCall_set_multisig_confirm_account | SalpLiteCall_fund_success | SalpLiteCall_fund_fail | SalpLiteCall_fund_retire | SalpLiteCall_create | SalpLiteCall_issue | SalpLiteCall_withdraw | SalpLiteCall_redeem | SalpLiteCall_dissolve | SalpLiteCall_continue_fund | SalpLiteCall_refund | SalpLiteCall_dissolve_refunded

export interface SalpLiteCall_set_multisig_confirm_account {
  __kind: 'set_multisig_confirm_account'
  account: AccountId32
}

export interface SalpLiteCall_fund_success {
  __kind: 'fund_success'
  index: number
}

export interface SalpLiteCall_fund_fail {
  __kind: 'fund_fail'
  index: number
}

export interface SalpLiteCall_fund_retire {
  __kind: 'fund_retire'
  index: number
}

/**
 * Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
 */
export interface SalpLiteCall_create {
  __kind: 'create'
  index: number
  cap: bigint
  firstSlot: number
  lastSlot: number
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable in two instances: the parachain becomes retired; or the
 * slot is unable to be purchased and the timeout expires.
 */
export interface SalpLiteCall_issue {
  __kind: 'issue'
  who: AccountId32
  index: number
  value: bigint
  messageId: Uint8Array
}

/**
 * Withdraw full balance of the parachain.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface SalpLiteCall_withdraw {
  __kind: 'withdraw'
  index: number
}

export interface SalpLiteCall_redeem {
  __kind: 'redeem'
  index: number
  value: bigint
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpLiteCall_dissolve {
  __kind: 'dissolve'
  index: number
}

export interface SalpLiteCall_continue_fund {
  __kind: 'continue_fund'
  index: number
  firstSlot: number
  lastSlot: number
}

export interface SalpLiteCall_refund {
  __kind: 'refund'
  index: number
  firstSlot: number
  lastSlot: number
  value: bigint
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface SalpLiteCall_dissolve_refunded {
  __kind: 'dissolve_refunded'
  index: number
  firstSlot: number
  lastSlot: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CallSwitchgearCall = CallSwitchgearCall_switchoff_transaction | CallSwitchgearCall_switchon_transaction | CallSwitchgearCall_disable_transfers | CallSwitchgearCall_enable_transfers

export interface CallSwitchgearCall_switchoff_transaction {
  __kind: 'switchoff_transaction'
  palletName: Uint8Array
  functionName: Uint8Array
}

export interface CallSwitchgearCall_switchon_transaction {
  __kind: 'switchon_transaction'
  palletName: Uint8Array
  functionName: Uint8Array
}

export interface CallSwitchgearCall_disable_transfers {
  __kind: 'disable_transfers'
  currencyId: CurrencyId
}

export interface CallSwitchgearCall_enable_transfers {
  __kind: 'enable_transfers'
  currencyId: CurrencyId
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VSBondAuctionCall = VSBondAuctionCall_create_order | VSBondAuctionCall_revoke_order | VSBondAuctionCall_clinch_order | VSBondAuctionCall_partial_clinch_order

/**
 * Create a sell order or buy order to sell `vsbond`.
 */
export interface VSBondAuctionCall_create_order {
  __kind: 'create_order'
  index: number
  tokenSymbol: TokenSymbol
  firstSlot: number
  lastSlot: number
  amount: bigint
  totalPrice: bigint
  orderType: OrderType
}

/**
 * Revoke a sell or buy order in trade by the order creator.
 */
export interface VSBondAuctionCall_revoke_order {
  __kind: 'revoke_order'
  orderId: bigint
}

/**
 * Users(non-order-creator) buy the remaining `vsbond` of a sell order.
 */
export interface VSBondAuctionCall_clinch_order {
  __kind: 'clinch_order'
  orderId: bigint
}

/**
 * Users(non-order-creator) buys some of the remaining `vsbond` of a sell or buy order.
 */
export interface VSBondAuctionCall_partial_clinch_order {
  __kind: 'partial_clinch_order'
  orderId: bigint
  quantity: bigint
}

export type Perbill = number

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}

export type AccountId32 = Uint8Array

export interface ParachainInherentData {
  validationData: V1PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [Id, InboundHrmpMessage[]][]
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

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
  __kind: 'Member'
}

export interface Renouncing_RunnerUp {
  __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
  __kind: 'Candidate'
  value: number
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

export type VersionedXcm_259 = VersionedXcm_259_V0 | VersionedXcm_259_V1 | VersionedXcm_259_V2

export interface VersionedXcm_259_V0 {
  __kind: 'V0'
  value: V0Xcm_260
}

export interface VersionedXcm_259_V1 {
  __kind: 'V1'
  value: V1Xcm_265
}

export interface VersionedXcm_259_V2 {
  __kind: 'V2'
  value: V2Instruction_64[]
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

export type VersionedXcm_270 = VersionedXcm_270_V0 | VersionedXcm_270_V1 | VersionedXcm_270_V2

export interface VersionedXcm_270_V0 {
  __kind: 'V0'
  value: V0Xcm_271
}

export interface VersionedXcm_270_V1 {
  __kind: 'V1'
  value: V1Xcm_276
}

export interface VersionedXcm_270_V2 {
  __kind: 'V2'
  value: V2Instruction_282[]
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

export type ProxyType = ProxyType_Any | ProxyType_NonTransfer | ProxyType_Governance | ProxyType_CancelProxy | ProxyType_IdentityJudgement

export interface ProxyType_Any {
  __kind: 'Any'
}

export interface ProxyType_NonTransfer {
  __kind: 'NonTransfer'
}

export interface ProxyType_Governance {
  __kind: 'Governance'
}

export interface ProxyType_CancelProxy {
  __kind: 'CancelProxy'
}

export interface ProxyType_IdentityJudgement {
  __kind: 'IdentityJudgement'
}

export interface Timepoint {
  height: number
  index: number
}

export interface IdentityInfo {
  additional: [Data, Data][]
  display: Data
  legal: Data
  web: Data
  riot: Data
  email: Data
  pgpFingerprint: (Uint8Array | undefined)
  image: Data
  twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
  __kind: 'None'
}

export interface Data_Raw0 {
  __kind: 'Raw0'
  value: Uint8Array
}

export interface Data_Raw1 {
  __kind: 'Raw1'
  value: Uint8Array
}

export interface Data_Raw2 {
  __kind: 'Raw2'
  value: Uint8Array
}

export interface Data_Raw3 {
  __kind: 'Raw3'
  value: Uint8Array
}

export interface Data_Raw4 {
  __kind: 'Raw4'
  value: Uint8Array
}

export interface Data_Raw5 {
  __kind: 'Raw5'
  value: Uint8Array
}

export interface Data_Raw6 {
  __kind: 'Raw6'
  value: Uint8Array
}

export interface Data_Raw7 {
  __kind: 'Raw7'
  value: Uint8Array
}

export interface Data_Raw8 {
  __kind: 'Raw8'
  value: Uint8Array
}

export interface Data_Raw9 {
  __kind: 'Raw9'
  value: Uint8Array
}

export interface Data_Raw10 {
  __kind: 'Raw10'
  value: Uint8Array
}

export interface Data_Raw11 {
  __kind: 'Raw11'
  value: Uint8Array
}

export interface Data_Raw12 {
  __kind: 'Raw12'
  value: Uint8Array
}

export interface Data_Raw13 {
  __kind: 'Raw13'
  value: Uint8Array
}

export interface Data_Raw14 {
  __kind: 'Raw14'
  value: Uint8Array
}

export interface Data_Raw15 {
  __kind: 'Raw15'
  value: Uint8Array
}

export interface Data_Raw16 {
  __kind: 'Raw16'
  value: Uint8Array
}

export interface Data_Raw17 {
  __kind: 'Raw17'
  value: Uint8Array
}

export interface Data_Raw18 {
  __kind: 'Raw18'
  value: Uint8Array
}

export interface Data_Raw19 {
  __kind: 'Raw19'
  value: Uint8Array
}

export interface Data_Raw20 {
  __kind: 'Raw20'
  value: Uint8Array
}

export interface Data_Raw21 {
  __kind: 'Raw21'
  value: Uint8Array
}

export interface Data_Raw22 {
  __kind: 'Raw22'
  value: Uint8Array
}

export interface Data_Raw23 {
  __kind: 'Raw23'
  value: Uint8Array
}

export interface Data_Raw24 {
  __kind: 'Raw24'
  value: Uint8Array
}

export interface Data_Raw25 {
  __kind: 'Raw25'
  value: Uint8Array
}

export interface Data_Raw26 {
  __kind: 'Raw26'
  value: Uint8Array
}

export interface Data_Raw27 {
  __kind: 'Raw27'
  value: Uint8Array
}

export interface Data_Raw28 {
  __kind: 'Raw28'
  value: Uint8Array
}

export interface Data_Raw29 {
  __kind: 'Raw29'
  value: Uint8Array
}

export interface Data_Raw30 {
  __kind: 'Raw30'
  value: Uint8Array
}

export interface Data_Raw31 {
  __kind: 'Raw31'
  value: Uint8Array
}

export interface Data_Raw32 {
  __kind: 'Raw32'
  value: Uint8Array
}

export interface Data_BlakeTwo256 {
  __kind: 'BlakeTwo256'
  value: Uint8Array
}

export interface Data_Sha256 {
  __kind: 'Sha256'
  value: Uint8Array
}

export interface Data_Keccak256 {
  __kind: 'Keccak256'
  value: Uint8Array
}

export interface Data_ShaThree256 {
  __kind: 'ShaThree256'
  value: Uint8Array
}

export type BitFlags = bigint

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
  __kind: 'Unknown'
}

export interface Judgement_FeePaid {
  __kind: 'FeePaid'
  value: bigint
}

export interface Judgement_Reasonable {
  __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
  __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
  __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
  __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
  __kind: 'Erroneous'
}

export interface VestingInfo {
  locked: bigint
  perBlock: bigint
  startingBlock: number
}

export type CurrencyId = CurrencyId_Native | CurrencyId_VToken | CurrencyId_Token | CurrencyId_Stable | CurrencyId_VSToken | CurrencyId_VSBond | CurrencyId_LPToken

export interface CurrencyId_Native {
  __kind: 'Native'
  value: TokenSymbol
}

export interface CurrencyId_VToken {
  __kind: 'VToken'
  value: TokenSymbol
}

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_Stable {
  __kind: 'Stable'
  value: TokenSymbol
}

export interface CurrencyId_VSToken {
  __kind: 'VSToken'
  value: TokenSymbol
}

export interface CurrencyId_VSBond {
  __kind: 'VSBond'
  value: [TokenSymbol, number, number, number]
}

export interface CurrencyId_LPToken {
  __kind: 'LPToken'
  value: [TokenSymbol, number, TokenSymbol, number]
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

export type V2Instruction_64 = V2Instruction_64_WithdrawAsset | V2Instruction_64_ReserveAssetDeposited | V2Instruction_64_ReceiveTeleportedAsset | V2Instruction_64_QueryResponse | V2Instruction_64_TransferAsset | V2Instruction_64_TransferReserveAsset | V2Instruction_64_Transact | V2Instruction_64_HrmpNewChannelOpenRequest | V2Instruction_64_HrmpChannelAccepted | V2Instruction_64_HrmpChannelClosing | V2Instruction_64_ClearOrigin | V2Instruction_64_DescendOrigin | V2Instruction_64_ReportError | V2Instruction_64_DepositAsset | V2Instruction_64_DepositReserveAsset | V2Instruction_64_ExchangeAsset | V2Instruction_64_InitiateReserveWithdraw | V2Instruction_64_InitiateTeleport | V2Instruction_64_QueryHolding | V2Instruction_64_BuyExecution | V2Instruction_64_RefundSurplus | V2Instruction_64_SetErrorHandler | V2Instruction_64_SetAppendix | V2Instruction_64_ClearError | V2Instruction_64_ClaimAsset | V2Instruction_64_Trap | V2Instruction_64_SubscribeVersion | V2Instruction_64_UnsubscribeVersion

export interface V2Instruction_64_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_64_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_64_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_64_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_64_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_64_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_64_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_64_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_64_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_64_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_64_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_64_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_64_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_64_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_64_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_64_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_64_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_64_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_64_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_64_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_64_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_64_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_64[]
}

export interface V2Instruction_64_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_64[]
}

export interface V2Instruction_64_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_64_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_64_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_64_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_64_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export interface AssetId {
  chainId: number
  assetType: number
  assetIndex: bigint
}

export type Id = number

export type FundStatus_351 = FundStatus_351_Ongoing | FundStatus_351_Retired | FundStatus_351_Success | FundStatus_351_Failed | FundStatus_351_RefundWithdrew | FundStatus_351_RedeemWithdrew | FundStatus_351_End

export interface FundStatus_351_Ongoing {
  __kind: 'Ongoing'
}

export interface FundStatus_351_Retired {
  __kind: 'Retired'
}

export interface FundStatus_351_Success {
  __kind: 'Success'
}

export interface FundStatus_351_Failed {
  __kind: 'Failed'
}

export interface FundStatus_351_RefundWithdrew {
  __kind: 'RefundWithdrew'
}

export interface FundStatus_351_RedeemWithdrew {
  __kind: 'RedeemWithdrew'
}

export interface FundStatus_351_End {
  __kind: 'End'
}

export type TokenSymbol = TokenSymbol_ASG | TokenSymbol_BNC | TokenSymbol_KUSD | TokenSymbol_DOT | TokenSymbol_KSM | TokenSymbol_ETH | TokenSymbol_KAR | TokenSymbol_ZLK

export interface TokenSymbol_ASG {
  __kind: 'ASG'
}

export interface TokenSymbol_BNC {
  __kind: 'BNC'
}

export interface TokenSymbol_KUSD {
  __kind: 'KUSD'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export interface TokenSymbol_KSM {
  __kind: 'KSM'
}

export interface TokenSymbol_ETH {
  __kind: 'ETH'
}

export interface TokenSymbol_KAR {
  __kind: 'KAR'
}

export interface TokenSymbol_ZLK {
  __kind: 'ZLK'
}

export type OrderType = OrderType_Sell | OrderType_Buy

export interface OrderType_Sell {
  __kind: 'Sell'
}

export interface OrderType_Buy {
  __kind: 'Buy'
}

export interface V1PersistedValidationData {
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

export interface InboundHrmpMessage {
  sentAt: number
  data: Uint8Array
}

export interface Digest {
  logs: DigestItem[]
}

export type Public = Uint8Array

export type Vote = number

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

export type V0Xcm_260 = V0Xcm_260_WithdrawAsset | V0Xcm_260_ReserveAssetDeposit | V0Xcm_260_TeleportAsset | V0Xcm_260_QueryResponse | V0Xcm_260_TransferAsset | V0Xcm_260_TransferReserveAsset | V0Xcm_260_Transact | V0Xcm_260_HrmpNewChannelOpenRequest | V0Xcm_260_HrmpChannelAccepted | V0Xcm_260_HrmpChannelClosing | V0Xcm_260_RelayedFrom

export interface V0Xcm_260_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_262[]
}

export interface V0Xcm_260_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_262[]
}

export interface V0Xcm_260_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_262[]
}

export interface V0Xcm_260_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_260_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_260_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Xcm_260_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_260_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_260_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_260_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_260_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_260
}

export type V1Xcm_265 = V1Xcm_265_WithdrawAsset | V1Xcm_265_ReserveAssetDeposited | V1Xcm_265_ReceiveTeleportedAsset | V1Xcm_265_QueryResponse | V1Xcm_265_TransferAsset | V1Xcm_265_TransferReserveAsset | V1Xcm_265_Transact | V1Xcm_265_HrmpNewChannelOpenRequest | V1Xcm_265_HrmpChannelAccepted | V1Xcm_265_HrmpChannelClosing | V1Xcm_265_RelayedFrom | V1Xcm_265_SubscribeVersion | V1Xcm_265_UnsubscribeVersion

export interface V1Xcm_265_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_267[]
}

export interface V1Xcm_265_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_267[]
}

export interface V1Xcm_265_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_267[]
}

export interface V1Xcm_265_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_265_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_265_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Xcm_265_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_265_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_265_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_265_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_265_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_265
}

export interface V1Xcm_265_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_265_UnsubscribeVersion {
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

export type V0Xcm_271 = V0Xcm_271_WithdrawAsset | V0Xcm_271_ReserveAssetDeposit | V0Xcm_271_TeleportAsset | V0Xcm_271_QueryResponse | V0Xcm_271_TransferAsset | V0Xcm_271_TransferReserveAsset | V0Xcm_271_Transact | V0Xcm_271_HrmpNewChannelOpenRequest | V0Xcm_271_HrmpChannelAccepted | V0Xcm_271_HrmpChannelClosing | V0Xcm_271_RelayedFrom

export interface V0Xcm_271_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_273[]
}

export interface V0Xcm_271_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_273[]
}

export interface V0Xcm_271_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_273[]
}

export interface V0Xcm_271_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_271_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_271_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Xcm_271_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_271_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_271_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_271_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_271_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_271
}

export type V1Xcm_276 = V1Xcm_276_WithdrawAsset | V1Xcm_276_ReserveAssetDeposited | V1Xcm_276_ReceiveTeleportedAsset | V1Xcm_276_QueryResponse | V1Xcm_276_TransferAsset | V1Xcm_276_TransferReserveAsset | V1Xcm_276_Transact | V1Xcm_276_HrmpNewChannelOpenRequest | V1Xcm_276_HrmpChannelAccepted | V1Xcm_276_HrmpChannelClosing | V1Xcm_276_RelayedFrom | V1Xcm_276_SubscribeVersion | V1Xcm_276_UnsubscribeVersion

export interface V1Xcm_276_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_278[]
}

export interface V1Xcm_276_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_278[]
}

export interface V1Xcm_276_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_278[]
}

export interface V1Xcm_276_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_276_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_276_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Xcm_276_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_276_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_276_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_276_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_276_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_276
}

export interface V1Xcm_276_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_276_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction_282 = V2Instruction_282_WithdrawAsset | V2Instruction_282_ReserveAssetDeposited | V2Instruction_282_ReceiveTeleportedAsset | V2Instruction_282_QueryResponse | V2Instruction_282_TransferAsset | V2Instruction_282_TransferReserveAsset | V2Instruction_282_Transact | V2Instruction_282_HrmpNewChannelOpenRequest | V2Instruction_282_HrmpChannelAccepted | V2Instruction_282_HrmpChannelClosing | V2Instruction_282_ClearOrigin | V2Instruction_282_DescendOrigin | V2Instruction_282_ReportError | V2Instruction_282_DepositAsset | V2Instruction_282_DepositReserveAsset | V2Instruction_282_ExchangeAsset | V2Instruction_282_InitiateReserveWithdraw | V2Instruction_282_InitiateTeleport | V2Instruction_282_QueryHolding | V2Instruction_282_BuyExecution | V2Instruction_282_RefundSurplus | V2Instruction_282_SetErrorHandler | V2Instruction_282_SetAppendix | V2Instruction_282_ClearError | V2Instruction_282_ClaimAsset | V2Instruction_282_Trap | V2Instruction_282_SubscribeVersion | V2Instruction_282_UnsubscribeVersion

export interface V2Instruction_282_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_282_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_282_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_282_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_282_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_282_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_282_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_282_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_282_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_282_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_282_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_282_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_282_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_282_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_282_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_282_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_282_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_282_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_64[]
}

export interface V2Instruction_282_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_282_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_282_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_282_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_282[]
}

export interface V2Instruction_282_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_282[]
}

export interface V2Instruction_282_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_282_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_282_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_282_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_282_UnsubscribeVersion {
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

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
  __kind: 'Definite'
  value: V1MultiAssets
}

export interface V1MultiAssetFilter_Wild {
  __kind: 'Wild'
  value: V1WildMultiAsset
}

export type HeadData = Uint8Array

export type DigestItem = DigestItem_ChangesTrieRoot | DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_ChangesTrieSignal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_ChangesTrieRoot {
  __kind: 'ChangesTrieRoot'
  value: H256
}

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

export interface DigestItem_ChangesTrieSignal {
  __kind: 'ChangesTrieSignal'
  value: ChangesTrieSignal
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

export type V0Order_262 = V0Order_262_Null | V0Order_262_DepositAsset | V0Order_262_DepositReserveAsset | V0Order_262_ExchangeAsset | V0Order_262_InitiateReserveWithdraw | V0Order_262_InitiateTeleport | V0Order_262_QueryHolding | V0Order_262_BuyExecution

export interface V0Order_262_Null {
  __kind: 'Null'
}

export interface V0Order_262_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_262_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Order_262_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_262_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Order_262_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Order_262_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_262_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_260[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
  __kind: 'Assets'
  value: V0MultiAsset[]
}

export type V1Order_267 = V1Order_267_Noop | V1Order_267_DepositAsset | V1Order_267_DepositReserveAsset | V1Order_267_ExchangeAsset | V1Order_267_InitiateReserveWithdraw | V1Order_267_InitiateTeleport | V1Order_267_QueryHolding | V1Order_267_BuyExecution

export interface V1Order_267_Noop {
  __kind: 'Noop'
}

export interface V1Order_267_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_267_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Order_267_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_267_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Order_267_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Order_267_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_267_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_265[]
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

export type V0Order_273 = V0Order_273_Null | V0Order_273_DepositAsset | V0Order_273_DepositReserveAsset | V0Order_273_ExchangeAsset | V0Order_273_InitiateReserveWithdraw | V0Order_273_InitiateTeleport | V0Order_273_QueryHolding | V0Order_273_BuyExecution

export interface V0Order_273_Null {
  __kind: 'Null'
}

export interface V0Order_273_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_273_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Order_273_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_273_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Order_273_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_262[]
}

export interface V0Order_273_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_273_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_271[]
}

export type V1Order_278 = V1Order_278_Noop | V1Order_278_DepositAsset | V1Order_278_DepositReserveAsset | V1Order_278_ExchangeAsset | V1Order_278_InitiateReserveWithdraw | V1Order_278_InitiateTeleport | V1Order_278_QueryHolding | V1Order_278_BuyExecution

export interface V1Order_278_Noop {
  __kind: 'Noop'
}

export interface V1Order_278_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_278_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Order_278_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_278_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Order_278_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_267[]
}

export interface V1Order_278_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_278_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_276[]
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

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_TooMuchWeightRequired | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

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

export interface V2Error_TooMuchWeightRequired {
  __kind: 'TooMuchWeightRequired'
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

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}

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

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
  __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
  __kind: 'NonFungible'
}
