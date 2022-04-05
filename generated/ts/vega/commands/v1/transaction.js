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
exports.ProofOfWork = exports.Transaction = exports.InputData = exports.protobufPackage = void 0;
/* eslint-disable */
var Long = require("long");
var _m0 = require("protobufjs/minimal");
var commands_1 = require("../../../vega/commands/v1/commands");
var validator_commands_1 = require("../../../vega/commands/v1/validator_commands");
var oracles_1 = require("../../../vega/commands/v1/oracles");
var signature_1 = require("../../../vega/commands/v1/signature");
exports.protobufPackage = "vega.commands.v1";
function createBaseInputData() {
    return {
        nonce: "0",
        blockHeight: "0",
        orderSubmission: undefined,
        orderCancellation: undefined,
        orderAmendment: undefined,
        withdrawSubmission: undefined,
        proposalSubmission: undefined,
        voteSubmission: undefined,
        liquidityProvisionSubmission: undefined,
        delegateSubmission: undefined,
        undelegateSubmission: undefined,
        liquidityProvisionCancellation: undefined,
        liquidityProvisionAmendment: undefined,
        transfer: undefined,
        cancelTransfer: undefined,
        announceNode: undefined,
        nodeVote: undefined,
        nodeSignature: undefined,
        chainEvent: undefined,
        keyRotateSubmission: undefined,
        stateVariableProposal: undefined,
        validatorHeartbeat: undefined,
        ethereumKeyRotateSubmission: undefined,
        oracleDataSubmission: undefined,
        restoreSnapshotSubmission: undefined
    };
}
exports.InputData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.nonce !== "0") {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.blockHeight !== "0") {
            writer.uint32(16).uint64(message.blockHeight);
        }
        if (message.orderSubmission !== undefined) {
            commands_1.OrderSubmission.encode(message.orderSubmission, writer.uint32(8010).fork()).ldelim();
        }
        if (message.orderCancellation !== undefined) {
            commands_1.OrderCancellation.encode(message.orderCancellation, writer.uint32(8018).fork()).ldelim();
        }
        if (message.orderAmendment !== undefined) {
            commands_1.OrderAmendment.encode(message.orderAmendment, writer.uint32(8026).fork()).ldelim();
        }
        if (message.withdrawSubmission !== undefined) {
            commands_1.WithdrawSubmission.encode(message.withdrawSubmission, writer.uint32(8034).fork()).ldelim();
        }
        if (message.proposalSubmission !== undefined) {
            commands_1.ProposalSubmission.encode(message.proposalSubmission, writer.uint32(8042).fork()).ldelim();
        }
        if (message.voteSubmission !== undefined) {
            commands_1.VoteSubmission.encode(message.voteSubmission, writer.uint32(8050).fork()).ldelim();
        }
        if (message.liquidityProvisionSubmission !== undefined) {
            commands_1.LiquidityProvisionSubmission.encode(message.liquidityProvisionSubmission, writer.uint32(8058).fork()).ldelim();
        }
        if (message.delegateSubmission !== undefined) {
            commands_1.DelegateSubmission.encode(message.delegateSubmission, writer.uint32(8066).fork()).ldelim();
        }
        if (message.undelegateSubmission !== undefined) {
            commands_1.UndelegateSubmission.encode(message.undelegateSubmission, writer.uint32(8074).fork()).ldelim();
        }
        if (message.liquidityProvisionCancellation !== undefined) {
            commands_1.LiquidityProvisionCancellation.encode(message.liquidityProvisionCancellation, writer.uint32(8082).fork()).ldelim();
        }
        if (message.liquidityProvisionAmendment !== undefined) {
            commands_1.LiquidityProvisionAmendment.encode(message.liquidityProvisionAmendment, writer.uint32(8090).fork()).ldelim();
        }
        if (message.transfer !== undefined) {
            commands_1.Transfer.encode(message.transfer, writer.uint32(8098).fork()).ldelim();
        }
        if (message.cancelTransfer !== undefined) {
            commands_1.CancelTransfer.encode(message.cancelTransfer, writer.uint32(8106).fork()).ldelim();
        }
        if (message.announceNode !== undefined) {
            validator_commands_1.AnnounceNode.encode(message.announceNode, writer.uint32(8114).fork()).ldelim();
        }
        if (message.nodeVote !== undefined) {
            validator_commands_1.NodeVote.encode(message.nodeVote, writer.uint32(16018).fork()).ldelim();
        }
        if (message.nodeSignature !== undefined) {
            validator_commands_1.NodeSignature.encode(message.nodeSignature, writer.uint32(16026).fork()).ldelim();
        }
        if (message.chainEvent !== undefined) {
            validator_commands_1.ChainEvent.encode(message.chainEvent, writer.uint32(16034).fork()).ldelim();
        }
        if (message.keyRotateSubmission !== undefined) {
            validator_commands_1.KeyRotateSubmission.encode(message.keyRotateSubmission, writer.uint32(16042).fork()).ldelim();
        }
        if (message.stateVariableProposal !== undefined) {
            validator_commands_1.StateVariableProposal.encode(message.stateVariableProposal, writer.uint32(16050).fork()).ldelim();
        }
        if (message.validatorHeartbeat !== undefined) {
            validator_commands_1.ValidatorHeartbeat.encode(message.validatorHeartbeat, writer.uint32(16058).fork()).ldelim();
        }
        if (message.ethereumKeyRotateSubmission !== undefined) {
            validator_commands_1.EthereumKeyRotateSubmission.encode(message.ethereumKeyRotateSubmission, writer.uint32(16066).fork()).ldelim();
        }
        if (message.oracleDataSubmission !== undefined) {
            oracles_1.OracleDataSubmission.encode(message.oracleDataSubmission, writer.uint32(24010).fork()).ldelim();
        }
        if (message.restoreSnapshotSubmission !== undefined) {
            commands_1.RestoreSnapshot.encode(message.restoreSnapshotSubmission, writer.uint32(32010).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseInputData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToString(reader.uint64());
                    break;
                case 2:
                    message.blockHeight = longToString(reader.uint64());
                    break;
                case 1001:
                    message.orderSubmission = commands_1.OrderSubmission.decode(reader, reader.uint32());
                    break;
                case 1002:
                    message.orderCancellation = commands_1.OrderCancellation.decode(reader, reader.uint32());
                    break;
                case 1003:
                    message.orderAmendment = commands_1.OrderAmendment.decode(reader, reader.uint32());
                    break;
                case 1004:
                    message.withdrawSubmission = commands_1.WithdrawSubmission.decode(reader, reader.uint32());
                    break;
                case 1005:
                    message.proposalSubmission = commands_1.ProposalSubmission.decode(reader, reader.uint32());
                    break;
                case 1006:
                    message.voteSubmission = commands_1.VoteSubmission.decode(reader, reader.uint32());
                    break;
                case 1007:
                    message.liquidityProvisionSubmission =
                        commands_1.LiquidityProvisionSubmission.decode(reader, reader.uint32());
                    break;
                case 1008:
                    message.delegateSubmission = commands_1.DelegateSubmission.decode(reader, reader.uint32());
                    break;
                case 1009:
                    message.undelegateSubmission = commands_1.UndelegateSubmission.decode(reader, reader.uint32());
                    break;
                case 1010:
                    message.liquidityProvisionCancellation =
                        commands_1.LiquidityProvisionCancellation.decode(reader, reader.uint32());
                    break;
                case 1011:
                    message.liquidityProvisionAmendment =
                        commands_1.LiquidityProvisionAmendment.decode(reader, reader.uint32());
                    break;
                case 1012:
                    message.transfer = commands_1.Transfer.decode(reader, reader.uint32());
                    break;
                case 1013:
                    message.cancelTransfer = commands_1.CancelTransfer.decode(reader, reader.uint32());
                    break;
                case 1014:
                    message.announceNode = validator_commands_1.AnnounceNode.decode(reader, reader.uint32());
                    break;
                case 2002:
                    message.nodeVote = validator_commands_1.NodeVote.decode(reader, reader.uint32());
                    break;
                case 2003:
                    message.nodeSignature = validator_commands_1.NodeSignature.decode(reader, reader.uint32());
                    break;
                case 2004:
                    message.chainEvent = validator_commands_1.ChainEvent.decode(reader, reader.uint32());
                    break;
                case 2005:
                    message.keyRotateSubmission = validator_commands_1.KeyRotateSubmission.decode(reader, reader.uint32());
                    break;
                case 2006:
                    message.stateVariableProposal = validator_commands_1.StateVariableProposal.decode(reader, reader.uint32());
                    break;
                case 2007:
                    message.validatorHeartbeat = validator_commands_1.ValidatorHeartbeat.decode(reader, reader.uint32());
                    break;
                case 2008:
                    message.ethereumKeyRotateSubmission =
                        validator_commands_1.EthereumKeyRotateSubmission.decode(reader, reader.uint32());
                    break;
                case 3001:
                    message.oracleDataSubmission = oracles_1.OracleDataSubmission.decode(reader, reader.uint32());
                    break;
                case 4001:
                    message.restoreSnapshotSubmission = commands_1.RestoreSnapshot.decode(reader, reader.uint32());
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
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
            orderSubmission: isSet(object.orderSubmission)
                ? commands_1.OrderSubmission.fromJSON(object.orderSubmission)
                : undefined,
            orderCancellation: isSet(object.orderCancellation)
                ? commands_1.OrderCancellation.fromJSON(object.orderCancellation)
                : undefined,
            orderAmendment: isSet(object.orderAmendment)
                ? commands_1.OrderAmendment.fromJSON(object.orderAmendment)
                : undefined,
            withdrawSubmission: isSet(object.withdrawSubmission)
                ? commands_1.WithdrawSubmission.fromJSON(object.withdrawSubmission)
                : undefined,
            proposalSubmission: isSet(object.proposalSubmission)
                ? commands_1.ProposalSubmission.fromJSON(object.proposalSubmission)
                : undefined,
            voteSubmission: isSet(object.voteSubmission)
                ? commands_1.VoteSubmission.fromJSON(object.voteSubmission)
                : undefined,
            liquidityProvisionSubmission: isSet(object.liquidityProvisionSubmission)
                ? commands_1.LiquidityProvisionSubmission.fromJSON(object.liquidityProvisionSubmission)
                : undefined,
            delegateSubmission: isSet(object.delegateSubmission)
                ? commands_1.DelegateSubmission.fromJSON(object.delegateSubmission)
                : undefined,
            undelegateSubmission: isSet(object.undelegateSubmission)
                ? commands_1.UndelegateSubmission.fromJSON(object.undelegateSubmission)
                : undefined,
            liquidityProvisionCancellation: isSet(object.liquidityProvisionCancellation)
                ? commands_1.LiquidityProvisionCancellation.fromJSON(object.liquidityProvisionCancellation)
                : undefined,
            liquidityProvisionAmendment: isSet(object.liquidityProvisionAmendment)
                ? commands_1.LiquidityProvisionAmendment.fromJSON(object.liquidityProvisionAmendment)
                : undefined,
            transfer: isSet(object.transfer)
                ? commands_1.Transfer.fromJSON(object.transfer)
                : undefined,
            cancelTransfer: isSet(object.cancelTransfer)
                ? commands_1.CancelTransfer.fromJSON(object.cancelTransfer)
                : undefined,
            announceNode: isSet(object.announceNode)
                ? validator_commands_1.AnnounceNode.fromJSON(object.announceNode)
                : undefined,
            nodeVote: isSet(object.nodeVote)
                ? validator_commands_1.NodeVote.fromJSON(object.nodeVote)
                : undefined,
            nodeSignature: isSet(object.nodeSignature)
                ? validator_commands_1.NodeSignature.fromJSON(object.nodeSignature)
                : undefined,
            chainEvent: isSet(object.chainEvent)
                ? validator_commands_1.ChainEvent.fromJSON(object.chainEvent)
                : undefined,
            keyRotateSubmission: isSet(object.keyRotateSubmission)
                ? validator_commands_1.KeyRotateSubmission.fromJSON(object.keyRotateSubmission)
                : undefined,
            stateVariableProposal: isSet(object.stateVariableProposal)
                ? validator_commands_1.StateVariableProposal.fromJSON(object.stateVariableProposal)
                : undefined,
            validatorHeartbeat: isSet(object.validatorHeartbeat)
                ? validator_commands_1.ValidatorHeartbeat.fromJSON(object.validatorHeartbeat)
                : undefined,
            ethereumKeyRotateSubmission: isSet(object.ethereumKeyRotateSubmission)
                ? validator_commands_1.EthereumKeyRotateSubmission.fromJSON(object.ethereumKeyRotateSubmission)
                : undefined,
            oracleDataSubmission: isSet(object.oracleDataSubmission)
                ? oracles_1.OracleDataSubmission.fromJSON(object.oracleDataSubmission)
                : undefined,
            restoreSnapshotSubmission: isSet(object.restoreSnapshotSubmission)
                ? commands_1.RestoreSnapshot.fromJSON(object.restoreSnapshotSubmission)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.blockHeight !== undefined &&
            (obj.blockHeight = message.blockHeight);
        message.orderSubmission !== undefined &&
            (obj.orderSubmission = message.orderSubmission
                ? commands_1.OrderSubmission.toJSON(message.orderSubmission)
                : undefined);
        message.orderCancellation !== undefined &&
            (obj.orderCancellation = message.orderCancellation
                ? commands_1.OrderCancellation.toJSON(message.orderCancellation)
                : undefined);
        message.orderAmendment !== undefined &&
            (obj.orderAmendment = message.orderAmendment
                ? commands_1.OrderAmendment.toJSON(message.orderAmendment)
                : undefined);
        message.withdrawSubmission !== undefined &&
            (obj.withdrawSubmission = message.withdrawSubmission
                ? commands_1.WithdrawSubmission.toJSON(message.withdrawSubmission)
                : undefined);
        message.proposalSubmission !== undefined &&
            (obj.proposalSubmission = message.proposalSubmission
                ? commands_1.ProposalSubmission.toJSON(message.proposalSubmission)
                : undefined);
        message.voteSubmission !== undefined &&
            (obj.voteSubmission = message.voteSubmission
                ? commands_1.VoteSubmission.toJSON(message.voteSubmission)
                : undefined);
        message.liquidityProvisionSubmission !== undefined &&
            (obj.liquidityProvisionSubmission = message.liquidityProvisionSubmission
                ? commands_1.LiquidityProvisionSubmission.toJSON(message.liquidityProvisionSubmission)
                : undefined);
        message.delegateSubmission !== undefined &&
            (obj.delegateSubmission = message.delegateSubmission
                ? commands_1.DelegateSubmission.toJSON(message.delegateSubmission)
                : undefined);
        message.undelegateSubmission !== undefined &&
            (obj.undelegateSubmission = message.undelegateSubmission
                ? commands_1.UndelegateSubmission.toJSON(message.undelegateSubmission)
                : undefined);
        message.liquidityProvisionCancellation !== undefined &&
            (obj.liquidityProvisionCancellation =
                message.liquidityProvisionCancellation
                    ? commands_1.LiquidityProvisionCancellation.toJSON(message.liquidityProvisionCancellation)
                    : undefined);
        message.liquidityProvisionAmendment !== undefined &&
            (obj.liquidityProvisionAmendment = message.liquidityProvisionAmendment
                ? commands_1.LiquidityProvisionAmendment.toJSON(message.liquidityProvisionAmendment)
                : undefined);
        message.transfer !== undefined &&
            (obj.transfer = message.transfer
                ? commands_1.Transfer.toJSON(message.transfer)
                : undefined);
        message.cancelTransfer !== undefined &&
            (obj.cancelTransfer = message.cancelTransfer
                ? commands_1.CancelTransfer.toJSON(message.cancelTransfer)
                : undefined);
        message.announceNode !== undefined &&
            (obj.announceNode = message.announceNode
                ? validator_commands_1.AnnounceNode.toJSON(message.announceNode)
                : undefined);
        message.nodeVote !== undefined &&
            (obj.nodeVote = message.nodeVote
                ? validator_commands_1.NodeVote.toJSON(message.nodeVote)
                : undefined);
        message.nodeSignature !== undefined &&
            (obj.nodeSignature = message.nodeSignature
                ? validator_commands_1.NodeSignature.toJSON(message.nodeSignature)
                : undefined);
        message.chainEvent !== undefined &&
            (obj.chainEvent = message.chainEvent
                ? validator_commands_1.ChainEvent.toJSON(message.chainEvent)
                : undefined);
        message.keyRotateSubmission !== undefined &&
            (obj.keyRotateSubmission = message.keyRotateSubmission
                ? validator_commands_1.KeyRotateSubmission.toJSON(message.keyRotateSubmission)
                : undefined);
        message.stateVariableProposal !== undefined &&
            (obj.stateVariableProposal = message.stateVariableProposal
                ? validator_commands_1.StateVariableProposal.toJSON(message.stateVariableProposal)
                : undefined);
        message.validatorHeartbeat !== undefined &&
            (obj.validatorHeartbeat = message.validatorHeartbeat
                ? validator_commands_1.ValidatorHeartbeat.toJSON(message.validatorHeartbeat)
                : undefined);
        message.ethereumKeyRotateSubmission !== undefined &&
            (obj.ethereumKeyRotateSubmission = message.ethereumKeyRotateSubmission
                ? validator_commands_1.EthereumKeyRotateSubmission.toJSON(message.ethereumKeyRotateSubmission)
                : undefined);
        message.oracleDataSubmission !== undefined &&
            (obj.oracleDataSubmission = message.oracleDataSubmission
                ? oracles_1.OracleDataSubmission.toJSON(message.oracleDataSubmission)
                : undefined);
        message.restoreSnapshotSubmission !== undefined &&
            (obj.restoreSnapshotSubmission = message.restoreSnapshotSubmission
                ? commands_1.RestoreSnapshot.toJSON(message.restoreSnapshotSubmission)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseInputData();
        message.nonce = (_a = object.nonce) !== null && _a !== void 0 ? _a : "0";
        message.blockHeight = (_b = object.blockHeight) !== null && _b !== void 0 ? _b : "0";
        message.orderSubmission =
            object.orderSubmission !== undefined && object.orderSubmission !== null
                ? commands_1.OrderSubmission.fromPartial(object.orderSubmission)
                : undefined;
        message.orderCancellation =
            object.orderCancellation !== undefined &&
                object.orderCancellation !== null
                ? commands_1.OrderCancellation.fromPartial(object.orderCancellation)
                : undefined;
        message.orderAmendment =
            object.orderAmendment !== undefined && object.orderAmendment !== null
                ? commands_1.OrderAmendment.fromPartial(object.orderAmendment)
                : undefined;
        message.withdrawSubmission =
            object.withdrawSubmission !== undefined &&
                object.withdrawSubmission !== null
                ? commands_1.WithdrawSubmission.fromPartial(object.withdrawSubmission)
                : undefined;
        message.proposalSubmission =
            object.proposalSubmission !== undefined &&
                object.proposalSubmission !== null
                ? commands_1.ProposalSubmission.fromPartial(object.proposalSubmission)
                : undefined;
        message.voteSubmission =
            object.voteSubmission !== undefined && object.voteSubmission !== null
                ? commands_1.VoteSubmission.fromPartial(object.voteSubmission)
                : undefined;
        message.liquidityProvisionSubmission =
            object.liquidityProvisionSubmission !== undefined &&
                object.liquidityProvisionSubmission !== null
                ? commands_1.LiquidityProvisionSubmission.fromPartial(object.liquidityProvisionSubmission)
                : undefined;
        message.delegateSubmission =
            object.delegateSubmission !== undefined &&
                object.delegateSubmission !== null
                ? commands_1.DelegateSubmission.fromPartial(object.delegateSubmission)
                : undefined;
        message.undelegateSubmission =
            object.undelegateSubmission !== undefined &&
                object.undelegateSubmission !== null
                ? commands_1.UndelegateSubmission.fromPartial(object.undelegateSubmission)
                : undefined;
        message.liquidityProvisionCancellation =
            object.liquidityProvisionCancellation !== undefined &&
                object.liquidityProvisionCancellation !== null
                ? commands_1.LiquidityProvisionCancellation.fromPartial(object.liquidityProvisionCancellation)
                : undefined;
        message.liquidityProvisionAmendment =
            object.liquidityProvisionAmendment !== undefined &&
                object.liquidityProvisionAmendment !== null
                ? commands_1.LiquidityProvisionAmendment.fromPartial(object.liquidityProvisionAmendment)
                : undefined;
        message.transfer =
            object.transfer !== undefined && object.transfer !== null
                ? commands_1.Transfer.fromPartial(object.transfer)
                : undefined;
        message.cancelTransfer =
            object.cancelTransfer !== undefined && object.cancelTransfer !== null
                ? commands_1.CancelTransfer.fromPartial(object.cancelTransfer)
                : undefined;
        message.announceNode =
            object.announceNode !== undefined && object.announceNode !== null
                ? validator_commands_1.AnnounceNode.fromPartial(object.announceNode)
                : undefined;
        message.nodeVote =
            object.nodeVote !== undefined && object.nodeVote !== null
                ? validator_commands_1.NodeVote.fromPartial(object.nodeVote)
                : undefined;
        message.nodeSignature =
            object.nodeSignature !== undefined && object.nodeSignature !== null
                ? validator_commands_1.NodeSignature.fromPartial(object.nodeSignature)
                : undefined;
        message.chainEvent =
            object.chainEvent !== undefined && object.chainEvent !== null
                ? validator_commands_1.ChainEvent.fromPartial(object.chainEvent)
                : undefined;
        message.keyRotateSubmission =
            object.keyRotateSubmission !== undefined &&
                object.keyRotateSubmission !== null
                ? validator_commands_1.KeyRotateSubmission.fromPartial(object.keyRotateSubmission)
                : undefined;
        message.stateVariableProposal =
            object.stateVariableProposal !== undefined &&
                object.stateVariableProposal !== null
                ? validator_commands_1.StateVariableProposal.fromPartial(object.stateVariableProposal)
                : undefined;
        message.validatorHeartbeat =
            object.validatorHeartbeat !== undefined &&
                object.validatorHeartbeat !== null
                ? validator_commands_1.ValidatorHeartbeat.fromPartial(object.validatorHeartbeat)
                : undefined;
        message.ethereumKeyRotateSubmission =
            object.ethereumKeyRotateSubmission !== undefined &&
                object.ethereumKeyRotateSubmission !== null
                ? validator_commands_1.EthereumKeyRotateSubmission.fromPartial(object.ethereumKeyRotateSubmission)
                : undefined;
        message.oracleDataSubmission =
            object.oracleDataSubmission !== undefined &&
                object.oracleDataSubmission !== null
                ? oracles_1.OracleDataSubmission.fromPartial(object.oracleDataSubmission)
                : undefined;
        message.restoreSnapshotSubmission =
            object.restoreSnapshotSubmission !== undefined &&
                object.restoreSnapshotSubmission !== null
                ? commands_1.RestoreSnapshot.fromPartial(object.restoreSnapshotSubmission)
                : undefined;
        return message;
    }
};
function createBaseTransaction() {
    return {
        inputData: new Uint8Array(),
        signature: undefined,
        address: undefined,
        pubKey: undefined,
        version: 0,
        pow: undefined
    };
}
exports.Transaction = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.inputData.length !== 0) {
            writer.uint32(10).bytes(message.inputData);
        }
        if (message.signature !== undefined) {
            signature_1.Signature.encode(message.signature, writer.uint32(18).fork()).ldelim();
        }
        if (message.address !== undefined) {
            writer.uint32(8010).string(message.address);
        }
        if (message.pubKey !== undefined) {
            writer.uint32(8018).string(message.pubKey);
        }
        if (message.version !== 0) {
            writer.uint32(16000).uint32(message.version);
        }
        if (message.pow !== undefined) {
            exports.ProofOfWork.encode(message.pow, writer.uint32(24002).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTransaction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputData = reader.bytes();
                    break;
                case 2:
                    message.signature = signature_1.Signature.decode(reader, reader.uint32());
                    break;
                case 1001:
                    message.address = reader.string();
                    break;
                case 1002:
                    message.pubKey = reader.string();
                    break;
                case 2000:
                    message.version = reader.uint32();
                    break;
                case 3000:
                    message.pow = exports.ProofOfWork.decode(reader, reader.uint32());
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
            inputData: isSet(object.inputData)
                ? bytesFromBase64(object.inputData)
                : new Uint8Array(),
            signature: isSet(object.signature)
                ? signature_1.Signature.fromJSON(object.signature)
                : undefined,
            address: isSet(object.address) ? String(object.address) : undefined,
            pubKey: isSet(object.pubKey) ? String(object.pubKey) : undefined,
            version: isSet(object.version) ? Number(object.version) : 0,
            pow: isSet(object.pow) ? exports.ProofOfWork.fromJSON(object.pow) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.inputData !== undefined &&
            (obj.inputData = base64FromBytes(message.inputData !== undefined ? message.inputData : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = message.signature
                ? signature_1.Signature.toJSON(message.signature)
                : undefined);
        message.address !== undefined && (obj.address = message.address);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        message.version !== undefined &&
            (obj.version = Math.round(message.version));
        message.pow !== undefined &&
            (obj.pow = message.pow ? exports.ProofOfWork.toJSON(message.pow) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTransaction();
        message.inputData = (_a = object.inputData) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.signature =
            object.signature !== undefined && object.signature !== null
                ? signature_1.Signature.fromPartial(object.signature)
                : undefined;
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : undefined;
        message.pubKey = (_c = object.pubKey) !== null && _c !== void 0 ? _c : undefined;
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : 0;
        message.pow =
            object.pow !== undefined && object.pow !== null
                ? exports.ProofOfWork.fromPartial(object.pow)
                : undefined;
        return message;
    }
};
function createBaseProofOfWork() {
    return { tid: "", nonce: "0", hashFunction: "" };
}
exports.ProofOfWork = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.tid !== "") {
            writer.uint32(10).string(message.tid);
        }
        if (message.nonce !== "0") {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.hashFunction !== "") {
            writer.uint32(26).string(message.hashFunction);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProofOfWork();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tid = reader.string();
                    break;
                case 2:
                    message.nonce = longToString(reader.uint64());
                    break;
                case 3:
                    message.hashFunction = reader.string();
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
            tid: isSet(object.tid) ? String(object.tid) : "",
            nonce: isSet(object.nonce) ? String(object.nonce) : "0",
            hashFunction: isSet(object.hashFunction)
                ? String(object.hashFunction)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.tid !== undefined && (obj.tid = message.tid);
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.hashFunction !== undefined &&
            (obj.hashFunction = message.hashFunction);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProofOfWork();
        message.tid = (_a = object.tid) !== null && _a !== void 0 ? _a : "";
        message.nonce = (_b = object.nonce) !== null && _b !== void 0 ? _b : "0";
        message.hashFunction = (_c = object.hashFunction) !== null && _c !== void 0 ? _c : "";
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
