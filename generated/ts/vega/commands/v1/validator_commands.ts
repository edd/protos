/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Signature } from "../../../vega/commands/v1/signature";
import {
  BuiltinAssetEvent,
  ERC20Event,
  StakingEvent,
  ERC20MultiSigEvent,
} from "../../../vega/chain_events";
import { StateValueProposal } from "../../../vega/vega";

export const protobufPackage = "vega.commands.v1";

/** The kind of the signature created by a node, for example, allow-listing a new asset, withdrawal etc */
export enum NodeSignatureKind {
  /** NODE_SIGNATURE_KIND_UNSPECIFIED - Represents an unspecified or missing value from the input */
  NODE_SIGNATURE_KIND_UNSPECIFIED = 0,
  /** NODE_SIGNATURE_KIND_ASSET_NEW - Represents a signature for a new asset allow-listing */
  NODE_SIGNATURE_KIND_ASSET_NEW = 1,
  /** NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL - Represents a signature for an asset withdrawal */
  NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL = 2,
  /** NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED - Represents a signature for a new signer added to the erc20 multisig contract */
  NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_ADDED = 3,
  /** NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED - Represents a signature for a signer removed from the erc20 multisig contract */
  NODE_SIGNATURE_KIND_ERC20_MULTISIG_SIGNER_REMOVED = 4,
  UNRECOGNIZED = -1,
}

export function nodeSignatureKindFromJSON(object: any): NodeSignatureKind {
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

export function nodeSignatureKindToJSON(object: NodeSignatureKind): string {
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

/**
 * A message from a validator signaling they are still online and validating blocks
 * or ready to validate block when they are till a potential validator
 */
export interface ValidatorHeartbeat {
  /** the id of the node emitting the heartbeat */
  nodeId: string;
  /** Signature from the validator made using the ethereum wallet */
  ethereumSignature: Signature | undefined;
  /** Signature from the validator made using the vega wallet */
  vegaSignature: Signature | undefined;
}

/** Used announce a node as a new potential validator */
export interface AnnounceNode {
  /** Vega public key, required field */
  vegaPubKey: string;
  /** Ethereum public key, required field */
  ethereumAddress: string;
  /** Public key for the blockchain, required field */
  chainPubKey: string;
  /** URL with more info on the node */
  infoUrl: string;
  /** Country code (ISO 3166-1 alpha-2) for the location of the node */
  country: string;
  /** ID of the validator, (public master key) */
  id: string;
  /** Name of the validator */
  name: string;
  /** AvatarURL of the validator */
  avatarUrl: string;
  /** Vega public key derivation index */
  vegaPubKeyIndex: number;
  /**
   * The epoch from which the validator is expected
   * to be ready to validate blocks
   */
  fromEpoch: string;
  /** Signature from the validator made using the ethereum wallet */
  ethereumSignature: Signature | undefined;
  /** Signature from the validator made using the vega wallet */
  vegaSignature: Signature | undefined;
}

/**
 * Used when a node votes for validating a given resource exists or is valid,
 * for example, an ERC20 deposit is valid and exists on ethereum
 */
export interface NodeVote {
  /** Reference, required field */
  reference: string;
}

/** Represents a signature from a validator, to be used by a foreign chain in order to recognise a decision taken by the Vega network */
export interface NodeSignature {
  /** The identifier of the resource being signed */
  id: string;
  /** The signature */
  sig: Uint8Array;
  /** The kind of resource being signed */
  kind: NodeSignatureKind;
}

/** An event forwarded to the Vega network to provide information on events happening on other networks */
export interface ChainEvent {
  /** The identifier of the transaction in which the events happened, usually a hash */
  txId: string;
  /** Arbitrary one-time integer used to prevent replay attacks */
  nonce: string;
  /** Built-in asset event */
  builtin: BuiltinAssetEvent | undefined;
  /** Ethereum ERC20 event */
  erc20: ERC20Event | undefined;
  /** Ethereum Staking event */
  stakingEvent: StakingEvent | undefined;
  /** Ethereum ERC20 multisig event */
  erc20Multisig: ERC20MultiSigEvent | undefined;
}

/** A transaction to allow validator to rotate their vega keys */
export interface KeyRotateSubmission {
  /** New Vega public key derivation index */
  newPubKeyIndex: number;
  /** Target block at which the key rotation will take effect on */
  targetBlock: string;
  /** The new public key to rotate to */
  newPubKey: string;
  /** Hash of currently used public key */
  currentPubKeyHash: string;
}

/** A transaction to allow validator to rotate their ethereum keys */
export interface EthereumKeyRotateSubmission {
  /** Target block at which the key rotation will take effect on */
  targetBlock: string;
  /** The new adress to rotate to */
  newAddress: string;
  /** Currently used public address */
  currentAddress: string;
}

export interface StateVariableProposal {
  /** The state value proposal details */
  proposal: StateValueProposal | undefined;
}

function createBaseValidatorHeartbeat(): ValidatorHeartbeat {
  return { nodeId: "", ethereumSignature: undefined, vegaSignature: undefined };
}

export const ValidatorHeartbeat = {
  encode(
    message: ValidatorHeartbeat,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nodeId !== "") {
      writer.uint32(10).string(message.nodeId);
    }
    if (message.ethereumSignature !== undefined) {
      Signature.encode(
        message.ethereumSignature,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.vegaSignature !== undefined) {
      Signature.encode(
        message.vegaSignature,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHeartbeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHeartbeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeId = reader.string();
          break;
        case 2:
          message.ethereumSignature = Signature.decode(reader, reader.uint32());
          break;
        case 3:
          message.vegaSignature = Signature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorHeartbeat {
    return {
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      ethereumSignature: isSet(object.ethereumSignature)
        ? Signature.fromJSON(object.ethereumSignature)
        : undefined,
      vegaSignature: isSet(object.vegaSignature)
        ? Signature.fromJSON(object.vegaSignature)
        : undefined,
    };
  },

  toJSON(message: ValidatorHeartbeat): unknown {
    const obj: any = {};
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.ethereumSignature !== undefined &&
      (obj.ethereumSignature = message.ethereumSignature
        ? Signature.toJSON(message.ethereumSignature)
        : undefined);
    message.vegaSignature !== undefined &&
      (obj.vegaSignature = message.vegaSignature
        ? Signature.toJSON(message.vegaSignature)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorHeartbeat>, I>>(
    object: I
  ): ValidatorHeartbeat {
    const message = createBaseValidatorHeartbeat();
    message.nodeId = object.nodeId ?? "";
    message.ethereumSignature =
      object.ethereumSignature !== undefined &&
      object.ethereumSignature !== null
        ? Signature.fromPartial(object.ethereumSignature)
        : undefined;
    message.vegaSignature =
      object.vegaSignature !== undefined && object.vegaSignature !== null
        ? Signature.fromPartial(object.vegaSignature)
        : undefined;
    return message;
  },
};

function createBaseAnnounceNode(): AnnounceNode {
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
    vegaSignature: undefined,
  };
}

export const AnnounceNode = {
  encode(
    message: AnnounceNode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Signature.encode(
        message.ethereumSignature,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.vegaSignature !== undefined) {
      Signature.encode(
        message.vegaSignature,
        writer.uint32(98).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnnounceNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnnounceNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.fromEpoch = longToString(reader.uint64() as Long);
          break;
        case 11:
          message.ethereumSignature = Signature.decode(reader, reader.uint32());
          break;
        case 12:
          message.vegaSignature = Signature.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnnounceNode {
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
        ? Signature.fromJSON(object.ethereumSignature)
        : undefined,
      vegaSignature: isSet(object.vegaSignature)
        ? Signature.fromJSON(object.vegaSignature)
        : undefined,
    };
  },

  toJSON(message: AnnounceNode): unknown {
    const obj: any = {};
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
        ? Signature.toJSON(message.ethereumSignature)
        : undefined);
    message.vegaSignature !== undefined &&
      (obj.vegaSignature = message.vegaSignature
        ? Signature.toJSON(message.vegaSignature)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AnnounceNode>, I>>(
    object: I
  ): AnnounceNode {
    const message = createBaseAnnounceNode();
    message.vegaPubKey = object.vegaPubKey ?? "";
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.chainPubKey = object.chainPubKey ?? "";
    message.infoUrl = object.infoUrl ?? "";
    message.country = object.country ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.vegaPubKeyIndex = object.vegaPubKeyIndex ?? 0;
    message.fromEpoch = object.fromEpoch ?? "0";
    message.ethereumSignature =
      object.ethereumSignature !== undefined &&
      object.ethereumSignature !== null
        ? Signature.fromPartial(object.ethereumSignature)
        : undefined;
    message.vegaSignature =
      object.vegaSignature !== undefined && object.vegaSignature !== null
        ? Signature.fromPartial(object.vegaSignature)
        : undefined;
    return message;
  },
};

function createBaseNodeVote(): NodeVote {
  return { reference: "" };
}

export const NodeVote = {
  encode(
    message: NodeVote,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.reference !== "") {
      writer.uint32(18).string(message.reference);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): NodeVote {
    return {
      reference: isSet(object.reference) ? String(object.reference) : "",
    };
  },

  toJSON(message: NodeVote): unknown {
    const obj: any = {};
    message.reference !== undefined && (obj.reference = message.reference);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeVote>, I>>(object: I): NodeVote {
    const message = createBaseNodeVote();
    message.reference = object.reference ?? "";
    return message;
  },
};

function createBaseNodeSignature(): NodeSignature {
  return { id: "", sig: new Uint8Array(), kind: 0 };
}

export const NodeSignature = {
  encode(
    message: NodeSignature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeSignature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        case 3:
          message.kind = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeSignature {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
      kind: isSet(object.kind) ? nodeSignatureKindFromJSON(object.kind) : 0,
    };
  },

  toJSON(message: NodeSignature): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.sig !== undefined &&
      (obj.sig = base64FromBytes(
        message.sig !== undefined ? message.sig : new Uint8Array()
      ));
    message.kind !== undefined &&
      (obj.kind = nodeSignatureKindToJSON(message.kind));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NodeSignature>, I>>(
    object: I
  ): NodeSignature {
    const message = createBaseNodeSignature();
    message.id = object.id ?? "";
    message.sig = object.sig ?? new Uint8Array();
    message.kind = object.kind ?? 0;
    return message;
  },
};

function createBaseChainEvent(): ChainEvent {
  return {
    txId: "",
    nonce: "0",
    builtin: undefined,
    erc20: undefined,
    stakingEvent: undefined,
    erc20Multisig: undefined,
  };
}

export const ChainEvent = {
  encode(
    message: ChainEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.txId !== "") {
      writer.uint32(10).string(message.txId);
    }
    if (message.nonce !== "0") {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.builtin !== undefined) {
      BuiltinAssetEvent.encode(
        message.builtin,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    if (message.erc20 !== undefined) {
      ERC20Event.encode(message.erc20, writer.uint32(8018).fork()).ldelim();
    }
    if (message.stakingEvent !== undefined) {
      StakingEvent.encode(
        message.stakingEvent,
        writer.uint32(8042).fork()
      ).ldelim();
    }
    if (message.erc20Multisig !== undefined) {
      ERC20MultiSigEvent.encode(
        message.erc20Multisig,
        writer.uint32(8050).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.string();
          break;
        case 2:
          message.nonce = longToString(reader.uint64() as Long);
          break;
        case 1001:
          message.builtin = BuiltinAssetEvent.decode(reader, reader.uint32());
          break;
        case 1002:
          message.erc20 = ERC20Event.decode(reader, reader.uint32());
          break;
        case 1005:
          message.stakingEvent = StakingEvent.decode(reader, reader.uint32());
          break;
        case 1006:
          message.erc20Multisig = ERC20MultiSigEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChainEvent {
    return {
      txId: isSet(object.txId) ? String(object.txId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "0",
      builtin: isSet(object.builtin)
        ? BuiltinAssetEvent.fromJSON(object.builtin)
        : undefined,
      erc20: isSet(object.erc20)
        ? ERC20Event.fromJSON(object.erc20)
        : undefined,
      stakingEvent: isSet(object.stakingEvent)
        ? StakingEvent.fromJSON(object.stakingEvent)
        : undefined,
      erc20Multisig: isSet(object.erc20Multisig)
        ? ERC20MultiSigEvent.fromJSON(object.erc20Multisig)
        : undefined,
    };
  },

  toJSON(message: ChainEvent): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = message.txId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.builtin !== undefined &&
      (obj.builtin = message.builtin
        ? BuiltinAssetEvent.toJSON(message.builtin)
        : undefined);
    message.erc20 !== undefined &&
      (obj.erc20 = message.erc20
        ? ERC20Event.toJSON(message.erc20)
        : undefined);
    message.stakingEvent !== undefined &&
      (obj.stakingEvent = message.stakingEvent
        ? StakingEvent.toJSON(message.stakingEvent)
        : undefined);
    message.erc20Multisig !== undefined &&
      (obj.erc20Multisig = message.erc20Multisig
        ? ERC20MultiSigEvent.toJSON(message.erc20Multisig)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChainEvent>, I>>(
    object: I
  ): ChainEvent {
    const message = createBaseChainEvent();
    message.txId = object.txId ?? "";
    message.nonce = object.nonce ?? "0";
    message.builtin =
      object.builtin !== undefined && object.builtin !== null
        ? BuiltinAssetEvent.fromPartial(object.builtin)
        : undefined;
    message.erc20 =
      object.erc20 !== undefined && object.erc20 !== null
        ? ERC20Event.fromPartial(object.erc20)
        : undefined;
    message.stakingEvent =
      object.stakingEvent !== undefined && object.stakingEvent !== null
        ? StakingEvent.fromPartial(object.stakingEvent)
        : undefined;
    message.erc20Multisig =
      object.erc20Multisig !== undefined && object.erc20Multisig !== null
        ? ERC20MultiSigEvent.fromPartial(object.erc20Multisig)
        : undefined;
    return message;
  },
};

function createBaseKeyRotateSubmission(): KeyRotateSubmission {
  return {
    newPubKeyIndex: 0,
    targetBlock: "0",
    newPubKey: "",
    currentPubKeyHash: "",
  };
}

export const KeyRotateSubmission = {
  encode(
    message: KeyRotateSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyRotateSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyRotateSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKeyIndex = reader.uint32();
          break;
        case 2:
          message.targetBlock = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): KeyRotateSubmission {
    return {
      newPubKeyIndex: isSet(object.newPubKeyIndex)
        ? Number(object.newPubKeyIndex)
        : 0,
      targetBlock: isSet(object.targetBlock) ? String(object.targetBlock) : "0",
      newPubKey: isSet(object.newPubKey) ? String(object.newPubKey) : "",
      currentPubKeyHash: isSet(object.currentPubKeyHash)
        ? String(object.currentPubKeyHash)
        : "",
    };
  },

  toJSON(message: KeyRotateSubmission): unknown {
    const obj: any = {};
    message.newPubKeyIndex !== undefined &&
      (obj.newPubKeyIndex = Math.round(message.newPubKeyIndex));
    message.targetBlock !== undefined &&
      (obj.targetBlock = message.targetBlock);
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey);
    message.currentPubKeyHash !== undefined &&
      (obj.currentPubKeyHash = message.currentPubKeyHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyRotateSubmission>, I>>(
    object: I
  ): KeyRotateSubmission {
    const message = createBaseKeyRotateSubmission();
    message.newPubKeyIndex = object.newPubKeyIndex ?? 0;
    message.targetBlock = object.targetBlock ?? "0";
    message.newPubKey = object.newPubKey ?? "";
    message.currentPubKeyHash = object.currentPubKeyHash ?? "";
    return message;
  },
};

function createBaseEthereumKeyRotateSubmission(): EthereumKeyRotateSubmission {
  return { targetBlock: "0", newAddress: "", currentAddress: "" };
}

export const EthereumKeyRotateSubmission = {
  encode(
    message: EthereumKeyRotateSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EthereumKeyRotateSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEthereumKeyRotateSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targetBlock = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): EthereumKeyRotateSubmission {
    return {
      targetBlock: isSet(object.targetBlock) ? String(object.targetBlock) : "0",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
      currentAddress: isSet(object.currentAddress)
        ? String(object.currentAddress)
        : "",
    };
  },

  toJSON(message: EthereumKeyRotateSubmission): unknown {
    const obj: any = {};
    message.targetBlock !== undefined &&
      (obj.targetBlock = message.targetBlock);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    message.currentAddress !== undefined &&
      (obj.currentAddress = message.currentAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EthereumKeyRotateSubmission>, I>>(
    object: I
  ): EthereumKeyRotateSubmission {
    const message = createBaseEthereumKeyRotateSubmission();
    message.targetBlock = object.targetBlock ?? "0";
    message.newAddress = object.newAddress ?? "";
    message.currentAddress = object.currentAddress ?? "";
    return message;
  },
};

function createBaseStateVariableProposal(): StateVariableProposal {
  return { proposal: undefined };
}

export const StateVariableProposal = {
  encode(
    message: StateVariableProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      StateValueProposal.encode(
        message.proposal,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StateVariableProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateVariableProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = StateValueProposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateVariableProposal {
    return {
      proposal: isSet(object.proposal)
        ? StateValueProposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: StateVariableProposal): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? StateValueProposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StateVariableProposal>, I>>(
    object: I
  ): StateVariableProposal {
    const message = createBaseStateVariableProposal();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? StateValueProposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToString(long: Long) {
  return long.toString();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
