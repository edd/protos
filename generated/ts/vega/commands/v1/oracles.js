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
exports.OracleDataSubmission = exports.oracleDataSubmission_OracleSourceToJSON = exports.oracleDataSubmission_OracleSourceFromJSON = exports.OracleDataSubmission_OracleSource = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "vega.commands.v1";
/** The supported Oracle sources */
var OracleDataSubmission_OracleSource;
(function (OracleDataSubmission_OracleSource) {
    /** ORACLE_SOURCE_UNSPECIFIED - The default value */
    OracleDataSubmission_OracleSource[OracleDataSubmission_OracleSource["ORACLE_SOURCE_UNSPECIFIED"] = 0] = "ORACLE_SOURCE_UNSPECIFIED";
    /** ORACLE_SOURCE_OPEN_ORACLE - Support for Open Oracle standard */
    OracleDataSubmission_OracleSource[OracleDataSubmission_OracleSource["ORACLE_SOURCE_OPEN_ORACLE"] = 1] = "ORACLE_SOURCE_OPEN_ORACLE";
    /** ORACLE_SOURCE_JSON - Support for custom JSON data */
    OracleDataSubmission_OracleSource[OracleDataSubmission_OracleSource["ORACLE_SOURCE_JSON"] = 2] = "ORACLE_SOURCE_JSON";
    OracleDataSubmission_OracleSource[OracleDataSubmission_OracleSource["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OracleDataSubmission_OracleSource = exports.OracleDataSubmission_OracleSource || (exports.OracleDataSubmission_OracleSource = {}));
function oracleDataSubmission_OracleSourceFromJSON(object) {
    switch (object) {
        case 0:
        case "ORACLE_SOURCE_UNSPECIFIED":
            return OracleDataSubmission_OracleSource.ORACLE_SOURCE_UNSPECIFIED;
        case 1:
        case "ORACLE_SOURCE_OPEN_ORACLE":
            return OracleDataSubmission_OracleSource.ORACLE_SOURCE_OPEN_ORACLE;
        case 2:
        case "ORACLE_SOURCE_JSON":
            return OracleDataSubmission_OracleSource.ORACLE_SOURCE_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OracleDataSubmission_OracleSource.UNRECOGNIZED;
    }
}
exports.oracleDataSubmission_OracleSourceFromJSON = oracleDataSubmission_OracleSourceFromJSON;
function oracleDataSubmission_OracleSourceToJSON(object) {
    switch (object) {
        case OracleDataSubmission_OracleSource.ORACLE_SOURCE_UNSPECIFIED:
            return "ORACLE_SOURCE_UNSPECIFIED";
        case OracleDataSubmission_OracleSource.ORACLE_SOURCE_OPEN_ORACLE:
            return "ORACLE_SOURCE_OPEN_ORACLE";
        case OracleDataSubmission_OracleSource.ORACLE_SOURCE_JSON:
            return "ORACLE_SOURCE_JSON";
        default:
            return "UNKNOWN";
    }
}
exports.oracleDataSubmission_OracleSourceToJSON = oracleDataSubmission_OracleSourceToJSON;
function createBaseOracleDataSubmission() {
    return { source: 0, payload: new Uint8Array() };
}
exports.OracleDataSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.source !== 0) {
            writer.uint32(8).int32(message.source);
        }
        if (message.payload.length !== 0) {
            writer.uint32(18).bytes(message.payload);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseOracleDataSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source = reader.int32();
                    break;
                case 2:
                    message.payload = reader.bytes();
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
            source: isSet(object.source)
                ? oracleDataSubmission_OracleSourceFromJSON(object.source)
                : 0,
            payload: isSet(object.payload)
                ? bytesFromBase64(object.payload)
                : new Uint8Array()
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.source !== undefined &&
            (obj.source = oracleDataSubmission_OracleSourceToJSON(message.source));
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseOracleDataSubmission();
        message.source = (_a = object.source) !== null && _a !== void 0 ? _a : 0;
        message.payload = (_b = object.payload) !== null && _b !== void 0 ? _b : new Uint8Array();
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
    var e_1, _a;
    var bin = [];
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var byte = arr_1_1.value;
            bin.push(String.fromCharCode(byte));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1["return"])) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return btoa(bin.join(""));
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
