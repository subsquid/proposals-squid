import type {Result} from './support'

export type Type_103 = Type_103_System | Type_103_Babe | Type_103_Timestamp | Type_103_Indices | Type_103_Balances | Type_103_Authorship | Type_103_Staking | Type_103_Session | Type_103_Grandpa | Type_103_ImOnline | Type_103_AuthorityDiscovery | Type_103_Offences | Type_103_Treasury | Type_103_Tips | Type_103_Council | Type_103_TechnicalCommittee | Type_103_TechnicalMembership | Type_103_Democracy | Type_103_Elections | Type_103_Scheduler | Type_103_Utility | Type_103_Identity | Type_103_Swork | Type_103_Market | Type_103_Claims | Type_103_Benefits | Type_103_Locks | Type_103_Sudo | Type_103_Multisig | Type_103_ChainBridge | Type_103_BridgeTransfer

export interface Type_103_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_103_Babe {
  __kind: 'Babe'
  value: BabeCall
}

export interface Type_103_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_103_Indices {
  __kind: 'Indices'
  value: IndicesCall
}

export interface Type_103_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_103_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_103_Staking {
  __kind: 'Staking'
  value: StakingCall
}

export interface Type_103_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_103_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaCall
}

export interface Type_103_ImOnline {
  __kind: 'ImOnline'
  value: ImOnlineCall
}

export interface Type_103_AuthorityDiscovery {
  __kind: 'AuthorityDiscovery'
  value: AuthorityDiscoveryCall
}

export interface Type_103_Offences {
  __kind: 'Offences'
  value: OffencesCall
}

export interface Type_103_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_103_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Type_103_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Type_103_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_103_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Type_103_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_103_Elections {
  __kind: 'Elections'
  value: ElectionsCall
}

export interface Type_103_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Type_103_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Type_103_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Type_103_Swork {
  __kind: 'Swork'
  value: SworkCall
}

export interface Type_103_Market {
  __kind: 'Market'
  value: MarketCall
}

export interface Type_103_Claims {
  __kind: 'Claims'
  value: ClaimsCall
}

export interface Type_103_Benefits {
  __kind: 'Benefits'
  value: BenefitsCall
}

export interface Type_103_Locks {
  __kind: 'Locks'
  value: LocksCall
}

export interface Type_103_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export interface Type_103_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Type_103_ChainBridge {
  __kind: 'ChainBridge'
  value: ChainBridgeCall
}

export interface Type_103_BridgeTransfer {
  __kind: 'BridgeTransfer'
  value: BridgeTransferCall
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - Base Weight: 0.665 µs, independent of remark length.
 *  - No DB operations.
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
  items: [Uint8Array, Uint8Array][]
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
  keys: Uint8Array[]
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
  prefix: Uint8Array
  subkeys: number
}

export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 */
export interface BabeCall_report_equivocation {
  __kind: 'report_equivocation'
  equivocationProof: BabeEquivocationProof
  keyOwnerProof: MembershipProof
}

/**
 *  Report authority equivocation/misbehavior. This method will verify
 *  the equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence will
 *  be reported.
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
  __kind: 'report_equivocation_unsigned'
  equivocationProof: BabeEquivocationProof
  keyOwnerProof: MembershipProof
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

export type IndicesCall = IndicesCall_claim | IndicesCall_transfer | IndicesCall_free | IndicesCall_force_transfer | IndicesCall_freeze

/**
 *  Assign an previously unassigned index.
 * 
 *  Payment: `Deposit` is reserved from the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be claimed. This must not be in use.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_claim {
  __kind: 'claim'
  index: number
}

/**
 *  Assign an index already owned by the sender to another account. The balance reservation
 *  is effectively transferred to the new account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `index`: the index to be re-assigned. This must be owned by the sender.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One transfer operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (recipient)
 *     - Writes: Indices Accounts, System Account (recipient)
 *  # </weight>
 */
export interface IndicesCall_transfer {
  __kind: 'transfer'
  new: Uint8Array
  index: number
}

/**
 *  Free up an index owned by the sender.
 * 
 *  Payment: Any previous deposit placed for the index is unreserved in the sender account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must own the index.
 * 
 *  - `index`: the index to be freed. This must be owned by the sender.
 * 
 *  Emits `IndexFreed` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - One reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_free {
  __kind: 'free'
  index: number
}

/**
 *  Force an index to an account. This doesn't require a deposit. If the index is already
 *  held, then any deposit is reimbursed to its current owner.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `index`: the index to be (re-)assigned.
 *  - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
 *  - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
 * 
 *  Emits `IndexAssigned` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one reserve operation.
 *  - One event.
 *  -------------------
 *  - DB Weight:
 *     - Reads: Indices Accounts, System Account (original owner)
 *     - Writes: Indices Accounts, System Account (original owner)
 *  # </weight>
 */
export interface IndicesCall_force_transfer {
  __kind: 'force_transfer'
  new: Uint8Array
  index: number
  freeze: boolean
}

/**
 *  Freeze an index so it will always point to the sender account. This consumes the deposit.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must have a
 *  non-frozen account `index`.
 * 
 *  - `index`: the index to be frozen in place.
 * 
 *  Emits `IndexFrozen` if successful.
 * 
 *  # <weight>
 *  - `O(1)`.
 *  - One storage mutation (codec `O(1)`).
 *  - Up to one slash operation.
 *  - One event.
 *  -------------------
 *  - DB Weight: 1 Read/Write (Accounts)
 *  # </weight>
 */
export interface IndicesCall_freeze {
  __kind: 'freeze'
  index: number
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_transfer_keep_alive

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
  dest: Uint8Array
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
  dest: Uint8Array
  value: bigint
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_rebond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_guarantee | StakingCall_cut_guarantee | StakingCall_chill | StakingCall_set_controller | StakingCall_reward_stakers | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_reap_stash | StakingCall_set_start_reward_era | StakingCall_cancel_era_reward | StakingCall_set_validators_whitelist | StakingCall_force_validators_whitelist

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 *  unless the `origin` falls below _existential deposit_ and gets removed as dust.
 *  ------------------
 *  DB Weight:
 *  - Read: Bonded, Ledger, [Origin Account], Current Era, Locks
 *  - Write: Bonded, Payee, [Origin Account], Ledger, Locks
 *  # </weight>
 */
export interface StakingCall_bond {
  __kind: 'bond'
  controller: Uint8Array
  value: bigint
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller and
 *  it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Bonded`.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
 *  ------------
 *  DB Weight:
 *  - Read: Bonded, Ledger, [Origin Account], Locks
 *  - Write: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_bond_extra {
  __kind: 'bond_extra'
  maxAdditional: bigint
}

/**
 *  Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 *  period ends. If this leaves an amount actively bonded less than
 *  T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 *  Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 *  the funds out of management ready for transfer.
 * 
 *  No more than a limited number of unlocking chunks (see `MAX_UNLOCKING_CHUNKS`)
 *  can co-exists at the same time. In that case, [`Call::withdraw_unbonded`] need
 *  to be called first to remove some of the chunks (if possible).
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Unbonded`.
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via
 *    `withdraw_unbonded`.
 *  - One DB entry.
 *  ----------
 *  DB Weight:
 *  - Read: Ledger, Current Era, Locks, [Origin Account]
 *  - Write: [Origin Account], Locks, Ledger
 *  </weight>
 */
export interface StakingCall_unbond {
  __kind: 'unbond'
  value: bigint
}

/**
 *  Rebond a portion of the stash scheduled to be unlocked.
 * 
 *  The dispatch origin must be signed by the controller, and it can be only called when
 *  [`EraElectionStatus`] is `Closed`.
 * 
 *  # <weight>
 *  - Time complexity: O(L), where L is unlocking chunks
 *  - Bounded by `MAX_UNLOCKING_CHUNKS`.
 *  - Storage changes: Can't increase storage, only decrease it.
 *  ---------------
 *  - DB Weight:
 *      - Reads: EraElectionStatus, Ledger, Locks, [Origin Account]
 *      - Writes: [Origin Account], Locks, Ledger
 *  # </weight>
 */
export interface StakingCall_rebond {
  __kind: 'rebond'
  value: bigint
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 *  And, it can be only called when [`EraElectionStatus`] is `Closed`.
 * 
 *  Emits `Withdrawn`.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
 *  ---------------
 *  Complexity O(S) where S is the number of slashing spans to remove
 *  Update:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Locks, [Origin Account]
 *  - Writes: [Origin Account], Locks, Ledger
 *  Kill:
 *  - Reads: EraElectionStatus, Ledger, Current Era, Bonded, [Origin Account], Locks
 *  - Writes: Bonded, Slashing Spans (if S > 0), Ledger, Payee, Validators, Guarantors, [Origin Account], Locks
 *  - Writes Each: SpanSlash * S
 *  NOTE: Weight annotation is the kill scenario, we refund otherwise.
 *  # </weight>
 */
export interface StakingCall_withdraw_unbonded {
  __kind: 'withdraw_unbonded'
}

/**
 *  Declare the desire to validate for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  -----------
 *  DB Weight:
 *  - Read: Ledger, StakeLimit
 *  - Write: Guarantors, Validators
 *  # </weight>
 */
export interface StakingCall_validate {
  __kind: 'validate'
  prefs: ValidatorPrefs
}

/**
 *  Declare the desire to guarantee `targets` for the origin controller.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `validators` (N),
 *  `guarantors`, `guarantee_rel`
 *  - Both the reads and writes follow a similar pattern.
 *  ---------
 *  DB Weight:
 *  - Reads: Guarantors, Ledger, Current Era
 *  - Writes: Guarantors
 *  # </weight>
 */
export interface StakingCall_guarantee {
  __kind: 'guarantee'
  target: [Uint8Array, bigint]
}

/**
 *  Declare the desire to cut guarantee for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `validators` (N),
 *  `guarantors`, `guarantee_rel`
 *  - Both the reads and writes follow a similar pattern.
 *  ---------
 *  DB Weight:
 *  - Reads: Guarantors, Ledger, Current Era
 *  - Writes: Validators, Guarantors
 *  # </weight>
 */
export interface StakingCall_cut_guarantee {
  __kind: 'cut_guarantee'
  target: [Uint8Array, bigint]
}

/**
 *  Declare no desire to either validate or guarantee.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  --------
 *  DB Weight:
 *  - Read: Ledger
 *  - Write: Validators, Guarantors
 *  # </weight>
 */
export interface StakingCall_chill {
  __kind: 'chill'
}

/**
 *  (Re-)set the controller of a stash.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  ----------
 *  DB Weight:
 *  - Read: Bonded, Ledger New Controller, Ledger Old Controller
 *  - Write: Bonded, Ledger New Controller, Ledger Old Controller
 *  # </weight>
 */
export interface StakingCall_set_controller {
  __kind: 'set_controller'
  controller: Uint8Array
}

/**
 *  Pay out all the stakers behind a single validator for a single era.
 * 
 *  - `validator_stash` is the stash account of the validator. Their guarantors, up to
 *    `T::MaxGuarantorRewardedPerValidator`, will also receive their rewards.
 *  - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 *  The origin of this call must be _Signed_. Any account can call this function, even if
 *  it is not one of the stakers.
 *  TODO: Add weight for this one
 */
export interface StakingCall_reward_stakers {
  __kind: 'reward_stakers'
  validatorStash: Uint8Array
  era: number
}

/**
 *  Sets the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Base Weight: 1.717 µs
 *  Write: Validator Count
 *  # </weight>
 */
export interface StakingCall_set_validator_count {
  __kind: 'set_validator_count'
  new: number
}

/**
 *  Increments the ideal number of validators.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  Same as [`set_validator_count`].
 *  # </weight>
 */
export interface StakingCall_increase_validator_count {
  __kind: 'increase_validator_count'
  additional: number
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Base Weight: 1.857 µs
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
  __kind: 'force_no_eras'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - No arguments.
 *  - Base Weight: 1.959 µs
 *  - Write ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era {
  __kind: 'force_new_era'
}

/**
 *  Set the validators who cannot be slashed (if any).
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - O(V)
 *  - Base Weight: 2.208 + .006 * V µs
 *  - Write: Invulnerables
 *  # </weight>
 */
export interface StakingCall_set_invulnerables {
  __kind: 'set_invulnerables'
  validators: Uint8Array[]
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  O(S) where S is the number of slashing spans to be removed
 *  Base Weight: 53.07 µs
 *  Reads: Bonded, Account, Locks
 *  Writes: Bonded, Ledger, Payee, Validators, Guarantors, Account, Locks
 *  # </weight>
 */
export interface StakingCall_force_unstake {
  __kind: 'force_unstake'
  stash: Uint8Array
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  The dispatch origin must be Root.
 * 
 *  # <weight>
 *  - Base Weight: 2.05 µs
 *  - Write: ForceEra
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
  __kind: 'force_new_era_always'
}

/**
 *  Cancel enactment of a deferred slash.
 * 
 *  Can be called by the `T::SlashCancelOrigin`.
 * 
 *  Parameters: era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  Complexity: O(U + S)
 *  with U unapplied slashes weighted with U=1000
 *  and S is the number of slash indices to be canceled.
 *  - Base: 5870 + 34.61 * S µs
 *  - Read: Unapplied Slashes
 *  - Write: Unapplied Slashes
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
  __kind: 'cancel_deferred_slash'
  era: number
  slashIndices: number[]
}

/**
 *  Remove all data structure concerning a staker/stash once its balance is zero.
 *  This is essentially equivalent to `withdraw_unbonded` except it can be called by anyone
 *  and the target `stash` must have no funds left.
 * 
 *  This can be called from any origin.
 * 
 *  - `stash`: The stash account to reap. Its balance must be zero.
 * 
 *  # <weight>
 *  Complexity: O(S) where S is the number of slashing spans on the account.
 *  Base Weight: 75.94 µs
 *  DB Weight:
 *  - Reads: Stash Account, Bonded, Slashing Spans, Locks
 *  - Writes: Bonded, Ledger, Payee, Validators, guarantors, Stash Account, Locks
 *  # </weight>
 */
export interface StakingCall_reap_stash {
  __kind: 'reap_stash'
  stash: Uint8Array
}

export interface StakingCall_set_start_reward_era {
  __kind: 'set_start_reward_era'
  startRewardEra: number
}

export interface StakingCall_cancel_era_reward {
  __kind: 'cancel_era_reward'
  eraIndex: number
}

export interface StakingCall_set_validators_whitelist {
  __kind: 'set_validators_whitelist'
  newValidators: Uint8Array[]
}

export interface StakingCall_force_validators_whitelist {
  __kind: 'force_validators_whitelist'
  enable: boolean
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
  keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]
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
 *  - DbWrites per key id: `KeyOwnder`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 */
export interface GrandpaCall_report_equivocation {
  __kind: 'report_equivocation'
  equivocationProof: GrandpaEquivocationProof
  keyOwnerProof: MembershipProof
}

/**
 *  Report voter equivocation/misbehavior. This method will verify the
 *  equivocation proof and validate the given key ownership proof
 *  against the extracted offender. If both are valid, the offence
 *  will be reported.
 * 
 *  This extrinsic must be called unsigned and it is expected that only
 *  block authors will call it (validated in `ValidateUnsigned`), as such
 *  if the block author is defined it will be defined as the equivocation
 *  reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
  __kind: 'report_equivocation_unsigned'
  equivocationProof: GrandpaEquivocationProof
  keyOwnerProof: MembershipProof
}

/**
 *  Note that the current authority set of the GRANDPA finality gadget has
 *  stalled. This will trigger a forced authority set change at the beginning
 *  of the next session, to be enacted `delay` blocks after that. The delay
 *  should be high enough to safely assume that the block signalling the
 *  forced change will not be re-orged (e.g. 1000 blocks). The GRANDPA voters
 *  will start the new authority set using the given finalized block as base.
 *  Only callable by root.
 */
export interface GrandpaCall_note_stalled {
  __kind: 'note_stalled'
  delay: number
  bestFinalizedBlockNumber: number
}

export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 *  # <weight>
 *  - Complexity: `O(K + E)` where K is length of `Keys` (heartbeat.validators_len)
 *    and E is length of `heartbeat.network_state.external_address`
 *    - `O(K)`: decoding of length `K`
 *    - `O(E)`: decoding/encoding of length `E`
 *  - DbReads: pallet_session `Validators`, pallet_session `CurrentIndex`, `Keys`,
 *    `ReceivedHeartbeats`
 *  - DbWrites: `ReceivedHeartbeats`
 *  # </weight>
 */
export interface ImOnlineCall_heartbeat {
  __kind: 'heartbeat'
  heartbeat: Heartbeat
  signature: Uint8Array
}

export type AuthorityDiscoveryCall = never

export type OffencesCall = never

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
  beneficiary: Uint8Array
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
  who: Uint8Array
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
  hash: Uint8Array
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
  who: Uint8Array
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
  hash: Uint8Array
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
  hash: Uint8Array
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
  hash: Uint8Array
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

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
export interface CouncilCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
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
export interface CouncilCall_execute {
  __kind: 'execute'
  proposal: Type_103
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
export interface CouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Type_103
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
export interface CouncilCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
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
export interface CouncilCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
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
export interface CouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
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
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
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
  proposal: Type_103
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
  proposal: Type_103
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
  proposal: Uint8Array
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
  proposalHash: Uint8Array
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
  proposalHash: Uint8Array
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
  __kind: 'add_member'
  who: Uint8Array
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `T::SwapOrigin`.
 * 
 *  Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: Uint8Array
  add: Uint8Array
}

/**
 *  Change the membership to a new set, disregarding the existing membership. Be nice and
 *  pass `members` pre-sorted.
 * 
 *  May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
  __kind: 'reset_members'
  members: Uint8Array[]
}

/**
 *  Swap out the sending member for some other key `new`.
 * 
 *  May only be called from `Signed` origin of a current member.
 * 
 *  Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
  __kind: 'change_key'
  new: Uint8Array
}

/**
 *  Set the prime member. Must be a current member.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
  __kind: 'set_prime'
  who: Uint8Array
}

/**
 *  Remove the prime member if it exists.
 * 
 *  May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
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
  proposalHash: Uint8Array
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
  refIndex: number
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
  proposalHash: Uint8Array
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
  proposalHash: Uint8Array
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
  proposalHash: Uint8Array
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
  proposalHash: Uint8Array
  votingPeriod: number
  delay: number
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
  proposalHash: Uint8Array
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
  which: number
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
  to: Uint8Array
  conviction: Conviction
  balance: bigint
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
  proposalHash: Uint8Array
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
  target: Uint8Array
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
  index: number
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
  target: Uint8Array
  index: number
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: Uint8Array
  index: number
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
  proposalHash: Uint8Array
  maybeRefIndex: (number | undefined)
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

export type ElectionsCall = ElectionsCall_vote | ElectionsCall_remove_voter | ElectionsCall_submit_candidacy | ElectionsCall_renounce_candidacy | ElectionsCall_remove_member | ElectionsCall_clean_defunct_voters

/**
 *  Vote for a set of candidates for the upcoming round of election. This can be called to
 *  set the initial votes, or update already existing votes.
 * 
 *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 *  reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of possible candidates. Note that all current members and
 *      runners-up are also automatically candidates for the next round.
 * 
 *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  It is the responsibility of the caller to **NOT** place all of their balance into the
 *  lock and keep some for further operations.
 * 
 *  # <weight>
 *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 *  # </weight>
 */
export interface ElectionsCall_vote {
  __kind: 'vote'
  votes: Uint8Array[]
  value: bigint
}

/**
 *  Remove `origin` as a voter.
 * 
 *  This removes the lock and returns the deposit.
 * 
 *  The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 *  All candidates are wiped at the end of the term. They either become a member/runner-up,
 *  or leave the system while their deposit is slashed.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 *  to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 *  # <weight>
 *  The number of current candidates must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsCall_submit_candidacy {
  __kind: 'submit_candidacy'
  candidateCount: number
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 * 
 *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *    origin is removed as a runner-up.
 *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_members`], if replacement runners exists, they are immediately used.
 *    If the prime is renouncing, then no prime will exist until the next round.
 * 
 *  The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 *  # <weight>
 *  The type of renouncing must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
  renouncing: Renouncing
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen election is started.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  If we have a replacement, we use a small weight. Else, since this is a root call and
 *  will go into phragmen, we assume full block for now.
 *  # </weight>
 */
export interface ElectionsCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
  hasReplacement: boolean
}

/**
 *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 *  deposit of the removed voters are returned.
 * 
 *  This is an root function to be used only for cleaning the state.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  # <weight>
 *  The total number of voters and those that are defunct must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsCall_clean_defunct_voters {
  __kind: 'clean_defunct_voters'
  numVoters: number
  numDefunct: number
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
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_104
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
  when: number
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
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_104
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
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_104
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_104
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
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
  calls: Type_104[]
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
  call: Type_104
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin.
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
  calls: Type_104[]
}

export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 *  Add a registrar to the system.
 * 
 *  The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 *  - `account`: the account of the registrar.
 * 
 *  Emits `RegistrarAdded` if successful.
 * 
 *  # <weight>
 *  - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 *  - One storage mutation (codec `O(R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_add_registrar {
  __kind: 'add_registrar'
  account: Uint8Array
}

/**
 *  Set an account's identity information and reserve the appropriate deposit.
 * 
 *  If the account already has identity information, the deposit is taken as part payment
 *  for the new deposit.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  - `info`: The identity information.
 * 
 *  Emits `IdentitySet` if successful.
 * 
 *  # <weight>
 *  - `O(X + X' + R)`
 *    - where `X` additional-field-count (deposit-bounded and code-bounded)
 *    - where `R` judgements-count (registrar-count-bounded)
 *  - One balance reserve operation.
 *  - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_set_identity {
  __kind: 'set_identity'
  info: IdentityInfo
}

/**
 *  Set the sub-accounts of the sender.
 * 
 *  Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 *  and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  - `subs`: The identity's (new) sub-accounts.
 * 
 *  # <weight>
 *  - `O(P + S)`
 *    - where `P` old-subs-count (hard- and deposit-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *  - At most one balance operations.
 *  - DB:
 *    - `P + S` storage mutations (codec complexity `O(1)`)
 *    - One storage read (codec complexity `O(P)`).
 *    - One storage write (codec complexity `O(S)`).
 *    - One storage-exists (`IdentityOf::contains_key`).
 *  # </weight>
 */
export interface IdentityCall_set_subs {
  __kind: 'set_subs'
  subs: [Uint8Array, Data][]
}

/**
 *  Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 *  Payment: All reserved balances on the account are returned.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  identity.
 * 
 *  Emits `IdentityCleared` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`
 *    - where `R` registrar-count (governance-bounded).
 *    - where `S` subs-count (hard- and deposit-bounded).
 *    - where `X` additional-field-count (deposit-bounded and code-bounded).
 *  - One balance-unreserve operation.
 *  - `2` storage reads and `S + 2` storage deletions.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_clear_identity {
  __kind: 'clear_identity'
}

/**
 *  Request a judgement from a registrar.
 * 
 *  Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 *  given.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is requested.
 *  - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 *  ```nocompile
 *  Self::registrars().get(reg_index).unwrap().fee
 *  ```
 * 
 *  Emits `JudgementRequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_request_judgement {
  __kind: 'request_judgement'
  regIndex: number
  maxFee: bigint
}

/**
 *  Cancel a previous request.
 * 
 *  Payment: A previously reserved deposit is returned on success.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a
 *  registered identity.
 * 
 *  - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 *  Emits `JudgementUnrequested` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-reserve operation.
 *  - One storage mutation `O(R + X)`.
 *  - One event
 *  # </weight>
 */
export interface IdentityCall_cancel_request {
  __kind: 'cancel_request'
  regIndex: number
}

/**
 *  Set the fee required for a judgement to be requested from a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fee`: the new fee.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fee {
  __kind: 'set_fee'
  index: number
  fee: bigint
}

/**
 *  Change the account associated with a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `new`: the new account ID.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_account_id {
  __kind: 'set_account_id'
  index: number
  new: Uint8Array
}

/**
 *  Set the field information for a registrar.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `index`.
 * 
 *  - `index`: the index of the registrar whose fee is to be set.
 *  - `fields`: the fields that the registrar concerns themselves with.
 * 
 *  # <weight>
 *  - `O(R)`.
 *  - One storage mutation `O(R)`.
 *  - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 *  # </weight>
 */
export interface IdentityCall_set_fields {
  __kind: 'set_fields'
  index: number
  fields: bigint
}

/**
 *  Provide a judgement for an account's identity.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must be the account
 *  of the registrar whose index is `reg_index`.
 * 
 *  - `reg_index`: the index of the registrar whose judgement is being made.
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 *  - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 *  Emits `JudgementGiven` if successful.
 * 
 *  # <weight>
 *  - `O(R + X)`.
 *  - One balance-transfer operation.
 *  - Up to one account-lookup operation.
 *  - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_provide_judgement {
  __kind: 'provide_judgement'
  regIndex: number
  target: Uint8Array
  judgement: IdentityJudgement
}

/**
 *  Remove an account's identity and sub-account information and slash the deposits.
 * 
 *  Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 *  `Slash`. Verification request deposits are not returned; they should be cancelled
 *  manually using `cancel_request`.
 * 
 *  The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 *  - `target`: the account whose identity the judgement is upon. This must be an account
 *    with a registered identity.
 * 
 *  Emits `IdentityKilled` if successful.
 * 
 *  # <weight>
 *  - `O(R + S + X)`.
 *  - One balance-reserve operation.
 *  - `S + 2` storage mutations.
 *  - One event.
 *  # </weight>
 */
export interface IdentityCall_kill_identity {
  __kind: 'kill_identity'
  target: Uint8Array
}

/**
 *  Add the given account to the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
  __kind: 'add_sub'
  sub: Uint8Array
  data: Data
}

/**
 *  Alter the associated name of the given sub-account.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
  __kind: 'rename_sub'
  sub: Uint8Array
  data: Data
}

/**
 *  Remove the given account from the sender's subs.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender.
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
  __kind: 'remove_sub'
  sub: Uint8Array
}

/**
 *  Remove the sender as a sub-account.
 * 
 *  Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 *  to the sender (*not* the original depositor).
 * 
 *  The dispatch origin for this call must be _Signed_ and the sender must have a registered
 *  super-identity.
 * 
 *  NOTE: This should not normally be used, but is provided in the case that the non-
 *  controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
  __kind: 'quit_sub'
}

export type SworkCall = SworkCall_set_code | SworkCall_clear_expired_code | SworkCall_register | SworkCall_report_works | SworkCall_create_group | SworkCall_add_member_into_allowlist | SworkCall_remove_member_from_allowlist | SworkCall_join_group | SworkCall_quit_group | SworkCall_kick_out | SworkCall_set_punishment

/**
 *  Set code for AB Upgrade, this should only be called by `root` origin
 *  Ruled by `sudo/democracy`
 * 
 *  # <weight>
 *  - O(1)
 *  - 2 DB try
 *  # </weight>
 */
export interface SworkCall_set_code {
  __kind: 'set_code'
  newCode: Uint8Array
  expireBlock: number
}

/**
 *  clear the expired code
 */
export interface SworkCall_clear_expired_code {
  __kind: 'clear_expired_code'
  expiredCode: Uint8Array
}

/**
 *  Register as new trusted node, can only called from sWorker.
 *  All `inputs` can only be generated from sWorker's enclave
 * 
 *  The dispatch origin for this call must be _Signed_ by the reporter account.
 * 
 *  Emits `RegisterSuccess` if new id has been registered.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - TC depends on identities' number.
 *  - DB try depends on identities' number.
 * 
 *  ------------------
 *  DB Weight:
 *  - Read: Identities
 *  - Write: 3
 *  # </weight>
 */
export interface SworkCall_register {
  __kind: 'register'
  iasSig: Uint8Array
  iasCert: Uint8Array
  applier: Uint8Array
  isvBody: Uint8Array
  sig: Uint8Array
}

/**
 *  Report storage works from sWorker
 *  All `inputs` can only be generated from sWorker's enclave
 * 
 *  The dispatch origin for this call must be _Signed_ by the reporter account.
 * 
 *  Emits `WorksReportSuccess` if new work report has been reported
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - TC depends on identities' size and market.Merchant.file_map size
 *  - DB try depends on identities and market.Merchant.file_map
 * 
 *  ------------------
 *  DB Weight:
 *  - Read: Identities, ReportedInSlot, Code, market.Merchant, market.SOrder
 *  - Write: WorkReport, ReportedInSlot, market.SOrder
 *  # </weight>
 */
export interface SworkCall_report_works {
  __kind: 'report_works'
  currPk: Uint8Array
  abUpgradePk: Uint8Array
  slot: bigint
  slotHash: Uint8Array
  reportedSrdSize: bigint
  reportedFilesSize: bigint
  addedFiles: [Uint8Array, bigint, bigint][]
  deletedFiles: [Uint8Array, bigint, bigint][]
  reportedSrdRoot: Uint8Array
  reportedFilesRoot: Uint8Array
  sig: Uint8Array
}

/**
 *  Create a group. One account can only create one group once.
 */
export interface SworkCall_create_group {
  __kind: 'create_group'
}

export interface SworkCall_add_member_into_allowlist {
  __kind: 'add_member_into_allowlist'
  target: Uint8Array
}

export interface SworkCall_remove_member_from_allowlist {
  __kind: 'remove_member_from_allowlist'
  target: Uint8Array
}

/**
 *  Join a group. The account should already report works once and cannot have any spower value.
 *  The target must be a group owner.
 */
export interface SworkCall_join_group {
  __kind: 'join_group'
  target: Uint8Array
}

/**
 *  Quit a group.
 */
export interface SworkCall_quit_group {
  __kind: 'quit_group'
}

/**
 *  Kick someone out of this group.
 */
export interface SworkCall_kick_out {
  __kind: 'kick_out'
  target: Uint8Array
}

/**
 *  Set the punishment flag
 */
export interface SworkCall_set_punishment {
  __kind: 'set_punishment'
  isEnabled: boolean
}

export type MarketCall = MarketCall_place_storage_order | MarketCall_add_prepaid | MarketCall_calculate_reward | MarketCall_reward_merchant | MarketCall_do_file_migration | MarketCall_set_enable_market | MarketCall_set_base_fee | MarketCall_set_byte_fee | MarketCall_set_key_count_fee | MarketCall_set_min_base_fee | MarketCall_set_min_byte_fee | MarketCall_set_min_key_count_fee

/**
 *  Place a storage order. The cid and file_size of this file should be provided. Extra tips is accepted.
 */
export interface MarketCall_place_storage_order {
  __kind: 'place_storage_order'
  cid: Uint8Array
  reportedFileSize: bigint
  tips: bigint
  memo: Uint8Array
}

/**
 *  Add prepaid amount of currency for this file.
 *  If this file has prepaid value and enough for a new storage order, it can be renewed by anyone.
 */
export interface MarketCall_add_prepaid {
  __kind: 'add_prepaid'
  cid: Uint8Array
  amount: bigint
}

/**
 *  Calculate the reward for a file
 */
export interface MarketCall_calculate_reward {
  __kind: 'calculate_reward'
  cid: Uint8Array
}

/**
 *  Reward a merchant
 */
export interface MarketCall_reward_merchant {
  __kind: 'reward_merchant'
}

/**
 *  Migrate the file to file v2
 */
export interface MarketCall_do_file_migration {
  __kind: 'do_file_migration'
  filesCount: number
}

/**
 *  Open/Close market service
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_enable_market {
  __kind: 'set_enable_market'
  isEnabled: boolean
}

/**
 *  Set the file base fee
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_base_fee {
  __kind: 'set_base_fee'
  baseFee: bigint
}

/**
 *  Set the file byte fee
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_byte_fee {
  __kind: 'set_byte_fee'
  byteFee: bigint
}

/**
 *  Set the file key count fee
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_key_count_fee {
  __kind: 'set_key_count_fee'
  keyCountFee: bigint
}

/**
 *  Set the mininal file base fee
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_min_base_fee {
  __kind: 'set_min_base_fee'
  minBaseFee: bigint
}

/**
 *  Set the minimal file byte fee
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_min_byte_fee {
  __kind: 'set_min_byte_fee'
  minByteFee: bigint
}

/**
 *  Set the minimal file key count fee
 * 
 *  The dispatch origin for this call must be _Root_.
 */
export interface MarketCall_set_min_key_count_fee {
  __kind: 'set_min_key_count_fee'
  minKeyCountFee: bigint
}

export type ClaimsCall = ClaimsCall_change_superior | ClaimsCall_change_miner | ClaimsCall_set_claim_limit | ClaimsCall_mint_claim | ClaimsCall_claim | ClaimsCall_claim_cru18

/**
 *  Change superior
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  Parameter:
 *  - `new_superior`: The new superior's address
 */
export interface ClaimsCall_change_superior {
  __kind: 'change_superior'
  newSuperior: Uint8Array
}

/**
 *  Change miner
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  Parameters:
 *  - `new_miner`: The new miner's address
 */
export interface ClaimsCall_change_miner {
  __kind: 'change_miner'
  newMiner: Uint8Array
}

/**
 *  Set claim limit
 * 
 *  The dispatch origin for this call must be _Superior_.
 * 
 *  Parameters:
 *  - `limit`: The claim CRUs limit
 */
export interface ClaimsCall_set_claim_limit {
  __kind: 'set_claim_limit'
  limit: bigint
}

/**
 *  Mint the claim
 * 
 *  This dispatch origin for this call must be _Miner_.
 * 
 *  Parameters:
 *  - `tx`: The claim ethereum tx hash
 *  - `who`: The claimer ethereum address
 *  - `value`: The amount of this tx, should be less than claim_limit
 */
export interface ClaimsCall_mint_claim {
  __kind: 'mint_claim'
  tx: Uint8Array
  who: Uint8Array
  value: bigint
}

export interface ClaimsCall_claim {
  __kind: 'claim'
  dest: Uint8Array
  tx: Uint8Array
  sig: Uint8Array
}

export interface ClaimsCall_claim_cru18 {
  __kind: 'claim_cru18'
  dest: Uint8Array
  amount: bigint
}

export type BenefitsCall = BenefitsCall_add_benefit_funds | BenefitsCall_cut_benefit_funds | BenefitsCall_withdraw_benefit_funds | BenefitsCall_rebond_benefit_funds

/**
 *  Add benefit funds
 */
export interface BenefitsCall_add_benefit_funds {
  __kind: 'add_benefit_funds'
  value: bigint
  fundsType: FundsType
}

/**
 *  Cut benefit funds
 */
export interface BenefitsCall_cut_benefit_funds {
  __kind: 'cut_benefit_funds'
  value: bigint
  fundsType: FundsType
}

/**
 *  Withdraw benefit funds
 */
export interface BenefitsCall_withdraw_benefit_funds {
  __kind: 'withdraw_benefit_funds'
}

/**
 *  Withdraw benefit funds
 */
export interface BenefitsCall_rebond_benefit_funds {
  __kind: 'rebond_benefit_funds'
  value: bigint
  fundsType: FundsType
}

export type LocksCall = LocksCall_set_unlock_from | LocksCall_unlock

/**
 *  Set the global start date
 *  It can only be set once
 */
export interface LocksCall_set_unlock_from {
  __kind: 'set_unlock_from'
  date: number
}

/**
 *  Unlock the CRU18 or CRU24 one period
 */
export interface LocksCall_unlock {
  __kind: 'unlock'
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
  call: Type_104
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
  call: Type_104
  weight: bigint
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
  new: Uint8Array
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
  who: Uint8Array
  call: Type_104
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
  otherSignatories: Uint8Array[]
  call: Type_104
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
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  call: Uint8Array
  storeCall: boolean
  maxWeight: bigint
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
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
  maxWeight: bigint
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
  otherSignatories: Uint8Array[]
  timepoint: Timepoint
  callHash: Uint8Array
}

export type ChainBridgeCall = ChainBridgeCall_set_threshold | ChainBridgeCall_set_resource | ChainBridgeCall_remove_resource | ChainBridgeCall_whitelist_chain | ChainBridgeCall_add_relayer | ChainBridgeCall_remove_relayer | ChainBridgeCall_acknowledge_proposal | ChainBridgeCall_reject_proposal | ChainBridgeCall_eval_vote_state

/**
 *  Sets the vote threshold for proposals.
 * 
 *  This threshold is used to determine how many votes are required
 *  before a proposal is executed.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_set_threshold {
  __kind: 'set_threshold'
  threshold: number
}

/**
 *  Stores a method name on chain under an associated resource ID.
 * 
 *  # <weight>
 *  - O(1) write
 *  # </weight>
 */
export interface ChainBridgeCall_set_resource {
  __kind: 'set_resource'
  id: Uint8Array
  method: Uint8Array
}

/**
 *  Removes a resource ID from the resource mapping.
 * 
 *  After this call, bridge transfers with the associated resource ID will
 *  be rejected.
 * 
 *  # <weight>
 *  - O(1) removal
 *  # </weight>
 */
export interface ChainBridgeCall_remove_resource {
  __kind: 'remove_resource'
  id: Uint8Array
}

/**
 *  Enables a chain ID as a source or destination for a bridge transfer.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_whitelist_chain {
  __kind: 'whitelist_chain'
  id: number
}

/**
 *  Adds a new relayer to the relayer set.
 * 
 *  # <weight>
 *  - O(1) lookup and insert
 *  # </weight>
 */
export interface ChainBridgeCall_add_relayer {
  __kind: 'add_relayer'
  v: Uint8Array
}

/**
 *  Removes an existing relayer from the set.
 * 
 *  # <weight>
 *  - O(1) lookup and removal
 *  # </weight>
 */
export interface ChainBridgeCall_remove_relayer {
  __kind: 'remove_relayer'
  v: Uint8Array
}

/**
 *  Commits a vote in favour of the provided proposal.
 * 
 *  If a proposal with the given nonce and source chain ID does not already exist, it will
 *  be created with an initial vote in favour from the caller.
 * 
 *  # <weight>
 *  - weight of proposed call, regardless of whether execution is performed
 *  # </weight>
 */
export interface ChainBridgeCall_acknowledge_proposal {
  __kind: 'acknowledge_proposal'
  nonce: bigint
  srcId: number
  rId: Uint8Array
  call: Type_103
}

/**
 *  Commits a vote against a provided proposal.
 * 
 *  # <weight>
 *  - Fixed, since execution of proposal should not be included
 *  # </weight>
 */
export interface ChainBridgeCall_reject_proposal {
  __kind: 'reject_proposal'
  nonce: bigint
  srcId: number
  rId: Uint8Array
  call: Type_103
}

/**
 *  Evaluate the state of a proposal given the current vote threshold.
 * 
 *  A proposal with enough votes will be either executed or cancelled, and the status
 *  will be updated accordingly.
 * 
 *  # <weight>
 *  - weight of proposed call, regardless of whether execution is performed
 *  # </weight>
 */
export interface ChainBridgeCall_eval_vote_state {
  __kind: 'eval_vote_state'
  nonce: bigint
  srcId: number
  prop: Type_103
}

export type BridgeTransferCall = BridgeTransferCall_sudo_change_fee | BridgeTransferCall_transfer_native | BridgeTransferCall_transfer_to_elrond | BridgeTransferCall_transfer | BridgeTransferCall_transfer_from_elrond

/**
 *  Change extra bridge transfer fee that user should pay
 */
export interface BridgeTransferCall_sudo_change_fee {
  __kind: 'sudo_change_fee'
  minFee: bigint
  feeScale: number
  destId: number
}

/**
 *  Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
 */
export interface BridgeTransferCall_transfer_native {
  __kind: 'transfer_native'
  amount: bigint
  recipient: Uint8Array
  destId: number
}

/**
 *  Transfers some amount of the native token to some recipient on a (whitelisted) destination chain.
 */
export interface BridgeTransferCall_transfer_to_elrond {
  __kind: 'transfer_to_elrond'
  amount: bigint
  recipient: Uint8Array
}

/**
 *  Executes a simple currency transfer using the bridge account as the source
 */
export interface BridgeTransferCall_transfer {
  __kind: 'transfer'
  to: Uint8Array
  amount: bigint
  rid: Uint8Array
}

/**
 *  Executes a simple currency transfer using the bridge account as the source
 */
export interface BridgeTransferCall_transfer_from_elrond {
  __kind: 'transfer_from_elrond'
  to: Uint8Array
  amount: bigint
  rid: Uint8Array
}

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}

export interface BabeEquivocationProof {
  offender: Uint8Array
  slotNumber: bigint
  firstHeader: Header
  secondHeader: Header
}

export interface MembershipProof {
  session: number
  trieNodes: Uint8Array[]
  validatorCount: number
}

export interface Header {
  parentHash: Uint8Array
  number: number
  stateRoot: Uint8Array
  extrinsicsRoot: Uint8Array
  digest: Digest
}

export interface ValidatorPrefs {
  guaranteeFee: number
}

export interface GrandpaEquivocationProof {
  setId: bigint
  equivocation: GrandpaEquivocation
}

export interface Heartbeat {
  blockNumber: number
  networkState: OpaqueNetworkState
  sessionIndex: number
  authorityIndex: number
  validatorsLen: number
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  value: AccountVoteStandard
}

export interface AccountVote_Split {
  __kind: 'Split'
  value: AccountVoteSplit
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
  value: null
}

export interface Renouncing_RunnerUp {
  __kind: 'RunnerUp'
  value: null
}

export interface Renouncing_Candidate {
  __kind: 'Candidate'
  value: number
}

export type Type_104 = Type_104_System | Type_104_Babe | Type_104_Timestamp | Type_104_Indices | Type_104_Balances | Type_104_Authorship | Type_104_Staking | Type_104_Session | Type_104_Grandpa | Type_104_ImOnline | Type_104_AuthorityDiscovery | Type_104_Offences | Type_104_Treasury | Type_104_Tips | Type_104_Council | Type_104_TechnicalCommittee | Type_104_TechnicalMembership | Type_104_Democracy | Type_104_Elections | Type_104_Scheduler | Type_104_Utility | Type_104_Identity | Type_104_Swork | Type_104_Market | Type_104_Claims | Type_104_Benefits | Type_104_Locks | Type_104_Sudo | Type_104_Multisig | Type_104_ChainBridge | Type_104_BridgeTransfer

export interface Type_104_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_104_Babe {
  __kind: 'Babe'
  value: BabeCall
}

export interface Type_104_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_104_Indices {
  __kind: 'Indices'
  value: IndicesCall
}

export interface Type_104_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_104_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_104_Staking {
  __kind: 'Staking'
  value: StakingCall
}

export interface Type_104_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_104_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaCall
}

export interface Type_104_ImOnline {
  __kind: 'ImOnline'
  value: ImOnlineCall
}

export interface Type_104_AuthorityDiscovery {
  __kind: 'AuthorityDiscovery'
  value: AuthorityDiscoveryCall
}

export interface Type_104_Offences {
  __kind: 'Offences'
  value: OffencesCall
}

export interface Type_104_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_104_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Type_104_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Type_104_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_104_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Type_104_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_104_Elections {
  __kind: 'Elections'
  value: ElectionsCall
}

export interface Type_104_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Type_104_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Type_104_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Type_104_Swork {
  __kind: 'Swork'
  value: SworkCall
}

export interface Type_104_Market {
  __kind: 'Market'
  value: MarketCall
}

export interface Type_104_Claims {
  __kind: 'Claims'
  value: ClaimsCall
}

export interface Type_104_Benefits {
  __kind: 'Benefits'
  value: BenefitsCall
}

export interface Type_104_Locks {
  __kind: 'Locks'
  value: LocksCall
}

export interface Type_104_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export interface Type_104_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Type_104_ChainBridge {
  __kind: 'ChainBridge'
  value: ChainBridgeCall
}

export interface Type_104_BridgeTransfer {
  __kind: 'BridgeTransfer'
  value: BridgeTransferCall
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
  value: null
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

export type IdentityJudgement = IdentityJudgement_Unknown | IdentityJudgement_FeePaid | IdentityJudgement_Reasonable | IdentityJudgement_KnownGood | IdentityJudgement_OutOfDate | IdentityJudgement_LowQuality | IdentityJudgement_Erroneous

export interface IdentityJudgement_Unknown {
  __kind: 'Unknown'
  value: null
}

export interface IdentityJudgement_FeePaid {
  __kind: 'FeePaid'
  value: bigint
}

export interface IdentityJudgement_Reasonable {
  __kind: 'Reasonable'
  value: null
}

export interface IdentityJudgement_KnownGood {
  __kind: 'KnownGood'
  value: null
}

export interface IdentityJudgement_OutOfDate {
  __kind: 'OutOfDate'
  value: null
}

export interface IdentityJudgement_LowQuality {
  __kind: 'LowQuality'
  value: null
}

export interface IdentityJudgement_Erroneous {
  __kind: 'Erroneous'
  value: null
}

export type FundsType = FundsType_SWORK | FundsType_MARKET

export interface FundsType_SWORK {
  __kind: 'SWORK'
}

export interface FundsType_MARKET {
  __kind: 'MARKET'
}

export interface Timepoint {
  height: number
  index: number
}

export interface Digest {
  logs: DigestItem[]
}

export type GrandpaEquivocation = GrandpaEquivocation_Prevote | GrandpaEquivocation_Precommit

export interface GrandpaEquivocation_Prevote {
  __kind: 'Prevote'
  value: GrandpaEquivocationValue
}

export interface GrandpaEquivocation_Precommit {
  __kind: 'Precommit'
  value: GrandpaEquivocationValue
}

export interface OpaqueNetworkState {
  peerId: Uint8Array
  externalAddresses: Uint8Array[]
}

export interface AccountVoteStandard {
  vote: number
  balance: bigint
}

export interface AccountVoteSplit {
  aye: bigint
  nay: bigint
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
  __kind: 'AuthoritiesChange'
  value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
  __kind: 'ChangesTrieRoot'
  value: Uint8Array
}

export interface DigestItem_SealV0 {
  __kind: 'SealV0'
  value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
  __kind: 'ChangesTrieSignal'
  value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
  value: null
}

export interface GrandpaEquivocationValue {
  roundNumber: bigint
  identity: Uint8Array
  first: [GrandpaPrevote, Uint8Array]
  second: [GrandpaPrevote, Uint8Array]
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}

export interface GrandpaPrevote {
  targetHash: Uint8Array
  targetNumber: number
}
