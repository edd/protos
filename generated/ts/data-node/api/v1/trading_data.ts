/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Proposal_State,
  GovernanceData,
  Vote,
  proposal_StateFromJSON,
  proposal_StateToJSON,
} from "../../../vega/governance";
import {
  AccountType,
  Interval,
  Delegation,
  NodeData,
  Node,
  Epoch,
  MarginLevels,
  MarketData,
  Trade,
  Party,
  Account,
  Candle,
  MarketDepth,
  MarketDepthUpdate,
  Position,
  Order,
  PriceLevel,
  TransferResponse,
  Fee,
  Withdrawal,
  Deposit,
  NetworkParameter,
  LiquidityProvision,
  Reward,
  RewardSummary,
  RiskFactor,
  accountTypeFromJSON,
  accountTypeToJSON,
  intervalFromJSON,
  intervalToJSON,
} from "../../../vega/vega";
import { Observable } from "rxjs";
import {
  Transfer,
  StakeLinking,
  BusEventType,
  BusEvent,
  busEventTypeFromJSON,
  busEventTypeToJSON,
} from "../../../vega/events/v1/events";
import { Asset } from "../../../vega/assets";
import { NodeSignature } from "../../../vega/commands/v1/validator_commands";
import { Market } from "../../../vega/markets";
import { OracleSpec } from "../../../vega/oracles/v1/spec";
import { OracleData } from "../../../vega/oracles/v1/data";
import { map } from "rxjs/operators";

export const protobufPackage = "datanode.api.v1";

export interface TransfersRequest {
  pubkey: string;
  isFrom: boolean;
  isTo: boolean;
}

export interface TransfersResponse {
  transfers: Transfer[];
}

/**
 * both fields optional but 1 of them required at least
 * party = all delegation for a party
 * node_id = all delegation for a node
 * party_id + node_id = all delegation for a node for a given party
 */
export interface DelegationsRequest {
  party: string;
  nodeId: string;
  epochSeq: string;
  /** Pagination controls */
  pagination: Pagination | undefined;
}

export interface DelegationsResponse {
  delegations: Delegation[];
}

/** Request to obsever all event related to delegation with the given filters */
export interface ObserveDelegationsRequest {
  party: string;
  nodeId: string;
}

/** All events related to delegation with the given filters */
export interface ObserveDelegationsResponse {
  delegation: Delegation | undefined;
}

export interface PartyStakeRequest {
  party: string;
}

export interface PartyStakeResponse {
  currentStakeAvailable: string;
  stakeLinkings: StakeLinking[];
}

/** Request for current Node data */
export interface GetNodeDataRequest {}

/** Response with node data */
export interface GetNodeDataResponse {
  nodeData: NodeData | undefined;
}

/** Request to list all nodes */
export interface GetNodesRequest {}

/** Response with all nodes */
export interface GetNodesResponse {
  nodes: Node[];
}

/** Request to list all nodes */
export interface GetNodeByIDRequest {
  /** Required id of node */
  id: string;
}

/** Response with all nodes */
export interface GetNodeByIDResponse {
  node: Node | undefined;
}

export interface GetEpochRequest {
  /** Optional - if id omitted it gets the current epoch */
  id: string;
}

export interface GetEpochResponse {
  epoch: Epoch | undefined;
}

export interface KeyRotation {
  nodeId: string;
  oldPubKey: string;
  newPubKey: string;
  blockHeight: string;
}

/** Request to list all key rotations */
export interface GetKeyRotationsRequest {}

/** Response with all key rotations */
export interface GetKeyRotationsResponse {
  rotations: KeyRotation[];
}

/** Request to list all key rotations per node */
export interface GetKeyRotationsByNodeRequest {
  /** Required id of node */
  nodeId: string;
}

/** Response with all key rotations per node */
export interface GetKeyRotationsByNodeResponse {
  rotations: KeyRotation[];
}

/** Request for a list of all assets enabled on Vega */
export interface AssetsRequest {}

/** Response for a list of all assets enabled on Vega */
export interface AssetsResponse {
  /** A list of 0 or more assets */
  assets: Asset[];
}

/** Request for an asset given an asset identifier */
export interface AssetByIDRequest {
  /** Asset identifier, required field */
  id: string;
}

/** Response for an asset given an asset identifier */
export interface AssetByIDResponse {
  /** An asset record, if found */
  asset: Asset | undefined;
}

/** Request to specify the identifier of the resource we want to retrieve aggregated signatures for */
export interface GetNodeSignaturesAggregateRequest {
  /** Resource identifier, required field */
  id: string;
}

/** Response to specify the identifier of the resource we want to retrieve aggregated signatures for */
export interface GetNodeSignaturesAggregateResponse {
  /** A list of 0 or more signatures */
  signatures: NodeSignature[];
}

/** Optional proposal state */
export interface OptionalProposalState {
  /** Proposal state value */
  value: Proposal_State;
}

/** Request for a list of proposals */
export interface GetProposalsRequest {
  /** Optional proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of proposals */
export interface GetProposalsResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a list of proposals for a party */
export interface GetProposalsByPartyRequest {
  /** Party identifier, required field */
  partyId: string;
  /** Optional proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of proposals for a party */
export interface GetProposalsByPartyResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a list of votes for a party */
export interface GetVotesByPartyRequest {
  /** Party identifier, required field */
  partyId: string;
}

/** Response for a list of votes for a party */
export interface GetVotesByPartyResponse {
  /** A list of 0 or more votes */
  votes: Vote[];
}

/** Request for a list of new market proposals */
export interface GetNewMarketProposalsRequest {
  /** Optional proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of new market proposals */
export interface GetNewMarketProposalsResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a list of update market proposals */
export interface GetUpdateMarketProposalsRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of update market proposals */
export interface GetUpdateMarketProposalsResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a list of network parameter proposals */
export interface GetNetworkParametersProposalsRequest {
  /** Optional proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of network parameter proposals */
export interface GetNetworkParametersProposalsResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a list of new freeform proposals */
export interface GetNewFreeformProposalsRequest {
  /** Optional proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of new freeform proposals */
export interface GetNewFreeformProposalsResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a list of new asset proposals */
export interface GetNewAssetProposalsRequest {
  /** Optional proposal state */
  selectInState: OptionalProposalState | undefined;
}

/** Response for a list of new asset proposals */
export interface GetNewAssetProposalsResponse {
  /** A list of 0 or more governance data */
  data: GovernanceData[];
}

/** Request for a governance proposal given a proposal identifier */
export interface GetProposalByIDRequest {
  /** Proposal identifier, required field */
  proposalId: string;
}

/** Response for a governance proposal given a proposal identifier */
export interface GetProposalByIDResponse {
  /** Governance data, if found */
  data: GovernanceData | undefined;
}

/** Request for a governance proposal given a proposal reference */
export interface GetProposalByReferenceRequest {
  /** Proposal reference. Required field */
  reference: string;
}

/** Response for a governance proposal given a proposal reference */
export interface GetProposalByReferenceResponse {
  /** Governance data, if found */
  data: GovernanceData | undefined;
}

/** Request to obsever all event related to governance */
export interface ObserveGovernanceRequest {}

/** All events related to governance */
export interface ObserveGovernanceResponse {
  data: GovernanceData | undefined;
}

/** Request to subscribe to a stream of governance proposals for a party */
export interface ObservePartyProposalsRequest {
  /** Party identifier, required field */
  partyId: string;
}

export interface ObservePartyProposalsResponse {
  data: GovernanceData | undefined;
}

/** Request to subscribe to a stream of governance votes for a proposal */
export interface ObserveProposalVotesRequest {
  /** Proposal identifier, required field */
  proposalId: string;
}

export interface ObserveProposalVotesResponse {
  vote: Vote | undefined;
}

/** Request to subscribe to a stream of governance votes for a party */
export interface ObservePartyVotesRequest {
  /** Party identifier, required field */
  partyId: string;
}

export interface ObservePartyVotesResponse {
  vote: Vote | undefined;
}

/**
 * Request to subscribe to a stream of MarginLevels data matching the given party identifier
 * Optionally, the list can be additionally filtered by market
 */
export interface MarginLevelsSubscribeRequest {
  /** Party identifier, required field */
  partyId: string;
  /** Market identifier */
  marketId: string;
}

export interface MarginLevelsSubscribeResponse {
  marginLevels: MarginLevels | undefined;
}

/** Request for margin levels for a party */
export interface MarginLevelsRequest {
  /** Party identifier, required field */
  partyId: string;
  /** Market identifier */
  marketId: string;
}

/** Response for margin levels for a party */
export interface MarginLevelsResponse {
  /** A list of 0 or more margin levels */
  marginLevels: MarginLevels[];
}

/**
 * Request to subscribe to a stream of MarketsData
 * Optionally, the list can be additionally filtered by market
 */
export interface MarketsDataSubscribeRequest {
  /** Market identifier */
  marketId: string;
}

export interface MarketsDataSubscribeResponse {
  marketData: MarketData | undefined;
}

/** Request for market data for a market */
export interface MarketDataByIDRequest {
  /** Market identifier */
  marketId: string;
}

/** Response for market data for a market */
export interface MarketDataByIDResponse {
  /** Market data, if found */
  marketData: MarketData | undefined;
}

/** Request for market data */
export interface MarketsDataRequest {}

/** Response for market data */
export interface MarketsDataResponse {
  /** A list of 0 or more market data */
  marketsData: MarketData[];
}

/** Request for the latest trade that occurred on Vega for a given market */
export interface LastTradeRequest {
  /** Market identifier, required field */
  marketId: string;
}

/** Response for the latest trade that occurred on Vega for a given market */
export interface LastTradeResponse {
  /** A trade, if found */
  trade: Trade | undefined;
}

/** Request for a market given a market identifier */
export interface MarketByIDRequest {
  /** Market identifier, required field */
  marketId: string;
}

/** Response for a market given a market identifier */
export interface MarketByIDResponse {
  /** A market, if found */
  market: Market | undefined;
}

/** Request for a party given a party identifier */
export interface PartyByIDRequest {
  /** Party identifier, required field */
  partyId: string;
}

/** Response for a party given a party identifier */
export interface PartyByIDResponse {
  /** A party, if found */
  party: Party | undefined;
}

/** Request for a list of all parties */
export interface PartiesRequest {}

/** Response to a request for a list of parties */
export interface PartiesResponse {
  /** A list of 0 or more parties */
  parties: Party[];
}

/**
 * Request for a list of trades relating to the given party
 * Optionally, the list can be additionally filtered for trades by market
 */
export interface TradesByPartyRequest {
  /** Party identifier. Required field */
  partyId: string;
  /** Market identifier */
  marketId: string;
  /** Pagination controls */
  pagination: Pagination | undefined;
}

/** Response for a list of trades relating to a party */
export interface TradesByPartyResponse {
  /** A list of 0 or more trades */
  trades: Trade[];
}

/** Request for a list of trades related to an order */
export interface TradesByOrderRequest {
  /** Order identifier, required field */
  orderId: string;
}

/** Response for a list of trades related to an order */
export interface TradesByOrderResponse {
  /** A list of 0 or more trades */
  trades: Trade[];
}

/** Request to subscribe to a stream of (Accounts)[#vega.Account] */
export interface AccountsSubscribeRequest {
  /** Market identifier */
  marketId: string;
  /** Party identifier */
  partyId: string;
  /** Asset identifier */
  asset: string;
  /** Account type to subscribe to, required field */
  type: AccountType;
}

export interface AccountsSubscribeResponse {
  account: Account | undefined;
}

/** Request to subscribe to a stream of (Orders)[#vega.Order] */
export interface OrdersSubscribeRequest {
  /** Market identifier */
  marketId: string;
  /** Party identifier */
  partyId: string;
}

/** Request to subscribe to a stream of (Trades)[#vega.Trade] */
export interface TradesSubscribeRequest {
  /** Market identifier */
  marketId: string;
  /** Party identifier */
  partyId: string;
}

/** Request to subscribe to a stream of (Candles)[#vega.Candle] */
export interface CandlesSubscribeRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Time interval for the candles, required field. */
  interval: Interval;
}

export interface CandlesSubscribeResponse {
  candle: Candle | undefined;
}

/** Request to subscribe to a stream of (MarketDepth)[#vega.MarketDepth] data */
export interface MarketDepthSubscribeRequest {
  /** Market identifier, required field. */
  marketId: string;
}

export interface MarketDepthSubscribeResponse {
  marketDepth: MarketDepth | undefined;
}

/** Request to subscribe to a stream of (MarketDepth Update)[#vega.MarketDepthUpdate] data */
export interface MarketDepthUpdatesSubscribeRequest {
  /** Market identifier, required field */
  marketId: string;
}

export interface MarketDepthUpdatesSubscribeResponse {
  update: MarketDepthUpdate | undefined;
}

/** Request to subscribe to a stream of (Positions)[#vega.Position] */
export interface PositionsSubscribeRequest {
  /** Party identifier, optional field */
  partyId: string;
  /** Market identifier, optional field */
  marketId: string;
}

export interface PositionsSubscribeResponse {
  position: Position | undefined;
}

/** Request for a list of orders for a market */
export interface OrdersByMarketRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Optional pagination controls */
  pagination: Pagination | undefined;
}

/** Response for a list of orders for a market */
export interface OrdersByMarketResponse {
  /** A list of 0 or more orders */
  orders: Order[];
}

/** Request for a list of orders for a party */
export interface OrdersByPartyRequest {
  /** Party identifier, required field */
  partyId: string;
  /** Pagination controls */
  pagination: Pagination | undefined;
}

/** Response for a list of orders for a party */
export interface OrdersByPartyResponse {
  /** A list of 0 or more orders */
  orders: Order[];
}

/** Request for an order on a market given an order identifier */
export interface OrderByMarketAndIDRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Order identifier, required field */
  orderId: string;
}

/** Response for an order on a market given an order identifier */
export interface OrderByMarketAndIDResponse {
  /** An order, if found */
  order: Order | undefined;
}

/** Request for an order given an order reference */
export interface OrderByReferenceRequest {
  /** Unique reference, required field */
  reference: string;
}

/** Response for an order given an order reference */
export interface OrderByReferenceResponse {
  /** An order, if found */
  order: Order | undefined;
}

/** Request for a list of markets on Vega */
export interface MarketsRequest {}

/** Response for a list of markets on Vega */
export interface MarketsResponse {
  /** A list of 0 or more markets */
  markets: Market[];
}

/** Request for a list of candles for a market at an interval */
export interface CandlesRequest {
  /** Market identifier, required field. */
  marketId: string;
  /**
   * Timestamp to retrieve candles since, in nanoseconds since the epoch,
   * required field - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  sinceTimestamp: string;
  /** Time interval for the candles, required field */
  interval: Interval;
}

/** Response for a list of candles for a market at an interval */
export interface CandlesResponse {
  /** A list of 0 or more candles */
  candles: Candle[];
}

/**
 * Request for the market depth/order book price levels on a market
 * Optionally, a maximum depth can be set to limit the number of levels returned
 */
export interface MarketDepthRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Max depth limits the number of levels returned. Default is 0, which returns all levels */
  maxDepth: string;
}

/** Response for the market depth/order book price levels on a market */
export interface MarketDepthResponse {
  /** Market identifier */
  marketId: string;
  /** Zero or more price levels for the buy side of the market depth data */
  buy: PriceLevel[];
  /** Zero or more price levels for the sell side of the market depth data */
  sell: PriceLevel[];
  /** Last trade recorded on Vega at the time of retrieving the `MarketDepthResponse` */
  lastTrade: Trade | undefined;
  /** Sequence number incremented after each update */
  sequenceNumber: string;
}

/** Request for a list of trades on a market */
export interface TradesByMarketRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Pagination controls */
  pagination: Pagination | undefined;
}

/** Response for a list of trades on a market */
export interface TradesByMarketResponse {
  /** A list of 0 or more trades */
  trades: Trade[];
}

/**
 * Request for a list of positions for a party
 * Optionally, if a market identifier is set, the results will be filtered for that market only
 */
export interface PositionsByPartyRequest {
  /** Party identifier, required field */
  partyId: string;
  /** Market identifier */
  marketId: string;
}

/** Response for a list of positions for a party */
export interface PositionsByPartyResponse {
  /** A list of 0 or more positions */
  positions: Position[];
}

/** Request for the current time of the vega network */
export interface GetVegaTimeRequest {}

/** Response for the current consensus coordinated time on the Vega network, referred to as "VegaTime" */
export interface GetVegaTimeResponse {
  /**
   * Timestamp representation of current VegaTime as represented in
   * Nanoseconds since the epoch, for example `1580473859111222333` corresponds to `2020-01-31T12:30:59.111222333Z`
   */
  timestamp: string;
}

/** Pagination controls */
export interface Pagination {
  /** Skip the number of records specified, default is 0 */
  skip: string;
  /** Limit the number of returned records to the value specified, default is 50 */
  limit: string;
  /**
   * Descending reverses the order of the records returned,
   * default is true, if false the results will be returned in ascending order
   */
  descending: boolean;
}

/** A stream of orders */
export interface OrdersSubscribeResponse {
  /** A list of 0 or more orders */
  orders: Order[];
}

/** A stream of trades */
export interface TradesSubscribeResponse {
  /** A list of 0 or more trades */
  trades: Trade[];
}

export interface TransferResponsesSubscribeRequest {}

export interface TransferResponsesSubscribeResponse {
  response: TransferResponse | undefined;
}

/** Request for a list of accounts for a party */
export interface PartyAccountsRequest {
  /** Party identifier */
  partyId: string;
  /** Market identifier */
  marketId: string;
  /** Account type, required field */
  type: AccountType;
  /** Asset identifier */
  asset: string;
}

/** Response for a list of accounts for a party */
export interface PartyAccountsResponse {
  /** A list of 0 or more accounts */
  accounts: Account[];
}

/** Request for a list of accounts for a market */
export interface MarketAccountsRequest {
  /** Market identifier */
  marketId: string;
  /** Asset identifier */
  asset: string;
}

/** Response for a list of accounts for a market */
export interface MarketAccountsResponse {
  /** A list of 0 or more accounts */
  accounts: Account[];
}

/** Request for a list of infrastructure fee accounts */
export interface FeeInfrastructureAccountsRequest {
  /**
   * Asset identifier, required field
   * - Set to an empty string to return all accounts
   * - Set to an asset ID to return a single infrastructure fee account for a given asset
   */
  asset: string;
}

/** Response for a list of infrastructure fee accounts */
export interface FeeInfrastructureAccountsResponse {
  /** A list of 0 or more infrastructure fee accounts */
  accounts: Account[];
}

/** Request for a list of global reward pool accounts */
export interface GlobalRewardPoolAccountsRequest {
  /**
   * Asset identifier, required field
   * - Set to an empty string to return all accounts
   * - Set to an asset ID to return a single global reward pool account for a given asset
   */
  asset: string;
}

/** Response for a list of global reward pool accounts */
export interface GlobalRewardPoolAccountsResponse {
  /** A list of 0 or more global reward pool accounts */
  accounts: Account[];
}

/**
 * Request for an order with the specified order identifier
 * Optionally, return a specific version of the order with the `version` field
 */
export interface OrderByIDRequest {
  /** Order identifier, required field */
  orderId: string;
  /**
   * Version of the order:
   * - Set `version` to 0 for most recent version of the order
   * - Set `1` for original version of the order
   * - Set `2` for first amendment, `3` for second amendment, etc
   */
  version: string;
}

export interface OrderByIDResponse {
  order: Order | undefined;
}

/** Request for a list of all versions of an order given the specified order identifier */
export interface OrderVersionsByIDRequest {
  /** Order identifier, required field */
  orderId: string;
  /** Pagination controls */
  pagination: Pagination | undefined;
}

/** Response to a request for a list of all versions of an order */
export interface OrderVersionsByIDResponse {
  /** A list of 0 or more orders (list will contain the same order but with different versions, if it has been amended) */
  orders: Order[];
}

/** Request to fetch the estimated fee if an order were to trade immediately */
export interface EstimateFeeRequest {
  /**
   * Order to estimate fees for
   * the following fields in the order are required:
   * MarketID (used to specify the fee factors)
   * Price (the price at which the order could trade)
   * Size (the size at which the order could eventually trade)
   */
  order: Order | undefined;
}

/** Response to a EstimateFeeRequest, containing the estimated fees for a given order */
export interface EstimateFeeResponse {
  /** Summary of the estimated fees for this order if it were to trade now */
  fee: Fee | undefined;
}

/** Request to fetch the estimated MarginLevels if an order were to trade immediately */
export interface EstimateMarginRequest {
  /** Order to estimate fees for */
  order: Order | undefined;
}

/** Response to a EstimateMarginRequest, containing the estimated marginLevels for a given order */
export interface EstimateMarginResponse {
  /** Summary of the estimated margins for this order if it were to trade now */
  marginLevels: MarginLevels | undefined;
}

/** Request to subscribe to a stream of one or more event types from the Vega event bus */
export interface ObserveEventBusRequest {
  /** One or more types of event, required field */
  type: BusEventType[];
  /** Market identifier, optional field */
  marketId: string;
  /** Party identifier, optional field */
  partyId: string;
  /**
   * Batch size, optional field -
   * If not specified, any events received will be sent immediately. If the client is not ready
   * for the next data-set, data may be dropped a number of times, and eventually the stream is closed.
   * if specified, the first batch will be sent when ready. To receive the next set of events, the client
   * must write an `ObserveEventBatch` message on the stream to flush the buffer.
   * If no message is received in 5 seconds, the stream is closed.
   * Default: 0, send any and all events when they are available.
   */
  batchSize: string;
}

/** Response to a subscribed stream of events from the Vega event bus */
export interface ObserveEventBusResponse {
  /** One or more events */
  events: BusEvent[];
}

/** A request to get a list of withdrawal from a given party */
export interface WithdrawalsRequest {
  /** The party to get the withdrawals for */
  partyId: string;
}

/** The response for a list of withdrawals */
export interface WithdrawalsResponse {
  /** The list of withdrawals for the specified party */
  withdrawals: Withdrawal[];
}

/** A request to get a specific withdrawal by identifier */
export interface WithdrawalRequest {
  /** The identifier of the withdrawal */
  id: string;
}

/** A response for a withdrawal */
export interface WithdrawalResponse {
  /** The withdrawal matching the identifier from the request */
  withdrawal: Withdrawal | undefined;
}

/** The request to get all information required to bundle the call to finalise the withdrawal on the erc20 bridge */
export interface ERC20WithdrawalApprovalRequest {
  /** The identifier of the withdrawal */
  withdrawalId: string;
}

/**
 * The response with all information required to bundle the call to finalise the withdrawal on the erc20 bridge
 * function withdraw_asset(address asset_source, uint256 asset_id, uint256 amount, uint256 expiry, uint256 nonce, bytes memory signatures)
 */
export interface ERC20WithdrawalApprovalResponse {
  /** The address of asset on ethereum */
  assetSource: string;
  /** The amount to be withdrawn */
  amount: string;
  /** The expiry / until what time the request is valid */
  expiry: string;
  /** The nonce, which is actually the internal reference for the withdrawal */
  nonce: string;
  /**
   * The signatures bundle as hex encoded data, forward by 0x
   * e.g: 0x + sig1 + sig2 + ... + sixN
   */
  signatures: string;
  /** The ethereum address to withdraw the funds to, 0x prefixed */
  targetAddress: string;
}

/** A request to get a list of deposit from a given party */
export interface DepositsRequest {
  /** The party to get the deposits for */
  partyId: string;
}

/** The response for a list of deposits */
export interface DepositsResponse {
  /** The list of deposits for the specified party */
  deposits: Deposit[];
}

/** A request to get a specific deposit by identifier */
export interface DepositRequest {
  /** The identifier of the deposit */
  id: string;
}

/** A response for a deposit */
export interface DepositResponse {
  /** The deposit matching the identifier from the request */
  deposit: Deposit | undefined;
}

/** A message requesting for the list of all network parameters */
export interface NetworkParametersRequest {}

/** A response containing all of the vega network parameters */
export interface NetworkParametersResponse {
  networkParameters: NetworkParameter[];
}

/**
 * A message requesting for the list of liquidity provision orders for markets
 * One of the two filters is required (or both)
 */
export interface LiquidityProvisionsRequest {
  /** The target market for the liquidity provision orders */
  market: string;
  /** The party which submitted the liquidity provision orders */
  party: string;
}

/** A response containing all of the Vega liquidity provision orders */
export interface LiquidityProvisionsResponse {
  liquidityProvisions: LiquidityProvision[];
}

/** A request to get a specific oracle spec by identifier */
export interface OracleSpecRequest {
  /** The id to get the oracle spec for */
  id: string;
}

/** A response for a oracle spec */
export interface OracleSpecResponse {
  /** The withdrawal matching the identifier from the request */
  oracleSpec: OracleSpec | undefined;
}

/** A request to get a specific oracle spec by identifier */
export interface OracleSpecsRequest {}

/** The response for a list of withdrawals */
export interface OracleSpecsResponse {
  /** The list of oracle specs */
  oracleSpecs: OracleSpec[];
}

/** A request to all oracle data broadcast to a given spec */
export interface OracleDataBySpecRequest {
  /** The id to get the oracle spec for */
  id: string;
}

/** The response for a list of all oracle data broadcast to a given spec */
export interface OracleDataBySpecResponse {
  /** The list of oracle data broadcast to a given spec */
  oracleData: OracleData[];
}

export interface ObserveRewardsRequest {
  assetId: string;
  party: string;
}

export interface ObserveRewardsResponse {
  reward: Reward | undefined;
}

/** A request to get reward details for a party */
export interface GetRewardSummariesRequest {
  partyId: string;
  assetId: string;
}

/** The return message with reward details in for a single party */
export interface GetRewardSummariesResponse {
  summaries: RewardSummary[];
}

/** A request to get reward details for a party */
export interface GetRewardsRequest {
  partyId: string;
  assetId: string;
  pagination: Pagination | undefined;
}

/** The return message with reward details in for a single party */
export interface GetRewardsResponse {
  rewards: Reward[];
}

/** The actual data regarding a checkpoint */
export interface Checkpoint {
  hash: string;
  blockHash: string;
  atBlock: string;
}

/** Request to get all checkpoints. Currently no fields, probably will be expanded to allow filtering data */
export interface CheckpointsRequest {}

/** Response message containing all checkpoints requested */
export interface CheckpointsResponse {
  checkpoints: Checkpoint[];
}

export interface GetRiskFactorsRequest {
  marketId: string;
}

export interface GetRiskFactorsResponse {
  riskFactor: RiskFactor | undefined;
}

function createBaseTransfersRequest(): TransfersRequest {
  return { pubkey: "", isFrom: false, isTo: false };
}

export const TransfersRequest = {
  encode(
    message: TransfersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pubkey !== "") {
      writer.uint32(10).string(message.pubkey);
    }
    if (message.isFrom === true) {
      writer.uint32(16).bool(message.isFrom);
    }
    if (message.isTo === true) {
      writer.uint32(24).bool(message.isTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;
        case 2:
          message.isFrom = reader.bool();
          break;
        case 3:
          message.isTo = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransfersRequest {
    return {
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
      isFrom: isSet(object.isFrom) ? Boolean(object.isFrom) : false,
      isTo: isSet(object.isTo) ? Boolean(object.isTo) : false,
    };
  },

  toJSON(message: TransfersRequest): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.isFrom !== undefined && (obj.isFrom = message.isFrom);
    message.isTo !== undefined && (obj.isTo = message.isTo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransfersRequest>, I>>(
    object: I
  ): TransfersRequest {
    const message = createBaseTransfersRequest();
    message.pubkey = object.pubkey ?? "";
    message.isFrom = object.isFrom ?? false;
    message.isTo = object.isTo ?? false;
    return message;
  },
};

function createBaseTransfersResponse(): TransfersResponse {
  return { transfers: [] };
}

export const TransfersResponse = {
  encode(
    message: TransfersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transfers) {
      Transfer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfers.push(Transfer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransfersResponse {
    return {
      transfers: Array.isArray(object?.transfers)
        ? object.transfers.map((e: any) => Transfer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransfersResponse): unknown {
    const obj: any = {};
    if (message.transfers) {
      obj.transfers = message.transfers.map((e) =>
        e ? Transfer.toJSON(e) : undefined
      );
    } else {
      obj.transfers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransfersResponse>, I>>(
    object: I
  ): TransfersResponse {
    const message = createBaseTransfersResponse();
    message.transfers =
      object.transfers?.map((e) => Transfer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegationsRequest(): DelegationsRequest {
  return { party: "", nodeId: "", epochSeq: "", pagination: undefined };
}

export const DelegationsRequest = {
  encode(
    message: DelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.epochSeq !== "") {
      writer.uint32(26).string(message.epochSeq);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.epochSeq = reader.string();
          break;
        case 4:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationsRequest {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: DelegationsRequest): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationsRequest>, I>>(
    object: I
  ): DelegationsRequest {
    const message = createBaseDelegationsRequest();
    message.party = object.party ?? "";
    message.nodeId = object.nodeId ?? "";
    message.epochSeq = object.epochSeq ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseDelegationsResponse(): DelegationsResponse {
  return { delegations: [] };
}

export const DelegationsResponse = {
  encode(
    message: DelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationsResponse();
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

  fromJSON(object: any): DelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DelegationsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<DelegationsResponse>, I>>(
    object: I
  ): DelegationsResponse {
    const message = createBaseDelegationsResponse();
    message.delegations =
      object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObserveDelegationsRequest(): ObserveDelegationsRequest {
  return { party: "", nodeId: "" };
}

export const ObserveDelegationsRequest = {
  encode(
    message: ObserveDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveDelegationsRequest {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
    };
  },

  toJSON(message: ObserveDelegationsRequest): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveDelegationsRequest>, I>>(
    object: I
  ): ObserveDelegationsRequest {
    const message = createBaseObserveDelegationsRequest();
    message.party = object.party ?? "";
    message.nodeId = object.nodeId ?? "";
    return message;
  },
};

function createBaseObserveDelegationsResponse(): ObserveDelegationsResponse {
  return { delegation: undefined };
}

export const ObserveDelegationsResponse = {
  encode(
    message: ObserveDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegation !== undefined) {
      Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegation = Delegation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveDelegationsResponse {
    return {
      delegation: isSet(object.delegation)
        ? Delegation.fromJSON(object.delegation)
        : undefined,
    };
  },

  toJSON(message: ObserveDelegationsResponse): unknown {
    const obj: any = {};
    message.delegation !== undefined &&
      (obj.delegation = message.delegation
        ? Delegation.toJSON(message.delegation)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveDelegationsResponse>, I>>(
    object: I
  ): ObserveDelegationsResponse {
    const message = createBaseObserveDelegationsResponse();
    message.delegation =
      object.delegation !== undefined && object.delegation !== null
        ? Delegation.fromPartial(object.delegation)
        : undefined;
    return message;
  },
};

function createBasePartyStakeRequest(): PartyStakeRequest {
  return { party: "" };
}

export const PartyStakeRequest = {
  encode(
    message: PartyStakeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyStakeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyStakeRequest {
    return {
      party: isSet(object.party) ? String(object.party) : "",
    };
  },

  toJSON(message: PartyStakeRequest): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyStakeRequest>, I>>(
    object: I
  ): PartyStakeRequest {
    const message = createBasePartyStakeRequest();
    message.party = object.party ?? "";
    return message;
  },
};

function createBasePartyStakeResponse(): PartyStakeResponse {
  return { currentStakeAvailable: "", stakeLinkings: [] };
}

export const PartyStakeResponse = {
  encode(
    message: PartyStakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentStakeAvailable !== "") {
      writer.uint32(10).string(message.currentStakeAvailable);
    }
    for (const v of message.stakeLinkings) {
      StakeLinking.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentStakeAvailable = reader.string();
          break;
        case 2:
          message.stakeLinkings.push(
            StakeLinking.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyStakeResponse {
    return {
      currentStakeAvailable: isSet(object.currentStakeAvailable)
        ? String(object.currentStakeAvailable)
        : "",
      stakeLinkings: Array.isArray(object?.stakeLinkings)
        ? object.stakeLinkings.map((e: any) => StakeLinking.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PartyStakeResponse): unknown {
    const obj: any = {};
    message.currentStakeAvailable !== undefined &&
      (obj.currentStakeAvailable = message.currentStakeAvailable);
    if (message.stakeLinkings) {
      obj.stakeLinkings = message.stakeLinkings.map((e) =>
        e ? StakeLinking.toJSON(e) : undefined
      );
    } else {
      obj.stakeLinkings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyStakeResponse>, I>>(
    object: I
  ): PartyStakeResponse {
    const message = createBasePartyStakeResponse();
    message.currentStakeAvailable = object.currentStakeAvailable ?? "";
    message.stakeLinkings =
      object.stakeLinkings?.map((e) => StakeLinking.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNodeDataRequest(): GetNodeDataRequest {
  return {};
}

export const GetNodeDataRequest = {
  encode(
    _: GetNodeDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetNodeDataRequest {
    return {};
  },

  toJSON(_: GetNodeDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodeDataRequest>, I>>(
    _: I
  ): GetNodeDataRequest {
    const message = createBaseGetNodeDataRequest();
    return message;
  },
};

function createBaseGetNodeDataResponse(): GetNodeDataResponse {
  return { nodeData: undefined };
}

export const GetNodeDataResponse = {
  encode(
    message: GetNodeDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeData !== undefined) {
      NodeData.encode(message.nodeData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeData = NodeData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeDataResponse {
    return {
      nodeData: isSet(object.nodeData)
        ? NodeData.fromJSON(object.nodeData)
        : undefined,
    };
  },

  toJSON(message: GetNodeDataResponse): unknown {
    const obj: any = {};
    message.nodeData !== undefined &&
      (obj.nodeData = message.nodeData
        ? NodeData.toJSON(message.nodeData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodeDataResponse>, I>>(
    object: I
  ): GetNodeDataResponse {
    const message = createBaseGetNodeDataResponse();
    message.nodeData =
      object.nodeData !== undefined && object.nodeData !== null
        ? NodeData.fromPartial(object.nodeData)
        : undefined;
    return message;
  },
};

function createBaseGetNodesRequest(): GetNodesRequest {
  return {};
}

export const GetNodesRequest = {
  encode(
    _: GetNodesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetNodesRequest {
    return {};
  },

  toJSON(_: GetNodesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodesRequest>, I>>(
    _: I
  ): GetNodesRequest {
    const message = createBaseGetNodesRequest();
    return message;
  },
};

function createBaseGetNodesResponse(): GetNodesResponse {
  return { nodes: [] };
}

export const GetNodesResponse = {
  encode(
    message: GetNodesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodes.push(Node.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodesResponse {
    return {
      nodes: Array.isArray(object?.nodes)
        ? object.nodes.map((e: any) => Node.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes) {
      obj.nodes = message.nodes.map((e) => (e ? Node.toJSON(e) : undefined));
    } else {
      obj.nodes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodesResponse>, I>>(
    object: I
  ): GetNodesResponse {
    const message = createBaseGetNodesResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNodeByIDRequest(): GetNodeByIDRequest {
  return { id: "" };
}

export const GetNodeByIDRequest = {
  encode(
    message: GetNodeByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeByIDRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: GetNodeByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodeByIDRequest>, I>>(
    object: I
  ): GetNodeByIDRequest {
    const message = createBaseGetNodeByIDRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetNodeByIDResponse(): GetNodeByIDResponse {
  return { node: undefined };
}

export const GetNodeByIDResponse = {
  encode(
    message: GetNodeByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.node !== undefined) {
      Node.encode(message.node, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = Node.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeByIDResponse {
    return {
      node: isSet(object.node) ? Node.fromJSON(object.node) : undefined,
    };
  },

  toJSON(message: GetNodeByIDResponse): unknown {
    const obj: any = {};
    message.node !== undefined &&
      (obj.node = message.node ? Node.toJSON(message.node) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNodeByIDResponse>, I>>(
    object: I
  ): GetNodeByIDResponse {
    const message = createBaseGetNodeByIDResponse();
    message.node =
      object.node !== undefined && object.node !== null
        ? Node.fromPartial(object.node)
        : undefined;
    return message;
  },
};

function createBaseGetEpochRequest(): GetEpochRequest {
  return { id: "0" };
}

export const GetEpochRequest = {
  encode(
    message: GetEpochRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEpochRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: GetEpochRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetEpochRequest>, I>>(
    object: I
  ): GetEpochRequest {
    const message = createBaseGetEpochRequest();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseGetEpochResponse(): GetEpochResponse {
  return { epoch: undefined };
}

export const GetEpochResponse = {
  encode(
    message: GetEpochResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = Epoch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEpochResponse {
    return {
      epoch: isSet(object.epoch) ? Epoch.fromJSON(object.epoch) : undefined,
    };
  },

  toJSON(message: GetEpochResponse): unknown {
    const obj: any = {};
    message.epoch !== undefined &&
      (obj.epoch = message.epoch ? Epoch.toJSON(message.epoch) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetEpochResponse>, I>>(
    object: I
  ): GetEpochResponse {
    const message = createBaseGetEpochResponse();
    message.epoch =
      object.epoch !== undefined && object.epoch !== null
        ? Epoch.fromPartial(object.epoch)
        : undefined;
    return message;
  },
};

function createBaseKeyRotation(): KeyRotation {
  return { nodeId: "", oldPubKey: "", newPubKey: "", blockHeight: "0" };
}

export const KeyRotation = {
  encode(
    message: KeyRotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.oldPubKey !== "") {
      writer.uint32(18).string(message.oldPubKey);
    }
    if (message.newPubKey !== "") {
      writer.uint32(26).string(message.newPubKey);
    }
    if (message.blockHeight !== "0") {
      writer.uint32(32).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.oldPubKey = reader.string();
          break;
        case 3:
          message.newPubKey = reader.string();
          break;
        case 4:
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyRotation {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      oldPubKey: isSet(object.oldPubKey) ? String(object.oldPubKey) : "",
      newPubKey: isSet(object.newPubKey) ? String(object.newPubKey) : "",
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
    };
  },

  toJSON(message: KeyRotation): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.oldPubKey !== undefined && (obj.oldPubKey = message.oldPubKey);
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRotation>, I>>(
    object: I
  ): KeyRotation {
    const message = createBaseKeyRotation();
    message.nodeId = object.nodeId ?? "";
    message.oldPubKey = object.oldPubKey ?? "";
    message.newPubKey = object.newPubKey ?? "";
    message.blockHeight = object.blockHeight ?? "0";
    return message;
  },
};

function createBaseGetKeyRotationsRequest(): GetKeyRotationsRequest {
  return {};
}

export const GetKeyRotationsRequest = {
  encode(
    _: GetKeyRotationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetKeyRotationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyRotationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetKeyRotationsRequest {
    return {};
  },

  toJSON(_: GetKeyRotationsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetKeyRotationsRequest>, I>>(
    _: I
  ): GetKeyRotationsRequest {
    const message = createBaseGetKeyRotationsRequest();
    return message;
  },
};

function createBaseGetKeyRotationsResponse(): GetKeyRotationsResponse {
  return { rotations: [] };
}

export const GetKeyRotationsResponse = {
  encode(
    message: GetKeyRotationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rotations) {
      KeyRotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetKeyRotationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyRotationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rotations.push(KeyRotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetKeyRotationsResponse {
    return {
      rotations: Array.isArray(object?.rotations)
        ? object.rotations.map((e: any) => KeyRotation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetKeyRotationsResponse): unknown {
    const obj: any = {};
    if (message.rotations) {
      obj.rotations = message.rotations.map((e) =>
        e ? KeyRotation.toJSON(e) : undefined
      );
    } else {
      obj.rotations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetKeyRotationsResponse>, I>>(
    object: I
  ): GetKeyRotationsResponse {
    const message = createBaseGetKeyRotationsResponse();
    message.rotations =
      object.rotations?.map((e) => KeyRotation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetKeyRotationsByNodeRequest(): GetKeyRotationsByNodeRequest {
  return { nodeId: "" };
}

export const GetKeyRotationsByNodeRequest = {
  encode(
    message: GetKeyRotationsByNodeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetKeyRotationsByNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyRotationsByNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetKeyRotationsByNodeRequest {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
    };
  },

  toJSON(message: GetKeyRotationsByNodeRequest): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetKeyRotationsByNodeRequest>, I>>(
    object: I
  ): GetKeyRotationsByNodeRequest {
    const message = createBaseGetKeyRotationsByNodeRequest();
    message.nodeId = object.nodeId ?? "";
    return message;
  },
};

function createBaseGetKeyRotationsByNodeResponse(): GetKeyRotationsByNodeResponse {
  return { rotations: [] };
}

export const GetKeyRotationsByNodeResponse = {
  encode(
    message: GetKeyRotationsByNodeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rotations) {
      KeyRotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetKeyRotationsByNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetKeyRotationsByNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rotations.push(KeyRotation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetKeyRotationsByNodeResponse {
    return {
      rotations: Array.isArray(object?.rotations)
        ? object.rotations.map((e: any) => KeyRotation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetKeyRotationsByNodeResponse): unknown {
    const obj: any = {};
    if (message.rotations) {
      obj.rotations = message.rotations.map((e) =>
        e ? KeyRotation.toJSON(e) : undefined
      );
    } else {
      obj.rotations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetKeyRotationsByNodeResponse>, I>>(
    object: I
  ): GetKeyRotationsByNodeResponse {
    const message = createBaseGetKeyRotationsByNodeResponse();
    message.rotations =
      object.rotations?.map((e) => KeyRotation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetsRequest(): AssetsRequest {
  return {};
}

export const AssetsRequest = {
  encode(
    _: AssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AssetsRequest {
    return {};
  },

  toJSON(_: AssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetsRequest>, I>>(
    _: I
  ): AssetsRequest {
    const message = createBaseAssetsRequest();
    return message;
  },
};

function createBaseAssetsResponse(): AssetsResponse {
  return { assets: [] };
}

export const AssetsResponse = {
  encode(
    message: AssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsResponse();
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

  fromJSON(object: any): AssetsResponse {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetsResponse>, I>>(
    object: I
  ): AssetsResponse {
    const message = createBaseAssetsResponse();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetByIDRequest(): AssetByIDRequest {
  return { id: "" };
}

export const AssetByIDRequest = {
  encode(
    message: AssetByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetByIDRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: AssetByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetByIDRequest>, I>>(
    object: I
  ): AssetByIDRequest {
    const message = createBaseAssetByIDRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseAssetByIDResponse(): AssetByIDResponse {
  return { asset: undefined };
}

export const AssetByIDResponse = {
  encode(
    message: AssetByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetByIDResponse {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: AssetByIDResponse): unknown {
    const obj: any = {};
    message.asset !== undefined &&
      (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetByIDResponse>, I>>(
    object: I
  ): AssetByIDResponse {
    const message = createBaseAssetByIDResponse();
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    return message;
  },
};

function createBaseGetNodeSignaturesAggregateRequest(): GetNodeSignaturesAggregateRequest {
  return { id: "" };
}

export const GetNodeSignaturesAggregateRequest = {
  encode(
    message: GetNodeSignaturesAggregateRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNodeSignaturesAggregateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeSignaturesAggregateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeSignaturesAggregateRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: GetNodeSignaturesAggregateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetNodeSignaturesAggregateRequest>, I>
  >(object: I): GetNodeSignaturesAggregateRequest {
    const message = createBaseGetNodeSignaturesAggregateRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetNodeSignaturesAggregateResponse(): GetNodeSignaturesAggregateResponse {
  return { signatures: [] };
}

export const GetNodeSignaturesAggregateResponse = {
  encode(
    message: GetNodeSignaturesAggregateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.signatures) {
      NodeSignature.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNodeSignaturesAggregateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeSignaturesAggregateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatures.push(
            NodeSignature.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNodeSignaturesAggregateResponse {
    return {
      signatures: Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => NodeSignature.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNodeSignaturesAggregateResponse): unknown {
    const obj: any = {};
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) =>
        e ? NodeSignature.toJSON(e) : undefined
      );
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetNodeSignaturesAggregateResponse>, I>
  >(object: I): GetNodeSignaturesAggregateResponse {
    const message = createBaseGetNodeSignaturesAggregateResponse();
    message.signatures =
      object.signatures?.map((e) => NodeSignature.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOptionalProposalState(): OptionalProposalState {
  return { value: 0 };
}

export const OptionalProposalState = {
  encode(
    message: OptionalProposalState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OptionalProposalState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOptionalProposalState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OptionalProposalState {
    return {
      value: isSet(object.value) ? proposal_StateFromJSON(object.value) : 0,
    };
  },

  toJSON(message: OptionalProposalState): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = proposal_StateToJSON(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OptionalProposalState>, I>>(
    object: I
  ): OptionalProposalState {
    const message = createBaseOptionalProposalState();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseGetProposalsRequest(): GetProposalsRequest {
  return { selectInState: undefined };
}

export const GetProposalsRequest = {
  encode(
    message: GetProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetProposalsRequest {
    return {
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetProposalsRequest): unknown {
    const obj: any = {};
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalsRequest>, I>>(
    object: I
  ): GetProposalsRequest {
    const message = createBaseGetProposalsRequest();
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetProposalsResponse(): GetProposalsResponse {
  return { data: [] };
}

export const GetProposalsResponse = {
  encode(
    message: GetProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProposalsResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetProposalsResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalsResponse>, I>>(
    object: I
  ): GetProposalsResponse {
    const message = createBaseGetProposalsResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProposalsByPartyRequest(): GetProposalsByPartyRequest {
  return { partyId: "", selectInState: undefined };
}

export const GetProposalsByPartyRequest = {
  encode(
    message: GetProposalsByPartyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalsByPartyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalsByPartyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetProposalsByPartyRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetProposalsByPartyRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalsByPartyRequest>, I>>(
    object: I
  ): GetProposalsByPartyRequest {
    const message = createBaseGetProposalsByPartyRequest();
    message.partyId = object.partyId ?? "";
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetProposalsByPartyResponse(): GetProposalsByPartyResponse {
  return { data: [] };
}

export const GetProposalsByPartyResponse = {
  encode(
    message: GetProposalsByPartyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalsByPartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalsByPartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProposalsByPartyResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetProposalsByPartyResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalsByPartyResponse>, I>>(
    object: I
  ): GetProposalsByPartyResponse {
    const message = createBaseGetProposalsByPartyResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetVotesByPartyRequest(): GetVotesByPartyRequest {
  return { partyId: "" };
}

export const GetVotesByPartyRequest = {
  encode(
    message: GetVotesByPartyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetVotesByPartyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVotesByPartyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetVotesByPartyRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: GetVotesByPartyRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVotesByPartyRequest>, I>>(
    object: I
  ): GetVotesByPartyRequest {
    const message = createBaseGetVotesByPartyRequest();
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseGetVotesByPartyResponse(): GetVotesByPartyResponse {
  return { votes: [] };
}

export const GetVotesByPartyResponse = {
  encode(
    message: GetVotesByPartyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetVotesByPartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVotesByPartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetVotesByPartyResponse {
    return {
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetVotesByPartyResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVotesByPartyResponse>, I>>(
    object: I
  ): GetVotesByPartyResponse {
    const message = createBaseGetVotesByPartyResponse();
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNewMarketProposalsRequest(): GetNewMarketProposalsRequest {
  return { selectInState: undefined };
}

export const GetNewMarketProposalsRequest = {
  encode(
    message: GetNewMarketProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNewMarketProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewMarketProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetNewMarketProposalsRequest {
    return {
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetNewMarketProposalsRequest): unknown {
    const obj: any = {};
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNewMarketProposalsRequest>, I>>(
    object: I
  ): GetNewMarketProposalsRequest {
    const message = createBaseGetNewMarketProposalsRequest();
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetNewMarketProposalsResponse(): GetNewMarketProposalsResponse {
  return { data: [] };
}

export const GetNewMarketProposalsResponse = {
  encode(
    message: GetNewMarketProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNewMarketProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewMarketProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNewMarketProposalsResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNewMarketProposalsResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNewMarketProposalsResponse>, I>>(
    object: I
  ): GetNewMarketProposalsResponse {
    const message = createBaseGetNewMarketProposalsResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUpdateMarketProposalsRequest(): GetUpdateMarketProposalsRequest {
  return { marketId: "", selectInState: undefined };
}

export const GetUpdateMarketProposalsRequest = {
  encode(
    message: GetUpdateMarketProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUpdateMarketProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUpdateMarketProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetUpdateMarketProposalsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetUpdateMarketProposalsRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetUpdateMarketProposalsRequest>, I>>(
    object: I
  ): GetUpdateMarketProposalsRequest {
    const message = createBaseGetUpdateMarketProposalsRequest();
    message.marketId = object.marketId ?? "";
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetUpdateMarketProposalsResponse(): GetUpdateMarketProposalsResponse {
  return { data: [] };
}

export const GetUpdateMarketProposalsResponse = {
  encode(
    message: GetUpdateMarketProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetUpdateMarketProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUpdateMarketProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUpdateMarketProposalsResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUpdateMarketProposalsResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetUpdateMarketProposalsResponse>, I>
  >(object: I): GetUpdateMarketProposalsResponse {
    const message = createBaseGetUpdateMarketProposalsResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNetworkParametersProposalsRequest(): GetNetworkParametersProposalsRequest {
  return { selectInState: undefined };
}

export const GetNetworkParametersProposalsRequest = {
  encode(
    message: GetNetworkParametersProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNetworkParametersProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNetworkParametersProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetNetworkParametersProposalsRequest {
    return {
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetNetworkParametersProposalsRequest): unknown {
    const obj: any = {};
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetNetworkParametersProposalsRequest>, I>
  >(object: I): GetNetworkParametersProposalsRequest {
    const message = createBaseGetNetworkParametersProposalsRequest();
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetNetworkParametersProposalsResponse(): GetNetworkParametersProposalsResponse {
  return { data: [] };
}

export const GetNetworkParametersProposalsResponse = {
  encode(
    message: GetNetworkParametersProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNetworkParametersProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNetworkParametersProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNetworkParametersProposalsResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNetworkParametersProposalsResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetNetworkParametersProposalsResponse>, I>
  >(object: I): GetNetworkParametersProposalsResponse {
    const message = createBaseGetNetworkParametersProposalsResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNewFreeformProposalsRequest(): GetNewFreeformProposalsRequest {
  return { selectInState: undefined };
}

export const GetNewFreeformProposalsRequest = {
  encode(
    message: GetNewFreeformProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNewFreeformProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewFreeformProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetNewFreeformProposalsRequest {
    return {
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetNewFreeformProposalsRequest): unknown {
    const obj: any = {};
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNewFreeformProposalsRequest>, I>>(
    object: I
  ): GetNewFreeformProposalsRequest {
    const message = createBaseGetNewFreeformProposalsRequest();
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetNewFreeformProposalsResponse(): GetNewFreeformProposalsResponse {
  return { data: [] };
}

export const GetNewFreeformProposalsResponse = {
  encode(
    message: GetNewFreeformProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNewFreeformProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewFreeformProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNewFreeformProposalsResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNewFreeformProposalsResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNewFreeformProposalsResponse>, I>>(
    object: I
  ): GetNewFreeformProposalsResponse {
    const message = createBaseGetNewFreeformProposalsResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNewAssetProposalsRequest(): GetNewAssetProposalsRequest {
  return { selectInState: undefined };
}

export const GetNewAssetProposalsRequest = {
  encode(
    message: GetNewAssetProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selectInState !== undefined) {
      OptionalProposalState.encode(
        message.selectInState,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNewAssetProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewAssetProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectInState = OptionalProposalState.decode(
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

  fromJSON(object: any): GetNewAssetProposalsRequest {
    return {
      selectInState: isSet(object.selectInState)
        ? OptionalProposalState.fromJSON(object.selectInState)
        : undefined,
    };
  },

  toJSON(message: GetNewAssetProposalsRequest): unknown {
    const obj: any = {};
    message.selectInState !== undefined &&
      (obj.selectInState = message.selectInState
        ? OptionalProposalState.toJSON(message.selectInState)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNewAssetProposalsRequest>, I>>(
    object: I
  ): GetNewAssetProposalsRequest {
    const message = createBaseGetNewAssetProposalsRequest();
    message.selectInState =
      object.selectInState !== undefined && object.selectInState !== null
        ? OptionalProposalState.fromPartial(object.selectInState)
        : undefined;
    return message;
  },
};

function createBaseGetNewAssetProposalsResponse(): GetNewAssetProposalsResponse {
  return { data: [] };
}

export const GetNewAssetProposalsResponse = {
  encode(
    message: GetNewAssetProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.data) {
      GovernanceData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNewAssetProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNewAssetProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(GovernanceData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNewAssetProposalsResponse {
    return {
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => GovernanceData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetNewAssetProposalsResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? GovernanceData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNewAssetProposalsResponse>, I>>(
    object: I
  ): GetNewAssetProposalsResponse {
    const message = createBaseGetNewAssetProposalsResponse();
    message.data = object.data?.map((e) => GovernanceData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetProposalByIDRequest(): GetProposalByIDRequest {
  return { proposalId: "" };
}

export const GetProposalByIDRequest = {
  encode(
    message: GetProposalByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposalId !== "") {
      writer.uint32(10).string(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProposalByIDRequest {
    return {
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : "",
    };
  },

  toJSON(message: GetProposalByIDRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalByIDRequest>, I>>(
    object: I
  ): GetProposalByIDRequest {
    const message = createBaseGetProposalByIDRequest();
    message.proposalId = object.proposalId ?? "";
    return message;
  },
};

function createBaseGetProposalByIDResponse(): GetProposalByIDResponse {
  return { data: undefined };
}

export const GetProposalByIDResponse = {
  encode(
    message: GetProposalByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GovernanceData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GovernanceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProposalByIDResponse {
    return {
      data: isSet(object.data)
        ? GovernanceData.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: GetProposalByIDResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GovernanceData.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalByIDResponse>, I>>(
    object: I
  ): GetProposalByIDResponse {
    const message = createBaseGetProposalByIDResponse();
    message.data =
      object.data !== undefined && object.data !== null
        ? GovernanceData.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseGetProposalByReferenceRequest(): GetProposalByReferenceRequest {
  return { reference: "" };
}

export const GetProposalByReferenceRequest = {
  encode(
    message: GetProposalByReferenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reference !== "") {
      writer.uint32(10).string(message.reference);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalByReferenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalByReferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProposalByReferenceRequest {
    return {
      reference: isSet(object.reference) ? String(object.reference) : "",
    };
  },

  toJSON(message: GetProposalByReferenceRequest): unknown {
    const obj: any = {};
    message.reference !== undefined && (obj.reference = message.reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalByReferenceRequest>, I>>(
    object: I
  ): GetProposalByReferenceRequest {
    const message = createBaseGetProposalByReferenceRequest();
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseGetProposalByReferenceResponse(): GetProposalByReferenceResponse {
  return { data: undefined };
}

export const GetProposalByReferenceResponse = {
  encode(
    message: GetProposalByReferenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GovernanceData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetProposalByReferenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetProposalByReferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GovernanceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetProposalByReferenceResponse {
    return {
      data: isSet(object.data)
        ? GovernanceData.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: GetProposalByReferenceResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GovernanceData.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetProposalByReferenceResponse>, I>>(
    object: I
  ): GetProposalByReferenceResponse {
    const message = createBaseGetProposalByReferenceResponse();
    message.data =
      object.data !== undefined && object.data !== null
        ? GovernanceData.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseObserveGovernanceRequest(): ObserveGovernanceRequest {
  return {};
}

export const ObserveGovernanceRequest = {
  encode(
    _: ObserveGovernanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveGovernanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveGovernanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ObserveGovernanceRequest {
    return {};
  },

  toJSON(_: ObserveGovernanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveGovernanceRequest>, I>>(
    _: I
  ): ObserveGovernanceRequest {
    const message = createBaseObserveGovernanceRequest();
    return message;
  },
};

function createBaseObserveGovernanceResponse(): ObserveGovernanceResponse {
  return { data: undefined };
}

export const ObserveGovernanceResponse = {
  encode(
    message: ObserveGovernanceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GovernanceData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveGovernanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveGovernanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GovernanceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveGovernanceResponse {
    return {
      data: isSet(object.data)
        ? GovernanceData.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: ObserveGovernanceResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GovernanceData.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveGovernanceResponse>, I>>(
    object: I
  ): ObserveGovernanceResponse {
    const message = createBaseObserveGovernanceResponse();
    message.data =
      object.data !== undefined && object.data !== null
        ? GovernanceData.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseObservePartyProposalsRequest(): ObservePartyProposalsRequest {
  return { partyId: "" };
}

export const ObservePartyProposalsRequest = {
  encode(
    message: ObservePartyProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObservePartyProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservePartyProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservePartyProposalsRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: ObservePartyProposalsRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservePartyProposalsRequest>, I>>(
    object: I
  ): ObservePartyProposalsRequest {
    const message = createBaseObservePartyProposalsRequest();
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseObservePartyProposalsResponse(): ObservePartyProposalsResponse {
  return { data: undefined };
}

export const ObservePartyProposalsResponse = {
  encode(
    message: ObservePartyProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      GovernanceData.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObservePartyProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservePartyProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = GovernanceData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservePartyProposalsResponse {
    return {
      data: isSet(object.data)
        ? GovernanceData.fromJSON(object.data)
        : undefined,
    };
  },

  toJSON(message: ObservePartyProposalsResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data
        ? GovernanceData.toJSON(message.data)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservePartyProposalsResponse>, I>>(
    object: I
  ): ObservePartyProposalsResponse {
    const message = createBaseObservePartyProposalsResponse();
    message.data =
      object.data !== undefined && object.data !== null
        ? GovernanceData.fromPartial(object.data)
        : undefined;
    return message;
  },
};

function createBaseObserveProposalVotesRequest(): ObserveProposalVotesRequest {
  return { proposalId: "" };
}

export const ObserveProposalVotesRequest = {
  encode(
    message: ObserveProposalVotesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposalId !== "") {
      writer.uint32(10).string(message.proposalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveProposalVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveProposalVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveProposalVotesRequest {
    return {
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : "",
    };
  },

  toJSON(message: ObserveProposalVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveProposalVotesRequest>, I>>(
    object: I
  ): ObserveProposalVotesRequest {
    const message = createBaseObserveProposalVotesRequest();
    message.proposalId = object.proposalId ?? "";
    return message;
  },
};

function createBaseObserveProposalVotesResponse(): ObserveProposalVotesResponse {
  return { vote: undefined };
}

export const ObserveProposalVotesResponse = {
  encode(
    message: ObserveProposalVotesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveProposalVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveProposalVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveProposalVotesResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: ObserveProposalVotesResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveProposalVotesResponse>, I>>(
    object: I
  ): ObserveProposalVotesResponse {
    const message = createBaseObserveProposalVotesResponse();
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    return message;
  },
};

function createBaseObservePartyVotesRequest(): ObservePartyVotesRequest {
  return { partyId: "" };
}

export const ObservePartyVotesRequest = {
  encode(
    message: ObservePartyVotesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObservePartyVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservePartyVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservePartyVotesRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: ObservePartyVotesRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservePartyVotesRequest>, I>>(
    object: I
  ): ObservePartyVotesRequest {
    const message = createBaseObservePartyVotesRequest();
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseObservePartyVotesResponse(): ObservePartyVotesResponse {
  return { vote: undefined };
}

export const ObservePartyVotesResponse = {
  encode(
    message: ObservePartyVotesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObservePartyVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservePartyVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservePartyVotesResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
    };
  },

  toJSON(message: ObservePartyVotesResponse): unknown {
    const obj: any = {};
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservePartyVotesResponse>, I>>(
    object: I
  ): ObservePartyVotesResponse {
    const message = createBaseObservePartyVotesResponse();
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    return message;
  },
};

function createBaseMarginLevelsSubscribeRequest(): MarginLevelsSubscribeRequest {
  return { partyId: "", marketId: "" };
}

export const MarginLevelsSubscribeRequest = {
  encode(
    message: MarginLevelsSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarginLevelsSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarginLevelsSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
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

  fromJSON(object: any): MarginLevelsSubscribeRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarginLevelsSubscribeRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarginLevelsSubscribeRequest>, I>>(
    object: I
  ): MarginLevelsSubscribeRequest {
    const message = createBaseMarginLevelsSubscribeRequest();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarginLevelsSubscribeResponse(): MarginLevelsSubscribeResponse {
  return { marginLevels: undefined };
}

export const MarginLevelsSubscribeResponse = {
  encode(
    message: MarginLevelsSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marginLevels !== undefined) {
      MarginLevels.encode(
        message.marginLevels,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarginLevelsSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarginLevelsSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marginLevels = MarginLevels.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarginLevelsSubscribeResponse {
    return {
      marginLevels: isSet(object.marginLevels)
        ? MarginLevels.fromJSON(object.marginLevels)
        : undefined,
    };
  },

  toJSON(message: MarginLevelsSubscribeResponse): unknown {
    const obj: any = {};
    message.marginLevels !== undefined &&
      (obj.marginLevels = message.marginLevels
        ? MarginLevels.toJSON(message.marginLevels)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarginLevelsSubscribeResponse>, I>>(
    object: I
  ): MarginLevelsSubscribeResponse {
    const message = createBaseMarginLevelsSubscribeResponse();
    message.marginLevels =
      object.marginLevels !== undefined && object.marginLevels !== null
        ? MarginLevels.fromPartial(object.marginLevels)
        : undefined;
    return message;
  },
};

function createBaseMarginLevelsRequest(): MarginLevelsRequest {
  return { partyId: "", marketId: "" };
}

export const MarginLevelsRequest = {
  encode(
    message: MarginLevelsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarginLevelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarginLevelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
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

  fromJSON(object: any): MarginLevelsRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarginLevelsRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarginLevelsRequest>, I>>(
    object: I
  ): MarginLevelsRequest {
    const message = createBaseMarginLevelsRequest();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarginLevelsResponse(): MarginLevelsResponse {
  return { marginLevels: [] };
}

export const MarginLevelsResponse = {
  encode(
    message: MarginLevelsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marginLevels) {
      MarginLevels.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarginLevelsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarginLevelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marginLevels.push(
            MarginLevels.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarginLevelsResponse {
    return {
      marginLevels: Array.isArray(object?.marginLevels)
        ? object.marginLevels.map((e: any) => MarginLevels.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarginLevelsResponse): unknown {
    const obj: any = {};
    if (message.marginLevels) {
      obj.marginLevels = message.marginLevels.map((e) =>
        e ? MarginLevels.toJSON(e) : undefined
      );
    } else {
      obj.marginLevels = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarginLevelsResponse>, I>>(
    object: I
  ): MarginLevelsResponse {
    const message = createBaseMarginLevelsResponse();
    message.marginLevels =
      object.marginLevels?.map((e) => MarginLevels.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMarketsDataSubscribeRequest(): MarketsDataSubscribeRequest {
  return { marketId: "" };
}

export const MarketsDataSubscribeRequest = {
  encode(
    message: MarketsDataSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketsDataSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketsDataSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketsDataSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarketsDataSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketsDataSubscribeRequest>, I>>(
    object: I
  ): MarketsDataSubscribeRequest {
    const message = createBaseMarketsDataSubscribeRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarketsDataSubscribeResponse(): MarketsDataSubscribeResponse {
  return { marketData: undefined };
}

export const MarketsDataSubscribeResponse = {
  encode(
    message: MarketsDataSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketData !== undefined) {
      MarketData.encode(message.marketData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketsDataSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketsDataSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketData = MarketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketsDataSubscribeResponse {
    return {
      marketData: isSet(object.marketData)
        ? MarketData.fromJSON(object.marketData)
        : undefined,
    };
  },

  toJSON(message: MarketsDataSubscribeResponse): unknown {
    const obj: any = {};
    message.marketData !== undefined &&
      (obj.marketData = message.marketData
        ? MarketData.toJSON(message.marketData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketsDataSubscribeResponse>, I>>(
    object: I
  ): MarketsDataSubscribeResponse {
    const message = createBaseMarketsDataSubscribeResponse();
    message.marketData =
      object.marketData !== undefined && object.marketData !== null
        ? MarketData.fromPartial(object.marketData)
        : undefined;
    return message;
  },
};

function createBaseMarketDataByIDRequest(): MarketDataByIDRequest {
  return { marketId: "" };
}

export const MarketDataByIDRequest = {
  encode(
    message: MarketDataByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDataByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataByIDRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarketDataByIDRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDataByIDRequest>, I>>(
    object: I
  ): MarketDataByIDRequest {
    const message = createBaseMarketDataByIDRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarketDataByIDResponse(): MarketDataByIDResponse {
  return { marketData: undefined };
}

export const MarketDataByIDResponse = {
  encode(
    message: MarketDataByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketData !== undefined) {
      MarketData.encode(message.marketData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDataByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketData = MarketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataByIDResponse {
    return {
      marketData: isSet(object.marketData)
        ? MarketData.fromJSON(object.marketData)
        : undefined,
    };
  },

  toJSON(message: MarketDataByIDResponse): unknown {
    const obj: any = {};
    message.marketData !== undefined &&
      (obj.marketData = message.marketData
        ? MarketData.toJSON(message.marketData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDataByIDResponse>, I>>(
    object: I
  ): MarketDataByIDResponse {
    const message = createBaseMarketDataByIDResponse();
    message.marketData =
      object.marketData !== undefined && object.marketData !== null
        ? MarketData.fromPartial(object.marketData)
        : undefined;
    return message;
  },
};

function createBaseMarketsDataRequest(): MarketsDataRequest {
  return {};
}

export const MarketsDataRequest = {
  encode(
    _: MarketsDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketsDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketsDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MarketsDataRequest {
    return {};
  },

  toJSON(_: MarketsDataRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketsDataRequest>, I>>(
    _: I
  ): MarketsDataRequest {
    const message = createBaseMarketsDataRequest();
    return message;
  },
};

function createBaseMarketsDataResponse(): MarketsDataResponse {
  return { marketsData: [] };
}

export const MarketsDataResponse = {
  encode(
    message: MarketsDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketsData) {
      MarketData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketsDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketsDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketsData.push(MarketData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketsDataResponse {
    return {
      marketsData: Array.isArray(object?.marketsData)
        ? object.marketsData.map((e: any) => MarketData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarketsDataResponse): unknown {
    const obj: any = {};
    if (message.marketsData) {
      obj.marketsData = message.marketsData.map((e) =>
        e ? MarketData.toJSON(e) : undefined
      );
    } else {
      obj.marketsData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketsDataResponse>, I>>(
    object: I
  ): MarketsDataResponse {
    const message = createBaseMarketsDataResponse();
    message.marketsData =
      object.marketsData?.map((e) => MarketData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLastTradeRequest(): LastTradeRequest {
  return { marketId: "" };
}

export const LastTradeRequest = {
  encode(
    message: LastTradeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastTradeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LastTradeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastTradeRequest>, I>>(
    object: I
  ): LastTradeRequest {
    const message = createBaseLastTradeRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseLastTradeResponse(): LastTradeResponse {
  return { trade: undefined };
}

export const LastTradeResponse = {
  encode(
    message: LastTradeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trade = Trade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastTradeResponse {
    return {
      trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined,
    };
  },

  toJSON(message: LastTradeResponse): unknown {
    const obj: any = {};
    message.trade !== undefined &&
      (obj.trade = message.trade ? Trade.toJSON(message.trade) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastTradeResponse>, I>>(
    object: I
  ): LastTradeResponse {
    const message = createBaseLastTradeResponse();
    message.trade =
      object.trade !== undefined && object.trade !== null
        ? Trade.fromPartial(object.trade)
        : undefined;
    return message;
  },
};

function createBaseMarketByIDRequest(): MarketByIDRequest {
  return { marketId: "" };
}

export const MarketByIDRequest = {
  encode(
    message: MarketByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketByIDRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarketByIDRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketByIDRequest>, I>>(
    object: I
  ): MarketByIDRequest {
    const message = createBaseMarketByIDRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarketByIDResponse(): MarketByIDResponse {
  return { market: undefined };
}

export const MarketByIDResponse = {
  encode(
    message: MarketByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketByIDResponse {
    return {
      market: isSet(object.market) ? Market.fromJSON(object.market) : undefined,
    };
  },

  toJSON(message: MarketByIDResponse): unknown {
    const obj: any = {};
    message.market !== undefined &&
      (obj.market = message.market ? Market.toJSON(message.market) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketByIDResponse>, I>>(
    object: I
  ): MarketByIDResponse {
    const message = createBaseMarketByIDResponse();
    message.market =
      object.market !== undefined && object.market !== null
        ? Market.fromPartial(object.market)
        : undefined;
    return message;
  },
};

function createBasePartyByIDRequest(): PartyByIDRequest {
  return { partyId: "" };
}

export const PartyByIDRequest = {
  encode(
    message: PartyByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyByIDRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: PartyByIDRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyByIDRequest>, I>>(
    object: I
  ): PartyByIDRequest {
    const message = createBasePartyByIDRequest();
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBasePartyByIDResponse(): PartyByIDResponse {
  return { party: undefined };
}

export const PartyByIDResponse = {
  encode(
    message: PartyByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== undefined) {
      Party.encode(message.party, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = Party.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyByIDResponse {
    return {
      party: isSet(object.party) ? Party.fromJSON(object.party) : undefined,
    };
  },

  toJSON(message: PartyByIDResponse): unknown {
    const obj: any = {};
    message.party !== undefined &&
      (obj.party = message.party ? Party.toJSON(message.party) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyByIDResponse>, I>>(
    object: I
  ): PartyByIDResponse {
    const message = createBasePartyByIDResponse();
    message.party =
      object.party !== undefined && object.party !== null
        ? Party.fromPartial(object.party)
        : undefined;
    return message;
  },
};

function createBasePartiesRequest(): PartiesRequest {
  return {};
}

export const PartiesRequest = {
  encode(
    _: PartiesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PartiesRequest {
    return {};
  },

  toJSON(_: PartiesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartiesRequest>, I>>(
    _: I
  ): PartiesRequest {
    const message = createBasePartiesRequest();
    return message;
  },
};

function createBasePartiesResponse(): PartiesResponse {
  return { parties: [] };
}

export const PartiesResponse = {
  encode(
    message: PartiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.parties) {
      Party.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parties.push(Party.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartiesResponse {
    return {
      parties: Array.isArray(object?.parties)
        ? object.parties.map((e: any) => Party.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PartiesResponse): unknown {
    const obj: any = {};
    if (message.parties) {
      obj.parties = message.parties.map((e) =>
        e ? Party.toJSON(e) : undefined
      );
    } else {
      obj.parties = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartiesResponse>, I>>(
    object: I
  ): PartiesResponse {
    const message = createBasePartiesResponse();
    message.parties = object.parties?.map((e) => Party.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradesByPartyRequest(): TradesByPartyRequest {
  return { partyId: "", marketId: "", pagination: undefined };
}

export const TradesByPartyRequest = {
  encode(
    message: TradesByPartyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesByPartyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesByPartyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesByPartyRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: TradesByPartyRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesByPartyRequest>, I>>(
    object: I
  ): TradesByPartyRequest {
    const message = createBaseTradesByPartyRequest();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseTradesByPartyResponse(): TradesByPartyResponse {
  return { trades: [] };
}

export const TradesByPartyResponse = {
  encode(
    message: TradesByPartyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesByPartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesByPartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesByPartyResponse {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradesByPartyResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesByPartyResponse>, I>>(
    object: I
  ): TradesByPartyResponse {
    const message = createBaseTradesByPartyResponse();
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradesByOrderRequest(): TradesByOrderRequest {
  return { orderId: "" };
}

export const TradesByOrderRequest = {
  encode(
    message: TradesByOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesByOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesByOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesByOrderRequest {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
    };
  },

  toJSON(message: TradesByOrderRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesByOrderRequest>, I>>(
    object: I
  ): TradesByOrderRequest {
    const message = createBaseTradesByOrderRequest();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseTradesByOrderResponse(): TradesByOrderResponse {
  return { trades: [] };
}

export const TradesByOrderResponse = {
  encode(
    message: TradesByOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesByOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesByOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesByOrderResponse {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradesByOrderResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesByOrderResponse>, I>>(
    object: I
  ): TradesByOrderResponse {
    const message = createBaseTradesByOrderResponse();
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountsSubscribeRequest(): AccountsSubscribeRequest {
  return { marketId: "", partyId: "", asset: "", type: 0 };
}

export const AccountsSubscribeRequest = {
  encode(
    message: AccountsSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountsSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: AccountsSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.asset !== undefined && (obj.asset = message.asset);
    message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountsSubscribeRequest>, I>>(
    object: I
  ): AccountsSubscribeRequest {
    const message = createBaseAccountsSubscribeRequest();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.asset = object.asset ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAccountsSubscribeResponse(): AccountsSubscribeResponse {
  return { account: undefined };
}

export const AccountsSubscribeResponse = {
  encode(
    message: AccountsSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountsSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountsSubscribeResponse {
    return {
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
    };
  },

  toJSON(message: AccountsSubscribeResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountsSubscribeResponse>, I>>(
    object: I
  ): AccountsSubscribeResponse {
    const message = createBaseAccountsSubscribeResponse();
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
        : undefined;
    return message;
  },
};

function createBaseOrdersSubscribeRequest(): OrdersSubscribeRequest {
  return { marketId: "", partyId: "" };
}

export const OrdersSubscribeRequest = {
  encode(
    message: OrdersSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: OrdersSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersSubscribeRequest>, I>>(
    object: I
  ): OrdersSubscribeRequest {
    const message = createBaseOrdersSubscribeRequest();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseTradesSubscribeRequest(): TradesSubscribeRequest {
  return { marketId: "", partyId: "" };
}

export const TradesSubscribeRequest = {
  encode(
    message: TradesSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: TradesSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesSubscribeRequest>, I>>(
    object: I
  ): TradesSubscribeRequest {
    const message = createBaseTradesSubscribeRequest();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseCandlesSubscribeRequest(): CandlesSubscribeRequest {
  return { marketId: "", interval: 0 };
}

export const CandlesSubscribeRequest = {
  encode(
    message: CandlesSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CandlesSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandlesSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandlesSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      interval: isSet(object.interval) ? intervalFromJSON(object.interval) : 0,
    };
  },

  toJSON(message: CandlesSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.interval !== undefined &&
      (obj.interval = intervalToJSON(message.interval));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CandlesSubscribeRequest>, I>>(
    object: I
  ): CandlesSubscribeRequest {
    const message = createBaseCandlesSubscribeRequest();
    message.marketId = object.marketId ?? "";
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBaseCandlesSubscribeResponse(): CandlesSubscribeResponse {
  return { candle: undefined };
}

export const CandlesSubscribeResponse = {
  encode(
    message: CandlesSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.candle !== undefined) {
      Candle.encode(message.candle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CandlesSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandlesSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candle = Candle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandlesSubscribeResponse {
    return {
      candle: isSet(object.candle) ? Candle.fromJSON(object.candle) : undefined,
    };
  },

  toJSON(message: CandlesSubscribeResponse): unknown {
    const obj: any = {};
    message.candle !== undefined &&
      (obj.candle = message.candle ? Candle.toJSON(message.candle) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CandlesSubscribeResponse>, I>>(
    object: I
  ): CandlesSubscribeResponse {
    const message = createBaseCandlesSubscribeResponse();
    message.candle =
      object.candle !== undefined && object.candle !== null
        ? Candle.fromPartial(object.candle)
        : undefined;
    return message;
  },
};

function createBaseMarketDepthSubscribeRequest(): MarketDepthSubscribeRequest {
  return { marketId: "" };
}

export const MarketDepthSubscribeRequest = {
  encode(
    message: MarketDepthSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDepthSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarketDepthSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDepthSubscribeRequest>, I>>(
    object: I
  ): MarketDepthSubscribeRequest {
    const message = createBaseMarketDepthSubscribeRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarketDepthSubscribeResponse(): MarketDepthSubscribeResponse {
  return { marketDepth: undefined };
}

export const MarketDepthSubscribeResponse = {
  encode(
    message: MarketDepthSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketDepth !== undefined) {
      MarketDepth.encode(
        message.marketDepth,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDepthSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketDepth = MarketDepth.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthSubscribeResponse {
    return {
      marketDepth: isSet(object.marketDepth)
        ? MarketDepth.fromJSON(object.marketDepth)
        : undefined,
    };
  },

  toJSON(message: MarketDepthSubscribeResponse): unknown {
    const obj: any = {};
    message.marketDepth !== undefined &&
      (obj.marketDepth = message.marketDepth
        ? MarketDepth.toJSON(message.marketDepth)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDepthSubscribeResponse>, I>>(
    object: I
  ): MarketDepthSubscribeResponse {
    const message = createBaseMarketDepthSubscribeResponse();
    message.marketDepth =
      object.marketDepth !== undefined && object.marketDepth !== null
        ? MarketDepth.fromPartial(object.marketDepth)
        : undefined;
    return message;
  },
};

function createBaseMarketDepthUpdatesSubscribeRequest(): MarketDepthUpdatesSubscribeRequest {
  return { marketId: "" };
}

export const MarketDepthUpdatesSubscribeRequest = {
  encode(
    message: MarketDepthUpdatesSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDepthUpdatesSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthUpdatesSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthUpdatesSubscribeRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: MarketDepthUpdatesSubscribeRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MarketDepthUpdatesSubscribeRequest>, I>
  >(object: I): MarketDepthUpdatesSubscribeRequest {
    const message = createBaseMarketDepthUpdatesSubscribeRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseMarketDepthUpdatesSubscribeResponse(): MarketDepthUpdatesSubscribeResponse {
  return { update: undefined };
}

export const MarketDepthUpdatesSubscribeResponse = {
  encode(
    message: MarketDepthUpdatesSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.update !== undefined) {
      MarketDepthUpdate.encode(
        message.update,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketDepthUpdatesSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthUpdatesSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.update = MarketDepthUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthUpdatesSubscribeResponse {
    return {
      update: isSet(object.update)
        ? MarketDepthUpdate.fromJSON(object.update)
        : undefined,
    };
  },

  toJSON(message: MarketDepthUpdatesSubscribeResponse): unknown {
    const obj: any = {};
    message.update !== undefined &&
      (obj.update = message.update
        ? MarketDepthUpdate.toJSON(message.update)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MarketDepthUpdatesSubscribeResponse>, I>
  >(object: I): MarketDepthUpdatesSubscribeResponse {
    const message = createBaseMarketDepthUpdatesSubscribeResponse();
    message.update =
      object.update !== undefined && object.update !== null
        ? MarketDepthUpdate.fromPartial(object.update)
        : undefined;
    return message;
  },
};

function createBasePositionsSubscribeRequest(): PositionsSubscribeRequest {
  return { partyId: "", marketId: "" };
}

export const PositionsSubscribeRequest = {
  encode(
    message: PositionsSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
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

  fromJSON(object: any): PositionsSubscribeRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: PositionsSubscribeRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionsSubscribeRequest>, I>>(
    object: I
  ): PositionsSubscribeRequest {
    const message = createBasePositionsSubscribeRequest();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBasePositionsSubscribeResponse(): PositionsSubscribeResponse {
  return { position: undefined };
}

export const PositionsSubscribeResponse = {
  encode(
    message: PositionsSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.position !== undefined) {
      Position.encode(message.position, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = Position.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsSubscribeResponse {
    return {
      position: isSet(object.position)
        ? Position.fromJSON(object.position)
        : undefined,
    };
  },

  toJSON(message: PositionsSubscribeResponse): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = message.position
        ? Position.toJSON(message.position)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionsSubscribeResponse>, I>>(
    object: I
  ): PositionsSubscribeResponse {
    const message = createBasePositionsSubscribeResponse();
    message.position =
      object.position !== undefined && object.position !== null
        ? Position.fromPartial(object.position)
        : undefined;
    return message;
  },
};

function createBaseOrdersByMarketRequest(): OrdersByMarketRequest {
  return { marketId: "", pagination: undefined };
}

export const OrdersByMarketRequest = {
  encode(
    message: OrdersByMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersByMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersByMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersByMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: OrdersByMarketRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersByMarketRequest>, I>>(
    object: I
  ): OrdersByMarketRequest {
    const message = createBaseOrdersByMarketRequest();
    message.marketId = object.marketId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseOrdersByMarketResponse(): OrdersByMarketResponse {
  return { orders: [] };
}

export const OrdersByMarketResponse = {
  encode(
    message: OrdersByMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersByMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersByMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersByMarketResponse {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrdersByMarketResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersByMarketResponse>, I>>(
    object: I
  ): OrdersByMarketResponse {
    const message = createBaseOrdersByMarketResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrdersByPartyRequest(): OrdersByPartyRequest {
  return { partyId: "", pagination: undefined };
}

export const OrdersByPartyRequest = {
  encode(
    message: OrdersByPartyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersByPartyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersByPartyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersByPartyRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: OrdersByPartyRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersByPartyRequest>, I>>(
    object: I
  ): OrdersByPartyRequest {
    const message = createBaseOrdersByPartyRequest();
    message.partyId = object.partyId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseOrdersByPartyResponse(): OrdersByPartyResponse {
  return { orders: [] };
}

export const OrdersByPartyResponse = {
  encode(
    message: OrdersByPartyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersByPartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersByPartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersByPartyResponse {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrdersByPartyResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersByPartyResponse>, I>>(
    object: I
  ): OrdersByPartyResponse {
    const message = createBaseOrdersByPartyResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrderByMarketAndIDRequest(): OrderByMarketAndIDRequest {
  return { marketId: "", orderId: "" };
}

export const OrderByMarketAndIDRequest = {
  encode(
    message: OrderByMarketAndIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderByMarketAndIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderByMarketAndIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderByMarketAndIDRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
    };
  },

  toJSON(message: OrderByMarketAndIDRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderByMarketAndIDRequest>, I>>(
    object: I
  ): OrderByMarketAndIDRequest {
    const message = createBaseOrderByMarketAndIDRequest();
    message.marketId = object.marketId ?? "";
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseOrderByMarketAndIDResponse(): OrderByMarketAndIDResponse {
  return { order: undefined };
}

export const OrderByMarketAndIDResponse = {
  encode(
    message: OrderByMarketAndIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderByMarketAndIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderByMarketAndIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderByMarketAndIDResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: OrderByMarketAndIDResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderByMarketAndIDResponse>, I>>(
    object: I
  ): OrderByMarketAndIDResponse {
    const message = createBaseOrderByMarketAndIDResponse();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseOrderByReferenceRequest(): OrderByReferenceRequest {
  return { reference: "" };
}

export const OrderByReferenceRequest = {
  encode(
    message: OrderByReferenceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reference !== "") {
      writer.uint32(10).string(message.reference);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderByReferenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderByReferenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderByReferenceRequest {
    return {
      reference: isSet(object.reference) ? String(object.reference) : "",
    };
  },

  toJSON(message: OrderByReferenceRequest): unknown {
    const obj: any = {};
    message.reference !== undefined && (obj.reference = message.reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderByReferenceRequest>, I>>(
    object: I
  ): OrderByReferenceRequest {
    const message = createBaseOrderByReferenceRequest();
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseOrderByReferenceResponse(): OrderByReferenceResponse {
  return { order: undefined };
}

export const OrderByReferenceResponse = {
  encode(
    message: OrderByReferenceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderByReferenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderByReferenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderByReferenceResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: OrderByReferenceResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderByReferenceResponse>, I>>(
    object: I
  ): OrderByReferenceResponse {
    const message = createBaseOrderByReferenceResponse();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseMarketsRequest(): MarketsRequest {
  return {};
}

export const MarketsRequest = {
  encode(
    _: MarketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MarketsRequest {
    return {};
  },

  toJSON(_: MarketsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketsRequest>, I>>(
    _: I
  ): MarketsRequest {
    const message = createBaseMarketsRequest();
    return message;
  },
};

function createBaseMarketsResponse(): MarketsResponse {
  return { markets: [] };
}

export const MarketsResponse = {
  encode(
    message: MarketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketsResponse();
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

  fromJSON(object: any): MarketsResponse {
    return {
      markets: Array.isArray(object?.markets)
        ? object.markets.map((e: any) => Market.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarketsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MarketsResponse>, I>>(
    object: I
  ): MarketsResponse {
    const message = createBaseMarketsResponse();
    message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCandlesRequest(): CandlesRequest {
  return { marketId: "", sinceTimestamp: "0", interval: 0 };
}

export const CandlesRequest = {
  encode(
    message: CandlesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.sinceTimestamp !== "0") {
      writer.uint32(16).int64(message.sinceTimestamp);
    }
    if (message.interval !== 0) {
      writer.uint32(24).int32(message.interval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.sinceTimestamp = longToString(reader.int64() as Long);
          break;
        case 3:
          message.interval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandlesRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      sinceTimestamp: isSet(object.sinceTimestamp)
        ? String(object.sinceTimestamp)
        : "0",
      interval: isSet(object.interval) ? intervalFromJSON(object.interval) : 0,
    };
  },

  toJSON(message: CandlesRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.sinceTimestamp !== undefined &&
      (obj.sinceTimestamp = message.sinceTimestamp);
    message.interval !== undefined &&
      (obj.interval = intervalToJSON(message.interval));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CandlesRequest>, I>>(
    object: I
  ): CandlesRequest {
    const message = createBaseCandlesRequest();
    message.marketId = object.marketId ?? "";
    message.sinceTimestamp = object.sinceTimestamp ?? "0";
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBaseCandlesResponse(): CandlesResponse {
  return { candles: [] };
}

export const CandlesResponse = {
  encode(
    message: CandlesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.candles) {
      Candle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candles.push(Candle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandlesResponse {
    return {
      candles: Array.isArray(object?.candles)
        ? object.candles.map((e: any) => Candle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CandlesResponse): unknown {
    const obj: any = {};
    if (message.candles) {
      obj.candles = message.candles.map((e) =>
        e ? Candle.toJSON(e) : undefined
      );
    } else {
      obj.candles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CandlesResponse>, I>>(
    object: I
  ): CandlesResponse {
    const message = createBaseCandlesResponse();
    message.candles = object.candles?.map((e) => Candle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMarketDepthRequest(): MarketDepthRequest {
  return { marketId: "", maxDepth: "0" };
}

export const MarketDepthRequest = {
  encode(
    message: MarketDepthRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.maxDepth !== "0") {
      writer.uint32(16).uint64(message.maxDepth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDepthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.maxDepth = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      maxDepth: isSet(object.maxDepth) ? String(object.maxDepth) : "0",
    };
  },

  toJSON(message: MarketDepthRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.maxDepth !== undefined && (obj.maxDepth = message.maxDepth);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDepthRequest>, I>>(
    object: I
  ): MarketDepthRequest {
    const message = createBaseMarketDepthRequest();
    message.marketId = object.marketId ?? "";
    message.maxDepth = object.maxDepth ?? "0";
    return message;
  },
};

function createBaseMarketDepthResponse(): MarketDepthResponse {
  return {
    marketId: "",
    buy: [],
    sell: [],
    lastTrade: undefined,
    sequenceNumber: "0",
  };
}

export const MarketDepthResponse = {
  encode(
    message: MarketDepthResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    for (const v of message.buy) {
      PriceLevel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sell) {
      PriceLevel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastTrade !== undefined) {
      Trade.encode(message.lastTrade, writer.uint32(34).fork()).ldelim();
    }
    if (message.sequenceNumber !== "0") {
      writer.uint32(40).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDepthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.buy.push(PriceLevel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.sell.push(PriceLevel.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastTrade = Trade.decode(reader, reader.uint32());
          break;
        case 5:
          message.sequenceNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthResponse {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      buy: Array.isArray(object?.buy)
        ? object.buy.map((e: any) => PriceLevel.fromJSON(e))
        : [],
      sell: Array.isArray(object?.sell)
        ? object.sell.map((e: any) => PriceLevel.fromJSON(e))
        : [],
      lastTrade: isSet(object.lastTrade)
        ? Trade.fromJSON(object.lastTrade)
        : undefined,
      sequenceNumber: isSet(object.sequenceNumber)
        ? String(object.sequenceNumber)
        : "0",
    };
  },

  toJSON(message: MarketDepthResponse): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    if (message.buy) {
      obj.buy = message.buy.map((e) => (e ? PriceLevel.toJSON(e) : undefined));
    } else {
      obj.buy = [];
    }
    if (message.sell) {
      obj.sell = message.sell.map((e) =>
        e ? PriceLevel.toJSON(e) : undefined
      );
    } else {
      obj.sell = [];
    }
    message.lastTrade !== undefined &&
      (obj.lastTrade = message.lastTrade
        ? Trade.toJSON(message.lastTrade)
        : undefined);
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = message.sequenceNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDepthResponse>, I>>(
    object: I
  ): MarketDepthResponse {
    const message = createBaseMarketDepthResponse();
    message.marketId = object.marketId ?? "";
    message.buy = object.buy?.map((e) => PriceLevel.fromPartial(e)) || [];
    message.sell = object.sell?.map((e) => PriceLevel.fromPartial(e)) || [];
    message.lastTrade =
      object.lastTrade !== undefined && object.lastTrade !== null
        ? Trade.fromPartial(object.lastTrade)
        : undefined;
    message.sequenceNumber = object.sequenceNumber ?? "0";
    return message;
  },
};

function createBaseTradesByMarketRequest(): TradesByMarketRequest {
  return { marketId: "", pagination: undefined };
}

export const TradesByMarketRequest = {
  encode(
    message: TradesByMarketRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesByMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesByMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesByMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: TradesByMarketRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesByMarketRequest>, I>>(
    object: I
  ): TradesByMarketRequest {
    const message = createBaseTradesByMarketRequest();
    message.marketId = object.marketId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseTradesByMarketResponse(): TradesByMarketResponse {
  return { trades: [] };
}

export const TradesByMarketResponse = {
  encode(
    message: TradesByMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesByMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesByMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesByMarketResponse {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradesByMarketResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesByMarketResponse>, I>>(
    object: I
  ): TradesByMarketResponse {
    const message = createBaseTradesByMarketResponse();
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    return message;
  },
};

function createBasePositionsByPartyRequest(): PositionsByPartyRequest {
  return { partyId: "", marketId: "" };
}

export const PositionsByPartyRequest = {
  encode(
    message: PositionsByPartyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsByPartyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPartyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
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

  fromJSON(object: any): PositionsByPartyRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: PositionsByPartyRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionsByPartyRequest>, I>>(
    object: I
  ): PositionsByPartyRequest {
    const message = createBasePositionsByPartyRequest();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBasePositionsByPartyResponse(): PositionsByPartyResponse {
  return { positions: [] };
}

export const PositionsByPartyResponse = {
  encode(
    message: PositionsByPartyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.positions) {
      Position.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsByPartyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsByPartyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positions.push(Position.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsByPartyResponse {
    return {
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => Position.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PositionsByPartyResponse): unknown {
    const obj: any = {};
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? Position.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionsByPartyResponse>, I>>(
    object: I
  ): PositionsByPartyResponse {
    const message = createBasePositionsByPartyResponse();
    message.positions =
      object.positions?.map((e) => Position.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetVegaTimeRequest(): GetVegaTimeRequest {
  return {};
}

export const GetVegaTimeRequest = {
  encode(
    _: GetVegaTimeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVegaTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVegaTimeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetVegaTimeRequest {
    return {};
  },

  toJSON(_: GetVegaTimeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVegaTimeRequest>, I>>(
    _: I
  ): GetVegaTimeRequest {
    const message = createBaseGetVegaTimeRequest();
    return message;
  },
};

function createBaseGetVegaTimeResponse(): GetVegaTimeResponse {
  return { timestamp: "0" };
}

export const GetVegaTimeResponse = {
  encode(
    message: GetVegaTimeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== "0") {
      writer.uint32(8).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVegaTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVegaTimeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetVegaTimeResponse {
    return {
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: GetVegaTimeResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVegaTimeResponse>, I>>(
    object: I
  ): GetVegaTimeResponse {
    const message = createBaseGetVegaTimeResponse();
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBasePagination(): Pagination {
  return { skip: "0", limit: "0", descending: false };
}

export const Pagination = {
  encode(
    message: Pagination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.skip !== "0") {
      writer.uint32(8).uint64(message.skip);
    }
    if (message.limit !== "0") {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.descending === true) {
      writer.uint32(24).bool(message.descending);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.limit = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      skip: isSet(object.skip) ? String(object.skip) : "0",
      limit: isSet(object.limit) ? String(object.limit) : "0",
      descending: isSet(object.descending) ? Boolean(object.descending) : false,
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.limit !== undefined && (obj.limit = message.limit);
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(
    object: I
  ): Pagination {
    const message = createBasePagination();
    message.skip = object.skip ?? "0";
    message.limit = object.limit ?? "0";
    message.descending = object.descending ?? false;
    return message;
  },
};

function createBaseOrdersSubscribeResponse(): OrdersSubscribeResponse {
  return { orders: [] };
}

export const OrdersSubscribeResponse = {
  encode(
    message: OrdersSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrdersSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrdersSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrdersSubscribeResponse {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrdersSubscribeResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrdersSubscribeResponse>, I>>(
    object: I
  ): OrdersSubscribeResponse {
    const message = createBaseOrdersSubscribeResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradesSubscribeResponse(): TradesSubscribeResponse {
  return { trades: [] };
}

export const TradesSubscribeResponse = {
  encode(
    message: TradesSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradesSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesSubscribeResponse {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradesSubscribeResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradesSubscribeResponse>, I>>(
    object: I
  ): TradesSubscribeResponse {
    const message = createBaseTradesSubscribeResponse();
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTransferResponsesSubscribeRequest(): TransferResponsesSubscribeRequest {
  return {};
}

export const TransferResponsesSubscribeRequest = {
  encode(
    _: TransferResponsesSubscribeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransferResponsesSubscribeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResponsesSubscribeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): TransferResponsesSubscribeRequest {
    return {};
  },

  toJSON(_: TransferResponsesSubscribeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TransferResponsesSubscribeRequest>, I>
  >(_: I): TransferResponsesSubscribeRequest {
    const message = createBaseTransferResponsesSubscribeRequest();
    return message;
  },
};

function createBaseTransferResponsesSubscribeResponse(): TransferResponsesSubscribeResponse {
  return { response: undefined };
}

export const TransferResponsesSubscribeResponse = {
  encode(
    message: TransferResponsesSubscribeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response !== undefined) {
      TransferResponse.encode(
        message.response,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TransferResponsesSubscribeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResponsesSubscribeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = TransferResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferResponsesSubscribeResponse {
    return {
      response: isSet(object.response)
        ? TransferResponse.fromJSON(object.response)
        : undefined,
    };
  },

  toJSON(message: TransferResponsesSubscribeResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response
        ? TransferResponse.toJSON(message.response)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<TransferResponsesSubscribeResponse>, I>
  >(object: I): TransferResponsesSubscribeResponse {
    const message = createBaseTransferResponsesSubscribeResponse();
    message.response =
      object.response !== undefined && object.response !== null
        ? TransferResponse.fromPartial(object.response)
        : undefined;
    return message;
  },
};

function createBasePartyAccountsRequest(): PartyAccountsRequest {
  return { partyId: "", marketId: "", type: 0, asset: "" };
}

export const PartyAccountsRequest = {
  encode(
    message: PartyAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PartyAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyAccountsRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: PartyAccountsRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyAccountsRequest>, I>>(
    object: I
  ): PartyAccountsRequest {
    const message = createBasePartyAccountsRequest();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    message.type = object.type ?? 0;
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBasePartyAccountsResponse(): PartyAccountsResponse {
  return { accounts: [] };
}

export const PartyAccountsResponse = {
  encode(
    message: PartyAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PartyAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyAccountsResponse();
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

  fromJSON(object: any): PartyAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PartyAccountsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<PartyAccountsResponse>, I>>(
    object: I
  ): PartyAccountsResponse {
    const message = createBasePartyAccountsResponse();
    message.accounts =
      object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMarketAccountsRequest(): MarketAccountsRequest {
  return { marketId: "", asset: "" };
}

export const MarketAccountsRequest = {
  encode(
    message: MarketAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketAccountsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: MarketAccountsRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketAccountsRequest>, I>>(
    object: I
  ): MarketAccountsRequest {
    const message = createBaseMarketAccountsRequest();
    message.marketId = object.marketId ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseMarketAccountsResponse(): MarketAccountsResponse {
  return { accounts: [] };
}

export const MarketAccountsResponse = {
  encode(
    message: MarketAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MarketAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketAccountsResponse();
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

  fromJSON(object: any): MarketAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MarketAccountsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MarketAccountsResponse>, I>>(
    object: I
  ): MarketAccountsResponse {
    const message = createBaseMarketAccountsResponse();
    message.accounts =
      object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeeInfrastructureAccountsRequest(): FeeInfrastructureAccountsRequest {
  return { asset: "" };
}

export const FeeInfrastructureAccountsRequest = {
  encode(
    message: FeeInfrastructureAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeeInfrastructureAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfrastructureAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeInfrastructureAccountsRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: FeeInfrastructureAccountsRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<FeeInfrastructureAccountsRequest>, I>
  >(object: I): FeeInfrastructureAccountsRequest {
    const message = createBaseFeeInfrastructureAccountsRequest();
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseFeeInfrastructureAccountsResponse(): FeeInfrastructureAccountsResponse {
  return { accounts: [] };
}

export const FeeInfrastructureAccountsResponse = {
  encode(
    message: FeeInfrastructureAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FeeInfrastructureAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfrastructureAccountsResponse();
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

  fromJSON(object: any): FeeInfrastructureAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FeeInfrastructureAccountsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<FeeInfrastructureAccountsResponse>, I>
  >(object: I): FeeInfrastructureAccountsResponse {
    const message = createBaseFeeInfrastructureAccountsResponse();
    message.accounts =
      object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGlobalRewardPoolAccountsRequest(): GlobalRewardPoolAccountsRequest {
  return { asset: "" };
}

export const GlobalRewardPoolAccountsRequest = {
  encode(
    message: GlobalRewardPoolAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GlobalRewardPoolAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalRewardPoolAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalRewardPoolAccountsRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: GlobalRewardPoolAccountsRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GlobalRewardPoolAccountsRequest>, I>>(
    object: I
  ): GlobalRewardPoolAccountsRequest {
    const message = createBaseGlobalRewardPoolAccountsRequest();
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseGlobalRewardPoolAccountsResponse(): GlobalRewardPoolAccountsResponse {
  return { accounts: [] };
}

export const GlobalRewardPoolAccountsResponse = {
  encode(
    message: GlobalRewardPoolAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GlobalRewardPoolAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalRewardPoolAccountsResponse();
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

  fromJSON(object: any): GlobalRewardPoolAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GlobalRewardPoolAccountsResponse): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<GlobalRewardPoolAccountsResponse>, I>
  >(object: I): GlobalRewardPoolAccountsResponse {
    const message = createBaseGlobalRewardPoolAccountsResponse();
    message.accounts =
      object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrderByIDRequest(): OrderByIDRequest {
  return { orderId: "", version: "0" };
}

export const OrderByIDRequest = {
  encode(
    message: OrderByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.version !== "0") {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.version = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderByIDRequest {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      version: isSet(object.version) ? String(object.version) : "0",
    };
  },

  toJSON(message: OrderByIDRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderByIDRequest>, I>>(
    object: I
  ): OrderByIDRequest {
    const message = createBaseOrderByIDRequest();
    message.orderId = object.orderId ?? "";
    message.version = object.version ?? "0";
    return message;
  },
};

function createBaseOrderByIDResponse(): OrderByIDResponse {
  return { order: undefined };
}

export const OrderByIDResponse = {
  encode(
    message: OrderByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderByIDResponse {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: OrderByIDResponse): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderByIDResponse>, I>>(
    object: I
  ): OrderByIDResponse {
    const message = createBaseOrderByIDResponse();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseOrderVersionsByIDRequest(): OrderVersionsByIDRequest {
  return { orderId: "", pagination: undefined };
}

export const OrderVersionsByIDRequest = {
  encode(
    message: OrderVersionsByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderVersionsByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderVersionsByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderVersionsByIDRequest {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: OrderVersionsByIDRequest): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderVersionsByIDRequest>, I>>(
    object: I
  ): OrderVersionsByIDRequest {
    const message = createBaseOrderVersionsByIDRequest();
    message.orderId = object.orderId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseOrderVersionsByIDResponse(): OrderVersionsByIDResponse {
  return { orders: [] };
}

export const OrderVersionsByIDResponse = {
  encode(
    message: OrderVersionsByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OrderVersionsByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderVersionsByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderVersionsByIDResponse {
    return {
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => Order.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrderVersionsByIDResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderVersionsByIDResponse>, I>>(
    object: I
  ): OrderVersionsByIDResponse {
    const message = createBaseOrderVersionsByIDResponse();
    message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEstimateFeeRequest(): EstimateFeeRequest {
  return { order: undefined };
}

export const EstimateFeeRequest = {
  encode(
    message: EstimateFeeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateFeeRequest {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: EstimateFeeRequest): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateFeeRequest>, I>>(
    object: I
  ): EstimateFeeRequest {
    const message = createBaseEstimateFeeRequest();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseEstimateFeeResponse(): EstimateFeeResponse {
  return { fee: undefined };
}

export const EstimateFeeResponse = {
  encode(
    message: EstimateFeeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimateFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateFeeResponse {
    return {
      fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
    };
  },

  toJSON(message: EstimateFeeResponse): unknown {
    const obj: any = {};
    message.fee !== undefined &&
      (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateFeeResponse>, I>>(
    object: I
  ): EstimateFeeResponse {
    const message = createBaseEstimateFeeResponse();
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? Fee.fromPartial(object.fee)
        : undefined;
    return message;
  },
};

function createBaseEstimateMarginRequest(): EstimateMarginRequest {
  return { order: undefined };
}

export const EstimateMarginRequest = {
  encode(
    message: EstimateMarginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateMarginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateMarginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMarginRequest {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: EstimateMarginRequest): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateMarginRequest>, I>>(
    object: I
  ): EstimateMarginRequest {
    const message = createBaseEstimateMarginRequest();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseEstimateMarginResponse(): EstimateMarginResponse {
  return { marginLevels: undefined };
}

export const EstimateMarginResponse = {
  encode(
    message: EstimateMarginResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marginLevels !== undefined) {
      MarginLevels.encode(
        message.marginLevels,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EstimateMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.marginLevels = MarginLevels.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMarginResponse {
    return {
      marginLevels: isSet(object.marginLevels)
        ? MarginLevels.fromJSON(object.marginLevels)
        : undefined,
    };
  },

  toJSON(message: EstimateMarginResponse): unknown {
    const obj: any = {};
    message.marginLevels !== undefined &&
      (obj.marginLevels = message.marginLevels
        ? MarginLevels.toJSON(message.marginLevels)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateMarginResponse>, I>>(
    object: I
  ): EstimateMarginResponse {
    const message = createBaseEstimateMarginResponse();
    message.marginLevels =
      object.marginLevels !== undefined && object.marginLevels !== null
        ? MarginLevels.fromPartial(object.marginLevels)
        : undefined;
    return message;
  },
};

function createBaseObserveEventBusRequest(): ObserveEventBusRequest {
  return { type: [], marketId: "", partyId: "", batchSize: "0" };
}

export const ObserveEventBusRequest = {
  encode(
    message: ObserveEventBusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.type) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(26).string(message.partyId);
    }
    if (message.batchSize !== "0") {
      writer.uint32(32).int64(message.batchSize);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveEventBusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveEventBusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.type.push(reader.int32() as any);
            }
          } else {
            message.type.push(reader.int32() as any);
          }
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.partyId = reader.string();
          break;
        case 4:
          message.batchSize = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveEventBusRequest {
    return {
      type: Array.isArray(object?.type)
        ? object.type.map((e: any) => busEventTypeFromJSON(e))
        : [],
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      batchSize: isSet(object.batchSize) ? String(object.batchSize) : "0",
    };
  },

  toJSON(message: ObserveEventBusRequest): unknown {
    const obj: any = {};
    if (message.type) {
      obj.type = message.type.map((e) => busEventTypeToJSON(e));
    } else {
      obj.type = [];
    }
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.batchSize !== undefined && (obj.batchSize = message.batchSize);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveEventBusRequest>, I>>(
    object: I
  ): ObserveEventBusRequest {
    const message = createBaseObserveEventBusRequest();
    message.type = object.type?.map((e) => e) || [];
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.batchSize = object.batchSize ?? "0";
    return message;
  },
};

function createBaseObserveEventBusResponse(): ObserveEventBusResponse {
  return { events: [] };
}

export const ObserveEventBusResponse = {
  encode(
    message: ObserveEventBusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.events) {
      BusEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveEventBusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveEventBusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(BusEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveEventBusResponse {
    return {
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => BusEvent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObserveEventBusResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? BusEvent.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveEventBusResponse>, I>>(
    object: I
  ): ObserveEventBusResponse {
    const message = createBaseObserveEventBusResponse();
    message.events = object.events?.map((e) => BusEvent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWithdrawalsRequest(): WithdrawalsRequest {
  return { partyId: "" };
}

export const WithdrawalsRequest = {
  encode(
    message: WithdrawalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawalsRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: WithdrawalsRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawalsRequest>, I>>(
    object: I
  ): WithdrawalsRequest {
    const message = createBaseWithdrawalsRequest();
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseWithdrawalsResponse(): WithdrawalsResponse {
  return { withdrawals: [] };
}

export const WithdrawalsResponse = {
  encode(
    message: WithdrawalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.withdrawals) {
      Withdrawal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalsResponse();
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

  fromJSON(object: any): WithdrawalsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals)
        ? object.withdrawals.map((e: any) => Withdrawal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WithdrawalsResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<WithdrawalsResponse>, I>>(
    object: I
  ): WithdrawalsResponse {
    const message = createBaseWithdrawalsResponse();
    message.withdrawals =
      object.withdrawals?.map((e) => Withdrawal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWithdrawalRequest(): WithdrawalRequest {
  return { id: "" };
}

export const WithdrawalRequest = {
  encode(
    message: WithdrawalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawalRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: WithdrawalRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawalRequest>, I>>(
    object: I
  ): WithdrawalRequest {
    const message = createBaseWithdrawalRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseWithdrawalResponse(): WithdrawalResponse {
  return { withdrawal: undefined };
}

export const WithdrawalResponse = {
  encode(
    message: WithdrawalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawal !== undefined) {
      Withdrawal.encode(message.withdrawal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawal = Withdrawal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawalResponse {
    return {
      withdrawal: isSet(object.withdrawal)
        ? Withdrawal.fromJSON(object.withdrawal)
        : undefined,
    };
  },

  toJSON(message: WithdrawalResponse): unknown {
    const obj: any = {};
    message.withdrawal !== undefined &&
      (obj.withdrawal = message.withdrawal
        ? Withdrawal.toJSON(message.withdrawal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawalResponse>, I>>(
    object: I
  ): WithdrawalResponse {
    const message = createBaseWithdrawalResponse();
    message.withdrawal =
      object.withdrawal !== undefined && object.withdrawal !== null
        ? Withdrawal.fromPartial(object.withdrawal)
        : undefined;
    return message;
  },
};

function createBaseERC20WithdrawalApprovalRequest(): ERC20WithdrawalApprovalRequest {
  return { withdrawalId: "" };
}

export const ERC20WithdrawalApprovalRequest = {
  encode(
    message: ERC20WithdrawalApprovalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.withdrawalId !== "") {
      writer.uint32(10).string(message.withdrawalId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20WithdrawalApprovalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20WithdrawalApprovalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawalId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20WithdrawalApprovalRequest {
    return {
      withdrawalId: isSet(object.withdrawalId)
        ? String(object.withdrawalId)
        : "",
    };
  },

  toJSON(message: ERC20WithdrawalApprovalRequest): unknown {
    const obj: any = {};
    message.withdrawalId !== undefined &&
      (obj.withdrawalId = message.withdrawalId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20WithdrawalApprovalRequest>, I>>(
    object: I
  ): ERC20WithdrawalApprovalRequest {
    const message = createBaseERC20WithdrawalApprovalRequest();
    message.withdrawalId = object.withdrawalId ?? "";
    return message;
  },
};

function createBaseERC20WithdrawalApprovalResponse(): ERC20WithdrawalApprovalResponse {
  return {
    assetSource: "",
    amount: "",
    expiry: "0",
    nonce: "",
    signatures: "",
    targetAddress: "",
  };
}

export const ERC20WithdrawalApprovalResponse = {
  encode(
    message: ERC20WithdrawalApprovalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetSource !== "") {
      writer.uint32(10).string(message.assetSource);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.expiry !== "0") {
      writer.uint32(24).int64(message.expiry);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    if (message.signatures !== "") {
      writer.uint32(42).string(message.signatures);
    }
    if (message.targetAddress !== "") {
      writer.uint32(50).string(message.targetAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20WithdrawalApprovalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20WithdrawalApprovalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetSource = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.expiry = longToString(reader.int64() as Long);
          break;
        case 4:
          message.nonce = reader.string();
          break;
        case 5:
          message.signatures = reader.string();
          break;
        case 6:
          message.targetAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20WithdrawalApprovalResponse {
    return {
      assetSource: isSet(object.assetSource) ? String(object.assetSource) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      expiry: isSet(object.expiry) ? String(object.expiry) : "0",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      signatures: isSet(object.signatures) ? String(object.signatures) : "",
      targetAddress: isSet(object.targetAddress)
        ? String(object.targetAddress)
        : "",
    };
  },

  toJSON(message: ERC20WithdrawalApprovalResponse): unknown {
    const obj: any = {};
    message.assetSource !== undefined &&
      (obj.assetSource = message.assetSource);
    message.amount !== undefined && (obj.amount = message.amount);
    message.expiry !== undefined && (obj.expiry = message.expiry);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.signatures !== undefined && (obj.signatures = message.signatures);
    message.targetAddress !== undefined &&
      (obj.targetAddress = message.targetAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20WithdrawalApprovalResponse>, I>>(
    object: I
  ): ERC20WithdrawalApprovalResponse {
    const message = createBaseERC20WithdrawalApprovalResponse();
    message.assetSource = object.assetSource ?? "";
    message.amount = object.amount ?? "";
    message.expiry = object.expiry ?? "0";
    message.nonce = object.nonce ?? "";
    message.signatures = object.signatures ?? "";
    message.targetAddress = object.targetAddress ?? "";
    return message;
  },
};

function createBaseDepositsRequest(): DepositsRequest {
  return { partyId: "" };
}

export const DepositsRequest = {
  encode(
    message: DepositsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositsRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
    };
  },

  toJSON(message: DepositsRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositsRequest>, I>>(
    object: I
  ): DepositsRequest {
    const message = createBaseDepositsRequest();
    message.partyId = object.partyId ?? "";
    return message;
  },
};

function createBaseDepositsResponse(): DepositsResponse {
  return { deposits: [] };
}

export const DepositsResponse = {
  encode(
    message: DepositsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits)
        ? object.deposits.map((e: any) => Deposit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DepositsResponse): unknown {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) =>
        e ? Deposit.toJSON(e) : undefined
      );
    } else {
      obj.deposits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositsResponse>, I>>(
    object: I
  ): DepositsResponse {
    const message = createBaseDepositsResponse();
    message.deposits =
      object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDepositRequest(): DepositRequest {
  return { id: "" };
}

export const DepositRequest = {
  encode(
    message: DepositRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: DepositRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositRequest>, I>>(
    object: I
  ): DepositRequest {
    const message = createBaseDepositRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDepositResponse(): DepositResponse {
  return { deposit: undefined };
}

export const DepositResponse = {
  encode(
    message: DepositResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DepositResponse {
    return {
      deposit: isSet(object.deposit)
        ? Deposit.fromJSON(object.deposit)
        : undefined,
    };
  },

  toJSON(message: DepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Deposit.toJSON(message.deposit)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositResponse>, I>>(
    object: I
  ): DepositResponse {
    const message = createBaseDepositResponse();
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? Deposit.fromPartial(object.deposit)
        : undefined;
    return message;
  },
};

function createBaseNetworkParametersRequest(): NetworkParametersRequest {
  return {};
}

export const NetworkParametersRequest = {
  encode(
    _: NetworkParametersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NetworkParametersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkParametersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NetworkParametersRequest {
    return {};
  },

  toJSON(_: NetworkParametersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkParametersRequest>, I>>(
    _: I
  ): NetworkParametersRequest {
    const message = createBaseNetworkParametersRequest();
    return message;
  },
};

function createBaseNetworkParametersResponse(): NetworkParametersResponse {
  return { networkParameters: [] };
}

export const NetworkParametersResponse = {
  encode(
    message: NetworkParametersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.networkParameters) {
      NetworkParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NetworkParametersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkParametersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkParameters.push(
            NetworkParameter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkParametersResponse {
    return {
      networkParameters: Array.isArray(object?.networkParameters)
        ? object.networkParameters.map((e: any) => NetworkParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NetworkParametersResponse): unknown {
    const obj: any = {};
    if (message.networkParameters) {
      obj.networkParameters = message.networkParameters.map((e) =>
        e ? NetworkParameter.toJSON(e) : undefined
      );
    } else {
      obj.networkParameters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkParametersResponse>, I>>(
    object: I
  ): NetworkParametersResponse {
    const message = createBaseNetworkParametersResponse();
    message.networkParameters =
      object.networkParameters?.map((e) => NetworkParameter.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseLiquidityProvisionsRequest(): LiquidityProvisionsRequest {
  return { market: "", party: "" };
}

export const LiquidityProvisionsRequest = {
  encode(
    message: LiquidityProvisionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.party !== "") {
      writer.uint32(18).string(message.party);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProvisionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvisionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.party = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvisionsRequest {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      party: isSet(object.party) ? String(object.party) : "",
    };
  },

  toJSON(message: LiquidityProvisionsRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.party !== undefined && (obj.party = message.party);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProvisionsRequest>, I>>(
    object: I
  ): LiquidityProvisionsRequest {
    const message = createBaseLiquidityProvisionsRequest();
    message.market = object.market ?? "";
    message.party = object.party ?? "";
    return message;
  },
};

function createBaseLiquidityProvisionsResponse(): LiquidityProvisionsResponse {
  return { liquidityProvisions: [] };
}

export const LiquidityProvisionsResponse = {
  encode(
    message: LiquidityProvisionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidityProvisions) {
      LiquidityProvision.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProvisionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvisionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityProvisions.push(
            LiquidityProvision.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvisionsResponse {
    return {
      liquidityProvisions: Array.isArray(object?.liquidityProvisions)
        ? object.liquidityProvisions.map((e: any) =>
            LiquidityProvision.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LiquidityProvisionsResponse): unknown {
    const obj: any = {};
    if (message.liquidityProvisions) {
      obj.liquidityProvisions = message.liquidityProvisions.map((e) =>
        e ? LiquidityProvision.toJSON(e) : undefined
      );
    } else {
      obj.liquidityProvisions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProvisionsResponse>, I>>(
    object: I
  ): LiquidityProvisionsResponse {
    const message = createBaseLiquidityProvisionsResponse();
    message.liquidityProvisions =
      object.liquidityProvisions?.map((e) =>
        LiquidityProvision.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseOracleSpecRequest(): OracleSpecRequest {
  return { id: "" };
}

export const OracleSpecRequest = {
  encode(
    message: OracleSpecRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSpecRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSpecRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: OracleSpecRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpecRequest>, I>>(
    object: I
  ): OracleSpecRequest {
    const message = createBaseOracleSpecRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseOracleSpecResponse(): OracleSpecResponse {
  return { oracleSpec: undefined };
}

export const OracleSpecResponse = {
  encode(
    message: OracleSpecResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oracleSpec !== undefined) {
      OracleSpec.encode(message.oracleSpec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSpecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleSpec = OracleSpec.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSpecResponse {
    return {
      oracleSpec: isSet(object.oracleSpec)
        ? OracleSpec.fromJSON(object.oracleSpec)
        : undefined,
    };
  },

  toJSON(message: OracleSpecResponse): unknown {
    const obj: any = {};
    message.oracleSpec !== undefined &&
      (obj.oracleSpec = message.oracleSpec
        ? OracleSpec.toJSON(message.oracleSpec)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpecResponse>, I>>(
    object: I
  ): OracleSpecResponse {
    const message = createBaseOracleSpecResponse();
    message.oracleSpec =
      object.oracleSpec !== undefined && object.oracleSpec !== null
        ? OracleSpec.fromPartial(object.oracleSpec)
        : undefined;
    return message;
  },
};

function createBaseOracleSpecsRequest(): OracleSpecsRequest {
  return {};
}

export const OracleSpecsRequest = {
  encode(
    _: OracleSpecsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSpecsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpecsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): OracleSpecsRequest {
    return {};
  },

  toJSON(_: OracleSpecsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpecsRequest>, I>>(
    _: I
  ): OracleSpecsRequest {
    const message = createBaseOracleSpecsRequest();
    return message;
  },
};

function createBaseOracleSpecsResponse(): OracleSpecsResponse {
  return { oracleSpecs: [] };
}

export const OracleSpecsResponse = {
  encode(
    message: OracleSpecsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracleSpecs) {
      OracleSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSpecsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpecsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleSpecs.push(OracleSpec.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSpecsResponse {
    return {
      oracleSpecs: Array.isArray(object?.oracleSpecs)
        ? object.oracleSpecs.map((e: any) => OracleSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OracleSpecsResponse): unknown {
    const obj: any = {};
    if (message.oracleSpecs) {
      obj.oracleSpecs = message.oracleSpecs.map((e) =>
        e ? OracleSpec.toJSON(e) : undefined
      );
    } else {
      obj.oracleSpecs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpecsResponse>, I>>(
    object: I
  ): OracleSpecsResponse {
    const message = createBaseOracleSpecsResponse();
    message.oracleSpecs =
      object.oracleSpecs?.map((e) => OracleSpec.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracleDataBySpecRequest(): OracleDataBySpecRequest {
  return { id: "" };
}

export const OracleDataBySpecRequest = {
  encode(
    message: OracleDataBySpecRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OracleDataBySpecRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleDataBySpecRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleDataBySpecRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: OracleDataBySpecRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleDataBySpecRequest>, I>>(
    object: I
  ): OracleDataBySpecRequest {
    const message = createBaseOracleDataBySpecRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseOracleDataBySpecResponse(): OracleDataBySpecResponse {
  return { oracleData: [] };
}

export const OracleDataBySpecResponse = {
  encode(
    message: OracleDataBySpecResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.oracleData) {
      OracleData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OracleDataBySpecResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleDataBySpecResponse();
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

  fromJSON(object: any): OracleDataBySpecResponse {
    return {
      oracleData: Array.isArray(object?.oracleData)
        ? object.oracleData.map((e: any) => OracleData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OracleDataBySpecResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<OracleDataBySpecResponse>, I>>(
    object: I
  ): OracleDataBySpecResponse {
    const message = createBaseOracleDataBySpecResponse();
    message.oracleData =
      object.oracleData?.map((e) => OracleData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObserveRewardsRequest(): ObserveRewardsRequest {
  return { assetId: "", party: "" };
}

export const ObserveRewardsRequest = {
  encode(
    message: ObserveRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.party !== "") {
      writer.uint32(18).string(message.party);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.party = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveRewardsRequest {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      party: isSet(object.party) ? String(object.party) : "",
    };
  },

  toJSON(message: ObserveRewardsRequest): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.party !== undefined && (obj.party = message.party);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveRewardsRequest>, I>>(
    object: I
  ): ObserveRewardsRequest {
    const message = createBaseObserveRewardsRequest();
    message.assetId = object.assetId ?? "";
    message.party = object.party ?? "";
    return message;
  },
};

function createBaseObserveRewardsResponse(): ObserveRewardsResponse {
  return { reward: undefined };
}

export const ObserveRewardsResponse = {
  encode(
    message: ObserveRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reward !== undefined) {
      Reward.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ObserveRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserveRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = Reward.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserveRewardsResponse {
    return {
      reward: isSet(object.reward) ? Reward.fromJSON(object.reward) : undefined,
    };
  },

  toJSON(message: ObserveRewardsResponse): unknown {
    const obj: any = {};
    message.reward !== undefined &&
      (obj.reward = message.reward ? Reward.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserveRewardsResponse>, I>>(
    object: I
  ): ObserveRewardsResponse {
    const message = createBaseObserveRewardsResponse();
    message.reward =
      object.reward !== undefined && object.reward !== null
        ? Reward.fromPartial(object.reward)
        : undefined;
    return message;
  },
};

function createBaseGetRewardSummariesRequest(): GetRewardSummariesRequest {
  return { partyId: "", assetId: "" };
}

export const GetRewardSummariesRequest = {
  encode(
    message: GetRewardSummariesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRewardSummariesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRewardSummariesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRewardSummariesRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
    };
  },

  toJSON(message: GetRewardSummariesRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRewardSummariesRequest>, I>>(
    object: I
  ): GetRewardSummariesRequest {
    const message = createBaseGetRewardSummariesRequest();
    message.partyId = object.partyId ?? "";
    message.assetId = object.assetId ?? "";
    return message;
  },
};

function createBaseGetRewardSummariesResponse(): GetRewardSummariesResponse {
  return { summaries: [] };
}

export const GetRewardSummariesResponse = {
  encode(
    message: GetRewardSummariesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.summaries) {
      RewardSummary.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRewardSummariesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRewardSummariesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summaries.push(RewardSummary.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRewardSummariesResponse {
    return {
      summaries: Array.isArray(object?.summaries)
        ? object.summaries.map((e: any) => RewardSummary.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetRewardSummariesResponse): unknown {
    const obj: any = {};
    if (message.summaries) {
      obj.summaries = message.summaries.map((e) =>
        e ? RewardSummary.toJSON(e) : undefined
      );
    } else {
      obj.summaries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRewardSummariesResponse>, I>>(
    object: I
  ): GetRewardSummariesResponse {
    const message = createBaseGetRewardSummariesResponse();
    message.summaries =
      object.summaries?.map((e) => RewardSummary.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetRewardsRequest(): GetRewardsRequest {
  return { partyId: "", assetId: "", pagination: undefined };
}

export const GetRewardsRequest = {
  encode(
    message: GetRewardsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.assetId !== "") {
      writer.uint32(18).string(message.assetId);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.assetId = reader.string();
          break;
        case 3:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRewardsRequest {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: GetRewardsRequest): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRewardsRequest>, I>>(
    object: I
  ): GetRewardsRequest {
    const message = createBaseGetRewardsRequest();
    message.partyId = object.partyId ?? "";
    message.assetId = object.assetId ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseGetRewardsResponse(): GetRewardsResponse {
  return { rewards: [] };
}

export const GetRewardsResponse = {
  encode(
    message: GetRewardsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      Reward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(Reward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRewardsResponse {
    return {
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => Reward.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Reward.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRewardsResponse>, I>>(
    object: I
  ): GetRewardsResponse {
    const message = createBaseGetRewardsResponse();
    message.rewards = object.rewards?.map((e) => Reward.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCheckpoint(): Checkpoint {
  return { hash: "", blockHash: "", atBlock: "0" };
}

export const Checkpoint = {
  encode(
    message: Checkpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.blockHash !== "") {
      writer.uint32(18).string(message.blockHash);
    }
    if (message.atBlock !== "0") {
      writer.uint32(24).uint64(message.atBlock);
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
          message.hash = reader.string();
          break;
        case 2:
          message.blockHash = reader.string();
          break;
        case 3:
          message.atBlock = longToString(reader.uint64() as Long);
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
      hash: isSet(object.hash) ? String(object.hash) : "",
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      atBlock: isSet(object.atBlock) ? String(object.atBlock) : "0",
    };
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.atBlock !== undefined && (obj.atBlock = message.atBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Checkpoint>, I>>(
    object: I
  ): Checkpoint {
    const message = createBaseCheckpoint();
    message.hash = object.hash ?? "";
    message.blockHash = object.blockHash ?? "";
    message.atBlock = object.atBlock ?? "0";
    return message;
  },
};

function createBaseCheckpointsRequest(): CheckpointsRequest {
  return {};
}

export const CheckpointsRequest = {
  encode(
    _: CheckpointsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckpointsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpointsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CheckpointsRequest {
    return {};
  },

  toJSON(_: CheckpointsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckpointsRequest>, I>>(
    _: I
  ): CheckpointsRequest {
    const message = createBaseCheckpointsRequest();
    return message;
  },
};

function createBaseCheckpointsResponse(): CheckpointsResponse {
  return { checkpoints: [] };
}

export const CheckpointsResponse = {
  encode(
    message: CheckpointsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.checkpoints) {
      Checkpoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckpointsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpointsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkpoints.push(Checkpoint.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckpointsResponse {
    return {
      checkpoints: Array.isArray(object?.checkpoints)
        ? object.checkpoints.map((e: any) => Checkpoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckpointsResponse): unknown {
    const obj: any = {};
    if (message.checkpoints) {
      obj.checkpoints = message.checkpoints.map((e) =>
        e ? Checkpoint.toJSON(e) : undefined
      );
    } else {
      obj.checkpoints = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckpointsResponse>, I>>(
    object: I
  ): CheckpointsResponse {
    const message = createBaseCheckpointsResponse();
    message.checkpoints =
      object.checkpoints?.map((e) => Checkpoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetRiskFactorsRequest(): GetRiskFactorsRequest {
  return { marketId: "" };
}

export const GetRiskFactorsRequest = {
  encode(
    message: GetRiskFactorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRiskFactorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRiskFactorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRiskFactorsRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: GetRiskFactorsRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRiskFactorsRequest>, I>>(
    object: I
  ): GetRiskFactorsRequest {
    const message = createBaseGetRiskFactorsRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseGetRiskFactorsResponse(): GetRiskFactorsResponse {
  return { riskFactor: undefined };
}

export const GetRiskFactorsResponse = {
  encode(
    message: GetRiskFactorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.riskFactor !== undefined) {
      RiskFactor.encode(message.riskFactor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetRiskFactorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRiskFactorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskFactor = RiskFactor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRiskFactorsResponse {
    return {
      riskFactor: isSet(object.riskFactor)
        ? RiskFactor.fromJSON(object.riskFactor)
        : undefined,
    };
  },

  toJSON(message: GetRiskFactorsResponse): unknown {
    const obj: any = {};
    message.riskFactor !== undefined &&
      (obj.riskFactor = message.riskFactor
        ? RiskFactor.toJSON(message.riskFactor)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRiskFactorsResponse>, I>>(
    object: I
  ): GetRiskFactorsResponse {
    const message = createBaseGetRiskFactorsResponse();
    message.riskFactor =
      object.riskFactor !== undefined && object.riskFactor !== null
        ? RiskFactor.fromPartial(object.riskFactor)
        : undefined;
    return message;
  },
};

export interface TradingDataService {
  /** Get a list of Accounts by Market */
  MarketAccounts(
    request: MarketAccountsRequest
  ): Promise<MarketAccountsResponse>;
  /** Get a list of Accounts by Party */
  PartyAccounts(request: PartyAccountsRequest): Promise<PartyAccountsResponse>;
  /**
   * Get a list of accounts holding infrastructure fees.
   * Can be filtered by asset, there will be 1 infrastructure fee account per
   * asset in the network.
   */
  FeeInfrastructureAccounts(
    request: FeeInfrastructureAccountsRequest
  ): Promise<FeeInfrastructureAccountsResponse>;
  /**
   * Get a list of accounts holding reward pools
   * Can be filtered by asset, there will be 1 reward pool account per
   * asset in the network.
   */
  GlobalRewardPoolAccounts(
    request: GlobalRewardPoolAccountsRequest
  ): Promise<GlobalRewardPoolAccountsResponse>;
  /** Get a list of Candles by Market */
  Candles(request: CandlesRequest): Promise<CandlesResponse>;
  /** Get Market Data by Market ID */
  MarketDataByID(
    request: MarketDataByIDRequest
  ): Promise<MarketDataByIDResponse>;
  /** Get a list of Market Data */
  MarketsData(request: MarketsDataRequest): Promise<MarketsDataResponse>;
  /** Get a Market by ID */
  MarketByID(request: MarketByIDRequest): Promise<MarketByIDResponse>;
  /** Get Market Depth */
  MarketDepth(request: MarketDepthRequest): Promise<MarketDepthResponse>;
  /** Get a list of Markets */
  Markets(request: MarketsRequest): Promise<MarketsResponse>;
  /** Get an Order by Market and Order ID */
  OrderByMarketAndID(
    request: OrderByMarketAndIDRequest
  ): Promise<OrderByMarketAndIDResponse>;
  /** Get an Order by Pending Order reference (UUID) */
  OrderByReference(
    request: OrderByReferenceRequest
  ): Promise<OrderByReferenceResponse>;
  /** Get a list of Orders by Market */
  OrdersByMarket(
    request: OrdersByMarketRequest
  ): Promise<OrdersByMarketResponse>;
  /** Get a list of Orders by Party */
  OrdersByParty(request: OrdersByPartyRequest): Promise<OrdersByPartyResponse>;
  /** Get a specific order by order ID */
  OrderByID(request: OrderByIDRequest): Promise<OrderByIDResponse>;
  /** Get all versions of the order by its orderID */
  OrderVersionsByID(
    request: OrderVersionsByIDRequest
  ): Promise<OrderVersionsByIDResponse>;
  /** Get Margin Levels by Party ID */
  MarginLevels(request: MarginLevelsRequest): Promise<MarginLevelsResponse>;
  /** Get a list of Parties */
  Parties(request: PartiesRequest): Promise<PartiesResponse>;
  /** Get a Party by ID */
  PartyByID(request: PartyByIDRequest): Promise<PartyByIDResponse>;
  /** Get a list of Positions by Party */
  PositionsByParty(
    request: PositionsByPartyRequest
  ): Promise<PositionsByPartyResponse>;
  /** Get latest Trade */
  LastTrade(request: LastTradeRequest): Promise<LastTradeResponse>;
  /** Get a list of Trades by Market */
  TradesByMarket(
    request: TradesByMarketRequest
  ): Promise<TradesByMarketResponse>;
  /** Get a list of Trades by Order */
  TradesByOrder(request: TradesByOrderRequest): Promise<TradesByOrderResponse>;
  /** Get a list of Trades by Party */
  TradesByParty(request: TradesByPartyRequest): Promise<TradesByPartyResponse>;
  /** Get governance data (proposals and votes) for all proposals */
  GetProposals(request: GetProposalsRequest): Promise<GetProposalsResponse>;
  /** Get governance data (proposals and votes) for proposals by party authoring them */
  GetProposalsByParty(
    request: GetProposalsByPartyRequest
  ): Promise<GetProposalsByPartyResponse>;
  /** Get votes by party casting them */
  GetVotesByParty(
    request: GetVotesByPartyRequest
  ): Promise<GetVotesByPartyResponse>;
  /** Get governance data (proposals and votes) for proposals that aim creating new markets */
  GetNewMarketProposals(
    request: GetNewMarketProposalsRequest
  ): Promise<GetNewMarketProposalsResponse>;
  /** Get governance data (proposals and votes) for proposals that aim updating markets */
  GetUpdateMarketProposals(
    request: GetUpdateMarketProposalsRequest
  ): Promise<GetUpdateMarketProposalsResponse>;
  /** Get governance data (proposals and votes) for proposals that aim updating Vega network parameters */
  GetNetworkParametersProposals(
    request: GetNetworkParametersProposalsRequest
  ): Promise<GetNetworkParametersProposalsResponse>;
  /** Get governance data (proposals and votes) for proposals aiming to create new assets */
  GetNewAssetProposals(
    request: GetNewAssetProposalsRequest
  ): Promise<GetNewAssetProposalsResponse>;
  /** Get governance data (proposals and votes) for proposals aiming to create freeform proposals */
  GetNewFreeformProposals(
    request: GetNewFreeformProposalsRequest
  ): Promise<GetNewFreeformProposalsResponse>;
  /** Get governance data (proposals and votes) for a proposal located by ID */
  GetProposalByID(
    request: GetProposalByIDRequest
  ): Promise<GetProposalByIDResponse>;
  /** Get governance data (proposals and votes) for a proposal located by reference */
  GetProposalByReference(
    request: GetProposalByReferenceRequest
  ): Promise<GetProposalByReferenceResponse>;
  /** Subscribe to a stream of all governance updates */
  ObserveGovernance(
    request: ObserveGovernanceRequest
  ): Observable<ObserveGovernanceResponse>;
  /** Subscribe to a stream of proposal updates */
  ObservePartyProposals(
    request: ObservePartyProposalsRequest
  ): Observable<ObservePartyProposalsResponse>;
  /** Subscribe to a stream of votes cast by a specific party */
  ObservePartyVotes(
    request: ObservePartyVotesRequest
  ): Observable<ObservePartyVotesResponse>;
  /** Subscribe to a stream of proposal votes */
  ObserveProposalVotes(
    request: ObserveProposalVotesRequest
  ): Observable<ObserveProposalVotesResponse>;
  /** Subscribe to a stream of events from the core */
  ObserveEventBus(
    request: Observable<ObserveEventBusRequest>
  ): Observable<ObserveEventBusResponse>;
  /** Get data of current node */
  GetNodeData(request: GetNodeDataRequest): Promise<GetNodeDataResponse>;
  /** List all known network nodes */
  GetNodes(request: GetNodesRequest): Promise<GetNodesResponse>;
  /** Get a specific node by ID */
  GetNodeByID(request: GetNodeByIDRequest): Promise<GetNodeByIDResponse>;
  /** Get all key rotations */
  GetKeyRotations(
    request: GetKeyRotationsRequest
  ): Promise<GetKeyRotationsResponse>;
  /** Get all key rotations by node */
  GetKeyRotationsByNode(
    request: GetKeyRotationsByNodeRequest
  ): Promise<GetKeyRotationsByNodeResponse>;
  /** Get data for a specific epoch, if id omitted it gets the current epoch */
  GetEpoch(request: GetEpochRequest): Promise<GetEpochResponse>;
  /** Get Time */
  GetVegaTime(request: GetVegaTimeRequest): Promise<GetVegaTimeResponse>;
  /** Subscribe to a stream of Accounts */
  AccountsSubscribe(
    request: AccountsSubscribeRequest
  ): Observable<AccountsSubscribeResponse>;
  /** Subscribe to a stream of Candles */
  CandlesSubscribe(
    request: CandlesSubscribeRequest
  ): Observable<CandlesSubscribeResponse>;
  /** Subscribe to a stream of Margin Levels */
  MarginLevelsSubscribe(
    request: MarginLevelsSubscribeRequest
  ): Observable<MarginLevelsSubscribeResponse>;
  /** Subscribe to a stream of Market Depth */
  MarketDepthSubscribe(
    request: MarketDepthSubscribeRequest
  ): Observable<MarketDepthSubscribeResponse>;
  /** Subscribe to a stream of Market Depth Price Level Updates */
  MarketDepthUpdatesSubscribe(
    request: MarketDepthUpdatesSubscribeRequest
  ): Observable<MarketDepthUpdatesSubscribeResponse>;
  /** Subscribe to a stream of Markets Data */
  MarketsDataSubscribe(
    request: MarketsDataSubscribeRequest
  ): Observable<MarketsDataSubscribeResponse>;
  /** Subscribe to a stream of Orders */
  OrdersSubscribe(
    request: OrdersSubscribeRequest
  ): Observable<OrdersSubscribeResponse>;
  /** Subscribe to a stream of Positions */
  PositionsSubscribe(
    request: PositionsSubscribeRequest
  ): Observable<PositionsSubscribeResponse>;
  /** Subscribe to a stream of Trades */
  TradesSubscribe(
    request: TradesSubscribeRequest
  ): Observable<TradesSubscribeResponse>;
  /** Subscribe to a stream of Transfer Responses */
  TransferResponsesSubscribe(
    request: TransferResponsesSubscribeRequest
  ): Observable<TransferResponsesSubscribeResponse>;
  /** Get an aggregate of signatures from all the nodes of the network */
  GetNodeSignaturesAggregate(
    request: GetNodeSignaturesAggregateRequest
  ): Promise<GetNodeSignaturesAggregateResponse>;
  /** Get an asset by its identifier */
  AssetByID(request: AssetByIDRequest): Promise<AssetByIDResponse>;
  /** Get a list of all assets on Vega */
  Assets(request: AssetsRequest): Promise<AssetsResponse>;
  /** Get an estimate for the fee to be paid for a given order */
  EstimateFee(request: EstimateFeeRequest): Promise<EstimateFeeResponse>;
  /** Get an estimate for the margin required for a new order */
  EstimateMargin(
    request: EstimateMarginRequest
  ): Promise<EstimateMarginResponse>;
  /**
   * Get the bundle approval for an ERC20 withdrawal,
   * these data are being used to bundle the call to the smart contract on the ethereum bridge
   */
  ERC20WithdrawalApproval(
    request: ERC20WithdrawalApprovalRequest
  ): Promise<ERC20WithdrawalApprovalResponse>;
  /** Get a withdrawal by its identifier */
  Withdrawal(request: WithdrawalRequest): Promise<WithdrawalResponse>;
  /** Get withdrawals for a party */
  Withdrawals(request: WithdrawalsRequest): Promise<WithdrawalsResponse>;
  /** Get a deposit by its identifier */
  Deposit(request: DepositRequest): Promise<DepositResponse>;
  /** Get deposits for a party */
  Deposits(request: DepositsRequest): Promise<DepositsResponse>;
  /** Get the network parameters */
  NetworkParameters(
    request: NetworkParametersRequest
  ): Promise<NetworkParametersResponse>;
  /** Get the liquidity provision orders */
  LiquidityProvisions(
    request: LiquidityProvisionsRequest
  ): Promise<LiquidityProvisionsResponse>;
  /** Get an oracle spec by ID */
  OracleSpec(request: OracleSpecRequest): Promise<OracleSpecResponse>;
  /** Get the oracle specs */
  OracleSpecs(request: OracleSpecsRequest): Promise<OracleSpecsResponse>;
  /** Get all oracle data */
  OracleDataBySpec(
    request: OracleDataBySpecRequest
  ): Promise<OracleDataBySpecResponse>;
  /** subscribe to rewards */
  ObserveRewards(
    request: ObserveRewardsRequest
  ): Observable<ObserveRewardsResponse>;
  /** Get rewards */
  GetRewards(request: GetRewardsRequest): Promise<GetRewardsResponse>;
  /** Get reward summaries */
  GetRewardSummaries(
    request: GetRewardSummariesRequest
  ): Promise<GetRewardSummariesResponse>;
  Checkpoints(request: CheckpointsRequest): Promise<CheckpointsResponse>;
  /** Get delegation data */
  Delegations(request: DelegationsRequest): Promise<DelegationsResponse>;
  /** subscribe to delegation events */
  ObserveDelegations(
    request: ObserveDelegationsRequest
  ): Observable<ObserveDelegationsResponse>;
  PartyStake(request: PartyStakeRequest): Promise<PartyStakeResponse>;
  Transfers(request: TransfersRequest): Promise<TransfersResponse>;
  /** Get Risk Factor data for a given market */
  GetRiskFactors(
    request: GetRiskFactorsRequest
  ): Promise<GetRiskFactorsResponse>;
}

export class TradingDataServiceClientImpl implements TradingDataService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MarketAccounts = this.MarketAccounts.bind(this);
    this.PartyAccounts = this.PartyAccounts.bind(this);
    this.FeeInfrastructureAccounts = this.FeeInfrastructureAccounts.bind(this);
    this.GlobalRewardPoolAccounts = this.GlobalRewardPoolAccounts.bind(this);
    this.Candles = this.Candles.bind(this);
    this.MarketDataByID = this.MarketDataByID.bind(this);
    this.MarketsData = this.MarketsData.bind(this);
    this.MarketByID = this.MarketByID.bind(this);
    this.MarketDepth = this.MarketDepth.bind(this);
    this.Markets = this.Markets.bind(this);
    this.OrderByMarketAndID = this.OrderByMarketAndID.bind(this);
    this.OrderByReference = this.OrderByReference.bind(this);
    this.OrdersByMarket = this.OrdersByMarket.bind(this);
    this.OrdersByParty = this.OrdersByParty.bind(this);
    this.OrderByID = this.OrderByID.bind(this);
    this.OrderVersionsByID = this.OrderVersionsByID.bind(this);
    this.MarginLevels = this.MarginLevels.bind(this);
    this.Parties = this.Parties.bind(this);
    this.PartyByID = this.PartyByID.bind(this);
    this.PositionsByParty = this.PositionsByParty.bind(this);
    this.LastTrade = this.LastTrade.bind(this);
    this.TradesByMarket = this.TradesByMarket.bind(this);
    this.TradesByOrder = this.TradesByOrder.bind(this);
    this.TradesByParty = this.TradesByParty.bind(this);
    this.GetProposals = this.GetProposals.bind(this);
    this.GetProposalsByParty = this.GetProposalsByParty.bind(this);
    this.GetVotesByParty = this.GetVotesByParty.bind(this);
    this.GetNewMarketProposals = this.GetNewMarketProposals.bind(this);
    this.GetUpdateMarketProposals = this.GetUpdateMarketProposals.bind(this);
    this.GetNetworkParametersProposals =
      this.GetNetworkParametersProposals.bind(this);
    this.GetNewAssetProposals = this.GetNewAssetProposals.bind(this);
    this.GetNewFreeformProposals = this.GetNewFreeformProposals.bind(this);
    this.GetProposalByID = this.GetProposalByID.bind(this);
    this.GetProposalByReference = this.GetProposalByReference.bind(this);
    this.ObserveGovernance = this.ObserveGovernance.bind(this);
    this.ObservePartyProposals = this.ObservePartyProposals.bind(this);
    this.ObservePartyVotes = this.ObservePartyVotes.bind(this);
    this.ObserveProposalVotes = this.ObserveProposalVotes.bind(this);
    this.ObserveEventBus = this.ObserveEventBus.bind(this);
    this.GetNodeData = this.GetNodeData.bind(this);
    this.GetNodes = this.GetNodes.bind(this);
    this.GetNodeByID = this.GetNodeByID.bind(this);
    this.GetKeyRotations = this.GetKeyRotations.bind(this);
    this.GetKeyRotationsByNode = this.GetKeyRotationsByNode.bind(this);
    this.GetEpoch = this.GetEpoch.bind(this);
    this.GetVegaTime = this.GetVegaTime.bind(this);
    this.AccountsSubscribe = this.AccountsSubscribe.bind(this);
    this.CandlesSubscribe = this.CandlesSubscribe.bind(this);
    this.MarginLevelsSubscribe = this.MarginLevelsSubscribe.bind(this);
    this.MarketDepthSubscribe = this.MarketDepthSubscribe.bind(this);
    this.MarketDepthUpdatesSubscribe =
      this.MarketDepthUpdatesSubscribe.bind(this);
    this.MarketsDataSubscribe = this.MarketsDataSubscribe.bind(this);
    this.OrdersSubscribe = this.OrdersSubscribe.bind(this);
    this.PositionsSubscribe = this.PositionsSubscribe.bind(this);
    this.TradesSubscribe = this.TradesSubscribe.bind(this);
    this.TransferResponsesSubscribe =
      this.TransferResponsesSubscribe.bind(this);
    this.GetNodeSignaturesAggregate =
      this.GetNodeSignaturesAggregate.bind(this);
    this.AssetByID = this.AssetByID.bind(this);
    this.Assets = this.Assets.bind(this);
    this.EstimateFee = this.EstimateFee.bind(this);
    this.EstimateMargin = this.EstimateMargin.bind(this);
    this.ERC20WithdrawalApproval = this.ERC20WithdrawalApproval.bind(this);
    this.Withdrawal = this.Withdrawal.bind(this);
    this.Withdrawals = this.Withdrawals.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Deposits = this.Deposits.bind(this);
    this.NetworkParameters = this.NetworkParameters.bind(this);
    this.LiquidityProvisions = this.LiquidityProvisions.bind(this);
    this.OracleSpec = this.OracleSpec.bind(this);
    this.OracleSpecs = this.OracleSpecs.bind(this);
    this.OracleDataBySpec = this.OracleDataBySpec.bind(this);
    this.ObserveRewards = this.ObserveRewards.bind(this);
    this.GetRewards = this.GetRewards.bind(this);
    this.GetRewardSummaries = this.GetRewardSummaries.bind(this);
    this.Checkpoints = this.Checkpoints.bind(this);
    this.Delegations = this.Delegations.bind(this);
    this.ObserveDelegations = this.ObserveDelegations.bind(this);
    this.PartyStake = this.PartyStake.bind(this);
    this.Transfers = this.Transfers.bind(this);
    this.GetRiskFactors = this.GetRiskFactors.bind(this);
  }
  MarketAccounts(
    request: MarketAccountsRequest
  ): Promise<MarketAccountsResponse> {
    const data = MarketAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "MarketAccounts",
      data
    );
    return promise.then((data) =>
      MarketAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  PartyAccounts(request: PartyAccountsRequest): Promise<PartyAccountsResponse> {
    const data = PartyAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "PartyAccounts",
      data
    );
    return promise.then((data) =>
      PartyAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  FeeInfrastructureAccounts(
    request: FeeInfrastructureAccountsRequest
  ): Promise<FeeInfrastructureAccountsResponse> {
    const data = FeeInfrastructureAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "FeeInfrastructureAccounts",
      data
    );
    return promise.then((data) =>
      FeeInfrastructureAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  GlobalRewardPoolAccounts(
    request: GlobalRewardPoolAccountsRequest
  ): Promise<GlobalRewardPoolAccountsResponse> {
    const data = GlobalRewardPoolAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GlobalRewardPoolAccounts",
      data
    );
    return promise.then((data) =>
      GlobalRewardPoolAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  Candles(request: CandlesRequest): Promise<CandlesResponse> {
    const data = CandlesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Candles",
      data
    );
    return promise.then((data) => CandlesResponse.decode(new _m0.Reader(data)));
  }

  MarketDataByID(
    request: MarketDataByIDRequest
  ): Promise<MarketDataByIDResponse> {
    const data = MarketDataByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "MarketDataByID",
      data
    );
    return promise.then((data) =>
      MarketDataByIDResponse.decode(new _m0.Reader(data))
    );
  }

  MarketsData(request: MarketsDataRequest): Promise<MarketsDataResponse> {
    const data = MarketsDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "MarketsData",
      data
    );
    return promise.then((data) =>
      MarketsDataResponse.decode(new _m0.Reader(data))
    );
  }

  MarketByID(request: MarketByIDRequest): Promise<MarketByIDResponse> {
    const data = MarketByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "MarketByID",
      data
    );
    return promise.then((data) =>
      MarketByIDResponse.decode(new _m0.Reader(data))
    );
  }

  MarketDepth(request: MarketDepthRequest): Promise<MarketDepthResponse> {
    const data = MarketDepthRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "MarketDepth",
      data
    );
    return promise.then((data) =>
      MarketDepthResponse.decode(new _m0.Reader(data))
    );
  }

  Markets(request: MarketsRequest): Promise<MarketsResponse> {
    const data = MarketsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Markets",
      data
    );
    return promise.then((data) => MarketsResponse.decode(new _m0.Reader(data)));
  }

  OrderByMarketAndID(
    request: OrderByMarketAndIDRequest
  ): Promise<OrderByMarketAndIDResponse> {
    const data = OrderByMarketAndIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OrderByMarketAndID",
      data
    );
    return promise.then((data) =>
      OrderByMarketAndIDResponse.decode(new _m0.Reader(data))
    );
  }

  OrderByReference(
    request: OrderByReferenceRequest
  ): Promise<OrderByReferenceResponse> {
    const data = OrderByReferenceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OrderByReference",
      data
    );
    return promise.then((data) =>
      OrderByReferenceResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersByMarket(
    request: OrdersByMarketRequest
  ): Promise<OrdersByMarketResponse> {
    const data = OrdersByMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OrdersByMarket",
      data
    );
    return promise.then((data) =>
      OrdersByMarketResponse.decode(new _m0.Reader(data))
    );
  }

  OrdersByParty(request: OrdersByPartyRequest): Promise<OrdersByPartyResponse> {
    const data = OrdersByPartyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OrdersByParty",
      data
    );
    return promise.then((data) =>
      OrdersByPartyResponse.decode(new _m0.Reader(data))
    );
  }

  OrderByID(request: OrderByIDRequest): Promise<OrderByIDResponse> {
    const data = OrderByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OrderByID",
      data
    );
    return promise.then((data) =>
      OrderByIDResponse.decode(new _m0.Reader(data))
    );
  }

  OrderVersionsByID(
    request: OrderVersionsByIDRequest
  ): Promise<OrderVersionsByIDResponse> {
    const data = OrderVersionsByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OrderVersionsByID",
      data
    );
    return promise.then((data) =>
      OrderVersionsByIDResponse.decode(new _m0.Reader(data))
    );
  }

  MarginLevels(request: MarginLevelsRequest): Promise<MarginLevelsResponse> {
    const data = MarginLevelsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "MarginLevels",
      data
    );
    return promise.then((data) =>
      MarginLevelsResponse.decode(new _m0.Reader(data))
    );
  }

  Parties(request: PartiesRequest): Promise<PartiesResponse> {
    const data = PartiesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Parties",
      data
    );
    return promise.then((data) => PartiesResponse.decode(new _m0.Reader(data)));
  }

  PartyByID(request: PartyByIDRequest): Promise<PartyByIDResponse> {
    const data = PartyByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "PartyByID",
      data
    );
    return promise.then((data) =>
      PartyByIDResponse.decode(new _m0.Reader(data))
    );
  }

  PositionsByParty(
    request: PositionsByPartyRequest
  ): Promise<PositionsByPartyResponse> {
    const data = PositionsByPartyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "PositionsByParty",
      data
    );
    return promise.then((data) =>
      PositionsByPartyResponse.decode(new _m0.Reader(data))
    );
  }

  LastTrade(request: LastTradeRequest): Promise<LastTradeResponse> {
    const data = LastTradeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "LastTrade",
      data
    );
    return promise.then((data) =>
      LastTradeResponse.decode(new _m0.Reader(data))
    );
  }

  TradesByMarket(
    request: TradesByMarketRequest
  ): Promise<TradesByMarketResponse> {
    const data = TradesByMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "TradesByMarket",
      data
    );
    return promise.then((data) =>
      TradesByMarketResponse.decode(new _m0.Reader(data))
    );
  }

  TradesByOrder(request: TradesByOrderRequest): Promise<TradesByOrderResponse> {
    const data = TradesByOrderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "TradesByOrder",
      data
    );
    return promise.then((data) =>
      TradesByOrderResponse.decode(new _m0.Reader(data))
    );
  }

  TradesByParty(request: TradesByPartyRequest): Promise<TradesByPartyResponse> {
    const data = TradesByPartyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "TradesByParty",
      data
    );
    return promise.then((data) =>
      TradesByPartyResponse.decode(new _m0.Reader(data))
    );
  }

  GetProposals(request: GetProposalsRequest): Promise<GetProposalsResponse> {
    const data = GetProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetProposals",
      data
    );
    return promise.then((data) =>
      GetProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  GetProposalsByParty(
    request: GetProposalsByPartyRequest
  ): Promise<GetProposalsByPartyResponse> {
    const data = GetProposalsByPartyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetProposalsByParty",
      data
    );
    return promise.then((data) =>
      GetProposalsByPartyResponse.decode(new _m0.Reader(data))
    );
  }

  GetVotesByParty(
    request: GetVotesByPartyRequest
  ): Promise<GetVotesByPartyResponse> {
    const data = GetVotesByPartyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetVotesByParty",
      data
    );
    return promise.then((data) =>
      GetVotesByPartyResponse.decode(new _m0.Reader(data))
    );
  }

  GetNewMarketProposals(
    request: GetNewMarketProposalsRequest
  ): Promise<GetNewMarketProposalsResponse> {
    const data = GetNewMarketProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNewMarketProposals",
      data
    );
    return promise.then((data) =>
      GetNewMarketProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  GetUpdateMarketProposals(
    request: GetUpdateMarketProposalsRequest
  ): Promise<GetUpdateMarketProposalsResponse> {
    const data = GetUpdateMarketProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetUpdateMarketProposals",
      data
    );
    return promise.then((data) =>
      GetUpdateMarketProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  GetNetworkParametersProposals(
    request: GetNetworkParametersProposalsRequest
  ): Promise<GetNetworkParametersProposalsResponse> {
    const data = GetNetworkParametersProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNetworkParametersProposals",
      data
    );
    return promise.then((data) =>
      GetNetworkParametersProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  GetNewAssetProposals(
    request: GetNewAssetProposalsRequest
  ): Promise<GetNewAssetProposalsResponse> {
    const data = GetNewAssetProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNewAssetProposals",
      data
    );
    return promise.then((data) =>
      GetNewAssetProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  GetNewFreeformProposals(
    request: GetNewFreeformProposalsRequest
  ): Promise<GetNewFreeformProposalsResponse> {
    const data = GetNewFreeformProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNewFreeformProposals",
      data
    );
    return promise.then((data) =>
      GetNewFreeformProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  GetProposalByID(
    request: GetProposalByIDRequest
  ): Promise<GetProposalByIDResponse> {
    const data = GetProposalByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetProposalByID",
      data
    );
    return promise.then((data) =>
      GetProposalByIDResponse.decode(new _m0.Reader(data))
    );
  }

  GetProposalByReference(
    request: GetProposalByReferenceRequest
  ): Promise<GetProposalByReferenceResponse> {
    const data = GetProposalByReferenceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetProposalByReference",
      data
    );
    return promise.then((data) =>
      GetProposalByReferenceResponse.decode(new _m0.Reader(data))
    );
  }

  ObserveGovernance(
    request: ObserveGovernanceRequest
  ): Observable<ObserveGovernanceResponse> {
    const data = ObserveGovernanceRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObserveGovernance",
      data
    );
    return result.pipe(
      map((data) => ObserveGovernanceResponse.decode(new _m0.Reader(data)))
    );
  }

  ObservePartyProposals(
    request: ObservePartyProposalsRequest
  ): Observable<ObservePartyProposalsResponse> {
    const data = ObservePartyProposalsRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObservePartyProposals",
      data
    );
    return result.pipe(
      map((data) => ObservePartyProposalsResponse.decode(new _m0.Reader(data)))
    );
  }

  ObservePartyVotes(
    request: ObservePartyVotesRequest
  ): Observable<ObservePartyVotesResponse> {
    const data = ObservePartyVotesRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObservePartyVotes",
      data
    );
    return result.pipe(
      map((data) => ObservePartyVotesResponse.decode(new _m0.Reader(data)))
    );
  }

  ObserveProposalVotes(
    request: ObserveProposalVotesRequest
  ): Observable<ObserveProposalVotesResponse> {
    const data = ObserveProposalVotesRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObserveProposalVotes",
      data
    );
    return result.pipe(
      map((data) => ObserveProposalVotesResponse.decode(new _m0.Reader(data)))
    );
  }

  ObserveEventBus(
    request: Observable<ObserveEventBusRequest>
  ): Observable<ObserveEventBusResponse> {
    const data = request.pipe(
      map((request) => ObserveEventBusRequest.encode(request).finish())
    );
    const result = this.rpc.bidirectionalStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObserveEventBus",
      data
    );
    return result.pipe(
      map((data) => ObserveEventBusResponse.decode(new _m0.Reader(data)))
    );
  }

  GetNodeData(request: GetNodeDataRequest): Promise<GetNodeDataResponse> {
    const data = GetNodeDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNodeData",
      data
    );
    return promise.then((data) =>
      GetNodeDataResponse.decode(new _m0.Reader(data))
    );
  }

  GetNodes(request: GetNodesRequest): Promise<GetNodesResponse> {
    const data = GetNodesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNodes",
      data
    );
    return promise.then((data) =>
      GetNodesResponse.decode(new _m0.Reader(data))
    );
  }

  GetNodeByID(request: GetNodeByIDRequest): Promise<GetNodeByIDResponse> {
    const data = GetNodeByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNodeByID",
      data
    );
    return promise.then((data) =>
      GetNodeByIDResponse.decode(new _m0.Reader(data))
    );
  }

  GetKeyRotations(
    request: GetKeyRotationsRequest
  ): Promise<GetKeyRotationsResponse> {
    const data = GetKeyRotationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetKeyRotations",
      data
    );
    return promise.then((data) =>
      GetKeyRotationsResponse.decode(new _m0.Reader(data))
    );
  }

  GetKeyRotationsByNode(
    request: GetKeyRotationsByNodeRequest
  ): Promise<GetKeyRotationsByNodeResponse> {
    const data = GetKeyRotationsByNodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetKeyRotationsByNode",
      data
    );
    return promise.then((data) =>
      GetKeyRotationsByNodeResponse.decode(new _m0.Reader(data))
    );
  }

  GetEpoch(request: GetEpochRequest): Promise<GetEpochResponse> {
    const data = GetEpochRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetEpoch",
      data
    );
    return promise.then((data) =>
      GetEpochResponse.decode(new _m0.Reader(data))
    );
  }

  GetVegaTime(request: GetVegaTimeRequest): Promise<GetVegaTimeResponse> {
    const data = GetVegaTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetVegaTime",
      data
    );
    return promise.then((data) =>
      GetVegaTimeResponse.decode(new _m0.Reader(data))
    );
  }

  AccountsSubscribe(
    request: AccountsSubscribeRequest
  ): Observable<AccountsSubscribeResponse> {
    const data = AccountsSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "AccountsSubscribe",
      data
    );
    return result.pipe(
      map((data) => AccountsSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  CandlesSubscribe(
    request: CandlesSubscribeRequest
  ): Observable<CandlesSubscribeResponse> {
    const data = CandlesSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "CandlesSubscribe",
      data
    );
    return result.pipe(
      map((data) => CandlesSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  MarginLevelsSubscribe(
    request: MarginLevelsSubscribeRequest
  ): Observable<MarginLevelsSubscribeResponse> {
    const data = MarginLevelsSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "MarginLevelsSubscribe",
      data
    );
    return result.pipe(
      map((data) => MarginLevelsSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  MarketDepthSubscribe(
    request: MarketDepthSubscribeRequest
  ): Observable<MarketDepthSubscribeResponse> {
    const data = MarketDepthSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "MarketDepthSubscribe",
      data
    );
    return result.pipe(
      map((data) => MarketDepthSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  MarketDepthUpdatesSubscribe(
    request: MarketDepthUpdatesSubscribeRequest
  ): Observable<MarketDepthUpdatesSubscribeResponse> {
    const data = MarketDepthUpdatesSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "MarketDepthUpdatesSubscribe",
      data
    );
    return result.pipe(
      map((data) =>
        MarketDepthUpdatesSubscribeResponse.decode(new _m0.Reader(data))
      )
    );
  }

  MarketsDataSubscribe(
    request: MarketsDataSubscribeRequest
  ): Observable<MarketsDataSubscribeResponse> {
    const data = MarketsDataSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "MarketsDataSubscribe",
      data
    );
    return result.pipe(
      map((data) => MarketsDataSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  OrdersSubscribe(
    request: OrdersSubscribeRequest
  ): Observable<OrdersSubscribeResponse> {
    const data = OrdersSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "OrdersSubscribe",
      data
    );
    return result.pipe(
      map((data) => OrdersSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  PositionsSubscribe(
    request: PositionsSubscribeRequest
  ): Observable<PositionsSubscribeResponse> {
    const data = PositionsSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "PositionsSubscribe",
      data
    );
    return result.pipe(
      map((data) => PositionsSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  TradesSubscribe(
    request: TradesSubscribeRequest
  ): Observable<TradesSubscribeResponse> {
    const data = TradesSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "TradesSubscribe",
      data
    );
    return result.pipe(
      map((data) => TradesSubscribeResponse.decode(new _m0.Reader(data)))
    );
  }

  TransferResponsesSubscribe(
    request: TransferResponsesSubscribeRequest
  ): Observable<TransferResponsesSubscribeResponse> {
    const data = TransferResponsesSubscribeRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "TransferResponsesSubscribe",
      data
    );
    return result.pipe(
      map((data) =>
        TransferResponsesSubscribeResponse.decode(new _m0.Reader(data))
      )
    );
  }

  GetNodeSignaturesAggregate(
    request: GetNodeSignaturesAggregateRequest
  ): Promise<GetNodeSignaturesAggregateResponse> {
    const data = GetNodeSignaturesAggregateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetNodeSignaturesAggregate",
      data
    );
    return promise.then((data) =>
      GetNodeSignaturesAggregateResponse.decode(new _m0.Reader(data))
    );
  }

  AssetByID(request: AssetByIDRequest): Promise<AssetByIDResponse> {
    const data = AssetByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "AssetByID",
      data
    );
    return promise.then((data) =>
      AssetByIDResponse.decode(new _m0.Reader(data))
    );
  }

  Assets(request: AssetsRequest): Promise<AssetsResponse> {
    const data = AssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Assets",
      data
    );
    return promise.then((data) => AssetsResponse.decode(new _m0.Reader(data)));
  }

  EstimateFee(request: EstimateFeeRequest): Promise<EstimateFeeResponse> {
    const data = EstimateFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "EstimateFee",
      data
    );
    return promise.then((data) =>
      EstimateFeeResponse.decode(new _m0.Reader(data))
    );
  }

  EstimateMargin(
    request: EstimateMarginRequest
  ): Promise<EstimateMarginResponse> {
    const data = EstimateMarginRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "EstimateMargin",
      data
    );
    return promise.then((data) =>
      EstimateMarginResponse.decode(new _m0.Reader(data))
    );
  }

  ERC20WithdrawalApproval(
    request: ERC20WithdrawalApprovalRequest
  ): Promise<ERC20WithdrawalApprovalResponse> {
    const data = ERC20WithdrawalApprovalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "ERC20WithdrawalApproval",
      data
    );
    return promise.then((data) =>
      ERC20WithdrawalApprovalResponse.decode(new _m0.Reader(data))
    );
  }

  Withdrawal(request: WithdrawalRequest): Promise<WithdrawalResponse> {
    const data = WithdrawalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Withdrawal",
      data
    );
    return promise.then((data) =>
      WithdrawalResponse.decode(new _m0.Reader(data))
    );
  }

  Withdrawals(request: WithdrawalsRequest): Promise<WithdrawalsResponse> {
    const data = WithdrawalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Withdrawals",
      data
    );
    return promise.then((data) =>
      WithdrawalsResponse.decode(new _m0.Reader(data))
    );
  }

  Deposit(request: DepositRequest): Promise<DepositResponse> {
    const data = DepositRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Deposit",
      data
    );
    return promise.then((data) => DepositResponse.decode(new _m0.Reader(data)));
  }

  Deposits(request: DepositsRequest): Promise<DepositsResponse> {
    const data = DepositsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Deposits",
      data
    );
    return promise.then((data) =>
      DepositsResponse.decode(new _m0.Reader(data))
    );
  }

  NetworkParameters(
    request: NetworkParametersRequest
  ): Promise<NetworkParametersResponse> {
    const data = NetworkParametersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "NetworkParameters",
      data
    );
    return promise.then((data) =>
      NetworkParametersResponse.decode(new _m0.Reader(data))
    );
  }

  LiquidityProvisions(
    request: LiquidityProvisionsRequest
  ): Promise<LiquidityProvisionsResponse> {
    const data = LiquidityProvisionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "LiquidityProvisions",
      data
    );
    return promise.then((data) =>
      LiquidityProvisionsResponse.decode(new _m0.Reader(data))
    );
  }

  OracleSpec(request: OracleSpecRequest): Promise<OracleSpecResponse> {
    const data = OracleSpecRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OracleSpec",
      data
    );
    return promise.then((data) =>
      OracleSpecResponse.decode(new _m0.Reader(data))
    );
  }

  OracleSpecs(request: OracleSpecsRequest): Promise<OracleSpecsResponse> {
    const data = OracleSpecsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OracleSpecs",
      data
    );
    return promise.then((data) =>
      OracleSpecsResponse.decode(new _m0.Reader(data))
    );
  }

  OracleDataBySpec(
    request: OracleDataBySpecRequest
  ): Promise<OracleDataBySpecResponse> {
    const data = OracleDataBySpecRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "OracleDataBySpec",
      data
    );
    return promise.then((data) =>
      OracleDataBySpecResponse.decode(new _m0.Reader(data))
    );
  }

  ObserveRewards(
    request: ObserveRewardsRequest
  ): Observable<ObserveRewardsResponse> {
    const data = ObserveRewardsRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObserveRewards",
      data
    );
    return result.pipe(
      map((data) => ObserveRewardsResponse.decode(new _m0.Reader(data)))
    );
  }

  GetRewards(request: GetRewardsRequest): Promise<GetRewardsResponse> {
    const data = GetRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetRewards",
      data
    );
    return promise.then((data) =>
      GetRewardsResponse.decode(new _m0.Reader(data))
    );
  }

  GetRewardSummaries(
    request: GetRewardSummariesRequest
  ): Promise<GetRewardSummariesResponse> {
    const data = GetRewardSummariesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetRewardSummaries",
      data
    );
    return promise.then((data) =>
      GetRewardSummariesResponse.decode(new _m0.Reader(data))
    );
  }

  Checkpoints(request: CheckpointsRequest): Promise<CheckpointsResponse> {
    const data = CheckpointsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Checkpoints",
      data
    );
    return promise.then((data) =>
      CheckpointsResponse.decode(new _m0.Reader(data))
    );
  }

  Delegations(request: DelegationsRequest): Promise<DelegationsResponse> {
    const data = DelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Delegations",
      data
    );
    return promise.then((data) =>
      DelegationsResponse.decode(new _m0.Reader(data))
    );
  }

  ObserveDelegations(
    request: ObserveDelegationsRequest
  ): Observable<ObserveDelegationsResponse> {
    const data = ObserveDelegationsRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v1.TradingDataService",
      "ObserveDelegations",
      data
    );
    return result.pipe(
      map((data) => ObserveDelegationsResponse.decode(new _m0.Reader(data)))
    );
  }

  PartyStake(request: PartyStakeRequest): Promise<PartyStakeResponse> {
    const data = PartyStakeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "PartyStake",
      data
    );
    return promise.then((data) =>
      PartyStakeResponse.decode(new _m0.Reader(data))
    );
  }

  Transfers(request: TransfersRequest): Promise<TransfersResponse> {
    const data = TransfersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "Transfers",
      data
    );
    return promise.then((data) =>
      TransfersResponse.decode(new _m0.Reader(data))
    );
  }

  GetRiskFactors(
    request: GetRiskFactorsRequest
  ): Promise<GetRiskFactorsResponse> {
    const data = GetRiskFactorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v1.TradingDataService",
      "GetRiskFactors",
      data
    );
    return promise.then((data) =>
      GetRiskFactorsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array>;
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
