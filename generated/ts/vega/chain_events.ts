/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "vega";

/** A deposit for a Vega built-in asset */
export interface BuiltinAssetDeposit {
  /** A Vega network internal asset identifier */
  vegaAssetId: string;
  /** A Vega party identifier (pub-key) */
  partyId: string;
  /** The amount to be deposited */
  amount: string;
}

/** A withdrawal for a Vega built-in asset */
export interface BuiltinAssetWithdrawal {
  /** A Vega network internal asset identifier */
  vegaAssetId: string;
  /** A Vega network party identifier (pub-key) */
  partyId: string;
  /** The amount to be withdrawn */
  amount: string;
}

/** An event related to a Vega built-in asset */
export interface BuiltinAssetEvent {
  /** Built-in asset deposit */
  deposit: BuiltinAssetDeposit | undefined;
  /** Built-in asset withdrawal */
  withdrawal: BuiltinAssetWithdrawal | undefined;
}

/** An asset allow-listing for an ERC20 token */
export interface ERC20AssetList {
  /** The Vega network internal identifier of the asset */
  vegaAssetId: string;
}

/** An asset deny-listing for an ERC20 token */
export interface ERC20AssetDelist {
  /** The Vega network internal identifier of the asset */
  vegaAssetId: string;
}

/** An asset deposit for an ERC20 token */
export interface ERC20Deposit {
  /** The vega network internal identifier of the asset */
  vegaAssetId: string;
  /** The Ethereum wallet that initiated the deposit */
  sourceEthereumAddress: string;
  /** The Vega party identifier (pub-key) which is the target of the deposit */
  targetPartyId: string;
  /** The amount to be deposited */
  amount: string;
}

/** An asset withdrawal for an ERC20 token */
export interface ERC20Withdrawal {
  /** The Vega network internal identifier of the asset */
  vegaAssetId: string;
  /** The target Ethereum wallet address */
  targetEthereumAddress: string;
  /** The reference nonce used for the transaction */
  referenceNonce: string;
}

/** An event related to an ERC20 token */
export interface ERC20Event {
  /** Index of the log in the transaction */
  index: string;
  /** The block in which the transaction was added */
  block: string;
  /** List an ERC20 asset */
  assetList: ERC20AssetList | undefined;
  /** De-list an ERC20 asset */
  assetDelist: ERC20AssetDelist | undefined;
  /** Deposit ERC20 asset */
  deposit: ERC20Deposit | undefined;
  /** Withdraw ERC20 asset */
  withdrawal: ERC20Withdrawal | undefined;
}

/** A new signer added to the ERC20 bridge */
export interface ERC20SignerAdded {
  /** The ethereum address of the new signer */
  newSigner: string;
  /** The nonce create by the vega network used for this new signer */
  nonce: string;
  /**
   * The time at which the block was produced
   * will be used to inform the core at what time
   * the stake was made unavailable.
   */
  blockTime: string;
}

/** A signer removed from the ERC20 bridge */
export interface ERC20SignerRemoved {
  /** The ethereum address of the old signer */
  oldSigner: string;
  /** The nonce create by the vega network used for this old signer */
  nonce: string;
  /**
   * The time at which the block was produced
   * will be used to inform the core at what time
   * the stake was made unavailable.
   */
  blockTime: string;
}

/** The threshold have been updated on the multisigcontrol */
export interface ERC20ThresholdSet {
  /** The new threshold */
  newThreshold: number;
  /** The nonce create by the vega network */
  nonce: string;
  /**
   * The time at which the block was produced
   * will be used to inform the core at what time
   * the stake was made unavailable.
   */
  blockTime: string;
}

/** An event related to the ERC20 MultiSig */
export interface ERC20MultiSigEvent {
  /** Index of the log in the transaction */
  index: string;
  /** The block in which the transaction was added */
  block: string;
  /** Add a signer to the erc20 bridge */
  signerAdded: ERC20SignerAdded | undefined;
  /** Remove a signer from the erc20 bridge */
  signerRemoved: ERC20SignerRemoved | undefined;
  /** Threshold set */
  thresholdSet: ERC20ThresholdSet | undefined;
}

export interface StakingEvent {
  /** Index of the log in the transaction */
  index: string;
  /** The block in which the transaction was added */
  block: string;
  stakeDeposited: StakeDeposited | undefined;
  stakeRemoved: StakeRemoved | undefined;
  totalSupply: StakeTotalSupply | undefined;
}

export interface StakeDeposited {
  /** Ethereum Address of the user depositing stake (hex encode with 0x prefix) */
  ethereumAddress: string;
  /** The public of the party receiving the stake deposit (hex encode) */
  vegaPublicKey: string;
  /** The amount deposited (base 10) */
  amount: string;
  /**
   * The time at which the block was produced
   * will be used to inform the core at what time
   * the stake started to be available.
   */
  blockTime: string;
}

export interface StakeRemoved {
  /** Ethereum address of the user removing stake (hex encode with 0x prefix) */
  ethereumAddress: string;
  /** The public key of the party from which to remove stake (hex encode) */
  vegaPublicKey: string;
  /** The amount removed (base 10) */
  amount: string;
  /**
   * The time at which the block was produced
   * will be used to inform the core at what time
   * the stake was made unavailable.
   */
  blockTime: string;
}

export interface StakeTotalSupply {
  /** The address of the staking asset */
  tokenAddress: string;
  /** The total supply observed for the token */
  totalSupply: string;
}

function createBaseBuiltinAssetDeposit(): BuiltinAssetDeposit {
  return { vegaAssetId: "", partyId: "", amount: "" };
}

export const BuiltinAssetDeposit = {
  encode(
    message: BuiltinAssetDeposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BuiltinAssetDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuiltinAssetDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): BuiltinAssetDeposit {
    return {
      vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: BuiltinAssetDeposit): unknown {
    const obj: any = {};
    message.vegaAssetId !== undefined &&
      (obj.vegaAssetId = message.vegaAssetId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuiltinAssetDeposit>, I>>(
    object: I
  ): BuiltinAssetDeposit {
    const message = createBaseBuiltinAssetDeposit();
    message.vegaAssetId = object.vegaAssetId ?? "";
    message.partyId = object.partyId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseBuiltinAssetWithdrawal(): BuiltinAssetWithdrawal {
  return { vegaAssetId: "", partyId: "", amount: "" };
}

export const BuiltinAssetWithdrawal = {
  encode(
    message: BuiltinAssetWithdrawal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BuiltinAssetWithdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuiltinAssetWithdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): BuiltinAssetWithdrawal {
    return {
      vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
      partyId: isSet(object.partyId) ? String(object.partyId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: BuiltinAssetWithdrawal): unknown {
    const obj: any = {};
    message.vegaAssetId !== undefined &&
      (obj.vegaAssetId = message.vegaAssetId);
    message.partyId !== undefined && (obj.partyId = message.partyId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuiltinAssetWithdrawal>, I>>(
    object: I
  ): BuiltinAssetWithdrawal {
    const message = createBaseBuiltinAssetWithdrawal();
    message.vegaAssetId = object.vegaAssetId ?? "";
    message.partyId = object.partyId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseBuiltinAssetEvent(): BuiltinAssetEvent {
  return { deposit: undefined, withdrawal: undefined };
}

export const BuiltinAssetEvent = {
  encode(
    message: BuiltinAssetEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deposit !== undefined) {
      BuiltinAssetDeposit.encode(
        message.deposit,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    if (message.withdrawal !== undefined) {
      BuiltinAssetWithdrawal.encode(
        message.withdrawal,
        writer.uint32(8018).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuiltinAssetEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuiltinAssetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1001:
          message.deposit = BuiltinAssetDeposit.decode(reader, reader.uint32());
          break;
        case 1002:
          message.withdrawal = BuiltinAssetWithdrawal.decode(
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

  fromJSON(object: any): BuiltinAssetEvent {
    return {
      deposit: isSet(object.deposit)
        ? BuiltinAssetDeposit.fromJSON(object.deposit)
        : undefined,
      withdrawal: isSet(object.withdrawal)
        ? BuiltinAssetWithdrawal.fromJSON(object.withdrawal)
        : undefined,
    };
  },

  toJSON(message: BuiltinAssetEvent): unknown {
    const obj: any = {};
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? BuiltinAssetDeposit.toJSON(message.deposit)
        : undefined);
    message.withdrawal !== undefined &&
      (obj.withdrawal = message.withdrawal
        ? BuiltinAssetWithdrawal.toJSON(message.withdrawal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuiltinAssetEvent>, I>>(
    object: I
  ): BuiltinAssetEvent {
    const message = createBaseBuiltinAssetEvent();
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? BuiltinAssetDeposit.fromPartial(object.deposit)
        : undefined;
    message.withdrawal =
      object.withdrawal !== undefined && object.withdrawal !== null
        ? BuiltinAssetWithdrawal.fromPartial(object.withdrawal)
        : undefined;
    return message;
  },
};

function createBaseERC20AssetList(): ERC20AssetList {
  return { vegaAssetId: "" };
}

export const ERC20AssetList = {
  encode(
    message: ERC20AssetList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vegaAssetId !== "") {
      writer.uint32(10).string(message.vegaAssetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20AssetList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20AssetList();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ERC20AssetList {
    return {
      vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
    };
  },

  toJSON(message: ERC20AssetList): unknown {
    const obj: any = {};
    message.vegaAssetId !== undefined &&
      (obj.vegaAssetId = message.vegaAssetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20AssetList>, I>>(
    object: I
  ): ERC20AssetList {
    const message = createBaseERC20AssetList();
    message.vegaAssetId = object.vegaAssetId ?? "";
    return message;
  },
};

function createBaseERC20AssetDelist(): ERC20AssetDelist {
  return { vegaAssetId: "" };
}

export const ERC20AssetDelist = {
  encode(
    message: ERC20AssetDelist,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.vegaAssetId !== "") {
      writer.uint32(10).string(message.vegaAssetId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20AssetDelist {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20AssetDelist();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ERC20AssetDelist {
    return {
      vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
    };
  },

  toJSON(message: ERC20AssetDelist): unknown {
    const obj: any = {};
    message.vegaAssetId !== undefined &&
      (obj.vegaAssetId = message.vegaAssetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20AssetDelist>, I>>(
    object: I
  ): ERC20AssetDelist {
    const message = createBaseERC20AssetDelist();
    message.vegaAssetId = object.vegaAssetId ?? "";
    return message;
  },
};

function createBaseERC20Deposit(): ERC20Deposit {
  return {
    vegaAssetId: "",
    sourceEthereumAddress: "",
    targetPartyId: "",
    amount: "",
  };
}

export const ERC20Deposit = {
  encode(
    message: ERC20Deposit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Deposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ERC20Deposit {
    return {
      vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
      sourceEthereumAddress: isSet(object.sourceEthereumAddress)
        ? String(object.sourceEthereumAddress)
        : "",
      targetPartyId: isSet(object.targetPartyId)
        ? String(object.targetPartyId)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: ERC20Deposit): unknown {
    const obj: any = {};
    message.vegaAssetId !== undefined &&
      (obj.vegaAssetId = message.vegaAssetId);
    message.sourceEthereumAddress !== undefined &&
      (obj.sourceEthereumAddress = message.sourceEthereumAddress);
    message.targetPartyId !== undefined &&
      (obj.targetPartyId = message.targetPartyId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20Deposit>, I>>(
    object: I
  ): ERC20Deposit {
    const message = createBaseERC20Deposit();
    message.vegaAssetId = object.vegaAssetId ?? "";
    message.sourceEthereumAddress = object.sourceEthereumAddress ?? "";
    message.targetPartyId = object.targetPartyId ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseERC20Withdrawal(): ERC20Withdrawal {
  return { vegaAssetId: "", targetEthereumAddress: "", referenceNonce: "" };
}

export const ERC20Withdrawal = {
  encode(
    message: ERC20Withdrawal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Withdrawal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Withdrawal();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ERC20Withdrawal {
    return {
      vegaAssetId: isSet(object.vegaAssetId) ? String(object.vegaAssetId) : "",
      targetEthereumAddress: isSet(object.targetEthereumAddress)
        ? String(object.targetEthereumAddress)
        : "",
      referenceNonce: isSet(object.referenceNonce)
        ? String(object.referenceNonce)
        : "",
    };
  },

  toJSON(message: ERC20Withdrawal): unknown {
    const obj: any = {};
    message.vegaAssetId !== undefined &&
      (obj.vegaAssetId = message.vegaAssetId);
    message.targetEthereumAddress !== undefined &&
      (obj.targetEthereumAddress = message.targetEthereumAddress);
    message.referenceNonce !== undefined &&
      (obj.referenceNonce = message.referenceNonce);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20Withdrawal>, I>>(
    object: I
  ): ERC20Withdrawal {
    const message = createBaseERC20Withdrawal();
    message.vegaAssetId = object.vegaAssetId ?? "";
    message.targetEthereumAddress = object.targetEthereumAddress ?? "";
    message.referenceNonce = object.referenceNonce ?? "";
    return message;
  },
};

function createBaseERC20Event(): ERC20Event {
  return {
    index: "0",
    block: "0",
    assetList: undefined,
    assetDelist: undefined,
    deposit: undefined,
    withdrawal: undefined,
  };
}

export const ERC20Event = {
  encode(
    message: ERC20Event,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.block !== "0") {
      writer.uint32(16).uint64(message.block);
    }
    if (message.assetList !== undefined) {
      ERC20AssetList.encode(
        message.assetList,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    if (message.assetDelist !== undefined) {
      ERC20AssetDelist.encode(
        message.assetDelist,
        writer.uint32(8018).fork()
      ).ldelim();
    }
    if (message.deposit !== undefined) {
      ERC20Deposit.encode(message.deposit, writer.uint32(8026).fork()).ldelim();
    }
    if (message.withdrawal !== undefined) {
      ERC20Withdrawal.encode(
        message.withdrawal,
        writer.uint32(8034).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.block = longToString(reader.uint64() as Long);
          break;
        case 1001:
          message.assetList = ERC20AssetList.decode(reader, reader.uint32());
          break;
        case 1002:
          message.assetDelist = ERC20AssetDelist.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1003:
          message.deposit = ERC20Deposit.decode(reader, reader.uint32());
          break;
        case 1004:
          message.withdrawal = ERC20Withdrawal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20Event {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      block: isSet(object.block) ? String(object.block) : "0",
      assetList: isSet(object.assetList)
        ? ERC20AssetList.fromJSON(object.assetList)
        : undefined,
      assetDelist: isSet(object.assetDelist)
        ? ERC20AssetDelist.fromJSON(object.assetDelist)
        : undefined,
      deposit: isSet(object.deposit)
        ? ERC20Deposit.fromJSON(object.deposit)
        : undefined,
      withdrawal: isSet(object.withdrawal)
        ? ERC20Withdrawal.fromJSON(object.withdrawal)
        : undefined,
    };
  },

  toJSON(message: ERC20Event): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = message.block);
    message.assetList !== undefined &&
      (obj.assetList = message.assetList
        ? ERC20AssetList.toJSON(message.assetList)
        : undefined);
    message.assetDelist !== undefined &&
      (obj.assetDelist = message.assetDelist
        ? ERC20AssetDelist.toJSON(message.assetDelist)
        : undefined);
    message.deposit !== undefined &&
      (obj.deposit = message.deposit
        ? ERC20Deposit.toJSON(message.deposit)
        : undefined);
    message.withdrawal !== undefined &&
      (obj.withdrawal = message.withdrawal
        ? ERC20Withdrawal.toJSON(message.withdrawal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20Event>, I>>(
    object: I
  ): ERC20Event {
    const message = createBaseERC20Event();
    message.index = object.index ?? "0";
    message.block = object.block ?? "0";
    message.assetList =
      object.assetList !== undefined && object.assetList !== null
        ? ERC20AssetList.fromPartial(object.assetList)
        : undefined;
    message.assetDelist =
      object.assetDelist !== undefined && object.assetDelist !== null
        ? ERC20AssetDelist.fromPartial(object.assetDelist)
        : undefined;
    message.deposit =
      object.deposit !== undefined && object.deposit !== null
        ? ERC20Deposit.fromPartial(object.deposit)
        : undefined;
    message.withdrawal =
      object.withdrawal !== undefined && object.withdrawal !== null
        ? ERC20Withdrawal.fromPartial(object.withdrawal)
        : undefined;
    return message;
  },
};

function createBaseERC20SignerAdded(): ERC20SignerAdded {
  return { newSigner: "", nonce: "", blockTime: "0" };
}

export const ERC20SignerAdded = {
  encode(
    message: ERC20SignerAdded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20SignerAdded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20SignerAdded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newSigner = reader.string();
          break;
        case 2:
          message.nonce = reader.string();
          break;
        case 3:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20SignerAdded {
    return {
      newSigner: isSet(object.newSigner) ? String(object.newSigner) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
    };
  },

  toJSON(message: ERC20SignerAdded): unknown {
    const obj: any = {};
    message.newSigner !== undefined && (obj.newSigner = message.newSigner);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20SignerAdded>, I>>(
    object: I
  ): ERC20SignerAdded {
    const message = createBaseERC20SignerAdded();
    message.newSigner = object.newSigner ?? "";
    message.nonce = object.nonce ?? "";
    message.blockTime = object.blockTime ?? "0";
    return message;
  },
};

function createBaseERC20SignerRemoved(): ERC20SignerRemoved {
  return { oldSigner: "", nonce: "", blockTime: "0" };
}

export const ERC20SignerRemoved = {
  encode(
    message: ERC20SignerRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20SignerRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20SignerRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oldSigner = reader.string();
          break;
        case 2:
          message.nonce = reader.string();
          break;
        case 3:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20SignerRemoved {
    return {
      oldSigner: isSet(object.oldSigner) ? String(object.oldSigner) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
    };
  },

  toJSON(message: ERC20SignerRemoved): unknown {
    const obj: any = {};
    message.oldSigner !== undefined && (obj.oldSigner = message.oldSigner);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20SignerRemoved>, I>>(
    object: I
  ): ERC20SignerRemoved {
    const message = createBaseERC20SignerRemoved();
    message.oldSigner = object.oldSigner ?? "";
    message.nonce = object.nonce ?? "";
    message.blockTime = object.blockTime ?? "0";
    return message;
  },
};

function createBaseERC20ThresholdSet(): ERC20ThresholdSet {
  return { newThreshold: 0, nonce: "", blockTime: "0" };
}

export const ERC20ThresholdSet = {
  encode(
    message: ERC20ThresholdSet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20ThresholdSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20ThresholdSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newThreshold = reader.uint32();
          break;
        case 2:
          message.nonce = reader.string();
          break;
        case 3:
          message.blockTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ERC20ThresholdSet {
    return {
      newThreshold: isSet(object.newThreshold)
        ? Number(object.newThreshold)
        : 0,
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
    };
  },

  toJSON(message: ERC20ThresholdSet): unknown {
    const obj: any = {};
    message.newThreshold !== undefined &&
      (obj.newThreshold = Math.round(message.newThreshold));
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20ThresholdSet>, I>>(
    object: I
  ): ERC20ThresholdSet {
    const message = createBaseERC20ThresholdSet();
    message.newThreshold = object.newThreshold ?? 0;
    message.nonce = object.nonce ?? "";
    message.blockTime = object.blockTime ?? "0";
    return message;
  },
};

function createBaseERC20MultiSigEvent(): ERC20MultiSigEvent {
  return {
    index: "0",
    block: "0",
    signerAdded: undefined,
    signerRemoved: undefined,
    thresholdSet: undefined,
  };
}

export const ERC20MultiSigEvent = {
  encode(
    message: ERC20MultiSigEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.block !== "0") {
      writer.uint32(16).uint64(message.block);
    }
    if (message.signerAdded !== undefined) {
      ERC20SignerAdded.encode(
        message.signerAdded,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    if (message.signerRemoved !== undefined) {
      ERC20SignerRemoved.encode(
        message.signerRemoved,
        writer.uint32(8018).fork()
      ).ldelim();
    }
    if (message.thresholdSet !== undefined) {
      ERC20ThresholdSet.encode(
        message.thresholdSet,
        writer.uint32(8026).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20MultiSigEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20MultiSigEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.block = longToString(reader.uint64() as Long);
          break;
        case 1001:
          message.signerAdded = ERC20SignerAdded.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1002:
          message.signerRemoved = ERC20SignerRemoved.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1003:
          message.thresholdSet = ERC20ThresholdSet.decode(
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

  fromJSON(object: any): ERC20MultiSigEvent {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      block: isSet(object.block) ? String(object.block) : "0",
      signerAdded: isSet(object.signerAdded)
        ? ERC20SignerAdded.fromJSON(object.signerAdded)
        : undefined,
      signerRemoved: isSet(object.signerRemoved)
        ? ERC20SignerRemoved.fromJSON(object.signerRemoved)
        : undefined,
      thresholdSet: isSet(object.thresholdSet)
        ? ERC20ThresholdSet.fromJSON(object.thresholdSet)
        : undefined,
    };
  },

  toJSON(message: ERC20MultiSigEvent): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = message.block);
    message.signerAdded !== undefined &&
      (obj.signerAdded = message.signerAdded
        ? ERC20SignerAdded.toJSON(message.signerAdded)
        : undefined);
    message.signerRemoved !== undefined &&
      (obj.signerRemoved = message.signerRemoved
        ? ERC20SignerRemoved.toJSON(message.signerRemoved)
        : undefined);
    message.thresholdSet !== undefined &&
      (obj.thresholdSet = message.thresholdSet
        ? ERC20ThresholdSet.toJSON(message.thresholdSet)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20MultiSigEvent>, I>>(
    object: I
  ): ERC20MultiSigEvent {
    const message = createBaseERC20MultiSigEvent();
    message.index = object.index ?? "0";
    message.block = object.block ?? "0";
    message.signerAdded =
      object.signerAdded !== undefined && object.signerAdded !== null
        ? ERC20SignerAdded.fromPartial(object.signerAdded)
        : undefined;
    message.signerRemoved =
      object.signerRemoved !== undefined && object.signerRemoved !== null
        ? ERC20SignerRemoved.fromPartial(object.signerRemoved)
        : undefined;
    message.thresholdSet =
      object.thresholdSet !== undefined && object.thresholdSet !== null
        ? ERC20ThresholdSet.fromPartial(object.thresholdSet)
        : undefined;
    return message;
  },
};

function createBaseStakingEvent(): StakingEvent {
  return {
    index: "0",
    block: "0",
    stakeDeposited: undefined,
    stakeRemoved: undefined,
    totalSupply: undefined,
  };
}

export const StakingEvent = {
  encode(
    message: StakingEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "0") {
      writer.uint32(8).uint64(message.index);
    }
    if (message.block !== "0") {
      writer.uint32(16).uint64(message.block);
    }
    if (message.stakeDeposited !== undefined) {
      StakeDeposited.encode(
        message.stakeDeposited,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    if (message.stakeRemoved !== undefined) {
      StakeRemoved.encode(
        message.stakeRemoved,
        writer.uint32(8018).fork()
      ).ldelim();
    }
    if (message.totalSupply !== undefined) {
      StakeTotalSupply.encode(
        message.totalSupply,
        writer.uint32(8026).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.block = longToString(reader.uint64() as Long);
          break;
        case 1001:
          message.stakeDeposited = StakeDeposited.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1002:
          message.stakeRemoved = StakeRemoved.decode(reader, reader.uint32());
          break;
        case 1003:
          message.totalSupply = StakeTotalSupply.decode(
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

  fromJSON(object: any): StakingEvent {
    return {
      index: isSet(object.index) ? String(object.index) : "0",
      block: isSet(object.block) ? String(object.block) : "0",
      stakeDeposited: isSet(object.stakeDeposited)
        ? StakeDeposited.fromJSON(object.stakeDeposited)
        : undefined,
      stakeRemoved: isSet(object.stakeRemoved)
        ? StakeRemoved.fromJSON(object.stakeRemoved)
        : undefined,
      totalSupply: isSet(object.totalSupply)
        ? StakeTotalSupply.fromJSON(object.totalSupply)
        : undefined,
    };
  },

  toJSON(message: StakingEvent): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.block !== undefined && (obj.block = message.block);
    message.stakeDeposited !== undefined &&
      (obj.stakeDeposited = message.stakeDeposited
        ? StakeDeposited.toJSON(message.stakeDeposited)
        : undefined);
    message.stakeRemoved !== undefined &&
      (obj.stakeRemoved = message.stakeRemoved
        ? StakeRemoved.toJSON(message.stakeRemoved)
        : undefined);
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply
        ? StakeTotalSupply.toJSON(message.totalSupply)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakingEvent>, I>>(
    object: I
  ): StakingEvent {
    const message = createBaseStakingEvent();
    message.index = object.index ?? "0";
    message.block = object.block ?? "0";
    message.stakeDeposited =
      object.stakeDeposited !== undefined && object.stakeDeposited !== null
        ? StakeDeposited.fromPartial(object.stakeDeposited)
        : undefined;
    message.stakeRemoved =
      object.stakeRemoved !== undefined && object.stakeRemoved !== null
        ? StakeRemoved.fromPartial(object.stakeRemoved)
        : undefined;
    message.totalSupply =
      object.totalSupply !== undefined && object.totalSupply !== null
        ? StakeTotalSupply.fromPartial(object.totalSupply)
        : undefined;
    return message;
  },
};

function createBaseStakeDeposited(): StakeDeposited {
  return { ethereumAddress: "", vegaPublicKey: "", amount: "", blockTime: "0" };
}

export const StakeDeposited = {
  encode(
    message: StakeDeposited,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeDeposited {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeDeposited();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.blockTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeDeposited {
    return {
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
      vegaPublicKey: isSet(object.vegaPublicKey)
        ? String(object.vegaPublicKey)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
    };
  },

  toJSON(message: StakeDeposited): unknown {
    const obj: any = {};
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    message.vegaPublicKey !== undefined &&
      (obj.vegaPublicKey = message.vegaPublicKey);
    message.amount !== undefined && (obj.amount = message.amount);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeDeposited>, I>>(
    object: I
  ): StakeDeposited {
    const message = createBaseStakeDeposited();
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.vegaPublicKey = object.vegaPublicKey ?? "";
    message.amount = object.amount ?? "";
    message.blockTime = object.blockTime ?? "0";
    return message;
  },
};

function createBaseStakeRemoved(): StakeRemoved {
  return { ethereumAddress: "", vegaPublicKey: "", amount: "", blockTime: "0" };
}

export const StakeRemoved = {
  encode(
    message: StakeRemoved,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeRemoved {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeRemoved();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.blockTime = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakeRemoved {
    return {
      ethereumAddress: isSet(object.ethereumAddress)
        ? String(object.ethereumAddress)
        : "",
      vegaPublicKey: isSet(object.vegaPublicKey)
        ? String(object.vegaPublicKey)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      blockTime: isSet(object.blockTime) ? String(object.blockTime) : "0",
    };
  },

  toJSON(message: StakeRemoved): unknown {
    const obj: any = {};
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    message.vegaPublicKey !== undefined &&
      (obj.vegaPublicKey = message.vegaPublicKey);
    message.amount !== undefined && (obj.amount = message.amount);
    message.blockTime !== undefined && (obj.blockTime = message.blockTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeRemoved>, I>>(
    object: I
  ): StakeRemoved {
    const message = createBaseStakeRemoved();
    message.ethereumAddress = object.ethereumAddress ?? "";
    message.vegaPublicKey = object.vegaPublicKey ?? "";
    message.amount = object.amount ?? "";
    message.blockTime = object.blockTime ?? "0";
    return message;
  },
};

function createBaseStakeTotalSupply(): StakeTotalSupply {
  return { tokenAddress: "", totalSupply: "" };
}

export const StakeTotalSupply = {
  encode(
    message: StakeTotalSupply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tokenAddress !== "") {
      writer.uint32(10).string(message.tokenAddress);
    }
    if (message.totalSupply !== "") {
      writer.uint32(18).string(message.totalSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakeTotalSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakeTotalSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): StakeTotalSupply {
    return {
      tokenAddress: isSet(object.tokenAddress)
        ? String(object.tokenAddress)
        : "",
      totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
    };
  },

  toJSON(message: StakeTotalSupply): unknown {
    const obj: any = {};
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = message.tokenAddress);
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakeTotalSupply>, I>>(
    object: I
  ): StakeTotalSupply {
    const message = createBaseStakeTotalSupply();
    message.tokenAddress = object.tokenAddress ?? "";
    message.totalSupply = object.totalSupply ?? "";
    return message;
  },
};

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
