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
exports.MarketTimestamps = exports.Market = exports.TargetStakeParameters = exports.LiquidityMonitoringParameters = exports.PriceMonitoringSettings = exports.PriceMonitoringParameters = exports.PriceMonitoringTrigger = exports.Fees = exports.FeeFactors = exports.TradableInstrument = exports.MarginCalculator = exports.ScalingFactors = exports.SimpleModelParams = exports.SimpleRiskModel = exports.LogNormalModelParams = exports.LogNormalRiskModel = exports.Instrument = exports.InstrumentMetadata = exports.OracleSpecToFutureBinding = exports.Future = exports.AuctionDuration = exports.market_TradingModeToJSON = exports.market_TradingModeFromJSON = exports.Market_TradingMode = exports.market_StateToJSON = exports.market_StateFromJSON = exports.Market_State = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var spec_1 = require("../vega/oracles/v1/spec");
exports.protobufPackage = "vega";
/** The current state of the Market */
var Market_State;
(function (Market_State) {
    /** STATE_UNSPECIFIED - Default value, invalid */
    Market_State[Market_State["STATE_UNSPECIFIED"] = 0] = "STATE_UNSPECIFIED";
    /** STATE_PROPOSED - The Governance proposal valid and accepted */
    Market_State[Market_State["STATE_PROPOSED"] = 1] = "STATE_PROPOSED";
    /** STATE_REJECTED - Outcome of governance votes is to reject the market */
    Market_State[Market_State["STATE_REJECTED"] = 2] = "STATE_REJECTED";
    /** STATE_PENDING - Governance vote passes/wins */
    Market_State[Market_State["STATE_PENDING"] = 3] = "STATE_PENDING";
    /**
     * STATE_CANCELLED - Market triggers cancellation condition or governance
     * votes to close before market becomes Active
     */
    Market_State[Market_State["STATE_CANCELLED"] = 4] = "STATE_CANCELLED";
    /** STATE_ACTIVE - Enactment date reached and usual auction exit checks pass */
    Market_State[Market_State["STATE_ACTIVE"] = 5] = "STATE_ACTIVE";
    /** STATE_SUSPENDED - Price monitoring or liquidity monitoring trigger */
    Market_State[Market_State["STATE_SUSPENDED"] = 6] = "STATE_SUSPENDED";
    /** STATE_CLOSED - Governance vote (to close) */
    Market_State[Market_State["STATE_CLOSED"] = 7] = "STATE_CLOSED";
    /**
     * STATE_TRADING_TERMINATED - Defined by the product (i.e. from a product parameter,
     * specified in market definition, giving close date/time)
     */
    Market_State[Market_State["STATE_TRADING_TERMINATED"] = 8] = "STATE_TRADING_TERMINATED";
    /** STATE_SETTLED - Settlement triggered and completed as defined by product */
    Market_State[Market_State["STATE_SETTLED"] = 9] = "STATE_SETTLED";
    Market_State[Market_State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Market_State = exports.Market_State || (exports.Market_State = {}));
function market_StateFromJSON(object) {
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
exports.market_StateFromJSON = market_StateFromJSON;
function market_StateToJSON(object) {
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
exports.market_StateToJSON = market_StateToJSON;
/** The trading mode the market is currently running, also referred to as 'market state' */
var Market_TradingMode;
(function (Market_TradingMode) {
    /** TRADING_MODE_UNSPECIFIED - Default value, this is invalid */
    Market_TradingMode[Market_TradingMode["TRADING_MODE_UNSPECIFIED"] = 0] = "TRADING_MODE_UNSPECIFIED";
    /** TRADING_MODE_CONTINUOUS - Normal trading */
    Market_TradingMode[Market_TradingMode["TRADING_MODE_CONTINUOUS"] = 1] = "TRADING_MODE_CONTINUOUS";
    /** TRADING_MODE_BATCH_AUCTION - Auction trading (FBA) */
    Market_TradingMode[Market_TradingMode["TRADING_MODE_BATCH_AUCTION"] = 2] = "TRADING_MODE_BATCH_AUCTION";
    /** TRADING_MODE_OPENING_AUCTION - Opening auction */
    Market_TradingMode[Market_TradingMode["TRADING_MODE_OPENING_AUCTION"] = 3] = "TRADING_MODE_OPENING_AUCTION";
    /** TRADING_MODE_MONITORING_AUCTION - Auction triggered by monitoring */
    Market_TradingMode[Market_TradingMode["TRADING_MODE_MONITORING_AUCTION"] = 4] = "TRADING_MODE_MONITORING_AUCTION";
    Market_TradingMode[Market_TradingMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Market_TradingMode = exports.Market_TradingMode || (exports.Market_TradingMode = {}));
function market_TradingModeFromJSON(object) {
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
exports.market_TradingModeFromJSON = market_TradingModeFromJSON;
function market_TradingModeToJSON(object) {
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
exports.market_TradingModeToJSON = market_TradingModeToJSON;
function createBaseAuctionDuration() {
    return { duration: "0", volume: "0" };
}
exports.AuctionDuration = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.duration !== "0") {
            writer.uint32(8).int64(message.duration);
        }
        if (message.volume !== "0") {
            writer.uint32(16).uint64(message.volume);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAuctionDuration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = longToString(reader.int64());
                    break;
                case 2:
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
            duration: isSet(object.duration) ? String(object.duration) : "0",
            volume: isSet(object.volume) ? String(object.volume) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.duration !== undefined && (obj.duration = message.duration);
        message.volume !== undefined && (obj.volume = message.volume);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAuctionDuration();
        message.duration = (_a = object.duration) !== null && _a !== void 0 ? _a : "0";
        message.volume = (_b = object.volume) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseFuture() {
    return {
        settlementAsset: "",
        quoteName: "",
        oracleSpecForSettlementPrice: undefined,
        oracleSpecForTradingTermination: undefined,
        oracleSpecBinding: undefined
    };
}
exports.Future = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.settlementAsset !== "") {
            writer.uint32(18).string(message.settlementAsset);
        }
        if (message.quoteName !== "") {
            writer.uint32(34).string(message.quoteName);
        }
        if (message.oracleSpecForSettlementPrice !== undefined) {
            spec_1.OracleSpec.encode(message.oracleSpecForSettlementPrice, writer.uint32(42).fork()).ldelim();
        }
        if (message.oracleSpecForTradingTermination !== undefined) {
            spec_1.OracleSpec.encode(message.oracleSpecForTradingTermination, writer.uint32(50).fork()).ldelim();
        }
        if (message.oracleSpecBinding !== undefined) {
            exports.OracleSpecToFutureBinding.encode(message.oracleSpecBinding, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFuture();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.settlementAsset = reader.string();
                    break;
                case 4:
                    message.quoteName = reader.string();
                    break;
                case 5:
                    message.oracleSpecForSettlementPrice = spec_1.OracleSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.oracleSpecForTradingTermination = spec_1.OracleSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.oracleSpecBinding = exports.OracleSpecToFutureBinding.decode(reader, reader.uint32());
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
                ? spec_1.OracleSpec.fromJSON(object.oracleSpecForSettlementPrice)
                : undefined,
            oracleSpecForTradingTermination: isSet(object.oracleSpecForTradingTermination)
                ? spec_1.OracleSpec.fromJSON(object.oracleSpecForTradingTermination)
                : undefined,
            oracleSpecBinding: isSet(object.oracleSpecBinding)
                ? exports.OracleSpecToFutureBinding.fromJSON(object.oracleSpecBinding)
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
                ? spec_1.OracleSpec.toJSON(message.oracleSpecForSettlementPrice)
                : undefined);
        message.oracleSpecForTradingTermination !== undefined &&
            (obj.oracleSpecForTradingTermination =
                message.oracleSpecForTradingTermination
                    ? spec_1.OracleSpec.toJSON(message.oracleSpecForTradingTermination)
                    : undefined);
        message.oracleSpecBinding !== undefined &&
            (obj.oracleSpecBinding = message.oracleSpecBinding
                ? exports.OracleSpecToFutureBinding.toJSON(message.oracleSpecBinding)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFuture();
        message.settlementAsset = (_a = object.settlementAsset) !== null && _a !== void 0 ? _a : "";
        message.quoteName = (_b = object.quoteName) !== null && _b !== void 0 ? _b : "";
        message.oracleSpecForSettlementPrice =
            object.oracleSpecForSettlementPrice !== undefined &&
                object.oracleSpecForSettlementPrice !== null
                ? spec_1.OracleSpec.fromPartial(object.oracleSpecForSettlementPrice)
                : undefined;
        message.oracleSpecForTradingTermination =
            object.oracleSpecForTradingTermination !== undefined &&
                object.oracleSpecForTradingTermination !== null
                ? spec_1.OracleSpec.fromPartial(object.oracleSpecForTradingTermination)
                : undefined;
        message.oracleSpecBinding =
            object.oracleSpecBinding !== undefined &&
                object.oracleSpecBinding !== null
                ? exports.OracleSpecToFutureBinding.fromPartial(object.oracleSpecBinding)
                : undefined;
        return message;
    }
};
function createBaseOracleSpecToFutureBinding() {
    return { settlementPriceProperty: "", tradingTerminationProperty: "" };
}
exports.OracleSpecToFutureBinding = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.settlementPriceProperty !== "") {
            writer.uint32(10).string(message.settlementPriceProperty);
        }
        if (message.tradingTerminationProperty !== "") {
            writer.uint32(18).string(message.tradingTerminationProperty);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOracleSpecToFutureBinding();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            settlementPriceProperty: isSet(object.settlementPriceProperty)
                ? String(object.settlementPriceProperty)
                : "",
            tradingTerminationProperty: isSet(object.tradingTerminationProperty)
                ? String(object.tradingTerminationProperty)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.settlementPriceProperty !== undefined &&
            (obj.settlementPriceProperty = message.settlementPriceProperty);
        message.tradingTerminationProperty !== undefined &&
            (obj.tradingTerminationProperty = message.tradingTerminationProperty);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOracleSpecToFutureBinding();
        message.settlementPriceProperty = (_a = object.settlementPriceProperty) !== null && _a !== void 0 ? _a : "";
        message.tradingTerminationProperty =
            (_b = object.tradingTerminationProperty) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseInstrumentMetadata() {
    return { tags: [] };
}
exports.InstrumentMetadata = {
    encode: function (message, writer) {
        var e_1, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.tags), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                writer.uint32(10).string(v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInstrumentMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags)
                ? object.tags.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.tags) {
            obj.tags = message.tags.map(function (e) { return e; });
        }
        else {
            obj.tags = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseInstrumentMetadata();
        message.tags = ((_a = object.tags) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseInstrument() {
    return { id: "", code: "", name: "", metadata: undefined, future: undefined };
}
exports.Instrument = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.InstrumentMetadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
        }
        if (message.future !== undefined) {
            exports.Future.encode(message.future, writer.uint32(802).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInstrument();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.metadata = exports.InstrumentMetadata.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.future = exports.Future.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? String(object.code) : "",
            name: isSet(object.name) ? String(object.name) : "",
            metadata: isSet(object.metadata)
                ? exports.InstrumentMetadata.fromJSON(object.metadata)
                : undefined,
            future: isSet(object.future) ? exports.Future.fromJSON(object.future) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.code !== undefined && (obj.code = message.code);
        message.name !== undefined && (obj.name = message.name);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? exports.InstrumentMetadata.toJSON(message.metadata)
                : undefined);
        message.future !== undefined &&
            (obj.future = message.future ? exports.Future.toJSON(message.future) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseInstrument();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.InstrumentMetadata.fromPartial(object.metadata)
                : undefined;
        message.future =
            object.future !== undefined && object.future !== null
                ? exports.Future.fromPartial(object.future)
                : undefined;
        return message;
    }
};
function createBaseLogNormalRiskModel() {
    return { riskAversionParameter: 0, tau: 0, params: undefined };
}
exports.LogNormalRiskModel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.riskAversionParameter !== 0) {
            writer.uint32(9).double(message.riskAversionParameter);
        }
        if (message.tau !== 0) {
            writer.uint32(17).double(message.tau);
        }
        if (message.params !== undefined) {
            exports.LogNormalModelParams.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLogNormalRiskModel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.riskAversionParameter = reader.double();
                    break;
                case 2:
                    message.tau = reader.double();
                    break;
                case 3:
                    message.params = exports.LogNormalModelParams.decode(reader, reader.uint32());
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
            riskAversionParameter: isSet(object.riskAversionParameter)
                ? Number(object.riskAversionParameter)
                : 0,
            tau: isSet(object.tau) ? Number(object.tau) : 0,
            params: isSet(object.params)
                ? exports.LogNormalModelParams.fromJSON(object.params)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.riskAversionParameter !== undefined &&
            (obj.riskAversionParameter = message.riskAversionParameter);
        message.tau !== undefined && (obj.tau = message.tau);
        message.params !== undefined &&
            (obj.params = message.params
                ? exports.LogNormalModelParams.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLogNormalRiskModel();
        message.riskAversionParameter = (_a = object.riskAversionParameter) !== null && _a !== void 0 ? _a : 0;
        message.tau = (_b = object.tau) !== null && _b !== void 0 ? _b : 0;
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.LogNormalModelParams.fromPartial(object.params)
                : undefined;
        return message;
    }
};
function createBaseLogNormalModelParams() {
    return { mu: 0, r: 0, sigma: 0 };
}
exports.LogNormalModelParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLogNormalModelParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            mu: isSet(object.mu) ? Number(object.mu) : 0,
            r: isSet(object.r) ? Number(object.r) : 0,
            sigma: isSet(object.sigma) ? Number(object.sigma) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.mu !== undefined && (obj.mu = message.mu);
        message.r !== undefined && (obj.r = message.r);
        message.sigma !== undefined && (obj.sigma = message.sigma);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseLogNormalModelParams();
        message.mu = (_a = object.mu) !== null && _a !== void 0 ? _a : 0;
        message.r = (_b = object.r) !== null && _b !== void 0 ? _b : 0;
        message.sigma = (_c = object.sigma) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseSimpleRiskModel() {
    return { params: undefined };
}
exports.SimpleRiskModel = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            exports.SimpleModelParams.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimpleRiskModel();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = exports.SimpleModelParams.decode(reader, reader.uint32());
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
            params: isSet(object.params)
                ? exports.SimpleModelParams.fromJSON(object.params)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params
                ? exports.SimpleModelParams.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseSimpleRiskModel();
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.SimpleModelParams.fromPartial(object.params)
                : undefined;
        return message;
    }
};
function createBaseSimpleModelParams() {
    return {
        factorLong: 0,
        factorShort: 0,
        maxMoveUp: 0,
        minMoveDown: 0,
        probabilityOfTrading: 0
    };
}
exports.SimpleModelParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSimpleModelParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            factorLong: isSet(object.factorLong) ? Number(object.factorLong) : 0,
            factorShort: isSet(object.factorShort) ? Number(object.factorShort) : 0,
            maxMoveUp: isSet(object.maxMoveUp) ? Number(object.maxMoveUp) : 0,
            minMoveDown: isSet(object.minMoveDown) ? Number(object.minMoveDown) : 0,
            probabilityOfTrading: isSet(object.probabilityOfTrading)
                ? Number(object.probabilityOfTrading)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSimpleModelParams();
        message.factorLong = (_a = object.factorLong) !== null && _a !== void 0 ? _a : 0;
        message.factorShort = (_b = object.factorShort) !== null && _b !== void 0 ? _b : 0;
        message.maxMoveUp = (_c = object.maxMoveUp) !== null && _c !== void 0 ? _c : 0;
        message.minMoveDown = (_d = object.minMoveDown) !== null && _d !== void 0 ? _d : 0;
        message.probabilityOfTrading = (_e = object.probabilityOfTrading) !== null && _e !== void 0 ? _e : 0;
        return message;
    }
};
function createBaseScalingFactors() {
    return { searchLevel: 0, initialMargin: 0, collateralRelease: 0 };
}
exports.ScalingFactors = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseScalingFactors();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            searchLevel: isSet(object.searchLevel) ? Number(object.searchLevel) : 0,
            initialMargin: isSet(object.initialMargin)
                ? Number(object.initialMargin)
                : 0,
            collateralRelease: isSet(object.collateralRelease)
                ? Number(object.collateralRelease)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.searchLevel !== undefined &&
            (obj.searchLevel = message.searchLevel);
        message.initialMargin !== undefined &&
            (obj.initialMargin = message.initialMargin);
        message.collateralRelease !== undefined &&
            (obj.collateralRelease = message.collateralRelease);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseScalingFactors();
        message.searchLevel = (_a = object.searchLevel) !== null && _a !== void 0 ? _a : 0;
        message.initialMargin = (_b = object.initialMargin) !== null && _b !== void 0 ? _b : 0;
        message.collateralRelease = (_c = object.collateralRelease) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseMarginCalculator() {
    return { scalingFactors: undefined };
}
exports.MarginCalculator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.scalingFactors !== undefined) {
            exports.ScalingFactors.encode(message.scalingFactors, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarginCalculator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scalingFactors = exports.ScalingFactors.decode(reader, reader.uint32());
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
            scalingFactors: isSet(object.scalingFactors)
                ? exports.ScalingFactors.fromJSON(object.scalingFactors)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.scalingFactors !== undefined &&
            (obj.scalingFactors = message.scalingFactors
                ? exports.ScalingFactors.toJSON(message.scalingFactors)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseMarginCalculator();
        message.scalingFactors =
            object.scalingFactors !== undefined && object.scalingFactors !== null
                ? exports.ScalingFactors.fromPartial(object.scalingFactors)
                : undefined;
        return message;
    }
};
function createBaseTradableInstrument() {
    return {
        instrument: undefined,
        marginCalculator: undefined,
        logNormalRiskModel: undefined,
        simpleRiskModel: undefined
    };
}
exports.TradableInstrument = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.instrument !== undefined) {
            exports.Instrument.encode(message.instrument, writer.uint32(10).fork()).ldelim();
        }
        if (message.marginCalculator !== undefined) {
            exports.MarginCalculator.encode(message.marginCalculator, writer.uint32(18).fork()).ldelim();
        }
        if (message.logNormalRiskModel !== undefined) {
            exports.LogNormalRiskModel.encode(message.logNormalRiskModel, writer.uint32(802).fork()).ldelim();
        }
        if (message.simpleRiskModel !== undefined) {
            exports.SimpleRiskModel.encode(message.simpleRiskModel, writer.uint32(810).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTradableInstrument();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instrument = exports.Instrument.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.marginCalculator = exports.MarginCalculator.decode(reader, reader.uint32());
                    break;
                case 100:
                    message.logNormalRiskModel = exports.LogNormalRiskModel.decode(reader, reader.uint32());
                    break;
                case 101:
                    message.simpleRiskModel = exports.SimpleRiskModel.decode(reader, reader.uint32());
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
                ? exports.Instrument.fromJSON(object.instrument)
                : undefined,
            marginCalculator: isSet(object.marginCalculator)
                ? exports.MarginCalculator.fromJSON(object.marginCalculator)
                : undefined,
            logNormalRiskModel: isSet(object.logNormalRiskModel)
                ? exports.LogNormalRiskModel.fromJSON(object.logNormalRiskModel)
                : undefined,
            simpleRiskModel: isSet(object.simpleRiskModel)
                ? exports.SimpleRiskModel.fromJSON(object.simpleRiskModel)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.instrument !== undefined &&
            (obj.instrument = message.instrument
                ? exports.Instrument.toJSON(message.instrument)
                : undefined);
        message.marginCalculator !== undefined &&
            (obj.marginCalculator = message.marginCalculator
                ? exports.MarginCalculator.toJSON(message.marginCalculator)
                : undefined);
        message.logNormalRiskModel !== undefined &&
            (obj.logNormalRiskModel = message.logNormalRiskModel
                ? exports.LogNormalRiskModel.toJSON(message.logNormalRiskModel)
                : undefined);
        message.simpleRiskModel !== undefined &&
            (obj.simpleRiskModel = message.simpleRiskModel
                ? exports.SimpleRiskModel.toJSON(message.simpleRiskModel)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseTradableInstrument();
        message.instrument =
            object.instrument !== undefined && object.instrument !== null
                ? exports.Instrument.fromPartial(object.instrument)
                : undefined;
        message.marginCalculator =
            object.marginCalculator !== undefined && object.marginCalculator !== null
                ? exports.MarginCalculator.fromPartial(object.marginCalculator)
                : undefined;
        message.logNormalRiskModel =
            object.logNormalRiskModel !== undefined &&
                object.logNormalRiskModel !== null
                ? exports.LogNormalRiskModel.fromPartial(object.logNormalRiskModel)
                : undefined;
        message.simpleRiskModel =
            object.simpleRiskModel !== undefined && object.simpleRiskModel !== null
                ? exports.SimpleRiskModel.fromPartial(object.simpleRiskModel)
                : undefined;
        return message;
    }
};
function createBaseFeeFactors() {
    return { makerFee: "", infrastructureFee: "", liquidityFee: "" };
}
exports.FeeFactors = {
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
        var message = createBaseFeeFactors();
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
        var message = createBaseFeeFactors();
        message.makerFee = (_a = object.makerFee) !== null && _a !== void 0 ? _a : "";
        message.infrastructureFee = (_b = object.infrastructureFee) !== null && _b !== void 0 ? _b : "";
        message.liquidityFee = (_c = object.liquidityFee) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseFees() {
    return { factors: undefined };
}
exports.Fees = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.factors !== undefined) {
            exports.FeeFactors.encode(message.factors, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFees();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.factors = exports.FeeFactors.decode(reader, reader.uint32());
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
            factors: isSet(object.factors)
                ? exports.FeeFactors.fromJSON(object.factors)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.factors !== undefined &&
            (obj.factors = message.factors
                ? exports.FeeFactors.toJSON(message.factors)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseFees();
        message.factors =
            object.factors !== undefined && object.factors !== null
                ? exports.FeeFactors.fromPartial(object.factors)
                : undefined;
        return message;
    }
};
function createBasePriceMonitoringTrigger() {
    return { horizon: "0", probability: "", auctionExtension: "0" };
}
exports.PriceMonitoringTrigger = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePriceMonitoringTrigger();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.horizon = longToString(reader.int64());
                    break;
                case 2:
                    message.probability = reader.string();
                    break;
                case 3:
                    message.auctionExtension = longToString(reader.int64());
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
            horizon: isSet(object.horizon) ? String(object.horizon) : "0",
            probability: isSet(object.probability) ? String(object.probability) : "",
            auctionExtension: isSet(object.auctionExtension)
                ? String(object.auctionExtension)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.horizon !== undefined && (obj.horizon = message.horizon);
        message.probability !== undefined &&
            (obj.probability = message.probability);
        message.auctionExtension !== undefined &&
            (obj.auctionExtension = message.auctionExtension);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePriceMonitoringTrigger();
        message.horizon = (_a = object.horizon) !== null && _a !== void 0 ? _a : "0";
        message.probability = (_b = object.probability) !== null && _b !== void 0 ? _b : "";
        message.auctionExtension = (_c = object.auctionExtension) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBasePriceMonitoringParameters() {
    return { triggers: [] };
}
exports.PriceMonitoringParameters = {
    encode: function (message, writer) {
        var e_2, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _b = __values(message.triggers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                exports.PriceMonitoringTrigger.encode(v, writer.uint32(10).fork()).ldelim();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePriceMonitoringParameters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triggers.push(exports.PriceMonitoringTrigger.decode(reader, reader.uint32()));
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
            triggers: Array.isArray(object === null || object === void 0 ? void 0 : object.triggers)
                ? object.triggers.map(function (e) { return exports.PriceMonitoringTrigger.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.triggers) {
            obj.triggers = message.triggers.map(function (e) {
                return e ? exports.PriceMonitoringTrigger.toJSON(e) : undefined;
            });
        }
        else {
            obj.triggers = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePriceMonitoringParameters();
        message.triggers =
            ((_a = object.triggers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.PriceMonitoringTrigger.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePriceMonitoringSettings() {
    return { parameters: undefined, updateFrequency: "0" };
}
exports.PriceMonitoringSettings = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.parameters !== undefined) {
            exports.PriceMonitoringParameters.encode(message.parameters, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateFrequency !== "0") {
            writer.uint32(16).int64(message.updateFrequency);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePriceMonitoringSettings();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.parameters = exports.PriceMonitoringParameters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateFrequency = longToString(reader.int64());
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
            parameters: isSet(object.parameters)
                ? exports.PriceMonitoringParameters.fromJSON(object.parameters)
                : undefined,
            updateFrequency: isSet(object.updateFrequency)
                ? String(object.updateFrequency)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.parameters !== undefined &&
            (obj.parameters = message.parameters
                ? exports.PriceMonitoringParameters.toJSON(message.parameters)
                : undefined);
        message.updateFrequency !== undefined &&
            (obj.updateFrequency = message.updateFrequency);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBasePriceMonitoringSettings();
        message.parameters =
            object.parameters !== undefined && object.parameters !== null
                ? exports.PriceMonitoringParameters.fromPartial(object.parameters)
                : undefined;
        message.updateFrequency = (_a = object.updateFrequency) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseLiquidityMonitoringParameters() {
    return {
        targetStakeParameters: undefined,
        triggeringRatio: 0,
        auctionExtension: "0"
    };
}
exports.LiquidityMonitoringParameters = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.targetStakeParameters !== undefined) {
            exports.TargetStakeParameters.encode(message.targetStakeParameters, writer.uint32(10).fork()).ldelim();
        }
        if (message.triggeringRatio !== 0) {
            writer.uint32(17).double(message.triggeringRatio);
        }
        if (message.auctionExtension !== "0") {
            writer.uint32(24).int64(message.auctionExtension);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityMonitoringParameters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetStakeParameters = exports.TargetStakeParameters.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.triggeringRatio = reader.double();
                    break;
                case 3:
                    message.auctionExtension = longToString(reader.int64());
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
            targetStakeParameters: isSet(object.targetStakeParameters)
                ? exports.TargetStakeParameters.fromJSON(object.targetStakeParameters)
                : undefined,
            triggeringRatio: isSet(object.triggeringRatio)
                ? Number(object.triggeringRatio)
                : 0,
            auctionExtension: isSet(object.auctionExtension)
                ? String(object.auctionExtension)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.targetStakeParameters !== undefined &&
            (obj.targetStakeParameters = message.targetStakeParameters
                ? exports.TargetStakeParameters.toJSON(message.targetStakeParameters)
                : undefined);
        message.triggeringRatio !== undefined &&
            (obj.triggeringRatio = message.triggeringRatio);
        message.auctionExtension !== undefined &&
            (obj.auctionExtension = message.auctionExtension);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseLiquidityMonitoringParameters();
        message.targetStakeParameters =
            object.targetStakeParameters !== undefined &&
                object.targetStakeParameters !== null
                ? exports.TargetStakeParameters.fromPartial(object.targetStakeParameters)
                : undefined;
        message.triggeringRatio = (_a = object.triggeringRatio) !== null && _a !== void 0 ? _a : 0;
        message.auctionExtension = (_b = object.auctionExtension) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseTargetStakeParameters() {
    return { timeWindow: "0", scalingFactor: 0 };
}
exports.TargetStakeParameters = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.timeWindow !== "0") {
            writer.uint32(8).int64(message.timeWindow);
        }
        if (message.scalingFactor !== 0) {
            writer.uint32(17).double(message.scalingFactor);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTargetStakeParameters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeWindow = longToString(reader.int64());
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
    fromJSON: function (object) {
        return {
            timeWindow: isSet(object.timeWindow) ? String(object.timeWindow) : "0",
            scalingFactor: isSet(object.scalingFactor)
                ? Number(object.scalingFactor)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.timeWindow !== undefined && (obj.timeWindow = message.timeWindow);
        message.scalingFactor !== undefined &&
            (obj.scalingFactor = message.scalingFactor);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTargetStakeParameters();
        message.timeWindow = (_a = object.timeWindow) !== null && _a !== void 0 ? _a : "0";
        message.scalingFactor = (_b = object.scalingFactor) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseMarket() {
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
        positionDecimalPlaces: "0"
    };
}
exports.Market = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.tradableInstrument !== undefined) {
            exports.TradableInstrument.encode(message.tradableInstrument, writer.uint32(18).fork()).ldelim();
        }
        if (message.decimalPlaces !== "0") {
            writer.uint32(24).uint64(message.decimalPlaces);
        }
        if (message.fees !== undefined) {
            exports.Fees.encode(message.fees, writer.uint32(34).fork()).ldelim();
        }
        if (message.openingAuction !== undefined) {
            exports.AuctionDuration.encode(message.openingAuction, writer.uint32(42).fork()).ldelim();
        }
        if (message.priceMonitoringSettings !== undefined) {
            exports.PriceMonitoringSettings.encode(message.priceMonitoringSettings, writer.uint32(50).fork()).ldelim();
        }
        if (message.liquidityMonitoringParameters !== undefined) {
            exports.LiquidityMonitoringParameters.encode(message.liquidityMonitoringParameters, writer.uint32(58).fork()).ldelim();
        }
        if (message.tradingMode !== 0) {
            writer.uint32(64).int32(message.tradingMode);
        }
        if (message.state !== 0) {
            writer.uint32(72).int32(message.state);
        }
        if (message.marketTimestamps !== undefined) {
            exports.MarketTimestamps.encode(message.marketTimestamps, writer.uint32(82).fork()).ldelim();
        }
        if (message.positionDecimalPlaces !== "0") {
            writer.uint32(88).uint64(message.positionDecimalPlaces);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.tradableInstrument = exports.TradableInstrument.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.decimalPlaces = longToString(reader.uint64());
                    break;
                case 4:
                    message.fees = exports.Fees.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.openingAuction = exports.AuctionDuration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.priceMonitoringSettings = exports.PriceMonitoringSettings.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.liquidityMonitoringParameters =
                        exports.LiquidityMonitoringParameters.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.tradingMode = reader.int32();
                    break;
                case 9:
                    message.state = reader.int32();
                    break;
                case 10:
                    message.marketTimestamps = exports.MarketTimestamps.decode(reader, reader.uint32());
                    break;
                case 11:
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
            id: isSet(object.id) ? String(object.id) : "",
            tradableInstrument: isSet(object.tradableInstrument)
                ? exports.TradableInstrument.fromJSON(object.tradableInstrument)
                : undefined,
            decimalPlaces: isSet(object.decimalPlaces)
                ? String(object.decimalPlaces)
                : "0",
            fees: isSet(object.fees) ? exports.Fees.fromJSON(object.fees) : undefined,
            openingAuction: isSet(object.openingAuction)
                ? exports.AuctionDuration.fromJSON(object.openingAuction)
                : undefined,
            priceMonitoringSettings: isSet(object.priceMonitoringSettings)
                ? exports.PriceMonitoringSettings.fromJSON(object.priceMonitoringSettings)
                : undefined,
            liquidityMonitoringParameters: isSet(object.liquidityMonitoringParameters)
                ? exports.LiquidityMonitoringParameters.fromJSON(object.liquidityMonitoringParameters)
                : undefined,
            tradingMode: isSet(object.tradingMode)
                ? market_TradingModeFromJSON(object.tradingMode)
                : 0,
            state: isSet(object.state) ? market_StateFromJSON(object.state) : 0,
            marketTimestamps: isSet(object.marketTimestamps)
                ? exports.MarketTimestamps.fromJSON(object.marketTimestamps)
                : undefined,
            positionDecimalPlaces: isSet(object.positionDecimalPlaces)
                ? String(object.positionDecimalPlaces)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.tradableInstrument !== undefined &&
            (obj.tradableInstrument = message.tradableInstrument
                ? exports.TradableInstrument.toJSON(message.tradableInstrument)
                : undefined);
        message.decimalPlaces !== undefined &&
            (obj.decimalPlaces = message.decimalPlaces);
        message.fees !== undefined &&
            (obj.fees = message.fees ? exports.Fees.toJSON(message.fees) : undefined);
        message.openingAuction !== undefined &&
            (obj.openingAuction = message.openingAuction
                ? exports.AuctionDuration.toJSON(message.openingAuction)
                : undefined);
        message.priceMonitoringSettings !== undefined &&
            (obj.priceMonitoringSettings = message.priceMonitoringSettings
                ? exports.PriceMonitoringSettings.toJSON(message.priceMonitoringSettings)
                : undefined);
        message.liquidityMonitoringParameters !== undefined &&
            (obj.liquidityMonitoringParameters = message.liquidityMonitoringParameters
                ? exports.LiquidityMonitoringParameters.toJSON(message.liquidityMonitoringParameters)
                : undefined);
        message.tradingMode !== undefined &&
            (obj.tradingMode = market_TradingModeToJSON(message.tradingMode));
        message.state !== undefined &&
            (obj.state = market_StateToJSON(message.state));
        message.marketTimestamps !== undefined &&
            (obj.marketTimestamps = message.marketTimestamps
                ? exports.MarketTimestamps.toJSON(message.marketTimestamps)
                : undefined);
        message.positionDecimalPlaces !== undefined &&
            (obj.positionDecimalPlaces = message.positionDecimalPlaces);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseMarket();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.tradableInstrument =
            object.tradableInstrument !== undefined &&
                object.tradableInstrument !== null
                ? exports.TradableInstrument.fromPartial(object.tradableInstrument)
                : undefined;
        message.decimalPlaces = (_b = object.decimalPlaces) !== null && _b !== void 0 ? _b : "0";
        message.fees =
            object.fees !== undefined && object.fees !== null
                ? exports.Fees.fromPartial(object.fees)
                : undefined;
        message.openingAuction =
            object.openingAuction !== undefined && object.openingAuction !== null
                ? exports.AuctionDuration.fromPartial(object.openingAuction)
                : undefined;
        message.priceMonitoringSettings =
            object.priceMonitoringSettings !== undefined &&
                object.priceMonitoringSettings !== null
                ? exports.PriceMonitoringSettings.fromPartial(object.priceMonitoringSettings)
                : undefined;
        message.liquidityMonitoringParameters =
            object.liquidityMonitoringParameters !== undefined &&
                object.liquidityMonitoringParameters !== null
                ? exports.LiquidityMonitoringParameters.fromPartial(object.liquidityMonitoringParameters)
                : undefined;
        message.tradingMode = (_c = object.tradingMode) !== null && _c !== void 0 ? _c : 0;
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : 0;
        message.marketTimestamps =
            object.marketTimestamps !== undefined && object.marketTimestamps !== null
                ? exports.MarketTimestamps.fromPartial(object.marketTimestamps)
                : undefined;
        message.positionDecimalPlaces = (_e = object.positionDecimalPlaces) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
function createBaseMarketTimestamps() {
    return { proposed: "0", pending: "0", open: "0", close: "0" };
}
exports.MarketTimestamps = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMarketTimestamps();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposed = longToString(reader.int64());
                    break;
                case 2:
                    message.pending = longToString(reader.int64());
                    break;
                case 3:
                    message.open = longToString(reader.int64());
                    break;
                case 4:
                    message.close = longToString(reader.int64());
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
            proposed: isSet(object.proposed) ? String(object.proposed) : "0",
            pending: isSet(object.pending) ? String(object.pending) : "0",
            open: isSet(object.open) ? String(object.open) : "0",
            close: isSet(object.close) ? String(object.close) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposed !== undefined && (obj.proposed = message.proposed);
        message.pending !== undefined && (obj.pending = message.pending);
        message.open !== undefined && (obj.open = message.open);
        message.close !== undefined && (obj.close = message.close);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMarketTimestamps();
        message.proposed = (_a = object.proposed) !== null && _a !== void 0 ? _a : "0";
        message.pending = (_b = object.pending) !== null && _b !== void 0 ? _b : "0";
        message.open = (_c = object.open) !== null && _c !== void 0 ? _c : "0";
        message.close = (_d = object.close) !== null && _d !== void 0 ? _d : "0";
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
