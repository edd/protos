/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "vega.commands.v1";

/** Command to submit new Oracle data from third party providers */
export interface OracleDataSubmission {
  /** The source from which the data is coming from */
  source: OracleDataSubmission_OracleSource;
  /** The data provided by the third party provider */
  payload: Uint8Array;
}

/** The supported Oracle sources */
export enum OracleDataSubmission_OracleSource {
  /** ORACLE_SOURCE_UNSPECIFIED - The default value */
  ORACLE_SOURCE_UNSPECIFIED = 0,
  /** ORACLE_SOURCE_OPEN_ORACLE - Support for Open Oracle standard */
  ORACLE_SOURCE_OPEN_ORACLE = 1,
  /** ORACLE_SOURCE_JSON - Support for custom JSON data */
  ORACLE_SOURCE_JSON = 2,
  UNRECOGNIZED = -1,
}

export function oracleDataSubmission_OracleSourceFromJSON(
  object: any
): OracleDataSubmission_OracleSource {
  switch (object) {
    case 0:
    case "ORACLE_SOURCE_UNSPECIFIED":
      return OracleDataSubmission_OracleSource.ORACLE_SOURCE_UNSPECIFIED;
    case 1:
    case "ORACLE_SOURCE_OPEN_ORACLE":
      return OracleDataSubmission_OracleSource.ORACLE_SOURCE_OPEN_ORACLE;
    case 2:
    case "ORACLE_SOURCE_JSON":
      return OracleDataSubmission_OracleSource.ORACLE_SOURCE_JSON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OracleDataSubmission_OracleSource.UNRECOGNIZED;
  }
}

export function oracleDataSubmission_OracleSourceToJSON(
  object: OracleDataSubmission_OracleSource
): string {
  switch (object) {
    case OracleDataSubmission_OracleSource.ORACLE_SOURCE_UNSPECIFIED:
      return "ORACLE_SOURCE_UNSPECIFIED";
    case OracleDataSubmission_OracleSource.ORACLE_SOURCE_OPEN_ORACLE:
      return "ORACLE_SOURCE_OPEN_ORACLE";
    case OracleDataSubmission_OracleSource.ORACLE_SOURCE_JSON:
      return "ORACLE_SOURCE_JSON";
    default:
      return "UNKNOWN";
  }
}

function createBaseOracleDataSubmission(): OracleDataSubmission {
  return { source: 0, payload: new Uint8Array() };
}

export const OracleDataSubmission = {
  encode(
    message: OracleDataSubmission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== 0) {
      writer.uint32(8).int32(message.source);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OracleDataSubmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleDataSubmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.int32() as any;
          break;
        case 2:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleDataSubmission {
    return {
      source: isSet(object.source)
        ? oracleDataSubmission_OracleSourceFromJSON(object.source)
        : 0,
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
    };
  },

  toJSON(message: OracleDataSubmission): unknown {
    const obj: any = {};
    message.source !== undefined &&
      (obj.source = oracleDataSubmission_OracleSourceToJSON(message.source));
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleDataSubmission>, I>>(
    object: I
  ): OracleDataSubmission {
    const message = createBaseOracleDataSubmission();
    message.source = object.source ?? 0;
    message.payload = object.payload ?? new Uint8Array();
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
