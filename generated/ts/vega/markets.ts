/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { OracleSpec } from "../vega/oracles/v1/spec";

export const protobufPackage = "vega";

/**
 * An auction duration is used to configure 3 auction periods:
 * 1. `duration > 0`, `volume == 0`:
 *   The auction will last for at least N seconds
 * 2. `duration == 0`, `volume > 0`:
 *   The auction will end once we can close with given traded volume
 * 3. `duration > 0`, `volume > 0`:
 *   The auction will take at least N seconds, but can end sooner if we can trade a certain volume
 */
export interface AuctionDuration {
  /** Duration of the auction in seconds */
  duration: string;
  /** Target uncrossing trading volume */
  volume: string;
}

/** Future product definition */
export interface Future {
  /** The asset for the future */
  settlementAsset: string;
  /** Quote name of the instrument */
  quoteName: string;
  /** The oracle spec describing the settlement price oracle filter */
  oracleSpecForSettlementPrice: OracleSpec | undefined;
  /** the oracle spec describing the trading termination oracle filter */
  oracleSpecForTradingTermination: OracleSpec | undefined;
  /** The binding between the oracle spec and the oracle data */
  oracleSpecBinding: OracleSpecToFutureBinding | undefined;
}

/**
 * OracleSpecToFutureBinding tells on which property oracle data should be
 * used as settlement price and which to use the trading terminated trigger
 */
export interface OracleSpecToFutureBinding {
  /**
   * settlement_price_property holds the name of the property in the oracle data
   * that should be used as settlement price.
   * If it is set to "prices.BTC.value", then the Future will use the value of
   * this property as settlement price.
   */
  settlementPriceProperty: string;
  /** the name of the property in the oracle data that signals termination of trading */
  tradingTerminationProperty: string;
}

/** Instrument metadata definition */
export interface InstrumentMetadata {
  /** A list of 0 or more tags */
  tags: string[];
}

/** Instrument definition */
export interface Instrument {
  /** Instrument identifier */
  id: string;
  /** Code for the instrument */
  code: string;
  /** Name of the instrument */
  name: string;
  /** A collection of instrument meta-data */
  metadata: InstrumentMetadata | undefined;
  /** Future */
  future: Future | undefined;
}

/** Risk model for log normal */
export interface LogNormalRiskModel {
  /** Risk Aversion Parameter */
  riskAversionParameter: number;
  /** Tau */
  tau: number;
  /** Risk model parameters for log normal */
  params: LogNormalModelParams | undefined;
}

/** Risk model parameters for log normal */
export interface LogNormalModelParams {
  /** Mu param */
  mu: number;
  /** R param */
  r: number;
  /** Sigma param */
  sigma: number;
}

/** Risk model for simple modelling */
export interface SimpleRiskModel {
  /** Risk model params for simple modelling */
  params: SimpleModelParams | undefined;
}

/** Risk model parameters for simple modelling */
export interface SimpleModelParams {
  /** Pre-defined risk factor value for long */
  factorLong: number;
  /** Pre-defined risk factor value for short */
  factorShort: number;
  /** Pre-defined maximum price move up that the model considers as valid */
  maxMoveUp: number;
  /** Pre-defined minimum price move down that the model considers as valid */
  minMoveDown: number;
  /** Pre-defined constant probability of trading */
  probabilityOfTrading: number;
}

/** Scaling Factors (for use in margin calculation) */
export interface ScalingFactors {
  /** Search level */
  searchLevel: number;
  /** Initial margin level */
  initialMargin: number;
  /** Collateral release level */
  collateralRelease: number;
}

/** Margin Calculator definition */
export interface MarginCalculator {
  /** Scaling factors for margin calculation */
  scalingFactors: ScalingFactors | undefined;
}

/** Tradable Instrument definition */
export interface TradableInstrument {
  /** Instrument details */
  instrument: Instrument | undefined;
  /** Margin calculator for the instrument */
  marginCalculator: MarginCalculator | undefined;
  /** Log normal */
  logNormalRiskModel: LogNormalRiskModel | undefined;
  /** Simple */
  simpleRiskModel: SimpleRiskModel | undefined;
}

/** Fee factors definition */
export interface FeeFactors {
  /** Maker fee */
  makerFee: string;
  /** Infrastructure fee */
  infrastructureFee: string;
  /** Liquidity fee */
  liquidityFee: string;
}

/** Fees definition */
export interface Fees {
  /** Fee factors */
  factors: FeeFactors | undefined;
}

/** PriceMonitoringTrigger holds together price projection horizon τ, probability level p, and auction extension duration */
export interface PriceMonitoringTrigger {
  /** Price monitoring projection horizon τ in seconds */
  horizon: string;
  /** Price monitoring probability level p */
  probability: string;
  /**
   * Price monitoring auction extension duration in seconds should the price
   * breach it's theoretical level over the specified horizon at the specified
   * probability level
   */
  auctionExtension: string;
}

/** PriceMonitoringParameters contains a collection of triggers to be used for a given market */
export interface PriceMonitoringParameters {
  triggers: PriceMonitoringTrigger[];
}

/** PriceMonitoringSettings contains the settings for price monitoring */
export interface PriceMonitoringSettings {
  /** Specifies price monitoring parameters to be used for price monitoring purposes */
  parameters: PriceMonitoringParameters | undefined;
  /** Specifies how often (expressed in seconds) the price monitoring bounds should be updated */
  updateFrequency: string;
}

/** LiquidityMonitoringParameters contains settings used for liquidity monitoring */
export interface LiquidityMonitoringParameters {
  /** Specifies parameters related to target stake calculation */
  targetStakeParameters: TargetStakeParameters | undefined;
  /** Specifies the triggering ratio for entering liquidity auction */
  triggeringRatio: number;
  /** Specifies by how many seconds an auction should be extended if leaving the auction were to trigger a liquidity auction */
  auctionExtension: string;
}

/** TargetStakeParameters contains parameters used in target stake calculation */
export interface TargetStakeParameters {
  /** Specifies length of time window expressed in seconds for target stake calculation */
  timeWindow: string;
  /** Specifies scaling factors used in target stake calculation */
  scalingFactor: number;
}

/** Market definition */
export interface Market {
  /** Unique identifier */
  id: string;
  /** Tradable instrument configuration */
  tradableInstrument: TradableInstrument | undefined;
  /**
   * Number of decimal places that a price must be shifted by in order to get a
   * correct price denominated in the currency of the market, for example:
   * `realPrice = price / 10^decimalPlaces`
   */
  decimalPlaces: string;
  /** Fees configuration */
  fees: Fees | undefined;
  /**
   * Auction duration specifies how long the opening auction will run (minimum
   * duration and optionally a minimum traded volume)
   */
  openingAuction: AuctionDuration | undefined;
  /** PriceMonitoringSettings for the market */
  priceMonitoringSettings: PriceMonitoringSettings | undefined;
  /** LiquidityMonitoringParameters for the market */
  liquidityMonitoringParameters: LiquidityMonitoringParameters | undefined;
  /** Current mode of execution of the market */
  tradingMode: Market_TradingMode;
  /** Current state of the market */
  state: Market_State;
  /** Timestamps for when the market stay changes */
  marketTimestamps: MarketTimestamps | undefined;
  /** The number of decimal places for position */
  positionDecimalPlaces: string;
}

/** The current state of the Market */
export enum Market_State {
  /** STATE_UNSPECIFIED - Default value, invalid */
  STATE_UNSPECIFIED = 0,
  /** STATE_PROPOSED - The Governance proposal valid and accepted */
  STATE_PROPOSED = 1,
  /** STATE_REJECTED - Outcome of governance votes is to reject the market */
  STATE_REJECTED = 2,
  /** STATE_PENDING - Governance vote passes/wins */
  STATE_PENDING = 3,
  /**
   * STATE_CANCELLED - Market triggers cancellation condition or governance
   * votes to close before market becomes Active
   */
  STATE_CANCELLED = 4,
  /** STATE_ACTIVE - Enactment date reached and usual auction exit checks pass */
  STATE_ACTIVE = 5,
  /** STATE_SUSPENDED - Price monitoring or liquidity monitoring trigger */
  STATE_SUSPENDED = 6,
  /** STATE_CLOSED - Governance vote (to close) */
  STATE_CLOSED = 7,
  /**
   * STATE_TRADING_TERMINATED - Defined by the product (i.e. from a product parameter,
   * specified in market definition, giving close date/time)
   */
  STATE_TRADING_TERMINATED = 8,
  /** STATE_SETTLED - Settlement triggered and completed as defined by product */
  STATE_SETTLED = 9,
  UNRECOGNIZED = -1,
}

export function market_StateFromJSON(object: any): Market_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Market_State.STATE_UNSPECIFIED;
    case 1:
    case "STATE_PROPOSED":
      return Market_State.STATE_PROPOSED;
    case 2:
    case "STATE_REJECTED":
      return Market_State.STATE_REJECTED;
    case 3:
    case "STATE_PENDING":
      return Market_State.STATE_PENDING;
    case 4:
    case "STATE_CANCELLED":
      return Market_State.STATE_CANCELLED;
    case 5:
    case "STATE_ACTIVE":
      return Market_State.STATE_ACTIVE;
    case 6:
    case "STATE_SUSPENDED":
      return Market_State.STATE_SUSPENDED;
    case 7:
    case "STATE_CLOSED":
      return Market_State.STATE_CLOSED;
    case 8:
    case "STATE_TRADING_TERMINATED":
      return Market_State.STATE_TRADING_TERMINATED;
    case 9:
    case "STATE_SETTLED":
      return Market_State.STATE_SETTLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Market_State.UNRECOGNIZED;
  }
}

export function market_StateToJSON(object: Market_State): string {
  switch (object) {
    case Market_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Market_State.STATE_PROPOSED:
      return "STATE_PROPOSED";
    case Market_State.STATE_REJECTED:
      return "STATE_REJECTED";
    case Market_State.STATE_PENDING:
      return "STATE_PENDING";
    case Market_State.STATE_CANCELLED:
      return "STATE_CANCELLED";
    case Market_State.STATE_ACTIVE:
      return "STATE_ACTIVE";
    case Market_State.STATE_SUSPENDED:
      return "STATE_SUSPENDED";
    case Market_State.STATE_CLOSED:
      return "STATE_CLOSED";
    case Market_State.STATE_TRADING_TERMINATED:
      return "STATE_TRADING_TERMINATED";
    case Market_State.STATE_SETTLED:
      return "STATE_SETTLED";
    default:
      return "UNKNOWN";
  }
}

/** The trading mode the market is currently running, also referred to as 'market state' */
export enum Market_TradingMode {
  /** TRADING_MODE_UNSPECIFIED - Default value, this is invalid */
  TRADING_MODE_UNSPECIFIED = 0,
  /** TRADING_MODE_CONTINUOUS - Normal trading */
  TRADING_MODE_CONTINUOUS = 1,
  /** TRADING_MODE_BATCH_AUCTION - Auction trading (FBA) */
  TRADING_MODE_BATCH_AUCTION = 2,
  /** TRADING_MODE_OPENING_AUCTION - Opening auction */
  TRADING_MODE_OPENING_AUCTION = 3,
  /** TRADING_MODE_MONITORING_AUCTION - Auction triggered by monitoring */
  TRADING_MODE_MONITORING_AUCTION = 4,
  UNRECOGNIZED = -1,
}

export function market_TradingModeFromJSON(object: any): Market_TradingMode {
  switch (object) {
    case 0:
    case "TRADING_MODE_UNSPECIFIED":
      return Market_TradingMode.TRADING_MODE_UNSPECIFIED;
    case 1:
    case "TRADING_MODE_CONTINUOUS":
      return Market_TradingMode.TRADING_MODE_CONTINUOUS;
    case 2:
    case "TRADING_MODE_BATCH_AUCTION":
      return Market_TradingMode.TRADING_MODE_BATCH_AUCTION;
    case 3:
    case "TRADING_MODE_OPENING_AUCTION":
      return Market_TradingMode.TRADING_MODE_OPENING_AUCTION;
    case 4:
    case "TRADING_MODE_MONITORING_AUCTION":
      return Market_TradingMode.TRADING_MODE_MONITORING_AUCTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Market_TradingMode.UNRECOGNIZED;
  }
}

export function market_TradingModeToJSON(object: Market_TradingMode): string {
  switch (object) {
    case Market_TradingMode.TRADING_MODE_UNSPECIFIED:
      return "TRADING_MODE_UNSPECIFIED";
    case Market_TradingMode.TRADING_MODE_CONTINUOUS:
      return "TRADING_MODE_CONTINUOUS";
    case Market_TradingMode.TRADING_MODE_BATCH_AUCTION:
      return "TRADING_MODE_BATCH_AUCTION";
    case Market_TradingMode.TRADING_MODE_OPENING_AUCTION:
      return "TRADING_MODE_OPENING_AUCTION";
    case Market_TradingMode.TRADING_MODE_MONITORING_AUCTION:
      return "TRADING_MODE_MONITORING_AUCTION";
    default:
      return "UNKNOWN";
  }
}

/** Time stamps for important times about creating, enacting etc the market */
export interface MarketTimestamps {
  /** Time when the market is first proposed */
  proposed: string;
  /** Time when the market has been voted in and is created into an opening auction */
  pending: string;
  /** Time when the market has left the opening auction and is ready to accept trades */
  open: string;
  /** Time when the market is closed */
  close: string;
}

function createBaseAuctionDuration(): AuctionDuration {
  return { duration: "0", volume: "0" };
}

export const AuctionDuration = {
  encode(
    message: AuctionDuration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.duration !== "0") {
      writer.uint32(8).int64(message.duration);
    }
    if (message.volume !== "0") {
      writer.uint32(16).uint64(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuctionDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = longToString(reader.int64() as Long);
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

  fromJSON(object: any): AuctionDuration {
    return {
      duration: isSet(object.duration) ? String(object.duration) : "0",
      volume: isSet(object.volume) ? String(object.volume) : "0",
    };
  },

  toJSON(message: AuctionDuration): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = message.duration);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionDuration>, I>>(
    object: I
  ): AuctionDuration {
    const message = createBaseAuctionDuration();
    message.duration = object.duration ?? "0";
    message.volume = object.volume ?? "0";
    return message;
  },
};

function createBaseFuture(): Future {
  return {
    settlementAsset: "",
    quoteName: "",
    oracleSpecForSettlementPrice: undefined,
    oracleSpecForTradingTermination: undefined,
    oracleSpecBinding: undefined,
  };
}

export const Future = {
  encode(
    message: Future,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.settlementAsset !== "") {
      writer.uint32(18).string(message.settlementAsset);
    }
    if (message.quoteName !== "") {
      writer.uint32(34).string(message.quoteName);
    }
    if (message.oracleSpecForSettlementPrice !== undefined) {
      OracleSpec.encode(
        message.oracleSpecForSettlementPrice,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.oracleSpecForTradingTermination !== undefined) {
      OracleSpec.encode(
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Future {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.settlementAsset = reader.string();
          break;
        case 4:
          message.quoteName = reader.string();
          break;
        case 5:
          message.oracleSpecForSettlementPrice = OracleSpec.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.oracleSpecForTradingTermination = OracleSpec.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Future {
    return {
      settlementAsset: isSet(object.settlementAsset)
        ? String(object.settlementAsset)
        : "",
      quoteName: isSet(object.quoteName) ? String(object.quoteName) : "",
      oracleSpecForSettlementPrice: isSet(object.oracleSpecForSettlementPrice)
        ? OracleSpec.fromJSON(object.oracleSpecForSettlementPrice)
        : undefined,
      oracleSpecForTradingTermination: isSet(
        object.oracleSpecForTradingTermination
      )
        ? OracleSpec.fromJSON(object.oracleSpecForTradingTermination)
        : undefined,
      oracleSpecBinding: isSet(object.oracleSpecBinding)
        ? OracleSpecToFutureBinding.fromJSON(object.oracleSpecBinding)
        : undefined,
    };
  },

  toJSON(message: Future): unknown {
    const obj: any = {};
    message.settlementAsset !== undefined &&
      (obj.settlementAsset = message.settlementAsset);
    message.quoteName !== undefined && (obj.quoteName = message.quoteName);
    message.oracleSpecForSettlementPrice !== undefined &&
      (obj.oracleSpecForSettlementPrice = message.oracleSpecForSettlementPrice
        ? OracleSpec.toJSON(message.oracleSpecForSettlementPrice)
        : undefined);
    message.oracleSpecForTradingTermination !== undefined &&
      (obj.oracleSpecForTradingTermination =
        message.oracleSpecForTradingTermination
          ? OracleSpec.toJSON(message.oracleSpecForTradingTermination)
          : undefined);
    message.oracleSpecBinding !== undefined &&
      (obj.oracleSpecBinding = message.oracleSpecBinding
        ? OracleSpecToFutureBinding.toJSON(message.oracleSpecBinding)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Future>, I>>(object: I): Future {
    const message = createBaseFuture();
    message.settlementAsset = object.settlementAsset ?? "";
    message.quoteName = object.quoteName ?? "";
    message.oracleSpecForSettlementPrice =
      object.oracleSpecForSettlementPrice !== undefined &&
      object.oracleSpecForSettlementPrice !== null
        ? OracleSpec.fromPartial(object.oracleSpecForSettlementPrice)
        : undefined;
    message.oracleSpecForTradingTermination =
      object.oracleSpecForTradingTermination !== undefined &&
      object.oracleSpecForTradingTermination !== null
        ? OracleSpec.fromPartial(object.oracleSpecForTradingTermination)
        : undefined;
    message.oracleSpecBinding =
      object.oracleSpecBinding !== undefined &&
      object.oracleSpecBinding !== null
        ? OracleSpecToFutureBinding.fromPartial(object.oracleSpecBinding)
        : undefined;
    return message;
  },
};

function createBaseOracleSpecToFutureBinding(): OracleSpecToFutureBinding {
  return { settlementPriceProperty: "", tradingTerminationProperty: "" };
}

export const OracleSpecToFutureBinding = {
  encode(
    message: OracleSpecToFutureBinding,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.settlementPriceProperty !== "") {
      writer.uint32(10).string(message.settlementPriceProperty);
    }
    if (message.tradingTerminationProperty !== "") {
      writer.uint32(18).string(message.tradingTerminationProperty);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OracleSpecToFutureBinding {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpecToFutureBinding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.settlementPriceProperty = reader.string();
          break;
        case 2:
          message.tradingTerminationProperty = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSpecToFutureBinding {
    return {
      settlementPriceProperty: isSet(object.settlementPriceProperty)
        ? String(object.settlementPriceProperty)
        : "",
      tradingTerminationProperty: isSet(object.tradingTerminationProperty)
        ? String(object.tradingTerminationProperty)
        : "",
    };
  },

  toJSON(message: OracleSpecToFutureBinding): unknown {
    const obj: any = {};
    message.settlementPriceProperty !== undefined &&
      (obj.settlementPriceProperty = message.settlementPriceProperty);
    message.tradingTerminationProperty !== undefined &&
      (obj.tradingTerminationProperty = message.tradingTerminationProperty);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpecToFutureBinding>, I>>(
    object: I
  ): OracleSpecToFutureBinding {
    const message = createBaseOracleSpecToFutureBinding();
    message.settlementPriceProperty = object.settlementPriceProperty ?? "";
    message.tradingTerminationProperty =
      object.tradingTerminationProperty ?? "";
    return message;
  },
};

function createBaseInstrumentMetadata(): InstrumentMetadata {
  return { tags: [] };
}

export const InstrumentMetadata = {
  encode(
    message: InstrumentMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentMetadata {
    return {
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: InstrumentMetadata): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InstrumentMetadata>, I>>(
    object: I
  ): InstrumentMetadata {
    const message = createBaseInstrumentMetadata();
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseInstrument(): Instrument {
  return { id: "", code: "", name: "", metadata: undefined, future: undefined };
}

export const Instrument = {
  encode(
    message: Instrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.metadata !== undefined) {
      InstrumentMetadata.encode(
        message.metadata,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.future !== undefined) {
      Future.encode(message.future, writer.uint32(802).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.metadata = InstrumentMetadata.decode(reader, reader.uint32());
          break;
        case 100:
          message.future = Future.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Instrument {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      code: isSet(object.code) ? String(object.code) : "",
      name: isSet(object.name) ? String(object.name) : "",
      metadata: isSet(object.metadata)
        ? InstrumentMetadata.fromJSON(object.metadata)
        : undefined,
      future: isSet(object.future) ? Future.fromJSON(object.future) : undefined,
    };
  },

  toJSON(message: Instrument): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.code !== undefined && (obj.code = message.code);
    message.name !== undefined && (obj.name = message.name);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? InstrumentMetadata.toJSON(message.metadata)
        : undefined);
    message.future !== undefined &&
      (obj.future = message.future ? Future.toJSON(message.future) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Instrument>, I>>(
    object: I
  ): Instrument {
    const message = createBaseInstrument();
    message.id = object.id ?? "";
    message.code = object.code ?? "";
    message.name = object.name ?? "";
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? InstrumentMetadata.fromPartial(object.metadata)
        : undefined;
    message.future =
      object.future !== undefined && object.future !== null
        ? Future.fromPartial(object.future)
        : undefined;
    return message;
  },
};

function createBaseLogNormalRiskModel(): LogNormalRiskModel {
  return { riskAversionParameter: 0, tau: 0, params: undefined };
}

export const LogNormalRiskModel = {
  encode(
    message: LogNormalRiskModel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.riskAversionParameter !== 0) {
      writer.uint32(9).double(message.riskAversionParameter);
    }
    if (message.tau !== 0) {
      writer.uint32(17).double(message.tau);
    }
    if (message.params !== undefined) {
      LogNormalModelParams.encode(
        message.params,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogNormalRiskModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogNormalRiskModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskAversionParameter = reader.double();
          break;
        case 2:
          message.tau = reader.double();
          break;
        case 3:
          message.params = LogNormalModelParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogNormalRiskModel {
    return {
      riskAversionParameter: isSet(object.riskAversionParameter)
        ? Number(object.riskAversionParameter)
        : 0,
      tau: isSet(object.tau) ? Number(object.tau) : 0,
      params: isSet(object.params)
        ? LogNormalModelParams.fromJSON(object.params)
        : undefined,
    };
  },

  toJSON(message: LogNormalRiskModel): unknown {
    const obj: any = {};
    message.riskAversionParameter !== undefined &&
      (obj.riskAversionParameter = message.riskAversionParameter);
    message.tau !== undefined && (obj.tau = message.tau);
    message.params !== undefined &&
      (obj.params = message.params
        ? LogNormalModelParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogNormalRiskModel>, I>>(
    object: I
  ): LogNormalRiskModel {
    const message = createBaseLogNormalRiskModel();
    message.riskAversionParameter = object.riskAversionParameter ?? 0;
    message.tau = object.tau ?? 0;
    message.params =
      object.params !== undefined && object.params !== null
        ? LogNormalModelParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseLogNormalModelParams(): LogNormalModelParams {
  return { mu: 0, r: 0, sigma: 0 };
}

export const LogNormalModelParams = {
  encode(
    message: LogNormalModelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mu !== 0) {
      writer.uint32(9).double(message.mu);
    }
    if (message.r !== 0) {
      writer.uint32(17).double(message.r);
    }
    if (message.sigma !== 0) {
      writer.uint32(25).double(message.sigma);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LogNormalModelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogNormalModelParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mu = reader.double();
          break;
        case 2:
          message.r = reader.double();
          break;
        case 3:
          message.sigma = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogNormalModelParams {
    return {
      mu: isSet(object.mu) ? Number(object.mu) : 0,
      r: isSet(object.r) ? Number(object.r) : 0,
      sigma: isSet(object.sigma) ? Number(object.sigma) : 0,
    };
  },

  toJSON(message: LogNormalModelParams): unknown {
    const obj: any = {};
    message.mu !== undefined && (obj.mu = message.mu);
    message.r !== undefined && (obj.r = message.r);
    message.sigma !== undefined && (obj.sigma = message.sigma);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogNormalModelParams>, I>>(
    object: I
  ): LogNormalModelParams {
    const message = createBaseLogNormalModelParams();
    message.mu = object.mu ?? 0;
    message.r = object.r ?? 0;
    message.sigma = object.sigma ?? 0;
    return message;
  },
};

function createBaseSimpleRiskModel(): SimpleRiskModel {
  return { params: undefined };
}

export const SimpleRiskModel = {
  encode(
    message: SimpleRiskModel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      SimpleModelParams.encode(
        message.params,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleRiskModel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleRiskModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = SimpleModelParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleRiskModel {
    return {
      params: isSet(object.params)
        ? SimpleModelParams.fromJSON(object.params)
        : undefined,
    };
  },

  toJSON(message: SimpleRiskModel): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params
        ? SimpleModelParams.toJSON(message.params)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleRiskModel>, I>>(
    object: I
  ): SimpleRiskModel {
    const message = createBaseSimpleRiskModel();
    message.params =
      object.params !== undefined && object.params !== null
        ? SimpleModelParams.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseSimpleModelParams(): SimpleModelParams {
  return {
    factorLong: 0,
    factorShort: 0,
    maxMoveUp: 0,
    minMoveDown: 0,
    probabilityOfTrading: 0,
  };
}

export const SimpleModelParams = {
  encode(
    message: SimpleModelParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.factorLong !== 0) {
      writer.uint32(9).double(message.factorLong);
    }
    if (message.factorShort !== 0) {
      writer.uint32(17).double(message.factorShort);
    }
    if (message.maxMoveUp !== 0) {
      writer.uint32(25).double(message.maxMoveUp);
    }
    if (message.minMoveDown !== 0) {
      writer.uint32(33).double(message.minMoveDown);
    }
    if (message.probabilityOfTrading !== 0) {
      writer.uint32(41).double(message.probabilityOfTrading);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleModelParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleModelParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.factorLong = reader.double();
          break;
        case 2:
          message.factorShort = reader.double();
          break;
        case 3:
          message.maxMoveUp = reader.double();
          break;
        case 4:
          message.minMoveDown = reader.double();
          break;
        case 5:
          message.probabilityOfTrading = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleModelParams {
    return {
      factorLong: isSet(object.factorLong) ? Number(object.factorLong) : 0,
      factorShort: isSet(object.factorShort) ? Number(object.factorShort) : 0,
      maxMoveUp: isSet(object.maxMoveUp) ? Number(object.maxMoveUp) : 0,
      minMoveDown: isSet(object.minMoveDown) ? Number(object.minMoveDown) : 0,
      probabilityOfTrading: isSet(object.probabilityOfTrading)
        ? Number(object.probabilityOfTrading)
        : 0,
    };
  },

  toJSON(message: SimpleModelParams): unknown {
    const obj: any = {};
    message.factorLong !== undefined && (obj.factorLong = message.factorLong);
    message.factorShort !== undefined &&
      (obj.factorShort = message.factorShort);
    message.maxMoveUp !== undefined && (obj.maxMoveUp = message.maxMoveUp);
    message.minMoveDown !== undefined &&
      (obj.minMoveDown = message.minMoveDown);
    message.probabilityOfTrading !== undefined &&
      (obj.probabilityOfTrading = message.probabilityOfTrading);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleModelParams>, I>>(
    object: I
  ): SimpleModelParams {
    const message = createBaseSimpleModelParams();
    message.factorLong = object.factorLong ?? 0;
    message.factorShort = object.factorShort ?? 0;
    message.maxMoveUp = object.maxMoveUp ?? 0;
    message.minMoveDown = object.minMoveDown ?? 0;
    message.probabilityOfTrading = object.probabilityOfTrading ?? 0;
    return message;
  },
};

function createBaseScalingFactors(): ScalingFactors {
  return { searchLevel: 0, initialMargin: 0, collateralRelease: 0 };
}

export const ScalingFactors = {
  encode(
    message: ScalingFactors,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.searchLevel !== 0) {
      writer.uint32(9).double(message.searchLevel);
    }
    if (message.initialMargin !== 0) {
      writer.uint32(17).double(message.initialMargin);
    }
    if (message.collateralRelease !== 0) {
      writer.uint32(25).double(message.collateralRelease);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalingFactors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalingFactors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.searchLevel = reader.double();
          break;
        case 2:
          message.initialMargin = reader.double();
          break;
        case 3:
          message.collateralRelease = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalingFactors {
    return {
      searchLevel: isSet(object.searchLevel) ? Number(object.searchLevel) : 0,
      initialMargin: isSet(object.initialMargin)
        ? Number(object.initialMargin)
        : 0,
      collateralRelease: isSet(object.collateralRelease)
        ? Number(object.collateralRelease)
        : 0,
    };
  },

  toJSON(message: ScalingFactors): unknown {
    const obj: any = {};
    message.searchLevel !== undefined &&
      (obj.searchLevel = message.searchLevel);
    message.initialMargin !== undefined &&
      (obj.initialMargin = message.initialMargin);
    message.collateralRelease !== undefined &&
      (obj.collateralRelease = message.collateralRelease);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalingFactors>, I>>(
    object: I
  ): ScalingFactors {
    const message = createBaseScalingFactors();
    message.searchLevel = object.searchLevel ?? 0;
    message.initialMargin = object.initialMargin ?? 0;
    message.collateralRelease = object.collateralRelease ?? 0;
    return message;
  },
};

function createBaseMarginCalculator(): MarginCalculator {
  return { scalingFactors: undefined };
}

export const MarginCalculator = {
  encode(
    message: MarginCalculator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scalingFactors !== undefined) {
      ScalingFactors.encode(
        message.scalingFactors,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarginCalculator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarginCalculator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scalingFactors = ScalingFactors.decode(
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

  fromJSON(object: any): MarginCalculator {
    return {
      scalingFactors: isSet(object.scalingFactors)
        ? ScalingFactors.fromJSON(object.scalingFactors)
        : undefined,
    };
  },

  toJSON(message: MarginCalculator): unknown {
    const obj: any = {};
    message.scalingFactors !== undefined &&
      (obj.scalingFactors = message.scalingFactors
        ? ScalingFactors.toJSON(message.scalingFactors)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarginCalculator>, I>>(
    object: I
  ): MarginCalculator {
    const message = createBaseMarginCalculator();
    message.scalingFactors =
      object.scalingFactors !== undefined && object.scalingFactors !== null
        ? ScalingFactors.fromPartial(object.scalingFactors)
        : undefined;
    return message;
  },
};

function createBaseTradableInstrument(): TradableInstrument {
  return {
    instrument: undefined,
    marginCalculator: undefined,
    logNormalRiskModel: undefined,
    simpleRiskModel: undefined,
  };
}

export const TradableInstrument = {
  encode(
    message: TradableInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Instrument.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    if (message.marginCalculator !== undefined) {
      MarginCalculator.encode(
        message.marginCalculator,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.logNormalRiskModel !== undefined) {
      LogNormalRiskModel.encode(
        message.logNormalRiskModel,
        writer.uint32(802).fork()
      ).ldelim();
    }
    if (message.simpleRiskModel !== undefined) {
      SimpleRiskModel.encode(
        message.simpleRiskModel,
        writer.uint32(810).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradableInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradableInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Instrument.decode(reader, reader.uint32());
          break;
        case 2:
          message.marginCalculator = MarginCalculator.decode(
            reader,
            reader.uint32()
          );
          break;
        case 100:
          message.logNormalRiskModel = LogNormalRiskModel.decode(
            reader,
            reader.uint32()
          );
          break;
        case 101:
          message.simpleRiskModel = SimpleRiskModel.decode(
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

  fromJSON(object: any): TradableInstrument {
    return {
      instrument: isSet(object.instrument)
        ? Instrument.fromJSON(object.instrument)
        : undefined,
      marginCalculator: isSet(object.marginCalculator)
        ? MarginCalculator.fromJSON(object.marginCalculator)
        : undefined,
      logNormalRiskModel: isSet(object.logNormalRiskModel)
        ? LogNormalRiskModel.fromJSON(object.logNormalRiskModel)
        : undefined,
      simpleRiskModel: isSet(object.simpleRiskModel)
        ? SimpleRiskModel.fromJSON(object.simpleRiskModel)
        : undefined,
    };
  },

  toJSON(message: TradableInstrument): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Instrument.toJSON(message.instrument)
        : undefined);
    message.marginCalculator !== undefined &&
      (obj.marginCalculator = message.marginCalculator
        ? MarginCalculator.toJSON(message.marginCalculator)
        : undefined);
    message.logNormalRiskModel !== undefined &&
      (obj.logNormalRiskModel = message.logNormalRiskModel
        ? LogNormalRiskModel.toJSON(message.logNormalRiskModel)
        : undefined);
    message.simpleRiskModel !== undefined &&
      (obj.simpleRiskModel = message.simpleRiskModel
        ? SimpleRiskModel.toJSON(message.simpleRiskModel)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradableInstrument>, I>>(
    object: I
  ): TradableInstrument {
    const message = createBaseTradableInstrument();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Instrument.fromPartial(object.instrument)
        : undefined;
    message.marginCalculator =
      object.marginCalculator !== undefined && object.marginCalculator !== null
        ? MarginCalculator.fromPartial(object.marginCalculator)
        : undefined;
    message.logNormalRiskModel =
      object.logNormalRiskModel !== undefined &&
      object.logNormalRiskModel !== null
        ? LogNormalRiskModel.fromPartial(object.logNormalRiskModel)
        : undefined;
    message.simpleRiskModel =
      object.simpleRiskModel !== undefined && object.simpleRiskModel !== null
        ? SimpleRiskModel.fromPartial(object.simpleRiskModel)
        : undefined;
    return message;
  },
};

function createBaseFeeFactors(): FeeFactors {
  return { makerFee: "", infrastructureFee: "", liquidityFee: "" };
}

export const FeeFactors = {
  encode(
    message: FeeFactors,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.makerFee !== "") {
      writer.uint32(10).string(message.makerFee);
    }
    if (message.infrastructureFee !== "") {
      writer.uint32(18).string(message.infrastructureFee);
    }
    if (message.liquidityFee !== "") {
      writer.uint32(26).string(message.liquidityFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeFactors {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeFactors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.makerFee = reader.string();
          break;
        case 2:
          message.infrastructureFee = reader.string();
          break;
        case 3:
          message.liquidityFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeFactors {
    return {
      makerFee: isSet(object.makerFee) ? String(object.makerFee) : "",
      infrastructureFee: isSet(object.infrastructureFee)
        ? String(object.infrastructureFee)
        : "",
      liquidityFee: isSet(object.liquidityFee)
        ? String(object.liquidityFee)
        : "",
    };
  },

  toJSON(message: FeeFactors): unknown {
    const obj: any = {};
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.infrastructureFee !== undefined &&
      (obj.infrastructureFee = message.infrastructureFee);
    message.liquidityFee !== undefined &&
      (obj.liquidityFee = message.liquidityFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeFactors>, I>>(
    object: I
  ): FeeFactors {
    const message = createBaseFeeFactors();
    message.makerFee = object.makerFee ?? "";
    message.infrastructureFee = object.infrastructureFee ?? "";
    message.liquidityFee = object.liquidityFee ?? "";
    return message;
  },
};

function createBaseFees(): Fees {
  return { factors: undefined };
}

export const Fees = {
  encode(message: Fees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.factors !== undefined) {
      FeeFactors.encode(message.factors, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fees {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFees();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.factors = FeeFactors.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fees {
    return {
      factors: isSet(object.factors)
        ? FeeFactors.fromJSON(object.factors)
        : undefined,
    };
  },

  toJSON(message: Fees): unknown {
    const obj: any = {};
    message.factors !== undefined &&
      (obj.factors = message.factors
        ? FeeFactors.toJSON(message.factors)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fees>, I>>(object: I): Fees {
    const message = createBaseFees();
    message.factors =
      object.factors !== undefined && object.factors !== null
        ? FeeFactors.fromPartial(object.factors)
        : undefined;
    return message;
  },
};

function createBasePriceMonitoringTrigger(): PriceMonitoringTrigger {
  return { horizon: "0", probability: "", auctionExtension: "0" };
}

export const PriceMonitoringTrigger = {
  encode(
    message: PriceMonitoringTrigger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.horizon !== "0") {
      writer.uint32(8).int64(message.horizon);
    }
    if (message.probability !== "") {
      writer.uint32(18).string(message.probability);
    }
    if (message.auctionExtension !== "0") {
      writer.uint32(24).int64(message.auctionExtension);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PriceMonitoringTrigger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceMonitoringTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.horizon = longToString(reader.int64() as Long);
          break;
        case 2:
          message.probability = reader.string();
          break;
        case 3:
          message.auctionExtension = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceMonitoringTrigger {
    return {
      horizon: isSet(object.horizon) ? String(object.horizon) : "0",
      probability: isSet(object.probability) ? String(object.probability) : "",
      auctionExtension: isSet(object.auctionExtension)
        ? String(object.auctionExtension)
        : "0",
    };
  },

  toJSON(message: PriceMonitoringTrigger): unknown {
    const obj: any = {};
    message.horizon !== undefined && (obj.horizon = message.horizon);
    message.probability !== undefined &&
      (obj.probability = message.probability);
    message.auctionExtension !== undefined &&
      (obj.auctionExtension = message.auctionExtension);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceMonitoringTrigger>, I>>(
    object: I
  ): PriceMonitoringTrigger {
    const message = createBasePriceMonitoringTrigger();
    message.horizon = object.horizon ?? "0";
    message.probability = object.probability ?? "";
    message.auctionExtension = object.auctionExtension ?? "0";
    return message;
  },
};

function createBasePriceMonitoringParameters(): PriceMonitoringParameters {
  return { triggers: [] };
}

export const PriceMonitoringParameters = {
  encode(
    message: PriceMonitoringParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.triggers) {
      PriceMonitoringTrigger.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PriceMonitoringParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceMonitoringParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggers.push(
            PriceMonitoringTrigger.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceMonitoringParameters {
    return {
      triggers: Array.isArray(object?.triggers)
        ? object.triggers.map((e: any) => PriceMonitoringTrigger.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PriceMonitoringParameters): unknown {
    const obj: any = {};
    if (message.triggers) {
      obj.triggers = message.triggers.map((e) =>
        e ? PriceMonitoringTrigger.toJSON(e) : undefined
      );
    } else {
      obj.triggers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceMonitoringParameters>, I>>(
    object: I
  ): PriceMonitoringParameters {
    const message = createBasePriceMonitoringParameters();
    message.triggers =
      object.triggers?.map((e) => PriceMonitoringTrigger.fromPartial(e)) || [];
    return message;
  },
};

function createBasePriceMonitoringSettings(): PriceMonitoringSettings {
  return { parameters: undefined, updateFrequency: "0" };
}

export const PriceMonitoringSettings = {
  encode(
    message: PriceMonitoringSettings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parameters !== undefined) {
      PriceMonitoringParameters.encode(
        message.parameters,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.updateFrequency !== "0") {
      writer.uint32(16).int64(message.updateFrequency);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PriceMonitoringSettings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceMonitoringSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parameters = PriceMonitoringParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.updateFrequency = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceMonitoringSettings {
    return {
      parameters: isSet(object.parameters)
        ? PriceMonitoringParameters.fromJSON(object.parameters)
        : undefined,
      updateFrequency: isSet(object.updateFrequency)
        ? String(object.updateFrequency)
        : "0",
    };
  },

  toJSON(message: PriceMonitoringSettings): unknown {
    const obj: any = {};
    message.parameters !== undefined &&
      (obj.parameters = message.parameters
        ? PriceMonitoringParameters.toJSON(message.parameters)
        : undefined);
    message.updateFrequency !== undefined &&
      (obj.updateFrequency = message.updateFrequency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceMonitoringSettings>, I>>(
    object: I
  ): PriceMonitoringSettings {
    const message = createBasePriceMonitoringSettings();
    message.parameters =
      object.parameters !== undefined && object.parameters !== null
        ? PriceMonitoringParameters.fromPartial(object.parameters)
        : undefined;
    message.updateFrequency = object.updateFrequency ?? "0";
    return message;
  },
};

function createBaseLiquidityMonitoringParameters(): LiquidityMonitoringParameters {
  return {
    targetStakeParameters: undefined,
    triggeringRatio: 0,
    auctionExtension: "0",
  };
}

export const LiquidityMonitoringParameters = {
  encode(
    message: LiquidityMonitoringParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.targetStakeParameters !== undefined) {
      TargetStakeParameters.encode(
        message.targetStakeParameters,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.triggeringRatio !== 0) {
      writer.uint32(17).double(message.triggeringRatio);
    }
    if (message.auctionExtension !== "0") {
      writer.uint32(24).int64(message.auctionExtension);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityMonitoringParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityMonitoringParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetStakeParameters = TargetStakeParameters.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.triggeringRatio = reader.double();
          break;
        case 3:
          message.auctionExtension = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityMonitoringParameters {
    return {
      targetStakeParameters: isSet(object.targetStakeParameters)
        ? TargetStakeParameters.fromJSON(object.targetStakeParameters)
        : undefined,
      triggeringRatio: isSet(object.triggeringRatio)
        ? Number(object.triggeringRatio)
        : 0,
      auctionExtension: isSet(object.auctionExtension)
        ? String(object.auctionExtension)
        : "0",
    };
  },

  toJSON(message: LiquidityMonitoringParameters): unknown {
    const obj: any = {};
    message.targetStakeParameters !== undefined &&
      (obj.targetStakeParameters = message.targetStakeParameters
        ? TargetStakeParameters.toJSON(message.targetStakeParameters)
        : undefined);
    message.triggeringRatio !== undefined &&
      (obj.triggeringRatio = message.triggeringRatio);
    message.auctionExtension !== undefined &&
      (obj.auctionExtension = message.auctionExtension);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityMonitoringParameters>, I>>(
    object: I
  ): LiquidityMonitoringParameters {
    const message = createBaseLiquidityMonitoringParameters();
    message.targetStakeParameters =
      object.targetStakeParameters !== undefined &&
      object.targetStakeParameters !== null
        ? TargetStakeParameters.fromPartial(object.targetStakeParameters)
        : undefined;
    message.triggeringRatio = object.triggeringRatio ?? 0;
    message.auctionExtension = object.auctionExtension ?? "0";
    return message;
  },
};

function createBaseTargetStakeParameters(): TargetStakeParameters {
  return { timeWindow: "0", scalingFactor: 0 };
}

export const TargetStakeParameters = {
  encode(
    message: TargetStakeParameters,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timeWindow !== "0") {
      writer.uint32(8).int64(message.timeWindow);
    }
    if (message.scalingFactor !== 0) {
      writer.uint32(17).double(message.scalingFactor);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TargetStakeParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTargetStakeParameters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeWindow = longToString(reader.int64() as Long);
          break;
        case 2:
          message.scalingFactor = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetStakeParameters {
    return {
      timeWindow: isSet(object.timeWindow) ? String(object.timeWindow) : "0",
      scalingFactor: isSet(object.scalingFactor)
        ? Number(object.scalingFactor)
        : 0,
    };
  },

  toJSON(message: TargetStakeParameters): unknown {
    const obj: any = {};
    message.timeWindow !== undefined && (obj.timeWindow = message.timeWindow);
    message.scalingFactor !== undefined &&
      (obj.scalingFactor = message.scalingFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TargetStakeParameters>, I>>(
    object: I
  ): TargetStakeParameters {
    const message = createBaseTargetStakeParameters();
    message.timeWindow = object.timeWindow ?? "0";
    message.scalingFactor = object.scalingFactor ?? 0;
    return message;
  },
};

function createBaseMarket(): Market {
  return {
    id: "",
    tradableInstrument: undefined,
    decimalPlaces: "0",
    fees: undefined,
    openingAuction: undefined,
    priceMonitoringSettings: undefined,
    liquidityMonitoringParameters: undefined,
    tradingMode: 0,
    state: 0,
    marketTimestamps: undefined,
    positionDecimalPlaces: "0",
  };
}

export const Market = {
  encode(
    message: Market,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.tradableInstrument !== undefined) {
      TradableInstrument.encode(
        message.tradableInstrument,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.decimalPlaces !== "0") {
      writer.uint32(24).uint64(message.decimalPlaces);
    }
    if (message.fees !== undefined) {
      Fees.encode(message.fees, writer.uint32(34).fork()).ldelim();
    }
    if (message.openingAuction !== undefined) {
      AuctionDuration.encode(
        message.openingAuction,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.priceMonitoringSettings !== undefined) {
      PriceMonitoringSettings.encode(
        message.priceMonitoringSettings,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.liquidityMonitoringParameters !== undefined) {
      LiquidityMonitoringParameters.encode(
        message.liquidityMonitoringParameters,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.tradingMode !== 0) {
      writer.uint32(64).int32(message.tradingMode);
    }
    if (message.state !== 0) {
      writer.uint32(72).int32(message.state);
    }
    if (message.marketTimestamps !== undefined) {
      MarketTimestamps.encode(
        message.marketTimestamps,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.positionDecimalPlaces !== "0") {
      writer.uint32(88).uint64(message.positionDecimalPlaces);
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
          message.id = reader.string();
          break;
        case 2:
          message.tradableInstrument = TradableInstrument.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.decimalPlaces = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.fees = Fees.decode(reader, reader.uint32());
          break;
        case 5:
          message.openingAuction = AuctionDuration.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.priceMonitoringSettings = PriceMonitoringSettings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.liquidityMonitoringParameters =
            LiquidityMonitoringParameters.decode(reader, reader.uint32());
          break;
        case 8:
          message.tradingMode = reader.int32() as any;
          break;
        case 9:
          message.state = reader.int32() as any;
          break;
        case 10:
          message.marketTimestamps = MarketTimestamps.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.positionDecimalPlaces = longToString(reader.uint64() as Long);
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
      id: isSet(object.id) ? String(object.id) : "",
      tradableInstrument: isSet(object.tradableInstrument)
        ? TradableInstrument.fromJSON(object.tradableInstrument)
        : undefined,
      decimalPlaces: isSet(object.decimalPlaces)
        ? String(object.decimalPlaces)
        : "0",
      fees: isSet(object.fees) ? Fees.fromJSON(object.fees) : undefined,
      openingAuction: isSet(object.openingAuction)
        ? AuctionDuration.fromJSON(object.openingAuction)
        : undefined,
      priceMonitoringSettings: isSet(object.priceMonitoringSettings)
        ? PriceMonitoringSettings.fromJSON(object.priceMonitoringSettings)
        : undefined,
      liquidityMonitoringParameters: isSet(object.liquidityMonitoringParameters)
        ? LiquidityMonitoringParameters.fromJSON(
            object.liquidityMonitoringParameters
          )
        : undefined,
      tradingMode: isSet(object.tradingMode)
        ? market_TradingModeFromJSON(object.tradingMode)
        : 0,
      state: isSet(object.state) ? market_StateFromJSON(object.state) : 0,
      marketTimestamps: isSet(object.marketTimestamps)
        ? MarketTimestamps.fromJSON(object.marketTimestamps)
        : undefined,
      positionDecimalPlaces: isSet(object.positionDecimalPlaces)
        ? String(object.positionDecimalPlaces)
        : "0",
    };
  },

  toJSON(message: Market): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.tradableInstrument !== undefined &&
      (obj.tradableInstrument = message.tradableInstrument
        ? TradableInstrument.toJSON(message.tradableInstrument)
        : undefined);
    message.decimalPlaces !== undefined &&
      (obj.decimalPlaces = message.decimalPlaces);
    message.fees !== undefined &&
      (obj.fees = message.fees ? Fees.toJSON(message.fees) : undefined);
    message.openingAuction !== undefined &&
      (obj.openingAuction = message.openingAuction
        ? AuctionDuration.toJSON(message.openingAuction)
        : undefined);
    message.priceMonitoringSettings !== undefined &&
      (obj.priceMonitoringSettings = message.priceMonitoringSettings
        ? PriceMonitoringSettings.toJSON(message.priceMonitoringSettings)
        : undefined);
    message.liquidityMonitoringParameters !== undefined &&
      (obj.liquidityMonitoringParameters = message.liquidityMonitoringParameters
        ? LiquidityMonitoringParameters.toJSON(
            message.liquidityMonitoringParameters
          )
        : undefined);
    message.tradingMode !== undefined &&
      (obj.tradingMode = market_TradingModeToJSON(message.tradingMode));
    message.state !== undefined &&
      (obj.state = market_StateToJSON(message.state));
    message.marketTimestamps !== undefined &&
      (obj.marketTimestamps = message.marketTimestamps
        ? MarketTimestamps.toJSON(message.marketTimestamps)
        : undefined);
    message.positionDecimalPlaces !== undefined &&
      (obj.positionDecimalPlaces = message.positionDecimalPlaces);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market {
    const message = createBaseMarket();
    message.id = object.id ?? "";
    message.tradableInstrument =
      object.tradableInstrument !== undefined &&
      object.tradableInstrument !== null
        ? TradableInstrument.fromPartial(object.tradableInstrument)
        : undefined;
    message.decimalPlaces = object.decimalPlaces ?? "0";
    message.fees =
      object.fees !== undefined && object.fees !== null
        ? Fees.fromPartial(object.fees)
        : undefined;
    message.openingAuction =
      object.openingAuction !== undefined && object.openingAuction !== null
        ? AuctionDuration.fromPartial(object.openingAuction)
        : undefined;
    message.priceMonitoringSettings =
      object.priceMonitoringSettings !== undefined &&
      object.priceMonitoringSettings !== null
        ? PriceMonitoringSettings.fromPartial(object.priceMonitoringSettings)
        : undefined;
    message.liquidityMonitoringParameters =
      object.liquidityMonitoringParameters !== undefined &&
      object.liquidityMonitoringParameters !== null
        ? LiquidityMonitoringParameters.fromPartial(
            object.liquidityMonitoringParameters
          )
        : undefined;
    message.tradingMode = object.tradingMode ?? 0;
    message.state = object.state ?? 0;
    message.marketTimestamps =
      object.marketTimestamps !== undefined && object.marketTimestamps !== null
        ? MarketTimestamps.fromPartial(object.marketTimestamps)
        : undefined;
    message.positionDecimalPlaces = object.positionDecimalPlaces ?? "0";
    return message;
  },
};

function createBaseMarketTimestamps(): MarketTimestamps {
  return { proposed: "0", pending: "0", open: "0", close: "0" };
}

export const MarketTimestamps = {
  encode(
    message: MarketTimestamps,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposed !== "0") {
      writer.uint32(8).int64(message.proposed);
    }
    if (message.pending !== "0") {
      writer.uint32(16).int64(message.pending);
    }
    if (message.open !== "0") {
      writer.uint32(24).int64(message.open);
    }
    if (message.close !== "0") {
      writer.uint32(32).int64(message.close);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketTimestamps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketTimestamps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposed = longToString(reader.int64() as Long);
          break;
        case 2:
          message.pending = longToString(reader.int64() as Long);
          break;
        case 3:
          message.open = longToString(reader.int64() as Long);
          break;
        case 4:
          message.close = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketTimestamps {
    return {
      proposed: isSet(object.proposed) ? String(object.proposed) : "0",
      pending: isSet(object.pending) ? String(object.pending) : "0",
      open: isSet(object.open) ? String(object.open) : "0",
      close: isSet(object.close) ? String(object.close) : "0",
    };
  },

  toJSON(message: MarketTimestamps): unknown {
    const obj: any = {};
    message.proposed !== undefined && (obj.proposed = message.proposed);
    message.pending !== undefined && (obj.pending = message.pending);
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketTimestamps>, I>>(
    object: I
  ): MarketTimestamps {
    const message = createBaseMarketTimestamps();
    message.proposed = object.proposed ?? "0";
    message.pending = object.pending ?? "0";
    message.open = object.open ?? "0";
    message.close = object.close ?? "0";
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
