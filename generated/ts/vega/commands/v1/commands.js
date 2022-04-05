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
exports.CancelTransfer = exports.RecurringTransfer = exports.OneOffTransfer = exports.Transfer = exports.RestoreSnapshot = exports.UndelegateSubmission = exports.DelegateSubmission = exports.VoteSubmission = exports.ProposalSubmission = exports.WithdrawSubmission = exports.LiquidityProvisionAmendment = exports.LiquidityProvisionCancellation = exports.LiquidityProvisionSubmission = exports.OrderAmendment = exports.OrderCancellation = exports.OrderSubmission = exports.Int64Value = exports.undelegateSubmission_MethodToJSON = exports.undelegateSubmission_MethodFromJSON = exports.UndelegateSubmission_Method = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var vega_1 = require("../../../vega/vega");
var governance_1 = require("../../../vega/governance");
exports.protobufPackage = "vega.commands.v1";
var UndelegateSubmission_Method;
(function (UndelegateSubmission_Method) {
    UndelegateSubmission_Method[UndelegateSubmission_Method["METHOD_UNSPECIFIED"] = 0] = "METHOD_UNSPECIFIED";
    UndelegateSubmission_Method[UndelegateSubmission_Method["METHOD_NOW"] = 1] = "METHOD_NOW";
    UndelegateSubmission_Method[UndelegateSubmission_Method["METHOD_AT_END_OF_EPOCH"] = 2] = "METHOD_AT_END_OF_EPOCH";
    UndelegateSubmission_Method[UndelegateSubmission_Method["METHOD_IN_ANGER"] = 3] = "METHOD_IN_ANGER";
    UndelegateSubmission_Method[UndelegateSubmission_Method["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UndelegateSubmission_Method = exports.UndelegateSubmission_Method || (exports.UndelegateSubmission_Method = {}));
function undelegateSubmission_MethodFromJSON(object) {
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
exports.undelegateSubmission_MethodFromJSON = undelegateSubmission_MethodFromJSON;
function undelegateSubmission_MethodToJSON(object) {
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
exports.undelegateSubmission_MethodToJSON = undelegateSubmission_MethodToJSON;
function createBaseInt64Value() {
    return { value: "0" };
}
exports.Int64Value = {
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
        var message = createBaseInt64Value();
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
        var message = createBaseInt64Value();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseOrderSubmission() {
    return {
        marketId: "",
        price: "",
        size: "0",
        side: 0,
        timeInForce: 0,
        expiresAt: "0",
        type: 0,
        reference: "",
        peggedOrder: undefined
    };
}
exports.OrderSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            vega_1.PeggedOrder.encode(message.peggedOrder, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketId = reader.string();
                    break;
                case 2:
                    message.price = reader.string();
                    break;
                case 3:
                    message.size = longToString(reader.uint64());
                    break;
                case 4:
                    message.side = reader.int32();
                    break;
                case 5:
                    message.timeInForce = reader.int32();
                    break;
                case 6:
                    message.expiresAt = longToString(reader.int64());
                    break;
                case 7:
                    message.type = reader.int32();
                    break;
                case 8:
                    message.reference = reader.string();
                    break;
                case 9:
                    message.peggedOrder = vega_1.PeggedOrder.decode(reader, reader.uint32());
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
            price: isSet(object.price) ? String(object.price) : "",
            size: isSet(object.size) ? String(object.size) : "0",
            side: isSet(object.side) ? (0, vega_1.sideFromJSON)(object.side) : 0,
            timeInForce: isSet(object.timeInForce)
                ? (0, vega_1.order_TimeInForceFromJSON)(object.timeInForce)
                : 0,
            expiresAt: isSet(object.expiresAt) ? String(object.expiresAt) : "0",
            type: isSet(object.type) ? (0, vega_1.order_TypeFromJSON)(object.type) : 0,
            reference: isSet(object.reference) ? String(object.reference) : "",
            peggedOrder: isSet(object.peggedOrder)
                ? vega_1.PeggedOrder.fromJSON(object.peggedOrder)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.price !== undefined && (obj.price = message.price);
        message.size !== undefined && (obj.size = message.size);
        message.side !== undefined && (obj.side = (0, vega_1.sideToJSON)(message.side));
        message.timeInForce !== undefined &&
            (obj.timeInForce = (0, vega_1.order_TimeInForceToJSON)(message.timeInForce));
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt);
        message.type !== undefined && (obj.type = (0, vega_1.order_TypeToJSON)(message.type));
        message.reference !== undefined && (obj.reference = message.reference);
        message.peggedOrder !== undefined &&
            (obj.peggedOrder = message.peggedOrder
                ? vega_1.PeggedOrder.toJSON(message.peggedOrder)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseOrderSubmission();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.price = (_b = object.price) !== null && _b !== void 0 ? _b : "";
        message.size = (_c = object.size) !== null && _c !== void 0 ? _c : "0";
        message.side = (_d = object.side) !== null && _d !== void 0 ? _d : 0;
        message.timeInForce = (_e = object.timeInForce) !== null && _e !== void 0 ? _e : 0;
        message.expiresAt = (_f = object.expiresAt) !== null && _f !== void 0 ? _f : "0";
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : 0;
        message.reference = (_h = object.reference) !== null && _h !== void 0 ? _h : "";
        message.peggedOrder =
            object.peggedOrder !== undefined && object.peggedOrder !== null
                ? vega_1.PeggedOrder.fromPartial(object.peggedOrder)
                : undefined;
        return message;
    }
};
function createBaseOrderCancellation() {
    return { orderId: "", marketId: "" };
}
exports.OrderCancellation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderCancellation();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            orderId: isSet(object.orderId) ? String(object.orderId) : "",
            marketId: isSet(object.marketId) ? String(object.marketId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOrderCancellation();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseOrderAmendment() {
    return {
        orderId: "",
        marketId: "",
        price: undefined,
        sizeDelta: "0",
        expiresAt: undefined,
        timeInForce: 0,
        peggedOffset: "",
        peggedReference: 0
    };
}
exports.OrderAmendment = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.orderId !== "") {
            writer.uint32(10).string(message.orderId);
        }
        if (message.marketId !== "") {
            writer.uint32(18).string(message.marketId);
        }
        if (message.price !== undefined) {
            vega_1.Price.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.sizeDelta !== "0") {
            writer.uint32(32).int64(message.sizeDelta);
        }
        if (message.expiresAt !== undefined) {
            vega_1.Timestamp.encode(message.expiresAt, writer.uint32(42).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOrderAmendment();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.orderId = reader.string();
                    break;
                case 2:
                    message.marketId = reader.string();
                    break;
                case 3:
                    message.price = vega_1.Price.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sizeDelta = longToString(reader.int64());
                    break;
                case 5:
                    message.expiresAt = vega_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timeInForce = reader.int32();
                    break;
                case 7:
                    message.peggedOffset = reader.string();
                    break;
                case 8:
                    message.peggedReference = reader.int32();
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
            price: isSet(object.price) ? vega_1.Price.fromJSON(object.price) : undefined,
            sizeDelta: isSet(object.sizeDelta) ? String(object.sizeDelta) : "0",
            expiresAt: isSet(object.expiresAt)
                ? vega_1.Timestamp.fromJSON(object.expiresAt)
                : undefined,
            timeInForce: isSet(object.timeInForce)
                ? (0, vega_1.order_TimeInForceFromJSON)(object.timeInForce)
                : 0,
            peggedOffset: isSet(object.peggedOffset)
                ? String(object.peggedOffset)
                : "",
            peggedReference: isSet(object.peggedReference)
                ? (0, vega_1.peggedReferenceFromJSON)(object.peggedReference)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orderId !== undefined && (obj.orderId = message.orderId);
        message.marketId !== undefined && (obj.marketId = message.marketId);
        message.price !== undefined &&
            (obj.price = message.price ? vega_1.Price.toJSON(message.price) : undefined);
        message.sizeDelta !== undefined && (obj.sizeDelta = message.sizeDelta);
        message.expiresAt !== undefined &&
            (obj.expiresAt = message.expiresAt
                ? vega_1.Timestamp.toJSON(message.expiresAt)
                : undefined);
        message.timeInForce !== undefined &&
            (obj.timeInForce = (0, vega_1.order_TimeInForceToJSON)(message.timeInForce));
        message.peggedOffset !== undefined &&
            (obj.peggedOffset = message.peggedOffset);
        message.peggedReference !== undefined &&
            (obj.peggedReference = (0, vega_1.peggedReferenceToJSON)(message.peggedReference));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseOrderAmendment();
        message.orderId = (_a = object.orderId) !== null && _a !== void 0 ? _a : "";
        message.marketId = (_b = object.marketId) !== null && _b !== void 0 ? _b : "";
        message.price =
            object.price !== undefined && object.price !== null
                ? vega_1.Price.fromPartial(object.price)
                : undefined;
        message.sizeDelta = (_c = object.sizeDelta) !== null && _c !== void 0 ? _c : "0";
        message.expiresAt =
            object.expiresAt !== undefined && object.expiresAt !== null
                ? vega_1.Timestamp.fromPartial(object.expiresAt)
                : undefined;
        message.timeInForce = (_d = object.timeInForce) !== null && _d !== void 0 ? _d : 0;
        message.peggedOffset = (_e = object.peggedOffset) !== null && _e !== void 0 ? _e : "";
        message.peggedReference = (_f = object.peggedReference) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseLiquidityProvisionSubmission() {
    return {
        marketId: "",
        commitmentAmount: "",
        fee: "",
        sells: [],
        buys: [],
        reference: ""
    };
}
exports.LiquidityProvisionSubmission = {
    encode: function (message, writer) {
        var e_1, _a, e_2, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.commitmentAmount !== "") {
            writer.uint32(18).string(message.commitmentAmount);
        }
        if (message.fee !== "") {
            writer.uint32(26).string(message.fee);
        }
        try {
            for (var _c = __values(message.sells), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                vega_1.LiquidityOrder.encode(v, writer.uint32(34).fork()).ldelim();
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
            for (var _e = __values(message.buys), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                vega_1.LiquidityOrder.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (message.reference !== "") {
            writer.uint32(50).string(message.reference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProvisionSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.sells.push(vega_1.LiquidityOrder.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.buys.push(vega_1.LiquidityOrder.decode(reader, reader.uint32()));
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
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
        message.marketId !== undefined && (obj.marketId = message.marketId);
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
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseLiquidityProvisionSubmission();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.commitmentAmount = (_b = object.commitmentAmount) !== null && _b !== void 0 ? _b : "";
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : "";
        message.sells =
            ((_d = object.sells) === null || _d === void 0 ? void 0 : _d.map(function (e) { return vega_1.LiquidityOrder.fromPartial(e); })) || [];
        message.buys = ((_e = object.buys) === null || _e === void 0 ? void 0 : _e.map(function (e) { return vega_1.LiquidityOrder.fromPartial(e); })) || [];
        message.reference = (_f = object.reference) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseLiquidityProvisionCancellation() {
    return { marketId: "" };
}
exports.LiquidityProvisionCancellation = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProvisionCancellation();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            marketId: isSet(object.marketId) ? String(object.marketId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.marketId !== undefined && (obj.marketId = message.marketId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseLiquidityProvisionCancellation();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseLiquidityProvisionAmendment() {
    return {
        marketId: "",
        commitmentAmount: "",
        fee: "",
        sells: [],
        buys: [],
        reference: ""
    };
}
exports.LiquidityProvisionAmendment = {
    encode: function (message, writer) {
        var e_3, _a, e_4, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.marketId !== "") {
            writer.uint32(10).string(message.marketId);
        }
        if (message.commitmentAmount !== "") {
            writer.uint32(18).string(message.commitmentAmount);
        }
        if (message.fee !== "") {
            writer.uint32(26).string(message.fee);
        }
        try {
            for (var _c = __values(message.sells), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                vega_1.LiquidityOrder.encode(v, writer.uint32(34).fork()).ldelim();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _e = __values(message.buys), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                vega_1.LiquidityOrder.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (message.reference !== "") {
            writer.uint32(50).string(message.reference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseLiquidityProvisionAmendment();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.sells.push(vega_1.LiquidityOrder.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.buys.push(vega_1.LiquidityOrder.decode(reader, reader.uint32()));
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
            marketId: isSet(object.marketId) ? String(object.marketId) : "",
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
        message.marketId !== undefined && (obj.marketId = message.marketId);
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
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseLiquidityProvisionAmendment();
        message.marketId = (_a = object.marketId) !== null && _a !== void 0 ? _a : "";
        message.commitmentAmount = (_b = object.commitmentAmount) !== null && _b !== void 0 ? _b : "";
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : "";
        message.sells =
            ((_d = object.sells) === null || _d === void 0 ? void 0 : _d.map(function (e) { return vega_1.LiquidityOrder.fromPartial(e); })) || [];
        message.buys = ((_e = object.buys) === null || _e === void 0 ? void 0 : _e.map(function (e) { return vega_1.LiquidityOrder.fromPartial(e); })) || [];
        message.reference = (_f = object.reference) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseWithdrawSubmission() {
    return { amount: "", asset: "", ext: undefined };
}
exports.WithdrawSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        if (message.ext !== undefined) {
            vega_1.WithdrawExt.encode(message.ext, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWithdrawSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                case 3:
                    message.ext = vega_1.WithdrawExt.decode(reader, reader.uint32());
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
            asset: isSet(object.asset) ? String(object.asset) : "",
            ext: isSet(object.ext) ? vega_1.WithdrawExt.fromJSON(object.ext) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.asset !== undefined && (obj.asset = message.asset);
        message.ext !== undefined &&
            (obj.ext = message.ext ? vega_1.WithdrawExt.toJSON(message.ext) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWithdrawSubmission();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "";
        message.asset = (_b = object.asset) !== null && _b !== void 0 ? _b : "";
        message.ext =
            object.ext !== undefined && object.ext !== null
                ? vega_1.WithdrawExt.fromPartial(object.ext)
                : undefined;
        return message;
    }
};
function createBaseProposalSubmission() {
    return { reference: "", terms: undefined };
}
exports.ProposalSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.reference !== "") {
            writer.uint32(10).string(message.reference);
        }
        if (message.terms !== undefined) {
            governance_1.ProposalTerms.encode(message.terms, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposalSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reference = reader.string();
                    break;
                case 2:
                    message.terms = governance_1.ProposalTerms.decode(reader, reader.uint32());
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
            reference: isSet(object.reference) ? String(object.reference) : "",
            terms: isSet(object.terms)
                ? governance_1.ProposalTerms.fromJSON(object.terms)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.reference !== undefined && (obj.reference = message.reference);
        message.terms !== undefined &&
            (obj.terms = message.terms
                ? governance_1.ProposalTerms.toJSON(message.terms)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseProposalSubmission();
        message.reference = (_a = object.reference) !== null && _a !== void 0 ? _a : "";
        message.terms =
            object.terms !== undefined && object.terms !== null
                ? governance_1.ProposalTerms.fromPartial(object.terms)
                : undefined;
        return message;
    }
};
function createBaseVoteSubmission() {
    return { proposalId: "", value: 0 };
}
exports.VoteSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposalId !== "") {
            writer.uint32(10).string(message.proposalId);
        }
        if (message.value !== 0) {
            writer.uint32(16).int32(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVoteSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.string();
                    break;
                case 2:
                    message.value = reader.int32();
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
            proposalId: isSet(object.proposalId) ? String(object.proposalId) : "",
            value: isSet(object.value) ? (0, governance_1.vote_ValueFromJSON)(object.value) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposalId !== undefined && (obj.proposalId = message.proposalId);
        message.value !== undefined &&
            (obj.value = (0, governance_1.vote_ValueToJSON)(message.value));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseVoteSubmission();
        message.proposalId = (_a = object.proposalId) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseDelegateSubmission() {
    return { nodeId: "", amount: "" };
}
exports.DelegateSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.nodeId !== "") {
            writer.uint32(10).string(message.nodeId);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegateSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegateSubmission();
        message.nodeId = (_a = object.nodeId) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseUndelegateSubmission() {
    return { nodeId: "", amount: "", method: 0 };
}
exports.UndelegateSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUndelegateSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.method = reader.int32();
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
            nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            method: isSet(object.method)
                ? undelegateSubmission_MethodFromJSON(object.method)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.amount !== undefined && (obj.amount = message.amount);
        message.method !== undefined &&
            (obj.method = undelegateSubmission_MethodToJSON(message.method));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUndelegateSubmission();
        message.nodeId = (_a = object.nodeId) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "";
        message.method = (_c = object.method) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseRestoreSnapshot() {
    return { data: new Uint8Array() };
}
exports.RestoreSnapshot = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRestoreSnapshot();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array()
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRestoreSnapshot();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    }
};
function createBaseTransfer() {
    return {
        fromAccountType: 0,
        to: "",
        toAccountType: 0,
        asset: "",
        amount: "",
        reference: "",
        oneOff: undefined,
        recurring: undefined
    };
}
exports.Transfer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
            exports.OneOffTransfer.encode(message.oneOff, writer.uint32(810).fork()).ldelim();
        }
        if (message.recurring !== undefined) {
            exports.RecurringTransfer.encode(message.recurring, writer.uint32(818).fork()).ldelim();
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
                    message.fromAccountType = reader.int32();
                    break;
                case 2:
                    message.to = reader.string();
                    break;
                case 3:
                    message.toAccountType = reader.int32();
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
                    message.oneOff = exports.OneOffTransfer.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.recurring = exports.RecurringTransfer.decode(reader, reader.uint32());
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
            fromAccountType: isSet(object.fromAccountType)
                ? (0, vega_1.accountTypeFromJSON)(object.fromAccountType)
                : 0,
            to: isSet(object.to) ? String(object.to) : "",
            toAccountType: isSet(object.toAccountType)
                ? (0, vega_1.accountTypeFromJSON)(object.toAccountType)
                : 0,
            asset: isSet(object.asset) ? String(object.asset) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            reference: isSet(object.reference) ? String(object.reference) : "",
            oneOff: isSet(object.oneOff)
                ? exports.OneOffTransfer.fromJSON(object.oneOff)
                : undefined,
            recurring: isSet(object.recurring)
                ? exports.RecurringTransfer.fromJSON(object.recurring)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.fromAccountType !== undefined &&
            (obj.fromAccountType = (0, vega_1.accountTypeToJSON)(message.fromAccountType));
        message.to !== undefined && (obj.to = message.to);
        message.toAccountType !== undefined &&
            (obj.toAccountType = (0, vega_1.accountTypeToJSON)(message.toAccountType));
        message.asset !== undefined && (obj.asset = message.asset);
        message.amount !== undefined && (obj.amount = message.amount);
        message.reference !== undefined && (obj.reference = message.reference);
        message.oneOff !== undefined &&
            (obj.oneOff = message.oneOff
                ? exports.OneOffTransfer.toJSON(message.oneOff)
                : undefined);
        message.recurring !== undefined &&
            (obj.recurring = message.recurring
                ? exports.RecurringTransfer.toJSON(message.recurring)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseTransfer();
        message.fromAccountType = (_a = object.fromAccountType) !== null && _a !== void 0 ? _a : 0;
        message.to = (_b = object.to) !== null && _b !== void 0 ? _b : "";
        message.toAccountType = (_c = object.toAccountType) !== null && _c !== void 0 ? _c : 0;
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.amount = (_e = object.amount) !== null && _e !== void 0 ? _e : "";
        message.reference = (_f = object.reference) !== null && _f !== void 0 ? _f : "";
        message.oneOff =
            object.oneOff !== undefined && object.oneOff !== null
                ? exports.OneOffTransfer.fromPartial(object.oneOff)
                : undefined;
        message.recurring =
            object.recurring !== undefined && object.recurring !== null
                ? exports.RecurringTransfer.fromPartial(object.recurring)
                : undefined;
        return message;
    }
};
function createBaseOneOffTransfer() {
    return { deliverOn: "0" };
}
exports.OneOffTransfer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.deliverOn !== "0") {
            writer.uint32(8).int64(message.deliverOn);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOneOffTransfer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deliverOn = longToString(reader.int64());
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
            deliverOn: isSet(object.deliverOn) ? String(object.deliverOn) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.deliverOn !== undefined && (obj.deliverOn = message.deliverOn);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseOneOffTransfer();
        message.deliverOn = (_a = object.deliverOn) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseRecurringTransfer() {
    return { startEpoch: "0", endEpoch: undefined, factor: "" };
}
exports.RecurringTransfer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.startEpoch !== "0") {
            writer.uint32(8).uint64(message.startEpoch);
        }
        if (message.endEpoch !== undefined) {
            vega_1.Uint64Value.encode(message.endEpoch, writer.uint32(18).fork()).ldelim();
        }
        if (message.factor !== "") {
            writer.uint32(26).string(message.factor);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRecurringTransfer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.startEpoch = longToString(reader.uint64());
                    break;
                case 2:
                    message.endEpoch = vega_1.Uint64Value.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        return {
            startEpoch: isSet(object.startEpoch) ? String(object.startEpoch) : "0",
            endEpoch: isSet(object.endEpoch)
                ? vega_1.Uint64Value.fromJSON(object.endEpoch)
                : undefined,
            factor: isSet(object.factor) ? String(object.factor) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.startEpoch !== undefined && (obj.startEpoch = message.startEpoch);
        message.endEpoch !== undefined &&
            (obj.endEpoch = message.endEpoch
                ? vega_1.Uint64Value.toJSON(message.endEpoch)
                : undefined);
        message.factor !== undefined && (obj.factor = message.factor);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRecurringTransfer();
        message.startEpoch = (_a = object.startEpoch) !== null && _a !== void 0 ? _a : "0";
        message.endEpoch =
            object.endEpoch !== undefined && object.endEpoch !== null
                ? vega_1.Uint64Value.fromPartial(object.endEpoch)
                : undefined;
        message.factor = (_b = object.factor) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseCancelTransfer() {
    return { transferId: "" };
}
exports.CancelTransfer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.transferId !== "") {
            writer.uint32(10).string(message.transferId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCancelTransfer();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        return {
            transferId: isSet(object.transferId) ? String(object.transferId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.transferId !== undefined && (obj.transferId = message.transferId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCancelTransfer();
        message.transferId = (_a = object.transferId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var e_5, _a;
    var bin = [];
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var byte = arr_1_1.value;
            bin.push(String.fromCharCode(byte));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1["return"])) _a.call(arr_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return btoa(bin.join(""));
}
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
