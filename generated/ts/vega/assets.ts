/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "vega";

/** The Vega representation of an external asset */
export interface Asset {
  /** Internal identifier of the asset */
  id: string;
  /** The definition of the external source for this asset */
  details: AssetDetails | undefined;
}

/** The Vega representation of an external asset */
export interface AssetDetails {
  /** Name of the asset (e.g: Great British Pound) */
  name: string;
  /** Symbol of the asset (e.g: GBP) */
  symbol: string;
  /** Total circulating supply for the asset */
  totalSupply: string;
  /** Number of decimal / precision handled by this asset */
  decimals: string;
  /** The minimum economically meaningful amount in the asset */
  quantum: string;
  /** A built-in asset */
  builtinAsset: BuiltinAsset | undefined;
  /** An Ethereum ERC20 asset */
  erc20: ERC20 | undefined;
}

/** A Vega internal asset */
export interface BuiltinAsset {
  /** Maximum amount that can be requested by a party through the built-in asset faucet at a time */
  maxFaucetAmountMint: string;
}

/** An ERC20 token based asset, living on the ethereum network */
export interface ERC20 {
  /** The address of the contract for the token, on the ethereum network */
  contractAddress: string;
}

function createBaseAsset(): Asset {
  return { id: "", details: undefined };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.details !== undefined) {
      AssetDetails.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.details = AssetDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      details: isSet(object.details)
        ? AssetDetails.fromJSON(object.details)
        : undefined,
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.details !== undefined &&
      (obj.details = message.details
        ? AssetDetails.toJSON(message.details)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.id = object.id ?? "";
    message.details =
      object.details !== undefined && object.details !== null
        ? AssetDetails.fromPartial(object.details)
        : undefined;
    return message;
  },
};

function createBaseAssetDetails(): AssetDetails {
  return {
    name: "",
    symbol: "",
    totalSupply: "",
    decimals: "0",
    quantum: "",
    builtinAsset: undefined,
    erc20: undefined,
  };
}

export const AssetDetails = {
  encode(
    message: AssetDetails,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      BuiltinAsset.encode(
        message.builtinAsset,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.erc20 !== undefined) {
      ERC20.encode(message.erc20, writer.uint32(818).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
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
          message.decimals = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.quantum = reader.string();
          break;
        case 101:
          message.builtinAsset = BuiltinAsset.decode(reader, reader.uint32());
          break;
        case 102:
          message.erc20 = ERC20.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetDetails {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      totalSupply: isSet(object.totalSupply) ? String(object.totalSupply) : "",
      decimals: isSet(object.decimals) ? String(object.decimals) : "0",
      quantum: isSet(object.quantum) ? String(object.quantum) : "",
      builtinAsset: isSet(object.builtinAsset)
        ? BuiltinAsset.fromJSON(object.builtinAsset)
        : undefined,
      erc20: isSet(object.erc20) ? ERC20.fromJSON(object.erc20) : undefined,
    };
  },

  toJSON(message: AssetDetails): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.totalSupply !== undefined &&
      (obj.totalSupply = message.totalSupply);
    message.decimals !== undefined && (obj.decimals = message.decimals);
    message.quantum !== undefined && (obj.quantum = message.quantum);
    message.builtinAsset !== undefined &&
      (obj.builtinAsset = message.builtinAsset
        ? BuiltinAsset.toJSON(message.builtinAsset)
        : undefined);
    message.erc20 !== undefined &&
      (obj.erc20 = message.erc20 ? ERC20.toJSON(message.erc20) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetDetails>, I>>(
    object: I
  ): AssetDetails {
    const message = createBaseAssetDetails();
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.totalSupply = object.totalSupply ?? "";
    message.decimals = object.decimals ?? "0";
    message.quantum = object.quantum ?? "";
    message.builtinAsset =
      object.builtinAsset !== undefined && object.builtinAsset !== null
        ? BuiltinAsset.fromPartial(object.builtinAsset)
        : undefined;
    message.erc20 =
      object.erc20 !== undefined && object.erc20 !== null
        ? ERC20.fromPartial(object.erc20)
        : undefined;
    return message;
  },
};

function createBaseBuiltinAsset(): BuiltinAsset {
  return { maxFaucetAmountMint: "" };
}

export const BuiltinAsset = {
  encode(
    message: BuiltinAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.maxFaucetAmountMint !== "") {
      writer.uint32(10).string(message.maxFaucetAmountMint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuiltinAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuiltinAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): BuiltinAsset {
    return {
      maxFaucetAmountMint: isSet(object.maxFaucetAmountMint)
        ? String(object.maxFaucetAmountMint)
        : "",
    };
  },

  toJSON(message: BuiltinAsset): unknown {
    const obj: any = {};
    message.maxFaucetAmountMint !== undefined &&
      (obj.maxFaucetAmountMint = message.maxFaucetAmountMint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuiltinAsset>, I>>(
    object: I
  ): BuiltinAsset {
    const message = createBaseBuiltinAsset();
    message.maxFaucetAmountMint = object.maxFaucetAmountMint ?? "";
    return message;
  },
};

function createBaseERC20(): ERC20 {
  return { contractAddress: "" };
}

export const ERC20 = {
  encode(message: ERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ERC20 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): ERC20 {
    return {
      contractAddress: isSet(object.contractAddress)
        ? String(object.contractAddress)
        : "",
    };
  },

  toJSON(message: ERC20): unknown {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ERC20>, I>>(object: I): ERC20 {
    const message = createBaseERC20();
    message.contractAddress = object.contractAddress ?? "";
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
