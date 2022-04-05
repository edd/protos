"use strict";
exports.__esModule = true;
exports.Signature = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "vega.commands.v1";
function createBaseSignature() {
    return { value: "", algo: "", version: 0 };
}
exports.Signature = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.algo !== "") {
            writer.uint32(18).string(message.algo);
        }
        if (message.version !== 0) {
            writer.uint32(24).uint32(message.version);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                case 2:
                    message.algo = reader.string();
                    break;
                case 3:
                    message.version = reader.uint32();
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
            value: isSet(object.value) ? String(object.value) : "",
            algo: isSet(object.algo) ? String(object.algo) : "",
            version: isSet(object.version) ? Number(object.version) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.value !== undefined && (obj.value = message.value);
        message.algo !== undefined && (obj.algo = message.algo);
        message.version !== undefined &&
            (obj.version = Math.round(message.version));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSignature();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : "";
        message.algo = (_b = object.algo) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
