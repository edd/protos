/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Asset } from "../../../vega/assets";
import {
  NetworkParameter,
  NetworkLimits,
  Party,
  MarketData,
  Delegation,
} from "../../../vega/vega";
import { ValidatorUpdate, StakeLinking } from "../../../vega/events/v1/events";
import { Market } from "../../../vega/markets";
import { Proposal, Vote } from "../../../vega/governance";

export const protobufPackage = "vega.api.v1";

export interface Account {
  party: string;
  market: string;
  balance: string;
  asset: string;
  type: string;
}

export interface ListAccountsRequest {
  party: string;
  market: string;
}

export interface ListAccountsResponse {
  accounts: Account[];
}

export interface ListAssetsRequest {
  /** optional ID */
  asset: string;
}

export interface ListAssetsResponse {
  assets: Asset[];
}

export interface ListNetworkParametersRequest {
  /** optional parameter key */
  networkParameterKey: string;
}

export interface ListNetworkParametersResponse {
  networkParameters: NetworkParameter[];
}

export interface ListNetworkLimitsRequest {}

export interface ListNetworkLimitsResponse {
  networkLimits: NetworkLimits | undefined;
}

export interface ListPartiesRequest {}

export interface ListPartiesResponse {
  parties: Party[];
}

export interface ListValidatorsRequest {}

export interface ListValidatorsResponse {
  validators: ValidatorUpdate[];
}

export interface ListMarketsRequest {
  market: string;
}

export interface ListMarketsResponse {
  markets: Market[];
}

export interface ListProposalsRequest {
  /** optional ID */
  proposal: string;
  /** optional party */
  proposer: string;
}

export interface ListProposalsResponse {
  proposals: Proposal[];
}

export interface ListMarketsDataRequest {
  market: string;
}

export interface ListMarketsDataResponse {
  marketsData: MarketData[];
}

export interface ListVotesRequest {
  proposal: string;
  party: string;
}

export interface ListVotesResponse {
  votes: Vote[];
}

export interface PartyStake {
  party: string;
  currentStakeAvailable: string;
  stakeLinkings: StakeLinking[];
}

export interface ListPartiesStakeRequest {
  party: string;
}

export interface ListPartiesStakeResponse {
  partiesStake: PartyStake[];
}

export interface ListDelegationsRequest {
  party: string;
  node: string;
  epochSeq: string;
}

export interface ListDelegationsResponse {
  delegations: Delegation[];
}

function createBaseAccount(): Account {
  return { party: "", market: "", balance: "", asset: "", type: "" };
}

export const Account = {
  encode(
    message: Account,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.asset !== "") {
      writer.uint32(42).string(message.asset);
    }
    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 5:
          message.asset = reader.string();
          break;
        case 6:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      market: isSet(object.market) ? String(object.market) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.market !== undefined && (obj.market = message.market);
    message.balance !== undefined && (obj.balance = message.balance);
    message.asset !== undefined && (obj.asset = message.asset);
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.party = object.party ?? "";
    message.market = object.market ?? "";
    message.balance = object.balance ?? "";
    message.asset = object.asset ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseListAccountsRequest(): ListAccountsRequest {
  return { party: "", market: "" };
}

export const ListAccountsRequest = {
  encode(
    message: ListAccountsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAccountsRequest {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      market: isSet(object.market) ? String(object.market) : "",
    };
  },

  toJSON(message: ListAccountsRequest): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAccountsRequest>, I>>(
    object: I
  ): ListAccountsRequest {
    const message = createBaseListAccountsRequest();
    message.party = object.party ?? "";
    message.market = object.market ?? "";
    return message;
  },
};

function createBaseListAccountsResponse(): ListAccountsResponse {
  return { accounts: [] };
}

export const ListAccountsResponse = {
  encode(
    message: ListAccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAccountsResponse>, I>>(
    object: I
  ): ListAccountsResponse {
    const message = createBaseListAccountsResponse();
    message.accounts =
      object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListAssetsRequest(): ListAssetsRequest {
  return { asset: "" };
}

export const ListAssetsRequest = {
  encode(
    message: ListAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAssetsRequest {
    return {
      asset: isSet(object.asset) ? String(object.asset) : "",
    };
  },

  toJSON(message: ListAssetsRequest): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAssetsRequest>, I>>(
    object: I
  ): ListAssetsRequest {
    const message = createBaseListAssetsRequest();
    message.asset = object.asset ?? "";
    return message;
  },
};

function createBaseListAssetsResponse(): ListAssetsResponse {
  return { assets: [] };
}

export const ListAssetsResponse = {
  encode(
    message: ListAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAssetsResponse {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListAssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAssetsResponse>, I>>(
    object: I
  ): ListAssetsResponse {
    const message = createBaseListAssetsResponse();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListNetworkParametersRequest(): ListNetworkParametersRequest {
  return { networkParameterKey: "" };
}

export const ListNetworkParametersRequest = {
  encode(
    message: ListNetworkParametersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkParameterKey !== "") {
      writer.uint32(10).string(message.networkParameterKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkParametersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkParametersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkParameterKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListNetworkParametersRequest {
    return {
      networkParameterKey: isSet(object.networkParameterKey)
        ? String(object.networkParameterKey)
        : "",
    };
  },

  toJSON(message: ListNetworkParametersRequest): unknown {
    const obj: any = {};
    message.networkParameterKey !== undefined &&
      (obj.networkParameterKey = message.networkParameterKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkParametersRequest>, I>>(
    object: I
  ): ListNetworkParametersRequest {
    const message = createBaseListNetworkParametersRequest();
    message.networkParameterKey = object.networkParameterKey ?? "";
    return message;
  },
};

function createBaseListNetworkParametersResponse(): ListNetworkParametersResponse {
  return { networkParameters: [] };
}

export const ListNetworkParametersResponse = {
  encode(
    message: ListNetworkParametersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.networkParameters) {
      NetworkParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkParametersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkParametersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkParameters.push(
            NetworkParameter.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListNetworkParametersResponse {
    return {
      networkParameters: Array.isArray(object?.networkParameters)
        ? object.networkParameters.map((e: any) => NetworkParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListNetworkParametersResponse): unknown {
    const obj: any = {};
    if (message.networkParameters) {
      obj.networkParameters = message.networkParameters.map((e) =>
        e ? NetworkParameter.toJSON(e) : undefined
      );
    } else {
      obj.networkParameters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkParametersResponse>, I>>(
    object: I
  ): ListNetworkParametersResponse {
    const message = createBaseListNetworkParametersResponse();
    message.networkParameters =
      object.networkParameters?.map((e) => NetworkParameter.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseListNetworkLimitsRequest(): ListNetworkLimitsRequest {
  return {};
}

export const ListNetworkLimitsRequest = {
  encode(
    _: ListNetworkLimitsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkLimitsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListNetworkLimitsRequest {
    return {};
  },

  toJSON(_: ListNetworkLimitsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkLimitsRequest>, I>>(
    _: I
  ): ListNetworkLimitsRequest {
    const message = createBaseListNetworkLimitsRequest();
    return message;
  },
};

function createBaseListNetworkLimitsResponse(): ListNetworkLimitsResponse {
  return { networkLimits: undefined };
}

export const ListNetworkLimitsResponse = {
  encode(
    message: ListNetworkLimitsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.networkLimits !== undefined) {
      NetworkLimits.encode(
        message.networkLimits,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListNetworkLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNetworkLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.networkLimits = NetworkLimits.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListNetworkLimitsResponse {
    return {
      networkLimits: isSet(object.networkLimits)
        ? NetworkLimits.fromJSON(object.networkLimits)
        : undefined,
    };
  },

  toJSON(message: ListNetworkLimitsResponse): unknown {
    const obj: any = {};
    message.networkLimits !== undefined &&
      (obj.networkLimits = message.networkLimits
        ? NetworkLimits.toJSON(message.networkLimits)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListNetworkLimitsResponse>, I>>(
    object: I
  ): ListNetworkLimitsResponse {
    const message = createBaseListNetworkLimitsResponse();
    message.networkLimits =
      object.networkLimits !== undefined && object.networkLimits !== null
        ? NetworkLimits.fromPartial(object.networkLimits)
        : undefined;
    return message;
  },
};

function createBaseListPartiesRequest(): ListPartiesRequest {
  return {};
}

export const ListPartiesRequest = {
  encode(
    _: ListPartiesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPartiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPartiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListPartiesRequest {
    return {};
  },

  toJSON(_: ListPartiesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPartiesRequest>, I>>(
    _: I
  ): ListPartiesRequest {
    const message = createBaseListPartiesRequest();
    return message;
  },
};

function createBaseListPartiesResponse(): ListPartiesResponse {
  return { parties: [] };
}

export const ListPartiesResponse = {
  encode(
    message: ListPartiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.parties) {
      Party.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPartiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPartiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parties.push(Party.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPartiesResponse {
    return {
      parties: Array.isArray(object?.parties)
        ? object.parties.map((e: any) => Party.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListPartiesResponse): unknown {
    const obj: any = {};
    if (message.parties) {
      obj.parties = message.parties.map((e) =>
        e ? Party.toJSON(e) : undefined
      );
    } else {
      obj.parties = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPartiesResponse>, I>>(
    object: I
  ): ListPartiesResponse {
    const message = createBaseListPartiesResponse();
    message.parties = object.parties?.map((e) => Party.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListValidatorsRequest(): ListValidatorsRequest {
  return {};
}

export const ListValidatorsRequest = {
  encode(
    _: ListValidatorsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListValidatorsRequest {
    return {};
  },

  toJSON(_: ListValidatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListValidatorsRequest>, I>>(
    _: I
  ): ListValidatorsRequest {
    const message = createBaseListValidatorsRequest();
    return message;
  },
};

function createBaseListValidatorsResponse(): ListValidatorsResponse {
  return { validators: [] };
}

export const ListValidatorsResponse = {
  encode(
    message: ListValidatorsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(
            ValidatorUpdate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? ValidatorUpdate.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListValidatorsResponse>, I>>(
    object: I
  ): ListValidatorsResponse {
    const message = createBaseListValidatorsResponse();
    message.validators =
      object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMarketsRequest(): ListMarketsRequest {
  return { market: "" };
}

export const ListMarketsRequest = {
  encode(
    message: ListMarketsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMarketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMarketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMarketsRequest {
    return {
      market: isSet(object.market) ? String(object.market) : "",
    };
  },

  toJSON(message: ListMarketsRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMarketsRequest>, I>>(
    object: I
  ): ListMarketsRequest {
    const message = createBaseListMarketsRequest();
    message.market = object.market ?? "";
    return message;
  },
};

function createBaseListMarketsResponse(): ListMarketsResponse {
  return { markets: [] };
}

export const ListMarketsResponse = {
  encode(
    message: ListMarketsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.markets) {
      Market.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListMarketsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMarketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.markets.push(Market.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMarketsResponse {
    return {
      markets: Array.isArray(object?.markets)
        ? object.markets.map((e: any) => Market.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListMarketsResponse): unknown {
    const obj: any = {};
    if (message.markets) {
      obj.markets = message.markets.map((e) =>
        e ? Market.toJSON(e) : undefined
      );
    } else {
      obj.markets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMarketsResponse>, I>>(
    object: I
  ): ListMarketsResponse {
    const message = createBaseListMarketsResponse();
    message.markets = object.markets?.map((e) => Market.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListProposalsRequest(): ListProposalsRequest {
  return { proposal: "", proposer: "" };
}

export const ListProposalsRequest = {
  encode(
    message: ListProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== "") {
      writer.uint32(10).string(message.proposal);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = reader.string();
          break;
        case 2:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProposalsRequest {
    return {
      proposal: isSet(object.proposal) ? String(object.proposal) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
    };
  },

  toJSON(message: ListProposalsRequest): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProposalsRequest>, I>>(
    object: I
  ): ListProposalsRequest {
    const message = createBaseListProposalsRequest();
    message.proposal = object.proposal ?? "";
    message.proposer = object.proposer ?? "";
    return message;
  },
};

function createBaseListProposalsResponse(): ListProposalsResponse {
  return { proposals: [] };
}

export const ListProposalsResponse = {
  encode(
    message: ListProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListProposalsResponse>, I>>(
    object: I
  ): ListProposalsResponse {
    const message = createBaseListProposalsResponse();
    message.proposals =
      object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListMarketsDataRequest(): ListMarketsDataRequest {
  return { market: "" };
}

export const ListMarketsDataRequest = {
  encode(
    message: ListMarketsDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListMarketsDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMarketsDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMarketsDataRequest {
    return {
      market: isSet(object.market) ? String(object.market) : "",
    };
  },

  toJSON(message: ListMarketsDataRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMarketsDataRequest>, I>>(
    object: I
  ): ListMarketsDataRequest {
    const message = createBaseListMarketsDataRequest();
    message.market = object.market ?? "";
    return message;
  },
};

function createBaseListMarketsDataResponse(): ListMarketsDataResponse {
  return { marketsData: [] };
}

export const ListMarketsDataResponse = {
  encode(
    message: ListMarketsDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketsData) {
      MarketData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListMarketsDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListMarketsDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketsData.push(MarketData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListMarketsDataResponse {
    return {
      marketsData: Array.isArray(object?.marketsData)
        ? object.marketsData.map((e: any) => MarketData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListMarketsDataResponse): unknown {
    const obj: any = {};
    if (message.marketsData) {
      obj.marketsData = message.marketsData.map((e) =>
        e ? MarketData.toJSON(e) : undefined
      );
    } else {
      obj.marketsData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListMarketsDataResponse>, I>>(
    object: I
  ): ListMarketsDataResponse {
    const message = createBaseListMarketsDataResponse();
    message.marketsData =
      object.marketsData?.map((e) => MarketData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListVotesRequest(): ListVotesRequest {
  return { proposal: "", party: "" };
}

export const ListVotesRequest = {
  encode(
    message: ListVotesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== "") {
      writer.uint32(10).string(message.proposal);
    }
    if (message.party !== "") {
      writer.uint32(18).string(message.party);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = reader.string();
          break;
        case 2:
          message.party = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListVotesRequest {
    return {
      proposal: isSet(object.proposal) ? String(object.proposal) : "",
      party: isSet(object.party) ? String(object.party) : "",
    };
  },

  toJSON(message: ListVotesRequest): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal);
    message.party !== undefined && (obj.party = message.party);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListVotesRequest>, I>>(
    object: I
  ): ListVotesRequest {
    const message = createBaseListVotesRequest();
    message.proposal = object.proposal ?? "";
    message.party = object.party ?? "";
    return message;
  },
};

function createBaseListVotesResponse(): ListVotesResponse {
  return { votes: [] };
}

export const ListVotesResponse = {
  encode(
    message: ListVotesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListVotesResponse {
    return {
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListVotesResponse): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListVotesResponse>, I>>(
    object: I
  ): ListVotesResponse {
    const message = createBaseListVotesResponse();
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    return message;
  },
};

function createBasePartyStake(): PartyStake {
  return { party: "", currentStakeAvailable: "", stakeLinkings: [] };
}

export const PartyStake = {
  encode(
    message: PartyStake,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.currentStakeAvailable !== "") {
      writer.uint32(18).string(message.currentStakeAvailable);
    }
    for (const v of message.stakeLinkings) {
      StakeLinking.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyStake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.currentStakeAvailable = reader.string();
          break;
        case 3:
          message.stakeLinkings.push(
            StakeLinking.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyStake {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      currentStakeAvailable: isSet(object.currentStakeAvailable)
        ? String(object.currentStakeAvailable)
        : "",
      stakeLinkings: Array.isArray(object?.stakeLinkings)
        ? object.stakeLinkings.map((e: any) => StakeLinking.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PartyStake): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.currentStakeAvailable !== undefined &&
      (obj.currentStakeAvailable = message.currentStakeAvailable);
    if (message.stakeLinkings) {
      obj.stakeLinkings = message.stakeLinkings.map((e) =>
        e ? StakeLinking.toJSON(e) : undefined
      );
    } else {
      obj.stakeLinkings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyStake>, I>>(
    object: I
  ): PartyStake {
    const message = createBasePartyStake();
    message.party = object.party ?? "";
    message.currentStakeAvailable = object.currentStakeAvailable ?? "";
    message.stakeLinkings =
      object.stakeLinkings?.map((e) => StakeLinking.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListPartiesStakeRequest(): ListPartiesStakeRequest {
  return { party: "" };
}

export const ListPartiesStakeRequest = {
  encode(
    message: ListPartiesStakeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPartiesStakeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPartiesStakeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPartiesStakeRequest {
    return {
      party: isSet(object.party) ? String(object.party) : "",
    };
  },

  toJSON(message: ListPartiesStakeRequest): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPartiesStakeRequest>, I>>(
    object: I
  ): ListPartiesStakeRequest {
    const message = createBaseListPartiesStakeRequest();
    message.party = object.party ?? "";
    return message;
  },
};

function createBaseListPartiesStakeResponse(): ListPartiesStakeResponse {
  return { partiesStake: [] };
}

export const ListPartiesStakeResponse = {
  encode(
    message: ListPartiesStakeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.partiesStake) {
      PartyStake.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListPartiesStakeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPartiesStakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partiesStake.push(PartyStake.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListPartiesStakeResponse {
    return {
      partiesStake: Array.isArray(object?.partiesStake)
        ? object.partiesStake.map((e: any) => PartyStake.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListPartiesStakeResponse): unknown {
    const obj: any = {};
    if (message.partiesStake) {
      obj.partiesStake = message.partiesStake.map((e) =>
        e ? PartyStake.toJSON(e) : undefined
      );
    } else {
      obj.partiesStake = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListPartiesStakeResponse>, I>>(
    object: I
  ): ListPartiesStakeResponse {
    const message = createBaseListPartiesStakeResponse();
    message.partiesStake =
      object.partiesStake?.map((e) => PartyStake.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListDelegationsRequest(): ListDelegationsRequest {
  return { party: "", node: "", epochSeq: "" };
}

export const ListDelegationsRequest = {
  encode(
    message: ListDelegationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (message.epochSeq !== "") {
      writer.uint32(26).string(message.epochSeq);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.node = reader.string();
          break;
        case 3:
          message.epochSeq = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDelegationsRequest {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      node: isSet(object.node) ? String(object.node) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
    };
  },

  toJSON(message: ListDelegationsRequest): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.node !== undefined && (obj.node = message.node);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDelegationsRequest>, I>>(
    object: I
  ): ListDelegationsRequest {
    const message = createBaseListDelegationsRequest();
    message.party = object.party ?? "";
    message.node = object.node ?? "";
    message.epochSeq = object.epochSeq ?? "";
    return message;
  },
};

function createBaseListDelegationsResponse(): ListDelegationsResponse {
  return { delegations: [] };
}

export const ListDelegationsResponse = {
  encode(
    message: ListDelegationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => Delegation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? Delegation.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListDelegationsResponse>, I>>(
    object: I
  ): ListDelegationsResponse {
    const message = createBaseListDelegationsResponse();
    message.delegations =
      object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    return message;
  },
};

export interface CoreStateService {
  ListAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse>;
  ListAssets(request: ListAssetsRequest): Promise<ListAssetsResponse>;
  ListNetworkParameters(
    request: ListNetworkParametersRequest
  ): Promise<ListNetworkParametersResponse>;
  ListNetworkLimits(
    request: ListNetworkLimitsRequest
  ): Promise<ListNetworkLimitsResponse>;
  ListParties(request: ListPartiesRequest): Promise<ListPartiesResponse>;
  ListValidators(
    request: ListValidatorsRequest
  ): Promise<ListValidatorsResponse>;
  ListMarkets(request: ListMarketsRequest): Promise<ListMarketsResponse>;
  ListProposals(request: ListProposalsRequest): Promise<ListProposalsResponse>;
  ListMarketsData(
    request: ListMarketsDataRequest
  ): Promise<ListMarketsDataResponse>;
  ListVotes(request: ListVotesRequest): Promise<ListVotesResponse>;
  ListPartiesStake(
    request: ListPartiesStakeRequest
  ): Promise<ListPartiesStakeResponse>;
  ListDelegations(
    request: ListDelegationsRequest
  ): Promise<ListDelegationsResponse>;
}

export class CoreStateServiceClientImpl implements CoreStateService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ListAccounts = this.ListAccounts.bind(this);
    this.ListAssets = this.ListAssets.bind(this);
    this.ListNetworkParameters = this.ListNetworkParameters.bind(this);
    this.ListNetworkLimits = this.ListNetworkLimits.bind(this);
    this.ListParties = this.ListParties.bind(this);
    this.ListValidators = this.ListValidators.bind(this);
    this.ListMarkets = this.ListMarkets.bind(this);
    this.ListProposals = this.ListProposals.bind(this);
    this.ListMarketsData = this.ListMarketsData.bind(this);
    this.ListVotes = this.ListVotes.bind(this);
    this.ListPartiesStake = this.ListPartiesStake.bind(this);
    this.ListDelegations = this.ListDelegations.bind(this);
  }
  ListAccounts(request: ListAccountsRequest): Promise<ListAccountsResponse> {
    const data = ListAccountsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListAccounts",
      data
    );
    return promise.then((data) =>
      ListAccountsResponse.decode(new _m0.Reader(data))
    );
  }

  ListAssets(request: ListAssetsRequest): Promise<ListAssetsResponse> {
    const data = ListAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListAssets",
      data
    );
    return promise.then((data) =>
      ListAssetsResponse.decode(new _m0.Reader(data))
    );
  }

  ListNetworkParameters(
    request: ListNetworkParametersRequest
  ): Promise<ListNetworkParametersResponse> {
    const data = ListNetworkParametersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListNetworkParameters",
      data
    );
    return promise.then((data) =>
      ListNetworkParametersResponse.decode(new _m0.Reader(data))
    );
  }

  ListNetworkLimits(
    request: ListNetworkLimitsRequest
  ): Promise<ListNetworkLimitsResponse> {
    const data = ListNetworkLimitsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListNetworkLimits",
      data
    );
    return promise.then((data) =>
      ListNetworkLimitsResponse.decode(new _m0.Reader(data))
    );
  }

  ListParties(request: ListPartiesRequest): Promise<ListPartiesResponse> {
    const data = ListPartiesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListParties",
      data
    );
    return promise.then((data) =>
      ListPartiesResponse.decode(new _m0.Reader(data))
    );
  }

  ListValidators(
    request: ListValidatorsRequest
  ): Promise<ListValidatorsResponse> {
    const data = ListValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListValidators",
      data
    );
    return promise.then((data) =>
      ListValidatorsResponse.decode(new _m0.Reader(data))
    );
  }

  ListMarkets(request: ListMarketsRequest): Promise<ListMarketsResponse> {
    const data = ListMarketsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListMarkets",
      data
    );
    return promise.then((data) =>
      ListMarketsResponse.decode(new _m0.Reader(data))
    );
  }

  ListProposals(request: ListProposalsRequest): Promise<ListProposalsResponse> {
    const data = ListProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListProposals",
      data
    );
    return promise.then((data) =>
      ListProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  ListMarketsData(
    request: ListMarketsDataRequest
  ): Promise<ListMarketsDataResponse> {
    const data = ListMarketsDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListMarketsData",
      data
    );
    return promise.then((data) =>
      ListMarketsDataResponse.decode(new _m0.Reader(data))
    );
  }

  ListVotes(request: ListVotesRequest): Promise<ListVotesResponse> {
    const data = ListVotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListVotes",
      data
    );
    return promise.then((data) =>
      ListVotesResponse.decode(new _m0.Reader(data))
    );
  }

  ListPartiesStake(
    request: ListPartiesStakeRequest
  ): Promise<ListPartiesStakeResponse> {
    const data = ListPartiesStakeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListPartiesStake",
      data
    );
    return promise.then((data) =>
      ListPartiesStakeResponse.decode(new _m0.Reader(data))
    );
  }

  ListDelegations(
    request: ListDelegationsRequest
  ): Promise<ListDelegationsResponse> {
    const data = ListDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "vega.api.v1.CoreStateService",
      "ListDelegations",
      data
    );
    return promise.then((data) =>
      ListDelegationsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
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
