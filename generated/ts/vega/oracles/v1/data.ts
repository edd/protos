/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "oracles.v1";

/** OracleData describes an oracle data that has been broadcast. */
export interface OracleData {
  /**
   * pubKeys is the list of authorized public keys that signed the data for this
   * oracle. All the public keys in the oracle data should be contained in these
   * public keys.
   */
  pubKeys: string[];
  /** data holds all the properties of the oracle data */
  data: Property[];
  /** matched_specs_ids lists all the oracle specs that matched this oracle data. */
  matchedSpecIds: string[];
  /**
   * broadcast_at is the time at which the data was broadcast for the first
   * time.
   */
  broadcastAt: string;
}

/** Property describes one property of an oracle spec with a key with its value. */
export interface Property {
  /** name is the name of the property. */
  name: string;
  /** value is the value of the property. */
  value: string;
}

function createBaseOracleData(): OracleData {
  return { pubKeys: [], data: [], matchedSpecIds: [], broadcastAt: "0" };
}

export const OracleData = {
  encode(
    message: OracleData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pubKeys) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.data) {
      Property.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.matchedSpecIds) {
      writer.uint32(26).string(v!);
    }
    if (message.broadcastAt !== "0") {
      writer.uint32(32).int64(message.broadcastAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeys.push(reader.string());
          break;
        case 2:
          message.data.push(Property.decode(reader, reader.uint32()));
          break;
        case 3:
          message.matchedSpecIds.push(reader.string());
          break;
        case 4:
          message.broadcastAt = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleData {
    return {
      pubKeys: Array.isArray(object?.pubKeys)
        ? object.pubKeys.map((e: any) => String(e))
        : [],
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) => Property.fromJSON(e))
        : [],
      matchedSpecIds: Array.isArray(object?.matchedSpecIds)
        ? object.matchedSpecIds.map((e: any) => String(e))
        : [],
      broadcastAt: isSet(object.broadcastAt) ? String(object.broadcastAt) : "0",
    };
  },

  toJSON(message: OracleData): unknown {
    const obj: any = {};
    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map((e) => e);
    } else {
      obj.pubKeys = [];
    }
    if (message.data) {
      obj.data = message.data.map((e) => (e ? Property.toJSON(e) : undefined));
    } else {
      obj.data = [];
    }
    if (message.matchedSpecIds) {
      obj.matchedSpecIds = message.matchedSpecIds.map((e) => e);
    } else {
      obj.matchedSpecIds = [];
    }
    message.broadcastAt !== undefined &&
      (obj.broadcastAt = message.broadcastAt);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleData>, I>>(
    object: I
  ): OracleData {
    const message = createBaseOracleData();
    message.pubKeys = object.pubKeys?.map((e) => e) || [];
    message.data = object.data?.map((e) => Property.fromPartial(e)) || [];
    message.matchedSpecIds = object.matchedSpecIds?.map((e) => e) || [];
    message.broadcastAt = object.broadcastAt ?? "0";
    return message;
  },
};

function createBaseProperty(): Property {
  return { name: "", value: "" };
}

export const Property = {
  encode(
    message: Property,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Property {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
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

  fromJSON(object: any): Property {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Property): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Property>, I>>(object: I): Property {
    const message = createBaseProperty();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
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
