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
exports.Condition = exports.PropertyKey = exports.Filter = exports.OracleSpec = exports.OracleSpecConfiguration = exports.condition_OperatorToJSON = exports.condition_OperatorFromJSON = exports.Condition_Operator = exports.propertyKey_TypeToJSON = exports.propertyKey_TypeFromJSON = exports.PropertyKey_Type = exports.oracleSpec_StatusToJSON = exports.oracleSpec_StatusFromJSON = exports.OracleSpec_Status = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "oracles.v1";
/** Status describe the status of the oracle spec */
var OracleSpec_Status;
(function (OracleSpec_Status) {
    /** STATUS_UNSPECIFIED - The default value. */
    OracleSpec_Status[OracleSpec_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_ACTIVE - STATUS_ACTIVE describes an active oracle spec. */
    OracleSpec_Status[OracleSpec_Status["STATUS_ACTIVE"] = 1] = "STATUS_ACTIVE";
    /**
     * STATUS_DEACTIVATED - STATUS_DEACTIVATED describes an oracle spec that is not listening to data
     * anymore.
     */
    OracleSpec_Status[OracleSpec_Status["STATUS_DEACTIVATED"] = 2] = "STATUS_DEACTIVATED";
    OracleSpec_Status[OracleSpec_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OracleSpec_Status = exports.OracleSpec_Status || (exports.OracleSpec_Status = {}));
function oracleSpec_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return OracleSpec_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_ACTIVE":
            return OracleSpec_Status.STATUS_ACTIVE;
        case 2:
        case "STATUS_DEACTIVATED":
            return OracleSpec_Status.STATUS_DEACTIVATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OracleSpec_Status.UNRECOGNIZED;
    }
}
exports.oracleSpec_StatusFromJSON = oracleSpec_StatusFromJSON;
function oracleSpec_StatusToJSON(object) {
    switch (object) {
        case OracleSpec_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case OracleSpec_Status.STATUS_ACTIVE:
            return "STATUS_ACTIVE";
        case OracleSpec_Status.STATUS_DEACTIVATED:
            return "STATUS_DEACTIVATED";
        default:
            return "UNKNOWN";
    }
}
exports.oracleSpec_StatusToJSON = oracleSpec_StatusToJSON;
/**
 * Type describes the type of properties that are supported by the oracle
 * engine.
 */
var PropertyKey_Type;
(function (PropertyKey_Type) {
    /** TYPE_UNSPECIFIED - The default value. */
    PropertyKey_Type[PropertyKey_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /** TYPE_EMPTY - Any type. */
    PropertyKey_Type[PropertyKey_Type["TYPE_EMPTY"] = 1] = "TYPE_EMPTY";
    /** TYPE_INTEGER - Integer type. */
    PropertyKey_Type[PropertyKey_Type["TYPE_INTEGER"] = 2] = "TYPE_INTEGER";
    /** TYPE_STRING - String type. */
    PropertyKey_Type[PropertyKey_Type["TYPE_STRING"] = 3] = "TYPE_STRING";
    /** TYPE_BOOLEAN - Boolean type. */
    PropertyKey_Type[PropertyKey_Type["TYPE_BOOLEAN"] = 4] = "TYPE_BOOLEAN";
    /** TYPE_DECIMAL - Any floating point decimal type. */
    PropertyKey_Type[PropertyKey_Type["TYPE_DECIMAL"] = 5] = "TYPE_DECIMAL";
    /** TYPE_TIMESTAMP - Timestamp date type. */
    PropertyKey_Type[PropertyKey_Type["TYPE_TIMESTAMP"] = 6] = "TYPE_TIMESTAMP";
    PropertyKey_Type[PropertyKey_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PropertyKey_Type = exports.PropertyKey_Type || (exports.PropertyKey_Type = {}));
function propertyKey_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return PropertyKey_Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_EMPTY":
            return PropertyKey_Type.TYPE_EMPTY;
        case 2:
        case "TYPE_INTEGER":
            return PropertyKey_Type.TYPE_INTEGER;
        case 3:
        case "TYPE_STRING":
            return PropertyKey_Type.TYPE_STRING;
        case 4:
        case "TYPE_BOOLEAN":
            return PropertyKey_Type.TYPE_BOOLEAN;
        case 5:
        case "TYPE_DECIMAL":
            return PropertyKey_Type.TYPE_DECIMAL;
        case 6:
        case "TYPE_TIMESTAMP":
            return PropertyKey_Type.TYPE_TIMESTAMP;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PropertyKey_Type.UNRECOGNIZED;
    }
}
exports.propertyKey_TypeFromJSON = propertyKey_TypeFromJSON;
function propertyKey_TypeToJSON(object) {
    switch (object) {
        case PropertyKey_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case PropertyKey_Type.TYPE_EMPTY:
            return "TYPE_EMPTY";
        case PropertyKey_Type.TYPE_INTEGER:
            return "TYPE_INTEGER";
        case PropertyKey_Type.TYPE_STRING:
            return "TYPE_STRING";
        case PropertyKey_Type.TYPE_BOOLEAN:
            return "TYPE_BOOLEAN";
        case PropertyKey_Type.TYPE_DECIMAL:
            return "TYPE_DECIMAL";
        case PropertyKey_Type.TYPE_TIMESTAMP:
            return "TYPE_TIMESTAMP";
        default:
            return "UNKNOWN";
    }
}
exports.propertyKey_TypeToJSON = propertyKey_TypeToJSON;
/** Comparator describes the type of comparison. */
var Condition_Operator;
(function (Condition_Operator) {
    /** OPERATOR_UNSPECIFIED - The default value */
    Condition_Operator[Condition_Operator["OPERATOR_UNSPECIFIED"] = 0] = "OPERATOR_UNSPECIFIED";
    /** OPERATOR_EQUALS - Verify if the property values are strictly equal or not. */
    Condition_Operator[Condition_Operator["OPERATOR_EQUALS"] = 1] = "OPERATOR_EQUALS";
    /** OPERATOR_GREATER_THAN - Verify if the oracle data value is greater than the Condition value. */
    Condition_Operator[Condition_Operator["OPERATOR_GREATER_THAN"] = 2] = "OPERATOR_GREATER_THAN";
    /**
     * OPERATOR_GREATER_THAN_OR_EQUAL - Verify if the oracle data value is greater than or equal to the Condition
     * value.
     */
    Condition_Operator[Condition_Operator["OPERATOR_GREATER_THAN_OR_EQUAL"] = 3] = "OPERATOR_GREATER_THAN_OR_EQUAL";
    /** OPERATOR_LESS_THAN - Verify if the oracle data value is less than the Condition value. */
    Condition_Operator[Condition_Operator["OPERATOR_LESS_THAN"] = 4] = "OPERATOR_LESS_THAN";
    /**
     * OPERATOR_LESS_THAN_OR_EQUAL - Verify if the oracle data value is less or equal to than the Condition
     * value.
     */
    Condition_Operator[Condition_Operator["OPERATOR_LESS_THAN_OR_EQUAL"] = 5] = "OPERATOR_LESS_THAN_OR_EQUAL";
    Condition_Operator[Condition_Operator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Condition_Operator = exports.Condition_Operator || (exports.Condition_Operator = {}));
function condition_OperatorFromJSON(object) {
    switch (object) {
        case 0:
        case "OPERATOR_UNSPECIFIED":
            return Condition_Operator.OPERATOR_UNSPECIFIED;
        case 1:
        case "OPERATOR_EQUALS":
            return Condition_Operator.OPERATOR_EQUALS;
        case 2:
        case "OPERATOR_GREATER_THAN":
            return Condition_Operator.OPERATOR_GREATER_THAN;
        case 3:
        case "OPERATOR_GREATER_THAN_OR_EQUAL":
            return Condition_Operator.OPERATOR_GREATER_THAN_OR_EQUAL;
        case 4:
        case "OPERATOR_LESS_THAN":
            return Condition_Operator.OPERATOR_LESS_THAN;
        case 5:
        case "OPERATOR_LESS_THAN_OR_EQUAL":
            return Condition_Operator.OPERATOR_LESS_THAN_OR_EQUAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Condition_Operator.UNRECOGNIZED;
    }
}
exports.condition_OperatorFromJSON = condition_OperatorFromJSON;
function condition_OperatorToJSON(object) {
    switch (object) {
        case Condition_Operator.OPERATOR_UNSPECIFIED:
            return "OPERATOR_UNSPECIFIED";
        case Condition_Operator.OPERATOR_EQUALS:
            return "OPERATOR_EQUALS";
        case Condition_Operator.OPERATOR_GREATER_THAN:
            return "OPERATOR_GREATER_THAN";
        case Condition_Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
            return "OPERATOR_GREATER_THAN_OR_EQUAL";
        case Condition_Operator.OPERATOR_LESS_THAN:
            return "OPERATOR_LESS_THAN";
        case Condition_Operator.OPERATOR_LESS_THAN_OR_EQUAL:
            return "OPERATOR_LESS_THAN_OR_EQUAL";
        default:
            return "UNKNOWN";
    }
}
exports.condition_OperatorToJSON = condition_OperatorToJSON;
function createBaseOracleSpecConfiguration() {
    return { pubKeys: [], filters: [] };
}
exports.OracleSpecConfiguration = {
    encode: function (message, writer) {
        var e_1, _a, e_2, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        try {
            for (var _c = __values(message.pubKeys), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                writer.uint32(10).string(v);
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
            for (var _e = __values(message.filters), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.Filter.encode(v, writer.uint32(18).fork()).ldelim();
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
        var message = createBaseOracleSpecConfiguration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubKeys.push(reader.string());
                    break;
                case 2:
                    message.filters.push(exports.Filter.decode(reader, reader.uint32()));
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
            pubKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.pubKeys)
                ? object.pubKeys.map(function (e) { return String(e); })
                : [],
            filters: Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map(function (e) { return exports.Filter.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pubKeys) {
            obj.pubKeys = message.pubKeys.map(function (e) { return e; });
        }
        else {
            obj.pubKeys = [];
        }
        if (message.filters) {
            obj.filters = message.filters.map(function (e) {
                return e ? exports.Filter.toJSON(e) : undefined;
            });
        }
        else {
            obj.filters = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOracleSpecConfiguration();
        message.pubKeys = ((_a = object.pubKeys) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.filters = ((_b = object.filters) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.Filter.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseOracleSpec() {
    return {
        id: "",
        createdAt: "0",
        updatedAt: "0",
        pubKeys: [],
        filters: [],
        status: 0
    };
}
exports.OracleSpec = {
    encode: function (message, writer) {
        var e_3, _a, e_4, _b;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.createdAt !== "0") {
            writer.uint32(16).int64(message.createdAt);
        }
        if (message.updatedAt !== "0") {
            writer.uint32(24).int64(message.updatedAt);
        }
        try {
            for (var _c = __values(message.pubKeys), _d = _c.next(); !_d.done; _d = _c.next()) {
                var v = _d.value;
                writer.uint32(34).string(v);
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
            for (var _e = __values(message.filters), _f = _e.next(); !_f.done; _f = _e.next()) {
                var v = _f.value;
                exports.Filter.encode(v, writer.uint32(42).fork()).ldelim();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
            }
            finally { if (e_4) throw e_4.error; }
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOracleSpec();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.createdAt = longToString(reader.int64());
                    break;
                case 3:
                    message.updatedAt = longToString(reader.int64());
                    break;
                case 4:
                    message.pubKeys.push(reader.string());
                    break;
                case 5:
                    message.filters.push(exports.Filter.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.status = reader.int32();
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
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
            pubKeys: Array.isArray(object === null || object === void 0 ? void 0 : object.pubKeys)
                ? object.pubKeys.map(function (e) { return String(e); })
                : [],
            filters: Array.isArray(object === null || object === void 0 ? void 0 : object.filters)
                ? object.filters.map(function (e) { return exports.Filter.fromJSON(e); })
                : [],
            status: isSet(object.status)
                ? oracleSpec_StatusFromJSON(object.status)
                : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
        if (message.pubKeys) {
            obj.pubKeys = message.pubKeys.map(function (e) { return e; });
        }
        else {
            obj.pubKeys = [];
        }
        if (message.filters) {
            obj.filters = message.filters.map(function (e) {
                return e ? exports.Filter.toJSON(e) : undefined;
            });
        }
        else {
            obj.filters = [];
        }
        message.status !== undefined &&
            (obj.status = oracleSpec_StatusToJSON(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseOracleSpec();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : "0";
        message.updatedAt = (_c = object.updatedAt) !== null && _c !== void 0 ? _c : "0";
        message.pubKeys = ((_d = object.pubKeys) === null || _d === void 0 ? void 0 : _d.map(function (e) { return e; })) || [];
        message.filters = ((_e = object.filters) === null || _e === void 0 ? void 0 : _e.map(function (e) { return exports.Filter.fromPartial(e); })) || [];
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        return message;
    }
};
function createBaseFilter() {
    return { key: undefined, conditions: [] };
}
exports.Filter = {
    encode: function (message, writer) {
        var e_5, _a;
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.key !== undefined) {
            exports.PropertyKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        try {
            for (var _b = __values(message.conditions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var v = _c.value;
                exports.Condition.encode(v, writer.uint32(18).fork()).ldelim();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFilter();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = exports.PropertyKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.conditions.push(exports.Condition.decode(reader, reader.uint32()));
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
            key: isSet(object.key) ? exports.PropertyKey.fromJSON(object.key) : undefined,
            conditions: Array.isArray(object === null || object === void 0 ? void 0 : object.conditions)
                ? object.conditions.map(function (e) { return exports.Condition.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined &&
            (obj.key = message.key ? exports.PropertyKey.toJSON(message.key) : undefined);
        if (message.conditions) {
            obj.conditions = message.conditions.map(function (e) {
                return e ? exports.Condition.toJSON(e) : undefined;
            });
        }
        else {
            obj.conditions = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseFilter();
        message.key =
            object.key !== undefined && object.key !== null
                ? exports.PropertyKey.fromPartial(object.key)
                : undefined;
        message.conditions =
            ((_a = object.conditions) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Condition.fromPartial(e); })) || [];
        return message;
    }
};
function createBasePropertyKey() {
    return { name: "", type: 0 };
}
exports.PropertyKey = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== 0) {
            writer.uint32(16).int32(message.type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePropertyKey();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
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
            name: isSet(object.name) ? String(object.name) : "",
            type: isSet(object.type) ? propertyKey_TypeFromJSON(object.type) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined &&
            (obj.type = propertyKey_TypeToJSON(message.type));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePropertyKey();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : 0;
        return message;
    }
};
function createBaseCondition() {
    return { operator: 0, value: "" };
}
exports.Condition = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.operator !== 0) {
            writer.uint32(8).int32(message.operator);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCondition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator = reader.int32();
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
            operator: isSet(object.operator)
                ? condition_OperatorFromJSON(object.operator)
                : 0,
            value: isSet(object.value) ? String(object.value) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.operator !== undefined &&
            (obj.operator = condition_OperatorToJSON(message.operator));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCondition();
        message.operator = (_a = object.operator) !== null && _a !== void 0 ? _a : 0;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
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
