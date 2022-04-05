/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "vega.commands.v1";

/**
 * A signature to authenticate a transaction and to be verified by the Vega
 * network.
 */
export interface Signature {
  /** The bytes of the signature (hex-encoded). */
  value: string;
  /** The algorithm used to create the signature. */
  algo: string;
  /** The version of the signature used to create the signature. */
  version: number;
}

function createBaseSignature(): Signature {
  return { value: "", algo: "", version: 0 };
}

export const Signature = {
  encode(
    message: Signature,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Signature {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
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

  fromJSON(object: any): Signature {
    return {
      value: isSet(object.value) ? String(object.value) : "",
      algo: isSet(object.algo) ? String(object.algo) : "",
      version: isSet(object.version) ? Number(object.version) : 0,
    };
  },

  toJSON(message: Signature): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.algo !== undefined && (obj.algo = message.algo);
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Signature>, I>>(
    object: I
  ): Signature {
    const message = createBaseSignature();
    message.value = object.value ?? "";
    message.algo = object.algo ?? "";
    message.version = object.version ?? 0;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
