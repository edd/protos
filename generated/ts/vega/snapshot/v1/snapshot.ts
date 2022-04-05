/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Market_TradingMode,
  PriceMonitoringTrigger,
  AuctionDuration,
  Market as Market3,
  market_TradingModeFromJSON,
  market_TradingModeToJSON,
} from "../../../vega/markets";
import {
  AuctionTrigger,
  Account,
  Withdrawal as Withdrawal1,
  Deposit as Deposit2,
  Delegation,
  Order,
  NetworkParameter,
  RankingScore,
  LiquidityProvision,
  auctionTriggerFromJSON,
  auctionTriggerToJSON,
} from "../../../vega/vega";
import { ChainEvent } from "../../../vega/commands/v1/validator_commands";
import { Asset } from "../../../vega/assets";
import {
  BuiltinAssetDeposit,
  ERC20Deposit,
  ERC20AssetList,
} from "../../../vega/chain_events";
import {
  RecurringTransfers,
  ScheduledTransferAtTime,
} from "../../../vega/checkpoint/v1/checkpoint";
import { Proposal, Vote } from "../../../vega/governance";
import {
  StakeLinking,
  ValidatorUpdate,
  ERC20MultiSigSignerEvent,
  ERC20MultiSigThresholdSetEvent,
} from "../../../vega/events/v1/events";

export const protobufPackage = "vega.snapshot.v1";

export enum Format {
  /** FORMAT_UNSPECIFIED - Default value, always invalid */
  FORMAT_UNSPECIFIED = 0,
  /** FORMAT_PROTO - Standard proto encoding */
  FORMAT_PROTO = 1,
  /** FORMAT_PROTO_COMPRESSED - Compressed proto, might come in handy */
  FORMAT_PROTO_COMPRESSED = 2,
  /** FORMAT_JSON - Simple JSON serialisation, probably not going to be used */
  FORMAT_JSON = 3,
  UNRECOGNIZED = -1,
}

export function formatFromJSON(object: any): Format {
  switch (object) {
    case 0:
    case "FORMAT_UNSPECIFIED":
      return Format.FORMAT_UNSPECIFIED;
    case 1:
    case "FORMAT_PROTO":
      return Format.FORMAT_PROTO;
    case 2:
    case "FORMAT_PROTO_COMPRESSED":
      return Format.FORMAT_PROTO_COMPRESSED;
    case 3:
    case "FORMAT_JSON":
      return Format.FORMAT_JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Format.UNRECOGNIZED;
  }
}

export function formatToJSON(object: Format): string {
  switch (object) {
    case Format.FORMAT_UNSPECIFIED:
      return "FORMAT_UNSPECIFIED";
    case Format.FORMAT_PROTO:
      return "FORMAT_PROTO";
    case Format.FORMAT_PROTO_COMPRESSED:
      return "FORMAT_PROTO_COMPRESSED";
    case Format.FORMAT_JSON:
      return "FORMAT_JSON";
    default:
      return "UNKNOWN";
  }
}

export interface Snapshot {
  height: string;
  format: Format;
  chunks: number;
  hash: Uint8Array;
  metadata: Uint8Array;
}

/**
 * NodeHash represents an exported node from the AVL tree and contains all the data necessary to recontruct and identical copy of the
 * AVL tree after we've serialised it
 */
export interface NodeHash {
  /** The node's full key, for example epoch.all */
  key: string;
  /** The hash of the node's value */
  hash: string;
  /** The height of the node in the tree */
  height: number;
  /** The version of that node i.e how many times its value has changed during tree updates */
  version: string;
  /** Whether or not the node contains a snapshot payload, only leaf nodes in the AVL contain payloads */
  isLeaf: boolean;
}

export interface Metadata {
  version: string;
  chunkHashes: string[];
  /** hashes used by snapshot engine, different to chunk hash if data was split up, or combined into a single chunk */
  nodeHashes: NodeHash[];
}

/**
 * Chunk is simply an as-is chunk belonging to a snapshot
 * not sure how usable this type would be
 */
export interface Chunk {
  data: Payload[];
  /** in case of multi-part data, this is chunk nr... */
  nr: string;
  /** ...of a total of N chunks */
  of: string;
}

export interface Payload {
  activeAssets: ActiveAssets | undefined;
  pendingAssets: PendingAssets | undefined;
  bankingWithdrawals: BankingWithdrawals | undefined;
  bankingDeposits: BankingDeposits | undefined;
  bankingSeen: BankingSeen | undefined;
  bankingAssetActions: BankingAssetActions | undefined;
  checkpoint: Checkpoint | undefined;
  collateralAccounts: CollateralAccounts | undefined;
  collateralAssets: CollateralAssets | undefined;
  delegationActive: DelegationActive | undefined;
  delegationPending: DelegationPending | undefined;
  delegationAuto: DelegationAuto | undefined;
  governanceActive: GovernanceActive | undefined;
  governanceEnacted: GovernanceEnacted | undefined;
  stakingAccounts: StakingAccounts | undefined;
  matchingBook: MatchingBook | undefined;
  networkParameters: NetParams | undefined;
  executionMarkets: ExecutionMarkets | undefined;
  marketPositions: MarketPositions | undefined;
  appState: AppState | undefined;
  epoch: EpochState | undefined;
  rewardsPendingPayouts: RewardsPendingPayouts | undefined;
  governanceNode: GovernanceNode | undefined;
  limitState: LimitState | undefined;
  voteSpamPolicy: VoteSpamPolicy | undefined;
  simpleSpamPolicy: SimpleSpamPolicy | undefined;
  notary: Notary | undefined;
  replayProtection: ReplayProtection | undefined;
  futureState: FutureState | undefined;
  eventForwarder: EventForwarder | undefined;
  stakeVerifierDeposited: StakeVerifierDeposited | undefined;
  stakeVerifierRemoved: StakeVerifierRemoved | undefined;
  witness: Witness | undefined;
  delegationLastReconciliationTime:
    | DelegationLastReconciliationTime
    | undefined;
  topology: Topology | undefined;
  oracleData: OracleDataBatch | undefined;
  liquidityParameters: LiquidityParameters | undefined;
  liquidityPendingProvisions: LiquidityPendingProvisions | undefined;
  liquidityPartiesLiquidityOrders: LiquidityPartiesLiquidityOrders | undefined;
  liquidityPartiesOrders: LiquidityPartiesOrders | undefined;
  liquidityProvisions: LiquidityProvisions | undefined;
  liquiditySupplied: LiquiditySupplied | undefined;
  liquidityTarget: LiquidityTarget | undefined;
  floatingPointConsensus: FloatingPointConsensus | undefined;
  feesTracker: FeesTracker | undefined;
  marketTracker: MarketTracker | undefined;
  bankingRecurringTransfers: BankingRecurringTransfers | undefined;
  bankingScheduledTransfers: BankingScheduledTransfers | undefined;
  erc20MultisigTopologyVerified: ERC20MultiSigTopologyVerified | undefined;
  erc20MultisigTopologyPending: ERC20MultiSigTopologyPending | undefined;
  proofOfWork: ProofOfWork | undefined;
}

export interface TimestampedOpenInterest {
  openInterest: string;
  time: string;
}

export interface LiquidityTarget {
  marketId: string;
  currentTime: string;
  scheduledTruncate: string;
  currentOpenInterests: string[];
  previousOpenInterests: TimestampedOpenInterest[];
  maxOpenInterests: TimestampedOpenInterest | undefined;
}

export interface LiquidityPriceProbabilityPair {
  price: string;
  probability: string;
}

export interface LiquiditySupplied {
  marketId: string;
  consensusReached: boolean;
  bidCache: LiquidityPriceProbabilityPair[];
  askCache: LiquidityPriceProbabilityPair[];
}

export interface OracleDataBatch {
  oracleData: OracleData[];
}

export interface OracleData {
  pubKeys: string[];
  data: OracleDataPair[];
}

export interface OracleDataPair {
  key: string;
  value: string;
}

export interface Witness {
  resources: Resource[];
  needResendResources: string[];
}

export interface Resource {
  id: string;
  checkUntil: string;
  votes: string[];
  state: number;
}

export interface EventForwarder {
  ackedEvents: ChainEvent[];
}

export interface CollateralAccounts {
  accounts: Account[];
}

export interface CollateralAssets {
  assets: Asset[];
}

export interface ActiveAssets {
  assets: Asset[];
}

export interface PendingAssets {
  assets: Asset[];
}

export interface Withdrawal {
  ref: string;
  withdrawal: Withdrawal1 | undefined;
}

export interface Deposit {
  id: string;
  deposit: Deposit2 | undefined;
}

export interface TxRef {
  asset: string;
  blockNr: string;
  hash: string;
  logIndex: string;
}

export interface AssetAction {
  id: string;
  state: number;
  asset: string;
  blockNumber: string;
  txIndex: string;
  hash: string;
  builtinDeposit: BuiltinAssetDeposit | undefined;
  erc20Deposit: ERC20Deposit | undefined;
  assetList: ERC20AssetList | undefined;
}

export interface BankingWithdrawals {
  withdrawals: Withdrawal[];
}

export interface BankingDeposits {
  deposit: Deposit[];
}

export interface BankingSeen {
  refs: TxRef[];
}

export interface BankingAssetActions {
  assetAction: AssetAction[];
}

export interface BankingRecurringTransfers {
  recurringTranfers: RecurringTransfers | undefined;
}

export interface BankingScheduledTransfers {
  transfersAtTime: ScheduledTransferAtTime[];
}

export interface Checkpoint {
  nextCp: string;
}

export interface DelegationLastReconciliationTime {
  lastReconciliationTime: string;
}

export interface DelegationActive {
  delegations: Delegation[];
}

export interface DelegationPending {
  delegations: Delegation[];
  undelegation: Delegation[];
}

export interface DelegationAuto {
  parties: string[];
}

export interface ProposalData {
  proposal: Proposal | undefined;
  yes: Vote[];
  no: Vote[];
  invalid: Vote[];
}

export interface GovernanceEnacted {
  proposals: ProposalData[];
}

export interface GovernanceActive {
  proposals: ProposalData[];
}

export interface GovernanceNode {
  proposals: Proposal[];
}

export interface StakingAccount {
  party: string;
  balance: string;
  events: StakeLinking[];
}

export interface StakingAccounts {
  accounts: StakingAccount[];
  stakingAssetTotalSupply: string;
}

export interface MatchingBook {
  marketId: string;
  buy: Order[];
  sell: Order[];
  lastTradedPrice: string;
  auction: boolean;
  batchId: string;
}

export interface NetParams {
  params: NetworkParameter[];
}

export interface DecimalMap {
  key: string;
  val: string;
}

export interface TimePrice {
  time: string;
  price: string;
}

export interface PriceVolume {
  price: string;
  volume: string;
}

export interface PriceRange {
  min: string;
  max: string;
  ref: string;
}

export interface PriceBound {
  active: boolean;
  upFactor: string;
  downFactor: string;
  trigger: PriceMonitoringTrigger | undefined;
}

export interface PriceRangeCache {
  bound: PriceBound | undefined;
  range: PriceRange | undefined;
}

export interface CurrentPrice {
  price: string;
  volume: string;
}

export interface PastPrice {
  time: string;
  volumeWeightedPrice: string;
}

export interface PriceMonitor {
  initialised: boolean;
  fpHorizons: DecimalMap[];
  now: string;
  update: string;
  bounds: PriceBound[];
  priceRangeCacheTime: string;
  priceRangeCache: PriceRangeCache[];
  refPriceCacheTime: string;
  refPriceCache: DecimalMap[];
  pricesNow: CurrentPrice[];
  pricesPast: PastPrice[];
  consensusReached: boolean;
}

export interface AuctionState {
  mode: Market_TradingMode;
  defaultMode: Market_TradingMode;
  trigger: AuctionTrigger;
  begin: string;
  end: AuctionDuration | undefined;
  start: boolean;
  stop: boolean;
  extension: AuctionTrigger;
}

export interface EquityShareLP {
  id: string;
  stake: string;
  share: string;
  avg: string;
}

export interface EquityShare {
  mvp: string;
  openingAuctionEnded: boolean;
  lps: EquityShareLP[];
}

export interface FeeSplitter {
  timeWindowStart: string;
  tradeValue: string;
}

export interface Market {
  market: Market3 | undefined;
  priceMonitor: PriceMonitor | undefined;
  auctionState: AuctionState | undefined;
  peggedOrders: Order[];
  expiringOrders: Order[];
  lastBestBid: string;
  lastBestAsk: string;
  lastMidBid: string;
  lastMidAsk: string;
  lastMarketValueProxy: string;
  lastEquityShareDistributed: string;
  equityShare: EquityShare | undefined;
  currentMarkPrice: string;
  riskFactorShort: string;
  riskFactorLong: string;
  riskFactorConsensusReached: boolean;
  feeSplitter: FeeSplitter | undefined;
}

export interface ExecutionMarkets {
  markets: Market[];
}

export interface Position {
  partyId: string;
  size: string;
  buy: string;
  sell: string;
  price: string;
  vwBuyPrice: string;
  vwSellPrice: string;
}

export interface MarketPositions {
  marketId: string;
  positions: Position[];
}

export interface AppState {
  height: string;
  block: string;
  time: string;
  chainId: string;
}

/** EpochState details */
export interface EpochState {
  /** Sequence number that increases by one each epoch */
  seq: string;
  /** What time did this epoch start */
  startTime: string;
  /** What time should this epoch end */
  expireTime: string;
  /** Ready to start a new epoch */
  readyToStartNewEpoch: boolean;
  /** Ready to end epoch */
  readyToEndEpoch: boolean;
}

export interface RewardsPendingPayouts {
  scheduledRewardsPayout: ScheduledRewardsPayout[];
}

export interface ScheduledRewardsPayout {
  payoutTime: string;
  rewardsPayout: RewardsPayout[];
}

export interface RewardsPayout {
  fromAccount: string;
  asset: string;
  rewardPartyAmount: RewardsPartyAmount[];
  totalReward: string;
  epochSeq: string;
  timestamp: string;
}

export interface RewardsPartyAmount {
  party: string;
  amount: string;
}

/** LimitState details */
export interface LimitState {
  /** Number of blocks into the boostrapping phase */
  blockCount: number;
  /** whether the limit on market proposals has been lifted */
  canProposeMarket: boolean;
  /** whether the limit on asset proposals has been lifted */
  canProposeAsset: boolean;
  /** whether the genesis state is loaded */
  genesisLoaded: boolean;
  /** fields derived from the genesis state */
  proposeMarketEnabled: boolean;
  proposeAssetEnabled: boolean;
  proposeMarketEnabledFrom: string;
  proposeAssetEnabledFrom: string;
}

export interface VoteSpamPolicy {
  partyToVote: PartyProposalVoteCount[];
  bannedParties: BannedParty[];
  tokenBalance: PartyTokenBalance[];
  recentBlocksRejectStats: BlockRejectStats[];
  currentBlockIndex: string;
  lastIncreaseBlock: string;
  currentEpochSeq: string;
  minVotingTokensFactor: string;
}

export interface PartyProposalVoteCount {
  party: string;
  proposal: string;
  count: string;
}

export interface BannedParty {
  party: string;
  untilEpoch: string;
}

export interface PartyTokenBalance {
  party: string;
  balance: string;
}

export interface BlockRejectStats {
  rejected: string;
  total: string;
}

export interface SpamPartyTransactionCount {
  party: string;
  count: string;
}

export interface SimpleSpamPolicy {
  policyName: string;
  partyToCount: SpamPartyTransactionCount[];
  bannedParties: BannedParty[];
  tokenBalance: PartyTokenBalance[];
  currentEpochSeq: string;
}

export interface NotarySigs {
  id: string;
  kind: number;
  node: string;
  sig: string;
}

export interface Notary {
  notarySigs: NotarySigs[];
}

export interface ReplayProtection {
  transactions: TransactionAtHeight[];
  backTol: string;
  forwardTol: string;
}

export interface TransactionAtHeight {
  tx: string;
  height: string;
}

export interface FutureState {
  marketId: string;
  settlementPrice: string;
  tradingTerminated: boolean;
}

export interface StakeVerifierDeposited {
  pendingDeposited: StakeVerifierPending[];
}

export interface StakeVerifierRemoved {
  pendingRemoved: StakeVerifierPending[];
}

export interface StakeVerifierPending {
  ethereumAddress: string;
  vegaPublicKey: string;
  amount: string;
  blockTime: string;
  blockNumber: string;
  logIndex: string;
  txId: string;
  id: string;
}

export interface PendingKeyRotation {
  blockHeight: string;
  nodeId: string;
  newPubKey: string;
  newPubKeyIndex: number;
}

export interface PendingEthereumKeyRotation {
  blockHeight: string;
  nodeId: string;
  newAddress: string;
}

export interface Topology {
  validatorData: ValidatorState[];
  chainKeys: string[];
  pendingPubKeyRotations: PendingKeyRotation[];
  validatorPerformance: ValidatorPerformance | undefined;
  pendingEthereumKeyRotations: PendingEthereumKeyRotation[];
}

export interface ValidatorState {
  validatorUpdate: ValidatorUpdate | undefined;
  blockAdded: string;
  status: number;
  statusChangeBlock: string;
  lastBlockWithPositiveRanking: string;
  ethEventsForwarded: string;
  heartbeatTracker: HeartbeatTracker | undefined;
  validatorPower: string;
  rankingScore: RankingScore | undefined;
}

export interface HeartbeatTracker {
  expectedNextHash: string;
  expectedNextHashSince: string;
  blockIndex: number;
  blockSigs: boolean[];
}

export interface PerformanceStats {
  validatorAddress: string;
  proposed: string;
  elected: string;
  voted: string;
  lastHeightVoted: string;
  lastHeightProposed: string;
  lastHeightElected: string;
}

export interface ValidatorPerformance {
  validatorPerfStats: PerformanceStats[];
}

export interface LiquidityParameters {
  maxFee: string;
  maxShapeSize: string;
  stakeToObligationFactor: string;
  /** required for key generation */
  marketId: string;
}

export interface LiquidityPendingProvisions {
  pendingProvisions: string[];
  /** required for key generation */
  marketId: string;
}

export interface LiquidityPartiesLiquidityOrders {
  orders: Order[];
  /** required for key generation */
  marketId: string;
}

export interface LiquidityPartiesOrders {
  orders: Order[];
  /** required for key generation */
  marketId: string;
}

export interface LiquidityProvisions {
  liquidityProvisions: LiquidityProvision[];
  /** required for key generation */
  marketId: string;
}

/** snapshot payload for floating point consensus */
export interface FloatingPointConsensus {
  nextTimeTrigger: NextTimeTrigger[];
}

export interface NextTimeTrigger {
  asset: string;
  market: string;
  id: string;
  nextTrigger: string;
}

export interface FeesTracker {
  assetFees: AssetFees[];
}

export interface AssetFees {
  asset: string;
  makerFees: PartyFees[];
  takerFees: PartyFees[];
  lpFees: PartyFees[];
}

export interface PartyFees {
  party: string;
  fee: string;
}

export interface MarketTracker {
  marketTracker: MarketVolumeTracker[];
}

export interface MarketVolumeTracker {
  marketId: string;
  proposer: string;
  bonusPaid: boolean;
  volumeTraded: string;
}

export interface SignerEventsPerAddress {
  address: string;
  events: ERC20MultiSigSignerEvent[];
}

export interface ERC20MultiSigTopologyVerified {
  signers: string[];
  eventsPerAddress: SignerEventsPerAddress[];
  threshold: ERC20MultiSigThresholdSetEvent | undefined;
  seenEvents: string[];
}

export interface ERC20MultiSigTopologyPending {
  pendingSigners: ERC20MultiSigSignerEvent[];
  pendingThresholdSet: ERC20MultiSigThresholdSetEvent[];
  witnessedSigners: string[];
  witnessedThresholdSets: string[];
}

export interface ProofOfWork {
  blockHeight: string[];
  blockHash: string[];
  seenTx: string[];
  txAtHeight: TransactionsAtHeight[];
  seenTid: string[];
  tidAtHeight: TransactionsAtHeight[];
  banned: BannedParty[];
}

export interface TransactionsAtHeight {
  height: string;
  transactions: string[];
}

function createBaseSnapshot(): Snapshot {
  return {
    height: "0",
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array(),
  };
}

export const Snapshot = {
  encode(
    message: Snapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).int32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.format = reader.int32() as any;
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      format: isSet(object.format) ? formatFromJSON(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      metadata: isSet(object.metadata)
        ? bytesFromBase64(object.metadata)
        : new Uint8Array(),
    };
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.format !== undefined && (obj.format = formatToJSON(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height ?? "0";
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  },
};

function createBaseNodeHash(): NodeHash {
  return { key: "", hash: "", height: 0, version: "0", isLeaf: false };
}

export const NodeHash = {
  encode(
    message: NodeHash,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.hash !== "") {
      writer.uint32(34).string(message.hash);
    }
    if (message.height !== 0) {
      writer.uint32(40).int32(message.height);
    }
    if (message.version !== "0") {
      writer.uint32(48).int64(message.version);
    }
    if (message.isLeaf === true) {
      writer.uint32(56).bool(message.isLeaf);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeHash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.hash = reader.string();
          break;
        case 5:
          message.height = reader.int32();
          break;
        case 6:
          message.version = longToString(reader.int64() as Long);
          break;
        case 7:
          message.isLeaf = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeHash {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      version: isSet(object.version) ? String(object.version) : "0",
      isLeaf: isSet(object.isLeaf) ? Boolean(object.isLeaf) : false,
    };
  },

  toJSON(message: NodeHash): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.hash !== undefined && (obj.hash = message.hash);
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.version !== undefined && (obj.version = message.version);
    message.isLeaf !== undefined && (obj.isLeaf = message.isLeaf);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeHash>, I>>(object: I): NodeHash {
    const message = createBaseNodeHash();
    message.key = object.key ?? "";
    message.hash = object.hash ?? "";
    message.height = object.height ?? 0;
    message.version = object.version ?? "0";
    message.isLeaf = object.isLeaf ?? false;
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { version: "0", chunkHashes: [], nodeHashes: [] };
}

export const Metadata = {
  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "0") {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.chunkHashes) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.nodeHashes) {
      NodeHash.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = longToString(reader.int64() as Long);
          break;
        case 2:
          message.chunkHashes.push(reader.string());
          break;
        case 3:
          message.nodeHashes.push(NodeHash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      version: isSet(object.version) ? String(object.version) : "0",
      chunkHashes: Array.isArray(object?.chunkHashes)
        ? object.chunkHashes.map((e: any) => String(e))
        : [],
      nodeHashes: Array.isArray(object?.nodeHashes)
        ? object.nodeHashes.map((e: any) => NodeHash.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    if (message.chunkHashes) {
      obj.chunkHashes = message.chunkHashes.map((e) => e);
    } else {
      obj.chunkHashes = [];
    }
    if (message.nodeHashes) {
      obj.nodeHashes = message.nodeHashes.map((e) =>
        e ? NodeHash.toJSON(e) : undefined
      );
    } else {
      obj.nodeHashes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.version = object.version ?? "0";
    message.chunkHashes = object.chunkHashes?.map((e) => e) || [];
    message.nodeHashes =
      object.nodeHashes?.map((e) => NodeHash.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChunk(): Chunk {
  return { data: [], nr: "0", of: "0" };
}

export const Chunk = {
  encode(message: Chunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      Payload.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nr !== "0") {
      writer.uint32(16).int64(message.nr);
    }
    if (message.of !== "0") {
      writer.uint32(24).int64(message.of);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChunk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Payload.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nr = longToString(reader.int64() as Long);
          break;
        case 3:
          message.of = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chunk {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Payload.fromJSON(e))
        : [],
      nr: isSet(object.nr) ? String(object.nr) : "0",
      of: isSet(object.of) ? String(object.of) : "0",
    };
  },

  toJSON(message: Chunk): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Payload.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    message.nr !== undefined && (obj.nr = message.nr);
    message.of !== undefined && (obj.of = message.of);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chunk>, I>>(object: I): Chunk {
    const message = createBaseChunk();
    message.data = object.data?.map((e) => Payload.fromPartial(e)) || [];
    message.nr = object.nr ?? "0";
    message.of = object.of ?? "0";
    return message;
  },
};

function createBasePayload(): Payload {
  return {
    activeAssets: undefined,
    pendingAssets: undefined,
    bankingWithdrawals: undefined,
    bankingDeposits: undefined,
    bankingSeen: undefined,
    bankingAssetActions: undefined,
    checkpoint: undefined,
    collateralAccounts: undefined,
    collateralAssets: undefined,
    delegationActive: undefined,
    delegationPending: undefined,
    delegationAuto: undefined,
    governanceActive: undefined,
    governanceEnacted: undefined,
    stakingAccounts: undefined,
    matchingBook: undefined,
    networkParameters: undefined,
    executionMarkets: undefined,
    marketPositions: undefined,
    appState: undefined,
    epoch: undefined,
    rewardsPendingPayouts: undefined,
    governanceNode: undefined,
    limitState: undefined,
    voteSpamPolicy: undefined,
    simpleSpamPolicy: undefined,
    notary: undefined,
    replayProtection: undefined,
    futureState: undefined,
    eventForwarder: undefined,
    stakeVerifierDeposited: undefined,
    stakeVerifierRemoved: undefined,
    witness: undefined,
    delegationLastReconciliationTime: undefined,
    topology: undefined,
    oracleData: undefined,
    liquidityParameters: undefined,
    liquidityPendingProvisions: undefined,
    liquidityPartiesLiquidityOrders: undefined,
    liquidityPartiesOrders: undefined,
    liquidityProvisions: undefined,
    liquiditySupplied: undefined,
    liquidityTarget: undefined,
    floatingPointConsensus: undefined,
    feesTracker: undefined,
    marketTracker: undefined,
    bankingRecurringTransfers: undefined,
    bankingScheduledTransfers: undefined,
    erc20MultisigTopologyVerified: undefined,
    erc20MultisigTopologyPending: undefined,
    proofOfWork: undefined,
  };
}

export const Payload = {
  encode(
    message: Payload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.activeAssets !== undefined) {
      ActiveAssets.encode(
        message.activeAssets,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.pendingAssets !== undefined) {
      PendingAssets.encode(
        message.pendingAssets,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.bankingWithdrawals !== undefined) {
      BankingWithdrawals.encode(
        message.bankingWithdrawals,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.bankingDeposits !== undefined) {
      BankingDeposits.encode(
        message.bankingDeposits,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.bankingSeen !== undefined) {
      BankingSeen.encode(
        message.bankingSeen,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.bankingAssetActions !== undefined) {
      BankingAssetActions.encode(
        message.bankingAssetActions,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.checkpoint !== undefined) {
      Checkpoint.encode(message.checkpoint, writer.uint32(58).fork()).ldelim();
    }
    if (message.collateralAccounts !== undefined) {
      CollateralAccounts.encode(
        message.collateralAccounts,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.collateralAssets !== undefined) {
      CollateralAssets.encode(
        message.collateralAssets,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.delegationActive !== undefined) {
      DelegationActive.encode(
        message.delegationActive,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.delegationPending !== undefined) {
      DelegationPending.encode(
        message.delegationPending,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.delegationAuto !== undefined) {
      DelegationAuto.encode(
        message.delegationAuto,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.governanceActive !== undefined) {
      GovernanceActive.encode(
        message.governanceActive,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.governanceEnacted !== undefined) {
      GovernanceEnacted.encode(
        message.governanceEnacted,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.stakingAccounts !== undefined) {
      StakingAccounts.encode(
        message.stakingAccounts,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.matchingBook !== undefined) {
      MatchingBook.encode(
        message.matchingBook,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.networkParameters !== undefined) {
      NetParams.encode(
        message.networkParameters,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.executionMarkets !== undefined) {
      ExecutionMarkets.encode(
        message.executionMarkets,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.marketPositions !== undefined) {
      MarketPositions.encode(
        message.marketPositions,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.appState !== undefined) {
      AppState.encode(message.appState, writer.uint32(162).fork()).ldelim();
    }
    if (message.epoch !== undefined) {
      EpochState.encode(message.epoch, writer.uint32(170).fork()).ldelim();
    }
    if (message.rewardsPendingPayouts !== undefined) {
      RewardsPendingPayouts.encode(
        message.rewardsPendingPayouts,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.governanceNode !== undefined) {
      GovernanceNode.encode(
        message.governanceNode,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.limitState !== undefined) {
      LimitState.encode(message.limitState, writer.uint32(202).fork()).ldelim();
    }
    if (message.voteSpamPolicy !== undefined) {
      VoteSpamPolicy.encode(
        message.voteSpamPolicy,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.simpleSpamPolicy !== undefined) {
      SimpleSpamPolicy.encode(
        message.simpleSpamPolicy,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.notary !== undefined) {
      Notary.encode(message.notary, writer.uint32(226).fork()).ldelim();
    }
    if (message.replayProtection !== undefined) {
      ReplayProtection.encode(
        message.replayProtection,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.futureState !== undefined) {
      FutureState.encode(
        message.futureState,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.eventForwarder !== undefined) {
      EventForwarder.encode(
        message.eventForwarder,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.stakeVerifierDeposited !== undefined) {
      StakeVerifierDeposited.encode(
        message.stakeVerifierDeposited,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.stakeVerifierRemoved !== undefined) {
      StakeVerifierRemoved.encode(
        message.stakeVerifierRemoved,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.witness !== undefined) {
      Witness.encode(message.witness, writer.uint32(274).fork()).ldelim();
    }
    if (message.delegationLastReconciliationTime !== undefined) {
      DelegationLastReconciliationTime.encode(
        message.delegationLastReconciliationTime,
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.topology !== undefined) {
      Topology.encode(message.topology, writer.uint32(290).fork()).ldelim();
    }
    if (message.oracleData !== undefined) {
      OracleDataBatch.encode(
        message.oracleData,
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.liquidityParameters !== undefined) {
      LiquidityParameters.encode(
        message.liquidityParameters,
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.liquidityPendingProvisions !== undefined) {
      LiquidityPendingProvisions.encode(
        message.liquidityPendingProvisions,
        writer.uint32(314).fork()
      ).ldelim();
    }
    if (message.liquidityPartiesLiquidityOrders !== undefined) {
      LiquidityPartiesLiquidityOrders.encode(
        message.liquidityPartiesLiquidityOrders,
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.liquidityPartiesOrders !== undefined) {
      LiquidityPartiesOrders.encode(
        message.liquidityPartiesOrders,
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.liquidityProvisions !== undefined) {
      LiquidityProvisions.encode(
        message.liquidityProvisions,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.liquiditySupplied !== undefined) {
      LiquiditySupplied.encode(
        message.liquiditySupplied,
        writer.uint32(346).fork()
      ).ldelim();
    }
    if (message.liquidityTarget !== undefined) {
      LiquidityTarget.encode(
        message.liquidityTarget,
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.floatingPointConsensus !== undefined) {
      FloatingPointConsensus.encode(
        message.floatingPointConsensus,
        writer.uint32(370).fork()
      ).ldelim();
    }
    if (message.feesTracker !== undefined) {
      FeesTracker.encode(
        message.feesTracker,
        writer.uint32(378).fork()
      ).ldelim();
    }
    if (message.marketTracker !== undefined) {
      MarketTracker.encode(
        message.marketTracker,
        writer.uint32(386).fork()
      ).ldelim();
    }
    if (message.bankingRecurringTransfers !== undefined) {
      BankingRecurringTransfers.encode(
        message.bankingRecurringTransfers,
        writer.uint32(394).fork()
      ).ldelim();
    }
    if (message.bankingScheduledTransfers !== undefined) {
      BankingScheduledTransfers.encode(
        message.bankingScheduledTransfers,
        writer.uint32(402).fork()
      ).ldelim();
    }
    if (message.erc20MultisigTopologyVerified !== undefined) {
      ERC20MultiSigTopologyVerified.encode(
        message.erc20MultisigTopologyVerified,
        writer.uint32(410).fork()
      ).ldelim();
    }
    if (message.erc20MultisigTopologyPending !== undefined) {
      ERC20MultiSigTopologyPending.encode(
        message.erc20MultisigTopologyPending,
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.proofOfWork !== undefined) {
      ProofOfWork.encode(
        message.proofOfWork,
        writer.uint32(426).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Payload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeAssets = ActiveAssets.decode(reader, reader.uint32());
          break;
        case 2:
          message.pendingAssets = PendingAssets.decode(reader, reader.uint32());
          break;
        case 3:
          message.bankingWithdrawals = BankingWithdrawals.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.bankingDeposits = BankingDeposits.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.bankingSeen = BankingSeen.decode(reader, reader.uint32());
          break;
        case 6:
          message.bankingAssetActions = BankingAssetActions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.checkpoint = Checkpoint.decode(reader, reader.uint32());
          break;
        case 8:
          message.collateralAccounts = CollateralAccounts.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.collateralAssets = CollateralAssets.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.delegationActive = DelegationActive.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.delegationPending = DelegationPending.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.delegationAuto = DelegationAuto.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.governanceActive = GovernanceActive.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.governanceEnacted = GovernanceEnacted.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.stakingAccounts = StakingAccounts.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.matchingBook = MatchingBook.decode(reader, reader.uint32());
          break;
        case 17:
          message.networkParameters = NetParams.decode(reader, reader.uint32());
          break;
        case 18:
          message.executionMarkets = ExecutionMarkets.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.marketPositions = MarketPositions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.appState = AppState.decode(reader, reader.uint32());
          break;
        case 21:
          message.epoch = EpochState.decode(reader, reader.uint32());
          break;
        case 23:
          message.rewardsPendingPayouts = RewardsPendingPayouts.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.governanceNode = GovernanceNode.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.limitState = LimitState.decode(reader, reader.uint32());
          break;
        case 26:
          message.voteSpamPolicy = VoteSpamPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.simpleSpamPolicy = SimpleSpamPolicy.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.notary = Notary.decode(reader, reader.uint32());
          break;
        case 29:
          message.replayProtection = ReplayProtection.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.futureState = FutureState.decode(reader, reader.uint32());
          break;
        case 31:
          message.eventForwarder = EventForwarder.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.stakeVerifierDeposited = StakeVerifierDeposited.decode(
            reader,
            reader.uint32()
          );
          break;
        case 33:
          message.stakeVerifierRemoved = StakeVerifierRemoved.decode(
            reader,
            reader.uint32()
          );
          break;
        case 34:
          message.witness = Witness.decode(reader, reader.uint32());
          break;
        case 35:
          message.delegationLastReconciliationTime =
            DelegationLastReconciliationTime.decode(reader, reader.uint32());
          break;
        case 36:
          message.topology = Topology.decode(reader, reader.uint32());
          break;
        case 37:
          message.oracleData = OracleDataBatch.decode(reader, reader.uint32());
          break;
        case 38:
          message.liquidityParameters = LiquidityParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 39:
          message.liquidityPendingProvisions =
            LiquidityPendingProvisions.decode(reader, reader.uint32());
          break;
        case 40:
          message.liquidityPartiesLiquidityOrders =
            LiquidityPartiesLiquidityOrders.decode(reader, reader.uint32());
          break;
        case 41:
          message.liquidityPartiesOrders = LiquidityPartiesOrders.decode(
            reader,
            reader.uint32()
          );
          break;
        case 42:
          message.liquidityProvisions = LiquidityProvisions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 43:
          message.liquiditySupplied = LiquiditySupplied.decode(
            reader,
            reader.uint32()
          );
          break;
        case 44:
          message.liquidityTarget = LiquidityTarget.decode(
            reader,
            reader.uint32()
          );
          break;
        case 46:
          message.floatingPointConsensus = FloatingPointConsensus.decode(
            reader,
            reader.uint32()
          );
          break;
        case 47:
          message.feesTracker = FeesTracker.decode(reader, reader.uint32());
          break;
        case 48:
          message.marketTracker = MarketTracker.decode(reader, reader.uint32());
          break;
        case 49:
          message.bankingRecurringTransfers = BankingRecurringTransfers.decode(
            reader,
            reader.uint32()
          );
          break;
        case 50:
          message.bankingScheduledTransfers = BankingScheduledTransfers.decode(
            reader,
            reader.uint32()
          );
          break;
        case 51:
          message.erc20MultisigTopologyVerified =
            ERC20MultiSigTopologyVerified.decode(reader, reader.uint32());
          break;
        case 52:
          message.erc20MultisigTopologyPending =
            ERC20MultiSigTopologyPending.decode(reader, reader.uint32());
          break;
        case 53:
          message.proofOfWork = ProofOfWork.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Payload {
    return {
      activeAssets: isSet(object.activeAssets)
        ? ActiveAssets.fromJSON(object.activeAssets)
        : undefined,
      pendingAssets: isSet(object.pendingAssets)
        ? PendingAssets.fromJSON(object.pendingAssets)
        : undefined,
      bankingWithdrawals: isSet(object.bankingWithdrawals)
        ? BankingWithdrawals.fromJSON(object.bankingWithdrawals)
        : undefined,
      bankingDeposits: isSet(object.bankingDeposits)
        ? BankingDeposits.fromJSON(object.bankingDeposits)
        : undefined,
      bankingSeen: isSet(object.bankingSeen)
        ? BankingSeen.fromJSON(object.bankingSeen)
        : undefined,
      bankingAssetActions: isSet(object.bankingAssetActions)
        ? BankingAssetActions.fromJSON(object.bankingAssetActions)
        : undefined,
      checkpoint: isSet(object.checkpoint)
        ? Checkpoint.fromJSON(object.checkpoint)
        : undefined,
      collateralAccounts: isSet(object.collateralAccounts)
        ? CollateralAccounts.fromJSON(object.collateralAccounts)
        : undefined,
      collateralAssets: isSet(object.collateralAssets)
        ? CollateralAssets.fromJSON(object.collateralAssets)
        : undefined,
      delegationActive: isSet(object.delegationActive)
        ? DelegationActive.fromJSON(object.delegationActive)
        : undefined,
      delegationPending: isSet(object.delegationPending)
        ? DelegationPending.fromJSON(object.delegationPending)
        : undefined,
      delegationAuto: isSet(object.delegationAuto)
        ? DelegationAuto.fromJSON(object.delegationAuto)
        : undefined,
      governanceActive: isSet(object.governanceActive)
        ? GovernanceActive.fromJSON(object.governanceActive)
        : undefined,
      governanceEnacted: isSet(object.governanceEnacted)
        ? GovernanceEnacted.fromJSON(object.governanceEnacted)
        : undefined,
      stakingAccounts: isSet(object.stakingAccounts)
        ? StakingAccounts.fromJSON(object.stakingAccounts)
        : undefined,
      matchingBook: isSet(object.matchingBook)
        ? MatchingBook.fromJSON(object.matchingBook)
        : undefined,
      networkParameters: isSet(object.networkParameters)
        ? NetParams.fromJSON(object.networkParameters)
        : undefined,
      executionMarkets: isSet(object.executionMarkets)
        ? ExecutionMarkets.fromJSON(object.executionMarkets)
        : undefined,
      marketPositions: isSet(object.marketPositions)
        ? MarketPositions.fromJSON(object.marketPositions)
        : undefined,
      appState: isSet(object.appState)
        ? AppState.fromJSON(object.appState)
        : undefined,
      epoch: isSet(object.epoch)
        ? EpochState.fromJSON(object.epoch)
        : undefined,
      rewardsPendingPayouts: isSet(object.rewardsPendingPayouts)
        ? RewardsPendingPayouts.fromJSON(object.rewardsPendingPayouts)
        : undefined,
      governanceNode: isSet(object.governanceNode)
        ? GovernanceNode.fromJSON(object.governanceNode)
        : undefined,
      limitState: isSet(object.limitState)
        ? LimitState.fromJSON(object.limitState)
        : undefined,
      voteSpamPolicy: isSet(object.voteSpamPolicy)
        ? VoteSpamPolicy.fromJSON(object.voteSpamPolicy)
        : undefined,
      simpleSpamPolicy: isSet(object.simpleSpamPolicy)
        ? SimpleSpamPolicy.fromJSON(object.simpleSpamPolicy)
        : undefined,
      notary: isSet(object.notary) ? Notary.fromJSON(object.notary) : undefined,
      replayProtection: isSet(object.replayProtection)
        ? ReplayProtection.fromJSON(object.replayProtection)
        : undefined,
      futureState: isSet(object.futureState)
        ? FutureState.fromJSON(object.futureState)
        : undefined,
      eventForwarder: isSet(object.eventForwarder)
        ? EventForwarder.fromJSON(object.eventForwarder)
        : undefined,
      stakeVerifierDeposited: isSet(object.stakeVerifierDeposited)
        ? StakeVerifierDeposited.fromJSON(object.stakeVerifierDeposited)
        : undefined,
      stakeVerifierRemoved: isSet(object.stakeVerifierRemoved)
        ? StakeVerifierRemoved.fromJSON(object.stakeVerifierRemoved)
        : undefined,
      witness: isSet(object.witness)
        ? Witness.fromJSON(object.witness)
        : undefined,
      delegationLastReconciliationTime: isSet(
        object.delegationLastReconciliationTime
      )
        ? DelegationLastReconciliationTime.fromJSON(
            object.delegationLastReconciliationTime
          )
        : undefined,
      topology: isSet(object.topology)
        ? Topology.fromJSON(object.topology)
        : undefined,
      oracleData: isSet(object.oracleData)
        ? OracleDataBatch.fromJSON(object.oracleData)
        : undefined,
      liquidityParameters: isSet(object.liquidityParameters)
        ? LiquidityParameters.fromJSON(object.liquidityParameters)
        : undefined,
      liquidityPendingProvisions: isSet(object.liquidityPendingProvisions)
        ? LiquidityPendingProvisions.fromJSON(object.liquidityPendingProvisions)
        : undefined,
      liquidityPartiesLiquidityOrders: isSet(
        object.liquidityPartiesLiquidityOrders
      )
        ? LiquidityPartiesLiquidityOrders.fromJSON(
            object.liquidityPartiesLiquidityOrders
          )
        : undefined,
      liquidityPartiesOrders: isSet(object.liquidityPartiesOrders)
        ? LiquidityPartiesOrders.fromJSON(object.liquidityPartiesOrders)
        : undefined,
      liquidityProvisions: isSet(object.liquidityProvisions)
        ? LiquidityProvisions.fromJSON(object.liquidityProvisions)
        : undefined,
      liquiditySupplied: isSet(object.liquiditySupplied)
        ? LiquiditySupplied.fromJSON(object.liquiditySupplied)
        : undefined,
      liquidityTarget: isSet(object.liquidityTarget)
        ? LiquidityTarget.fromJSON(object.liquidityTarget)
        : undefined,
      floatingPointConsensus: isSet(object.floatingPointConsensus)
        ? FloatingPointConsensus.fromJSON(object.floatingPointConsensus)
        : undefined,
      feesTracker: isSet(object.feesTracker)
        ? FeesTracker.fromJSON(object.feesTracker)
        : undefined,
      marketTracker: isSet(object.marketTracker)
        ? MarketTracker.fromJSON(object.marketTracker)
        : undefined,
      bankingRecurringTransfers: isSet(object.bankingRecurringTransfers)
        ? BankingRecurringTransfers.fromJSON(object.bankingRecurringTransfers)
        : undefined,
      bankingScheduledTransfers: isSet(object.bankingScheduledTransfers)
        ? BankingScheduledTransfers.fromJSON(object.bankingScheduledTransfers)
        : undefined,
      erc20MultisigTopologyVerified: isSet(object.erc20MultisigTopologyVerified)
        ? ERC20MultiSigTopologyVerified.fromJSON(
            object.erc20MultisigTopologyVerified
          )
        : undefined,
      erc20MultisigTopologyPending: isSet(object.erc20MultisigTopologyPending)
        ? ERC20MultiSigTopologyPending.fromJSON(
            object.erc20MultisigTopologyPending
          )
        : undefined,
      proofOfWork: isSet(object.proofOfWork)
        ? ProofOfWork.fromJSON(object.proofOfWork)
        : undefined,
    };
  },

  toJSON(message: Payload): unknown {
    const obj: any = {};
    message.activeAssets !== undefined &&
      (obj.activeAssets = message.activeAssets
        ? ActiveAssets.toJSON(message.activeAssets)
        : undefined);
    message.pendingAssets !== undefined &&
      (obj.pendingAssets = message.pendingAssets
        ? PendingAssets.toJSON(message.pendingAssets)
        : undefined);
    message.bankingWithdrawals !== undefined &&
      (obj.bankingWithdrawals = message.bankingWithdrawals
        ? BankingWithdrawals.toJSON(message.bankingWithdrawals)
        : undefined);
    message.bankingDeposits !== undefined &&
      (obj.bankingDeposits = message.bankingDeposits
        ? BankingDeposits.toJSON(message.bankingDeposits)
        : undefined);
    message.bankingSeen !== undefined &&
      (obj.bankingSeen = message.bankingSeen
        ? BankingSeen.toJSON(message.bankingSeen)
        : undefined);
    message.bankingAssetActions !== undefined &&
      (obj.bankingAssetActions = message.bankingAssetActions
        ? BankingAssetActions.toJSON(message.bankingAssetActions)
        : undefined);
    message.checkpoint !== undefined &&
      (obj.checkpoint = message.checkpoint
        ? Checkpoint.toJSON(message.checkpoint)
        : undefined);
    message.collateralAccounts !== undefined &&
      (obj.collateralAccounts = message.collateralAccounts
        ? CollateralAccounts.toJSON(message.collateralAccounts)
        : undefined);
    message.collateralAssets !== undefined &&
      (obj.collateralAssets = message.collateralAssets
        ? CollateralAssets.toJSON(message.collateralAssets)
        : undefined);
    message.delegationActive !== undefined &&
      (obj.delegationActive = message.delegationActive
        ? DelegationActive.toJSON(message.delegationActive)
        : undefined);
    message.delegationPending !== undefined &&
      (obj.delegationPending = message.delegationPending
        ? DelegationPending.toJSON(message.delegationPending)
        : undefined);
    message.delegationAuto !== undefined &&
      (obj.delegationAuto = message.delegationAuto
        ? DelegationAuto.toJSON(message.delegationAuto)
        : undefined);
    message.governanceActive !== undefined &&
      (obj.governanceActive = message.governanceActive
        ? GovernanceActive.toJSON(message.governanceActive)
        : undefined);
    message.governanceEnacted !== undefined &&
      (obj.governanceEnacted = message.governanceEnacted
        ? GovernanceEnacted.toJSON(message.governanceEnacted)
        : undefined);
    message.stakingAccounts !== undefined &&
      (obj.stakingAccounts = message.stakingAccounts
        ? StakingAccounts.toJSON(message.stakingAccounts)
        : undefined);
    message.matchingBook !== undefined &&
      (obj.matchingBook = message.matchingBook
        ? MatchingBook.toJSON(message.matchingBook)
        : undefined);
    message.networkParameters !== undefined &&
      (obj.networkParameters = message.networkParameters
        ? NetParams.toJSON(message.networkParameters)
        : undefined);
    message.executionMarkets !== undefined &&
      (obj.executionMarkets = message.executionMarkets
        ? ExecutionMarkets.toJSON(message.executionMarkets)
        : undefined);
    message.marketPositions !== undefined &&
      (obj.marketPositions = message.marketPositions
        ? MarketPositions.toJSON(message.marketPositions)
        : undefined);
    message.appState !== undefined &&
      (obj.appState = message.appState
        ? AppState.toJSON(message.appState)
        : undefined);
    message.epoch !== undefined &&
      (obj.epoch = message.epoch
        ? EpochState.toJSON(message.epoch)
        : undefined);
    message.rewardsPendingPayouts !== undefined &&
      (obj.rewardsPendingPayouts = message.rewardsPendingPayouts
        ? RewardsPendingPayouts.toJSON(message.rewardsPendingPayouts)
        : undefined);
    message.governanceNode !== undefined &&
      (obj.governanceNode = message.governanceNode
        ? GovernanceNode.toJSON(message.governanceNode)
        : undefined);
    message.limitState !== undefined &&
      (obj.limitState = message.limitState
        ? LimitState.toJSON(message.limitState)
        : undefined);
    message.voteSpamPolicy !== undefined &&
      (obj.voteSpamPolicy = message.voteSpamPolicy
        ? VoteSpamPolicy.toJSON(message.voteSpamPolicy)
        : undefined);
    message.simpleSpamPolicy !== undefined &&
      (obj.simpleSpamPolicy = message.simpleSpamPolicy
        ? SimpleSpamPolicy.toJSON(message.simpleSpamPolicy)
        : undefined);
    message.notary !== undefined &&
      (obj.notary = message.notary ? Notary.toJSON(message.notary) : undefined);
    message.replayProtection !== undefined &&
      (obj.replayProtection = message.replayProtection
        ? ReplayProtection.toJSON(message.replayProtection)
        : undefined);
    message.futureState !== undefined &&
      (obj.futureState = message.futureState
        ? FutureState.toJSON(message.futureState)
        : undefined);
    message.eventForwarder !== undefined &&
      (obj.eventForwarder = message.eventForwarder
        ? EventForwarder.toJSON(message.eventForwarder)
        : undefined);
    message.stakeVerifierDeposited !== undefined &&
      (obj.stakeVerifierDeposited = message.stakeVerifierDeposited
        ? StakeVerifierDeposited.toJSON(message.stakeVerifierDeposited)
        : undefined);
    message.stakeVerifierRemoved !== undefined &&
      (obj.stakeVerifierRemoved = message.stakeVerifierRemoved
        ? StakeVerifierRemoved.toJSON(message.stakeVerifierRemoved)
        : undefined);
    message.witness !== undefined &&
      (obj.witness = message.witness
        ? Witness.toJSON(message.witness)
        : undefined);
    message.delegationLastReconciliationTime !== undefined &&
      (obj.delegationLastReconciliationTime =
        message.delegationLastReconciliationTime
          ? DelegationLastReconciliationTime.toJSON(
              message.delegationLastReconciliationTime
            )
          : undefined);
    message.topology !== undefined &&
      (obj.topology = message.topology
        ? Topology.toJSON(message.topology)
        : undefined);
    message.oracleData !== undefined &&
      (obj.oracleData = message.oracleData
        ? OracleDataBatch.toJSON(message.oracleData)
        : undefined);
    message.liquidityParameters !== undefined &&
      (obj.liquidityParameters = message.liquidityParameters
        ? LiquidityParameters.toJSON(message.liquidityParameters)
        : undefined);
    message.liquidityPendingProvisions !== undefined &&
      (obj.liquidityPendingProvisions = message.liquidityPendingProvisions
        ? LiquidityPendingProvisions.toJSON(message.liquidityPendingProvisions)
        : undefined);
    message.liquidityPartiesLiquidityOrders !== undefined &&
      (obj.liquidityPartiesLiquidityOrders =
        message.liquidityPartiesLiquidityOrders
          ? LiquidityPartiesLiquidityOrders.toJSON(
              message.liquidityPartiesLiquidityOrders
            )
          : undefined);
    message.liquidityPartiesOrders !== undefined &&
      (obj.liquidityPartiesOrders = message.liquidityPartiesOrders
        ? LiquidityPartiesOrders.toJSON(message.liquidityPartiesOrders)
        : undefined);
    message.liquidityProvisions !== undefined &&
      (obj.liquidityProvisions = message.liquidityProvisions
        ? LiquidityProvisions.toJSON(message.liquidityProvisions)
        : undefined);
    message.liquiditySupplied !== undefined &&
      (obj.liquiditySupplied = message.liquiditySupplied
        ? LiquiditySupplied.toJSON(message.liquiditySupplied)
        : undefined);
    message.liquidityTarget !== undefined &&
      (obj.liquidityTarget = message.liquidityTarget
        ? LiquidityTarget.toJSON(message.liquidityTarget)
        : undefined);
    message.floatingPointConsensus !== undefined &&
      (obj.floatingPointConsensus = message.floatingPointConsensus
        ? FloatingPointConsensus.toJSON(message.floatingPointConsensus)
        : undefined);
    message.feesTracker !== undefined &&
      (obj.feesTracker = message.feesTracker
        ? FeesTracker.toJSON(message.feesTracker)
        : undefined);
    message.marketTracker !== undefined &&
      (obj.marketTracker = message.marketTracker
        ? MarketTracker.toJSON(message.marketTracker)
        : undefined);
    message.bankingRecurringTransfers !== undefined &&
      (obj.bankingRecurringTransfers = message.bankingRecurringTransfers
        ? BankingRecurringTransfers.toJSON(message.bankingRecurringTransfers)
        : undefined);
    message.bankingScheduledTransfers !== undefined &&
      (obj.bankingScheduledTransfers = message.bankingScheduledTransfers
        ? BankingScheduledTransfers.toJSON(message.bankingScheduledTransfers)
        : undefined);
    message.erc20MultisigTopologyVerified !== undefined &&
      (obj.erc20MultisigTopologyVerified = message.erc20MultisigTopologyVerified
        ? ERC20MultiSigTopologyVerified.toJSON(
            message.erc20MultisigTopologyVerified
          )
        : undefined);
    message.erc20MultisigTopologyPending !== undefined &&
      (obj.erc20MultisigTopologyPending = message.erc20MultisigTopologyPending
        ? ERC20MultiSigTopologyPending.toJSON(
            message.erc20MultisigTopologyPending
          )
        : undefined);
    message.proofOfWork !== undefined &&
      (obj.proofOfWork = message.proofOfWork
        ? ProofOfWork.toJSON(message.proofOfWork)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Payload>, I>>(object: I): Payload {
    const message = createBasePayload();
    message.activeAssets =
      object.activeAssets !== undefined && object.activeAssets !== null
        ? ActiveAssets.fromPartial(object.activeAssets)
        : undefined;
    message.pendingAssets =
      object.pendingAssets !== undefined && object.pendingAssets !== null
        ? PendingAssets.fromPartial(object.pendingAssets)
        : undefined;
    message.bankingWithdrawals =
      object.bankingWithdrawals !== undefined &&
      object.bankingWithdrawals !== null
        ? BankingWithdrawals.fromPartial(object.bankingWithdrawals)
        : undefined;
    message.bankingDeposits =
      object.bankingDeposits !== undefined && object.bankingDeposits !== null
        ? BankingDeposits.fromPartial(object.bankingDeposits)
        : undefined;
    message.bankingSeen =
      object.bankingSeen !== undefined && object.bankingSeen !== null
        ? BankingSeen.fromPartial(object.bankingSeen)
        : undefined;
    message.bankingAssetActions =
      object.bankingAssetActions !== undefined &&
      object.bankingAssetActions !== null
        ? BankingAssetActions.fromPartial(object.bankingAssetActions)
        : undefined;
    message.checkpoint =
      object.checkpoint !== undefined && object.checkpoint !== null
        ? Checkpoint.fromPartial(object.checkpoint)
        : undefined;
    message.collateralAccounts =
      object.collateralAccounts !== undefined &&
      object.collateralAccounts !== null
        ? CollateralAccounts.fromPartial(object.collateralAccounts)
        : undefined;
    message.collateralAssets =
      object.collateralAssets !== undefined && object.collateralAssets !== null
        ? CollateralAssets.fromPartial(object.collateralAssets)
        : undefined;
    message.delegationActive =
      object.delegationActive !== undefined && object.delegationActive !== null
        ? DelegationActive.fromPartial(object.delegationActive)
        : undefined;
    message.delegationPending =
      object.delegationPending !== undefined &&
      object.delegationPending !== null
        ? DelegationPending.fromPartial(object.delegationPending)
        : undefined;
    message.delegationAuto =
      object.delegationAuto !== undefined && object.delegationAuto !== null
        ? DelegationAuto.fromPartial(object.delegationAuto)
        : undefined;
    message.governanceActive =
      object.governanceActive !== undefined && object.governanceActive !== null
        ? GovernanceActive.fromPartial(object.governanceActive)
        : undefined;
    message.governanceEnacted =
      object.governanceEnacted !== undefined &&
      object.governanceEnacted !== null
        ? GovernanceEnacted.fromPartial(object.governanceEnacted)
        : undefined;
    message.stakingAccounts =
      object.stakingAccounts !== undefined && object.stakingAccounts !== null
        ? StakingAccounts.fromPartial(object.stakingAccounts)
        : undefined;
    message.matchingBook =
      object.matchingBook !== undefined && object.matchingBook !== null
        ? MatchingBook.fromPartial(object.matchingBook)
        : undefined;
    message.networkParameters =
      object.networkParameters !== undefined &&
      object.networkParameters !== null
        ? NetParams.fromPartial(object.networkParameters)
        : undefined;
    message.executionMarkets =
      object.executionMarkets !== undefined && object.executionMarkets !== null
        ? ExecutionMarkets.fromPartial(object.executionMarkets)
        : undefined;
    message.marketPositions =
      object.marketPositions !== undefined && object.marketPositions !== null
        ? MarketPositions.fromPartial(object.marketPositions)
        : undefined;
    message.appState =
      object.appState !== undefined && object.appState !== null
        ? AppState.fromPartial(object.appState)
        : undefined;
    message.epoch =
      object.epoch !== undefined && object.epoch !== null
        ? EpochState.fromPartial(object.epoch)
        : undefined;
    message.rewardsPendingPayouts =
      object.rewardsPendingPayouts !== undefined &&
      object.rewardsPendingPayouts !== null
        ? RewardsPendingPayouts.fromPartial(object.rewardsPendingPayouts)
        : undefined;
    message.governanceNode =
      object.governanceNode !== undefined && object.governanceNode !== null
        ? GovernanceNode.fromPartial(object.governanceNode)
        : undefined;
    message.limitState =
      object.limitState !== undefined && object.limitState !== null
        ? LimitState.fromPartial(object.limitState)
        : undefined;
    message.voteSpamPolicy =
      object.voteSpamPolicy !== undefined && object.voteSpamPolicy !== null
        ? VoteSpamPolicy.fromPartial(object.voteSpamPolicy)
        : undefined;
    message.simpleSpamPolicy =
      object.simpleSpamPolicy !== undefined && object.simpleSpamPolicy !== null
        ? SimpleSpamPolicy.fromPartial(object.simpleSpamPolicy)
        : undefined;
    message.notary =
      object.notary !== undefined && object.notary !== null
        ? Notary.fromPartial(object.notary)
        : undefined;
    message.replayProtection =
      object.replayProtection !== undefined && object.replayProtection !== null
        ? ReplayProtection.fromPartial(object.replayProtection)
        : undefined;
    message.futureState =
      object.futureState !== undefined && object.futureState !== null
        ? FutureState.fromPartial(object.futureState)
        : undefined;
    message.eventForwarder =
      object.eventForwarder !== undefined && object.eventForwarder !== null
        ? EventForwarder.fromPartial(object.eventForwarder)
        : undefined;
    message.stakeVerifierDeposited =
      object.stakeVerifierDeposited !== undefined &&
      object.stakeVerifierDeposited !== null
        ? StakeVerifierDeposited.fromPartial(object.stakeVerifierDeposited)
        : undefined;
    message.stakeVerifierRemoved =
      object.stakeVerifierRemoved !== undefined &&
      object.stakeVerifierRemoved !== null
        ? StakeVerifierRemoved.fromPartial(object.stakeVerifierRemoved)
        : undefined;
    message.witness =
      object.witness !== undefined && object.witness !== null
        ? Witness.fromPartial(object.witness)
        : undefined;
    message.delegationLastReconciliationTime =
      object.delegationLastReconciliationTime !== undefined &&
      object.delegationLastReconciliationTime !== null
        ? DelegationLastReconciliationTime.fromPartial(
            object.delegationLastReconciliationTime
          )
        : undefined;
    message.topology =
      object.topology !== undefined && object.topology !== null
        ? Topology.fromPartial(object.topology)
        : undefined;
    message.oracleData =
      object.oracleData !== undefined && object.oracleData !== null
        ? OracleDataBatch.fromPartial(object.oracleData)
        : undefined;
    message.liquidityParameters =
      object.liquidityParameters !== undefined &&
      object.liquidityParameters !== null
        ? LiquidityParameters.fromPartial(object.liquidityParameters)
        : undefined;
    message.liquidityPendingProvisions =
      object.liquidityPendingProvisions !== undefined &&
      object.liquidityPendingProvisions !== null
        ? LiquidityPendingProvisions.fromPartial(
            object.liquidityPendingProvisions
          )
        : undefined;
    message.liquidityPartiesLiquidityOrders =
      object.liquidityPartiesLiquidityOrders !== undefined &&
      object.liquidityPartiesLiquidityOrders !== null
        ? LiquidityPartiesLiquidityOrders.fromPartial(
            object.liquidityPartiesLiquidityOrders
          )
        : undefined;
    message.liquidityPartiesOrders =
      object.liquidityPartiesOrders !== undefined &&
      object.liquidityPartiesOrders !== null
        ? LiquidityPartiesOrders.fromPartial(object.liquidityPartiesOrders)
        : undefined;
    message.liquidityProvisions =
      object.liquidityProvisions !== undefined &&
      object.liquidityProvisions !== null
        ? LiquidityProvisions.fromPartial(object.liquidityProvisions)
        : undefined;
    message.liquiditySupplied =
      object.liquiditySupplied !== undefined &&
      object.liquiditySupplied !== null
        ? LiquiditySupplied.fromPartial(object.liquiditySupplied)
        : undefined;
    message.liquidityTarget =
      object.liquidityTarget !== undefined && object.liquidityTarget !== null
        ? LiquidityTarget.fromPartial(object.liquidityTarget)
        : undefined;
    message.floatingPointConsensus =
      object.floatingPointConsensus !== undefined &&
      object.floatingPointConsensus !== null
        ? FloatingPointConsensus.fromPartial(object.floatingPointConsensus)
        : undefined;
    message.feesTracker =
      object.feesTracker !== undefined && object.feesTracker !== null
        ? FeesTracker.fromPartial(object.feesTracker)
        : undefined;
    message.marketTracker =
      object.marketTracker !== undefined && object.marketTracker !== null
        ? MarketTracker.fromPartial(object.marketTracker)
        : undefined;
    message.bankingRecurringTransfers =
      object.bankingRecurringTransfers !== undefined &&
      object.bankingRecurringTransfers !== null
        ? BankingRecurringTransfers.fromPartial(
            object.bankingRecurringTransfers
          )
        : undefined;
    message.bankingScheduledTransfers =
      object.bankingScheduledTransfers !== undefined &&
      object.bankingScheduledTransfers !== null
        ? BankingScheduledTransfers.fromPartial(
            object.bankingScheduledTransfers
          )
        : undefined;
    message.erc20MultisigTopologyVerified =
      object.erc20MultisigTopologyVerified !== undefined &&
      object.erc20MultisigTopologyVerified !== null
        ? ERC20MultiSigTopologyVerified.fromPartial(
            object.erc20MultisigTopologyVerified
          )
        : undefined;
    message.erc20MultisigTopologyPending =
      object.erc20MultisigTopologyPending !== undefined &&
      object.erc20MultisigTopologyPending !== null
        ? ERC20MultiSigTopologyPending.fromPartial(
            object.erc20MultisigTopologyPending
          )
        : undefined;
    message.proofOfWork =
      object.proofOfWork !== undefined && object.proofOfWork !== null
        ? ProofOfWork.fromPartial(object.proofOfWork)
        : undefined;
    return message;
  },
};

function createBaseTimestampedOpenInterest(): TimestampedOpenInterest {
  return { openInterest: "0", time: "0" };
}

export const TimestampedOpenInterest = {
  encode(
    message: TimestampedOpenInterest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.openInterest !== "0") {
      writer.uint32(8).uint64(message.openInterest);
    }
    if (message.time !== "0") {
      writer.uint32(16).int64(message.time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TimestampedOpenInterest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedOpenInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.openInterest = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.time = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimestampedOpenInterest {
    return {
      openInterest: isSet(object.openInterest)
        ? String(object.openInterest)
        : "0",
      time: isSet(object.time) ? String(object.time) : "0",
    };
  },

  toJSON(message: TimestampedOpenInterest): unknown {
    const obj: any = {};
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimestampedOpenInterest>, I>>(
    object: I
  ): TimestampedOpenInterest {
    const message = createBaseTimestampedOpenInterest();
    message.openInterest = object.openInterest ?? "0";
    message.time = object.time ?? "0";
    return message;
  },
};

function createBaseLiquidityTarget(): LiquidityTarget {
  return {
    marketId: "",
    currentTime: "0",
    scheduledTruncate: "0",
    currentOpenInterests: [],
    previousOpenInterests: [],
    maxOpenInterests: undefined,
  };
}

export const LiquidityTarget = {
  encode(
    message: LiquidityTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.currentTime !== "0") {
      writer.uint32(16).int64(message.currentTime);
    }
    if (message.scheduledTruncate !== "0") {
      writer.uint32(24).int64(message.scheduledTruncate);
    }
    writer.uint32(34).fork();
    for (const v of message.currentOpenInterests) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.previousOpenInterests) {
      TimestampedOpenInterest.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.maxOpenInterests !== undefined) {
      TimestampedOpenInterest.encode(
        message.maxOpenInterests,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.currentTime = longToString(reader.int64() as Long);
          break;
        case 3:
          message.scheduledTruncate = longToString(reader.int64() as Long);
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.currentOpenInterests.push(
                longToString(reader.uint64() as Long)
              );
            }
          } else {
            message.currentOpenInterests.push(
              longToString(reader.uint64() as Long)
            );
          }
          break;
        case 5:
          message.previousOpenInterests.push(
            TimestampedOpenInterest.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.maxOpenInterests = TimestampedOpenInterest.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityTarget {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      currentTime: isSet(object.currentTime) ? String(object.currentTime) : "0",
      scheduledTruncate: isSet(object.scheduledTruncate)
        ? String(object.scheduledTruncate)
        : "0",
      currentOpenInterests: Array.isArray(object?.currentOpenInterests)
        ? object.currentOpenInterests.map((e: any) => String(e))
        : [],
      previousOpenInterests: Array.isArray(object?.previousOpenInterests)
        ? object.previousOpenInterests.map((e: any) =>
            TimestampedOpenInterest.fromJSON(e)
          )
        : [],
      maxOpenInterests: isSet(object.maxOpenInterests)
        ? TimestampedOpenInterest.fromJSON(object.maxOpenInterests)
        : undefined,
    };
  },

  toJSON(message: LiquidityTarget): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.currentTime !== undefined &&
      (obj.currentTime = message.currentTime);
    message.scheduledTruncate !== undefined &&
      (obj.scheduledTruncate = message.scheduledTruncate);
    if (message.currentOpenInterests) {
      obj.currentOpenInterests = message.currentOpenInterests.map((e) => e);
    } else {
      obj.currentOpenInterests = [];
    }
    if (message.previousOpenInterests) {
      obj.previousOpenInterests = message.previousOpenInterests.map((e) =>
        e ? TimestampedOpenInterest.toJSON(e) : undefined
      );
    } else {
      obj.previousOpenInterests = [];
    }
    message.maxOpenInterests !== undefined &&
      (obj.maxOpenInterests = message.maxOpenInterests
        ? TimestampedOpenInterest.toJSON(message.maxOpenInterests)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityTarget>, I>>(
    object: I
  ): LiquidityTarget {
    const message = createBaseLiquidityTarget();
    message.marketId = object.marketId ?? "";
    message.currentTime = object.currentTime ?? "0";
    message.scheduledTruncate = object.scheduledTruncate ?? "0";
    message.currentOpenInterests =
      object.currentOpenInterests?.map((e) => e) || [];
    message.previousOpenInterests =
      object.previousOpenInterests?.map((e) =>
        TimestampedOpenInterest.fromPartial(e)
      ) || [];
    message.maxOpenInterests =
      object.maxOpenInterests !== undefined && object.maxOpenInterests !== null
        ? TimestampedOpenInterest.fromPartial(object.maxOpenInterests)
        : undefined;
    return message;
  },
};

function createBaseLiquidityPriceProbabilityPair(): LiquidityPriceProbabilityPair {
  return { price: "", probability: "" };
}

export const LiquidityPriceProbabilityPair = {
  encode(
    message: LiquidityPriceProbabilityPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.probability !== "") {
      writer.uint32(18).string(message.probability);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityPriceProbabilityPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPriceProbabilityPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.probability = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityPriceProbabilityPair {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      probability: isSet(object.probability) ? String(object.probability) : "",
    };
  },

  toJSON(message: LiquidityPriceProbabilityPair): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.probability !== undefined &&
      (obj.probability = message.probability);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityPriceProbabilityPair>, I>>(
    object: I
  ): LiquidityPriceProbabilityPair {
    const message = createBaseLiquidityPriceProbabilityPair();
    message.price = object.price ?? "";
    message.probability = object.probability ?? "";
    return message;
  },
};

function createBaseLiquiditySupplied(): LiquiditySupplied {
  return { marketId: "", consensusReached: false, bidCache: [], askCache: [] };
}

export const LiquiditySupplied = {
  encode(
    message: LiquiditySupplied,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.consensusReached === true) {
      writer.uint32(16).bool(message.consensusReached);
    }
    for (const v of message.bidCache) {
      LiquidityPriceProbabilityPair.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.askCache) {
      LiquidityPriceProbabilityPair.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquiditySupplied {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquiditySupplied();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.consensusReached = reader.bool();
          break;
        case 3:
          message.bidCache.push(
            LiquidityPriceProbabilityPair.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.askCache.push(
            LiquidityPriceProbabilityPair.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquiditySupplied {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      consensusReached: isSet(object.consensusReached)
        ? Boolean(object.consensusReached)
        : false,
      bidCache: Array.isArray(object?.bidCache)
        ? object.bidCache.map((e: any) =>
            LiquidityPriceProbabilityPair.fromJSON(e)
          )
        : [],
      askCache: Array.isArray(object?.askCache)
        ? object.askCache.map((e: any) =>
            LiquidityPriceProbabilityPair.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LiquiditySupplied): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.consensusReached !== undefined &&
      (obj.consensusReached = message.consensusReached);
    if (message.bidCache) {
      obj.bidCache = message.bidCache.map((e) =>
        e ? LiquidityPriceProbabilityPair.toJSON(e) : undefined
      );
    } else {
      obj.bidCache = [];
    }
    if (message.askCache) {
      obj.askCache = message.askCache.map((e) =>
        e ? LiquidityPriceProbabilityPair.toJSON(e) : undefined
      );
    } else {
      obj.askCache = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquiditySupplied>, I>>(
    object: I
  ): LiquiditySupplied {
    const message = createBaseLiquiditySupplied();
    message.marketId = object.marketId ?? "";
    message.consensusReached = object.consensusReached ?? false;
    message.bidCache =
      object.bidCache?.map((e) =>
        LiquidityPriceProbabilityPair.fromPartial(e)
      ) || [];
    message.askCache =
      object.askCache?.map((e) =>
        LiquidityPriceProbabilityPair.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseOracleDataBatch(): OracleDataBatch {
  return { oracleData: [] };
}

export const OracleDataBatch = {
  encode(
    message: OracleDataBatch,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracleData) {
      OracleData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleDataBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleDataBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleData.push(OracleData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleDataBatch {
    return {
      oracleData: Array.isArray(object?.oracleData)
        ? object.oracleData.map((e: any) => OracleData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OracleDataBatch): unknown {
    const obj: any = {};
    if (message.oracleData) {
      obj.oracleData = message.oracleData.map((e) =>
        e ? OracleData.toJSON(e) : undefined
      );
    } else {
      obj.oracleData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleDataBatch>, I>>(
    object: I
  ): OracleDataBatch {
    const message = createBaseOracleDataBatch();
    message.oracleData =
      object.oracleData?.map((e) => OracleData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracleData(): OracleData {
  return { pubKeys: [], data: [] };
}

export const OracleData = {
  encode(
    message: OracleData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pubKeys) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.data) {
      OracleDataPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeys.push(reader.string());
          break;
        case 2:
          message.data.push(OracleDataPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleData {
    return {
      pubKeys: Array.isArray(object?.pubKeys)
        ? object.pubKeys.map((e: any) => String(e))
        : [],
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => OracleDataPair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OracleData): unknown {
    const obj: any = {};
    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map((e) => e);
    } else {
      obj.pubKeys = [];
    }
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? OracleDataPair.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleData>, I>>(
    object: I
  ): OracleData {
    const message = createBaseOracleData();
    message.pubKeys = object.pubKeys?.map((e) => e) || [];
    message.data = object.data?.map((e) => OracleDataPair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracleDataPair(): OracleDataPair {
  return { key: "", value: "" };
}

export const OracleDataPair = {
  encode(
    message: OracleDataPair,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleDataPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleDataPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleDataPair {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: OracleDataPair): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleDataPair>, I>>(
    object: I
  ): OracleDataPair {
    const message = createBaseOracleDataPair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseWitness(): Witness {
  return { resources: [], needResendResources: [] };
}

export const Witness = {
  encode(
    message: Witness,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.needResendResources) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Witness {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWitness();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(Resource.decode(reader, reader.uint32()));
          break;
        case 2:
          message.needResendResources.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Witness {
    return {
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      needResendResources: Array.isArray(object?.needResendResources)
        ? object.needResendResources.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Witness): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? Resource.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    if (message.needResendResources) {
      obj.needResendResources = message.needResendResources.map((e) => e);
    } else {
      obj.needResendResources = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Witness>, I>>(object: I): Witness {
    const message = createBaseWitness();
    message.resources =
      object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.needResendResources =
      object.needResendResources?.map((e) => e) || [];
    return message;
  },
};

function createBaseResource(): Resource {
  return { id: "", checkUntil: "0", votes: [], state: 0 };
}

export const Resource = {
  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.checkUntil !== "0") {
      writer.uint32(16).int64(message.checkUntil);
    }
    for (const v of message.votes) {
      writer.uint32(26).string(v!);
    }
    if (message.state !== 0) {
      writer.uint32(32).uint32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.checkUntil = longToString(reader.int64() as Long);
          break;
        case 3:
          message.votes.push(reader.string());
          break;
        case 4:
          message.state = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      checkUntil: isSet(object.checkUntil) ? String(object.checkUntil) : "0",
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => String(e))
        : [],
      state: isSet(object.state) ? Number(object.state) : 0,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.checkUntil !== undefined && (obj.checkUntil = message.checkUntil);
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    message.state !== undefined && (obj.state = Math.round(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.id = object.id ?? "";
    message.checkUntil = object.checkUntil ?? "0";
    message.votes = object.votes?.map((e) => e) || [];
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseEventForwarder(): EventForwarder {
  return { ackedEvents: [] };
}

export const EventForwarder = {
  encode(
    message: EventForwarder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ackedEvents) {
      ChainEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventForwarder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventForwarder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackedEvents.push(ChainEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventForwarder {
    return {
      ackedEvents: Array.isArray(object?.ackedEvents)
        ? object.ackedEvents.map((e: any) => ChainEvent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventForwarder): unknown {
    const obj: any = {};
    if (message.ackedEvents) {
      obj.ackedEvents = message.ackedEvents.map((e) =>
        e ? ChainEvent.toJSON(e) : undefined
      );
    } else {
      obj.ackedEvents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventForwarder>, I>>(
    object: I
  ): EventForwarder {
    const message = createBaseEventForwarder();
    message.ackedEvents =
      object.ackedEvents?.map((e) => ChainEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCollateralAccounts(): CollateralAccounts {
  return { accounts: [] };
}

export const CollateralAccounts = {
  encode(
    message: CollateralAccounts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralAccounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralAccounts {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CollateralAccounts): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollateralAccounts>, I>>(
    object: I
  ): CollateralAccounts {
    const message = createBaseCollateralAccounts();
    message.accounts =
      object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCollateralAssets(): CollateralAssets {
  return { assets: [] };
}

export const CollateralAssets = {
  encode(
    message: CollateralAssets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollateralAssets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateralAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralAssets {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CollateralAssets): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollateralAssets>, I>>(
    object: I
  ): CollateralAssets {
    const message = createBaseCollateralAssets();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseActiveAssets(): ActiveAssets {
  return { assets: [] };
}

export const ActiveAssets = {
  encode(
    message: ActiveAssets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveAssets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveAssets {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ActiveAssets): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveAssets>, I>>(
    object: I
  ): ActiveAssets {
    const message = createBaseActiveAssets();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBasePendingAssets(): PendingAssets {
  return { assets: [] };
}

export const PendingAssets = {
  encode(
    message: PendingAssets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingAssets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingAssets {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PendingAssets): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingAssets>, I>>(
    object: I
  ): PendingAssets {
    const message = createBasePendingAssets();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWithdrawal(): Withdrawal {
  return { ref: "", withdrawal: undefined };
}

export const Withdrawal = {
  encode(
    message: Withdrawal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ref !== "") {
      writer.uint32(10).string(message.ref);
    }
    if (message.withdrawal !== undefined) {
      Withdrawal1.encode(message.withdrawal, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Withdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ref = reader.string();
          break;
        case 2:
          message.withdrawal = Withdrawal1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Withdrawal {
    return {
      ref: isSet(object.ref) ? String(object.ref) : "",
      withdrawal: isSet(object.withdrawal)
        ? Withdrawal1.fromJSON(object.withdrawal)
        : undefined,
    };
  },

  toJSON(message: Withdrawal): unknown {
    const obj: any = {};
    message.ref !== undefined && (obj.ref = message.ref);
    message.withdrawal !== undefined &&
      (obj.withdrawal = message.withdrawal
        ? Withdrawal1.toJSON(message.withdrawal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Withdrawal>, I>>(
    object: I
  ): Withdrawal {
    const message = createBaseWithdrawal();
    message.ref = object.ref ?? "";
    message.withdrawal =
      object.withdrawal !== undefined && object.withdrawal !== null
        ? Withdrawal1.fromPartial(object.withdrawal)
        : undefined;
    return message;
  },
};

function createBaseDeposit(): Deposit {
  return { id: "", deposit: undefined };
}

export const Deposit = {
  encode(
    message: Deposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.deposit !== undefined) {
      Deposit2.encode(message.deposit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.deposit = Deposit2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Deposit {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      deposit: isSet(object.deposit)
        ? Deposit2.fromJSON(object.deposit)
        : undefined,
    };
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Deposit2.toJSON(message.deposit)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Deposit>, I>>(object: I): Deposit {
    const message = createBaseDeposit();
    message.id = object.id ?? "";
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? Deposit2.fromPartial(object.deposit)
        : undefined;
    return message;
  },
};

function createBaseTxRef(): TxRef {
  return { asset: "", blockNr: "0", hash: "", logIndex: "0" };
}

export const TxRef = {
  encode(message: TxRef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.blockNr !== "0") {
      writer.uint32(16).uint64(message.blockNr);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    if (message.logIndex !== "0") {
      writer.uint32(32).uint64(message.logIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxRef {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.blockNr = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.hash = reader.string();
          break;
        case 4:
          message.logIndex = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TxRef {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      blockNr: isSet(object.blockNr) ? String(object.blockNr) : "0",
      hash: isSet(object.hash) ? String(object.hash) : "",
      logIndex: isSet(object.logIndex) ? String(object.logIndex) : "0",
    };
  },

  toJSON(message: TxRef): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.blockNr !== undefined && (obj.blockNr = message.blockNr);
    message.hash !== undefined && (obj.hash = message.hash);
    message.logIndex !== undefined && (obj.logIndex = message.logIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxRef>, I>>(object: I): TxRef {
    const message = createBaseTxRef();
    message.asset = object.asset ?? "";
    message.blockNr = object.blockNr ?? "0";
    message.hash = object.hash ?? "";
    message.logIndex = object.logIndex ?? "0";
    return message;
  },
};

function createBaseAssetAction(): AssetAction {
  return {
    id: "",
    state: 0,
    asset: "",
    blockNumber: "0",
    txIndex: "0",
    hash: "",
    builtinDeposit: undefined,
    erc20Deposit: undefined,
    assetList: undefined,
  };
}

export const AssetAction = {
  encode(
    message: AssetAction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(16).uint32(message.state);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.blockNumber !== "0") {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txIndex !== "0") {
      writer.uint32(40).uint64(message.txIndex);
    }
    if (message.hash !== "") {
      writer.uint32(50).string(message.hash);
    }
    if (message.builtinDeposit !== undefined) {
      BuiltinAssetDeposit.encode(
        message.builtinDeposit,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.erc20Deposit !== undefined) {
      ERC20Deposit.encode(
        message.erc20Deposit,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.assetList !== undefined) {
      ERC20AssetList.encode(
        message.assetList,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.state = reader.uint32();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.blockNumber = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.txIndex = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.hash = reader.string();
          break;
        case 7:
          message.builtinDeposit = BuiltinAssetDeposit.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.erc20Deposit = ERC20Deposit.decode(reader, reader.uint32());
          break;
        case 9:
          message.assetList = ERC20AssetList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetAction {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      state: isSet(object.state) ? Number(object.state) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
      blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
      txIndex: isSet(object.txIndex) ? String(object.txIndex) : "0",
      hash: isSet(object.hash) ? String(object.hash) : "",
      builtinDeposit: isSet(object.builtinDeposit)
        ? BuiltinAssetDeposit.fromJSON(object.builtinDeposit)
        : undefined,
      erc20Deposit: isSet(object.erc20Deposit)
        ? ERC20Deposit.fromJSON(object.erc20Deposit)
        : undefined,
      assetList: isSet(object.assetList)
        ? ERC20AssetList.fromJSON(object.assetList)
        : undefined,
    };
  },

  toJSON(message: AssetAction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.state !== undefined && (obj.state = Math.round(message.state));
    message.asset !== undefined && (obj.asset = message.asset);
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    message.txIndex !== undefined && (obj.txIndex = message.txIndex);
    message.hash !== undefined && (obj.hash = message.hash);
    message.builtinDeposit !== undefined &&
      (obj.builtinDeposit = message.builtinDeposit
        ? BuiltinAssetDeposit.toJSON(message.builtinDeposit)
        : undefined);
    message.erc20Deposit !== undefined &&
      (obj.erc20Deposit = message.erc20Deposit
        ? ERC20Deposit.toJSON(message.erc20Deposit)
        : undefined);
    message.assetList !== undefined &&
      (obj.assetList = message.assetList
        ? ERC20AssetList.toJSON(message.assetList)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetAction>, I>>(
    object: I
  ): AssetAction {
    const message = createBaseAssetAction();
    message.id = object.id ?? "";
    message.state = object.state ?? 0;
    message.asset = object.asset ?? "";
    message.blockNumber = object.blockNumber ?? "0";
    message.txIndex = object.txIndex ?? "0";
    message.hash = object.hash ?? "";
    message.builtinDeposit =
      object.builtinDeposit !== undefined && object.builtinDeposit !== null
        ? BuiltinAssetDeposit.fromPartial(object.builtinDeposit)
        : undefined;
    message.erc20Deposit =
      object.erc20Deposit !== undefined && object.erc20Deposit !== null
        ? ERC20Deposit.fromPartial(object.erc20Deposit)
        : undefined;
    message.assetList =
      object.assetList !== undefined && object.assetList !== null
        ? ERC20AssetList.fromPartial(object.assetList)
        : undefined;
    return message;
  },
};

function createBaseBankingWithdrawals(): BankingWithdrawals {
  return { withdrawals: [] };
}

export const BankingWithdrawals = {
  encode(
    message: BankingWithdrawals,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankingWithdrawals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankingWithdrawals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawals.push(Withdrawal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BankingWithdrawals {
    return {
      withdrawals: Array.isArray(object?.withdrawals)
        ? object.withdrawals.map((e: any) => Withdrawal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BankingWithdrawals): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map((e) =>
        e ? Withdrawal.toJSON(e) : undefined
      );
    } else {
      obj.withdrawals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BankingWithdrawals>, I>>(
    object: I
  ): BankingWithdrawals {
    const message = createBaseBankingWithdrawals();
    message.withdrawals =
      object.withdrawals?.map((e) => Withdrawal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBankingDeposits(): BankingDeposits {
  return { deposit: [] };
}

export const BankingDeposits = {
  encode(
    message: BankingDeposits,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.deposit) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankingDeposits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankingDeposits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit.push(Deposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BankingDeposits {
    return {
      deposit: Array.isArray(object?.deposit)
        ? object.deposit.map((e: any) => Deposit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BankingDeposits): unknown {
    const obj: any = {};
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) =>
        e ? Deposit.toJSON(e) : undefined
      );
    } else {
      obj.deposit = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BankingDeposits>, I>>(
    object: I
  ): BankingDeposits {
    const message = createBaseBankingDeposits();
    message.deposit = object.deposit?.map((e) => Deposit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBankingSeen(): BankingSeen {
  return { refs: [] };
}

export const BankingSeen = {
  encode(
    message: BankingSeen,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.refs) {
      TxRef.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankingSeen {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankingSeen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refs.push(TxRef.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BankingSeen {
    return {
      refs: Array.isArray(object?.refs)
        ? object.refs.map((e: any) => TxRef.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BankingSeen): unknown {
    const obj: any = {};
    if (message.refs) {
      obj.refs = message.refs.map((e) => (e ? TxRef.toJSON(e) : undefined));
    } else {
      obj.refs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BankingSeen>, I>>(
    object: I
  ): BankingSeen {
    const message = createBaseBankingSeen();
    message.refs = object.refs?.map((e) => TxRef.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBankingAssetActions(): BankingAssetActions {
  return { assetAction: [] };
}

export const BankingAssetActions = {
  encode(
    message: BankingAssetActions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetAction) {
      AssetAction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankingAssetActions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankingAssetActions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetAction.push(AssetAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BankingAssetActions {
    return {
      assetAction: Array.isArray(object?.assetAction)
        ? object.assetAction.map((e: any) => AssetAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BankingAssetActions): unknown {
    const obj: any = {};
    if (message.assetAction) {
      obj.assetAction = message.assetAction.map((e) =>
        e ? AssetAction.toJSON(e) : undefined
      );
    } else {
      obj.assetAction = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BankingAssetActions>, I>>(
    object: I
  ): BankingAssetActions {
    const message = createBaseBankingAssetActions();
    message.assetAction =
      object.assetAction?.map((e) => AssetAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBankingRecurringTransfers(): BankingRecurringTransfers {
  return { recurringTranfers: undefined };
}

export const BankingRecurringTransfers = {
  encode(
    message: BankingRecurringTransfers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recurringTranfers !== undefined) {
      RecurringTransfers.encode(
        message.recurringTranfers,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BankingRecurringTransfers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankingRecurringTransfers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recurringTranfers = RecurringTransfers.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BankingRecurringTransfers {
    return {
      recurringTranfers: isSet(object.recurringTranfers)
        ? RecurringTransfers.fromJSON(object.recurringTranfers)
        : undefined,
    };
  },

  toJSON(message: BankingRecurringTransfers): unknown {
    const obj: any = {};
    message.recurringTranfers !== undefined &&
      (obj.recurringTranfers = message.recurringTranfers
        ? RecurringTransfers.toJSON(message.recurringTranfers)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BankingRecurringTransfers>, I>>(
    object: I
  ): BankingRecurringTransfers {
    const message = createBaseBankingRecurringTransfers();
    message.recurringTranfers =
      object.recurringTranfers !== undefined &&
      object.recurringTranfers !== null
        ? RecurringTransfers.fromPartial(object.recurringTranfers)
        : undefined;
    return message;
  },
};

function createBaseBankingScheduledTransfers(): BankingScheduledTransfers {
  return { transfersAtTime: [] };
}

export const BankingScheduledTransfers = {
  encode(
    message: BankingScheduledTransfers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transfersAtTime) {
      ScheduledTransferAtTime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BankingScheduledTransfers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankingScheduledTransfers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersAtTime.push(
            ScheduledTransferAtTime.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BankingScheduledTransfers {
    return {
      transfersAtTime: Array.isArray(object?.transfersAtTime)
        ? object.transfersAtTime.map((e: any) =>
            ScheduledTransferAtTime.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: BankingScheduledTransfers): unknown {
    const obj: any = {};
    if (message.transfersAtTime) {
      obj.transfersAtTime = message.transfersAtTime.map((e) =>
        e ? ScheduledTransferAtTime.toJSON(e) : undefined
      );
    } else {
      obj.transfersAtTime = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BankingScheduledTransfers>, I>>(
    object: I
  ): BankingScheduledTransfers {
    const message = createBaseBankingScheduledTransfers();
    message.transfersAtTime =
      object.transfersAtTime?.map((e) =>
        ScheduledTransferAtTime.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCheckpoint(): Checkpoint {
  return { nextCp: "0" };
}

export const Checkpoint = {
  encode(
    message: Checkpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nextCp !== "0") {
      writer.uint32(8).int64(message.nextCp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checkpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextCp = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Checkpoint {
    return {
      nextCp: isSet(object.nextCp) ? String(object.nextCp) : "0",
    };
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.nextCp !== undefined && (obj.nextCp = message.nextCp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Checkpoint>, I>>(
    object: I
  ): Checkpoint {
    const message = createBaseCheckpoint();
    message.nextCp = object.nextCp ?? "0";
    return message;
  },
};

function createBaseDelegationLastReconciliationTime(): DelegationLastReconciliationTime {
  return { lastReconciliationTime: "0" };
}

export const DelegationLastReconciliationTime = {
  encode(
    message: DelegationLastReconciliationTime,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastReconciliationTime !== "0") {
      writer.uint32(8).int64(message.lastReconciliationTime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DelegationLastReconciliationTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationLastReconciliationTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastReconciliationTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationLastReconciliationTime {
    return {
      lastReconciliationTime: isSet(object.lastReconciliationTime)
        ? String(object.lastReconciliationTime)
        : "0",
    };
  },

  toJSON(message: DelegationLastReconciliationTime): unknown {
    const obj: any = {};
    message.lastReconciliationTime !== undefined &&
      (obj.lastReconciliationTime = message.lastReconciliationTime);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<DelegationLastReconciliationTime>, I>
  >(object: I): DelegationLastReconciliationTime {
    const message = createBaseDelegationLastReconciliationTime();
    message.lastReconciliationTime = object.lastReconciliationTime ?? "0";
    return message;
  },
};

function createBaseDelegationActive(): DelegationActive {
  return { delegations: [] };
}

export const DelegationActive = {
  encode(
    message: DelegationActive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationActive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationActive {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DelegationActive): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationActive>, I>>(
    object: I
  ): DelegationActive {
    const message = createBaseDelegationActive();
    message.delegations =
      object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegationPending(): DelegationPending {
  return { delegations: [], undelegation: [] };
}

export const DelegationPending = {
  encode(
    message: DelegationPending,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.undelegation) {
      Delegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationPending {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationPending();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.undelegation.push(Delegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationPending {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
      undelegation: Array.isArray(object?.undelegation)
        ? object.undelegation.map((e: any) => Delegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DelegationPending): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    if (message.undelegation) {
      obj.undelegation = message.undelegation.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.undelegation = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationPending>, I>>(
    object: I
  ): DelegationPending {
    const message = createBaseDelegationPending();
    message.delegations =
      object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.undelegation =
      object.undelegation?.map((e) => Delegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegationAuto(): DelegationAuto {
  return { parties: [] };
}

export const DelegationAuto = {
  encode(
    message: DelegationAuto,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.parties) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationAuto {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationAuto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parties.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationAuto {
    return {
      parties: Array.isArray(object?.parties)
        ? object.parties.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DelegationAuto): unknown {
    const obj: any = {};
    if (message.parties) {
      obj.parties = message.parties.map((e) => e);
    } else {
      obj.parties = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationAuto>, I>>(
    object: I
  ): DelegationAuto {
    const message = createBaseDelegationAuto();
    message.parties = object.parties?.map((e) => e) || [];
    return message;
  },
};

function createBaseProposalData(): ProposalData {
  return { proposal: undefined, yes: [], no: [], invalid: [] };
}

export const ProposalData = {
  encode(
    message: ProposalData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.yes) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.no) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.invalid) {
      Vote.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 2:
          message.yes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.no.push(Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.invalid.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalData {
    return {
      proposal: isSet(object.proposal)
        ? Proposal.fromJSON(object.proposal)
        : undefined,
      yes: Array.isArray(object?.yes)
        ? object.yes.map((e: any) => Vote.fromJSON(e))
        : [],
      no: Array.isArray(object?.no)
        ? object.no.map((e: any) => Vote.fromJSON(e))
        : [],
      invalid: Array.isArray(object?.invalid)
        ? object.invalid.map((e: any) => Vote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProposalData): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    if (message.yes) {
      obj.yes = message.yes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.yes = [];
    }
    if (message.no) {
      obj.no = message.no.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.no = [];
    }
    if (message.invalid) {
      obj.invalid = message.invalid.map((e) =>
        e ? Vote.toJSON(e) : undefined
      );
    } else {
      obj.invalid = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalData>, I>>(
    object: I
  ): ProposalData {
    const message = createBaseProposalData();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    message.yes = object.yes?.map((e) => Vote.fromPartial(e)) || [];
    message.no = object.no?.map((e) => Vote.fromPartial(e)) || [];
    message.invalid = object.invalid?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGovernanceEnacted(): GovernanceEnacted {
  return { proposals: [] };
}

export const GovernanceEnacted = {
  encode(
    message: GovernanceEnacted,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      ProposalData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovernanceEnacted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceEnacted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(ProposalData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GovernanceEnacted {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => ProposalData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GovernanceEnacted): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? ProposalData.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GovernanceEnacted>, I>>(
    object: I
  ): GovernanceEnacted {
    const message = createBaseGovernanceEnacted();
    message.proposals =
      object.proposals?.map((e) => ProposalData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGovernanceActive(): GovernanceActive {
  return { proposals: [] };
}

export const GovernanceActive = {
  encode(
    message: GovernanceActive,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      ProposalData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovernanceActive {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceActive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(ProposalData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GovernanceActive {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => ProposalData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GovernanceActive): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? ProposalData.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GovernanceActive>, I>>(
    object: I
  ): GovernanceActive {
    const message = createBaseGovernanceActive();
    message.proposals =
      object.proposals?.map((e) => ProposalData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGovernanceNode(): GovernanceNode {
  return { proposals: [] };
}

export const GovernanceNode = {
  encode(
    message: GovernanceNode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovernanceNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GovernanceNode {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GovernanceNode): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GovernanceNode>, I>>(
    object: I
  ): GovernanceNode {
    const message = createBaseGovernanceNode();
    message.proposals =
      object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStakingAccount(): StakingAccount {
  return { party: "", balance: "", events: [] };
}

export const StakingAccount = {
  encode(
    message: StakingAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    for (const v of message.events) {
      StakeLinking.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.events.push(StakeLinking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakingAccount {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => StakeLinking.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StakingAccount): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.balance !== undefined && (obj.balance = message.balance);
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? StakeLinking.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingAccount>, I>>(
    object: I
  ): StakingAccount {
    const message = createBaseStakingAccount();
    message.party = object.party ?? "";
    message.balance = object.balance ?? "";
    message.events =
      object.events?.map((e) => StakeLinking.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStakingAccounts(): StakingAccounts {
  return { accounts: [], stakingAssetTotalSupply: "" };
}

export const StakingAccounts = {
  encode(
    message: StakingAccounts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      StakingAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.stakingAssetTotalSupply !== "") {
      writer.uint32(18).string(message.stakingAssetTotalSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAccounts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAccounts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(StakingAccount.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stakingAssetTotalSupply = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakingAccounts {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => StakingAccount.fromJSON(e))
        : [],
      stakingAssetTotalSupply: isSet(object.stakingAssetTotalSupply)
        ? String(object.stakingAssetTotalSupply)
        : "",
    };
  },

  toJSON(message: StakingAccounts): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? StakingAccount.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    message.stakingAssetTotalSupply !== undefined &&
      (obj.stakingAssetTotalSupply = message.stakingAssetTotalSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingAccounts>, I>>(
    object: I
  ): StakingAccounts {
    const message = createBaseStakingAccounts();
    message.accounts =
      object.accounts?.map((e) => StakingAccount.fromPartial(e)) || [];
    message.stakingAssetTotalSupply = object.stakingAssetTotalSupply ?? "";
    return message;
  },
};

function createBaseMatchingBook(): MatchingBook {
  return {
    marketId: "",
    buy: [],
    sell: [],
    lastTradedPrice: "",
    auction: false,
    batchId: "0",
  };
}

export const MatchingBook = {
  encode(
    message: MatchingBook,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buy) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sell) {
      Order.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastTradedPrice !== "") {
      writer.uint32(34).string(message.lastTradedPrice);
    }
    if (message.auction === true) {
      writer.uint32(40).bool(message.auction);
    }
    if (message.batchId !== "0") {
      writer.uint32(48).uint64(message.batchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchingBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchingBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.buy.push(Order.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sell.push(Order.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastTradedPrice = reader.string();
          break;
        case 5:
          message.auction = reader.bool();
          break;
        case 6:
          message.batchId = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MatchingBook {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      buy: Array.isArray(object?.buy)
        ? object.buy.map((e: any) => Order.fromJSON(e))
        : [],
      sell: Array.isArray(object?.sell)
        ? object.sell.map((e: any) => Order.fromJSON(e))
        : [],
      lastTradedPrice: isSet(object.lastTradedPrice)
        ? String(object.lastTradedPrice)
        : "",
      auction: isSet(object.auction) ? Boolean(object.auction) : false,
      batchId: isSet(object.batchId) ? String(object.batchId) : "0",
    };
  },

  toJSON(message: MatchingBook): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.buy) {
      obj.buy = message.buy.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.buy = [];
    }
    if (message.sell) {
      obj.sell = message.sell.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.sell = [];
    }
    message.lastTradedPrice !== undefined &&
      (obj.lastTradedPrice = message.lastTradedPrice);
    message.auction !== undefined && (obj.auction = message.auction);
    message.batchId !== undefined && (obj.batchId = message.batchId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MatchingBook>, I>>(
    object: I
  ): MatchingBook {
    const message = createBaseMatchingBook();
    message.marketId = object.marketId ?? "";
    message.buy = object.buy?.map((e) => Order.fromPartial(e)) || [];
    message.sell = object.sell?.map((e) => Order.fromPartial(e)) || [];
    message.lastTradedPrice = object.lastTradedPrice ?? "";
    message.auction = object.auction ?? false;
    message.batchId = object.batchId ?? "0";
    return message;
  },
};

function createBaseNetParams(): NetParams {
  return { params: [] };
}

export const NetParams = {
  encode(
    message: NetParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.params) {
      NetworkParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params.push(NetworkParameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetParams {
    return {
      params: Array.isArray(object?.params)
        ? object.params.map((e: any) => NetworkParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NetParams): unknown {
    const obj: any = {};
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? NetworkParameter.toJSON(e) : undefined
      );
    } else {
      obj.params = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetParams>, I>>(
    object: I
  ): NetParams {
    const message = createBaseNetParams();
    message.params =
      object.params?.map((e) => NetworkParameter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDecimalMap(): DecimalMap {
  return { key: "0", val: "" };
}

export const DecimalMap = {
  encode(
    message: DecimalMap,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "0") {
      writer.uint32(8).int64(message.key);
    }
    if (message.val !== "") {
      writer.uint32(18).string(message.val);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DecimalMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecimalMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = longToString(reader.int64() as Long);
          break;
        case 2:
          message.val = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DecimalMap {
    return {
      key: isSet(object.key) ? String(object.key) : "0",
      val: isSet(object.val) ? String(object.val) : "",
    };
  },

  toJSON(message: DecimalMap): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.val !== undefined && (obj.val = message.val);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DecimalMap>, I>>(
    object: I
  ): DecimalMap {
    const message = createBaseDecimalMap();
    message.key = object.key ?? "0";
    message.val = object.val ?? "";
    return message;
  },
};

function createBaseTimePrice(): TimePrice {
  return { time: "0", price: "" };
}

export const TimePrice = {
  encode(
    message: TimePrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(8).int64(message.time);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimePrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToString(reader.int64() as Long);
          break;
        case 2:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimePrice {
    return {
      time: isSet(object.time) ? String(object.time) : "0",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: TimePrice): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimePrice>, I>>(
    object: I
  ): TimePrice {
    const message = createBaseTimePrice();
    message.time = object.time ?? "0";
    message.price = object.price ?? "";
    return message;
  },
};

function createBasePriceVolume(): PriceVolume {
  return { price: "", volume: "0" };
}

export const PriceVolume = {
  encode(
    message: PriceVolume,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.volume !== "0") {
      writer.uint32(16).uint64(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceVolume {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceVolume();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.volume = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceVolume {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      volume: isSet(object.volume) ? String(object.volume) : "0",
    };
  },

  toJSON(message: PriceVolume): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceVolume>, I>>(
    object: I
  ): PriceVolume {
    const message = createBasePriceVolume();
    message.price = object.price ?? "";
    message.volume = object.volume ?? "0";
    return message;
  },
};

function createBasePriceRange(): PriceRange {
  return { min: "", max: "", ref: "" };
}

export const PriceRange = {
  encode(
    message: PriceRange,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.min !== "") {
      writer.uint32(10).string(message.min);
    }
    if (message.max !== "") {
      writer.uint32(18).string(message.max);
    }
    if (message.ref !== "") {
      writer.uint32(26).string(message.ref);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = reader.string();
          break;
        case 2:
          message.max = reader.string();
          break;
        case 3:
          message.ref = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceRange {
    return {
      min: isSet(object.min) ? String(object.min) : "",
      max: isSet(object.max) ? String(object.max) : "",
      ref: isSet(object.ref) ? String(object.ref) : "",
    };
  },

  toJSON(message: PriceRange): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    message.ref !== undefined && (obj.ref = message.ref);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceRange>, I>>(
    object: I
  ): PriceRange {
    const message = createBasePriceRange();
    message.min = object.min ?? "";
    message.max = object.max ?? "";
    message.ref = object.ref ?? "";
    return message;
  },
};

function createBasePriceBound(): PriceBound {
  return { active: false, upFactor: "", downFactor: "", trigger: undefined };
}

export const PriceBound = {
  encode(
    message: PriceBound,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    if (message.upFactor !== "") {
      writer.uint32(18).string(message.upFactor);
    }
    if (message.downFactor !== "") {
      writer.uint32(26).string(message.downFactor);
    }
    if (message.trigger !== undefined) {
      PriceMonitoringTrigger.encode(
        message.trigger,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceBound {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceBound();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;
        case 2:
          message.upFactor = reader.string();
          break;
        case 3:
          message.downFactor = reader.string();
          break;
        case 4:
          message.trigger = PriceMonitoringTrigger.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceBound {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      upFactor: isSet(object.upFactor) ? String(object.upFactor) : "",
      downFactor: isSet(object.downFactor) ? String(object.downFactor) : "",
      trigger: isSet(object.trigger)
        ? PriceMonitoringTrigger.fromJSON(object.trigger)
        : undefined,
    };
  },

  toJSON(message: PriceBound): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.upFactor !== undefined && (obj.upFactor = message.upFactor);
    message.downFactor !== undefined && (obj.downFactor = message.downFactor);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? PriceMonitoringTrigger.toJSON(message.trigger)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceBound>, I>>(
    object: I
  ): PriceBound {
    const message = createBasePriceBound();
    message.active = object.active ?? false;
    message.upFactor = object.upFactor ?? "";
    message.downFactor = object.downFactor ?? "";
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? PriceMonitoringTrigger.fromPartial(object.trigger)
        : undefined;
    return message;
  },
};

function createBasePriceRangeCache(): PriceRangeCache {
  return { bound: undefined, range: undefined };
}

export const PriceRangeCache = {
  encode(
    message: PriceRangeCache,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bound !== undefined) {
      PriceBound.encode(message.bound, writer.uint32(10).fork()).ldelim();
    }
    if (message.range !== undefined) {
      PriceRange.encode(message.range, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceRangeCache {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceRangeCache();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bound = PriceBound.decode(reader, reader.uint32());
          break;
        case 2:
          message.range = PriceRange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceRangeCache {
    return {
      bound: isSet(object.bound)
        ? PriceBound.fromJSON(object.bound)
        : undefined,
      range: isSet(object.range)
        ? PriceRange.fromJSON(object.range)
        : undefined,
    };
  },

  toJSON(message: PriceRangeCache): unknown {
    const obj: any = {};
    message.bound !== undefined &&
      (obj.bound = message.bound
        ? PriceBound.toJSON(message.bound)
        : undefined);
    message.range !== undefined &&
      (obj.range = message.range
        ? PriceRange.toJSON(message.range)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceRangeCache>, I>>(
    object: I
  ): PriceRangeCache {
    const message = createBasePriceRangeCache();
    message.bound =
      object.bound !== undefined && object.bound !== null
        ? PriceBound.fromPartial(object.bound)
        : undefined;
    message.range =
      object.range !== undefined && object.range !== null
        ? PriceRange.fromPartial(object.range)
        : undefined;
    return message;
  },
};

function createBaseCurrentPrice(): CurrentPrice {
  return { price: "", volume: "0" };
}

export const CurrentPrice = {
  encode(
    message: CurrentPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.volume !== "0") {
      writer.uint32(16).uint64(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.volume = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentPrice {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      volume: isSet(object.volume) ? String(object.volume) : "0",
    };
  },

  toJSON(message: CurrentPrice): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CurrentPrice>, I>>(
    object: I
  ): CurrentPrice {
    const message = createBaseCurrentPrice();
    message.price = object.price ?? "";
    message.volume = object.volume ?? "0";
    return message;
  },
};

function createBasePastPrice(): PastPrice {
  return { time: "0", volumeWeightedPrice: "" };
}

export const PastPrice = {
  encode(
    message: PastPrice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== "0") {
      writer.uint32(8).int64(message.time);
    }
    if (message.volumeWeightedPrice !== "") {
      writer.uint32(18).string(message.volumeWeightedPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PastPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePastPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToString(reader.int64() as Long);
          break;
        case 2:
          message.volumeWeightedPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PastPrice {
    return {
      time: isSet(object.time) ? String(object.time) : "0",
      volumeWeightedPrice: isSet(object.volumeWeightedPrice)
        ? String(object.volumeWeightedPrice)
        : "",
    };
  },

  toJSON(message: PastPrice): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time);
    message.volumeWeightedPrice !== undefined &&
      (obj.volumeWeightedPrice = message.volumeWeightedPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PastPrice>, I>>(
    object: I
  ): PastPrice {
    const message = createBasePastPrice();
    message.time = object.time ?? "0";
    message.volumeWeightedPrice = object.volumeWeightedPrice ?? "";
    return message;
  },
};

function createBasePriceMonitor(): PriceMonitor {
  return {
    initialised: false,
    fpHorizons: [],
    now: "0",
    update: "0",
    bounds: [],
    priceRangeCacheTime: "0",
    priceRangeCache: [],
    refPriceCacheTime: "0",
    refPriceCache: [],
    pricesNow: [],
    pricesPast: [],
    consensusReached: false,
  };
}

export const PriceMonitor = {
  encode(
    message: PriceMonitor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initialised === true) {
      writer.uint32(24).bool(message.initialised);
    }
    for (const v of message.fpHorizons) {
      DecimalMap.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.now !== "0") {
      writer.uint32(40).int64(message.now);
    }
    if (message.update !== "0") {
      writer.uint32(48).int64(message.update);
    }
    for (const v of message.bounds) {
      PriceBound.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.priceRangeCacheTime !== "0") {
      writer.uint32(64).int64(message.priceRangeCacheTime);
    }
    for (const v of message.priceRangeCache) {
      PriceRangeCache.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.refPriceCacheTime !== "0") {
      writer.uint32(80).int64(message.refPriceCacheTime);
    }
    for (const v of message.refPriceCache) {
      DecimalMap.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.pricesNow) {
      CurrentPrice.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.pricesPast) {
      PastPrice.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.consensusReached === true) {
      writer.uint32(112).bool(message.consensusReached);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceMonitor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceMonitor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.initialised = reader.bool();
          break;
        case 4:
          message.fpHorizons.push(DecimalMap.decode(reader, reader.uint32()));
          break;
        case 5:
          message.now = longToString(reader.int64() as Long);
          break;
        case 6:
          message.update = longToString(reader.int64() as Long);
          break;
        case 7:
          message.bounds.push(PriceBound.decode(reader, reader.uint32()));
          break;
        case 8:
          message.priceRangeCacheTime = longToString(reader.int64() as Long);
          break;
        case 9:
          message.priceRangeCache.push(
            PriceRangeCache.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.refPriceCacheTime = longToString(reader.int64() as Long);
          break;
        case 11:
          message.refPriceCache.push(
            DecimalMap.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.pricesNow.push(CurrentPrice.decode(reader, reader.uint32()));
          break;
        case 13:
          message.pricesPast.push(PastPrice.decode(reader, reader.uint32()));
          break;
        case 14:
          message.consensusReached = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceMonitor {
    return {
      initialised: isSet(object.initialised)
        ? Boolean(object.initialised)
        : false,
      fpHorizons: Array.isArray(object?.fpHorizons)
        ? object.fpHorizons.map((e: any) => DecimalMap.fromJSON(e))
        : [],
      now: isSet(object.now) ? String(object.now) : "0",
      update: isSet(object.update) ? String(object.update) : "0",
      bounds: Array.isArray(object?.bounds)
        ? object.bounds.map((e: any) => PriceBound.fromJSON(e))
        : [],
      priceRangeCacheTime: isSet(object.priceRangeCacheTime)
        ? String(object.priceRangeCacheTime)
        : "0",
      priceRangeCache: Array.isArray(object?.priceRangeCache)
        ? object.priceRangeCache.map((e: any) => PriceRangeCache.fromJSON(e))
        : [],
      refPriceCacheTime: isSet(object.refPriceCacheTime)
        ? String(object.refPriceCacheTime)
        : "0",
      refPriceCache: Array.isArray(object?.refPriceCache)
        ? object.refPriceCache.map((e: any) => DecimalMap.fromJSON(e))
        : [],
      pricesNow: Array.isArray(object?.pricesNow)
        ? object.pricesNow.map((e: any) => CurrentPrice.fromJSON(e))
        : [],
      pricesPast: Array.isArray(object?.pricesPast)
        ? object.pricesPast.map((e: any) => PastPrice.fromJSON(e))
        : [],
      consensusReached: isSet(object.consensusReached)
        ? Boolean(object.consensusReached)
        : false,
    };
  },

  toJSON(message: PriceMonitor): unknown {
    const obj: any = {};
    message.initialised !== undefined &&
      (obj.initialised = message.initialised);
    if (message.fpHorizons) {
      obj.fpHorizons = message.fpHorizons.map((e) =>
        e ? DecimalMap.toJSON(e) : undefined
      );
    } else {
      obj.fpHorizons = [];
    }
    message.now !== undefined && (obj.now = message.now);
    message.update !== undefined && (obj.update = message.update);
    if (message.bounds) {
      obj.bounds = message.bounds.map((e) =>
        e ? PriceBound.toJSON(e) : undefined
      );
    } else {
      obj.bounds = [];
    }
    message.priceRangeCacheTime !== undefined &&
      (obj.priceRangeCacheTime = message.priceRangeCacheTime);
    if (message.priceRangeCache) {
      obj.priceRangeCache = message.priceRangeCache.map((e) =>
        e ? PriceRangeCache.toJSON(e) : undefined
      );
    } else {
      obj.priceRangeCache = [];
    }
    message.refPriceCacheTime !== undefined &&
      (obj.refPriceCacheTime = message.refPriceCacheTime);
    if (message.refPriceCache) {
      obj.refPriceCache = message.refPriceCache.map((e) =>
        e ? DecimalMap.toJSON(e) : undefined
      );
    } else {
      obj.refPriceCache = [];
    }
    if (message.pricesNow) {
      obj.pricesNow = message.pricesNow.map((e) =>
        e ? CurrentPrice.toJSON(e) : undefined
      );
    } else {
      obj.pricesNow = [];
    }
    if (message.pricesPast) {
      obj.pricesPast = message.pricesPast.map((e) =>
        e ? PastPrice.toJSON(e) : undefined
      );
    } else {
      obj.pricesPast = [];
    }
    message.consensusReached !== undefined &&
      (obj.consensusReached = message.consensusReached);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceMonitor>, I>>(
    object: I
  ): PriceMonitor {
    const message = createBasePriceMonitor();
    message.initialised = object.initialised ?? false;
    message.fpHorizons =
      object.fpHorizons?.map((e) => DecimalMap.fromPartial(e)) || [];
    message.now = object.now ?? "0";
    message.update = object.update ?? "0";
    message.bounds = object.bounds?.map((e) => PriceBound.fromPartial(e)) || [];
    message.priceRangeCacheTime = object.priceRangeCacheTime ?? "0";
    message.priceRangeCache =
      object.priceRangeCache?.map((e) => PriceRangeCache.fromPartial(e)) || [];
    message.refPriceCacheTime = object.refPriceCacheTime ?? "0";
    message.refPriceCache =
      object.refPriceCache?.map((e) => DecimalMap.fromPartial(e)) || [];
    message.pricesNow =
      object.pricesNow?.map((e) => CurrentPrice.fromPartial(e)) || [];
    message.pricesPast =
      object.pricesPast?.map((e) => PastPrice.fromPartial(e)) || [];
    message.consensusReached = object.consensusReached ?? false;
    return message;
  },
};

function createBaseAuctionState(): AuctionState {
  return {
    mode: 0,
    defaultMode: 0,
    trigger: 0,
    begin: "0",
    end: undefined,
    start: false,
    stop: false,
    extension: 0,
  };
}

export const AuctionState = {
  encode(
    message: AuctionState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mode !== 0) {
      writer.uint32(8).int32(message.mode);
    }
    if (message.defaultMode !== 0) {
      writer.uint32(16).int32(message.defaultMode);
    }
    if (message.trigger !== 0) {
      writer.uint32(24).int32(message.trigger);
    }
    if (message.begin !== "0") {
      writer.uint32(32).int64(message.begin);
    }
    if (message.end !== undefined) {
      AuctionDuration.encode(message.end, writer.uint32(42).fork()).ldelim();
    }
    if (message.start === true) {
      writer.uint32(48).bool(message.start);
    }
    if (message.stop === true) {
      writer.uint32(56).bool(message.stop);
    }
    if (message.extension !== 0) {
      writer.uint32(64).int32(message.extension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mode = reader.int32() as any;
          break;
        case 2:
          message.defaultMode = reader.int32() as any;
          break;
        case 3:
          message.trigger = reader.int32() as any;
          break;
        case 4:
          message.begin = longToString(reader.int64() as Long);
          break;
        case 5:
          message.end = AuctionDuration.decode(reader, reader.uint32());
          break;
        case 6:
          message.start = reader.bool();
          break;
        case 7:
          message.stop = reader.bool();
          break;
        case 8:
          message.extension = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionState {
    return {
      mode: isSet(object.mode) ? market_TradingModeFromJSON(object.mode) : 0,
      defaultMode: isSet(object.defaultMode)
        ? market_TradingModeFromJSON(object.defaultMode)
        : 0,
      trigger: isSet(object.trigger)
        ? auctionTriggerFromJSON(object.trigger)
        : 0,
      begin: isSet(object.begin) ? String(object.begin) : "0",
      end: isSet(object.end) ? AuctionDuration.fromJSON(object.end) : undefined,
      start: isSet(object.start) ? Boolean(object.start) : false,
      stop: isSet(object.stop) ? Boolean(object.stop) : false,
      extension: isSet(object.extension)
        ? auctionTriggerFromJSON(object.extension)
        : 0,
    };
  },

  toJSON(message: AuctionState): unknown {
    const obj: any = {};
    message.mode !== undefined &&
      (obj.mode = market_TradingModeToJSON(message.mode));
    message.defaultMode !== undefined &&
      (obj.defaultMode = market_TradingModeToJSON(message.defaultMode));
    message.trigger !== undefined &&
      (obj.trigger = auctionTriggerToJSON(message.trigger));
    message.begin !== undefined && (obj.begin = message.begin);
    message.end !== undefined &&
      (obj.end = message.end ? AuctionDuration.toJSON(message.end) : undefined);
    message.start !== undefined && (obj.start = message.start);
    message.stop !== undefined && (obj.stop = message.stop);
    message.extension !== undefined &&
      (obj.extension = auctionTriggerToJSON(message.extension));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionState>, I>>(
    object: I
  ): AuctionState {
    const message = createBaseAuctionState();
    message.mode = object.mode ?? 0;
    message.defaultMode = object.defaultMode ?? 0;
    message.trigger = object.trigger ?? 0;
    message.begin = object.begin ?? "0";
    message.end =
      object.end !== undefined && object.end !== null
        ? AuctionDuration.fromPartial(object.end)
        : undefined;
    message.start = object.start ?? false;
    message.stop = object.stop ?? false;
    message.extension = object.extension ?? 0;
    return message;
  },
};

function createBaseEquityShareLP(): EquityShareLP {
  return { id: "", stake: "", share: "", avg: "" };
}

export const EquityShareLP = {
  encode(
    message: EquityShareLP,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (message.share !== "") {
      writer.uint32(26).string(message.share);
    }
    if (message.avg !== "") {
      writer.uint32(34).string(message.avg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EquityShareLP {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquityShareLP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.stake = reader.string();
          break;
        case 3:
          message.share = reader.string();
          break;
        case 4:
          message.avg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EquityShareLP {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      stake: isSet(object.stake) ? String(object.stake) : "",
      share: isSet(object.share) ? String(object.share) : "",
      avg: isSet(object.avg) ? String(object.avg) : "",
    };
  },

  toJSON(message: EquityShareLP): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.stake !== undefined && (obj.stake = message.stake);
    message.share !== undefined && (obj.share = message.share);
    message.avg !== undefined && (obj.avg = message.avg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EquityShareLP>, I>>(
    object: I
  ): EquityShareLP {
    const message = createBaseEquityShareLP();
    message.id = object.id ?? "";
    message.stake = object.stake ?? "";
    message.share = object.share ?? "";
    message.avg = object.avg ?? "";
    return message;
  },
};

function createBaseEquityShare(): EquityShare {
  return { mvp: "", openingAuctionEnded: false, lps: [] };
}

export const EquityShare = {
  encode(
    message: EquityShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mvp !== "") {
      writer.uint32(10).string(message.mvp);
    }
    if (message.openingAuctionEnded === true) {
      writer.uint32(16).bool(message.openingAuctionEnded);
    }
    for (const v of message.lps) {
      EquityShareLP.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EquityShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquityShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mvp = reader.string();
          break;
        case 2:
          message.openingAuctionEnded = reader.bool();
          break;
        case 3:
          message.lps.push(EquityShareLP.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EquityShare {
    return {
      mvp: isSet(object.mvp) ? String(object.mvp) : "",
      openingAuctionEnded: isSet(object.openingAuctionEnded)
        ? Boolean(object.openingAuctionEnded)
        : false,
      lps: Array.isArray(object?.lps)
        ? object.lps.map((e: any) => EquityShareLP.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EquityShare): unknown {
    const obj: any = {};
    message.mvp !== undefined && (obj.mvp = message.mvp);
    message.openingAuctionEnded !== undefined &&
      (obj.openingAuctionEnded = message.openingAuctionEnded);
    if (message.lps) {
      obj.lps = message.lps.map((e) =>
        e ? EquityShareLP.toJSON(e) : undefined
      );
    } else {
      obj.lps = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EquityShare>, I>>(
    object: I
  ): EquityShare {
    const message = createBaseEquityShare();
    message.mvp = object.mvp ?? "";
    message.openingAuctionEnded = object.openingAuctionEnded ?? false;
    message.lps = object.lps?.map((e) => EquityShareLP.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeSplitter(): FeeSplitter {
  return { timeWindowStart: "0", tradeValue: "" };
}

export const FeeSplitter = {
  encode(
    message: FeeSplitter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeWindowStart !== "0") {
      writer.uint32(8).int64(message.timeWindowStart);
    }
    if (message.tradeValue !== "") {
      writer.uint32(18).string(message.tradeValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeSplitter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeSplitter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeWindowStart = longToString(reader.int64() as Long);
          break;
        case 2:
          message.tradeValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeSplitter {
    return {
      timeWindowStart: isSet(object.timeWindowStart)
        ? String(object.timeWindowStart)
        : "0",
      tradeValue: isSet(object.tradeValue) ? String(object.tradeValue) : "",
    };
  },

  toJSON(message: FeeSplitter): unknown {
    const obj: any = {};
    message.timeWindowStart !== undefined &&
      (obj.timeWindowStart = message.timeWindowStart);
    message.tradeValue !== undefined && (obj.tradeValue = message.tradeValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeSplitter>, I>>(
    object: I
  ): FeeSplitter {
    const message = createBaseFeeSplitter();
    message.timeWindowStart = object.timeWindowStart ?? "0";
    message.tradeValue = object.tradeValue ?? "";
    return message;
  },
};

function createBaseMarket(): Market {
  return {
    market: undefined,
    priceMonitor: undefined,
    auctionState: undefined,
    peggedOrders: [],
    expiringOrders: [],
    lastBestBid: "",
    lastBestAsk: "",
    lastMidBid: "",
    lastMidAsk: "",
    lastMarketValueProxy: "",
    lastEquityShareDistributed: "0",
    equityShare: undefined,
    currentMarkPrice: "",
    riskFactorShort: "",
    riskFactorLong: "",
    riskFactorConsensusReached: false,
    feeSplitter: undefined,
  };
}

export const Market = {
  encode(
    message: Market,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== undefined) {
      Market3.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    if (message.priceMonitor !== undefined) {
      PriceMonitor.encode(
        message.priceMonitor,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.auctionState !== undefined) {
      AuctionState.encode(
        message.auctionState,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.peggedOrders) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.expiringOrders) {
      Order.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastBestBid !== "") {
      writer.uint32(50).string(message.lastBestBid);
    }
    if (message.lastBestAsk !== "") {
      writer.uint32(58).string(message.lastBestAsk);
    }
    if (message.lastMidBid !== "") {
      writer.uint32(66).string(message.lastMidBid);
    }
    if (message.lastMidAsk !== "") {
      writer.uint32(74).string(message.lastMidAsk);
    }
    if (message.lastMarketValueProxy !== "") {
      writer.uint32(82).string(message.lastMarketValueProxy);
    }
    if (message.lastEquityShareDistributed !== "0") {
      writer.uint32(88).int64(message.lastEquityShareDistributed);
    }
    if (message.equityShare !== undefined) {
      EquityShare.encode(
        message.equityShare,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.currentMarkPrice !== "") {
      writer.uint32(106).string(message.currentMarkPrice);
    }
    if (message.riskFactorShort !== "") {
      writer.uint32(114).string(message.riskFactorShort);
    }
    if (message.riskFactorLong !== "") {
      writer.uint32(122).string(message.riskFactorLong);
    }
    if (message.riskFactorConsensusReached === true) {
      writer.uint32(128).bool(message.riskFactorConsensusReached);
    }
    if (message.feeSplitter !== undefined) {
      FeeSplitter.encode(
        message.feeSplitter,
        writer.uint32(138).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Market {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market3.decode(reader, reader.uint32());
          break;
        case 2:
          message.priceMonitor = PriceMonitor.decode(reader, reader.uint32());
          break;
        case 3:
          message.auctionState = AuctionState.decode(reader, reader.uint32());
          break;
        case 4:
          message.peggedOrders.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.expiringOrders.push(Order.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastBestBid = reader.string();
          break;
        case 7:
          message.lastBestAsk = reader.string();
          break;
        case 8:
          message.lastMidBid = reader.string();
          break;
        case 9:
          message.lastMidAsk = reader.string();
          break;
        case 10:
          message.lastMarketValueProxy = reader.string();
          break;
        case 11:
          message.lastEquityShareDistributed = longToString(
            reader.int64() as Long
          );
          break;
        case 12:
          message.equityShare = EquityShare.decode(reader, reader.uint32());
          break;
        case 13:
          message.currentMarkPrice = reader.string();
          break;
        case 14:
          message.riskFactorShort = reader.string();
          break;
        case 15:
          message.riskFactorLong = reader.string();
          break;
        case 16:
          message.riskFactorConsensusReached = reader.bool();
          break;
        case 17:
          message.feeSplitter = FeeSplitter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Market {
    return {
      market: isSet(object.market)
        ? Market3.fromJSON(object.market)
        : undefined,
      priceMonitor: isSet(object.priceMonitor)
        ? PriceMonitor.fromJSON(object.priceMonitor)
        : undefined,
      auctionState: isSet(object.auctionState)
        ? AuctionState.fromJSON(object.auctionState)
        : undefined,
      peggedOrders: Array.isArray(object?.peggedOrders)
        ? object.peggedOrders.map((e: any) => Order.fromJSON(e))
        : [],
      expiringOrders: Array.isArray(object?.expiringOrders)
        ? object.expiringOrders.map((e: any) => Order.fromJSON(e))
        : [],
      lastBestBid: isSet(object.lastBestBid) ? String(object.lastBestBid) : "",
      lastBestAsk: isSet(object.lastBestAsk) ? String(object.lastBestAsk) : "",
      lastMidBid: isSet(object.lastMidBid) ? String(object.lastMidBid) : "",
      lastMidAsk: isSet(object.lastMidAsk) ? String(object.lastMidAsk) : "",
      lastMarketValueProxy: isSet(object.lastMarketValueProxy)
        ? String(object.lastMarketValueProxy)
        : "",
      lastEquityShareDistributed: isSet(object.lastEquityShareDistributed)
        ? String(object.lastEquityShareDistributed)
        : "0",
      equityShare: isSet(object.equityShare)
        ? EquityShare.fromJSON(object.equityShare)
        : undefined,
      currentMarkPrice: isSet(object.currentMarkPrice)
        ? String(object.currentMarkPrice)
        : "",
      riskFactorShort: isSet(object.riskFactorShort)
        ? String(object.riskFactorShort)
        : "",
      riskFactorLong: isSet(object.riskFactorLong)
        ? String(object.riskFactorLong)
        : "",
      riskFactorConsensusReached: isSet(object.riskFactorConsensusReached)
        ? Boolean(object.riskFactorConsensusReached)
        : false,
      feeSplitter: isSet(object.feeSplitter)
        ? FeeSplitter.fromJSON(object.feeSplitter)
        : undefined,
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.market !== undefined &&
      (obj.market = message.market
        ? Market3.toJSON(message.market)
        : undefined);
    message.priceMonitor !== undefined &&
      (obj.priceMonitor = message.priceMonitor
        ? PriceMonitor.toJSON(message.priceMonitor)
        : undefined);
    message.auctionState !== undefined &&
      (obj.auctionState = message.auctionState
        ? AuctionState.toJSON(message.auctionState)
        : undefined);
    if (message.peggedOrders) {
      obj.peggedOrders = message.peggedOrders.map((e) =>
        e ? Order.toJSON(e) : undefined
      );
    } else {
      obj.peggedOrders = [];
    }
    if (message.expiringOrders) {
      obj.expiringOrders = message.expiringOrders.map((e) =>
        e ? Order.toJSON(e) : undefined
      );
    } else {
      obj.expiringOrders = [];
    }
    message.lastBestBid !== undefined &&
      (obj.lastBestBid = message.lastBestBid);
    message.lastBestAsk !== undefined &&
      (obj.lastBestAsk = message.lastBestAsk);
    message.lastMidBid !== undefined && (obj.lastMidBid = message.lastMidBid);
    message.lastMidAsk !== undefined && (obj.lastMidAsk = message.lastMidAsk);
    message.lastMarketValueProxy !== undefined &&
      (obj.lastMarketValueProxy = message.lastMarketValueProxy);
    message.lastEquityShareDistributed !== undefined &&
      (obj.lastEquityShareDistributed = message.lastEquityShareDistributed);
    message.equityShare !== undefined &&
      (obj.equityShare = message.equityShare
        ? EquityShare.toJSON(message.equityShare)
        : undefined);
    message.currentMarkPrice !== undefined &&
      (obj.currentMarkPrice = message.currentMarkPrice);
    message.riskFactorShort !== undefined &&
      (obj.riskFactorShort = message.riskFactorShort);
    message.riskFactorLong !== undefined &&
      (obj.riskFactorLong = message.riskFactorLong);
    message.riskFactorConsensusReached !== undefined &&
      (obj.riskFactorConsensusReached = message.riskFactorConsensusReached);
    message.feeSplitter !== undefined &&
      (obj.feeSplitter = message.feeSplitter
        ? FeeSplitter.toJSON(message.feeSplitter)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market {
    const message = createBaseMarket();
    message.market =
      object.market !== undefined && object.market !== null
        ? Market3.fromPartial(object.market)
        : undefined;
    message.priceMonitor =
      object.priceMonitor !== undefined && object.priceMonitor !== null
        ? PriceMonitor.fromPartial(object.priceMonitor)
        : undefined;
    message.auctionState =
      object.auctionState !== undefined && object.auctionState !== null
        ? AuctionState.fromPartial(object.auctionState)
        : undefined;
    message.peggedOrders =
      object.peggedOrders?.map((e) => Order.fromPartial(e)) || [];
    message.expiringOrders =
      object.expiringOrders?.map((e) => Order.fromPartial(e)) || [];
    message.lastBestBid = object.lastBestBid ?? "";
    message.lastBestAsk = object.lastBestAsk ?? "";
    message.lastMidBid = object.lastMidBid ?? "";
    message.lastMidAsk = object.lastMidAsk ?? "";
    message.lastMarketValueProxy = object.lastMarketValueProxy ?? "";
    message.lastEquityShareDistributed =
      object.lastEquityShareDistributed ?? "0";
    message.equityShare =
      object.equityShare !== undefined && object.equityShare !== null
        ? EquityShare.fromPartial(object.equityShare)
        : undefined;
    message.currentMarkPrice = object.currentMarkPrice ?? "";
    message.riskFactorShort = object.riskFactorShort ?? "";
    message.riskFactorLong = object.riskFactorLong ?? "";
    message.riskFactorConsensusReached =
      object.riskFactorConsensusReached ?? false;
    message.feeSplitter =
      object.feeSplitter !== undefined && object.feeSplitter !== null
        ? FeeSplitter.fromPartial(object.feeSplitter)
        : undefined;
    return message;
  },
};

function createBaseExecutionMarkets(): ExecutionMarkets {
  return { markets: [] };
}

export const ExecutionMarkets = {
  encode(
    message: ExecutionMarkets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionMarkets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutionMarkets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecutionMarkets {
    return {
      markets: Array.isArray(object?.markets)
        ? object.markets.map((e: any) => Market.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExecutionMarkets): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) =>
        e ? Market.toJSON(e) : undefined
      );
    } else {
      obj.markets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExecutionMarkets>, I>>(
    object: I
  ): ExecutionMarkets {
    const message = createBaseExecutionMarkets();
    message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
    return message;
  },
};

function createBasePosition(): Position {
  return {
    partyId: "",
    size: "0",
    buy: "0",
    sell: "0",
    price: "",
    vwBuyPrice: "",
    vwSellPrice: "",
  };
}

export const Position = {
  encode(
    message: Position,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.size !== "0") {
      writer.uint32(16).int64(message.size);
    }
    if (message.buy !== "0") {
      writer.uint32(24).int64(message.buy);
    }
    if (message.sell !== "0") {
      writer.uint32(32).int64(message.sell);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.vwBuyPrice !== "") {
      writer.uint32(50).string(message.vwBuyPrice);
    }
    if (message.vwSellPrice !== "") {
      writer.uint32(58).string(message.vwSellPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Position {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.size = longToString(reader.int64() as Long);
          break;
        case 3:
          message.buy = longToString(reader.int64() as Long);
          break;
        case 4:
          message.sell = longToString(reader.int64() as Long);
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.vwBuyPrice = reader.string();
          break;
        case 7:
          message.vwSellPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Position {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      size: isSet(object.size) ? String(object.size) : "0",
      buy: isSet(object.buy) ? String(object.buy) : "0",
      sell: isSet(object.sell) ? String(object.sell) : "0",
      price: isSet(object.price) ? String(object.price) : "",
      vwBuyPrice: isSet(object.vwBuyPrice) ? String(object.vwBuyPrice) : "",
      vwSellPrice: isSet(object.vwSellPrice) ? String(object.vwSellPrice) : "",
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.size !== undefined && (obj.size = message.size);
    message.buy !== undefined && (obj.buy = message.buy);
    message.sell !== undefined && (obj.sell = message.sell);
    message.price !== undefined && (obj.price = message.price);
    message.vwBuyPrice !== undefined && (obj.vwBuyPrice = message.vwBuyPrice);
    message.vwSellPrice !== undefined &&
      (obj.vwSellPrice = message.vwSellPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.partyId = object.partyId ?? "";
    message.size = object.size ?? "0";
    message.buy = object.buy ?? "0";
    message.sell = object.sell ?? "0";
    message.price = object.price ?? "";
    message.vwBuyPrice = object.vwBuyPrice ?? "";
    message.vwSellPrice = object.vwSellPrice ?? "";
    return message;
  },
};

function createBaseMarketPositions(): MarketPositions {
  return { marketId: "", positions: [] };
}

export const MarketPositions = {
  encode(
    message: MarketPositions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketPositions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketPositions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketPositions {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => Position.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarketPositions): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? Position.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketPositions>, I>>(
    object: I
  ): MarketPositions {
    const message = createBaseMarketPositions();
    message.marketId = object.marketId ?? "";
    message.positions =
      object.positions?.map((e) => Position.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppState(): AppState {
  return { height: "0", block: "", time: "0", chainId: "" };
}

export const AppState = {
  encode(
    message: AppState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.block !== "") {
      writer.uint32(18).string(message.block);
    }
    if (message.time !== "0") {
      writer.uint32(24).int64(message.time);
    }
    if (message.chainId !== "") {
      writer.uint32(34).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.block = reader.string();
          break;
        case 3:
          message.time = longToString(reader.int64() as Long);
          break;
        case 4:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppState {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      block: isSet(object.block) ? String(object.block) : "",
      time: isSet(object.time) ? String(object.time) : "0",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },

  toJSON(message: AppState): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.block !== undefined && (obj.block = message.block);
    message.time !== undefined && (obj.time = message.time);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppState>, I>>(object: I): AppState {
    const message = createBaseAppState();
    message.height = object.height ?? "0";
    message.block = object.block ?? "";
    message.time = object.time ?? "0";
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBaseEpochState(): EpochState {
  return {
    seq: "0",
    startTime: "0",
    expireTime: "0",
    readyToStartNewEpoch: false,
    readyToEndEpoch: false,
  };
}

export const EpochState = {
  encode(
    message: EpochState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seq !== "0") {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.startTime !== "0") {
      writer.uint32(24).int64(message.startTime);
    }
    if (message.expireTime !== "0") {
      writer.uint32(32).int64(message.expireTime);
    }
    if (message.readyToStartNewEpoch === true) {
      writer.uint32(48).bool(message.readyToStartNewEpoch);
    }
    if (message.readyToEndEpoch === true) {
      writer.uint32(56).bool(message.readyToEndEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.startTime = longToString(reader.int64() as Long);
          break;
        case 4:
          message.expireTime = longToString(reader.int64() as Long);
          break;
        case 6:
          message.readyToStartNewEpoch = reader.bool();
          break;
        case 7:
          message.readyToEndEpoch = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochState {
    return {
      seq: isSet(object.seq) ? String(object.seq) : "0",
      startTime: isSet(object.startTime) ? String(object.startTime) : "0",
      expireTime: isSet(object.expireTime) ? String(object.expireTime) : "0",
      readyToStartNewEpoch: isSet(object.readyToStartNewEpoch)
        ? Boolean(object.readyToStartNewEpoch)
        : false,
      readyToEndEpoch: isSet(object.readyToEndEpoch)
        ? Boolean(object.readyToEndEpoch)
        : false,
    };
  },

  toJSON(message: EpochState): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = message.seq);
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.expireTime !== undefined && (obj.expireTime = message.expireTime);
    message.readyToStartNewEpoch !== undefined &&
      (obj.readyToStartNewEpoch = message.readyToStartNewEpoch);
    message.readyToEndEpoch !== undefined &&
      (obj.readyToEndEpoch = message.readyToEndEpoch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochState>, I>>(
    object: I
  ): EpochState {
    const message = createBaseEpochState();
    message.seq = object.seq ?? "0";
    message.startTime = object.startTime ?? "0";
    message.expireTime = object.expireTime ?? "0";
    message.readyToStartNewEpoch = object.readyToStartNewEpoch ?? false;
    message.readyToEndEpoch = object.readyToEndEpoch ?? false;
    return message;
  },
};

function createBaseRewardsPendingPayouts(): RewardsPendingPayouts {
  return { scheduledRewardsPayout: [] };
}

export const RewardsPendingPayouts = {
  encode(
    message: RewardsPendingPayouts,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.scheduledRewardsPayout) {
      ScheduledRewardsPayout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RewardsPendingPayouts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsPendingPayouts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scheduledRewardsPayout.push(
            ScheduledRewardsPayout.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsPendingPayouts {
    return {
      scheduledRewardsPayout: Array.isArray(object?.scheduledRewardsPayout)
        ? object.scheduledRewardsPayout.map((e: any) =>
            ScheduledRewardsPayout.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: RewardsPendingPayouts): unknown {
    const obj: any = {};
    if (message.scheduledRewardsPayout) {
      obj.scheduledRewardsPayout = message.scheduledRewardsPayout.map((e) =>
        e ? ScheduledRewardsPayout.toJSON(e) : undefined
      );
    } else {
      obj.scheduledRewardsPayout = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsPendingPayouts>, I>>(
    object: I
  ): RewardsPendingPayouts {
    const message = createBaseRewardsPendingPayouts();
    message.scheduledRewardsPayout =
      object.scheduledRewardsPayout?.map((e) =>
        ScheduledRewardsPayout.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseScheduledRewardsPayout(): ScheduledRewardsPayout {
  return { payoutTime: "0", rewardsPayout: [] };
}

export const ScheduledRewardsPayout = {
  encode(
    message: ScheduledRewardsPayout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payoutTime !== "0") {
      writer.uint32(8).int64(message.payoutTime);
    }
    for (const v of message.rewardsPayout) {
      RewardsPayout.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScheduledRewardsPayout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledRewardsPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payoutTime = longToString(reader.int64() as Long);
          break;
        case 2:
          message.rewardsPayout.push(
            RewardsPayout.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduledRewardsPayout {
    return {
      payoutTime: isSet(object.payoutTime) ? String(object.payoutTime) : "0",
      rewardsPayout: Array.isArray(object?.rewardsPayout)
        ? object.rewardsPayout.map((e: any) => RewardsPayout.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScheduledRewardsPayout): unknown {
    const obj: any = {};
    message.payoutTime !== undefined && (obj.payoutTime = message.payoutTime);
    if (message.rewardsPayout) {
      obj.rewardsPayout = message.rewardsPayout.map((e) =>
        e ? RewardsPayout.toJSON(e) : undefined
      );
    } else {
      obj.rewardsPayout = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduledRewardsPayout>, I>>(
    object: I
  ): ScheduledRewardsPayout {
    const message = createBaseScheduledRewardsPayout();
    message.payoutTime = object.payoutTime ?? "0";
    message.rewardsPayout =
      object.rewardsPayout?.map((e) => RewardsPayout.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRewardsPayout(): RewardsPayout {
  return {
    fromAccount: "",
    asset: "",
    rewardPartyAmount: [],
    totalReward: "",
    epochSeq: "",
    timestamp: "0",
  };
}

export const RewardsPayout = {
  encode(
    message: RewardsPayout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAccount !== "") {
      writer.uint32(10).string(message.fromAccount);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.rewardPartyAmount) {
      RewardsPartyAmount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalReward !== "") {
      writer.uint32(34).string(message.totalReward);
    }
    if (message.epochSeq !== "") {
      writer.uint32(42).string(message.epochSeq);
    }
    if (message.timestamp !== "0") {
      writer.uint32(48).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsPayout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAccount = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.rewardPartyAmount.push(
            RewardsPartyAmount.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.totalReward = reader.string();
          break;
        case 5:
          message.epochSeq = reader.string();
          break;
        case 6:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsPayout {
    return {
      fromAccount: isSet(object.fromAccount) ? String(object.fromAccount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      rewardPartyAmount: Array.isArray(object?.rewardPartyAmount)
        ? object.rewardPartyAmount.map((e: any) =>
            RewardsPartyAmount.fromJSON(e)
          )
        : [],
      totalReward: isSet(object.totalReward) ? String(object.totalReward) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: RewardsPayout): unknown {
    const obj: any = {};
    message.fromAccount !== undefined &&
      (obj.fromAccount = message.fromAccount);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.rewardPartyAmount) {
      obj.rewardPartyAmount = message.rewardPartyAmount.map((e) =>
        e ? RewardsPartyAmount.toJSON(e) : undefined
      );
    } else {
      obj.rewardPartyAmount = [];
    }
    message.totalReward !== undefined &&
      (obj.totalReward = message.totalReward);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsPayout>, I>>(
    object: I
  ): RewardsPayout {
    const message = createBaseRewardsPayout();
    message.fromAccount = object.fromAccount ?? "";
    message.asset = object.asset ?? "";
    message.rewardPartyAmount =
      object.rewardPartyAmount?.map((e) => RewardsPartyAmount.fromPartial(e)) ||
      [];
    message.totalReward = object.totalReward ?? "";
    message.epochSeq = object.epochSeq ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseRewardsPartyAmount(): RewardsPartyAmount {
  return { party: "", amount: "" };
}

export const RewardsPartyAmount = {
  encode(
    message: RewardsPartyAmount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsPartyAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsPartyAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardsPartyAmount {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: RewardsPartyAmount): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardsPartyAmount>, I>>(
    object: I
  ): RewardsPartyAmount {
    const message = createBaseRewardsPartyAmount();
    message.party = object.party ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseLimitState(): LimitState {
  return {
    blockCount: 0,
    canProposeMarket: false,
    canProposeAsset: false,
    genesisLoaded: false,
    proposeMarketEnabled: false,
    proposeAssetEnabled: false,
    proposeMarketEnabledFrom: "0",
    proposeAssetEnabledFrom: "0",
  };
}

export const LimitState = {
  encode(
    message: LimitState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockCount !== 0) {
      writer.uint32(8).uint32(message.blockCount);
    }
    if (message.canProposeMarket === true) {
      writer.uint32(16).bool(message.canProposeMarket);
    }
    if (message.canProposeAsset === true) {
      writer.uint32(24).bool(message.canProposeAsset);
    }
    if (message.genesisLoaded === true) {
      writer.uint32(32).bool(message.genesisLoaded);
    }
    if (message.proposeMarketEnabled === true) {
      writer.uint32(40).bool(message.proposeMarketEnabled);
    }
    if (message.proposeAssetEnabled === true) {
      writer.uint32(48).bool(message.proposeAssetEnabled);
    }
    if (message.proposeMarketEnabledFrom !== "0") {
      writer.uint32(56).int64(message.proposeMarketEnabledFrom);
    }
    if (message.proposeAssetEnabledFrom !== "0") {
      writer.uint32(64).int64(message.proposeAssetEnabledFrom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LimitState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockCount = reader.uint32();
          break;
        case 2:
          message.canProposeMarket = reader.bool();
          break;
        case 3:
          message.canProposeAsset = reader.bool();
          break;
        case 4:
          message.genesisLoaded = reader.bool();
          break;
        case 5:
          message.proposeMarketEnabled = reader.bool();
          break;
        case 6:
          message.proposeAssetEnabled = reader.bool();
          break;
        case 7:
          message.proposeMarketEnabledFrom = longToString(
            reader.int64() as Long
          );
          break;
        case 8:
          message.proposeAssetEnabledFrom = longToString(
            reader.int64() as Long
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LimitState {
    return {
      blockCount: isSet(object.blockCount) ? Number(object.blockCount) : 0,
      canProposeMarket: isSet(object.canProposeMarket)
        ? Boolean(object.canProposeMarket)
        : false,
      canProposeAsset: isSet(object.canProposeAsset)
        ? Boolean(object.canProposeAsset)
        : false,
      genesisLoaded: isSet(object.genesisLoaded)
        ? Boolean(object.genesisLoaded)
        : false,
      proposeMarketEnabled: isSet(object.proposeMarketEnabled)
        ? Boolean(object.proposeMarketEnabled)
        : false,
      proposeAssetEnabled: isSet(object.proposeAssetEnabled)
        ? Boolean(object.proposeAssetEnabled)
        : false,
      proposeMarketEnabledFrom: isSet(object.proposeMarketEnabledFrom)
        ? String(object.proposeMarketEnabledFrom)
        : "0",
      proposeAssetEnabledFrom: isSet(object.proposeAssetEnabledFrom)
        ? String(object.proposeAssetEnabledFrom)
        : "0",
    };
  },

  toJSON(message: LimitState): unknown {
    const obj: any = {};
    message.blockCount !== undefined &&
      (obj.blockCount = Math.round(message.blockCount));
    message.canProposeMarket !== undefined &&
      (obj.canProposeMarket = message.canProposeMarket);
    message.canProposeAsset !== undefined &&
      (obj.canProposeAsset = message.canProposeAsset);
    message.genesisLoaded !== undefined &&
      (obj.genesisLoaded = message.genesisLoaded);
    message.proposeMarketEnabled !== undefined &&
      (obj.proposeMarketEnabled = message.proposeMarketEnabled);
    message.proposeAssetEnabled !== undefined &&
      (obj.proposeAssetEnabled = message.proposeAssetEnabled);
    message.proposeMarketEnabledFrom !== undefined &&
      (obj.proposeMarketEnabledFrom = message.proposeMarketEnabledFrom);
    message.proposeAssetEnabledFrom !== undefined &&
      (obj.proposeAssetEnabledFrom = message.proposeAssetEnabledFrom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LimitState>, I>>(
    object: I
  ): LimitState {
    const message = createBaseLimitState();
    message.blockCount = object.blockCount ?? 0;
    message.canProposeMarket = object.canProposeMarket ?? false;
    message.canProposeAsset = object.canProposeAsset ?? false;
    message.genesisLoaded = object.genesisLoaded ?? false;
    message.proposeMarketEnabled = object.proposeMarketEnabled ?? false;
    message.proposeAssetEnabled = object.proposeAssetEnabled ?? false;
    message.proposeMarketEnabledFrom = object.proposeMarketEnabledFrom ?? "0";
    message.proposeAssetEnabledFrom = object.proposeAssetEnabledFrom ?? "0";
    return message;
  },
};

function createBaseVoteSpamPolicy(): VoteSpamPolicy {
  return {
    partyToVote: [],
    bannedParties: [],
    tokenBalance: [],
    recentBlocksRejectStats: [],
    currentBlockIndex: "0",
    lastIncreaseBlock: "0",
    currentEpochSeq: "0",
    minVotingTokensFactor: "",
  };
}

export const VoteSpamPolicy = {
  encode(
    message: VoteSpamPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.partyToVote) {
      PartyProposalVoteCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bannedParties) {
      BannedParty.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tokenBalance) {
      PartyTokenBalance.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.recentBlocksRejectStats) {
      BlockRejectStats.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.currentBlockIndex !== "0") {
      writer.uint32(40).uint64(message.currentBlockIndex);
    }
    if (message.lastIncreaseBlock !== "0") {
      writer.uint32(48).uint64(message.lastIncreaseBlock);
    }
    if (message.currentEpochSeq !== "0") {
      writer.uint32(56).uint64(message.currentEpochSeq);
    }
    if (message.minVotingTokensFactor !== "") {
      writer.uint32(66).string(message.minVotingTokensFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSpamPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSpamPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyToVote.push(
            PartyProposalVoteCount.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.bannedParties.push(
            BannedParty.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.tokenBalance.push(
            PartyTokenBalance.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.recentBlocksRejectStats.push(
            BlockRejectStats.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.currentBlockIndex = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.lastIncreaseBlock = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.currentEpochSeq = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.minVotingTokensFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteSpamPolicy {
    return {
      partyToVote: Array.isArray(object?.partyToVote)
        ? object.partyToVote.map((e: any) => PartyProposalVoteCount.fromJSON(e))
        : [],
      bannedParties: Array.isArray(object?.bannedParties)
        ? object.bannedParties.map((e: any) => BannedParty.fromJSON(e))
        : [],
      tokenBalance: Array.isArray(object?.tokenBalance)
        ? object.tokenBalance.map((e: any) => PartyTokenBalance.fromJSON(e))
        : [],
      recentBlocksRejectStats: Array.isArray(object?.recentBlocksRejectStats)
        ? object.recentBlocksRejectStats.map((e: any) =>
            BlockRejectStats.fromJSON(e)
          )
        : [],
      currentBlockIndex: isSet(object.currentBlockIndex)
        ? String(object.currentBlockIndex)
        : "0",
      lastIncreaseBlock: isSet(object.lastIncreaseBlock)
        ? String(object.lastIncreaseBlock)
        : "0",
      currentEpochSeq: isSet(object.currentEpochSeq)
        ? String(object.currentEpochSeq)
        : "0",
      minVotingTokensFactor: isSet(object.minVotingTokensFactor)
        ? String(object.minVotingTokensFactor)
        : "",
    };
  },

  toJSON(message: VoteSpamPolicy): unknown {
    const obj: any = {};
    if (message.partyToVote) {
      obj.partyToVote = message.partyToVote.map((e) =>
        e ? PartyProposalVoteCount.toJSON(e) : undefined
      );
    } else {
      obj.partyToVote = [];
    }
    if (message.bannedParties) {
      obj.bannedParties = message.bannedParties.map((e) =>
        e ? BannedParty.toJSON(e) : undefined
      );
    } else {
      obj.bannedParties = [];
    }
    if (message.tokenBalance) {
      obj.tokenBalance = message.tokenBalance.map((e) =>
        e ? PartyTokenBalance.toJSON(e) : undefined
      );
    } else {
      obj.tokenBalance = [];
    }
    if (message.recentBlocksRejectStats) {
      obj.recentBlocksRejectStats = message.recentBlocksRejectStats.map((e) =>
        e ? BlockRejectStats.toJSON(e) : undefined
      );
    } else {
      obj.recentBlocksRejectStats = [];
    }
    message.currentBlockIndex !== undefined &&
      (obj.currentBlockIndex = message.currentBlockIndex);
    message.lastIncreaseBlock !== undefined &&
      (obj.lastIncreaseBlock = message.lastIncreaseBlock);
    message.currentEpochSeq !== undefined &&
      (obj.currentEpochSeq = message.currentEpochSeq);
    message.minVotingTokensFactor !== undefined &&
      (obj.minVotingTokensFactor = message.minVotingTokensFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSpamPolicy>, I>>(
    object: I
  ): VoteSpamPolicy {
    const message = createBaseVoteSpamPolicy();
    message.partyToVote =
      object.partyToVote?.map((e) => PartyProposalVoteCount.fromPartial(e)) ||
      [];
    message.bannedParties =
      object.bannedParties?.map((e) => BannedParty.fromPartial(e)) || [];
    message.tokenBalance =
      object.tokenBalance?.map((e) => PartyTokenBalance.fromPartial(e)) || [];
    message.recentBlocksRejectStats =
      object.recentBlocksRejectStats?.map((e) =>
        BlockRejectStats.fromPartial(e)
      ) || [];
    message.currentBlockIndex = object.currentBlockIndex ?? "0";
    message.lastIncreaseBlock = object.lastIncreaseBlock ?? "0";
    message.currentEpochSeq = object.currentEpochSeq ?? "0";
    message.minVotingTokensFactor = object.minVotingTokensFactor ?? "";
    return message;
  },
};

function createBasePartyProposalVoteCount(): PartyProposalVoteCount {
  return { party: "", proposal: "", count: "0" };
}

export const PartyProposalVoteCount = {
  encode(
    message: PartyProposalVoteCount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.proposal !== "") {
      writer.uint32(18).string(message.proposal);
    }
    if (message.count !== "0") {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PartyProposalVoteCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyProposalVoteCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.proposal = reader.string();
          break;
        case 3:
          message.count = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyProposalVoteCount {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      proposal: isSet(object.proposal) ? String(object.proposal) : "",
      count: isSet(object.count) ? String(object.count) : "0",
    };
  },

  toJSON(message: PartyProposalVoteCount): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.proposal !== undefined && (obj.proposal = message.proposal);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyProposalVoteCount>, I>>(
    object: I
  ): PartyProposalVoteCount {
    const message = createBasePartyProposalVoteCount();
    message.party = object.party ?? "";
    message.proposal = object.proposal ?? "";
    message.count = object.count ?? "0";
    return message;
  },
};

function createBaseBannedParty(): BannedParty {
  return { party: "", untilEpoch: "0" };
}

export const BannedParty = {
  encode(
    message: BannedParty,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.untilEpoch !== "0") {
      writer.uint32(16).uint64(message.untilEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BannedParty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBannedParty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.untilEpoch = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BannedParty {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      untilEpoch: isSet(object.untilEpoch) ? String(object.untilEpoch) : "0",
    };
  },

  toJSON(message: BannedParty): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.untilEpoch !== undefined && (obj.untilEpoch = message.untilEpoch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BannedParty>, I>>(
    object: I
  ): BannedParty {
    const message = createBaseBannedParty();
    message.party = object.party ?? "";
    message.untilEpoch = object.untilEpoch ?? "0";
    return message;
  },
};

function createBasePartyTokenBalance(): PartyTokenBalance {
  return { party: "", balance: "" };
}

export const PartyTokenBalance = {
  encode(
    message: PartyTokenBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyTokenBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyTokenBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyTokenBalance {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
    };
  },

  toJSON(message: PartyTokenBalance): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyTokenBalance>, I>>(
    object: I
  ): PartyTokenBalance {
    const message = createBasePartyTokenBalance();
    message.party = object.party ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseBlockRejectStats(): BlockRejectStats {
  return { rejected: "0", total: "0" };
}

export const BlockRejectStats = {
  encode(
    message: BlockRejectStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rejected !== "0") {
      writer.uint32(8).uint64(message.rejected);
    }
    if (message.total !== "0") {
      writer.uint32(16).uint64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRejectStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRejectStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rejected = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.total = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BlockRejectStats {
    return {
      rejected: isSet(object.rejected) ? String(object.rejected) : "0",
      total: isSet(object.total) ? String(object.total) : "0",
    };
  },

  toJSON(message: BlockRejectStats): unknown {
    const obj: any = {};
    message.rejected !== undefined && (obj.rejected = message.rejected);
    message.total !== undefined && (obj.total = message.total);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BlockRejectStats>, I>>(
    object: I
  ): BlockRejectStats {
    const message = createBaseBlockRejectStats();
    message.rejected = object.rejected ?? "0";
    message.total = object.total ?? "0";
    return message;
  },
};

function createBaseSpamPartyTransactionCount(): SpamPartyTransactionCount {
  return { party: "", count: "0" };
}

export const SpamPartyTransactionCount = {
  encode(
    message: SpamPartyTransactionCount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.count !== "0") {
      writer.uint32(16).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SpamPartyTransactionCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpamPartyTransactionCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.count = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpamPartyTransactionCount {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      count: isSet(object.count) ? String(object.count) : "0",
    };
  },

  toJSON(message: SpamPartyTransactionCount): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpamPartyTransactionCount>, I>>(
    object: I
  ): SpamPartyTransactionCount {
    const message = createBaseSpamPartyTransactionCount();
    message.party = object.party ?? "";
    message.count = object.count ?? "0";
    return message;
  },
};

function createBaseSimpleSpamPolicy(): SimpleSpamPolicy {
  return {
    policyName: "",
    partyToCount: [],
    bannedParties: [],
    tokenBalance: [],
    currentEpochSeq: "0",
  };
}

export const SimpleSpamPolicy = {
  encode(
    message: SimpleSpamPolicy,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.policyName !== "") {
      writer.uint32(10).string(message.policyName);
    }
    for (const v of message.partyToCount) {
      SpamPartyTransactionCount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bannedParties) {
      BannedParty.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.tokenBalance) {
      PartyTokenBalance.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.currentEpochSeq !== "0") {
      writer.uint32(40).uint64(message.currentEpochSeq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleSpamPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleSpamPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyName = reader.string();
          break;
        case 2:
          message.partyToCount.push(
            SpamPartyTransactionCount.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.bannedParties.push(
            BannedParty.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.tokenBalance.push(
            PartyTokenBalance.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.currentEpochSeq = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleSpamPolicy {
    return {
      policyName: isSet(object.policyName) ? String(object.policyName) : "",
      partyToCount: Array.isArray(object?.partyToCount)
        ? object.partyToCount.map((e: any) =>
            SpamPartyTransactionCount.fromJSON(e)
          )
        : [],
      bannedParties: Array.isArray(object?.bannedParties)
        ? object.bannedParties.map((e: any) => BannedParty.fromJSON(e))
        : [],
      tokenBalance: Array.isArray(object?.tokenBalance)
        ? object.tokenBalance.map((e: any) => PartyTokenBalance.fromJSON(e))
        : [],
      currentEpochSeq: isSet(object.currentEpochSeq)
        ? String(object.currentEpochSeq)
        : "0",
    };
  },

  toJSON(message: SimpleSpamPolicy): unknown {
    const obj: any = {};
    message.policyName !== undefined && (obj.policyName = message.policyName);
    if (message.partyToCount) {
      obj.partyToCount = message.partyToCount.map((e) =>
        e ? SpamPartyTransactionCount.toJSON(e) : undefined
      );
    } else {
      obj.partyToCount = [];
    }
    if (message.bannedParties) {
      obj.bannedParties = message.bannedParties.map((e) =>
        e ? BannedParty.toJSON(e) : undefined
      );
    } else {
      obj.bannedParties = [];
    }
    if (message.tokenBalance) {
      obj.tokenBalance = message.tokenBalance.map((e) =>
        e ? PartyTokenBalance.toJSON(e) : undefined
      );
    } else {
      obj.tokenBalance = [];
    }
    message.currentEpochSeq !== undefined &&
      (obj.currentEpochSeq = message.currentEpochSeq);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleSpamPolicy>, I>>(
    object: I
  ): SimpleSpamPolicy {
    const message = createBaseSimpleSpamPolicy();
    message.policyName = object.policyName ?? "";
    message.partyToCount =
      object.partyToCount?.map((e) =>
        SpamPartyTransactionCount.fromPartial(e)
      ) || [];
    message.bannedParties =
      object.bannedParties?.map((e) => BannedParty.fromPartial(e)) || [];
    message.tokenBalance =
      object.tokenBalance?.map((e) => PartyTokenBalance.fromPartial(e)) || [];
    message.currentEpochSeq = object.currentEpochSeq ?? "0";
    return message;
  },
};

function createBaseNotarySigs(): NotarySigs {
  return { id: "", kind: 0, node: "", sig: "" };
}

export const NotarySigs = {
  encode(
    message: NotarySigs,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.node !== "") {
      writer.uint32(26).string(message.node);
    }
    if (message.sig !== "") {
      writer.uint32(34).string(message.sig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NotarySigs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotarySigs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.kind = reader.int32();
          break;
        case 3:
          message.node = reader.string();
          break;
        case 4:
          message.sig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NotarySigs {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? Number(object.kind) : 0,
      node: isSet(object.node) ? String(object.node) : "",
      sig: isSet(object.sig) ? String(object.sig) : "",
    };
  },

  toJSON(message: NotarySigs): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.kind !== undefined && (obj.kind = Math.round(message.kind));
    message.node !== undefined && (obj.node = message.node);
    message.sig !== undefined && (obj.sig = message.sig);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NotarySigs>, I>>(
    object: I
  ): NotarySigs {
    const message = createBaseNotarySigs();
    message.id = object.id ?? "";
    message.kind = object.kind ?? 0;
    message.node = object.node ?? "";
    message.sig = object.sig ?? "";
    return message;
  },
};

function createBaseNotary(): Notary {
  return { notarySigs: [] };
}

export const Notary = {
  encode(
    message: Notary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.notarySigs) {
      NotarySigs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Notary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNotary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notarySigs.push(NotarySigs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Notary {
    return {
      notarySigs: Array.isArray(object?.notarySigs)
        ? object.notarySigs.map((e: any) => NotarySigs.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Notary): unknown {
    const obj: any = {};
    if (message.notarySigs) {
      obj.notarySigs = message.notarySigs.map((e) =>
        e ? NotarySigs.toJSON(e) : undefined
      );
    } else {
      obj.notarySigs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Notary>, I>>(object: I): Notary {
    const message = createBaseNotary();
    message.notarySigs =
      object.notarySigs?.map((e) => NotarySigs.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReplayProtection(): ReplayProtection {
  return { transactions: [], backTol: "0", forwardTol: "0" };
}

export const ReplayProtection = {
  encode(
    message: ReplayProtection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transactions) {
      TransactionAtHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.backTol !== "0") {
      writer.uint32(16).uint64(message.backTol);
    }
    if (message.forwardTol !== "0") {
      writer.uint32(24).uint64(message.forwardTol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReplayProtection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplayProtection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactions.push(
            TransactionAtHeight.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.backTol = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.forwardTol = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReplayProtection {
    return {
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => TransactionAtHeight.fromJSON(e))
        : [],
      backTol: isSet(object.backTol) ? String(object.backTol) : "0",
      forwardTol: isSet(object.forwardTol) ? String(object.forwardTol) : "0",
    };
  },

  toJSON(message: ReplayProtection): unknown {
    const obj: any = {};
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        e ? TransactionAtHeight.toJSON(e) : undefined
      );
    } else {
      obj.transactions = [];
    }
    message.backTol !== undefined && (obj.backTol = message.backTol);
    message.forwardTol !== undefined && (obj.forwardTol = message.forwardTol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReplayProtection>, I>>(
    object: I
  ): ReplayProtection {
    const message = createBaseReplayProtection();
    message.transactions =
      object.transactions?.map((e) => TransactionAtHeight.fromPartial(e)) || [];
    message.backTol = object.backTol ?? "0";
    message.forwardTol = object.forwardTol ?? "0";
    return message;
  },
};

function createBaseTransactionAtHeight(): TransactionAtHeight {
  return { tx: "", height: "0" };
}

export const TransactionAtHeight = {
  encode(
    message: TransactionAtHeight,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx !== "") {
      writer.uint32(10).string(message.tx);
    }
    if (message.height !== "0") {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionAtHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionAtHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.string();
          break;
        case 2:
          message.height = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionAtHeight {
    return {
      tx: isSet(object.tx) ? String(object.tx) : "",
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: TransactionAtHeight): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionAtHeight>, I>>(
    object: I
  ): TransactionAtHeight {
    const message = createBaseTransactionAtHeight();
    message.tx = object.tx ?? "";
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseFutureState(): FutureState {
  return { marketId: "", settlementPrice: "", tradingTerminated: false };
}

export const FutureState = {
  encode(
    message: FutureState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.settlementPrice !== "") {
      writer.uint32(18).string(message.settlementPrice);
    }
    if (message.tradingTerminated === true) {
      writer.uint32(24).bool(message.tradingTerminated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FutureState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFutureState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.settlementPrice = reader.string();
          break;
        case 3:
          message.tradingTerminated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FutureState {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      settlementPrice: isSet(object.settlementPrice)
        ? String(object.settlementPrice)
        : "",
      tradingTerminated: isSet(object.tradingTerminated)
        ? Boolean(object.tradingTerminated)
        : false,
    };
  },

  toJSON(message: FutureState): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.settlementPrice !== undefined &&
      (obj.settlementPrice = message.settlementPrice);
    message.tradingTerminated !== undefined &&
      (obj.tradingTerminated = message.tradingTerminated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FutureState>, I>>(
    object: I
  ): FutureState {
    const message = createBaseFutureState();
    message.marketId = object.marketId ?? "";
    message.settlementPrice = object.settlementPrice ?? "";
    message.tradingTerminated = object.tradingTerminated ?? false;
    return message;
  },
};

function createBaseStakeVerifierDeposited(): StakeVerifierDeposited {
  return { pendingDeposited: [] };
}

export const StakeVerifierDeposited = {
  encode(
    message: StakeVerifierDeposited,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pendingDeposited) {
      StakeVerifierPending.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StakeVerifierDeposited {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeVerifierDeposited();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingDeposited.push(
            StakeVerifierPending.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeVerifierDeposited {
    return {
      pendingDeposited: Array.isArray(object?.pendingDeposited)
        ? object.pendingDeposited.map((e: any) =>
            StakeVerifierPending.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: StakeVerifierDeposited): unknown {
    const obj: any = {};
    if (message.pendingDeposited) {
      obj.pendingDeposited = message.pendingDeposited.map((e) =>
        e ? StakeVerifierPending.toJSON(e) : undefined
      );
    } else {
      obj.pendingDeposited = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeVerifierDeposited>, I>>(
    object: I
  ): StakeVerifierDeposited {
    const message = createBaseStakeVerifierDeposited();
    message.pendingDeposited =
      object.pendingDeposited?.map((e) =>
        StakeVerifierPending.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseStakeVerifierRemoved(): StakeVerifierRemoved {
  return { pendingRemoved: [] };
}

export const StakeVerifierRemoved = {
  encode(
    message: StakeVerifierRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pendingRemoved) {
      StakeVerifierPending.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StakeVerifierRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeVerifierRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingRemoved.push(
            StakeVerifierPending.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeVerifierRemoved {
    return {
      pendingRemoved: Array.isArray(object?.pendingRemoved)
        ? object.pendingRemoved.map((e: any) =>
            StakeVerifierPending.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: StakeVerifierRemoved): unknown {
    const obj: any = {};
    if (message.pendingRemoved) {
      obj.pendingRemoved = message.pendingRemoved.map((e) =>
        e ? StakeVerifierPending.toJSON(e) : undefined
      );
    } else {
      obj.pendingRemoved = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeVerifierRemoved>, I>>(
    object: I
  ): StakeVerifierRemoved {
    const message = createBaseStakeVerifierRemoved();
    message.pendingRemoved =
      object.pendingRemoved?.map((e) => StakeVerifierPending.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseStakeVerifierPending(): StakeVerifierPending {
  return {
    ethereumAddress: "",
    vegaPublicKey: "",
    amount: "",
    blockTime: "0",
    blockNumber: "0",
    logIndex: "0",
    txId: "",
    id: "",
  };
}

export const StakeVerifierPending = {
  encode(
    message: StakeVerifierPending,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ethereumAddress !== "") {
      writer.uint32(10).string(message.ethereumAddress);
    }
    if (message.vegaPublicKey !== "") {
      writer.uint32(18).string(message.vegaPublicKey);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.blockTime !== "0") {
      writer.uint32(32).int64(message.blockTime);
    }
    if (message.blockNumber !== "0") {
      writer.uint32(40).uint64(message.blockNumber);
    }
    if (message.logIndex !== "0") {
      writer.uint32(48).uint64(message.logIndex);
    }
    if (message.txId !== "") {
      writer.uint32(58).string(message.txId);
    }
    if (message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StakeVerifierPending {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeVerifierPending();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethereumAddress = reader.string();
          break;
        case 2:
          message.vegaPublicKey = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        case 5:
          message.blockNumber = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.logIndex = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.txId = reader.string();
          break;
        case 8:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeVerifierPending {
    return {
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
      vegaPublicKey: isSet(object.vegaPublicKey)
        ? String(object.vegaPublicKey)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
      blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
      logIndex: isSet(object.logIndex) ? String(object.logIndex) : "0",
      txId: isSet(object.txId) ? String(object.txId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: StakeVerifierPending): unknown {
    const obj: any = {};
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    message.vegaPublicKey !== undefined &&
      (obj.vegaPublicKey = message.vegaPublicKey);
    message.amount !== undefined && (obj.amount = message.amount);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    message.logIndex !== undefined && (obj.logIndex = message.logIndex);
    message.txId !== undefined && (obj.txId = message.txId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeVerifierPending>, I>>(
    object: I
  ): StakeVerifierPending {
    const message = createBaseStakeVerifierPending();
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.vegaPublicKey = object.vegaPublicKey ?? "";
    message.amount = object.amount ?? "";
    message.blockTime = object.blockTime ?? "0";
    message.blockNumber = object.blockNumber ?? "0";
    message.logIndex = object.logIndex ?? "0";
    message.txId = object.txId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBasePendingKeyRotation(): PendingKeyRotation {
  return { blockHeight: "0", nodeId: "", newPubKey: "", newPubKeyIndex: 0 };
}

export const PendingKeyRotation = {
  encode(
    message: PendingKeyRotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== "0") {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.newPubKey !== "") {
      writer.uint32(26).string(message.newPubKey);
    }
    if (message.newPubKeyIndex !== 0) {
      writer.uint32(32).uint32(message.newPubKeyIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingKeyRotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingKeyRotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.newPubKey = reader.string();
          break;
        case 4:
          message.newPubKeyIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingKeyRotation {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      newPubKey: isSet(object.newPubKey) ? String(object.newPubKey) : "",
      newPubKeyIndex: isSet(object.newPubKeyIndex)
        ? Number(object.newPubKeyIndex)
        : 0,
    };
  },

  toJSON(message: PendingKeyRotation): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey);
    message.newPubKeyIndex !== undefined &&
      (obj.newPubKeyIndex = Math.round(message.newPubKeyIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingKeyRotation>, I>>(
    object: I
  ): PendingKeyRotation {
    const message = createBasePendingKeyRotation();
    message.blockHeight = object.blockHeight ?? "0";
    message.nodeId = object.nodeId ?? "";
    message.newPubKey = object.newPubKey ?? "";
    message.newPubKeyIndex = object.newPubKeyIndex ?? 0;
    return message;
  },
};

function createBasePendingEthereumKeyRotation(): PendingEthereumKeyRotation {
  return { blockHeight: "0", nodeId: "", newAddress: "" };
}

export const PendingEthereumKeyRotation = {
  encode(
    message: PendingEthereumKeyRotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== "0") {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.newAddress !== "") {
      writer.uint32(26).string(message.newAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingEthereumKeyRotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingEthereumKeyRotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.newAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingEthereumKeyRotation {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
    };
  },

  toJSON(message: PendingEthereumKeyRotation): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingEthereumKeyRotation>, I>>(
    object: I
  ): PendingEthereumKeyRotation {
    const message = createBasePendingEthereumKeyRotation();
    message.blockHeight = object.blockHeight ?? "0";
    message.nodeId = object.nodeId ?? "";
    message.newAddress = object.newAddress ?? "";
    return message;
  },
};

function createBaseTopology(): Topology {
  return {
    validatorData: [],
    chainKeys: [],
    pendingPubKeyRotations: [],
    validatorPerformance: undefined,
    pendingEthereumKeyRotations: [],
  };
}

export const Topology = {
  encode(
    message: Topology,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validatorData) {
      ValidatorState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.chainKeys) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.pendingPubKeyRotations) {
      PendingKeyRotation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.validatorPerformance !== undefined) {
      ValidatorPerformance.encode(
        message.validatorPerformance,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.pendingEthereumKeyRotations) {
      PendingEthereumKeyRotation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Topology {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTopology();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorData.push(
            ValidatorState.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.chainKeys.push(reader.string());
          break;
        case 3:
          message.pendingPubKeyRotations.push(
            PendingKeyRotation.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.validatorPerformance = ValidatorPerformance.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.pendingEthereumKeyRotations.push(
            PendingEthereumKeyRotation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Topology {
    return {
      validatorData: Array.isArray(object?.validatorData)
        ? object.validatorData.map((e: any) => ValidatorState.fromJSON(e))
        : [],
      chainKeys: Array.isArray(object?.chainKeys)
        ? object.chainKeys.map((e: any) => String(e))
        : [],
      pendingPubKeyRotations: Array.isArray(object?.pendingPubKeyRotations)
        ? object.pendingPubKeyRotations.map((e: any) =>
            PendingKeyRotation.fromJSON(e)
          )
        : [],
      validatorPerformance: isSet(object.validatorPerformance)
        ? ValidatorPerformance.fromJSON(object.validatorPerformance)
        : undefined,
      pendingEthereumKeyRotations: Array.isArray(
        object?.pendingEthereumKeyRotations
      )
        ? object.pendingEthereumKeyRotations.map((e: any) =>
            PendingEthereumKeyRotation.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Topology): unknown {
    const obj: any = {};
    if (message.validatorData) {
      obj.validatorData = message.validatorData.map((e) =>
        e ? ValidatorState.toJSON(e) : undefined
      );
    } else {
      obj.validatorData = [];
    }
    if (message.chainKeys) {
      obj.chainKeys = message.chainKeys.map((e) => e);
    } else {
      obj.chainKeys = [];
    }
    if (message.pendingPubKeyRotations) {
      obj.pendingPubKeyRotations = message.pendingPubKeyRotations.map((e) =>
        e ? PendingKeyRotation.toJSON(e) : undefined
      );
    } else {
      obj.pendingPubKeyRotations = [];
    }
    message.validatorPerformance !== undefined &&
      (obj.validatorPerformance = message.validatorPerformance
        ? ValidatorPerformance.toJSON(message.validatorPerformance)
        : undefined);
    if (message.pendingEthereumKeyRotations) {
      obj.pendingEthereumKeyRotations = message.pendingEthereumKeyRotations.map(
        (e) => (e ? PendingEthereumKeyRotation.toJSON(e) : undefined)
      );
    } else {
      obj.pendingEthereumKeyRotations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Topology>, I>>(object: I): Topology {
    const message = createBaseTopology();
    message.validatorData =
      object.validatorData?.map((e) => ValidatorState.fromPartial(e)) || [];
    message.chainKeys = object.chainKeys?.map((e) => e) || [];
    message.pendingPubKeyRotations =
      object.pendingPubKeyRotations?.map((e) =>
        PendingKeyRotation.fromPartial(e)
      ) || [];
    message.validatorPerformance =
      object.validatorPerformance !== undefined &&
      object.validatorPerformance !== null
        ? ValidatorPerformance.fromPartial(object.validatorPerformance)
        : undefined;
    message.pendingEthereumKeyRotations =
      object.pendingEthereumKeyRotations?.map((e) =>
        PendingEthereumKeyRotation.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseValidatorState(): ValidatorState {
  return {
    validatorUpdate: undefined,
    blockAdded: "0",
    status: 0,
    statusChangeBlock: "0",
    lastBlockWithPositiveRanking: "0",
    ethEventsForwarded: "0",
    heartbeatTracker: undefined,
    validatorPower: "0",
    rankingScore: undefined,
  };
}

export const ValidatorState = {
  encode(
    message: ValidatorState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorUpdate !== undefined) {
      ValidatorUpdate.encode(
        message.validatorUpdate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.blockAdded !== "0") {
      writer.uint32(16).uint64(message.blockAdded);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.statusChangeBlock !== "0") {
      writer.uint32(32).uint64(message.statusChangeBlock);
    }
    if (message.lastBlockWithPositiveRanking !== "0") {
      writer.uint32(40).uint64(message.lastBlockWithPositiveRanking);
    }
    if (message.ethEventsForwarded !== "0") {
      writer.uint32(48).uint64(message.ethEventsForwarded);
    }
    if (message.heartbeatTracker !== undefined) {
      HeartbeatTracker.encode(
        message.heartbeatTracker,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.validatorPower !== "0") {
      writer.uint32(64).int64(message.validatorPower);
    }
    if (message.rankingScore !== undefined) {
      RankingScore.encode(
        message.rankingScore,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdate = ValidatorUpdate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.blockAdded = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.status = reader.int32();
          break;
        case 4:
          message.statusChangeBlock = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.lastBlockWithPositiveRanking = longToString(
            reader.uint64() as Long
          );
          break;
        case 6:
          message.ethEventsForwarded = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.heartbeatTracker = HeartbeatTracker.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.validatorPower = longToString(reader.int64() as Long);
          break;
        case 9:
          message.rankingScore = RankingScore.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorState {
    return {
      validatorUpdate: isSet(object.validatorUpdate)
        ? ValidatorUpdate.fromJSON(object.validatorUpdate)
        : undefined,
      blockAdded: isSet(object.blockAdded) ? String(object.blockAdded) : "0",
      status: isSet(object.status) ? Number(object.status) : 0,
      statusChangeBlock: isSet(object.statusChangeBlock)
        ? String(object.statusChangeBlock)
        : "0",
      lastBlockWithPositiveRanking: isSet(object.lastBlockWithPositiveRanking)
        ? String(object.lastBlockWithPositiveRanking)
        : "0",
      ethEventsForwarded: isSet(object.ethEventsForwarded)
        ? String(object.ethEventsForwarded)
        : "0",
      heartbeatTracker: isSet(object.heartbeatTracker)
        ? HeartbeatTracker.fromJSON(object.heartbeatTracker)
        : undefined,
      validatorPower: isSet(object.validatorPower)
        ? String(object.validatorPower)
        : "0",
      rankingScore: isSet(object.rankingScore)
        ? RankingScore.fromJSON(object.rankingScore)
        : undefined,
    };
  },

  toJSON(message: ValidatorState): unknown {
    const obj: any = {};
    message.validatorUpdate !== undefined &&
      (obj.validatorUpdate = message.validatorUpdate
        ? ValidatorUpdate.toJSON(message.validatorUpdate)
        : undefined);
    message.blockAdded !== undefined && (obj.blockAdded = message.blockAdded);
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.statusChangeBlock !== undefined &&
      (obj.statusChangeBlock = message.statusChangeBlock);
    message.lastBlockWithPositiveRanking !== undefined &&
      (obj.lastBlockWithPositiveRanking = message.lastBlockWithPositiveRanking);
    message.ethEventsForwarded !== undefined &&
      (obj.ethEventsForwarded = message.ethEventsForwarded);
    message.heartbeatTracker !== undefined &&
      (obj.heartbeatTracker = message.heartbeatTracker
        ? HeartbeatTracker.toJSON(message.heartbeatTracker)
        : undefined);
    message.validatorPower !== undefined &&
      (obj.validatorPower = message.validatorPower);
    message.rankingScore !== undefined &&
      (obj.rankingScore = message.rankingScore
        ? RankingScore.toJSON(message.rankingScore)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorState>, I>>(
    object: I
  ): ValidatorState {
    const message = createBaseValidatorState();
    message.validatorUpdate =
      object.validatorUpdate !== undefined && object.validatorUpdate !== null
        ? ValidatorUpdate.fromPartial(object.validatorUpdate)
        : undefined;
    message.blockAdded = object.blockAdded ?? "0";
    message.status = object.status ?? 0;
    message.statusChangeBlock = object.statusChangeBlock ?? "0";
    message.lastBlockWithPositiveRanking =
      object.lastBlockWithPositiveRanking ?? "0";
    message.ethEventsForwarded = object.ethEventsForwarded ?? "0";
    message.heartbeatTracker =
      object.heartbeatTracker !== undefined && object.heartbeatTracker !== null
        ? HeartbeatTracker.fromPartial(object.heartbeatTracker)
        : undefined;
    message.validatorPower = object.validatorPower ?? "0";
    message.rankingScore =
      object.rankingScore !== undefined && object.rankingScore !== null
        ? RankingScore.fromPartial(object.rankingScore)
        : undefined;
    return message;
  },
};

function createBaseHeartbeatTracker(): HeartbeatTracker {
  return {
    expectedNextHash: "",
    expectedNextHashSince: "0",
    blockIndex: 0,
    blockSigs: [],
  };
}

export const HeartbeatTracker = {
  encode(
    message: HeartbeatTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.expectedNextHash !== "") {
      writer.uint32(10).string(message.expectedNextHash);
    }
    if (message.expectedNextHashSince !== "0") {
      writer.uint32(16).int64(message.expectedNextHashSince);
    }
    if (message.blockIndex !== 0) {
      writer.uint32(24).int32(message.blockIndex);
    }
    writer.uint32(34).fork();
    for (const v of message.blockSigs) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeartbeatTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeartbeatTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.expectedNextHash = reader.string();
          break;
        case 2:
          message.expectedNextHashSince = longToString(reader.int64() as Long);
          break;
        case 3:
          message.blockIndex = reader.int32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blockSigs.push(reader.bool());
            }
          } else {
            message.blockSigs.push(reader.bool());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HeartbeatTracker {
    return {
      expectedNextHash: isSet(object.expectedNextHash)
        ? String(object.expectedNextHash)
        : "",
      expectedNextHashSince: isSet(object.expectedNextHashSince)
        ? String(object.expectedNextHashSince)
        : "0",
      blockIndex: isSet(object.blockIndex) ? Number(object.blockIndex) : 0,
      blockSigs: Array.isArray(object?.blockSigs)
        ? object.blockSigs.map((e: any) => Boolean(e))
        : [],
    };
  },

  toJSON(message: HeartbeatTracker): unknown {
    const obj: any = {};
    message.expectedNextHash !== undefined &&
      (obj.expectedNextHash = message.expectedNextHash);
    message.expectedNextHashSince !== undefined &&
      (obj.expectedNextHashSince = message.expectedNextHashSince);
    message.blockIndex !== undefined &&
      (obj.blockIndex = Math.round(message.blockIndex));
    if (message.blockSigs) {
      obj.blockSigs = message.blockSigs.map((e) => e);
    } else {
      obj.blockSigs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeartbeatTracker>, I>>(
    object: I
  ): HeartbeatTracker {
    const message = createBaseHeartbeatTracker();
    message.expectedNextHash = object.expectedNextHash ?? "";
    message.expectedNextHashSince = object.expectedNextHashSince ?? "0";
    message.blockIndex = object.blockIndex ?? 0;
    message.blockSigs = object.blockSigs?.map((e) => e) || [];
    return message;
  },
};

function createBasePerformanceStats(): PerformanceStats {
  return {
    validatorAddress: "",
    proposed: "0",
    elected: "0",
    voted: "0",
    lastHeightVoted: "0",
    lastHeightProposed: "0",
    lastHeightElected: "0",
  };
}

export const PerformanceStats = {
  encode(
    message: PerformanceStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.proposed !== "0") {
      writer.uint32(16).uint64(message.proposed);
    }
    if (message.elected !== "0") {
      writer.uint32(24).uint64(message.elected);
    }
    if (message.voted !== "0") {
      writer.uint32(32).uint64(message.voted);
    }
    if (message.lastHeightVoted !== "0") {
      writer.uint32(40).int64(message.lastHeightVoted);
    }
    if (message.lastHeightProposed !== "0") {
      writer.uint32(48).int64(message.lastHeightProposed);
    }
    if (message.lastHeightElected !== "0") {
      writer.uint32(56).int64(message.lastHeightElected);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PerformanceStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformanceStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.proposed = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.elected = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.voted = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.lastHeightVoted = longToString(reader.int64() as Long);
          break;
        case 6:
          message.lastHeightProposed = longToString(reader.int64() as Long);
          break;
        case 7:
          message.lastHeightElected = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PerformanceStats {
    return {
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : "",
      proposed: isSet(object.proposed) ? String(object.proposed) : "0",
      elected: isSet(object.elected) ? String(object.elected) : "0",
      voted: isSet(object.voted) ? String(object.voted) : "0",
      lastHeightVoted: isSet(object.lastHeightVoted)
        ? String(object.lastHeightVoted)
        : "0",
      lastHeightProposed: isSet(object.lastHeightProposed)
        ? String(object.lastHeightProposed)
        : "0",
      lastHeightElected: isSet(object.lastHeightElected)
        ? String(object.lastHeightElected)
        : "0",
    };
  },

  toJSON(message: PerformanceStats): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.proposed !== undefined && (obj.proposed = message.proposed);
    message.elected !== undefined && (obj.elected = message.elected);
    message.voted !== undefined && (obj.voted = message.voted);
    message.lastHeightVoted !== undefined &&
      (obj.lastHeightVoted = message.lastHeightVoted);
    message.lastHeightProposed !== undefined &&
      (obj.lastHeightProposed = message.lastHeightProposed);
    message.lastHeightElected !== undefined &&
      (obj.lastHeightElected = message.lastHeightElected);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PerformanceStats>, I>>(
    object: I
  ): PerformanceStats {
    const message = createBasePerformanceStats();
    message.validatorAddress = object.validatorAddress ?? "";
    message.proposed = object.proposed ?? "0";
    message.elected = object.elected ?? "0";
    message.voted = object.voted ?? "0";
    message.lastHeightVoted = object.lastHeightVoted ?? "0";
    message.lastHeightProposed = object.lastHeightProposed ?? "0";
    message.lastHeightElected = object.lastHeightElected ?? "0";
    return message;
  },
};

function createBaseValidatorPerformance(): ValidatorPerformance {
  return { validatorPerfStats: [] };
}

export const ValidatorPerformance = {
  encode(
    message: ValidatorPerformance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validatorPerfStats) {
      PerformanceStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ValidatorPerformance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorPerformance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPerfStats.push(
            PerformanceStats.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorPerformance {
    return {
      validatorPerfStats: Array.isArray(object?.validatorPerfStats)
        ? object.validatorPerfStats.map((e: any) =>
            PerformanceStats.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: ValidatorPerformance): unknown {
    const obj: any = {};
    if (message.validatorPerfStats) {
      obj.validatorPerfStats = message.validatorPerfStats.map((e) =>
        e ? PerformanceStats.toJSON(e) : undefined
      );
    } else {
      obj.validatorPerfStats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorPerformance>, I>>(
    object: I
  ): ValidatorPerformance {
    const message = createBaseValidatorPerformance();
    message.validatorPerfStats =
      object.validatorPerfStats?.map((e) => PerformanceStats.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseLiquidityParameters(): LiquidityParameters {
  return {
    maxFee: "",
    maxShapeSize: "",
    stakeToObligationFactor: "",
    marketId: "",
  };
}

export const LiquidityParameters = {
  encode(
    message: LiquidityParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxFee !== "") {
      writer.uint32(10).string(message.maxFee);
    }
    if (message.maxShapeSize !== "") {
      writer.uint32(18).string(message.maxShapeSize);
    }
    if (message.stakeToObligationFactor !== "") {
      writer.uint32(26).string(message.stakeToObligationFactor);
    }
    if (message.marketId !== "") {
      writer.uint32(34).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxFee = reader.string();
          break;
        case 2:
          message.maxShapeSize = reader.string();
          break;
        case 3:
          message.stakeToObligationFactor = reader.string();
          break;
        case 4:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityParameters {
    return {
      maxFee: isSet(object.maxFee) ? String(object.maxFee) : "",
      maxShapeSize: isSet(object.maxShapeSize)
        ? String(object.maxShapeSize)
        : "",
      stakeToObligationFactor: isSet(object.stakeToObligationFactor)
        ? String(object.stakeToObligationFactor)
        : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LiquidityParameters): unknown {
    const obj: any = {};
    message.maxFee !== undefined && (obj.maxFee = message.maxFee);
    message.maxShapeSize !== undefined &&
      (obj.maxShapeSize = message.maxShapeSize);
    message.stakeToObligationFactor !== undefined &&
      (obj.stakeToObligationFactor = message.stakeToObligationFactor);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityParameters>, I>>(
    object: I
  ): LiquidityParameters {
    const message = createBaseLiquidityParameters();
    message.maxFee = object.maxFee ?? "";
    message.maxShapeSize = object.maxShapeSize ?? "";
    message.stakeToObligationFactor = object.stakeToObligationFactor ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseLiquidityPendingProvisions(): LiquidityPendingProvisions {
  return { pendingProvisions: [], marketId: "" };
}

export const LiquidityPendingProvisions = {
  encode(
    message: LiquidityPendingProvisions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pendingProvisions) {
      writer.uint32(10).string(v!);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityPendingProvisions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPendingProvisions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingProvisions.push(reader.string());
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityPendingProvisions {
    return {
      pendingProvisions: Array.isArray(object?.pendingProvisions)
        ? object.pendingProvisions.map((e: any) => String(e))
        : [],
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LiquidityPendingProvisions): unknown {
    const obj: any = {};
    if (message.pendingProvisions) {
      obj.pendingProvisions = message.pendingProvisions.map((e) => e);
    } else {
      obj.pendingProvisions = [];
    }
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityPendingProvisions>, I>>(
    object: I
  ): LiquidityPendingProvisions {
    const message = createBaseLiquidityPendingProvisions();
    message.pendingProvisions = object.pendingProvisions?.map((e) => e) || [];
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseLiquidityPartiesLiquidityOrders(): LiquidityPartiesLiquidityOrders {
  return { orders: [], marketId: "" };
}

export const LiquidityPartiesLiquidityOrders = {
  encode(
    message: LiquidityPartiesLiquidityOrders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityPartiesLiquidityOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPartiesLiquidityOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityPartiesLiquidityOrders {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LiquidityPartiesLiquidityOrders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityPartiesLiquidityOrders>, I>>(
    object: I
  ): LiquidityPartiesLiquidityOrders {
    const message = createBaseLiquidityPartiesLiquidityOrders();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseLiquidityPartiesOrders(): LiquidityPartiesOrders {
  return { orders: [], marketId: "" };
}

export const LiquidityPartiesOrders = {
  encode(
    message: LiquidityPartiesOrders,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityPartiesOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityPartiesOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityPartiesOrders {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LiquidityPartiesOrders): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityPartiesOrders>, I>>(
    object: I
  ): LiquidityPartiesOrders {
    const message = createBaseLiquidityPartiesOrders();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseLiquidityProvisions(): LiquidityProvisions {
  return { liquidityProvisions: [], marketId: "" };
}

export const LiquidityProvisions = {
  encode(
    message: LiquidityProvisions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidityProvisions) {
      LiquidityProvision.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvisions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvisions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityProvisions.push(
            LiquidityProvision.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvisions {
    return {
      liquidityProvisions: Array.isArray(object?.liquidityProvisions)
        ? object.liquidityProvisions.map((e: any) =>
            LiquidityProvision.fromJSON(e)
          )
        : [],
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LiquidityProvisions): unknown {
    const obj: any = {};
    if (message.liquidityProvisions) {
      obj.liquidityProvisions = message.liquidityProvisions.map((e) =>
        e ? LiquidityProvision.toJSON(e) : undefined
      );
    } else {
      obj.liquidityProvisions = [];
    }
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProvisions>, I>>(
    object: I
  ): LiquidityProvisions {
    const message = createBaseLiquidityProvisions();
    message.liquidityProvisions =
      object.liquidityProvisions?.map((e) =>
        LiquidityProvision.fromPartial(e)
      ) || [];
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseFloatingPointConsensus(): FloatingPointConsensus {
  return { nextTimeTrigger: [] };
}

export const FloatingPointConsensus = {
  encode(
    message: FloatingPointConsensus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nextTimeTrigger) {
      NextTimeTrigger.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FloatingPointConsensus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatingPointConsensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextTimeTrigger.push(
            NextTimeTrigger.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FloatingPointConsensus {
    return {
      nextTimeTrigger: Array.isArray(object?.nextTimeTrigger)
        ? object.nextTimeTrigger.map((e: any) => NextTimeTrigger.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FloatingPointConsensus): unknown {
    const obj: any = {};
    if (message.nextTimeTrigger) {
      obj.nextTimeTrigger = message.nextTimeTrigger.map((e) =>
        e ? NextTimeTrigger.toJSON(e) : undefined
      );
    } else {
      obj.nextTimeTrigger = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FloatingPointConsensus>, I>>(
    object: I
  ): FloatingPointConsensus {
    const message = createBaseFloatingPointConsensus();
    message.nextTimeTrigger =
      object.nextTimeTrigger?.map((e) => NextTimeTrigger.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNextTimeTrigger(): NextTimeTrigger {
  return { asset: "", market: "", id: "", nextTrigger: "0" };
}

export const NextTimeTrigger = {
  encode(
    message: NextTimeTrigger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.nextTrigger !== "0") {
      writer.uint32(32).int64(message.nextTrigger);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NextTimeTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextTimeTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.nextTrigger = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NextTimeTrigger {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      market: isSet(object.market) ? String(object.market) : "",
      id: isSet(object.id) ? String(object.id) : "",
      nextTrigger: isSet(object.nextTrigger) ? String(object.nextTrigger) : "0",
    };
  },

  toJSON(message: NextTimeTrigger): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    message.market !== undefined && (obj.market = message.market);
    message.id !== undefined && (obj.id = message.id);
    message.nextTrigger !== undefined &&
      (obj.nextTrigger = message.nextTrigger);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NextTimeTrigger>, I>>(
    object: I
  ): NextTimeTrigger {
    const message = createBaseNextTimeTrigger();
    message.asset = object.asset ?? "";
    message.market = object.market ?? "";
    message.id = object.id ?? "";
    message.nextTrigger = object.nextTrigger ?? "0";
    return message;
  },
};

function createBaseFeesTracker(): FeesTracker {
  return { assetFees: [] };
}

export const FeesTracker = {
  encode(
    message: FeesTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assetFees) {
      AssetFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeesTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeesTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetFees.push(AssetFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeesTracker {
    return {
      assetFees: Array.isArray(object?.assetFees)
        ? object.assetFees.map((e: any) => AssetFees.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FeesTracker): unknown {
    const obj: any = {};
    if (message.assetFees) {
      obj.assetFees = message.assetFees.map((e) =>
        e ? AssetFees.toJSON(e) : undefined
      );
    } else {
      obj.assetFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeesTracker>, I>>(
    object: I
  ): FeesTracker {
    const message = createBaseFeesTracker();
    message.assetFees =
      object.assetFees?.map((e) => AssetFees.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetFees(): AssetFees {
  return { asset: "", makerFees: [], takerFees: [], lpFees: [] };
}

export const AssetFees = {
  encode(
    message: AssetFees,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    for (const v of message.makerFees) {
      PartyFees.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.takerFees) {
      PartyFees.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.lpFees) {
      PartyFees.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        case 2:
          message.makerFees.push(PartyFees.decode(reader, reader.uint32()));
          break;
        case 3:
          message.takerFees.push(PartyFees.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lpFees.push(PartyFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetFees {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
      makerFees: Array.isArray(object?.makerFees)
        ? object.makerFees.map((e: any) => PartyFees.fromJSON(e))
        : [],
      takerFees: Array.isArray(object?.takerFees)
        ? object.takerFees.map((e: any) => PartyFees.fromJSON(e))
        : [],
      lpFees: Array.isArray(object?.lpFees)
        ? object.lpFees.map((e: any) => PartyFees.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AssetFees): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.makerFees) {
      obj.makerFees = message.makerFees.map((e) =>
        e ? PartyFees.toJSON(e) : undefined
      );
    } else {
      obj.makerFees = [];
    }
    if (message.takerFees) {
      obj.takerFees = message.takerFees.map((e) =>
        e ? PartyFees.toJSON(e) : undefined
      );
    } else {
      obj.takerFees = [];
    }
    if (message.lpFees) {
      obj.lpFees = message.lpFees.map((e) =>
        e ? PartyFees.toJSON(e) : undefined
      );
    } else {
      obj.lpFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetFees>, I>>(
    object: I
  ): AssetFees {
    const message = createBaseAssetFees();
    message.asset = object.asset ?? "";
    message.makerFees =
      object.makerFees?.map((e) => PartyFees.fromPartial(e)) || [];
    message.takerFees =
      object.takerFees?.map((e) => PartyFees.fromPartial(e)) || [];
    message.lpFees = object.lpFees?.map((e) => PartyFees.fromPartial(e)) || [];
    return message;
  },
};

function createBasePartyFees(): PartyFees {
  return { party: "", fee: "" };
}

export const PartyFees = {
  encode(
    message: PartyFees,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyFees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyFees {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: PartyFees): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyFees>, I>>(
    object: I
  ): PartyFees {
    const message = createBasePartyFees();
    message.party = object.party ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseMarketTracker(): MarketTracker {
  return { marketTracker: [] };
}

export const MarketTracker = {
  encode(
    message: MarketTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketTracker) {
      MarketVolumeTracker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketTracker.push(
            MarketVolumeTracker.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketTracker {
    return {
      marketTracker: Array.isArray(object?.marketTracker)
        ? object.marketTracker.map((e: any) => MarketVolumeTracker.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarketTracker): unknown {
    const obj: any = {};
    if (message.marketTracker) {
      obj.marketTracker = message.marketTracker.map((e) =>
        e ? MarketVolumeTracker.toJSON(e) : undefined
      );
    } else {
      obj.marketTracker = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketTracker>, I>>(
    object: I
  ): MarketTracker {
    const message = createBaseMarketTracker();
    message.marketTracker =
      object.marketTracker?.map((e) => MarketVolumeTracker.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseMarketVolumeTracker(): MarketVolumeTracker {
  return { marketId: "", proposer: "", bonusPaid: false, volumeTraded: "" };
}

export const MarketVolumeTracker = {
  encode(
    message: MarketVolumeTracker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.bonusPaid === true) {
      writer.uint32(24).bool(message.bonusPaid);
    }
    if (message.volumeTraded !== "") {
      writer.uint32(34).string(message.volumeTraded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketVolumeTracker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketVolumeTracker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.bonusPaid = reader.bool();
          break;
        case 4:
          message.volumeTraded = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketVolumeTracker {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      bonusPaid: isSet(object.bonusPaid) ? Boolean(object.bonusPaid) : false,
      volumeTraded: isSet(object.volumeTraded)
        ? String(object.volumeTraded)
        : "",
    };
  },

  toJSON(message: MarketVolumeTracker): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.bonusPaid !== undefined && (obj.bonusPaid = message.bonusPaid);
    message.volumeTraded !== undefined &&
      (obj.volumeTraded = message.volumeTraded);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketVolumeTracker>, I>>(
    object: I
  ): MarketVolumeTracker {
    const message = createBaseMarketVolumeTracker();
    message.marketId = object.marketId ?? "";
    message.proposer = object.proposer ?? "";
    message.bonusPaid = object.bonusPaid ?? false;
    message.volumeTraded = object.volumeTraded ?? "";
    return message;
  },
};

function createBaseSignerEventsPerAddress(): SignerEventsPerAddress {
  return { address: "", events: [] };
}

export const SignerEventsPerAddress = {
  encode(
    message: SignerEventsPerAddress,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.events) {
      ERC20MultiSigSignerEvent.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SignerEventsPerAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignerEventsPerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.events.push(
            ERC20MultiSigSignerEvent.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignerEventsPerAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => ERC20MultiSigSignerEvent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SignerEventsPerAddress): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? ERC20MultiSigSignerEvent.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignerEventsPerAddress>, I>>(
    object: I
  ): SignerEventsPerAddress {
    const message = createBaseSignerEventsPerAddress();
    message.address = object.address ?? "";
    message.events =
      object.events?.map((e) => ERC20MultiSigSignerEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseERC20MultiSigTopologyVerified(): ERC20MultiSigTopologyVerified {
  return {
    signers: [],
    eventsPerAddress: [],
    threshold: undefined,
    seenEvents: [],
  };
}

export const ERC20MultiSigTopologyVerified = {
  encode(
    message: ERC20MultiSigTopologyVerified,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.eventsPerAddress) {
      SignerEventsPerAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.threshold !== undefined) {
      ERC20MultiSigThresholdSetEvent.encode(
        message.threshold,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.seenEvents) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MultiSigTopologyVerified {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigTopologyVerified();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.eventsPerAddress.push(
            SignerEventsPerAddress.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.threshold = ERC20MultiSigThresholdSetEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.seenEvents.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MultiSigTopologyVerified {
    return {
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      eventsPerAddress: Array.isArray(object?.eventsPerAddress)
        ? object.eventsPerAddress.map((e: any) =>
            SignerEventsPerAddress.fromJSON(e)
          )
        : [],
      threshold: isSet(object.threshold)
        ? ERC20MultiSigThresholdSetEvent.fromJSON(object.threshold)
        : undefined,
      seenEvents: Array.isArray(object?.seenEvents)
        ? object.seenEvents.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ERC20MultiSigTopologyVerified): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map((e) => e);
    } else {
      obj.signers = [];
    }
    if (message.eventsPerAddress) {
      obj.eventsPerAddress = message.eventsPerAddress.map((e) =>
        e ? SignerEventsPerAddress.toJSON(e) : undefined
      );
    } else {
      obj.eventsPerAddress = [];
    }
    message.threshold !== undefined &&
      (obj.threshold = message.threshold
        ? ERC20MultiSigThresholdSetEvent.toJSON(message.threshold)
        : undefined);
    if (message.seenEvents) {
      obj.seenEvents = message.seenEvents.map((e) => e);
    } else {
      obj.seenEvents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigTopologyVerified>, I>>(
    object: I
  ): ERC20MultiSigTopologyVerified {
    const message = createBaseERC20MultiSigTopologyVerified();
    message.signers = object.signers?.map((e) => e) || [];
    message.eventsPerAddress =
      object.eventsPerAddress?.map((e) =>
        SignerEventsPerAddress.fromPartial(e)
      ) || [];
    message.threshold =
      object.threshold !== undefined && object.threshold !== null
        ? ERC20MultiSigThresholdSetEvent.fromPartial(object.threshold)
        : undefined;
    message.seenEvents = object.seenEvents?.map((e) => e) || [];
    return message;
  },
};

function createBaseERC20MultiSigTopologyPending(): ERC20MultiSigTopologyPending {
  return {
    pendingSigners: [],
    pendingThresholdSet: [],
    witnessedSigners: [],
    witnessedThresholdSets: [],
  };
}

export const ERC20MultiSigTopologyPending = {
  encode(
    message: ERC20MultiSigTopologyPending,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pendingSigners) {
      ERC20MultiSigSignerEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pendingThresholdSet) {
      ERC20MultiSigThresholdSetEvent.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.witnessedSigners) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.witnessedThresholdSets) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MultiSigTopologyPending {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigTopologyPending();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingSigners.push(
            ERC20MultiSigSignerEvent.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pendingThresholdSet.push(
            ERC20MultiSigThresholdSetEvent.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.witnessedSigners.push(reader.string());
          break;
        case 4:
          message.witnessedThresholdSets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MultiSigTopologyPending {
    return {
      pendingSigners: Array.isArray(object?.pendingSigners)
        ? object.pendingSigners.map((e: any) =>
            ERC20MultiSigSignerEvent.fromJSON(e)
          )
        : [],
      pendingThresholdSet: Array.isArray(object?.pendingThresholdSet)
        ? object.pendingThresholdSet.map((e: any) =>
            ERC20MultiSigThresholdSetEvent.fromJSON(e)
          )
        : [],
      witnessedSigners: Array.isArray(object?.witnessedSigners)
        ? object.witnessedSigners.map((e: any) => String(e))
        : [],
      witnessedThresholdSets: Array.isArray(object?.witnessedThresholdSets)
        ? object.witnessedThresholdSets.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ERC20MultiSigTopologyPending): unknown {
    const obj: any = {};
    if (message.pendingSigners) {
      obj.pendingSigners = message.pendingSigners.map((e) =>
        e ? ERC20MultiSigSignerEvent.toJSON(e) : undefined
      );
    } else {
      obj.pendingSigners = [];
    }
    if (message.pendingThresholdSet) {
      obj.pendingThresholdSet = message.pendingThresholdSet.map((e) =>
        e ? ERC20MultiSigThresholdSetEvent.toJSON(e) : undefined
      );
    } else {
      obj.pendingThresholdSet = [];
    }
    if (message.witnessedSigners) {
      obj.witnessedSigners = message.witnessedSigners.map((e) => e);
    } else {
      obj.witnessedSigners = [];
    }
    if (message.witnessedThresholdSets) {
      obj.witnessedThresholdSets = message.witnessedThresholdSets.map((e) => e);
    } else {
      obj.witnessedThresholdSets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigTopologyPending>, I>>(
    object: I
  ): ERC20MultiSigTopologyPending {
    const message = createBaseERC20MultiSigTopologyPending();
    message.pendingSigners =
      object.pendingSigners?.map((e) =>
        ERC20MultiSigSignerEvent.fromPartial(e)
      ) || [];
    message.pendingThresholdSet =
      object.pendingThresholdSet?.map((e) =>
        ERC20MultiSigThresholdSetEvent.fromPartial(e)
      ) || [];
    message.witnessedSigners = object.witnessedSigners?.map((e) => e) || [];
    message.witnessedThresholdSets =
      object.witnessedThresholdSets?.map((e) => e) || [];
    return message;
  },
};

function createBaseProofOfWork(): ProofOfWork {
  return {
    blockHeight: [],
    blockHash: [],
    seenTx: [],
    txAtHeight: [],
    seenTid: [],
    tidAtHeight: [],
    banned: [],
  };
}

export const ProofOfWork = {
  encode(
    message: ProofOfWork,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.blockHeight) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.blockHash) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.seenTx) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.txAtHeight) {
      TransactionsAtHeight.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.seenTid) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.tidAtHeight) {
      TransactionsAtHeight.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.banned) {
      BannedParty.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOfWork {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOfWork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blockHeight.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.blockHeight.push(longToString(reader.uint64() as Long));
          }
          break;
        case 2:
          message.blockHash.push(reader.string());
          break;
        case 3:
          message.seenTx.push(reader.string());
          break;
        case 4:
          message.txAtHeight.push(
            TransactionsAtHeight.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.seenTid.push(reader.string());
          break;
        case 6:
          message.tidAtHeight.push(
            TransactionsAtHeight.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.banned.push(BannedParty.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofOfWork {
    return {
      blockHeight: Array.isArray(object?.blockHeight)
        ? object.blockHeight.map((e: any) => String(e))
        : [],
      blockHash: Array.isArray(object?.blockHash)
        ? object.blockHash.map((e: any) => String(e))
        : [],
      seenTx: Array.isArray(object?.seenTx)
        ? object.seenTx.map((e: any) => String(e))
        : [],
      txAtHeight: Array.isArray(object?.txAtHeight)
        ? object.txAtHeight.map((e: any) => TransactionsAtHeight.fromJSON(e))
        : [],
      seenTid: Array.isArray(object?.seenTid)
        ? object.seenTid.map((e: any) => String(e))
        : [],
      tidAtHeight: Array.isArray(object?.tidAtHeight)
        ? object.tidAtHeight.map((e: any) => TransactionsAtHeight.fromJSON(e))
        : [],
      banned: Array.isArray(object?.banned)
        ? object.banned.map((e: any) => BannedParty.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProofOfWork): unknown {
    const obj: any = {};
    if (message.blockHeight) {
      obj.blockHeight = message.blockHeight.map((e) => e);
    } else {
      obj.blockHeight = [];
    }
    if (message.blockHash) {
      obj.blockHash = message.blockHash.map((e) => e);
    } else {
      obj.blockHash = [];
    }
    if (message.seenTx) {
      obj.seenTx = message.seenTx.map((e) => e);
    } else {
      obj.seenTx = [];
    }
    if (message.txAtHeight) {
      obj.txAtHeight = message.txAtHeight.map((e) =>
        e ? TransactionsAtHeight.toJSON(e) : undefined
      );
    } else {
      obj.txAtHeight = [];
    }
    if (message.seenTid) {
      obj.seenTid = message.seenTid.map((e) => e);
    } else {
      obj.seenTid = [];
    }
    if (message.tidAtHeight) {
      obj.tidAtHeight = message.tidAtHeight.map((e) =>
        e ? TransactionsAtHeight.toJSON(e) : undefined
      );
    } else {
      obj.tidAtHeight = [];
    }
    if (message.banned) {
      obj.banned = message.banned.map((e) =>
        e ? BannedParty.toJSON(e) : undefined
      );
    } else {
      obj.banned = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofOfWork>, I>>(
    object: I
  ): ProofOfWork {
    const message = createBaseProofOfWork();
    message.blockHeight = object.blockHeight?.map((e) => e) || [];
    message.blockHash = object.blockHash?.map((e) => e) || [];
    message.seenTx = object.seenTx?.map((e) => e) || [];
    message.txAtHeight =
      object.txAtHeight?.map((e) => TransactionsAtHeight.fromPartial(e)) || [];
    message.seenTid = object.seenTid?.map((e) => e) || [];
    message.tidAtHeight =
      object.tidAtHeight?.map((e) => TransactionsAtHeight.fromPartial(e)) || [];
    message.banned =
      object.banned?.map((e) => BannedParty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTransactionsAtHeight(): TransactionsAtHeight {
  return { height: "0", transactions: [] };
}

export const TransactionsAtHeight = {
  encode(
    message: TransactionsAtHeight,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.transactions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransactionsAtHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionsAtHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.transactions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionsAtHeight {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: TransactionsAtHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => e);
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionsAtHeight>, I>>(
    object: I
  ): TransactionsAtHeight {
    const message = createBaseTransactionsAtHeight();
    message.height = object.height ?? "0";
    message.transactions = object.transactions?.map((e) => e) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToString(long: Long) {
  return long.toString();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
