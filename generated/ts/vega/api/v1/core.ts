/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  ChainStatus,
  chainStatusFromJSON,
  chainStatusToJSON,
} from "../../../vega/vega";
import { Observable } from "rxjs";
import { Transaction } from "../../../vega/commands/v1/transaction";
import {
  BusEventType,
  BusEvent,
  busEventTypeFromJSON,
  busEventTypeToJSON,
} from "../../../vega/events/v1/events";
import { map } from "rxjs/operators";

export const protobufPackage = "vega.api.v1";

/** Request for a new event sent by the blockchain queue to be propagated on Vega */
export interface PropagateChainEventRequest {
  /** Chain event */
  event: Uint8Array;
  /** Public key */
  pubKey: string;
  /** Signature */
  signature: Uint8Array;
}

/** Response for a new event sent by the blockchain queue to be propagated on Vega */
export interface PropagateChainEventResponse {
  /**
   * Success will be true if the event was accepted by the node,
   * **Important** - success does not mean that the event is confirmed by consensus
   */
  success: boolean;
}

/** Request for submitting a transaction v2 on Vega */
export interface SubmitTransactionRequest {
  /** A bundle of signed payload and signature, to form a transaction that will be submitted to the Vega blockchain */
  tx: Transaction | undefined;
  /** Type of transaction request, for example ASYNC, meaning the transaction will be submitted and not block on a response */
  type: SubmitTransactionRequest_Type;
}

/** Blockchain transaction type */
export enum SubmitTransactionRequest_Type {
  TYPE_UNSPECIFIED = 0,
  /** TYPE_ASYNC - The transaction will be submitted without waiting for response */
  TYPE_ASYNC = 1,
  /**
   * TYPE_SYNC - The transaction will be submitted, and blocking until the
   * tendermint mempool return a response
   */
  TYPE_SYNC = 2,
  /**
   * TYPE_COMMIT - The transaction will submitted, and blocking until the tendermint
   * network will have committed it into a block
   */
  TYPE_COMMIT = 3,
  UNRECOGNIZED = -1,
}

export function submitTransactionRequest_TypeFromJSON(
  object: any
): SubmitTransactionRequest_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return SubmitTransactionRequest_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_ASYNC":
      return SubmitTransactionRequest_Type.TYPE_ASYNC;
    case 2:
    case "TYPE_SYNC":
      return SubmitTransactionRequest_Type.TYPE_SYNC;
    case 3:
    case "TYPE_COMMIT":
      return SubmitTransactionRequest_Type.TYPE_COMMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubmitTransactionRequest_Type.UNRECOGNIZED;
  }
}

export function submitTransactionRequest_TypeToJSON(
  object: SubmitTransactionRequest_Type
): string {
  switch (object) {
    case SubmitTransactionRequest_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case SubmitTransactionRequest_Type.TYPE_ASYNC:
      return "TYPE_ASYNC";
    case SubmitTransactionRequest_Type.TYPE_SYNC:
      return "TYPE_SYNC";
    case SubmitTransactionRequest_Type.TYPE_COMMIT:
      return "TYPE_COMMIT";
    default:
      return "UNKNOWN";
  }
}

/** Response for submitting a transaction v2 on Vega */
export interface SubmitTransactionResponse {
  /**
   * Success will be true if the transaction was accepted by the node,
   * **Important** - success does not mean that the event is confirmed by consensus
   */
  success: boolean;
  /** Hash of the transaction, if accepted */
  txHash: string;
  /** Result code success if unsucessful */
  code: number;
  /** Data for details */
  data: string;
  log: string;
  /** Height for commit */
  height: string;
}

/** Request for checking a transaction v2 on Vega */
export interface CheckTransactionRequest {
  /** A bundle of signed payload and signature, to form a transaction that would be submitted to the Vega blockchain */
  tx: Transaction | undefined;
}

export interface CheckTransactionResponse {
  /** Success will be true if the transaction was checked by the node */
  success: boolean;
  /** Check code result */
  code: number;
  /** Gas wanted for transaction */
  gasWanted: string;
  /** Gas used for transaction */
  gasUsed: string;
}

/** Request for submitting a version agnostic transaction on Vega */
export interface SubmitRawTransactionRequest {
  /** A bundle of signed payload and signature marshalled into a byte array, to form a transaction that will be submitted to the Vega blockchain */
  tx: Uint8Array;
  /** Type of transaction request, for example ASYNC, meaning the transaction will be submitted and not block on a response */
  type: SubmitRawTransactionRequest_Type;
}

/** Blockchain transaction type */
export enum SubmitRawTransactionRequest_Type {
  TYPE_UNSPECIFIED = 0,
  /** TYPE_ASYNC - The transaction will be submitted without waiting for response */
  TYPE_ASYNC = 1,
  /**
   * TYPE_SYNC - The transaction will be submitted, and blocking until the
   * tendermint mempool return a response
   */
  TYPE_SYNC = 2,
  /**
   * TYPE_COMMIT - The transaction will submitted, and blocking until the tendermint
   * network will have committed it into a block
   */
  TYPE_COMMIT = 3,
  UNRECOGNIZED = -1,
}

export function submitRawTransactionRequest_TypeFromJSON(
  object: any
): SubmitRawTransactionRequest_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return SubmitRawTransactionRequest_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_ASYNC":
      return SubmitRawTransactionRequest_Type.TYPE_ASYNC;
    case 2:
    case "TYPE_SYNC":
      return SubmitRawTransactionRequest_Type.TYPE_SYNC;
    case 3:
    case "TYPE_COMMIT":
      return SubmitRawTransactionRequest_Type.TYPE_COMMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubmitRawTransactionRequest_Type.UNRECOGNIZED;
  }
}

export function submitRawTransactionRequest_TypeToJSON(
  object: SubmitRawTransactionRequest_Type
): string {
  switch (object) {
    case SubmitRawTransactionRequest_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case SubmitRawTransactionRequest_Type.TYPE_ASYNC:
      return "TYPE_ASYNC";
    case SubmitRawTransactionRequest_Type.TYPE_SYNC:
      return "TYPE_SYNC";
    case SubmitRawTransactionRequest_Type.TYPE_COMMIT:
      return "TYPE_COMMIT";
    default:
      return "UNKNOWN";
  }
}

/** Response for submitting a version agnostic transaction on Vega */
export interface SubmitRawTransactionResponse {
  /**
   * Success will be true if the transaction was accepted by the node,
   * **Important** - success does not mean that the event is confirmed by consensus
   */
  success: boolean;
  /** Hash of the transaction, if accepted */
  txHash: string;
  code: number;
  data: string;
  log: string;
  height: string;
}

/** Request for checking a version agnostic transaction on Vega */
export interface CheckRawTransactionRequest {
  /** A bundle of signed payload and signature marshalled into a byte array, to form a transaction that would be submitted to the Vega blockchain */
  tx: Uint8Array;
}

/** Response for checking a version agnostic transaction on Vega */
export interface CheckRawTransactionResponse {
  /** Success will be true if the transaction was checked by the node */
  success: boolean;
  /** Check code result */
  code: number;
  /** Gas wanted for transaction */
  gasWanted: string;
  /** Gas used for transaction */
  gasUsed: string;
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

/** A a request for statistics about the Vega network */
export interface StatisticsRequest {}

export interface StatisticsResponse {
  statistics: Statistics | undefined;
}

/** Vega domain specific statistics as reported by the node the caller is connected to */
export interface Statistics {
  /** Current block height as reported by the Vega blockchain */
  blockHeight: string;
  /** Current backlog length (number of transactions) that are waiting to be included in a block */
  backlogLength: string;
  /** Total number of connected peers to this node */
  totalPeers: string;
  /** Genesis block date and time formatted in ISO-8601 datetime format with nanosecond precision */
  genesisTime: string;
  /** Current system date and time formatted in ISO-8601 datetime format with nanosecond precision */
  currentTime: string;
  /** Current Vega date and time formatted in ISO-8601 datetime format with nanosecond precision */
  vegaTime: string;
  /**
   * Status of the connection to the Vega blockchain
   * - See [`ChainStatus`](#vega.ChainStatus)
   */
  status: ChainStatus;
  /** Transactions per block */
  txPerBlock: string;
  /** Average transaction size in bytes */
  averageTxBytes: string;
  /** Average orders per block */
  averageOrdersPerBlock: string;
  /** Trades emitted per second */
  tradesPerSecond: string;
  /** Orders processed per second */
  ordersPerSecond: string;
  /** Total markets on this Vega network */
  totalMarkets: string;
  /** Total number of order amendments since genesis (on all markets) */
  totalAmendOrder: string;
  /** Total number of order cancellations since genesis (on all markets) */
  totalCancelOrder: string;
  /** Total number of order submissions since genesis (on all markets) */
  totalCreateOrder: string;
  /** Total number of orders processed since genesis (on all markets) */
  totalOrders: string;
  /** Total number of trades emitted since genesis (on all markets) */
  totalTrades: string;
  /** Current number of stream subscribers to order data */
  orderSubscriptions: number;
  /** Current number of stream subscribers to trade data */
  tradeSubscriptions: number;
  /** Current number of stream subscribers to candle-stick data */
  candleSubscriptions: number;
  /** Current number of stream subscribers to market depth data */
  marketDepthSubscriptions: number;
  /** Current number of stream subscribers to positions data */
  positionsSubscriptions: number;
  /** Current number of stream subscribers to account data */
  accountSubscriptions: number;
  /** Current number of stream subscribers to market data */
  marketDataSubscriptions: number;
  /** The version hash of the Vega node software */
  appVersionHash: string;
  /** The version of the Vega node software */
  appVersion: string;
  /** The version of the underlying Vega blockchain */
  chainVersion: string;
  /** Current block duration, in nanoseconds */
  blockDuration: string;
  /** Total uptime for this node formatted in ISO-8601 datetime format with nanosecond precision */
  uptime: string;
  /** Unique identifier for the underlying Vega blockchain */
  chainId: string;
  /** Current number of stream subscribers to market depth update data */
  marketDepthUpdatesSubscriptions: number;
  /** Current block hash */
  blockHash: string;
}

/**
 * A request to get the height of the very last block processed
 * by tendermint
 */
export interface LastBlockHeightRequest {}

/**
 * A response with the height of the last block processed by
 * tendermint
 */
export interface LastBlockHeightResponse {
  /** last block height */
  height: string;
  /** last block hash */
  hash: string;
  /** supported proof of work hash function */
  spamPowHashFunction: string;
  /** the difficulty of the proof of work (target number of zeros) */
  spamPowDifficulty: number;
  /** supported proof of work number of blocks behind current height allowed */
  spamPowNumberOfPastBlocks: number;
  /** allowed number of transactions per block */
  spamPowNumberOfTxPerBlock: number;
  /** is increasing difficulty allowed for using the same height for more than `spam_pow_number_of_past_blocks` transactions */
  spamPowIncreasingDifficulty: boolean;
}

function createBasePropagateChainEventRequest(): PropagateChainEventRequest {
  return { event: new Uint8Array(), pubKey: "", signature: new Uint8Array() };
}

export const PropagateChainEventRequest = {
  encode(
    message: PropagateChainEventRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.event.length !== 0) {
      writer.uint32(10).bytes(message.event);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PropagateChainEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropagateChainEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.bytes();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PropagateChainEventRequest {
    return {
      event: isSet(object.event)
        ? bytesFromBase64(object.event)
        : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: PropagateChainEventRequest): unknown {
    const obj: any = {};
    message.event !== undefined &&
      (obj.event = base64FromBytes(
        message.event !== undefined ? message.event : new Uint8Array()
      ));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PropagateChainEventRequest>, I>>(
    object: I
  ): PropagateChainEventRequest {
    const message = createBasePropagateChainEventRequest();
    message.event = object.event ?? new Uint8Array();
    message.pubKey = object.pubKey ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBasePropagateChainEventResponse(): PropagateChainEventResponse {
  return { success: false };
}

export const PropagateChainEventResponse = {
  encode(
    message: PropagateChainEventResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PropagateChainEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropagateChainEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PropagateChainEventResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
    };
  },

  toJSON(message: PropagateChainEventResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PropagateChainEventResponse>, I>>(
    object: I
  ): PropagateChainEventResponse {
    const message = createBasePropagateChainEventResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseSubmitTransactionRequest(): SubmitTransactionRequest {
  return { tx: undefined, type: 0 };
}

export const SubmitTransactionRequest = {
  encode(
    message: SubmitTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx !== undefined) {
      Transaction.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Transaction.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitTransactionRequest {
    return {
      tx: isSet(object.tx) ? Transaction.fromJSON(object.tx) : undefined,
      type: isSet(object.type)
        ? submitTransactionRequest_TypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: SubmitTransactionRequest): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = message.tx ? Transaction.toJSON(message.tx) : undefined);
    message.type !== undefined &&
      (obj.type = submitTransactionRequest_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitTransactionRequest>, I>>(
    object: I
  ): SubmitTransactionRequest {
    const message = createBaseSubmitTransactionRequest();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Transaction.fromPartial(object.tx)
        : undefined;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseSubmitTransactionResponse(): SubmitTransactionResponse {
  return {
    success: false,
    txHash: "",
    code: 0,
    data: "",
    log: "",
    height: "0",
  };
}

export const SubmitTransactionResponse = {
  encode(
    message: SubmitTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.code !== 0) {
      writer.uint32(24).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.log !== "") {
      writer.uint32(42).string(message.log);
    }
    if (message.height !== "0") {
      writer.uint32(48).int64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.txHash = reader.string();
          break;
        case 3:
          message.code = reader.uint32();
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.log = reader.string();
          break;
        case 6:
          message.height = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitTransactionResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      log: isSet(object.log) ? String(object.log) : "",
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: SubmitTransactionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.log !== undefined && (obj.log = message.log);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitTransactionResponse>, I>>(
    object: I
  ): SubmitTransactionResponse {
    const message = createBaseSubmitTransactionResponse();
    message.success = object.success ?? false;
    message.txHash = object.txHash ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.log = object.log ?? "";
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseCheckTransactionRequest(): CheckTransactionRequest {
  return { tx: undefined };
}

export const CheckTransactionRequest = {
  encode(
    message: CheckTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx !== undefined) {
      Transaction.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Transaction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckTransactionRequest {
    return {
      tx: isSet(object.tx) ? Transaction.fromJSON(object.tx) : undefined,
    };
  },

  toJSON(message: CheckTransactionRequest): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = message.tx ? Transaction.toJSON(message.tx) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckTransactionRequest>, I>>(
    object: I
  ): CheckTransactionRequest {
    const message = createBaseCheckTransactionRequest();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Transaction.fromPartial(object.tx)
        : undefined;
    return message;
  },
};

function createBaseCheckTransactionResponse(): CheckTransactionResponse {
  return { success: false, code: 0, gasWanted: "0", gasUsed: "0" };
}

export const CheckTransactionResponse = {
  encode(
    message: CheckTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.gasWanted !== "0") {
      writer.uint32(24).int64(message.gasWanted);
    }
    if (message.gasUsed !== "0") {
      writer.uint32(32).int64(message.gasUsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.gasWanted = longToString(reader.int64() as Long);
          break;
        case 4:
          message.gasUsed = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckTransactionResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      code: isSet(object.code) ? Number(object.code) : 0,
      gasWanted: isSet(object.gasWanted) ? String(object.gasWanted) : "0",
      gasUsed: isSet(object.gasUsed) ? String(object.gasUsed) : "0",
    };
  },

  toJSON(message: CheckTransactionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.gasWanted !== undefined && (obj.gasWanted = message.gasWanted);
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckTransactionResponse>, I>>(
    object: I
  ): CheckTransactionResponse {
    const message = createBaseCheckTransactionResponse();
    message.success = object.success ?? false;
    message.code = object.code ?? 0;
    message.gasWanted = object.gasWanted ?? "0";
    message.gasUsed = object.gasUsed ?? "0";
    return message;
  },
};

function createBaseSubmitRawTransactionRequest(): SubmitRawTransactionRequest {
  return { tx: new Uint8Array(), type: 0 };
}

export const SubmitRawTransactionRequest = {
  encode(
    message: SubmitRawTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitRawTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitRawTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitRawTransactionRequest {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      type: isSet(object.type)
        ? submitRawTransactionRequest_TypeFromJSON(object.type)
        : 0,
    };
  },

  toJSON(message: SubmitRawTransactionRequest): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array()
      ));
    message.type !== undefined &&
      (obj.type = submitRawTransactionRequest_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitRawTransactionRequest>, I>>(
    object: I
  ): SubmitRawTransactionRequest {
    const message = createBaseSubmitRawTransactionRequest();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseSubmitRawTransactionResponse(): SubmitRawTransactionResponse {
  return {
    success: false,
    txHash: "",
    code: 0,
    data: "",
    log: "",
    height: "0",
  };
}

export const SubmitRawTransactionResponse = {
  encode(
    message: SubmitRawTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.code !== 0) {
      writer.uint32(24).uint32(message.code);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.log !== "") {
      writer.uint32(42).string(message.log);
    }
    if (message.height !== "0") {
      writer.uint32(48).int64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitRawTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitRawTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.txHash = reader.string();
          break;
        case 3:
          message.code = reader.uint32();
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.log = reader.string();
          break;
        case 6:
          message.height = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitRawTransactionResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
      data: isSet(object.data) ? String(object.data) : "",
      log: isSet(object.log) ? String(object.log) : "",
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: SubmitRawTransactionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.data !== undefined && (obj.data = message.data);
    message.log !== undefined && (obj.log = message.log);
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitRawTransactionResponse>, I>>(
    object: I
  ): SubmitRawTransactionResponse {
    const message = createBaseSubmitRawTransactionResponse();
    message.success = object.success ?? false;
    message.txHash = object.txHash ?? "";
    message.code = object.code ?? 0;
    message.data = object.data ?? "";
    message.log = object.log ?? "";
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseCheckRawTransactionRequest(): CheckRawTransactionRequest {
  return { tx: new Uint8Array() };
}

export const CheckRawTransactionRequest = {
  encode(
    message: CheckRawTransactionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckRawTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRawTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckRawTransactionRequest {
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
    };
  },

  toJSON(message: CheckRawTransactionRequest): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckRawTransactionRequest>, I>>(
    object: I
  ): CheckRawTransactionRequest {
    const message = createBaseCheckRawTransactionRequest();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  },
};

function createBaseCheckRawTransactionResponse(): CheckRawTransactionResponse {
  return { success: false, code: 0, gasWanted: "0", gasUsed: "0" };
}

export const CheckRawTransactionResponse = {
  encode(
    message: CheckRawTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    if (message.gasWanted !== "0") {
      writer.uint32(24).int64(message.gasWanted);
    }
    if (message.gasUsed !== "0") {
      writer.uint32(32).int64(message.gasUsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckRawTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRawTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        case 3:
          message.gasWanted = longToString(reader.int64() as Long);
          break;
        case 4:
          message.gasUsed = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckRawTransactionResponse {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      code: isSet(object.code) ? Number(object.code) : 0,
      gasWanted: isSet(object.gasWanted) ? String(object.gasWanted) : "0",
      gasUsed: isSet(object.gasUsed) ? String(object.gasUsed) : "0",
    };
  },

  toJSON(message: CheckRawTransactionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.gasWanted !== undefined && (obj.gasWanted = message.gasWanted);
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckRawTransactionResponse>, I>>(
    object: I
  ): CheckRawTransactionResponse {
    const message = createBaseCheckRawTransactionResponse();
    message.success = object.success ?? false;
    message.code = object.code ?? 0;
    message.gasWanted = object.gasWanted ?? "0";
    message.gasUsed = object.gasUsed ?? "0";
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

function createBaseStatisticsRequest(): StatisticsRequest {
  return {};
}

export const StatisticsRequest = {
  encode(
    _: StatisticsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatisticsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsRequest();
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

  fromJSON(_: any): StatisticsRequest {
    return {};
  },

  toJSON(_: StatisticsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatisticsRequest>, I>>(
    _: I
  ): StatisticsRequest {
    const message = createBaseStatisticsRequest();
    return message;
  },
};

function createBaseStatisticsResponse(): StatisticsResponse {
  return { statistics: undefined };
}

export const StatisticsResponse = {
  encode(
    message: StatisticsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statistics !== undefined) {
      Statistics.encode(message.statistics, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatisticsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statistics = Statistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatisticsResponse {
    return {
      statistics: isSet(object.statistics)
        ? Statistics.fromJSON(object.statistics)
        : undefined,
    };
  },

  toJSON(message: StatisticsResponse): unknown {
    const obj: any = {};
    message.statistics !== undefined &&
      (obj.statistics = message.statistics
        ? Statistics.toJSON(message.statistics)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StatisticsResponse>, I>>(
    object: I
  ): StatisticsResponse {
    const message = createBaseStatisticsResponse();
    message.statistics =
      object.statistics !== undefined && object.statistics !== null
        ? Statistics.fromPartial(object.statistics)
        : undefined;
    return message;
  },
};

function createBaseStatistics(): Statistics {
  return {
    blockHeight: "0",
    backlogLength: "0",
    totalPeers: "0",
    genesisTime: "",
    currentTime: "",
    vegaTime: "",
    status: 0,
    txPerBlock: "0",
    averageTxBytes: "0",
    averageOrdersPerBlock: "0",
    tradesPerSecond: "0",
    ordersPerSecond: "0",
    totalMarkets: "0",
    totalAmendOrder: "0",
    totalCancelOrder: "0",
    totalCreateOrder: "0",
    totalOrders: "0",
    totalTrades: "0",
    orderSubscriptions: 0,
    tradeSubscriptions: 0,
    candleSubscriptions: 0,
    marketDepthSubscriptions: 0,
    positionsSubscriptions: 0,
    accountSubscriptions: 0,
    marketDataSubscriptions: 0,
    appVersionHash: "",
    appVersion: "",
    chainVersion: "",
    blockDuration: "0",
    uptime: "",
    chainId: "",
    marketDepthUpdatesSubscriptions: 0,
    blockHash: "",
  };
}

export const Statistics = {
  encode(
    message: Statistics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.blockHeight !== "0") {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.backlogLength !== "0") {
      writer.uint32(16).uint64(message.backlogLength);
    }
    if (message.totalPeers !== "0") {
      writer.uint32(24).uint64(message.totalPeers);
    }
    if (message.genesisTime !== "") {
      writer.uint32(34).string(message.genesisTime);
    }
    if (message.currentTime !== "") {
      writer.uint32(42).string(message.currentTime);
    }
    if (message.vegaTime !== "") {
      writer.uint32(50).string(message.vegaTime);
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status);
    }
    if (message.txPerBlock !== "0") {
      writer.uint32(64).uint64(message.txPerBlock);
    }
    if (message.averageTxBytes !== "0") {
      writer.uint32(72).uint64(message.averageTxBytes);
    }
    if (message.averageOrdersPerBlock !== "0") {
      writer.uint32(80).uint64(message.averageOrdersPerBlock);
    }
    if (message.tradesPerSecond !== "0") {
      writer.uint32(88).uint64(message.tradesPerSecond);
    }
    if (message.ordersPerSecond !== "0") {
      writer.uint32(96).uint64(message.ordersPerSecond);
    }
    if (message.totalMarkets !== "0") {
      writer.uint32(104).uint64(message.totalMarkets);
    }
    if (message.totalAmendOrder !== "0") {
      writer.uint32(128).uint64(message.totalAmendOrder);
    }
    if (message.totalCancelOrder !== "0") {
      writer.uint32(136).uint64(message.totalCancelOrder);
    }
    if (message.totalCreateOrder !== "0") {
      writer.uint32(144).uint64(message.totalCreateOrder);
    }
    if (message.totalOrders !== "0") {
      writer.uint32(152).uint64(message.totalOrders);
    }
    if (message.totalTrades !== "0") {
      writer.uint32(160).uint64(message.totalTrades);
    }
    if (message.orderSubscriptions !== 0) {
      writer.uint32(168).uint32(message.orderSubscriptions);
    }
    if (message.tradeSubscriptions !== 0) {
      writer.uint32(176).uint32(message.tradeSubscriptions);
    }
    if (message.candleSubscriptions !== 0) {
      writer.uint32(184).uint32(message.candleSubscriptions);
    }
    if (message.marketDepthSubscriptions !== 0) {
      writer.uint32(192).uint32(message.marketDepthSubscriptions);
    }
    if (message.positionsSubscriptions !== 0) {
      writer.uint32(200).uint32(message.positionsSubscriptions);
    }
    if (message.accountSubscriptions !== 0) {
      writer.uint32(208).uint32(message.accountSubscriptions);
    }
    if (message.marketDataSubscriptions !== 0) {
      writer.uint32(216).uint32(message.marketDataSubscriptions);
    }
    if (message.appVersionHash !== "") {
      writer.uint32(226).string(message.appVersionHash);
    }
    if (message.appVersion !== "") {
      writer.uint32(234).string(message.appVersion);
    }
    if (message.chainVersion !== "") {
      writer.uint32(242).string(message.chainVersion);
    }
    if (message.blockDuration !== "0") {
      writer.uint32(248).uint64(message.blockDuration);
    }
    if (message.uptime !== "") {
      writer.uint32(258).string(message.uptime);
    }
    if (message.chainId !== "") {
      writer.uint32(266).string(message.chainId);
    }
    if (message.marketDepthUpdatesSubscriptions !== 0) {
      writer.uint32(272).uint32(message.marketDepthUpdatesSubscriptions);
    }
    if (message.blockHash !== "") {
      writer.uint32(282).string(message.blockHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Statistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.backlogLength = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.totalPeers = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.genesisTime = reader.string();
          break;
        case 5:
          message.currentTime = reader.string();
          break;
        case 6:
          message.vegaTime = reader.string();
          break;
        case 7:
          message.status = reader.int32() as any;
          break;
        case 8:
          message.txPerBlock = longToString(reader.uint64() as Long);
          break;
        case 9:
          message.averageTxBytes = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.averageOrdersPerBlock = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.tradesPerSecond = longToString(reader.uint64() as Long);
          break;
        case 12:
          message.ordersPerSecond = longToString(reader.uint64() as Long);
          break;
        case 13:
          message.totalMarkets = longToString(reader.uint64() as Long);
          break;
        case 16:
          message.totalAmendOrder = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.totalCancelOrder = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.totalCreateOrder = longToString(reader.uint64() as Long);
          break;
        case 19:
          message.totalOrders = longToString(reader.uint64() as Long);
          break;
        case 20:
          message.totalTrades = longToString(reader.uint64() as Long);
          break;
        case 21:
          message.orderSubscriptions = reader.uint32();
          break;
        case 22:
          message.tradeSubscriptions = reader.uint32();
          break;
        case 23:
          message.candleSubscriptions = reader.uint32();
          break;
        case 24:
          message.marketDepthSubscriptions = reader.uint32();
          break;
        case 25:
          message.positionsSubscriptions = reader.uint32();
          break;
        case 26:
          message.accountSubscriptions = reader.uint32();
          break;
        case 27:
          message.marketDataSubscriptions = reader.uint32();
          break;
        case 28:
          message.appVersionHash = reader.string();
          break;
        case 29:
          message.appVersion = reader.string();
          break;
        case 30:
          message.chainVersion = reader.string();
          break;
        case 31:
          message.blockDuration = longToString(reader.uint64() as Long);
          break;
        case 32:
          message.uptime = reader.string();
          break;
        case 33:
          message.chainId = reader.string();
          break;
        case 34:
          message.marketDepthUpdatesSubscriptions = reader.uint32();
          break;
        case 35:
          message.blockHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Statistics {
    return {
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
      backlogLength: isSet(object.backlogLength)
        ? String(object.backlogLength)
        : "0",
      totalPeers: isSet(object.totalPeers) ? String(object.totalPeers) : "0",
      genesisTime: isSet(object.genesisTime) ? String(object.genesisTime) : "",
      currentTime: isSet(object.currentTime) ? String(object.currentTime) : "",
      vegaTime: isSet(object.vegaTime) ? String(object.vegaTime) : "",
      status: isSet(object.status) ? chainStatusFromJSON(object.status) : 0,
      txPerBlock: isSet(object.txPerBlock) ? String(object.txPerBlock) : "0",
      averageTxBytes: isSet(object.averageTxBytes)
        ? String(object.averageTxBytes)
        : "0",
      averageOrdersPerBlock: isSet(object.averageOrdersPerBlock)
        ? String(object.averageOrdersPerBlock)
        : "0",
      tradesPerSecond: isSet(object.tradesPerSecond)
        ? String(object.tradesPerSecond)
        : "0",
      ordersPerSecond: isSet(object.ordersPerSecond)
        ? String(object.ordersPerSecond)
        : "0",
      totalMarkets: isSet(object.totalMarkets)
        ? String(object.totalMarkets)
        : "0",
      totalAmendOrder: isSet(object.totalAmendOrder)
        ? String(object.totalAmendOrder)
        : "0",
      totalCancelOrder: isSet(object.totalCancelOrder)
        ? String(object.totalCancelOrder)
        : "0",
      totalCreateOrder: isSet(object.totalCreateOrder)
        ? String(object.totalCreateOrder)
        : "0",
      totalOrders: isSet(object.totalOrders) ? String(object.totalOrders) : "0",
      totalTrades: isSet(object.totalTrades) ? String(object.totalTrades) : "0",
      orderSubscriptions: isSet(object.orderSubscriptions)
        ? Number(object.orderSubscriptions)
        : 0,
      tradeSubscriptions: isSet(object.tradeSubscriptions)
        ? Number(object.tradeSubscriptions)
        : 0,
      candleSubscriptions: isSet(object.candleSubscriptions)
        ? Number(object.candleSubscriptions)
        : 0,
      marketDepthSubscriptions: isSet(object.marketDepthSubscriptions)
        ? Number(object.marketDepthSubscriptions)
        : 0,
      positionsSubscriptions: isSet(object.positionsSubscriptions)
        ? Number(object.positionsSubscriptions)
        : 0,
      accountSubscriptions: isSet(object.accountSubscriptions)
        ? Number(object.accountSubscriptions)
        : 0,
      marketDataSubscriptions: isSet(object.marketDataSubscriptions)
        ? Number(object.marketDataSubscriptions)
        : 0,
      appVersionHash: isSet(object.appVersionHash)
        ? String(object.appVersionHash)
        : "",
      appVersion: isSet(object.appVersion) ? String(object.appVersion) : "",
      chainVersion: isSet(object.chainVersion)
        ? String(object.chainVersion)
        : "",
      blockDuration: isSet(object.blockDuration)
        ? String(object.blockDuration)
        : "0",
      uptime: isSet(object.uptime) ? String(object.uptime) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      marketDepthUpdatesSubscriptions: isSet(
        object.marketDepthUpdatesSubscriptions
      )
        ? Number(object.marketDepthUpdatesSubscriptions)
        : 0,
      blockHash: isSet(object.blockHash) ? String(object.blockHash) : "",
    };
  },

  toJSON(message: Statistics): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.backlogLength !== undefined &&
      (obj.backlogLength = message.backlogLength);
    message.totalPeers !== undefined && (obj.totalPeers = message.totalPeers);
    message.genesisTime !== undefined &&
      (obj.genesisTime = message.genesisTime);
    message.currentTime !== undefined &&
      (obj.currentTime = message.currentTime);
    message.vegaTime !== undefined && (obj.vegaTime = message.vegaTime);
    message.status !== undefined &&
      (obj.status = chainStatusToJSON(message.status));
    message.txPerBlock !== undefined && (obj.txPerBlock = message.txPerBlock);
    message.averageTxBytes !== undefined &&
      (obj.averageTxBytes = message.averageTxBytes);
    message.averageOrdersPerBlock !== undefined &&
      (obj.averageOrdersPerBlock = message.averageOrdersPerBlock);
    message.tradesPerSecond !== undefined &&
      (obj.tradesPerSecond = message.tradesPerSecond);
    message.ordersPerSecond !== undefined &&
      (obj.ordersPerSecond = message.ordersPerSecond);
    message.totalMarkets !== undefined &&
      (obj.totalMarkets = message.totalMarkets);
    message.totalAmendOrder !== undefined &&
      (obj.totalAmendOrder = message.totalAmendOrder);
    message.totalCancelOrder !== undefined &&
      (obj.totalCancelOrder = message.totalCancelOrder);
    message.totalCreateOrder !== undefined &&
      (obj.totalCreateOrder = message.totalCreateOrder);
    message.totalOrders !== undefined &&
      (obj.totalOrders = message.totalOrders);
    message.totalTrades !== undefined &&
      (obj.totalTrades = message.totalTrades);
    message.orderSubscriptions !== undefined &&
      (obj.orderSubscriptions = Math.round(message.orderSubscriptions));
    message.tradeSubscriptions !== undefined &&
      (obj.tradeSubscriptions = Math.round(message.tradeSubscriptions));
    message.candleSubscriptions !== undefined &&
      (obj.candleSubscriptions = Math.round(message.candleSubscriptions));
    message.marketDepthSubscriptions !== undefined &&
      (obj.marketDepthSubscriptions = Math.round(
        message.marketDepthSubscriptions
      ));
    message.positionsSubscriptions !== undefined &&
      (obj.positionsSubscriptions = Math.round(message.positionsSubscriptions));
    message.accountSubscriptions !== undefined &&
      (obj.accountSubscriptions = Math.round(message.accountSubscriptions));
    message.marketDataSubscriptions !== undefined &&
      (obj.marketDataSubscriptions = Math.round(
        message.marketDataSubscriptions
      ));
    message.appVersionHash !== undefined &&
      (obj.appVersionHash = message.appVersionHash);
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    message.chainVersion !== undefined &&
      (obj.chainVersion = message.chainVersion);
    message.blockDuration !== undefined &&
      (obj.blockDuration = message.blockDuration);
    message.uptime !== undefined && (obj.uptime = message.uptime);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.marketDepthUpdatesSubscriptions !== undefined &&
      (obj.marketDepthUpdatesSubscriptions = Math.round(
        message.marketDepthUpdatesSubscriptions
      ));
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Statistics>, I>>(
    object: I
  ): Statistics {
    const message = createBaseStatistics();
    message.blockHeight = object.blockHeight ?? "0";
    message.backlogLength = object.backlogLength ?? "0";
    message.totalPeers = object.totalPeers ?? "0";
    message.genesisTime = object.genesisTime ?? "";
    message.currentTime = object.currentTime ?? "";
    message.vegaTime = object.vegaTime ?? "";
    message.status = object.status ?? 0;
    message.txPerBlock = object.txPerBlock ?? "0";
    message.averageTxBytes = object.averageTxBytes ?? "0";
    message.averageOrdersPerBlock = object.averageOrdersPerBlock ?? "0";
    message.tradesPerSecond = object.tradesPerSecond ?? "0";
    message.ordersPerSecond = object.ordersPerSecond ?? "0";
    message.totalMarkets = object.totalMarkets ?? "0";
    message.totalAmendOrder = object.totalAmendOrder ?? "0";
    message.totalCancelOrder = object.totalCancelOrder ?? "0";
    message.totalCreateOrder = object.totalCreateOrder ?? "0";
    message.totalOrders = object.totalOrders ?? "0";
    message.totalTrades = object.totalTrades ?? "0";
    message.orderSubscriptions = object.orderSubscriptions ?? 0;
    message.tradeSubscriptions = object.tradeSubscriptions ?? 0;
    message.candleSubscriptions = object.candleSubscriptions ?? 0;
    message.marketDepthSubscriptions = object.marketDepthSubscriptions ?? 0;
    message.positionsSubscriptions = object.positionsSubscriptions ?? 0;
    message.accountSubscriptions = object.accountSubscriptions ?? 0;
    message.marketDataSubscriptions = object.marketDataSubscriptions ?? 0;
    message.appVersionHash = object.appVersionHash ?? "";
    message.appVersion = object.appVersion ?? "";
    message.chainVersion = object.chainVersion ?? "";
    message.blockDuration = object.blockDuration ?? "0";
    message.uptime = object.uptime ?? "";
    message.chainId = object.chainId ?? "";
    message.marketDepthUpdatesSubscriptions =
      object.marketDepthUpdatesSubscriptions ?? 0;
    message.blockHash = object.blockHash ?? "";
    return message;
  },
};

function createBaseLastBlockHeightRequest(): LastBlockHeightRequest {
  return {};
}

export const LastBlockHeightRequest = {
  encode(
    _: LastBlockHeightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LastBlockHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastBlockHeightRequest();
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

  fromJSON(_: any): LastBlockHeightRequest {
    return {};
  },

  toJSON(_: LastBlockHeightRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastBlockHeightRequest>, I>>(
    _: I
  ): LastBlockHeightRequest {
    const message = createBaseLastBlockHeightRequest();
    return message;
  },
};

function createBaseLastBlockHeightResponse(): LastBlockHeightResponse {
  return {
    height: "0",
    hash: "",
    spamPowHashFunction: "",
    spamPowDifficulty: 0,
    spamPowNumberOfPastBlocks: 0,
    spamPowNumberOfTxPerBlock: 0,
    spamPowIncreasingDifficulty: false,
  };
}

export const LastBlockHeightResponse = {
  encode(
    message: LastBlockHeightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).uint64(message.height);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.spamPowHashFunction !== "") {
      writer.uint32(26).string(message.spamPowHashFunction);
    }
    if (message.spamPowDifficulty !== 0) {
      writer.uint32(32).uint32(message.spamPowDifficulty);
    }
    if (message.spamPowNumberOfPastBlocks !== 0) {
      writer.uint32(40).uint32(message.spamPowNumberOfPastBlocks);
    }
    if (message.spamPowNumberOfTxPerBlock !== 0) {
      writer.uint32(48).uint32(message.spamPowNumberOfTxPerBlock);
    }
    if (message.spamPowIncreasingDifficulty === true) {
      writer.uint32(56).bool(message.spamPowIncreasingDifficulty);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LastBlockHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastBlockHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.spamPowHashFunction = reader.string();
          break;
        case 4:
          message.spamPowDifficulty = reader.uint32();
          break;
        case 5:
          message.spamPowNumberOfPastBlocks = reader.uint32();
          break;
        case 6:
          message.spamPowNumberOfTxPerBlock = reader.uint32();
          break;
        case 7:
          message.spamPowIncreasingDifficulty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastBlockHeightResponse {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
      hash: isSet(object.hash) ? String(object.hash) : "",
      spamPowHashFunction: isSet(object.spamPowHashFunction)
        ? String(object.spamPowHashFunction)
        : "",
      spamPowDifficulty: isSet(object.spamPowDifficulty)
        ? Number(object.spamPowDifficulty)
        : 0,
      spamPowNumberOfPastBlocks: isSet(object.spamPowNumberOfPastBlocks)
        ? Number(object.spamPowNumberOfPastBlocks)
        : 0,
      spamPowNumberOfTxPerBlock: isSet(object.spamPowNumberOfTxPerBlock)
        ? Number(object.spamPowNumberOfTxPerBlock)
        : 0,
      spamPowIncreasingDifficulty: isSet(object.spamPowIncreasingDifficulty)
        ? Boolean(object.spamPowIncreasingDifficulty)
        : false,
    };
  },

  toJSON(message: LastBlockHeightResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.hash !== undefined && (obj.hash = message.hash);
    message.spamPowHashFunction !== undefined &&
      (obj.spamPowHashFunction = message.spamPowHashFunction);
    message.spamPowDifficulty !== undefined &&
      (obj.spamPowDifficulty = Math.round(message.spamPowDifficulty));
    message.spamPowNumberOfPastBlocks !== undefined &&
      (obj.spamPowNumberOfPastBlocks = Math.round(
        message.spamPowNumberOfPastBlocks
      ));
    message.spamPowNumberOfTxPerBlock !== undefined &&
      (obj.spamPowNumberOfTxPerBlock = Math.round(
        message.spamPowNumberOfTxPerBlock
      ));
    message.spamPowIncreasingDifficulty !== undefined &&
      (obj.spamPowIncreasingDifficulty = message.spamPowIncreasingDifficulty);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastBlockHeightResponse>, I>>(
    object: I
  ): LastBlockHeightResponse {
    const message = createBaseLastBlockHeightResponse();
    message.height = object.height ?? "0";
    message.hash = object.hash ?? "";
    message.spamPowHashFunction = object.spamPowHashFunction ?? "";
    message.spamPowDifficulty = object.spamPowDifficulty ?? 0;
    message.spamPowNumberOfPastBlocks = object.spamPowNumberOfPastBlocks ?? 0;
    message.spamPowNumberOfTxPerBlock = object.spamPowNumberOfTxPerBlock ?? 0;
    message.spamPowIncreasingDifficulty =
      object.spamPowIncreasingDifficulty ?? false;
    return message;
  },
};

export interface CoreService {
  /** Submit a signed transaction */
  SubmitTransaction(
    request: SubmitTransactionRequest
  ): Promise<SubmitTransactionResponse>;
  /** Propagate a chain event */
  PropagateChainEvent(
    request: PropagateChainEventRequest
  ): Promise<PropagateChainEventResponse>;
  /** Get Statistics on Vega */
  Statistics(request: StatisticsRequest): Promise<StatisticsResponse>;
  /** Get the height of the last tendermint block */
  LastBlockHeight(
    request: LastBlockHeightRequest
  ): Promise<LastBlockHeightResponse>;
  /** Get Time */
  GetVegaTime(request: GetVegaTimeRequest): Promise<GetVegaTimeResponse>;
  /** Subscribe to a stream of events from the core */
  ObserveEventBus(
    request: Observable<ObserveEventBusRequest>
  ): Observable<ObserveEventBusResponse>;
  /** Submit a version agnostic signed transaction */
  SubmitRawTransaction(
    request: SubmitRawTransactionRequest
  ): Promise<SubmitRawTransactionResponse>;
  /** Check a signed transaction */
  CheckTransaction(
    request: CheckTransactionRequest
  ): Promise<CheckTransactionResponse>;
  /** Check a raw signed transaction */
  CheckRawTransaction(
    request: CheckRawTransactionRequest
  ): Promise<CheckRawTransactionResponse>;
}

export class CoreServiceClientImpl implements CoreService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitTransaction = this.SubmitTransaction.bind(this);
    this.PropagateChainEvent = this.PropagateChainEvent.bind(this);
    this.Statistics = this.Statistics.bind(this);
    this.LastBlockHeight = this.LastBlockHeight.bind(this);
    this.GetVegaTime = this.GetVegaTime.bind(this);
    this.ObserveEventBus = this.ObserveEventBus.bind(this);
    this.SubmitRawTransaction = this.SubmitRawTransaction.bind(this);
    this.CheckTransaction = this.CheckTransaction.bind(this);
    this.CheckRawTransaction = this.CheckRawTransaction.bind(this);
  }
  SubmitTransaction(
    request: SubmitTransactionRequest
  ): Promise<SubmitTransactionResponse> {
    const data = SubmitTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "SubmitTransaction",
      data
    );
    return promise.then((data) =>
      SubmitTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  PropagateChainEvent(
    request: PropagateChainEventRequest
  ): Promise<PropagateChainEventResponse> {
    const data = PropagateChainEventRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "PropagateChainEvent",
      data
    );
    return promise.then((data) =>
      PropagateChainEventResponse.decode(new _m0.Reader(data))
    );
  }

  Statistics(request: StatisticsRequest): Promise<StatisticsResponse> {
    const data = StatisticsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "Statistics",
      data
    );
    return promise.then((data) =>
      StatisticsResponse.decode(new _m0.Reader(data))
    );
  }

  LastBlockHeight(
    request: LastBlockHeightRequest
  ): Promise<LastBlockHeightResponse> {
    const data = LastBlockHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "LastBlockHeight",
      data
    );
    return promise.then((data) =>
      LastBlockHeightResponse.decode(new _m0.Reader(data))
    );
  }

  GetVegaTime(request: GetVegaTimeRequest): Promise<GetVegaTimeResponse> {
    const data = GetVegaTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "GetVegaTime",
      data
    );
    return promise.then((data) =>
      GetVegaTimeResponse.decode(new _m0.Reader(data))
    );
  }

  ObserveEventBus(
    request: Observable<ObserveEventBusRequest>
  ): Observable<ObserveEventBusResponse> {
    const data = request.pipe(
      map((request) => ObserveEventBusRequest.encode(request).finish())
    );
    const result = this.rpc.bidirectionalStreamingRequest(
      "vega.api.v1.CoreService",
      "ObserveEventBus",
      data
    );
    return result.pipe(
      map((data) => ObserveEventBusResponse.decode(new _m0.Reader(data)))
    );
  }

  SubmitRawTransaction(
    request: SubmitRawTransactionRequest
  ): Promise<SubmitRawTransactionResponse> {
    const data = SubmitRawTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "SubmitRawTransaction",
      data
    );
    return promise.then((data) =>
      SubmitRawTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  CheckTransaction(
    request: CheckTransactionRequest
  ): Promise<CheckTransactionResponse> {
    const data = CheckTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "CheckTransaction",
      data
    );
    return promise.then((data) =>
      CheckTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  CheckRawTransaction(
    request: CheckRawTransactionRequest
  ): Promise<CheckRawTransactionResponse> {
    const data = CheckRawTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreService",
      "CheckRawTransaction",
      data
    );
    return promise.then((data) =>
      CheckRawTransactionResponse.decode(new _m0.Reader(data))
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
