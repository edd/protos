/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { OracleSpecConfiguration } from "../vega/oracles/v1/spec";
import {
  OracleSpecToFutureBinding,
  PriceMonitoringParameters,
  LiquidityMonitoringParameters,
  SimpleModelParams,
  LogNormalRiskModel,
} from "../vega/markets";
import { LiquidityOrder, NetworkParameter } from "../vega/vega";
import { AssetDetails } from "../vega/assets";

export const protobufPackage = "vega";

/** A list of possible errors that can cause a proposal to be in state rejected or failed */
export enum ProposalError {
  /** PROPOSAL_ERROR_UNSPECIFIED - Default value */
  PROPOSAL_ERROR_UNSPECIFIED = 0,
  /** PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON - The specified close time is too early base on network parameters */
  PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON = 1,
  /** PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE - The specified close time is too late based on network parameters */
  PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE = 2,
  /** PROPOSAL_ERROR_ENACT_TIME_TOO_SOON - The specified enact time is too early based on network parameters */
  PROPOSAL_ERROR_ENACT_TIME_TOO_SOON = 3,
  /** PROPOSAL_ERROR_ENACT_TIME_TOO_LATE - The specified enact time is too late based on network parameters */
  PROPOSAL_ERROR_ENACT_TIME_TOO_LATE = 4,
  /** PROPOSAL_ERROR_INSUFFICIENT_TOKENS - The proposer for this proposal as insufficient tokens */
  PROPOSAL_ERROR_INSUFFICIENT_TOKENS = 5,
  /** PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY - The instrument quote name and base name were the same */
  PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY = 6,
  /** PROPOSAL_ERROR_NO_PRODUCT - The proposal has no product */
  PROPOSAL_ERROR_NO_PRODUCT = 7,
  /** PROPOSAL_ERROR_UNSUPPORTED_PRODUCT - The specified product is not supported */
  PROPOSAL_ERROR_UNSUPPORTED_PRODUCT = 8,
  /** PROPOSAL_ERROR_NO_TRADING_MODE - The proposal has no trading mode */
  PROPOSAL_ERROR_NO_TRADING_MODE = 11,
  /** PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE - The proposal has an unsupported trading mode */
  PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE = 12,
  /** PROPOSAL_ERROR_NODE_VALIDATION_FAILED - The proposal failed node validation */
  PROPOSAL_ERROR_NODE_VALIDATION_FAILED = 13,
  /** PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD - A field is missing in a builtin asset source */
  PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD = 14,
  /** PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS - The contract address is missing in the ERC20 asset source */
  PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS = 15,
  /** PROPOSAL_ERROR_INVALID_ASSET - The asset identifier is invalid or does not exist on the Vega network */
  PROPOSAL_ERROR_INVALID_ASSET = 16,
  /** PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS - Proposal terms timestamps are not compatible (Validation < Closing < Enactment) */
  PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS = 17,
  /** PROPOSAL_ERROR_NO_RISK_PARAMETERS - No risk parameters were specified */
  PROPOSAL_ERROR_NO_RISK_PARAMETERS = 18,
  /** PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY - Invalid key in update network parameter proposal */
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY = 19,
  /** PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE - Invalid valid in update network parameter proposal */
  PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE = 20,
  /** PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED - Validation failed for network parameter proposal */
  PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED = 21,
  /** PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL - Opening auction duration is less than the network minimum opening auction time */
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL = 22,
  /** PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE - Opening auction duration is more than the network minimum opening auction time */
  PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE = 23,
  /** PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT - Market proposal is missing a liquidity commitment */
  PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT = 24,
  /** PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET - Market proposal market could not be instantiate in execution */
  PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET = 25,
  /** PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT - Market proposal market contained invalid product definition */
  PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT = 26,
  /** PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT - Market proposal is missing commitment amount */
  PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT = 27,
  /** PROPOSAL_ERROR_INVALID_FEE_AMOUNT - Market proposal have invalid fee */
  PROPOSAL_ERROR_INVALID_FEE_AMOUNT = 28,
  /** PROPOSAL_ERROR_INVALID_SHAPE - Market proposal have invalid shape */
  PROPOSAL_ERROR_INVALID_SHAPE = 29,
  /** PROPOSAL_ERROR_INVALID_RISK_PARAMETER - Market proposal invalid risk parameter */
  PROPOSAL_ERROR_INVALID_RISK_PARAMETER = 30,
  /** PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED - Proposal was declined because vote didn't reach the majority threshold required */
  PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED = 31,
  /** PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED - Proposal declined because the participation threshold was not reached */
  PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED = 32,
  /** PROPOSAL_ERROR_INVALID_ASSET_DETAILS - Asset proposal invalid asset details */
  PROPOSAL_ERROR_INVALID_ASSET_DETAILS = 33,
  /** PROPOSAL_ERROR_UNKNOWN_TYPE - Proposal is an unknown type. */
  PROPOSAL_ERROR_UNKNOWN_TYPE = 34,
  /** PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE - Proposal has an unknown risk parameter type. */
  PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE = 35,
  /** PROPOSAL_ERROR_INVALID_FREEFORM - Validation failed for freeform proposal. */
  PROPOSAL_ERROR_INVALID_FREEFORM = 36,
  /**
   * PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE - The party doesn't have enough equity-like share to propose an update on the market
   * targeted by the proposal.
   */
  PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE = 37,
  /** PROPOSAL_ERROR_INVALID_MARKET - The market targeted by the proposal does not exist or is not eligible to modification. */
  PROPOSAL_ERROR_INVALID_MARKET = 38,
  /** PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES - The market proposal decimal place is higher to the market settlement asset decimal places */
  PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES = 39,
  /** PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS - The market proposal contains too many price monitoring triggers */
  PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS = 40,
  UNRECOGNIZED = -1,
}

export function proposalErrorFromJSON(object: any): ProposalError {
  switch (object) {
    case 0:
    case "PROPOSAL_ERROR_UNSPECIFIED":
      return ProposalError.PROPOSAL_ERROR_UNSPECIFIED;
    case 1:
    case "PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON":
      return ProposalError.PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON;
    case 2:
    case "PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE":
      return ProposalError.PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE;
    case 3:
    case "PROPOSAL_ERROR_ENACT_TIME_TOO_SOON":
      return ProposalError.PROPOSAL_ERROR_ENACT_TIME_TOO_SOON;
    case 4:
    case "PROPOSAL_ERROR_ENACT_TIME_TOO_LATE":
      return ProposalError.PROPOSAL_ERROR_ENACT_TIME_TOO_LATE;
    case 5:
    case "PROPOSAL_ERROR_INSUFFICIENT_TOKENS":
      return ProposalError.PROPOSAL_ERROR_INSUFFICIENT_TOKENS;
    case 6:
    case "PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY":
      return ProposalError.PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY;
    case 7:
    case "PROPOSAL_ERROR_NO_PRODUCT":
      return ProposalError.PROPOSAL_ERROR_NO_PRODUCT;
    case 8:
    case "PROPOSAL_ERROR_UNSUPPORTED_PRODUCT":
      return ProposalError.PROPOSAL_ERROR_UNSUPPORTED_PRODUCT;
    case 11:
    case "PROPOSAL_ERROR_NO_TRADING_MODE":
      return ProposalError.PROPOSAL_ERROR_NO_TRADING_MODE;
    case 12:
    case "PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE":
      return ProposalError.PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE;
    case 13:
    case "PROPOSAL_ERROR_NODE_VALIDATION_FAILED":
      return ProposalError.PROPOSAL_ERROR_NODE_VALIDATION_FAILED;
    case 14:
    case "PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD":
      return ProposalError.PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD;
    case 15:
    case "PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS":
      return ProposalError.PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS;
    case 16:
    case "PROPOSAL_ERROR_INVALID_ASSET":
      return ProposalError.PROPOSAL_ERROR_INVALID_ASSET;
    case 17:
    case "PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS":
      return ProposalError.PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS;
    case 18:
    case "PROPOSAL_ERROR_NO_RISK_PARAMETERS":
      return ProposalError.PROPOSAL_ERROR_NO_RISK_PARAMETERS;
    case 19:
    case "PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY":
      return ProposalError.PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY;
    case 20:
    case "PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE":
      return ProposalError.PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE;
    case 21:
    case "PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED":
      return ProposalError.PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED;
    case 22:
    case "PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL":
      return ProposalError.PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL;
    case 23:
    case "PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE":
      return ProposalError.PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE;
    case 24:
    case "PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT":
      return ProposalError.PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT;
    case 25:
    case "PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET":
      return ProposalError.PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET;
    case 26:
    case "PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT":
      return ProposalError.PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT;
    case 27:
    case "PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT":
      return ProposalError.PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT;
    case 28:
    case "PROPOSAL_ERROR_INVALID_FEE_AMOUNT":
      return ProposalError.PROPOSAL_ERROR_INVALID_FEE_AMOUNT;
    case 29:
    case "PROPOSAL_ERROR_INVALID_SHAPE":
      return ProposalError.PROPOSAL_ERROR_INVALID_SHAPE;
    case 30:
    case "PROPOSAL_ERROR_INVALID_RISK_PARAMETER":
      return ProposalError.PROPOSAL_ERROR_INVALID_RISK_PARAMETER;
    case 31:
    case "PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED":
      return ProposalError.PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED;
    case 32:
    case "PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED":
      return ProposalError.PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED;
    case 33:
    case "PROPOSAL_ERROR_INVALID_ASSET_DETAILS":
      return ProposalError.PROPOSAL_ERROR_INVALID_ASSET_DETAILS;
    case 34:
    case "PROPOSAL_ERROR_UNKNOWN_TYPE":
      return ProposalError.PROPOSAL_ERROR_UNKNOWN_TYPE;
    case 35:
    case "PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE":
      return ProposalError.PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE;
    case 36:
    case "PROPOSAL_ERROR_INVALID_FREEFORM":
      return ProposalError.PROPOSAL_ERROR_INVALID_FREEFORM;
    case 37:
    case "PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE":
      return ProposalError.PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE;
    case 38:
    case "PROPOSAL_ERROR_INVALID_MARKET":
      return ProposalError.PROPOSAL_ERROR_INVALID_MARKET;
    case 39:
    case "PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES":
      return ProposalError.PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES;
    case 40:
    case "PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS":
      return ProposalError.PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalError.UNRECOGNIZED;
  }
}

export function proposalErrorToJSON(object: ProposalError): string {
  switch (object) {
    case ProposalError.PROPOSAL_ERROR_UNSPECIFIED:
      return "PROPOSAL_ERROR_UNSPECIFIED";
    case ProposalError.PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON:
      return "PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON";
    case ProposalError.PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE:
      return "PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE";
    case ProposalError.PROPOSAL_ERROR_ENACT_TIME_TOO_SOON:
      return "PROPOSAL_ERROR_ENACT_TIME_TOO_SOON";
    case ProposalError.PROPOSAL_ERROR_ENACT_TIME_TOO_LATE:
      return "PROPOSAL_ERROR_ENACT_TIME_TOO_LATE";
    case ProposalError.PROPOSAL_ERROR_INSUFFICIENT_TOKENS:
      return "PROPOSAL_ERROR_INSUFFICIENT_TOKENS";
    case ProposalError.PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY:
      return "PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY";
    case ProposalError.PROPOSAL_ERROR_NO_PRODUCT:
      return "PROPOSAL_ERROR_NO_PRODUCT";
    case ProposalError.PROPOSAL_ERROR_UNSUPPORTED_PRODUCT:
      return "PROPOSAL_ERROR_UNSUPPORTED_PRODUCT";
    case ProposalError.PROPOSAL_ERROR_NO_TRADING_MODE:
      return "PROPOSAL_ERROR_NO_TRADING_MODE";
    case ProposalError.PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE:
      return "PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE";
    case ProposalError.PROPOSAL_ERROR_NODE_VALIDATION_FAILED:
      return "PROPOSAL_ERROR_NODE_VALIDATION_FAILED";
    case ProposalError.PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD:
      return "PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD";
    case ProposalError.PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS:
      return "PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS";
    case ProposalError.PROPOSAL_ERROR_INVALID_ASSET:
      return "PROPOSAL_ERROR_INVALID_ASSET";
    case ProposalError.PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS:
      return "PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS";
    case ProposalError.PROPOSAL_ERROR_NO_RISK_PARAMETERS:
      return "PROPOSAL_ERROR_NO_RISK_PARAMETERS";
    case ProposalError.PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY:
      return "PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY";
    case ProposalError.PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE:
      return "PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE";
    case ProposalError.PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED:
      return "PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED";
    case ProposalError.PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL:
      return "PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL";
    case ProposalError.PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE:
      return "PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE";
    case ProposalError.PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT:
      return "PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT";
    case ProposalError.PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET:
      return "PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET";
    case ProposalError.PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT:
      return "PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT";
    case ProposalError.PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT:
      return "PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT";
    case ProposalError.PROPOSAL_ERROR_INVALID_FEE_AMOUNT:
      return "PROPOSAL_ERROR_INVALID_FEE_AMOUNT";
    case ProposalError.PROPOSAL_ERROR_INVALID_SHAPE:
      return "PROPOSAL_ERROR_INVALID_SHAPE";
    case ProposalError.PROPOSAL_ERROR_INVALID_RISK_PARAMETER:
      return "PROPOSAL_ERROR_INVALID_RISK_PARAMETER";
    case ProposalError.PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED:
      return "PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED";
    case ProposalError.PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED:
      return "PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED";
    case ProposalError.PROPOSAL_ERROR_INVALID_ASSET_DETAILS:
      return "PROPOSAL_ERROR_INVALID_ASSET_DETAILS";
    case ProposalError.PROPOSAL_ERROR_UNKNOWN_TYPE:
      return "PROPOSAL_ERROR_UNKNOWN_TYPE";
    case ProposalError.PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE:
      return "PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE";
    case ProposalError.PROPOSAL_ERROR_INVALID_FREEFORM:
      return "PROPOSAL_ERROR_INVALID_FREEFORM";
    case ProposalError.PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE:
      return "PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE";
    case ProposalError.PROPOSAL_ERROR_INVALID_MARKET:
      return "PROPOSAL_ERROR_INVALID_MARKET";
    case ProposalError.PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES:
      return "PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES";
    case ProposalError.PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS:
      return "PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS";
    default:
      return "UNKNOWN";
  }
}

/** Future product configuration */
export interface FutureProduct {
  /** Product settlement asset identifier */
  settlementAsset: string;
  /** Product quote name */
  quoteName: string;
  /** The oracle spec describing the oracle data of settlement price */
  oracleSpecForSettlementPrice: OracleSpecConfiguration | undefined;
  /** The oracle spec describing the oracle data of trading termination */
  oracleSpecForTradingTermination: OracleSpecConfiguration | undefined;
  /** The binding between the oracle spec and the settlement price */
  oracleSpecBinding: OracleSpecToFutureBinding | undefined;
}

/** Instrument configuration */
export interface InstrumentConfiguration {
  /** Instrument name */
  name: string;
  /** Instrument code */
  code: string;
  /** Future */
  future: FutureProduct | undefined;
}

/** Configuration for a new market on Vega */
export interface NewMarketConfiguration {
  /** New market instrument configuration */
  instrument: InstrumentConfiguration | undefined;
  /** Decimal places used for the new market */
  decimalPlaces: string;
  /** Optional new market meta data, tags */
  metadata: string[];
  /** Price monitoring parameters */
  priceMonitoringParameters: PriceMonitoringParameters | undefined;
  /** Liquidity monitoring parameters */
  liquidityMonitoringParameters: LiquidityMonitoringParameters | undefined;
  /** Simple risk model parameters, valid only if MODEL_SIMPLE is selected */
  simple: SimpleModelParams | undefined;
  /** Log normal risk model parameters, valid only if MODEL_LOG_NORMAL is selected */
  logNormal: LogNormalRiskModel | undefined;
  /** Decimal places for order sizes */
  positionDecimalPlaces: string;
}

/** A commitment of liquidity to be made by the party which proposes a market */
export interface NewMarketCommitment {
  /** Specified as a unitless number that represents the amount of settlement asset of the market */
  commitmentAmount: string;
  /** Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per seeting fees and rewarding liquidity providers */
  fee: string;
  /** A set of liquidity sell orders to meet the liquidity provision obligation */
  sells: LiquidityOrder[];
  /** A set of liquidity buy orders to meet the liquidity provision obligation */
  buys: LiquidityOrder[];
  /** A reference to be associated to all orders created from this commitment */
  reference: string;
}

/** New market on Vega */
export interface NewMarket {
  /** The configuration of the new market */
  changes: NewMarketConfiguration | undefined;
  /** The commitment from the party creating the NewMarket proposal */
  liquidityCommitment: NewMarketCommitment | undefined;
}

/** Update an existing market on Vega */
export interface UpdateMarket {
  /** The market to update */
  marketId: string;
  /** The updated configuration of the market */
  changes: UpdateMarketConfiguration | undefined;
}

/** Configuration to update a market on Vega */
export interface UpdateMarketConfiguration {
  /** Updated market instrument configuration */
  instrument: UpdateInstrumentConfiguration | undefined;
  /** Optional market metadata, tags */
  metadata: string[];
  /** Price monitoring parameters */
  priceMonitoringParameters: PriceMonitoringParameters | undefined;
  /** Liquidity monitoring parameters */
  liquidityMonitoringParameters: LiquidityMonitoringParameters | undefined;
  /** Simple risk model parameters, valid only if MODEL_SIMPLE is selected */
  simple: SimpleModelParams | undefined;
  /** Log normal risk model parameters, valid only if MODEL_LOG_NORMAL is selected */
  logNormal: LogNormalRiskModel | undefined;
}

/** Instrument configuration */
export interface UpdateInstrumentConfiguration {
  /** Instrument code */
  code: string;
  /** Future */
  future: UpdateFutureProduct | undefined;
}

/** Future product configuration */
export interface UpdateFutureProduct {
  /** Product quote name */
  quoteName: string;
  /** The oracle spec describing the oracle data of settlement price */
  oracleSpecForSettlementPrice: OracleSpecConfiguration | undefined;
  /** The oracle spec describing the oracle data of trading termination */
  oracleSpecForTradingTermination: OracleSpecConfiguration | undefined;
  /** The binding between the oracle spec and the settlement price */
  oracleSpecBinding: OracleSpecToFutureBinding | undefined;
}

/** Update network configuration on Vega */
export interface UpdateNetworkParameter {
  /** The network parameter to update */
  changes: NetworkParameter | undefined;
}

/** New asset on Vega */
export interface NewAsset {
  /** The configuration of the new asset */
  changes: AssetDetails | undefined;
}

export interface NewFreeformDetails {
  /** The URL containing content that describes the proposal */
  url: string;
  /** A short description of what is being proposed */
  description: string;
  /** The hash on the content of the URL */
  hash: string;
}

/** Freeform proposal */
export interface NewFreeform {
  /** The configuration of the new freeform */
  changes: NewFreeformDetails | undefined;
}

/** Terms for a governance proposal on Vega */
export interface ProposalTerms {
  /**
   * Timestamp (Unix time in seconds) when voting closes for this proposal,
   * constrained by `minClose` and `maxClose` network parameters
   */
  closingTimestamp: string;
  /**
   * Timestamp (Unix time in seconds) when proposal gets enacted (if passed),
   * constrained by `minEnact` and `maxEnact` network parameters
   */
  enactmentTimestamp: string;
  /** Validation timestamp (Unix time in seconds) */
  validationTimestamp: string;
  /** Proposal change for modifying an existing market on Vega */
  updateMarket: UpdateMarket | undefined;
  /** Proposal change for creating new market on Vega */
  newMarket: NewMarket | undefined;
  /** Proposal change for updating Vega network parameters */
  updateNetworkParameter: UpdateNetworkParameter | undefined;
  /** Proposal change for creating new assets on Vega */
  newAsset: NewAsset | undefined;
  /** Proposal change for a freeform voting thing */
  newFreeform: NewFreeform | undefined;
}

/** Governance data */
export interface GovernanceData {
  /** The governance proposal */
  proposal: Proposal | undefined;
  /** All "yes" votes in favour of the proposal above */
  yes: Vote[];
  /** All "no" votes against the proposal above */
  no: Vote[];
  /**
   * All latest YES votes by party (guaranteed to be unique),
   * where key (string) is the party ID (public key) and
   * value (Vote) is the vote cast by the given party
   */
  yesParty: { [key: string]: Vote };
  /**
   * All latest NO votes by party (guaranteed to be unique),
   * where key (string) is the party ID (public key) and
   * value (Vote) is the vote cast by the given party
   */
  noParty: { [key: string]: Vote };
}

export interface GovernanceData_YesPartyEntry {
  key: string;
  value: Vote | undefined;
}

export interface GovernanceData_NoPartyEntry {
  key: string;
  value: Vote | undefined;
}

/** Governance proposal */
export interface Proposal {
  /** Unique proposal identifier */
  id: string;
  /** Proposal reference */
  reference: string;
  /** Party identifier of the author (the party submitting the proposal) */
  partyId: string;
  /** Proposal state - See (Proposal.State)[#vega.Proposal.State] definition */
  state: Proposal_State;
  /** Proposal timestamp for date and time (in nanoseconds) when proposal was submitted to the network */
  timestamp: string;
  /** Proposal configuration and the actual change that is meant to be executed when proposal is enacted */
  terms: ProposalTerms | undefined;
  /** A reason for the current state of the proposal, this may be set in case of REJECTED and FAILED statuses */
  reason: ProposalError;
  /** The detailed error associated to the reason. */
  errorDetails: string;
}

/**
 * Proposal state transition:
 * Open ->
 *   - Passed -> Enacted.
 *   - Passed -> Failed.
 *   - Declined
 * Rejected
 * Proposal can enter Failed state from any other state
 */
export enum Proposal_State {
  /** STATE_UNSPECIFIED - Default value, always invalid */
  STATE_UNSPECIFIED = 0,
  /** STATE_FAILED - Proposal enactment has failed - even though proposal has passed, its execution could not be performed */
  STATE_FAILED = 1,
  /** STATE_OPEN - Proposal is open for voting */
  STATE_OPEN = 2,
  /** STATE_PASSED - Proposal has gained enough support to be executed */
  STATE_PASSED = 3,
  /** STATE_REJECTED - Proposal wasn't accepted (proposal terms failed validation due to wrong configuration or failing to meet network requirements) */
  STATE_REJECTED = 4,
  /** STATE_DECLINED - Proposal didn't get enough votes (either failing to gain required participation or majority level) */
  STATE_DECLINED = 5,
  /** STATE_ENACTED - Proposal enacted */
  STATE_ENACTED = 6,
  /** STATE_WAITING_FOR_NODE_VOTE - Waiting for node validation of the proposal */
  STATE_WAITING_FOR_NODE_VOTE = 7,
  UNRECOGNIZED = -1,
}

export function proposal_StateFromJSON(object: any): Proposal_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Proposal_State.STATE_UNSPECIFIED;
    case 1:
    case "STATE_FAILED":
      return Proposal_State.STATE_FAILED;
    case 2:
    case "STATE_OPEN":
      return Proposal_State.STATE_OPEN;
    case 3:
    case "STATE_PASSED":
      return Proposal_State.STATE_PASSED;
    case 4:
    case "STATE_REJECTED":
      return Proposal_State.STATE_REJECTED;
    case 5:
    case "STATE_DECLINED":
      return Proposal_State.STATE_DECLINED;
    case 6:
    case "STATE_ENACTED":
      return Proposal_State.STATE_ENACTED;
    case 7:
    case "STATE_WAITING_FOR_NODE_VOTE":
      return Proposal_State.STATE_WAITING_FOR_NODE_VOTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_State.UNRECOGNIZED;
  }
}

export function proposal_StateToJSON(object: Proposal_State): string {
  switch (object) {
    case Proposal_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Proposal_State.STATE_FAILED:
      return "STATE_FAILED";
    case Proposal_State.STATE_OPEN:
      return "STATE_OPEN";
    case Proposal_State.STATE_PASSED:
      return "STATE_PASSED";
    case Proposal_State.STATE_REJECTED:
      return "STATE_REJECTED";
    case Proposal_State.STATE_DECLINED:
      return "STATE_DECLINED";
    case Proposal_State.STATE_ENACTED:
      return "STATE_ENACTED";
    case Proposal_State.STATE_WAITING_FOR_NODE_VOTE:
      return "STATE_WAITING_FOR_NODE_VOTE";
    default:
      return "UNKNOWN";
  }
}

/** Governance vote */
export interface Vote {
  /** Voter's party identifier */
  partyId: string;
  /** Actual vote */
  value: Vote_Value;
  /** Identifier of the proposal being voted on */
  proposalId: string;
  /** Vote timestamp for date and time (in nanoseconds) when vote was submitted to the network */
  timestamp: string;
  /** Total number of governance token for the party that casted the vote */
  totalGovernanceTokenBalance: string;
  /** The weight of this vote based on the total of governance token */
  totalGovernanceTokenWeight: string;
  /** The weight of the vote compared to the total number of equity-like share on the market. */
  totalEquityLikeShareWeight: string;
}

/** Vote value */
export enum Vote_Value {
  /** VALUE_UNSPECIFIED - Default value, always invalid */
  VALUE_UNSPECIFIED = 0,
  /** VALUE_NO - A vote against the proposal */
  VALUE_NO = 1,
  /** VALUE_YES - A vote in favour of the proposal */
  VALUE_YES = 2,
  UNRECOGNIZED = -1,
}

export function vote_ValueFromJSON(object: any): Vote_Value {
  switch (object) {
    case 0:
    case "VALUE_UNSPECIFIED":
      return Vote_Value.VALUE_UNSPECIFIED;
    case 1:
    case "VALUE_NO":
      return Vote_Value.VALUE_NO;
    case 2:
    case "VALUE_YES":
      return Vote_Value.VALUE_YES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Vote_Value.UNRECOGNIZED;
  }
}

export function vote_ValueToJSON(object: Vote_Value): string {
  switch (object) {
    case Vote_Value.VALUE_UNSPECIFIED:
      return "VALUE_UNSPECIFIED";
    case Vote_Value.VALUE_NO:
      return "VALUE_NO";
    case Vote_Value.VALUE_YES:
      return "VALUE_YES";
    default:
      return "UNKNOWN";
  }
}

function createBaseFutureProduct(): FutureProduct {
  return {
    settlementAsset: "",
    quoteName: "",
    oracleSpecForSettlementPrice: undefined,
    oracleSpecForTradingTermination: undefined,
    oracleSpecBinding: undefined,
  };
}

export const FutureProduct = {
  encode(
    message: FutureProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.settlementAsset !== "") {
      writer.uint32(18).string(message.settlementAsset);
    }
    if (message.quoteName !== "") {
      writer.uint32(26).string(message.quoteName);
    }
    if (message.oracleSpecForSettlementPrice !== undefined) {
      OracleSpecConfiguration.encode(
        message.oracleSpecForSettlementPrice,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.oracleSpecForTradingTermination !== undefined) {
      OracleSpecConfiguration.encode(
        message.oracleSpecForTradingTermination,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.oracleSpecBinding !== undefined) {
      OracleSpecToFutureBinding.encode(
        message.oracleSpecBinding,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FutureProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFutureProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.settlementAsset = reader.string();
          break;
        case 3:
          message.quoteName = reader.string();
          break;
        case 5:
          message.oracleSpecForSettlementPrice = OracleSpecConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.oracleSpecForTradingTermination =
            OracleSpecConfiguration.decode(reader, reader.uint32());
          break;
        case 7:
          message.oracleSpecBinding = OracleSpecToFutureBinding.decode(
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

  fromJSON(object: any): FutureProduct {
    return {
      settlementAsset: isSet(object.settlementAsset)
        ? String(object.settlementAsset)
        : "",
      quoteName: isSet(object.quoteName) ? String(object.quoteName) : "",
      oracleSpecForSettlementPrice: isSet(object.oracleSpecForSettlementPrice)
        ? OracleSpecConfiguration.fromJSON(object.oracleSpecForSettlementPrice)
        : undefined,
      oracleSpecForTradingTermination: isSet(
        object.oracleSpecForTradingTermination
      )
        ? OracleSpecConfiguration.fromJSON(
            object.oracleSpecForTradingTermination
          )
        : undefined,
      oracleSpecBinding: isSet(object.oracleSpecBinding)
        ? OracleSpecToFutureBinding.fromJSON(object.oracleSpecBinding)
        : undefined,
    };
  },

  toJSON(message: FutureProduct): unknown {
    const obj: any = {};
    message.settlementAsset !== undefined &&
      (obj.settlementAsset = message.settlementAsset);
    message.quoteName !== undefined && (obj.quoteName = message.quoteName);
    message.oracleSpecForSettlementPrice !== undefined &&
      (obj.oracleSpecForSettlementPrice = message.oracleSpecForSettlementPrice
        ? OracleSpecConfiguration.toJSON(message.oracleSpecForSettlementPrice)
        : undefined);
    message.oracleSpecForTradingTermination !== undefined &&
      (obj.oracleSpecForTradingTermination =
        message.oracleSpecForTradingTermination
          ? OracleSpecConfiguration.toJSON(
              message.oracleSpecForTradingTermination
            )
          : undefined);
    message.oracleSpecBinding !== undefined &&
      (obj.oracleSpecBinding = message.oracleSpecBinding
        ? OracleSpecToFutureBinding.toJSON(message.oracleSpecBinding)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FutureProduct>, I>>(
    object: I
  ): FutureProduct {
    const message = createBaseFutureProduct();
    message.settlementAsset = object.settlementAsset ?? "";
    message.quoteName = object.quoteName ?? "";
    message.oracleSpecForSettlementPrice =
      object.oracleSpecForSettlementPrice !== undefined &&
      object.oracleSpecForSettlementPrice !== null
        ? OracleSpecConfiguration.fromPartial(
            object.oracleSpecForSettlementPrice
          )
        : undefined;
    message.oracleSpecForTradingTermination =
      object.oracleSpecForTradingTermination !== undefined &&
      object.oracleSpecForTradingTermination !== null
        ? OracleSpecConfiguration.fromPartial(
            object.oracleSpecForTradingTermination
          )
        : undefined;
    message.oracleSpecBinding =
      object.oracleSpecBinding !== undefined &&
      object.oracleSpecBinding !== null
        ? OracleSpecToFutureBinding.fromPartial(object.oracleSpecBinding)
        : undefined;
    return message;
  },
};

function createBaseInstrumentConfiguration(): InstrumentConfiguration {
  return { name: "", code: "", future: undefined };
}

export const InstrumentConfiguration = {
  encode(
    message: InstrumentConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.future !== undefined) {
      FutureProduct.encode(message.future, writer.uint32(802).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InstrumentConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 100:
          message.future = FutureProduct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentConfiguration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      code: isSet(object.code) ? String(object.code) : "",
      future: isSet(object.future)
        ? FutureProduct.fromJSON(object.future)
        : undefined,
    };
  },

  toJSON(message: InstrumentConfiguration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.code !== undefined && (obj.code = message.code);
    message.future !== undefined &&
      (obj.future = message.future
        ? FutureProduct.toJSON(message.future)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstrumentConfiguration>, I>>(
    object: I
  ): InstrumentConfiguration {
    const message = createBaseInstrumentConfiguration();
    message.name = object.name ?? "";
    message.code = object.code ?? "";
    message.future =
      object.future !== undefined && object.future !== null
        ? FutureProduct.fromPartial(object.future)
        : undefined;
    return message;
  },
};

function createBaseNewMarketConfiguration(): NewMarketConfiguration {
  return {
    instrument: undefined,
    decimalPlaces: "0",
    metadata: [],
    priceMonitoringParameters: undefined,
    liquidityMonitoringParameters: undefined,
    simple: undefined,
    logNormal: undefined,
    positionDecimalPlaces: "0",
  };
}

export const NewMarketConfiguration = {
  encode(
    message: NewMarketConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      InstrumentConfiguration.encode(
        message.instrument,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.decimalPlaces !== "0") {
      writer.uint32(16).uint64(message.decimalPlaces);
    }
    for (const v of message.metadata) {
      writer.uint32(26).string(v!);
    }
    if (message.priceMonitoringParameters !== undefined) {
      PriceMonitoringParameters.encode(
        message.priceMonitoringParameters,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.liquidityMonitoringParameters !== undefined) {
      LiquidityMonitoringParameters.encode(
        message.liquidityMonitoringParameters,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.simple !== undefined) {
      SimpleModelParams.encode(
        message.simple,
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.logNormal !== undefined) {
      LogNormalRiskModel.encode(
        message.logNormal,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.positionDecimalPlaces !== "0") {
      writer.uint32(48).uint64(message.positionDecimalPlaces);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): NewMarketConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewMarketConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = InstrumentConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.decimalPlaces = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.metadata.push(reader.string());
          break;
        case 4:
          message.priceMonitoringParameters = PriceMonitoringParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.liquidityMonitoringParameters =
            LiquidityMonitoringParameters.decode(reader, reader.uint32());
          break;
        case 100:
          message.simple = SimpleModelParams.decode(reader, reader.uint32());
          break;
        case 101:
          message.logNormal = LogNormalRiskModel.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.positionDecimalPlaces = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewMarketConfiguration {
    return {
      instrument: isSet(object.instrument)
        ? InstrumentConfiguration.fromJSON(object.instrument)
        : undefined,
      decimalPlaces: isSet(object.decimalPlaces)
        ? String(object.decimalPlaces)
        : "0",
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => String(e))
        : [],
      priceMonitoringParameters: isSet(object.priceMonitoringParameters)
        ? PriceMonitoringParameters.fromJSON(object.priceMonitoringParameters)
        : undefined,
      liquidityMonitoringParameters: isSet(object.liquidityMonitoringParameters)
        ? LiquidityMonitoringParameters.fromJSON(
            object.liquidityMonitoringParameters
          )
        : undefined,
      simple: isSet(object.simple)
        ? SimpleModelParams.fromJSON(object.simple)
        : undefined,
      logNormal: isSet(object.logNormal)
        ? LogNormalRiskModel.fromJSON(object.logNormal)
        : undefined,
      positionDecimalPlaces: isSet(object.positionDecimalPlaces)
        ? String(object.positionDecimalPlaces)
        : "0",
    };
  },

  toJSON(message: NewMarketConfiguration): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? InstrumentConfiguration.toJSON(message.instrument)
        : undefined);
    message.decimalPlaces !== undefined &&
      (obj.decimalPlaces = message.decimalPlaces);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e);
    } else {
      obj.metadata = [];
    }
    message.priceMonitoringParameters !== undefined &&
      (obj.priceMonitoringParameters = message.priceMonitoringParameters
        ? PriceMonitoringParameters.toJSON(message.priceMonitoringParameters)
        : undefined);
    message.liquidityMonitoringParameters !== undefined &&
      (obj.liquidityMonitoringParameters = message.liquidityMonitoringParameters
        ? LiquidityMonitoringParameters.toJSON(
            message.liquidityMonitoringParameters
          )
        : undefined);
    message.simple !== undefined &&
      (obj.simple = message.simple
        ? SimpleModelParams.toJSON(message.simple)
        : undefined);
    message.logNormal !== undefined &&
      (obj.logNormal = message.logNormal
        ? LogNormalRiskModel.toJSON(message.logNormal)
        : undefined);
    message.positionDecimalPlaces !== undefined &&
      (obj.positionDecimalPlaces = message.positionDecimalPlaces);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewMarketConfiguration>, I>>(
    object: I
  ): NewMarketConfiguration {
    const message = createBaseNewMarketConfiguration();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? InstrumentConfiguration.fromPartial(object.instrument)
        : undefined;
    message.decimalPlaces = object.decimalPlaces ?? "0";
    message.metadata = object.metadata?.map((e) => e) || [];
    message.priceMonitoringParameters =
      object.priceMonitoringParameters !== undefined &&
      object.priceMonitoringParameters !== null
        ? PriceMonitoringParameters.fromPartial(
            object.priceMonitoringParameters
          )
        : undefined;
    message.liquidityMonitoringParameters =
      object.liquidityMonitoringParameters !== undefined &&
      object.liquidityMonitoringParameters !== null
        ? LiquidityMonitoringParameters.fromPartial(
            object.liquidityMonitoringParameters
          )
        : undefined;
    message.simple =
      object.simple !== undefined && object.simple !== null
        ? SimpleModelParams.fromPartial(object.simple)
        : undefined;
    message.logNormal =
      object.logNormal !== undefined && object.logNormal !== null
        ? LogNormalRiskModel.fromPartial(object.logNormal)
        : undefined;
    message.positionDecimalPlaces = object.positionDecimalPlaces ?? "0";
    return message;
  },
};

function createBaseNewMarketCommitment(): NewMarketCommitment {
  return { commitmentAmount: "", fee: "", sells: [], buys: [], reference: "" };
}

export const NewMarketCommitment = {
  encode(
    message: NewMarketCommitment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.commitmentAmount !== "") {
      writer.uint32(10).string(message.commitmentAmount);
    }
    if (message.fee !== "") {
      writer.uint32(18).string(message.fee);
    }
    for (const v of message.sells) {
      LiquidityOrder.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.buys) {
      LiquidityOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.reference !== "") {
      writer.uint32(42).string(message.reference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewMarketCommitment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewMarketCommitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitmentAmount = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        case 3:
          message.sells.push(LiquidityOrder.decode(reader, reader.uint32()));
          break;
        case 4:
          message.buys.push(LiquidityOrder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewMarketCommitment {
    return {
      commitmentAmount: isSet(object.commitmentAmount)
        ? String(object.commitmentAmount)
        : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      sells: Array.isArray(object?.sells)
        ? object.sells.map((e: any) => LiquidityOrder.fromJSON(e))
        : [],
      buys: Array.isArray(object?.buys)
        ? object.buys.map((e: any) => LiquidityOrder.fromJSON(e))
        : [],
      reference: isSet(object.reference) ? String(object.reference) : "",
    };
  },

  toJSON(message: NewMarketCommitment): unknown {
    const obj: any = {};
    message.commitmentAmount !== undefined &&
      (obj.commitmentAmount = message.commitmentAmount);
    message.fee !== undefined && (obj.fee = message.fee);
    if (message.sells) {
      obj.sells = message.sells.map((e) =>
        e ? LiquidityOrder.toJSON(e) : undefined
      );
    } else {
      obj.sells = [];
    }
    if (message.buys) {
      obj.buys = message.buys.map((e) =>
        e ? LiquidityOrder.toJSON(e) : undefined
      );
    } else {
      obj.buys = [];
    }
    message.reference !== undefined && (obj.reference = message.reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewMarketCommitment>, I>>(
    object: I
  ): NewMarketCommitment {
    const message = createBaseNewMarketCommitment();
    message.commitmentAmount = object.commitmentAmount ?? "";
    message.fee = object.fee ?? "";
    message.sells =
      object.sells?.map((e) => LiquidityOrder.fromPartial(e)) || [];
    message.buys = object.buys?.map((e) => LiquidityOrder.fromPartial(e)) || [];
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseNewMarket(): NewMarket {
  return { changes: undefined, liquidityCommitment: undefined };
}

export const NewMarket = {
  encode(
    message: NewMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.changes !== undefined) {
      NewMarketConfiguration.encode(
        message.changes,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.liquidityCommitment !== undefined) {
      NewMarketCommitment.encode(
        message.liquidityCommitment,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changes = NewMarketConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.liquidityCommitment = NewMarketCommitment.decode(
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

  fromJSON(object: any): NewMarket {
    return {
      changes: isSet(object.changes)
        ? NewMarketConfiguration.fromJSON(object.changes)
        : undefined,
      liquidityCommitment: isSet(object.liquidityCommitment)
        ? NewMarketCommitment.fromJSON(object.liquidityCommitment)
        : undefined,
    };
  },

  toJSON(message: NewMarket): unknown {
    const obj: any = {};
    message.changes !== undefined &&
      (obj.changes = message.changes
        ? NewMarketConfiguration.toJSON(message.changes)
        : undefined);
    message.liquidityCommitment !== undefined &&
      (obj.liquidityCommitment = message.liquidityCommitment
        ? NewMarketCommitment.toJSON(message.liquidityCommitment)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewMarket>, I>>(
    object: I
  ): NewMarket {
    const message = createBaseNewMarket();
    message.changes =
      object.changes !== undefined && object.changes !== null
        ? NewMarketConfiguration.fromPartial(object.changes)
        : undefined;
    message.liquidityCommitment =
      object.liquidityCommitment !== undefined &&
      object.liquidityCommitment !== null
        ? NewMarketCommitment.fromPartial(object.liquidityCommitment)
        : undefined;
    return message;
  },
};

function createBaseUpdateMarket(): UpdateMarket {
  return { marketId: "", changes: undefined };
}

export const UpdateMarket = {
  encode(
    message: UpdateMarket,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.changes !== undefined) {
      UpdateMarketConfiguration.encode(
        message.changes,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMarket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.changes = UpdateMarketConfiguration.decode(
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

  fromJSON(object: any): UpdateMarket {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      changes: isSet(object.changes)
        ? UpdateMarketConfiguration.fromJSON(object.changes)
        : undefined,
    };
  },

  toJSON(message: UpdateMarket): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.changes !== undefined &&
      (obj.changes = message.changes
        ? UpdateMarketConfiguration.toJSON(message.changes)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMarket>, I>>(
    object: I
  ): UpdateMarket {
    const message = createBaseUpdateMarket();
    message.marketId = object.marketId ?? "";
    message.changes =
      object.changes !== undefined && object.changes !== null
        ? UpdateMarketConfiguration.fromPartial(object.changes)
        : undefined;
    return message;
  },
};

function createBaseUpdateMarketConfiguration(): UpdateMarketConfiguration {
  return {
    instrument: undefined,
    metadata: [],
    priceMonitoringParameters: undefined,
    liquidityMonitoringParameters: undefined,
    simple: undefined,
    logNormal: undefined,
  };
}

export const UpdateMarketConfiguration = {
  encode(
    message: UpdateMarketConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      UpdateInstrumentConfiguration.encode(
        message.instrument,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.metadata) {
      writer.uint32(18).string(v!);
    }
    if (message.priceMonitoringParameters !== undefined) {
      PriceMonitoringParameters.encode(
        message.priceMonitoringParameters,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.liquidityMonitoringParameters !== undefined) {
      LiquidityMonitoringParameters.encode(
        message.liquidityMonitoringParameters,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.simple !== undefined) {
      SimpleModelParams.encode(
        message.simple,
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.logNormal !== undefined) {
      LogNormalRiskModel.encode(
        message.logNormal,
        writer.uint32(810).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateMarketConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMarketConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = UpdateInstrumentConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.metadata.push(reader.string());
          break;
        case 3:
          message.priceMonitoringParameters = PriceMonitoringParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.liquidityMonitoringParameters =
            LiquidityMonitoringParameters.decode(reader, reader.uint32());
          break;
        case 100:
          message.simple = SimpleModelParams.decode(reader, reader.uint32());
          break;
        case 101:
          message.logNormal = LogNormalRiskModel.decode(
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

  fromJSON(object: any): UpdateMarketConfiguration {
    return {
      instrument: isSet(object.instrument)
        ? UpdateInstrumentConfiguration.fromJSON(object.instrument)
        : undefined,
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => String(e))
        : [],
      priceMonitoringParameters: isSet(object.priceMonitoringParameters)
        ? PriceMonitoringParameters.fromJSON(object.priceMonitoringParameters)
        : undefined,
      liquidityMonitoringParameters: isSet(object.liquidityMonitoringParameters)
        ? LiquidityMonitoringParameters.fromJSON(
            object.liquidityMonitoringParameters
          )
        : undefined,
      simple: isSet(object.simple)
        ? SimpleModelParams.fromJSON(object.simple)
        : undefined,
      logNormal: isSet(object.logNormal)
        ? LogNormalRiskModel.fromJSON(object.logNormal)
        : undefined,
    };
  },

  toJSON(message: UpdateMarketConfiguration): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? UpdateInstrumentConfiguration.toJSON(message.instrument)
        : undefined);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e);
    } else {
      obj.metadata = [];
    }
    message.priceMonitoringParameters !== undefined &&
      (obj.priceMonitoringParameters = message.priceMonitoringParameters
        ? PriceMonitoringParameters.toJSON(message.priceMonitoringParameters)
        : undefined);
    message.liquidityMonitoringParameters !== undefined &&
      (obj.liquidityMonitoringParameters = message.liquidityMonitoringParameters
        ? LiquidityMonitoringParameters.toJSON(
            message.liquidityMonitoringParameters
          )
        : undefined);
    message.simple !== undefined &&
      (obj.simple = message.simple
        ? SimpleModelParams.toJSON(message.simple)
        : undefined);
    message.logNormal !== undefined &&
      (obj.logNormal = message.logNormal
        ? LogNormalRiskModel.toJSON(message.logNormal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMarketConfiguration>, I>>(
    object: I
  ): UpdateMarketConfiguration {
    const message = createBaseUpdateMarketConfiguration();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? UpdateInstrumentConfiguration.fromPartial(object.instrument)
        : undefined;
    message.metadata = object.metadata?.map((e) => e) || [];
    message.priceMonitoringParameters =
      object.priceMonitoringParameters !== undefined &&
      object.priceMonitoringParameters !== null
        ? PriceMonitoringParameters.fromPartial(
            object.priceMonitoringParameters
          )
        : undefined;
    message.liquidityMonitoringParameters =
      object.liquidityMonitoringParameters !== undefined &&
      object.liquidityMonitoringParameters !== null
        ? LiquidityMonitoringParameters.fromPartial(
            object.liquidityMonitoringParameters
          )
        : undefined;
    message.simple =
      object.simple !== undefined && object.simple !== null
        ? SimpleModelParams.fromPartial(object.simple)
        : undefined;
    message.logNormal =
      object.logNormal !== undefined && object.logNormal !== null
        ? LogNormalRiskModel.fromPartial(object.logNormal)
        : undefined;
    return message;
  },
};

function createBaseUpdateInstrumentConfiguration(): UpdateInstrumentConfiguration {
  return { code: "", future: undefined };
}

export const UpdateInstrumentConfiguration = {
  encode(
    message: UpdateInstrumentConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.future !== undefined) {
      UpdateFutureProduct.encode(
        message.future,
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateInstrumentConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateInstrumentConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 100:
          message.future = UpdateFutureProduct.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateInstrumentConfiguration {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      future: isSet(object.future)
        ? UpdateFutureProduct.fromJSON(object.future)
        : undefined,
    };
  },

  toJSON(message: UpdateInstrumentConfiguration): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.future !== undefined &&
      (obj.future = message.future
        ? UpdateFutureProduct.toJSON(message.future)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateInstrumentConfiguration>, I>>(
    object: I
  ): UpdateInstrumentConfiguration {
    const message = createBaseUpdateInstrumentConfiguration();
    message.code = object.code ?? "";
    message.future =
      object.future !== undefined && object.future !== null
        ? UpdateFutureProduct.fromPartial(object.future)
        : undefined;
    return message;
  },
};

function createBaseUpdateFutureProduct(): UpdateFutureProduct {
  return {
    quoteName: "",
    oracleSpecForSettlementPrice: undefined,
    oracleSpecForTradingTermination: undefined,
    oracleSpecBinding: undefined,
  };
}

export const UpdateFutureProduct = {
  encode(
    message: UpdateFutureProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quoteName !== "") {
      writer.uint32(10).string(message.quoteName);
    }
    if (message.oracleSpecForSettlementPrice !== undefined) {
      OracleSpecConfiguration.encode(
        message.oracleSpecForSettlementPrice,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.oracleSpecForTradingTermination !== undefined) {
      OracleSpecConfiguration.encode(
        message.oracleSpecForTradingTermination,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.oracleSpecBinding !== undefined) {
      OracleSpecToFutureBinding.encode(
        message.oracleSpecBinding,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFutureProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFutureProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quoteName = reader.string();
          break;
        case 2:
          message.oracleSpecForSettlementPrice = OracleSpecConfiguration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.oracleSpecForTradingTermination =
            OracleSpecConfiguration.decode(reader, reader.uint32());
          break;
        case 4:
          message.oracleSpecBinding = OracleSpecToFutureBinding.decode(
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

  fromJSON(object: any): UpdateFutureProduct {
    return {
      quoteName: isSet(object.quoteName) ? String(object.quoteName) : "",
      oracleSpecForSettlementPrice: isSet(object.oracleSpecForSettlementPrice)
        ? OracleSpecConfiguration.fromJSON(object.oracleSpecForSettlementPrice)
        : undefined,
      oracleSpecForTradingTermination: isSet(
        object.oracleSpecForTradingTermination
      )
        ? OracleSpecConfiguration.fromJSON(
            object.oracleSpecForTradingTermination
          )
        : undefined,
      oracleSpecBinding: isSet(object.oracleSpecBinding)
        ? OracleSpecToFutureBinding.fromJSON(object.oracleSpecBinding)
        : undefined,
    };
  },

  toJSON(message: UpdateFutureProduct): unknown {
    const obj: any = {};
    message.quoteName !== undefined && (obj.quoteName = message.quoteName);
    message.oracleSpecForSettlementPrice !== undefined &&
      (obj.oracleSpecForSettlementPrice = message.oracleSpecForSettlementPrice
        ? OracleSpecConfiguration.toJSON(message.oracleSpecForSettlementPrice)
        : undefined);
    message.oracleSpecForTradingTermination !== undefined &&
      (obj.oracleSpecForTradingTermination =
        message.oracleSpecForTradingTermination
          ? OracleSpecConfiguration.toJSON(
              message.oracleSpecForTradingTermination
            )
          : undefined);
    message.oracleSpecBinding !== undefined &&
      (obj.oracleSpecBinding = message.oracleSpecBinding
        ? OracleSpecToFutureBinding.toJSON(message.oracleSpecBinding)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateFutureProduct>, I>>(
    object: I
  ): UpdateFutureProduct {
    const message = createBaseUpdateFutureProduct();
    message.quoteName = object.quoteName ?? "";
    message.oracleSpecForSettlementPrice =
      object.oracleSpecForSettlementPrice !== undefined &&
      object.oracleSpecForSettlementPrice !== null
        ? OracleSpecConfiguration.fromPartial(
            object.oracleSpecForSettlementPrice
          )
        : undefined;
    message.oracleSpecForTradingTermination =
      object.oracleSpecForTradingTermination !== undefined &&
      object.oracleSpecForTradingTermination !== null
        ? OracleSpecConfiguration.fromPartial(
            object.oracleSpecForTradingTermination
          )
        : undefined;
    message.oracleSpecBinding =
      object.oracleSpecBinding !== undefined &&
      object.oracleSpecBinding !== null
        ? OracleSpecToFutureBinding.fromPartial(object.oracleSpecBinding)
        : undefined;
    return message;
  },
};

function createBaseUpdateNetworkParameter(): UpdateNetworkParameter {
  return { changes: undefined };
}

export const UpdateNetworkParameter = {
  encode(
    message: UpdateNetworkParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.changes !== undefined) {
      NetworkParameter.encode(
        message.changes,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateNetworkParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNetworkParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changes = NetworkParameter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateNetworkParameter {
    return {
      changes: isSet(object.changes)
        ? NetworkParameter.fromJSON(object.changes)
        : undefined,
    };
  },

  toJSON(message: UpdateNetworkParameter): unknown {
    const obj: any = {};
    message.changes !== undefined &&
      (obj.changes = message.changes
        ? NetworkParameter.toJSON(message.changes)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateNetworkParameter>, I>>(
    object: I
  ): UpdateNetworkParameter {
    const message = createBaseUpdateNetworkParameter();
    message.changes =
      object.changes !== undefined && object.changes !== null
        ? NetworkParameter.fromPartial(object.changes)
        : undefined;
    return message;
  },
};

function createBaseNewAsset(): NewAsset {
  return { changes: undefined };
}

export const NewAsset = {
  encode(
    message: NewAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.changes !== undefined) {
      AssetDetails.encode(message.changes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changes = AssetDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewAsset {
    return {
      changes: isSet(object.changes)
        ? AssetDetails.fromJSON(object.changes)
        : undefined,
    };
  },

  toJSON(message: NewAsset): unknown {
    const obj: any = {};
    message.changes !== undefined &&
      (obj.changes = message.changes
        ? AssetDetails.toJSON(message.changes)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewAsset>, I>>(object: I): NewAsset {
    const message = createBaseNewAsset();
    message.changes =
      object.changes !== undefined && object.changes !== null
        ? AssetDetails.fromPartial(object.changes)
        : undefined;
    return message;
  },
};

function createBaseNewFreeformDetails(): NewFreeformDetails {
  return { url: "", description: "", hash: "" };
}

export const NewFreeformDetails = {
  encode(
    message: NewFreeformDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.hash !== "") {
      writer.uint32(26).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewFreeformDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewFreeformDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewFreeformDetails {
    return {
      url: isSet(object.url) ? String(object.url) : "",
      description: isSet(object.description) ? String(object.description) : "",
      hash: isSet(object.hash) ? String(object.hash) : "",
    };
  },

  toJSON(message: NewFreeformDetails): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    message.description !== undefined &&
      (obj.description = message.description);
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewFreeformDetails>, I>>(
    object: I
  ): NewFreeformDetails {
    const message = createBaseNewFreeformDetails();
    message.url = object.url ?? "";
    message.description = object.description ?? "";
    message.hash = object.hash ?? "";
    return message;
  },
};

function createBaseNewFreeform(): NewFreeform {
  return { changes: undefined };
}

export const NewFreeform = {
  encode(
    message: NewFreeform,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.changes !== undefined) {
      NewFreeformDetails.encode(
        message.changes,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewFreeform {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewFreeform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changes = NewFreeformDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewFreeform {
    return {
      changes: isSet(object.changes)
        ? NewFreeformDetails.fromJSON(object.changes)
        : undefined,
    };
  },

  toJSON(message: NewFreeform): unknown {
    const obj: any = {};
    message.changes !== undefined &&
      (obj.changes = message.changes
        ? NewFreeformDetails.toJSON(message.changes)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewFreeform>, I>>(
    object: I
  ): NewFreeform {
    const message = createBaseNewFreeform();
    message.changes =
      object.changes !== undefined && object.changes !== null
        ? NewFreeformDetails.fromPartial(object.changes)
        : undefined;
    return message;
  },
};

function createBaseProposalTerms(): ProposalTerms {
  return {
    closingTimestamp: "0",
    enactmentTimestamp: "0",
    validationTimestamp: "0",
    updateMarket: undefined,
    newMarket: undefined,
    updateNetworkParameter: undefined,
    newAsset: undefined,
    newFreeform: undefined,
  };
}

export const ProposalTerms = {
  encode(
    message: ProposalTerms,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.closingTimestamp !== "0") {
      writer.uint32(8).int64(message.closingTimestamp);
    }
    if (message.enactmentTimestamp !== "0") {
      writer.uint32(16).int64(message.enactmentTimestamp);
    }
    if (message.validationTimestamp !== "0") {
      writer.uint32(24).int64(message.validationTimestamp);
    }
    if (message.updateMarket !== undefined) {
      UpdateMarket.encode(
        message.updateMarket,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.newMarket !== undefined) {
      NewMarket.encode(message.newMarket, writer.uint32(818).fork()).ldelim();
    }
    if (message.updateNetworkParameter !== undefined) {
      UpdateNetworkParameter.encode(
        message.updateNetworkParameter,
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.newAsset !== undefined) {
      NewAsset.encode(message.newAsset, writer.uint32(834).fork()).ldelim();
    }
    if (message.newFreeform !== undefined) {
      NewFreeform.encode(
        message.newFreeform,
        writer.uint32(842).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalTerms {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalTerms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.closingTimestamp = longToString(reader.int64() as Long);
          break;
        case 2:
          message.enactmentTimestamp = longToString(reader.int64() as Long);
          break;
        case 3:
          message.validationTimestamp = longToString(reader.int64() as Long);
          break;
        case 101:
          message.updateMarket = UpdateMarket.decode(reader, reader.uint32());
          break;
        case 102:
          message.newMarket = NewMarket.decode(reader, reader.uint32());
          break;
        case 103:
          message.updateNetworkParameter = UpdateNetworkParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.newAsset = NewAsset.decode(reader, reader.uint32());
          break;
        case 105:
          message.newFreeform = NewFreeform.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalTerms {
    return {
      closingTimestamp: isSet(object.closingTimestamp)
        ? String(object.closingTimestamp)
        : "0",
      enactmentTimestamp: isSet(object.enactmentTimestamp)
        ? String(object.enactmentTimestamp)
        : "0",
      validationTimestamp: isSet(object.validationTimestamp)
        ? String(object.validationTimestamp)
        : "0",
      updateMarket: isSet(object.updateMarket)
        ? UpdateMarket.fromJSON(object.updateMarket)
        : undefined,
      newMarket: isSet(object.newMarket)
        ? NewMarket.fromJSON(object.newMarket)
        : undefined,
      updateNetworkParameter: isSet(object.updateNetworkParameter)
        ? UpdateNetworkParameter.fromJSON(object.updateNetworkParameter)
        : undefined,
      newAsset: isSet(object.newAsset)
        ? NewAsset.fromJSON(object.newAsset)
        : undefined,
      newFreeform: isSet(object.newFreeform)
        ? NewFreeform.fromJSON(object.newFreeform)
        : undefined,
    };
  },

  toJSON(message: ProposalTerms): unknown {
    const obj: any = {};
    message.closingTimestamp !== undefined &&
      (obj.closingTimestamp = message.closingTimestamp);
    message.enactmentTimestamp !== undefined &&
      (obj.enactmentTimestamp = message.enactmentTimestamp);
    message.validationTimestamp !== undefined &&
      (obj.validationTimestamp = message.validationTimestamp);
    message.updateMarket !== undefined &&
      (obj.updateMarket = message.updateMarket
        ? UpdateMarket.toJSON(message.updateMarket)
        : undefined);
    message.newMarket !== undefined &&
      (obj.newMarket = message.newMarket
        ? NewMarket.toJSON(message.newMarket)
        : undefined);
    message.updateNetworkParameter !== undefined &&
      (obj.updateNetworkParameter = message.updateNetworkParameter
        ? UpdateNetworkParameter.toJSON(message.updateNetworkParameter)
        : undefined);
    message.newAsset !== undefined &&
      (obj.newAsset = message.newAsset
        ? NewAsset.toJSON(message.newAsset)
        : undefined);
    message.newFreeform !== undefined &&
      (obj.newFreeform = message.newFreeform
        ? NewFreeform.toJSON(message.newFreeform)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalTerms>, I>>(
    object: I
  ): ProposalTerms {
    const message = createBaseProposalTerms();
    message.closingTimestamp = object.closingTimestamp ?? "0";
    message.enactmentTimestamp = object.enactmentTimestamp ?? "0";
    message.validationTimestamp = object.validationTimestamp ?? "0";
    message.updateMarket =
      object.updateMarket !== undefined && object.updateMarket !== null
        ? UpdateMarket.fromPartial(object.updateMarket)
        : undefined;
    message.newMarket =
      object.newMarket !== undefined && object.newMarket !== null
        ? NewMarket.fromPartial(object.newMarket)
        : undefined;
    message.updateNetworkParameter =
      object.updateNetworkParameter !== undefined &&
      object.updateNetworkParameter !== null
        ? UpdateNetworkParameter.fromPartial(object.updateNetworkParameter)
        : undefined;
    message.newAsset =
      object.newAsset !== undefined && object.newAsset !== null
        ? NewAsset.fromPartial(object.newAsset)
        : undefined;
    message.newFreeform =
      object.newFreeform !== undefined && object.newFreeform !== null
        ? NewFreeform.fromPartial(object.newFreeform)
        : undefined;
    return message;
  },
};

function createBaseGovernanceData(): GovernanceData {
  return { proposal: undefined, yes: [], no: [], yesParty: {}, noParty: {} };
}

export const GovernanceData = {
  encode(
    message: GovernanceData,
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
    Object.entries(message.yesParty).forEach(([key, value]) => {
      GovernanceData_YesPartyEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.noParty).forEach(([key, value]) => {
      GovernanceData_NoPartyEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GovernanceData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceData();
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
          const entry4 = GovernanceData_YesPartyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.yesParty[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = GovernanceData_NoPartyEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.noParty[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GovernanceData {
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
      yesParty: isObject(object.yesParty)
        ? Object.entries(object.yesParty).reduce<{ [key: string]: Vote }>(
            (acc, [key, value]) => {
              acc[key] = Vote.fromJSON(value);
              return acc;
            },
            {}
          )
        : {},
      noParty: isObject(object.noParty)
        ? Object.entries(object.noParty).reduce<{ [key: string]: Vote }>(
            (acc, [key, value]) => {
              acc[key] = Vote.fromJSON(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: GovernanceData): unknown {
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
    obj.yesParty = {};
    if (message.yesParty) {
      Object.entries(message.yesParty).forEach(([k, v]) => {
        obj.yesParty[k] = Vote.toJSON(v);
      });
    }
    obj.noParty = {};
    if (message.noParty) {
      Object.entries(message.noParty).forEach(([k, v]) => {
        obj.noParty[k] = Vote.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GovernanceData>, I>>(
    object: I
  ): GovernanceData {
    const message = createBaseGovernanceData();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    message.yes = object.yes?.map((e) => Vote.fromPartial(e)) || [];
    message.no = object.no?.map((e) => Vote.fromPartial(e)) || [];
    message.yesParty = Object.entries(object.yesParty ?? {}).reduce<{
      [key: string]: Vote;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Vote.fromPartial(value);
      }
      return acc;
    }, {});
    message.noParty = Object.entries(object.noParty ?? {}).reduce<{
      [key: string]: Vote;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Vote.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGovernanceData_YesPartyEntry(): GovernanceData_YesPartyEntry {
  return { key: "", value: undefined };
}

export const GovernanceData_YesPartyEntry = {
  encode(
    message: GovernanceData_YesPartyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Vote.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GovernanceData_YesPartyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceData_YesPartyEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GovernanceData_YesPartyEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Vote.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GovernanceData_YesPartyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Vote.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GovernanceData_YesPartyEntry>, I>>(
    object: I
  ): GovernanceData_YesPartyEntry {
    const message = createBaseGovernanceData_YesPartyEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Vote.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseGovernanceData_NoPartyEntry(): GovernanceData_NoPartyEntry {
  return { key: "", value: undefined };
}

export const GovernanceData_NoPartyEntry = {
  encode(
    message: GovernanceData_NoPartyEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Vote.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GovernanceData_NoPartyEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceData_NoPartyEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GovernanceData_NoPartyEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Vote.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: GovernanceData_NoPartyEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Vote.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GovernanceData_NoPartyEntry>, I>>(
    object: I
  ): GovernanceData_NoPartyEntry {
    const message = createBaseGovernanceData_NoPartyEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Vote.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    id: "",
    reference: "",
    partyId: "",
    state: 0,
    timestamp: "0",
    terms: undefined,
    reason: 0,
    errorDetails: "",
  };
}

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.reference !== "") {
      writer.uint32(18).string(message.reference);
    }
    if (message.partyId !== "") {
      writer.uint32(26).string(message.partyId);
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.timestamp !== "0") {
      writer.uint32(40).int64(message.timestamp);
    }
    if (message.terms !== undefined) {
      ProposalTerms.encode(message.terms, writer.uint32(50).fork()).ldelim();
    }
    if (message.reason !== 0) {
      writer.uint32(56).int32(message.reason);
    }
    if (message.errorDetails !== "") {
      writer.uint32(66).string(message.errorDetails);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.reference = reader.string();
          break;
        case 3:
          message.partyId = reader.string();
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 6:
          message.terms = ProposalTerms.decode(reader, reader.uint32());
          break;
        case 7:
          message.reason = reader.int32() as any;
          break;
        case 8:
          message.errorDetails = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      reference: isSet(object.reference) ? String(object.reference) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      state: isSet(object.state) ? proposal_StateFromJSON(object.state) : 0,
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      terms: isSet(object.terms)
        ? ProposalTerms.fromJSON(object.terms)
        : undefined,
      reason: isSet(object.reason) ? proposalErrorFromJSON(object.reason) : 0,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.reference !== undefined && (obj.reference = message.reference);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.state !== undefined &&
      (obj.state = proposal_StateToJSON(message.state));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.terms !== undefined &&
      (obj.terms = message.terms
        ? ProposalTerms.toJSON(message.terms)
        : undefined);
    message.reason !== undefined &&
      (obj.reason = proposalErrorToJSON(message.reason));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.id = object.id ?? "";
    message.reference = object.reference ?? "";
    message.partyId = object.partyId ?? "";
    message.state = object.state ?? 0;
    message.timestamp = object.timestamp ?? "0";
    message.terms =
      object.terms !== undefined && object.terms !== null
        ? ProposalTerms.fromPartial(object.terms)
        : undefined;
    message.reason = object.reason ?? 0;
    message.errorDetails = object.errorDetails ?? "";
    return message;
  },
};

function createBaseVote(): Vote {
  return {
    partyId: "",
    value: 0,
    proposalId: "",
    timestamp: "0",
    totalGovernanceTokenBalance: "",
    totalGovernanceTokenWeight: "",
    totalEquityLikeShareWeight: "",
  };
}

export const Vote = {
  encode(message: Vote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partyId !== "") {
      writer.uint32(10).string(message.partyId);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    if (message.proposalId !== "") {
      writer.uint32(26).string(message.proposalId);
    }
    if (message.timestamp !== "0") {
      writer.uint32(32).int64(message.timestamp);
    }
    if (message.totalGovernanceTokenBalance !== "") {
      writer.uint32(42).string(message.totalGovernanceTokenBalance);
    }
    if (message.totalGovernanceTokenWeight !== "") {
      writer.uint32(50).string(message.totalGovernanceTokenWeight);
    }
    if (message.totalEquityLikeShareWeight !== "") {
      writer.uint32(58).string(message.totalEquityLikeShareWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partyId = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        case 3:
          message.proposalId = reader.string();
          break;
        case 4:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 5:
          message.totalGovernanceTokenBalance = reader.string();
          break;
        case 6:
          message.totalGovernanceTokenWeight = reader.string();
          break;
        case 7:
          message.totalEquityLikeShareWeight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      value: isSet(object.value) ? vote_ValueFromJSON(object.value) : 0,
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      totalGovernanceTokenBalance: isSet(object.totalGovernanceTokenBalance)
        ? String(object.totalGovernanceTokenBalance)
        : "",
      totalGovernanceTokenWeight: isSet(object.totalGovernanceTokenWeight)
        ? String(object.totalGovernanceTokenWeight)
        : "",
      totalEquityLikeShareWeight: isSet(object.totalEquityLikeShareWeight)
        ? String(object.totalEquityLikeShareWeight)
        : "",
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.value !== undefined &&
      (obj.value = vote_ValueToJSON(message.value));
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.totalGovernanceTokenBalance !== undefined &&
      (obj.totalGovernanceTokenBalance = message.totalGovernanceTokenBalance);
    message.totalGovernanceTokenWeight !== undefined &&
      (obj.totalGovernanceTokenWeight = message.totalGovernanceTokenWeight);
    message.totalEquityLikeShareWeight !== undefined &&
      (obj.totalEquityLikeShareWeight = message.totalEquityLikeShareWeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.partyId = object.partyId ?? "";
    message.value = object.value ?? 0;
    message.proposalId = object.proposalId ?? "";
    message.timestamp = object.timestamp ?? "0";
    message.totalGovernanceTokenBalance =
      object.totalGovernanceTokenBalance ?? "";
    message.totalGovernanceTokenWeight =
      object.totalGovernanceTokenWeight ?? "";
    message.totalEquityLikeShareWeight =
      object.totalEquityLikeShareWeight ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
