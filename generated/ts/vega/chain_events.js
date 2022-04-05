"use strict";
exports.__esModule = true;
exports.StakeTotalSupply = exports.StakeRemoved = exports.StakeDeposited = exports.StakingEvent = exports.ERC20MultiSigEvent = exports.ERC20ThresholdSet = exports.ERC20SignerRemoved = exports.ERC20SignerAdded = exports.ERC20Event = exports.ERC20Withdrawal = exports.ERC20Deposit = exports.ERC20AssetDelist = exports.ERC20AssetList = exports.BuiltinAssetEvent = exports.BuiltinAssetWithdrawal = exports.BuiltinAssetDeposit = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
exports.protobufPackage = "vega";
function createBaseBuiltinAssetDeposit() {
    return { vegaAssetId: "", partyId: "", amount: "" };
}
exports.BuiltinAssetDeposit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaAssetId !== "") {
            writer.uint32(10).string(message.vegaAssetId);
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
        var message = createBaseBuiltinAssetDeposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaAssetId = reader.string();
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
            vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
            partyId: isSet(object.partyId) ? String(object.partyId) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaAssetId !== undefined &&
            (obj.vegaAssetId = message.vegaAssetId);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseBuiltinAssetDeposit();
        message.vegaAssetId = (_a = object.vegaAssetId) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseBuiltinAssetWithdrawal() {
    return { vegaAssetId: "", partyId: "", amount: "" };
}
exports.BuiltinAssetWithdrawal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaAssetId !== "") {
            writer.uint32(10).string(message.vegaAssetId);
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
        var message = createBaseBuiltinAssetWithdrawal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaAssetId = reader.string();
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
            vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
            partyId: isSet(object.partyId) ? String(object.partyId) : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaAssetId !== undefined &&
            (obj.vegaAssetId = message.vegaAssetId);
        message.partyId !== undefined && (obj.partyId = message.partyId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseBuiltinAssetWithdrawal();
        message.vegaAssetId = (_a = object.vegaAssetId) !== null && _a !== void 0 ? _a : "";
        message.partyId = (_b = object.partyId) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseBuiltinAssetEvent() {
    return { deposit: undefined, withdrawal: undefined };
}
exports.BuiltinAssetEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.deposit !== undefined) {
            exports.BuiltinAssetDeposit.encode(message.deposit, writer.uint32(8010).fork()).ldelim();
        }
        if (message.withdrawal !== undefined) {
            exports.BuiltinAssetWithdrawal.encode(message.withdrawal, writer.uint32(8018).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBuiltinAssetEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1001:
                    message.deposit = exports.BuiltinAssetDeposit.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.withdrawal = exports.BuiltinAssetWithdrawal.decode(reader, reader.uint32());
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
            deposit: isSet(object.deposit)
                ? exports.BuiltinAssetDeposit.fromJSON(object.deposit)
                : undefined,
            withdrawal: isSet(object.withdrawal)
                ? exports.BuiltinAssetWithdrawal.fromJSON(object.withdrawal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? exports.BuiltinAssetDeposit.toJSON(message.deposit)
                : undefined);
        message.withdrawal !== undefined &&
            (obj.withdrawal = message.withdrawal
                ? exports.BuiltinAssetWithdrawal.toJSON(message.withdrawal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseBuiltinAssetEvent();
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? exports.BuiltinAssetDeposit.fromPartial(object.deposit)
                : undefined;
        message.withdrawal =
            object.withdrawal !== undefined && object.withdrawal !== null
                ? exports.BuiltinAssetWithdrawal.fromPartial(object.withdrawal)
                : undefined;
        return message;
    }
};
function createBaseERC20AssetList() {
    return { vegaAssetId: "" };
}
exports.ERC20AssetList = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaAssetId !== "") {
            writer.uint32(10).string(message.vegaAssetId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20AssetList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaAssetId = reader.string();
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
            vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaAssetId !== undefined &&
            (obj.vegaAssetId = message.vegaAssetId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseERC20AssetList();
        message.vegaAssetId = (_a = object.vegaAssetId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseERC20AssetDelist() {
    return { vegaAssetId: "" };
}
exports.ERC20AssetDelist = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaAssetId !== "") {
            writer.uint32(10).string(message.vegaAssetId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20AssetDelist();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaAssetId = reader.string();
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
            vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaAssetId !== undefined &&
            (obj.vegaAssetId = message.vegaAssetId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseERC20AssetDelist();
        message.vegaAssetId = (_a = object.vegaAssetId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseERC20Deposit() {
    return {
        vegaAssetId: "",
        sourceEthereumAddress: "",
        targetPartyId: "",
        amount: ""
    };
}
exports.ERC20Deposit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaAssetId !== "") {
            writer.uint32(10).string(message.vegaAssetId);
        }
        if (message.sourceEthereumAddress !== "") {
            writer.uint32(18).string(message.sourceEthereumAddress);
        }
        if (message.targetPartyId !== "") {
            writer.uint32(26).string(message.targetPartyId);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20Deposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaAssetId = reader.string();
                    break;
                case 2:
                    message.sourceEthereumAddress = reader.string();
                    break;
                case 3:
                    message.targetPartyId = reader.string();
                    break;
                case 4:
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
            vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
            sourceEthereumAddress: isSet(object.sourceEthereumAddress)
                ? String(object.sourceEthereumAddress)
                : "",
            targetPartyId: isSet(object.targetPartyId)
                ? String(object.targetPartyId)
                : "",
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaAssetId !== undefined &&
            (obj.vegaAssetId = message.vegaAssetId);
        message.sourceEthereumAddress !== undefined &&
            (obj.sourceEthereumAddress = message.sourceEthereumAddress);
        message.targetPartyId !== undefined &&
            (obj.targetPartyId = message.targetPartyId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseERC20Deposit();
        message.vegaAssetId = (_a = object.vegaAssetId) !== null && _a !== void 0 ? _a : "";
        message.sourceEthereumAddress = (_b = object.sourceEthereumAddress) !== null && _b !== void 0 ? _b : "";
        message.targetPartyId = (_c = object.targetPartyId) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseERC20Withdrawal() {
    return { vegaAssetId: "", targetEthereumAddress: "", referenceNonce: "" };
}
exports.ERC20Withdrawal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaAssetId !== "") {
            writer.uint32(10).string(message.vegaAssetId);
        }
        if (message.targetEthereumAddress !== "") {
            writer.uint32(18).string(message.targetEthereumAddress);
        }
        if (message.referenceNonce !== "") {
            writer.uint32(26).string(message.referenceNonce);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20Withdrawal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaAssetId = reader.string();
                    break;
                case 2:
                    message.targetEthereumAddress = reader.string();
                    break;
                case 3:
                    message.referenceNonce = reader.string();
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
            vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
            targetEthereumAddress: isSet(object.targetEthereumAddress)
                ? String(object.targetEthereumAddress)
                : "",
            referenceNonce: isSet(object.referenceNonce)
                ? String(object.referenceNonce)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaAssetId !== undefined &&
            (obj.vegaAssetId = message.vegaAssetId);
        message.targetEthereumAddress !== undefined &&
            (obj.targetEthereumAddress = message.targetEthereumAddress);
        message.referenceNonce !== undefined &&
            (obj.referenceNonce = message.referenceNonce);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseERC20Withdrawal();
        message.vegaAssetId = (_a = object.vegaAssetId) !== null && _a !== void 0 ? _a : "";
        message.targetEthereumAddress = (_b = object.targetEthereumAddress) !== null && _b !== void 0 ? _b : "";
        message.referenceNonce = (_c = object.referenceNonce) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseERC20Event() {
    return {
        index: "0",
        block: "0",
        assetList: undefined,
        assetDelist: undefined,
        deposit: undefined,
        withdrawal: undefined
    };
}
exports.ERC20Event = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.block !== "0") {
            writer.uint32(16).uint64(message.block);
        }
        if (message.assetList !== undefined) {
            exports.ERC20AssetList.encode(message.assetList, writer.uint32(8010).fork()).ldelim();
        }
        if (message.assetDelist !== undefined) {
            exports.ERC20AssetDelist.encode(message.assetDelist, writer.uint32(8018).fork()).ldelim();
        }
        if (message.deposit !== undefined) {
            exports.ERC20Deposit.encode(message.deposit, writer.uint32(8026).fork()).ldelim();
        }
        if (message.withdrawal !== undefined) {
            exports.ERC20Withdrawal.encode(message.withdrawal, writer.uint32(8034).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20Event();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.block = longToString(reader.uint64());
                    break;
                case 1001:
                    message.assetList = exports.ERC20AssetList.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.assetDelist = exports.ERC20AssetDelist.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.deposit = exports.ERC20Deposit.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.withdrawal = exports.ERC20Withdrawal.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? String(object.index) : "0",
            block: isSet(object.block) ? String(object.block) : "0",
            assetList: isSet(object.assetList)
                ? exports.ERC20AssetList.fromJSON(object.assetList)
                : undefined,
            assetDelist: isSet(object.assetDelist)
                ? exports.ERC20AssetDelist.fromJSON(object.assetDelist)
                : undefined,
            deposit: isSet(object.deposit)
                ? exports.ERC20Deposit.fromJSON(object.deposit)
                : undefined,
            withdrawal: isSet(object.withdrawal)
                ? exports.ERC20Withdrawal.fromJSON(object.withdrawal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.block !== undefined && (obj.block = message.block);
        message.assetList !== undefined &&
            (obj.assetList = message.assetList
                ? exports.ERC20AssetList.toJSON(message.assetList)
                : undefined);
        message.assetDelist !== undefined &&
            (obj.assetDelist = message.assetDelist
                ? exports.ERC20AssetDelist.toJSON(message.assetDelist)
                : undefined);
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? exports.ERC20Deposit.toJSON(message.deposit)
                : undefined);
        message.withdrawal !== undefined &&
            (obj.withdrawal = message.withdrawal
                ? exports.ERC20Withdrawal.toJSON(message.withdrawal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseERC20Event();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.block = (_b = object.block) !== null && _b !== void 0 ? _b : "0";
        message.assetList =
            object.assetList !== undefined && object.assetList !== null
                ? exports.ERC20AssetList.fromPartial(object.assetList)
                : undefined;
        message.assetDelist =
            object.assetDelist !== undefined && object.assetDelist !== null
                ? exports.ERC20AssetDelist.fromPartial(object.assetDelist)
                : undefined;
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? exports.ERC20Deposit.fromPartial(object.deposit)
                : undefined;
        message.withdrawal =
            object.withdrawal !== undefined && object.withdrawal !== null
                ? exports.ERC20Withdrawal.fromPartial(object.withdrawal)
                : undefined;
        return message;
    }
};
function createBaseERC20SignerAdded() {
    return { newSigner: "", nonce: "", blockTime: "0" };
}
exports.ERC20SignerAdded = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.newSigner !== "") {
            writer.uint32(10).string(message.newSigner);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.blockTime !== "0") {
            writer.uint32(24).int64(message.blockTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20SignerAdded();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newSigner = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.blockTime = longToString(reader.int64());
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
            newSigner: isSet(object.newSigner) ? String(object.newSigner) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
            blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.newSigner !== undefined && (obj.newSigner = message.newSigner);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseERC20SignerAdded();
        message.newSigner = (_a = object.newSigner) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "";
        message.blockTime = (_c = object.blockTime) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseERC20SignerRemoved() {
    return { oldSigner: "", nonce: "", blockTime: "0" };
}
exports.ERC20SignerRemoved = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.oldSigner !== "") {
            writer.uint32(10).string(message.oldSigner);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.blockTime !== "0") {
            writer.uint32(24).int64(message.blockTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20SignerRemoved();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oldSigner = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.blockTime = longToString(reader.int64());
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
            oldSigner: isSet(object.oldSigner) ? String(object.oldSigner) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
            blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.oldSigner !== undefined && (obj.oldSigner = message.oldSigner);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseERC20SignerRemoved();
        message.oldSigner = (_a = object.oldSigner) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "";
        message.blockTime = (_c = object.blockTime) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseERC20ThresholdSet() {
    return { newThreshold: 0, nonce: "", blockTime: "0" };
}
exports.ERC20ThresholdSet = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.newThreshold !== 0) {
            writer.uint32(8).uint32(message.newThreshold);
        }
        if (message.nonce !== "") {
            writer.uint32(18).string(message.nonce);
        }
        if (message.blockTime !== "0") {
            writer.uint32(24).int64(message.blockTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20ThresholdSet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newThreshold = reader.uint32();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.blockTime = longToString(reader.int64());
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
            newThreshold: isSet(object.newThreshold)
                ? Number(object.newThreshold)
                : 0,
            nonce: isSet(object.nonce) ? String(object.nonce) : "",
            blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.newThreshold !== undefined &&
            (obj.newThreshold = Math.round(message.newThreshold));
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseERC20ThresholdSet();
        message.newThreshold = (_a = object.newThreshold) !== null && _a !== void 0 ? _a : 0;
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "";
        message.blockTime = (_c = object.blockTime) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseERC20MultiSigEvent() {
    return {
        index: "0",
        block: "0",
        signerAdded: undefined,
        signerRemoved: undefined,
        thresholdSet: undefined
    };
}
exports.ERC20MultiSigEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.block !== "0") {
            writer.uint32(16).uint64(message.block);
        }
        if (message.signerAdded !== undefined) {
            exports.ERC20SignerAdded.encode(message.signerAdded, writer.uint32(8010).fork()).ldelim();
        }
        if (message.signerRemoved !== undefined) {
            exports.ERC20SignerRemoved.encode(message.signerRemoved, writer.uint32(8018).fork()).ldelim();
        }
        if (message.thresholdSet !== undefined) {
            exports.ERC20ThresholdSet.encode(message.thresholdSet, writer.uint32(8026).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseERC20MultiSigEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.block = longToString(reader.uint64());
                    break;
                case 1001:
                    message.signerAdded = exports.ERC20SignerAdded.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.signerRemoved = exports.ERC20SignerRemoved.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.thresholdSet = exports.ERC20ThresholdSet.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? String(object.index) : "0",
            block: isSet(object.block) ? String(object.block) : "0",
            signerAdded: isSet(object.signerAdded)
                ? exports.ERC20SignerAdded.fromJSON(object.signerAdded)
                : undefined,
            signerRemoved: isSet(object.signerRemoved)
                ? exports.ERC20SignerRemoved.fromJSON(object.signerRemoved)
                : undefined,
            thresholdSet: isSet(object.thresholdSet)
                ? exports.ERC20ThresholdSet.fromJSON(object.thresholdSet)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.block !== undefined && (obj.block = message.block);
        message.signerAdded !== undefined &&
            (obj.signerAdded = message.signerAdded
                ? exports.ERC20SignerAdded.toJSON(message.signerAdded)
                : undefined);
        message.signerRemoved !== undefined &&
            (obj.signerRemoved = message.signerRemoved
                ? exports.ERC20SignerRemoved.toJSON(message.signerRemoved)
                : undefined);
        message.thresholdSet !== undefined &&
            (obj.thresholdSet = message.thresholdSet
                ? exports.ERC20ThresholdSet.toJSON(message.thresholdSet)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseERC20MultiSigEvent();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.block = (_b = object.block) !== null && _b !== void 0 ? _b : "0";
        message.signerAdded =
            object.signerAdded !== undefined && object.signerAdded !== null
                ? exports.ERC20SignerAdded.fromPartial(object.signerAdded)
                : undefined;
        message.signerRemoved =
            object.signerRemoved !== undefined && object.signerRemoved !== null
                ? exports.ERC20SignerRemoved.fromPartial(object.signerRemoved)
                : undefined;
        message.thresholdSet =
            object.thresholdSet !== undefined && object.thresholdSet !== null
                ? exports.ERC20ThresholdSet.fromPartial(object.thresholdSet)
                : undefined;
        return message;
    }
};
function createBaseStakingEvent() {
    return {
        index: "0",
        block: "0",
        stakeDeposited: undefined,
        stakeRemoved: undefined,
        totalSupply: undefined
    };
}
exports.StakingEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.block !== "0") {
            writer.uint32(16).uint64(message.block);
        }
        if (message.stakeDeposited !== undefined) {
            exports.StakeDeposited.encode(message.stakeDeposited, writer.uint32(8010).fork()).ldelim();
        }
        if (message.stakeRemoved !== undefined) {
            exports.StakeRemoved.encode(message.stakeRemoved, writer.uint32(8018).fork()).ldelim();
        }
        if (message.totalSupply !== undefined) {
            exports.StakeTotalSupply.encode(message.totalSupply, writer.uint32(8026).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.block = longToString(reader.uint64());
                    break;
                case 1001:
                    message.stakeDeposited = exports.StakeDeposited.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.stakeRemoved = exports.StakeRemoved.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.totalSupply = exports.StakeTotalSupply.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? String(object.index) : "0",
            block: isSet(object.block) ? String(object.block) : "0",
            stakeDeposited: isSet(object.stakeDeposited)
                ? exports.StakeDeposited.fromJSON(object.stakeDeposited)
                : undefined,
            stakeRemoved: isSet(object.stakeRemoved)
                ? exports.StakeRemoved.fromJSON(object.stakeRemoved)
                : undefined,
            totalSupply: isSet(object.totalSupply)
                ? exports.StakeTotalSupply.fromJSON(object.totalSupply)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.block !== undefined && (obj.block = message.block);
        message.stakeDeposited !== undefined &&
            (obj.stakeDeposited = message.stakeDeposited
                ? exports.StakeDeposited.toJSON(message.stakeDeposited)
                : undefined);
        message.stakeRemoved !== undefined &&
            (obj.stakeRemoved = message.stakeRemoved
                ? exports.StakeRemoved.toJSON(message.stakeRemoved)
                : undefined);
        message.totalSupply !== undefined &&
            (obj.totalSupply = message.totalSupply
                ? exports.StakeTotalSupply.toJSON(message.totalSupply)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStakingEvent();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.block = (_b = object.block) !== null && _b !== void 0 ? _b : "0";
        message.stakeDeposited =
            object.stakeDeposited !== undefined && object.stakeDeposited !== null
                ? exports.StakeDeposited.fromPartial(object.stakeDeposited)
                : undefined;
        message.stakeRemoved =
            object.stakeRemoved !== undefined && object.stakeRemoved !== null
                ? exports.StakeRemoved.fromPartial(object.stakeRemoved)
                : undefined;
        message.totalSupply =
            object.totalSupply !== undefined && object.totalSupply !== null
                ? exports.StakeTotalSupply.fromPartial(object.totalSupply)
                : undefined;
        return message;
    }
};
function createBaseStakeDeposited() {
    return { ethereumAddress: "", vegaPublicKey: "", amount: "", blockTime: "0" };
}
exports.StakeDeposited = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ethereumAddress !== "") {
            writer.uint32(10).string(message.ethereumAddress);
        }
        if (message.vegaPublicKey !== "") {
            writer.uint32(18).string(message.vegaPublicKey);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.blockTime !== "0") {
            writer.uint32(32).int64(message.blockTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakeDeposited();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethereumAddress = reader.string();
                    break;
                case 2:
                    message.vegaPublicKey = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.blockTime = longToString(reader.int64());
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
            ethereumAddress: isSet(object.ethereumAddress)
                ? String(object.ethereumAddress)
                : "",
            vegaPublicKey: isSet(object.vegaPublicKey)
                ? String(object.vegaPublicKey)
                : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ethereumAddress !== undefined &&
            (obj.ethereumAddress = message.ethereumAddress);
        message.vegaPublicKey !== undefined &&
            (obj.vegaPublicKey = message.vegaPublicKey);
        message.amount !== undefined && (obj.amount = message.amount);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStakeDeposited();
        message.ethereumAddress = (_a = object.ethereumAddress) !== null && _a !== void 0 ? _a : "";
        message.vegaPublicKey = (_b = object.vegaPublicKey) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.blockTime = (_d = object.blockTime) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseStakeRemoved() {
    return { ethereumAddress: "", vegaPublicKey: "", amount: "", blockTime: "0" };
}
exports.StakeRemoved = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.ethereumAddress !== "") {
            writer.uint32(10).string(message.ethereumAddress);
        }
        if (message.vegaPublicKey !== "") {
            writer.uint32(18).string(message.vegaPublicKey);
        }
        if (message.amount !== "") {
            writer.uint32(26).string(message.amount);
        }
        if (message.blockTime !== "0") {
            writer.uint32(32).int64(message.blockTime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakeRemoved();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ethereumAddress = reader.string();
                    break;
                case 2:
                    message.vegaPublicKey = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.blockTime = longToString(reader.int64());
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
            ethereumAddress: isSet(object.ethereumAddress)
                ? String(object.ethereumAddress)
                : "",
            vegaPublicKey: isSet(object.vegaPublicKey)
                ? String(object.vegaPublicKey)
                : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.ethereumAddress !== undefined &&
            (obj.ethereumAddress = message.ethereumAddress);
        message.vegaPublicKey !== undefined &&
            (obj.vegaPublicKey = message.vegaPublicKey);
        message.amount !== undefined && (obj.amount = message.amount);
        message.blockTime !== undefined && (obj.blockTime = message.blockTime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStakeRemoved();
        message.ethereumAddress = (_a = object.ethereumAddress) !== null && _a !== void 0 ? _a : "";
        message.vegaPublicKey = (_b = object.vegaPublicKey) !== null && _b !== void 0 ? _b : "";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "";
        message.blockTime = (_d = object.blockTime) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseStakeTotalSupply() {
    return { tokenAddress: "", totalSupply: "" };
}
exports.StakeTotalSupply = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tokenAddress !== "") {
            writer.uint32(10).string(message.tokenAddress);
        }
        if (message.totalSupply !== "") {
            writer.uint32(18).string(message.totalSupply);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakeTotalSupply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenAddress = reader.string();
                    break;
                case 2:
                    message.totalSupply = reader.string();
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
            tokenAddress: isSet(object.tokenAddress)
                ? String(object.tokenAddress)
                : "",
            totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tokenAddress !== undefined &&
            (obj.tokenAddress = message.tokenAddress);
        message.totalSupply !== undefined &&
            (obj.totalSupply = message.totalSupply);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStakeTotalSupply();
        message.tokenAddress = (_a = object.tokenAddress) !== null && _a !== void 0 ? _a : "";
        message.totalSupply = (_b = object.totalSupply) !== null && _b !== void 0 ? _b : "";
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
