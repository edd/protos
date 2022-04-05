"use strict";
exports.__esModule = true;
exports.ERC20 = exports.BuiltinAsset = exports.AssetDetails = exports.Asset = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "vega";
function createBaseAsset() {
    return { id: "", details: undefined };
}
exports.Asset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            exports.AssetDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAsset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.details = exports.AssetDetails.decode(reader, reader.uint32());
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
            details: isSet(object.details)
                ? exports.AssetDetails.fromJSON(object.details)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.details !== undefined &&
            (obj.details = message.details
                ? exports.AssetDetails.toJSON(message.details)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAsset();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details =
            object.details !== undefined && object.details !== null
                ? exports.AssetDetails.fromPartial(object.details)
                : undefined;
        return message;
    }
};
function createBaseAssetDetails() {
    return {
        name: "",
        symbol: "",
        totalSupply: "",
        decimals: "0",
        quantum: "",
        builtinAsset: undefined,
        erc20: undefined
    };
}
exports.AssetDetails = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.totalSupply !== "") {
            writer.uint32(26).string(message.totalSupply);
        }
        if (message.decimals !== "0") {
            writer.uint32(32).uint64(message.decimals);
        }
        if (message.quantum !== "") {
            writer.uint32(42).string(message.quantum);
        }
        if (message.builtinAsset !== undefined) {
            exports.BuiltinAsset.encode(message.builtinAsset, writer.uint32(810).fork()).ldelim();
        }
        if (message.erc20 !== undefined) {
            exports.ERC20.encode(message.erc20, writer.uint32(818).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAssetDetails();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.totalSupply = reader.string();
                    break;
                case 4:
                    message.decimals = longToString(reader.uint64());
                    break;
                case 5:
                    message.quantum = reader.string();
                    break;
                case 101:
                    message.builtinAsset = exports.BuiltinAsset.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.erc20 = exports.ERC20.decode(reader, reader.uint32());
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
            decimals: isSet(object.decimals) ? String(object.decimals) : "0",
            quantum: isSet(object.quantum) ? String(object.quantum) : "",
            builtinAsset: isSet(object.builtinAsset)
                ? exports.BuiltinAsset.fromJSON(object.builtinAsset)
                : undefined,
            erc20: isSet(object.erc20) ? exports.ERC20.fromJSON(object.erc20) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.totalSupply !== undefined &&
            (obj.totalSupply = message.totalSupply);
        message.decimals !== undefined && (obj.decimals = message.decimals);
        message.quantum !== undefined && (obj.quantum = message.quantum);
        message.builtinAsset !== undefined &&
            (obj.builtinAsset = message.builtinAsset
                ? exports.BuiltinAsset.toJSON(message.builtinAsset)
                : undefined);
        message.erc20 !== undefined &&
            (obj.erc20 = message.erc20 ? exports.ERC20.toJSON(message.erc20) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseAssetDetails();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.symbol = (_b = object.symbol) !== null && _b !== void 0 ? _b : "";
        message.totalSupply = (_c = object.totalSupply) !== null && _c !== void 0 ? _c : "";
        message.decimals = (_d = object.decimals) !== null && _d !== void 0 ? _d : "0";
        message.quantum = (_e = object.quantum) !== null && _e !== void 0 ? _e : "";
        message.builtinAsset =
            object.builtinAsset !== undefined && object.builtinAsset !== null
                ? exports.BuiltinAsset.fromPartial(object.builtinAsset)
                : undefined;
        message.erc20 =
            object.erc20 !== undefined && object.erc20 !== null
                ? exports.ERC20.fromPartial(object.erc20)
                : undefined;
        return message;
    }
};
function createBaseBuiltinAsset() {
    return { maxFaucetAmountMint: "" };
}
exports.BuiltinAsset = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.maxFaucetAmountMint !== "") {
            writer.uint32(10).string(message.maxFaucetAmountMint);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBuiltinAsset();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxFaucetAmountMint = reader.string();
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
            maxFaucetAmountMint: isSet(object.maxFaucetAmountMint)
                ? String(object.maxFaucetAmountMint)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.maxFaucetAmountMint !== undefined &&
            (obj.maxFaucetAmountMint = message.maxFaucetAmountMint);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseBuiltinAsset();
        message.maxFaucetAmountMint = (_a = object.maxFaucetAmountMint) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseERC20() {
    return { contractAddress: "" };
}
exports.ERC20 = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
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
            contractAddress: isSet(object.contractAddress)
                ? String(object.contractAddress)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseERC20();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
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
