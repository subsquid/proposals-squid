import type {Result} from './support'

export type H256 = Uint8Array

export type Call = Call_System | Call_Timestamp | Call_Scheduler | Call_Utility | Call_Multisig | Call_Proxy | Call_TransactionPause | Call_IdleScheduler | Call_Preimage | Call_Balances | Call_Currencies | Call_Vesting | Call_TransactionPayment | Call_Treasury | Call_Bounties | Call_Tips | Call_Authorship | Call_CollatorSelection | Call_Session | Call_SessionManager | Call_XcmpQueue | Call_PolkadotXcm | Call_DmpQueue | Call_XTokens | Call_OrmlXcm | Call_Authority | Call_GeneralCouncil | Call_GeneralCouncilMembership | Call_FinancialCouncil | Call_FinancialCouncilMembership | Call_HomaCouncil | Call_HomaCouncilMembership | Call_TechnicalCommittee | Call_TechnicalCommitteeMembership | Call_Democracy | Call_AcalaOracle | Call_OperatorMembershipAcala | Call_Auction | Call_Rewards | Call_Prices | Call_Dex | Call_DexOracle | Call_AggregatedDex | Call_AuctionManager | Call_Loans | Call_Honzon | Call_CdpTreasury | Call_CdpEngine | Call_EmergencyShutdown | Call_HonzonBridge | Call_Homa | Call_XcmInterface | Call_Incentives | Call_NFT | Call_AssetRegistry | Call_EVM | Call_EvmAccounts | Call_StableAsset | Call_ParachainSystem | Call_Sudo

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

export interface Call_AggregatedDex {
  __kind: 'AggregatedDex'
  value: AggregatedDexCall
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

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: Perbill
}

export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
}

export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

export type TimestampCall = TimestampCall_set

export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: number
  index: number
}

export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named'
  id: Uint8Array
}

export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after'
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch

export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Call[]
}

export interface UtilityCall_as_derivative {
  __kind: 'as_derivative'
  index: number
  call: Call
}

export interface UtilityCall_batch_all {
  __kind: 'batch_all'
  calls: Call[]
}

export interface UtilityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: OriginCaller
  call: Call
}

export interface UtilityCall_force_batch {
  __kind: 'force_batch'
  calls: Call[]
}

export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

export interface MultisigCall_as_multi_threshold_1 {
  __kind: 'as_multi_threshold_1'
  otherSignatories: AccountId32[]
  call: Call
}

export interface MultisigCall_as_multi {
  __kind: 'as_multi'
  threshold: number
  otherSignatories: AccountId32[]
  maybeTimepoint: (Timepoint | undefined)
  call: Uint8Array
  storeCall: boolean
  maxWeight: bigint
}

export interface MultisigCall_approve_as_multi {
  __kind: 'approve_as_multi'
  threshold: number
  otherSignatories: AccountId32[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
  maxWeight: bigint
}

export interface MultisigCall_cancel_as_multi {
  __kind: 'cancel_as_multi'
  threshold: number
  otherSignatories: AccountId32[]
  timepoint: Timepoint
  callHash: Uint8Array
}

export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

export interface ProxyCall_proxy {
  __kind: 'proxy'
  real: AccountId32
  forceProxyType: (ProxyType | undefined)
  call: Call
}

export interface ProxyCall_add_proxy {
  __kind: 'add_proxy'
  delegate: AccountId32
  proxyType: ProxyType
  delay: number
}

export interface ProxyCall_remove_proxy {
  __kind: 'remove_proxy'
  delegate: AccountId32
  proxyType: ProxyType
  delay: number
}

export interface ProxyCall_remove_proxies {
  __kind: 'remove_proxies'
}

export interface ProxyCall_anonymous {
  __kind: 'anonymous'
  proxyType: ProxyType
  delay: number
  index: number
}

export interface ProxyCall_kill_anonymous {
  __kind: 'kill_anonymous'
  spawner: AccountId32
  proxyType: ProxyType
  index: number
  height: number
  extIndex: number
}

export interface ProxyCall_announce {
  __kind: 'announce'
  real: AccountId32
  callHash: H256
}

export interface ProxyCall_remove_announcement {
  __kind: 'remove_announcement'
  real: AccountId32
  callHash: H256
}

export interface ProxyCall_reject_announcement {
  __kind: 'reject_announcement'
  delegate: AccountId32
  callHash: H256
}

export interface ProxyCall_proxy_announced {
  __kind: 'proxy_announced'
  delegate: AccountId32
  real: AccountId32
  forceProxyType: (ProxyType | undefined)
  call: Call
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

export type IdleSchedulerCall = IdleSchedulerCall_schedule_task

export interface IdleSchedulerCall_schedule_task {
  __kind: 'schedule_task'
  task: ScheduledTasks
}

export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

export interface PreimageCall_note_preimage {
  __kind: 'note_preimage'
  bytes: Uint8Array
}

export interface PreimageCall_unnote_preimage {
  __kind: 'unnote_preimage'
  hash: H256
}

export interface PreimageCall_request_preimage {
  __kind: 'request_preimage'
  hash: H256
}

export interface PreimageCall_unrequest_preimage {
  __kind: 'unrequest_preimage'
  hash: H256
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  value: bigint
}

export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: MultiAddress
  newFree: bigint
  newReserved: bigint
}

export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: MultiAddress
  dest: MultiAddress
  value: bigint
}

export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: MultiAddress
  value: bigint
}

export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: MultiAddress
  keepAlive: boolean
}

export interface BalancesCall_force_unreserve {
  __kind: 'force_unreserve'
  who: MultiAddress
  amount: bigint
}

export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance | CurrenciesCall_sweep_dust

export interface CurrenciesCall_transfer {
  __kind: 'transfer'
  dest: MultiAddress
  currencyId: CurrencyId
  amount: bigint
}

export interface CurrenciesCall_transfer_native_currency {
  __kind: 'transfer_native_currency'
  dest: MultiAddress
  amount: bigint
}

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

export type TransactionPaymentCall = TransactionPaymentCall_set_alternative_fee_swap_path | TransactionPaymentCall_enable_charge_fee_pool | TransactionPaymentCall_disable_charge_fee_pool | TransactionPaymentCall_with_fee_path | TransactionPaymentCall_with_fee_currency | TransactionPaymentCall_with_fee_paid_by

export interface TransactionPaymentCall_set_alternative_fee_swap_path {
  __kind: 'set_alternative_fee_swap_path'
  feeSwapPath: (CurrencyId[] | undefined)
}

export interface TransactionPaymentCall_enable_charge_fee_pool {
  __kind: 'enable_charge_fee_pool'
  currencyId: CurrencyId
  swapPath: CurrencyId[]
  poolSize: bigint
  swapThreshold: bigint
}

export interface TransactionPaymentCall_disable_charge_fee_pool {
  __kind: 'disable_charge_fee_pool'
  currencyId: CurrencyId
}

export interface TransactionPaymentCall_with_fee_path {
  __kind: 'with_fee_path'
  feeSwapPath: CurrencyId[]
  call: Call
}

export interface TransactionPaymentCall_with_fee_currency {
  __kind: 'with_fee_currency'
  currencyId: CurrencyId
  call: Call
}

export interface TransactionPaymentCall_with_fee_paid_by {
  __kind: 'with_fee_paid_by'
  call: Call
  payerAddr: AccountId32
  payerSig: MultiSignature
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_remove_approval

export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: MultiAddress
}

export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

export interface TreasuryCall_remove_approval {
  __kind: 'remove_approval'
  proposalId: number
}

export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

export interface BountiesCall_propose_bounty {
  __kind: 'propose_bounty'
  value: bigint
  description: Uint8Array
}

export interface BountiesCall_approve_bounty {
  __kind: 'approve_bounty'
  bountyId: number
}

export interface BountiesCall_propose_curator {
  __kind: 'propose_curator'
  bountyId: number
  curator: MultiAddress
  fee: bigint
}

export interface BountiesCall_unassign_curator {
  __kind: 'unassign_curator'
  bountyId: number
}

export interface BountiesCall_accept_curator {
  __kind: 'accept_curator'
  bountyId: number
}

export interface BountiesCall_award_bounty {
  __kind: 'award_bounty'
  bountyId: number
  beneficiary: MultiAddress
}

export interface BountiesCall_claim_bounty {
  __kind: 'claim_bounty'
  bountyId: number
}

export interface BountiesCall_close_bounty {
  __kind: 'close_bounty'
  bountyId: number
}

export interface BountiesCall_extend_bounty_expiry {
  __kind: 'extend_bounty_expiry'
  bountyId: number
  remark: Uint8Array
}

export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

export interface TipsCall_report_awesome {
  __kind: 'report_awesome'
  reason: Uint8Array
  who: AccountId32
}

export interface TipsCall_retract_tip {
  __kind: 'retract_tip'
  hash: H256
}

export interface TipsCall_tip_new {
  __kind: 'tip_new'
  reason: Uint8Array
  who: AccountId32
  tipValue: bigint
}

export interface TipsCall_tip {
  __kind: 'tip'
  hash: H256
  tipValue: bigint
}

export interface TipsCall_close_tip {
  __kind: 'close_tip'
  hash: H256
}

export interface TipsCall_slash_tip {
  __kind: 'slash_tip'
  hash: H256
}

export type AuthorshipCall = AuthorshipCall_set_uncles

export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

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

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: SessionKeys
  proof: Uint8Array
}

export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

export type SessionManagerCall = SessionManagerCall_schedule_session_duration

export interface SessionManagerCall_schedule_session_duration {
  __kind: 'schedule_session_duration'
  startSession: number
  duration: number
}

export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

export interface XcmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

export interface XcmpQueueCall_suspend_xcm_execution {
  __kind: 'suspend_xcm_execution'
}

export interface XcmpQueueCall_resume_xcm_execution {
  __kind: 'resume_xcm_execution'
}

export interface XcmpQueueCall_update_suspend_threshold {
  __kind: 'update_suspend_threshold'
  new: number
}

export interface XcmpQueueCall_update_drop_threshold {
  __kind: 'update_drop_threshold'
  new: number
}

export interface XcmpQueueCall_update_resume_threshold {
  __kind: 'update_resume_threshold'
  new: number
}

export interface XcmpQueueCall_update_threshold_weight {
  __kind: 'update_threshold_weight'
  new: bigint
}

export interface XcmpQueueCall_update_weight_restrict_decay {
  __kind: 'update_weight_restrict_decay'
  new: bigint
}

export interface XcmpQueueCall_update_xcmp_max_individual_weight {
  __kind: 'update_xcmp_max_individual_weight'
  new: bigint
}

export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: VersionedMultiLocation
  message: VersionedXcm_251
}

export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

export interface PolkadotXcmCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

export interface PolkadotXcmCall_execute {
  __kind: 'execute'
  message: VersionedXcm_262
  maxWeight: bigint
}

export interface PolkadotXcmCall_force_xcm_version {
  __kind: 'force_xcm_version'
  location: V1MultiLocation
  xcmVersion: number
}

export interface PolkadotXcmCall_force_default_xcm_version {
  __kind: 'force_default_xcm_version'
  maybeXcmVersion: (number | undefined)
}

export interface PolkadotXcmCall_force_subscribe_version_notify {
  __kind: 'force_subscribe_version_notify'
  location: VersionedMultiLocation
}

export interface PolkadotXcmCall_force_unsubscribe_version_notify {
  __kind: 'force_unsubscribe_version_notify'
  location: VersionedMultiLocation
}

export interface PolkadotXcmCall_limited_reserve_transfer_assets {
  __kind: 'limited_reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

export interface PolkadotXcmCall_limited_teleport_assets {
  __kind: 'limited_teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

export type DmpQueueCall = DmpQueueCall_service_overweight

export interface DmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

export interface XTokensCall_transfer {
  __kind: 'transfer'
  currencyId: CurrencyId
  amount: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

export interface XTokensCall_transfer_multiasset {
  __kind: 'transfer_multiasset'
  asset: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

export interface XTokensCall_transfer_with_fee {
  __kind: 'transfer_with_fee'
  currencyId: CurrencyId
  amount: bigint
  fee: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

export interface XTokensCall_transfer_multiasset_with_fee {
  __kind: 'transfer_multiasset_with_fee'
  asset: VersionedMultiAsset
  fee: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

export interface XTokensCall_transfer_multicurrencies {
  __kind: 'transfer_multicurrencies'
  currencies: [CurrencyId, bigint][]
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

export interface XTokensCall_transfer_multiassets {
  __kind: 'transfer_multiassets'
  assets: VersionedMultiAssets
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

export interface OrmlXcmCall_send_as_sovereign {
  __kind: 'send_as_sovereign'
  dest: VersionedMultiLocation
  message: VersionedXcm_251
}

export type AuthorityCall = AuthorityCall_dispatch_as | AuthorityCall_schedule_dispatch | AuthorityCall_fast_track_scheduled_dispatch | AuthorityCall_delay_scheduled_dispatch | AuthorityCall_cancel_scheduled_dispatch | AuthorityCall_authorize_call | AuthorityCall_remove_authorized_call | AuthorityCall_trigger_call

export interface AuthorityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: AuthoritysOriginId
  call: Call
}

export interface AuthorityCall_schedule_dispatch {
  __kind: 'schedule_dispatch'
  when: DispatchTime
  priority: number
  withDelayedOrigin: boolean
  call: Call
}

export interface AuthorityCall_fast_track_scheduled_dispatch {
  __kind: 'fast_track_scheduled_dispatch'
  initialOrigin: OriginCaller
  taskId: number
  when: DispatchTime
}

export interface AuthorityCall_delay_scheduled_dispatch {
  __kind: 'delay_scheduled_dispatch'
  initialOrigin: OriginCaller
  taskId: number
  additionalDelay: number
}

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

export type GeneralCouncilCall = GeneralCouncilCall_set_members | GeneralCouncilCall_execute | GeneralCouncilCall_propose | GeneralCouncilCall_vote | GeneralCouncilCall_close | GeneralCouncilCall_disapprove_proposal

export interface GeneralCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

export interface GeneralCouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

export interface GeneralCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

export interface GeneralCouncilCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

export interface GeneralCouncilCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

export interface GeneralCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

export type GeneralCouncilMembershipCall = GeneralCouncilMembershipCall_add_member | GeneralCouncilMembershipCall_remove_member | GeneralCouncilMembershipCall_swap_member | GeneralCouncilMembershipCall_reset_members | GeneralCouncilMembershipCall_change_key | GeneralCouncilMembershipCall_set_prime | GeneralCouncilMembershipCall_clear_prime

export interface GeneralCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

export interface GeneralCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

export interface GeneralCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

export interface GeneralCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

export interface GeneralCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

export interface GeneralCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

export interface GeneralCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type FinancialCouncilCall = FinancialCouncilCall_set_members | FinancialCouncilCall_execute | FinancialCouncilCall_propose | FinancialCouncilCall_vote | FinancialCouncilCall_close | FinancialCouncilCall_disapprove_proposal

export interface FinancialCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

export interface FinancialCouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

export interface FinancialCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

export interface FinancialCouncilCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

export interface FinancialCouncilCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

export interface FinancialCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

export type FinancialCouncilMembershipCall = FinancialCouncilMembershipCall_add_member | FinancialCouncilMembershipCall_remove_member | FinancialCouncilMembershipCall_swap_member | FinancialCouncilMembershipCall_reset_members | FinancialCouncilMembershipCall_change_key | FinancialCouncilMembershipCall_set_prime | FinancialCouncilMembershipCall_clear_prime

export interface FinancialCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

export interface FinancialCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

export interface FinancialCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

export interface FinancialCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

export interface FinancialCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

export interface FinancialCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

export interface FinancialCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type HomaCouncilCall = HomaCouncilCall_set_members | HomaCouncilCall_execute | HomaCouncilCall_propose | HomaCouncilCall_vote | HomaCouncilCall_close | HomaCouncilCall_disapprove_proposal

export interface HomaCouncilCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

export interface HomaCouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

export interface HomaCouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

export interface HomaCouncilCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

export interface HomaCouncilCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

export interface HomaCouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

export type HomaCouncilMembershipCall = HomaCouncilMembershipCall_add_member | HomaCouncilMembershipCall_remove_member | HomaCouncilMembershipCall_swap_member | HomaCouncilMembershipCall_reset_members | HomaCouncilMembershipCall_change_key | HomaCouncilMembershipCall_set_prime | HomaCouncilMembershipCall_clear_prime

export interface HomaCouncilMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

export interface HomaCouncilMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

export interface HomaCouncilMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

export interface HomaCouncilMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

export interface HomaCouncilMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

export interface HomaCouncilMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

export interface HomaCouncilMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: AccountId32[]
  prime: (AccountId32 | undefined)
  oldCount: number
}

export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: H256
  index: number
  approve: boolean
}

export interface TechnicalCommitteeCall_close {
  __kind: 'close'
  proposalHash: H256
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: H256
}

export type TechnicalCommitteeMembershipCall = TechnicalCommitteeMembershipCall_add_member | TechnicalCommitteeMembershipCall_remove_member | TechnicalCommitteeMembershipCall_swap_member | TechnicalCommitteeMembershipCall_reset_members | TechnicalCommitteeMembershipCall_change_key | TechnicalCommitteeMembershipCall_set_prime | TechnicalCommitteeMembershipCall_clear_prime

export interface TechnicalCommitteeMembershipCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

export interface TechnicalCommitteeMembershipCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

export interface TechnicalCommitteeMembershipCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

export interface TechnicalCommitteeMembershipCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

export interface TechnicalCommitteeMembershipCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

export interface TechnicalCommitteeMembershipCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

export interface TechnicalCommitteeMembershipCall_clear_prime {
  __kind: 'clear_prime'
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: H256
  value: bigint
}

export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
  secondsUpperBound: number
}

export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: AccountVote
}

export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: H256
}

export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: H256
}

export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: H256
}

export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: H256
  votingPeriod: number
  delay: number
}

export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: H256
}

export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: number
}

export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: AccountId32
  conviction: Conviction
  balance: bigint
}

export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

export interface DemocracyCall_note_preimage_operational {
  __kind: 'note_preimage_operational'
  encodedProposal: Uint8Array
}

export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

export interface DemocracyCall_note_imminent_preimage_operational {
  __kind: 'note_imminent_preimage_operational'
  encodedProposal: Uint8Array
}

export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: H256
  proposalLenUpperBound: number
}

export interface DemocracyCall_unlock {
  __kind: 'unlock'
  target: AccountId32
}

export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote'
  index: number
}

export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote'
  target: AccountId32
  index: number
}

export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: H256
  index: number
}

export interface DemocracyCall_blacklist {
  __kind: 'blacklist'
  proposalHash: H256
  maybeRefIndex: (number | undefined)
}

export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal'
  propIndex: number
}

export type AcalaOracleCall = AcalaOracleCall_feed_values

export interface AcalaOracleCall_feed_values {
  __kind: 'feed_values'
  values: [CurrencyId, FixedU128][]
}

export type OperatorMembershipAcalaCall = OperatorMembershipAcalaCall_add_member | OperatorMembershipAcalaCall_remove_member | OperatorMembershipAcalaCall_swap_member | OperatorMembershipAcalaCall_reset_members | OperatorMembershipAcalaCall_change_key | OperatorMembershipAcalaCall_set_prime | OperatorMembershipAcalaCall_clear_prime

export interface OperatorMembershipAcalaCall_add_member {
  __kind: 'add_member'
  who: AccountId32
}

export interface OperatorMembershipAcalaCall_remove_member {
  __kind: 'remove_member'
  who: AccountId32
}

export interface OperatorMembershipAcalaCall_swap_member {
  __kind: 'swap_member'
  remove: AccountId32
  add: AccountId32
}

export interface OperatorMembershipAcalaCall_reset_members {
  __kind: 'reset_members'
  members: AccountId32[]
}

export interface OperatorMembershipAcalaCall_change_key {
  __kind: 'change_key'
  new: AccountId32
}

export interface OperatorMembershipAcalaCall_set_prime {
  __kind: 'set_prime'
  who: AccountId32
}

export interface OperatorMembershipAcalaCall_clear_prime {
  __kind: 'clear_prime'
}

export type AuctionCall = AuctionCall_bid

export interface AuctionCall_bid {
  __kind: 'bid'
  id: number
  value: bigint
}

export type RewardsCall = never

export type PricesCall = PricesCall_lock_price | PricesCall_unlock_price

export interface PricesCall_lock_price {
  __kind: 'lock_price'
  currencyId: CurrencyId
}

export interface PricesCall_unlock_price {
  __kind: 'unlock_price'
  currencyId: CurrencyId
}

export type DexCall = DexCall_swap_with_exact_supply | DexCall_swap_with_exact_target | DexCall_add_liquidity | DexCall_add_provision | DexCall_claim_dex_share | DexCall_remove_liquidity | DexCall_list_provisioning | DexCall_update_provisioning_parameters | DexCall_end_provisioning | DexCall_enable_trading_pair | DexCall_disable_trading_pair | DexCall_refund_provision | DexCall_abort_provisioning

export interface DexCall_swap_with_exact_supply {
  __kind: 'swap_with_exact_supply'
  path: CurrencyId[]
  supplyAmount: bigint
  minTargetAmount: bigint
}

export interface DexCall_swap_with_exact_target {
  __kind: 'swap_with_exact_target'
  path: CurrencyId[]
  targetAmount: bigint
  maxSupplyAmount: bigint
}

export interface DexCall_add_liquidity {
  __kind: 'add_liquidity'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  maxAmountA: bigint
  maxAmountB: bigint
  minShareIncrement: bigint
  stakeIncrementShare: boolean
}

export interface DexCall_add_provision {
  __kind: 'add_provision'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  amountA: bigint
  amountB: bigint
}

export interface DexCall_claim_dex_share {
  __kind: 'claim_dex_share'
  owner: AccountId32
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export interface DexCall_remove_liquidity {
  __kind: 'remove_liquidity'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  removeShare: bigint
  minWithdrawnA: bigint
  minWithdrawnB: bigint
  byUnstake: boolean
}

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

export interface DexCall_end_provisioning {
  __kind: 'end_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export interface DexCall_enable_trading_pair {
  __kind: 'enable_trading_pair'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export interface DexCall_disable_trading_pair {
  __kind: 'disable_trading_pair'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export interface DexCall_refund_provision {
  __kind: 'refund_provision'
  owner: AccountId32
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export interface DexCall_abort_provisioning {
  __kind: 'abort_provisioning'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export type DexOracleCall = DexOracleCall_enable_average_price | DexOracleCall_disable_average_price | DexOracleCall_update_average_price_interval

export interface DexOracleCall_enable_average_price {
  __kind: 'enable_average_price'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  interval: bigint
}

export interface DexOracleCall_disable_average_price {
  __kind: 'disable_average_price'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
}

export interface DexOracleCall_update_average_price_interval {
  __kind: 'update_average_price_interval'
  currencyIdA: CurrencyId
  currencyIdB: CurrencyId
  newInterval: bigint
}

export type AggregatedDexCall = AggregatedDexCall_swap_with_exact_supply | AggregatedDexCall_swap_with_exact_target | AggregatedDexCall_update_aggregated_swap_paths

export interface AggregatedDexCall_swap_with_exact_supply {
  __kind: 'swap_with_exact_supply'
  paths: SwapPath[]
  supplyAmount: bigint
  minTargetAmount: bigint
}

export interface AggregatedDexCall_swap_with_exact_target {
  __kind: 'swap_with_exact_target'
  paths: SwapPath[]
  targetAmount: bigint
  maxSupplyAmount: bigint
}

export interface AggregatedDexCall_update_aggregated_swap_paths {
  __kind: 'update_aggregated_swap_paths'
  updates: [[CurrencyId, CurrencyId], (SwapPath[] | undefined)][]
}

export type AuctionManagerCall = AuctionManagerCall_cancel

export interface AuctionManagerCall_cancel {
  __kind: 'cancel'
  id: number
}

export type LoansCall = never

export type HonzonCall = HonzonCall_adjust_loan | HonzonCall_close_loan_has_debit_by_dex | HonzonCall_transfer_loan_from | HonzonCall_authorize | HonzonCall_unauthorize | HonzonCall_unauthorize_all | HonzonCall_expand_position_collateral | HonzonCall_shrink_position_debit | HonzonCall_adjust_loan_by_debit_value | HonzonCall_transfer_debit

export interface HonzonCall_adjust_loan {
  __kind: 'adjust_loan'
  currencyId: CurrencyId
  collateralAdjustment: bigint
  debitAdjustment: bigint
}

export interface HonzonCall_close_loan_has_debit_by_dex {
  __kind: 'close_loan_has_debit_by_dex'
  currencyId: CurrencyId
  maxCollateralAmount: bigint
}

export interface HonzonCall_transfer_loan_from {
  __kind: 'transfer_loan_from'
  currencyId: CurrencyId
  from: MultiAddress
}

export interface HonzonCall_authorize {
  __kind: 'authorize'
  currencyId: CurrencyId
  to: MultiAddress
}

export interface HonzonCall_unauthorize {
  __kind: 'unauthorize'
  currencyId: CurrencyId
  to: MultiAddress
}

export interface HonzonCall_unauthorize_all {
  __kind: 'unauthorize_all'
}

export interface HonzonCall_expand_position_collateral {
  __kind: 'expand_position_collateral'
  currencyId: CurrencyId
  increaseDebitValue: bigint
  minIncreaseCollateral: bigint
}

export interface HonzonCall_shrink_position_debit {
  __kind: 'shrink_position_debit'
  currencyId: CurrencyId
  decreaseCollateral: bigint
  minDecreaseDebitValue: bigint
}

export interface HonzonCall_adjust_loan_by_debit_value {
  __kind: 'adjust_loan_by_debit_value'
  currencyId: CurrencyId
  collateralAdjustment: bigint
  debitValueAdjustment: bigint
}

export interface HonzonCall_transfer_debit {
  __kind: 'transfer_debit'
  fromCurrency: CurrencyId
  toCurrency: CurrencyId
  debitTransfer: bigint
}

export type CdpTreasuryCall = CdpTreasuryCall_extract_surplus_to_treasury | CdpTreasuryCall_auction_collateral | CdpTreasuryCall_exchange_collateral_to_stable | CdpTreasuryCall_set_expected_collateral_auction_size

export interface CdpTreasuryCall_extract_surplus_to_treasury {
  __kind: 'extract_surplus_to_treasury'
  amount: bigint
}

export interface CdpTreasuryCall_auction_collateral {
  __kind: 'auction_collateral'
  currencyId: CurrencyId
  amount: bigint
  target: bigint
  splited: boolean
}

export interface CdpTreasuryCall_exchange_collateral_to_stable {
  __kind: 'exchange_collateral_to_stable'
  currencyId: CurrencyId
  swapLimit: SwapLimit
}

export interface CdpTreasuryCall_set_expected_collateral_auction_size {
  __kind: 'set_expected_collateral_auction_size'
  currencyId: CurrencyId
  size: bigint
}

export type CdpEngineCall = CdpEngineCall_liquidate | CdpEngineCall_settle | CdpEngineCall_set_collateral_params

export interface CdpEngineCall_liquidate {
  __kind: 'liquidate'
  currencyId: CurrencyId
  who: MultiAddress
}

export interface CdpEngineCall_settle {
  __kind: 'settle'
  currencyId: CurrencyId
  who: MultiAddress
}

export interface CdpEngineCall_set_collateral_params {
  __kind: 'set_collateral_params'
  currencyId: CurrencyId
  interestRatePerSec: Change_313
  liquidationRatio: Change_313
  liquidationPenalty: Change_313
  requiredCollateralRatio: Change_313
  maximumTotalDebitValue: Change_314
}

export type EmergencyShutdownCall = EmergencyShutdownCall_emergency_shutdown | EmergencyShutdownCall_open_collateral_refund | EmergencyShutdownCall_refund_collaterals

export interface EmergencyShutdownCall_emergency_shutdown {
  __kind: 'emergency_shutdown'
}

export interface EmergencyShutdownCall_open_collateral_refund {
  __kind: 'open_collateral_refund'
}

export interface EmergencyShutdownCall_refund_collaterals {
  __kind: 'refund_collaterals'
  amount: bigint
}

export type HonzonBridgeCall = HonzonBridgeCall_to_bridged | HonzonBridgeCall_from_bridged

export interface HonzonBridgeCall_to_bridged {
  __kind: 'to_bridged'
  amount: bigint
}

export interface HonzonBridgeCall_from_bridged {
  __kind: 'from_bridged'
  amount: bigint
}

export type HomaCall = HomaCall_mint | HomaCall_request_redeem | HomaCall_fast_match_redeems | HomaCall_claim_redemption | HomaCall_update_homa_params | HomaCall_update_bump_era_params | HomaCall_reset_ledgers | HomaCall_reset_current_era | HomaCall_force_bump_current_era | HomaCall_fast_match_redeems_completely

export interface HomaCall_mint {
  __kind: 'mint'
  amount: bigint
}

export interface HomaCall_request_redeem {
  __kind: 'request_redeem'
  amount: bigint
  allowFastMatch: boolean
}

export interface HomaCall_fast_match_redeems {
  __kind: 'fast_match_redeems'
  redeemerList: AccountId32[]
}

export interface HomaCall_claim_redemption {
  __kind: 'claim_redemption'
  redeemer: AccountId32
}

export interface HomaCall_update_homa_params {
  __kind: 'update_homa_params'
  softBondedCapPerSubAccount: (bigint | undefined)
  estimatedRewardRatePerEra: (FixedU128 | undefined)
  commissionRate: (FixedU128 | undefined)
  fastMatchFeeRate: (FixedU128 | undefined)
}

export interface HomaCall_update_bump_era_params {
  __kind: 'update_bump_era_params'
  lastEraBumpedBlock: (number | undefined)
  frequency: (number | undefined)
}

export interface HomaCall_reset_ledgers {
  __kind: 'reset_ledgers'
  updates: [number, (bigint | undefined), (UnlockChunk[] | undefined)][]
}

export interface HomaCall_reset_current_era {
  __kind: 'reset_current_era'
  eraIndex: number
}

export interface HomaCall_force_bump_current_era {
  __kind: 'force_bump_current_era'
  bumpAmount: number
}

export interface HomaCall_fast_match_redeems_completely {
  __kind: 'fast_match_redeems_completely'
  redeemerList: AccountId32[]
}

export type XcmInterfaceCall = XcmInterfaceCall_update_xcm_dest_weight_and_fee

export interface XcmInterfaceCall_update_xcm_dest_weight_and_fee {
  __kind: 'update_xcm_dest_weight_and_fee'
  updates: [XcmInterfaceOperation, (bigint | undefined), (bigint | undefined)][]
}

export type IncentivesCall = IncentivesCall_deposit_dex_share | IncentivesCall_withdraw_dex_share | IncentivesCall_claim_rewards | IncentivesCall_update_incentive_rewards | IncentivesCall_update_dex_saving_rewards | IncentivesCall_update_claim_reward_deduction_rates

export interface IncentivesCall_deposit_dex_share {
  __kind: 'deposit_dex_share'
  lpCurrencyId: CurrencyId
  amount: bigint
}

export interface IncentivesCall_withdraw_dex_share {
  __kind: 'withdraw_dex_share'
  lpCurrencyId: CurrencyId
  amount: bigint
}

export interface IncentivesCall_claim_rewards {
  __kind: 'claim_rewards'
  poolId: PoolId
}

export interface IncentivesCall_update_incentive_rewards {
  __kind: 'update_incentive_rewards'
  updates: [PoolId, [CurrencyId, bigint][]][]
}

export interface IncentivesCall_update_dex_saving_rewards {
  __kind: 'update_dex_saving_rewards'
  updates: [PoolId, FixedU128][]
}

export interface IncentivesCall_update_claim_reward_deduction_rates {
  __kind: 'update_claim_reward_deduction_rates'
  updates: [PoolId, FixedU128][]
}

export type NFTCall = NFTCall_create_class | NFTCall_mint | NFTCall_transfer | NFTCall_burn | NFTCall_burn_with_remark | NFTCall_destroy_class | NFTCall_update_class_properties

export interface NFTCall_create_class {
  __kind: 'create_class'
  metadata: Uint8Array
  properties: BitFlags
  attributes: [Uint8Array, Uint8Array][]
}

export interface NFTCall_mint {
  __kind: 'mint'
  to: MultiAddress
  classId: number
  metadata: Uint8Array
  attributes: [Uint8Array, Uint8Array][]
  quantity: number
}

export interface NFTCall_transfer {
  __kind: 'transfer'
  to: MultiAddress
  token: [number, bigint]
}

export interface NFTCall_burn {
  __kind: 'burn'
  token: [number, bigint]
}

export interface NFTCall_burn_with_remark {
  __kind: 'burn_with_remark'
  token: [number, bigint]
  remark: Uint8Array
}

export interface NFTCall_destroy_class {
  __kind: 'destroy_class'
  classId: number
  dest: MultiAddress
}

export interface NFTCall_update_class_properties {
  __kind: 'update_class_properties'
  classId: number
  properties: BitFlags
}

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

export interface EVMCall_call {
  __kind: 'call'
  target: H160
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

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

export interface EVMCall_create {
  __kind: 'create'
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

export interface EVMCall_create2 {
  __kind: 'create2'
  input: Uint8Array
  salt: H256
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

export interface EVMCall_create_nft_contract {
  __kind: 'create_nft_contract'
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

export interface EVMCall_create_predeploy_contract {
  __kind: 'create_predeploy_contract'
  target: H160
  input: Uint8Array
  value: bigint
  gasLimit: bigint
  storageLimit: number
  accessList: AccessListItem[]
}

export interface EVMCall_transfer_maintainer {
  __kind: 'transfer_maintainer'
  contract: H160
  newMaintainer: H160
}

export interface EVMCall_publish_contract {
  __kind: 'publish_contract'
  contract: H160
}

export interface EVMCall_publish_free {
  __kind: 'publish_free'
  contract: H160
}

export interface EVMCall_enable_contract_development {
  __kind: 'enable_contract_development'
}

export interface EVMCall_disable_contract_development {
  __kind: 'disable_contract_development'
}

export interface EVMCall_set_code {
  __kind: 'set_code'
  contract: H160
  code: Uint8Array
}

export interface EVMCall_selfdestruct {
  __kind: 'selfdestruct'
  contract: H160
}

export type EvmAccountsCall = EvmAccountsCall_claim_account | EvmAccountsCall_claim_default_account

export interface EvmAccountsCall_claim_account {
  __kind: 'claim_account'
  ethAddress: H160
  ethSignature: Uint8Array
}

export interface EvmAccountsCall_claim_default_account {
  __kind: 'claim_default_account'
}

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

export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

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

export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

export interface SudoCall_sudo {
  __kind: 'sudo'
  call: Call
}

export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight'
  call: Call
  weight: bigint
}

export interface SudoCall_set_key {
  __kind: 'set_key'
  new: MultiAddress
}

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

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_Auction | ProxyType_Swap | ProxyType_Loan | ProxyType_DexLiquidity | ProxyType_StableAssetSwap | ProxyType_StableAssetLiquidity | ProxyType_Homa

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

export interface ProxyType_Homa {
  __kind: 'Homa'
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

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
  __kind: 'Ed25519'
  value: Uint8Array
}

export interface MultiSignature_Sr25519 {
  __kind: 'Sr25519'
  value: Uint8Array
}

export interface MultiSignature_Ecdsa {
  __kind: 'Ecdsa'
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

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: V1MultiLocation
}

export type VersionedXcm_251 = VersionedXcm_251_V0 | VersionedXcm_251_V1 | VersionedXcm_251_V2

export interface VersionedXcm_251_V0 {
  __kind: 'V0'
  value: V0Xcm_252
}

export interface VersionedXcm_251_V1 {
  __kind: 'V1'
  value: V1Xcm_257
}

export interface VersionedXcm_251_V2 {
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

export type VersionedXcm_262 = VersionedXcm_262_V0 | VersionedXcm_262_V1 | VersionedXcm_262_V2

export interface VersionedXcm_262_V0 {
  __kind: 'V0'
  value: V0Xcm_263
}

export interface VersionedXcm_262_V1 {
  __kind: 'V1'
  value: V1Xcm_268
}

export interface VersionedXcm_262_V2 {
  __kind: 'V2'
  value: V2Instruction_274[]
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

export type SwapPath = SwapPath_Dex | SwapPath_Taiga

export interface SwapPath_Dex {
  __kind: 'Dex'
  value: CurrencyId[]
}

export interface SwapPath_Taiga {
  __kind: 'Taiga'
  value: [number, number, number]
}

export type SwapLimit = SwapLimit_ExactSupply | SwapLimit_ExactTarget

export interface SwapLimit_ExactSupply {
  __kind: 'ExactSupply'
  value: [bigint, bigint]
}

export interface SwapLimit_ExactTarget {
  __kind: 'ExactTarget'
  value: [bigint, bigint]
}

export type Change_313 = Change_313_NoChange | Change_313_NewValue

export interface Change_313_NoChange {
  __kind: 'NoChange'
}

export interface Change_313_NewValue {
  __kind: 'NewValue'
  value: (FixedU128 | undefined)
}

export type Change_314 = Change_314_NoChange | Change_314_NewValue

export interface Change_314_NoChange {
  __kind: 'NoChange'
}

export interface Change_314_NewValue {
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

export type TokenSymbol = TokenSymbol_ACA | TokenSymbol_AUSD | TokenSymbol_DOT | TokenSymbol_LDOT | TokenSymbol_TAP | TokenSymbol_RENBTC | TokenSymbol_CASH | TokenSymbol_KAR | TokenSymbol_KUSD | TokenSymbol_KSM | TokenSymbol_LKSM | TokenSymbol_TAI | TokenSymbol_BNC | TokenSymbol_VSKSM | TokenSymbol_PHA | TokenSymbol_KINT | TokenSymbol_KBTC

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

export interface TokenSymbol_TAP {
  __kind: 'TAP'
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

export type V0Xcm_252 = V0Xcm_252_WithdrawAsset | V0Xcm_252_ReserveAssetDeposit | V0Xcm_252_TeleportAsset | V0Xcm_252_QueryResponse | V0Xcm_252_TransferAsset | V0Xcm_252_TransferReserveAsset | V0Xcm_252_Transact | V0Xcm_252_HrmpNewChannelOpenRequest | V0Xcm_252_HrmpChannelAccepted | V0Xcm_252_HrmpChannelClosing | V0Xcm_252_RelayedFrom

export interface V0Xcm_252_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_254[]
}

export interface V0Xcm_252_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_254[]
}

export interface V0Xcm_252_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_254[]
}

export interface V0Xcm_252_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_252_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_252_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Xcm_252_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_252_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_252_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_252_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_252_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_252
}

export type V1Xcm_257 = V1Xcm_257_WithdrawAsset | V1Xcm_257_ReserveAssetDeposited | V1Xcm_257_ReceiveTeleportedAsset | V1Xcm_257_QueryResponse | V1Xcm_257_TransferAsset | V1Xcm_257_TransferReserveAsset | V1Xcm_257_Transact | V1Xcm_257_HrmpNewChannelOpenRequest | V1Xcm_257_HrmpChannelAccepted | V1Xcm_257_HrmpChannelClosing | V1Xcm_257_RelayedFrom | V1Xcm_257_SubscribeVersion | V1Xcm_257_UnsubscribeVersion

export interface V1Xcm_257_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_259[]
}

export interface V1Xcm_257_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_259[]
}

export interface V1Xcm_257_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_259[]
}

export interface V1Xcm_257_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_257_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_257_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Xcm_257_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_257_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_257_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_257_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_257_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_257
}

export interface V1Xcm_257_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_257_UnsubscribeVersion {
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

export type V0Xcm_263 = V0Xcm_263_WithdrawAsset | V0Xcm_263_ReserveAssetDeposit | V0Xcm_263_TeleportAsset | V0Xcm_263_QueryResponse | V0Xcm_263_TransferAsset | V0Xcm_263_TransferReserveAsset | V0Xcm_263_Transact | V0Xcm_263_HrmpNewChannelOpenRequest | V0Xcm_263_HrmpChannelAccepted | V0Xcm_263_HrmpChannelClosing | V0Xcm_263_RelayedFrom

export interface V0Xcm_263_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_265[]
}

export interface V0Xcm_263_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_265[]
}

export interface V0Xcm_263_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_265[]
}

export interface V0Xcm_263_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_263_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_263_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Xcm_263_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_263_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_263_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_263_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_263_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_263
}

export type V1Xcm_268 = V1Xcm_268_WithdrawAsset | V1Xcm_268_ReserveAssetDeposited | V1Xcm_268_ReceiveTeleportedAsset | V1Xcm_268_QueryResponse | V1Xcm_268_TransferAsset | V1Xcm_268_TransferReserveAsset | V1Xcm_268_Transact | V1Xcm_268_HrmpNewChannelOpenRequest | V1Xcm_268_HrmpChannelAccepted | V1Xcm_268_HrmpChannelClosing | V1Xcm_268_RelayedFrom | V1Xcm_268_SubscribeVersion | V1Xcm_268_UnsubscribeVersion

export interface V1Xcm_268_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_270[]
}

export interface V1Xcm_268_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_270[]
}

export interface V1Xcm_268_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_270[]
}

export interface V1Xcm_268_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_268_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_268_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Xcm_268_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_268_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_268_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_268_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_268_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_268
}

export interface V1Xcm_268_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_268_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction_274 = V2Instruction_274_WithdrawAsset | V2Instruction_274_ReserveAssetDeposited | V2Instruction_274_ReceiveTeleportedAsset | V2Instruction_274_QueryResponse | V2Instruction_274_TransferAsset | V2Instruction_274_TransferReserveAsset | V2Instruction_274_Transact | V2Instruction_274_HrmpNewChannelOpenRequest | V2Instruction_274_HrmpChannelAccepted | V2Instruction_274_HrmpChannelClosing | V2Instruction_274_ClearOrigin | V2Instruction_274_DescendOrigin | V2Instruction_274_ReportError | V2Instruction_274_DepositAsset | V2Instruction_274_DepositReserveAsset | V2Instruction_274_ExchangeAsset | V2Instruction_274_InitiateReserveWithdraw | V2Instruction_274_InitiateTeleport | V2Instruction_274_QueryHolding | V2Instruction_274_BuyExecution | V2Instruction_274_RefundSurplus | V2Instruction_274_SetErrorHandler | V2Instruction_274_SetAppendix | V2Instruction_274_ClearError | V2Instruction_274_ClaimAsset | V2Instruction_274_Trap | V2Instruction_274_SubscribeVersion | V2Instruction_274_UnsubscribeVersion

export interface V2Instruction_274_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_274_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_274_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_274_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_274_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_274_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_274_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_274_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_274_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_274_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_274_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_274_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_274_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_274_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_274_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_274_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_274_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_274_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_84[]
}

export interface V2Instruction_274_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_274_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_274_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_274_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_274[]
}

export interface V2Instruction_274_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_274[]
}

export interface V2Instruction_274_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_274_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_274_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_274_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_274_UnsubscribeVersion {
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

export type V0Order_254 = V0Order_254_Null | V0Order_254_DepositAsset | V0Order_254_DepositReserveAsset | V0Order_254_ExchangeAsset | V0Order_254_InitiateReserveWithdraw | V0Order_254_InitiateTeleport | V0Order_254_QueryHolding | V0Order_254_BuyExecution

export interface V0Order_254_Null {
  __kind: 'Null'
}

export interface V0Order_254_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_254_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Order_254_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_254_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Order_254_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Order_254_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_254_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_252[]
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

export type V1Order_259 = V1Order_259_Noop | V1Order_259_DepositAsset | V1Order_259_DepositReserveAsset | V1Order_259_ExchangeAsset | V1Order_259_InitiateReserveWithdraw | V1Order_259_InitiateTeleport | V1Order_259_QueryHolding | V1Order_259_BuyExecution

export interface V1Order_259_Noop {
  __kind: 'Noop'
}

export interface V1Order_259_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_259_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Order_259_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_259_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Order_259_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Order_259_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_259_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_257[]
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

export type V0Order_265 = V0Order_265_Null | V0Order_265_DepositAsset | V0Order_265_DepositReserveAsset | V0Order_265_ExchangeAsset | V0Order_265_InitiateReserveWithdraw | V0Order_265_InitiateTeleport | V0Order_265_QueryHolding | V0Order_265_BuyExecution

export interface V0Order_265_Null {
  __kind: 'Null'
}

export interface V0Order_265_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_265_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Order_265_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_265_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Order_265_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_254[]
}

export interface V0Order_265_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_265_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_263[]
}

export type V1Order_270 = V1Order_270_Noop | V1Order_270_DepositAsset | V1Order_270_DepositReserveAsset | V1Order_270_ExchangeAsset | V1Order_270_InitiateReserveWithdraw | V1Order_270_InitiateTeleport | V1Order_270_QueryHolding | V1Order_270_BuyExecution

export interface V1Order_270_Noop {
  __kind: 'Noop'
}

export interface V1Order_270_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_270_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Order_270_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_270_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Order_270_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_259[]
}

export interface V1Order_270_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_270_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_268[]
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
