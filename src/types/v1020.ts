import type {Result} from './support'

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
  __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
  __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
  __kind: 'SimpleMajority'
}

export type Type_88 = Type_88_System | Type_88_Babe | Type_88_Timestamp | Type_88_Indices | Type_88_Balances | Type_88_Authorship | Type_88_Staking | Type_88_Offences | Type_88_Session | Type_88_FinalityTracker | Type_88_Grandpa | Type_88_ImOnline | Type_88_AuthorityDiscovery | Type_88_Democracy | Type_88_Council | Type_88_TechnicalCommittee | Type_88_ElectionsPhragmen | Type_88_TechnicalMembership | Type_88_Treasury | Type_88_Claims | Type_88_Parachains | Type_88_Attestations | Type_88_Slots | Type_88_Registrar | Type_88_Sudo | Type_88_Nicks

export interface Type_88_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_88_Babe {
  __kind: 'Babe'
  value: BabeCall
}

export interface Type_88_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_88_Indices {
  __kind: 'Indices'
  value: IndicesCall
}

export interface Type_88_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_88_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_88_Staking {
  __kind: 'Staking'
  value: StakingCall
}

export interface Type_88_Offences {
  __kind: 'Offences'
  value: OffencesCall
}

export interface Type_88_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_88_FinalityTracker {
  __kind: 'FinalityTracker'
  value: FinalityTrackerCall
}

export interface Type_88_Grandpa {
  __kind: 'Grandpa'
  value: GrandpaCall
}

export interface Type_88_ImOnline {
  __kind: 'ImOnline'
  value: ImOnlineCall
}

export interface Type_88_AuthorityDiscovery {
  __kind: 'AuthorityDiscovery'
  value: AuthorityDiscoveryCall
}

export interface Type_88_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_88_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Type_88_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_88_ElectionsPhragmen {
  __kind: 'ElectionsPhragmen'
  value: ElectionsPhragmenCall
}

export interface Type_88_TechnicalMembership {
  __kind: 'TechnicalMembership'
  value: TechnicalMembershipCall
}

export interface Type_88_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_88_Claims {
  __kind: 'Claims'
  value: ClaimsCall
}

export interface Type_88_Parachains {
  __kind: 'Parachains'
  value: ParachainsCall
}

export interface Type_88_Attestations {
  __kind: 'Attestations'
  value: AttestationsCall
}

export interface Type_88_Slots {
  __kind: 'Slots'
  value: SlotsCall
}

export interface Type_88_Registrar {
  __kind: 'Registrar'
  value: RegistrarCall
}

export interface Type_88_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export interface Type_88_Nicks {
  __kind: 'Nicks'
  value: NicksCall
}

export interface Type_273 {
  end: number
  proposalHash: Uint8Array
  threshold: VoteThreshold
  delay: number
}

export interface TreasuryProposal {
  proposer: Uint8Array
  value: bigint
  beneficiary: Uint8Array
  bond: bigint
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix

/**
 *  A big dispatch that will disallow any other transaction to be included.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
}

/**
 *  Make some on-chain remark.
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 *  Set the new code.
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  new: Uint8Array
}

/**
 *  Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
}

export type BabeCall = never

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
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

export type IndicesCall = never

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive

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
 *    - Removing enough funds from an account will trigger
 *      `T::DustRemoval::on_unbalanced` and `T::OnFreeBalanceZero::on_free_balance_zero`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 * 
 *  # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: Type_17
  value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  # </weight>
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: Type_17
  newFree: bigint
  newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: Type_17
  dest: Type_17
  value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Module.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: Type_17
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

export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash

/**
 *  Take the origin account as a stash and lock up `value` of its balance. `controller` will
 *  be the account that controls it.
 * 
 *  `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 *  # <weight>
 *  - Independent of the arguments. Moderate complexity.
 *  - O(1).
 *  - Three extra DB entries.
 * 
 *  NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned unless
 *  the `origin` falls below _existential deposit_ and gets removed as dust.
 *  # </weight>
 */
export interface StakingCall_bond {
  __kind: 'bond'
  controller: Type_17
  value: bigint
  payee: RewardDestination
}

/**
 *  Add some extra amount that have appeared in the stash `free_balance` into the balance up
 *  for staking.
 * 
 *  Use this if there are additional funds in your stash account that you wish to bond.
 *  Unlike [`bond`] or [`unbond`] this function does not impose any limitation on the amount
 *  that can be added.
 * 
 *  The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - O(1).
 *  - One DB entry.
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
 * 
 *  See also [`Call::withdraw_unbonded`].
 * 
 *  # <weight>
 *  - Independent of the arguments. Limited but potentially exploitable complexity.
 *  - Contains a limited number of reads.
 *  - Each call (requires the remainder of the bonded balance to be above `minimum_balance`)
 *    will cause a new entry to be inserted into a vector (`Ledger.unlocking`) kept in storage.
 *    The only way to clean the aforementioned storage item is also user-controlled via `withdraw_unbonded`.
 *  - One DB entry.
 *  </weight>
 */
export interface StakingCall_unbond {
  __kind: 'unbond'
  value: bigint
}

/**
 *  Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 *  This essentially frees up that balance to be used by the stash account to do
 *  whatever it wants.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  See also [`Call::unbond`].
 * 
 *  # <weight>
 *  - Could be dependent on the `origin` argument and how much `unlocking` chunks exist.
 *   It implies `consolidate_unlocked` which loops over `Ledger.unlocking`, which is
 *   indirectly user-controlled. See [`unbond`] for more detail.
 *  - Contains a limited number of reads, yet the size of which could be large based on `ledger`.
 *  - Writes are limited to the `origin` account key.
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
 *  # </weight>
 */
export interface StakingCall_validate {
  __kind: 'validate'
  prefs: ValidatorPrefsWithCommission
}

/**
 *  Declare the desire to nominate `targets` for the origin controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - The transaction's complexity is proportional to the size of `targets`,
 *  which is capped at `MAX_NOMINATIONS`.
 *  - Both the reads and writes follow a similar pattern.
 *  # </weight>
 */
export interface StakingCall_nominate {
  __kind: 'nominate'
  targets: Type_17[]
}

/**
 *  Declare no desire to either validate or nominate.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains one read.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_chill {
  __kind: 'chill'
}

/**
 *  (Re-)set the payment target for a controller.
 * 
 *  Effects will be felt at the beginning of the next era.
 * 
 *  The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 *  # <weight>
 *  - Independent of the arguments. Insignificant complexity.
 *  - Contains a limited number of reads.
 *  - Writes are limited to the `origin` account key.
 *  # </weight>
 */
export interface StakingCall_set_payee {
  __kind: 'set_payee'
  payee: RewardDestination
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
 *  # </weight>
 */
export interface StakingCall_set_controller {
  __kind: 'set_controller'
  controller: Type_17
}

/**
 *  The ideal number of validators.
 */
export interface StakingCall_set_validator_count {
  __kind: 'set_validator_count'
  new: number
}

/**
 *  Force there to be no new eras indefinitely.
 * 
 *  # <weight>
 *  - No arguments.
 *  # </weight>
 */
export interface StakingCall_force_no_eras {
  __kind: 'force_no_eras'
}

/**
 *  Force there to be a new era at the end of the next session. After this, it will be
 *  reset to normal (non-forced) behaviour.
 * 
 *  # <weight>
 *  - No arguments.
 *  # </weight>
 */
export interface StakingCall_force_new_era {
  __kind: 'force_new_era'
}

/**
 *  Set the validators who cannot be slashed (if any).
 */
export interface StakingCall_set_invulnerables {
  __kind: 'set_invulnerables'
  validators: Uint8Array[]
}

/**
 *  Force a current staker to become completely unstaked, immediately.
 */
export interface StakingCall_force_unstake {
  __kind: 'force_unstake'
  stash: Uint8Array
}

/**
 *  Force there to be a new era at the end of sessions indefinitely.
 * 
 *  # <weight>
 *  - One storage write
 *  # </weight>
 */
export interface StakingCall_force_new_era_always {
  __kind: 'force_new_era_always'
}

/**
 *  Cancel enactment of a deferred slash. Can be called by either the root origin or
 *  the `T::SlashCancelOrigin`.
 *  passing the era and indices of the slashes for that era to kill.
 * 
 *  # <weight>
 *  - One storage write.
 *  # </weight>
 */
export interface StakingCall_cancel_deferred_slash {
  __kind: 'cancel_deferred_slash'
  era: number
  slashIndices: number[]
}

export type OffencesCall = never

export type SessionCall = SessionCall_set_keys

/**
 *  Sets the session key(s) of the function caller to `key`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - O(log n) in number of accounts.
 *  - One extra DB entry.
 *  # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]
  proof: Uint8Array
}

export type FinalityTrackerCall = FinalityTrackerCall_final_hint

/**
 *  Hint that the author of this block thinks the best finalized
 *  block is the given number.
 */
export interface FinalityTrackerCall_final_hint {
  __kind: 'final_hint'
  hint: number
}

export type GrandpaCall = GrandpaCall_report_misbehavior

/**
 *  Report some misbehavior.
 */
export interface GrandpaCall_report_misbehavior {
  __kind: 'report_misbehavior'
  report: Uint8Array
}

export type ImOnlineCall = ImOnlineCall_heartbeat

export interface ImOnlineCall_heartbeat {
  __kind: 'heartbeat'
  heartbeat: HeartbeatTo244
  signature: Uint8Array
}

export type AuthorityDiscoveryCall = never

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_proxy_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_set_proxy | DemocracyCall_resign_proxy | DemocracyCall_remove_proxy | DemocracyCall_delegate | DemocracyCall_undelegate

/**
 *  Propose a sensitive action to be taken.
 * 
 *  # <weight>
 *  - O(1).
 *  - Two DB changes, one DB entry.
 *  # </weight>
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposal: Type_88
  value: bigint
}

/**
 *  Propose a sensitive action to be taken.
 * 
 *  # <weight>
 *  - O(1).
 *  - One DB entry.
 *  # </weight>
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  # <weight>
 *  - O(1).
 *  - One DB change, one DB entry.
 *  # </weight>
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: number
}

/**
 *  Vote in a referendum on behalf of a stash. If `vote.is_aye()`, the vote is to enact
 *  the proposal;  otherwise it is a vote to keep the status quo.
 * 
 *  # <weight>
 *  - O(1).
 *  - One DB change, one DB entry.
 *  # </weight>
 */
export interface DemocracyCall_proxy_vote {
  __kind: 'proxy_vote'
  refIndex: number
  vote: number
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposal: Type_88
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposal: Type_88
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposal: Type_88
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `EmergencyVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: Uint8Array
  votingPeriod: number
  delay: number
}

/**
 *  Veto and blacklist the external proposal hash.
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: Uint8Array
}

/**
 *  Remove a referendum.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  when: number
  which: number
  what: number
}

/**
 *  Specify a proxy. Called by the stash.
 * 
 *  # <weight>
 *  - One extra DB entry.
 *  # </weight>
 */
export interface DemocracyCall_set_proxy {
  __kind: 'set_proxy'
  proxy: Uint8Array
}

/**
 *  Clear the proxy. Called by the proxy.
 * 
 *  # <weight>
 *  - One DB clear.
 *  # </weight>
 */
export interface DemocracyCall_resign_proxy {
  __kind: 'resign_proxy'
}

/**
 *  Clear the proxy. Called by the stash.
 * 
 *  # <weight>
 *  - One DB clear.
 *  # </weight>
 */
export interface DemocracyCall_remove_proxy {
  __kind: 'remove_proxy'
  proxy: Uint8Array
}

/**
 *  Delegate vote.
 * 
 *  # <weight>
 *  - One extra DB entry.
 *  # </weight>
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: Uint8Array
  conviction: Conviction
}

/**
 *  Undelegate vote.
 * 
 *  # <weight>
 *  - O(1).
 *  # </weight>
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote

/**
 *  Set the collective's membership manually to `new_members`. Be nice to the chain and
 *  provide it pre-sorted.
 * 
 *  Requires root origin.
 */
export interface CouncilCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 */
export interface CouncilCall_execute {
  __kind: 'execute'
  proposal: Type_88
}

/**
 *  # <weight>
 *  - Bounded storage reads and writes.
 *  - Argument `threshold` has bearing on weight.
 *  # </weight>
 */
export interface CouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Type_88
}

/**
 *  # <weight>
 *  - Bounded storage read and writes.
 *  - Will be slightly heavier if the proposal is approved / disapproved after the vote.
 *  # </weight>
 */
export interface CouncilCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote

/**
 *  Set the collective's membership manually to `new_members`. Be nice to the chain and
 *  provide it pre-sorted.
 * 
 *  Requires root origin.
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Type_88
}

/**
 *  # <weight>
 *  - Bounded storage reads and writes.
 *  - Argument `threshold` has bearing on weight.
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Type_88
}

/**
 *  # <weight>
 *  - Bounded storage read and writes.
 *  - Will be slightly heavier if the proposal is approved / disapproved after the vote.
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

export type ElectionsPhragmenCall = ElectionsPhragmenCall_vote | ElectionsPhragmenCall_remove_voter | ElectionsPhragmenCall_report_defunct_voter | ElectionsPhragmenCall_submit_candidacy | ElectionsPhragmenCall_renounce_candidacy | ElectionsPhragmenCall_remove_member

/**
 *  Vote for a set of candidates for the upcoming round of election.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of candidates.
 * 
 *  Upon voting, `value` units of `who`'s balance is locked and a bond amount is reserved.
 *  It is the responsibility of the caller to not place all of their balance into the lock
 *  and keep some for further transactions.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(1)
 *  Writes: O(V) given `V` votes. V is bounded by 16.
 *  # </weight>
 */
export interface ElectionsPhragmenCall_vote {
  __kind: 'vote'
  votes: Uint8Array[]
  value: bigint
}

/**
 *  Remove `origin` as a voter. This removes the lock and returns the bond.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(1)
 *  Writes: O(1)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 *  Report `target` for being an defunct voter. In case of a valid report, the reporter is
 *  rewarded by the bond amount of `target`. Otherwise, the reporter itself is removed and
 *  their bond is slashed.
 * 
 *  A defunct voter is defined to be:
 *    - a voter whose current submitted votes are all invalid. i.e. all of them are no
 *      longer a candidate nor an active member.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(NLogM) given M current candidates and N votes for `target`.
 *  Writes: O(1)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_report_defunct_voter {
  __kind: 'report_defunct_voter'
  target: Type_17
}

/**
 *  Submit oneself for candidacy.
 * 
 *  A candidate will either:
 *    - Lose at the end of the term and forfeit their deposit.
 *    - Win and become a member. Members will eventually get their stash back.
 *    - Become a runner-up. Runners-ups are reserved members in case one gets forcefully
 *      removed.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(LogN) Given N candidates.
 *  Writes: O(1)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_submit_candidacy {
  __kind: 'submit_candidacy'
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 *  - `origin` is a candidate and not elected in any set. In this case, the bond is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner up. In this case, the bond is unreserved, returned and
 *    origin is removed as a runner.
 *  - `origin` is a current member. In this case, the bond is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_voter`], if replacement runners exists, they are immediately used.
 */
export interface ElectionsPhragmenCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen round is started.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  #### State
 *  Reads: O(do_phragmen)
 *  Writes: O(do_phragmen)
 *  # </weight>
 */
export interface ElectionsPhragmenCall_remove_member {
  __kind: 'remove_member'
  who: Type_17
}

export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members

/**
 *  Add a member `who` to the set.
 * 
 *  May only be called from `AddOrigin` or root.
 */
export interface TechnicalMembershipCall_add_member {
  __kind: 'add_member'
  who: Uint8Array
}

/**
 *  Remove a member `who` from the set.
 * 
 *  May only be called from `RemoveOrigin` or root.
 */
export interface TechnicalMembershipCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
}

/**
 *  Swap out one member `remove` for another `add`.
 * 
 *  May only be called from `SwapOrigin` or root.
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
 *  May only be called from `ResetOrigin` or root.
 */
export interface TechnicalMembershipCall_reset_members {
  __kind: 'reset_members'
  members: Uint8Array[]
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change, one extra DB entry.
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: Type_17
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB clear.
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
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim

/**
 *  Make a claim.
 */
export interface ClaimsCall_claim {
  __kind: 'claim'
  dest: Uint8Array
  ethereumSignature: Uint8Array
}

/**
 *  Add a new claim, if you are root.
 */
export interface ClaimsCall_mint_claim {
  __kind: 'mint_claim'
  who: Uint8Array
  value: bigint
}

export type ParachainsCall = ParachainsCall_set_heads

/**
 *  Provide candidate receipts for parachains, in ascending order by id.
 */
export interface ParachainsCall_set_heads {
  __kind: 'set_heads'
  heads: AttestedCandidate[]
}

export type AttestationsCall = AttestationsCall_more_attestations

/**
 *  Provide candidate receipts for parachains, in ascending order by id.
 */
export interface AttestationsCall_more_attestations {
  __kind: 'more_attestations'
  more: MoreAttestations
}

export type SlotsCall = SlotsCall_new_auction | SlotsCall_bid | SlotsCall_bid_renew | SlotsCall_set_offboarding | SlotsCall_fix_deploy_data | SlotsCall_elaborate_deploy_data

/**
 *  Create a new auction.
 * 
 *  This can only happen when there isn't already an auction in progress and may only be
 *  called by the root origin. Accepts the `duration` of this auction and the
 *  `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface SlotsCall_new_auction {
  __kind: 'new_auction'
  duration: number
  leasePeriodIndex: number
}

/**
 *  Make a new bid from an account (including a parachain account) for deploying a new
 *  parachain.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 *  funded by) the same account.
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface SlotsCall_bid {
  __kind: 'bid'
  sub: number
  auctionIndex: number
  firstSlot: number
  lastSlot: number
  amount: bigint
}

/**
 *  Make a new bid from a parachain account for renewing that (pre-existing) parachain.
 * 
 *  The origin *must* be a parachain account.
 * 
 *  Multiple simultaneous bids from the same bidder are allowed only as long as all active
 *  bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 *  - `auction_index` is the index of the auction to bid on. Should just be the present
 *  value of `AuctionCounter`.
 *  - `first_slot` is the first lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `last_slot` is the last lease period index of the range to bid on. This is the
 *  absolute lease period index value, not an auction-specific offset.
 *  - `amount` is the amount to bid to be held as deposit for the parachain should the
 *  bid win. This amount is held throughout the range.
 */
export interface SlotsCall_bid_renew {
  __kind: 'bid_renew'
  auctionIndex: number
  firstSlot: number
  lastSlot: number
  amount: bigint
}

/**
 *  Set the off-boarding information for a parachain.
 * 
 *  The origin *must* be a parachain account.
 * 
 *  - `dest` is the destination account to receive the parachain's deposit.
 */
export interface SlotsCall_set_offboarding {
  __kind: 'set_offboarding'
  dest: Type_17
}

/**
 *  Set the deploy information for a successful bid to deploy a new parachain.
 * 
 *  - `origin` must be the successful bidder account.
 *  - `sub` is the sub-bidder ID of the bidder.
 *  - `para_id` is the parachain ID allotted to the winning bidder.
 *  - `code_hash` is the hash of the parachain's Wasm validation function.
 *  - `initial_head_data` is the parachain's initial head data.
 */
export interface SlotsCall_fix_deploy_data {
  __kind: 'fix_deploy_data'
  sub: number
  paraId: number
  codeHash: Uint8Array
  initialHeadData: Uint8Array
}

/**
 *  Note a new parachain's code.
 * 
 *  This must be called after `fix_deploy_data` and `code` must be the preimage of the
 *  `code_hash` passed there for the same `para_id`.
 * 
 *  This may be called before or after the beginning of the parachain's first lease period.
 *  If called before then the parachain will become active at the first block of its
 *  starting lease period. If after, then it will become active immediately after this call.
 * 
 *  - `_origin` is irrelevant.
 *  - `para_id` is the parachain ID whose code will be elaborated.
 *  - `code` is the preimage of the registered `code_hash` of `para_id`.
 */
export interface SlotsCall_elaborate_deploy_data {
  __kind: 'elaborate_deploy_data'
  paraId: number
  code: Uint8Array
}

export type RegistrarCall = RegistrarCall_register_para | RegistrarCall_deregister_para | RegistrarCall_set_thread_count | RegistrarCall_register_parathread | RegistrarCall_select_parathread | RegistrarCall_deregister_parathread | RegistrarCall_swap

/**
 *  Register a parachain with given code.
 *  Fails if given ID is already used.
 */
export interface RegistrarCall_register_para {
  __kind: 'register_para'
  id: number
  info: ParaInfo
  code: Uint8Array
  initialHeadData: Uint8Array
}

/**
 *  Deregister a parachain with given id
 */
export interface RegistrarCall_deregister_para {
  __kind: 'deregister_para'
  id: number
}

/**
 *  Reset the number of parathreads that can pay to be scheduled in a single block.
 * 
 *  - `count`: The number of parathreads.
 * 
 *  Must be called from Root origin.
 */
export interface RegistrarCall_set_thread_count {
  __kind: 'set_thread_count'
  count: number
}

/**
 *  Register a parathread for immediate use.
 * 
 *  Must be sent from a Signed origin that is able to have ParathreadDeposit reserved.
 *  `code` and `initial_head_data` are used to initialize the parathread's state.
 */
export interface RegistrarCall_register_parathread {
  __kind: 'register_parathread'
  code: Uint8Array
  initialHeadData: Uint8Array
}

/**
 *  Place a bid for a parathread to be progressed in the next block.
 * 
 *  This is a kind of special transaction that should by heavily prioritized in the
 *  transaction pool according to the `value`; only `ThreadCount` of them may be presented
 *  in any single block.
 */
export interface RegistrarCall_select_parathread {
  __kind: 'select_parathread'
  id: number
  collator: Uint8Array
  headHash: Uint8Array
}

/**
 *  Deregister a parathread and retrieve the deposit.
 * 
 *  Must be sent from a `Parachain` origin which is currently a parathread.
 * 
 *  Ensure that before calling this that any funds you want emptied from the parathread's
 *  account is moved out; after this it will be impossible to retrieve them (without
 *  governance intervention).
 */
export interface RegistrarCall_deregister_parathread {
  __kind: 'deregister_parathread'
}

/**
 *  Swap a parachain with another parachain or parathread. The origin must be a `Parachain`.
 *  The swap will happen only if there is already an opposite swap pending. If there is not,
 *  the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 * 
 *  The `ParaId`s remain mapped to the same head data and code so external code can rely on
 *  `ParaId` to be a long-term identifier of a notional "parachain". However, their
 *  scheduling info (i.e. whether they're a parathread or parachain), auction information
 *  and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
  __kind: 'swap'
  other: number
}

export type SudoCall = SudoCall_sudo | SudoCall_set_key | SudoCall_sudo_as

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Unknown weight of derivative `proposal` execution.
 *  # </weight>
 */
export interface SudoCall_sudo {
  __kind: 'sudo'
  proposal: Type_88
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
  new: Type_17
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
 *  - Unknown weight of derivative `proposal` execution.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
  __kind: 'sudo_as'
  who: Type_17
  proposal: Type_88
}

export type NicksCall = NicksCall_set_name | NicksCall_clear_name | NicksCall_kill_name | NicksCall_force_name

/**
 *  Set an account's name. The name should be a UTF-8-encoded string by convention, though
 *  we don't check it.
 * 
 *  The name may not be more than `T::MaxLength` bytes, nor less than `T::MinLength` bytes.
 * 
 *  If the account doesn't already have a name, then a fee of `ReservationFee` is reserved
 *  in the account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - At most one balance operation.
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_set_name {
  __kind: 'set_name'
  name: Uint8Array
}

/**
 *  Clear an account's name and return the deposit. Fails if the account was not named.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - One balance operation.
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_clear_name {
  __kind: 'clear_name'
}

/**
 *  Remove an account's name and take charge of the deposit.
 * 
 *  Fails if `who` has not been named. The deposit is dealt with through `T::Slashed`
 *  imbalance handler.
 * 
 *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  - One unbalanced handler (probably a balance transfer)
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_kill_name {
  __kind: 'kill_name'
  target: Type_17
}

/**
 *  Set a third-party account's name with no deposit.
 * 
 *  No length checking is done on the name.
 * 
 *  The dispatch origin for this call must be _Root_ or match `T::ForceOrigin`.
 * 
 *  # <weight>
 *  - O(1).
 *  - At most one balance operation.
 *  - One storage read/write.
 *  - One event.
 *  # </weight>
 */
export interface NicksCall_force_name {
  __kind: 'force_name'
  target: Type_17
  name: Uint8Array
}

export type Type_17 = Type_17_Idx0 | Type_17_Idx1 | Type_17_Idx2 | Type_17_Idx3 | Type_17_Idx4 | Type_17_Idx5 | Type_17_Idx6 | Type_17_Idx7 | Type_17_Idx8 | Type_17_Idx9 | Type_17_Idx10 | Type_17_Idx11 | Type_17_Idx12 | Type_17_Idx13 | Type_17_Idx14 | Type_17_Idx15 | Type_17_Idx16 | Type_17_Idx17 | Type_17_Idx18 | Type_17_Idx19 | Type_17_Idx20 | Type_17_Idx21 | Type_17_Idx22 | Type_17_Idx23 | Type_17_Idx24 | Type_17_Idx25 | Type_17_Idx26 | Type_17_Idx27 | Type_17_Idx28 | Type_17_Idx29 | Type_17_Idx30 | Type_17_Idx31 | Type_17_Idx32 | Type_17_Idx33 | Type_17_Idx34 | Type_17_Idx35 | Type_17_Idx36 | Type_17_Idx37 | Type_17_Idx38 | Type_17_Idx39 | Type_17_Idx40 | Type_17_Idx41 | Type_17_Idx42 | Type_17_Idx43 | Type_17_Idx44 | Type_17_Idx45 | Type_17_Idx46 | Type_17_Idx47 | Type_17_Idx48 | Type_17_Idx49 | Type_17_Idx50 | Type_17_Idx51 | Type_17_Idx52 | Type_17_Idx53 | Type_17_Idx54 | Type_17_Idx55 | Type_17_Idx56 | Type_17_Idx57 | Type_17_Idx58 | Type_17_Idx59 | Type_17_Idx60 | Type_17_Idx61 | Type_17_Idx62 | Type_17_Idx63 | Type_17_Idx64 | Type_17_Idx65 | Type_17_Idx66 | Type_17_Idx67 | Type_17_Idx68 | Type_17_Idx69 | Type_17_Idx70 | Type_17_Idx71 | Type_17_Idx72 | Type_17_Idx73 | Type_17_Idx74 | Type_17_Idx75 | Type_17_Idx76 | Type_17_Idx77 | Type_17_Idx78 | Type_17_Idx79 | Type_17_Idx80 | Type_17_Idx81 | Type_17_Idx82 | Type_17_Idx83 | Type_17_Idx84 | Type_17_Idx85 | Type_17_Idx86 | Type_17_Idx87 | Type_17_Idx88 | Type_17_Idx89 | Type_17_Idx90 | Type_17_Idx91 | Type_17_Idx92 | Type_17_Idx93 | Type_17_Idx94 | Type_17_Idx95 | Type_17_Idx96 | Type_17_Idx97 | Type_17_Idx98 | Type_17_Idx99 | Type_17_Idx100 | Type_17_Idx101 | Type_17_Idx102 | Type_17_Idx103 | Type_17_Idx104 | Type_17_Idx105 | Type_17_Idx106 | Type_17_Idx107 | Type_17_Idx108 | Type_17_Idx109 | Type_17_Idx110 | Type_17_Idx111 | Type_17_Idx112 | Type_17_Idx113 | Type_17_Idx114 | Type_17_Idx115 | Type_17_Idx116 | Type_17_Idx117 | Type_17_Idx118 | Type_17_Idx119 | Type_17_Idx120 | Type_17_Idx121 | Type_17_Idx122 | Type_17_Idx123 | Type_17_Idx124 | Type_17_Idx125 | Type_17_Idx126 | Type_17_Idx127 | Type_17_Idx128 | Type_17_Idx129 | Type_17_Idx130 | Type_17_Idx131 | Type_17_Idx132 | Type_17_Idx133 | Type_17_Idx134 | Type_17_Idx135 | Type_17_Idx136 | Type_17_Idx137 | Type_17_Idx138 | Type_17_Idx139 | Type_17_Idx140 | Type_17_Idx141 | Type_17_Idx142 | Type_17_Idx143 | Type_17_Idx144 | Type_17_Idx145 | Type_17_Idx146 | Type_17_Idx147 | Type_17_Idx148 | Type_17_Idx149 | Type_17_Idx150 | Type_17_Idx151 | Type_17_Idx152 | Type_17_Idx153 | Type_17_Idx154 | Type_17_Idx155 | Type_17_Idx156 | Type_17_Idx157 | Type_17_Idx158 | Type_17_Idx159 | Type_17_Idx160 | Type_17_Idx161 | Type_17_Idx162 | Type_17_Idx163 | Type_17_Idx164 | Type_17_Idx165 | Type_17_Idx166 | Type_17_Idx167 | Type_17_Idx168 | Type_17_Idx169 | Type_17_Idx170 | Type_17_Idx171 | Type_17_Idx172 | Type_17_Idx173 | Type_17_Idx174 | Type_17_Idx175 | Type_17_Idx176 | Type_17_Idx177 | Type_17_Idx178 | Type_17_Idx179 | Type_17_Idx180 | Type_17_Idx181 | Type_17_Idx182 | Type_17_Idx183 | Type_17_Idx184 | Type_17_Idx185 | Type_17_Idx186 | Type_17_Idx187 | Type_17_Idx188 | Type_17_Idx189 | Type_17_Idx190 | Type_17_Idx191 | Type_17_Idx192 | Type_17_Idx193 | Type_17_Idx194 | Type_17_Idx195 | Type_17_Idx196 | Type_17_Idx197 | Type_17_Idx198 | Type_17_Idx199 | Type_17_Idx200 | Type_17_Idx201 | Type_17_Idx202 | Type_17_Idx203 | Type_17_Idx204 | Type_17_Idx205 | Type_17_Idx206 | Type_17_Idx207 | Type_17_Idx208 | Type_17_Idx209 | Type_17_Idx210 | Type_17_Idx211 | Type_17_Idx212 | Type_17_Idx213 | Type_17_Idx214 | Type_17_Idx215 | Type_17_Idx216 | Type_17_Idx217 | Type_17_Idx218 | Type_17_Idx219 | Type_17_Idx220 | Type_17_Idx221 | Type_17_Idx222 | Type_17_Idx223 | Type_17_Idx224 | Type_17_Idx225 | Type_17_Idx226 | Type_17_Idx227 | Type_17_Idx228 | Type_17_Idx229 | Type_17_Idx230 | Type_17_Idx231 | Type_17_Idx232 | Type_17_Idx233 | Type_17_Idx234 | Type_17_Idx235 | Type_17_Idx236 | Type_17_Idx237 | Type_17_Idx238 | Type_17_IdxU16 | Type_17_IdxU32 | Type_17_IdxU64 | Type_17_AccountId

export interface Type_17_Idx0 {
  __kind: 'Idx0'
}

export interface Type_17_Idx1 {
  __kind: 'Idx1'
}

export interface Type_17_Idx2 {
  __kind: 'Idx2'
}

export interface Type_17_Idx3 {
  __kind: 'Idx3'
}

export interface Type_17_Idx4 {
  __kind: 'Idx4'
}

export interface Type_17_Idx5 {
  __kind: 'Idx5'
}

export interface Type_17_Idx6 {
  __kind: 'Idx6'
}

export interface Type_17_Idx7 {
  __kind: 'Idx7'
}

export interface Type_17_Idx8 {
  __kind: 'Idx8'
}

export interface Type_17_Idx9 {
  __kind: 'Idx9'
}

export interface Type_17_Idx10 {
  __kind: 'Idx10'
}

export interface Type_17_Idx11 {
  __kind: 'Idx11'
}

export interface Type_17_Idx12 {
  __kind: 'Idx12'
}

export interface Type_17_Idx13 {
  __kind: 'Idx13'
}

export interface Type_17_Idx14 {
  __kind: 'Idx14'
}

export interface Type_17_Idx15 {
  __kind: 'Idx15'
}

export interface Type_17_Idx16 {
  __kind: 'Idx16'
}

export interface Type_17_Idx17 {
  __kind: 'Idx17'
}

export interface Type_17_Idx18 {
  __kind: 'Idx18'
}

export interface Type_17_Idx19 {
  __kind: 'Idx19'
}

export interface Type_17_Idx20 {
  __kind: 'Idx20'
}

export interface Type_17_Idx21 {
  __kind: 'Idx21'
}

export interface Type_17_Idx22 {
  __kind: 'Idx22'
}

export interface Type_17_Idx23 {
  __kind: 'Idx23'
}

export interface Type_17_Idx24 {
  __kind: 'Idx24'
}

export interface Type_17_Idx25 {
  __kind: 'Idx25'
}

export interface Type_17_Idx26 {
  __kind: 'Idx26'
}

export interface Type_17_Idx27 {
  __kind: 'Idx27'
}

export interface Type_17_Idx28 {
  __kind: 'Idx28'
}

export interface Type_17_Idx29 {
  __kind: 'Idx29'
}

export interface Type_17_Idx30 {
  __kind: 'Idx30'
}

export interface Type_17_Idx31 {
  __kind: 'Idx31'
}

export interface Type_17_Idx32 {
  __kind: 'Idx32'
}

export interface Type_17_Idx33 {
  __kind: 'Idx33'
}

export interface Type_17_Idx34 {
  __kind: 'Idx34'
}

export interface Type_17_Idx35 {
  __kind: 'Idx35'
}

export interface Type_17_Idx36 {
  __kind: 'Idx36'
}

export interface Type_17_Idx37 {
  __kind: 'Idx37'
}

export interface Type_17_Idx38 {
  __kind: 'Idx38'
}

export interface Type_17_Idx39 {
  __kind: 'Idx39'
}

export interface Type_17_Idx40 {
  __kind: 'Idx40'
}

export interface Type_17_Idx41 {
  __kind: 'Idx41'
}

export interface Type_17_Idx42 {
  __kind: 'Idx42'
}

export interface Type_17_Idx43 {
  __kind: 'Idx43'
}

export interface Type_17_Idx44 {
  __kind: 'Idx44'
}

export interface Type_17_Idx45 {
  __kind: 'Idx45'
}

export interface Type_17_Idx46 {
  __kind: 'Idx46'
}

export interface Type_17_Idx47 {
  __kind: 'Idx47'
}

export interface Type_17_Idx48 {
  __kind: 'Idx48'
}

export interface Type_17_Idx49 {
  __kind: 'Idx49'
}

export interface Type_17_Idx50 {
  __kind: 'Idx50'
}

export interface Type_17_Idx51 {
  __kind: 'Idx51'
}

export interface Type_17_Idx52 {
  __kind: 'Idx52'
}

export interface Type_17_Idx53 {
  __kind: 'Idx53'
}

export interface Type_17_Idx54 {
  __kind: 'Idx54'
}

export interface Type_17_Idx55 {
  __kind: 'Idx55'
}

export interface Type_17_Idx56 {
  __kind: 'Idx56'
}

export interface Type_17_Idx57 {
  __kind: 'Idx57'
}

export interface Type_17_Idx58 {
  __kind: 'Idx58'
}

export interface Type_17_Idx59 {
  __kind: 'Idx59'
}

export interface Type_17_Idx60 {
  __kind: 'Idx60'
}

export interface Type_17_Idx61 {
  __kind: 'Idx61'
}

export interface Type_17_Idx62 {
  __kind: 'Idx62'
}

export interface Type_17_Idx63 {
  __kind: 'Idx63'
}

export interface Type_17_Idx64 {
  __kind: 'Idx64'
}

export interface Type_17_Idx65 {
  __kind: 'Idx65'
}

export interface Type_17_Idx66 {
  __kind: 'Idx66'
}

export interface Type_17_Idx67 {
  __kind: 'Idx67'
}

export interface Type_17_Idx68 {
  __kind: 'Idx68'
}

export interface Type_17_Idx69 {
  __kind: 'Idx69'
}

export interface Type_17_Idx70 {
  __kind: 'Idx70'
}

export interface Type_17_Idx71 {
  __kind: 'Idx71'
}

export interface Type_17_Idx72 {
  __kind: 'Idx72'
}

export interface Type_17_Idx73 {
  __kind: 'Idx73'
}

export interface Type_17_Idx74 {
  __kind: 'Idx74'
}

export interface Type_17_Idx75 {
  __kind: 'Idx75'
}

export interface Type_17_Idx76 {
  __kind: 'Idx76'
}

export interface Type_17_Idx77 {
  __kind: 'Idx77'
}

export interface Type_17_Idx78 {
  __kind: 'Idx78'
}

export interface Type_17_Idx79 {
  __kind: 'Idx79'
}

export interface Type_17_Idx80 {
  __kind: 'Idx80'
}

export interface Type_17_Idx81 {
  __kind: 'Idx81'
}

export interface Type_17_Idx82 {
  __kind: 'Idx82'
}

export interface Type_17_Idx83 {
  __kind: 'Idx83'
}

export interface Type_17_Idx84 {
  __kind: 'Idx84'
}

export interface Type_17_Idx85 {
  __kind: 'Idx85'
}

export interface Type_17_Idx86 {
  __kind: 'Idx86'
}

export interface Type_17_Idx87 {
  __kind: 'Idx87'
}

export interface Type_17_Idx88 {
  __kind: 'Idx88'
}

export interface Type_17_Idx89 {
  __kind: 'Idx89'
}

export interface Type_17_Idx90 {
  __kind: 'Idx90'
}

export interface Type_17_Idx91 {
  __kind: 'Idx91'
}

export interface Type_17_Idx92 {
  __kind: 'Idx92'
}

export interface Type_17_Idx93 {
  __kind: 'Idx93'
}

export interface Type_17_Idx94 {
  __kind: 'Idx94'
}

export interface Type_17_Idx95 {
  __kind: 'Idx95'
}

export interface Type_17_Idx96 {
  __kind: 'Idx96'
}

export interface Type_17_Idx97 {
  __kind: 'Idx97'
}

export interface Type_17_Idx98 {
  __kind: 'Idx98'
}

export interface Type_17_Idx99 {
  __kind: 'Idx99'
}

export interface Type_17_Idx100 {
  __kind: 'Idx100'
}

export interface Type_17_Idx101 {
  __kind: 'Idx101'
}

export interface Type_17_Idx102 {
  __kind: 'Idx102'
}

export interface Type_17_Idx103 {
  __kind: 'Idx103'
}

export interface Type_17_Idx104 {
  __kind: 'Idx104'
}

export interface Type_17_Idx105 {
  __kind: 'Idx105'
}

export interface Type_17_Idx106 {
  __kind: 'Idx106'
}

export interface Type_17_Idx107 {
  __kind: 'Idx107'
}

export interface Type_17_Idx108 {
  __kind: 'Idx108'
}

export interface Type_17_Idx109 {
  __kind: 'Idx109'
}

export interface Type_17_Idx110 {
  __kind: 'Idx110'
}

export interface Type_17_Idx111 {
  __kind: 'Idx111'
}

export interface Type_17_Idx112 {
  __kind: 'Idx112'
}

export interface Type_17_Idx113 {
  __kind: 'Idx113'
}

export interface Type_17_Idx114 {
  __kind: 'Idx114'
}

export interface Type_17_Idx115 {
  __kind: 'Idx115'
}

export interface Type_17_Idx116 {
  __kind: 'Idx116'
}

export interface Type_17_Idx117 {
  __kind: 'Idx117'
}

export interface Type_17_Idx118 {
  __kind: 'Idx118'
}

export interface Type_17_Idx119 {
  __kind: 'Idx119'
}

export interface Type_17_Idx120 {
  __kind: 'Idx120'
}

export interface Type_17_Idx121 {
  __kind: 'Idx121'
}

export interface Type_17_Idx122 {
  __kind: 'Idx122'
}

export interface Type_17_Idx123 {
  __kind: 'Idx123'
}

export interface Type_17_Idx124 {
  __kind: 'Idx124'
}

export interface Type_17_Idx125 {
  __kind: 'Idx125'
}

export interface Type_17_Idx126 {
  __kind: 'Idx126'
}

export interface Type_17_Idx127 {
  __kind: 'Idx127'
}

export interface Type_17_Idx128 {
  __kind: 'Idx128'
}

export interface Type_17_Idx129 {
  __kind: 'Idx129'
}

export interface Type_17_Idx130 {
  __kind: 'Idx130'
}

export interface Type_17_Idx131 {
  __kind: 'Idx131'
}

export interface Type_17_Idx132 {
  __kind: 'Idx132'
}

export interface Type_17_Idx133 {
  __kind: 'Idx133'
}

export interface Type_17_Idx134 {
  __kind: 'Idx134'
}

export interface Type_17_Idx135 {
  __kind: 'Idx135'
}

export interface Type_17_Idx136 {
  __kind: 'Idx136'
}

export interface Type_17_Idx137 {
  __kind: 'Idx137'
}

export interface Type_17_Idx138 {
  __kind: 'Idx138'
}

export interface Type_17_Idx139 {
  __kind: 'Idx139'
}

export interface Type_17_Idx140 {
  __kind: 'Idx140'
}

export interface Type_17_Idx141 {
  __kind: 'Idx141'
}

export interface Type_17_Idx142 {
  __kind: 'Idx142'
}

export interface Type_17_Idx143 {
  __kind: 'Idx143'
}

export interface Type_17_Idx144 {
  __kind: 'Idx144'
}

export interface Type_17_Idx145 {
  __kind: 'Idx145'
}

export interface Type_17_Idx146 {
  __kind: 'Idx146'
}

export interface Type_17_Idx147 {
  __kind: 'Idx147'
}

export interface Type_17_Idx148 {
  __kind: 'Idx148'
}

export interface Type_17_Idx149 {
  __kind: 'Idx149'
}

export interface Type_17_Idx150 {
  __kind: 'Idx150'
}

export interface Type_17_Idx151 {
  __kind: 'Idx151'
}

export interface Type_17_Idx152 {
  __kind: 'Idx152'
}

export interface Type_17_Idx153 {
  __kind: 'Idx153'
}

export interface Type_17_Idx154 {
  __kind: 'Idx154'
}

export interface Type_17_Idx155 {
  __kind: 'Idx155'
}

export interface Type_17_Idx156 {
  __kind: 'Idx156'
}

export interface Type_17_Idx157 {
  __kind: 'Idx157'
}

export interface Type_17_Idx158 {
  __kind: 'Idx158'
}

export interface Type_17_Idx159 {
  __kind: 'Idx159'
}

export interface Type_17_Idx160 {
  __kind: 'Idx160'
}

export interface Type_17_Idx161 {
  __kind: 'Idx161'
}

export interface Type_17_Idx162 {
  __kind: 'Idx162'
}

export interface Type_17_Idx163 {
  __kind: 'Idx163'
}

export interface Type_17_Idx164 {
  __kind: 'Idx164'
}

export interface Type_17_Idx165 {
  __kind: 'Idx165'
}

export interface Type_17_Idx166 {
  __kind: 'Idx166'
}

export interface Type_17_Idx167 {
  __kind: 'Idx167'
}

export interface Type_17_Idx168 {
  __kind: 'Idx168'
}

export interface Type_17_Idx169 {
  __kind: 'Idx169'
}

export interface Type_17_Idx170 {
  __kind: 'Idx170'
}

export interface Type_17_Idx171 {
  __kind: 'Idx171'
}

export interface Type_17_Idx172 {
  __kind: 'Idx172'
}

export interface Type_17_Idx173 {
  __kind: 'Idx173'
}

export interface Type_17_Idx174 {
  __kind: 'Idx174'
}

export interface Type_17_Idx175 {
  __kind: 'Idx175'
}

export interface Type_17_Idx176 {
  __kind: 'Idx176'
}

export interface Type_17_Idx177 {
  __kind: 'Idx177'
}

export interface Type_17_Idx178 {
  __kind: 'Idx178'
}

export interface Type_17_Idx179 {
  __kind: 'Idx179'
}

export interface Type_17_Idx180 {
  __kind: 'Idx180'
}

export interface Type_17_Idx181 {
  __kind: 'Idx181'
}

export interface Type_17_Idx182 {
  __kind: 'Idx182'
}

export interface Type_17_Idx183 {
  __kind: 'Idx183'
}

export interface Type_17_Idx184 {
  __kind: 'Idx184'
}

export interface Type_17_Idx185 {
  __kind: 'Idx185'
}

export interface Type_17_Idx186 {
  __kind: 'Idx186'
}

export interface Type_17_Idx187 {
  __kind: 'Idx187'
}

export interface Type_17_Idx188 {
  __kind: 'Idx188'
}

export interface Type_17_Idx189 {
  __kind: 'Idx189'
}

export interface Type_17_Idx190 {
  __kind: 'Idx190'
}

export interface Type_17_Idx191 {
  __kind: 'Idx191'
}

export interface Type_17_Idx192 {
  __kind: 'Idx192'
}

export interface Type_17_Idx193 {
  __kind: 'Idx193'
}

export interface Type_17_Idx194 {
  __kind: 'Idx194'
}

export interface Type_17_Idx195 {
  __kind: 'Idx195'
}

export interface Type_17_Idx196 {
  __kind: 'Idx196'
}

export interface Type_17_Idx197 {
  __kind: 'Idx197'
}

export interface Type_17_Idx198 {
  __kind: 'Idx198'
}

export interface Type_17_Idx199 {
  __kind: 'Idx199'
}

export interface Type_17_Idx200 {
  __kind: 'Idx200'
}

export interface Type_17_Idx201 {
  __kind: 'Idx201'
}

export interface Type_17_Idx202 {
  __kind: 'Idx202'
}

export interface Type_17_Idx203 {
  __kind: 'Idx203'
}

export interface Type_17_Idx204 {
  __kind: 'Idx204'
}

export interface Type_17_Idx205 {
  __kind: 'Idx205'
}

export interface Type_17_Idx206 {
  __kind: 'Idx206'
}

export interface Type_17_Idx207 {
  __kind: 'Idx207'
}

export interface Type_17_Idx208 {
  __kind: 'Idx208'
}

export interface Type_17_Idx209 {
  __kind: 'Idx209'
}

export interface Type_17_Idx210 {
  __kind: 'Idx210'
}

export interface Type_17_Idx211 {
  __kind: 'Idx211'
}

export interface Type_17_Idx212 {
  __kind: 'Idx212'
}

export interface Type_17_Idx213 {
  __kind: 'Idx213'
}

export interface Type_17_Idx214 {
  __kind: 'Idx214'
}

export interface Type_17_Idx215 {
  __kind: 'Idx215'
}

export interface Type_17_Idx216 {
  __kind: 'Idx216'
}

export interface Type_17_Idx217 {
  __kind: 'Idx217'
}

export interface Type_17_Idx218 {
  __kind: 'Idx218'
}

export interface Type_17_Idx219 {
  __kind: 'Idx219'
}

export interface Type_17_Idx220 {
  __kind: 'Idx220'
}

export interface Type_17_Idx221 {
  __kind: 'Idx221'
}

export interface Type_17_Idx222 {
  __kind: 'Idx222'
}

export interface Type_17_Idx223 {
  __kind: 'Idx223'
}

export interface Type_17_Idx224 {
  __kind: 'Idx224'
}

export interface Type_17_Idx225 {
  __kind: 'Idx225'
}

export interface Type_17_Idx226 {
  __kind: 'Idx226'
}

export interface Type_17_Idx227 {
  __kind: 'Idx227'
}

export interface Type_17_Idx228 {
  __kind: 'Idx228'
}

export interface Type_17_Idx229 {
  __kind: 'Idx229'
}

export interface Type_17_Idx230 {
  __kind: 'Idx230'
}

export interface Type_17_Idx231 {
  __kind: 'Idx231'
}

export interface Type_17_Idx232 {
  __kind: 'Idx232'
}

export interface Type_17_Idx233 {
  __kind: 'Idx233'
}

export interface Type_17_Idx234 {
  __kind: 'Idx234'
}

export interface Type_17_Idx235 {
  __kind: 'Idx235'
}

export interface Type_17_Idx236 {
  __kind: 'Idx236'
}

export interface Type_17_Idx237 {
  __kind: 'Idx237'
}

export interface Type_17_Idx238 {
  __kind: 'Idx238'
}

export interface Type_17_IdxU16 {
  __kind: 'IdxU16'
  value: number
}

export interface Type_17_IdxU32 {
  __kind: 'IdxU32'
  value: number
}

export interface Type_17_IdxU64 {
  __kind: 'IdxU64'
  value: bigint
}

export interface Type_17_AccountId {
  __kind: 'AccountId'
  value: Uint8Array
}

export interface Header {
  parentHash: Uint8Array
  number: number
  stateRoot: Uint8Array
  extrinsicsRoot: Uint8Array
  digest: Digest
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
  __kind: 'Staked'
  value: null
}

export interface RewardDestination_Stash {
  __kind: 'Stash'
  value: null
}

export interface RewardDestination_Controller {
  __kind: 'Controller'
  value: null
}

export interface RewardDestination_Account {
  __kind: 'Account'
  value: Uint8Array
}

export interface RewardDestination_None {
  __kind: 'None'
  value: null
}

export interface ValidatorPrefsWithCommission {
  commission: number
}

export interface HeartbeatTo244 {
  blockNumber: number
  networkState: OpaqueNetworkState
  sessionIndex: number
  authorityIndex: number
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

export interface AttestedCandidate {
  candidate: AbridgedCandidateReceipt
  validityVotes: ValidityAttestation[]
  validatorIndices: Uint8Array
}

export type MoreAttestations = null

export interface ParaInfo {
  manager: Uint8Array
  deposit: bigint
  locked: boolean
}

export interface Digest {
  logs: DigestItem[]
}

export interface OpaqueNetworkState {
  peerId: Uint8Array
  externalAddresses: Uint8Array[]
}

export interface AbridgedCandidateReceipt {
  parachainIndex: number
  relayParent: Uint8Array
  headData: Uint8Array
  collator: Uint8Array
  signature: Uint8Array
  povBlockHash: Uint8Array
  commitments: CandidateCommitments
}

export type ValidityAttestation = ValidityAttestation_Never | ValidityAttestation_Implicit | ValidityAttestation_Explicit

export interface ValidityAttestation_Never {
  __kind: 'Never'
  value: null
}

export interface ValidityAttestation_Implicit {
  __kind: 'Implicit'
  value: Uint8Array
}

export interface ValidityAttestation_Explicit {
  __kind: 'Explicit'
  value: Uint8Array
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

export interface CandidateCommitments {
  upwardMessages: Uint8Array[]
  horizontalMessages: OutboundHrmpMessage[]
  newValidationCode: (Uint8Array | undefined)
  headData: Uint8Array
  processedDownwardMessages: number
  hrmpWatermark: number
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}

export interface OutboundHrmpMessage {
  recipient: number
  data: Uint8Array
}

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}
