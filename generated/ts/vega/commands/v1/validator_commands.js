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
exports.StateVariableProposal = exports.EthereumKeyRotateSubmission = exports.KeyRotateSubmission = exports.ChainEvent = exports.NodeSignature = exports.NodeVote = exports.AnnounceNode = exports.ValidatorHeartbeat = exports.nodeSignatureKindToJSON = exports.nodeSignatureKindFromJSON = exports.NodeSignatureKind = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var signature_1 = require("../../../vega/commands/v1/signature");
var chain_events_1 = require("../../../vega/chain_events");
var vega_1 = require("../../../vega/vega");
exports.protobufPackage = "vega.commands.v1";
/** The kind of the signature created by a node, for example, allow-listing a new asset, withdrawal etc */
var NodeSignatureKind;
(function (NodeSignatureKind) {
    /** NODE_SIGNATURE_KIND_UNSPECIFIED - Represents an unspecified or missing value from the input */
    NodeSignatureKind[NodeSignatureKind["NODE_SIGNATURE_KIND_UNSPECIFIED"] = 0] = "NODE_SIGNATURE_KIND_UNSPECIFIED";
    /** NODE_SIGNATURE_KIND_ASSET_NEW - Represents a signature for a new asset allow-listing */
    NodeSignatureKind[NodeSignatureKind["NODE_SIGNATURE_KIND_ASSET_NEW"] = 1] = "NODE_SIGNATURE_KIND_ASSET_NEW";
    /** NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL - Represents a signature for an asset withdrawal */
    NodeSignatureKind[NodeSignatureKind["NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL"] = 2] = "NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL";
    /** NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED - Represents a signature for a new signer added to the erc20 multisig contract */
    NodeSignatureKind[NodeSignatureKind["NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED"] = 3] = "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED";
    /** NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED - Represents a signature for a signer removed from the erc20 multisig contract */
    NodeSignatureKind[NodeSignatureKind["NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED"] = 4] = "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED";
    NodeSignatureKind[NodeSignatureKind["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NodeSignatureKind = exports.NodeSignatureKind || (exports.NodeSignatureKind = {}));
function nodeSignatureKindFromJSON(object) {
    switch (object) {
        case 0:
        case "NODE_SIGNATURE_KIND_UNSPECIFIED":
            return NodeSignatureKind.NODE_SIGNATURE_KIND_UNSPECIFIED;
        case 1:
        case "NODE_SIGNATURE_KIND_ASSET_NEW":
            return NodeSignatureKind.NODE_SIGNATURE_KIND_ASSET_NEW;
        case 2:
        case "NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL":
            return NodeSignatureKind.NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL;
        case 3:
        case "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED":
            return NodeSignatureKind.NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED;
        case 4:
        case "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED":
            return NodeSignatureKind.NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NodeSignatureKind.UNRECOGNIZED;
    }
}
exports.nodeSignatureKindFromJSON = nodeSignatureKindFromJSON;
function nodeSignatureKindToJSON(object) {
    switch (object) {
        case NodeSignatureKind.NODE_SIGNATURE_KIND_UNSPECIFIED:
            return "NODE_SIGNATURE_KIND_UNSPECIFIED";
        case NodeSignatureKind.NODE_SIGNATURE_KIND_ASSET_NEW:
            return "NODE_SIGNATURE_KIND_ASSET_NEW";
        case NodeSignatureKind.NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL:
            return "NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL";
        case NodeSignatureKind.NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED:
            return "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED";
        case NodeSignatureKind.NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED:
            return "NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED";
        default:
            return "UNKNOWN";
    }
}
exports.nodeSignatureKindToJSON = nodeSignatureKindToJSON;
function createBaseValidatorHeartbeat() {
    return { nodeId: "", ethereumSignature: undefined, vegaSignature: undefined };
}
exports.ValidatorHeartbeat = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.nodeId !== "") {
            writer.uint32(10).string(message.nodeId);
        }
        if (message.ethereumSignature !== undefined) {
            signature_1.Signature.encode(message.ethereumSignature, writer.uint32(18).fork()).ldelim();
        }
        if (message.vegaSignature !== undefined) {
            signature_1.Signature.encode(message.vegaSignature, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseValidatorHeartbeat();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodeId = reader.string();
                    break;
                case 2:
                    message.ethereumSignature = signature_1.Signature.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.vegaSignature = signature_1.Signature.decode(reader, reader.uint32());
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
            ethereumSignature: isSet(object.ethereumSignature)
                ? signature_1.Signature.fromJSON(object.ethereumSignature)
                : undefined,
            vegaSignature: isSet(object.vegaSignature)
                ? signature_1.Signature.fromJSON(object.vegaSignature)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.ethereumSignature !== undefined &&
            (obj.ethereumSignature = message.ethereumSignature
                ? signature_1.Signature.toJSON(message.ethereumSignature)
                : undefined);
        message.vegaSignature !== undefined &&
            (obj.vegaSignature = message.vegaSignature
                ? signature_1.Signature.toJSON(message.vegaSignature)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseValidatorHeartbeat();
        message.nodeId = (_a = object.nodeId) !== null && _a !== void 0 ? _a : "";
        message.ethereumSignature =
            object.ethereumSignature !== undefined &&
                object.ethereumSignature !== null
                ? signature_1.Signature.fromPartial(object.ethereumSignature)
                : undefined;
        message.vegaSignature =
            object.vegaSignature !== undefined && object.vegaSignature !== null
                ? signature_1.Signature.fromPartial(object.vegaSignature)
                : undefined;
        return message;
    }
};
function createBaseAnnounceNode() {
    return {
        vegaPubKey: "",
        ethereumAddress: "",
        chainPubKey: "",
        infoUrl: "",
        country: "",
        id: "",
        name: "",
        avatarUrl: "",
        vegaPubKeyIndex: 0,
        fromEpoch: "0",
        ethereumSignature: undefined,
        vegaSignature: undefined
    };
}
exports.AnnounceNode = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vegaPubKey !== "") {
            writer.uint32(10).string(message.vegaPubKey);
        }
        if (message.ethereumAddress !== "") {
            writer.uint32(18).string(message.ethereumAddress);
        }
        if (message.chainPubKey !== "") {
            writer.uint32(26).string(message.chainPubKey);
        }
        if (message.infoUrl !== "") {
            writer.uint32(34).string(message.infoUrl);
        }
        if (message.country !== "") {
            writer.uint32(42).string(message.country);
        }
        if (message.id !== "") {
            writer.uint32(50).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(58).string(message.name);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(66).string(message.avatarUrl);
        }
        if (message.vegaPubKeyIndex !== 0) {
            writer.uint32(72).uint32(message.vegaPubKeyIndex);
        }
        if (message.fromEpoch !== "0") {
            writer.uint32(80).uint64(message.fromEpoch);
        }
        if (message.ethereumSignature !== undefined) {
            signature_1.Signature.encode(message.ethereumSignature, writer.uint32(90).fork()).ldelim();
        }
        if (message.vegaSignature !== undefined) {
            signature_1.Signature.encode(message.vegaSignature, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAnnounceNode();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vegaPubKey = reader.string();
                    break;
                case 2:
                    message.ethereumAddress = reader.string();
                    break;
                case 3:
                    message.chainPubKey = reader.string();
                    break;
                case 4:
                    message.infoUrl = reader.string();
                    break;
                case 5:
                    message.country = reader.string();
                    break;
                case 6:
                    message.id = reader.string();
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                case 8:
                    message.avatarUrl = reader.string();
                    break;
                case 9:
                    message.vegaPubKeyIndex = reader.uint32();
                    break;
                case 10:
                    message.fromEpoch = longToString(reader.uint64());
                    break;
                case 11:
                    message.ethereumSignature = signature_1.Signature.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.vegaSignature = signature_1.Signature.decode(reader, reader.uint32());
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
            vegaPubKey: isSet(object.vegaPubKey) ? String(object.vegaPubKey) : "",
            ethereumAddress: isSet(object.ethereumAddress)
                ? String(object.ethereumAddress)
                : "",
            chainPubKey: isSet(object.chainPubKey) ? String(object.chainPubKey) : "",
            infoUrl: isSet(object.infoUrl) ? String(object.infoUrl) : "",
            country: isSet(object.country) ? String(object.country) : "",
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
            vegaPubKeyIndex: isSet(object.vegaPubKeyIndex)
                ? Number(object.vegaPubKeyIndex)
                : 0,
            fromEpoch: isSet(object.fromEpoch) ? String(object.fromEpoch) : "0",
            ethereumSignature: isSet(object.ethereumSignature)
                ? signature_1.Signature.fromJSON(object.ethereumSignature)
                : undefined,
            vegaSignature: isSet(object.vegaSignature)
                ? signature_1.Signature.fromJSON(object.vegaSignature)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vegaPubKey !== undefined && (obj.vegaPubKey = message.vegaPubKey);
        message.ethereumAddress !== undefined &&
            (obj.ethereumAddress = message.ethereumAddress);
        message.chainPubKey !== undefined &&
            (obj.chainPubKey = message.chainPubKey);
        message.infoUrl !== undefined && (obj.infoUrl = message.infoUrl);
        message.country !== undefined && (obj.country = message.country);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        message.vegaPubKeyIndex !== undefined &&
            (obj.vegaPubKeyIndex = Math.round(message.vegaPubKeyIndex));
        message.fromEpoch !== undefined && (obj.fromEpoch = message.fromEpoch);
        message.ethereumSignature !== undefined &&
            (obj.ethereumSignature = message.ethereumSignature
                ? signature_1.Signature.toJSON(message.ethereumSignature)
                : undefined);
        message.vegaSignature !== undefined &&
            (obj.vegaSignature = message.vegaSignature
                ? signature_1.Signature.toJSON(message.vegaSignature)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseAnnounceNode();
        message.vegaPubKey = (_a = object.vegaPubKey) !== null && _a !== void 0 ? _a : "";
        message.ethereumAddress = (_b = object.ethereumAddress) !== null && _b !== void 0 ? _b : "";
        message.chainPubKey = (_c = object.chainPubKey) !== null && _c !== void 0 ? _c : "";
        message.infoUrl = (_d = object.infoUrl) !== null && _d !== void 0 ? _d : "";
        message.country = (_e = object.country) !== null && _e !== void 0 ? _e : "";
        message.id = (_f = object.id) !== null && _f !== void 0 ? _f : "";
        message.name = (_g = object.name) !== null && _g !== void 0 ? _g : "";
        message.avatarUrl = (_h = object.avatarUrl) !== null && _h !== void 0 ? _h : "";
        message.vegaPubKeyIndex = (_j = object.vegaPubKeyIndex) !== null && _j !== void 0 ? _j : 0;
        message.fromEpoch = (_k = object.fromEpoch) !== null && _k !== void 0 ? _k : "0";
        message.ethereumSignature =
            object.ethereumSignature !== undefined &&
                object.ethereumSignature !== null
                ? signature_1.Signature.fromPartial(object.ethereumSignature)
                : undefined;
        message.vegaSignature =
            object.vegaSignature !== undefined && object.vegaSignature !== null
                ? signature_1.Signature.fromPartial(object.vegaSignature)
                : undefined;
        return message;
    }
};
function createBaseNodeVote() {
    return { reference: "" };
}
exports.NodeVote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.reference !== "") {
            writer.uint32(18).string(message.reference);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
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
            reference: isSet(object.reference) ? String(object.reference) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.reference !== undefined && (obj.reference = message.reference);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseNodeVote();
        message.reference = (_a = object.reference) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseNodeSignature() {
    return { id: "", sig: new Uint8Array(), kind: 0 };
}
exports.NodeSignature = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sig.length !== 0) {
            writer.uint32(18).bytes(message.sig);
        }
        if (message.kind !== 0) {
            writer.uint32(24).int32(message.kind);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseNodeSignature();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sig = reader.bytes();
                    break;
                case 3:
                    message.kind = reader.int32();
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
            sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
            kind: isSet(object.kind) ? nodeSignatureKindFromJSON(object.kind) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.sig !== undefined &&
            (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
        message.kind !== undefined &&
            (obj.kind = nodeSignatureKindToJSON(message.kind));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseNodeSignature();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.sig = (_b = object.sig) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.kind = (_c = object.kind) !== null && _c !== void 0 ? _c : 0;
        return message;
    }
};
function createBaseChainEvent() {
    return {
        txId: "",
        nonce: "0",
        builtin: undefined,
        erc20: undefined,
        stakingEvent: undefined,
        erc20Multisig: undefined
    };
}
exports.ChainEvent = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.txId !== "") {
            writer.uint32(10).string(message.txId);
        }
        if (message.nonce !== "0") {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.builtin !== undefined) {
            chain_events_1.BuiltinAssetEvent.encode(message.builtin, writer.uint32(8010).fork()).ldelim();
        }
        if (message.erc20 !== undefined) {
            chain_events_1.ERC20Event.encode(message.erc20, writer.uint32(8018).fork()).ldelim();
        }
        if (message.stakingEvent !== undefined) {
            chain_events_1.StakingEvent.encode(message.stakingEvent, writer.uint32(8042).fork()).ldelim();
        }
        if (message.erc20Multisig !== undefined) {
            chain_events_1.ERC20MultiSigEvent.encode(message.erc20Multisig, writer.uint32(8050).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseChainEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.string();
                    break;
                case 2:
                    message.nonce = longToString(reader.uint64());
                    break;
                case 1001:
                    message.builtin = chain_events_1.BuiltinAssetEvent.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.erc20 = chain_events_1.ERC20Event.decode(reader, reader.uint32());
                    break;
                case 1005:
                    message.stakingEvent = chain_events_1.StakingEvent.decode(reader, reader.uint32());
                    break;
                case 1006:
                    message.erc20Multisig = chain_events_1.ERC20MultiSigEvent.decode(reader, reader.uint32());
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
            txId: isSet(object.txId) ? String(object.txId) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            builtin: isSet(object.builtin)
                ? chain_events_1.BuiltinAssetEvent.fromJSON(object.builtin)
                : undefined,
            erc20: isSet(object.erc20)
                ? chain_events_1.ERC20Event.fromJSON(object.erc20)
                : undefined,
            stakingEvent: isSet(object.stakingEvent)
                ? chain_events_1.StakingEvent.fromJSON(object.stakingEvent)
                : undefined,
            erc20Multisig: isSet(object.erc20Multisig)
                ? chain_events_1.ERC20MultiSigEvent.fromJSON(object.erc20Multisig)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.txId !== undefined && (obj.txId = message.txId);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.builtin !== undefined &&
            (obj.builtin = message.builtin
                ? chain_events_1.BuiltinAssetEvent.toJSON(message.builtin)
                : undefined);
        message.erc20 !== undefined &&
            (obj.erc20 = message.erc20
                ? chain_events_1.ERC20Event.toJSON(message.erc20)
                : undefined);
        message.stakingEvent !== undefined &&
            (obj.stakingEvent = message.stakingEvent
                ? chain_events_1.StakingEvent.toJSON(message.stakingEvent)
                : undefined);
        message.erc20Multisig !== undefined &&
            (obj.erc20Multisig = message.erc20Multisig
                ? chain_events_1.ERC20MultiSigEvent.toJSON(message.erc20Multisig)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseChainEvent();
        message.txId = (_a = object.txId) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "0";
        message.builtin =
            object.builtin !== undefined && object.builtin !== null
                ? chain_events_1.BuiltinAssetEvent.fromPartial(object.builtin)
                : undefined;
        message.erc20 =
            object.erc20 !== undefined && object.erc20 !== null
                ? chain_events_1.ERC20Event.fromPartial(object.erc20)
                : undefined;
        message.stakingEvent =
            object.stakingEvent !== undefined && object.stakingEvent !== null
                ? chain_events_1.StakingEvent.fromPartial(object.stakingEvent)
                : undefined;
        message.erc20Multisig =
            object.erc20Multisig !== undefined && object.erc20Multisig !== null
                ? chain_events_1.ERC20MultiSigEvent.fromPartial(object.erc20Multisig)
                : undefined;
        return message;
    }
};
function createBaseKeyRotateSubmission() {
    return {
        newPubKeyIndex: 0,
        targetBlock: "0",
        newPubKey: "",
        currentPubKeyHash: ""
    };
}
exports.KeyRotateSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.newPubKeyIndex !== 0) {
            writer.uint32(8).uint32(message.newPubKeyIndex);
        }
        if (message.targetBlock !== "0") {
            writer.uint32(16).uint64(message.targetBlock);
        }
        if (message.newPubKey !== "") {
            writer.uint32(26).string(message.newPubKey);
        }
        if (message.currentPubKeyHash !== "") {
            writer.uint32(34).string(message.currentPubKeyHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseKeyRotateSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPubKeyIndex = reader.uint32();
                    break;
                case 2:
                    message.targetBlock = longToString(reader.uint64());
                    break;
                case 3:
                    message.newPubKey = reader.string();
                    break;
                case 4:
                    message.currentPubKeyHash = reader.string();
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
            newPubKeyIndex: isSet(object.newPubKeyIndex)
                ? Number(object.newPubKeyIndex)
                : 0,
            targetBlock: isSet(object.targetBlock) ? String(object.targetBlock) : "0",
            newPubKey: isSet(object.newPubKey) ? String(object.newPubKey) : "",
            currentPubKeyHash: isSet(object.currentPubKeyHash)
                ? String(object.currentPubKeyHash)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.newPubKeyIndex !== undefined &&
            (obj.newPubKeyIndex = Math.round(message.newPubKeyIndex));
        message.targetBlock !== undefined &&
            (obj.targetBlock = message.targetBlock);
        message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey);
        message.currentPubKeyHash !== undefined &&
            (obj.currentPubKeyHash = message.currentPubKeyHash);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseKeyRotateSubmission();
        message.newPubKeyIndex = (_a = object.newPubKeyIndex) !== null && _a !== void 0 ? _a : 0;
        message.targetBlock = (_b = object.targetBlock) !== null && _b !== void 0 ? _b : "0";
        message.newPubKey = (_c = object.newPubKey) !== null && _c !== void 0 ? _c : "";
        message.currentPubKeyHash = (_d = object.currentPubKeyHash) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseEthereumKeyRotateSubmission() {
    return { targetBlock: "0", newAddress: "", currentAddress: "" };
}
exports.EthereumKeyRotateSubmission = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.targetBlock !== "0") {
            writer.uint32(8).uint64(message.targetBlock);
        }
        if (message.newAddress !== "") {
            writer.uint32(18).string(message.newAddress);
        }
        if (message.currentAddress !== "") {
            writer.uint32(26).string(message.currentAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseEthereumKeyRotateSubmission();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.targetBlock = longToString(reader.uint64());
                    break;
                case 2:
                    message.newAddress = reader.string();
                    break;
                case 3:
                    message.currentAddress = reader.string();
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
            targetBlock: isSet(object.targetBlock) ? String(object.targetBlock) : "0",
            newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
            currentAddress: isSet(object.currentAddress)
                ? String(object.currentAddress)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.targetBlock !== undefined &&
            (obj.targetBlock = message.targetBlock);
        message.newAddress !== undefined && (obj.newAddress = message.newAddress);
        message.currentAddress !== undefined &&
            (obj.currentAddress = message.currentAddress);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseEthereumKeyRotateSubmission();
        message.targetBlock = (_a = object.targetBlock) !== null && _a !== void 0 ? _a : "0";
        message.newAddress = (_b = object.newAddress) !== null && _b !== void 0 ? _b : "";
        message.currentAddress = (_c = object.currentAddress) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseStateVariableProposal() {
    return { proposal: undefined };
}
exports.StateVariableProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            vega_1.StateValueProposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStateVariableProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = vega_1.StateValueProposal.decode(reader, reader.uint32());
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
                ? vega_1.StateValueProposal.fromJSON(object.proposal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? vega_1.StateValueProposal.toJSON(message.proposal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseStateVariableProposal();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? vega_1.StateValueProposal.fromPartial(object.proposal)
                : undefined;
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
