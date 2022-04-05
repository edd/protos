"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.Withdrawal_Status = exports.deposit_StatusToJSON = exports.deposit_StatusFromJSON = exports.Deposit_Status = exports.trade_TypeToJSON = exports.trade_TypeFromJSON = exports.Trade_Type = exports.order_StatusToJSON = exports.order_StatusFromJSON = exports.Order_Status = exports.order_TypeToJSON = exports.order_TypeFromJSON = exports.Order_Type = exports.order_TimeInForceToJSON = exports.order_TimeInForceFromJSON = exports.Order_TimeInForce = exports.validatorNodeStatusToJSON = exports.validatorNodeStatusFromJSON = exports.ValidatorNodeStatus = exports.epochActionToJSON = exports.epochActionFromJSON = exports.EpochAction = exports.nodeStatusToJSON = exports.nodeStatusFromJSON = exports.NodeStatus = exports.transferTypeToJSON = exports.transferTypeFromJSON = exports.TransferType = exports.accountTypeToJSON = exports.accountTypeFromJSON = exports.AccountType = exports.chainStatusToJSON = exports.chainStatusFromJSON = exports.ChainStatus = exports.orderErrorToJSON = exports.orderErrorFromJSON = exports.OrderError = exports.peggedReferenceToJSON = exports.peggedReferenceFromJSON = exports.PeggedReference = exports.auctionTriggerToJSON = exports.auctionTriggerFromJSON = exports.AuctionTrigger = exports.intervalToJSON = exports.intervalFromJSON = exports.Interval = exports.sideToJSON = exports.sideFromJSON = exports.Side = exports.protobufPackage = void 0;
exports.EpochData = exports.EpochParticipation = exports.Epoch = exports.EpochTimestamps = exports.EthereumContractConfig = exports.EthereumConfig = exports.LiquidityProvision = exports.LiquidityOrderReference = exports.LiquidityOrder = exports.NetworkLimits = exports.NetworkParameter = exports.ErrorDetail = exports.PriceMonitoringBounds = exports.LiquidityProviderFeeShare = exports.MarketData = exports.MarginLevels = exports.TransferResponse = exports.TransferBalance = exports.LedgerEntry = exports.TransferRequest = exports.Transfer = exports.FinancialAmount = exports.Account = exports.Erc20WithdrawExt = exports.WithdrawExt = exports.Withdrawal = exports.Deposit = exports.PositionTrade = exports.Position = exports.MarketDepthUpdate = exports.MarketDepth = exports.PriceLevel = exports.Candle = exports.TradeSet = exports.Fee = exports.Trade = exports.AuctionIndicativeState = exports.OrderConfirmation = exports.OrderCancellationConfirmation = exports.Order = exports.PeggedOrder = exports.RiskFactor = exports.Party = exports.Timestamp = exports.Price = exports.liquidityProvision_StatusToJSON = exports.liquidityProvision_StatusFromJSON = exports.LiquidityProvision_Status = exports.withdrawal_StatusToJSON = exports.withdrawal_StatusFromJSON = void 0;
exports.Uint64Value = exports.MatrixValue = exports.VectorValue = exports.ScalarValue = exports.StateVarValue = exports.KeyValueBundle = exports.StateValueProposal = exports.RewardSummary = exports.Reward = exports.Delegation = exports.NodeData = exports.Node = exports.RewardScore = exports.RankingScore = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var markets_1 = require("../vega/markets");
exports.protobufPackage = "vega";
/** A side relates to the direction of an order, to Buy, or Sell */
var Side;
(function (Side) {
    /** SIDE_UNSPECIFIED - Default value, always invalid */
    Side[Side["SIDE_UNSPECIFIED"] = 0] = "SIDE_UNSPECIFIED";
    /** SIDE_BUY - Buy order */
    Side[Side["SIDE_BUY"] = 1] = "SIDE_BUY";
    /** SIDE_SELL - Sell order */
    Side[Side["SIDE_SELL"] = 2] = "SIDE_SELL";
    Side[Side["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Side = exports.Side || (exports.Side = {}));
function sideFromJSON(object) {
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
exports.sideFromJSON = sideFromJSON;
function sideToJSON(object) {
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
exports.sideToJSON = sideToJSON;
/** Represents a set of time intervals that are used when querying for candle-stick data */
var Interval;
(function (Interval) {
    /** INTERVAL_UNSPECIFIED - Default value, always invalid */
    Interval[Interval["INTERVAL_UNSPECIFIED"] = 0] = "INTERVAL_UNSPECIFIED";
    /** INTERVAL_I1M - 1 minute. */
    Interval[Interval["INTERVAL_I1M"] = 60] = "INTERVAL_I1M";
    /** INTERVAL_I5M - 5 minutes. */
    Interval[Interval["INTERVAL_I5M"] = 300] = "INTERVAL_I5M";
    /** INTERVAL_I15M - 15 minutes. */
    Interval[Interval["INTERVAL_I15M"] = 900] = "INTERVAL_I15M";
    /** INTERVAL_I1H - 1 hour. */
    Interval[Interval["INTERVAL_I1H"] = 3600] = "INTERVAL_I1H";
    /** INTERVAL_I6H - 6 hours. */
    Interval[Interval["INTERVAL_I6H"] = 21600] = "INTERVAL_I6H";
    /** INTERVAL_I1D - 1 day. */
    Interval[Interval["INTERVAL_I1D"] = 86400] = "INTERVAL_I1D";
    Interval[Interval["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Interval = exports.Interval || (exports.Interval = {}));
function intervalFromJSON(object) {
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
exports.intervalFromJSON = intervalFromJSON;
function intervalToJSON(object) {
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
exports.intervalToJSON = intervalToJSON;
/** Auction triggers indicate what condition triggered an auction (if market is in auction mode) */
var AuctionTrigger;
(function (AuctionTrigger) {
    /** AUCTION_TRIGGER_UNSPECIFIED - Default value for AuctionTrigger, no auction triggered */
    AuctionTrigger[AuctionTrigger["AUCTION_TRIGGER_UNSPECIFIED"] = 0] = "AUCTION_TRIGGER_UNSPECIFIED";
    /** AUCTION_TRIGGER_BATCH - Batch auction */
    AuctionTrigger[AuctionTrigger["AUCTION_TRIGGER_BATCH"] = 1] = "AUCTION_TRIGGER_BATCH";
    /** AUCTION_TRIGGER_OPENING - Opening auction */
    AuctionTrigger[AuctionTrigger["AUCTION_TRIGGER_OPENING"] = 2] = "AUCTION_TRIGGER_OPENING";
    /** AUCTION_TRIGGER_PRICE - Price monitoring trigger */
    AuctionTrigger[AuctionTrigger["AUCTION_TRIGGER_PRICE"] = 3] = "AUCTION_TRIGGER_PRICE";
    /** AUCTION_TRIGGER_LIQUIDITY - Liquidity monitoring trigger */
    AuctionTrigger[AuctionTrigger["AUCTION_TRIGGER_LIQUIDITY"] = 4] = "AUCTION_TRIGGER_LIQUIDITY";
    AuctionTrigger[AuctionTrigger["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuctionTrigger = exports.AuctionTrigger || (exports.AuctionTrigger = {}));
function auctionTriggerFromJSON(object) {
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
exports.auctionTriggerFromJSON = auctionTriggerFromJSON;
function auctionTriggerToJSON(object) {
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
exports.auctionTriggerToJSON = auctionTriggerToJSON;
/**
 * A pegged reference defines which price point a pegged order is linked to - meaning
 * the price for a pegged order is calculated from the value of the reference price point
 */
var PeggedReference;
(function (PeggedReference) {
    /** PEGGED_REFERENCE_UNSPECIFIED - Default value for PeggedReference, no reference given */
    PeggedReference[PeggedReference["PEGGED_REFERENCE_UNSPECIFIED"] = 0] = "PEGGED_REFERENCE_UNSPECIFIED";
    /** PEGGED_REFERENCE_MID - Mid price reference */
    PeggedReference[PeggedReference["PEGGED_REFERENCE_MID"] = 1] = "PEGGED_REFERENCE_MID";
    /** PEGGED_REFERENCE_BEST_BID - Best bid price reference */
    PeggedReference[PeggedReference["PEGGED_REFERENCE_BEST_BID"] = 2] = "PEGGED_REFERENCE_BEST_BID";
    /** PEGGED_REFERENCE_BEST_ASK - Best ask price reference */
    PeggedReference[PeggedReference["PEGGED_REFERENCE_BEST_ASK"] = 3] = "PEGGED_REFERENCE_BEST_ASK";
    PeggedReference[PeggedReference["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PeggedReference = exports.PeggedReference || (exports.PeggedReference = {}));
function peggedReferenceFromJSON(object) {
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
exports.peggedReferenceFromJSON = peggedReferenceFromJSON;
function peggedReferenceToJSON(object) {
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
exports.peggedReferenceToJSON = peggedReferenceToJSON;
/**
 * OrderError codes are returned in the `[Order](#vega.Order).reason` field - If there is an issue
 * with an order during its life-cycle, it will be marked with `status.ORDER_STATUS_REJECTED`
 */
var OrderError;
(function (OrderError) {
    /** ORDER_ERROR_UNSPECIFIED - Default value, no error reported */
    OrderError[OrderError["ORDER_ERROR_UNSPECIFIED"] = 0] = "ORDER_ERROR_UNSPECIFIED";
    /** ORDER_ERROR_INVALID_MARKET_ID - Order was submitted for a market that does not exist */
    OrderError[OrderError["ORDER_ERROR_INVALID_MARKET_ID"] = 1] = "ORDER_ERROR_INVALID_MARKET_ID";
    /** ORDER_ERROR_INVALID_ORDER_ID - Order was submitted with an invalid identifier */
    OrderError[OrderError["ORDER_ERROR_INVALID_ORDER_ID"] = 2] = "ORDER_ERROR_INVALID_ORDER_ID";
    /** ORDER_ERROR_OUT_OF_SEQUENCE - Order was amended with a sequence number that was not previous version + 1 */
    OrderError[OrderError["ORDER_ERROR_OUT_OF_SEQUENCE"] = 3] = "ORDER_ERROR_OUT_OF_SEQUENCE";
    /** ORDER_ERROR_INVALID_REMAINING_SIZE - Order was amended with an invalid remaining size (e.g. remaining greater than total size) */
    OrderError[OrderError["ORDER_ERROR_INVALID_REMAINING_SIZE"] = 4] = "ORDER_ERROR_INVALID_REMAINING_SIZE";
    /** ORDER_ERROR_TIME_FAILURE - Node was unable to get Vega (blockchain) time */
    OrderError[OrderError["ORDER_ERROR_TIME_FAILURE"] = 5] = "ORDER_ERROR_TIME_FAILURE";
    /** ORDER_ERROR_REMOVAL_FAILURE - Failed to remove an order from the book */
    OrderError[OrderError["ORDER_ERROR_REMOVAL_FAILURE"] = 6] = "ORDER_ERROR_REMOVAL_FAILURE";
    /**
     * ORDER_ERROR_INVALID_EXPIRATION_DATETIME - An order with `TimeInForce.TIME_IN_FORCE_GTT` was submitted or amended
     * with an expiration that was badly formatted or otherwise invalid
     */
    OrderError[OrderError["ORDER_ERROR_INVALID_EXPIRATION_DATETIME"] = 7] = "ORDER_ERROR_INVALID_EXPIRATION_DATETIME";
    /** ORDER_ERROR_INVALID_ORDER_REFERENCE - Order was submitted or amended with an invalid reference field */
    OrderError[OrderError["ORDER_ERROR_INVALID_ORDER_REFERENCE"] = 8] = "ORDER_ERROR_INVALID_ORDER_REFERENCE";
    /** ORDER_ERROR_EDIT_NOT_ALLOWED - Order amend was submitted for an order field that cannot not be amended (e.g. order identifier) */
    OrderError[OrderError["ORDER_ERROR_EDIT_NOT_ALLOWED"] = 9] = "ORDER_ERROR_EDIT_NOT_ALLOWED";
    /** ORDER_ERROR_AMEND_FAILURE - Amend failure because amend details do not match original order */
    OrderError[OrderError["ORDER_ERROR_AMEND_FAILURE"] = 10] = "ORDER_ERROR_AMEND_FAILURE";
    /** ORDER_ERROR_NOT_FOUND - Order not found in an order book or store */
    OrderError[OrderError["ORDER_ERROR_NOT_FOUND"] = 11] = "ORDER_ERROR_NOT_FOUND";
    /** ORDER_ERROR_INVALID_PARTY_ID - Order was submitted with an invalid or missing party identifier */
    OrderError[OrderError["ORDER_ERROR_INVALID_PARTY_ID"] = 12] = "ORDER_ERROR_INVALID_PARTY_ID";
    /** ORDER_ERROR_MARKET_CLOSED - Order was submitted for a market that has closed */
    OrderError[OrderError["ORDER_ERROR_MARKET_CLOSED"] = 13] = "ORDER_ERROR_MARKET_CLOSED";
    /** ORDER_ERROR_MARGIN_CHECK_FAILED - Order was submitted, but the party did not have enough collateral to cover the order */
    OrderError[OrderError["ORDER_ERROR_MARGIN_CHECK_FAILED"] = 14] = "ORDER_ERROR_MARGIN_CHECK_FAILED";
    /** ORDER_ERROR_MISSING_GENERAL_ACCOUNT - Order was submitted, but the party did not have an account for this asset */
    OrderError[OrderError["ORDER_ERROR_MISSING_GENERAL_ACCOUNT"] = 15] = "ORDER_ERROR_MISSING_GENERAL_ACCOUNT";
    /** ORDER_ERROR_INTERNAL_ERROR - Unspecified internal error */
    OrderError[OrderError["ORDER_ERROR_INTERNAL_ERROR"] = 16] = "ORDER_ERROR_INTERNAL_ERROR";
    /** ORDER_ERROR_INVALID_SIZE - Order was submitted with an invalid or missing size (e.g. 0) */
    OrderError[OrderError["ORDER_ERROR_INVALID_SIZE"] = 17] = "ORDER_ERROR_INVALID_SIZE";
    /** ORDER_ERROR_INVALID_PERSISTENCE - Order was submitted with an invalid persistence for its type */
    OrderError[OrderError["ORDER_ERROR_INVALID_PERSISTENCE"] = 18] = "ORDER_ERROR_INVALID_PERSISTENCE";
    /** ORDER_ERROR_INVALID_TYPE - Order was submitted with an invalid type field */
    OrderError[OrderError["ORDER_ERROR_INVALID_TYPE"] = 19] = "ORDER_ERROR_INVALID_TYPE";
    /** ORDER_ERROR_SELF_TRADING - Order was stopped as it would have traded with another order submitted from the same party */
    OrderError[OrderError["ORDER_ERROR_SELF_TRADING"] = 20] = "ORDER_ERROR_SELF_TRADING";
    /** ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES - Order was submitted, but the party did not have enough collateral to cover the fees for the order */
    OrderError[OrderError["ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES"] = 21] = "ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES";
    /** ORDER_ERROR_INCORRECT_MARKET_TYPE - Order was submitted with an incorrect or invalid market type */
    OrderError[OrderError["ORDER_ERROR_INCORRECT_MARKET_TYPE"] = 22] = "ORDER_ERROR_INCORRECT_MARKET_TYPE";
    /** ORDER_ERROR_INVALID_TIME_IN_FORCE - Order was submitted with invalid time in force */
    OrderError[OrderError["ORDER_ERROR_INVALID_TIME_IN_FORCE"] = 23] = "ORDER_ERROR_INVALID_TIME_IN_FORCE";
    /** ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION - A GFN order has got to the market when it is in auction mode */
    OrderError[OrderError["ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION"] = 24] = "ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION";
    /** ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING - A GFA order has got to the market when it is in continuous trading mode */
    OrderError[OrderError["ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING"] = 25] = "ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING";
    /** ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT - Attempt to amend order to GTT without ExpiryAt */
    OrderError[OrderError["ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT"] = 26] = "ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT";
    /** ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT - Attempt to amend ExpiryAt to a value before CreatedAt */
    OrderError[OrderError["ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT"] = 27] = "ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT";
    /** ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT - Attempt to amend to GTC without an ExpiryAt value */
    OrderError[OrderError["ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT"] = 28] = "ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT";
    /** ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC - Amending to FOK or IOC is invalid */
    OrderError[OrderError["ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC"] = 29] = "ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC";
    /** ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN - Amending to GFA or GFN is invalid */
    OrderError[OrderError["ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN"] = 30] = "ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN";
    /** ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN - Amending from GFA or GFN is invalid */
    OrderError[OrderError["ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN"] = 31] = "ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN";
    /** ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION - IOC orders are not allowed during auction */
    OrderError[OrderError["ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION"] = 32] = "ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION";
    /** ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION - FOK orders are not allowed during auction */
    OrderError[OrderError["ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION"] = 33] = "ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION";
    /** ORDER_ERROR_MUST_BE_LIMIT_ORDER - Pegged orders must be LIMIT orders */
    OrderError[OrderError["ORDER_ERROR_MUST_BE_LIMIT_ORDER"] = 34] = "ORDER_ERROR_MUST_BE_LIMIT_ORDER";
    /** ORDER_ERROR_MUST_BE_GTT_OR_GTC - Pegged orders can only have TIF GTC or GTT */
    OrderError[OrderError["ORDER_ERROR_MUST_BE_GTT_OR_GTC"] = 35] = "ORDER_ERROR_MUST_BE_GTT_OR_GTC";
    /** ORDER_ERROR_WITHOUT_REFERENCE_PRICE - Pegged order must have a reference price */
    OrderError[OrderError["ORDER_ERROR_WITHOUT_REFERENCE_PRICE"] = 36] = "ORDER_ERROR_WITHOUT_REFERENCE_PRICE";
    /** ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE - Buy pegged order cannot reference best ask price */
    OrderError[OrderError["ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE"] = 37] = "ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE";
    /** ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO - Pegged order offset must be >= 0 */
    OrderError[OrderError["ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO"] = 40] = "ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO";
    /** ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE - Sell pegged order cannot reference best bid price */
    OrderError[OrderError["ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE"] = 41] = "ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE";
    /** ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO - Pegged order offset must be > zero */
    OrderError[OrderError["ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO"] = 42] = "ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO";
    /**
     * ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE - The party has an insufficient balance, or does not have
     * a general account to submit the order (no deposits made
     * for the required asset)
     */
    OrderError[OrderError["ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE"] = 43] = "ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE";
    /** ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER - Cannot amend a non pegged orders details */
    OrderError[OrderError["ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER"] = 44] = "ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER";
    /** ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER - We are unable to re-price a pegged order because a market price is unavailable */
    OrderError[OrderError["ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER"] = 45] = "ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER";
    /** ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER - It is not possible to amend the price of an existing pegged order */
    OrderError[OrderError["ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER"] = 46] = "ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER";
    /** ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS - An FOK, IOC, or GFN order was rejected because it resulted in trades outside the price bounds */
    OrderError[OrderError["ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS"] = 47] = "ORDER_ERROR_NON_PERSISTENT_ORDER_OUT_OF_PRICE_BOUNDS";
    OrderError[OrderError["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderError = exports.OrderError || (exports.OrderError = {}));
function orderErrorFromJSON(object) {
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
exports.orderErrorFromJSON = orderErrorFromJSON;
function orderErrorToJSON(object) {
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
exports.orderErrorToJSON = orderErrorToJSON;
/** The Vega blockchain status as reported by the node the caller is connected to */
var ChainStatus;
(function (ChainStatus) {
    /** CHAIN_STATUS_UNSPECIFIED - Default value, always invalid */
    ChainStatus[ChainStatus["CHAIN_STATUS_UNSPECIFIED"] = 0] = "CHAIN_STATUS_UNSPECIFIED";
    /** CHAIN_STATUS_DISCONNECTED - Blockchain is disconnected */
    ChainStatus[ChainStatus["CHAIN_STATUS_DISCONNECTED"] = 1] = "CHAIN_STATUS_DISCONNECTED";
    /** CHAIN_STATUS_REPLAYING - Blockchain is replaying historic transactions */
    ChainStatus[ChainStatus["CHAIN_STATUS_REPLAYING"] = 2] = "CHAIN_STATUS_REPLAYING";
    /** CHAIN_STATUS_CONNECTED - Blockchain is connected and receiving transactions */
    ChainStatus[ChainStatus["CHAIN_STATUS_CONNECTED"] = 3] = "CHAIN_STATUS_CONNECTED";
    ChainStatus[ChainStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ChainStatus = exports.ChainStatus || (exports.ChainStatus = {}));
function chainStatusFromJSON(object) {
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
exports.chainStatusFromJSON = chainStatusFromJSON;
function chainStatusToJSON(object) {
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
exports.chainStatusToJSON = chainStatusToJSON;
/** Various collateral/account types as used by Vega */
var AccountType;
(function (AccountType) {
    /** ACCOUNT_TYPE_UNSPECIFIED - Default value */
    AccountType[AccountType["ACCOUNT_TYPE_UNSPECIFIED"] = 0] = "ACCOUNT_TYPE_UNSPECIFIED";
    /** ACCOUNT_TYPE_INSURANCE - Insurance pool accounts contain insurance pool funds for a market */
    AccountType[AccountType["ACCOUNT_TYPE_INSURANCE"] = 1] = "ACCOUNT_TYPE_INSURANCE";
    /** ACCOUNT_TYPE_SETTLEMENT - Settlement accounts exist only during settlement or mark-to-market */
    AccountType[AccountType["ACCOUNT_TYPE_SETTLEMENT"] = 2] = "ACCOUNT_TYPE_SETTLEMENT";
    /**
     * ACCOUNT_TYPE_MARGIN - Margin accounts contain margin funds for a party and each party will
     * have multiple margin accounts, one for each market they have traded in
     *
     * Margin account funds will alter as margin requirements on positions change
     */
    AccountType[AccountType["ACCOUNT_TYPE_MARGIN"] = 3] = "ACCOUNT_TYPE_MARGIN";
    /**
     * ACCOUNT_TYPE_GENERAL - General accounts contains general funds for a party. A party will
     * have multiple general accounts, one for each asset they want
     * to trade with
     *
     * General accounts are where funds are initially deposited or withdrawn from,
     * it is also the account where funds are taken to fulfil fees and initial margin requirements
     */
    AccountType[AccountType["ACCOUNT_TYPE_GENERAL"] = 4] = "ACCOUNT_TYPE_GENERAL";
    /** ACCOUNT_TYPE_FEES_INFRASTRUCTURE - Infrastructure accounts contain fees earned by providing infrastructure on Vega */
    AccountType[AccountType["ACCOUNT_TYPE_FEES_INFRASTRUCTURE"] = 5] = "ACCOUNT_TYPE_FEES_INFRASTRUCTURE";
    /** ACCOUNT_TYPE_FEES_LIQUIDITY - Liquidity accounts contain fees earned by providing liquidity on Vega markets */
    AccountType[AccountType["ACCOUNT_TYPE_FEES_LIQUIDITY"] = 6] = "ACCOUNT_TYPE_FEES_LIQUIDITY";
    /**
     * ACCOUNT_TYPE_FEES_MAKER - This account is created to hold fees earned by placing orders that sit on the book
     * and are then matched with an incoming order to create a trade - These fees reward parties
     * who provide the best priced liquidity that actually allows trading to take place
     */
    AccountType[AccountType["ACCOUNT_TYPE_FEES_MAKER"] = 7] = "ACCOUNT_TYPE_FEES_MAKER";
    /** ACCOUNT_TYPE_LOCK_WITHDRAW - This account is created to lock funds to be withdrawn by parties */
    AccountType[AccountType["ACCOUNT_TYPE_LOCK_WITHDRAW"] = 8] = "ACCOUNT_TYPE_LOCK_WITHDRAW";
    /** ACCOUNT_TYPE_BOND - This account is created to maintain liquidity providers funds commitments */
    AccountType[AccountType["ACCOUNT_TYPE_BOND"] = 9] = "ACCOUNT_TYPE_BOND";
    /** ACCOUNT_TYPE_EXTERNAL - External account represents an external source (deposit/withdrawal) */
    AccountType[AccountType["ACCOUNT_TYPE_EXTERNAL"] = 10] = "ACCOUNT_TYPE_EXTERNAL";
    /** ACCOUNT_TYPE_GLOBAL_INSURANCE - Global insurance account for the asset */
    AccountType[AccountType["ACCOUNT_TYPE_GLOBAL_INSURANCE"] = 11] = "ACCOUNT_TYPE_GLOBAL_INSURANCE";
    /** ACCOUNT_TYPE_GLOBAL_REWARD - Global reward account for the asset */
    AccountType[AccountType["ACCOUNT_TYPE_GLOBAL_REWARD"] = 12] = "ACCOUNT_TYPE_GLOBAL_REWARD";
    /** ACCOUNT_TYPE_PENDING_TRANSFERS - Per asset account used to store pending transfers (if any) */
    AccountType[AccountType["ACCOUNT_TYPE_PENDING_TRANSFERS"] = 13] = "ACCOUNT_TYPE_PENDING_TRANSFERS";
    /** ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES - Per asset reward account for fees paid by takers */
    AccountType[AccountType["ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES"] = 14] = "ACCOUNT_TYPE_REWARD_TAKER_PAID_FEES";
    /** ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES - Per asset reward account for fees received by makers */
    AccountType[AccountType["ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES"] = 15] = "ACCOUNT_TYPE_REWARD_MAKER_RECEIVED_FEES";
    /** ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES - Per asset reward account for fees received by liquidity providers */
    AccountType[AccountType["ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES"] = 16] = "ACCOUNT_TYPE_REWARD_LP_RECEIVED_FEES";
    /** ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS - Per asset reward account for market proposers when the market goes above some trading threshold */
    AccountType[AccountType["ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS"] = 17] = "ACCOUNT_TYPE_REWARD_MARKET_PROPOSERS";
    AccountType[AccountType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
function accountTypeFromJSON(object) {
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
exports.accountTypeFromJSON = accountTypeFromJSON;
function accountTypeToJSON(object) {
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
exports.accountTypeToJSON = accountTypeToJSON;
/** Transfers can occur between parties on Vega, these are the types that indicate why a transfer took place */
var TransferType;
(function (TransferType) {
    /** TRANSFER_TYPE_UNSPECIFIED - Default value, always invalid */
    TransferType[TransferType["TRANSFER_TYPE_UNSPECIFIED"] = 0] = "TRANSFER_TYPE_UNSPECIFIED";
    /** TRANSFER_TYPE_LOSS - Loss */
    TransferType[TransferType["TRANSFER_TYPE_LOSS"] = 1] = "TRANSFER_TYPE_LOSS";
    /** TRANSFER_TYPE_WIN - Win */
    TransferType[TransferType["TRANSFER_TYPE_WIN"] = 2] = "TRANSFER_TYPE_WIN";
    /** TRANSFER_TYPE_CLOSE - Close */
    TransferType[TransferType["TRANSFER_TYPE_CLOSE"] = 3] = "TRANSFER_TYPE_CLOSE";
    /** TRANSFER_TYPE_MTM_LOSS - Mark to market loss */
    TransferType[TransferType["TRANSFER_TYPE_MTM_LOSS"] = 4] = "TRANSFER_TYPE_MTM_LOSS";
    /** TRANSFER_TYPE_MTM_WIN - Mark to market win */
    TransferType[TransferType["TRANSFER_TYPE_MTM_WIN"] = 5] = "TRANSFER_TYPE_MTM_WIN";
    /** TRANSFER_TYPE_MARGIN_LOW - Margin too low */
    TransferType[TransferType["TRANSFER_TYPE_MARGIN_LOW"] = 6] = "TRANSFER_TYPE_MARGIN_LOW";
    /** TRANSFER_TYPE_MARGIN_HIGH - Margin too high */
    TransferType[TransferType["TRANSFER_TYPE_MARGIN_HIGH"] = 7] = "TRANSFER_TYPE_MARGIN_HIGH";
    /** TRANSFER_TYPE_MARGIN_CONFISCATED - Margin was confiscated */
    TransferType[TransferType["TRANSFER_TYPE_MARGIN_CONFISCATED"] = 8] = "TRANSFER_TYPE_MARGIN_CONFISCATED";
    /** TRANSFER_TYPE_MAKER_FEE_PAY - Pay maker fee */
    TransferType[TransferType["TRANSFER_TYPE_MAKER_FEE_PAY"] = 9] = "TRANSFER_TYPE_MAKER_FEE_PAY";
    /** TRANSFER_TYPE_MAKER_FEE_RECEIVE - Receive maker fee */
    TransferType[TransferType["TRANSFER_TYPE_MAKER_FEE_RECEIVE"] = 10] = "TRANSFER_TYPE_MAKER_FEE_RECEIVE";
    /** TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY - Pay infrastructure fee */
    TransferType[TransferType["TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY"] = 11] = "TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY";
    /** TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE - Receive infrastructure fee */
    TransferType[TransferType["TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE"] = 12] = "TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE";
    /** TRANSFER_TYPE_LIQUIDITY_FEE_PAY - Pay liquidity fee */
    TransferType[TransferType["TRANSFER_TYPE_LIQUIDITY_FEE_PAY"] = 13] = "TRANSFER_TYPE_LIQUIDITY_FEE_PAY";
    /** TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE - Receive liquidity fee */
    TransferType[TransferType["TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE"] = 14] = "TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE";
    /** TRANSFER_TYPE_BOND_LOW - Bond too low */
    TransferType[TransferType["TRANSFER_TYPE_BOND_LOW"] = 15] = "TRANSFER_TYPE_BOND_LOW";
    /** TRANSFER_TYPE_BOND_HIGH - Bond too high */
    TransferType[TransferType["TRANSFER_TYPE_BOND_HIGH"] = 16] = "TRANSFER_TYPE_BOND_HIGH";
    /** TRANSFER_TYPE_WITHDRAW_LOCK - Lock amount for withdraw */
    TransferType[TransferType["TRANSFER_TYPE_WITHDRAW_LOCK"] = 17] = "TRANSFER_TYPE_WITHDRAW_LOCK";
    /** TRANSFER_TYPE_WITHDRAW - Actual withdraw from system */
    TransferType[TransferType["TRANSFER_TYPE_WITHDRAW"] = 18] = "TRANSFER_TYPE_WITHDRAW";
    /** TRANSFER_TYPE_DEPOSIT - Deposit funds */
    TransferType[TransferType["TRANSFER_TYPE_DEPOSIT"] = 19] = "TRANSFER_TYPE_DEPOSIT";
    /** TRANSFER_TYPE_BOND_SLASHING - Bond slashing */
    TransferType[TransferType["TRANSFER_TYPE_BOND_SLASHING"] = 20] = "TRANSFER_TYPE_BOND_SLASHING";
    /** TRANSFER_TYPE_STAKE_REWARD - Stake reward */
    TransferType[TransferType["TRANSFER_TYPE_STAKE_REWARD"] = 21] = "TRANSFER_TYPE_STAKE_REWARD";
    /** TRANSFER_TYPE_TRANSFER_FUNDS_SEND - Transfer funds */
    TransferType[TransferType["TRANSFER_TYPE_TRANSFER_FUNDS_SEND"] = 22] = "TRANSFER_TYPE_TRANSFER_FUNDS_SEND";
    /** TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE - Transfer funds */
    TransferType[TransferType["TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE"] = 23] = "TRANSFER_TYPE_TRANSFER_FUNDS_DISTRIBUTE";
    TransferType[TransferType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TransferType = exports.TransferType || (exports.TransferType = {}));
function transferTypeFromJSON(object) {
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
exports.transferTypeFromJSON = transferTypeFromJSON;
function transferTypeToJSON(object) {
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
exports.transferTypeToJSON = transferTypeToJSON;
/** Node status type */
var NodeStatus;
(function (NodeStatus) {
    NodeStatus[NodeStatus["NODE_STATUS_UNSPECIFIED"] = 0] = "NODE_STATUS_UNSPECIFIED";
    /** NODE_STATUS_VALIDATOR - The node is validating */
    NodeStatus[NodeStatus["NODE_STATUS_VALIDATOR"] = 1] = "NODE_STATUS_VALIDATOR";
    /** NODE_STATUS_NON_VALIDATOR - The node is non-validating */
    NodeStatus[NodeStatus["NODE_STATUS_NON_VALIDATOR"] = 2] = "NODE_STATUS_NON_VALIDATOR";
    NodeStatus[NodeStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NodeStatus = exports.NodeStatus || (exports.NodeStatus = {}));
function nodeStatusFromJSON(object) {
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
exports.nodeStatusFromJSON = nodeStatusFromJSON;
function nodeStatusToJSON(object) {
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
exports.nodeStatusToJSON = nodeStatusToJSON;
/** What epoch action has occurred */
var EpochAction;
(function (EpochAction) {
    EpochAction[EpochAction["EPOCH_ACTION_UNSPECIFIED"] = 0] = "EPOCH_ACTION_UNSPECIFIED";
    /** EPOCH_ACTION_START - The epoch update is for a new epoch */
    EpochAction[EpochAction["EPOCH_ACTION_START"] = 1] = "EPOCH_ACTION_START";
    /** EPOCH_ACTION_END - The epoch update is for the end of an epoch */
    EpochAction[EpochAction["EPOCH_ACTION_END"] = 2] = "EPOCH_ACTION_END";
    EpochAction[EpochAction["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(EpochAction = exports.EpochAction || (exports.EpochAction = {}));
function epochActionFromJSON(object) {
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
exports.epochActionFromJSON = epochActionFromJSON;
function epochActionToJSON(object) {
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
exports.epochActionToJSON = epochActionToJSON;
/** Validation status of the node */
var ValidatorNodeStatus;
(function (ValidatorNodeStatus) {
    ValidatorNodeStatus[ValidatorNodeStatus["VALIDATOR_NODE_STATUS_UNSPECIFIED"] = 0] = "VALIDATOR_NODE_STATUS_UNSPECIFIED";
    /** VALIDATOR_NODE_STATUS_TENDERMINT - The node is a tendermint validator */
    ValidatorNodeStatus[ValidatorNodeStatus["VALIDATOR_NODE_STATUS_TENDERMINT"] = 1] = "VALIDATOR_NODE_STATUS_TENDERMINT";
    /** VALIDATOR_NODE_STATUS_ERSATZ - The node is an ersatz validator */
    ValidatorNodeStatus[ValidatorNodeStatus["VALIDATOR_NODE_STATUS_ERSATZ"] = 2] = "VALIDATOR_NODE_STATUS_ERSATZ";
    /** VALIDATOR_NODE_STATUS_PENDING - The node is a pending validator */
    ValidatorNodeStatus[ValidatorNodeStatus["VALIDATOR_NODE_STATUS_PENDING"] = 3] = "VALIDATOR_NODE_STATUS_PENDING";
    ValidatorNodeStatus[ValidatorNodeStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ValidatorNodeStatus = exports.ValidatorNodeStatus || (exports.ValidatorNodeStatus = {}));
function validatorNodeStatusFromJSON(object) {
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
exports.validatorNodeStatusFromJSON = validatorNodeStatusFromJSON;
function validatorNodeStatusToJSON(object) {
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
exports.validatorNodeStatusToJSON = validatorNodeStatusToJSON;
/**
 * Time In Force for an order
 * See [What order types are available to trade on Vega?](https://docs.testnet.vega.xyz/docs/trading-questions/#what-order-types-are-available-to-trade-on-vega) for more detail
 */
var Order_TimeInForce;
(function (Order_TimeInForce) {
    /** TIME_IN_FORCE_UNSPECIFIED - Default value for TimeInForce, can be valid for an amend */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_UNSPECIFIED"] = 0] = "TIME_IN_FORCE_UNSPECIFIED";
    /** TIME_IN_FORCE_GTC - Good until cancelled */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_GTC"] = 1] = "TIME_IN_FORCE_GTC";
    /** TIME_IN_FORCE_GTT - Good until specified time */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_GTT"] = 2] = "TIME_IN_FORCE_GTT";
    /** TIME_IN_FORCE_IOC - Immediate or cancel */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_IOC"] = 3] = "TIME_IN_FORCE_IOC";
    /** TIME_IN_FORCE_FOK - Fill or kill */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_FOK"] = 4] = "TIME_IN_FORCE_FOK";
    /** TIME_IN_FORCE_GFA - Good for auction */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_GFA"] = 5] = "TIME_IN_FORCE_GFA";
    /** TIME_IN_FORCE_GFN - Good for normal */
    Order_TimeInForce[Order_TimeInForce["TIME_IN_FORCE_GFN"] = 6] = "TIME_IN_FORCE_GFN";
    Order_TimeInForce[Order_TimeInForce["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_TimeInForce = exports.Order_TimeInForce || (exports.Order_TimeInForce = {}));
function order_TimeInForceFromJSON(object) {
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
exports.order_TimeInForceFromJSON = order_TimeInForceFromJSON;
function order_TimeInForceToJSON(object) {
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
exports.order_TimeInForceToJSON = order_TimeInForceToJSON;
/** Type values for an order */
var Order_Type;
(function (Order_Type) {
    /** TYPE_UNSPECIFIED - Default value, always invalid */
    Order_Type[Order_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** TYPE_LIMIT - Used for Limit orders */
    Order_Type[Order_Type["TYPE_LIMIT"] = 1] = "TYPE_LIMIT";
    /** TYPE_MARKET - Used for Market orders */
    Order_Type[Order_Type["TYPE_MARKET"] = 2] = "TYPE_MARKET";
    /** TYPE_NETWORK - Used for orders where the initiating party is the network (with distressed parties) */
    Order_Type[Order_Type["TYPE_NETWORK"] = 3] = "TYPE_NETWORK";
    Order_Type[Order_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_Type = exports.Order_Type || (exports.Order_Type = {}));
function order_TypeFromJSON(object) {
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
exports.order_TypeFromJSON = order_TypeFromJSON;
function order_TypeToJSON(object) {
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
exports.order_TypeToJSON = order_TypeToJSON;
/**
 * Status values for an order
 * See resulting status in [What order types are available to trade on Vega?](https://docs.testnet.vega.xyz/docs/trading-questions/#what-order-types-are-available-to-trade-on-vega) for more detail.
 */
var Order_Status;
(function (Order_Status) {
    /** STATUS_UNSPECIFIED - Default value, always invalid */
    Order_Status[Order_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_ACTIVE - Used for active unfilled or partially filled orders */
    Order_Status[Order_Status["STATUS_ACTIVE"] = 1] = "STATUS_ACTIVE";
    /** STATUS_EXPIRED - Used for expired GTT orders */
    Order_Status[Order_Status["STATUS_EXPIRED"] = 2] = "STATUS_EXPIRED";
    /** STATUS_CANCELLED - Used for orders cancelled by the party that created the order */
    Order_Status[Order_Status["STATUS_CANCELLED"] = 3] = "STATUS_CANCELLED";
    /** STATUS_STOPPED - Used for unfilled FOK or IOC orders, and for orders that were stopped by the network */
    Order_Status[Order_Status["STATUS_STOPPED"] = 4] = "STATUS_STOPPED";
    /** STATUS_FILLED - Used for closed fully filled orders */
    Order_Status[Order_Status["STATUS_FILLED"] = 5] = "STATUS_FILLED";
    /** STATUS_REJECTED - Used for orders when not enough collateral was available to fill the margin requirements */
    Order_Status[Order_Status["STATUS_REJECTED"] = 6] = "STATUS_REJECTED";
    /** STATUS_PARTIALLY_FILLED - Used for closed partially filled IOC orders */
    Order_Status[Order_Status["STATUS_PARTIALLY_FILLED"] = 7] = "STATUS_PARTIALLY_FILLED";
    /** STATUS_PARKED - Order has been removed from the order book and has been parked, this applies to pegged orders only */
    Order_Status[Order_Status["STATUS_PARKED"] = 8] = "STATUS_PARKED";
    Order_Status[Order_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order_Status = exports.Order_Status || (exports.Order_Status = {}));
function order_StatusFromJSON(object) {
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
exports.order_StatusFromJSON = order_StatusFromJSON;
function order_StatusToJSON(object) {
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
exports.order_StatusToJSON = order_StatusToJSON;
/** Type values for a trade */
var Trade_Type;
(function (Trade_Type) {
    /** TYPE_UNSPECIFIED - Default value, always invalid */
    Trade_Type[Trade_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** TYPE_DEFAULT - Normal trading between two parties */
    Trade_Type[Trade_Type["TYPE_DEFAULT"] = 1] = "TYPE_DEFAULT";
    /**
     * TYPE_NETWORK_CLOSE_OUT_GOOD - Trading initiated by the network with another party on the book,
     * which helps to zero-out the positions of one or more distressed parties
     */
    Trade_Type[Trade_Type["TYPE_NETWORK_CLOSE_OUT_GOOD"] = 2] = "TYPE_NETWORK_CLOSE_OUT_GOOD";
    /**
     * TYPE_NETWORK_CLOSE_OUT_BAD - Trading initiated by the network with another party off the book,
     * with a distressed party in order to zero-out the position of the party
     */
    Trade_Type[Trade_Type["TYPE_NETWORK_CLOSE_OUT_BAD"] = 3] = "TYPE_NETWORK_CLOSE_OUT_BAD";
    Trade_Type[Trade_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Trade_Type = exports.Trade_Type || (exports.Trade_Type = {}));
function trade_TypeFromJSON(object) {
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
exports.trade_TypeFromJSON = trade_TypeFromJSON;
function trade_TypeToJSON(object) {
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
exports.trade_TypeToJSON = trade_TypeToJSON;
/** The status of the deposit */
var Deposit_Status;
(function (Deposit_Status) {
    /** STATUS_UNSPECIFIED - Default value, always invalid */
    Deposit_Status[Deposit_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_OPEN - The deposit is being processed by the network */
    Deposit_Status[Deposit_Status["STATUS_OPEN"] = 1] = "STATUS_OPEN";
    /** STATUS_CANCELLED - The deposit has been cancelled by the network */
    Deposit_Status[Deposit_Status["STATUS_CANCELLED"] = 2] = "STATUS_CANCELLED";
    /** STATUS_FINALIZED - The deposit has been finalised and accounts have been updated */
    Deposit_Status[Deposit_Status["STATUS_FINALIZED"] = 3] = "STATUS_FINALIZED";
    Deposit_Status[Deposit_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Deposit_Status = exports.Deposit_Status || (exports.Deposit_Status = {}));
function deposit_StatusFromJSON(object) {
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
exports.deposit_StatusFromJSON = deposit_StatusFromJSON;
function deposit_StatusToJSON(object) {
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
exports.deposit_StatusToJSON = deposit_StatusToJSON;
/** The status of the withdrawal */
var Withdrawal_Status;
(function (Withdrawal_Status) {
    /** STATUS_UNSPECIFIED - Default value, always invalid */
    Withdrawal_Status[Withdrawal_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_OPEN - The withdrawal is open and being processed by the network */
    Withdrawal_Status[Withdrawal_Status["STATUS_OPEN"] = 1] = "STATUS_OPEN";
    /** STATUS_REJECTED - The withdrawal have been cancelled */
    Withdrawal_Status[Withdrawal_Status["STATUS_REJECTED"] = 2] = "STATUS_REJECTED";
    /**
     * STATUS_FINALIZED - The withdrawal went through and is fully finalised, the funds are removed from the
     * Vega network and are unlocked on the foreign chain bridge, for example, on the Ethereum network
     */
    Withdrawal_Status[Withdrawal_Status["STATUS_FINALIZED"] = 3] = "STATUS_FINALIZED";
    Withdrawal_Status[Withdrawal_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Withdrawal_Status = exports.Withdrawal_Status || (exports.Withdrawal_Status = {}));
function withdrawal_StatusFromJSON(object) {
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
exports.withdrawal_StatusFromJSON = withdrawal_StatusFromJSON;
function withdrawal_StatusToJSON(object) {
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
exports.withdrawal_StatusToJSON = withdrawal_StatusToJSON;
/** Status of a liquidity provision order */
var LiquidityProvision_Status;
(function (LiquidityProvision_Status) {
    /** STATUS_UNSPECIFIED - The default value */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_ACTIVE - The liquidity provision is active */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_ACTIVE"] = 1] = "STATUS_ACTIVE";
    /** STATUS_STOPPED - The liquidity provision was stopped by the network */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_STOPPED"] = 2] = "STATUS_STOPPED";
    /** STATUS_CANCELLED - The liquidity provision was cancelled by the liquidity provider */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_CANCELLED"] = 3] = "STATUS_CANCELLED";
    /** STATUS_REJECTED - The liquidity provision was invalid and got rejected */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_REJECTED"] = 4] = "STATUS_REJECTED";
    /** STATUS_UNDEPLOYED - The liquidity provision is valid and accepted by network, but orders aren't deployed */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_UNDEPLOYED"] = 5] = "STATUS_UNDEPLOYED";
    /**
     * STATUS_PENDING - The liquidity provision is valid and accepted by network
     * but have never been deployed. I when it's possible to deploy them for the first time
     * margin check fails, then they will be cancelled without any penalties.
     */
    LiquidityProvision_Status[LiquidityProvision_Status["STATUS_PENDING"] = 6] = "STATUS_PENDING";
    LiquidityProvision_Status[LiquidityProvision_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LiquidityProvision_Status = exports.LiquidityProvision_Status || (exports.LiquidityProvision_Status = {}));
function liquidityProvision_StatusFromJSON(object) {
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
exports.liquidityProvision_StatusFromJSON = liquidityProvision_StatusFromJSON;
function liquidityProvision_StatusToJSON(object) {
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
exports.liquidityProvision_StatusToJSON = liquidityProvision_StatusToJSON;
function createBasePrice() {
    return { value: "" };
}
exports.Price = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePrice();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePrice();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseTimestamp() {
    return { value: "0" };
}
exports.Timestamp = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.value !== "0") {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTimestamp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            value: isSet(object.value) ? String(object.value) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTimestamp();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseParty() {
    return { id: "" };
}
exports.Party = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParty();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseParty();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseRiskFactor() {
    return { market: "", short: "", long: "" };
}
exports.RiskFactor = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRiskFactor();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            market: isSet(object.market) ? String(object.market) : "",
            short: isSet(object.short) ? String(object.short) : "",
            long: isSet(object.long) ? String(object.long) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.market !== undefined && (obj.market = message.market);
        message.short !== undefined && (obj.short = message.short);
        message.long !== undefined && (obj.long = message.long);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRiskFactor();
        message.market = (_a = object.market) !== null && _a !== void 0 ? _a : "";
        message.short = (_b = object.short) !== null && _b !== void 0 ? _b : "";
        message.long = (_c = object.long) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBasePeggedOrder() {
    return { reference: 0, offset: "" };
}
exports.PeggedOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.reference !== 0) {
            writer.uint32(8).int32(message.reference);
        }
        if (message.offset !== "") {
            writer.uint32(18).string(message.offset);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePeggedOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reference = reader.int32();
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
    fromJSON: function (object) {
        return {
            reference: isSet(object.reference)
                ? peggedReferenceFromJSON(object.reference)
                : 0,
            offset: isSet(object.offset) ? String(object.offset) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.reference !== undefined &&
            (obj.reference = peggedReferenceToJSON(message.reference));
        message.offset !== undefined && (obj.offset = message.offset);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePeggedOrder();
        message.reference = (_a = object.reference) !== null && _a !== void 0 ? _a : 0;
        message.offset = (_b = object.offset) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseOrder() {
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
        liquidityProvisionId: ""
    };
}
exports.Order = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.PeggedOrder.encode(message.peggedOrder, writer.uint32(146).fork()).ldelim();
        }
        if (message.liquidityProvisionId !== "") {
            writer.uint32(154).string(message.liquidityProvisionId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.side = reader.int32();
                    break;
                case 5:
                    message.price = reader.string();
                    break;
                case 6:
                    message.size = longToString(reader.uint64());
                    break;
                case 7:
                    message.remaining = longToString(reader.uint64());
                    break;
                case 8:
                    message.timeInForce = reader.int32();
                    break;
                case 9:
                    message.type = reader.int32();
                    break;
                case 10:
                    message.createdAt = longToString(reader.int64());
                    break;
                case 11:
                    message.status = reader.int32();
                    break;
                case 12:
                    message.expiresAt = longToString(reader.int64());
                    break;
                case 13:
                    message.reference = reader.string();
                    break;
                case 14:
                    message.reason = reader.int32();
                    break;
                case 15:
                    message.updatedAt = longToString(reader.int64());
                    break;
                case 16:
                    message.version = longToString(reader.uint64());
                    break;
                case 17:
                    message.batchId = longToString(reader.uint64());
                    break;
                case 18:
                    message.peggedOrder = exports.PeggedOrder.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
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
                ? exports.PeggedOrder.fromJSON(object.peggedOrder)
                : undefined,
            liquidityProvisionId: isSet(object.liquidityProvisionId)
                ? String(object.liquidityProvisionId)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
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
                ? exports.PeggedOrder.toJSON(message.peggedOrder)
                : undefined);
        message.liquidityProvisionId !== undefined &&
            (obj.liquidityProvisionId = message.liquidityProvisionId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var message = createBaseOrder();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.partyId = (_c = object.partyId) !== null && _c !== void 0 ? _c : "";
        message.side = (_d = object.side) !== null && _d !== void 0 ? _d : 0;
        message.price = (_e = object.price) !== null && _e !== void 0 ? _e : "";
        message.size = (_f = object.size) !== null && _f !== void 0 ? _f : "0";
        message.remaining = (_g = object.remaining) !== null && _g !== void 0 ? _g : "0";
        message.timeInForce = (_h = object.timeInForce) !== null && _h !== void 0 ? _h : 0;
        message.type = (_j = object.type) !== null && _j !== void 0 ? _j : 0;
        message.createdAt = (_k = object.createdAt) !== null && _k !== void 0 ? _k : "0";
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : 0;
        message.expiresAt = (_m = object.expiresAt) !== null && _m !== void 0 ? _m : "0";
        message.reference = (_o = object.reference) !== null && _o !== void 0 ? _o : "";
        message.reason = (_p = object.reason) !== null && _p !== void 0 ? _p : 0;
        message.updatedAt = (_q = object.updatedAt) !== null && _q !== void 0 ? _q : "0";
        message.version = (_r = object.version) !== null && _r !== void 0 ? _r : "0";
        message.batchId = (_s = object.batchId) !== null && _s !== void 0 ? _s : "0";
        message.peggedOrder =
            object.peggedOrder !== undefined && object.peggedOrder !== null
                ? exports.PeggedOrder.fromPartial(object.peggedOrder)
                : undefined;
        message.liquidityProvisionId = (_t = object.liquidityProvisionId) !== null && _t !== void 0 ? _t : "";
        return message;
    }
};
function createBaseOrderCancellationConfirmation() {
    return { order: undefined };
}
exports.OrderCancellationConfirmation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.order !== undefined) {
            exports.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderCancellationConfirmation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            order: isSet(object.order) ? exports.Order.fromJSON(object.order) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.order !== undefined &&
            (obj.order = message.order ? exports.Order.toJSON(message.order) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseOrderCancellationConfirmation();
        message.order =
            object.order !== undefined && object.order !== null
                ? exports.Order.fromPartial(object.order)
                : undefined;
        return message;
    }
};
function createBaseOrderConfirmation() {
    return { order: undefined, trades: [], passiveOrdersAffected: [] };
}
exports.OrderConfirmation = {
    encode: function (message, writer) {
        var e_1, _a, e_2, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.order !== undefined) {
            exports.Order.encode(message.order, writer.uint32(10).fork()).ldelim();
        }
        try {
            for (var _c = __values(message.trades), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.Trade.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = __values(message.passiveOrdersAffected), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.Order.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderConfirmation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.order = exports.Order.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.passiveOrdersAffected.push(exports.Order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            order: isSet(object.order) ? exports.Order.fromJSON(object.order) : undefined,
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades)
                ? object.trades.map(function (e) { return exports.Trade.fromJSON(e); })
                : [],
            passiveOrdersAffected: Array.isArray(object === null || object === void 0 ? void 0 : object.passiveOrdersAffected)
                ? object.passiveOrdersAffected.map(function (e) { return exports.Order.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.order !== undefined &&
            (obj.order = message.order ? exports.Order.toJSON(message.order) : undefined);
        if (message.trades) {
            obj.trades = message.trades.map(function (e) { return (e ? exports.Trade.toJSON(e) : undefined); });
        }
        else {
            obj.trades = [];
        }
        if (message.passiveOrdersAffected) {
            obj.passiveOrdersAffected = message.passiveOrdersAffected.map(function (e) {
                return e ? exports.Order.toJSON(e) : undefined;
            });
        }
        else {
            obj.passiveOrdersAffected = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOrderConfirmation();
        message.order =
            object.order !== undefined && object.order !== null
                ? exports.Order.fromPartial(object.order)
                : undefined;
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Trade.fromPartial(e); })) || [];
        message.passiveOrdersAffected =
            ((_b = object.passiveOrdersAffected) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Order.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseAuctionIndicativeState() {
    return {
        marketId: "",
        indicativePrice: "",
        indicativeVolume: "0",
        auctionStart: "0",
        auctionEnd: "0"
    };
}
exports.AuctionIndicativeState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuctionIndicativeState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.indicativePrice = reader.string();
                    break;
                case 3:
                    message.indicativeVolume = longToString(reader.uint64());
                    break;
                case 4:
                    message.auctionStart = longToString(reader.int64());
                    break;
                case 5:
                    message.auctionEnd = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
            auctionEnd: isSet(object.auctionEnd) ? String(object.auctionEnd) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAuctionIndicativeState();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.indicativePrice = (_b = object.indicativePrice) !== null && _b !== void 0 ? _b : "";
        message.indicativeVolume = (_c = object.indicativeVolume) !== null && _c !== void 0 ? _c : "0";
        message.auctionStart = (_d = object.auctionStart) !== null && _d !== void 0 ? _d : "0";
        message.auctionEnd = (_e = object.auctionEnd) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
function createBaseTrade() {
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
        sellerAuctionBatch: "0"
    };
}
exports.Trade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.Fee.encode(message.buyerFee, writer.uint32(98).fork()).ldelim();
        }
        if (message.sellerFee !== undefined) {
            exports.Fee.encode(message.sellerFee, writer.uint32(106).fork()).ldelim();
        }
        if (message.buyerAuctionBatch !== "0") {
            writer.uint32(112).uint64(message.buyerAuctionBatch);
        }
        if (message.sellerAuctionBatch !== "0") {
            writer.uint32(120).uint64(message.sellerAuctionBatch);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTrade();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.size = longToString(reader.uint64());
                    break;
                case 5:
                    message.buyer = reader.string();
                    break;
                case 6:
                    message.seller = reader.string();
                    break;
                case 7:
                    message.aggressor = reader.int32();
                    break;
                case 8:
                    message.buyOrder = reader.string();
                    break;
                case 9:
                    message.sellOrder = reader.string();
                    break;
                case 10:
                    message.timestamp = longToString(reader.int64());
                    break;
                case 11:
                    message.type = reader.int32();
                    break;
                case 12:
                    message.buyerFee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.sellerFee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.buyerAuctionBatch = longToString(reader.uint64());
                    break;
                case 15:
                    message.sellerAuctionBatch = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
                ? exports.Fee.fromJSON(object.buyerFee)
                : undefined,
            sellerFee: isSet(object.sellerFee)
                ? exports.Fee.fromJSON(object.sellerFee)
                : undefined,
            buyerAuctionBatch: isSet(object.buyerAuctionBatch)
                ? String(object.buyerAuctionBatch)
                : "0",
            sellerAuctionBatch: isSet(object.sellerAuctionBatch)
                ? String(object.sellerAuctionBatch)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
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
                ? exports.Fee.toJSON(message.buyerFee)
                : undefined);
        message.sellerFee !== undefined &&
            (obj.sellerFee = message.sellerFee
                ? exports.Fee.toJSON(message.sellerFee)
                : undefined);
        message.buyerAuctionBatch !== undefined &&
            (obj.buyerAuctionBatch = message.buyerAuctionBatch);
        message.sellerAuctionBatch !== undefined &&
            (obj.sellerAuctionBatch = message.sellerAuctionBatch);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseTrade();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.price = (_c = object.price) !== null && _c !== void 0 ? _c : "";
        message.size = (_d = object.size) !== null && _d !== void 0 ? _d : "0";
        message.buyer = (_e = object.buyer) !== null && _e !== void 0 ? _e : "";
        message.seller = (_f = object.seller) !== null && _f !== void 0 ? _f : "";
        message.aggressor = (_g = object.aggressor) !== null && _g !== void 0 ? _g : 0;
        message.buyOrder = (_h = object.buyOrder) !== null && _h !== void 0 ? _h : "";
        message.sellOrder = (_j = object.sellOrder) !== null && _j !== void 0 ? _j : "";
        message.timestamp = (_k = object.timestamp) !== null && _k !== void 0 ? _k : "0";
        message.type = (_l = object.type) !== null && _l !== void 0 ? _l : 0;
        message.buyerFee =
            object.buyerFee !== undefined && object.buyerFee !== null
                ? exports.Fee.fromPartial(object.buyerFee)
                : undefined;
        message.sellerFee =
            object.sellerFee !== undefined && object.sellerFee !== null
                ? exports.Fee.fromPartial(object.sellerFee)
                : undefined;
        message.buyerAuctionBatch = (_m = object.buyerAuctionBatch) !== null && _m !== void 0 ? _m : "0";
        message.sellerAuctionBatch = (_o = object.sellerAuctionBatch) !== null && _o !== void 0 ? _o : "0";
        return message;
    }
};
function createBaseFee() {
    return { makerFee: "", infrastructureFee: "", liquidityFee: "" };
}
exports.Fee = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFee();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            makerFee: isSet(object.makerFee) ? String(object.makerFee) : "",
            infrastructureFee: isSet(object.infrastructureFee)
                ? String(object.infrastructureFee)
                : "",
            liquidityFee: isSet(object.liquidityFee)
                ? String(object.liquidityFee)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.makerFee !== undefined && (obj.makerFee = message.makerFee);
        message.infrastructureFee !== undefined &&
            (obj.infrastructureFee = message.infrastructureFee);
        message.liquidityFee !== undefined &&
            (obj.liquidityFee = message.liquidityFee);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFee();
        message.makerFee = (_a = object.makerFee) !== null && _a !== void 0 ? _a : "";
        message.infrastructureFee = (_b = object.infrastructureFee) !== null && _b !== void 0 ? _b : "";
        message.liquidityFee = (_c = object.liquidityFee) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseTradeSet() {
    return { trades: [] };
}
exports.TradeSet = {
    encode: function (message, writer) {
        var e_3, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.trades), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                exports.Trade.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradeSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            trades: Array.isArray(object === null || object === void 0 ? void 0 : object.trades)
                ? object.trades.map(function (e) { return exports.Trade.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(function (e) { return (e ? exports.Trade.toJSON(e) : undefined); });
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTradeSet();
        message.trades = ((_a = object.trades) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Trade.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseCandle() {
    return {
        timestamp: "0",
        datetime: "",
        high: "",
        low: "",
        open: "",
        close: "",
        volume: "0",
        interval: 0
    };
}
exports.Candle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCandle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToString(reader.int64());
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
                    message.volume = longToString(reader.uint64());
                    break;
                case 8:
                    message.interval = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            datetime: isSet(object.datetime) ? String(object.datetime) : "",
            high: isSet(object.high) ? String(object.high) : "",
            low: isSet(object.low) ? String(object.low) : "",
            open: isSet(object.open) ? String(object.open) : "",
            close: isSet(object.close) ? String(object.close) : "",
            volume: isSet(object.volume) ? String(object.volume) : "0",
            interval: isSet(object.interval) ? intervalFromJSON(object.interval) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseCandle();
        message.timestamp = (_a = object.timestamp) !== null && _a !== void 0 ? _a : "0";
        message.datetime = (_b = object.datetime) !== null && _b !== void 0 ? _b : "";
        message.high = (_c = object.high) !== null && _c !== void 0 ? _c : "";
        message.low = (_d = object.low) !== null && _d !== void 0 ? _d : "";
        message.open = (_e = object.open) !== null && _e !== void 0 ? _e : "";
        message.close = (_f = object.close) !== null && _f !== void 0 ? _f : "";
        message.volume = (_g = object.volume) !== null && _g !== void 0 ? _g : "0";
        message.interval = (_h = object.interval) !== null && _h !== void 0 ? _h : 0;
        return message;
    }
};
function createBasePriceLevel() {
    return { price: "", numberOfOrders: "0", volume: "0" };
}
exports.PriceLevel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePriceLevel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.numberOfOrders = longToString(reader.uint64());
                    break;
                case 3:
                    message.volume = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            price: isSet(object.price) ? String(object.price) : "",
            numberOfOrders: isSet(object.numberOfOrders)
                ? String(object.numberOfOrders)
                : "0",
            volume: isSet(object.volume) ? String(object.volume) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.numberOfOrders !== undefined &&
            (obj.numberOfOrders = message.numberOfOrders);
        message.volume !== undefined && (obj.volume = message.volume);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePriceLevel();
        message.price = (_a = object.price) !== null && _a !== void 0 ? _a : "";
        message.numberOfOrders = (_b = object.numberOfOrders) !== null && _b !== void 0 ? _b : "0";
        message.volume = (_c = object.volume) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseMarketDepth() {
    return { marketId: "", buy: [], sell: [], sequenceNumber: "0" };
}
exports.MarketDepth = {
    encode: function (message, writer) {
        var e_4, _a, e_5, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        try {
            for (var _c = __values(message.buy), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        try {
            for (var _e = __values(message.sell), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.PriceLevel.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (message.sequenceNumber !== "0") {
            writer.uint32(32).uint64(message.sequenceNumber);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketDepth();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.buy.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sell.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequenceNumber = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            buy: Array.isArray(object === null || object === void 0 ? void 0 : object.buy)
                ? object.buy.map(function (e) { return exports.PriceLevel.fromJSON(e); })
                : [],
            sell: Array.isArray(object === null || object === void 0 ? void 0 : object.sell)
                ? object.sell.map(function (e) { return exports.PriceLevel.fromJSON(e); })
                : [],
            sequenceNumber: isSet(object.sequenceNumber)
                ? String(object.sequenceNumber)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        if (message.buy) {
            obj.buy = message.buy.map(function (e) { return (e ? exports.PriceLevel.toJSON(e) : undefined); });
        }
        else {
            obj.buy = [];
        }
        if (message.sell) {
            obj.sell = message.sell.map(function (e) {
                return e ? exports.PriceLevel.toJSON(e) : undefined;
            });
        }
        else {
            obj.sell = [];
        }
        message.sequenceNumber !== undefined &&
            (obj.sequenceNumber = message.sequenceNumber);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMarketDepth();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.buy = ((_b = object.buy) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PriceLevel.fromPartial(e); })) || [];
        message.sell = ((_c = object.sell) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.PriceLevel.fromPartial(e); })) || [];
        message.sequenceNumber = (_d = object.sequenceNumber) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseMarketDepthUpdate() {
    return { marketId: "", buy: [], sell: [], sequenceNumber: "0" };
}
exports.MarketDepthUpdate = {
    encode: function (message, writer) {
        var e_6, _a, e_7, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        try {
            for (var _c = __values(message.buy), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.PriceLevel.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var _e = __values(message.sell), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.PriceLevel.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_7) throw e_7.error; }
        }
        if (message.sequenceNumber !== "0") {
            writer.uint32(32).uint64(message.sequenceNumber);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketDepthUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.buy.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.sell.push(exports.PriceLevel.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequenceNumber = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            buy: Array.isArray(object === null || object === void 0 ? void 0 : object.buy)
                ? object.buy.map(function (e) { return exports.PriceLevel.fromJSON(e); })
                : [],
            sell: Array.isArray(object === null || object === void 0 ? void 0 : object.sell)
                ? object.sell.map(function (e) { return exports.PriceLevel.fromJSON(e); })
                : [],
            sequenceNumber: isSet(object.sequenceNumber)
                ? String(object.sequenceNumber)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        if (message.buy) {
            obj.buy = message.buy.map(function (e) { return (e ? exports.PriceLevel.toJSON(e) : undefined); });
        }
        else {
            obj.buy = [];
        }
        if (message.sell) {
            obj.sell = message.sell.map(function (e) {
                return e ? exports.PriceLevel.toJSON(e) : undefined;
            });
        }
        else {
            obj.sell = [];
        }
        message.sequenceNumber !== undefined &&
            (obj.sequenceNumber = message.sequenceNumber);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMarketDepthUpdate();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.buy = ((_b = object.buy) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.PriceLevel.fromPartial(e); })) || [];
        message.sell = ((_c = object.sell) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.PriceLevel.fromPartial(e); })) || [];
        message.sequenceNumber = (_d = object.sequenceNumber) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBasePosition() {
    return {
        marketId: "",
        partyId: "",
        openVolume: "0",
        realisedPnl: "",
        unrealisedPnl: "",
        averageEntryPrice: "",
        updatedAt: "0"
    };
}
exports.Position = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePosition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.partyId = reader.string();
                    break;
                case 3:
                    message.openVolume = longToString(reader.int64());
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
                    message.updatedAt = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBasePosition();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.openVolume = (_c = object.openVolume) !== null && _c !== void 0 ? _c : "0";
        message.realisedPnl = (_d = object.realisedPnl) !== null && _d !== void 0 ? _d : "";
        message.unrealisedPnl = (_e = object.unrealisedPnl) !== null && _e !== void 0 ? _e : "";
        message.averageEntryPrice = (_f = object.averageEntryPrice) !== null && _f !== void 0 ? _f : "";
        message.updatedAt = (_g = object.updatedAt) !== null && _g !== void 0 ? _g : "0";
        return message;
    }
};
function createBasePositionTrade() {
    return { volume: "0", price: "" };
}
exports.PositionTrade = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.volume !== "0") {
            writer.uint32(8).int64(message.volume);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePositionTrade();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.volume = longToString(reader.int64());
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
    fromJSON: function (object) {
        return {
            volume: isSet(object.volume) ? String(object.volume) : "0",
            price: isSet(object.price) ? String(object.price) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.volume !== undefined && (obj.volume = message.volume);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePositionTrade();
        message.volume = (_a = object.volume) !== null && _a !== void 0 ? _a : "0";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseDeposit() {
    return {
        id: "",
        status: 0,
        partyId: "",
        asset: "",
        amount: "",
        txHash: "",
        creditedTimestamp: "0",
        createdTimestamp: "0"
    };
}
exports.Deposit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.status = reader.int32();
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
                    message.creditedTimestamp = longToString(reader.int64());
                    break;
                case 8:
                    message.createdTimestamp = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseDeposit();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.partyId = (_c = object.partyId) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : "";
        message.txHash = (_f = object.txHash) !== null && _f !== void 0 ? _f : "";
        message.creditedTimestamp = (_g = object.creditedTimestamp) !== null && _g !== void 0 ? _g : "0";
        message.createdTimestamp = (_h = object.createdTimestamp) !== null && _h !== void 0 ? _h : "0";
        return message;
    }
};
function createBaseWithdrawal() {
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
        ext: undefined
    };
}
exports.Withdrawal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.WithdrawExt.encode(message.ext, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWithdrawal();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.status = reader.int32();
                    break;
                case 6:
                    message.ref = reader.string();
                    break;
                case 7:
                    message.expiry = longToString(reader.int64());
                    break;
                case 8:
                    message.txHash = reader.string();
                    break;
                case 9:
                    message.createdTimestamp = longToString(reader.int64());
                    break;
                case 10:
                    message.withdrawnTimestamp = longToString(reader.int64());
                    break;
                case 11:
                    message.ext = exports.WithdrawExt.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
            ext: isSet(object.ext) ? exports.WithdrawExt.fromJSON(object.ext) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
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
            (obj.ext = message.ext ? exports.WithdrawExt.toJSON(message.ext) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseWithdrawal();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.ref = (_f = object.ref) !== null && _f !== void 0 ? _f : "";
        message.expiry = (_g = object.expiry) !== null && _g !== void 0 ? _g : "0";
        message.txHash = (_h = object.txHash) !== null && _h !== void 0 ? _h : "";
        message.createdTimestamp = (_j = object.createdTimestamp) !== null && _j !== void 0 ? _j : "0";
        message.withdrawnTimestamp = (_k = object.withdrawnTimestamp) !== null && _k !== void 0 ? _k : "0";
        message.ext =
            object.ext !== undefined && object.ext !== null
                ? exports.WithdrawExt.fromPartial(object.ext)
                : undefined;
        return message;
    }
};
function createBaseWithdrawExt() {
    return { erc20: undefined };
}
exports.WithdrawExt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.erc20 !== undefined) {
            exports.Erc20WithdrawExt.encode(message.erc20, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWithdrawExt();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.erc20 = exports.Erc20WithdrawExt.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            erc20: isSet(object.erc20)
                ? exports.Erc20WithdrawExt.fromJSON(object.erc20)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.erc20 !== undefined &&
            (obj.erc20 = message.erc20
                ? exports.Erc20WithdrawExt.toJSON(message.erc20)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseWithdrawExt();
        message.erc20 =
            object.erc20 !== undefined && object.erc20 !== null
                ? exports.Erc20WithdrawExt.fromPartial(object.erc20)
                : undefined;
        return message;
    }
};
function createBaseErc20WithdrawExt() {
    return { receiverAddress: "" };
}
exports.Erc20WithdrawExt = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.receiverAddress !== "") {
            writer.uint32(10).string(message.receiverAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseErc20WithdrawExt();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            receiverAddress: isSet(object.receiverAddress)
                ? String(object.receiverAddress)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.receiverAddress !== undefined &&
            (obj.receiverAddress = message.receiverAddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseErc20WithdrawExt();
        message.receiverAddress = (_a = object.receiverAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseAccount() {
    return { id: "", owner: "", balance: "", asset: "", marketId: "", type: 0 };
}
exports.Account = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            balance: isSet(object.balance) ? String(object.balance) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        message.balance !== undefined && (obj.balance = message.balance);
        message.asset !== undefined && (obj.asset = message.asset);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseAccount();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.owner = (_b = object.owner) !== null && _b !== void 0 ? _b : "";
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseFinancialAmount() {
    return { amount: "", asset: "" };
}
exports.FinancialAmount = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFinancialAmount();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            amount: isSet(object.amount) ? String(object.amount) : "",
            asset: isSet(object.asset) ? String(object.asset) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFinancialAmount();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseTransfer() {
    return { owner: "", amount: undefined, type: 0, minAmount: "" };
}
exports.Transfer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.amount !== undefined) {
            exports.FinancialAmount.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.minAmount !== "") {
            writer.uint32(34).string(message.minAmount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransfer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.amount = exports.FinancialAmount.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.type = reader.int32();
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
    fromJSON: function (object) {
        return {
            owner: isSet(object.owner) ? String(object.owner) : "",
            amount: isSet(object.amount)
                ? exports.FinancialAmount.fromJSON(object.amount)
                : undefined,
            type: isSet(object.type) ? transferTypeFromJSON(object.type) : 0,
            minAmount: isSet(object.minAmount) ? String(object.minAmount) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.amount !== undefined &&
            (obj.amount = message.amount
                ? exports.FinancialAmount.toJSON(message.amount)
                : undefined);
        message.type !== undefined && (obj.type = transferTypeToJSON(message.type));
        message.minAmount !== undefined && (obj.minAmount = message.minAmount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseTransfer();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? exports.FinancialAmount.fromPartial(object.amount)
                : undefined;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        message.minAmount = (_c = object.minAmount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseTransferRequest() {
    return {
        fromAccount: [],
        toAccount: [],
        amount: "",
        minAmount: "",
        asset: "",
        reference: ""
    };
}
exports.TransferRequest = {
    encode: function (message, writer) {
        var e_8, _a, e_9, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _c = __values(message.fromAccount), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.Account.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        try {
            for (var _e = __values(message.toAccount), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.Account.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_9) throw e_9.error; }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransferRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAccount.push(exports.Account.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.toAccount.push(exports.Account.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            fromAccount: Array.isArray(object === null || object === void 0 ? void 0 : object.fromAccount)
                ? object.fromAccount.map(function (e) { return exports.Account.fromJSON(e); })
                : [],
            toAccount: Array.isArray(object === null || object === void 0 ? void 0 : object.toAccount)
                ? object.toAccount.map(function (e) { return exports.Account.fromJSON(e); })
                : [],
            amount: isSet(object.amount) ? String(object.amount) : "",
            minAmount: isSet(object.minAmount) ? String(object.minAmount) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            reference: isSet(object.reference) ? String(object.reference) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.fromAccount) {
            obj.fromAccount = message.fromAccount.map(function (e) {
                return e ? exports.Account.toJSON(e) : undefined;
            });
        }
        else {
            obj.fromAccount = [];
        }
        if (message.toAccount) {
            obj.toAccount = message.toAccount.map(function (e) {
                return e ? exports.Account.toJSON(e) : undefined;
            });
        }
        else {
            obj.toAccount = [];
        }
        message.amount !== undefined && (obj.amount = message.amount);
        message.minAmount !== undefined && (obj.minAmount = message.minAmount);
        message.asset !== undefined && (obj.asset = message.asset);
        message.reference !== undefined && (obj.reference = message.reference);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseTransferRequest();
        message.fromAccount =
            ((_a = object.fromAccount) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Account.fromPartial(e); })) || [];
        message.toAccount =
            ((_b = object.toAccount) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Account.fromPartial(e); })) || [];
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.minAmount = (_d = object.minAmount) !== null && _d !== void 0 ? _d : "";
        message.asset = (_e = object.asset) !== null && _e !== void 0 ? _e : "";
        message.reference = (_f = object.reference) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseLedgerEntry() {
    return {
        fromAccount: "",
        toAccount: "",
        amount: "",
        reference: "",
        type: "",
        timestamp: "0"
    };
}
exports.LedgerEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLedgerEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.timestamp = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            fromAccount: isSet(object.fromAccount) ? String(object.fromAccount) : "",
            toAccount: isSet(object.toAccount) ? String(object.toAccount) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            reference: isSet(object.reference) ? String(object.reference) : "",
            type: isSet(object.type) ? String(object.type) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fromAccount !== undefined &&
            (obj.fromAccount = message.fromAccount);
        message.toAccount !== undefined && (obj.toAccount = message.toAccount);
        message.amount !== undefined && (obj.amount = message.amount);
        message.reference !== undefined && (obj.reference = message.reference);
        message.type !== undefined && (obj.type = message.type);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseLedgerEntry();
        message.fromAccount = (_a = object.fromAccount) !== null && _a !== void 0 ? _a : "";
        message.toAccount = (_b = object.toAccount) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.reference = (_d = object.reference) !== null && _d !== void 0 ? _d : "";
        message.type = (_e = object.type) !== null && _e !== void 0 ? _e : "";
        message.timestamp = (_f = object.timestamp) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseTransferBalance() {
    return { account: undefined, balance: "" };
}
exports.TransferBalance = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== undefined) {
            exports.Account.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(18).string(message.balance);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransferBalance();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = exports.Account.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            account: isSet(object.account)
                ? exports.Account.fromJSON(object.account)
                : undefined,
            balance: isSet(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined &&
            (obj.account = message.account
                ? exports.Account.toJSON(message.account)
                : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTransferBalance();
        message.account =
            object.account !== undefined && object.account !== null
                ? exports.Account.fromPartial(object.account)
                : undefined;
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseTransferResponse() {
    return { transfers: [], balances: [] };
}
exports.TransferResponse = {
    encode: function (message, writer) {
        var e_10, _a, e_11, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _c = __values(message.transfers), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.LedgerEntry.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        try {
            for (var _e = __values(message.balances), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.TransferBalance.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransferResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.transfers.push(exports.LedgerEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.balances.push(exports.TransferBalance.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            transfers: Array.isArray(object === null || object === void 0 ? void 0 : object.transfers)
                ? object.transfers.map(function (e) { return exports.LedgerEntry.fromJSON(e); })
                : [],
            balances: Array.isArray(object === null || object === void 0 ? void 0 : object.balances)
                ? object.balances.map(function (e) { return exports.TransferBalance.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.transfers) {
            obj.transfers = message.transfers.map(function (e) {
                return e ? exports.LedgerEntry.toJSON(e) : undefined;
            });
        }
        else {
            obj.transfers = [];
        }
        if (message.balances) {
            obj.balances = message.balances.map(function (e) {
                return e ? exports.TransferBalance.toJSON(e) : undefined;
            });
        }
        else {
            obj.balances = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTransferResponse();
        message.transfers =
            ((_a = object.transfers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.LedgerEntry.fromPartial(e); })) || [];
        message.balances =
            ((_b = object.balances) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.TransferBalance.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseMarginLevels() {
    return {
        maintenanceMargin: "",
        searchLevel: "",
        initialMargin: "",
        collateralReleaseLevel: "",
        partyId: "",
        marketId: "",
        asset: "",
        timestamp: "0"
    };
}
exports.MarginLevels = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarginLevels();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.timestamp = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseMarginLevels();
        message.maintenanceMargin = (_a = object.maintenanceMargin) !== null && _a !== void 0 ? _a : "";
        message.searchLevel = (_b = object.searchLevel) !== null && _b !== void 0 ? _b : "";
        message.initialMargin = (_c = object.initialMargin) !== null && _c !== void 0 ? _c : "";
        message.collateralReleaseLevel = (_d = object.collateralReleaseLevel) !== null && _d !== void 0 ? _d : "";
        message.partyId = (_e = object.partyId) !== null && _e !== void 0 ? _e : "";
        message.marketId = (_f = object.marketId) !== null && _f !== void 0 ? _f : "";
        message.asset = (_g = object.asset) !== null && _g !== void 0 ? _g : "";
        message.timestamp = (_h = object.timestamp) !== null && _h !== void 0 ? _h : "0";
        return message;
    }
};
function createBaseMarketData() {
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
        liquidityProviderFeeShare: []
    };
}
exports.MarketData = {
    encode: function (message, writer) {
        var e_12, _a, e_13, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
        try {
            for (var _c = __values(message.priceMonitoringBounds), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.PriceMonitoringBounds.encode(v, writer.uint32(194).fork()).ldelim();
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        if (message.marketValueProxy !== "") {
            writer.uint32(202).string(message.marketValueProxy);
        }
        try {
            for (var _e = __values(message.liquidityProviderFeeShare), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.LiquidityProviderFeeShare.encode(v, writer.uint32(210).fork()).ldelim();
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markPrice = reader.string();
                    break;
                case 2:
                    message.bestBidPrice = reader.string();
                    break;
                case 3:
                    message.bestBidVolume = longToString(reader.uint64());
                    break;
                case 4:
                    message.bestOfferPrice = reader.string();
                    break;
                case 5:
                    message.bestOfferVolume = longToString(reader.uint64());
                    break;
                case 6:
                    message.bestStaticBidPrice = reader.string();
                    break;
                case 7:
                    message.bestStaticBidVolume = longToString(reader.uint64());
                    break;
                case 8:
                    message.bestStaticOfferPrice = reader.string();
                    break;
                case 9:
                    message.bestStaticOfferVolume = longToString(reader.uint64());
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
                    message.timestamp = longToString(reader.int64());
                    break;
                case 14:
                    message.openInterest = longToString(reader.uint64());
                    break;
                case 15:
                    message.auctionEnd = longToString(reader.int64());
                    break;
                case 16:
                    message.auctionStart = longToString(reader.int64());
                    break;
                case 17:
                    message.indicativePrice = reader.string();
                    break;
                case 18:
                    message.indicativeVolume = longToString(reader.uint64());
                    break;
                case 19:
                    message.marketTradingMode = reader.int32();
                    break;
                case 20:
                    message.trigger = reader.int32();
                    break;
                case 21:
                    message.extensionTrigger = reader.int32();
                    break;
                case 22:
                    message.targetStake = reader.string();
                    break;
                case 23:
                    message.suppliedStake = reader.string();
                    break;
                case 24:
                    message.priceMonitoringBounds.push(exports.PriceMonitoringBounds.decode(reader, reader.uint32()));
                    break;
                case 25:
                    message.marketValueProxy = reader.string();
                    break;
                case 26:
                    message.liquidityProviderFeeShare.push(exports.LiquidityProviderFeeShare.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
                ? (0, markets_1.market_TradingModeFromJSON)(object.marketTradingMode)
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
            priceMonitoringBounds: Array.isArray(object === null || object === void 0 ? void 0 : object.priceMonitoringBounds)
                ? object.priceMonitoringBounds.map(function (e) {
                    return exports.PriceMonitoringBounds.fromJSON(e);
                })
                : [],
            marketValueProxy: isSet(object.marketValueProxy)
                ? String(object.marketValueProxy)
                : "",
            liquidityProviderFeeShare: Array.isArray(object === null || object === void 0 ? void 0 : object.liquidityProviderFeeShare)
                ? object.liquidityProviderFeeShare.map(function (e) {
                    return exports.LiquidityProviderFeeShare.fromJSON(e);
                })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
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
            (obj.marketTradingMode = (0, markets_1.market_TradingModeToJSON)(message.marketTradingMode));
        message.trigger !== undefined &&
            (obj.trigger = auctionTriggerToJSON(message.trigger));
        message.extensionTrigger !== undefined &&
            (obj.extensionTrigger = auctionTriggerToJSON(message.extensionTrigger));
        message.targetStake !== undefined &&
            (obj.targetStake = message.targetStake);
        message.suppliedStake !== undefined &&
            (obj.suppliedStake = message.suppliedStake);
        if (message.priceMonitoringBounds) {
            obj.priceMonitoringBounds = message.priceMonitoringBounds.map(function (e) {
                return e ? exports.PriceMonitoringBounds.toJSON(e) : undefined;
            });
        }
        else {
            obj.priceMonitoringBounds = [];
        }
        message.marketValueProxy !== undefined &&
            (obj.marketValueProxy = message.marketValueProxy);
        if (message.liquidityProviderFeeShare) {
            obj.liquidityProviderFeeShare = message.liquidityProviderFeeShare.map(function (e) { return (e ? exports.LiquidityProviderFeeShare.toJSON(e) : undefined); });
        }
        else {
            obj.liquidityProviderFeeShare = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        var message = createBaseMarketData();
        message.markPrice = (_a = object.markPrice) !== null && _a !== void 0 ? _a : "";
        message.bestBidPrice = (_b = object.bestBidPrice) !== null && _b !== void 0 ? _b : "";
        message.bestBidVolume = (_c = object.bestBidVolume) !== null && _c !== void 0 ? _c : "0";
        message.bestOfferPrice = (_d = object.bestOfferPrice) !== null && _d !== void 0 ? _d : "";
        message.bestOfferVolume = (_e = object.bestOfferVolume) !== null && _e !== void 0 ? _e : "0";
        message.bestStaticBidPrice = (_f = object.bestStaticBidPrice) !== null && _f !== void 0 ? _f : "";
        message.bestStaticBidVolume = (_g = object.bestStaticBidVolume) !== null && _g !== void 0 ? _g : "0";
        message.bestStaticOfferPrice = (_h = object.bestStaticOfferPrice) !== null && _h !== void 0 ? _h : "";
        message.bestStaticOfferVolume = (_j = object.bestStaticOfferVolume) !== null && _j !== void 0 ? _j : "0";
        message.midPrice = (_k = object.midPrice) !== null && _k !== void 0 ? _k : "";
        message.staticMidPrice = (_l = object.staticMidPrice) !== null && _l !== void 0 ? _l : "";
        message.market = (_m = object.market) !== null && _m !== void 0 ? _m : "";
        message.timestamp = (_o = object.timestamp) !== null && _o !== void 0 ? _o : "0";
        message.openInterest = (_p = object.openInterest) !== null && _p !== void 0 ? _p : "0";
        message.auctionEnd = (_q = object.auctionEnd) !== null && _q !== void 0 ? _q : "0";
        message.auctionStart = (_r = object.auctionStart) !== null && _r !== void 0 ? _r : "0";
        message.indicativePrice = (_s = object.indicativePrice) !== null && _s !== void 0 ? _s : "";
        message.indicativeVolume = (_t = object.indicativeVolume) !== null && _t !== void 0 ? _t : "0";
        message.marketTradingMode = (_u = object.marketTradingMode) !== null && _u !== void 0 ? _u : 0;
        message.trigger = (_v = object.trigger) !== null && _v !== void 0 ? _v : 0;
        message.extensionTrigger = (_w = object.extensionTrigger) !== null && _w !== void 0 ? _w : 0;
        message.targetStake = (_x = object.targetStake) !== null && _x !== void 0 ? _x : "";
        message.suppliedStake = (_y = object.suppliedStake) !== null && _y !== void 0 ? _y : "";
        message.priceMonitoringBounds =
            ((_z = object.priceMonitoringBounds) === null || _z === void 0 ? void 0 : _z.map(function (e) {
                return exports.PriceMonitoringBounds.fromPartial(e);
            })) || [];
        message.marketValueProxy = (_0 = object.marketValueProxy) !== null && _0 !== void 0 ? _0 : "";
        message.liquidityProviderFeeShare =
            ((_1 = object.liquidityProviderFeeShare) === null || _1 === void 0 ? void 0 : _1.map(function (e) {
                return exports.LiquidityProviderFeeShare.fromPartial(e);
            })) || [];
        return message;
    }
};
function createBaseLiquidityProviderFeeShare() {
    return { party: "", equityLikeShare: "", averageEntryValuation: "" };
}
exports.LiquidityProviderFeeShare = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProviderFeeShare();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            party: isSet(object.party) ? String(object.party) : "",
            equityLikeShare: isSet(object.equityLikeShare)
                ? String(object.equityLikeShare)
                : "",
            averageEntryValuation: isSet(object.averageEntryValuation)
                ? String(object.averageEntryValuation)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.party !== undefined && (obj.party = message.party);
        message.equityLikeShare !== undefined &&
            (obj.equityLikeShare = message.equityLikeShare);
        message.averageEntryValuation !== undefined &&
            (obj.averageEntryValuation = message.averageEntryValuation);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseLiquidityProviderFeeShare();
        message.party = (_a = object.party) !== null && _a !== void 0 ? _a : "";
        message.equityLikeShare = (_b = object.equityLikeShare) !== null && _b !== void 0 ? _b : "";
        message.averageEntryValuation = (_c = object.averageEntryValuation) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBasePriceMonitoringBounds() {
    return {
        minValidPrice: "",
        maxValidPrice: "",
        trigger: undefined,
        referencePrice: ""
    };
}
exports.PriceMonitoringBounds = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.minValidPrice !== "") {
            writer.uint32(10).string(message.minValidPrice);
        }
        if (message.maxValidPrice !== "") {
            writer.uint32(18).string(message.maxValidPrice);
        }
        if (message.trigger !== undefined) {
            markets_1.PriceMonitoringTrigger.encode(message.trigger, writer.uint32(26).fork()).ldelim();
        }
        if (message.referencePrice !== "") {
            writer.uint32(34).string(message.referencePrice);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePriceMonitoringBounds();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minValidPrice = reader.string();
                    break;
                case 2:
                    message.maxValidPrice = reader.string();
                    break;
                case 3:
                    message.trigger = markets_1.PriceMonitoringTrigger.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            minValidPrice: isSet(object.minValidPrice)
                ? String(object.minValidPrice)
                : "",
            maxValidPrice: isSet(object.maxValidPrice)
                ? String(object.maxValidPrice)
                : "",
            trigger: isSet(object.trigger)
                ? markets_1.PriceMonitoringTrigger.fromJSON(object.trigger)
                : undefined,
            referencePrice: isSet(object.referencePrice)
                ? String(object.referencePrice)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.minValidPrice !== undefined &&
            (obj.minValidPrice = message.minValidPrice);
        message.maxValidPrice !== undefined &&
            (obj.maxValidPrice = message.maxValidPrice);
        message.trigger !== undefined &&
            (obj.trigger = message.trigger
                ? markets_1.PriceMonitoringTrigger.toJSON(message.trigger)
                : undefined);
        message.referencePrice !== undefined &&
            (obj.referencePrice = message.referencePrice);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePriceMonitoringBounds();
        message.minValidPrice = (_a = object.minValidPrice) !== null && _a !== void 0 ? _a : "";
        message.maxValidPrice = (_b = object.maxValidPrice) !== null && _b !== void 0 ? _b : "";
        message.trigger =
            object.trigger !== undefined && object.trigger !== null
                ? markets_1.PriceMonitoringTrigger.fromPartial(object.trigger)
                : undefined;
        message.referencePrice = (_c = object.referencePrice) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseErrorDetail() {
    return { code: 0, message: "", inner: "" };
}
exports.ErrorDetail = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseErrorDetail();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            code: isSet(object.code) ? Number(object.code) : 0,
            message: isSet(object.message) ? String(object.message) : "",
            inner: isSet(object.inner) ? String(object.inner) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.message !== undefined && (obj.message = message.message);
        message.inner !== undefined && (obj.inner = message.inner);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseErrorDetail();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.inner = (_c = object.inner) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseNetworkParameter() {
    return { key: "", value: "" };
}
exports.NetworkParameter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNetworkParameter();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseNetworkParameter();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseNetworkLimits() {
    return {
        canProposeMarket: false,
        canProposeAsset: false,
        bootstrapFinished: false,
        proposeMarketEnabled: false,
        proposeAssetEnabled: false,
        bootstrapBlockCount: 0,
        genesisLoaded: false,
        proposeMarketEnabledFrom: "0",
        proposeAssetEnabledFrom: "0"
    };
}
exports.NetworkLimits = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNetworkLimits();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.proposeMarketEnabledFrom = longToString(reader.int64());
                    break;
                case 9:
                    message.proposeAssetEnabledFrom = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseNetworkLimits();
        message.canProposeMarket = (_a = object.canProposeMarket) !== null && _a !== void 0 ? _a : false;
        message.canProposeAsset = (_b = object.canProposeAsset) !== null && _b !== void 0 ? _b : false;
        message.bootstrapFinished = (_c = object.bootstrapFinished) !== null && _c !== void 0 ? _c : false;
        message.proposeMarketEnabled = (_d = object.proposeMarketEnabled) !== null && _d !== void 0 ? _d : false;
        message.proposeAssetEnabled = (_e = object.proposeAssetEnabled) !== null && _e !== void 0 ? _e : false;
        message.bootstrapBlockCount = (_f = object.bootstrapBlockCount) !== null && _f !== void 0 ? _f : 0;
        message.genesisLoaded = (_g = object.genesisLoaded) !== null && _g !== void 0 ? _g : false;
        message.proposeMarketEnabledFrom = (_h = object.proposeMarketEnabledFrom) !== null && _h !== void 0 ? _h : "0";
        message.proposeAssetEnabledFrom = (_j = object.proposeAssetEnabledFrom) !== null && _j !== void 0 ? _j : "0";
        return message;
    }
};
function createBaseLiquidityOrder() {
    return { reference: 0, proportion: 0, offset: "" };
}
exports.LiquidityOrder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityOrder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reference = reader.int32();
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
    fromJSON: function (object) {
        return {
            reference: isSet(object.reference)
                ? peggedReferenceFromJSON(object.reference)
                : 0,
            proportion: isSet(object.proportion) ? Number(object.proportion) : 0,
            offset: isSet(object.offset) ? String(object.offset) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.reference !== undefined &&
            (obj.reference = peggedReferenceToJSON(message.reference));
        message.proportion !== undefined &&
            (obj.proportion = Math.round(message.proportion));
        message.offset !== undefined && (obj.offset = message.offset);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseLiquidityOrder();
        message.reference = (_a = object.reference) !== null && _a !== void 0 ? _a : 0;
        message.proportion = (_b = object.proportion) !== null && _b !== void 0 ? _b : 0;
        message.offset = (_c = object.offset) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseLiquidityOrderReference() {
    return { orderId: "", liquidityOrder: undefined };
}
exports.LiquidityOrderReference = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.liquidityOrder !== undefined) {
            exports.LiquidityOrder.encode(message.liquidityOrder, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityOrderReference();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.liquidityOrder = exports.LiquidityOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            orderId: isSet(object.orderId) ? String(object.orderId) : "",
            liquidityOrder: isSet(object.liquidityOrder)
                ? exports.LiquidityOrder.fromJSON(object.liquidityOrder)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.liquidityOrder !== undefined &&
            (obj.liquidityOrder = message.liquidityOrder
                ? exports.LiquidityOrder.toJSON(message.liquidityOrder)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseLiquidityOrderReference();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        message.liquidityOrder =
            object.liquidityOrder !== undefined && object.liquidityOrder !== null
                ? exports.LiquidityOrder.fromPartial(object.liquidityOrder)
                : undefined;
        return message;
    }
};
function createBaseLiquidityProvision() {
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
        reference: ""
    };
}
exports.LiquidityProvision = {
    encode: function (message, writer) {
        var e_14, _a, e_15, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
        try {
            for (var _c = __values(message.sells), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.LiquidityOrderReference.encode(v, writer.uint32(66).fork()).ldelim();
            }
        }
        catch (e_14_1) { e_14 = { error: e_14_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_14) throw e_14.error; }
        }
        try {
            for (var _e = __values(message.buys), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.LiquidityOrderReference.encode(v, writer.uint32(74).fork()).ldelim();
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_15) throw e_15.error; }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProvision();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.partyId = reader.string();
                    break;
                case 3:
                    message.createdAt = longToString(reader.int64());
                    break;
                case 4:
                    message.updatedAt = longToString(reader.int64());
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
                    message.sells.push(exports.LiquidityOrderReference.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.buys.push(exports.LiquidityOrderReference.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.version = reader.string();
                    break;
                case 11:
                    message.status = reader.int32();
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
    fromJSON: function (object) {
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
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells)
                ? object.sells.map(function (e) { return exports.LiquidityOrderReference.fromJSON(e); })
                : [],
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys)
                ? object.buys.map(function (e) { return exports.LiquidityOrderReference.fromJSON(e); })
                : [],
            version: isSet(object.version) ? String(object.version) : "",
            status: isSet(object.status)
                ? liquidityProvision_StatusFromJSON(object.status)
                : 0,
            reference: isSet(object.reference) ? String(object.reference) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.commitmentAmount !== undefined &&
            (obj.commitmentAmount = message.commitmentAmount);
        message.fee !== undefined && (obj.fee = message.fee);
        if (message.sells) {
            obj.sells = message.sells.map(function (e) {
                return e ? exports.LiquidityOrderReference.toJSON(e) : undefined;
            });
        }
        else {
            obj.sells = [];
        }
        if (message.buys) {
            obj.buys = message.buys.map(function (e) {
                return e ? exports.LiquidityOrderReference.toJSON(e) : undefined;
            });
        }
        else {
            obj.buys = [];
        }
        message.version !== undefined && (obj.version = message.version);
        message.status !== undefined &&
            (obj.status = liquidityProvision_StatusToJSON(message.status));
        message.reference !== undefined && (obj.reference = message.reference);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseLiquidityProvision();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : "0";
        message.updatedAt = (_d = object.updatedAt) !== null && _d !== void 0 ? _d : "0";
        message.marketId = (_e = object.marketId) !== null && _e !== void 0 ? _e : "";
        message.commitmentAmount = (_f = object.commitmentAmount) !== null && _f !== void 0 ? _f : "";
        message.fee = (_g = object.fee) !== null && _g !== void 0 ? _g : "";
        message.sells =
            ((_h = object.sells) === null || _h === void 0 ? void 0 : _h.map(function (e) { return exports.LiquidityOrderReference.fromPartial(e); })) || [];
        message.buys =
            ((_j = object.buys) === null || _j === void 0 ? void 0 : _j.map(function (e) { return exports.LiquidityOrderReference.fromPartial(e); })) || [];
        message.version = (_k = object.version) !== null && _k !== void 0 ? _k : "";
        message.status = (_l = object.status) !== null && _l !== void 0 ? _l : 0;
        message.reference = (_m = object.reference) !== null && _m !== void 0 ? _m : "";
        return message;
    }
};
function createBaseEthereumConfig() {
    return {
        networkId: "",
        chainId: "",
        collateralBridgeContract: undefined,
        confirmations: 0,
        stakingBridgeContract: undefined,
        tokenVestingContract: undefined,
        multisigControlContract: undefined
    };
}
exports.EthereumConfig = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.networkId !== "") {
            writer.uint32(10).string(message.networkId);
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.collateralBridgeContract !== undefined) {
            exports.EthereumContractConfig.encode(message.collateralBridgeContract, writer.uint32(26).fork()).ldelim();
        }
        if (message.confirmations !== 0) {
            writer.uint32(32).uint32(message.confirmations);
        }
        if (message.stakingBridgeContract !== undefined) {
            exports.EthereumContractConfig.encode(message.stakingBridgeContract, writer.uint32(42).fork()).ldelim();
        }
        if (message.tokenVestingContract !== undefined) {
            exports.EthereumContractConfig.encode(message.tokenVestingContract, writer.uint32(50).fork()).ldelim();
        }
        if (message.multisigControlContract !== undefined) {
            exports.EthereumContractConfig.encode(message.multisigControlContract, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEthereumConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.networkId = reader.string();
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.collateralBridgeContract = exports.EthereumContractConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.confirmations = reader.uint32();
                    break;
                case 5:
                    message.stakingBridgeContract = exports.EthereumContractConfig.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tokenVestingContract = exports.EthereumContractConfig.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.multisigControlContract = exports.EthereumContractConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            networkId: isSet(object.networkId) ? String(object.networkId) : "",
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            collateralBridgeContract: isSet(object.collateralBridgeContract)
                ? exports.EthereumContractConfig.fromJSON(object.collateralBridgeContract)
                : undefined,
            confirmations: isSet(object.confirmations)
                ? Number(object.confirmations)
                : 0,
            stakingBridgeContract: isSet(object.stakingBridgeContract)
                ? exports.EthereumContractConfig.fromJSON(object.stakingBridgeContract)
                : undefined,
            tokenVestingContract: isSet(object.tokenVestingContract)
                ? exports.EthereumContractConfig.fromJSON(object.tokenVestingContract)
                : undefined,
            multisigControlContract: isSet(object.multisigControlContract)
                ? exports.EthereumContractConfig.fromJSON(object.multisigControlContract)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.networkId !== undefined && (obj.networkId = message.networkId);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.collateralBridgeContract !== undefined &&
            (obj.collateralBridgeContract = message.collateralBridgeContract
                ? exports.EthereumContractConfig.toJSON(message.collateralBridgeContract)
                : undefined);
        message.confirmations !== undefined &&
            (obj.confirmations = Math.round(message.confirmations));
        message.stakingBridgeContract !== undefined &&
            (obj.stakingBridgeContract = message.stakingBridgeContract
                ? exports.EthereumContractConfig.toJSON(message.stakingBridgeContract)
                : undefined);
        message.tokenVestingContract !== undefined &&
            (obj.tokenVestingContract = message.tokenVestingContract
                ? exports.EthereumContractConfig.toJSON(message.tokenVestingContract)
                : undefined);
        message.multisigControlContract !== undefined &&
            (obj.multisigControlContract = message.multisigControlContract
                ? exports.EthereumContractConfig.toJSON(message.multisigControlContract)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEthereumConfig();
        message.networkId = (_a = object.networkId) !== null && _a !== void 0 ? _a : "";
        message.chainId = (_b = object.chainId) !== null && _b !== void 0 ? _b : "";
        message.collateralBridgeContract =
            object.collateralBridgeContract !== undefined &&
                object.collateralBridgeContract !== null
                ? exports.EthereumContractConfig.fromPartial(object.collateralBridgeContract)
                : undefined;
        message.confirmations = (_c = object.confirmations) !== null && _c !== void 0 ? _c : 0;
        message.stakingBridgeContract =
            object.stakingBridgeContract !== undefined &&
                object.stakingBridgeContract !== null
                ? exports.EthereumContractConfig.fromPartial(object.stakingBridgeContract)
                : undefined;
        message.tokenVestingContract =
            object.tokenVestingContract !== undefined &&
                object.tokenVestingContract !== null
                ? exports.EthereumContractConfig.fromPartial(object.tokenVestingContract)
                : undefined;
        message.multisigControlContract =
            object.multisigControlContract !== undefined &&
                object.multisigControlContract !== null
                ? exports.EthereumContractConfig.fromPartial(object.multisigControlContract)
                : undefined;
        return message;
    }
};
function createBaseEthereumContractConfig() {
    return { address: "", deploymentBlockHeight: "0" };
}
exports.EthereumContractConfig = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.deploymentBlockHeight !== "0") {
            writer.uint32(48).uint64(message.deploymentBlockHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEthereumContractConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 6:
                    message.deploymentBlockHeight = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            deploymentBlockHeight: isSet(object.deploymentBlockHeight)
                ? String(object.deploymentBlockHeight)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.deploymentBlockHeight !== undefined &&
            (obj.deploymentBlockHeight = message.deploymentBlockHeight);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseEthereumContractConfig();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.deploymentBlockHeight = (_b = object.deploymentBlockHeight) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseEpochTimestamps() {
    return {
        startTime: "0",
        expiryTime: "0",
        endTime: "0",
        firstBlock: "0",
        lastBlock: "0"
    };
}
exports.EpochTimestamps = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochTimestamps();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startTime = longToString(reader.int64());
                    break;
                case 2:
                    message.expiryTime = longToString(reader.int64());
                    break;
                case 3:
                    message.endTime = longToString(reader.int64());
                    break;
                case 4:
                    message.firstBlock = longToString(reader.uint64());
                    break;
                case 5:
                    message.lastBlock = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            startTime: isSet(object.startTime) ? String(object.startTime) : "0",
            expiryTime: isSet(object.expiryTime) ? String(object.expiryTime) : "0",
            endTime: isSet(object.endTime) ? String(object.endTime) : "0",
            firstBlock: isSet(object.firstBlock) ? String(object.firstBlock) : "0",
            lastBlock: isSet(object.lastBlock) ? String(object.lastBlock) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.expiryTime !== undefined && (obj.expiryTime = message.expiryTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.firstBlock !== undefined && (obj.firstBlock = message.firstBlock);
        message.lastBlock !== undefined && (obj.lastBlock = message.lastBlock);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseEpochTimestamps();
        message.startTime = (_a = object.startTime) !== null && _a !== void 0 ? _a : "0";
        message.expiryTime = (_b = object.expiryTime) !== null && _b !== void 0 ? _b : "0";
        message.endTime = (_c = object.endTime) !== null && _c !== void 0 ? _c : "0";
        message.firstBlock = (_d = object.firstBlock) !== null && _d !== void 0 ? _d : "0";
        message.lastBlock = (_e = object.lastBlock) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
function createBaseEpoch() {
    return { seq: "0", timestamps: undefined, validators: [], delegations: [] };
}
exports.Epoch = {
    encode: function (message, writer) {
        var e_16, _a, e_17, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.seq !== "0") {
            writer.uint32(8).uint64(message.seq);
        }
        if (message.timestamps !== undefined) {
            exports.EpochTimestamps.encode(message.timestamps, writer.uint32(18).fork()).ldelim();
        }
        try {
            for (var _c = __values(message.validators), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.Node.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_16) throw e_16.error; }
        }
        try {
            for (var _e = __values(message.delegations), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.Delegation.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        catch (e_17_1) { e_17 = { error: e_17_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_17) throw e_17.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpoch();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seq = longToString(reader.uint64());
                    break;
                case 2:
                    message.timestamps = exports.EpochTimestamps.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validators.push(exports.Node.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegations.push(exports.Delegation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            seq: isSet(object.seq) ? String(object.seq) : "0",
            timestamps: isSet(object.timestamps)
                ? exports.EpochTimestamps.fromJSON(object.timestamps)
                : undefined,
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map(function (e) { return exports.Node.fromJSON(e); })
                : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map(function (e) { return exports.Delegation.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.seq !== undefined && (obj.seq = message.seq);
        message.timestamps !== undefined &&
            (obj.timestamps = message.timestamps
                ? exports.EpochTimestamps.toJSON(message.timestamps)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map(function (e) {
                return e ? exports.Node.toJSON(e) : undefined;
            });
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map(function (e) {
                return e ? exports.Delegation.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegations = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEpoch();
        message.seq = (_a = object.seq) !== null && _a !== void 0 ? _a : "0";
        message.timestamps =
            object.timestamps !== undefined && object.timestamps !== null
                ? exports.EpochTimestamps.fromPartial(object.timestamps)
                : undefined;
        message.validators =
            ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Node.fromPartial(e); })) || [];
        message.delegations =
            ((_c = object.delegations) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.Delegation.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseEpochParticipation() {
    return { epoch: undefined, offline: "0", online: "0", totalRewards: 0 };
}
exports.EpochParticipation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.epoch !== undefined) {
            exports.Epoch.encode(message.epoch, writer.uint32(10).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochParticipation();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epoch = exports.Epoch.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.offline = longToString(reader.uint64());
                    break;
                case 3:
                    message.online = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            epoch: isSet(object.epoch) ? exports.Epoch.fromJSON(object.epoch) : undefined,
            offline: isSet(object.offline) ? String(object.offline) : "0",
            online: isSet(object.online) ? String(object.online) : "0",
            totalRewards: isSet(object.totalRewards)
                ? Number(object.totalRewards)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.epoch !== undefined &&
            (obj.epoch = message.epoch ? exports.Epoch.toJSON(message.epoch) : undefined);
        message.offline !== undefined && (obj.offline = message.offline);
        message.online !== undefined && (obj.online = message.online);
        message.totalRewards !== undefined &&
            (obj.totalRewards = message.totalRewards);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEpochParticipation();
        message.epoch =
            object.epoch !== undefined && object.epoch !== null
                ? exports.Epoch.fromPartial(object.epoch)
                : undefined;
        message.offline = (_a = object.offline) !== null && _a !== void 0 ? _a : "0";
        message.online = (_b = object.online) !== null && _b !== void 0 ? _b : "0";
        message.totalRewards = (_c = object.totalRewards) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseEpochData() {
    return { total: 0, offline: 0, online: 0 };
}
exports.EpochData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEpochData();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            total: isSet(object.total) ? Number(object.total) : 0,
            offline: isSet(object.offline) ? Number(object.offline) : 0,
            online: isSet(object.online) ? Number(object.online) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.offline !== undefined &&
            (obj.offline = Math.round(message.offline));
        message.online !== undefined && (obj.online = Math.round(message.online));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEpochData();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : 0;
        message.offline = (_b = object.offline) !== null && _b !== void 0 ? _b : 0;
        message.online = (_c = object.online) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseRankingScore() {
    return {
        stakeScore: "",
        performanceScore: "",
        previousStatus: 0,
        status: 0,
        votingPower: 0,
        rankingScore: ""
    };
}
exports.RankingScore = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRankingScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakeScore = reader.string();
                    break;
                case 2:
                    message.performanceScore = reader.string();
                    break;
                case 3:
                    message.previousStatus = reader.int32();
                    break;
                case 4:
                    message.status = reader.int32();
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
    fromJSON: function (object) {
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
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseRankingScore();
        message.stakeScore = (_a = object.stakeScore) !== null && _a !== void 0 ? _a : "";
        message.performanceScore = (_b = object.performanceScore) !== null && _b !== void 0 ? _b : "";
        message.previousStatus = (_c = object.previousStatus) !== null && _c !== void 0 ? _c : 0;
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
        message.votingPower = (_e = object.votingPower) !== null && _e !== void 0 ? _e : 0;
        message.rankingScore = (_f = object.rankingScore) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseRewardScore() {
    return {
        rawValidatorScore: "",
        performanceScore: "",
        multisigScore: "",
        validatorScore: "",
        normalisedScore: "",
        validatorStatus: 0
    };
}
exports.RewardScore = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRewardScore();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.validatorStatus = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
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
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
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
            (obj.validatorStatus = validatorNodeStatusToJSON(message.validatorStatus));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseRewardScore();
        message.rawValidatorScore = (_a = object.rawValidatorScore) !== null && _a !== void 0 ? _a : "";
        message.performanceScore = (_b = object.performanceScore) !== null && _b !== void 0 ? _b : "";
        message.multisigScore = (_c = object.multisigScore) !== null && _c !== void 0 ? _c : "";
        message.validatorScore = (_d = object.validatorScore) !== null && _d !== void 0 ? _d : "";
        message.normalisedScore = (_e = object.normalisedScore) !== null && _e !== void 0 ? _e : "";
        message.validatorStatus = (_f = object.validatorStatus) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseNode() {
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
        avatarUrl: ""
    };
}
exports.Node = {
    encode: function (message, writer) {
        var e_18, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.EpochData.encode(message.epochData, writer.uint32(98).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        try {
            for (var _b = __values(message.delegations), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                exports.Delegation.encode(v, writer.uint32(114).fork()).ldelim();
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_18) throw e_18.error; }
        }
        if (message.rewardScore !== undefined) {
            exports.RewardScore.encode(message.rewardScore, writer.uint32(122).fork()).ldelim();
        }
        if (message.rankingScore !== undefined) {
            exports.RankingScore.encode(message.rankingScore, writer.uint32(130).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(138).string(message.name);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(146).string(message.avatarUrl);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNode();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.epochData = exports.EpochData.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.delegations.push(exports.Delegation.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.rewardScore = exports.RewardScore.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.rankingScore = exports.RankingScore.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
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
                ? exports.EpochData.fromJSON(object.epochData)
                : undefined,
            status: isSet(object.status) ? nodeStatusFromJSON(object.status) : 0,
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map(function (e) { return exports.Delegation.fromJSON(e); })
                : [],
            rewardScore: isSet(object.rewardScore)
                ? exports.RewardScore.fromJSON(object.rewardScore)
                : undefined,
            rankingScore: isSet(object.rankingScore)
                ? exports.RankingScore.fromJSON(object.rankingScore)
                : undefined,
            name: isSet(object.name) ? String(object.name) : "",
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
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
                ? exports.EpochData.toJSON(message.epochData)
                : undefined);
        message.status !== undefined &&
            (obj.status = nodeStatusToJSON(message.status));
        if (message.delegations) {
            obj.delegations = message.delegations.map(function (e) {
                return e ? exports.Delegation.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegations = [];
        }
        message.rewardScore !== undefined &&
            (obj.rewardScore = message.rewardScore
                ? exports.RewardScore.toJSON(message.rewardScore)
                : undefined);
        message.rankingScore !== undefined &&
            (obj.rankingScore = message.rankingScore
                ? exports.RankingScore.toJSON(message.rankingScore)
                : undefined);
        message.name !== undefined && (obj.name = message.name);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        var message = createBaseNode();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.pubKey = (_b = object.pubKey) !== null && _b !== void 0 ? _b : "";
        message.tmPubKey = (_c = object.tmPubKey) !== null && _c !== void 0 ? _c : "";
        message.ethereumAdddress = (_d = object.ethereumAdddress) !== null && _d !== void 0 ? _d : "";
        message.infoUrl = (_e = object.infoUrl) !== null && _e !== void 0 ? _e : "";
        message.location = (_f = object.location) !== null && _f !== void 0 ? _f : "";
        message.stakedByOperator = (_g = object.stakedByOperator) !== null && _g !== void 0 ? _g : "";
        message.stakedByDelegates = (_h = object.stakedByDelegates) !== null && _h !== void 0 ? _h : "";
        message.stakedTotal = (_j = object.stakedTotal) !== null && _j !== void 0 ? _j : "";
        message.maxIntendedStake = (_k = object.maxIntendedStake) !== null && _k !== void 0 ? _k : "";
        message.pendingStake = (_l = object.pendingStake) !== null && _l !== void 0 ? _l : "";
        message.epochData =
            object.epochData !== undefined && object.epochData !== null
                ? exports.EpochData.fromPartial(object.epochData)
                : undefined;
        message.status = (_m = object.status) !== null && _m !== void 0 ? _m : 0;
        message.delegations =
            ((_o = object.delegations) === null || _o === void 0 ? void 0 : _o.map(function (e) { return exports.Delegation.fromPartial(e); })) || [];
        message.rewardScore =
            object.rewardScore !== undefined && object.rewardScore !== null
                ? exports.RewardScore.fromPartial(object.rewardScore)
                : undefined;
        message.rankingScore =
            object.rankingScore !== undefined && object.rankingScore !== null
                ? exports.RankingScore.fromPartial(object.rankingScore)
                : undefined;
        message.name = (_p = object.name) !== null && _p !== void 0 ? _p : "";
        message.avatarUrl = (_q = object.avatarUrl) !== null && _q !== void 0 ? _q : "";
        return message;
    }
};
function createBaseNodeData() {
    return {
        stakedTotal: "",
        totalNodes: 0,
        inactiveNodes: 0,
        validatingNodes: 0,
        uptime: 0
    };
}
exports.NodeData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeData();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            stakedTotal: isSet(object.stakedTotal) ? String(object.stakedTotal) : "",
            totalNodes: isSet(object.totalNodes) ? Number(object.totalNodes) : 0,
            inactiveNodes: isSet(object.inactiveNodes)
                ? Number(object.inactiveNodes)
                : 0,
            validatingNodes: isSet(object.validatingNodes)
                ? Number(object.validatingNodes)
                : 0,
            uptime: isSet(object.uptime) ? Number(object.uptime) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseNodeData();
        message.stakedTotal = (_a = object.stakedTotal) !== null && _a !== void 0 ? _a : "";
        message.totalNodes = (_b = object.totalNodes) !== null && _b !== void 0 ? _b : 0;
        message.inactiveNodes = (_c = object.inactiveNodes) !== null && _c !== void 0 ? _c : 0;
        message.validatingNodes = (_d = object.validatingNodes) !== null && _d !== void 0 ? _d : 0;
        message.uptime = (_e = object.uptime) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseDelegation() {
    return { party: "", nodeId: "", amount: "", epochSeq: "" };
}
exports.Delegation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegation();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            party: isSet(object.party) ? String(object.party) : "",
            nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.party !== undefined && (obj.party = message.party);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined && (obj.amount = message.amount);
        message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDelegation();
        message.party = (_a = object.party) !== null && _a !== void 0 ? _a : "";
        message.nodeId = (_b = object.nodeId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.epochSeq = (_d = object.epochSeq) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseReward() {
    return {
        assetId: "",
        partyId: "",
        epoch: "0",
        amount: "",
        percentageOfTotal: "",
        receivedAt: "0"
    };
}
exports.Reward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseReward();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assetId = reader.string();
                    break;
                case 2:
                    message.partyId = reader.string();
                    break;
                case 3:
                    message.epoch = longToString(reader.uint64());
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.percentageOfTotal = reader.string();
                    break;
                case 6:
                    message.receivedAt = longToString(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            assetId: isSet(object.assetId) ? String(object.assetId) : "",
            partyId: isSet(object.partyId) ? String(object.partyId) : "",
            epoch: isSet(object.epoch) ? String(object.epoch) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "",
            percentageOfTotal: isSet(object.percentageOfTotal)
                ? String(object.percentageOfTotal)
                : "",
            receivedAt: isSet(object.receivedAt) ? String(object.receivedAt) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.assetId !== undefined && (obj.assetId = message.assetId);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        message.epoch !== undefined && (obj.epoch = message.epoch);
        message.amount !== undefined && (obj.amount = message.amount);
        message.percentageOfTotal !== undefined &&
            (obj.percentageOfTotal = message.percentageOfTotal);
        message.receivedAt !== undefined && (obj.receivedAt = message.receivedAt);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseReward();
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.epoch = (_c = object.epoch) !== null && _c !== void 0 ? _c : "0";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.percentageOfTotal = (_e = object.percentageOfTotal) !== null && _e !== void 0 ? _e : "";
        message.receivedAt = (_f = object.receivedAt) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseRewardSummary() {
    return { assetId: "", partyId: "", amount: "" };
}
exports.RewardSummary = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRewardSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            assetId: isSet(object.assetId) ? String(object.assetId) : "",
            partyId: isSet(object.partyId) ? String(object.partyId) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.assetId !== undefined && (obj.assetId = message.assetId);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRewardSummary();
        message.assetId = (_a = object.assetId) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseStateValueProposal() {
    return { stateVarId: "", eventId: "", kvb: [] };
}
exports.StateValueProposal = {
    encode: function (message, writer) {
        var e_19, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.stateVarId !== "") {
            writer.uint32(10).string(message.stateVarId);
        }
        if (message.eventId !== "") {
            writer.uint32(18).string(message.eventId);
        }
        try {
            for (var _b = __values(message.kvb), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                exports.KeyValueBundle.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_19_1) { e_19 = { error: e_19_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_19) throw e_19.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStateValueProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stateVarId = reader.string();
                    break;
                case 2:
                    message.eventId = reader.string();
                    break;
                case 3:
                    message.kvb.push(exports.KeyValueBundle.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            stateVarId: isSet(object.stateVarId) ? String(object.stateVarId) : "",
            eventId: isSet(object.eventId) ? String(object.eventId) : "",
            kvb: Array.isArray(object === null || object === void 0 ? void 0 : object.kvb)
                ? object.kvb.map(function (e) { return exports.KeyValueBundle.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.stateVarId !== undefined && (obj.stateVarId = message.stateVarId);
        message.eventId !== undefined && (obj.eventId = message.eventId);
        if (message.kvb) {
            obj.kvb = message.kvb.map(function (e) {
                return e ? exports.KeyValueBundle.toJSON(e) : undefined;
            });
        }
        else {
            obj.kvb = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseStateValueProposal();
        message.stateVarId = (_a = object.stateVarId) !== null && _a !== void 0 ? _a : "";
        message.eventId = (_b = object.eventId) !== null && _b !== void 0 ? _b : "";
        message.kvb = ((_c = object.kvb) === null || _c === void 0 ? void 0 : _c.map(function (e) { return exports.KeyValueBundle.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseKeyValueBundle() {
    return { key: "", tolerance: "", value: undefined };
}
exports.KeyValueBundle = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.tolerance !== "") {
            writer.uint32(18).string(message.tolerance);
        }
        if (message.value !== undefined) {
            exports.StateVarValue.encode(message.value, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseKeyValueBundle();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.tolerance = reader.string();
                    break;
                case 3:
                    message.value = exports.StateVarValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            tolerance: isSet(object.tolerance) ? String(object.tolerance) : "",
            value: isSet(object.value)
                ? exports.StateVarValue.fromJSON(object.value)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.tolerance !== undefined && (obj.tolerance = message.tolerance);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.StateVarValue.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseKeyValueBundle();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.tolerance = (_b = object.tolerance) !== null && _b !== void 0 ? _b : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.StateVarValue.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseStateVarValue() {
    return { scalarVal: undefined, vectorVal: undefined, matrixVal: undefined };
}
exports.StateVarValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.scalarVal !== undefined) {
            exports.ScalarValue.encode(message.scalarVal, writer.uint32(10).fork()).ldelim();
        }
        if (message.vectorVal !== undefined) {
            exports.VectorValue.encode(message.vectorVal, writer.uint32(18).fork()).ldelim();
        }
        if (message.matrixVal !== undefined) {
            exports.MatrixValue.encode(message.matrixVal, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStateVarValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scalarVal = exports.ScalarValue.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vectorVal = exports.VectorValue.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.matrixVal = exports.MatrixValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            scalarVal: isSet(object.scalarVal)
                ? exports.ScalarValue.fromJSON(object.scalarVal)
                : undefined,
            vectorVal: isSet(object.vectorVal)
                ? exports.VectorValue.fromJSON(object.vectorVal)
                : undefined,
            matrixVal: isSet(object.matrixVal)
                ? exports.MatrixValue.fromJSON(object.matrixVal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.scalarVal !== undefined &&
            (obj.scalarVal = message.scalarVal
                ? exports.ScalarValue.toJSON(message.scalarVal)
                : undefined);
        message.vectorVal !== undefined &&
            (obj.vectorVal = message.vectorVal
                ? exports.VectorValue.toJSON(message.vectorVal)
                : undefined);
        message.matrixVal !== undefined &&
            (obj.matrixVal = message.matrixVal
                ? exports.MatrixValue.toJSON(message.matrixVal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseStateVarValue();
        message.scalarVal =
            object.scalarVal !== undefined && object.scalarVal !== null
                ? exports.ScalarValue.fromPartial(object.scalarVal)
                : undefined;
        message.vectorVal =
            object.vectorVal !== undefined && object.vectorVal !== null
                ? exports.VectorValue.fromPartial(object.vectorVal)
                : undefined;
        message.matrixVal =
            object.matrixVal !== undefined && object.matrixVal !== null
                ? exports.MatrixValue.fromPartial(object.matrixVal)
                : undefined;
        return message;
    }
};
function createBaseScalarValue() {
    return { value: "" };
}
exports.ScalarValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseScalarValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseScalarValue();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseVectorValue() {
    return { value: [] };
}
exports.VectorValue = {
    encode: function (message, writer) {
        var e_20, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                writer.uint32(10).string(v);
            }
        }
        catch (e_20_1) { e_20 = { error: e_20_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_20) throw e_20.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVectorValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            value: Array.isArray(object === null || object === void 0 ? void 0 : object.value)
                ? object.value.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.value) {
            obj.value = message.value.map(function (e) { return e; });
        }
        else {
            obj.value = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseVectorValue();
        message.value = ((_a = object.value) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseMatrixValue() {
    return { value: [] };
}
exports.MatrixValue = {
    encode: function (message, writer) {
        var e_21, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.value), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                exports.VectorValue.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_21_1) { e_21 = { error: e_21_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_21) throw e_21.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMatrixValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value.push(exports.VectorValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            value: Array.isArray(object === null || object === void 0 ? void 0 : object.value)
                ? object.value.map(function (e) { return exports.VectorValue.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.value) {
            obj.value = message.value.map(function (e) {
                return e ? exports.VectorValue.toJSON(e) : undefined;
            });
        }
        else {
            obj.value = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseMatrixValue();
        message.value = ((_a = object.value) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.VectorValue.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseUint64Value() {
    return { value: "0" };
}
exports.Uint64Value = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.value !== "0") {
            writer.uint32(8).uint64(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUint64Value();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = longToString(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            value: isSet(object.value) ? String(object.value) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUint64Value();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function longToString(long) {
    return long.toString();
}
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
