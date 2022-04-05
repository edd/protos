/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Side,
  Order_TimeInForce,
  Order_Type,
  PeggedReference,
  AccountType,
  PeggedOrder,
  Price,
  Timestamp,
  LiquidityOrder,
  WithdrawExt,
  Uint64Value,
  sideFromJSON,
  order_TimeInForceFromJSON,
  order_TypeFromJSON,
  sideToJSON,
  order_TimeInForceToJSON,
  order_TypeToJSON,
  peggedReferenceFromJSON,
  peggedReferenceToJSON,
  accountTypeFromJSON,
  accountTypeToJSON,
} from "../../../vega/vega";
import {
  Vote_Value,
  ProposalTerms,
  vote_ValueFromJSON,
  vote_ValueToJSON,
} from "../../../vega/governance";

export const protobufPackage = "vega.commands.v1";

/**
 * Replacement for the google well-known type until we can get rid of this
 * entirely
 */
export interface Int64Value {
  value: string;
}

/** An order submission is a request to submit or create a new order on Vega */
export interface OrderSubmission {
  /** Market identifier for the order, required field */
  marketId: string;
  /**
   * Price for the order, the price is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places,
   * , required field for limit orders, however it is not required for market orders
   */
  price: string;
  /** Size for the order, for example, in a futures market the size equals the number of contracts, cannot be negative */
  size: string;
  /**
   * Side for the order, e.g. SIDE_BUY or SIDE_SELL, required field
   * - See `Side`
   */
  side: Side;
  /**
   * Time in force indicates how long an order will remain active before it is executed or expires, required field
   * - See `Order.TimeInForce`
   */
  timeInForce: Order_TimeInForce;
  /**
   * Timestamp for when the order will expire, in nanoseconds since the epoch,
   * required field only for `Order.TimeInForce`.TIME_IN_FORCE_GTT`
   * - See `VegaTimeResponse`.`timestamp`
   */
  expiresAt: string;
  /** Type for the order, required field - See `Order.Type` */
  type: Order_Type;
  /**
   * Reference given for the order, this is typically used to retrieve an order submitted through consensus, currently
   * set internally by the node to return a unique reference identifier for the order submission
   */
  reference: string;
  /**
   * Used to specify the details for a pegged order
   * - See `PeggedOrder`
   */
  peggedOrder: PeggedOrder | undefined;
}

/** An order cancellation is a request to cancel an existing order on Vega */
export interface OrderCancellation {
  /** Unique identifier for the order (set by the system after consensus), required field */
  orderId: string;
  /** Market identifier for the order, required field */
  marketId: string;
}

/** An order amendment is a request to amend or update an existing order on Vega */
export interface OrderAmendment {
  /** Order identifier, this is required to find the order and will not be updated, required field */
  orderId: string;
  /** Market identifier, this is required to find the order and will not be updated */
  marketId: string;
  /** Amend the price for the order, if the Price value is set, otherwise price will remain unchanged - See [`Price`](#vega.Price) */
  price: Price | undefined;
  /**
   * Amend the size for the order by the delta specified:
   * - To reduce the size from the current value set a negative integer value
   * - To increase the size from the current value, set a positive integer value
   * - To leave the size unchanged set a value of zero
   */
  sizeDelta: string;
  /**
   * Amend the expiry time for the order, if the Timestamp value is set, otherwise expiry time will remain unchanged
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  expiresAt: Timestamp | undefined;
  /**
   * Amend the time in force for the order, set to TIME_IN_FORCE_UNSPECIFIED to remain unchanged
   * - See [`TimeInForce`](#api.VegaTimeResponse).`timestamp`
   */
  timeInForce: Order_TimeInForce;
  /** Amend the pegged order offset for the order */
  peggedOffset: string;
  /**
   * Amend the pegged order reference for the order
   * - See [`PeggedReference`](#vega.PeggedReference)
   */
  peggedReference: PeggedReference;
}

/** A liquidity provision submitted for a given market */
export interface LiquidityProvisionSubmission {
  /** Market identifier for the order, required field */
  marketId: string;
  /** Specified as a unitless number that represents the amount of settlement asset of the market */
  commitmentAmount: string;
  /** Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per setting fees and rewarding liquidity providers */
  fee: string;
  /** A set of liquidity sell orders to meet the liquidity provision obligation */
  sells: LiquidityOrder[];
  /** A set of liquidity buy orders to meet the liquidity provision obligation */
  buys: LiquidityOrder[];
  /** A reference to be added to every order created out of this liquidityProvisionSubmission */
  reference: string;
}

/** Cancel a liquidity provision request */
export interface LiquidityProvisionCancellation {
  /** Unique ID for the market with the liquidity provision to be cancelled */
  marketId: string;
}

/** Amend a liquidity provision request */
export interface LiquidityProvisionAmendment {
  /** Unique ID for the market with the liquidity provision to be amended */
  marketId: string;
  /** From here at least one of the following is required to consider the command valid */
  commitmentAmount: string;
  /** an empty strings means no change */
  fee: string;
  /** empty slice means no change */
  sells: LiquidityOrder[];
  /** empty slice means no change */
  buys: LiquidityOrder[];
  /** empty string means no change */
  reference: string;
}

/** Represents the submission request to withdraw funds for a party on Vega */
export interface WithdrawSubmission {
  /** The amount to be withdrawn */
  amount: string;
  /** The asset to be withdrawn */
  asset: string;
  /** Foreign chain specifics */
  ext: WithdrawExt | undefined;
}

/**
 * A command to submit a new proposal for the
 * Vega network governance
 */
export interface ProposalSubmission {
  /** Proposal reference */
  reference: string;
  /** Proposal configuration and the actual change that is meant to be executed when proposal is enacted */
  terms: ProposalTerms | undefined;
}

/**
 * A command to submit a new vote for a governance
 * proposal.
 */
export interface VoteSubmission {
  /** The ID of the proposal to vote for. */
  proposalId: string;
  /** The actual value of the vote */
  value: Vote_Value;
}

/** A command to submit an instruction to delegate some stake to a node */
export interface DelegateSubmission {
  /** The ID for the node to delegate to */
  nodeId: string;
  /** The amount of stake to delegate */
  amount: string;
}

export interface UndelegateSubmission {
  nodeId: string;
  /** optional, if not specified = ALL */
  amount: string;
  method: UndelegateSubmission_Method;
}

export enum UndelegateSubmission_Method {
  METHOD_UNSPECIFIED = 0,
  METHOD_NOW = 1,
  METHOD_AT_END_OF_EPOCH = 2,
  METHOD_IN_ANGER = 3,
  UNRECOGNIZED = -1,
}

export function undelegateSubmission_MethodFromJSON(
  object: any
): UndelegateSubmission_Method {
  switch (object) {
    case 0:
    case "METHOD_UNSPECIFIED":
      return UndelegateSubmission_Method.METHOD_UNSPECIFIED;
    case 1:
    case "METHOD_NOW":
      return UndelegateSubmission_Method.METHOD_NOW;
    case 2:
    case "METHOD_AT_END_OF_EPOCH":
      return UndelegateSubmission_Method.METHOD_AT_END_OF_EPOCH;
    case 3:
    case "METHOD_IN_ANGER":
      return UndelegateSubmission_Method.METHOD_IN_ANGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UndelegateSubmission_Method.UNRECOGNIZED;
  }
}

export function undelegateSubmission_MethodToJSON(
  object: UndelegateSubmission_Method
): string {
  switch (object) {
    case UndelegateSubmission_Method.METHOD_UNSPECIFIED:
      return "METHOD_UNSPECIFIED";
    case UndelegateSubmission_Method.METHOD_NOW:
      return "METHOD_NOW";
    case UndelegateSubmission_Method.METHOD_AT_END_OF_EPOCH:
      return "METHOD_AT_END_OF_EPOCH";
    case UndelegateSubmission_Method.METHOD_IN_ANGER:
      return "METHOD_IN_ANGER";
    default:
      return "UNKNOWN";
  }
}

/** A command that loads the state from a given checkpoint */
export interface RestoreSnapshot {
  data: Uint8Array;
}

/** A transfer initiated by a party */
export interface Transfer {
  /**
   * The account type from which the funds of the party
   * should be taken
   */
  fromAccountType: AccountType;
  /** The public key of the destination account */
  to: string;
  /** The type of the destination account */
  toAccountType: AccountType;
  /** The asset */
  asset: string;
  /** The amount to be taken from the source account */
  amount: string;
  /** The reference to be attached to the transfer */
  reference: string;
  oneOff: OneOffTransfer | undefined;
  recurring: RecurringTransfer | undefined;
}

/** Specific details for a one off transfer */
export interface OneOffTransfer {
  /**
   * A unix timestamp in second. Time at which the
   * transfer should be delivered in the to account
   */
  deliverOn: string;
}

/** Specific details for a recurring transfer */
export interface RecurringTransfer {
  /** The first epoch from which this transfer shall be paid */
  startEpoch: string;
  /** The last epoch at which this transfer shall be paid */
  endEpoch: Uint64Value | undefined;
  /** factor needs to be > 0 */
  factor: string;
}

/** A request for cancelling a recurring transfer */
export interface CancelTransfer {
  /** The ID of the transfer to cancel */
  transferId: string;
}

function createBaseInt64Value(): Int64Value {
  return { value: "0" };
}

export const Int64Value = {
  encode(
    message: Int64Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "0") {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int64Value {
    return {
      value: isSet(object.value) ? String(object.value) : "0",
    };
  },

  toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Int64Value>, I>>(
    object: I
  ): Int64Value {
    const message = createBaseInt64Value();
    message.value = object.value ?? "0";
    return message;
  },
};

function createBaseOrderSubmission(): OrderSubmission {
  return {
    marketId: "",
    price: "",
    size: "0",
    side: 0,
    timeInForce: 0,
    expiresAt: "0",
    type: 0,
    reference: "",
    peggedOrder: undefined,
  };
}

export const OrderSubmission = {
  encode(
    message: OrderSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.size !== "0") {
      writer.uint32(24).uint64(message.size);
    }
    if (message.side !== 0) {
      writer.uint32(32).int32(message.side);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(40).int32(message.timeInForce);
    }
    if (message.expiresAt !== "0") {
      writer.uint32(48).int64(message.expiresAt);
    }
    if (message.type !== 0) {
      writer.uint32(56).int32(message.type);
    }
    if (message.reference !== "") {
      writer.uint32(66).string(message.reference);
    }
    if (message.peggedOrder !== undefined) {
      PeggedOrder.encode(
        message.peggedOrder,
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.price = reader.string();
          break;
        case 3:
          message.size = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.side = reader.int32() as any;
          break;
        case 5:
          message.timeInForce = reader.int32() as any;
          break;
        case 6:
          message.expiresAt = longToString(reader.int64() as Long);
          break;
        case 7:
          message.type = reader.int32() as any;
          break;
        case 8:
          message.reference = reader.string();
          break;
        case 9:
          message.peggedOrder = PeggedOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderSubmission {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      size: isSet(object.size) ? String(object.size) : "0",
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      timeInForce: isSet(object.timeInForce)
        ? order_TimeInForceFromJSON(object.timeInForce)
        : 0,
      expiresAt: isSet(object.expiresAt) ? String(object.expiresAt) : "0",
      type: isSet(object.type) ? order_TypeFromJSON(object.type) : 0,
      reference: isSet(object.reference) ? String(object.reference) : "",
      peggedOrder: isSet(object.peggedOrder)
        ? PeggedOrder.fromJSON(object.peggedOrder)
        : undefined,
    };
  },

  toJSON(message: OrderSubmission): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    message.size !== undefined && (obj.size = message.size);
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.timeInForce !== undefined &&
      (obj.timeInForce = order_TimeInForceToJSON(message.timeInForce));
    message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt);
    message.type !== undefined && (obj.type = order_TypeToJSON(message.type));
    message.reference !== undefined && (obj.reference = message.reference);
    message.peggedOrder !== undefined &&
      (obj.peggedOrder = message.peggedOrder
        ? PeggedOrder.toJSON(message.peggedOrder)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderSubmission>, I>>(
    object: I
  ): OrderSubmission {
    const message = createBaseOrderSubmission();
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    message.size = object.size ?? "0";
    message.side = object.side ?? 0;
    message.timeInForce = object.timeInForce ?? 0;
    message.expiresAt = object.expiresAt ?? "0";
    message.type = object.type ?? 0;
    message.reference = object.reference ?? "";
    message.peggedOrder =
      object.peggedOrder !== undefined && object.peggedOrder !== null
        ? PeggedOrder.fromPartial(object.peggedOrder)
        : undefined;
    return message;
  },
};

function createBaseOrderCancellation(): OrderCancellation {
  return { orderId: "", marketId: "" };
}

export const OrderCancellation = {
  encode(
    message: OrderCancellation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderCancellation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCancellation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
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

  fromJSON(object: any): OrderCancellation {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: OrderCancellation): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderCancellation>, I>>(
    object: I
  ): OrderCancellation {
    const message = createBaseOrderCancellation();
    message.orderId = object.orderId ?? "";
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseOrderAmendment(): OrderAmendment {
  return {
    orderId: "",
    marketId: "",
    price: undefined,
    sizeDelta: "0",
    expiresAt: undefined,
    timeInForce: 0,
    peggedOffset: "",
    peggedReference: 0,
  };
}

export const OrderAmendment = {
  encode(
    message: OrderAmendment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.sizeDelta !== "0") {
      writer.uint32(32).int64(message.sizeDelta);
    }
    if (message.expiresAt !== undefined) {
      Timestamp.encode(message.expiresAt, writer.uint32(42).fork()).ldelim();
    }
    if (message.timeInForce !== 0) {
      writer.uint32(48).int32(message.timeInForce);
    }
    if (message.peggedOffset !== "") {
      writer.uint32(58).string(message.peggedOffset);
    }
    if (message.peggedReference !== 0) {
      writer.uint32(64).int32(message.peggedReference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderAmendment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderAmendment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.price = Price.decode(reader, reader.uint32());
          break;
        case 4:
          message.sizeDelta = longToString(reader.int64() as Long);
          break;
        case 5:
          message.expiresAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.timeInForce = reader.int32() as any;
          break;
        case 7:
          message.peggedOffset = reader.string();
          break;
        case 8:
          message.peggedReference = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderAmendment {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? Price.fromJSON(object.price) : undefined,
      sizeDelta: isSet(object.sizeDelta) ? String(object.sizeDelta) : "0",
      expiresAt: isSet(object.expiresAt)
        ? Timestamp.fromJSON(object.expiresAt)
        : undefined,
      timeInForce: isSet(object.timeInForce)
        ? order_TimeInForceFromJSON(object.timeInForce)
        : 0,
      peggedOffset: isSet(object.peggedOffset)
        ? String(object.peggedOffset)
        : "",
      peggedReference: isSet(object.peggedReference)
        ? peggedReferenceFromJSON(object.peggedReference)
        : 0,
    };
  },

  toJSON(message: OrderAmendment): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined &&
      (obj.price = message.price ? Price.toJSON(message.price) : undefined);
    message.sizeDelta !== undefined && (obj.sizeDelta = message.sizeDelta);
    message.expiresAt !== undefined &&
      (obj.expiresAt = message.expiresAt
        ? Timestamp.toJSON(message.expiresAt)
        : undefined);
    message.timeInForce !== undefined &&
      (obj.timeInForce = order_TimeInForceToJSON(message.timeInForce));
    message.peggedOffset !== undefined &&
      (obj.peggedOffset = message.peggedOffset);
    message.peggedReference !== undefined &&
      (obj.peggedReference = peggedReferenceToJSON(message.peggedReference));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderAmendment>, I>>(
    object: I
  ): OrderAmendment {
    const message = createBaseOrderAmendment();
    message.orderId = object.orderId ?? "";
    message.marketId = object.marketId ?? "";
    message.price =
      object.price !== undefined && object.price !== null
        ? Price.fromPartial(object.price)
        : undefined;
    message.sizeDelta = object.sizeDelta ?? "0";
    message.expiresAt =
      object.expiresAt !== undefined && object.expiresAt !== null
        ? Timestamp.fromPartial(object.expiresAt)
        : undefined;
    message.timeInForce = object.timeInForce ?? 0;
    message.peggedOffset = object.peggedOffset ?? "";
    message.peggedReference = object.peggedReference ?? 0;
    return message;
  },
};

function createBaseLiquidityProvisionSubmission(): LiquidityProvisionSubmission {
  return {
    marketId: "",
    commitmentAmount: "",
    fee: "",
    sells: [],
    buys: [],
    reference: "",
  };
}

export const LiquidityProvisionSubmission = {
  encode(
    message: LiquidityProvisionSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.commitmentAmount !== "") {
      writer.uint32(18).string(message.commitmentAmount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    for (const v of message.sells) {
      LiquidityOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.buys) {
      LiquidityOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.reference !== "") {
      writer.uint32(50).string(message.reference);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProvisionSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvisionSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.commitmentAmount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.sells.push(LiquidityOrder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.buys.push(LiquidityOrder.decode(reader, reader.uint32()));
          break;
        case 6:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvisionSubmission {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
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

  toJSON(message: LiquidityProvisionSubmission): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
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

  fromPartial<I extends Exact<DeepPartial<LiquidityProvisionSubmission>, I>>(
    object: I
  ): LiquidityProvisionSubmission {
    const message = createBaseLiquidityProvisionSubmission();
    message.marketId = object.marketId ?? "";
    message.commitmentAmount = object.commitmentAmount ?? "";
    message.fee = object.fee ?? "";
    message.sells =
      object.sells?.map((e) => LiquidityOrder.fromPartial(e)) || [];
    message.buys = object.buys?.map((e) => LiquidityOrder.fromPartial(e)) || [];
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseLiquidityProvisionCancellation(): LiquidityProvisionCancellation {
  return { marketId: "" };
}

export const LiquidityProvisionCancellation = {
  encode(
    message: LiquidityProvisionCancellation,
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
  ): LiquidityProvisionCancellation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvisionCancellation();
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

  fromJSON(object: any): LiquidityProvisionCancellation {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
    };
  },

  toJSON(message: LiquidityProvisionCancellation): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProvisionCancellation>, I>>(
    object: I
  ): LiquidityProvisionCancellation {
    const message = createBaseLiquidityProvisionCancellation();
    message.marketId = object.marketId ?? "";
    return message;
  },
};

function createBaseLiquidityProvisionAmendment(): LiquidityProvisionAmendment {
  return {
    marketId: "",
    commitmentAmount: "",
    fee: "",
    sells: [],
    buys: [],
    reference: "",
  };
}

export const LiquidityProvisionAmendment = {
  encode(
    message: LiquidityProvisionAmendment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.commitmentAmount !== "") {
      writer.uint32(18).string(message.commitmentAmount);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    for (const v of message.sells) {
      LiquidityOrder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.buys) {
      LiquidityOrder.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.reference !== "") {
      writer.uint32(50).string(message.reference);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProvisionAmendment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvisionAmendment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.commitmentAmount = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        case 4:
          message.sells.push(LiquidityOrder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.buys.push(LiquidityOrder.decode(reader, reader.uint32()));
          break;
        case 6:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvisionAmendment {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
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

  toJSON(message: LiquidityProvisionAmendment): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
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

  fromPartial<I extends Exact<DeepPartial<LiquidityProvisionAmendment>, I>>(
    object: I
  ): LiquidityProvisionAmendment {
    const message = createBaseLiquidityProvisionAmendment();
    message.marketId = object.marketId ?? "";
    message.commitmentAmount = object.commitmentAmount ?? "";
    message.fee = object.fee ?? "";
    message.sells =
      object.sells?.map((e) => LiquidityOrder.fromPartial(e)) || [];
    message.buys = object.buys?.map((e) => LiquidityOrder.fromPartial(e)) || [];
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseWithdrawSubmission(): WithdrawSubmission {
  return { amount: "", asset: "", ext: undefined };
}

export const WithdrawSubmission = {
  encode(
    message: WithdrawSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.ext !== undefined) {
      WithdrawExt.encode(message.ext, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.ext = WithdrawExt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawSubmission {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      ext: isSet(object.ext) ? WithdrawExt.fromJSON(object.ext) : undefined,
    };
  },

  toJSON(message: WithdrawSubmission): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.asset !== undefined && (obj.asset = message.asset);
    message.ext !== undefined &&
      (obj.ext = message.ext ? WithdrawExt.toJSON(message.ext) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawSubmission>, I>>(
    object: I
  ): WithdrawSubmission {
    const message = createBaseWithdrawSubmission();
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    message.ext =
      object.ext !== undefined && object.ext !== null
        ? WithdrawExt.fromPartial(object.ext)
        : undefined;
    return message;
  },
};

function createBaseProposalSubmission(): ProposalSubmission {
  return { reference: "", terms: undefined };
}

export const ProposalSubmission = {
  encode(
    message: ProposalSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reference !== "") {
      writer.uint32(10).string(message.reference);
    }
    if (message.terms !== undefined) {
      ProposalTerms.encode(message.terms, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProposalSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = reader.string();
          break;
        case 2:
          message.terms = ProposalTerms.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProposalSubmission {
    return {
      reference: isSet(object.reference) ? String(object.reference) : "",
      terms: isSet(object.terms)
        ? ProposalTerms.fromJSON(object.terms)
        : undefined,
    };
  },

  toJSON(message: ProposalSubmission): unknown {
    const obj: any = {};
    message.reference !== undefined && (obj.reference = message.reference);
    message.terms !== undefined &&
      (obj.terms = message.terms
        ? ProposalTerms.toJSON(message.terms)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProposalSubmission>, I>>(
    object: I
  ): ProposalSubmission {
    const message = createBaseProposalSubmission();
    message.reference = object.reference ?? "";
    message.terms =
      object.terms !== undefined && object.terms !== null
        ? ProposalTerms.fromPartial(object.terms)
        : undefined;
    return message;
  },
};

function createBaseVoteSubmission(): VoteSubmission {
  return { proposalId: "", value: 0 };
}

export const VoteSubmission = {
  encode(
    message: VoteSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposalId !== "") {
      writer.uint32(10).string(message.proposalId);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteSubmission {
    return {
      proposalId: isSet(object.proposalId) ? String(object.proposalId) : "",
      value: isSet(object.value) ? vote_ValueFromJSON(object.value) : 0,
    };
  },

  toJSON(message: VoteSubmission): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = message.proposalId);
    message.value !== undefined &&
      (obj.value = vote_ValueToJSON(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VoteSubmission>, I>>(
    object: I
  ): VoteSubmission {
    const message = createBaseVoteSubmission();
    message.proposalId = object.proposalId ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseDelegateSubmission(): DelegateSubmission {
  return { nodeId: "", amount: "" };
}

export const DelegateSubmission = {
  encode(
    message: DelegateSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
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

  fromJSON(object: any): DelegateSubmission {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: DelegateSubmission): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegateSubmission>, I>>(
    object: I
  ): DelegateSubmission {
    const message = createBaseDelegateSubmission();
    message.nodeId = object.nodeId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseUndelegateSubmission(): UndelegateSubmission {
  return { nodeId: "", amount: "", method: 0 };
}

export const UndelegateSubmission = {
  encode(
    message: UndelegateSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.method !== 0) {
      writer.uint32(24).int32(message.method);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UndelegateSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegateSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.method = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegateSubmission {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      method: isSet(object.method)
        ? undelegateSubmission_MethodFromJSON(object.method)
        : 0,
    };
  },

  toJSON(message: UndelegateSubmission): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.method !== undefined &&
      (obj.method = undelegateSubmission_MethodToJSON(message.method));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegateSubmission>, I>>(
    object: I
  ): UndelegateSubmission {
    const message = createBaseUndelegateSubmission();
    message.nodeId = object.nodeId ?? "";
    message.amount = object.amount ?? "";
    message.method = object.method ?? 0;
    return message;
  },
};

function createBaseRestoreSnapshot(): RestoreSnapshot {
  return { data: new Uint8Array() };
}

export const RestoreSnapshot = {
  encode(
    message: RestoreSnapshot,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestoreSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestoreSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RestoreSnapshot {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: RestoreSnapshot): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RestoreSnapshot>, I>>(
    object: I
  ): RestoreSnapshot {
    const message = createBaseRestoreSnapshot();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseTransfer(): Transfer {
  return {
    fromAccountType: 0,
    to: "",
    toAccountType: 0,
    asset: "",
    amount: "",
    reference: "",
    oneOff: undefined,
    recurring: undefined,
  };
}

export const Transfer = {
  encode(
    message: Transfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAccountType !== 0) {
      writer.uint32(8).int32(message.fromAccountType);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.toAccountType !== 0) {
      writer.uint32(24).int32(message.toAccountType);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.reference !== "") {
      writer.uint32(50).string(message.reference);
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
          message.fromAccountType = reader.int32() as any;
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.toAccountType = reader.int32() as any;
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.reference = reader.string();
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
    message.fromAccountType !== undefined &&
      (obj.fromAccountType = accountTypeToJSON(message.fromAccountType));
    message.to !== undefined && (obj.to = message.to);
    message.toAccountType !== undefined &&
      (obj.toAccountType = accountTypeToJSON(message.toAccountType));
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.reference !== undefined && (obj.reference = message.reference);
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
    message.fromAccountType = object.fromAccountType ?? 0;
    message.to = object.to ?? "";
    message.toAccountType = object.toAccountType ?? 0;
    message.asset = object.asset ?? "";
    message.amount = object.amount ?? "";
    message.reference = object.reference ?? "";
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

function createBaseCancelTransfer(): CancelTransfer {
  return { transferId: "" };
}

export const CancelTransfer = {
  encode(
    message: CancelTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transferId !== "") {
      writer.uint32(10).string(message.transferId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transferId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelTransfer {
    return {
      transferId: isSet(object.transferId) ? String(object.transferId) : "",
    };
  },

  toJSON(message: CancelTransfer): unknown {
    const obj: any = {};
    message.transferId !== undefined && (obj.transferId = message.transferId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelTransfer>, I>>(
    object: I
  ): CancelTransfer {
    const message = createBaseCancelTransfer();
    message.transferId = object.transferId ?? "";
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
