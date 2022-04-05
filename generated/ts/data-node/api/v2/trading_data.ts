/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  AccountType,
  NetworkLimits,
  Order,
  MarketData,
  accountTypeFromJSON,
  accountTypeToJSON,
} from "../../../vega/vega";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const protobufPackage = "datanode.api.v2";

/** A list of the properties of an account, used for grouping */
export enum AccountField {
  ACCOUNT_FIELD_UNSPECIFIED = 0,
  ACCOUNT_FIELD_ID = 1,
  ACCOUNT_FIELD_PARTY_ID = 2,
  ACCOUNT_FIELD_ASSET_ID = 3,
  ACCOUNT_FIELD_MARKET_ID = 4,
  ACCOUNT_FIELD_TYPE = 5,
  UNRECOGNIZED = -1,
}

export function accountFieldFromJSON(object: any): AccountField {
  switch (object) {
    case 0:
    case "ACCOUNT_FIELD_UNSPECIFIED":
      return AccountField.ACCOUNT_FIELD_UNSPECIFIED;
    case 1:
    case "ACCOUNT_FIELD_ID":
      return AccountField.ACCOUNT_FIELD_ID;
    case 2:
    case "ACCOUNT_FIELD_PARTY_ID":
      return AccountField.ACCOUNT_FIELD_PARTY_ID;
    case 3:
    case "ACCOUNT_FIELD_ASSET_ID":
      return AccountField.ACCOUNT_FIELD_ASSET_ID;
    case 4:
    case "ACCOUNT_FIELD_MARKET_ID":
      return AccountField.ACCOUNT_FIELD_MARKET_ID;
    case 5:
    case "ACCOUNT_FIELD_TYPE":
      return AccountField.ACCOUNT_FIELD_TYPE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountField.UNRECOGNIZED;
  }
}

export function accountFieldToJSON(object: AccountField): string {
  switch (object) {
    case AccountField.ACCOUNT_FIELD_UNSPECIFIED:
      return "ACCOUNT_FIELD_UNSPECIFIED";
    case AccountField.ACCOUNT_FIELD_ID:
      return "ACCOUNT_FIELD_ID";
    case AccountField.ACCOUNT_FIELD_PARTY_ID:
      return "ACCOUNT_FIELD_PARTY_ID";
    case AccountField.ACCOUNT_FIELD_ASSET_ID:
      return "ACCOUNT_FIELD_ASSET_ID";
    case AccountField.ACCOUNT_FIELD_MARKET_ID:
      return "ACCOUNT_FIELD_MARKET_ID";
    case AccountField.ACCOUNT_FIELD_TYPE:
      return "ACCOUNT_FIELD_TYPE";
    default:
      return "UNKNOWN";
  }
}

/** Request to get a list of supported intervals for the given market along with the corresponding candle id */
export interface GetCandlesForMarketRequest {
  /** The unique identifier for the market */
  marketId: string;
}

/** Maps an interval for a given market to its corresponding candle_id */
export interface IntervalToCandleId {
  /** The interval for the candle */
  interval: string;
  /** The unique id of the candle */
  candleId: string;
}

/** A list of interval to candle id mappings for a given market */
export interface GetCandlesForMarketResponse {
  intervalToCandleId: IntervalToCandleId[];
}

/**
 * Represents the high, low, open, and closing prices for an interval of trading,
 * referred to commonly as a candlestick or candle
 */
export interface Candle {
  /**
   * Timestamp for the point in time when the candle was initially created/opened, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  start: string;
  /**
   * Timestamp for the point in time when the candle was last updated, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  lastUpdate: string;
  /** Highest price for trading during the candle interval */
  high: string;
  /** Lowest price for trading during the candle interval */
  low: string;
  /** Open trade price */
  open: string;
  /** Closing trade price */
  close: string;
  /** Total trading volume during the candle interval */
  volume: string;
}

/** Request to subscribe to a stream of (Candles)[#vega.Candle] */
export interface SubscribeToCandleDataRequest {
  /** The unique identifier for the candle */
  candleId: string;
}

export interface SubscribeToCandleDataResponse {
  candle: Candle | undefined;
}

/** Request for a list of candles for a market at an interval */
export interface GetCandleDataRequest {
  /** Candle identifier, required field. */
  candleId: string;
  /**
   * Timestamp to retrieve candles since, in nanoseconds since the epoch,
   * required field - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  fromTimestamp: string;
  /**
   * Timestamp to retrieve candles since, in nanoseconds since the epoch,
   * required field - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  toTimestamp: string;
  /** Time interval for the candles, required field specified as a valid postgres interval */
  interval: string;
  /** pagination controls */
  pagination: Pagination | undefined;
}

/** Response for list of candles for a market at an interval */
export interface GetCandleDataResponse {
  /** A list of 0 or more candles */
  candles: Candle[];
}

/** Request for the current network limits */
export interface GetNetworkLimitsRequest {}

/** Response for the current network limits */
export interface GetNetworkLimitsResponse {
  limits: NetworkLimits | undefined;
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

export interface QueryBalanceHistoryRequest {
  /** Limit the accounts considered according to the filter supplied */
  filter: AccountFilter | undefined;
  /**
   * By default the net balances of all the accounts specified by the filter are returned.
   * If a list if fields is given in group_by, split out those balances by the supplied crietera.
   */
  groupBy: AccountField[];
}

export interface QueryBalanceHistoryResponse {
  balances: AggregatedBalance[];
}

export interface AccountFilter {
  /** Restrict accounts to those holding balances in this asset ID */
  assetId: string;
  /** Restrict accounts to those owned by the parties in this list (pass an empty list for no filter) */
  partyIds: string[];
  /** Restrict accounts to those connected to the marketsin this list (pass an empty list for no filter) */
  marketIds: string[];
  /** Restrict accounts to those connected to any of the types in this list (pass an empty list for no filter) */
  accountTypes: AccountType[];
}

export interface AggregatedBalance {
  /** Timestamp to of block the balance is referring to, in nanoseconds since the epoch */
  timestamp: string;
  /** The balance of the set of requested accounts at the time above */
  balance: string;
  /** If grouping by account ID, the account ID */
  accountId?: string | undefined;
  /** If grouping by party, the party ID */
  partyId?: string | undefined;
  /** If grouping by asset, the asset ID */
  assetId?: string | undefined;
  /** If grouping by market, the market ID */
  marketId?: string | undefined;
  /** If grouping by account type, the account type */
  accountType: AccountType;
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

/** Request for Market Data History */
export interface GetMarketDataHistoryByIDRequest {
  /** Market identifier, required field */
  marketId: string;
  /** Optional Unix time in nanoseconds */
  startTimestamp?: string | undefined;
  /** Optional Unix time in nanoseconds */
  endTimestamp?: string | undefined;
  /** Optional pagination control */
  pagination?: Pagination | undefined;
}

/** Response for Market Data History */
export interface GetMarketDataHistoryByIDResponse {
  marketData: MarketData[];
}

function createBaseGetCandlesForMarketRequest(): GetCandlesForMarketRequest {
  return { marketId: "" };
}

export const GetCandlesForMarketRequest = {
  encode(
    message: GetCandlesForMarketRequest,
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
  ): GetCandlesForMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesForMarketRequest();
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

  fromJSON(object: any): GetCandlesForMarketRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: GetCandlesForMarketRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCandlesForMarketRequest>, I>>(
    object: I
  ): GetCandlesForMarketRequest {
    const message = createBaseGetCandlesForMarketRequest();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseIntervalToCandleId(): IntervalToCandleId {
  return { interval: "", candleId: "" };
}

export const IntervalToCandleId = {
  encode(
    message: IntervalToCandleId,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.interval !== "") {
      writer.uint32(10).string(message.interval);
    }
    if (message.candleId !== "") {
      writer.uint32(18).string(message.candleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntervalToCandleId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntervalToCandleId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interval = reader.string();
          break;
        case 2:
          message.candleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IntervalToCandleId {
    return {
      interval: isSet(object.interval) ? String(object.interval) : "",
      candleId: isSet(object.candleId) ? String(object.candleId) : "",
    };
  },

  toJSON(message: IntervalToCandleId): unknown {
    const obj: any = {};
    message.interval !== undefined && (obj.interval = message.interval);
    message.candleId !== undefined && (obj.candleId = message.candleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntervalToCandleId>, I>>(
    object: I
  ): IntervalToCandleId {
    const message = createBaseIntervalToCandleId();
    message.interval = object.interval ?? "";
    message.candleId = object.candleId ?? "";
    return message;
  },
};

function createBaseGetCandlesForMarketResponse(): GetCandlesForMarketResponse {
  return { intervalToCandleId: [] };
}

export const GetCandlesForMarketResponse = {
  encode(
    message: GetCandlesForMarketResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.intervalToCandleId) {
      IntervalToCandleId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCandlesForMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesForMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intervalToCandleId.push(
            IntervalToCandleId.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCandlesForMarketResponse {
    return {
      intervalToCandleId: Array.isArray(object?.intervalToCandleId)
        ? object.intervalToCandleId.map((e: any) =>
            IntervalToCandleId.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetCandlesForMarketResponse): unknown {
    const obj: any = {};
    if (message.intervalToCandleId) {
      obj.intervalToCandleId = message.intervalToCandleId.map((e) =>
        e ? IntervalToCandleId.toJSON(e) : undefined
      );
    } else {
      obj.intervalToCandleId = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCandlesForMarketResponse>, I>>(
    object: I
  ): GetCandlesForMarketResponse {
    const message = createBaseGetCandlesForMarketResponse();
    message.intervalToCandleId =
      object.intervalToCandleId?.map((e) =>
        IntervalToCandleId.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseCandle(): Candle {
  return {
    start: "0",
    lastUpdate: "0",
    high: "",
    low: "",
    open: "",
    close: "",
    volume: "0",
  };
}

export const Candle = {
  encode(
    message: Candle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.start !== "0") {
      writer.uint32(8).int64(message.start);
    }
    if (message.lastUpdate !== "0") {
      writer.uint32(16).int64(message.lastUpdate);
    }
    if (message.high !== "") {
      writer.uint32(26).string(message.high);
    }
    if (message.low !== "") {
      writer.uint32(34).string(message.low);
    }
    if (message.open !== "") {
      writer.uint32(42).string(message.open);
    }
    if (message.close !== "") {
      writer.uint32(50).string(message.close);
    }
    if (message.volume !== "0") {
      writer.uint32(56).uint64(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Candle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.start = longToString(reader.int64() as Long);
          break;
        case 2:
          message.lastUpdate = longToString(reader.int64() as Long);
          break;
        case 3:
          message.high = reader.string();
          break;
        case 4:
          message.low = reader.string();
          break;
        case 5:
          message.open = reader.string();
          break;
        case 6:
          message.close = reader.string();
          break;
        case 7:
          message.volume = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Candle {
    return {
      start: isSet(object.start) ? String(object.start) : "0",
      lastUpdate: isSet(object.lastUpdate) ? String(object.lastUpdate) : "0",
      high: isSet(object.high) ? String(object.high) : "",
      low: isSet(object.low) ? String(object.low) : "",
      open: isSet(object.open) ? String(object.open) : "",
      close: isSet(object.close) ? String(object.close) : "",
      volume: isSet(object.volume) ? String(object.volume) : "0",
    };
  },

  toJSON(message: Candle): unknown {
    const obj: any = {};
    message.start !== undefined && (obj.start = message.start);
    message.lastUpdate !== undefined && (obj.lastUpdate = message.lastUpdate);
    message.high !== undefined && (obj.high = message.high);
    message.low !== undefined && (obj.low = message.low);
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Candle>, I>>(object: I): Candle {
    const message = createBaseCandle();
    message.start = object.start ?? "0";
    message.lastUpdate = object.lastUpdate ?? "0";
    message.high = object.high ?? "";
    message.low = object.low ?? "";
    message.open = object.open ?? "";
    message.close = object.close ?? "";
    message.volume = object.volume ?? "0";
    return message;
  },
};

function createBaseSubscribeToCandleDataRequest(): SubscribeToCandleDataRequest {
  return { candleId: "" };
}

export const SubscribeToCandleDataRequest = {
  encode(
    message: SubscribeToCandleDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.candleId !== "") {
      writer.uint32(10).string(message.candleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubscribeToCandleDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeToCandleDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeToCandleDataRequest {
    return {
      candleId: isSet(object.candleId) ? String(object.candleId) : "",
    };
  },

  toJSON(message: SubscribeToCandleDataRequest): unknown {
    const obj: any = {};
    message.candleId !== undefined && (obj.candleId = message.candleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeToCandleDataRequest>, I>>(
    object: I
  ): SubscribeToCandleDataRequest {
    const message = createBaseSubscribeToCandleDataRequest();
    message.candleId = object.candleId ?? "";
    return message;
  },
};

function createBaseSubscribeToCandleDataResponse(): SubscribeToCandleDataResponse {
  return { candle: undefined };
}

export const SubscribeToCandleDataResponse = {
  encode(
    message: SubscribeToCandleDataResponse,
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
  ): SubscribeToCandleDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeToCandleDataResponse();
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

  fromJSON(object: any): SubscribeToCandleDataResponse {
    return {
      candle: isSet(object.candle) ? Candle.fromJSON(object.candle) : undefined,
    };
  },

  toJSON(message: SubscribeToCandleDataResponse): unknown {
    const obj: any = {};
    message.candle !== undefined &&
      (obj.candle = message.candle ? Candle.toJSON(message.candle) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubscribeToCandleDataResponse>, I>>(
    object: I
  ): SubscribeToCandleDataResponse {
    const message = createBaseSubscribeToCandleDataResponse();
    message.candle =
      object.candle !== undefined && object.candle !== null
        ? Candle.fromPartial(object.candle)
        : undefined;
    return message;
  },
};

function createBaseGetCandleDataRequest(): GetCandleDataRequest {
  return {
    candleId: "",
    fromTimestamp: "0",
    toTimestamp: "0",
    interval: "",
    pagination: undefined,
  };
}

export const GetCandleDataRequest = {
  encode(
    message: GetCandleDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.candleId !== "") {
      writer.uint32(10).string(message.candleId);
    }
    if (message.fromTimestamp !== "0") {
      writer.uint32(16).int64(message.fromTimestamp);
    }
    if (message.toTimestamp !== "0") {
      writer.uint32(24).int64(message.toTimestamp);
    }
    if (message.interval !== "") {
      writer.uint32(34).string(message.interval);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCandleDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandleDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candleId = reader.string();
          break;
        case 2:
          message.fromTimestamp = longToString(reader.int64() as Long);
          break;
        case 3:
          message.toTimestamp = longToString(reader.int64() as Long);
          break;
        case 4:
          message.interval = reader.string();
          break;
        case 5:
          message.pagination = Pagination.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCandleDataRequest {
    return {
      candleId: isSet(object.candleId) ? String(object.candleId) : "",
      fromTimestamp: isSet(object.fromTimestamp)
        ? String(object.fromTimestamp)
        : "0",
      toTimestamp: isSet(object.toTimestamp) ? String(object.toTimestamp) : "0",
      interval: isSet(object.interval) ? String(object.interval) : "",
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: GetCandleDataRequest): unknown {
    const obj: any = {};
    message.candleId !== undefined && (obj.candleId = message.candleId);
    message.fromTimestamp !== undefined &&
      (obj.fromTimestamp = message.fromTimestamp);
    message.toTimestamp !== undefined &&
      (obj.toTimestamp = message.toTimestamp);
    message.interval !== undefined && (obj.interval = message.interval);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCandleDataRequest>, I>>(
    object: I
  ): GetCandleDataRequest {
    const message = createBaseGetCandleDataRequest();
    message.candleId = object.candleId ?? "";
    message.fromTimestamp = object.fromTimestamp ?? "0";
    message.toTimestamp = object.toTimestamp ?? "0";
    message.interval = object.interval ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseGetCandleDataResponse(): GetCandleDataResponse {
  return { candles: [] };
}

export const GetCandleDataResponse = {
  encode(
    message: GetCandleDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.candles) {
      Candle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetCandleDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandleDataResponse();
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

  fromJSON(object: any): GetCandleDataResponse {
    return {
      candles: Array.isArray(object?.candles)
        ? object.candles.map((e: any) => Candle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCandleDataResponse): unknown {
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

  fromPartial<I extends Exact<DeepPartial<GetCandleDataResponse>, I>>(
    object: I
  ): GetCandleDataResponse {
    const message = createBaseGetCandleDataResponse();
    message.candles = object.candles?.map((e) => Candle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetNetworkLimitsRequest(): GetNetworkLimitsRequest {
  return {};
}

export const GetNetworkLimitsRequest = {
  encode(
    _: GetNetworkLimitsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNetworkLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNetworkLimitsRequest();
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

  fromJSON(_: any): GetNetworkLimitsRequest {
    return {};
  },

  toJSON(_: GetNetworkLimitsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNetworkLimitsRequest>, I>>(
    _: I
  ): GetNetworkLimitsRequest {
    const message = createBaseGetNetworkLimitsRequest();
    return message;
  },
};

function createBaseGetNetworkLimitsResponse(): GetNetworkLimitsResponse {
  return { limits: undefined };
}

export const GetNetworkLimitsResponse = {
  encode(
    message: GetNetworkLimitsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.limits !== undefined) {
      NetworkLimits.encode(message.limits, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetNetworkLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNetworkLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limits = NetworkLimits.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetNetworkLimitsResponse {
    return {
      limits: isSet(object.limits)
        ? NetworkLimits.fromJSON(object.limits)
        : undefined,
    };
  },

  toJSON(message: GetNetworkLimitsResponse): unknown {
    const obj: any = {};
    message.limits !== undefined &&
      (obj.limits = message.limits
        ? NetworkLimits.toJSON(message.limits)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetNetworkLimitsResponse>, I>>(
    object: I
  ): GetNetworkLimitsResponse {
    const message = createBaseGetNetworkLimitsResponse();
    message.limits =
      object.limits !== undefined && object.limits !== null
        ? NetworkLimits.fromPartial(object.limits)
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

function createBaseQueryBalanceHistoryRequest(): QueryBalanceHistoryRequest {
  return { filter: undefined, groupBy: [] };
}

export const QueryBalanceHistoryRequest = {
  encode(
    message: QueryBalanceHistoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.filter !== undefined) {
      AccountFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.groupBy) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBalanceHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = AccountFilter.decode(reader, reader.uint32());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.groupBy.push(reader.int32() as any);
            }
          } else {
            message.groupBy.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceHistoryRequest {
    return {
      filter: isSet(object.filter)
        ? AccountFilter.fromJSON(object.filter)
        : undefined,
      groupBy: Array.isArray(object?.groupBy)
        ? object.groupBy.map((e: any) => accountFieldFromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBalanceHistoryRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter
        ? AccountFilter.toJSON(message.filter)
        : undefined);
    if (message.groupBy) {
      obj.groupBy = message.groupBy.map((e) => accountFieldToJSON(e));
    } else {
      obj.groupBy = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceHistoryRequest>, I>>(
    object: I
  ): QueryBalanceHistoryRequest {
    const message = createBaseQueryBalanceHistoryRequest();
    message.filter =
      object.filter !== undefined && object.filter !== null
        ? AccountFilter.fromPartial(object.filter)
        : undefined;
    message.groupBy = object.groupBy?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryBalanceHistoryResponse(): QueryBalanceHistoryResponse {
  return { balances: [] };
}

export const QueryBalanceHistoryResponse = {
  encode(
    message: QueryBalanceHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balances) {
      AggregatedBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBalanceHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(
            AggregatedBalance.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceHistoryResponse {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => AggregatedBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBalanceHistoryResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? AggregatedBalance.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceHistoryResponse>, I>>(
    object: I
  ): QueryBalanceHistoryResponse {
    const message = createBaseQueryBalanceHistoryResponse();
    message.balances =
      object.balances?.map((e) => AggregatedBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccountFilter(): AccountFilter {
  return { assetId: "", partyIds: [], marketIds: [], accountTypes: [] };
}

export const AccountFilter = {
  encode(
    message: AccountFilter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    for (const v of message.partyIds) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.marketIds) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.accountTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.partyIds.push(reader.string());
          break;
        case 3:
          message.marketIds.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.accountTypes.push(reader.int32() as any);
            }
          } else {
            message.accountTypes.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountFilter {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      partyIds: Array.isArray(object?.partyIds)
        ? object.partyIds.map((e: any) => String(e))
        : [],
      marketIds: Array.isArray(object?.marketIds)
        ? object.marketIds.map((e: any) => String(e))
        : [],
      accountTypes: Array.isArray(object?.accountTypes)
        ? object.accountTypes.map((e: any) => accountTypeFromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountFilter): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    if (message.partyIds) {
      obj.partyIds = message.partyIds.map((e) => e);
    } else {
      obj.partyIds = [];
    }
    if (message.marketIds) {
      obj.marketIds = message.marketIds.map((e) => e);
    } else {
      obj.marketIds = [];
    }
    if (message.accountTypes) {
      obj.accountTypes = message.accountTypes.map((e) => accountTypeToJSON(e));
    } else {
      obj.accountTypes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountFilter>, I>>(
    object: I
  ): AccountFilter {
    const message = createBaseAccountFilter();
    message.assetId = object.assetId ?? "";
    message.partyIds = object.partyIds?.map((e) => e) || [];
    message.marketIds = object.marketIds?.map((e) => e) || [];
    message.accountTypes = object.accountTypes?.map((e) => e) || [];
    return message;
  },
};

function createBaseAggregatedBalance(): AggregatedBalance {
  return {
    timestamp: "0",
    balance: "",
    accountId: undefined,
    partyId: undefined,
    assetId: undefined,
    marketId: undefined,
    accountType: 0,
  };
}

export const AggregatedBalance = {
  encode(
    message: AggregatedBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== "0") {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.accountId !== undefined) {
      writer.uint32(26).string(message.accountId);
    }
    if (message.partyId !== undefined) {
      writer.uint32(34).string(message.partyId);
    }
    if (message.assetId !== undefined) {
      writer.uint32(42).string(message.assetId);
    }
    if (message.marketId !== undefined) {
      writer.uint32(50).string(message.marketId);
    }
    if (message.accountType !== 0) {
      writer.uint32(56).int32(message.accountType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregatedBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregatedBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.accountId = reader.string();
          break;
        case 4:
          message.partyId = reader.string();
          break;
        case 5:
          message.assetId = reader.string();
          break;
        case 6:
          message.marketId = reader.string();
          break;
        case 7:
          message.accountType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregatedBalance {
    return {
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      balance: isSet(object.balance) ? String(object.balance) : "",
      accountId: isSet(object.accountId) ? String(object.accountId) : undefined,
      partyId: isSet(object.partyId) ? String(object.partyId) : undefined,
      assetId: isSet(object.assetId) ? String(object.assetId) : undefined,
      marketId: isSet(object.marketId) ? String(object.marketId) : undefined,
      accountType: isSet(object.accountType)
        ? accountTypeFromJSON(object.accountType)
        : 0,
    };
  },

  toJSON(message: AggregatedBalance): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.balance !== undefined && (obj.balance = message.balance);
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.accountType !== undefined &&
      (obj.accountType = accountTypeToJSON(message.accountType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AggregatedBalance>, I>>(
    object: I
  ): AggregatedBalance {
    const message = createBaseAggregatedBalance();
    message.timestamp = object.timestamp ?? "0";
    message.balance = object.balance ?? "";
    message.accountId = object.accountId ?? undefined;
    message.partyId = object.partyId ?? undefined;
    message.assetId = object.assetId ?? undefined;
    message.marketId = object.marketId ?? undefined;
    message.accountType = object.accountType ?? 0;
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

function createBaseGetMarketDataHistoryByIDRequest(): GetMarketDataHistoryByIDRequest {
  return {
    marketId: "",
    startTimestamp: undefined,
    endTimestamp: undefined,
    pagination: undefined,
  };
}

export const GetMarketDataHistoryByIDRequest = {
  encode(
    message: GetMarketDataHistoryByIDRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.startTimestamp !== undefined) {
      writer.uint32(16).int64(message.startTimestamp);
    }
    if (message.endTimestamp !== undefined) {
      writer.uint32(24).int64(message.endTimestamp);
    }
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMarketDataHistoryByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMarketDataHistoryByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.startTimestamp = longToString(reader.int64() as Long);
          break;
        case 3:
          message.endTimestamp = longToString(reader.int64() as Long);
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

  fromJSON(object: any): GetMarketDataHistoryByIDRequest {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      startTimestamp: isSet(object.startTimestamp)
        ? String(object.startTimestamp)
        : undefined,
      endTimestamp: isSet(object.endTimestamp)
        ? String(object.endTimestamp)
        : undefined,
      pagination: isSet(object.pagination)
        ? Pagination.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: GetMarketDataHistoryByIDRequest): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.startTimestamp !== undefined &&
      (obj.startTimestamp = message.startTimestamp);
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = message.endTimestamp);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? Pagination.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMarketDataHistoryByIDRequest>, I>>(
    object: I
  ): GetMarketDataHistoryByIDRequest {
    const message = createBaseGetMarketDataHistoryByIDRequest();
    message.marketId = object.marketId ?? "";
    message.startTimestamp = object.startTimestamp ?? undefined;
    message.endTimestamp = object.endTimestamp ?? undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? Pagination.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseGetMarketDataHistoryByIDResponse(): GetMarketDataHistoryByIDResponse {
  return { marketData: [] };
}

export const GetMarketDataHistoryByIDResponse = {
  encode(
    message: GetMarketDataHistoryByIDResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketData) {
      MarketData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetMarketDataHistoryByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMarketDataHistoryByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketData.push(MarketData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMarketDataHistoryByIDResponse {
    return {
      marketData: Array.isArray(object?.marketData)
        ? object.marketData.map((e: any) => MarketData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetMarketDataHistoryByIDResponse): unknown {
    const obj: any = {};
    if (message.marketData) {
      obj.marketData = message.marketData.map((e) =>
        e ? MarketData.toJSON(e) : undefined
      );
    } else {
      obj.marketData = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetMarketDataHistoryByIDResponse>, I>
  >(object: I): GetMarketDataHistoryByIDResponse {
    const message = createBaseGetMarketDataHistoryByIDResponse();
    message.marketData =
      object.marketData?.map((e) => MarketData.fromPartial(e)) || [];
    return message;
  },
};

/** -- Orders -- */
export interface TradingDataService {
  /** Get a list of Orders by Market */
  OrdersByMarket(
    request: OrdersByMarketRequest
  ): Promise<OrdersByMarketResponse>;
  /** Get all versions of the order by its orderID */
  OrderVersionsByID(
    request: OrderVersionsByIDRequest
  ): Promise<OrderVersionsByIDResponse>;
  /** Get an aggregated list of the changes in balances in a set of accounts over time */
  QueryBalanceHistory(
    request: QueryBalanceHistoryRequest
  ): Promise<QueryBalanceHistoryResponse>;
  /** Get Market Data History for a Market ID between given dates */
  GetMarketDataHistoryByID(
    request: GetMarketDataHistoryByIDRequest
  ): Promise<GetMarketDataHistoryByIDResponse>;
  /** Get the current network limits (is bootstrapping finished, are proposals enabled etc..) */
  GetNetworkLimits(
    request: GetNetworkLimitsRequest
  ): Promise<GetNetworkLimitsResponse>;
  /** Get candle data for a given candle id */
  GetCandleData(request: GetCandleDataRequest): Promise<GetCandleDataResponse>;
  /** Subscribe to a stream of Candle updates */
  SubscribeToCandleData(
    request: SubscribeToCandleDataRequest
  ): Observable<SubscribeToCandleDataResponse>;
  /** Gets all available intervals for a given market along with the corresponding candle id */
  GetCandlesForMarket(
    request: GetCandlesForMarketRequest
  ): Promise<GetCandlesForMarketResponse>;
}

export class TradingDataServiceClientImpl implements TradingDataService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.OrdersByMarket = this.OrdersByMarket.bind(this);
    this.OrderVersionsByID = this.OrderVersionsByID.bind(this);
    this.QueryBalanceHistory = this.QueryBalanceHistory.bind(this);
    this.GetMarketDataHistoryByID = this.GetMarketDataHistoryByID.bind(this);
    this.GetNetworkLimits = this.GetNetworkLimits.bind(this);
    this.GetCandleData = this.GetCandleData.bind(this);
    this.SubscribeToCandleData = this.SubscribeToCandleData.bind(this);
    this.GetCandlesForMarket = this.GetCandlesForMarket.bind(this);
  }
  OrdersByMarket(
    request: OrdersByMarketRequest
  ): Promise<OrdersByMarketResponse> {
    const data = OrdersByMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "OrdersByMarket",
      data
    );
    return promise.then((data) =>
      OrdersByMarketResponse.decode(new _m0.Reader(data))
    );
  }

  OrderVersionsByID(
    request: OrderVersionsByIDRequest
  ): Promise<OrderVersionsByIDResponse> {
    const data = OrderVersionsByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "OrderVersionsByID",
      data
    );
    return promise.then((data) =>
      OrderVersionsByIDResponse.decode(new _m0.Reader(data))
    );
  }

  QueryBalanceHistory(
    request: QueryBalanceHistoryRequest
  ): Promise<QueryBalanceHistoryResponse> {
    const data = QueryBalanceHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "QueryBalanceHistory",
      data
    );
    return promise.then((data) =>
      QueryBalanceHistoryResponse.decode(new _m0.Reader(data))
    );
  }

  GetMarketDataHistoryByID(
    request: GetMarketDataHistoryByIDRequest
  ): Promise<GetMarketDataHistoryByIDResponse> {
    const data = GetMarketDataHistoryByIDRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "GetMarketDataHistoryByID",
      data
    );
    return promise.then((data) =>
      GetMarketDataHistoryByIDResponse.decode(new _m0.Reader(data))
    );
  }

  GetNetworkLimits(
    request: GetNetworkLimitsRequest
  ): Promise<GetNetworkLimitsResponse> {
    const data = GetNetworkLimitsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "GetNetworkLimits",
      data
    );
    return promise.then((data) =>
      GetNetworkLimitsResponse.decode(new _m0.Reader(data))
    );
  }

  GetCandleData(request: GetCandleDataRequest): Promise<GetCandleDataResponse> {
    const data = GetCandleDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "GetCandleData",
      data
    );
    return promise.then((data) =>
      GetCandleDataResponse.decode(new _m0.Reader(data))
    );
  }

  SubscribeToCandleData(
    request: SubscribeToCandleDataRequest
  ): Observable<SubscribeToCandleDataResponse> {
    const data = SubscribeToCandleDataRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "datanode.api.v2.TradingDataService",
      "SubscribeToCandleData",
      data
    );
    return result.pipe(
      map((data) => SubscribeToCandleDataResponse.decode(new _m0.Reader(data)))
    );
  }

  GetCandlesForMarket(
    request: GetCandlesForMarketRequest
  ): Promise<GetCandlesForMarketResponse> {
    const data = GetCandlesForMarketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "datanode.api.v2.TradingDataService",
      "GetCandlesForMarket",
      data
    );
    return promise.then((data) =>
      GetCandlesForMarketResponse.decode(new _m0.Reader(data))
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
