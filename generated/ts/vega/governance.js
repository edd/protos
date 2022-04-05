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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.Vote = exports.Proposal = exports.GovernanceData_NoPartyEntry = exports.GovernanceData_YesPartyEntry = exports.GovernanceData = exports.ProposalTerms = exports.NewFreeform = exports.NewFreeformDetails = exports.NewAsset = exports.UpdateNetworkParameter = exports.UpdateFutureProduct = exports.UpdateInstrumentConfiguration = exports.UpdateMarketConfiguration = exports.UpdateMarket = exports.NewMarket = exports.NewMarketCommitment = exports.NewMarketConfiguration = exports.InstrumentConfiguration = exports.FutureProduct = exports.vote_ValueToJSON = exports.vote_ValueFromJSON = exports.Vote_Value = exports.proposal_StateToJSON = exports.proposal_StateFromJSON = exports.Proposal_State = exports.proposalErrorToJSON = exports.proposalErrorFromJSON = exports.ProposalError = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var spec_1 = require("../vega/oracles/v1/spec");
var markets_1 = require("../vega/markets");
var vega_1 = require("../vega/vega");
var assets_1 = require("../vega/assets");
exports.protobufPackage = "vega";
/** A list of possible errors that can cause a proposal to be in state rejected or failed */
var ProposalError;
(function (ProposalError) {
    /** PROPOSAL_ERROR_UNSPECIFIED - Default value */
    ProposalError[ProposalError["PROPOSAL_ERROR_UNSPECIFIED"] = 0] = "PROPOSAL_ERROR_UNSPECIFIED";
    /** PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON - The specified close time is too early base on network parameters */
    ProposalError[ProposalError["PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON"] = 1] = "PROPOSAL_ERROR_CLOSE_TIME_TOO_SOON";
    /** PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE - The specified close time is too late based on network parameters */
    ProposalError[ProposalError["PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE"] = 2] = "PROPOSAL_ERROR_CLOSE_TIME_TOO_LATE";
    /** PROPOSAL_ERROR_ENACT_TIME_TOO_SOON - The specified enact time is too early based on network parameters */
    ProposalError[ProposalError["PROPOSAL_ERROR_ENACT_TIME_TOO_SOON"] = 3] = "PROPOSAL_ERROR_ENACT_TIME_TOO_SOON";
    /** PROPOSAL_ERROR_ENACT_TIME_TOO_LATE - The specified enact time is too late based on network parameters */
    ProposalError[ProposalError["PROPOSAL_ERROR_ENACT_TIME_TOO_LATE"] = 4] = "PROPOSAL_ERROR_ENACT_TIME_TOO_LATE";
    /** PROPOSAL_ERROR_INSUFFICIENT_TOKENS - The proposer for this proposal as insufficient tokens */
    ProposalError[ProposalError["PROPOSAL_ERROR_INSUFFICIENT_TOKENS"] = 5] = "PROPOSAL_ERROR_INSUFFICIENT_TOKENS";
    /** PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY - The instrument quote name and base name were the same */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY"] = 6] = "PROPOSAL_ERROR_INVALID_INSTRUMENT_SECURITY";
    /** PROPOSAL_ERROR_NO_PRODUCT - The proposal has no product */
    ProposalError[ProposalError["PROPOSAL_ERROR_NO_PRODUCT"] = 7] = "PROPOSAL_ERROR_NO_PRODUCT";
    /** PROPOSAL_ERROR_UNSUPPORTED_PRODUCT - The specified product is not supported */
    ProposalError[ProposalError["PROPOSAL_ERROR_UNSUPPORTED_PRODUCT"] = 8] = "PROPOSAL_ERROR_UNSUPPORTED_PRODUCT";
    /** PROPOSAL_ERROR_NO_TRADING_MODE - The proposal has no trading mode */
    ProposalError[ProposalError["PROPOSAL_ERROR_NO_TRADING_MODE"] = 11] = "PROPOSAL_ERROR_NO_TRADING_MODE";
    /** PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE - The proposal has an unsupported trading mode */
    ProposalError[ProposalError["PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE"] = 12] = "PROPOSAL_ERROR_UNSUPPORTED_TRADING_MODE";
    /** PROPOSAL_ERROR_NODE_VALIDATION_FAILED - The proposal failed node validation */
    ProposalError[ProposalError["PROPOSAL_ERROR_NODE_VALIDATION_FAILED"] = 13] = "PROPOSAL_ERROR_NODE_VALIDATION_FAILED";
    /** PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD - A field is missing in a builtin asset source */
    ProposalError[ProposalError["PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD"] = 14] = "PROPOSAL_ERROR_MISSING_BUILTIN_ASSET_FIELD";
    /** PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS - The contract address is missing in the ERC20 asset source */
    ProposalError[ProposalError["PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS"] = 15] = "PROPOSAL_ERROR_MISSING_ERC20_CONTRACT_ADDRESS";
    /** PROPOSAL_ERROR_INVALID_ASSET - The asset identifier is invalid or does not exist on the Vega network */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_ASSET"] = 16] = "PROPOSAL_ERROR_INVALID_ASSET";
    /** PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS - Proposal terms timestamps are not compatible (Validation < Closing < Enactment) */
    ProposalError[ProposalError["PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS"] = 17] = "PROPOSAL_ERROR_INCOMPATIBLE_TIMESTAMPS";
    /** PROPOSAL_ERROR_NO_RISK_PARAMETERS - No risk parameters were specified */
    ProposalError[ProposalError["PROPOSAL_ERROR_NO_RISK_PARAMETERS"] = 18] = "PROPOSAL_ERROR_NO_RISK_PARAMETERS";
    /** PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY - Invalid key in update network parameter proposal */
    ProposalError[ProposalError["PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY"] = 19] = "PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_KEY";
    /** PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE - Invalid valid in update network parameter proposal */
    ProposalError[ProposalError["PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE"] = 20] = "PROPOSAL_ERROR_NETWORK_PARAMETER_INVALID_VALUE";
    /** PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED - Validation failed for network parameter proposal */
    ProposalError[ProposalError["PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED"] = 21] = "PROPOSAL_ERROR_NETWORK_PARAMETER_VALIDATION_FAILED";
    /** PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL - Opening auction duration is less than the network minimum opening auction time */
    ProposalError[ProposalError["PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL"] = 22] = "PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_SMALL";
    /** PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE - Opening auction duration is more than the network minimum opening auction time */
    ProposalError[ProposalError["PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE"] = 23] = "PROPOSAL_ERROR_OPENING_AUCTION_DURATION_TOO_LARGE";
    /** PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT - Market proposal is missing a liquidity commitment */
    ProposalError[ProposalError["PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT"] = 24] = "PROPOSAL_ERROR_MARKET_MISSING_LIQUIDITY_COMMITMENT";
    /** PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET - Market proposal market could not be instantiate in execution */
    ProposalError[ProposalError["PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET"] = 25] = "PROPOSAL_ERROR_COULD_NOT_INSTANTIATE_MARKET";
    /** PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT - Market proposal market contained invalid product definition */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT"] = 26] = "PROPOSAL_ERROR_INVALID_FUTURE_PRODUCT";
    /** PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT - Market proposal is missing commitment amount */
    ProposalError[ProposalError["PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT"] = 27] = "PROPOSAL_ERROR_MISSING_COMMITMENT_AMOUNT";
    /** PROPOSAL_ERROR_INVALID_FEE_AMOUNT - Market proposal have invalid fee */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_FEE_AMOUNT"] = 28] = "PROPOSAL_ERROR_INVALID_FEE_AMOUNT";
    /** PROPOSAL_ERROR_INVALID_SHAPE - Market proposal have invalid shape */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_SHAPE"] = 29] = "PROPOSAL_ERROR_INVALID_SHAPE";
    /** PROPOSAL_ERROR_INVALID_RISK_PARAMETER - Market proposal invalid risk parameter */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_RISK_PARAMETER"] = 30] = "PROPOSAL_ERROR_INVALID_RISK_PARAMETER";
    /** PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED - Proposal was declined because vote didn't reach the majority threshold required */
    ProposalError[ProposalError["PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED"] = 31] = "PROPOSAL_ERROR_MAJORITY_THRESHOLD_NOT_REACHED";
    /** PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED - Proposal declined because the participation threshold was not reached */
    ProposalError[ProposalError["PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED"] = 32] = "PROPOSAL_ERROR_PARTICIPATION_THRESHOLD_NOT_REACHED";
    /** PROPOSAL_ERROR_INVALID_ASSET_DETAILS - Asset proposal invalid asset details */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_ASSET_DETAILS"] = 33] = "PROPOSAL_ERROR_INVALID_ASSET_DETAILS";
    /** PROPOSAL_ERROR_UNKNOWN_TYPE - Proposal is an unknown type. */
    ProposalError[ProposalError["PROPOSAL_ERROR_UNKNOWN_TYPE"] = 34] = "PROPOSAL_ERROR_UNKNOWN_TYPE";
    /** PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE - Proposal has an unknown risk parameter type. */
    ProposalError[ProposalError["PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE"] = 35] = "PROPOSAL_ERROR_UNKNOWN_RISK_PARAMETER_TYPE";
    /** PROPOSAL_ERROR_INVALID_FREEFORM - Validation failed for freeform proposal. */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_FREEFORM"] = 36] = "PROPOSAL_ERROR_INVALID_FREEFORM";
    /**
     * PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE - The party doesn't have enough equity-like share to propose an update on the market
     * targeted by the proposal.
     */
    ProposalError[ProposalError["PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE"] = 37] = "PROPOSAL_ERROR_INSUFFICIENT_EQUITY_LIKE_SHARE";
    /** PROPOSAL_ERROR_INVALID_MARKET - The market targeted by the proposal does not exist or is not eligible to modification. */
    ProposalError[ProposalError["PROPOSAL_ERROR_INVALID_MARKET"] = 38] = "PROPOSAL_ERROR_INVALID_MARKET";
    /** PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES - The market proposal decimal place is higher to the market settlement asset decimal places */
    ProposalError[ProposalError["PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES"] = 39] = "PROPOSAL_ERROR_TOO_MANY_MARKET_DECIMAL_PLACES";
    /** PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS - The market proposal contains too many price monitoring triggers */
    ProposalError[ProposalError["PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS"] = 40] = "PROPOSAL_ERROR_TOO_MANY_PRICE_MONITORING_TRIGGERS";
    ProposalError[ProposalError["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalError = exports.ProposalError || (exports.ProposalError = {}));
function proposalErrorFromJSON(object) {
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
exports.proposalErrorFromJSON = proposalErrorFromJSON;
function proposalErrorToJSON(object) {
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
exports.proposalErrorToJSON = proposalErrorToJSON;
/**
 * Proposal state transition:
 * Open ->
 *   - Passed -> Enacted.
 *   - Passed -> Failed.
 *   - Declined
 * Rejected
 * Proposal can enter Failed state from any other state
 */
var Proposal_State;
(function (Proposal_State) {
    /** STATE_UNSPECIFIED - Default value, always invalid */
    Proposal_State[Proposal_State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    /** STATE_FAILED - Proposal enactment has failed - even though proposal has passed, its execution could not be performed */
    Proposal_State[Proposal_State["STATE_FAILED"] = 1] = "STATE_FAILED";
    /** STATE_OPEN - Proposal is open for voting */
    Proposal_State[Proposal_State["STATE_OPEN"] = 2] = "STATE_OPEN";
    /** STATE_PASSED - Proposal has gained enough support to be executed */
    Proposal_State[Proposal_State["STATE_PASSED"] = 3] = "STATE_PASSED";
    /** STATE_REJECTED - Proposal wasn't accepted (proposal terms failed validation due to wrong configuration or failing to meet network requirements) */
    Proposal_State[Proposal_State["STATE_REJECTED"] = 4] = "STATE_REJECTED";
    /** STATE_DECLINED - Proposal didn't get enough votes (either failing to gain required participation or majority level) */
    Proposal_State[Proposal_State["STATE_DECLINED"] = 5] = "STATE_DECLINED";
    /** STATE_ENACTED - Proposal enacted */
    Proposal_State[Proposal_State["STATE_ENACTED"] = 6] = "STATE_ENACTED";
    /** STATE_WAITING_FOR_NODE_VOTE - Waiting for node validation of the proposal */
    Proposal_State[Proposal_State["STATE_WAITING_FOR_NODE_VOTE"] = 7] = "STATE_WAITING_FOR_NODE_VOTE";
    Proposal_State[Proposal_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Proposal_State = exports.Proposal_State || (exports.Proposal_State = {}));
function proposal_StateFromJSON(object) {
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
exports.proposal_StateFromJSON = proposal_StateFromJSON;
function proposal_StateToJSON(object) {
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
exports.proposal_StateToJSON = proposal_StateToJSON;
/** Vote value */
var Vote_Value;
(function (Vote_Value) {
    /** VALUE_UNSPECIFIED - Default value, always invalid */
    Vote_Value[Vote_Value["VALUE_UNSPECIFIED"] = 0] = "VALUE_UNSPECIFIED";
    /** VALUE_NO - A vote against the proposal */
    Vote_Value[Vote_Value["VALUE_NO"] = 1] = "VALUE_NO";
    /** VALUE_YES - A vote in favour of the proposal */
    Vote_Value[Vote_Value["VALUE_YES"] = 2] = "VALUE_YES";
    Vote_Value[Vote_Value["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Vote_Value = exports.Vote_Value || (exports.Vote_Value = {}));
function vote_ValueFromJSON(object) {
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
exports.vote_ValueFromJSON = vote_ValueFromJSON;
function vote_ValueToJSON(object) {
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
exports.vote_ValueToJSON = vote_ValueToJSON;
function createBaseFutureProduct() {
    return {
        settlementAsset: "",
        quoteName: "",
        oracleSpecForSettlementPrice: undefined,
        oracleSpecForTradingTermination: undefined,
        oracleSpecBinding: undefined
    };
}
exports.FutureProduct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.settlementAsset !== "") {
            writer.uint32(18).string(message.settlementAsset);
        }
        if (message.quoteName !== "") {
            writer.uint32(26).string(message.quoteName);
        }
        if (message.oracleSpecForSettlementPrice !== undefined) {
            spec_1.OracleSpecConfiguration.encode(message.oracleSpecForSettlementPrice, writer.uint32(42).fork()).ldelim();
        }
        if (message.oracleSpecForTradingTermination !== undefined) {
            spec_1.OracleSpecConfiguration.encode(message.oracleSpecForTradingTermination, writer.uint32(50).fork()).ldelim();
        }
        if (message.oracleSpecBinding !== undefined) {
            markets_1.OracleSpecToFutureBinding.encode(message.oracleSpecBinding, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFutureProduct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.settlementAsset = reader.string();
                    break;
                case 3:
                    message.quoteName = reader.string();
                    break;
                case 5:
                    message.oracleSpecForSettlementPrice = spec_1.OracleSpecConfiguration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.oracleSpecForTradingTermination =
                        spec_1.OracleSpecConfiguration.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.oracleSpecBinding = markets_1.OracleSpecToFutureBinding.decode(reader, reader.uint32());
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
            settlementAsset: isSet(object.settlementAsset)
                ? String(object.settlementAsset)
                : "",
            quoteName: isSet(object.quoteName) ? String(object.quoteName) : "",
            oracleSpecForSettlementPrice: isSet(object.oracleSpecForSettlementPrice)
                ? spec_1.OracleSpecConfiguration.fromJSON(object.oracleSpecForSettlementPrice)
                : undefined,
            oracleSpecForTradingTermination: isSet(object.oracleSpecForTradingTermination)
                ? spec_1.OracleSpecConfiguration.fromJSON(object.oracleSpecForTradingTermination)
                : undefined,
            oracleSpecBinding: isSet(object.oracleSpecBinding)
                ? markets_1.OracleSpecToFutureBinding.fromJSON(object.oracleSpecBinding)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.settlementAsset !== undefined &&
            (obj.settlementAsset = message.settlementAsset);
        message.quoteName !== undefined && (obj.quoteName = message.quoteName);
        message.oracleSpecForSettlementPrice !== undefined &&
            (obj.oracleSpecForSettlementPrice = message.oracleSpecForSettlementPrice
                ? spec_1.OracleSpecConfiguration.toJSON(message.oracleSpecForSettlementPrice)
                : undefined);
        message.oracleSpecForTradingTermination !== undefined &&
            (obj.oracleSpecForTradingTermination =
                message.oracleSpecForTradingTermination
                    ? spec_1.OracleSpecConfiguration.toJSON(message.oracleSpecForTradingTermination)
                    : undefined);
        message.oracleSpecBinding !== undefined &&
            (obj.oracleSpecBinding = message.oracleSpecBinding
                ? markets_1.OracleSpecToFutureBinding.toJSON(message.oracleSpecBinding)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFutureProduct();
        message.settlementAsset = (_a = object.settlementAsset) !== null && _a !== void 0 ? _a : "";
        message.quoteName = (_b = object.quoteName) !== null && _b !== void 0 ? _b : "";
        message.oracleSpecForSettlementPrice =
            object.oracleSpecForSettlementPrice !== undefined &&
                object.oracleSpecForSettlementPrice !== null
                ? spec_1.OracleSpecConfiguration.fromPartial(object.oracleSpecForSettlementPrice)
                : undefined;
        message.oracleSpecForTradingTermination =
            object.oracleSpecForTradingTermination !== undefined &&
                object.oracleSpecForTradingTermination !== null
                ? spec_1.OracleSpecConfiguration.fromPartial(object.oracleSpecForTradingTermination)
                : undefined;
        message.oracleSpecBinding =
            object.oracleSpecBinding !== undefined &&
                object.oracleSpecBinding !== null
                ? markets_1.OracleSpecToFutureBinding.fromPartial(object.oracleSpecBinding)
                : undefined;
        return message;
    }
};
function createBaseInstrumentConfiguration() {
    return { name: "", code: "", future: undefined };
}
exports.InstrumentConfiguration = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.future !== undefined) {
            exports.FutureProduct.encode(message.future, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInstrumentConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 100:
                    message.future = exports.FutureProduct.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            code: isSet(object.code) ? String(object.code) : "",
            future: isSet(object.future)
                ? exports.FutureProduct.fromJSON(object.future)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.code !== undefined && (obj.code = message.code);
        message.future !== undefined &&
            (obj.future = message.future
                ? exports.FutureProduct.toJSON(message.future)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseInstrumentConfiguration();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        message.future =
            object.future !== undefined && object.future !== null
                ? exports.FutureProduct.fromPartial(object.future)
                : undefined;
        return message;
    }
};
function createBaseNewMarketConfiguration() {
    return {
        instrument: undefined,
        decimalPlaces: "0",
        metadata: [],
        priceMonitoringParameters: undefined,
        liquidityMonitoringParameters: undefined,
        simple: undefined,
        logNormal: undefined,
        positionDecimalPlaces: "0"
    };
}
exports.NewMarketConfiguration = {
    encode: function (message, writer) {
        var e_1, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.instrument !== undefined) {
            exports.InstrumentConfiguration.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        if (message.decimalPlaces !== "0") {
            writer.uint32(16).uint64(message.decimalPlaces);
        }
        try {
            for (var _b = __values(message.metadata), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                writer.uint32(26).string(v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (message.priceMonitoringParameters !== undefined) {
            markets_1.PriceMonitoringParameters.encode(message.priceMonitoringParameters, writer.uint32(34).fork()).ldelim();
        }
        if (message.liquidityMonitoringParameters !== undefined) {
            markets_1.LiquidityMonitoringParameters.encode(message.liquidityMonitoringParameters, writer.uint32(42).fork()).ldelim();
        }
        if (message.simple !== undefined) {
            markets_1.SimpleModelParams.encode(message.simple, writer.uint32(802).fork()).ldelim();
        }
        if (message.logNormal !== undefined) {
            markets_1.LogNormalRiskModel.encode(message.logNormal, writer.uint32(810).fork()).ldelim();
        }
        if (message.positionDecimalPlaces !== "0") {
            writer.uint32(48).uint64(message.positionDecimalPlaces);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewMarketConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.InstrumentConfiguration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.decimalPlaces = longToString(reader.uint64());
                    break;
                case 3:
                    message.metadata.push(reader.string());
                    break;
                case 4:
                    message.priceMonitoringParameters = markets_1.PriceMonitoringParameters.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.liquidityMonitoringParameters =
                        markets_1.LiquidityMonitoringParameters.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.simple = markets_1.SimpleModelParams.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.logNormal = markets_1.LogNormalRiskModel.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.positionDecimalPlaces = longToString(reader.uint64());
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
            instrument: isSet(object.instrument)
                ? exports.InstrumentConfiguration.fromJSON(object.instrument)
                : undefined,
            decimalPlaces: isSet(object.decimalPlaces)
                ? String(object.decimalPlaces)
                : "0",
            metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.metadata)
                ? object.metadata.map(function (e) { return String(e); })
                : [],
            priceMonitoringParameters: isSet(object.priceMonitoringParameters)
                ? markets_1.PriceMonitoringParameters.fromJSON(object.priceMonitoringParameters)
                : undefined,
            liquidityMonitoringParameters: isSet(object.liquidityMonitoringParameters)
                ? markets_1.LiquidityMonitoringParameters.fromJSON(object.liquidityMonitoringParameters)
                : undefined,
            simple: isSet(object.simple)
                ? markets_1.SimpleModelParams.fromJSON(object.simple)
                : undefined,
            logNormal: isSet(object.logNormal)
                ? markets_1.LogNormalRiskModel.fromJSON(object.logNormal)
                : undefined,
            positionDecimalPlaces: isSet(object.positionDecimalPlaces)
                ? String(object.positionDecimalPlaces)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument
                ? exports.InstrumentConfiguration.toJSON(message.instrument)
                : undefined);
        message.decimalPlaces !== undefined &&
            (obj.decimalPlaces = message.decimalPlaces);
        if (message.metadata) {
            obj.metadata = message.metadata.map(function (e) { return e; });
        }
        else {
            obj.metadata = [];
        }
        message.priceMonitoringParameters !== undefined &&
            (obj.priceMonitoringParameters = message.priceMonitoringParameters
                ? markets_1.PriceMonitoringParameters.toJSON(message.priceMonitoringParameters)
                : undefined);
        message.liquidityMonitoringParameters !== undefined &&
            (obj.liquidityMonitoringParameters = message.liquidityMonitoringParameters
                ? markets_1.LiquidityMonitoringParameters.toJSON(message.liquidityMonitoringParameters)
                : undefined);
        message.simple !== undefined &&
            (obj.simple = message.simple
                ? markets_1.SimpleModelParams.toJSON(message.simple)
                : undefined);
        message.logNormal !== undefined &&
            (obj.logNormal = message.logNormal
                ? markets_1.LogNormalRiskModel.toJSON(message.logNormal)
                : undefined);
        message.positionDecimalPlaces !== undefined &&
            (obj.positionDecimalPlaces = message.positionDecimalPlaces);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseNewMarketConfiguration();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null
                ? exports.InstrumentConfiguration.fromPartial(object.instrument)
                : undefined;
        message.decimalPlaces = (_a = object.decimalPlaces) !== null && _a !== void 0 ? _a : "0";
        message.metadata = ((_b = object.metadata) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.priceMonitoringParameters =
            object.priceMonitoringParameters !== undefined &&
                object.priceMonitoringParameters !== null
                ? markets_1.PriceMonitoringParameters.fromPartial(object.priceMonitoringParameters)
                : undefined;
        message.liquidityMonitoringParameters =
            object.liquidityMonitoringParameters !== undefined &&
                object.liquidityMonitoringParameters !== null
                ? markets_1.LiquidityMonitoringParameters.fromPartial(object.liquidityMonitoringParameters)
                : undefined;
        message.simple =
            object.simple !== undefined && object.simple !== null
                ? markets_1.SimpleModelParams.fromPartial(object.simple)
                : undefined;
        message.logNormal =
            object.logNormal !== undefined && object.logNormal !== null
                ? markets_1.LogNormalRiskModel.fromPartial(object.logNormal)
                : undefined;
        message.positionDecimalPlaces = (_c = object.positionDecimalPlaces) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseNewMarketCommitment() {
    return { commitmentAmount: "", fee: "", sells: [], buys: [], reference: "" };
}
exports.NewMarketCommitment = {
    encode: function (message, writer) {
        var e_2, _a, e_3, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.commitmentAmount !== "") {
            writer.uint32(10).string(message.commitmentAmount);
        }
        if (message.fee !== "") {
            writer.uint32(18).string(message.fee);
        }
        try {
            for (var _c = __values(message.sells), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                vega_1.LiquidityOrder.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _e = __values(message.buys), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                vega_1.LiquidityOrder.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (message.reference !== "") {
            writer.uint32(42).string(message.reference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewMarketCommitment();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitmentAmount = reader.string();
                    break;
                case 2:
                    message.fee = reader.string();
                    break;
                case 3:
                    message.sells.push(vega_1.LiquidityOrder.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.buys.push(vega_1.LiquidityOrder.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            commitmentAmount: isSet(object.commitmentAmount)
                ? String(object.commitmentAmount)
                : "",
            fee: isSet(object.fee) ? String(object.fee) : "",
            sells: Array.isArray(object === null || object === void 0 ? void 0 : object.sells)
                ? object.sells.map(function (e) { return vega_1.LiquidityOrder.fromJSON(e); })
                : [],
            buys: Array.isArray(object === null || object === void 0 ? void 0 : object.buys)
                ? object.buys.map(function (e) { return vega_1.LiquidityOrder.fromJSON(e); })
                : [],
            reference: isSet(object.reference) ? String(object.reference) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.commitmentAmount !== undefined &&
            (obj.commitmentAmount = message.commitmentAmount);
        message.fee !== undefined && (obj.fee = message.fee);
        if (message.sells) {
            obj.sells = message.sells.map(function (e) {
                return e ? vega_1.LiquidityOrder.toJSON(e) : undefined;
            });
        }
        else {
            obj.sells = [];
        }
        if (message.buys) {
            obj.buys = message.buys.map(function (e) {
                return e ? vega_1.LiquidityOrder.toJSON(e) : undefined;
            });
        }
        else {
            obj.buys = [];
        }
        message.reference !== undefined && (obj.reference = message.reference);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseNewMarketCommitment();
        message.commitmentAmount = (_a = object.commitmentAmount) !== null && _a !== void 0 ? _a : "";
        message.fee = (_b = object.fee) !== null && _b !== void 0 ? _b : "";
        message.sells =
            ((_c = object.sells) === null || _c === void 0 ? void 0 : _c.map(function (e) { return vega_1.LiquidityOrder.fromPartial(e); })) || [];
        message.buys = ((_d = object.buys) === null || _d === void 0 ? void 0 : _d.map(function (e) { return vega_1.LiquidityOrder.fromPartial(e); })) || [];
        message.reference = (_e = object.reference) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseNewMarket() {
    return { changes: undefined, liquidityCommitment: undefined };
}
exports.NewMarket = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.changes !== undefined) {
            exports.NewMarketConfiguration.encode(message.changes, writer.uint32(10).fork()).ldelim();
        }
        if (message.liquidityCommitment !== undefined) {
            exports.NewMarketCommitment.encode(message.liquidityCommitment, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewMarket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.changes = exports.NewMarketConfiguration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.liquidityCommitment = exports.NewMarketCommitment.decode(reader, reader.uint32());
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
            changes: isSet(object.changes)
                ? exports.NewMarketConfiguration.fromJSON(object.changes)
                : undefined,
            liquidityCommitment: isSet(object.liquidityCommitment)
                ? exports.NewMarketCommitment.fromJSON(object.liquidityCommitment)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.changes !== undefined &&
            (obj.changes = message.changes
                ? exports.NewMarketConfiguration.toJSON(message.changes)
                : undefined);
        message.liquidityCommitment !== undefined &&
            (obj.liquidityCommitment = message.liquidityCommitment
                ? exports.NewMarketCommitment.toJSON(message.liquidityCommitment)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseNewMarket();
        message.changes =
            object.changes !== undefined && object.changes !== null
                ? exports.NewMarketConfiguration.fromPartial(object.changes)
                : undefined;
        message.liquidityCommitment =
            object.liquidityCommitment !== undefined &&
                object.liquidityCommitment !== null
                ? exports.NewMarketCommitment.fromPartial(object.liquidityCommitment)
                : undefined;
        return message;
    }
};
function createBaseUpdateMarket() {
    return { marketId: "", changes: undefined };
}
exports.UpdateMarket = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.changes !== undefined) {
            exports.UpdateMarketConfiguration.encode(message.changes, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMarket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.changes = exports.UpdateMarketConfiguration.decode(reader, reader.uint32());
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
            changes: isSet(object.changes)
                ? exports.UpdateMarketConfiguration.fromJSON(object.changes)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.changes !== undefined &&
            (obj.changes = message.changes
                ? exports.UpdateMarketConfiguration.toJSON(message.changes)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateMarket();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.changes =
            object.changes !== undefined && object.changes !== null
                ? exports.UpdateMarketConfiguration.fromPartial(object.changes)
                : undefined;
        return message;
    }
};
function createBaseUpdateMarketConfiguration() {
    return {
        instrument: undefined,
        metadata: [],
        priceMonitoringParameters: undefined,
        liquidityMonitoringParameters: undefined,
        simple: undefined,
        logNormal: undefined
    };
}
exports.UpdateMarketConfiguration = {
    encode: function (message, writer) {
        var e_4, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.instrument !== undefined) {
            exports.UpdateInstrumentConfiguration.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        try {
            for (var _b = __values(message.metadata), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                writer.uint32(18).string(v);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (message.priceMonitoringParameters !== undefined) {
            markets_1.PriceMonitoringParameters.encode(message.priceMonitoringParameters, writer.uint32(26).fork()).ldelim();
        }
        if (message.liquidityMonitoringParameters !== undefined) {
            markets_1.LiquidityMonitoringParameters.encode(message.liquidityMonitoringParameters, writer.uint32(34).fork()).ldelim();
        }
        if (message.simple !== undefined) {
            markets_1.SimpleModelParams.encode(message.simple, writer.uint32(802).fork()).ldelim();
        }
        if (message.logNormal !== undefined) {
            markets_1.LogNormalRiskModel.encode(message.logNormal, writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMarketConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.UpdateInstrumentConfiguration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata.push(reader.string());
                    break;
                case 3:
                    message.priceMonitoringParameters = markets_1.PriceMonitoringParameters.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.liquidityMonitoringParameters =
                        markets_1.LiquidityMonitoringParameters.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.simple = markets_1.SimpleModelParams.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.logNormal = markets_1.LogNormalRiskModel.decode(reader, reader.uint32());
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
            instrument: isSet(object.instrument)
                ? exports.UpdateInstrumentConfiguration.fromJSON(object.instrument)
                : undefined,
            metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.metadata)
                ? object.metadata.map(function (e) { return String(e); })
                : [],
            priceMonitoringParameters: isSet(object.priceMonitoringParameters)
                ? markets_1.PriceMonitoringParameters.fromJSON(object.priceMonitoringParameters)
                : undefined,
            liquidityMonitoringParameters: isSet(object.liquidityMonitoringParameters)
                ? markets_1.LiquidityMonitoringParameters.fromJSON(object.liquidityMonitoringParameters)
                : undefined,
            simple: isSet(object.simple)
                ? markets_1.SimpleModelParams.fromJSON(object.simple)
                : undefined,
            logNormal: isSet(object.logNormal)
                ? markets_1.LogNormalRiskModel.fromJSON(object.logNormal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument
                ? exports.UpdateInstrumentConfiguration.toJSON(message.instrument)
                : undefined);
        if (message.metadata) {
            obj.metadata = message.metadata.map(function (e) { return e; });
        }
        else {
            obj.metadata = [];
        }
        message.priceMonitoringParameters !== undefined &&
            (obj.priceMonitoringParameters = message.priceMonitoringParameters
                ? markets_1.PriceMonitoringParameters.toJSON(message.priceMonitoringParameters)
                : undefined);
        message.liquidityMonitoringParameters !== undefined &&
            (obj.liquidityMonitoringParameters = message.liquidityMonitoringParameters
                ? markets_1.LiquidityMonitoringParameters.toJSON(message.liquidityMonitoringParameters)
                : undefined);
        message.simple !== undefined &&
            (obj.simple = message.simple
                ? markets_1.SimpleModelParams.toJSON(message.simple)
                : undefined);
        message.logNormal !== undefined &&
            (obj.logNormal = message.logNormal
                ? markets_1.LogNormalRiskModel.toJSON(message.logNormal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateMarketConfiguration();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null
                ? exports.UpdateInstrumentConfiguration.fromPartial(object.instrument)
                : undefined;
        message.metadata = ((_a = object.metadata) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.priceMonitoringParameters =
            object.priceMonitoringParameters !== undefined &&
                object.priceMonitoringParameters !== null
                ? markets_1.PriceMonitoringParameters.fromPartial(object.priceMonitoringParameters)
                : undefined;
        message.liquidityMonitoringParameters =
            object.liquidityMonitoringParameters !== undefined &&
                object.liquidityMonitoringParameters !== null
                ? markets_1.LiquidityMonitoringParameters.fromPartial(object.liquidityMonitoringParameters)
                : undefined;
        message.simple =
            object.simple !== undefined && object.simple !== null
                ? markets_1.SimpleModelParams.fromPartial(object.simple)
                : undefined;
        message.logNormal =
            object.logNormal !== undefined && object.logNormal !== null
                ? markets_1.LogNormalRiskModel.fromPartial(object.logNormal)
                : undefined;
        return message;
    }
};
function createBaseUpdateInstrumentConfiguration() {
    return { code: "", future: undefined };
}
exports.UpdateInstrumentConfiguration = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.future !== undefined) {
            exports.UpdateFutureProduct.encode(message.future, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateInstrumentConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 100:
                    message.future = exports.UpdateFutureProduct.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? String(object.code) : "",
            future: isSet(object.future)
                ? exports.UpdateFutureProduct.fromJSON(object.future)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.future !== undefined &&
            (obj.future = message.future
                ? exports.UpdateFutureProduct.toJSON(message.future)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateInstrumentConfiguration();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : "";
        message.future =
            object.future !== undefined && object.future !== null
                ? exports.UpdateFutureProduct.fromPartial(object.future)
                : undefined;
        return message;
    }
};
function createBaseUpdateFutureProduct() {
    return {
        quoteName: "",
        oracleSpecForSettlementPrice: undefined,
        oracleSpecForTradingTermination: undefined,
        oracleSpecBinding: undefined
    };
}
exports.UpdateFutureProduct = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.quoteName !== "") {
            writer.uint32(10).string(message.quoteName);
        }
        if (message.oracleSpecForSettlementPrice !== undefined) {
            spec_1.OracleSpecConfiguration.encode(message.oracleSpecForSettlementPrice, writer.uint32(18).fork()).ldelim();
        }
        if (message.oracleSpecForTradingTermination !== undefined) {
            spec_1.OracleSpecConfiguration.encode(message.oracleSpecForTradingTermination, writer.uint32(26).fork()).ldelim();
        }
        if (message.oracleSpecBinding !== undefined) {
            markets_1.OracleSpecToFutureBinding.encode(message.oracleSpecBinding, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateFutureProduct();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quoteName = reader.string();
                    break;
                case 2:
                    message.oracleSpecForSettlementPrice = spec_1.OracleSpecConfiguration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.oracleSpecForTradingTermination =
                        spec_1.OracleSpecConfiguration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.oracleSpecBinding = markets_1.OracleSpecToFutureBinding.decode(reader, reader.uint32());
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
            quoteName: isSet(object.quoteName) ? String(object.quoteName) : "",
            oracleSpecForSettlementPrice: isSet(object.oracleSpecForSettlementPrice)
                ? spec_1.OracleSpecConfiguration.fromJSON(object.oracleSpecForSettlementPrice)
                : undefined,
            oracleSpecForTradingTermination: isSet(object.oracleSpecForTradingTermination)
                ? spec_1.OracleSpecConfiguration.fromJSON(object.oracleSpecForTradingTermination)
                : undefined,
            oracleSpecBinding: isSet(object.oracleSpecBinding)
                ? markets_1.OracleSpecToFutureBinding.fromJSON(object.oracleSpecBinding)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.quoteName !== undefined && (obj.quoteName = message.quoteName);
        message.oracleSpecForSettlementPrice !== undefined &&
            (obj.oracleSpecForSettlementPrice = message.oracleSpecForSettlementPrice
                ? spec_1.OracleSpecConfiguration.toJSON(message.oracleSpecForSettlementPrice)
                : undefined);
        message.oracleSpecForTradingTermination !== undefined &&
            (obj.oracleSpecForTradingTermination =
                message.oracleSpecForTradingTermination
                    ? spec_1.OracleSpecConfiguration.toJSON(message.oracleSpecForTradingTermination)
                    : undefined);
        message.oracleSpecBinding !== undefined &&
            (obj.oracleSpecBinding = message.oracleSpecBinding
                ? markets_1.OracleSpecToFutureBinding.toJSON(message.oracleSpecBinding)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateFutureProduct();
        message.quoteName = (_a = object.quoteName) !== null && _a !== void 0 ? _a : "";
        message.oracleSpecForSettlementPrice =
            object.oracleSpecForSettlementPrice !== undefined &&
                object.oracleSpecForSettlementPrice !== null
                ? spec_1.OracleSpecConfiguration.fromPartial(object.oracleSpecForSettlementPrice)
                : undefined;
        message.oracleSpecForTradingTermination =
            object.oracleSpecForTradingTermination !== undefined &&
                object.oracleSpecForTradingTermination !== null
                ? spec_1.OracleSpecConfiguration.fromPartial(object.oracleSpecForTradingTermination)
                : undefined;
        message.oracleSpecBinding =
            object.oracleSpecBinding !== undefined &&
                object.oracleSpecBinding !== null
                ? markets_1.OracleSpecToFutureBinding.fromPartial(object.oracleSpecBinding)
                : undefined;
        return message;
    }
};
function createBaseUpdateNetworkParameter() {
    return { changes: undefined };
}
exports.UpdateNetworkParameter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.changes !== undefined) {
            vega_1.NetworkParameter.encode(message.changes, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateNetworkParameter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.changes = vega_1.NetworkParameter.decode(reader, reader.uint32());
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
            changes: isSet(object.changes)
                ? vega_1.NetworkParameter.fromJSON(object.changes)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.changes !== undefined &&
            (obj.changes = message.changes
                ? vega_1.NetworkParameter.toJSON(message.changes)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseUpdateNetworkParameter();
        message.changes =
            object.changes !== undefined && object.changes !== null
                ? vega_1.NetworkParameter.fromPartial(object.changes)
                : undefined;
        return message;
    }
};
function createBaseNewAsset() {
    return { changes: undefined };
}
exports.NewAsset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.changes !== undefined) {
            assets_1.AssetDetails.encode(message.changes, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewAsset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.changes = assets_1.AssetDetails.decode(reader, reader.uint32());
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
            changes: isSet(object.changes)
                ? assets_1.AssetDetails.fromJSON(object.changes)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.changes !== undefined &&
            (obj.changes = message.changes
                ? assets_1.AssetDetails.toJSON(message.changes)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseNewAsset();
        message.changes =
            object.changes !== undefined && object.changes !== null
                ? assets_1.AssetDetails.fromPartial(object.changes)
                : undefined;
        return message;
    }
};
function createBaseNewFreeformDetails() {
    return { url: "", description: "", hash: "" };
}
exports.NewFreeformDetails = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewFreeformDetails();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            url: isSet(object.url) ? String(object.url) : "",
            description: isSet(object.description) ? String(object.description) : "",
            hash: isSet(object.hash) ? String(object.hash) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.description !== undefined &&
            (obj.description = message.description);
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseNewFreeformDetails();
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseNewFreeform() {
    return { changes: undefined };
}
exports.NewFreeform = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.changes !== undefined) {
            exports.NewFreeformDetails.encode(message.changes, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNewFreeform();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.changes = exports.NewFreeformDetails.decode(reader, reader.uint32());
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
            changes: isSet(object.changes)
                ? exports.NewFreeformDetails.fromJSON(object.changes)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.changes !== undefined &&
            (obj.changes = message.changes
                ? exports.NewFreeformDetails.toJSON(message.changes)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseNewFreeform();
        message.changes =
            object.changes !== undefined && object.changes !== null
                ? exports.NewFreeformDetails.fromPartial(object.changes)
                : undefined;
        return message;
    }
};
function createBaseProposalTerms() {
    return {
        closingTimestamp: "0",
        enactmentTimestamp: "0",
        validationTimestamp: "0",
        updateMarket: undefined,
        newMarket: undefined,
        updateNetworkParameter: undefined,
        newAsset: undefined,
        newFreeform: undefined
    };
}
exports.ProposalTerms = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.UpdateMarket.encode(message.updateMarket, writer.uint32(810).fork()).ldelim();
        }
        if (message.newMarket !== undefined) {
            exports.NewMarket.encode(message.newMarket, writer.uint32(818).fork()).ldelim();
        }
        if (message.updateNetworkParameter !== undefined) {
            exports.UpdateNetworkParameter.encode(message.updateNetworkParameter, writer.uint32(826).fork()).ldelim();
        }
        if (message.newAsset !== undefined) {
            exports.NewAsset.encode(message.newAsset, writer.uint32(834).fork()).ldelim();
        }
        if (message.newFreeform !== undefined) {
            exports.NewFreeform.encode(message.newFreeform, writer.uint32(842).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposalTerms();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.closingTimestamp = longToString(reader.int64());
                    break;
                case 2:
                    message.enactmentTimestamp = longToString(reader.int64());
                    break;
                case 3:
                    message.validationTimestamp = longToString(reader.int64());
                    break;
                case 101:
                    message.updateMarket = exports.UpdateMarket.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.newMarket = exports.NewMarket.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.updateNetworkParameter = exports.UpdateNetworkParameter.decode(reader, reader.uint32());
                    break;
                case 104:
                    message.newAsset = exports.NewAsset.decode(reader, reader.uint32());
                    break;
                case 105:
                    message.newFreeform = exports.NewFreeform.decode(reader, reader.uint32());
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
                ? exports.UpdateMarket.fromJSON(object.updateMarket)
                : undefined,
            newMarket: isSet(object.newMarket)
                ? exports.NewMarket.fromJSON(object.newMarket)
                : undefined,
            updateNetworkParameter: isSet(object.updateNetworkParameter)
                ? exports.UpdateNetworkParameter.fromJSON(object.updateNetworkParameter)
                : undefined,
            newAsset: isSet(object.newAsset)
                ? exports.NewAsset.fromJSON(object.newAsset)
                : undefined,
            newFreeform: isSet(object.newFreeform)
                ? exports.NewFreeform.fromJSON(object.newFreeform)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.closingTimestamp !== undefined &&
            (obj.closingTimestamp = message.closingTimestamp);
        message.enactmentTimestamp !== undefined &&
            (obj.enactmentTimestamp = message.enactmentTimestamp);
        message.validationTimestamp !== undefined &&
            (obj.validationTimestamp = message.validationTimestamp);
        message.updateMarket !== undefined &&
            (obj.updateMarket = message.updateMarket
                ? exports.UpdateMarket.toJSON(message.updateMarket)
                : undefined);
        message.newMarket !== undefined &&
            (obj.newMarket = message.newMarket
                ? exports.NewMarket.toJSON(message.newMarket)
                : undefined);
        message.updateNetworkParameter !== undefined &&
            (obj.updateNetworkParameter = message.updateNetworkParameter
                ? exports.UpdateNetworkParameter.toJSON(message.updateNetworkParameter)
                : undefined);
        message.newAsset !== undefined &&
            (obj.newAsset = message.newAsset
                ? exports.NewAsset.toJSON(message.newAsset)
                : undefined);
        message.newFreeform !== undefined &&
            (obj.newFreeform = message.newFreeform
                ? exports.NewFreeform.toJSON(message.newFreeform)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProposalTerms();
        message.closingTimestamp = (_a = object.closingTimestamp) !== null && _a !== void 0 ? _a : "0";
        message.enactmentTimestamp = (_b = object.enactmentTimestamp) !== null && _b !== void 0 ? _b : "0";
        message.validationTimestamp = (_c = object.validationTimestamp) !== null && _c !== void 0 ? _c : "0";
        message.updateMarket =
            object.updateMarket !== undefined && object.updateMarket !== null
                ? exports.UpdateMarket.fromPartial(object.updateMarket)
                : undefined;
        message.newMarket =
            object.newMarket !== undefined && object.newMarket !== null
                ? exports.NewMarket.fromPartial(object.newMarket)
                : undefined;
        message.updateNetworkParameter =
            object.updateNetworkParameter !== undefined &&
                object.updateNetworkParameter !== null
                ? exports.UpdateNetworkParameter.fromPartial(object.updateNetworkParameter)
                : undefined;
        message.newAsset =
            object.newAsset !== undefined && object.newAsset !== null
                ? exports.NewAsset.fromPartial(object.newAsset)
                : undefined;
        message.newFreeform =
            object.newFreeform !== undefined && object.newFreeform !== null
                ? exports.NewFreeform.fromPartial(object.newFreeform)
                : undefined;
        return message;
    }
};
function createBaseGovernanceData() {
    return { proposal: undefined, yes: [], no: [], yesParty: {}, noParty: {} };
}
exports.GovernanceData = {
    encode: function (message, writer) {
        var e_5, _a, e_6, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            exports.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        try {
            for (var _c = __values(message.yes), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                exports.Vote.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _e = __values(message.no), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.Vote.encode(v, writer.uint32(26).fork()).ldelim();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_6) throw e_6.error; }
        }
        Object.entries(message.yesParty).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            exports.GovernanceData_YesPartyEntry.encode({ key: key, value: value }, writer.uint32(34).fork()).ldelim();
        });
        Object.entries(message.noParty).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            exports.GovernanceData_NoPartyEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGovernanceData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = exports.Proposal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.yes.push(exports.Vote.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.no.push(exports.Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    var entry4 = exports.GovernanceData_YesPartyEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.yesParty[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    var entry5 = exports.GovernanceData_NoPartyEntry.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            proposal: isSet(object.proposal)
                ? exports.Proposal.fromJSON(object.proposal)
                : undefined,
            yes: Array.isArray(object === null || object === void 0 ? void 0 : object.yes)
                ? object.yes.map(function (e) { return exports.Vote.fromJSON(e); })
                : [],
            no: Array.isArray(object === null || object === void 0 ? void 0 : object.no)
                ? object.no.map(function (e) { return exports.Vote.fromJSON(e); })
                : [],
            yesParty: isObject(object.yesParty)
                ? Object.entries(object.yesParty).reduce(function (acc, _a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    acc[key] = exports.Vote.fromJSON(value);
                    return acc;
                }, {})
                : {},
            noParty: isObject(object.noParty)
                ? Object.entries(object.noParty).reduce(function (acc, _a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    acc[key] = exports.Vote.fromJSON(value);
                    return acc;
                }, {})
                : {}
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? exports.Proposal.toJSON(message.proposal)
                : undefined);
        if (message.yes) {
            obj.yes = message.yes.map(function (e) { return (e ? exports.Vote.toJSON(e) : undefined); });
        }
        else {
            obj.yes = [];
        }
        if (message.no) {
            obj.no = message.no.map(function (e) { return (e ? exports.Vote.toJSON(e) : undefined); });
        }
        else {
            obj.no = [];
        }
        obj.yesParty = {};
        if (message.yesParty) {
            Object.entries(message.yesParty).forEach(function (_a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                obj.yesParty[k] = exports.Vote.toJSON(v);
            });
        }
        obj.noParty = {};
        if (message.noParty) {
            Object.entries(message.noParty).forEach(function (_a) {
                var _b = __read(_a, 2), k = _b[0], v = _b[1];
                obj.noParty[k] = exports.Vote.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseGovernanceData();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? exports.Proposal.fromPartial(object.proposal)
                : undefined;
        message.yes = ((_a = object.yes) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Vote.fromPartial(e); })) || [];
        message.no = ((_b = object.no) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Vote.fromPartial(e); })) || [];
        message.yesParty = Object.entries((_c = object.yesParty) !== null && _c !== void 0 ? _c : {}).reduce(function (acc, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (value !== undefined) {
                acc[key] = exports.Vote.fromPartial(value);
            }
            return acc;
        }, {});
        message.noParty = Object.entries((_d = object.noParty) !== null && _d !== void 0 ? _d : {}).reduce(function (acc, _a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            if (value !== undefined) {
                acc[key] = exports.Vote.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    }
};
function createBaseGovernanceData_YesPartyEntry() {
    return { key: "", value: undefined };
}
exports.GovernanceData_YesPartyEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Vote.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGovernanceData_YesPartyEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Vote.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.Vote.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Vote.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGovernanceData_YesPartyEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.Vote.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseGovernanceData_NoPartyEntry() {
    return { key: "", value: undefined };
}
exports.GovernanceData_NoPartyEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Vote.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGovernanceData_NoPartyEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Vote.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? exports.Vote.fromJSON(object.value) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Vote.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGovernanceData_NoPartyEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.Vote.fromPartial(object.value)
                : undefined;
        return message;
    }
};
function createBaseProposal() {
    return {
        id: "",
        reference: "",
        partyId: "",
        state: 0,
        timestamp: "0",
        terms: undefined,
        reason: 0,
        errorDetails: ""
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.ProposalTerms.encode(message.terms, writer.uint32(50).fork()).ldelim();
        }
        if (message.reason !== 0) {
            writer.uint32(56).int32(message.reason);
        }
        if (message.errorDetails !== "") {
            writer.uint32(66).string(message.errorDetails);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.state = reader.int32();
                    break;
                case 5:
                    message.timestamp = longToString(reader.int64());
                    break;
                case 6:
                    message.terms = exports.ProposalTerms.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.reason = reader.int32();
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            reference: isSet(object.reference) ? String(object.reference) : "",
            partyId: isSet(object.partyId) ? String(object.partyId) : "",
            state: isSet(object.state) ? proposal_StateFromJSON(object.state) : 0,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            terms: isSet(object.terms)
                ? exports.ProposalTerms.fromJSON(object.terms)
                : undefined,
            reason: isSet(object.reason) ? proposalErrorFromJSON(object.reason) : 0,
            errorDetails: isSet(object.errorDetails)
                ? String(object.errorDetails)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.reference !== undefined && (obj.reference = message.reference);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        message.state !== undefined &&
            (obj.state = proposal_StateToJSON(message.state));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.terms !== undefined &&
            (obj.terms = message.terms
                ? exports.ProposalTerms.toJSON(message.terms)
                : undefined);
        message.reason !== undefined &&
            (obj.reason = proposalErrorToJSON(message.reason));
        message.errorDetails !== undefined &&
            (obj.errorDetails = message.errorDetails);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseProposal();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.reference = (_b = object.reference) !== null && _b !== void 0 ? _b : "";
        message.partyId = (_c = object.partyId) !== null && _c !== void 0 ? _c : "";
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : 0;
        message.timestamp = (_e = object.timestamp) !== null && _e !== void 0 ? _e : "0";
        message.terms =
            object.terms !== undefined && object.terms !== null
                ? exports.ProposalTerms.fromPartial(object.terms)
                : undefined;
        message.reason = (_f = object.reason) !== null && _f !== void 0 ? _f : 0;
        message.errorDetails = (_g = object.errorDetails) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseVote() {
    return {
        partyId: "",
        value: 0,
        proposalId: "",
        timestamp: "0",
        totalGovernanceTokenBalance: "",
        totalGovernanceTokenWeight: "",
        totalEquityLikeShareWeight: ""
    };
}
exports.Vote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.partyId = reader.string();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                case 3:
                    message.proposalId = reader.string();
                    break;
                case 4:
                    message.timestamp = longToString(reader.int64());
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
    fromJSON: function (object) {
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
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseVote();
        message.partyId = (_a = object.partyId) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        message.proposalId = (_c = object.proposalId) !== null && _c !== void 0 ? _c : "";
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        message.totalGovernanceTokenBalance =
            (_e = object.totalGovernanceTokenBalance) !== null && _e !== void 0 ? _e : "";
        message.totalGovernanceTokenWeight =
            (_f = object.totalGovernanceTokenWeight) !== null && _f !== void 0 ? _f : "";
        message.totalEquityLikeShareWeight =
            (_g = object.totalEquityLikeShareWeight) !== null && _g !== void 0 ? _g : "";
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
