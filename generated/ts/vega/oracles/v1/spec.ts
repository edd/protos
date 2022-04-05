/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "oracles.v1";

/**
 * An oracle spec describe the oracle data that a product (or a risk model)
 * wants to get from the oracle engine.
 */
export interface OracleSpecConfiguration {
  /**
   * pubKeys is the list of authorized public keys that signed the data for this
   * oracle. All the public keys in the oracle data should be contained in these
   * public keys.
   */
  pubKeys: string[];
  /**
   * filters describes which oracle data are considered of interest or not for
   * the product (or the risk model).
   */
  filters: Filter[];
}

/**
 * An oracle spec describe the oracle data that a product (or a risk model)
 * wants to get from the oracle engine.
 * This message contains additional information used by the API.
 */
export interface OracleSpec {
  /** id is a hash generated from the OracleSpec data. */
  id: string;
  /** Creation Date time */
  createdAt: string;
  /** Last Updated timestamp */
  updatedAt: string;
  /**
   * pubKeys is the list of authorized public keys that signed the data for this
   * oracle. All the public keys in the oracle data should be contained in these
   * public keys.
   */
  pubKeys: string[];
  /**
   * filters describes which oracle data are considered of interest or not for
   * the product (or the risk model).
   */
  filters: Filter[];
  /** status describes the status of the oracle spec */
  status: OracleSpec_Status;
}

/** Status describe the status of the oracle spec */
export enum OracleSpec_Status {
  /** STATUS_UNSPECIFIED - The default value. */
  STATUS_UNSPECIFIED = 0,
  /** STATUS_ACTIVE - STATUS_ACTIVE describes an active oracle spec. */
  STATUS_ACTIVE = 1,
  /**
   * STATUS_DEACTIVATED - STATUS_DEACTIVATED describes an oracle spec that is not listening to data
   * anymore.
   */
  STATUS_DEACTIVATED = 2,
  UNRECOGNIZED = -1,
}

export function oracleSpec_StatusFromJSON(object: any): OracleSpec_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return OracleSpec_Status.STATUS_UNSPECIFIED;
    case 1:
    case "STATUS_ACTIVE":
      return OracleSpec_Status.STATUS_ACTIVE;
    case 2:
    case "STATUS_DEACTIVATED":
      return OracleSpec_Status.STATUS_DEACTIVATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OracleSpec_Status.UNRECOGNIZED;
  }
}

export function oracleSpec_StatusToJSON(object: OracleSpec_Status): string {
  switch (object) {
    case OracleSpec_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case OracleSpec_Status.STATUS_ACTIVE:
      return "STATUS_ACTIVE";
    case OracleSpec_Status.STATUS_DEACTIVATED:
      return "STATUS_DEACTIVATED";
    default:
      return "UNKNOWN";
  }
}

/**
 * Filter describes the conditions under which an oracle data is considered of
 * interest or not.
 */
export interface Filter {
  /** key is the oracle data property key targeted by the filter. */
  key: PropertyKey | undefined;
  /**
   * conditions are the conditions that should be matched by the data to be
   * considered of interest.
   */
  conditions: Condition[];
}

/** PropertyKey describes the property key contained in an oracle data. */
export interface PropertyKey {
  /** name is the name of the property. */
  name: string;
  /** type is the type of the property. */
  type: PropertyKey_Type;
}

/**
 * Type describes the type of properties that are supported by the oracle
 * engine.
 */
export enum PropertyKey_Type {
  /** TYPE_UNSPECIFIED - The default value. */
  TYPE_UNSPECIFIED = 0,
  /** TYPE_EMPTY - Any type. */
  TYPE_EMPTY = 1,
  /** TYPE_INTEGER - Integer type. */
  TYPE_INTEGER = 2,
  /** TYPE_STRING - String type. */
  TYPE_STRING = 3,
  /** TYPE_BOOLEAN - Boolean type. */
  TYPE_BOOLEAN = 4,
  /** TYPE_DECIMAL - Any floating point decimal type. */
  TYPE_DECIMAL = 5,
  /** TYPE_TIMESTAMP - Timestamp date type. */
  TYPE_TIMESTAMP = 6,
  UNRECOGNIZED = -1,
}

export function propertyKey_TypeFromJSON(object: any): PropertyKey_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return PropertyKey_Type.TYPE_UNSPECIFIED;
    case 1:
    case "TYPE_EMPTY":
      return PropertyKey_Type.TYPE_EMPTY;
    case 2:
    case "TYPE_INTEGER":
      return PropertyKey_Type.TYPE_INTEGER;
    case 3:
    case "TYPE_STRING":
      return PropertyKey_Type.TYPE_STRING;
    case 4:
    case "TYPE_BOOLEAN":
      return PropertyKey_Type.TYPE_BOOLEAN;
    case 5:
    case "TYPE_DECIMAL":
      return PropertyKey_Type.TYPE_DECIMAL;
    case 6:
    case "TYPE_TIMESTAMP":
      return PropertyKey_Type.TYPE_TIMESTAMP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PropertyKey_Type.UNRECOGNIZED;
  }
}

export function propertyKey_TypeToJSON(object: PropertyKey_Type): string {
  switch (object) {
    case PropertyKey_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case PropertyKey_Type.TYPE_EMPTY:
      return "TYPE_EMPTY";
    case PropertyKey_Type.TYPE_INTEGER:
      return "TYPE_INTEGER";
    case PropertyKey_Type.TYPE_STRING:
      return "TYPE_STRING";
    case PropertyKey_Type.TYPE_BOOLEAN:
      return "TYPE_BOOLEAN";
    case PropertyKey_Type.TYPE_DECIMAL:
      return "TYPE_DECIMAL";
    case PropertyKey_Type.TYPE_TIMESTAMP:
      return "TYPE_TIMESTAMP";
    default:
      return "UNKNOWN";
  }
}

/** Condition describes the condition that must be validated by the */
export interface Condition {
  /** comparator is the type of comparison to make on the value. */
  operator: Condition_Operator;
  /** value is used by the comparator. */
  value: string;
}

/** Comparator describes the type of comparison. */
export enum Condition_Operator {
  /** OPERATOR_UNSPECIFIED - The default value */
  OPERATOR_UNSPECIFIED = 0,
  /** OPERATOR_EQUALS - Verify if the property values are strictly equal or not. */
  OPERATOR_EQUALS = 1,
  /** OPERATOR_GREATER_THAN - Verify if the oracle data value is greater than the Condition value. */
  OPERATOR_GREATER_THAN = 2,
  /**
   * OPERATOR_GREATER_THAN_OR_EQUAL - Verify if the oracle data value is greater than or equal to the Condition
   * value.
   */
  OPERATOR_GREATER_THAN_OR_EQUAL = 3,
  /** OPERATOR_LESS_THAN - Verify if the oracle data value is less than the Condition value. */
  OPERATOR_LESS_THAN = 4,
  /**
   * OPERATOR_LESS_THAN_OR_EQUAL - Verify if the oracle data value is less or equal to than the Condition
   * value.
   */
  OPERATOR_LESS_THAN_OR_EQUAL = 5,
  UNRECOGNIZED = -1,
}

export function condition_OperatorFromJSON(object: any): Condition_Operator {
  switch (object) {
    case 0:
    case "OPERATOR_UNSPECIFIED":
      return Condition_Operator.OPERATOR_UNSPECIFIED;
    case 1:
    case "OPERATOR_EQUALS":
      return Condition_Operator.OPERATOR_EQUALS;
    case 2:
    case "OPERATOR_GREATER_THAN":
      return Condition_Operator.OPERATOR_GREATER_THAN;
    case 3:
    case "OPERATOR_GREATER_THAN_OR_EQUAL":
      return Condition_Operator.OPERATOR_GREATER_THAN_OR_EQUAL;
    case 4:
    case "OPERATOR_LESS_THAN":
      return Condition_Operator.OPERATOR_LESS_THAN;
    case 5:
    case "OPERATOR_LESS_THAN_OR_EQUAL":
      return Condition_Operator.OPERATOR_LESS_THAN_OR_EQUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Condition_Operator.UNRECOGNIZED;
  }
}

export function condition_OperatorToJSON(object: Condition_Operator): string {
  switch (object) {
    case Condition_Operator.OPERATOR_UNSPECIFIED:
      return "OPERATOR_UNSPECIFIED";
    case Condition_Operator.OPERATOR_EQUALS:
      return "OPERATOR_EQUALS";
    case Condition_Operator.OPERATOR_GREATER_THAN:
      return "OPERATOR_GREATER_THAN";
    case Condition_Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
      return "OPERATOR_GREATER_THAN_OR_EQUAL";
    case Condition_Operator.OPERATOR_LESS_THAN:
      return "OPERATOR_LESS_THAN";
    case Condition_Operator.OPERATOR_LESS_THAN_OR_EQUAL:
      return "OPERATOR_LESS_THAN_OR_EQUAL";
    default:
      return "UNKNOWN";
  }
}

function createBaseOracleSpecConfiguration(): OracleSpecConfiguration {
  return { pubKeys: [], filters: [] };
}

export const OracleSpecConfiguration = {
  encode(
    message: OracleSpecConfiguration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pubKeys) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OracleSpecConfiguration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpecConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKeys.push(reader.string());
          break;
        case 2:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSpecConfiguration {
    return {
      pubKeys: Array.isArray(object?.pubKeys)
        ? object.pubKeys.map((e: any) => String(e))
        : [],
      filters: Array.isArray(object?.filters)
        ? object.filters.map((e: any) => Filter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OracleSpecConfiguration): unknown {
    const obj: any = {};
    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map((e) => e);
    } else {
      obj.pubKeys = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? Filter.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpecConfiguration>, I>>(
    object: I
  ): OracleSpecConfiguration {
    const message = createBaseOracleSpecConfiguration();
    message.pubKeys = object.pubKeys?.map((e) => e) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracleSpec(): OracleSpec {
  return {
    id: "",
    createdAt: "0",
    updatedAt: "0",
    pubKeys: [],
    filters: [],
    status: 0,
  };
}

export const OracleSpec = {
  encode(
    message: OracleSpec,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.createdAt !== "0") {
      writer.uint32(16).int64(message.createdAt);
    }
    if (message.updatedAt !== "0") {
      writer.uint32(24).int64(message.updatedAt);
    }
    for (const v of message.pubKeys) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleSpec {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.createdAt = longToString(reader.int64() as Long);
          break;
        case 3:
          message.updatedAt = longToString(reader.int64() as Long);
          break;
        case 4:
          message.pubKeys.push(reader.string());
          break;
        case 5:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleSpec {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "0",
      pubKeys: Array.isArray(object?.pubKeys)
        ? object.pubKeys.map((e: any) => String(e))
        : [],
      filters: Array.isArray(object?.filters)
        ? object.filters.map((e: any) => Filter.fromJSON(e))
        : [],
      status: isSet(object.status)
        ? oracleSpec_StatusFromJSON(object.status)
        : 0,
    };
  },

  toJSON(message: OracleSpec): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt);
    if (message.pubKeys) {
      obj.pubKeys = message.pubKeys.map((e) => e);
    } else {
      obj.pubKeys = [];
    }
    if (message.filters) {
      obj.filters = message.filters.map((e) =>
        e ? Filter.toJSON(e) : undefined
      );
    } else {
      obj.filters = [];
    }
    message.status !== undefined &&
      (obj.status = oracleSpec_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OracleSpec>, I>>(
    object: I
  ): OracleSpec {
    const message = createBaseOracleSpec();
    message.id = object.id ?? "";
    message.createdAt = object.createdAt ?? "0";
    message.updatedAt = object.updatedAt ?? "0";
    message.pubKeys = object.pubKeys?.map((e) => e) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { key: undefined, conditions: [] };
}

export const Filter = {
  encode(
    message: Filter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== undefined) {
      PropertyKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.conditions) {
      Condition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = PropertyKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.conditions.push(Condition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      key: isSet(object.key) ? PropertyKey.fromJSON(object.key) : undefined,
      conditions: Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => Condition.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key ? PropertyKey.toJSON(message.key) : undefined);
    if (message.conditions) {
      obj.conditions = message.conditions.map((e) =>
        e ? Condition.toJSON(e) : undefined
      );
    } else {
      obj.conditions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.key =
      object.key !== undefined && object.key !== null
        ? PropertyKey.fromPartial(object.key)
        : undefined;
    message.conditions =
      object.conditions?.map((e) => Condition.fromPartial(e)) || [];
    return message;
  },
};

function createBasePropertyKey(): PropertyKey {
  return { name: "", type: 0 };
}

export const PropertyKey = {
  encode(
    message: PropertyKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropertyKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertyKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PropertyKey {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? propertyKey_TypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: PropertyKey): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = propertyKey_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PropertyKey>, I>>(
    object: I
  ): PropertyKey {
    const message = createBasePropertyKey();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseCondition(): Condition {
  return { operator: 0, value: "" };
}

export const Condition = {
  encode(
    message: Condition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.operator !== 0) {
      writer.uint32(8).int32(message.operator);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.int32() as any;
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

  fromJSON(object: any): Condition {
    return {
      operator: isSet(object.operator)
        ? condition_OperatorFromJSON(object.operator)
        : 0,
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Condition): unknown {
    const obj: any = {};
    message.operator !== undefined &&
      (obj.operator = condition_OperatorToJSON(message.operator));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Condition>, I>>(
    object: I
  ): Condition {
    const message = createBaseCondition();
    message.operator = object.operator ?? 0;
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
