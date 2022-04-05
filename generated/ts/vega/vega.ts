/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Market_TradingMode,
  PriceMonitoringTrigger,
  market_TradingModeFromJSON,
  market_TradingModeToJSON,
} from "../vega/markets";

export const protobufPackage = "vega";

/** A side relates to the direction of an order, to Buy, or Sell */
export enum Side {
  /** SIDE_UNSPECIFIED - Default value, always invalid */
  SIDE_UNSPECIFIED = 0,
  /** SIDE_BUY - Buy order */
  SIDE_BUY = 1,
  /** SIDE_SELL - Sell order */
  SIDE_SELL = 2,
  UNRECOGNIZED = -1,
}

export function sideFromJSON(object: any): Side {
  switch (object) {
    case 0:
    case "SIDE_UNSPECIFIED":
      return Side.SIDE_UNSPECIFIED;
    case 1:
    case "SIDE_BUY":
      return Side.SIDE_BUY;
    case 2:
    case "SIDE_SELL":
      return Side.SIDE_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Side.UNRECOGNIZED;
  }
}

export function sideToJSON(object: Side): string {
  switch (object) {
    case Side.SIDE_UNSPECIFIED:
      return "SIDE_UNSPECIFIED";
    case Side.SIDE_BUY:
      return "SIDE_BUY";
    case Side.SIDE_SELL:
      return "SIDE_SELL";
    default:
      return "UNKNOWN";
  }
}

/** Represents a set of time intervals that are used when querying for candle-stick data */
export enum Interval {
  /** INTERVAL_UNSPECIFIED - Default value, always invalid */
  INTERVAL_UNSPECIFIED = 0,
  /** INTERVAL_I1M - 1 minute. */
  INTERVAL_I1M = 60,
  /** INTERVAL_I5M - 5 minutes. */
  INTERVAL_I5M = 300,
  /** INTERVAL_I15M - 15 minutes. */
  INTERVAL_I15M = 900,
  /** INTERVAL_I1H - 1 hour. */
  INTERVAL_I1H = 3600,
  /** INTERVAL_I6H - 6 hours. */
  INTERVAL_I6H = 21600,
  /** INTERVAL_I1D - 1 day. */
  INTERVAL_I1D = 86400,
  UNRECOGNIZED = -1,
}

export function intervalFromJSON(object: any): Interval {
  switch (object) {
    case 0:
    case "INTERVAL_UNSPECIFIED":
      return Interval.INTERVAL_UNSPECIFIED;
    case 60:
    case "INTERVAL_I1M":
      return Interval.INTERVAL_I1M;
    case 300:
    case "INTERVAL_I5M":
      return Interval.INTERVAL_I5M;
    case 900:
    case "INTERVAL_I15M":
      return Interval.INTERVAL_I15M;
    case 3600:
    case "INTERVAL_I1H":
      return Interval.INTERVAL_I1H;
    case 21600:
    case "INTERVAL_I6H":
      return Interval.INTERVAL_I6H;
    case 86400:
    case "INTERVAL_I1D":
      return Interval.INTERVAL_I1D;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Interval.UNRECOGNIZED;
  }
}

export function intervalToJSON(object: Interval): string {
  switch (object) {
    case Interval.INTERVAL_UNSPECIFIED:
      return "INTERVAL_UNSPECIFIED";
    case Interval.INTERVAL_I1M:
      return "INTERVAL_I1M";
    case Interval.INTERVAL_I5M:
      return "INTERVAL_I5M";
    case Interval.INTERVAL_I15M:
      return "INTERVAL_I15M";
    case Interval.INTERVAL_I1H:
      return "INTERVAL_I1H";
    case Interval.INTERVAL_I6H:
      return "INTERVAL_I6H";
    case Interval.INTERVAL_I1D:
      return "INTERVAL_I1D";
    default:
      return "UNKNOWN";
  }
}

/** Auction triggers indicate what condition triggered an auction (if market is in auction mode) */
export enum AuctionTrigger {
  /** AUCTION_TRIGGER_UNSPECIFIED - Default value for AuctionTrigger, no auction triggered */
  AUCTION_TRIGGER_UNSPECIFIED = 0,
  /** AUCTION_TRIGGER_BATCH - Batch auction */
  AUCTION_TRIGGER_BATCH = 1,
  /** AUCTION_TRIGGER_OPENING - Opening auction */
  AUCTION_TRIGGER_OPENING = 2,
  /** AUCTION_TRIGGER_PRICE - Price monitoring trigger */
  AUCTION_TRIGGER_PRICE = 3,
  /** AUCTION_TRIGGER_LIQUIDITY - Liquidity monitoring trigger */
  AUCTION_TRIGGER_LIQUIDITY = 4,
  UNRECOGNIZED = -1,
}

export function auctionTriggerFromJSON(object: any): AuctionTrigger {
  switch (object) {
    case 0:
    case "AUCTION_TRIGGER_UNSPECIFIED":
      return AuctionTrigger.AUCTION_TRIGGER_UNSPECIFIED;
    case 1:
    case "AUCTION_TRIGGER_BATCH":
      return AuctionTrigger.AUCTION_TRIGGER_BATCH;
    case 2:
    case "AUCTION_TRIGGER_OPENING":
      return AuctionTrigger.AUCTION_TRIGGER_OPENING;
    case 3:
    case "AUCTION_TRIGGER_PRICE":
      return AuctionTrigger.AUCTION_TRIGGER_PRICE;
    case 4:
    case "AUCTION_TRIGGER_LIQUIDITY":
      return AuctionTrigger.AUCTION_TRIGGER_LIQUIDITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AuctionTrigger.UNRECOGNIZED;
  }
}

export function auctionTriggerToJSON(object: AuctionTrigger): string {
  switch (object) {
    case AuctionTrigger.AUCTION_TRIGGER_UNSPECIFIED:
      return "AUCTION_TRIGGER_UNSPECIFIED";
    case AuctionTrigger.AUCTION_TRIGGER_BATCH:
      return "AUCTION_TRIGGER_BATCH";
    case AuctionTrigger.AUCTION_TRIGGER_OPENING:
      return "AUCTION_TRIGGER_OPENING";
    case AuctionTrigger.AUCTION_TRIGGER_PRICE:
      return "AUCTION_TRIGGER_PRICE";
    case AuctionTrigger.AUCTION_TRIGGER_LIQUIDITY:
      return "AUCTION_TRIGGER_LIQUIDITY";
    default:
      return "UNKNOWN";
  }
}

/**
 * A pegged reference defines which price point a pegged order is linked to - meaning
 * the price for a pegged order is calculated from the value of the reference price point
 */
export enum PeggedReference {
  /** PEGGED_REFERENCE_UNSPECIFIED - Default value for PeggedReference, no reference given */
  PEGGED_REFERENCE_UNSPECIFIED = 0,
  /** PEGGED_REFERENCE_MID - Mid price reference */
  PEGGED_REFERENCE_MID = 1,
  /** PEGGED_REFERENCE_BEST_BID - Best bid price reference */
  PEGGED_REFERENCE_BEST_BID = 2,
  /** PEGGED_REFERENCE_BEST_ASK - Best ask price reference */
  PEGGED_REFERENCE_BEST_ASK = 3,
  UNRECOGNIZED = -1,
}

export function peggedReferenceFromJSON(object: any): PeggedReference {
  switch (object) {
    case 0:
    case "PEGGED_REFERENCE_UNSPECIFIED":
      return PeggedReference.PEGGED_REFERENCE_UNSPECIFIED;
    case 1:
    case "PEGGED_REFERENCE_MID":
      return PeggedReference.PEGGED_REFERENCE_MID;
    case 2:
    case "PEGGED_REFERENCE_BEST_BID":
      return PeggedReference.PEGGED_REFERENCE_BEST_BID;
    case 3:
    case "PEGGED_REFERENCE_BEST_ASK":
      return PeggedReference.PEGGED_REFERENCE_BEST_ASK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PeggedReference.UNRECOGNIZED;
  }
}

export function peggedReferenceToJSON(object: PeggedReference): string {
  switch (object) {
    case PeggedReference.PEGGED_REFERENCE_UNSPECIFIED:
      return "PEGGED_REFERENCE_UNSPECIFIED";
    case PeggedReference.PEGGED_REFERENCE_MID:
      return "PEGGED_REFERENCE_MID";
    case PeggedReference.PEGGED_REFERENCE_BEST_BID:
      return "PEGGED_REFERENCE_BEST_BID";
    case PeggedReference.PEGGED_REFERENCE_BEST_ASK:
      return "PEGGED_REFERENCE_BEST_ASK";
    default:
      return "UNKNOWN";
  }
}

/**
 * OrderError codes are returned in the `[Order](#vega.Order).reason` field - If there is an issue
 * with an order during its life-cycle, it will be marked with `status.ORDER_STATUS_REJECTED`
 */
export enum OrderError {
  /** ORDER_ERROR_UNSPECIFIED - Default value, no error reported */
  ORDER_ERROR_UNSPECIFIED = 0,
  /** ORDER_ERROR_INVALID_MARKET_ID - Order was submitted for a market that does not exist */
  ORDER_ERROR_INVALID_MARKET_ID = 1,
  /** ORDER_ERROR_INVALID_ORDER_ID - Order was submitted with an invalid identifier */
  ORDER_ERROR_INVALID_ORDER_ID = 2,
  /** ORDER_ERROR_OUT_OF_SEQUENCE - Order was amended with a sequence number that was not previous version + 1 */
  ORDER_ERROR_OUT_OF_SEQUENCE = 3,
  /** ORDER_ERROR_INVALID_REMAINING_SIZE - Order was amended with an invalid remaining size (e.g. remaining greater than total size) */
  ORDER_ERROR_INVALID_REMAINING_SIZE = 4,
  /** ORDER_ERROR_TIME_FAILURE - Node was unable to get Vega (blockchain) time */
  ORDER_ERROR_TIME_FAILURE = 5,
  /** ORDER_ERROR_REMOVAL_FAILURE - Failed to remove an order from the book */
  ORDER_ERROR_REMOVAL_FAILURE = 6,
  /**
   * ORDER_ERROR_INVALID_EXPIRATION_DATETIME - An order with `TimeInForce.TIME_IN_FORCE_GTT` was submitted or amended
   * with an expiration that was badly formatted or otherwise invalid
   */
  ORDER_ERROR_INVALID_EXPIRATION_DATETIME = 7,
  /** ORDER_ERROR_INVALID_ORDER_REFERENCE - Order was submitted or amended with an invalid reference field */
  ORDER_ERROR_INVALID_ORDER_REFERENCE = 8,
  /** ORDER_ERROR_EDIT_NOT_ALLOWED - Order amend was submitted for an order field that cannot not be amended (e.g. order identifier) */
  ORDER_ERROR_EDIT_NOT_ALLOWED = 9,
  /** ORDER_ERROR_AMEND_FAILURE - Amend failure because amend details do not match original order */
  ORDER_ERROR_AMEND_FAILURE = 10,
  /** ORDER_ERROR_NOT_FOUND - Order not found in an order book or store */
  ORDER_ERROR_NOT_FOUND = 11,
  /** ORDER_ERROR_INVALID_PARTY_ID - Order was submitted with an invalid or missing party identifier */
  ORDER_ERROR_INVALID_PARTY_ID = 12,
  /** ORDER_ERROR_MARKET_CLOSED - Order was submitted for a market that has closed */
  ORDER_ERROR_MARKET_CLOSED = 13,
  /** ORDER_ERROR_MARGIN_CHECK_FAILED - Order was submitted, but the party did not have enough collateral to cover the order */
  ORDER_ERROR_MARGIN_CHECK_FAILED = 14,
  /** ORDER_ERROR_MISSING_GENERAL_ACCOUNT - Order was submitted, but the party did not have an account for this asset */
  ORDER_ERROR_MISSING_GENERAL_ACCOUNT = 15,
  /** ORDER_ERROR_INTERNAL_ERROR - Unspecified internal error */
  ORDER_ERROR_INTERNAL_ERROR = 16,
  /** ORDER_ERROR_INVALID_SIZE - Order was submitted with an invalid or missing size (e.g. 0) */
  ORDER_ERROR_INVALID_SIZE = 17,
  /** ORDER_ERROR_INVALID_PERSISTENCE - Order was submitted with an invalid persistence for its type */
  ORDER_ERROR_INVALID_PERSISTENCE = 18,
  /** ORDER_ERROR_INVALID_TYPE - Order was submitted with an invalid type field */
  ORDER_ERROR_INVALID_TYPE = 19,
  /** ORDER_ERROR_SELF_TRADING - Order was stopped as it would have traded with another order submitted from the same party */
  ORDER_ERROR_SELF_TRADING = 20,
  /** ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES - Order was submitted, but the party did not have enough collateral to cover the fees for the order */
  ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES = 21,
  /** ORDER_ERROR_INCORRECT_MARKET_TYPE - Order was submitted with an incorrect or invalid market type */
  ORDER_ERROR_INCORRECT_MARKET_TYPE = 22,
  /** ORDER_ERROR_INVALID_TIME_IN_FORCE - Order was submitted with invalid time in force */
  ORDER_ERROR_INVALID_TIME_IN_FORCE = 23,
  /** ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION - A GFN order has got to the market when it is in auction mode */
  ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION = 24,
  /** ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING - A GFA order has got to the market when it is in continuous trading mode */
  ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING = 25,
  /** ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT - Attempt to amend order to GTT without ExpiryAt */
  ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT = 26,
  /** ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT - Attempt to amend ExpiryAt to a value before CreatedAt */
  ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT = 27,
  /** ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT - Attempt to amend to GTC without an ExpiryAt value */
  ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT = 28,
  /** ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC - Amending to FOK or IOC is invalid */
  ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC = 29,
  /** ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN - Amending to GFA or GFN is invalid */
  ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN = 30,
  /** ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN - Amending from GFA or GFN is invalid */
  ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN = 31,
  /** ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION - IOC orders are not allowed during auction */
  ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION = 32,
  /** ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION - FOK orders are not allowed during auction */
  ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION = 33,
  /** ORDER_ERROR_MUST_BE_LIMIT_ORDER - Pegged orders must be LIMIT orders */
  ORDER_ERROR_MUST_BE_LIMIT_ORDER = 34,
  /** ORDER_ERROR_MUST_BE_GTT_OR_GTC - Pegged orders can only have TIF GTC or GTT */
  ORDER_ERROR_MUST_BE_GTT_OR_GTC = 35,
  /** ORDER_ERROR_WITHOUT_REFERENCE_PRICE - Pegged order must have a reference price */
  ORDER_ERROR_WITHOUT_REFERENCE_PRICE = 36,
  /** ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE - Buy pegged order cannot reference best ask price */
  ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE = 37,
  /** ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO - Pegged order offset must be >= 0 */
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO = 40,
  /** ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE - Sell pegged order cannot reference best bid price */
  ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE = 41,
  /** ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO - Pegged order offset must be > zero */
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO = 42,
  /**
   * ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE - The party has an insufficient balance, or does not have
   * a general account to submit the order (no deposits made
   * for the required asset)
   */
  ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE = 43,
  /** ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER - Cannot amend a non pegged orders details */
  ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER = 44,
  /** ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER - We are unable to re-price a pegged order because a market price is unavailable */
  ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER = 45,
  /** ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER - It is not possible to amend the price of an existing pegged order */
  ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER = 46,
  /** ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS - An FOK, IOC, or GFN order was rejected because it resulted in trades outside the price bounds */
  ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS = 47,
  UNRECOGNIZED = -1,
}

export function orderErrorFromJSON(object: any): OrderError {
  switch (object) {
    case 0:
    case "ORDER_ERROR_UNSPECIFIED":
      return OrderError.ORDER_ERROR_UNSPECIFIED;
    case 1:
    case "ORDER_ERROR_INVALID_MARKET_ID":
      return OrderError.ORDER_ERROR_INVALID_MARKET_ID;
    case 2:
    case "ORDER_ERROR_INVALID_ORDER_ID":
      return OrderError.ORDER_ERROR_INVALID_ORDER_ID;
    case 3:
    case "ORDER_ERROR_OUT_OF_SEQUENCE":
      return OrderError.ORDER_ERROR_OUT_OF_SEQUENCE;
    case 4:
    case "ORDER_ERROR_INVALID_REMAINING_SIZE":
      return OrderError.ORDER_ERROR_INVALID_REMAINING_SIZE;
    case 5:
    case "ORDER_ERROR_TIME_FAILURE":
      return OrderError.ORDER_ERROR_TIME_FAILURE;
    case 6:
    case "ORDER_ERROR_REMOVAL_FAILURE":
      return OrderError.ORDER_ERROR_REMOVAL_FAILURE;
    case 7:
    case "ORDER_ERROR_INVALID_EXPIRATION_DATETIME":
      return OrderError.ORDER_ERROR_INVALID_EXPIRATION_DATETIME;
    case 8:
    case "ORDER_ERROR_INVALID_ORDER_REFERENCE":
      return OrderError.ORDER_ERROR_INVALID_ORDER_REFERENCE;
    case 9:
    case "ORDER_ERROR_EDIT_NOT_ALLOWED":
      return OrderError.ORDER_ERROR_EDIT_NOT_ALLOWED;
    case 10:
    case "ORDER_ERROR_AMEND_FAILURE":
      return OrderError.ORDER_ERROR_AMEND_FAILURE;
    case 11:
    case "ORDER_ERROR_NOT_FOUND":
      return OrderError.ORDER_ERROR_NOT_FOUND;
    case 12:
    case "ORDER_ERROR_INVALID_PARTY_ID":
      return OrderError.ORDER_ERROR_INVALID_PARTY_ID;
    case 13:
    case "ORDER_ERROR_MARKET_CLOSED":
      return OrderError.ORDER_ERROR_MARKET_CLOSED;
    case 14:
    case "ORDER_ERROR_MARGIN_CHECK_FAILED":
      return OrderError.ORDER_ERROR_MARGIN_CHECK_FAILED;
    case 15:
    case "ORDER_ERROR_MISSING_GENERAL_ACCOUNT":
      return OrderError.ORDER_ERROR_MISSING_GENERAL_ACCOUNT;
    case 16:
    case "ORDER_ERROR_INTERNAL_ERROR":
      return OrderError.ORDER_ERROR_INTERNAL_ERROR;
    case 17:
    case "ORDER_ERROR_INVALID_SIZE":
      return OrderError.ORDER_ERROR_INVALID_SIZE;
    case 18:
    case "ORDER_ERROR_INVALID_PERSISTENCE":
      return OrderError.ORDER_ERROR_INVALID_PERSISTENCE;
    case 19:
    case "ORDER_ERROR_INVALID_TYPE":
      return OrderError.ORDER_ERROR_INVALID_TYPE;
    case 20:
    case "ORDER_ERROR_SELF_TRADING":
      return OrderError.ORDER_ERROR_SELF_TRADING;
    case 21:
    case "ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES":
      return OrderError.ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES;
    case 22:
    case "ORDER_ERROR_INCORRECT_MARKET_TYPE":
      return OrderError.ORDER_ERROR_INCORRECT_MARKET_TYPE;
    case 23:
    case "ORDER_ERROR_INVALID_TIME_IN_FORCE":
      return OrderError.ORDER_ERROR_INVALID_TIME_IN_FORCE;
    case 24:
    case "ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION":
      return OrderError.ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION;
    case 25:
    case "ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING":
      return OrderError.ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING;
    case 26:
    case "ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT":
      return OrderError.ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT;
    case 27:
    case "ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT":
      return OrderError.ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT;
    case 28:
    case "ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT":
      return OrderError.ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT;
    case 29:
    case "ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC":
      return OrderError.ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC;
    case 30:
    case "ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN":
      return OrderError.ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN;
    case 31:
    case "ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN":
      return OrderError.ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN;
    case 32:
    case "ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION":
      return OrderError.ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION;
    case 33:
    case "ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION":
      return OrderError.ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION;
    case 34:
    case "ORDER_ERROR_MUST_BE_LIMIT_ORDER":
      return OrderError.ORDER_ERROR_MUST_BE_LIMIT_ORDER;
    case 35:
    case "ORDER_ERROR_MUST_BE_GTT_OR_GTC":
      return OrderError.ORDER_ERROR_MUST_BE_GTT_OR_GTC;
    case 36:
    case "ORDER_ERROR_WITHOUT_REFERENCE_PRICE":
      return OrderError.ORDER_ERROR_WITHOUT_REFERENCE_PRICE;
    case 37:
    case "ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE":
      return OrderError.ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE;
    case 40:
    case "ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO":
      return OrderError.ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO;
    case 41:
    case "ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE":
      return OrderError.ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE;
    case 42:
    case "ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO":
      return OrderError.ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO;
    case 43:
    case "ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE":
      return OrderError.ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE;
    case 44:
    case "ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER":
      return OrderError.ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER;
    case 45:
    case "ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER":
      return OrderError.ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER;
    case 46:
    case "ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER":
      return OrderError.ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER;
    case 47:
    case "ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS":
      return OrderError.ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderError.UNRECOGNIZED;
  }
}

export function orderErrorToJSON(object: OrderError): string {
  switch (object) {
    case OrderError.ORDER_ERROR_UNSPECIFIED:
      return "ORDER_ERROR_UNSPECIFIED";
    case OrderError.ORDER_ERROR_INVALID_MARKET_ID:
      return "ORDER_ERROR_INVALID_MARKET_ID";
    case OrderError.ORDER_ERROR_INVALID_ORDER_ID:
      return "ORDER_ERROR_INVALID_ORDER_ID";
    case OrderError.ORDER_ERROR_OUT_OF_SEQUENCE:
      return "ORDER_ERROR_OUT_OF_SEQUENCE";
    case OrderError.ORDER_ERROR_INVALID_REMAINING_SIZE:
      return "ORDER_ERROR_INVALID_REMAINING_SIZE";
    case OrderError.ORDER_ERROR_TIME_FAILURE:
      return "ORDER_ERROR_TIME_FAILURE";
    case OrderError.ORDER_ERROR_REMOVAL_FAILURE:
      return "ORDER_ERROR_REMOVAL_FAILURE";
    case OrderError.ORDER_ERROR_INVALID_EXPIRATION_DATETIME:
      return "ORDER_ERROR_INVALID_EXPIRATION_DATETIME";
    case OrderError.ORDER_ERROR_INVALID_ORDER_REFERENCE:
      return "ORDER_ERROR_INVALID_ORDER_REFERENCE";
    case OrderError.ORDER_ERROR_EDIT_NOT_ALLOWED:
      return "ORDER_ERROR_EDIT_NOT_ALLOWED";
    case OrderError.ORDER_ERROR_AMEND_FAILURE:
      return "ORDER_ERROR_AMEND_FAILURE";
    case OrderError.ORDER_ERROR_NOT_FOUND:
      return "ORDER_ERROR_NOT_FOUND";
    case OrderError.ORDER_ERROR_INVALID_PARTY_ID:
      return "ORDER_ERROR_INVALID_PARTY_ID";
    case OrderError.ORDER_ERROR_MARKET_CLOSED:
      return "ORDER_ERROR_MARKET_CLOSED";
    case OrderError.ORDER_ERROR_MARGIN_CHECK_FAILED:
      return "ORDER_ERROR_MARGIN_CHECK_FAILED";
    case OrderError.ORDER_ERROR_MISSING_GENERAL_ACCOUNT:
      return "ORDER_ERROR_MISSING_GENERAL_ACCOUNT";
    case OrderError.ORDER_ERROR_INTERNAL_ERROR:
      return "ORDER_ERROR_INTERNAL_ERROR";
    case OrderError.ORDER_ERROR_INVALID_SIZE:
      return "ORDER_ERROR_INVALID_SIZE";
    case OrderError.ORDER_ERROR_INVALID_PERSISTENCE:
      return "ORDER_ERROR_INVALID_PERSISTENCE";
    case OrderError.ORDER_ERROR_INVALID_TYPE:
      return "ORDER_ERROR_INVALID_TYPE";
    case OrderError.ORDER_ERROR_SELF_TRADING:
      return "ORDER_ERROR_SELF_TRADING";
    case OrderError.ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES:
      return "ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES";
    case OrderError.ORDER_ERROR_INCORRECT_MARKET_TYPE:
      return "ORDER_ERROR_INCORRECT_MARKET_TYPE";
    case OrderError.ORDER_ERROR_INVALID_TIME_IN_FORCE:
      return "ORDER_ERROR_INVALID_TIME_IN_FORCE";
    case OrderError.ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION:
      return "ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION";
    case OrderError.ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING:
      return "ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING";
    case OrderError.ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT:
      return "ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT";
    case OrderError.ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT:
      return "ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT";
    case OrderError.ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT:
      return "ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT";
    case OrderError.ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC:
      return "ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC";
    case OrderError.ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN:
      return "ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN";
    case OrderError.ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN:
      return "ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN";
    case OrderError.ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION:
      return "ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION";
    case OrderError.ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION:
      return "ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION";
    case OrderError.ORDER_ERROR_MUST_BE_LIMIT_ORDER:
      return "ORDER_ERROR_MUST_BE_LIMIT_ORDER";
    case OrderError.ORDER_ERROR_MUST_BE_GTT_OR_GTC:
      return "ORDER_ERROR_MUST_BE_GTT_OR_GTC";
    case OrderError.ORDER_ERROR_WITHOUT_REFERENCE_PRICE:
      return "ORDER_ERROR_WITHOUT_REFERENCE_PRICE";
    case OrderError.ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE:
      return "ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE";
    case OrderError.ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO:
      return "ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO";
    case OrderError.ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE:
      return "ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE";
    case OrderError.ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO:
      return "ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO";
    case OrderError.ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE:
      return "ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE";
    case OrderError.ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER:
      return "ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER";
    case OrderError.ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER:
      return "ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER";
    case OrderError.ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER:
      return "ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER";
    case OrderError.ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS:
      return "ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS";
    default:
      return "UNKNOWN";
  }
}

/** The Vega blockchain status as reported by the node the caller is connected to */
export enum ChainStatus {
  /** CHAIN_STATUS_UNSPECIFIED - Default value, always invalid */
  CHAIN_STATUS_UNSPECIFIED = 0,
  /** CHAIN_STATUS_DISCONNECTED - Blockchain is disconnected */
  CHAIN_STATUS_DISCONNECTED = 1,
  /** CHAIN_STATUS_REPLAYING - Blockchain is replaying historic transactions */
  CHAIN_STATUS_REPLAYING = 2,
  /** CHAIN_STATUS_CONNECTED - Blockchain is connected and receiving transactions */
  CHAIN_STATUS_CONNECTED = 3,
  UNRECOGNIZED = -1,
}

export function chainStatusFromJSON(object: any): ChainStatus {
  switch (object) {
    case 0:
    case "CHAIN_STATUS_UNSPECIFIED":
      return ChainStatus.CHAIN_STATUS_UNSPECIFIED;
    case 1:
    case "CHAIN_STATUS_DISCONNECTED":
      return ChainStatus.CHAIN_STATUS_DISCONNECTED;
    case 2:
    case "CHAIN_STATUS_REPLAYING":
      return ChainStatus.CHAIN_STATUS_REPLAYING;
    case 3:
    case "CHAIN_STATUS_CONNECTED":
      return ChainStatus.CHAIN_STATUS_CONNECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChainStatus.UNRECOGNIZED;
  }
}

export function chainStatusToJSON(object: ChainStatus): string {
  switch (object) {
    case ChainStatus.CHAIN_STATUS_UNSPECIFIED:
      return "CHAIN_STATUS_UNSPECIFIED";
    case ChainStatus.CHAIN_STATUS_DISCONNECTED:
      return "CHAIN_STATUS_DISCONNECTED";
    case ChainStatus.CHAIN_STATUS_REPLAYING:
      return "CHAIN_STATUS_REPLAYING";
    case ChainStatus.CHAIN_STATUS_CONNECTED:
      return "CHAIN_STATUS_CONNECTED";
    default:
      return "UNKNOWN";
  }
}

/** Various collateral/account types as used by Vega */
export enum AccountType {
  /** ACCOUNT_TYPE_UNSPECIFIED - Default value */
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  /** ACCOUNT_TYPE_INSURANCE - Insurance pool accounts contain insurance pool funds for a market */
  ACCOUNT_TYPE_INSURANCE = 1,
  /** ACCOUNT_TYPE_SETTLEMENT - Settlement accounts exist only during settlement or mark-to-market */
  ACCOUNT_TYPE_SETTLEMENT = 2,
  /**
   * ACCOUNT_TYPE_MARGIN - Margin accounts contain margin funds for a party and each party will
   * have multiple margin accounts, one for each market they have traded in
   *
   * Margin account funds will alter as margin requirements on positions change
   */
  ACCOUNT_TYPE_MARGIN = 3,
  /**
   * ACCOUNT_TYPE_GENERAL - General accounts contains general funds for a party. A party will
   * have multiple general accounts, one for each asset they want
   * to trade with
   *
   * General accounts are where funds are initially deposited or withdrawn from,
   * it is also the account where funds are taken to fulfil fees and initial margin requirements
   */
  ACCOUNT_TYPE_GENERAL = 4,
  /** ACCOUNT_TYPE_FEES_INFRASTRUCTURE - Infrastructure accounts contain fees earned by providing infrastructure on Vega */
  ACCOUNT_TYPE_FEES_INFRASTRUCTURE = 5,
  /** ACCOUNT_TYPE_FEES_LIQUIDITY - Liquidity accounts contain fees earned by providing liquidity on Vega markets */
  ACCOUNT_TYPE_FEES_LIQUIDITY = 6,
  /**
   * ACCOUNT_TYPE_FEES_MAKER - This account is created to hold fees earned by placing orders that sit on the book
   * and are then matched with an incoming order to create a trade - These fees reward parties
   * who provide the best priced liquidity that actually allows trading to take place
   */
  ACCOUNT_TYPE_FEES_MAKER = 7,
  /** ACCOUNT_TYPE_LOCK_WITHDRAW - This account is created to lock funds to be withdrawn by parties */
  ACCOUNT_TYPE_LOCK_WITHDRAW = 8,
  /** ACCOUNT_TYPE_BOND - This account is created to maintain liquidity providers funds commitments */
  ACCOUNT_TYPE_BOND = 9,
  /** ACCOUNT_TYPE_EXTERNAL - External account represents an external source (deposit/withdrawal) */
  ACCOUNT_TYPE_EXTERNAL = 10,
  /** ACCOUNT_TYPE_GLOBAL_INSURANCE - Global insurance account for the asset */
  ACCOUNT_TYPE_GLOBAL_INSURANCE = 11,
  /** ACCOUNT_TYPE_GLOBAL_REWARD - Global reward account for the asset */
  ACCOUNT_TYPE_GLOBAL_REWARD = 12,
  /** ACCOUNT_TYPE_PENDING_TRANSFERS - Per asset account used to store pending transfers (if any) */
  ACCOUNT_TYPE_PENDING_TRANSFERS = 13,
  /** ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES - Per asset reward account for fees paid by takers */
  ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES = 14,
  /** ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES - Per asset reward account for fees received by makers */
  ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES = 15,
  /** ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES - Per asset reward account for fees received by liquidity providers */
  ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES = 16,
  /** ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS - Per asset reward account for market proposers when the market goes above some trading threshold */
  ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS = 17,
  UNRECOGNIZED = -1,
}

export function accountTypeFromJSON(object: any): AccountType {
  switch (object) {
    case 0:
    case "ACCOUNT_TYPE_UNSPECIFIED":
      return AccountType.ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case "ACCOUNT_TYPE_INSURANCE":
      return AccountType.ACCOUNT_TYPE_INSURANCE;
    case 2:
    case "ACCOUNT_TYPE_SETTLEMENT":
      return AccountType.ACCOUNT_TYPE_SETTLEMENT;
    case 3:
    case "ACCOUNT_TYPE_MARGIN":
      return AccountType.ACCOUNT_TYPE_MARGIN;
    case 4:
    case "ACCOUNT_TYPE_GENERAL":
      return AccountType.ACCOUNT_TYPE_GENERAL;
    case 5:
    case "ACCOUNT_TYPE_FEES_INFRASTRUCTURE":
      return AccountType.ACCOUNT_TYPE_FEES_INFRASTRUCTURE;
    case 6:
    case "ACCOUNT_TYPE_FEES_LIQUIDITY":
      return AccountType.ACCOUNT_TYPE_FEES_LIQUIDITY;
    case 7:
    case "ACCOUNT_TYPE_FEES_MAKER":
      return AccountType.ACCOUNT_TYPE_FEES_MAKER;
    case 8:
    case "ACCOUNT_TYPE_LOCK_WITHDRAW":
      return AccountType.ACCOUNT_TYPE_LOCK_WITHDRAW;
    case 9:
    case "ACCOUNT_TYPE_BOND":
      return AccountType.ACCOUNT_TYPE_BOND;
    case 10:
    case "ACCOUNT_TYPE_EXTERNAL":
      return AccountType.ACCOUNT_TYPE_EXTERNAL;
    case 11:
    case "ACCOUNT_TYPE_GLOBAL_INSURANCE":
      return AccountType.ACCOUNT_TYPE_GLOBAL_INSURANCE;
    case 12:
    case "ACCOUNT_TYPE_GLOBAL_REWARD":
      return AccountType.ACCOUNT_TYPE_GLOBAL_REWARD;
    case 13:
    case "ACCOUNT_TYPE_PENDING_TRANSFERS":
      return AccountType.ACCOUNT_TYPE_PENDING_TRANSFERS;
    case 14:
    case "ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES":
      return AccountType.ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES;
    case 15:
    case "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES":
      return AccountType.ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES;
    case 16:
    case "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES":
      return AccountType.ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES;
    case 17:
    case "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS":
      return AccountType.ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountType.UNRECOGNIZED;
  }
}

export function accountTypeToJSON(object: AccountType): string {
  switch (object) {
    case AccountType.ACCOUNT_TYPE_UNSPECIFIED:
      return "ACCOUNT_TYPE_UNSPECIFIED";
    case AccountType.ACCOUNT_TYPE_INSURANCE:
      return "ACCOUNT_TYPE_INSURANCE";
    case AccountType.ACCOUNT_TYPE_SETTLEMENT:
      return "ACCOUNT_TYPE_SETTLEMENT";
    case AccountType.ACCOUNT_TYPE_MARGIN:
      return "ACCOUNT_TYPE_MARGIN";
    case AccountType.ACCOUNT_TYPE_GENERAL:
      return "ACCOUNT_TYPE_GENERAL";
    case AccountType.ACCOUNT_TYPE_FEES_INFRASTRUCTURE:
      return "ACCOUNT_TYPE_FEES_INFRASTRUCTURE";
    case AccountType.ACCOUNT_TYPE_FEES_LIQUIDITY:
      return "ACCOUNT_TYPE_FEES_LIQUIDITY";
    case AccountType.ACCOUNT_TYPE_FEES_MAKER:
      return "ACCOUNT_TYPE_FEES_MAKER";
    case AccountType.ACCOUNT_TYPE_LOCK_WITHDRAW:
      return "ACCOUNT_TYPE_LOCK_WITHDRAW";
    case AccountType.ACCOUNT_TYPE_BOND:
      return "ACCOUNT_TYPE_BOND";
    case AccountType.ACCOUNT_TYPE_EXTERNAL:
      return "ACCOUNT_TYPE_EXTERNAL";
    case AccountType.ACCOUNT_TYPE_GLOBAL_INSURANCE:
      return "ACCOUNT_TYPE_GLOBAL_INSURANCE";
    case AccountType.ACCOUNT_TYPE_GLOBAL_REWARD:
      return "ACCOUNT_TYPE_GLOBAL_REWARD";
    case AccountType.ACCOUNT_TYPE_PENDING_TRANSFERS:
      return "ACCOUNT_TYPE_PENDING_TRANSFERS";
    case AccountType.ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES:
      return "ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES";
    case AccountType.ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES:
      return "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES";
    case AccountType.ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES:
      return "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES";
    case AccountType.ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS:
      return "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS";
    default:
      return "UNKNOWN";
  }
}

/** Transfers can occur between parties on Vega, these are the types that indicate why a transfer took place */
export enum TransferType {
  /** TRANSFER_TYPE_UNSPECIFIED - Default value, always invalid */
  TRANSFER_TYPE_UNSPECIFIED = 0,
  /** TRANSFER_TYPE_LOSS - Loss */
  TRANSFER_TYPE_LOSS = 1,
  /** TRANSFER_TYPE_WIN - Win */
  TRANSFER_TYPE_WIN = 2,
  /** TRANSFER_TYPE_CLOSE - Close */
  TRANSFER_TYPE_CLOSE = 3,
  /** TRANSFER_TYPE_MTM_LOSS - Mark to market loss */
  TRANSFER_TYPE_MTM_LOSS = 4,
  /** TRANSFER_TYPE_MTM_WIN - Mark to market win */
  TRANSFER_TYPE_MTM_WIN = 5,
  /** TRANSFER_TYPE_MARGIN_LOW - Margin too low */
  TRANSFER_TYPE_MARGIN_LOW = 6,
  /** TRANSFER_TYPE_MARGIN_HIGH - Margin too high */
  TRANSFER_TYPE_MARGIN_HIGH = 7,
  /** TRANSFER_TYPE_MARGIN_CONFISCATED - Margin was confiscated */
  TRANSFER_TYPE_MARGIN_CONFISCATED = 8,
  /** TRANSFER_TYPE_MAKER_FEE_PAY - Pay maker fee */
  TRANSFER_TYPE_MAKER_FEE_PAY = 9,
  /** TRANSFER_TYPE_MAKER_FEE_RECEIVE - Receive maker fee */
  TRANSFER_TYPE_MAKER_FEE_RECEIVE = 10,
  /** TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY - Pay infrastructure fee */
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY = 11,
  /** TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE - Receive infrastructure fee */
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE = 12,
  /** TRANSFER_TYPE_LIQUIDITY_FEE_PAY - Pay liquidity fee */
  TRANSFER_TYPE_LIQUIDITY_FEE_PAY = 13,
  /** TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE - Receive liquidity fee */
  TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE = 14,
  /** TRANSFER_TYPE_BOND_LOW - Bond too low */
  TRANSFER_TYPE_BOND_LOW = 15,
  /** TRANSFER_TYPE_BOND_HIGH - Bond too high */
  TRANSFER_TYPE_BOND_HIGH = 16,
  /** TRANSFER_TYPE_WITHDRAW_LOCK - Lock amount for withdraw */
  TRANSFER_TYPE_WITHDRAW_LOCK = 17,
  /** TRANSFER_TYPE_WITHDRAW - Actual withdraw from system */
  TRANSFER_TYPE_WITHDRAW = 18,
  /** TRANSFER_TYPE_DEPOSIT - Deposit funds */
  TRANSFER_TYPE_DEPOSIT = 19,
  /** TRANSFER_TYPE_BOND_SLASHING - Bond slashing */
  TRANSFER_TYPE_BOND_SLASHING = 20,
  /** TRANSFER_TYPE_STAKE_REWARD - Stake reward */
  TRANSFER_TYPE_STAKE_REWARD = 21,
  /** TRANSFER_TYPE_TRANSFER_FUNDS_SEND - Transfer funds */
  TRANSFER_TYPE_TRANSFER_FUNDS_SEND = 22,
  /** TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE - Transfer funds */
  TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE = 23,
  UNRECOGNIZED = -1,
}

export function transferTypeFromJSON(object: any): TransferType {
  switch (object) {
    case 0:
    case "TRANSFER_TYPE_UNSPECIFIED":
      return TransferType.TRANSFER_TYPE_UNSPECIFIED;
    case 1:
    case "TRANSFER_TYPE_LOSS":
      return TransferType.TRANSFER_TYPE_LOSS;
    case 2:
    case "TRANSFER_TYPE_WIN":
      return TransferType.TRANSFER_TYPE_WIN;
    case 3:
    case "TRANSFER_TYPE_CLOSE":
      return TransferType.TRANSFER_TYPE_CLOSE;
    case 4:
    case "TRANSFER_TYPE_MTM_LOSS":
      return TransferType.TRANSFER_TYPE_MTM_LOSS;
    case 5:
    case "TRANSFER_TYPE_MTM_WIN":
      return TransferType.TRANSFER_TYPE_MTM_WIN;
    case 6:
    case "TRANSFER_TYPE_MARGIN_LOW":
      return TransferType.TRANSFER_TYPE_MARGIN_LOW;
    case 7:
    case "TRANSFER_TYPE_MARGIN_HIGH":
      return TransferType.TRANSFER_TYPE_MARGIN_HIGH;
    case 8:
    case "TRANSFER_TYPE_MARGIN_CONFISCATED":
      return TransferType.TRANSFER_TYPE_MARGIN_CONFISCATED;
    case 9:
    case "TRANSFER_TYPE_MAKER_FEE_PAY":
      return TransferType.TRANSFER_TYPE_MAKER_FEE_PAY;
    case 10:
    case "TRANSFER_TYPE_MAKER_FEE_RECEIVE":
      return TransferType.TRANSFER_TYPE_MAKER_FEE_RECEIVE;
    case 11:
    case "TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY":
      return TransferType.TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY;
    case 12:
    case "TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE":
      return TransferType.TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE;
    case 13:
    case "TRANSFER_TYPE_LIQUIDITY_FEE_PAY":
      return TransferType.TRANSFER_TYPE_LIQUIDITY_FEE_PAY;
    case 14:
    case "TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE":
      return TransferType.TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE;
    case 15:
    case "TRANSFER_TYPE_BOND_LOW":
      return TransferType.TRANSFER_TYPE_BOND_LOW;
    case 16:
    case "TRANSFER_TYPE_BOND_HIGH":
      return TransferType.TRANSFER_TYPE_BOND_HIGH;
    case 17:
    case "TRANSFER_TYPE_WITHDRAW_LOCK":
      return TransferType.TRANSFER_TYPE_WITHDRAW_LOCK;
    case 18:
    case "TRANSFER_TYPE_WITHDRAW":
      return TransferType.TRANSFER_TYPE_WITHDRAW;
    case 19:
    case "TRANSFER_TYPE_DEPOSIT":
      return TransferType.TRANSFER_TYPE_DEPOSIT;
    case 20:
    case "TRANSFER_TYPE_BOND_SLASHING":
      return TransferType.TRANSFER_TYPE_BOND_SLASHING;
    case 21:
    case "TRANSFER_TYPE_STAKE_REWARD":
      return TransferType.TRANSFER_TYPE_STAKE_REWARD;
    case 22:
    case "TRANSFER_TYPE_TRANSFER_FUNDS_SEND":
      return TransferType.TRANSFER_TYPE_TRANSFER_FUNDS_SEND;
    case 23:
    case "TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE":
      return TransferType.TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferType.UNRECOGNIZED;
  }
}

export function transferTypeToJSON(object: TransferType): string {
  switch (object) {
    case TransferType.TRANSFER_TYPE_UNSPECIFIED:
      return "TRANSFER_TYPE_UNSPECIFIED";
    case TransferType.TRANSFER_TYPE_LOSS:
      return "TRANSFER_TYPE_LOSS";
    case TransferType.TRANSFER_TYPE_WIN:
      return "TRANSFER_TYPE_WIN";
    case TransferType.TRANSFER_TYPE_CLOSE:
      return "TRANSFER_TYPE_CLOSE";
    case TransferType.TRANSFER_TYPE_MTM_LOSS:
      return "TRANSFER_TYPE_MTM_LOSS";
    case TransferType.TRANSFER_TYPE_MTM_WIN:
      return "TRANSFER_TYPE_MTM_WIN";
    case TransferType.TRANSFER_TYPE_MARGIN_LOW:
      return "TRANSFER_TYPE_MARGIN_LOW";
    case TransferType.TRANSFER_TYPE_MARGIN_HIGH:
      return "TRANSFER_TYPE_MARGIN_HIGH";
    case TransferType.TRANSFER_TYPE_MARGIN_CONFISCATED:
      return "TRANSFER_TYPE_MARGIN_CONFISCATED";
    case TransferType.TRANSFER_TYPE_MAKER_FEE_PAY:
      return "TRANSFER_TYPE_MAKER_FEE_PAY";
    case TransferType.TRANSFER_TYPE_MAKER_FEE_RECEIVE:
      return "TRANSFER_TYPE_MAKER_FEE_RECEIVE";
    case TransferType.TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY:
      return "TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY";
    case TransferType.TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE:
      return "TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE";
    case TransferType.TRANSFER_TYPE_LIQUIDITY_FEE_PAY:
      return "TRANSFER_TYPE_LIQUIDITY_FEE_PAY";
    case TransferType.TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE:
      return "TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE";
    case TransferType.TRANSFER_TYPE_BOND_LOW:
      return "TRANSFER_TYPE_BOND_LOW";
    case TransferType.TRANSFER_TYPE_BOND_HIGH:
      return "TRANSFER_TYPE_BOND_HIGH";
    case TransferType.TRANSFER_TYPE_WITHDRAW_LOCK:
      return "TRANSFER_TYPE_WITHDRAW_LOCK";
    case TransferType.TRANSFER_TYPE_WITHDRAW:
      return "TRANSFER_TYPE_WITHDRAW";
    case TransferType.TRANSFER_TYPE_DEPOSIT:
      return "TRANSFER_TYPE_DEPOSIT";
    case TransferType.TRANSFER_TYPE_BOND_SLASHING:
      return "TRANSFER_TYPE_BOND_SLASHING";
    case TransferType.TRANSFER_TYPE_STAKE_REWARD:
      return "TRANSFER_TYPE_STAKE_REWARD";
    case TransferType.TRANSFER_TYPE_TRANSFER_FUNDS_SEND:
      return "TRANSFER_TYPE_TRANSFER_FUNDS_SEND";
    case TransferType.TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE:
      return "TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE";
    default:
      return "UNKNOWN";
  }
}

/** Node status type */
export enum NodeStatus {
  NODE_STATUS_UNSPECIFIED = 0,
  /** NODE_STATUS_VALIDATOR - The node is validating */
  NODE_STATUS_VALIDATOR = 1,
  /** NODE_STATUS_NON_VALIDATOR - The node is non-validating */
  NODE_STATUS_NON_VALIDATOR = 2,
  UNRECOGNIZED = -1,
}

export function nodeStatusFromJSON(object: any): NodeStatus {
  switch (object) {
    case 0:
    case "NODE_STATUS_UNSPECIFIED":
      return NodeStatus.NODE_STATUS_UNSPECIFIED;
    case 1:
    case "NODE_STATUS_VALIDATOR":
      return NodeStatus.NODE_STATUS_VALIDATOR;
    case 2:
    case "NODE_STATUS_NON_VALIDATOR":
      return NodeStatus.NODE_STATUS_NON_VALIDATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NodeStatus.UNRECOGNIZED;
  }
}

export function nodeStatusToJSON(object: NodeStatus): string {
  switch (object) {
    case NodeStatus.NODE_STATUS_UNSPECIFIED:
      return "NODE_STATUS_UNSPECIFIED";
    case NodeStatus.NODE_STATUS_VALIDATOR:
      return "NODE_STATUS_VALIDATOR";
    case NodeStatus.NODE_STATUS_NON_VALIDATOR:
      return "NODE_STATUS_NON_VALIDATOR";
    default:
      return "UNKNOWN";
  }
}

/** What epoch action has occurred */
export enum EpochAction {
  EPOCH_ACTION_UNSPECIFIED = 0,
  /** EPOCH_ACTION_START - The epoch update is for a new epoch */
  EPOCH_ACTION_START = 1,
  /** EPOCH_ACTION_END - The epoch update is for the end of an epoch */
  EPOCH_ACTION_END = 2,
  UNRECOGNIZED = -1,
}

export function epochActionFromJSON(object: any): EpochAction {
  switch (object) {
    case 0:
    case "EPOCH_ACTION_UNSPECIFIED":
      return EpochAction.EPOCH_ACTION_UNSPECIFIED;
    case 1:
    case "EPOCH_ACTION_START":
      return EpochAction.EPOCH_ACTION_START;
    case 2:
    case "EPOCH_ACTION_END":
      return EpochAction.EPOCH_ACTION_END;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EpochAction.UNRECOGNIZED;
  }
}

export function epochActionToJSON(object: EpochAction): string {
  switch (object) {
    case EpochAction.EPOCH_ACTION_UNSPECIFIED:
      return "EPOCH_ACTION_UNSPECIFIED";
    case EpochAction.EPOCH_ACTION_START:
      return "EPOCH_ACTION_START";
    case EpochAction.EPOCH_ACTION_END:
      return "EPOCH_ACTION_END";
    default:
      return "UNKNOWN";
  }
}

/** Validation status of the node */
export enum ValidatorNodeStatus {
  VALIDATOR_NODE_STATUS_UNSPECIFIED = 0,
  /** VALIDATOR_NODE_STATUS_TENDERMINT - The node is a tendermint validator */
  VALIDATOR_NODE_STATUS_TENDERMINT = 1,
  /** VALIDATOR_NODE_STATUS_ERSATZ - The node is an ersatz validator */
  VALIDATOR_NODE_STATUS_ERSATZ = 2,
  /** VALIDATOR_NODE_STATUS_PENDING - The node is a pending validator */
  VALIDATOR_NODE_STATUS_PENDING = 3,
  UNRECOGNIZED = -1,
}

export function validatorNodeStatusFromJSON(object: any): ValidatorNodeStatus {
  switch (object) {
    case 0:
    case "VALIDATOR_NODE_STATUS_UNSPECIFIED":
      return ValidatorNodeStatus.VALIDATOR_NODE_STATUS_UNSPECIFIED;
    case 1:
    case "VALIDATOR_NODE_STATUS_TENDERMINT":
      return ValidatorNodeStatus.VALIDATOR_NODE_STATUS_TENDERMINT;
    case 2:
    case "VALIDATOR_NODE_STATUS_ERSATZ":
      return ValidatorNodeStatus.VALIDATOR_NODE_STATUS_ERSATZ;
    case 3:
    case "VALIDATOR_NODE_STATUS_PENDING":
      return ValidatorNodeStatus.VALIDATOR_NODE_STATUS_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidatorNodeStatus.UNRECOGNIZED;
  }
}

export function validatorNodeStatusToJSON(object: ValidatorNodeStatus): string {
  switch (object) {
    case ValidatorNodeStatus.VALIDATOR_NODE_STATUS_UNSPECIFIED:
      return "VALIDATOR_NODE_STATUS_UNSPECIFIED";
    case ValidatorNodeStatus.VALIDATOR_NODE_STATUS_TENDERMINT:
      return "VALIDATOR_NODE_STATUS_TENDERMINT";
    case ValidatorNodeStatus.VALIDATOR_NODE_STATUS_ERSATZ:
      return "VALIDATOR_NODE_STATUS_ERSATZ";
    case ValidatorNodeStatus.VALIDATOR_NODE_STATUS_PENDING:
      return "VALIDATOR_NODE_STATUS_PENDING";
    default:
      return "UNKNOWN";
  }
}

export interface Price {
  /**
   * Price value, given as an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  value: string;
}

/**
 * A timestamp in nanoseconds since epoch
 * See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
 */
export interface Timestamp {
  /** Timestamp value */
  value: string;
}

/** A party represents an entity who wishes to trade on or query a Vega network */
export interface Party {
  /** A unique identifier for the party, typically represented by a public key */
  id: string;
}

/** Risk factors are used to calculate the current risk associated with orders trading on a given market */
export interface RiskFactor {
  /** Market ID that relates to this risk factor */
  market: string;
  /** Short Risk factor value */
  short: string;
  /** Long Risk factor value */
  long: string;
}

/**
 * Pegged orders are limit orders where the price is specified in the form REFERENCE +/- OFFSET
 * They can be used for any limit order that is valid during continuous trading
 */
export interface PeggedOrder {
  /** Which price point are we linked to */
  reference: PeggedReference;
  /** Offset from the price reference */
  offset: string;
}

/** An order can be submitted, amended and cancelled on Vega in an attempt to make trades with other parties */
export interface Order {
  /** Unique identifier for the order (set by the system after consensus) */
  id: string;
  /** Market identifier for the order */
  marketId: string;
  /** Party identifier for the order */
  partyId: string;
  /** Side for the order, e.g. SIDE_BUY or SIDE_SELL - See [`Side`](#vega.Side) */
  side: Side;
  /**
   * Price for the order, the price is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  price: string;
  /** Size for the order, for example, in a futures market the size equals the number of contracts */
  size: string;
  /** Size remaining, when this reaches 0 then the order is fully filled and status becomes STATUS_FILLED */
  remaining: string;
  /**
   * Time in force indicates how long an order will remain active before it is executed or expires.
   * - See [`Order.TimeInForce`](#vega.Order.TimeInForce)
   */
  timeInForce: Order_TimeInForce;
  /** Type for the order - See [`Order.Type`](#vega.Order.Type) */
  type: Order_Type;
  /**
   * Timestamp for when the order was created at, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  createdAt: string;
  /**
   * The current status for the order. See [`Order.Status`](#vega.Order.Status)
   * - For detail on `STATUS_REJECTED` please check the [`OrderError`](#vega.OrderError) value given in the `reason` field
   */
  status: Order_Status;
  /**
   * Timestamp for when the order will expire, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`, valid only for [`Order.TimeInForce`](#vega.Order.TimeInForce)`.TIME_IN_FORCE_GTT`
   */
  expiresAt: string;
  /**
   * Reference given for the order, this is typically used to retrieve an order submitted through consensus
   * - Currently set internally by the node to return a unique reference identifier for the order submission
   */
  reference: string;
  /**
   * If the Order `status` is `STATUS_REJECTED` then an [`OrderError`](#vega.OrderError) reason will be specified
   * - The default for this field is `ORDER_ERROR_NONE` which signifies that there were no errors
   */
  reason: OrderError;
  /**
   * Timestamp for when the Order was last updated, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  updatedAt: string;
  /** The version for the order, initial value is version 1 and is incremented after each successful amend */
  version: string;
  /**
   * Batch identifier for the order, used internally for orders submitted during auctions
   * to keep track of the auction batch this order falls under (required for fees calculation)
   */
  batchId: string;
  /** Pegged order details, used only if the order represents a pegged order. */
  peggedOrder: PeggedOrder | undefined;
  /** Is this order created as part of a liquidity provision, will be empty if not. */
  liquidityProvisionId: string;
}

/**
 * Time In Force for an order
 * See [What order types are available to trade on Vega?](https://docs.testnet.vega.xyz/docs/trading-questions/#what-order-types-are-available-to-trade-on-vega) for more detail
 */
export enum Order_TimeInForce {
  /** TIME_IN_FORCE_UNSPECIFIED - Default value for TimeInForce, can be valid for an amend */
  TIME_IN_FORCE_UNSPECIFIED = 0,
  /** TIME_IN_FORCE_GTC - Good until cancelled */
  TIME_IN_FORCE_GTC = 1,
  /** TIME_IN_FORCE_GTT - Good until specified time */
  TIME_IN_FORCE_GTT = 2,
  /** TIME_IN_FORCE_IOC - Immediate or cancel */
  TIME_IN_FORCE_IOC = 3,
  /** TIME_IN_FORCE_FOK - Fill or kill */
  TIME_IN_FORCE_FOK = 4,
  /** TIME_IN_FORCE_GFA - Good for auction */
  TIME_IN_FORCE_GFA = 5,
  /** TIME_IN_FORCE_GFN - Good for normal */
  TIME_IN_FORCE_GFN = 6,
  UNRECOGNIZED = -1,
}

export function order_TimeInForceFromJSON(object: any): Order_TimeInForce {
  switch (object) {
    case 0:
    case "TIME_IN_FORCE_UNSPECIFIED":
      return Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
    case 1:
    case "TIME_IN_FORCE_GTC":
      return Order_TimeInForce.TIME_IN_FORCE_GTC;
    case 2:
    case "TIME_IN_FORCE_GTT":
      return Order_TimeInForce.TIME_IN_FORCE_GTT;
    case 3:
    case "TIME_IN_FORCE_IOC":
      return Order_TimeInForce.TIME_IN_FORCE_IOC;
    case 4:
    case "TIME_IN_FORCE_FOK":
      return Order_TimeInForce.TIME_IN_FORCE_FOK;
    case 5:
    case "TIME_IN_FORCE_GFA":
      return Order_TimeInForce.TIME_IN_FORCE_GFA;
    case 6:
    case "TIME_IN_FORCE_GFN":
      return Order_TimeInForce.TIME_IN_FORCE_GFN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_TimeInForce.UNRECOGNIZED;
  }
}

export function order_TimeInForceToJSON(object: Order_TimeInForce): string {
  switch (object) {
    case Order_TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
      return "TIME_IN_FORCE_UNSPECIFIED";
    case Order_TimeInForce.TIME_IN_FORCE_GTC:
      return "TIME_IN_FORCE_GTC";
    case Order_TimeInForce.TIME_IN_FORCE_GTT:
      return "TIME_IN_FORCE_GTT";
    case Order_TimeInForce.TIME_IN_FORCE_IOC:
      return "TIME_IN_FORCE_IOC";
    case Order_TimeInForce.TIME_IN_FORCE_FOK:
      return "TIME_IN_FORCE_FOK";
    case Order_TimeInForce.TIME_IN_FORCE_GFA:
      return "TIME_IN_FORCE_GFA";
    case Order_TimeInForce.TIME_IN_FORCE_GFN:
      return "TIME_IN_FORCE_GFN";
    default:
      return "UNKNOWN";
  }
}

/** Type values for an order */
export enum Order_Type {
  /** TYPE_UNSPECIFIED - Default value, always invalid */
  TYPE_UNSPECIFIED = 0,
  /** TYPE_LIMIT - Used for Limit orders */
  TYPE_LIMIT = 1,
  /** TYPE_MARKET - Used for Market orders */
  TYPE_MARKET = 2,
  /** TYPE_NETWORK - Used for orders where the initiating party is the network (with distressed parties) */
  TYPE_NETWORK = 3,
  UNRECOGNIZED = -1,
}

export function order_TypeFromJSON(object: any): Order_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Order_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_LIMIT":
      return Order_Type.TYPE_LIMIT;
    case 2:
    case "TYPE_MARKET":
      return Order_Type.TYPE_MARKET;
    case 3:
    case "TYPE_NETWORK":
      return Order_Type.TYPE_NETWORK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_Type.UNRECOGNIZED;
  }
}

export function order_TypeToJSON(object: Order_Type): string {
  switch (object) {
    case Order_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Order_Type.TYPE_LIMIT:
      return "TYPE_LIMIT";
    case Order_Type.TYPE_MARKET:
      return "TYPE_MARKET";
    case Order_Type.TYPE_NETWORK:
      return "TYPE_NETWORK";
    default:
      return "UNKNOWN";
  }
}

/**
 * Status values for an order
 * See resulting status in [What order types are available to trade on Vega?](https://docs.testnet.vega.xyz/docs/trading-questions/#what-order-types-are-available-to-trade-on-vega) for more detail.
 */
export enum Order_Status {
  /** STATUS_UNSPECIFIED - Default value, always invalid */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_ACTIVE - Used for active unfilled or partially filled orders */
  STATUS_ACTIVE = 1,
  /** STATUS_EXPIRED - Used for expired GTT orders */
  STATUS_EXPIRED = 2,
  /** STATUS_CANCELLED - Used for orders cancelled by the party that created the order */
  STATUS_CANCELLED = 3,
  /** STATUS_STOPPED - Used for unfilled FOK or IOC orders, and for orders that were stopped by the network */
  STATUS_STOPPED = 4,
  /** STATUS_FILLED - Used for closed fully filled orders */
  STATUS_FILLED = 5,
  /** STATUS_REJECTED - Used for orders when not enough collateral was available to fill the margin requirements */
  STATUS_REJECTED = 6,
  /** STATUS_PARTIALLY_FILLED - Used for closed partially filled IOC orders */
  STATUS_PARTIALLY_FILLED = 7,
  /** STATUS_PARKED - Order has been removed from the order book and has been parked, this applies to pegged orders only */
  STATUS_PARKED = 8,
  UNRECOGNIZED = -1,
}

export function order_StatusFromJSON(object: any): Order_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Order_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_ACTIVE":
      return Order_Status.STATUS_ACTIVE;
    case 2:
    case "STATUS_EXPIRED":
      return Order_Status.STATUS_EXPIRED;
    case 3:
    case "STATUS_CANCELLED":
      return Order_Status.STATUS_CANCELLED;
    case 4:
    case "STATUS_STOPPED":
      return Order_Status.STATUS_STOPPED;
    case 5:
    case "STATUS_FILLED":
      return Order_Status.STATUS_FILLED;
    case 6:
    case "STATUS_REJECTED":
      return Order_Status.STATUS_REJECTED;
    case 7:
    case "STATUS_PARTIALLY_FILLED":
      return Order_Status.STATUS_PARTIALLY_FILLED;
    case 8:
    case "STATUS_PARKED":
      return Order_Status.STATUS_PARKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order_Status.UNRECOGNIZED;
  }
}

export function order_StatusToJSON(object: Order_Status): string {
  switch (object) {
    case Order_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Order_Status.STATUS_ACTIVE:
      return "STATUS_ACTIVE";
    case Order_Status.STATUS_EXPIRED:
      return "STATUS_EXPIRED";
    case Order_Status.STATUS_CANCELLED:
      return "STATUS_CANCELLED";
    case Order_Status.STATUS_STOPPED:
      return "STATUS_STOPPED";
    case Order_Status.STATUS_FILLED:
      return "STATUS_FILLED";
    case Order_Status.STATUS_REJECTED:
      return "STATUS_REJECTED";
    case Order_Status.STATUS_PARTIALLY_FILLED:
      return "STATUS_PARTIALLY_FILLED";
    case Order_Status.STATUS_PARKED:
      return "STATUS_PARKED";
    default:
      return "UNKNOWN";
  }
}

/** Used when cancelling an Order */
export interface OrderCancellationConfirmation {
  /** The order that was cancelled */
  order: Order | undefined;
}

/** Used when confirming an Order */
export interface OrderConfirmation {
  /** The order that was confirmed */
  order: Order | undefined;
  /** 0 or more trades that were emitted */
  trades: Trade[];
  /** 0 or more passive orders that were affected */
  passiveOrdersAffected: Order[];
}

/** AuctionIndicativeState is used to emit an event with the indicative price/volume per market during an auction */
export interface AuctionIndicativeState {
  /** The market identifier for which this state relates to */
  marketId: string;
  /** The Indicative Uncrossing Price is the price at which all trades would occur if we uncrossed the auction now */
  indicativePrice: string;
  /** The Indicative Uncrossing Volume is the volume available at the Indicative crossing price if we uncrossed the auction now */
  indicativeVolume: string;
  /** The timestamp at which the auction started */
  auctionStart: string;
  /** The timestamp at which the auction is meant to stop */
  auctionEnd: string;
}

/** A trade occurs when an aggressive order crosses one or more passive orders on the order book for a market on Vega */
export interface Trade {
  /** Unique identifier for the trade (generated by Vega) */
  id: string;
  /** Market identifier (the market that the trade occurred on) */
  marketId: string;
  /**
   * Price for the trade, the price is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  price: string;
  /** Size filled for the trade */
  size: string;
  /** Unique party identifier for the buyer */
  buyer: string;
  /** Unique party identifier for the seller */
  seller: string;
  /** Direction of the aggressive party e.g. SIDE_BUY or SIDE_SELL - See [`Side`](#vega.Side) */
  aggressor: Side;
  /** Identifier of the order from the buy side */
  buyOrder: string;
  /** Identifier of the order from the sell side */
  sellOrder: string;
  /**
   * Timestamp for when the trade occurred, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  timestamp: string;
  /** Type for the trade - See [`Trade.Type`](#vega.Trade.Type) */
  type: Trade_Type;
  /** Fee amount charged to the buyer party for the trade */
  buyerFee: Fee | undefined;
  /** Fee amount charged to the seller party for the trade */
  sellerFee: Fee | undefined;
  /** Auction batch number that the buy side order was placed in */
  buyerAuctionBatch: string;
  /** Auction batch number that the sell side order was placed in */
  sellerAuctionBatch: string;
}

/** Type values for a trade */
export enum Trade_Type {
  /** TYPE_UNSPECIFIED - Default value, always invalid */
  TYPE_UNSPECIFIED = 0,
  /** TYPE_DEFAULT - Normal trading between two parties */
  TYPE_DEFAULT = 1,
  /**
   * TYPE_NETWORK_CLOSE_OUT_GOOD - Trading initiated by the network with another party on the book,
   * which helps to zero-out the positions of one or more distressed parties
   */
  TYPE_NETWORK_CLOSE_OUT_GOOD = 2,
  /**
   * TYPE_NETWORK_CLOSE_OUT_BAD - Trading initiated by the network with another party off the book,
   * with a distressed party in order to zero-out the position of the party
   */
  TYPE_NETWORK_CLOSE_OUT_BAD = 3,
  UNRECOGNIZED = -1,
}

export function trade_TypeFromJSON(object: any): Trade_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return Trade_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_DEFAULT":
      return Trade_Type.TYPE_DEFAULT;
    case 2:
    case "TYPE_NETWORK_CLOSE_OUT_GOOD":
      return Trade_Type.TYPE_NETWORK_CLOSE_OUT_GOOD;
    case 3:
    case "TYPE_NETWORK_CLOSE_OUT_BAD":
      return Trade_Type.TYPE_NETWORK_CLOSE_OUT_BAD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Trade_Type.UNRECOGNIZED;
  }
}

export function trade_TypeToJSON(object: Trade_Type): string {
  switch (object) {
    case Trade_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case Trade_Type.TYPE_DEFAULT:
      return "TYPE_DEFAULT";
    case Trade_Type.TYPE_NETWORK_CLOSE_OUT_GOOD:
      return "TYPE_NETWORK_CLOSE_OUT_GOOD";
    case Trade_Type.TYPE_NETWORK_CLOSE_OUT_BAD:
      return "TYPE_NETWORK_CLOSE_OUT_BAD";
    default:
      return "UNKNOWN";
  }
}

/** Represents any fees paid by a party, resulting from a trade */
export interface Fee {
  /** Fee amount paid to the non-aggressive party of the trade */
  makerFee: string;
  /** Fee amount paid for maintaining the Vega infrastructure */
  infrastructureFee: string;
  /** Fee amount paid to market makers */
  liquidityFee: string;
}

export interface TradeSet {
  /** A set of one or more trades */
  trades: Trade[];
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
  timestamp: string;
  /** An ISO-8601 datetime with nanosecond precision for when the candle was last updated */
  datetime: string;
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
  /** Time interval for the candle - See [`Interval`](#vega.Interval) */
  interval: Interval;
}

/** Represents a price level from market depth or order book data */
export interface PriceLevel {
  /**
   * Price for the price level, the price is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  price: string;
  /** Number of orders at the price level */
  numberOfOrders: string;
  /** Volume at the price level */
  volume: string;
}

/** Represents market depth or order book data for the specified market on Vega */
export interface MarketDepth {
  /** Market identifier */
  marketId: string;
  /** Collection of price levels for the buy side of the book */
  buy: PriceLevel[];
  /** Collection of price levels for the sell side of the book */
  sell: PriceLevel[];
  /** Sequence number for the market depth data returned */
  sequenceNumber: string;
}

/** Represents the changed market depth since the last update */
export interface MarketDepthUpdate {
  /** Market identifier */
  marketId: string;
  /** Collection of updated price levels for the buy side of the book */
  buy: PriceLevel[];
  /** Collection of updated price levels for the sell side of the book */
  sell: PriceLevel[];
  /** Sequence number for the market depth update data returned */
  sequenceNumber: string;
}

/** Represents position data for a party on the specified market on Vega */
export interface Position {
  /** Market identifier */
  marketId: string;
  /** Party identifier */
  partyId: string;
  /** Open volume for the position, value is signed +ve for long and -ve for short */
  openVolume: string;
  /** Realised profit and loss for the position, value is signed +ve for long and -ve for short */
  realisedPnl: string;
  /** Unrealised profit and loss for the position, value is signed +ve for long and -ve for short */
  unrealisedPnl: string;
  /**
   * Average entry price for the position, the price is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  averageEntryPrice: string;
  /** Timestamp for the latest time the position was updated */
  updatedAt: string;
}

export interface PositionTrade {
  /** Volume for the position trade, value is signed +ve for long and -ve for short */
  volume: string;
  /**
   * Price for the position trade, the price is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  price: string;
}

/** A deposit on to the Vega network */
export interface Deposit {
  /** Unique identifier for the deposit */
  id: string;
  /** Status of the deposit */
  status: Deposit_Status;
  /** Party identifier of the user initiating the deposit */
  partyId: string;
  /** The Vega asset targeted by this deposit */
  asset: string;
  /** The amount to be deposited */
  amount: string;
  /** The hash of the transaction from the foreign chain */
  txHash: string;
  /** Timestamp for when the Vega account was updated with the deposit */
  creditedTimestamp: string;
  /** Timestamp for when the deposit was created on the Vega network */
  createdTimestamp: string;
}

/** The status of the deposit */
export enum Deposit_Status {
  /** STATUS_UNSPECIFIED - Default value, always invalid */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_OPEN - The deposit is being processed by the network */
  STATUS_OPEN = 1,
  /** STATUS_CANCELLED - The deposit has been cancelled by the network */
  STATUS_CANCELLED = 2,
  /** STATUS_FINALIZED - The deposit has been finalised and accounts have been updated */
  STATUS_FINALIZED = 3,
  UNRECOGNIZED = -1,
}

export function deposit_StatusFromJSON(object: any): Deposit_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Deposit_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_OPEN":
      return Deposit_Status.STATUS_OPEN;
    case 2:
    case "STATUS_CANCELLED":
      return Deposit_Status.STATUS_CANCELLED;
    case 3:
    case "STATUS_FINALIZED":
      return Deposit_Status.STATUS_FINALIZED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Deposit_Status.UNRECOGNIZED;
  }
}

export function deposit_StatusToJSON(object: Deposit_Status): string {
  switch (object) {
    case Deposit_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Deposit_Status.STATUS_OPEN:
      return "STATUS_OPEN";
    case Deposit_Status.STATUS_CANCELLED:
      return "STATUS_CANCELLED";
    case Deposit_Status.STATUS_FINALIZED:
      return "STATUS_FINALIZED";
    default:
      return "UNKNOWN";
  }
}

/** A withdrawal from the Vega network */
export interface Withdrawal {
  /** Unique identifier for the withdrawal */
  id: string;
  /** Unique party identifier of the user initiating the withdrawal */
  partyId: string;
  /** The amount to be withdrawn */
  amount: string;
  /** The asset we want to withdraw funds from */
  asset: string;
  /** The status of the withdrawal */
  status: Withdrawal_Status;
  /**
   * The reference which is used by the foreign chain
   * to refer to this withdrawal
   */
  ref: string;
  /** The time until when the withdrawal is valid */
  expiry: string;
  /** The hash of the foreign chain for this transaction */
  txHash: string;
  /** Timestamp for when the network started to process this withdrawal */
  createdTimestamp: string;
  /** Timestamp for when the withdrawal was finalised by the network */
  withdrawnTimestamp: string;
  /** Foreign chain specifics */
  ext: WithdrawExt | undefined;
}

/** The status of the withdrawal */
export enum Withdrawal_Status {
  /** STATUS_UNSPECIFIED - Default value, always invalid */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_OPEN - The withdrawal is open and being processed by the network */
  STATUS_OPEN = 1,
  /** STATUS_REJECTED - The withdrawal have been cancelled */
  STATUS_REJECTED = 2,
  /**
   * STATUS_FINALIZED - The withdrawal went through and is fully finalised, the funds are removed from the
   * Vega network and are unlocked on the foreign chain bridge, for example, on the Ethereum network
   */
  STATUS_FINALIZED = 3,
  UNRECOGNIZED = -1,
}

export function withdrawal_StatusFromJSON(object: any): Withdrawal_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return Withdrawal_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_OPEN":
      return Withdrawal_Status.STATUS_OPEN;
    case 2:
    case "STATUS_REJECTED":
      return Withdrawal_Status.STATUS_REJECTED;
    case 3:
    case "STATUS_FINALIZED":
      return Withdrawal_Status.STATUS_FINALIZED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Withdrawal_Status.UNRECOGNIZED;
  }
}

export function withdrawal_StatusToJSON(object: Withdrawal_Status): string {
  switch (object) {
    case Withdrawal_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case Withdrawal_Status.STATUS_OPEN:
      return "STATUS_OPEN";
    case Withdrawal_Status.STATUS_REJECTED:
      return "STATUS_REJECTED";
    case Withdrawal_Status.STATUS_FINALIZED:
      return "STATUS_FINALIZED";
    default:
      return "UNKNOWN";
  }
}

/** Withdrawal external details */
export interface WithdrawExt {
  /** ERC20 withdrawal details */
  erc20: Erc20WithdrawExt | undefined;
}

/** An extension of data required for the withdraw submissions */
export interface Erc20WithdrawExt {
  /** The address into which the bridge will release the funds */
  receiverAddress: string;
}

/** Represents an account for an asset on Vega for a particular owner or party */
export interface Account {
  /** Unique account identifier (used internally by Vega) */
  id: string;
  /**
   * The party that the account belongs to, special values include `network`, which represents the Vega network and is
   * most commonly seen during liquidation of distressed trading positions
   */
  owner: string;
  /**
   * Balance of the asset, the balance is an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   * and importantly balances cannot be negative
   */
  balance: string;
  /** Asset identifier for the account */
  asset: string;
  /** Market identifier for the account, if [`AccountType`](#vega.AccountType).`ACCOUNT_TYPE_GENERAL` this will be empty */
  marketId: string;
  /** The account type related to this account */
  type: AccountType;
}

/** Asset value information used within a transfer */
export interface FinancialAmount {
  /** A signed integer amount of asset */
  amount: string;
  /** Asset identifier */
  asset: string;
}

/** Represents a financial transfer within Vega */
export interface Transfer {
  /** Party identifier for the owner of the transfer */
  owner: string;
  /** A financial amount (of an asset) to transfer */
  amount: FinancialAmount | undefined;
  /** The type of transfer, gives the reason for the transfer */
  type: TransferType;
  /** A minimum amount */
  minAmount: string;
}

/** Represents a request to transfer from one set of accounts to another */
export interface TransferRequest {
  /** One or more accounts to transfer from */
  fromAccount: Account[];
  /** One or more accounts to transfer to */
  toAccount: Account[];
  /** An amount to transfer for the asset */
  amount: string;
  /** A minimum amount */
  minAmount: string;
  /** Asset identifier */
  asset: string;
  /** A reference for auditing purposes */
  reference: string;
}

/** Represents a ledger entry on Vega */
export interface LedgerEntry {
  /** One or more accounts to transfer from */
  fromAccount: string;
  /** One or more accounts to transfer to */
  toAccount: string;
  /** An amount to transfer */
  amount: string;
  /** A reference for auditing purposes */
  reference: string;
  /** Type of ledger entry */
  type: string;
  /**
   * Timestamp for the time the ledger entry was created, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  timestamp: string;
}

/** Represents the balance for an account during a transfer */
export interface TransferBalance {
  /** The account relating to the transfer */
  account: Account | undefined;
  /** The balance relating to the transfer */
  balance: string;
}

/** Represents the response from a transfer */
export interface TransferResponse {
  /** One or more ledger entries representing the transfers */
  transfers: LedgerEntry[];
  /** One or more account balances */
  balances: TransferBalance[];
}

/** Represents the margin levels for a party on a market at a given time */
export interface MarginLevels {
  /** Maintenance margin value */
  maintenanceMargin: string;
  /** Search level value */
  searchLevel: string;
  /** Initial margin value */
  initialMargin: string;
  /** Collateral release level value */
  collateralReleaseLevel: string;
  /** Party identifier */
  partyId: string;
  /** Market identifier */
  marketId: string;
  /** Asset identifier */
  asset: string;
  /**
   * Timestamp for the time the ledger entry was created, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  timestamp: string;
}

/** Represents data generated by a market when open */
export interface MarketData {
  /**
   * Mark price, as an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  markPrice: string;
  /**
   * Highest price level on an order book for buy orders, as an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  bestBidPrice: string;
  /** Aggregated volume being bid at the best bid price */
  bestBidVolume: string;
  /** Lowest price level on an order book for offer orders */
  bestOfferPrice: string;
  /**
   * Aggregated volume being offered at the best offer price, as an integer, for example `123456` is a correctly
   *  // formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  bestOfferVolume: string;
  /** Highest price on the order book for buy orders not including pegged orders */
  bestStaticBidPrice: string;
  /** Total volume at the best static bid price excluding pegged orders */
  bestStaticBidVolume: string;
  /** Lowest price on the order book for sell orders not including pegged orders */
  bestStaticOfferPrice: string;
  /** Total volume at the best static offer price excluding pegged orders */
  bestStaticOfferVolume: string;
  /**
   * Arithmetic average of the best bid price and best offer price, as an integer, for example `123456` is a correctly
   * formatted price of `1.23456` assuming market configured to 5 decimal places
   */
  midPrice: string;
  /** Arithmetic average of the best static bid price and best static offer price */
  staticMidPrice: string;
  /** Market identifier for the data */
  market: string;
  /**
   * Timestamp at which this mark price was relevant, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  timestamp: string;
  /** The sum of the size of all positions greater than 0 on the market */
  openInterest: string;
  /** Time in seconds until the end of the auction (0 if currently not in auction period) */
  auctionEnd: string;
  /** Time until next auction (used in FBA's) - currently always 0 */
  auctionStart: string;
  /** Indicative price (zero if not in auction) */
  indicativePrice: string;
  /** Indicative volume (zero if not in auction) */
  indicativeVolume: string;
  /** The current trading mode for the market */
  marketTradingMode: Market_TradingMode;
  /** When a market is in an auction trading mode, this field indicates what triggered the auction */
  trigger: AuctionTrigger;
  /** When a market auction is extended, this field indicates what caused the extension */
  extensionTrigger: AuctionTrigger;
  /** Targeted stake for the given market */
  targetStake: string;
  /** Available stake for the given market */
  suppliedStake: string;
  /** One or more price monitoring bounds for the current timestamp */
  priceMonitoringBounds: PriceMonitoringBounds[];
  /** the market value proxy */
  marketValueProxy: string;
  /** the equity like share of liquidity fee for each liquidity provider */
  liquidityProviderFeeShare: LiquidityProviderFeeShare[];
}

/** The equity like share of liquidity fee for each liquidity provider */
export interface LiquidityProviderFeeShare {
  /** The liquidity provider party id */
  party: string;
  /** The share own by this liquidity provider (float) */
  equityLikeShare: string;
  /** The average entry valuation of the liquidity provider for the market */
  averageEntryValuation: string;
}

/** Represents a list of valid (at the current timestamp) price ranges per associated trigger */
export interface PriceMonitoringBounds {
  /** Minimum price that isn't currently breaching the specified price monitoring trigger */
  minValidPrice: string;
  /** Maximum price that isn't currently breaching the specified price monitoring trigger */
  maxValidPrice: string;
  /** Price monitoring trigger associated with the bounds */
  trigger: PriceMonitoringTrigger | undefined;
  /** Reference price used to calculate the valid price range */
  referencePrice: string;
}

/** Represents Vega domain specific error information over gRPC/Protobuf */
export interface ErrorDetail {
  /** A Vega API domain specific unique error code, useful for client side mappings, e.g. 10004 */
  code: number;
  /** A message that describes the error in more detail, should describe the problem encountered */
  message: string;
  /** Any inner error information that could add more context, or be helpful for error reporting */
  inner: string;
}

/** Represents a network parameter on Vega */
export interface NetworkParameter {
  /** The unique key */
  key: string;
  /** The value for the network parameter */
  value: string;
}

/** Network limits, defined in the genesis file */
export interface NetworkLimits {
  /** Are market proposals allowed at this point in time */
  canProposeMarket: boolean;
  /** Are asset proposals allowed at this point in time */
  canProposeAsset: boolean;
  /** True once block count > bootstrapBlockCount */
  bootstrapFinished: boolean;
  /** Are market proposals enabled on this chain */
  proposeMarketEnabled: boolean;
  /** Are asset proposals enabled on this chain */
  proposeAssetEnabled: boolean;
  /** How many blocks before the chain comes out of bootstrap mode */
  bootstrapBlockCount: number;
  /** True once the genesis file is loaded */
  genesisLoaded: boolean;
  /** The date/timestamp in unix nanoseconds at which market proposals will be enabled (0 indicates not set) */
  proposeMarketEnabledFrom: string;
  /** The date/timestamp in unix nanoseconds at which asset proposals will be enabled (0 indicates not set) */
  proposeAssetEnabledFrom: string;
}

/** Represents a liquidity order */
export interface LiquidityOrder {
  /** The pegged reference point for the order */
  reference: PeggedReference;
  /** The relative proportion of the commitment to be allocated at a price level */
  proportion: number;
  /** The offset/amount of units away for the order */
  offset: string;
}

/** A pair of a liquidity order and the id of the generated order by the core */
export interface LiquidityOrderReference {
  /** Unique identifier of the pegged order generated by the core to fulfil this liquidity order */
  orderId: string;
  /** The liquidity order from the original submission */
  liquidityOrder: LiquidityOrder | undefined;
}

/** An Liquidity provider commitment */
export interface LiquidityProvision {
  /** Unique identifier */
  id: string;
  /** Unique party identifier for the creator of the provision */
  partyId: string;
  /**
   * Timestamp for when the order was created at, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  createdAt: string;
  /**
   * Timestamp for when the order was updated at, in nanoseconds since the epoch
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  updatedAt: string;
  /** Market identifier for the order, required field */
  marketId: string;
  /** Specified as a unitless number that represents the amount of settlement asset of the market */
  commitmentAmount: string;
  /** Nominated liquidity fee factor, which is an input to the calculation of taker fees on the market, as per seeting fees and rewarding liquidity providers */
  fee: string;
  /** A set of liquidity sell orders to meet the liquidity provision obligation */
  sells: LiquidityOrderReference[];
  /** A set of liquidity buy orders to meet the liquidity provision obligation */
  buys: LiquidityOrderReference[];
  /** Version of this liquidity provision order */
  version: string;
  /** Status of this liquidity provision order */
  status: LiquidityProvision_Status;
  /** A reference shared between this liquidity provision and all it's orders */
  reference: string;
}

/** Status of a liquidity provision order */
export enum LiquidityProvision_Status {
  /** STATUS_UNSPECIFIED - The default value */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_ACTIVE - The liquidity provision is active */
  STATUS_ACTIVE = 1,
  /** STATUS_STOPPED - The liquidity provision was stopped by the network */
  STATUS_STOPPED = 2,
  /** STATUS_CANCELLED - The liquidity provision was cancelled by the liquidity provider */
  STATUS_CANCELLED = 3,
  /** STATUS_REJECTED - The liquidity provision was invalid and got rejected */
  STATUS_REJECTED = 4,
  /** STATUS_UNDEPLOYED - The liquidity provision is valid and accepted by network, but orders aren't deployed */
  STATUS_UNDEPLOYED = 5,
  /**
   * STATUS_PENDING - The liquidity provision is valid and accepted by network
   * but have never been deployed. I when it's possible to deploy them for the first time
   * margin check fails, then they will be cancelled without any penalties.
   */
  STATUS_PENDING = 6,
  UNRECOGNIZED = -1,
}

export function liquidityProvision_StatusFromJSON(
  object: any
): LiquidityProvision_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return LiquidityProvision_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_ACTIVE":
      return LiquidityProvision_Status.STATUS_ACTIVE;
    case 2:
    case "STATUS_STOPPED":
      return LiquidityProvision_Status.STATUS_STOPPED;
    case 3:
    case "STATUS_CANCELLED":
      return LiquidityProvision_Status.STATUS_CANCELLED;
    case 4:
    case "STATUS_REJECTED":
      return LiquidityProvision_Status.STATUS_REJECTED;
    case 5:
    case "STATUS_UNDEPLOYED":
      return LiquidityProvision_Status.STATUS_UNDEPLOYED;
    case 6:
    case "STATUS_PENDING":
      return LiquidityProvision_Status.STATUS_PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LiquidityProvision_Status.UNRECOGNIZED;
  }
}

export function liquidityProvision_StatusToJSON(
  object: LiquidityProvision_Status
): string {
  switch (object) {
    case LiquidityProvision_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case LiquidityProvision_Status.STATUS_ACTIVE:
      return "STATUS_ACTIVE";
    case LiquidityProvision_Status.STATUS_STOPPED:
      return "STATUS_STOPPED";
    case LiquidityProvision_Status.STATUS_CANCELLED:
      return "STATUS_CANCELLED";
    case LiquidityProvision_Status.STATUS_REJECTED:
      return "STATUS_REJECTED";
    case LiquidityProvision_Status.STATUS_UNDEPLOYED:
      return "STATUS_UNDEPLOYED";
    case LiquidityProvision_Status.STATUS_PENDING:
      return "STATUS_PENDING";
    default:
      return "UNKNOWN";
  }
}

/** Ethereum configuration details. */
export interface EthereumConfig {
  /** Network identifier of this Ethereum network. */
  networkId: string;
  /** Chain identifier of this Ethereum network. */
  chainId: string;
  /** // Contract configuration of the collateral bridge contract for this Ethereum network. */
  collateralBridgeContract: EthereumContractConfig | undefined;
  /**
   * Number of block confirmations to wait to consider an Ethereum transaction trusted.
   * An Ethereum block is trusted when there are at least "n" blocks confirmed by the
   * network, "n" being the number of `confirmations` required. If `confirmations` was set to `3`,
   * and the current block to be forged (or mined) on Ethereum is block 14, block
   * 10 would be considered as trusted, but not block 11.
   */
  confirmations: number;
  /** Contract configuration of the stacking bridge contract for this Ethereum network. */
  stakingBridgeContract: EthereumContractConfig | undefined;
  /** Contract configuration of the token vesting contract for this Ethereum network. */
  tokenVestingContract: EthereumContractConfig | undefined;
  /** Contract configuration of the multisig controld contract for this Ethereum network. */
  multisigControlContract: EthereumContractConfig | undefined;
}

export interface EthereumContractConfig {
  /** Address of the contract for this Ethereum network. The address should start with "0x". */
  address: string;
  /** Block height at which the stacking contract has been deployed for this Ethereum network. */
  deploymentBlockHeight: string;
}

/** Describes in both human readable and block time when an epoch spans */
export interface EpochTimestamps {
  /**
   * Timestamp of epoch start in nanoseconds
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  startTime: string;
  /**
   * Timestamp of epoch expiry in nanoseconds
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  expiryTime: string;
  /**
   * Timestamp of epoch end in nanoseconds, empty if not started
   * - See [`VegaTimeResponse`](#api.VegaTimeResponse).`timestamp`
   */
  endTime: string;
  /** Height of first block in the epoch */
  firstBlock: string;
  /** Height of last block in the epoch, empty if not ended */
  lastBlock: string;
}

export interface Epoch {
  /** Sequence is used as epoch identifier */
  seq: string;
  /** Timestamps for start/end etc */
  timestamps: EpochTimestamps | undefined;
  /** Validators that participated in this epoch */
  validators: Node[];
  /** List of all delegations in epoch */
  delegations: Delegation[];
}

export interface EpochParticipation {
  epoch: Epoch | undefined;
  offline: string;
  online: string;
  totalRewards: number;
}

export interface EpochData {
  /** Total number of epochs since node was created */
  total: number;
  /** Total number of offline epochs since node was created */
  offline: number;
  /** Total number of online epochs since node was created */
  online: number;
}

export interface RankingScore {
  /** stake based score - no anti-whaling */
  stakeScore: string;
  /** performance based score */
  performanceScore: string;
  /** the status of the validator in the previous epoch */
  previousStatus: ValidatorNodeStatus;
  /** the status of the validator in the current epoch */
  status: ValidatorNodeStatus;
  /** tendermint voting power of the validator */
  votingPower: number;
  /** final score */
  rankingScore: string;
}

export interface RewardScore {
  /** stake based score - with anti-whaling */
  rawValidatorScore: string;
  /** performance based score */
  performanceScore: string;
  /** multisig score */
  multisigScore: string;
  /** un-normalised score */
  validatorScore: string;
  /** normalised validator score for rewards */
  normalisedScore: string;
  /** the status of the validator for reward */
  validatorStatus: ValidatorNodeStatus;
}

export interface Node {
  /** The node ID (wallet ID) */
  id: string;
  /** Pub key of the node operator */
  pubKey: string;
  /** Public key of Tendermint */
  tmPubKey: string;
  /** Ethereum public key of the node */
  ethereumAdddress: string;
  /** URL where I can find out more info on the node */
  infoUrl: string;
  /** Country code for the location of the node */
  location: string;
  /** The amount the node has put up themselves */
  stakedByOperator: string;
  /** The amount of stake that has been delegated by token holders */
  stakedByDelegates: string;
  /** Total amount staked on node */
  stakedTotal: string;
  /** Max amount of (wanted) stake, is this a network param or a node param */
  maxIntendedStake: string;
  /** Amount of stake on the next epoch */
  pendingStake: string;
  /** Informantion about epoch */
  epochData: EpochData | undefined;
  /** Node status */
  status: NodeStatus;
  /** Node's delegations */
  delegations: Delegation[];
  /** Node reward score */
  rewardScore: RewardScore | undefined;
  /** Node ranking information */
  rankingScore: RankingScore | undefined;
  /** Node name */
  name: string;
  /** Avatar url */
  avatarUrl: string;
}

export interface NodeData {
  /** Total staked amount across all nodes */
  stakedTotal: string;
  /** Total number of nodes */
  totalNodes: number;
  /** Number of inactive nodes */
  inactiveNodes: number;
  /** Number of nodes validating */
  validatingNodes: number;
  /** Total uptime for all epochs across all nodes */
  uptime: number;
}

export interface Delegation {
  /** Party which is delegating */
  party: string;
  /** Node ID */
  nodeId: string;
  /** Amount delegated */
  amount: string;
  /** Epoch of delegation */
  epochSeq: string;
}

/** Details for a single reward payment */
export interface Reward {
  assetId: string;
  partyId: string;
  epoch: string;
  amount: string;
  percentageOfTotal: string;
  receivedAt: string;
}

/** Details for rewards for a single asset */
export interface RewardSummary {
  assetId: string;
  partyId: string;
  /** Total amount of rewards for the asset */
  amount: string;
}

export interface StateValueProposal {
  /** state variable identifier */
  stateVarId: string;
  /** event identifier */
  eventId: string;
  /** key value tolerance triplets */
  kvb: KeyValueBundle[];
}

export interface KeyValueBundle {
  key: string;
  tolerance: string;
  value: StateVarValue | undefined;
}

export interface StateVarValue {
  scalarVal: ScalarValue | undefined;
  vectorVal: VectorValue | undefined;
  matrixVal: MatrixValue | undefined;
}

export interface ScalarValue {
  value: string;
}

export interface VectorValue {
  value: string[];
}

export interface MatrixValue {
  value: VectorValue[];
}

export interface Uint64Value {
  value: string;
}

function createBasePrice(): Price {
  return { value: "" };
}

export const Price = {
  encode(message: Price, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Price {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Price {
    return {
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Price): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Price>, I>>(object: I): Price {
    const message = createBasePrice();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTimestamp(): Timestamp {
  return { value: "0" };
}

export const Timestamp = {
  encode(
    message: Timestamp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "0") {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();
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

  fromJSON(object: any): Timestamp {
    return {
      value: isSet(object.value) ? String(object.value) : "0",
    };
  },

  toJSON(message: Timestamp): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Timestamp>, I>>(
    object: I
  ): Timestamp {
    const message = createBaseTimestamp();
    message.value = object.value ?? "0";
    return message;
  },
};

function createBaseParty(): Party {
  return { id: "" };
}

export const Party = {
  encode(message: Party, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Party {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParty();
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

  fromJSON(object: any): Party {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: Party): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Party>, I>>(object: I): Party {
    const message = createBaseParty();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseRiskFactor(): RiskFactor {
  return { market: "", short: "", long: "" };
}

export const RiskFactor = {
  encode(
    message: RiskFactor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    if (message.short !== "") {
      writer.uint32(18).string(message.short);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RiskFactor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRiskFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        case 2:
          message.short = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RiskFactor {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      short: isSet(object.short) ? String(object.short) : "",
      long: isSet(object.long) ? String(object.long) : "",
    };
  },

  toJSON(message: RiskFactor): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.short !== undefined && (obj.short = message.short);
    message.long !== undefined && (obj.long = message.long);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RiskFactor>, I>>(
    object: I
  ): RiskFactor {
    const message = createBaseRiskFactor();
    message.market = object.market ?? "";
    message.short = object.short ?? "";
    message.long = object.long ?? "";
    return message;
  },
};

function createBasePeggedOrder(): PeggedOrder {
  return { reference: 0, offset: "" };
}

export const PeggedOrder = {
  encode(
    message: PeggedOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reference !== 0) {
      writer.uint32(8).int32(message.reference);
    }
    if (message.offset !== "") {
      writer.uint32(18).string(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeggedOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeggedOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = reader.int32() as any;
          break;
        case 2:
          message.offset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeggedOrder {
    return {
      reference: isSet(object.reference)
        ? peggedReferenceFromJSON(object.reference)
        : 0,
      offset: isSet(object.offset) ? String(object.offset) : "",
    };
  },

  toJSON(message: PeggedOrder): unknown {
    const obj: any = {};
    message.reference !== undefined &&
      (obj.reference = peggedReferenceToJSON(message.reference));
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PeggedOrder>, I>>(
    object: I
  ): PeggedOrder {
    const message = createBasePeggedOrder();
    message.reference = object.reference ?? 0;
    message.offset = object.offset ?? "";
    return message;
  },
};

function createBaseOrder(): Order {
  return {
    id: "",
    marketId: "",
    partyId: "",
    side: 0,
    price: "",
    size: "0",
    remaining: "0",
    timeInForce: 0,
    type: 0,
    createdAt: "0",
    status: 0,
    expiresAt: "0",
    reference: "",
    reason: 0,
    updatedAt: "0",
    version: "0",
    batchId: "0",
    peggedOrder: undefined,
    liquidityProvisionId: "",
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(26).string(message.partyId);
    }
    if (message.side !== 0) {
      writer.uint32(32).int32(message.side);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.size !== "0") {
      writer.uint32(48).uint64(message.size);
    }
    if (message.remaining !== "0") {
      writer.uint32(56).uint64(message.remaining);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(64).int32(message.timeInForce);
    }
    if (message.type !== 0) {
      writer.uint32(72).int32(message.type);
    }
    if (message.createdAt !== "0") {
      writer.uint32(80).int64(message.createdAt);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.expiresAt !== "0") {
      writer.uint32(96).int64(message.expiresAt);
    }
    if (message.reference !== "") {
      writer.uint32(106).string(message.reference);
    }
    if (message.reason !== 0) {
      writer.uint32(112).int32(message.reason);
    }
    if (message.updatedAt !== "0") {
      writer.uint32(120).int64(message.updatedAt);
    }
    if (message.version !== "0") {
      writer.uint32(128).uint64(message.version);
    }
    if (message.batchId !== "0") {
      writer.uint32(136).uint64(message.batchId);
    }
    if (message.peggedOrder !== undefined) {
      PeggedOrder.encode(
        message.peggedOrder,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionId !== "") {
      writer.uint32(154).string(message.liquidityProvisionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.partyId = reader.string();
          break;
        case 4:
          message.side = reader.int32() as any;
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.size = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.remaining = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.timeInForce = reader.int32() as any;
          break;
        case 9:
          message.type = reader.int32() as any;
          break;
        case 10:
          message.createdAt = longToString(reader.int64() as Long);
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.expiresAt = longToString(reader.int64() as Long);
          break;
        case 13:
          message.reference = reader.string();
          break;
        case 14:
          message.reason = reader.int32() as any;
          break;
        case 15:
          message.updatedAt = longToString(reader.int64() as Long);
          break;
        case 16:
          message.version = longToString(reader.uint64() as Long);
          break;
        case 17:
          message.batchId = longToString(reader.uint64() as Long);
          break;
        case 18:
          message.peggedOrder = PeggedOrder.decode(reader, reader.uint32());
          break;
        case 19:
          message.liquidityProvisionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      side: isSet(object.side) ? sideFromJSON(object.side) : 0,
      price: isSet(object.price) ? String(object.price) : "",
      size: isSet(object.size) ? String(object.size) : "0",
      remaining: isSet(object.remaining) ? String(object.remaining) : "0",
      timeInForce: isSet(object.timeInForce)
        ? order_TimeInForceFromJSON(object.timeInForce)
        : 0,
      type: isSet(object.type) ? order_TypeFromJSON(object.type) : 0,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
      status: isSet(object.status) ? order_StatusFromJSON(object.status) : 0,
      expiresAt: isSet(object.expiresAt) ? String(object.expiresAt) : "0",
      reference: isSet(object.reference) ? String(object.reference) : "",
      reason: isSet(object.reason) ? orderErrorFromJSON(object.reason) : 0,
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
      version: isSet(object.version) ? String(object.version) : "0",
      batchId: isSet(object.batchId) ? String(object.batchId) : "0",
      peggedOrder: isSet(object.peggedOrder)
        ? PeggedOrder.fromJSON(object.peggedOrder)
        : undefined,
      liquidityProvisionId: isSet(object.liquidityProvisionId)
        ? String(object.liquidityProvisionId)
        : "",
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.side !== undefined && (obj.side = sideToJSON(message.side));
    message.price !== undefined && (obj.price = message.price);
    message.size !== undefined && (obj.size = message.size);
    message.remaining !== undefined && (obj.remaining = message.remaining);
    message.timeInForce !== undefined &&
      (obj.timeInForce = order_TimeInForceToJSON(message.timeInForce));
    message.type !== undefined && (obj.type = order_TypeToJSON(message.type));
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.status !== undefined &&
      (obj.status = order_StatusToJSON(message.status));
    message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt);
    message.reference !== undefined && (obj.reference = message.reference);
    message.reason !== undefined &&
      (obj.reason = orderErrorToJSON(message.reason));
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.version !== undefined && (obj.version = message.version);
    message.batchId !== undefined && (obj.batchId = message.batchId);
    message.peggedOrder !== undefined &&
      (obj.peggedOrder = message.peggedOrder
        ? PeggedOrder.toJSON(message.peggedOrder)
        : undefined);
    message.liquidityProvisionId !== undefined &&
      (obj.liquidityProvisionId = message.liquidityProvisionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.side = object.side ?? 0;
    message.price = object.price ?? "";
    message.size = object.size ?? "0";
    message.remaining = object.remaining ?? "0";
    message.timeInForce = object.timeInForce ?? 0;
    message.type = object.type ?? 0;
    message.createdAt = object.createdAt ?? "0";
    message.status = object.status ?? 0;
    message.expiresAt = object.expiresAt ?? "0";
    message.reference = object.reference ?? "";
    message.reason = object.reason ?? 0;
    message.updatedAt = object.updatedAt ?? "0";
    message.version = object.version ?? "0";
    message.batchId = object.batchId ?? "0";
    message.peggedOrder =
      object.peggedOrder !== undefined && object.peggedOrder !== null
        ? PeggedOrder.fromPartial(object.peggedOrder)
        : undefined;
    message.liquidityProvisionId = object.liquidityProvisionId ?? "";
    return message;
  },
};

function createBaseOrderCancellationConfirmation(): OrderCancellationConfirmation {
  return { order: undefined };
}

export const OrderCancellationConfirmation = {
  encode(
    message: OrderCancellationConfirmation,
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
  ): OrderCancellationConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCancellationConfirmation();
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

  fromJSON(object: any): OrderCancellationConfirmation {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
    };
  },

  toJSON(message: OrderCancellationConfirmation): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderCancellationConfirmation>, I>>(
    object: I
  ): OrderCancellationConfirmation {
    const message = createBaseOrderCancellationConfirmation();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    return message;
  },
};

function createBaseOrderConfirmation(): OrderConfirmation {
  return { order: undefined, trades: [], passiveOrdersAffected: [] };
}

export const OrderConfirmation = {
  encode(
    message: OrderConfirmation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.passiveOrdersAffected) {
      Order.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderConfirmation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderConfirmation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        case 3:
          message.passiveOrdersAffected.push(
            Order.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderConfirmation {
    return {
      order: isSet(object.order) ? Order.fromJSON(object.order) : undefined,
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
      passiveOrdersAffected: Array.isArray(object?.passiveOrdersAffected)
        ? object.passiveOrdersAffected.map((e: any) => Order.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OrderConfirmation): unknown {
    const obj: any = {};
    message.order !== undefined &&
      (obj.order = message.order ? Order.toJSON(message.order) : undefined);
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    if (message.passiveOrdersAffected) {
      obj.passiveOrdersAffected = message.passiveOrdersAffected.map((e) =>
        e ? Order.toJSON(e) : undefined
      );
    } else {
      obj.passiveOrdersAffected = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OrderConfirmation>, I>>(
    object: I
  ): OrderConfirmation {
    const message = createBaseOrderConfirmation();
    message.order =
      object.order !== undefined && object.order !== null
        ? Order.fromPartial(object.order)
        : undefined;
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    message.passiveOrdersAffected =
      object.passiveOrdersAffected?.map((e) => Order.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAuctionIndicativeState(): AuctionIndicativeState {
  return {
    marketId: "",
    indicativePrice: "",
    indicativeVolume: "0",
    auctionStart: "0",
    auctionEnd: "0",
  };
}

export const AuctionIndicativeState = {
  encode(
    message: AuctionIndicativeState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.indicativePrice !== "") {
      writer.uint32(18).string(message.indicativePrice);
    }
    if (message.indicativeVolume !== "0") {
      writer.uint32(24).uint64(message.indicativeVolume);
    }
    if (message.auctionStart !== "0") {
      writer.uint32(32).int64(message.auctionStart);
    }
    if (message.auctionEnd !== "0") {
      writer.uint32(40).int64(message.auctionEnd);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AuctionIndicativeState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionIndicativeState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.indicativePrice = reader.string();
          break;
        case 3:
          message.indicativeVolume = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.auctionStart = longToString(reader.int64() as Long);
          break;
        case 5:
          message.auctionEnd = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AuctionIndicativeState {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      indicativePrice: isSet(object.indicativePrice)
        ? String(object.indicativePrice)
        : "",
      indicativeVolume: isSet(object.indicativeVolume)
        ? String(object.indicativeVolume)
        : "0",
      auctionStart: isSet(object.auctionStart)
        ? String(object.auctionStart)
        : "0",
      auctionEnd: isSet(object.auctionEnd) ? String(object.auctionEnd) : "0",
    };
  },

  toJSON(message: AuctionIndicativeState): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.indicativePrice !== undefined &&
      (obj.indicativePrice = message.indicativePrice);
    message.indicativeVolume !== undefined &&
      (obj.indicativeVolume = message.indicativeVolume);
    message.auctionStart !== undefined &&
      (obj.auctionStart = message.auctionStart);
    message.auctionEnd !== undefined && (obj.auctionEnd = message.auctionEnd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AuctionIndicativeState>, I>>(
    object: I
  ): AuctionIndicativeState {
    const message = createBaseAuctionIndicativeState();
    message.marketId = object.marketId ?? "";
    message.indicativePrice = object.indicativePrice ?? "";
    message.indicativeVolume = object.indicativeVolume ?? "0";
    message.auctionStart = object.auctionStart ?? "0";
    message.auctionEnd = object.auctionEnd ?? "0";
    return message;
  },
};

function createBaseTrade(): Trade {
  return {
    id: "",
    marketId: "",
    price: "",
    size: "0",
    buyer: "",
    seller: "",
    aggressor: 0,
    buyOrder: "",
    sellOrder: "",
    timestamp: "0",
    type: 0,
    buyerFee: undefined,
    sellerFee: undefined,
    buyerAuctionBatch: "0",
    sellerAuctionBatch: "0",
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.size !== "0") {
      writer.uint32(32).uint64(message.size);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    if (message.seller !== "") {
      writer.uint32(50).string(message.seller);
    }
    if (message.aggressor !== 0) {
      writer.uint32(56).int32(message.aggressor);
    }
    if (message.buyOrder !== "") {
      writer.uint32(66).string(message.buyOrder);
    }
    if (message.sellOrder !== "") {
      writer.uint32(74).string(message.sellOrder);
    }
    if (message.timestamp !== "0") {
      writer.uint32(80).int64(message.timestamp);
    }
    if (message.type !== 0) {
      writer.uint32(88).int32(message.type);
    }
    if (message.buyerFee !== undefined) {
      Fee.encode(message.buyerFee, writer.uint32(98).fork()).ldelim();
    }
    if (message.sellerFee !== undefined) {
      Fee.encode(message.sellerFee, writer.uint32(106).fork()).ldelim();
    }
    if (message.buyerAuctionBatch !== "0") {
      writer.uint32(112).uint64(message.buyerAuctionBatch);
    }
    if (message.sellerAuctionBatch !== "0") {
      writer.uint32(120).uint64(message.sellerAuctionBatch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.size = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.buyer = reader.string();
          break;
        case 6:
          message.seller = reader.string();
          break;
        case 7:
          message.aggressor = reader.int32() as any;
          break;
        case 8:
          message.buyOrder = reader.string();
          break;
        case 9:
          message.sellOrder = reader.string();
          break;
        case 10:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 11:
          message.type = reader.int32() as any;
          break;
        case 12:
          message.buyerFee = Fee.decode(reader, reader.uint32());
          break;
        case 13:
          message.sellerFee = Fee.decode(reader, reader.uint32());
          break;
        case 14:
          message.buyerAuctionBatch = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.sellerAuctionBatch = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trade {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      size: isSet(object.size) ? String(object.size) : "0",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      aggressor: isSet(object.aggressor) ? sideFromJSON(object.aggressor) : 0,
      buyOrder: isSet(object.buyOrder) ? String(object.buyOrder) : "",
      sellOrder: isSet(object.sellOrder) ? String(object.sellOrder) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      type: isSet(object.type) ? trade_TypeFromJSON(object.type) : 0,
      buyerFee: isSet(object.buyerFee)
        ? Fee.fromJSON(object.buyerFee)
        : undefined,
      sellerFee: isSet(object.sellerFee)
        ? Fee.fromJSON(object.sellerFee)
        : undefined,
      buyerAuctionBatch: isSet(object.buyerAuctionBatch)
        ? String(object.buyerAuctionBatch)
        : "0",
      sellerAuctionBatch: isSet(object.sellerAuctionBatch)
        ? String(object.sellerAuctionBatch)
        : "0",
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.price !== undefined && (obj.price = message.price);
    message.size !== undefined && (obj.size = message.size);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.seller !== undefined && (obj.seller = message.seller);
    message.aggressor !== undefined &&
      (obj.aggressor = sideToJSON(message.aggressor));
    message.buyOrder !== undefined && (obj.buyOrder = message.buyOrder);
    message.sellOrder !== undefined && (obj.sellOrder = message.sellOrder);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.type !== undefined && (obj.type = trade_TypeToJSON(message.type));
    message.buyerFee !== undefined &&
      (obj.buyerFee = message.buyerFee
        ? Fee.toJSON(message.buyerFee)
        : undefined);
    message.sellerFee !== undefined &&
      (obj.sellerFee = message.sellerFee
        ? Fee.toJSON(message.sellerFee)
        : undefined);
    message.buyerAuctionBatch !== undefined &&
      (obj.buyerAuctionBatch = message.buyerAuctionBatch);
    message.sellerAuctionBatch !== undefined &&
      (obj.sellerAuctionBatch = message.sellerAuctionBatch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Trade>, I>>(object: I): Trade {
    const message = createBaseTrade();
    message.id = object.id ?? "";
    message.marketId = object.marketId ?? "";
    message.price = object.price ?? "";
    message.size = object.size ?? "0";
    message.buyer = object.buyer ?? "";
    message.seller = object.seller ?? "";
    message.aggressor = object.aggressor ?? 0;
    message.buyOrder = object.buyOrder ?? "";
    message.sellOrder = object.sellOrder ?? "";
    message.timestamp = object.timestamp ?? "0";
    message.type = object.type ?? 0;
    message.buyerFee =
      object.buyerFee !== undefined && object.buyerFee !== null
        ? Fee.fromPartial(object.buyerFee)
        : undefined;
    message.sellerFee =
      object.sellerFee !== undefined && object.sellerFee !== null
        ? Fee.fromPartial(object.sellerFee)
        : undefined;
    message.buyerAuctionBatch = object.buyerAuctionBatch ?? "0";
    message.sellerAuctionBatch = object.sellerAuctionBatch ?? "0";
    return message;
  },
};

function createBaseFee(): Fee {
  return { makerFee: "", infrastructureFee: "", liquidityFee: "" };
}

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
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

  fromJSON(object: any): Fee {
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

  toJSON(message: Fee): unknown {
    const obj: any = {};
    message.makerFee !== undefined && (obj.makerFee = message.makerFee);
    message.infrastructureFee !== undefined &&
      (obj.infrastructureFee = message.infrastructureFee);
    message.liquidityFee !== undefined &&
      (obj.liquidityFee = message.liquidityFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = createBaseFee();
    message.makerFee = object.makerFee ?? "";
    message.infrastructureFee = object.infrastructureFee ?? "";
    message.liquidityFee = object.liquidityFee ?? "";
    return message;
  },
};

function createBaseTradeSet(): TradeSet {
  return { trades: [] };
}

export const TradeSet = {
  encode(
    message: TradeSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeSet();
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

  fromJSON(object: any): TradeSet {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => Trade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradeSet): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TradeSet>, I>>(object: I): TradeSet {
    const message = createBaseTradeSet();
    message.trades = object.trades?.map((e) => Trade.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCandle(): Candle {
  return {
    timestamp: "0",
    datetime: "",
    high: "",
    low: "",
    open: "",
    close: "",
    volume: "0",
    interval: 0,
  };
}

export const Candle = {
  encode(
    message: Candle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== "0") {
      writer.uint32(8).int64(message.timestamp);
    }
    if (message.datetime !== "") {
      writer.uint32(18).string(message.datetime);
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
    if (message.interval !== 0) {
      writer.uint32(64).int32(message.interval);
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
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 2:
          message.datetime = reader.string();
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
        case 8:
          message.interval = reader.int32() as any;
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
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      datetime: isSet(object.datetime) ? String(object.datetime) : "",
      high: isSet(object.high) ? String(object.high) : "",
      low: isSet(object.low) ? String(object.low) : "",
      open: isSet(object.open) ? String(object.open) : "",
      close: isSet(object.close) ? String(object.close) : "",
      volume: isSet(object.volume) ? String(object.volume) : "0",
      interval: isSet(object.interval) ? intervalFromJSON(object.interval) : 0,
    };
  },

  toJSON(message: Candle): unknown {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.datetime !== undefined && (obj.datetime = message.datetime);
    message.high !== undefined && (obj.high = message.high);
    message.low !== undefined && (obj.low = message.low);
    message.open !== undefined && (obj.open = message.open);
    message.close !== undefined && (obj.close = message.close);
    message.volume !== undefined && (obj.volume = message.volume);
    message.interval !== undefined &&
      (obj.interval = intervalToJSON(message.interval));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Candle>, I>>(object: I): Candle {
    const message = createBaseCandle();
    message.timestamp = object.timestamp ?? "0";
    message.datetime = object.datetime ?? "";
    message.high = object.high ?? "";
    message.low = object.low ?? "";
    message.open = object.open ?? "";
    message.close = object.close ?? "";
    message.volume = object.volume ?? "0";
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBasePriceLevel(): PriceLevel {
  return { price: "", numberOfOrders: "0", volume: "0" };
}

export const PriceLevel = {
  encode(
    message: PriceLevel,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.numberOfOrders !== "0") {
      writer.uint32(16).uint64(message.numberOfOrders);
    }
    if (message.volume !== "0") {
      writer.uint32(24).uint64(message.volume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PriceLevel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceLevel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.numberOfOrders = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.volume = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceLevel {
    return {
      price: isSet(object.price) ? String(object.price) : "",
      numberOfOrders: isSet(object.numberOfOrders)
        ? String(object.numberOfOrders)
        : "0",
      volume: isSet(object.volume) ? String(object.volume) : "0",
    };
  },

  toJSON(message: PriceLevel): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.numberOfOrders !== undefined &&
      (obj.numberOfOrders = message.numberOfOrders);
    message.volume !== undefined && (obj.volume = message.volume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceLevel>, I>>(
    object: I
  ): PriceLevel {
    const message = createBasePriceLevel();
    message.price = object.price ?? "";
    message.numberOfOrders = object.numberOfOrders ?? "0";
    message.volume = object.volume ?? "0";
    return message;
  },
};

function createBaseMarketDepth(): MarketDepth {
  return { marketId: "", buy: [], sell: [], sequenceNumber: "0" };
}

export const MarketDepth = {
  encode(
    message: MarketDepth,
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
    if (message.sequenceNumber !== "0") {
      writer.uint32(32).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDepth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepth();
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
          message.sequenceNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepth {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      buy: Array.isArray(object?.buy)
        ? object.buy.map((e: any) => PriceLevel.fromJSON(e))
        : [],
      sell: Array.isArray(object?.sell)
        ? object.sell.map((e: any) => PriceLevel.fromJSON(e))
        : [],
      sequenceNumber: isSet(object.sequenceNumber)
        ? String(object.sequenceNumber)
        : "0",
    };
  },

  toJSON(message: MarketDepth): unknown {
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
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = message.sequenceNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDepth>, I>>(
    object: I
  ): MarketDepth {
    const message = createBaseMarketDepth();
    message.marketId = object.marketId ?? "";
    message.buy = object.buy?.map((e) => PriceLevel.fromPartial(e)) || [];
    message.sell = object.sell?.map((e) => PriceLevel.fromPartial(e)) || [];
    message.sequenceNumber = object.sequenceNumber ?? "0";
    return message;
  },
};

function createBaseMarketDepthUpdate(): MarketDepthUpdate {
  return { marketId: "", buy: [], sell: [], sequenceNumber: "0" };
}

export const MarketDepthUpdate = {
  encode(
    message: MarketDepthUpdate,
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
    if (message.sequenceNumber !== "0") {
      writer.uint32(32).uint64(message.sequenceNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDepthUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDepthUpdate();
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
          message.sequenceNumber = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDepthUpdate {
    return {
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      buy: Array.isArray(object?.buy)
        ? object.buy.map((e: any) => PriceLevel.fromJSON(e))
        : [],
      sell: Array.isArray(object?.sell)
        ? object.sell.map((e: any) => PriceLevel.fromJSON(e))
        : [],
      sequenceNumber: isSet(object.sequenceNumber)
        ? String(object.sequenceNumber)
        : "0",
    };
  },

  toJSON(message: MarketDepthUpdate): unknown {
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
    message.sequenceNumber !== undefined &&
      (obj.sequenceNumber = message.sequenceNumber);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketDepthUpdate>, I>>(
    object: I
  ): MarketDepthUpdate {
    const message = createBaseMarketDepthUpdate();
    message.marketId = object.marketId ?? "";
    message.buy = object.buy?.map((e) => PriceLevel.fromPartial(e)) || [];
    message.sell = object.sell?.map((e) => PriceLevel.fromPartial(e)) || [];
    message.sequenceNumber = object.sequenceNumber ?? "0";
    return message;
  },
};

function createBasePosition(): Position {
  return {
    marketId: "",
    partyId: "",
    openVolume: "0",
    realisedPnl: "",
    unrealisedPnl: "",
    averageEntryPrice: "",
    updatedAt: "0",
  };
}

export const Position = {
  encode(
    message: Position,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.openVolume !== "0") {
      writer.uint32(24).int64(message.openVolume);
    }
    if (message.realisedPnl !== "") {
      writer.uint32(34).string(message.realisedPnl);
    }
    if (message.unrealisedPnl !== "") {
      writer.uint32(42).string(message.unrealisedPnl);
    }
    if (message.averageEntryPrice !== "") {
      writer.uint32(50).string(message.averageEntryPrice);
    }
    if (message.updatedAt !== "0") {
      writer.uint32(56).int64(message.updatedAt);
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
          message.marketId = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        case 3:
          message.openVolume = longToString(reader.int64() as Long);
          break;
        case 4:
          message.realisedPnl = reader.string();
          break;
        case 5:
          message.unrealisedPnl = reader.string();
          break;
        case 6:
          message.averageEntryPrice = reader.string();
          break;
        case 7:
          message.updatedAt = longToString(reader.int64() as Long);
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
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      openVolume: isSet(object.openVolume) ? String(object.openVolume) : "0",
      realisedPnl: isSet(object.realisedPnl) ? String(object.realisedPnl) : "",
      unrealisedPnl: isSet(object.unrealisedPnl)
        ? String(object.unrealisedPnl)
        : "",
      averageEntryPrice: isSet(object.averageEntryPrice)
        ? String(object.averageEntryPrice)
        : "",
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
    };
  },

  toJSON(message: Position): unknown {
    const obj: any = {};
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.openVolume !== undefined && (obj.openVolume = message.openVolume);
    message.realisedPnl !== undefined &&
      (obj.realisedPnl = message.realisedPnl);
    message.unrealisedPnl !== undefined &&
      (obj.unrealisedPnl = message.unrealisedPnl);
    message.averageEntryPrice !== undefined &&
      (obj.averageEntryPrice = message.averageEntryPrice);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Position>, I>>(object: I): Position {
    const message = createBasePosition();
    message.marketId = object.marketId ?? "";
    message.partyId = object.partyId ?? "";
    message.openVolume = object.openVolume ?? "0";
    message.realisedPnl = object.realisedPnl ?? "";
    message.unrealisedPnl = object.unrealisedPnl ?? "";
    message.averageEntryPrice = object.averageEntryPrice ?? "";
    message.updatedAt = object.updatedAt ?? "0";
    return message;
  },
};

function createBasePositionTrade(): PositionTrade {
  return { volume: "0", price: "" };
}

export const PositionTrade = {
  encode(
    message: PositionTrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.volume !== "0") {
      writer.uint32(8).int64(message.volume);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = longToString(reader.int64() as Long);
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

  fromJSON(object: any): PositionTrade {
    return {
      volume: isSet(object.volume) ? String(object.volume) : "0",
      price: isSet(object.price) ? String(object.price) : "",
    };
  },

  toJSON(message: PositionTrade): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PositionTrade>, I>>(
    object: I
  ): PositionTrade {
    const message = createBasePositionTrade();
    message.volume = object.volume ?? "0";
    message.price = object.price ?? "";
    return message;
  },
};

function createBaseDeposit(): Deposit {
  return {
    id: "",
    status: 0,
    partyId: "",
    asset: "",
    amount: "",
    txHash: "",
    creditedTimestamp: "0",
    createdTimestamp: "0",
  };
}

export const Deposit = {
  encode(
    message: Deposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.partyId !== "") {
      writer.uint32(26).string(message.partyId);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.txHash !== "") {
      writer.uint32(50).string(message.txHash);
    }
    if (message.creditedTimestamp !== "0") {
      writer.uint32(56).int64(message.creditedTimestamp);
    }
    if (message.createdTimestamp !== "0") {
      writer.uint32(64).int64(message.createdTimestamp);
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
          message.status = reader.int32() as any;
          break;
        case 3:
          message.partyId = reader.string();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.txHash = reader.string();
          break;
        case 7:
          message.creditedTimestamp = longToString(reader.int64() as Long);
          break;
        case 8:
          message.createdTimestamp = longToString(reader.int64() as Long);
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
      status: isSet(object.status) ? deposit_StatusFromJSON(object.status) : 0,
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      creditedTimestamp: isSet(object.creditedTimestamp)
        ? String(object.creditedTimestamp)
        : "0",
      createdTimestamp: isSet(object.createdTimestamp)
        ? String(object.createdTimestamp)
        : "0",
    };
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.status !== undefined &&
      (obj.status = deposit_StatusToJSON(message.status));
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.asset !== undefined && (obj.asset = message.asset);
    message.amount !== undefined && (obj.amount = message.amount);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.creditedTimestamp !== undefined &&
      (obj.creditedTimestamp = message.creditedTimestamp);
    message.createdTimestamp !== undefined &&
      (obj.createdTimestamp = message.createdTimestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Deposit>, I>>(object: I): Deposit {
    const message = createBaseDeposit();
    message.id = object.id ?? "";
    message.status = object.status ?? 0;
    message.partyId = object.partyId ?? "";
    message.asset = object.asset ?? "";
    message.amount = object.amount ?? "";
    message.txHash = object.txHash ?? "";
    message.creditedTimestamp = object.creditedTimestamp ?? "0";
    message.createdTimestamp = object.createdTimestamp ?? "0";
    return message;
  },
};

function createBaseWithdrawal(): Withdrawal {
  return {
    id: "",
    partyId: "",
    amount: "",
    asset: "",
    status: 0,
    ref: "",
    expiry: "0",
    txHash: "",
    createdTimestamp: "0",
    withdrawnTimestamp: "0",
    ext: undefined,
  };
}

export const Withdrawal = {
  encode(
    message: Withdrawal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.ref !== "") {
      writer.uint32(50).string(message.ref);
    }
    if (message.expiry !== "0") {
      writer.uint32(56).int64(message.expiry);
    }
    if (message.txHash !== "") {
      writer.uint32(66).string(message.txHash);
    }
    if (message.createdTimestamp !== "0") {
      writer.uint32(72).int64(message.createdTimestamp);
    }
    if (message.withdrawnTimestamp !== "0") {
      writer.uint32(80).int64(message.withdrawnTimestamp);
    }
    if (message.ext !== undefined) {
      WithdrawExt.encode(message.ext, writer.uint32(90).fork()).ldelim();
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
          message.id = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.status = reader.int32() as any;
          break;
        case 6:
          message.ref = reader.string();
          break;
        case 7:
          message.expiry = longToString(reader.int64() as Long);
          break;
        case 8:
          message.txHash = reader.string();
          break;
        case 9:
          message.createdTimestamp = longToString(reader.int64() as Long);
          break;
        case 10:
          message.withdrawnTimestamp = longToString(reader.int64() as Long);
          break;
        case 11:
          message.ext = WithdrawExt.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? String(object.id) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      status: isSet(object.status)
        ? withdrawal_StatusFromJSON(object.status)
        : 0,
      ref: isSet(object.ref) ? String(object.ref) : "",
      expiry: isSet(object.expiry) ? String(object.expiry) : "0",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      createdTimestamp: isSet(object.createdTimestamp)
        ? String(object.createdTimestamp)
        : "0",
      withdrawnTimestamp: isSet(object.withdrawnTimestamp)
        ? String(object.withdrawnTimestamp)
        : "0",
      ext: isSet(object.ext) ? WithdrawExt.fromJSON(object.ext) : undefined,
    };
  },

  toJSON(message: Withdrawal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.asset !== undefined && (obj.asset = message.asset);
    message.status !== undefined &&
      (obj.status = withdrawal_StatusToJSON(message.status));
    message.ref !== undefined && (obj.ref = message.ref);
    message.expiry !== undefined && (obj.expiry = message.expiry);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.createdTimestamp !== undefined &&
      (obj.createdTimestamp = message.createdTimestamp);
    message.withdrawnTimestamp !== undefined &&
      (obj.withdrawnTimestamp = message.withdrawnTimestamp);
    message.ext !== undefined &&
      (obj.ext = message.ext ? WithdrawExt.toJSON(message.ext) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Withdrawal>, I>>(
    object: I
  ): Withdrawal {
    const message = createBaseWithdrawal();
    message.id = object.id ?? "";
    message.partyId = object.partyId ?? "";
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    message.status = object.status ?? 0;
    message.ref = object.ref ?? "";
    message.expiry = object.expiry ?? "0";
    message.txHash = object.txHash ?? "";
    message.createdTimestamp = object.createdTimestamp ?? "0";
    message.withdrawnTimestamp = object.withdrawnTimestamp ?? "0";
    message.ext =
      object.ext !== undefined && object.ext !== null
        ? WithdrawExt.fromPartial(object.ext)
        : undefined;
    return message;
  },
};

function createBaseWithdrawExt(): WithdrawExt {
  return { erc20: undefined };
}

export const WithdrawExt = {
  encode(
    message: WithdrawExt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.erc20 !== undefined) {
      Erc20WithdrawExt.encode(message.erc20, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawExt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawExt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = Erc20WithdrawExt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawExt {
    return {
      erc20: isSet(object.erc20)
        ? Erc20WithdrawExt.fromJSON(object.erc20)
        : undefined,
    };
  },

  toJSON(message: WithdrawExt): unknown {
    const obj: any = {};
    message.erc20 !== undefined &&
      (obj.erc20 = message.erc20
        ? Erc20WithdrawExt.toJSON(message.erc20)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WithdrawExt>, I>>(
    object: I
  ): WithdrawExt {
    const message = createBaseWithdrawExt();
    message.erc20 =
      object.erc20 !== undefined && object.erc20 !== null
        ? Erc20WithdrawExt.fromPartial(object.erc20)
        : undefined;
    return message;
  },
};

function createBaseErc20WithdrawExt(): Erc20WithdrawExt {
  return { receiverAddress: "" };
}

export const Erc20WithdrawExt = {
  encode(
    message: Erc20WithdrawExt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.receiverAddress !== "") {
      writer.uint32(10).string(message.receiverAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Erc20WithdrawExt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErc20WithdrawExt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiverAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Erc20WithdrawExt {
    return {
      receiverAddress: isSet(object.receiverAddress)
        ? String(object.receiverAddress)
        : "",
    };
  },

  toJSON(message: Erc20WithdrawExt): unknown {
    const obj: any = {};
    message.receiverAddress !== undefined &&
      (obj.receiverAddress = message.receiverAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Erc20WithdrawExt>, I>>(
    object: I
  ): Erc20WithdrawExt {
    const message = createBaseErc20WithdrawExt();
    message.receiverAddress = object.receiverAddress ?? "";
    return message;
  },
};

function createBaseAccount(): Account {
  return { id: "", owner: "", balance: "", asset: "", marketId: "", type: 0 };
}

export const Account = {
  encode(
    message: Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.marketId = reader.string();
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.owner !== undefined && (obj.owner = message.owner);
    message.balance !== undefined && (obj.balance = message.balance);
    message.asset !== undefined && (obj.asset = message.asset);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.balance = object.balance ?? "";
    message.asset = object.asset ?? "";
    message.marketId = object.marketId ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseFinancialAmount(): FinancialAmount {
  return { amount: "", asset: "" };
}

export const FinancialAmount = {
  encode(
    message: FinancialAmount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FinancialAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFinancialAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
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

  fromJSON(object: any): FinancialAmount {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: FinancialAmount): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FinancialAmount>, I>>(
    object: I
  ): FinancialAmount {
    const message = createBaseFinancialAmount();
    message.amount = object.amount ?? "";
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseTransfer(): Transfer {
  return { owner: "", amount: undefined, type: 0, minAmount: "" };
}

export const Transfer = {
  encode(
    message: Transfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.amount !== undefined) {
      FinancialAmount.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.minAmount !== "") {
      writer.uint32(34).string(message.minAmount);
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
          message.owner = reader.string();
          break;
        case 2:
          message.amount = FinancialAmount.decode(reader, reader.uint32());
          break;
        case 3:
          message.type = reader.int32() as any;
          break;
        case 4:
          message.minAmount = reader.string();
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      amount: isSet(object.amount)
        ? FinancialAmount.fromJSON(object.amount)
        : undefined,
      type: isSet(object.type) ? transferTypeFromJSON(object.type) : 0,
      minAmount: isSet(object.minAmount) ? String(object.minAmount) : "",
    };
  },

  toJSON(message: Transfer): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.amount !== undefined &&
      (obj.amount = message.amount
        ? FinancialAmount.toJSON(message.amount)
        : undefined);
    message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
    message.minAmount !== undefined && (obj.minAmount = message.minAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
    const message = createBaseTransfer();
    message.owner = object.owner ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? FinancialAmount.fromPartial(object.amount)
        : undefined;
    message.type = object.type ?? 0;
    message.minAmount = object.minAmount ?? "";
    return message;
  },
};

function createBaseTransferRequest(): TransferRequest {
  return {
    fromAccount: [],
    toAccount: [],
    amount: "",
    minAmount: "",
    asset: "",
    reference: "",
  };
}

export const TransferRequest = {
  encode(
    message: TransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.fromAccount) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.toAccount) {
      Account.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.minAmount !== "") {
      writer.uint32(34).string(message.minAmount);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    if (message.reference !== "") {
      writer.uint32(50).string(message.reference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAccount.push(Account.decode(reader, reader.uint32()));
          break;
        case 2:
          message.toAccount.push(Account.decode(reader, reader.uint32()));
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.minAmount = reader.string();
          break;
        case 5:
          message.asset = reader.string();
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

  fromJSON(object: any): TransferRequest {
    return {
      fromAccount: Array.isArray(object?.fromAccount)
        ? object.fromAccount.map((e: any) => Account.fromJSON(e))
        : [],
      toAccount: Array.isArray(object?.toAccount)
        ? object.toAccount.map((e: any) => Account.fromJSON(e))
        : [],
      amount: isSet(object.amount) ? String(object.amount) : "",
      minAmount: isSet(object.minAmount) ? String(object.minAmount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      reference: isSet(object.reference) ? String(object.reference) : "",
    };
  },

  toJSON(message: TransferRequest): unknown {
    const obj: any = {};
    if (message.fromAccount) {
      obj.fromAccount = message.fromAccount.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.fromAccount = [];
    }
    if (message.toAccount) {
      obj.toAccount = message.toAccount.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.toAccount = [];
    }
    message.amount !== undefined && (obj.amount = message.amount);
    message.minAmount !== undefined && (obj.minAmount = message.minAmount);
    message.asset !== undefined && (obj.asset = message.asset);
    message.reference !== undefined && (obj.reference = message.reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferRequest>, I>>(
    object: I
  ): TransferRequest {
    const message = createBaseTransferRequest();
    message.fromAccount =
      object.fromAccount?.map((e) => Account.fromPartial(e)) || [];
    message.toAccount =
      object.toAccount?.map((e) => Account.fromPartial(e)) || [];
    message.amount = object.amount ?? "";
    message.minAmount = object.minAmount ?? "";
    message.asset = object.asset ?? "";
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseLedgerEntry(): LedgerEntry {
  return {
    fromAccount: "",
    toAccount: "",
    amount: "",
    reference: "",
    type: "",
    timestamp: "0",
  };
}

export const LedgerEntry = {
  encode(
    message: LedgerEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAccount !== "") {
      writer.uint32(10).string(message.fromAccount);
    }
    if (message.toAccount !== "") {
      writer.uint32(18).string(message.toAccount);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.reference !== "") {
      writer.uint32(34).string(message.reference);
    }
    if (message.type !== "") {
      writer.uint32(42).string(message.type);
    }
    if (message.timestamp !== "0") {
      writer.uint32(48).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAccount = reader.string();
          break;
        case 2:
          message.toAccount = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.reference = reader.string();
          break;
        case 5:
          message.type = reader.string();
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

  fromJSON(object: any): LedgerEntry {
    return {
      fromAccount: isSet(object.fromAccount) ? String(object.fromAccount) : "",
      toAccount: isSet(object.toAccount) ? String(object.toAccount) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      reference: isSet(object.reference) ? String(object.reference) : "",
      type: isSet(object.type) ? String(object.type) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: LedgerEntry): unknown {
    const obj: any = {};
    message.fromAccount !== undefined &&
      (obj.fromAccount = message.fromAccount);
    message.toAccount !== undefined && (obj.toAccount = message.toAccount);
    message.amount !== undefined && (obj.amount = message.amount);
    message.reference !== undefined && (obj.reference = message.reference);
    message.type !== undefined && (obj.type = message.type);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LedgerEntry>, I>>(
    object: I
  ): LedgerEntry {
    const message = createBaseLedgerEntry();
    message.fromAccount = object.fromAccount ?? "";
    message.toAccount = object.toAccount ?? "";
    message.amount = object.amount ?? "";
    message.reference = object.reference ?? "";
    message.type = object.type ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseTransferBalance(): TransferBalance {
  return { account: undefined, balance: "" };
}

export const TransferBalance = {
  encode(
    message: TransferBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== undefined) {
      Account.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Account.decode(reader, reader.uint32());
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

  fromJSON(object: any): TransferBalance {
    return {
      account: isSet(object.account)
        ? Account.fromJSON(object.account)
        : undefined,
      balance: isSet(object.balance) ? String(object.balance) : "",
    };
  },

  toJSON(message: TransferBalance): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account
        ? Account.toJSON(message.account)
        : undefined);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferBalance>, I>>(
    object: I
  ): TransferBalance {
    const message = createBaseTransferBalance();
    message.account =
      object.account !== undefined && object.account !== null
        ? Account.fromPartial(object.account)
        : undefined;
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseTransferResponse(): TransferResponse {
  return { transfers: [], balances: [] };
}

export const TransferResponse = {
  encode(
    message: TransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transfers) {
      LedgerEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      TransferBalance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfers.push(LedgerEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.balances.push(
            TransferBalance.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferResponse {
    return {
      transfers: Array.isArray(object?.transfers)
        ? object.transfers.map((e: any) => LedgerEntry.fromJSON(e))
        : [],
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => TransferBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransferResponse): unknown {
    const obj: any = {};
    if (message.transfers) {
      obj.transfers = message.transfers.map((e) =>
        e ? LedgerEntry.toJSON(e) : undefined
      );
    } else {
      obj.transfers = [];
    }
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? TransferBalance.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferResponse>, I>>(
    object: I
  ): TransferResponse {
    const message = createBaseTransferResponse();
    message.transfers =
      object.transfers?.map((e) => LedgerEntry.fromPartial(e)) || [];
    message.balances =
      object.balances?.map((e) => TransferBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMarginLevels(): MarginLevels {
  return {
    maintenanceMargin: "",
    searchLevel: "",
    initialMargin: "",
    collateralReleaseLevel: "",
    partyId: "",
    marketId: "",
    asset: "",
    timestamp: "0",
  };
}

export const MarginLevels = {
  encode(
    message: MarginLevels,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maintenanceMargin !== "") {
      writer.uint32(10).string(message.maintenanceMargin);
    }
    if (message.searchLevel !== "") {
      writer.uint32(18).string(message.searchLevel);
    }
    if (message.initialMargin !== "") {
      writer.uint32(26).string(message.initialMargin);
    }
    if (message.collateralReleaseLevel !== "") {
      writer.uint32(34).string(message.collateralReleaseLevel);
    }
    if (message.partyId !== "") {
      writer.uint32(42).string(message.partyId);
    }
    if (message.marketId !== "") {
      writer.uint32(50).string(message.marketId);
    }
    if (message.asset !== "") {
      writer.uint32(58).string(message.asset);
    }
    if (message.timestamp !== "0") {
      writer.uint32(64).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarginLevels {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarginLevels();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maintenanceMargin = reader.string();
          break;
        case 2:
          message.searchLevel = reader.string();
          break;
        case 3:
          message.initialMargin = reader.string();
          break;
        case 4:
          message.collateralReleaseLevel = reader.string();
          break;
        case 5:
          message.partyId = reader.string();
          break;
        case 6:
          message.marketId = reader.string();
          break;
        case 7:
          message.asset = reader.string();
          break;
        case 8:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarginLevels {
    return {
      maintenanceMargin: isSet(object.maintenanceMargin)
        ? String(object.maintenanceMargin)
        : "",
      searchLevel: isSet(object.searchLevel) ? String(object.searchLevel) : "",
      initialMargin: isSet(object.initialMargin)
        ? String(object.initialMargin)
        : "",
      collateralReleaseLevel: isSet(object.collateralReleaseLevel)
        ? String(object.collateralReleaseLevel)
        : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: MarginLevels): unknown {
    const obj: any = {};
    message.maintenanceMargin !== undefined &&
      (obj.maintenanceMargin = message.maintenanceMargin);
    message.searchLevel !== undefined &&
      (obj.searchLevel = message.searchLevel);
    message.initialMargin !== undefined &&
      (obj.initialMargin = message.initialMargin);
    message.collateralReleaseLevel !== undefined &&
      (obj.collateralReleaseLevel = message.collateralReleaseLevel);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.asset !== undefined && (obj.asset = message.asset);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarginLevels>, I>>(
    object: I
  ): MarginLevels {
    const message = createBaseMarginLevels();
    message.maintenanceMargin = object.maintenanceMargin ?? "";
    message.searchLevel = object.searchLevel ?? "";
    message.initialMargin = object.initialMargin ?? "";
    message.collateralReleaseLevel = object.collateralReleaseLevel ?? "";
    message.partyId = object.partyId ?? "";
    message.marketId = object.marketId ?? "";
    message.asset = object.asset ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBaseMarketData(): MarketData {
  return {
    markPrice: "",
    bestBidPrice: "",
    bestBidVolume: "0",
    bestOfferPrice: "",
    bestOfferVolume: "0",
    bestStaticBidPrice: "",
    bestStaticBidVolume: "0",
    bestStaticOfferPrice: "",
    bestStaticOfferVolume: "0",
    midPrice: "",
    staticMidPrice: "",
    market: "",
    timestamp: "0",
    openInterest: "0",
    auctionEnd: "0",
    auctionStart: "0",
    indicativePrice: "",
    indicativeVolume: "0",
    marketTradingMode: 0,
    trigger: 0,
    extensionTrigger: 0,
    targetStake: "",
    suppliedStake: "",
    priceMonitoringBounds: [],
    marketValueProxy: "",
    liquidityProviderFeeShare: [],
  };
}

export const MarketData = {
  encode(
    message: MarketData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.markPrice !== "") {
      writer.uint32(10).string(message.markPrice);
    }
    if (message.bestBidPrice !== "") {
      writer.uint32(18).string(message.bestBidPrice);
    }
    if (message.bestBidVolume !== "0") {
      writer.uint32(24).uint64(message.bestBidVolume);
    }
    if (message.bestOfferPrice !== "") {
      writer.uint32(34).string(message.bestOfferPrice);
    }
    if (message.bestOfferVolume !== "0") {
      writer.uint32(40).uint64(message.bestOfferVolume);
    }
    if (message.bestStaticBidPrice !== "") {
      writer.uint32(50).string(message.bestStaticBidPrice);
    }
    if (message.bestStaticBidVolume !== "0") {
      writer.uint32(56).uint64(message.bestStaticBidVolume);
    }
    if (message.bestStaticOfferPrice !== "") {
      writer.uint32(66).string(message.bestStaticOfferPrice);
    }
    if (message.bestStaticOfferVolume !== "0") {
      writer.uint32(72).uint64(message.bestStaticOfferVolume);
    }
    if (message.midPrice !== "") {
      writer.uint32(82).string(message.midPrice);
    }
    if (message.staticMidPrice !== "") {
      writer.uint32(90).string(message.staticMidPrice);
    }
    if (message.market !== "") {
      writer.uint32(98).string(message.market);
    }
    if (message.timestamp !== "0") {
      writer.uint32(104).int64(message.timestamp);
    }
    if (message.openInterest !== "0") {
      writer.uint32(112).uint64(message.openInterest);
    }
    if (message.auctionEnd !== "0") {
      writer.uint32(120).int64(message.auctionEnd);
    }
    if (message.auctionStart !== "0") {
      writer.uint32(128).int64(message.auctionStart);
    }
    if (message.indicativePrice !== "") {
      writer.uint32(138).string(message.indicativePrice);
    }
    if (message.indicativeVolume !== "0") {
      writer.uint32(144).uint64(message.indicativeVolume);
    }
    if (message.marketTradingMode !== 0) {
      writer.uint32(152).int32(message.marketTradingMode);
    }
    if (message.trigger !== 0) {
      writer.uint32(160).int32(message.trigger);
    }
    if (message.extensionTrigger !== 0) {
      writer.uint32(168).int32(message.extensionTrigger);
    }
    if (message.targetStake !== "") {
      writer.uint32(178).string(message.targetStake);
    }
    if (message.suppliedStake !== "") {
      writer.uint32(186).string(message.suppliedStake);
    }
    for (const v of message.priceMonitoringBounds) {
      PriceMonitoringBounds.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.marketValueProxy !== "") {
      writer.uint32(202).string(message.marketValueProxy);
    }
    for (const v of message.liquidityProviderFeeShare) {
      LiquidityProviderFeeShare.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markPrice = reader.string();
          break;
        case 2:
          message.bestBidPrice = reader.string();
          break;
        case 3:
          message.bestBidVolume = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.bestOfferPrice = reader.string();
          break;
        case 5:
          message.bestOfferVolume = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.bestStaticBidPrice = reader.string();
          break;
        case 7:
          message.bestStaticBidVolume = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.bestStaticOfferPrice = reader.string();
          break;
        case 9:
          message.bestStaticOfferVolume = longToString(reader.uint64() as Long);
          break;
        case 10:
          message.midPrice = reader.string();
          break;
        case 11:
          message.staticMidPrice = reader.string();
          break;
        case 12:
          message.market = reader.string();
          break;
        case 13:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        case 14:
          message.openInterest = longToString(reader.uint64() as Long);
          break;
        case 15:
          message.auctionEnd = longToString(reader.int64() as Long);
          break;
        case 16:
          message.auctionStart = longToString(reader.int64() as Long);
          break;
        case 17:
          message.indicativePrice = reader.string();
          break;
        case 18:
          message.indicativeVolume = longToString(reader.uint64() as Long);
          break;
        case 19:
          message.marketTradingMode = reader.int32() as any;
          break;
        case 20:
          message.trigger = reader.int32() as any;
          break;
        case 21:
          message.extensionTrigger = reader.int32() as any;
          break;
        case 22:
          message.targetStake = reader.string();
          break;
        case 23:
          message.suppliedStake = reader.string();
          break;
        case 24:
          message.priceMonitoringBounds.push(
            PriceMonitoringBounds.decode(reader, reader.uint32())
          );
          break;
        case 25:
          message.marketValueProxy = reader.string();
          break;
        case 26:
          message.liquidityProviderFeeShare.push(
            LiquidityProviderFeeShare.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketData {
    return {
      markPrice: isSet(object.markPrice) ? String(object.markPrice) : "",
      bestBidPrice: isSet(object.bestBidPrice)
        ? String(object.bestBidPrice)
        : "",
      bestBidVolume: isSet(object.bestBidVolume)
        ? String(object.bestBidVolume)
        : "0",
      bestOfferPrice: isSet(object.bestOfferPrice)
        ? String(object.bestOfferPrice)
        : "",
      bestOfferVolume: isSet(object.bestOfferVolume)
        ? String(object.bestOfferVolume)
        : "0",
      bestStaticBidPrice: isSet(object.bestStaticBidPrice)
        ? String(object.bestStaticBidPrice)
        : "",
      bestStaticBidVolume: isSet(object.bestStaticBidVolume)
        ? String(object.bestStaticBidVolume)
        : "0",
      bestStaticOfferPrice: isSet(object.bestStaticOfferPrice)
        ? String(object.bestStaticOfferPrice)
        : "",
      bestStaticOfferVolume: isSet(object.bestStaticOfferVolume)
        ? String(object.bestStaticOfferVolume)
        : "0",
      midPrice: isSet(object.midPrice) ? String(object.midPrice) : "",
      staticMidPrice: isSet(object.staticMidPrice)
        ? String(object.staticMidPrice)
        : "",
      market: isSet(object.market) ? String(object.market) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
      openInterest: isSet(object.openInterest)
        ? String(object.openInterest)
        : "0",
      auctionEnd: isSet(object.auctionEnd) ? String(object.auctionEnd) : "0",
      auctionStart: isSet(object.auctionStart)
        ? String(object.auctionStart)
        : "0",
      indicativePrice: isSet(object.indicativePrice)
        ? String(object.indicativePrice)
        : "",
      indicativeVolume: isSet(object.indicativeVolume)
        ? String(object.indicativeVolume)
        : "0",
      marketTradingMode: isSet(object.marketTradingMode)
        ? market_TradingModeFromJSON(object.marketTradingMode)
        : 0,
      trigger: isSet(object.trigger)
        ? auctionTriggerFromJSON(object.trigger)
        : 0,
      extensionTrigger: isSet(object.extensionTrigger)
        ? auctionTriggerFromJSON(object.extensionTrigger)
        : 0,
      targetStake: isSet(object.targetStake) ? String(object.targetStake) : "",
      suppliedStake: isSet(object.suppliedStake)
        ? String(object.suppliedStake)
        : "",
      priceMonitoringBounds: Array.isArray(object?.priceMonitoringBounds)
        ? object.priceMonitoringBounds.map((e: any) =>
            PriceMonitoringBounds.fromJSON(e)
          )
        : [],
      marketValueProxy: isSet(object.marketValueProxy)
        ? String(object.marketValueProxy)
        : "",
      liquidityProviderFeeShare: Array.isArray(
        object?.liquidityProviderFeeShare
      )
        ? object.liquidityProviderFeeShare.map((e: any) =>
            LiquidityProviderFeeShare.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: MarketData): unknown {
    const obj: any = {};
    message.markPrice !== undefined && (obj.markPrice = message.markPrice);
    message.bestBidPrice !== undefined &&
      (obj.bestBidPrice = message.bestBidPrice);
    message.bestBidVolume !== undefined &&
      (obj.bestBidVolume = message.bestBidVolume);
    message.bestOfferPrice !== undefined &&
      (obj.bestOfferPrice = message.bestOfferPrice);
    message.bestOfferVolume !== undefined &&
      (obj.bestOfferVolume = message.bestOfferVolume);
    message.bestStaticBidPrice !== undefined &&
      (obj.bestStaticBidPrice = message.bestStaticBidPrice);
    message.bestStaticBidVolume !== undefined &&
      (obj.bestStaticBidVolume = message.bestStaticBidVolume);
    message.bestStaticOfferPrice !== undefined &&
      (obj.bestStaticOfferPrice = message.bestStaticOfferPrice);
    message.bestStaticOfferVolume !== undefined &&
      (obj.bestStaticOfferVolume = message.bestStaticOfferVolume);
    message.midPrice !== undefined && (obj.midPrice = message.midPrice);
    message.staticMidPrice !== undefined &&
      (obj.staticMidPrice = message.staticMidPrice);
    message.market !== undefined && (obj.market = message.market);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.openInterest !== undefined &&
      (obj.openInterest = message.openInterest);
    message.auctionEnd !== undefined && (obj.auctionEnd = message.auctionEnd);
    message.auctionStart !== undefined &&
      (obj.auctionStart = message.auctionStart);
    message.indicativePrice !== undefined &&
      (obj.indicativePrice = message.indicativePrice);
    message.indicativeVolume !== undefined &&
      (obj.indicativeVolume = message.indicativeVolume);
    message.marketTradingMode !== undefined &&
      (obj.marketTradingMode = market_TradingModeToJSON(
        message.marketTradingMode
      ));
    message.trigger !== undefined &&
      (obj.trigger = auctionTriggerToJSON(message.trigger));
    message.extensionTrigger !== undefined &&
      (obj.extensionTrigger = auctionTriggerToJSON(message.extensionTrigger));
    message.targetStake !== undefined &&
      (obj.targetStake = message.targetStake);
    message.suppliedStake !== undefined &&
      (obj.suppliedStake = message.suppliedStake);
    if (message.priceMonitoringBounds) {
      obj.priceMonitoringBounds = message.priceMonitoringBounds.map((e) =>
        e ? PriceMonitoringBounds.toJSON(e) : undefined
      );
    } else {
      obj.priceMonitoringBounds = [];
    }
    message.marketValueProxy !== undefined &&
      (obj.marketValueProxy = message.marketValueProxy);
    if (message.liquidityProviderFeeShare) {
      obj.liquidityProviderFeeShare = message.liquidityProviderFeeShare.map(
        (e) => (e ? LiquidityProviderFeeShare.toJSON(e) : undefined)
      );
    } else {
      obj.liquidityProviderFeeShare = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketData>, I>>(
    object: I
  ): MarketData {
    const message = createBaseMarketData();
    message.markPrice = object.markPrice ?? "";
    message.bestBidPrice = object.bestBidPrice ?? "";
    message.bestBidVolume = object.bestBidVolume ?? "0";
    message.bestOfferPrice = object.bestOfferPrice ?? "";
    message.bestOfferVolume = object.bestOfferVolume ?? "0";
    message.bestStaticBidPrice = object.bestStaticBidPrice ?? "";
    message.bestStaticBidVolume = object.bestStaticBidVolume ?? "0";
    message.bestStaticOfferPrice = object.bestStaticOfferPrice ?? "";
    message.bestStaticOfferVolume = object.bestStaticOfferVolume ?? "0";
    message.midPrice = object.midPrice ?? "";
    message.staticMidPrice = object.staticMidPrice ?? "";
    message.market = object.market ?? "";
    message.timestamp = object.timestamp ?? "0";
    message.openInterest = object.openInterest ?? "0";
    message.auctionEnd = object.auctionEnd ?? "0";
    message.auctionStart = object.auctionStart ?? "0";
    message.indicativePrice = object.indicativePrice ?? "";
    message.indicativeVolume = object.indicativeVolume ?? "0";
    message.marketTradingMode = object.marketTradingMode ?? 0;
    message.trigger = object.trigger ?? 0;
    message.extensionTrigger = object.extensionTrigger ?? 0;
    message.targetStake = object.targetStake ?? "";
    message.suppliedStake = object.suppliedStake ?? "";
    message.priceMonitoringBounds =
      object.priceMonitoringBounds?.map((e) =>
        PriceMonitoringBounds.fromPartial(e)
      ) || [];
    message.marketValueProxy = object.marketValueProxy ?? "";
    message.liquidityProviderFeeShare =
      object.liquidityProviderFeeShare?.map((e) =>
        LiquidityProviderFeeShare.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseLiquidityProviderFeeShare(): LiquidityProviderFeeShare {
  return { party: "", equityLikeShare: "", averageEntryValuation: "" };
}

export const LiquidityProviderFeeShare = {
  encode(
    message: LiquidityProviderFeeShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.equityLikeShare !== "") {
      writer.uint32(18).string(message.equityLikeShare);
    }
    if (message.averageEntryValuation !== "") {
      writer.uint32(26).string(message.averageEntryValuation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProviderFeeShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderFeeShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.equityLikeShare = reader.string();
          break;
        case 3:
          message.averageEntryValuation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProviderFeeShare {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      equityLikeShare: isSet(object.equityLikeShare)
        ? String(object.equityLikeShare)
        : "",
      averageEntryValuation: isSet(object.averageEntryValuation)
        ? String(object.averageEntryValuation)
        : "",
    };
  },

  toJSON(message: LiquidityProviderFeeShare): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.equityLikeShare !== undefined &&
      (obj.equityLikeShare = message.equityLikeShare);
    message.averageEntryValuation !== undefined &&
      (obj.averageEntryValuation = message.averageEntryValuation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProviderFeeShare>, I>>(
    object: I
  ): LiquidityProviderFeeShare {
    const message = createBaseLiquidityProviderFeeShare();
    message.party = object.party ?? "";
    message.equityLikeShare = object.equityLikeShare ?? "";
    message.averageEntryValuation = object.averageEntryValuation ?? "";
    return message;
  },
};

function createBasePriceMonitoringBounds(): PriceMonitoringBounds {
  return {
    minValidPrice: "",
    maxValidPrice: "",
    trigger: undefined,
    referencePrice: "",
  };
}

export const PriceMonitoringBounds = {
  encode(
    message: PriceMonitoringBounds,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.minValidPrice !== "") {
      writer.uint32(10).string(message.minValidPrice);
    }
    if (message.maxValidPrice !== "") {
      writer.uint32(18).string(message.maxValidPrice);
    }
    if (message.trigger !== undefined) {
      PriceMonitoringTrigger.encode(
        message.trigger,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.referencePrice !== "") {
      writer.uint32(34).string(message.referencePrice);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PriceMonitoringBounds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceMonitoringBounds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minValidPrice = reader.string();
          break;
        case 2:
          message.maxValidPrice = reader.string();
          break;
        case 3:
          message.trigger = PriceMonitoringTrigger.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.referencePrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PriceMonitoringBounds {
    return {
      minValidPrice: isSet(object.minValidPrice)
        ? String(object.minValidPrice)
        : "",
      maxValidPrice: isSet(object.maxValidPrice)
        ? String(object.maxValidPrice)
        : "",
      trigger: isSet(object.trigger)
        ? PriceMonitoringTrigger.fromJSON(object.trigger)
        : undefined,
      referencePrice: isSet(object.referencePrice)
        ? String(object.referencePrice)
        : "",
    };
  },

  toJSON(message: PriceMonitoringBounds): unknown {
    const obj: any = {};
    message.minValidPrice !== undefined &&
      (obj.minValidPrice = message.minValidPrice);
    message.maxValidPrice !== undefined &&
      (obj.maxValidPrice = message.maxValidPrice);
    message.trigger !== undefined &&
      (obj.trigger = message.trigger
        ? PriceMonitoringTrigger.toJSON(message.trigger)
        : undefined);
    message.referencePrice !== undefined &&
      (obj.referencePrice = message.referencePrice);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PriceMonitoringBounds>, I>>(
    object: I
  ): PriceMonitoringBounds {
    const message = createBasePriceMonitoringBounds();
    message.minValidPrice = object.minValidPrice ?? "";
    message.maxValidPrice = object.maxValidPrice ?? "";
    message.trigger =
      object.trigger !== undefined && object.trigger !== null
        ? PriceMonitoringTrigger.fromPartial(object.trigger)
        : undefined;
    message.referencePrice = object.referencePrice ?? "";
    return message;
  },
};

function createBaseErrorDetail(): ErrorDetail {
  return { code: 0, message: "", inner: "" };
}

export const ErrorDetail = {
  encode(
    message: ErrorDetail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.inner !== "") {
      writer.uint32(26).string(message.inner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.inner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorDetail {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      inner: isSet(object.inner) ? String(object.inner) : "",
    };
  },

  toJSON(message: ErrorDetail): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);
    message.inner !== undefined && (obj.inner = message.inner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorDetail>, I>>(
    object: I
  ): ErrorDetail {
    const message = createBaseErrorDetail();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.inner = object.inner ?? "";
    return message;
  },
};

function createBaseNetworkParameter(): NetworkParameter {
  return { key: "", value: "" };
}

export const NetworkParameter = {
  encode(
    message: NetworkParameter,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkParameter();
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

  fromJSON(object: any): NetworkParameter {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: NetworkParameter): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkParameter>, I>>(
    object: I
  ): NetworkParameter {
    const message = createBaseNetworkParameter();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseNetworkLimits(): NetworkLimits {
  return {
    canProposeMarket: false,
    canProposeAsset: false,
    bootstrapFinished: false,
    proposeMarketEnabled: false,
    proposeAssetEnabled: false,
    bootstrapBlockCount: 0,
    genesisLoaded: false,
    proposeMarketEnabledFrom: "0",
    proposeAssetEnabledFrom: "0",
  };
}

export const NetworkLimits = {
  encode(
    message: NetworkLimits,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.canProposeMarket === true) {
      writer.uint32(8).bool(message.canProposeMarket);
    }
    if (message.canProposeAsset === true) {
      writer.uint32(16).bool(message.canProposeAsset);
    }
    if (message.bootstrapFinished === true) {
      writer.uint32(24).bool(message.bootstrapFinished);
    }
    if (message.proposeMarketEnabled === true) {
      writer.uint32(32).bool(message.proposeMarketEnabled);
    }
    if (message.proposeAssetEnabled === true) {
      writer.uint32(40).bool(message.proposeAssetEnabled);
    }
    if (message.bootstrapBlockCount !== 0) {
      writer.uint32(48).uint32(message.bootstrapBlockCount);
    }
    if (message.genesisLoaded === true) {
      writer.uint32(56).bool(message.genesisLoaded);
    }
    if (message.proposeMarketEnabledFrom !== "0") {
      writer.uint32(64).int64(message.proposeMarketEnabledFrom);
    }
    if (message.proposeAssetEnabledFrom !== "0") {
      writer.uint32(72).int64(message.proposeAssetEnabledFrom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkLimits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canProposeMarket = reader.bool();
          break;
        case 2:
          message.canProposeAsset = reader.bool();
          break;
        case 3:
          message.bootstrapFinished = reader.bool();
          break;
        case 4:
          message.proposeMarketEnabled = reader.bool();
          break;
        case 5:
          message.proposeAssetEnabled = reader.bool();
          break;
        case 6:
          message.bootstrapBlockCount = reader.uint32();
          break;
        case 7:
          message.genesisLoaded = reader.bool();
          break;
        case 8:
          message.proposeMarketEnabledFrom = longToString(
            reader.int64() as Long
          );
          break;
        case 9:
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

  fromJSON(object: any): NetworkLimits {
    return {
      canProposeMarket: isSet(object.canProposeMarket)
        ? Boolean(object.canProposeMarket)
        : false,
      canProposeAsset: isSet(object.canProposeAsset)
        ? Boolean(object.canProposeAsset)
        : false,
      bootstrapFinished: isSet(object.bootstrapFinished)
        ? Boolean(object.bootstrapFinished)
        : false,
      proposeMarketEnabled: isSet(object.proposeMarketEnabled)
        ? Boolean(object.proposeMarketEnabled)
        : false,
      proposeAssetEnabled: isSet(object.proposeAssetEnabled)
        ? Boolean(object.proposeAssetEnabled)
        : false,
      bootstrapBlockCount: isSet(object.bootstrapBlockCount)
        ? Number(object.bootstrapBlockCount)
        : 0,
      genesisLoaded: isSet(object.genesisLoaded)
        ? Boolean(object.genesisLoaded)
        : false,
      proposeMarketEnabledFrom: isSet(object.proposeMarketEnabledFrom)
        ? String(object.proposeMarketEnabledFrom)
        : "0",
      proposeAssetEnabledFrom: isSet(object.proposeAssetEnabledFrom)
        ? String(object.proposeAssetEnabledFrom)
        : "0",
    };
  },

  toJSON(message: NetworkLimits): unknown {
    const obj: any = {};
    message.canProposeMarket !== undefined &&
      (obj.canProposeMarket = message.canProposeMarket);
    message.canProposeAsset !== undefined &&
      (obj.canProposeAsset = message.canProposeAsset);
    message.bootstrapFinished !== undefined &&
      (obj.bootstrapFinished = message.bootstrapFinished);
    message.proposeMarketEnabled !== undefined &&
      (obj.proposeMarketEnabled = message.proposeMarketEnabled);
    message.proposeAssetEnabled !== undefined &&
      (obj.proposeAssetEnabled = message.proposeAssetEnabled);
    message.bootstrapBlockCount !== undefined &&
      (obj.bootstrapBlockCount = Math.round(message.bootstrapBlockCount));
    message.genesisLoaded !== undefined &&
      (obj.genesisLoaded = message.genesisLoaded);
    message.proposeMarketEnabledFrom !== undefined &&
      (obj.proposeMarketEnabledFrom = message.proposeMarketEnabledFrom);
    message.proposeAssetEnabledFrom !== undefined &&
      (obj.proposeAssetEnabledFrom = message.proposeAssetEnabledFrom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkLimits>, I>>(
    object: I
  ): NetworkLimits {
    const message = createBaseNetworkLimits();
    message.canProposeMarket = object.canProposeMarket ?? false;
    message.canProposeAsset = object.canProposeAsset ?? false;
    message.bootstrapFinished = object.bootstrapFinished ?? false;
    message.proposeMarketEnabled = object.proposeMarketEnabled ?? false;
    message.proposeAssetEnabled = object.proposeAssetEnabled ?? false;
    message.bootstrapBlockCount = object.bootstrapBlockCount ?? 0;
    message.genesisLoaded = object.genesisLoaded ?? false;
    message.proposeMarketEnabledFrom = object.proposeMarketEnabledFrom ?? "0";
    message.proposeAssetEnabledFrom = object.proposeAssetEnabledFrom ?? "0";
    return message;
  },
};

function createBaseLiquidityOrder(): LiquidityOrder {
  return { reference: 0, proportion: 0, offset: "" };
}

export const LiquidityOrder = {
  encode(
    message: LiquidityOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reference !== 0) {
      writer.uint32(8).int32(message.reference);
    }
    if (message.proportion !== 0) {
      writer.uint32(16).uint32(message.proportion);
    }
    if (message.offset !== "") {
      writer.uint32(26).string(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reference = reader.int32() as any;
          break;
        case 2:
          message.proportion = reader.uint32();
          break;
        case 3:
          message.offset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityOrder {
    return {
      reference: isSet(object.reference)
        ? peggedReferenceFromJSON(object.reference)
        : 0,
      proportion: isSet(object.proportion) ? Number(object.proportion) : 0,
      offset: isSet(object.offset) ? String(object.offset) : "",
    };
  },

  toJSON(message: LiquidityOrder): unknown {
    const obj: any = {};
    message.reference !== undefined &&
      (obj.reference = peggedReferenceToJSON(message.reference));
    message.proportion !== undefined &&
      (obj.proportion = Math.round(message.proportion));
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityOrder>, I>>(
    object: I
  ): LiquidityOrder {
    const message = createBaseLiquidityOrder();
    message.reference = object.reference ?? 0;
    message.proportion = object.proportion ?? 0;
    message.offset = object.offset ?? "";
    return message;
  },
};

function createBaseLiquidityOrderReference(): LiquidityOrderReference {
  return { orderId: "", liquidityOrder: undefined };
}

export const LiquidityOrderReference = {
  encode(
    message: LiquidityOrderReference,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.liquidityOrder !== undefined) {
      LiquidityOrder.encode(
        message.liquidityOrder,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityOrderReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityOrderReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.liquidityOrder = LiquidityOrder.decode(
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

  fromJSON(object: any): LiquidityOrderReference {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      liquidityOrder: isSet(object.liquidityOrder)
        ? LiquidityOrder.fromJSON(object.liquidityOrder)
        : undefined,
    };
  },

  toJSON(message: LiquidityOrderReference): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.liquidityOrder !== undefined &&
      (obj.liquidityOrder = message.liquidityOrder
        ? LiquidityOrder.toJSON(message.liquidityOrder)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityOrderReference>, I>>(
    object: I
  ): LiquidityOrderReference {
    const message = createBaseLiquidityOrderReference();
    message.orderId = object.orderId ?? "";
    message.liquidityOrder =
      object.liquidityOrder !== undefined && object.liquidityOrder !== null
        ? LiquidityOrder.fromPartial(object.liquidityOrder)
        : undefined;
    return message;
  },
};

function createBaseLiquidityProvision(): LiquidityProvision {
  return {
    id: "",
    partyId: "",
    createdAt: "0",
    updatedAt: "0",
    marketId: "",
    commitmentAmount: "",
    fee: "",
    sells: [],
    buys: [],
    version: "",
    status: 0,
    reference: "",
  };
}

export const LiquidityProvision = {
  encode(
    message: LiquidityProvision,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.createdAt !== "0") {
      writer.uint32(24).int64(message.createdAt);
    }
    if (message.updatedAt !== "0") {
      writer.uint32(32).int64(message.updatedAt);
    }
    if (message.marketId !== "") {
      writer.uint32(42).string(message.marketId);
    }
    if (message.commitmentAmount !== "") {
      writer.uint32(50).string(message.commitmentAmount);
    }
    if (message.fee !== "") {
      writer.uint32(58).string(message.fee);
    }
    for (const v of message.sells) {
      LiquidityOrderReference.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.buys) {
      LiquidityOrderReference.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(82).string(message.version);
    }
    if (message.status !== 0) {
      writer.uint32(88).int32(message.status);
    }
    if (message.reference !== "") {
      writer.uint32(98).string(message.reference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvision {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvision();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        case 3:
          message.createdAt = longToString(reader.int64() as Long);
          break;
        case 4:
          message.updatedAt = longToString(reader.int64() as Long);
          break;
        case 5:
          message.marketId = reader.string();
          break;
        case 6:
          message.commitmentAmount = reader.string();
          break;
        case 7:
          message.fee = reader.string();
          break;
        case 8:
          message.sells.push(
            LiquidityOrderReference.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.buys.push(
            LiquidityOrderReference.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.version = reader.string();
          break;
        case 11:
          message.status = reader.int32() as any;
          break;
        case 12:
          message.reference = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvision {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
      marketId: isSet(object.marketId) ? String(object.marketId) : "",
      commitmentAmount: isSet(object.commitmentAmount)
        ? String(object.commitmentAmount)
        : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      sells: Array.isArray(object?.sells)
        ? object.sells.map((e: any) => LiquidityOrderReference.fromJSON(e))
        : [],
      buys: Array.isArray(object?.buys)
        ? object.buys.map((e: any) => LiquidityOrderReference.fromJSON(e))
        : [],
      version: isSet(object.version) ? String(object.version) : "",
      status: isSet(object.status)
        ? liquidityProvision_StatusFromJSON(object.status)
        : 0,
      reference: isSet(object.reference) ? String(object.reference) : "",
    };
  },

  toJSON(message: LiquidityProvision): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    message.marketId !== undefined && (obj.marketId = message.marketId);
    message.commitmentAmount !== undefined &&
      (obj.commitmentAmount = message.commitmentAmount);
    message.fee !== undefined && (obj.fee = message.fee);
    if (message.sells) {
      obj.sells = message.sells.map((e) =>
        e ? LiquidityOrderReference.toJSON(e) : undefined
      );
    } else {
      obj.sells = [];
    }
    if (message.buys) {
      obj.buys = message.buys.map((e) =>
        e ? LiquidityOrderReference.toJSON(e) : undefined
      );
    } else {
      obj.buys = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.status !== undefined &&
      (obj.status = liquidityProvision_StatusToJSON(message.status));
    message.reference !== undefined && (obj.reference = message.reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LiquidityProvision>, I>>(
    object: I
  ): LiquidityProvision {
    const message = createBaseLiquidityProvision();
    message.id = object.id ?? "";
    message.partyId = object.partyId ?? "";
    message.createdAt = object.createdAt ?? "0";
    message.updatedAt = object.updatedAt ?? "0";
    message.marketId = object.marketId ?? "";
    message.commitmentAmount = object.commitmentAmount ?? "";
    message.fee = object.fee ?? "";
    message.sells =
      object.sells?.map((e) => LiquidityOrderReference.fromPartial(e)) || [];
    message.buys =
      object.buys?.map((e) => LiquidityOrderReference.fromPartial(e)) || [];
    message.version = object.version ?? "";
    message.status = object.status ?? 0;
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseEthereumConfig(): EthereumConfig {
  return {
    networkId: "",
    chainId: "",
    collateralBridgeContract: undefined,
    confirmations: 0,
    stakingBridgeContract: undefined,
    tokenVestingContract: undefined,
    multisigControlContract: undefined,
  };
}

export const EthereumConfig = {
  encode(
    message: EthereumConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkId !== "") {
      writer.uint32(10).string(message.networkId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.collateralBridgeContract !== undefined) {
      EthereumContractConfig.encode(
        message.collateralBridgeContract,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.confirmations !== 0) {
      writer.uint32(32).uint32(message.confirmations);
    }
    if (message.stakingBridgeContract !== undefined) {
      EthereumContractConfig.encode(
        message.stakingBridgeContract,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.tokenVestingContract !== undefined) {
      EthereumContractConfig.encode(
        message.tokenVestingContract,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.multisigControlContract !== undefined) {
      EthereumContractConfig.encode(
        message.multisigControlContract,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EthereumConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthereumConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.collateralBridgeContract = EthereumContractConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.confirmations = reader.uint32();
          break;
        case 5:
          message.stakingBridgeContract = EthereumContractConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.tokenVestingContract = EthereumContractConfig.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.multisigControlContract = EthereumContractConfig.decode(
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

  fromJSON(object: any): EthereumConfig {
    return {
      networkId: isSet(object.networkId) ? String(object.networkId) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      collateralBridgeContract: isSet(object.collateralBridgeContract)
        ? EthereumContractConfig.fromJSON(object.collateralBridgeContract)
        : undefined,
      confirmations: isSet(object.confirmations)
        ? Number(object.confirmations)
        : 0,
      stakingBridgeContract: isSet(object.stakingBridgeContract)
        ? EthereumContractConfig.fromJSON(object.stakingBridgeContract)
        : undefined,
      tokenVestingContract: isSet(object.tokenVestingContract)
        ? EthereumContractConfig.fromJSON(object.tokenVestingContract)
        : undefined,
      multisigControlContract: isSet(object.multisigControlContract)
        ? EthereumContractConfig.fromJSON(object.multisigControlContract)
        : undefined,
    };
  },

  toJSON(message: EthereumConfig): unknown {
    const obj: any = {};
    message.networkId !== undefined && (obj.networkId = message.networkId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.collateralBridgeContract !== undefined &&
      (obj.collateralBridgeContract = message.collateralBridgeContract
        ? EthereumContractConfig.toJSON(message.collateralBridgeContract)
        : undefined);
    message.confirmations !== undefined &&
      (obj.confirmations = Math.round(message.confirmations));
    message.stakingBridgeContract !== undefined &&
      (obj.stakingBridgeContract = message.stakingBridgeContract
        ? EthereumContractConfig.toJSON(message.stakingBridgeContract)
        : undefined);
    message.tokenVestingContract !== undefined &&
      (obj.tokenVestingContract = message.tokenVestingContract
        ? EthereumContractConfig.toJSON(message.tokenVestingContract)
        : undefined);
    message.multisigControlContract !== undefined &&
      (obj.multisigControlContract = message.multisigControlContract
        ? EthereumContractConfig.toJSON(message.multisigControlContract)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EthereumConfig>, I>>(
    object: I
  ): EthereumConfig {
    const message = createBaseEthereumConfig();
    message.networkId = object.networkId ?? "";
    message.chainId = object.chainId ?? "";
    message.collateralBridgeContract =
      object.collateralBridgeContract !== undefined &&
      object.collateralBridgeContract !== null
        ? EthereumContractConfig.fromPartial(object.collateralBridgeContract)
        : undefined;
    message.confirmations = object.confirmations ?? 0;
    message.stakingBridgeContract =
      object.stakingBridgeContract !== undefined &&
      object.stakingBridgeContract !== null
        ? EthereumContractConfig.fromPartial(object.stakingBridgeContract)
        : undefined;
    message.tokenVestingContract =
      object.tokenVestingContract !== undefined &&
      object.tokenVestingContract !== null
        ? EthereumContractConfig.fromPartial(object.tokenVestingContract)
        : undefined;
    message.multisigControlContract =
      object.multisigControlContract !== undefined &&
      object.multisigControlContract !== null
        ? EthereumContractConfig.fromPartial(object.multisigControlContract)
        : undefined;
    return message;
  },
};

function createBaseEthereumContractConfig(): EthereumContractConfig {
  return { address: "", deploymentBlockHeight: "0" };
}

export const EthereumContractConfig = {
  encode(
    message: EthereumContractConfig,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.deploymentBlockHeight !== "0") {
      writer.uint32(48).uint64(message.deploymentBlockHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EthereumContractConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthereumContractConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 6:
          message.deploymentBlockHeight = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EthereumContractConfig {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      deploymentBlockHeight: isSet(object.deploymentBlockHeight)
        ? String(object.deploymentBlockHeight)
        : "0",
    };
  },

  toJSON(message: EthereumContractConfig): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.deploymentBlockHeight !== undefined &&
      (obj.deploymentBlockHeight = message.deploymentBlockHeight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EthereumContractConfig>, I>>(
    object: I
  ): EthereumContractConfig {
    const message = createBaseEthereumContractConfig();
    message.address = object.address ?? "";
    message.deploymentBlockHeight = object.deploymentBlockHeight ?? "0";
    return message;
  },
};

function createBaseEpochTimestamps(): EpochTimestamps {
  return {
    startTime: "0",
    expiryTime: "0",
    endTime: "0",
    firstBlock: "0",
    lastBlock: "0",
  };
}

export const EpochTimestamps = {
  encode(
    message: EpochTimestamps,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.startTime !== "0") {
      writer.uint32(8).int64(message.startTime);
    }
    if (message.expiryTime !== "0") {
      writer.uint32(16).int64(message.expiryTime);
    }
    if (message.endTime !== "0") {
      writer.uint32(24).int64(message.endTime);
    }
    if (message.firstBlock !== "0") {
      writer.uint32(32).uint64(message.firstBlock);
    }
    if (message.lastBlock !== "0") {
      writer.uint32(40).uint64(message.lastBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochTimestamps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochTimestamps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startTime = longToString(reader.int64() as Long);
          break;
        case 2:
          message.expiryTime = longToString(reader.int64() as Long);
          break;
        case 3:
          message.endTime = longToString(reader.int64() as Long);
          break;
        case 4:
          message.firstBlock = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.lastBlock = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochTimestamps {
    return {
      startTime: isSet(object.startTime) ? String(object.startTime) : "0",
      expiryTime: isSet(object.expiryTime) ? String(object.expiryTime) : "0",
      endTime: isSet(object.endTime) ? String(object.endTime) : "0",
      firstBlock: isSet(object.firstBlock) ? String(object.firstBlock) : "0",
      lastBlock: isSet(object.lastBlock) ? String(object.lastBlock) : "0",
    };
  },

  toJSON(message: EpochTimestamps): unknown {
    const obj: any = {};
    message.startTime !== undefined && (obj.startTime = message.startTime);
    message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime);
    message.endTime !== undefined && (obj.endTime = message.endTime);
    message.firstBlock !== undefined && (obj.firstBlock = message.firstBlock);
    message.lastBlock !== undefined && (obj.lastBlock = message.lastBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochTimestamps>, I>>(
    object: I
  ): EpochTimestamps {
    const message = createBaseEpochTimestamps();
    message.startTime = object.startTime ?? "0";
    message.expiryTime = object.expiryTime ?? "0";
    message.endTime = object.endTime ?? "0";
    message.firstBlock = object.firstBlock ?? "0";
    message.lastBlock = object.lastBlock ?? "0";
    return message;
  },
};

function createBaseEpoch(): Epoch {
  return { seq: "0", timestamps: undefined, validators: [], delegations: [] };
}

export const Epoch = {
  encode(message: Epoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seq !== "0") {
      writer.uint32(8).uint64(message.seq);
    }
    if (message.timestamps !== undefined) {
      EpochTimestamps.encode(
        message.timestamps,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.validators) {
      Node.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Epoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seq = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.timestamps = EpochTimestamps.decode(reader, reader.uint32());
          break;
        case 3:
          message.validators.push(Node.decode(reader, reader.uint32()));
          break;
        case 4:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Epoch {
    return {
      seq: isSet(object.seq) ? String(object.seq) : "0",
      timestamps: isSet(object.timestamps)
        ? EpochTimestamps.fromJSON(object.timestamps)
        : undefined,
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => Node.fromJSON(e))
        : [],
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Epoch): unknown {
    const obj: any = {};
    message.seq !== undefined && (obj.seq = message.seq);
    message.timestamps !== undefined &&
      (obj.timestamps = message.timestamps
        ? EpochTimestamps.toJSON(message.timestamps)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Node.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Epoch>, I>>(object: I): Epoch {
    const message = createBaseEpoch();
    message.seq = object.seq ?? "0";
    message.timestamps =
      object.timestamps !== undefined && object.timestamps !== null
        ? EpochTimestamps.fromPartial(object.timestamps)
        : undefined;
    message.validators =
      object.validators?.map((e) => Node.fromPartial(e)) || [];
    message.delegations =
      object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEpochParticipation(): EpochParticipation {
  return { epoch: undefined, offline: "0", online: "0", totalRewards: 0 };
}

export const EpochParticipation = {
  encode(
    message: EpochParticipation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(10).fork()).ldelim();
    }
    if (message.offline !== "0") {
      writer.uint32(16).uint64(message.offline);
    }
    if (message.online !== "0") {
      writer.uint32(24).uint64(message.online);
    }
    if (message.totalRewards !== 0) {
      writer.uint32(33).double(message.totalRewards);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochParticipation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochParticipation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = Epoch.decode(reader, reader.uint32());
          break;
        case 2:
          message.offline = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.online = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.totalRewards = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochParticipation {
    return {
      epoch: isSet(object.epoch) ? Epoch.fromJSON(object.epoch) : undefined,
      offline: isSet(object.offline) ? String(object.offline) : "0",
      online: isSet(object.online) ? String(object.online) : "0",
      totalRewards: isSet(object.totalRewards)
        ? Number(object.totalRewards)
        : 0,
    };
  },

  toJSON(message: EpochParticipation): unknown {
    const obj: any = {};
    message.epoch !== undefined &&
      (obj.epoch = message.epoch ? Epoch.toJSON(message.epoch) : undefined);
    message.offline !== undefined && (obj.offline = message.offline);
    message.online !== undefined && (obj.online = message.online);
    message.totalRewards !== undefined &&
      (obj.totalRewards = message.totalRewards);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochParticipation>, I>>(
    object: I
  ): EpochParticipation {
    const message = createBaseEpochParticipation();
    message.epoch =
      object.epoch !== undefined && object.epoch !== null
        ? Epoch.fromPartial(object.epoch)
        : undefined;
    message.offline = object.offline ?? "0";
    message.online = object.online ?? "0";
    message.totalRewards = object.totalRewards ?? 0;
    return message;
  },
};

function createBaseEpochData(): EpochData {
  return { total: 0, offline: 0, online: 0 };
}

export const EpochData = {
  encode(
    message: EpochData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).int32(message.total);
    }
    if (message.offline !== 0) {
      writer.uint32(16).int32(message.offline);
    }
    if (message.online !== 0) {
      writer.uint32(24).int32(message.online);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int32();
          break;
        case 2:
          message.offline = reader.int32();
          break;
        case 3:
          message.online = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochData {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      offline: isSet(object.offline) ? Number(object.offline) : 0,
      online: isSet(object.online) ? Number(object.online) : 0,
    };
  },

  toJSON(message: EpochData): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.offline !== undefined &&
      (obj.offline = Math.round(message.offline));
    message.online !== undefined && (obj.online = Math.round(message.online));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochData>, I>>(
    object: I
  ): EpochData {
    const message = createBaseEpochData();
    message.total = object.total ?? 0;
    message.offline = object.offline ?? 0;
    message.online = object.online ?? 0;
    return message;
  },
};

function createBaseRankingScore(): RankingScore {
  return {
    stakeScore: "",
    performanceScore: "",
    previousStatus: 0,
    status: 0,
    votingPower: 0,
    rankingScore: "",
  };
}

export const RankingScore = {
  encode(
    message: RankingScore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakeScore !== "") {
      writer.uint32(10).string(message.stakeScore);
    }
    if (message.performanceScore !== "") {
      writer.uint32(18).string(message.performanceScore);
    }
    if (message.previousStatus !== 0) {
      writer.uint32(24).int32(message.previousStatus);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.votingPower !== 0) {
      writer.uint32(40).uint32(message.votingPower);
    }
    if (message.rankingScore !== "") {
      writer.uint32(50).string(message.rankingScore);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RankingScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRankingScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakeScore = reader.string();
          break;
        case 2:
          message.performanceScore = reader.string();
          break;
        case 3:
          message.previousStatus = reader.int32() as any;
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.votingPower = reader.uint32();
          break;
        case 6:
          message.rankingScore = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RankingScore {
    return {
      stakeScore: isSet(object.stakeScore) ? String(object.stakeScore) : "",
      performanceScore: isSet(object.performanceScore)
        ? String(object.performanceScore)
        : "",
      previousStatus: isSet(object.previousStatus)
        ? validatorNodeStatusFromJSON(object.previousStatus)
        : 0,
      status: isSet(object.status)
        ? validatorNodeStatusFromJSON(object.status)
        : 0,
      votingPower: isSet(object.votingPower) ? Number(object.votingPower) : 0,
      rankingScore: isSet(object.rankingScore)
        ? String(object.rankingScore)
        : "",
    };
  },

  toJSON(message: RankingScore): unknown {
    const obj: any = {};
    message.stakeScore !== undefined && (obj.stakeScore = message.stakeScore);
    message.performanceScore !== undefined &&
      (obj.performanceScore = message.performanceScore);
    message.previousStatus !== undefined &&
      (obj.previousStatus = validatorNodeStatusToJSON(message.previousStatus));
    message.status !== undefined &&
      (obj.status = validatorNodeStatusToJSON(message.status));
    message.votingPower !== undefined &&
      (obj.votingPower = Math.round(message.votingPower));
    message.rankingScore !== undefined &&
      (obj.rankingScore = message.rankingScore);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RankingScore>, I>>(
    object: I
  ): RankingScore {
    const message = createBaseRankingScore();
    message.stakeScore = object.stakeScore ?? "";
    message.performanceScore = object.performanceScore ?? "";
    message.previousStatus = object.previousStatus ?? 0;
    message.status = object.status ?? 0;
    message.votingPower = object.votingPower ?? 0;
    message.rankingScore = object.rankingScore ?? "";
    return message;
  },
};

function createBaseRewardScore(): RewardScore {
  return {
    rawValidatorScore: "",
    performanceScore: "",
    multisigScore: "",
    validatorScore: "",
    normalisedScore: "",
    validatorStatus: 0,
  };
}

export const RewardScore = {
  encode(
    message: RewardScore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rawValidatorScore !== "") {
      writer.uint32(10).string(message.rawValidatorScore);
    }
    if (message.performanceScore !== "") {
      writer.uint32(18).string(message.performanceScore);
    }
    if (message.multisigScore !== "") {
      writer.uint32(26).string(message.multisigScore);
    }
    if (message.validatorScore !== "") {
      writer.uint32(34).string(message.validatorScore);
    }
    if (message.normalisedScore !== "") {
      writer.uint32(42).string(message.normalisedScore);
    }
    if (message.validatorStatus !== 0) {
      writer.uint32(48).int32(message.validatorStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rawValidatorScore = reader.string();
          break;
        case 2:
          message.performanceScore = reader.string();
          break;
        case 3:
          message.multisigScore = reader.string();
          break;
        case 4:
          message.validatorScore = reader.string();
          break;
        case 5:
          message.normalisedScore = reader.string();
          break;
        case 6:
          message.validatorStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardScore {
    return {
      rawValidatorScore: isSet(object.rawValidatorScore)
        ? String(object.rawValidatorScore)
        : "",
      performanceScore: isSet(object.performanceScore)
        ? String(object.performanceScore)
        : "",
      multisigScore: isSet(object.multisigScore)
        ? String(object.multisigScore)
        : "",
      validatorScore: isSet(object.validatorScore)
        ? String(object.validatorScore)
        : "",
      normalisedScore: isSet(object.normalisedScore)
        ? String(object.normalisedScore)
        : "",
      validatorStatus: isSet(object.validatorStatus)
        ? validatorNodeStatusFromJSON(object.validatorStatus)
        : 0,
    };
  },

  toJSON(message: RewardScore): unknown {
    const obj: any = {};
    message.rawValidatorScore !== undefined &&
      (obj.rawValidatorScore = message.rawValidatorScore);
    message.performanceScore !== undefined &&
      (obj.performanceScore = message.performanceScore);
    message.multisigScore !== undefined &&
      (obj.multisigScore = message.multisigScore);
    message.validatorScore !== undefined &&
      (obj.validatorScore = message.validatorScore);
    message.normalisedScore !== undefined &&
      (obj.normalisedScore = message.normalisedScore);
    message.validatorStatus !== undefined &&
      (obj.validatorStatus = validatorNodeStatusToJSON(
        message.validatorStatus
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardScore>, I>>(
    object: I
  ): RewardScore {
    const message = createBaseRewardScore();
    message.rawValidatorScore = object.rawValidatorScore ?? "";
    message.performanceScore = object.performanceScore ?? "";
    message.multisigScore = object.multisigScore ?? "";
    message.validatorScore = object.validatorScore ?? "";
    message.normalisedScore = object.normalisedScore ?? "";
    message.validatorStatus = object.validatorStatus ?? 0;
    return message;
  },
};

function createBaseNode(): Node {
  return {
    id: "",
    pubKey: "",
    tmPubKey: "",
    ethereumAdddress: "",
    infoUrl: "",
    location: "",
    stakedByOperator: "",
    stakedByDelegates: "",
    stakedTotal: "",
    maxIntendedStake: "",
    pendingStake: "",
    epochData: undefined,
    status: 0,
    delegations: [],
    rewardScore: undefined,
    rankingScore: undefined,
    name: "",
    avatarUrl: "",
  };
}

export const Node = {
  encode(message: Node, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    if (message.tmPubKey !== "") {
      writer.uint32(26).string(message.tmPubKey);
    }
    if (message.ethereumAdddress !== "") {
      writer.uint32(34).string(message.ethereumAdddress);
    }
    if (message.infoUrl !== "") {
      writer.uint32(42).string(message.infoUrl);
    }
    if (message.location !== "") {
      writer.uint32(50).string(message.location);
    }
    if (message.stakedByOperator !== "") {
      writer.uint32(58).string(message.stakedByOperator);
    }
    if (message.stakedByDelegates !== "") {
      writer.uint32(66).string(message.stakedByDelegates);
    }
    if (message.stakedTotal !== "") {
      writer.uint32(74).string(message.stakedTotal);
    }
    if (message.maxIntendedStake !== "") {
      writer.uint32(82).string(message.maxIntendedStake);
    }
    if (message.pendingStake !== "") {
      writer.uint32(90).string(message.pendingStake);
    }
    if (message.epochData !== undefined) {
      EpochData.encode(message.epochData, writer.uint32(98).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(104).int32(message.status);
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.rewardScore !== undefined) {
      RewardScore.encode(
        message.rewardScore,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.rankingScore !== undefined) {
      RankingScore.encode(
        message.rankingScore,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(138).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(146).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Node {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.pubKey = reader.string();
          break;
        case 3:
          message.tmPubKey = reader.string();
          break;
        case 4:
          message.ethereumAdddress = reader.string();
          break;
        case 5:
          message.infoUrl = reader.string();
          break;
        case 6:
          message.location = reader.string();
          break;
        case 7:
          message.stakedByOperator = reader.string();
          break;
        case 8:
          message.stakedByDelegates = reader.string();
          break;
        case 9:
          message.stakedTotal = reader.string();
          break;
        case 10:
          message.maxIntendedStake = reader.string();
          break;
        case 11:
          message.pendingStake = reader.string();
          break;
        case 12:
          message.epochData = EpochData.decode(reader, reader.uint32());
          break;
        case 13:
          message.status = reader.int32() as any;
          break;
        case 14:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 15:
          message.rewardScore = RewardScore.decode(reader, reader.uint32());
          break;
        case 16:
          message.rankingScore = RankingScore.decode(reader, reader.uint32());
          break;
        case 17:
          message.name = reader.string();
          break;
        case 18:
          message.avatarUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Node {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      tmPubKey: isSet(object.tmPubKey) ? String(object.tmPubKey) : "",
      ethereumAdddress: isSet(object.ethereumAdddress)
        ? String(object.ethereumAdddress)
        : "",
      infoUrl: isSet(object.infoUrl) ? String(object.infoUrl) : "",
      location: isSet(object.location) ? String(object.location) : "",
      stakedByOperator: isSet(object.stakedByOperator)
        ? String(object.stakedByOperator)
        : "",
      stakedByDelegates: isSet(object.stakedByDelegates)
        ? String(object.stakedByDelegates)
        : "",
      stakedTotal: isSet(object.stakedTotal) ? String(object.stakedTotal) : "",
      maxIntendedStake: isSet(object.maxIntendedStake)
        ? String(object.maxIntendedStake)
        : "",
      pendingStake: isSet(object.pendingStake)
        ? String(object.pendingStake)
        : "",
      epochData: isSet(object.epochData)
        ? EpochData.fromJSON(object.epochData)
        : undefined,
      status: isSet(object.status) ? nodeStatusFromJSON(object.status) : 0,
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
      rewardScore: isSet(object.rewardScore)
        ? RewardScore.fromJSON(object.rewardScore)
        : undefined,
      rankingScore: isSet(object.rankingScore)
        ? RankingScore.fromJSON(object.rankingScore)
        : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
    };
  },

  toJSON(message: Node): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.tmPubKey !== undefined && (obj.tmPubKey = message.tmPubKey);
    message.ethereumAdddress !== undefined &&
      (obj.ethereumAdddress = message.ethereumAdddress);
    message.infoUrl !== undefined && (obj.infoUrl = message.infoUrl);
    message.location !== undefined && (obj.location = message.location);
    message.stakedByOperator !== undefined &&
      (obj.stakedByOperator = message.stakedByOperator);
    message.stakedByDelegates !== undefined &&
      (obj.stakedByDelegates = message.stakedByDelegates);
    message.stakedTotal !== undefined &&
      (obj.stakedTotal = message.stakedTotal);
    message.maxIntendedStake !== undefined &&
      (obj.maxIntendedStake = message.maxIntendedStake);
    message.pendingStake !== undefined &&
      (obj.pendingStake = message.pendingStake);
    message.epochData !== undefined &&
      (obj.epochData = message.epochData
        ? EpochData.toJSON(message.epochData)
        : undefined);
    message.status !== undefined &&
      (obj.status = nodeStatusToJSON(message.status));
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    message.rewardScore !== undefined &&
      (obj.rewardScore = message.rewardScore
        ? RewardScore.toJSON(message.rewardScore)
        : undefined);
    message.rankingScore !== undefined &&
      (obj.rankingScore = message.rankingScore
        ? RankingScore.toJSON(message.rankingScore)
        : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Node>, I>>(object: I): Node {
    const message = createBaseNode();
    message.id = object.id ?? "";
    message.pubKey = object.pubKey ?? "";
    message.tmPubKey = object.tmPubKey ?? "";
    message.ethereumAdddress = object.ethereumAdddress ?? "";
    message.infoUrl = object.infoUrl ?? "";
    message.location = object.location ?? "";
    message.stakedByOperator = object.stakedByOperator ?? "";
    message.stakedByDelegates = object.stakedByDelegates ?? "";
    message.stakedTotal = object.stakedTotal ?? "";
    message.maxIntendedStake = object.maxIntendedStake ?? "";
    message.pendingStake = object.pendingStake ?? "";
    message.epochData =
      object.epochData !== undefined && object.epochData !== null
        ? EpochData.fromPartial(object.epochData)
        : undefined;
    message.status = object.status ?? 0;
    message.delegations =
      object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.rewardScore =
      object.rewardScore !== undefined && object.rewardScore !== null
        ? RewardScore.fromPartial(object.rewardScore)
        : undefined;
    message.rankingScore =
      object.rankingScore !== undefined && object.rankingScore !== null
        ? RankingScore.fromPartial(object.rankingScore)
        : undefined;
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseNodeData(): NodeData {
  return {
    stakedTotal: "",
    totalNodes: 0,
    inactiveNodes: 0,
    validatingNodes: 0,
    uptime: 0,
  };
}

export const NodeData = {
  encode(
    message: NodeData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stakedTotal !== "") {
      writer.uint32(10).string(message.stakedTotal);
    }
    if (message.totalNodes !== 0) {
      writer.uint32(16).uint32(message.totalNodes);
    }
    if (message.inactiveNodes !== 0) {
      writer.uint32(24).uint32(message.inactiveNodes);
    }
    if (message.validatingNodes !== 0) {
      writer.uint32(32).uint32(message.validatingNodes);
    }
    if (message.uptime !== 0) {
      writer.uint32(45).float(message.uptime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakedTotal = reader.string();
          break;
        case 2:
          message.totalNodes = reader.uint32();
          break;
        case 3:
          message.inactiveNodes = reader.uint32();
          break;
        case 4:
          message.validatingNodes = reader.uint32();
          break;
        case 5:
          message.uptime = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeData {
    return {
      stakedTotal: isSet(object.stakedTotal) ? String(object.stakedTotal) : "",
      totalNodes: isSet(object.totalNodes) ? Number(object.totalNodes) : 0,
      inactiveNodes: isSet(object.inactiveNodes)
        ? Number(object.inactiveNodes)
        : 0,
      validatingNodes: isSet(object.validatingNodes)
        ? Number(object.validatingNodes)
        : 0,
      uptime: isSet(object.uptime) ? Number(object.uptime) : 0,
    };
  },

  toJSON(message: NodeData): unknown {
    const obj: any = {};
    message.stakedTotal !== undefined &&
      (obj.stakedTotal = message.stakedTotal);
    message.totalNodes !== undefined &&
      (obj.totalNodes = Math.round(message.totalNodes));
    message.inactiveNodes !== undefined &&
      (obj.inactiveNodes = Math.round(message.inactiveNodes));
    message.validatingNodes !== undefined &&
      (obj.validatingNodes = Math.round(message.validatingNodes));
    message.uptime !== undefined && (obj.uptime = message.uptime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeData>, I>>(object: I): NodeData {
    const message = createBaseNodeData();
    message.stakedTotal = object.stakedTotal ?? "";
    message.totalNodes = object.totalNodes ?? 0;
    message.inactiveNodes = object.inactiveNodes ?? 0;
    message.validatingNodes = object.validatingNodes ?? 0;
    message.uptime = object.uptime ?? 0;
    return message;
  },
};

function createBaseDelegation(): Delegation {
  return { party: "", nodeId: "", amount: "", epochSeq: "" };
}

export const Delegation = {
  encode(
    message: Delegation,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
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

  fromJSON(object: any): Delegation {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegation>, I>>(
    object: I
  ): Delegation {
    const message = createBaseDelegation();
    message.party = object.party ?? "";
    message.nodeId = object.nodeId ?? "";
    message.amount = object.amount ?? "";
    message.epochSeq = object.epochSeq ?? "";
    return message;
  },
};

function createBaseReward(): Reward {
  return {
    assetId: "",
    partyId: "",
    epoch: "0",
    amount: "",
    percentageOfTotal: "",
    receivedAt: "0",
  };
}

export const Reward = {
  encode(
    message: Reward,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.epoch !== "0") {
      writer.uint32(24).uint64(message.epoch);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.percentageOfTotal !== "") {
      writer.uint32(42).string(message.percentageOfTotal);
    }
    if (message.receivedAt !== "0") {
      writer.uint32(48).int64(message.receivedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
          break;
        case 2:
          message.partyId = reader.string();
          break;
        case 3:
          message.epoch = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.percentageOfTotal = reader.string();
          break;
        case 6:
          message.receivedAt = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reward {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      epoch: isSet(object.epoch) ? String(object.epoch) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "",
      percentageOfTotal: isSet(object.percentageOfTotal)
        ? String(object.percentageOfTotal)
        : "",
      receivedAt: isSet(object.receivedAt) ? String(object.receivedAt) : "0",
    };
  },

  toJSON(message: Reward): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.epoch !== undefined && (obj.epoch = message.epoch);
    message.amount !== undefined && (obj.amount = message.amount);
    message.percentageOfTotal !== undefined &&
      (obj.percentageOfTotal = message.percentageOfTotal);
    message.receivedAt !== undefined && (obj.receivedAt = message.receivedAt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.assetId = object.assetId ?? "";
    message.partyId = object.partyId ?? "";
    message.epoch = object.epoch ?? "0";
    message.amount = object.amount ?? "";
    message.percentageOfTotal = object.percentageOfTotal ?? "";
    message.receivedAt = object.receivedAt ?? "0";
    return message;
  },
};

function createBaseRewardSummary(): RewardSummary {
  return { assetId: "", partyId: "", amount: "" };
}

export const RewardSummary = {
  encode(
    message: RewardSummary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetId !== "") {
      writer.uint32(10).string(message.assetId);
    }
    if (message.partyId !== "") {
      writer.uint32(18).string(message.partyId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetId = reader.string();
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

  fromJSON(object: any): RewardSummary {
    return {
      assetId: isSet(object.assetId) ? String(object.assetId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: RewardSummary): unknown {
    const obj: any = {};
    message.assetId !== undefined && (obj.assetId = message.assetId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardSummary>, I>>(
    object: I
  ): RewardSummary {
    const message = createBaseRewardSummary();
    message.assetId = object.assetId ?? "";
    message.partyId = object.partyId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseStateValueProposal(): StateValueProposal {
  return { stateVarId: "", eventId: "", kvb: [] };
}

export const StateValueProposal = {
  encode(
    message: StateValueProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stateVarId !== "") {
      writer.uint32(10).string(message.stateVarId);
    }
    if (message.eventId !== "") {
      writer.uint32(18).string(message.eventId);
    }
    for (const v of message.kvb) {
      KeyValueBundle.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateValueProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateValueProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stateVarId = reader.string();
          break;
        case 2:
          message.eventId = reader.string();
          break;
        case 3:
          message.kvb.push(KeyValueBundle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateValueProposal {
    return {
      stateVarId: isSet(object.stateVarId) ? String(object.stateVarId) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      kvb: Array.isArray(object?.kvb)
        ? object.kvb.map((e: any) => KeyValueBundle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StateValueProposal): unknown {
    const obj: any = {};
    message.stateVarId !== undefined && (obj.stateVarId = message.stateVarId);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    if (message.kvb) {
      obj.kvb = message.kvb.map((e) =>
        e ? KeyValueBundle.toJSON(e) : undefined
      );
    } else {
      obj.kvb = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StateValueProposal>, I>>(
    object: I
  ): StateValueProposal {
    const message = createBaseStateValueProposal();
    message.stateVarId = object.stateVarId ?? "";
    message.eventId = object.eventId ?? "";
    message.kvb = object.kvb?.map((e) => KeyValueBundle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKeyValueBundle(): KeyValueBundle {
  return { key: "", tolerance: "", value: undefined };
}

export const KeyValueBundle = {
  encode(
    message: KeyValueBundle,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.tolerance !== "") {
      writer.uint32(18).string(message.tolerance);
    }
    if (message.value !== undefined) {
      StateVarValue.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueBundle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValueBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.tolerance = reader.string();
          break;
        case 3:
          message.value = StateVarValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyValueBundle {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      tolerance: isSet(object.tolerance) ? String(object.tolerance) : "",
      value: isSet(object.value)
        ? StateVarValue.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: KeyValueBundle): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.tolerance !== undefined && (obj.tolerance = message.tolerance);
    message.value !== undefined &&
      (obj.value = message.value
        ? StateVarValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyValueBundle>, I>>(
    object: I
  ): KeyValueBundle {
    const message = createBaseKeyValueBundle();
    message.key = object.key ?? "";
    message.tolerance = object.tolerance ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? StateVarValue.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseStateVarValue(): StateVarValue {
  return { scalarVal: undefined, vectorVal: undefined, matrixVal: undefined };
}

export const StateVarValue = {
  encode(
    message: StateVarValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scalarVal !== undefined) {
      ScalarValue.encode(message.scalarVal, writer.uint32(10).fork()).ldelim();
    }
    if (message.vectorVal !== undefined) {
      VectorValue.encode(message.vectorVal, writer.uint32(18).fork()).ldelim();
    }
    if (message.matrixVal !== undefined) {
      MatrixValue.encode(message.matrixVal, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateVarValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateVarValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scalarVal = ScalarValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.vectorVal = VectorValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.matrixVal = MatrixValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateVarValue {
    return {
      scalarVal: isSet(object.scalarVal)
        ? ScalarValue.fromJSON(object.scalarVal)
        : undefined,
      vectorVal: isSet(object.vectorVal)
        ? VectorValue.fromJSON(object.vectorVal)
        : undefined,
      matrixVal: isSet(object.matrixVal)
        ? MatrixValue.fromJSON(object.matrixVal)
        : undefined,
    };
  },

  toJSON(message: StateVarValue): unknown {
    const obj: any = {};
    message.scalarVal !== undefined &&
      (obj.scalarVal = message.scalarVal
        ? ScalarValue.toJSON(message.scalarVal)
        : undefined);
    message.vectorVal !== undefined &&
      (obj.vectorVal = message.vectorVal
        ? VectorValue.toJSON(message.vectorVal)
        : undefined);
    message.matrixVal !== undefined &&
      (obj.matrixVal = message.matrixVal
        ? MatrixValue.toJSON(message.matrixVal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StateVarValue>, I>>(
    object: I
  ): StateVarValue {
    const message = createBaseStateVarValue();
    message.scalarVal =
      object.scalarVal !== undefined && object.scalarVal !== null
        ? ScalarValue.fromPartial(object.scalarVal)
        : undefined;
    message.vectorVal =
      object.vectorVal !== undefined && object.vectorVal !== null
        ? VectorValue.fromPartial(object.vectorVal)
        : undefined;
    message.matrixVal =
      object.matrixVal !== undefined && object.matrixVal !== null
        ? MatrixValue.fromPartial(object.matrixVal)
        : undefined;
    return message;
  },
};

function createBaseScalarValue(): ScalarValue {
  return { value: "" };
}

export const ScalarValue = {
  encode(
    message: ScalarValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScalarValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalarValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScalarValue {
    return {
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ScalarValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScalarValue>, I>>(
    object: I
  ): ScalarValue {
    const message = createBaseScalarValue();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseVectorValue(): VectorValue {
  return { value: [] };
}

export const VectorValue = {
  encode(
    message: VectorValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VectorValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVectorValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VectorValue {
    return {
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: VectorValue): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => e);
    } else {
      obj.value = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VectorValue>, I>>(
    object: I
  ): VectorValue {
    const message = createBaseVectorValue();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseMatrixValue(): MatrixValue {
  return { value: [] };
}

export const MatrixValue = {
  encode(
    message: MatrixValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.value) {
      VectorValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatrixValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatrixValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(VectorValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MatrixValue {
    return {
      value: Array.isArray(object?.value)
        ? object.value.map((e: any) => VectorValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MatrixValue): unknown {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) =>
        e ? VectorValue.toJSON(e) : undefined
      );
    } else {
      obj.value = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MatrixValue>, I>>(
    object: I
  ): MatrixValue {
    const message = createBaseMatrixValue();
    message.value = object.value?.map((e) => VectorValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUint64Value(): Uint64Value {
  return { value: "0" };
}

export const Uint64Value = {
  encode(
    message: Uint64Value,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.value !== "0") {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Uint64Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUint64Value();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Uint64Value {
    return {
      value: isSet(object.value) ? String(object.value) : "0",
    };
  },

  toJSON(message: Uint64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Uint64Value>, I>>(
    object: I
  ): Uint64Value {
    const message = createBaseUint64Value();
    message.value = object.value ?? "0";
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
