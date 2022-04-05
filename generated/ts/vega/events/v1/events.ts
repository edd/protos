/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  AccountType,
  EpochAction,
  AuctionTrigger,
  Uint64Value,
  TransferResponse,
  Order,
  Account,
  Party,
  Trade,
  MarginLevels,
  MarketData,
  Withdrawal,
  Deposit,
  RiskFactor,
  NetworkParameter,
  LiquidityProvision,
  NetworkLimits,
  accountTypeFromJSON,
  accountTypeToJSON,
  epochActionFromJSON,
  epochActionToJSON,
  auctionTriggerFromJSON,
  auctionTriggerToJSON,
} from "../../../vega/vega";
import {
  OrderSubmission,
  OrderAmendment,
  OrderCancellation,
  ProposalSubmission,
  VoteSubmission,
  LiquidityProvisionSubmission,
  WithdrawSubmission,
  DelegateSubmission,
  UndelegateSubmission,
  RestoreSnapshot,
  LiquidityProvisionCancellation,
  LiquidityProvisionAmendment,
  Transfer as Transfer1,
  CancelTransfer,
} from "../../../vega/commands/v1/commands";
import {
  AnnounceNode,
  NodeSignature,
} from "../../../vega/commands/v1/validator_commands";
import { OracleDataSubmission } from "../../../vega/commands/v1/oracles";
import { Proposal, Vote } from "../../../vega/governance";
import { Market } from "../../../vega/markets";
import { Asset } from "../../../vega/assets";
import { OracleSpec } from "../../../vega/oracles/v1/spec";
import { OracleData } from "../../../vega/oracles/v1/data";

export const protobufPackage = "vega.events.v1";

/**
 * An (event) bus event type is used to specify a type of event
 * It has 2 styles of event:
 * Single values (e.g. BUS_EVENT_TYPE_ORDER) where they represent one data item
 * Group values (e.g. BUS_EVENT_TYPE_AUCTION) where they represent a group of data items
 */
export enum BusEventType {
  /** BUS_EVENT_TYPE_UNSPECIFIED - Default value, always invalid */
  BUS_EVENT_TYPE_UNSPECIFIED = 0,
  /** BUS_EVENT_TYPE_ALL - Events of ALL event types, used when filtering stream from event bus */
  BUS_EVENT_TYPE_ALL = 1,
  /** BUS_EVENT_TYPE_TIME_UPDATE - Event for blockchain time updates */
  BUS_EVENT_TYPE_TIME_UPDATE = 2,
  /** BUS_EVENT_TYPE_TRANSFER_RESPONSES - Event for when a transfer happens internally, contains the transfer information */
  BUS_EVENT_TYPE_TRANSFER_RESPONSES = 3,
  /** BUS_EVENT_TYPE_POSITION_RESOLUTION - Event indicating position resolution has occurred */
  BUS_EVENT_TYPE_POSITION_RESOLUTION = 4,
  /** BUS_EVENT_TYPE_ORDER - Event for order updates, both new and existing orders */
  BUS_EVENT_TYPE_ORDER = 5,
  /** BUS_EVENT_TYPE_ACCOUNT - Event for account updates */
  BUS_EVENT_TYPE_ACCOUNT = 6,
  /** BUS_EVENT_TYPE_PARTY - Event for party updates */
  BUS_EVENT_TYPE_PARTY = 7,
  /** BUS_EVENT_TYPE_TRADE - Event indicating a new trade has occurred */
  BUS_EVENT_TYPE_TRADE = 8,
  /** BUS_EVENT_TYPE_MARGIN_LEVELS - Event indicating margin levels have changed for a party */
  BUS_EVENT_TYPE_MARGIN_LEVELS = 9,
  /** BUS_EVENT_TYPE_PROPOSAL - Event for proposal updates (for governance) */
  BUS_EVENT_TYPE_PROPOSAL = 10,
  /** BUS_EVENT_TYPE_VOTE - Event indicating a new vote has occurred (for governance) */
  BUS_EVENT_TYPE_VOTE = 11,
  /** BUS_EVENT_TYPE_MARKET_DATA - Event for market data updates */
  BUS_EVENT_TYPE_MARKET_DATA = 12,
  /** BUS_EVENT_TYPE_NODE_SIGNATURE - Event for a new signature for a Vega node */
  BUS_EVENT_TYPE_NODE_SIGNATURE = 13,
  /** BUS_EVENT_TYPE_LOSS_SOCIALIZATION - Event indicating loss socialisation occurred for a party */
  BUS_EVENT_TYPE_LOSS_SOCIALIZATION = 14,
  /** BUS_EVENT_TYPE_SETTLE_POSITION - Event for when a position is being settled */
  BUS_EVENT_TYPE_SETTLE_POSITION = 15,
  /** BUS_EVENT_TYPE_SETTLE_DISTRESSED - Event for when a position is distressed */
  BUS_EVENT_TYPE_SETTLE_DISTRESSED = 16,
  /** BUS_EVENT_TYPE_MARKET_CREATED - Event indicating a new market was created */
  BUS_EVENT_TYPE_MARKET_CREATED = 17,
  /** BUS_EVENT_TYPE_ASSET - Event for when an asset is added to Vega */
  BUS_EVENT_TYPE_ASSET = 18,
  /** BUS_EVENT_TYPE_MARKET_TICK - Event indicating a market tick event */
  BUS_EVENT_TYPE_MARKET_TICK = 19,
  /** BUS_EVENT_TYPE_WITHDRAWAL - Event for when a withdrawal occurs */
  BUS_EVENT_TYPE_WITHDRAWAL = 20,
  /** BUS_EVENT_TYPE_DEPOSIT - Event for when a deposit occurs */
  BUS_EVENT_TYPE_DEPOSIT = 21,
  /** BUS_EVENT_TYPE_AUCTION - Event indicating a change in auction state, for example starting or ending an auction */
  BUS_EVENT_TYPE_AUCTION = 22,
  /** BUS_EVENT_TYPE_RISK_FACTOR - Event indicating a risk factor has been updated */
  BUS_EVENT_TYPE_RISK_FACTOR = 23,
  /** BUS_EVENT_TYPE_NETWORK_PARAMETER - Event indicating a network parameter has been added or updated */
  BUS_EVENT_TYPE_NETWORK_PARAMETER = 24,
  /** BUS_EVENT_TYPE_LIQUIDITY_PROVISION - Event indicating a liquidity provision has been created or updated */
  BUS_EVENT_TYPE_LIQUIDITY_PROVISION = 25,
  /** BUS_EVENT_TYPE_MARKET_UPDATED - Event indicating a new market was created */
  BUS_EVENT_TYPE_MARKET_UPDATED = 26,
  /** BUS_EVENT_TYPE_ORACLE_SPEC - Event indicating an oracle spec has been created or updated */
  BUS_EVENT_TYPE_ORACLE_SPEC = 27,
  /** BUS_EVENT_TYPE_ORACLE_DATA - Event indicating that an oracle data has been broadcast */
  BUS_EVENT_TYPE_ORACLE_DATA = 28,
  /** BUS_EVENT_TYPE_DELEGATION_BALANCE - Event indicating that an delegation balance of a party to a node for current epoch has changed */
  BUS_EVENT_TYPE_DELEGATION_BALANCE = 29,
  /** BUS_EVENT_TYPE_VALIDATOR_SCORE - Event indicating the validator score for the given epoch */
  BUS_EVENT_TYPE_VALIDATOR_SCORE = 30,
  /** BUS_EVENT_TYPE_EPOCH_UPDATE - Event indicating the start or end of an epoch */
  BUS_EVENT_TYPE_EPOCH_UPDATE = 31,
  /** BUS_EVENT_TYPE_VALIDATOR_UPDATE - Event indicating that validator node has been updated */
  BUS_EVENT_TYPE_VALIDATOR_UPDATE = 32,
  /** BUS_EVENT_TYPE_STAKE_LINKING - Event indicating a new staking event have been processed by the network */
  BUS_EVENT_TYPE_STAKE_LINKING = 33,
  /** BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT - Event indicating the payout of a reward has been initiated */
  BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT = 34,
  /** BUS_EVENT_TYPE_CHECKPOINT - Event indicating a new checkpoint was created */
  BUS_EVENT_TYPE_CHECKPOINT = 35,
  /** BUS_EVENT_TYPE_STREAM_START - Event indicating stream is starting */
  BUS_EVENT_TYPE_STREAM_START = 36,
  /** BUS_EVENT_TYPE_KEY_ROTATION - Event indicating key rotation took place */
  BUS_EVENT_TYPE_KEY_ROTATION = 37,
  /** BUS_EVENT_TYPE_STATE_VAR - Event indicating state transitions in state variable consensus */
  BUS_EVENT_TYPE_STATE_VAR = 38,
  /** BUS_EVENT_TYPE_NETWORK_LIMITS - Event indicating network limits set or updated */
  BUS_EVENT_TYPE_NETWORK_LIMITS = 39,
  /** BUS_EVENT_TYPE_TRANSFER - Event indicating a update for a transfert */
  BUS_EVENT_TYPE_TRANSFER = 40,
  /** BUS_EVENT_TYPE_VALIDATOR_RANKING - Event indicating the ranking of validator and their status in vega */
  BUS_EVENT_TYPE_VALIDATOR_RANKING = 41,
  /** BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT - Event indicating a new multi sig signer event have been processed */
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT = 42,
  /** BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD - Event indicating the erc20 multi sig threshold have been updated */
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD = 43,
  /** BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED - Event indicating a new signer has been added to the erc20 multisig */
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED = 44,
  /** BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED - Event indicating a signer has been removed from the erc20 multisig */
  BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED = 45,
  /** BUS_EVENT_TYPE_POSITION_STATE - Event indicting that a party's position has changed */
  BUS_EVENT_TYPE_POSITION_STATE = 46,
  /** BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION - Event indicating Ethereum key rotation took place */
  BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION = 47,
  /** BUS_EVENT_TYPE_MARKET - Event indicating a market related event, for example when a market opens */
  BUS_EVENT_TYPE_MARKET = 101,
  /** BUS_EVENT_TYPE_TX_ERROR - Event used to report failed transactions back to a user, this is excluded from the ALL type */
  BUS_EVENT_TYPE_TX_ERROR = 201,
  UNRECOGNIZED = -1,
}

export function busEventTypeFromJSON(object: any): BusEventType {
  switch (object) {
    case 0:
    case "BUS_EVENT_TYPE_UNSPECIFIED":
      return BusEventType.BUS_EVENT_TYPE_UNSPECIFIED;
    case 1:
    case "BUS_EVENT_TYPE_ALL":
      return BusEventType.BUS_EVENT_TYPE_ALL;
    case 2:
    case "BUS_EVENT_TYPE_TIME_UPDATE":
      return BusEventType.BUS_EVENT_TYPE_TIME_UPDATE;
    case 3:
    case "BUS_EVENT_TYPE_TRANSFER_RESPONSES":
      return BusEventType.BUS_EVENT_TYPE_TRANSFER_RESPONSES;
    case 4:
    case "BUS_EVENT_TYPE_POSITION_RESOLUTION":
      return BusEventType.BUS_EVENT_TYPE_POSITION_RESOLUTION;
    case 5:
    case "BUS_EVENT_TYPE_ORDER":
      return BusEventType.BUS_EVENT_TYPE_ORDER;
    case 6:
    case "BUS_EVENT_TYPE_ACCOUNT":
      return BusEventType.BUS_EVENT_TYPE_ACCOUNT;
    case 7:
    case "BUS_EVENT_TYPE_PARTY":
      return BusEventType.BUS_EVENT_TYPE_PARTY;
    case 8:
    case "BUS_EVENT_TYPE_TRADE":
      return BusEventType.BUS_EVENT_TYPE_TRADE;
    case 9:
    case "BUS_EVENT_TYPE_MARGIN_LEVELS":
      return BusEventType.BUS_EVENT_TYPE_MARGIN_LEVELS;
    case 10:
    case "BUS_EVENT_TYPE_PROPOSAL":
      return BusEventType.BUS_EVENT_TYPE_PROPOSAL;
    case 11:
    case "BUS_EVENT_TYPE_VOTE":
      return BusEventType.BUS_EVENT_TYPE_VOTE;
    case 12:
    case "BUS_EVENT_TYPE_MARKET_DATA":
      return BusEventType.BUS_EVENT_TYPE_MARKET_DATA;
    case 13:
    case "BUS_EVENT_TYPE_NODE_SIGNATURE":
      return BusEventType.BUS_EVENT_TYPE_NODE_SIGNATURE;
    case 14:
    case "BUS_EVENT_TYPE_LOSS_SOCIALIZATION":
      return BusEventType.BUS_EVENT_TYPE_LOSS_SOCIALIZATION;
    case 15:
    case "BUS_EVENT_TYPE_SETTLE_POSITION":
      return BusEventType.BUS_EVENT_TYPE_SETTLE_POSITION;
    case 16:
    case "BUS_EVENT_TYPE_SETTLE_DISTRESSED":
      return BusEventType.BUS_EVENT_TYPE_SETTLE_DISTRESSED;
    case 17:
    case "BUS_EVENT_TYPE_MARKET_CREATED":
      return BusEventType.BUS_EVENT_TYPE_MARKET_CREATED;
    case 18:
    case "BUS_EVENT_TYPE_ASSET":
      return BusEventType.BUS_EVENT_TYPE_ASSET;
    case 19:
    case "BUS_EVENT_TYPE_MARKET_TICK":
      return BusEventType.BUS_EVENT_TYPE_MARKET_TICK;
    case 20:
    case "BUS_EVENT_TYPE_WITHDRAWAL":
      return BusEventType.BUS_EVENT_TYPE_WITHDRAWAL;
    case 21:
    case "BUS_EVENT_TYPE_DEPOSIT":
      return BusEventType.BUS_EVENT_TYPE_DEPOSIT;
    case 22:
    case "BUS_EVENT_TYPE_AUCTION":
      return BusEventType.BUS_EVENT_TYPE_AUCTION;
    case 23:
    case "BUS_EVENT_TYPE_RISK_FACTOR":
      return BusEventType.BUS_EVENT_TYPE_RISK_FACTOR;
    case 24:
    case "BUS_EVENT_TYPE_NETWORK_PARAMETER":
      return BusEventType.BUS_EVENT_TYPE_NETWORK_PARAMETER;
    case 25:
    case "BUS_EVENT_TYPE_LIQUIDITY_PROVISION":
      return BusEventType.BUS_EVENT_TYPE_LIQUIDITY_PROVISION;
    case 26:
    case "BUS_EVENT_TYPE_MARKET_UPDATED":
      return BusEventType.BUS_EVENT_TYPE_MARKET_UPDATED;
    case 27:
    case "BUS_EVENT_TYPE_ORACLE_SPEC":
      return BusEventType.BUS_EVENT_TYPE_ORACLE_SPEC;
    case 28:
    case "BUS_EVENT_TYPE_ORACLE_DATA":
      return BusEventType.BUS_EVENT_TYPE_ORACLE_DATA;
    case 29:
    case "BUS_EVENT_TYPE_DELEGATION_BALANCE":
      return BusEventType.BUS_EVENT_TYPE_DELEGATION_BALANCE;
    case 30:
    case "BUS_EVENT_TYPE_VALIDATOR_SCORE":
      return BusEventType.BUS_EVENT_TYPE_VALIDATOR_SCORE;
    case 31:
    case "BUS_EVENT_TYPE_EPOCH_UPDATE":
      return BusEventType.BUS_EVENT_TYPE_EPOCH_UPDATE;
    case 32:
    case "BUS_EVENT_TYPE_VALIDATOR_UPDATE":
      return BusEventType.BUS_EVENT_TYPE_VALIDATOR_UPDATE;
    case 33:
    case "BUS_EVENT_TYPE_STAKE_LINKING":
      return BusEventType.BUS_EVENT_TYPE_STAKE_LINKING;
    case 34:
    case "BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT":
      return BusEventType.BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT;
    case 35:
    case "BUS_EVENT_TYPE_CHECKPOINT":
      return BusEventType.BUS_EVENT_TYPE_CHECKPOINT;
    case 36:
    case "BUS_EVENT_TYPE_STREAM_START":
      return BusEventType.BUS_EVENT_TYPE_STREAM_START;
    case 37:
    case "BUS_EVENT_TYPE_KEY_ROTATION":
      return BusEventType.BUS_EVENT_TYPE_KEY_ROTATION;
    case 38:
    case "BUS_EVENT_TYPE_STATE_VAR":
      return BusEventType.BUS_EVENT_TYPE_STATE_VAR;
    case 39:
    case "BUS_EVENT_TYPE_NETWORK_LIMITS":
      return BusEventType.BUS_EVENT_TYPE_NETWORK_LIMITS;
    case 40:
    case "BUS_EVENT_TYPE_TRANSFER":
      return BusEventType.BUS_EVENT_TYPE_TRANSFER;
    case 41:
    case "BUS_EVENT_TYPE_VALIDATOR_RANKING":
      return BusEventType.BUS_EVENT_TYPE_VALIDATOR_RANKING;
    case 42:
    case "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT":
      return BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT;
    case 43:
    case "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD":
      return BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD;
    case 44:
    case "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED":
      return BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED;
    case 45:
    case "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED":
      return BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED;
    case 46:
    case "BUS_EVENT_TYPE_POSITION_STATE":
      return BusEventType.BUS_EVENT_TYPE_POSITION_STATE;
    case 47:
    case "BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION":
      return BusEventType.BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION;
    case 101:
    case "BUS_EVENT_TYPE_MARKET":
      return BusEventType.BUS_EVENT_TYPE_MARKET;
    case 201:
    case "BUS_EVENT_TYPE_TX_ERROR":
      return BusEventType.BUS_EVENT_TYPE_TX_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BusEventType.UNRECOGNIZED;
  }
}

export function busEventTypeToJSON(object: BusEventType): string {
  switch (object) {
    case BusEventType.BUS_EVENT_TYPE_UNSPECIFIED:
      return "BUS_EVENT_TYPE_UNSPECIFIED";
    case BusEventType.BUS_EVENT_TYPE_ALL:
      return "BUS_EVENT_TYPE_ALL";
    case BusEventType.BUS_EVENT_TYPE_TIME_UPDATE:
      return "BUS_EVENT_TYPE_TIME_UPDATE";
    case BusEventType.BUS_EVENT_TYPE_TRANSFER_RESPONSES:
      return "BUS_EVENT_TYPE_TRANSFER_RESPONSES";
    case BusEventType.BUS_EVENT_TYPE_POSITION_RESOLUTION:
      return "BUS_EVENT_TYPE_POSITION_RESOLUTION";
    case BusEventType.BUS_EVENT_TYPE_ORDER:
      return "BUS_EVENT_TYPE_ORDER";
    case BusEventType.BUS_EVENT_TYPE_ACCOUNT:
      return "BUS_EVENT_TYPE_ACCOUNT";
    case BusEventType.BUS_EVENT_TYPE_PARTY:
      return "BUS_EVENT_TYPE_PARTY";
    case BusEventType.BUS_EVENT_TYPE_TRADE:
      return "BUS_EVENT_TYPE_TRADE";
    case BusEventType.BUS_EVENT_TYPE_MARGIN_LEVELS:
      return "BUS_EVENT_TYPE_MARGIN_LEVELS";
    case BusEventType.BUS_EVENT_TYPE_PROPOSAL:
      return "BUS_EVENT_TYPE_PROPOSAL";
    case BusEventType.BUS_EVENT_TYPE_VOTE:
      return "BUS_EVENT_TYPE_VOTE";
    case BusEventType.BUS_EVENT_TYPE_MARKET_DATA:
      return "BUS_EVENT_TYPE_MARKET_DATA";
    case BusEventType.BUS_EVENT_TYPE_NODE_SIGNATURE:
      return "BUS_EVENT_TYPE_NODE_SIGNATURE";
    case BusEventType.BUS_EVENT_TYPE_LOSS_SOCIALIZATION:
      return "BUS_EVENT_TYPE_LOSS_SOCIALIZATION";
    case BusEventType.BUS_EVENT_TYPE_SETTLE_POSITION:
      return "BUS_EVENT_TYPE_SETTLE_POSITION";
    case BusEventType.BUS_EVENT_TYPE_SETTLE_DISTRESSED:
      return "BUS_EVENT_TYPE_SETTLE_DISTRESSED";
    case BusEventType.BUS_EVENT_TYPE_MARKET_CREATED:
      return "BUS_EVENT_TYPE_MARKET_CREATED";
    case BusEventType.BUS_EVENT_TYPE_ASSET:
      return "BUS_EVENT_TYPE_ASSET";
    case BusEventType.BUS_EVENT_TYPE_MARKET_TICK:
      return "BUS_EVENT_TYPE_MARKET_TICK";
    case BusEventType.BUS_EVENT_TYPE_WITHDRAWAL:
      return "BUS_EVENT_TYPE_WITHDRAWAL";
    case BusEventType.BUS_EVENT_TYPE_DEPOSIT:
      return "BUS_EVENT_TYPE_DEPOSIT";
    case BusEventType.BUS_EVENT_TYPE_AUCTION:
      return "BUS_EVENT_TYPE_AUCTION";
    case BusEventType.BUS_EVENT_TYPE_RISK_FACTOR:
      return "BUS_EVENT_TYPE_RISK_FACTOR";
    case BusEventType.BUS_EVENT_TYPE_NETWORK_PARAMETER:
      return "BUS_EVENT_TYPE_NETWORK_PARAMETER";
    case BusEventType.BUS_EVENT_TYPE_LIQUIDITY_PROVISION:
      return "BUS_EVENT_TYPE_LIQUIDITY_PROVISION";
    case BusEventType.BUS_EVENT_TYPE_MARKET_UPDATED:
      return "BUS_EVENT_TYPE_MARKET_UPDATED";
    case BusEventType.BUS_EVENT_TYPE_ORACLE_SPEC:
      return "BUS_EVENT_TYPE_ORACLE_SPEC";
    case BusEventType.BUS_EVENT_TYPE_ORACLE_DATA:
      return "BUS_EVENT_TYPE_ORACLE_DATA";
    case BusEventType.BUS_EVENT_TYPE_DELEGATION_BALANCE:
      return "BUS_EVENT_TYPE_DELEGATION_BALANCE";
    case BusEventType.BUS_EVENT_TYPE_VALIDATOR_SCORE:
      return "BUS_EVENT_TYPE_VALIDATOR_SCORE";
    case BusEventType.BUS_EVENT_TYPE_EPOCH_UPDATE:
      return "BUS_EVENT_TYPE_EPOCH_UPDATE";
    case BusEventType.BUS_EVENT_TYPE_VALIDATOR_UPDATE:
      return "BUS_EVENT_TYPE_VALIDATOR_UPDATE";
    case BusEventType.BUS_EVENT_TYPE_STAKE_LINKING:
      return "BUS_EVENT_TYPE_STAKE_LINKING";
    case BusEventType.BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT:
      return "BUS_EVENT_TYPE_REWARD_PAYOUT_EVENT";
    case BusEventType.BUS_EVENT_TYPE_CHECKPOINT:
      return "BUS_EVENT_TYPE_CHECKPOINT";
    case BusEventType.BUS_EVENT_TYPE_STREAM_START:
      return "BUS_EVENT_TYPE_STREAM_START";
    case BusEventType.BUS_EVENT_TYPE_KEY_ROTATION:
      return "BUS_EVENT_TYPE_KEY_ROTATION";
    case BusEventType.BUS_EVENT_TYPE_STATE_VAR:
      return "BUS_EVENT_TYPE_STATE_VAR";
    case BusEventType.BUS_EVENT_TYPE_NETWORK_LIMITS:
      return "BUS_EVENT_TYPE_NETWORK_LIMITS";
    case BusEventType.BUS_EVENT_TYPE_TRANSFER:
      return "BUS_EVENT_TYPE_TRANSFER";
    case BusEventType.BUS_EVENT_TYPE_VALIDATOR_RANKING:
      return "BUS_EVENT_TYPE_VALIDATOR_RANKING";
    case BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT:
      return "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_EVENT";
    case BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD:
      return "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SET_THRESHOLD";
    case BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED:
      return "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_ADDED";
    case BusEventType.BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED:
      return "BUS_EVENT_TYPE_ERC20_MULTI_SIG_SIGNER_REMOVED";
    case BusEventType.BUS_EVENT_TYPE_POSITION_STATE:
      return "BUS_EVENT_TYPE_POSITION_STATE";
    case BusEventType.BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION:
      return "BUS_EVENT_TYPE_ETHEREUM_KEY_ROTATION";
    case BusEventType.BUS_EVENT_TYPE_MARKET:
      return "BUS_EVENT_TYPE_MARKET";
    case BusEventType.BUS_EVENT_TYPE_TX_ERROR:
      return "BUS_EVENT_TYPE_TX_ERROR";
    default:
      return "UNKNOWN";
  }
}

export interface ERC20MultiSigSignerAdded {
  /** The identifier of the signature bundle */
  signatureId: string;
  /** The vega node ID of the node to be added */
  validatorId: string;
  /** the time at which this happened */
  timestamp: string;
  /** The ethereum address of the new signer */
  newSigner: string;
  /** The address of the submitter of the transaction */
  submitter: string;
  /** The nonce used. */
  nonce: string;
}

export interface ERC20MulistSigSignerRemovedSubmitter {
  /** The ID of this signature bundle */
  signatureId: string;
  /** The address of the submitter of the transaction */
  submitter: string;
}

export interface ERC20MultiSigSignerRemoved {
  /**
   * A list containing all the IDs of bundle generated
   * There should be one bundle generated for every validators
   * in the validator set
   */
  signatureSubmitters: ERC20MulistSigSignerRemovedSubmitter[];
  /** The vega node ID of the node which is to be removed */
  validatorId: string;
  /** the time at which this happened */
  timestamp: string;
  /** The ethereum address of the signer to be removed */
  oldSigner: string;
  /** The nonce used. */
  nonce: string;
}

export interface Transfer {
  id: string;
  from: string;
  fromAccountType: AccountType;
  to: string;
  toAccountType: AccountType;
  asset: string;
  amount: string;
  reference: string;
  status: Transfer_Status;
  timestamp: string;
  oneOff: OneOffTransfer | undefined;
  recurring: RecurringTransfer | undefined;
}

export enum Transfer_Status {
  /** STATUS_UNSPECIFIED - Default value */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_PENDING - Indicate a transfer still being processed */
  STATUS_PENDING = 1,
  /** STATUS_DONE - Indicate of an transfer accepted by the vega network */
  STATUS_DONE = 2,
  /** STATUS_REJECTED - Indicate of an transfer rejected by the vega network */
  STATUS_REJECTED = 3,
  /**
   * STATUS_STOPPED - Indicate of a transfer stopped by the vega network
   * e.g: no funds left to cover the transfer
   */
  STATUS_STOPPED = 4,
  /** STATUS_CANCELLED - Indicate of a transfer cancel by the user */
  STATUS_CANCELLED = 5,
  UNRECOGNIZED = -1,
}

export function transfer_StatusFromJSON(object: any): Transfer_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Transfer_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_PENDING":
      return Transfer_Status.STATUS_PENDING;
    case 2:
    case "STATUS_DONE":
      return Transfer_Status.STATUS_DONE;
    case 3:
    case "STATUS_REJECTED":
      return Transfer_Status.STATUS_REJECTED;
    case 4:
    case "STATUS_STOPPED":
      return Transfer_Status.STATUS_STOPPED;
    case 5:
    case "STATUS_CANCELLED":
      return Transfer_Status.STATUS_CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Transfer_Status.UNRECOGNIZED;
  }
}

export function transfer_StatusToJSON(object: Transfer_Status): string {
  switch (object) {
    case Transfer_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Transfer_Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case Transfer_Status.STATUS_DONE:
      return "STATUS_DONE";
    case Transfer_Status.STATUS_REJECTED:
      return "STATUS_REJECTED";
    case Transfer_Status.STATUS_STOPPED:
      return "STATUS_STOPPED";
    case Transfer_Status.STATUS_CANCELLED:
      return "STATUS_CANCELLED";
    default:
      return "UNKNOWN";
  }
}

export interface OneOffTransfer {
  deliverOn: string;
}

export interface RecurringTransfer {
  startEpoch: string;
  endEpoch: Uint64Value | undefined;
  factor: string;
}

/**
 * StakeLinking - an event notifying of stake being deposited or removed for a given party
 * These events are emitted for every Staking deposit or removed accepted by the network
 */
export interface StakeLinking {
  /** The internal ID for this staking event */
  id: string;
  /** The type of event */
  type: StakeLinking_Type;
  /** The timestamps at which the event was emitted by ethereum */
  ts: string;
  /** The party to whom the event is directed at. */
  party: string;
  /** The amount of stake deposited or removed */
  amount: string;
  /** The status of the event */
  status: StakeLinking_Status;
  /** The time at which the vega network finalized the state of the event */
  finalizedAt: string;
  /** The hash of the transaction from which the events happen */
  txHash: string;
  /** The block when the event happened */
  blockHeight: string;
  /** The block time */
  blockTime: string;
  /** The log index */
  logIndex: string;
  /** the ethereum address from which the stake link was iniated */
  ethereumAddress: string;
}

export enum StakeLinking_Type {
  /** TYPE_UNSPECIFIED - Default value */
  TYPE_UNSPECIFIED = 0,
  /** TYPE_LINK - Indicate of a stake deposit instruction */
  TYPE_LINK = 1,
  /** TYPE_UNLINK - Indicate of a stake remove instruction */
  TYPE_UNLINK = 2,
  UNRECOGNIZED = -1,
}

export function stakeLinking_TypeFromJSON(object: any): StakeLinking_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return StakeLinking_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_LINK":
      return StakeLinking_Type.TYPE_LINK;
    case 2:
    case "TYPE_UNLINK":
      return StakeLinking_Type.TYPE_UNLINK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakeLinking_Type.UNRECOGNIZED;
  }
}

export function stakeLinking_TypeToJSON(object: StakeLinking_Type): string {
  switch (object) {
    case StakeLinking_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case StakeLinking_Type.TYPE_LINK:
      return "TYPE_LINK";
    case StakeLinking_Type.TYPE_UNLINK:
      return "TYPE_UNLINK";
    default:
      return "UNKNOWN";
  }
}

export enum StakeLinking_Status {
  /** STATUS_UNSPECIFIED - Default value */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_PENDING - Indicate an event waiting for confirmation from the vega network */
  STATUS_PENDING = 1,
  /** STATUS_ACCEPTED - Indicate of an event accepted by the vega network */
  STATUS_ACCEPTED = 2,
  /** STATUS_REJECTED - Indaicate of an event rejected by the vega network */
  STATUS_REJECTED = 3,
  UNRECOGNIZED = -1,
}

export function stakeLinking_StatusFromJSON(object: any): StakeLinking_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return StakeLinking_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_PENDING":
      return StakeLinking_Status.STATUS_PENDING;
    case 2:
    case "STATUS_ACCEPTED":
      return StakeLinking_Status.STATUS_ACCEPTED;
    case 3:
    case "STATUS_REJECTED":
      return StakeLinking_Status.STATUS_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakeLinking_Status.UNRECOGNIZED;
  }
}

export function stakeLinking_StatusToJSON(object: StakeLinking_Status): string {
  switch (object) {
    case StakeLinking_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case StakeLinking_Status.STATUS_PENDING:
      return "STATUS_PENDING";
    case StakeLinking_Status.STATUS_ACCEPTED:
      return "STATUS_ACCEPTED";
    case StakeLinking_Status.STATUS_REJECTED:
      return "STATUS_REJECTED";
    default:
      return "UNKNOWN";
  }
}

export interface ERC20MultiSigSignerEvent {
  id: string;
  type: ERC20MultiSigSignerEvent_Type;
  signer: string;
  nonce: string;
  blockTime: string;
  txHash: string;
  logIndex: string;
  blockNumber: string;
}

export enum ERC20MultiSigSignerEvent_Type {
  TYPE_UNSPECIFIED = 0,
  TYPE_ADDED = 1,
  TYPE_REMOVED = 2,
  UNRECOGNIZED = -1,
}

export function eRC20MultiSigSignerEvent_TypeFromJSON(
  object: any
): ERC20MultiSigSignerEvent_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return ERC20MultiSigSignerEvent_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_ADDED":
      return ERC20MultiSigSignerEvent_Type.TYPE_ADDED;
    case 2:
    case "TYPE_REMOVED":
      return ERC20MultiSigSignerEvent_Type.TYPE_REMOVED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ERC20MultiSigSignerEvent_Type.UNRECOGNIZED;
  }
}

export function eRC20MultiSigSignerEvent_TypeToJSON(
  object: ERC20MultiSigSignerEvent_Type
): string {
  switch (object) {
    case ERC20MultiSigSignerEvent_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case ERC20MultiSigSignerEvent_Type.TYPE_ADDED:
      return "TYPE_ADDED";
    case ERC20MultiSigSignerEvent_Type.TYPE_REMOVED:
      return "TYPE_REMOVED";
    default:
      return "UNKNOWN";
  }
}

export interface ERC20MultiSigThresholdSetEvent {
  id: string;
  newThreshold: number;
  nonce: string;
  blockTime: string;
  txHash: string;
  logIndex: string;
  blockNumber: string;
}

export interface CheckpointEvent {
  hash: string;
  blockHash: string;
  blockHeight: string;
}

export interface StreamStartEvent {
  chainId: string;
}

export interface RewardPayoutEvent {
  party: string;
  epochSeq: string;
  asset: string;
  amount: string;
  percentOfTotalReward: string;
  timestamp: string;
}

/** ValidatorScoreEvent is the score a validator gets for a given epoch */
export interface ValidatorScoreEvent {
  nodeId: string;
  epochSeq: string;
  validatorScore: string;
  normalisedScore: string;
  validatorPerformance: string;
  rawValidatorScore: string;
  validatorStatus: string;
  multisigScore: string;
}

/** DelegationBalanceEvent - updates on the delegation balance of a party to a node in the current epoch in effect */
export interface DelegationBalanceEvent {
  party: string;
  nodeId: string;
  amount: string;
  epochSeq: string;
}

/**
 * MarketEvent - the common denominator for all market events
 * interface has a method to return a string for logging
 */
export interface MarketEvent {
  /** Market identifier for the event */
  marketId: string;
  /** Payload is a unique information string */
  payload: string;
}

export interface TxErrorEvent {
  /** Unique party identifier for the related party */
  partyId: string;
  /** An error message describing what went wrong */
  errMsg: string;
  orderSubmission: OrderSubmission | undefined;
  orderAmendment: OrderAmendment | undefined;
  orderCancellation: OrderCancellation | undefined;
  proposal: ProposalSubmission | undefined;
  voteSubmission: VoteSubmission | undefined;
  liquidityProvisionSubmission: LiquidityProvisionSubmission | undefined;
  withdrawSubmission: WithdrawSubmission | undefined;
  delegateSubmission: DelegateSubmission | undefined;
  undelegateSubmission: UndelegateSubmission | undefined;
  restoreSnapshot: RestoreSnapshot | undefined;
  liquidityProvisionCancellation: LiquidityProvisionCancellation | undefined;
  liquidityProvisionAmendment: LiquidityProvisionAmendment | undefined;
  transfer: Transfer1 | undefined;
  cancelTransfer: CancelTransfer | undefined;
  announceNode: AnnounceNode | undefined;
  oracleDataSubmission: OracleDataSubmission | undefined;
}

/** A time update event contains the latest time update from Vega blockchain and indicates the start of a new block */
export interface TimeUpdate {
  /** Timestamp containing latest update from Vega blockchain aka Vega-time */
  timestamp: string;
}

/** Epoch details */
export interface EpochEvent {
  /** Sequence number that increases by one each epoch */
  seq: string;
  /** Action tells us what action is taking place */
  action: EpochAction;
  /** What time did this epoch start */
  startTime: string;
  /** What time should this epoch end */
  expireTime: string;
  /** What time did it actually end */
  endTime: string;
}

/** A transfer responses event contains a collection of transfer information */
export interface TransferResponses {
  /** One or more entries containing internal transfer information */
  responses: TransferResponse[];
}

/** A position resolution event contains information on distressed trades */
export interface PositionResolution {
  /** Market identifier for the event */
  marketId: string;
  /** Number of distressed traders */
  distressed: string;
  /** Number of close outs */
  closed: string;
  /** Mark price as a string representing a scaled price */
  markPrice: string;
}

/** A loss socialization event contains details on the amount of wins unable to be distributed */
export interface LossSocialization {
  /** Market identifier for the event */
  marketId: string;
  /** Party identifier (public key) for the event */
  partyId: string;
  /** Amount distributed */
  amount: string;
}

/** A trade settlement is part of the settle position event */
export interface TradeSettlement {
  /** Size of trade settlement */
  size: string;
  /** Price of settlement as string */
  price: string;
}

/** A settle position event contains position settlement information for a party */
export interface SettlePosition {
  /** Market identifier for the event */
  marketId: string;
  /** Party identifier (public key) for the event */
  partyId: string;
  /** Price of settlement as a string */
  price: string;
  /** A collection of 1 or more trade settlements */
  tradeSettlements: TradeSettlement[];
  /** Position factor - 10 ^ number of position decimal places */
  positionFactor: string;
}

/** A position state event contains the current position state for a single party in a single market */
export interface PositionStateEvent {
  /** Party identifier for this position update */
  partyId: string;
  /** Market identifier for this position update */
  marketId: string;
  /** Current position */
  size: string;
  /** Potential orders */
  potentialBuys: string;
  potentialSells: string;
  /** Volume weighted prices */
  vwBuyPrice: string;
  vwSellPrice: string;
}

/** A settle distressed event contains information on distressed trading parties who are closed out */
export interface SettleDistressed {
  /** Market identifier for the event */
  marketId: string;
  /** Party identifier (public key) for the event */
  partyId: string;
  /**
   * Margin value as an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  margin: string;
  /**
   * Price as an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  price: string;
}

/** A market ticket event contains the time value for when a particular market was last processed on Vega */
export interface MarketTick {
  /** Market identifier for the event */
  id: string;
  /** Timestamp containing latest update from Vega blockchain aka Vega-time */
  time: string;
}

/** An auction event indicating a change in auction state, for example starting or ending an auction */
export interface AuctionEvent {
  /** Market identifier for the event */
  marketId: string;
  /** True if the event indicates an auction opening and False otherwise */
  openingAuction: boolean;
  /** True if the event indicates leaving auction mode and False otherwise */
  leave: boolean;
  /** Timestamp containing the start time for an auction */
  start: string;
  /** Timestamp containing the end time for an auction */
  end: string;
  /** the reason this market is/was in auction */
  trigger: AuctionTrigger;
  /**
   * If an auction was ongoing, but was extended for whatever reason, this field will
   * be set to the trigger type indicating which component extended the auction
   */
  extensionTrigger: AuctionTrigger;
}

/** A validator update event contains information about validator node */
export interface ValidatorUpdate {
  /** Node id of the node */
  nodeId: string;
  /** Vega public key of validator node */
  vegaPubKey: string;
  /** Ethereum public key of validator node */
  ethereumAddress: string;
  /** Public key of Tendermint */
  tmPubKey: string;
  /** URL with more info on the node */
  infoUrl: string;
  /** Country code (ISO 3166-1 alpha-2) for the location of the node */
  country: string;
  /** Name of the validator */
  name: string;
  /** AvatarURL of the validator */
  avatarUrl: string;
  /** Vega public key derivation index */
  vegaPubKeyIndex: number;
  /** Flag indicating if the validator has been added to or removed from vega */
  added: boolean;
  /** The epoch from which the validator was added */
  fromEpoch: string;
}

/** An event that explains the status of the validator for the coming epoch */
export interface ValidatorRankingEvent {
  nodeId: string;
  /** stake based score - no anti-whaling */
  stakeScore: string;
  /** performance base score */
  performanceScore: string;
  /** final score */
  rankingScore: string;
  /** the status of the validator in the previous epoch */
  previousStatus: string;
  /** the status of the validator in the next epoch */
  nextStatus: string;
  /** the epoch seq for which the status is valid */
  epochSeq: string;
  /** tendermint voting power of the validator */
  tmVotingPower: number;
}

/** A key rotation events contains information about Vega key rotation */
export interface KeyRotation {
  /** Node id of the node */
  nodeId: string;
  /** Old Vega public key of validator node */
  oldPubKey: string;
  /** New Vega public key of validator node */
  newPubKey: string;
  /** Height of the block where key rotation took effect */
  blockHeight: string;
}

/** An Ethereum key rotation events contains information about Ethereum key rotation */
export interface EthereumKeyRotation {
  /** Node id of the node */
  nodeId: string;
  /** Old Ethereum address of validator node */
  oldAddress: string;
  /** New Ethereum address of validator node */
  newAddress: string;
  /** Height of the block where key rotation took effect */
  blockHeight: string;
}

/** StateVarEvent - updates on state changes in state variable consensus */
export interface StateVar {
  id: string;
  eventId: string;
  state: string;
}

/** A bus event is a container for event bus events emitted by Vega */
export interface BusEvent {
  /** A unique event identifier for the message */
  id: string;
  /** The batch (or block) of transactions that the events relate to */
  block: string;
  /** The type of bus event (one of the list below) */
  type: BusEventType;
  /** Time update events - See [TimeUpdate](#vega.TimeUpdate) */
  timeUpdate: TimeUpdate | undefined;
  /** Transfer responses update events - See [TransferResponses](#vega.TransferResponses) */
  transferResponses: TransferResponses | undefined;
  /** Position resolution events - See [PositionResolution](#vega.PositionResolution) */
  positionResolution: PositionResolution | undefined;
  /** Order events */
  order: Order | undefined;
  /** Account events */
  account: Account | undefined;
  /** Party events */
  party: Party | undefined;
  /** Trade events */
  trade: Trade | undefined;
  /** Margin level update events */
  marginLevels: MarginLevels | undefined;
  /** Proposal events (for governance) */
  proposal: Proposal | undefined;
  /** Vote events (for governance) */
  vote: Vote | undefined;
  /** Market data events */
  marketData: MarketData | undefined;
  /** Node signature events */
  nodeSignature: NodeSignature | undefined;
  /** Loss socialization events - See [LossSocialization](#vega.LossSocialization) */
  lossSocialization: LossSocialization | undefined;
  /** Position settlement events - See [SettlePosition](#vega.SettlePosition) */
  settlePosition: SettlePosition | undefined;
  /** Position distressed events - See [SettleDistressed](#vega.SettleDistressed) */
  settleDistressed: SettleDistressed | undefined;
  /** Market created events */
  marketCreated: Market | undefined;
  /** Asset events */
  asset: Asset | undefined;
  /** Market tick events - See [MarketTick](#vega.MarketTick) */
  marketTick: MarketTick | undefined;
  /** Withdrawal events */
  withdrawal: Withdrawal | undefined;
  /** Deposit events */
  deposit: Deposit | undefined;
  /** Auction events - See [AuctionEvent](#vega.AuctionEvent) */
  auction: AuctionEvent | undefined;
  /** Risk factor events */
  riskFactor: RiskFactor | undefined;
  /** Network parameter events */
  networkParameter: NetworkParameter | undefined;
  /** LiquidityProvision  events */
  liquidityProvision: LiquidityProvision | undefined;
  /** Market created events */
  marketUpdated: Market | undefined;
  /** OracleSpec events */
  oracleSpec: OracleSpec | undefined;
  /** OracleData events */
  oracleData: OracleData | undefined;
  /** Delegation balance events */
  delegationBalance: DelegationBalanceEvent | undefined;
  /** Validator score calculated */
  validatorScore: ValidatorScoreEvent | undefined;
  /** Epoch update events - See [Epoch](#vega.Epoch) */
  epochEvent: EpochEvent | undefined;
  /** Validator update events */
  validatorUpdate: ValidatorUpdate | undefined;
  /** Staking event */
  stakeLinking: StakeLinking | undefined;
  /** Reward payout event */
  rewardPayout: RewardPayoutEvent | undefined;
  /** Checkpoint was created */
  checkpoint: CheckpointEvent | undefined;
  /** Key rotation took place */
  keyRotation: KeyRotation | undefined;
  /** State variable consensus state transition update */
  stateVar: StateVar | undefined;
  /** Network limits events */
  networkLimits: NetworkLimits | undefined;
  /** Transfer event */
  transfer: Transfer | undefined;
  /** Ranking event */
  rankingEvent: ValidatorRankingEvent | undefined;
  /** ERC20 multi sig signer event */
  erc20MultisigSignerEvent: ERC20MultiSigSignerEvent | undefined;
  /** ERC20 multi sig set threshold event */
  erc20MultisigSetThresholdEvent: ERC20MultiSigThresholdSetEvent | undefined;
  /** ERC20 multi sig signer added */
  erc20MultisigSignerAdded: ERC20MultiSigSignerAdded | undefined;
  /** ERC20 multi sig signer removed */
  erc20MultisigSignerRemoved: ERC20MultiSigSignerRemoved | undefined;
  /** Position status for a party in a market */
  positionStateEvent: PositionStateEvent | undefined;
  /** Ethereum key rotation took place */
  ethereumKeyRotation: EthereumKeyRotation | undefined;
  /** Market tick events - See [MarketEvent](#vega.MarketEvent) */
  market: MarketEvent | undefined;
  /** Transaction error events, not included in the ALL event type */
  txErrEvent: TxErrorEvent | undefined;
  /** Version of bus event */
  version: number;
  chainId: string;
  txHash: string;
}

function createBaseERC20MultiSigSignerAdded(): ERC20MultiSigSignerAdded {
  return {
    signatureId: "",
    validatorId: "",
    timestamp: "0",
    newSigner: "",
    submitter: "",
    nonce: "",
  };
}

export const ERC20MultiSigSignerAdded = {
  encode(
    message: ERC20MultiSigSignerAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signatureId !== "") {
      writer.uint32(10).string(message.signatureId);
    }
    if (message.validatorId !== "") {
      writer.uint32(18).string(message.validatorId);
    }
    if (message.timestamp !== "0") {
      writer.uint32(24).int64(message.timestamp);
    }
    if (message.newSigner !== "") {
      writer.uint32(34).string(message.newSigner);
    }
    if (message.submitter !== "") {
      writer.uint32(42).string(message.submitter);
    }
    if (message.nonce !== "") {
      writer.uint32(50).string(message.nonce);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MultiSigSignerAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigSignerAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureId = reader.string();
          break;
        case 2:
          message.validatorId = reader.string();
          break;
        case 3:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 4:
          message.newSigner = reader.string();
          break;
        case 5:
          message.submitter = reader.string();
          break;
        case 6:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MultiSigSignerAdded {
    return {
      signatureId: isSet(object.signatureId) ? String(object.signatureId) : "",
      validatorId: isSet(object.validatorId) ? String(object.validatorId) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      newSigner: isSet(object.newSigner) ? String(object.newSigner) : "",
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: ERC20MultiSigSignerAdded): unknown {
    const obj: any = {};
    message.signatureId !== undefined &&
      (obj.signatureId = message.signatureId);
    message.validatorId !== undefined &&
      (obj.validatorId = message.validatorId);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.newSigner !== undefined && (obj.newSigner = message.newSigner);
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigSignerAdded>, I>>(
    object: I
  ): ERC20MultiSigSignerAdded {
    const message = createBaseERC20MultiSigSignerAdded();
    message.signatureId = object.signatureId ?? "";
    message.validatorId = object.validatorId ?? "";
    message.timestamp = object.timestamp ?? "0";
    message.newSigner = object.newSigner ?? "";
    message.submitter = object.submitter ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseERC20MulistSigSignerRemovedSubmitter(): ERC20MulistSigSignerRemovedSubmitter {
  return { signatureId: "", submitter: "" };
}

export const ERC20MulistSigSignerRemovedSubmitter = {
  encode(
    message: ERC20MulistSigSignerRemovedSubmitter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.signatureId !== "") {
      writer.uint32(10).string(message.signatureId);
    }
    if (message.submitter !== "") {
      writer.uint32(18).string(message.submitter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MulistSigSignerRemovedSubmitter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MulistSigSignerRemovedSubmitter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureId = reader.string();
          break;
        case 2:
          message.submitter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MulistSigSignerRemovedSubmitter {
    return {
      signatureId: isSet(object.signatureId) ? String(object.signatureId) : "",
      submitter: isSet(object.submitter) ? String(object.submitter) : "",
    };
  },

  toJSON(message: ERC20MulistSigSignerRemovedSubmitter): unknown {
    const obj: any = {};
    message.signatureId !== undefined &&
      (obj.signatureId = message.signatureId);
    message.submitter !== undefined && (obj.submitter = message.submitter);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ERC20MulistSigSignerRemovedSubmitter>, I>
  >(object: I): ERC20MulistSigSignerRemovedSubmitter {
    const message = createBaseERC20MulistSigSignerRemovedSubmitter();
    message.signatureId = object.signatureId ?? "";
    message.submitter = object.submitter ?? "";
    return message;
  },
};

function createBaseERC20MultiSigSignerRemoved(): ERC20MultiSigSignerRemoved {
  return {
    signatureSubmitters: [],
    validatorId: "",
    timestamp: "0",
    oldSigner: "",
    nonce: "",
  };
}

export const ERC20MultiSigSignerRemoved = {
  encode(
    message: ERC20MultiSigSignerRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.signatureSubmitters) {
      ERC20MulistSigSignerRemovedSubmitter.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.validatorId !== "") {
      writer.uint32(18).string(message.validatorId);
    }
    if (message.timestamp !== "0") {
      writer.uint32(24).int64(message.timestamp);
    }
    if (message.oldSigner !== "") {
      writer.uint32(34).string(message.oldSigner);
    }
    if (message.nonce !== "") {
      writer.uint32(42).string(message.nonce);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MultiSigSignerRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigSignerRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureSubmitters.push(
            ERC20MulistSigSignerRemovedSubmitter.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.validatorId = reader.string();
          break;
        case 3:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 4:
          message.oldSigner = reader.string();
          break;
        case 5:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MultiSigSignerRemoved {
    return {
      signatureSubmitters: Array.isArray(object?.signatureSubmitters)
        ? object.signatureSubmitters.map((e: any) =>
            ERC20MulistSigSignerRemovedSubmitter.fromJSON(e)
          )
        : [],
      validatorId: isSet(object.validatorId) ? String(object.validatorId) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      oldSigner: isSet(object.oldSigner) ? String(object.oldSigner) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
    };
  },

  toJSON(message: ERC20MultiSigSignerRemoved): unknown {
    const obj: any = {};
    if (message.signatureSubmitters) {
      obj.signatureSubmitters = message.signatureSubmitters.map((e) =>
        e ? ERC20MulistSigSignerRemovedSubmitter.toJSON(e) : undefined
      );
    } else {
      obj.signatureSubmitters = [];
    }
    message.validatorId !== undefined &&
      (obj.validatorId = message.validatorId);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.oldSigner !== undefined && (obj.oldSigner = message.oldSigner);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigSignerRemoved>, I>>(
    object: I
  ): ERC20MultiSigSignerRemoved {
    const message = createBaseERC20MultiSigSignerRemoved();
    message.signatureSubmitters =
      object.signatureSubmitters?.map((e) =>
        ERC20MulistSigSignerRemovedSubmitter.fromPartial(e)
      ) || [];
    message.validatorId = object.validatorId ?? "";
    message.timestamp = object.timestamp ?? "0";
    message.oldSigner = object.oldSigner ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};

function createBaseTransfer(): Transfer {
  return {
    id: "",
    from: "",
    fromAccountType: 0,
    to: "",
    toAccountType: 0,
    asset: "",
    amount: "",
    reference: "",
    status: 0,
    timestamp: "0",
    oneOff: undefined,
    recurring: undefined,
  };
}

export const Transfer = {
  encode(
    message: Transfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.fromAccountType !== 0) {
      writer.uint32(24).int32(message.fromAccountType);
    }
    if (message.to !== "") {
      writer.uint32(34).string(message.to);
    }
    if (message.toAccountType !== 0) {
      writer.uint32(40).int32(message.toAccountType);
    }
    if (message.asset !== "") {
      writer.uint32(50).string(message.asset);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.reference !== "") {
      writer.uint32(66).string(message.reference);
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    if (message.timestamp !== "0") {
      writer.uint32(80).int64(message.timestamp);
    }
    if (message.oneOff !== undefined) {
      OneOffTransfer.encode(message.oneOff, writer.uint32(810).fork()).ldelim();
    }
    if (message.recurring !== undefined) {
      RecurringTransfer.encode(
        message.recurring,
        writer.uint32(818).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.fromAccountType = reader.int32() as any;
          break;
        case 4:
          message.to = reader.string();
          break;
        case 5:
          message.toAccountType = reader.int32() as any;
          break;
        case 6:
          message.asset = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.reference = reader.string();
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        case 10:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 101:
          message.oneOff = OneOffTransfer.decode(reader, reader.uint32());
          break;
        case 102:
          message.recurring = RecurringTransfer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transfer {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      from: isSet(object.from) ? String(object.from) : "",
      fromAccountType: isSet(object.fromAccountType)
        ? accountTypeFromJSON(object.fromAccountType)
        : 0,
      to: isSet(object.to) ? String(object.to) : "",
      toAccountType: isSet(object.toAccountType)
        ? accountTypeFromJSON(object.toAccountType)
        : 0,
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      reference: isSet(object.reference) ? String(object.reference) : "",
      status: isSet(object.status) ? transfer_StatusFromJSON(object.status) : 0,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      oneOff: isSet(object.oneOff)
        ? OneOffTransfer.fromJSON(object.oneOff)
        : undefined,
      recurring: isSet(object.recurring)
        ? RecurringTransfer.fromJSON(object.recurring)
        : undefined,
    };
  },

  toJSON(message: Transfer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.from !== undefined && (obj.from = message.from);
    message.fromAccountType !== undefined &&
      (obj.fromAccountType = accountTypeToJSON(message.fromAccountType));
    message.to !== undefined && (obj.to = message.to);
    message.toAccountType !== undefined &&
      (obj.toAccountType = accountTypeToJSON(message.toAccountType));
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.reference !== undefined && (obj.reference = message.reference);
    message.status !== undefined &&
      (obj.status = transfer_StatusToJSON(message.status));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.oneOff !== undefined &&
      (obj.oneOff = message.oneOff
        ? OneOffTransfer.toJSON(message.oneOff)
        : undefined);
    message.recurring !== undefined &&
      (obj.recurring = message.recurring
        ? RecurringTransfer.toJSON(message.recurring)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
    const message = createBaseTransfer();
    message.id = object.id ?? "";
    message.from = object.from ?? "";
    message.fromAccountType = object.fromAccountType ?? 0;
    message.to = object.to ?? "";
    message.toAccountType = object.toAccountType ?? 0;
    message.asset = object.asset ?? "";
    message.amount = object.amount ?? "";
    message.reference = object.reference ?? "";
    message.status = object.status ?? 0;
    message.timestamp = object.timestamp ?? "0";
    message.oneOff =
      object.oneOff !== undefined && object.oneOff !== null
        ? OneOffTransfer.fromPartial(object.oneOff)
        : undefined;
    message.recurring =
      object.recurring !== undefined && object.recurring !== null
        ? RecurringTransfer.fromPartial(object.recurring)
        : undefined;
    return message;
  },
};

function createBaseOneOffTransfer(): OneOffTransfer {
  return { deliverOn: "0" };
}

export const OneOffTransfer = {
  encode(
    message: OneOffTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deliverOn !== "0") {
      writer.uint32(8).int64(message.deliverOn);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneOffTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneOffTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deliverOn = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OneOffTransfer {
    return {
      deliverOn: isSet(object.deliverOn) ? String(object.deliverOn) : "0",
    };
  },

  toJSON(message: OneOffTransfer): unknown {
    const obj: any = {};
    message.deliverOn !== undefined && (obj.deliverOn = message.deliverOn);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OneOffTransfer>, I>>(
    object: I
  ): OneOffTransfer {
    const message = createBaseOneOffTransfer();
    message.deliverOn = object.deliverOn ?? "0";
    return message;
  },
};

function createBaseRecurringTransfer(): RecurringTransfer {
  return { startEpoch: "0", endEpoch: undefined, factor: "" };
}

export const RecurringTransfer = {
  encode(
    message: RecurringTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startEpoch !== "0") {
      writer.uint32(8).uint64(message.startEpoch);
    }
    if (message.endEpoch !== undefined) {
      Uint64Value.encode(message.endEpoch, writer.uint32(18).fork()).ldelim();
    }
    if (message.factor !== "") {
      writer.uint32(26).string(message.factor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecurringTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecurringTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startEpoch = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.endEpoch = Uint64Value.decode(reader, reader.uint32());
          break;
        case 3:
          message.factor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecurringTransfer {
    return {
      startEpoch: isSet(object.startEpoch) ? String(object.startEpoch) : "0",
      endEpoch: isSet(object.endEpoch)
        ? Uint64Value.fromJSON(object.endEpoch)
        : undefined,
      factor: isSet(object.factor) ? String(object.factor) : "",
    };
  },

  toJSON(message: RecurringTransfer): unknown {
    const obj: any = {};
    message.startEpoch !== undefined && (obj.startEpoch = message.startEpoch);
    message.endEpoch !== undefined &&
      (obj.endEpoch = message.endEpoch
        ? Uint64Value.toJSON(message.endEpoch)
        : undefined);
    message.factor !== undefined && (obj.factor = message.factor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecurringTransfer>, I>>(
    object: I
  ): RecurringTransfer {
    const message = createBaseRecurringTransfer();
    message.startEpoch = object.startEpoch ?? "0";
    message.endEpoch =
      object.endEpoch !== undefined && object.endEpoch !== null
        ? Uint64Value.fromPartial(object.endEpoch)
        : undefined;
    message.factor = object.factor ?? "";
    return message;
  },
};

function createBaseStakeLinking(): StakeLinking {
  return {
    id: "",
    type: 0,
    ts: "0",
    party: "",
    amount: "",
    status: 0,
    finalizedAt: "0",
    txHash: "",
    blockHeight: "0",
    blockTime: "0",
    logIndex: "0",
    ethereumAddress: "",
  };
}

export const StakeLinking = {
  encode(
    message: StakeLinking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.ts !== "0") {
      writer.uint32(24).int64(message.ts);
    }
    if (message.party !== "") {
      writer.uint32(34).string(message.party);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.finalizedAt !== "0") {
      writer.uint32(56).int64(message.finalizedAt);
    }
    if (message.txHash !== "") {
      writer.uint32(66).string(message.txHash);
    }
    if (message.blockHeight !== "0") {
      writer.uint32(72).uint64(message.blockHeight);
    }
    if (message.blockTime !== "0") {
      writer.uint32(80).int64(message.blockTime);
    }
    if (message.logIndex !== "0") {
      writer.uint32(88).uint64(message.logIndex);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(98).string(message.ethereumAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeLinking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeLinking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.ts = longToString(reader.int64() as Long);
          break;
        case 4:
          message.party = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.finalizedAt = longToString(reader.int64() as Long);
          break;
        case 8:
          message.txHash = reader.string();
          break;
        case 9:
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        case 11:
          message.logIndex = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.ethereumAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeLinking {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? stakeLinking_TypeFromJSON(object.type) : 0,
      ts: isSet(object.ts) ? String(object.ts) : "0",
      party: isSet(object.party) ? String(object.party) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      status: isSet(object.status)
        ? stakeLinking_StatusFromJSON(object.status)
        : 0,
      finalizedAt: isSet(object.finalizedAt) ? String(object.finalizedAt) : "0",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
      logIndex: isSet(object.logIndex) ? String(object.logIndex) : "0",
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
    };
  },

  toJSON(message: StakeLinking): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined &&
      (obj.type = stakeLinking_TypeToJSON(message.type));
    message.ts !== undefined && (obj.ts = message.ts);
    message.party !== undefined && (obj.party = message.party);
    message.amount !== undefined && (obj.amount = message.amount);
    message.status !== undefined &&
      (obj.status = stakeLinking_StatusToJSON(message.status));
    message.finalizedAt !== undefined &&
      (obj.finalizedAt = message.finalizedAt);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    message.logIndex !== undefined && (obj.logIndex = message.logIndex);
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeLinking>, I>>(
    object: I
  ): StakeLinking {
    const message = createBaseStakeLinking();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.ts = object.ts ?? "0";
    message.party = object.party ?? "";
    message.amount = object.amount ?? "";
    message.status = object.status ?? 0;
    message.finalizedAt = object.finalizedAt ?? "0";
    message.txHash = object.txHash ?? "";
    message.blockHeight = object.blockHeight ?? "0";
    message.blockTime = object.blockTime ?? "0";
    message.logIndex = object.logIndex ?? "0";
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
};

function createBaseERC20MultiSigSignerEvent(): ERC20MultiSigSignerEvent {
  return {
    id: "",
    type: 0,
    signer: "",
    nonce: "",
    blockTime: "0",
    txHash: "",
    logIndex: "0",
    blockNumber: "0",
  };
}

export const ERC20MultiSigSignerEvent = {
  encode(
    message: ERC20MultiSigSignerEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    if (message.blockTime !== "0") {
      writer.uint32(40).int64(message.blockTime);
    }
    if (message.txHash !== "") {
      writer.uint32(50).string(message.txHash);
    }
    if (message.logIndex !== "0") {
      writer.uint32(56).uint64(message.logIndex);
    }
    if (message.blockNumber !== "0") {
      writer.uint32(64).uint64(message.blockNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MultiSigSignerEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigSignerEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.signer = reader.string();
          break;
        case 4:
          message.nonce = reader.string();
          break;
        case 5:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        case 6:
          message.txHash = reader.string();
          break;
        case 7:
          message.logIndex = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.blockNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MultiSigSignerEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type)
        ? eRC20MultiSigSignerEvent_TypeFromJSON(object.type)
        : 0,
      signer: isSet(object.signer) ? String(object.signer) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      logIndex: isSet(object.logIndex) ? String(object.logIndex) : "0",
      blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
    };
  },

  toJSON(message: ERC20MultiSigSignerEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined &&
      (obj.type = eRC20MultiSigSignerEvent_TypeToJSON(message.type));
    message.signer !== undefined && (obj.signer = message.signer);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.logIndex !== undefined && (obj.logIndex = message.logIndex);
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigSignerEvent>, I>>(
    object: I
  ): ERC20MultiSigSignerEvent {
    const message = createBaseERC20MultiSigSignerEvent();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.signer = object.signer ?? "";
    message.nonce = object.nonce ?? "";
    message.blockTime = object.blockTime ?? "0";
    message.txHash = object.txHash ?? "";
    message.logIndex = object.logIndex ?? "0";
    message.blockNumber = object.blockNumber ?? "0";
    return message;
  },
};

function createBaseERC20MultiSigThresholdSetEvent(): ERC20MultiSigThresholdSetEvent {
  return {
    id: "",
    newThreshold: 0,
    nonce: "",
    blockTime: "0",
    txHash: "",
    logIndex: "0",
    blockNumber: "0",
  };
}

export const ERC20MultiSigThresholdSetEvent = {
  encode(
    message: ERC20MultiSigThresholdSetEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.newThreshold !== 0) {
      writer.uint32(16).uint32(message.newThreshold);
    }
    if (message.nonce !== "") {
      writer.uint32(26).string(message.nonce);
    }
    if (message.blockTime !== "0") {
      writer.uint32(32).int64(message.blockTime);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.logIndex !== "0") {
      writer.uint32(48).uint64(message.logIndex);
    }
    if (message.blockNumber !== "0") {
      writer.uint32(56).uint64(message.blockNumber);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ERC20MultiSigThresholdSetEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigThresholdSetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.newThreshold = reader.uint32();
          break;
        case 3:
          message.nonce = reader.string();
          break;
        case 4:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        case 5:
          message.txHash = reader.string();
          break;
        case 6:
          message.logIndex = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.blockNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20MultiSigThresholdSetEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      newThreshold: isSet(object.newThreshold)
        ? Number(object.newThreshold)
        : 0,
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      logIndex: isSet(object.logIndex) ? String(object.logIndex) : "0",
      blockNumber: isSet(object.blockNumber) ? String(object.blockNumber) : "0",
    };
  },

  toJSON(message: ERC20MultiSigThresholdSetEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.newThreshold !== undefined &&
      (obj.newThreshold = Math.round(message.newThreshold));
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.logIndex !== undefined && (obj.logIndex = message.logIndex);
    message.blockNumber !== undefined &&
      (obj.blockNumber = message.blockNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigThresholdSetEvent>, I>>(
    object: I
  ): ERC20MultiSigThresholdSetEvent {
    const message = createBaseERC20MultiSigThresholdSetEvent();
    message.id = object.id ?? "";
    message.newThreshold = object.newThreshold ?? 0;
    message.nonce = object.nonce ?? "";
    message.blockTime = object.blockTime ?? "0";
    message.txHash = object.txHash ?? "";
    message.logIndex = object.logIndex ?? "0";
    message.blockNumber = object.blockNumber ?? "0";
    return message;
  },
};

function createBaseCheckpointEvent(): CheckpointEvent {
  return { hash: "", blockHash: "", blockHeight: "0" };
}

export const CheckpointEvent = {
  encode(
    message: CheckpointEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.blockHash !== "") {
      writer.uint32(18).string(message.blockHash);
    }
    if (message.blockHeight !== "0") {
      writer.uint32(24).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckpointEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpointEvent();
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
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckpointEvent {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
    };
  },

  toJSON(message: CheckpointEvent): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckpointEvent>, I>>(
    object: I
  ): CheckpointEvent {
    const message = createBaseCheckpointEvent();
    message.hash = object.hash ?? "";
    message.blockHash = object.blockHash ?? "";
    message.blockHeight = object.blockHeight ?? "0";
    return message;
  },
};

function createBaseStreamStartEvent(): StreamStartEvent {
  return { chainId: "" };
}

export const StreamStartEvent = {
  encode(
    message: StreamStartEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamStartEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamStartEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamStartEvent {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
    };
  },

  toJSON(message: StreamStartEvent): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamStartEvent>, I>>(
    object: I
  ): StreamStartEvent {
    const message = createBaseStreamStartEvent();
    message.chainId = object.chainId ?? "";
    return message;
  },
};

function createBaseRewardPayoutEvent(): RewardPayoutEvent {
  return {
    party: "",
    epochSeq: "",
    asset: "",
    amount: "",
    percentOfTotalReward: "",
    timestamp: "0",
  };
}

export const RewardPayoutEvent = {
  encode(
    message: RewardPayoutEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.epochSeq !== "") {
      writer.uint32(18).string(message.epochSeq);
    }
    if (message.asset !== "") {
      writer.uint32(26).string(message.asset);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.percentOfTotalReward !== "") {
      writer.uint32(42).string(message.percentOfTotalReward);
    }
    if (message.timestamp !== "0") {
      writer.uint32(48).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardPayoutEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPayoutEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.epochSeq = reader.string();
          break;
        case 3:
          message.asset = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.percentOfTotalReward = reader.string();
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

  fromJSON(object: any): RewardPayoutEvent {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      percentOfTotalReward: isSet(object.percentOfTotalReward)
        ? String(object.percentOfTotalReward)
        : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: RewardPayoutEvent): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.percentOfTotalReward !== undefined &&
      (obj.percentOfTotalReward = message.percentOfTotalReward);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardPayoutEvent>, I>>(
    object: I
  ): RewardPayoutEvent {
    const message = createBaseRewardPayoutEvent();
    message.party = object.party ?? "";
    message.epochSeq = object.epochSeq ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount ?? "";
    message.percentOfTotalReward = object.percentOfTotalReward ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseValidatorScoreEvent(): ValidatorScoreEvent {
  return {
    nodeId: "",
    epochSeq: "",
    validatorScore: "",
    normalisedScore: "",
    validatorPerformance: "",
    rawValidatorScore: "",
    validatorStatus: "",
    multisigScore: "",
  };
}

export const ValidatorScoreEvent = {
  encode(
    message: ValidatorScoreEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.epochSeq !== "") {
      writer.uint32(18).string(message.epochSeq);
    }
    if (message.validatorScore !== "") {
      writer.uint32(26).string(message.validatorScore);
    }
    if (message.normalisedScore !== "") {
      writer.uint32(34).string(message.normalisedScore);
    }
    if (message.validatorPerformance !== "") {
      writer.uint32(42).string(message.validatorPerformance);
    }
    if (message.rawValidatorScore !== "") {
      writer.uint32(50).string(message.rawValidatorScore);
    }
    if (message.validatorStatus !== "") {
      writer.uint32(58).string(message.validatorStatus);
    }
    if (message.multisigScore !== "") {
      writer.uint32(66).string(message.multisigScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorScoreEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorScoreEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.epochSeq = reader.string();
          break;
        case 3:
          message.validatorScore = reader.string();
          break;
        case 4:
          message.normalisedScore = reader.string();
          break;
        case 5:
          message.validatorPerformance = reader.string();
          break;
        case 6:
          message.rawValidatorScore = reader.string();
          break;
        case 7:
          message.validatorStatus = reader.string();
          break;
        case 8:
          message.multisigScore = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorScoreEvent {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
      validatorScore: isSet(object.validatorScore)
        ? String(object.validatorScore)
        : "",
      normalisedScore: isSet(object.normalisedScore)
        ? String(object.normalisedScore)
        : "",
      validatorPerformance: isSet(object.validatorPerformance)
        ? String(object.validatorPerformance)
        : "",
      rawValidatorScore: isSet(object.rawValidatorScore)
        ? String(object.rawValidatorScore)
        : "",
      validatorStatus: isSet(object.validatorStatus)
        ? String(object.validatorStatus)
        : "",
      multisigScore: isSet(object.multisigScore)
        ? String(object.multisigScore)
        : "",
    };
  },

  toJSON(message: ValidatorScoreEvent): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    message.validatorScore !== undefined &&
      (obj.validatorScore = message.validatorScore);
    message.normalisedScore !== undefined &&
      (obj.normalisedScore = message.normalisedScore);
    message.validatorPerformance !== undefined &&
      (obj.validatorPerformance = message.validatorPerformance);
    message.rawValidatorScore !== undefined &&
      (obj.rawValidatorScore = message.rawValidatorScore);
    message.validatorStatus !== undefined &&
      (obj.validatorStatus = message.validatorStatus);
    message.multisigScore !== undefined &&
      (obj.multisigScore = message.multisigScore);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorScoreEvent>, I>>(
    object: I
  ): ValidatorScoreEvent {
    const message = createBaseValidatorScoreEvent();
    message.nodeId = object.nodeId ?? "";
    message.epochSeq = object.epochSeq ?? "";
    message.validatorScore = object.validatorScore ?? "";
    message.normalisedScore = object.normalisedScore ?? "";
    message.validatorPerformance = object.validatorPerformance ?? "";
    message.rawValidatorScore = object.rawValidatorScore ?? "";
    message.validatorStatus = object.validatorStatus ?? "";
    message.multisigScore = object.multisigScore ?? "";
    return message;
  },
};

function createBaseDelegationBalanceEvent(): DelegationBalanceEvent {
  return { party: "", nodeId: "", amount: "", epochSeq: "" };
}

export const DelegationBalanceEvent = {
  encode(
    message: DelegationBalanceEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.epochSeq !== "") {
      writer.uint32(34).string(message.epochSeq);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DelegationBalanceEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationBalanceEvent();
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
          message.amount = reader.string();
          break;
        case 4:
          message.epochSeq = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationBalanceEvent {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
    };
  },

  toJSON(message: DelegationBalanceEvent): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationBalanceEvent>, I>>(
    object: I
  ): DelegationBalanceEvent {
    const message = createBaseDelegationBalanceEvent();
    message.party = object.party ?? "";
    message.nodeId = object.nodeId ?? "";
    message.amount = object.amount ?? "";
    message.epochSeq = object.epochSeq ?? "";
    return message;
  },
};

function createBaseMarketEvent(): MarketEvent {
  return { marketId: "", payload: "" };
}

export const MarketEvent = {
  encode(
    message: MarketEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.payload = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketEvent {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      payload: isSet(object.payload) ? String(object.payload) : "",
    };
  },

  toJSON(message: MarketEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.payload !== undefined && (obj.payload = message.payload);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketEvent>, I>>(
    object: I
  ): MarketEvent {
    const message = createBaseMarketEvent();
    message.marketId = object.marketId ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseTxErrorEvent(): TxErrorEvent {
  return {
    partyId: "",
    errMsg: "",
    orderSubmission: undefined,
    orderAmendment: undefined,
    orderCancellation: undefined,
    proposal: undefined,
    voteSubmission: undefined,
    liquidityProvisionSubmission: undefined,
    withdrawSubmission: undefined,
    delegateSubmission: undefined,
    undelegateSubmission: undefined,
    restoreSnapshot: undefined,
    liquidityProvisionCancellation: undefined,
    liquidityProvisionAmendment: undefined,
    transfer: undefined,
    cancelTransfer: undefined,
    announceNode: undefined,
    oracleDataSubmission: undefined,
  };
}

export const TxErrorEvent = {
  encode(
    message: TxErrorEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.errMsg !== "") {
      writer.uint32(18).string(message.errMsg);
    }
    if (message.orderSubmission !== undefined) {
      OrderSubmission.encode(
        message.orderSubmission,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.orderAmendment !== undefined) {
      OrderAmendment.encode(
        message.orderAmendment,
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.orderCancellation !== undefined) {
      OrderCancellation.encode(
        message.orderCancellation,
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.proposal !== undefined) {
      ProposalSubmission.encode(
        message.proposal,
        writer.uint32(834).fork()
      ).ldelim();
    }
    if (message.voteSubmission !== undefined) {
      VoteSubmission.encode(
        message.voteSubmission,
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionSubmission !== undefined) {
      LiquidityProvisionSubmission.encode(
        message.liquidityProvisionSubmission,
        writer.uint32(850).fork()
      ).ldelim();
    }
    if (message.withdrawSubmission !== undefined) {
      WithdrawSubmission.encode(
        message.withdrawSubmission,
        writer.uint32(858).fork()
      ).ldelim();
    }
    if (message.delegateSubmission !== undefined) {
      DelegateSubmission.encode(
        message.delegateSubmission,
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.undelegateSubmission !== undefined) {
      UndelegateSubmission.encode(
        message.undelegateSubmission,
        writer.uint32(874).fork()
      ).ldelim();
    }
    if (message.restoreSnapshot !== undefined) {
      RestoreSnapshot.encode(
        message.restoreSnapshot,
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionCancellation !== undefined) {
      LiquidityProvisionCancellation.encode(
        message.liquidityProvisionCancellation,
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionAmendment !== undefined) {
      LiquidityProvisionAmendment.encode(
        message.liquidityProvisionAmendment,
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.transfer !== undefined) {
      Transfer1.encode(message.transfer, writer.uint32(906).fork()).ldelim();
    }
    if (message.cancelTransfer !== undefined) {
      CancelTransfer.encode(
        message.cancelTransfer,
        writer.uint32(914).fork()
      ).ldelim();
    }
    if (message.announceNode !== undefined) {
      AnnounceNode.encode(
        message.announceNode,
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.oracleDataSubmission !== undefined) {
      OracleDataSubmission.encode(
        message.oracleDataSubmission,
        writer.uint32(930).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxErrorEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxErrorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.errMsg = reader.string();
          break;
        case 101:
          message.orderSubmission = OrderSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.orderAmendment = OrderAmendment.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.orderCancellation = OrderCancellation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.proposal = ProposalSubmission.decode(reader, reader.uint32());
          break;
        case 105:
          message.voteSubmission = VoteSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 106:
          message.liquidityProvisionSubmission =
            LiquidityProvisionSubmission.decode(reader, reader.uint32());
          break;
        case 107:
          message.withdrawSubmission = WithdrawSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 108:
          message.delegateSubmission = DelegateSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 109:
          message.undelegateSubmission = UndelegateSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 110:
          message.restoreSnapshot = RestoreSnapshot.decode(
            reader,
            reader.uint32()
          );
          break;
        case 111:
          message.liquidityProvisionCancellation =
            LiquidityProvisionCancellation.decode(reader, reader.uint32());
          break;
        case 112:
          message.liquidityProvisionAmendment =
            LiquidityProvisionAmendment.decode(reader, reader.uint32());
          break;
        case 113:
          message.transfer = Transfer1.decode(reader, reader.uint32());
          break;
        case 114:
          message.cancelTransfer = CancelTransfer.decode(
            reader,
            reader.uint32()
          );
          break;
        case 115:
          message.announceNode = AnnounceNode.decode(reader, reader.uint32());
          break;
        case 116:
          message.oracleDataSubmission = OracleDataSubmission.decode(
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

  fromJSON(object: any): TxErrorEvent {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      errMsg: isSet(object.errMsg) ? String(object.errMsg) : "",
      orderSubmission: isSet(object.orderSubmission)
        ? OrderSubmission.fromJSON(object.orderSubmission)
        : undefined,
      orderAmendment: isSet(object.orderAmendment)
        ? OrderAmendment.fromJSON(object.orderAmendment)
        : undefined,
      orderCancellation: isSet(object.orderCancellation)
        ? OrderCancellation.fromJSON(object.orderCancellation)
        : undefined,
      proposal: isSet(object.proposal)
        ? ProposalSubmission.fromJSON(object.proposal)
        : undefined,
      voteSubmission: isSet(object.voteSubmission)
        ? VoteSubmission.fromJSON(object.voteSubmission)
        : undefined,
      liquidityProvisionSubmission: isSet(object.liquidityProvisionSubmission)
        ? LiquidityProvisionSubmission.fromJSON(
            object.liquidityProvisionSubmission
          )
        : undefined,
      withdrawSubmission: isSet(object.withdrawSubmission)
        ? WithdrawSubmission.fromJSON(object.withdrawSubmission)
        : undefined,
      delegateSubmission: isSet(object.delegateSubmission)
        ? DelegateSubmission.fromJSON(object.delegateSubmission)
        : undefined,
      undelegateSubmission: isSet(object.undelegateSubmission)
        ? UndelegateSubmission.fromJSON(object.undelegateSubmission)
        : undefined,
      restoreSnapshot: isSet(object.restoreSnapshot)
        ? RestoreSnapshot.fromJSON(object.restoreSnapshot)
        : undefined,
      liquidityProvisionCancellation: isSet(
        object.liquidityProvisionCancellation
      )
        ? LiquidityProvisionCancellation.fromJSON(
            object.liquidityProvisionCancellation
          )
        : undefined,
      liquidityProvisionAmendment: isSet(object.liquidityProvisionAmendment)
        ? LiquidityProvisionAmendment.fromJSON(
            object.liquidityProvisionAmendment
          )
        : undefined,
      transfer: isSet(object.transfer)
        ? Transfer1.fromJSON(object.transfer)
        : undefined,
      cancelTransfer: isSet(object.cancelTransfer)
        ? CancelTransfer.fromJSON(object.cancelTransfer)
        : undefined,
      announceNode: isSet(object.announceNode)
        ? AnnounceNode.fromJSON(object.announceNode)
        : undefined,
      oracleDataSubmission: isSet(object.oracleDataSubmission)
        ? OracleDataSubmission.fromJSON(object.oracleDataSubmission)
        : undefined,
    };
  },

  toJSON(message: TxErrorEvent): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.errMsg !== undefined && (obj.errMsg = message.errMsg);
    message.orderSubmission !== undefined &&
      (obj.orderSubmission = message.orderSubmission
        ? OrderSubmission.toJSON(message.orderSubmission)
        : undefined);
    message.orderAmendment !== undefined &&
      (obj.orderAmendment = message.orderAmendment
        ? OrderAmendment.toJSON(message.orderAmendment)
        : undefined);
    message.orderCancellation !== undefined &&
      (obj.orderCancellation = message.orderCancellation
        ? OrderCancellation.toJSON(message.orderCancellation)
        : undefined);
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? ProposalSubmission.toJSON(message.proposal)
        : undefined);
    message.voteSubmission !== undefined &&
      (obj.voteSubmission = message.voteSubmission
        ? VoteSubmission.toJSON(message.voteSubmission)
        : undefined);
    message.liquidityProvisionSubmission !== undefined &&
      (obj.liquidityProvisionSubmission = message.liquidityProvisionSubmission
        ? LiquidityProvisionSubmission.toJSON(
            message.liquidityProvisionSubmission
          )
        : undefined);
    message.withdrawSubmission !== undefined &&
      (obj.withdrawSubmission = message.withdrawSubmission
        ? WithdrawSubmission.toJSON(message.withdrawSubmission)
        : undefined);
    message.delegateSubmission !== undefined &&
      (obj.delegateSubmission = message.delegateSubmission
        ? DelegateSubmission.toJSON(message.delegateSubmission)
        : undefined);
    message.undelegateSubmission !== undefined &&
      (obj.undelegateSubmission = message.undelegateSubmission
        ? UndelegateSubmission.toJSON(message.undelegateSubmission)
        : undefined);
    message.restoreSnapshot !== undefined &&
      (obj.restoreSnapshot = message.restoreSnapshot
        ? RestoreSnapshot.toJSON(message.restoreSnapshot)
        : undefined);
    message.liquidityProvisionCancellation !== undefined &&
      (obj.liquidityProvisionCancellation =
        message.liquidityProvisionCancellation
          ? LiquidityProvisionCancellation.toJSON(
              message.liquidityProvisionCancellation
            )
          : undefined);
    message.liquidityProvisionAmendment !== undefined &&
      (obj.liquidityProvisionAmendment = message.liquidityProvisionAmendment
        ? LiquidityProvisionAmendment.toJSON(
            message.liquidityProvisionAmendment
          )
        : undefined);
    message.transfer !== undefined &&
      (obj.transfer = message.transfer
        ? Transfer1.toJSON(message.transfer)
        : undefined);
    message.cancelTransfer !== undefined &&
      (obj.cancelTransfer = message.cancelTransfer
        ? CancelTransfer.toJSON(message.cancelTransfer)
        : undefined);
    message.announceNode !== undefined &&
      (obj.announceNode = message.announceNode
        ? AnnounceNode.toJSON(message.announceNode)
        : undefined);
    message.oracleDataSubmission !== undefined &&
      (obj.oracleDataSubmission = message.oracleDataSubmission
        ? OracleDataSubmission.toJSON(message.oracleDataSubmission)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TxErrorEvent>, I>>(
    object: I
  ): TxErrorEvent {
    const message = createBaseTxErrorEvent();
    message.partyId = object.partyId ?? "";
    message.errMsg = object.errMsg ?? "";
    message.orderSubmission =
      object.orderSubmission !== undefined && object.orderSubmission !== null
        ? OrderSubmission.fromPartial(object.orderSubmission)
        : undefined;
    message.orderAmendment =
      object.orderAmendment !== undefined && object.orderAmendment !== null
        ? OrderAmendment.fromPartial(object.orderAmendment)
        : undefined;
    message.orderCancellation =
      object.orderCancellation !== undefined &&
      object.orderCancellation !== null
        ? OrderCancellation.fromPartial(object.orderCancellation)
        : undefined;
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? ProposalSubmission.fromPartial(object.proposal)
        : undefined;
    message.voteSubmission =
      object.voteSubmission !== undefined && object.voteSubmission !== null
        ? VoteSubmission.fromPartial(object.voteSubmission)
        : undefined;
    message.liquidityProvisionSubmission =
      object.liquidityProvisionSubmission !== undefined &&
      object.liquidityProvisionSubmission !== null
        ? LiquidityProvisionSubmission.fromPartial(
            object.liquidityProvisionSubmission
          )
        : undefined;
    message.withdrawSubmission =
      object.withdrawSubmission !== undefined &&
      object.withdrawSubmission !== null
        ? WithdrawSubmission.fromPartial(object.withdrawSubmission)
        : undefined;
    message.delegateSubmission =
      object.delegateSubmission !== undefined &&
      object.delegateSubmission !== null
        ? DelegateSubmission.fromPartial(object.delegateSubmission)
        : undefined;
    message.undelegateSubmission =
      object.undelegateSubmission !== undefined &&
      object.undelegateSubmission !== null
        ? UndelegateSubmission.fromPartial(object.undelegateSubmission)
        : undefined;
    message.restoreSnapshot =
      object.restoreSnapshot !== undefined && object.restoreSnapshot !== null
        ? RestoreSnapshot.fromPartial(object.restoreSnapshot)
        : undefined;
    message.liquidityProvisionCancellation =
      object.liquidityProvisionCancellation !== undefined &&
      object.liquidityProvisionCancellation !== null
        ? LiquidityProvisionCancellation.fromPartial(
            object.liquidityProvisionCancellation
          )
        : undefined;
    message.liquidityProvisionAmendment =
      object.liquidityProvisionAmendment !== undefined &&
      object.liquidityProvisionAmendment !== null
        ? LiquidityProvisionAmendment.fromPartial(
            object.liquidityProvisionAmendment
          )
        : undefined;
    message.transfer =
      object.transfer !== undefined && object.transfer !== null
        ? Transfer1.fromPartial(object.transfer)
        : undefined;
    message.cancelTransfer =
      object.cancelTransfer !== undefined && object.cancelTransfer !== null
        ? CancelTransfer.fromPartial(object.cancelTransfer)
        : undefined;
    message.announceNode =
      object.announceNode !== undefined && object.announceNode !== null
        ? AnnounceNode.fromPartial(object.announceNode)
        : undefined;
    message.oracleDataSubmission =
      object.oracleDataSubmission !== undefined &&
      object.oracleDataSubmission !== null
        ? OracleDataSubmission.fromPartial(object.oracleDataSubmission)
        : undefined;
    return message;
  },
};

function createBaseTimeUpdate(): TimeUpdate {
  return { timestamp: "0" };
}

export const TimeUpdate = {
  encode(
    message: TimeUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== "0") {
      writer.uint32(8).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimeUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeUpdate();
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

  fromJSON(object: any): TimeUpdate {
    return {
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: TimeUpdate): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeUpdate>, I>>(
    object: I
  ): TimeUpdate {
    const message = createBaseTimeUpdate();
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseEpochEvent(): EpochEvent {
  return { seq: "0", action: 0, startTime: "0", expireTime: "0", endTime: "0" };
}

export const EpochEvent = {
  encode(
    message: EpochEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.seq !== "0") {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    if (message.startTime !== "0") {
      writer.uint32(24).int64(message.startTime);
    }
    if (message.expireTime !== "0") {
      writer.uint32(32).int64(message.expireTime);
    }
    if (message.endTime !== "0") {
      writer.uint32(40).int64(message.endTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.startTime = longToString(reader.int64() as Long);
          break;
        case 4:
          message.expireTime = longToString(reader.int64() as Long);
          break;
        case 5:
          message.endTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochEvent {
    return {
      seq: isSet(object.seq) ? String(object.seq) : "0",
      action: isSet(object.action) ? epochActionFromJSON(object.action) : 0,
      startTime: isSet(object.startTime) ? String(object.startTime) : "0",
      expireTime: isSet(object.expireTime) ? String(object.expireTime) : "0",
      endTime: isSet(object.endTime) ? String(object.endTime) : "0",
    };
  },

  toJSON(message: EpochEvent): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = message.seq);
    message.action !== undefined &&
      (obj.action = epochActionToJSON(message.action));
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.expireTime !== undefined && (obj.expireTime = message.expireTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochEvent>, I>>(
    object: I
  ): EpochEvent {
    const message = createBaseEpochEvent();
    message.seq = object.seq ?? "0";
    message.action = object.action ?? 0;
    message.startTime = object.startTime ?? "0";
    message.expireTime = object.expireTime ?? "0";
    message.endTime = object.endTime ?? "0";
    return message;
  },
};

function createBaseTransferResponses(): TransferResponses {
  return { responses: [] };
}

export const TransferResponses = {
  encode(
    message: TransferResponses,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.responses) {
      TransferResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferResponses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResponses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.responses.push(
            TransferResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferResponses {
    return {
      responses: Array.isArray(object?.responses)
        ? object.responses.map((e: any) => TransferResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransferResponses): unknown {
    const obj: any = {};
    if (message.responses) {
      obj.responses = message.responses.map((e) =>
        e ? TransferResponse.toJSON(e) : undefined
      );
    } else {
      obj.responses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferResponses>, I>>(
    object: I
  ): TransferResponses {
    const message = createBaseTransferResponses();
    message.responses =
      object.responses?.map((e) => TransferResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBasePositionResolution(): PositionResolution {
  return { marketId: "", distressed: "0", closed: "0", markPrice: "" };
}

export const PositionResolution = {
  encode(
    message: PositionResolution,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.distressed !== "0") {
      writer.uint32(16).int64(message.distressed);
    }
    if (message.closed !== "0") {
      writer.uint32(24).int64(message.closed);
    }
    if (message.markPrice !== "") {
      writer.uint32(34).string(message.markPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionResolution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionResolution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.distressed = longToString(reader.int64() as Long);
          break;
        case 3:
          message.closed = longToString(reader.int64() as Long);
          break;
        case 4:
          message.markPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionResolution {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      distressed: isSet(object.distressed) ? String(object.distressed) : "0",
      closed: isSet(object.closed) ? String(object.closed) : "0",
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
    };
  },

  toJSON(message: PositionResolution): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.distressed !== undefined && (obj.distressed = message.distressed);
    message.closed !== undefined && (obj.closed = message.closed);
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionResolution>, I>>(
    object: I
  ): PositionResolution {
    const message = createBasePositionResolution();
    message.marketId = object.marketId ?? "";
    message.distressed = object.distressed ?? "0";
    message.closed = object.closed ?? "0";
    message.markPrice = object.markPrice ?? "";
    return message;
  },
};

function createBaseLossSocialization(): LossSocialization {
  return { marketId: "", partyId: "", amount: "" };
}

export const LossSocialization = {
  encode(
    message: LossSocialization,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LossSocialization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLossSocialization();
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
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LossSocialization {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: LossSocialization): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LossSocialization>, I>>(
    object: I
  ): LossSocialization {
    const message = createBaseLossSocialization();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseTradeSettlement(): TradeSettlement {
  return { size: "0", price: "" };
}

export const TradeSettlement = {
  encode(
    message: TradeSettlement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.size !== "0") {
      writer.uint32(8).int64(message.size);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeSettlement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeSettlement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = longToString(reader.int64() as Long);
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

  fromJSON(object: any): TradeSettlement {
    return {
      size: isSet(object.size) ? String(object.size) : "0",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: TradeSettlement): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = message.size);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradeSettlement>, I>>(
    object: I
  ): TradeSettlement {
    const message = createBaseTradeSettlement();
    message.size = object.size ?? "0";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseSettlePosition(): SettlePosition {
  return {
    marketId: "",
    partyId: "",
    price: "",
    tradeSettlements: [],
    positionFactor: "",
  };
}

export const SettlePosition = {
  encode(
    message: SettlePosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    for (const v of message.tradeSettlements) {
      TradeSettlement.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.positionFactor !== "") {
      writer.uint32(42).string(message.positionFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SettlePosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettlePosition();
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
          message.price = reader.string();
          break;
        case 4:
          message.tradeSettlements.push(
            TradeSettlement.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.positionFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SettlePosition {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      tradeSettlements: Array.isArray(object?.tradeSettlements)
        ? object.tradeSettlements.map((e: any) => TradeSettlement.fromJSON(e))
        : [],
      positionFactor: isSet(object.positionFactor)
        ? String(object.positionFactor)
        : "",
    };
  },

  toJSON(message: SettlePosition): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.price !== undefined && (obj.price = message.price);
    if (message.tradeSettlements) {
      obj.tradeSettlements = message.tradeSettlements.map((e) =>
        e ? TradeSettlement.toJSON(e) : undefined
      );
    } else {
      obj.tradeSettlements = [];
    }
    message.positionFactor !== undefined &&
      (obj.positionFactor = message.positionFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SettlePosition>, I>>(
    object: I
  ): SettlePosition {
    const message = createBaseSettlePosition();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.price = object.price ?? "";
    message.tradeSettlements =
      object.tradeSettlements?.map((e) => TradeSettlement.fromPartial(e)) || [];
    message.positionFactor = object.positionFactor ?? "";
    return message;
  },
};

function createBasePositionStateEvent(): PositionStateEvent {
  return {
    partyId: "",
    marketId: "",
    size: "0",
    potentialBuys: "0",
    potentialSells: "0",
    vwBuyPrice: "",
    vwSellPrice: "",
  };
}

export const PositionStateEvent = {
  encode(
    message: PositionStateEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.size !== "0") {
      writer.uint32(24).int64(message.size);
    }
    if (message.potentialBuys !== "0") {
      writer.uint32(32).int64(message.potentialBuys);
    }
    if (message.potentialSells !== "0") {
      writer.uint32(40).int64(message.potentialSells);
    }
    if (message.vwBuyPrice !== "") {
      writer.uint32(50).string(message.vwBuyPrice);
    }
    if (message.vwSellPrice !== "") {
      writer.uint32(58).string(message.vwSellPrice);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionStateEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionStateEvent();
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
          message.size = longToString(reader.int64() as Long);
          break;
        case 4:
          message.potentialBuys = longToString(reader.int64() as Long);
          break;
        case 5:
          message.potentialSells = longToString(reader.int64() as Long);
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

  fromJSON(object: any): PositionStateEvent {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      size: isSet(object.size) ? String(object.size) : "0",
      potentialBuys: isSet(object.potentialBuys)
        ? String(object.potentialBuys)
        : "0",
      potentialSells: isSet(object.potentialSells)
        ? String(object.potentialSells)
        : "0",
      vwBuyPrice: isSet(object.vwBuyPrice) ? String(object.vwBuyPrice) : "",
      vwSellPrice: isSet(object.vwSellPrice) ? String(object.vwSellPrice) : "",
    };
  },

  toJSON(message: PositionStateEvent): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.size !== undefined && (obj.size = message.size);
    message.potentialBuys !== undefined &&
      (obj.potentialBuys = message.potentialBuys);
    message.potentialSells !== undefined &&
      (obj.potentialSells = message.potentialSells);
    message.vwBuyPrice !== undefined && (obj.vwBuyPrice = message.vwBuyPrice);
    message.vwSellPrice !== undefined &&
      (obj.vwSellPrice = message.vwSellPrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionStateEvent>, I>>(
    object: I
  ): PositionStateEvent {
    const message = createBasePositionStateEvent();
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    message.size = object.size ?? "0";
    message.potentialBuys = object.potentialBuys ?? "0";
    message.potentialSells = object.potentialSells ?? "0";
    message.vwBuyPrice = object.vwBuyPrice ?? "";
    message.vwSellPrice = object.vwSellPrice ?? "";
    return message;
  },
};

function createBaseSettleDistressed(): SettleDistressed {
  return { marketId: "", partyId: "", margin: "", price: "" };
}

export const SettleDistressed = {
  encode(
    message: SettleDistressed,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.margin !== "") {
      writer.uint32(26).string(message.margin);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SettleDistressed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettleDistressed();
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
          message.margin = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SettleDistressed {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      margin: isSet(object.margin) ? String(object.margin) : "",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: SettleDistressed): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.margin !== undefined && (obj.margin = message.margin);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SettleDistressed>, I>>(
    object: I
  ): SettleDistressed {
    const message = createBaseSettleDistressed();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.margin = object.margin ?? "";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseMarketTick(): MarketTick {
  return { id: "", time: "0" };
}

export const MarketTick = {
  encode(
    message: MarketTick,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.time !== "0") {
      writer.uint32(16).int64(message.time);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketTick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketTick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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

  fromJSON(object: any): MarketTick {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      time: isSet(object.time) ? String(object.time) : "0",
    };
  },

  toJSON(message: MarketTick): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.time !== undefined && (obj.time = message.time);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketTick>, I>>(
    object: I
  ): MarketTick {
    const message = createBaseMarketTick();
    message.id = object.id ?? "";
    message.time = object.time ?? "0";
    return message;
  },
};

function createBaseAuctionEvent(): AuctionEvent {
  return {
    marketId: "",
    openingAuction: false,
    leave: false,
    start: "0",
    end: "0",
    trigger: 0,
    extensionTrigger: 0,
  };
}

export const AuctionEvent = {
  encode(
    message: AuctionEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.openingAuction === true) {
      writer.uint32(16).bool(message.openingAuction);
    }
    if (message.leave === true) {
      writer.uint32(24).bool(message.leave);
    }
    if (message.start !== "0") {
      writer.uint32(32).int64(message.start);
    }
    if (message.end !== "0") {
      writer.uint32(40).int64(message.end);
    }
    if (message.trigger !== 0) {
      writer.uint32(48).int32(message.trigger);
    }
    if (message.extensionTrigger !== 0) {
      writer.uint32(56).int32(message.extensionTrigger);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.openingAuction = reader.bool();
          break;
        case 3:
          message.leave = reader.bool();
          break;
        case 4:
          message.start = longToString(reader.int64() as Long);
          break;
        case 5:
          message.end = longToString(reader.int64() as Long);
          break;
        case 6:
          message.trigger = reader.int32() as any;
          break;
        case 7:
          message.extensionTrigger = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionEvent {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      openingAuction: isSet(object.openingAuction)
        ? Boolean(object.openingAuction)
        : false,
      leave: isSet(object.leave) ? Boolean(object.leave) : false,
      start: isSet(object.start) ? String(object.start) : "0",
      end: isSet(object.end) ? String(object.end) : "0",
      trigger: isSet(object.trigger)
        ? auctionTriggerFromJSON(object.trigger)
        : 0,
      extensionTrigger: isSet(object.extensionTrigger)
        ? auctionTriggerFromJSON(object.extensionTrigger)
        : 0,
    };
  },

  toJSON(message: AuctionEvent): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.openingAuction !== undefined &&
      (obj.openingAuction = message.openingAuction);
    message.leave !== undefined && (obj.leave = message.leave);
    message.start !== undefined && (obj.start = message.start);
    message.end !== undefined && (obj.end = message.end);
    message.trigger !== undefined &&
      (obj.trigger = auctionTriggerToJSON(message.trigger));
    message.extensionTrigger !== undefined &&
      (obj.extensionTrigger = auctionTriggerToJSON(message.extensionTrigger));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionEvent>, I>>(
    object: I
  ): AuctionEvent {
    const message = createBaseAuctionEvent();
    message.marketId = object.marketId ?? "";
    message.openingAuction = object.openingAuction ?? false;
    message.leave = object.leave ?? false;
    message.start = object.start ?? "0";
    message.end = object.end ?? "0";
    message.trigger = object.trigger ?? 0;
    message.extensionTrigger = object.extensionTrigger ?? 0;
    return message;
  },
};

function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    nodeId: "",
    vegaPubKey: "",
    ethereumAddress: "",
    tmPubKey: "",
    infoUrl: "",
    country: "",
    name: "",
    avatarUrl: "",
    vegaPubKeyIndex: 0,
    added: false,
    fromEpoch: "0",
  };
}

export const ValidatorUpdate = {
  encode(
    message: ValidatorUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.vegaPubKey !== "") {
      writer.uint32(18).string(message.vegaPubKey);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(26).string(message.ethereumAddress);
    }
    if (message.tmPubKey !== "") {
      writer.uint32(34).string(message.tmPubKey);
    }
    if (message.infoUrl !== "") {
      writer.uint32(42).string(message.infoUrl);
    }
    if (message.country !== "") {
      writer.uint32(50).string(message.country);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(66).string(message.avatarUrl);
    }
    if (message.vegaPubKeyIndex !== 0) {
      writer.uint32(72).uint32(message.vegaPubKeyIndex);
    }
    if (message.added === true) {
      writer.uint32(80).bool(message.added);
    }
    if (message.fromEpoch !== "0") {
      writer.uint32(88).uint64(message.fromEpoch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.vegaPubKey = reader.string();
          break;
        case 3:
          message.ethereumAddress = reader.string();
          break;
        case 4:
          message.tmPubKey = reader.string();
          break;
        case 5:
          message.infoUrl = reader.string();
          break;
        case 6:
          message.country = reader.string();
          break;
        case 7:
          message.name = reader.string();
          break;
        case 8:
          message.avatarUrl = reader.string();
          break;
        case 9:
          message.vegaPubKeyIndex = reader.uint32();
          break;
        case 10:
          message.added = reader.bool();
          break;
        case 11:
          message.fromEpoch = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorUpdate {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      vegaPubKey: isSet(object.vegaPubKey) ? String(object.vegaPubKey) : "",
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
      tmPubKey: isSet(object.tmPubKey) ? String(object.tmPubKey) : "",
      infoUrl: isSet(object.infoUrl) ? String(object.infoUrl) : "",
      country: isSet(object.country) ? String(object.country) : "",
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      vegaPubKeyIndex: isSet(object.vegaPubKeyIndex)
        ? Number(object.vegaPubKeyIndex)
        : 0,
      added: isSet(object.added) ? Boolean(object.added) : false,
      fromEpoch: isSet(object.fromEpoch) ? String(object.fromEpoch) : "0",
    };
  },

  toJSON(message: ValidatorUpdate): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.vegaPubKey !== undefined && (obj.vegaPubKey = message.vegaPubKey);
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    message.tmPubKey !== undefined && (obj.tmPubKey = message.tmPubKey);
    message.infoUrl !== undefined && (obj.infoUrl = message.infoUrl);
    message.country !== undefined && (obj.country = message.country);
    message.name !== undefined && (obj.name = message.name);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    message.vegaPubKeyIndex !== undefined &&
      (obj.vegaPubKeyIndex = Math.round(message.vegaPubKeyIndex));
    message.added !== undefined && (obj.added = message.added);
    message.fromEpoch !== undefined && (obj.fromEpoch = message.fromEpoch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(
    object: I
  ): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.nodeId = object.nodeId ?? "";
    message.vegaPubKey = object.vegaPubKey ?? "";
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.tmPubKey = object.tmPubKey ?? "";
    message.infoUrl = object.infoUrl ?? "";
    message.country = object.country ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.vegaPubKeyIndex = object.vegaPubKeyIndex ?? 0;
    message.added = object.added ?? false;
    message.fromEpoch = object.fromEpoch ?? "0";
    return message;
  },
};

function createBaseValidatorRankingEvent(): ValidatorRankingEvent {
  return {
    nodeId: "",
    stakeScore: "",
    performanceScore: "",
    rankingScore: "",
    previousStatus: "",
    nextStatus: "",
    epochSeq: "",
    tmVotingPower: 0,
  };
}

export const ValidatorRankingEvent = {
  encode(
    message: ValidatorRankingEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.stakeScore !== "") {
      writer.uint32(18).string(message.stakeScore);
    }
    if (message.performanceScore !== "") {
      writer.uint32(26).string(message.performanceScore);
    }
    if (message.rankingScore !== "") {
      writer.uint32(34).string(message.rankingScore);
    }
    if (message.previousStatus !== "") {
      writer.uint32(42).string(message.previousStatus);
    }
    if (message.nextStatus !== "") {
      writer.uint32(50).string(message.nextStatus);
    }
    if (message.epochSeq !== "") {
      writer.uint32(58).string(message.epochSeq);
    }
    if (message.tmVotingPower !== 0) {
      writer.uint32(64).uint32(message.tmVotingPower);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ValidatorRankingEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorRankingEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.stakeScore = reader.string();
          break;
        case 3:
          message.performanceScore = reader.string();
          break;
        case 4:
          message.rankingScore = reader.string();
          break;
        case 5:
          message.previousStatus = reader.string();
          break;
        case 6:
          message.nextStatus = reader.string();
          break;
        case 7:
          message.epochSeq = reader.string();
          break;
        case 8:
          message.tmVotingPower = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorRankingEvent {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      stakeScore: isSet(object.stakeScore) ? String(object.stakeScore) : "",
      performanceScore: isSet(object.performanceScore)
        ? String(object.performanceScore)
        : "",
      rankingScore: isSet(object.rankingScore)
        ? String(object.rankingScore)
        : "",
      previousStatus: isSet(object.previousStatus)
        ? String(object.previousStatus)
        : "",
      nextStatus: isSet(object.nextStatus) ? String(object.nextStatus) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
      tmVotingPower: isSet(object.tmVotingPower)
        ? Number(object.tmVotingPower)
        : 0,
    };
  },

  toJSON(message: ValidatorRankingEvent): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.stakeScore !== undefined && (obj.stakeScore = message.stakeScore);
    message.performanceScore !== undefined &&
      (obj.performanceScore = message.performanceScore);
    message.rankingScore !== undefined &&
      (obj.rankingScore = message.rankingScore);
    message.previousStatus !== undefined &&
      (obj.previousStatus = message.previousStatus);
    message.nextStatus !== undefined && (obj.nextStatus = message.nextStatus);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    message.tmVotingPower !== undefined &&
      (obj.tmVotingPower = Math.round(message.tmVotingPower));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorRankingEvent>, I>>(
    object: I
  ): ValidatorRankingEvent {
    const message = createBaseValidatorRankingEvent();
    message.nodeId = object.nodeId ?? "";
    message.stakeScore = object.stakeScore ?? "";
    message.performanceScore = object.performanceScore ?? "";
    message.rankingScore = object.rankingScore ?? "";
    message.previousStatus = object.previousStatus ?? "";
    message.nextStatus = object.nextStatus ?? "";
    message.epochSeq = object.epochSeq ?? "";
    message.tmVotingPower = object.tmVotingPower ?? 0;
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

function createBaseEthereumKeyRotation(): EthereumKeyRotation {
  return { nodeId: "", oldAddress: "", newAddress: "", blockHeight: "0" };
}

export const EthereumKeyRotation = {
  encode(
    message: EthereumKeyRotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.oldAddress !== "") {
      writer.uint32(18).string(message.oldAddress);
    }
    if (message.newAddress !== "") {
      writer.uint32(26).string(message.newAddress);
    }
    if (message.blockHeight !== "0") {
      writer.uint32(32).uint64(message.blockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthereumKeyRotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthereumKeyRotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.oldAddress = reader.string();
          break;
        case 3:
          message.newAddress = reader.string();
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

  fromJSON(object: any): EthereumKeyRotation {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      oldAddress: isSet(object.oldAddress) ? String(object.oldAddress) : "",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
    };
  },

  toJSON(message: EthereumKeyRotation): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.oldAddress !== undefined && (obj.oldAddress = message.oldAddress);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EthereumKeyRotation>, I>>(
    object: I
  ): EthereumKeyRotation {
    const message = createBaseEthereumKeyRotation();
    message.nodeId = object.nodeId ?? "";
    message.oldAddress = object.oldAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    message.blockHeight = object.blockHeight ?? "0";
    return message;
  },
};

function createBaseStateVar(): StateVar {
  return { id: "", eventId: "", state: "" };
}

export const StateVar = {
  encode(
    message: StateVar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateVar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateVar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateVar {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      state: isSet(object.state) ? String(object.state) : "",
    };
  },

  toJSON(message: StateVar): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StateVar>, I>>(object: I): StateVar {
    const message = createBaseStateVar();
    message.id = object.id ?? "";
    message.eventId = object.eventId ?? "";
    message.state = object.state ?? "";
    return message;
  },
};

function createBaseBusEvent(): BusEvent {
  return {
    id: "",
    block: "",
    type: 0,
    timeUpdate: undefined,
    transferResponses: undefined,
    positionResolution: undefined,
    order: undefined,
    account: undefined,
    party: undefined,
    trade: undefined,
    marginLevels: undefined,
    proposal: undefined,
    vote: undefined,
    marketData: undefined,
    nodeSignature: undefined,
    lossSocialization: undefined,
    settlePosition: undefined,
    settleDistressed: undefined,
    marketCreated: undefined,
    asset: undefined,
    marketTick: undefined,
    withdrawal: undefined,
    deposit: undefined,
    auction: undefined,
    riskFactor: undefined,
    networkParameter: undefined,
    liquidityProvision: undefined,
    marketUpdated: undefined,
    oracleSpec: undefined,
    oracleData: undefined,
    delegationBalance: undefined,
    validatorScore: undefined,
    epochEvent: undefined,
    validatorUpdate: undefined,
    stakeLinking: undefined,
    rewardPayout: undefined,
    checkpoint: undefined,
    keyRotation: undefined,
    stateVar: undefined,
    networkLimits: undefined,
    transfer: undefined,
    rankingEvent: undefined,
    erc20MultisigSignerEvent: undefined,
    erc20MultisigSetThresholdEvent: undefined,
    erc20MultisigSignerAdded: undefined,
    erc20MultisigSignerRemoved: undefined,
    positionStateEvent: undefined,
    ethereumKeyRotation: undefined,
    market: undefined,
    txErrEvent: undefined,
    version: 0,
    chainId: "",
    txHash: "",
  };
}

export const BusEvent = {
  encode(
    message: BusEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.block !== "") {
      writer.uint32(18).string(message.block);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.timeUpdate !== undefined) {
      TimeUpdate.encode(message.timeUpdate, writer.uint32(810).fork()).ldelim();
    }
    if (message.transferResponses !== undefined) {
      TransferResponses.encode(
        message.transferResponses,
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.positionResolution !== undefined) {
      PositionResolution.encode(
        message.positionResolution,
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(834).fork()).ldelim();
    }
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(842).fork()).ldelim();
    }
    if (message.party !== undefined) {
      Party.encode(message.party, writer.uint32(850).fork()).ldelim();
    }
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(858).fork()).ldelim();
    }
    if (message.marginLevels !== undefined) {
      MarginLevels.encode(
        message.marginLevels,
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(874).fork()).ldelim();
    }
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(882).fork()).ldelim();
    }
    if (message.marketData !== undefined) {
      MarketData.encode(message.marketData, writer.uint32(890).fork()).ldelim();
    }
    if (message.nodeSignature !== undefined) {
      NodeSignature.encode(
        message.nodeSignature,
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.lossSocialization !== undefined) {
      LossSocialization.encode(
        message.lossSocialization,
        writer.uint32(906).fork()
      ).ldelim();
    }
    if (message.settlePosition !== undefined) {
      SettlePosition.encode(
        message.settlePosition,
        writer.uint32(914).fork()
      ).ldelim();
    }
    if (message.settleDistressed !== undefined) {
      SettleDistressed.encode(
        message.settleDistressed,
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.marketCreated !== undefined) {
      Market.encode(message.marketCreated, writer.uint32(930).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(938).fork()).ldelim();
    }
    if (message.marketTick !== undefined) {
      MarketTick.encode(message.marketTick, writer.uint32(946).fork()).ldelim();
    }
    if (message.withdrawal !== undefined) {
      Withdrawal.encode(message.withdrawal, writer.uint32(954).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(962).fork()).ldelim();
    }
    if (message.auction !== undefined) {
      AuctionEvent.encode(message.auction, writer.uint32(970).fork()).ldelim();
    }
    if (message.riskFactor !== undefined) {
      RiskFactor.encode(message.riskFactor, writer.uint32(978).fork()).ldelim();
    }
    if (message.networkParameter !== undefined) {
      NetworkParameter.encode(
        message.networkParameter,
        writer.uint32(986).fork()
      ).ldelim();
    }
    if (message.liquidityProvision !== undefined) {
      LiquidityProvision.encode(
        message.liquidityProvision,
        writer.uint32(994).fork()
      ).ldelim();
    }
    if (message.marketUpdated !== undefined) {
      Market.encode(message.marketUpdated, writer.uint32(1002).fork()).ldelim();
    }
    if (message.oracleSpec !== undefined) {
      OracleSpec.encode(
        message.oracleSpec,
        writer.uint32(1010).fork()
      ).ldelim();
    }
    if (message.oracleData !== undefined) {
      OracleData.encode(
        message.oracleData,
        writer.uint32(1018).fork()
      ).ldelim();
    }
    if (message.delegationBalance !== undefined) {
      DelegationBalanceEvent.encode(
        message.delegationBalance,
        writer.uint32(1034).fork()
      ).ldelim();
    }
    if (message.validatorScore !== undefined) {
      ValidatorScoreEvent.encode(
        message.validatorScore,
        writer.uint32(1042).fork()
      ).ldelim();
    }
    if (message.epochEvent !== undefined) {
      EpochEvent.encode(
        message.epochEvent,
        writer.uint32(1050).fork()
      ).ldelim();
    }
    if (message.validatorUpdate !== undefined) {
      ValidatorUpdate.encode(
        message.validatorUpdate,
        writer.uint32(1058).fork()
      ).ldelim();
    }
    if (message.stakeLinking !== undefined) {
      StakeLinking.encode(
        message.stakeLinking,
        writer.uint32(1066).fork()
      ).ldelim();
    }
    if (message.rewardPayout !== undefined) {
      RewardPayoutEvent.encode(
        message.rewardPayout,
        writer.uint32(1074).fork()
      ).ldelim();
    }
    if (message.checkpoint !== undefined) {
      CheckpointEvent.encode(
        message.checkpoint,
        writer.uint32(1082).fork()
      ).ldelim();
    }
    if (message.keyRotation !== undefined) {
      KeyRotation.encode(
        message.keyRotation,
        writer.uint32(1090).fork()
      ).ldelim();
    }
    if (message.stateVar !== undefined) {
      StateVar.encode(message.stateVar, writer.uint32(1098).fork()).ldelim();
    }
    if (message.networkLimits !== undefined) {
      NetworkLimits.encode(
        message.networkLimits,
        writer.uint32(1106).fork()
      ).ldelim();
    }
    if (message.transfer !== undefined) {
      Transfer.encode(message.transfer, writer.uint32(1114).fork()).ldelim();
    }
    if (message.rankingEvent !== undefined) {
      ValidatorRankingEvent.encode(
        message.rankingEvent,
        writer.uint32(1122).fork()
      ).ldelim();
    }
    if (message.erc20MultisigSignerEvent !== undefined) {
      ERC20MultiSigSignerEvent.encode(
        message.erc20MultisigSignerEvent,
        writer.uint32(1130).fork()
      ).ldelim();
    }
    if (message.erc20MultisigSetThresholdEvent !== undefined) {
      ERC20MultiSigThresholdSetEvent.encode(
        message.erc20MultisigSetThresholdEvent,
        writer.uint32(1138).fork()
      ).ldelim();
    }
    if (message.erc20MultisigSignerAdded !== undefined) {
      ERC20MultiSigSignerAdded.encode(
        message.erc20MultisigSignerAdded,
        writer.uint32(1146).fork()
      ).ldelim();
    }
    if (message.erc20MultisigSignerRemoved !== undefined) {
      ERC20MultiSigSignerRemoved.encode(
        message.erc20MultisigSignerRemoved,
        writer.uint32(1154).fork()
      ).ldelim();
    }
    if (message.positionStateEvent !== undefined) {
      PositionStateEvent.encode(
        message.positionStateEvent,
        writer.uint32(1162).fork()
      ).ldelim();
    }
    if (message.ethereumKeyRotation !== undefined) {
      EthereumKeyRotation.encode(
        message.ethereumKeyRotation,
        writer.uint32(1170).fork()
      ).ldelim();
    }
    if (message.market !== undefined) {
      MarketEvent.encode(message.market, writer.uint32(8010).fork()).ldelim();
    }
    if (message.txErrEvent !== undefined) {
      TxErrorEvent.encode(
        message.txErrEvent,
        writer.uint32(16010).fork()
      ).ldelim();
    }
    if (message.version !== 0) {
      writer.uint32(32).uint32(message.version);
    }
    if (message.chainId !== "") {
      writer.uint32(42).string(message.chainId);
    }
    if (message.txHash !== "") {
      writer.uint32(50).string(message.txHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BusEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBusEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.block = reader.string();
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 101:
          message.timeUpdate = TimeUpdate.decode(reader, reader.uint32());
          break;
        case 102:
          message.transferResponses = TransferResponses.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.positionResolution = PositionResolution.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 105:
          message.account = Account.decode(reader, reader.uint32());
          break;
        case 106:
          message.party = Party.decode(reader, reader.uint32());
          break;
        case 107:
          message.trade = Trade.decode(reader, reader.uint32());
          break;
        case 108:
          message.marginLevels = MarginLevels.decode(reader, reader.uint32());
          break;
        case 109:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        case 110:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 111:
          message.marketData = MarketData.decode(reader, reader.uint32());
          break;
        case 112:
          message.nodeSignature = NodeSignature.decode(reader, reader.uint32());
          break;
        case 113:
          message.lossSocialization = LossSocialization.decode(
            reader,
            reader.uint32()
          );
          break;
        case 114:
          message.settlePosition = SettlePosition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 115:
          message.settleDistressed = SettleDistressed.decode(
            reader,
            reader.uint32()
          );
          break;
        case 116:
          message.marketCreated = Market.decode(reader, reader.uint32());
          break;
        case 117:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 118:
          message.marketTick = MarketTick.decode(reader, reader.uint32());
          break;
        case 119:
          message.withdrawal = Withdrawal.decode(reader, reader.uint32());
          break;
        case 120:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        case 121:
          message.auction = AuctionEvent.decode(reader, reader.uint32());
          break;
        case 122:
          message.riskFactor = RiskFactor.decode(reader, reader.uint32());
          break;
        case 123:
          message.networkParameter = NetworkParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 124:
          message.liquidityProvision = LiquidityProvision.decode(
            reader,
            reader.uint32()
          );
          break;
        case 125:
          message.marketUpdated = Market.decode(reader, reader.uint32());
          break;
        case 126:
          message.oracleSpec = OracleSpec.decode(reader, reader.uint32());
          break;
        case 127:
          message.oracleData = OracleData.decode(reader, reader.uint32());
          break;
        case 129:
          message.delegationBalance = DelegationBalanceEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 130:
          message.validatorScore = ValidatorScoreEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 131:
          message.epochEvent = EpochEvent.decode(reader, reader.uint32());
          break;
        case 132:
          message.validatorUpdate = ValidatorUpdate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 133:
          message.stakeLinking = StakeLinking.decode(reader, reader.uint32());
          break;
        case 134:
          message.rewardPayout = RewardPayoutEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 135:
          message.checkpoint = CheckpointEvent.decode(reader, reader.uint32());
          break;
        case 136:
          message.keyRotation = KeyRotation.decode(reader, reader.uint32());
          break;
        case 137:
          message.stateVar = StateVar.decode(reader, reader.uint32());
          break;
        case 138:
          message.networkLimits = NetworkLimits.decode(reader, reader.uint32());
          break;
        case 139:
          message.transfer = Transfer.decode(reader, reader.uint32());
          break;
        case 140:
          message.rankingEvent = ValidatorRankingEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 141:
          message.erc20MultisigSignerEvent = ERC20MultiSigSignerEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 142:
          message.erc20MultisigSetThresholdEvent =
            ERC20MultiSigThresholdSetEvent.decode(reader, reader.uint32());
          break;
        case 143:
          message.erc20MultisigSignerAdded = ERC20MultiSigSignerAdded.decode(
            reader,
            reader.uint32()
          );
          break;
        case 144:
          message.erc20MultisigSignerRemoved =
            ERC20MultiSigSignerRemoved.decode(reader, reader.uint32());
          break;
        case 145:
          message.positionStateEvent = PositionStateEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 146:
          message.ethereumKeyRotation = EthereumKeyRotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1001:
          message.market = MarketEvent.decode(reader, reader.uint32());
          break;
        case 2001:
          message.txErrEvent = TxErrorEvent.decode(reader, reader.uint32());
          break;
        case 4:
          message.version = reader.uint32();
          break;
        case 5:
          message.chainId = reader.string();
          break;
        case 6:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BusEvent {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      block: isSet(object.block) ? String(object.block) : "",
      type: isSet(object.type) ? busEventTypeFromJSON(object.type) : 0,
      timeUpdate: isSet(object.timeUpdate)
        ? TimeUpdate.fromJSON(object.timeUpdate)
        : undefined,
      transferResponses: isSet(object.transferResponses)
        ? TransferResponses.fromJSON(object.transferResponses)
        : undefined,
      positionResolution: isSet(object.positionResolution)
        ? PositionResolution.fromJSON(object.positionResolution)
        : undefined,
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
      party: isSet(object.party) ? Party.fromJSON(object.party) : undefined,
      trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined,
      marginLevels: isSet(object.marginLevels)
        ? MarginLevels.fromJSON(object.marginLevels)
        : undefined,
      proposal: isSet(object.proposal)
        ? Proposal.fromJSON(object.proposal)
        : undefined,
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined,
      marketData: isSet(object.marketData)
        ? MarketData.fromJSON(object.marketData)
        : undefined,
      nodeSignature: isSet(object.nodeSignature)
        ? NodeSignature.fromJSON(object.nodeSignature)
        : undefined,
      lossSocialization: isSet(object.lossSocialization)
        ? LossSocialization.fromJSON(object.lossSocialization)
        : undefined,
      settlePosition: isSet(object.settlePosition)
        ? SettlePosition.fromJSON(object.settlePosition)
        : undefined,
      settleDistressed: isSet(object.settleDistressed)
        ? SettleDistressed.fromJSON(object.settleDistressed)
        : undefined,
      marketCreated: isSet(object.marketCreated)
        ? Market.fromJSON(object.marketCreated)
        : undefined,
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      marketTick: isSet(object.marketTick)
        ? MarketTick.fromJSON(object.marketTick)
        : undefined,
      withdrawal: isSet(object.withdrawal)
        ? Withdrawal.fromJSON(object.withdrawal)
        : undefined,
      deposit: isSet(object.deposit)
        ? Deposit.fromJSON(object.deposit)
        : undefined,
      auction: isSet(object.auction)
        ? AuctionEvent.fromJSON(object.auction)
        : undefined,
      riskFactor: isSet(object.riskFactor)
        ? RiskFactor.fromJSON(object.riskFactor)
        : undefined,
      networkParameter: isSet(object.networkParameter)
        ? NetworkParameter.fromJSON(object.networkParameter)
        : undefined,
      liquidityProvision: isSet(object.liquidityProvision)
        ? LiquidityProvision.fromJSON(object.liquidityProvision)
        : undefined,
      marketUpdated: isSet(object.marketUpdated)
        ? Market.fromJSON(object.marketUpdated)
        : undefined,
      oracleSpec: isSet(object.oracleSpec)
        ? OracleSpec.fromJSON(object.oracleSpec)
        : undefined,
      oracleData: isSet(object.oracleData)
        ? OracleData.fromJSON(object.oracleData)
        : undefined,
      delegationBalance: isSet(object.delegationBalance)
        ? DelegationBalanceEvent.fromJSON(object.delegationBalance)
        : undefined,
      validatorScore: isSet(object.validatorScore)
        ? ValidatorScoreEvent.fromJSON(object.validatorScore)
        : undefined,
      epochEvent: isSet(object.epochEvent)
        ? EpochEvent.fromJSON(object.epochEvent)
        : undefined,
      validatorUpdate: isSet(object.validatorUpdate)
        ? ValidatorUpdate.fromJSON(object.validatorUpdate)
        : undefined,
      stakeLinking: isSet(object.stakeLinking)
        ? StakeLinking.fromJSON(object.stakeLinking)
        : undefined,
      rewardPayout: isSet(object.rewardPayout)
        ? RewardPayoutEvent.fromJSON(object.rewardPayout)
        : undefined,
      checkpoint: isSet(object.checkpoint)
        ? CheckpointEvent.fromJSON(object.checkpoint)
        : undefined,
      keyRotation: isSet(object.keyRotation)
        ? KeyRotation.fromJSON(object.keyRotation)
        : undefined,
      stateVar: isSet(object.stateVar)
        ? StateVar.fromJSON(object.stateVar)
        : undefined,
      networkLimits: isSet(object.networkLimits)
        ? NetworkLimits.fromJSON(object.networkLimits)
        : undefined,
      transfer: isSet(object.transfer)
        ? Transfer.fromJSON(object.transfer)
        : undefined,
      rankingEvent: isSet(object.rankingEvent)
        ? ValidatorRankingEvent.fromJSON(object.rankingEvent)
        : undefined,
      erc20MultisigSignerEvent: isSet(object.erc20MultisigSignerEvent)
        ? ERC20MultiSigSignerEvent.fromJSON(object.erc20MultisigSignerEvent)
        : undefined,
      erc20MultisigSetThresholdEvent: isSet(
        object.erc20MultisigSetThresholdEvent
      )
        ? ERC20MultiSigThresholdSetEvent.fromJSON(
            object.erc20MultisigSetThresholdEvent
          )
        : undefined,
      erc20MultisigSignerAdded: isSet(object.erc20MultisigSignerAdded)
        ? ERC20MultiSigSignerAdded.fromJSON(object.erc20MultisigSignerAdded)
        : undefined,
      erc20MultisigSignerRemoved: isSet(object.erc20MultisigSignerRemoved)
        ? ERC20MultiSigSignerRemoved.fromJSON(object.erc20MultisigSignerRemoved)
        : undefined,
      positionStateEvent: isSet(object.positionStateEvent)
        ? PositionStateEvent.fromJSON(object.positionStateEvent)
        : undefined,
      ethereumKeyRotation: isSet(object.ethereumKeyRotation)
        ? EthereumKeyRotation.fromJSON(object.ethereumKeyRotation)
        : undefined,
      market: isSet(object.market)
        ? MarketEvent.fromJSON(object.market)
        : undefined,
      txErrEvent: isSet(object.txErrEvent)
        ? TxErrorEvent.fromJSON(object.txErrEvent)
        : undefined,
      version: isSet(object.version) ? Number(object.version) : 0,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
    };
  },

  toJSON(message: BusEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.block !== undefined && (obj.block = message.block);
    message.type !== undefined && (obj.type = busEventTypeToJSON(message.type));
    message.timeUpdate !== undefined &&
      (obj.timeUpdate = message.timeUpdate
        ? TimeUpdate.toJSON(message.timeUpdate)
        : undefined);
    message.transferResponses !== undefined &&
      (obj.transferResponses = message.transferResponses
        ? TransferResponses.toJSON(message.transferResponses)
        : undefined);
    message.positionResolution !== undefined &&
      (obj.positionResolution = message.positionResolution
        ? PositionResolution.toJSON(message.positionResolution)
        : undefined);
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    message.party !== undefined &&
      (obj.party = message.party ? Party.toJSON(message.party) : undefined);
    message.trade !== undefined &&
      (obj.trade = message.trade ? Trade.toJSON(message.trade) : undefined);
    message.marginLevels !== undefined &&
      (obj.marginLevels = message.marginLevels
        ? MarginLevels.toJSON(message.marginLevels)
        : undefined);
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.marketData !== undefined &&
      (obj.marketData = message.marketData
        ? MarketData.toJSON(message.marketData)
        : undefined);
    message.nodeSignature !== undefined &&
      (obj.nodeSignature = message.nodeSignature
        ? NodeSignature.toJSON(message.nodeSignature)
        : undefined);
    message.lossSocialization !== undefined &&
      (obj.lossSocialization = message.lossSocialization
        ? LossSocialization.toJSON(message.lossSocialization)
        : undefined);
    message.settlePosition !== undefined &&
      (obj.settlePosition = message.settlePosition
        ? SettlePosition.toJSON(message.settlePosition)
        : undefined);
    message.settleDistressed !== undefined &&
      (obj.settleDistressed = message.settleDistressed
        ? SettleDistressed.toJSON(message.settleDistressed)
        : undefined);
    message.marketCreated !== undefined &&
      (obj.marketCreated = message.marketCreated
        ? Market.toJSON(message.marketCreated)
        : undefined);
    message.asset !== undefined &&
      (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.marketTick !== undefined &&
      (obj.marketTick = message.marketTick
        ? MarketTick.toJSON(message.marketTick)
        : undefined);
    message.withdrawal !== undefined &&
      (obj.withdrawal = message.withdrawal
        ? Withdrawal.toJSON(message.withdrawal)
        : undefined);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? Deposit.toJSON(message.deposit)
        : undefined);
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? AuctionEvent.toJSON(message.auction)
        : undefined);
    message.riskFactor !== undefined &&
      (obj.riskFactor = message.riskFactor
        ? RiskFactor.toJSON(message.riskFactor)
        : undefined);
    message.networkParameter !== undefined &&
      (obj.networkParameter = message.networkParameter
        ? NetworkParameter.toJSON(message.networkParameter)
        : undefined);
    message.liquidityProvision !== undefined &&
      (obj.liquidityProvision = message.liquidityProvision
        ? LiquidityProvision.toJSON(message.liquidityProvision)
        : undefined);
    message.marketUpdated !== undefined &&
      (obj.marketUpdated = message.marketUpdated
        ? Market.toJSON(message.marketUpdated)
        : undefined);
    message.oracleSpec !== undefined &&
      (obj.oracleSpec = message.oracleSpec
        ? OracleSpec.toJSON(message.oracleSpec)
        : undefined);
    message.oracleData !== undefined &&
      (obj.oracleData = message.oracleData
        ? OracleData.toJSON(message.oracleData)
        : undefined);
    message.delegationBalance !== undefined &&
      (obj.delegationBalance = message.delegationBalance
        ? DelegationBalanceEvent.toJSON(message.delegationBalance)
        : undefined);
    message.validatorScore !== undefined &&
      (obj.validatorScore = message.validatorScore
        ? ValidatorScoreEvent.toJSON(message.validatorScore)
        : undefined);
    message.epochEvent !== undefined &&
      (obj.epochEvent = message.epochEvent
        ? EpochEvent.toJSON(message.epochEvent)
        : undefined);
    message.validatorUpdate !== undefined &&
      (obj.validatorUpdate = message.validatorUpdate
        ? ValidatorUpdate.toJSON(message.validatorUpdate)
        : undefined);
    message.stakeLinking !== undefined &&
      (obj.stakeLinking = message.stakeLinking
        ? StakeLinking.toJSON(message.stakeLinking)
        : undefined);
    message.rewardPayout !== undefined &&
      (obj.rewardPayout = message.rewardPayout
        ? RewardPayoutEvent.toJSON(message.rewardPayout)
        : undefined);
    message.checkpoint !== undefined &&
      (obj.checkpoint = message.checkpoint
        ? CheckpointEvent.toJSON(message.checkpoint)
        : undefined);
    message.keyRotation !== undefined &&
      (obj.keyRotation = message.keyRotation
        ? KeyRotation.toJSON(message.keyRotation)
        : undefined);
    message.stateVar !== undefined &&
      (obj.stateVar = message.stateVar
        ? StateVar.toJSON(message.stateVar)
        : undefined);
    message.networkLimits !== undefined &&
      (obj.networkLimits = message.networkLimits
        ? NetworkLimits.toJSON(message.networkLimits)
        : undefined);
    message.transfer !== undefined &&
      (obj.transfer = message.transfer
        ? Transfer.toJSON(message.transfer)
        : undefined);
    message.rankingEvent !== undefined &&
      (obj.rankingEvent = message.rankingEvent
        ? ValidatorRankingEvent.toJSON(message.rankingEvent)
        : undefined);
    message.erc20MultisigSignerEvent !== undefined &&
      (obj.erc20MultisigSignerEvent = message.erc20MultisigSignerEvent
        ? ERC20MultiSigSignerEvent.toJSON(message.erc20MultisigSignerEvent)
        : undefined);
    message.erc20MultisigSetThresholdEvent !== undefined &&
      (obj.erc20MultisigSetThresholdEvent =
        message.erc20MultisigSetThresholdEvent
          ? ERC20MultiSigThresholdSetEvent.toJSON(
              message.erc20MultisigSetThresholdEvent
            )
          : undefined);
    message.erc20MultisigSignerAdded !== undefined &&
      (obj.erc20MultisigSignerAdded = message.erc20MultisigSignerAdded
        ? ERC20MultiSigSignerAdded.toJSON(message.erc20MultisigSignerAdded)
        : undefined);
    message.erc20MultisigSignerRemoved !== undefined &&
      (obj.erc20MultisigSignerRemoved = message.erc20MultisigSignerRemoved
        ? ERC20MultiSigSignerRemoved.toJSON(message.erc20MultisigSignerRemoved)
        : undefined);
    message.positionStateEvent !== undefined &&
      (obj.positionStateEvent = message.positionStateEvent
        ? PositionStateEvent.toJSON(message.positionStateEvent)
        : undefined);
    message.ethereumKeyRotation !== undefined &&
      (obj.ethereumKeyRotation = message.ethereumKeyRotation
        ? EthereumKeyRotation.toJSON(message.ethereumKeyRotation)
        : undefined);
    message.market !== undefined &&
      (obj.market = message.market
        ? MarketEvent.toJSON(message.market)
        : undefined);
    message.txErrEvent !== undefined &&
      (obj.txErrEvent = message.txErrEvent
        ? TxErrorEvent.toJSON(message.txErrEvent)
        : undefined);
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BusEvent>, I>>(object: I): BusEvent {
    const message = createBaseBusEvent();
    message.id = object.id ?? "";
    message.block = object.block ?? "";
    message.type = object.type ?? 0;
    message.timeUpdate =
      object.timeUpdate !== undefined && object.timeUpdate !== null
        ? TimeUpdate.fromPartial(object.timeUpdate)
        : undefined;
    message.transferResponses =
      object.transferResponses !== undefined &&
      object.transferResponses !== null
        ? TransferResponses.fromPartial(object.transferResponses)
        : undefined;
    message.positionResolution =
      object.positionResolution !== undefined &&
      object.positionResolution !== null
        ? PositionResolution.fromPartial(object.positionResolution)
        : undefined;
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
        : undefined;
    message.party =
      object.party !== undefined && object.party !== null
        ? Party.fromPartial(object.party)
        : undefined;
    message.trade =
      object.trade !== undefined && object.trade !== null
        ? Trade.fromPartial(object.trade)
        : undefined;
    message.marginLevels =
      object.marginLevels !== undefined && object.marginLevels !== null
        ? MarginLevels.fromPartial(object.marginLevels)
        : undefined;
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    message.vote =
      object.vote !== undefined && object.vote !== null
        ? Vote.fromPartial(object.vote)
        : undefined;
    message.marketData =
      object.marketData !== undefined && object.marketData !== null
        ? MarketData.fromPartial(object.marketData)
        : undefined;
    message.nodeSignature =
      object.nodeSignature !== undefined && object.nodeSignature !== null
        ? NodeSignature.fromPartial(object.nodeSignature)
        : undefined;
    message.lossSocialization =
      object.lossSocialization !== undefined &&
      object.lossSocialization !== null
        ? LossSocialization.fromPartial(object.lossSocialization)
        : undefined;
    message.settlePosition =
      object.settlePosition !== undefined && object.settlePosition !== null
        ? SettlePosition.fromPartial(object.settlePosition)
        : undefined;
    message.settleDistressed =
      object.settleDistressed !== undefined && object.settleDistressed !== null
        ? SettleDistressed.fromPartial(object.settleDistressed)
        : undefined;
    message.marketCreated =
      object.marketCreated !== undefined && object.marketCreated !== null
        ? Market.fromPartial(object.marketCreated)
        : undefined;
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    message.marketTick =
      object.marketTick !== undefined && object.marketTick !== null
        ? MarketTick.fromPartial(object.marketTick)
        : undefined;
    message.withdrawal =
      object.withdrawal !== undefined && object.withdrawal !== null
        ? Withdrawal.fromPartial(object.withdrawal)
        : undefined;
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? Deposit.fromPartial(object.deposit)
        : undefined;
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? AuctionEvent.fromPartial(object.auction)
        : undefined;
    message.riskFactor =
      object.riskFactor !== undefined && object.riskFactor !== null
        ? RiskFactor.fromPartial(object.riskFactor)
        : undefined;
    message.networkParameter =
      object.networkParameter !== undefined && object.networkParameter !== null
        ? NetworkParameter.fromPartial(object.networkParameter)
        : undefined;
    message.liquidityProvision =
      object.liquidityProvision !== undefined &&
      object.liquidityProvision !== null
        ? LiquidityProvision.fromPartial(object.liquidityProvision)
        : undefined;
    message.marketUpdated =
      object.marketUpdated !== undefined && object.marketUpdated !== null
        ? Market.fromPartial(object.marketUpdated)
        : undefined;
    message.oracleSpec =
      object.oracleSpec !== undefined && object.oracleSpec !== null
        ? OracleSpec.fromPartial(object.oracleSpec)
        : undefined;
    message.oracleData =
      object.oracleData !== undefined && object.oracleData !== null
        ? OracleData.fromPartial(object.oracleData)
        : undefined;
    message.delegationBalance =
      object.delegationBalance !== undefined &&
      object.delegationBalance !== null
        ? DelegationBalanceEvent.fromPartial(object.delegationBalance)
        : undefined;
    message.validatorScore =
      object.validatorScore !== undefined && object.validatorScore !== null
        ? ValidatorScoreEvent.fromPartial(object.validatorScore)
        : undefined;
    message.epochEvent =
      object.epochEvent !== undefined && object.epochEvent !== null
        ? EpochEvent.fromPartial(object.epochEvent)
        : undefined;
    message.validatorUpdate =
      object.validatorUpdate !== undefined && object.validatorUpdate !== null
        ? ValidatorUpdate.fromPartial(object.validatorUpdate)
        : undefined;
    message.stakeLinking =
      object.stakeLinking !== undefined && object.stakeLinking !== null
        ? StakeLinking.fromPartial(object.stakeLinking)
        : undefined;
    message.rewardPayout =
      object.rewardPayout !== undefined && object.rewardPayout !== null
        ? RewardPayoutEvent.fromPartial(object.rewardPayout)
        : undefined;
    message.checkpoint =
      object.checkpoint !== undefined && object.checkpoint !== null
        ? CheckpointEvent.fromPartial(object.checkpoint)
        : undefined;
    message.keyRotation =
      object.keyRotation !== undefined && object.keyRotation !== null
        ? KeyRotation.fromPartial(object.keyRotation)
        : undefined;
    message.stateVar =
      object.stateVar !== undefined && object.stateVar !== null
        ? StateVar.fromPartial(object.stateVar)
        : undefined;
    message.networkLimits =
      object.networkLimits !== undefined && object.networkLimits !== null
        ? NetworkLimits.fromPartial(object.networkLimits)
        : undefined;
    message.transfer =
      object.transfer !== undefined && object.transfer !== null
        ? Transfer.fromPartial(object.transfer)
        : undefined;
    message.rankingEvent =
      object.rankingEvent !== undefined && object.rankingEvent !== null
        ? ValidatorRankingEvent.fromPartial(object.rankingEvent)
        : undefined;
    message.erc20MultisigSignerEvent =
      object.erc20MultisigSignerEvent !== undefined &&
      object.erc20MultisigSignerEvent !== null
        ? ERC20MultiSigSignerEvent.fromPartial(object.erc20MultisigSignerEvent)
        : undefined;
    message.erc20MultisigSetThresholdEvent =
      object.erc20MultisigSetThresholdEvent !== undefined &&
      object.erc20MultisigSetThresholdEvent !== null
        ? ERC20MultiSigThresholdSetEvent.fromPartial(
            object.erc20MultisigSetThresholdEvent
          )
        : undefined;
    message.erc20MultisigSignerAdded =
      object.erc20MultisigSignerAdded !== undefined &&
      object.erc20MultisigSignerAdded !== null
        ? ERC20MultiSigSignerAdded.fromPartial(object.erc20MultisigSignerAdded)
        : undefined;
    message.erc20MultisigSignerRemoved =
      object.erc20MultisigSignerRemoved !== undefined &&
      object.erc20MultisigSignerRemoved !== null
        ? ERC20MultiSigSignerRemoved.fromPartial(
            object.erc20MultisigSignerRemoved
          )
        : undefined;
    message.positionStateEvent =
      object.positionStateEvent !== undefined &&
      object.positionStateEvent !== null
        ? PositionStateEvent.fromPartial(object.positionStateEvent)
        : undefined;
    message.ethereumKeyRotation =
      object.ethereumKeyRotation !== undefined &&
      object.ethereumKeyRotation !== null
        ? EthereumKeyRotation.fromPartial(object.ethereumKeyRotation)
        : undefined;
    message.market =
      object.market !== undefined && object.market !== null
        ? MarketEvent.fromPartial(object.market)
        : undefined;
    message.txErrEvent =
      object.txErrEvent !== undefined && object.txErrEvent !== null
        ? TxErrorEvent.fromPartial(object.txErrEvent)
        : undefined;
    message.version = object.version ?? 0;
    message.chainId = object.chainId ?? "";
    message.txHash = object.txHash ?? "";
    return message;
  },
};

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
