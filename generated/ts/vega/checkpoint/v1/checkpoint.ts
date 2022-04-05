/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  AccountType,
  NetworkParameter,
  Transfer,
  RankingScore,
  accountTypeFromJSON,
  accountTypeToJSON,
} from "../../../vega/vega";
import { AssetDetails } from "../../../vega/assets";
import { Proposal } from "../../../vega/governance";
import {
  Transfer as Transfer1,
  ValidatorUpdate,
  StakeLinking,
  ERC20MultiSigSignerEvent,
  ERC20MultiSigThresholdSetEvent,
} from "../../../vega/events/v1/events";

export const protobufPackage = "vega.checkpoint.v1";

/** CheckpointState is the entire checkpoint serialised (basically serialised the Checkpoint message + hash) */
export interface CheckpointState {
  hash: Uint8Array;
  state: Uint8Array;
}

/** Checkpoint aggregates the various engine snapshots */
export interface Checkpoint {
  governance: Uint8Array;
  assets: Uint8Array;
  collateral: Uint8Array;
  networkParameters: Uint8Array;
  delegation: Uint8Array;
  /** will just be an epoch event */
  epoch: Uint8Array;
  block: Uint8Array;
  rewards: Uint8Array;
  banking: Uint8Array;
  validators: Uint8Array;
  staking: Uint8Array;
  multisigControl: Uint8Array;
}

/** AssetEntrty is a single (enabled) asset */
export interface AssetEntry {
  id: string;
  assetDetails: AssetDetails | undefined;
}

/** Assets contains all the enabled assets as AssetEntries */
export interface Assets {
  assets: AssetEntry[];
}

/** AssetBalance represents the total balance of a given asset for a party */
export interface AssetBalance {
  party: string;
  asset: string;
  balance: string;
}

/** Collateral contains the balances per party */
export interface Collateral {
  balances: AssetBalance[];
}

/** NetParams contains all network parameters */
export interface NetParams {
  params: NetworkParameter[];
}

/** Proposals will contain all accepted proposals */
export interface Proposals {
  proposals: Proposal[];
}

/**
 * Delegated amounts for party/node
 * undelegate and epoch seq are only relevant for pending entries
 */
export interface DelegateEntry {
  party: string;
  node: string;
  amount: string;
  undelegate: boolean;
  epochSeq: string;
}

/** Delegate contains all entries for a checkpoint */
export interface Delegate {
  active: DelegateEntry[];
  pending: DelegateEntry[];
  autoDelegation: string[];
}

/**
 * Block message contains data related to block at which the checkpoint
 * was created (ie block height)
 */
export interface Block {
  height: string;
}

export interface Rewards {
  rewards: RewardPayout[];
}

export interface RewardPayout {
  payoutTime: string;
  rewardsPayout: PendingRewardPayout[];
}

export interface PendingRewardPayout {
  fromAccount: string;
  asset: string;
  partyAmount: PartyAmount[];
  totalReward: string;
  epochSeq: string;
  timestamp: string;
}

export interface PartyAmount {
  party: string;
  amount: string;
}

export interface PendingKeyRotation {
  /**
   * Relative target block height is: target block height - current block height.
   * Useful for cross blockchain compatibility.
   */
  relativeTargetBlockHeight: string;
  nodeId: string;
  newPubKey: string;
  newPubKeyIndex: number;
}

export interface PendingEthereumKeyRotation {
  /**
   * Relative target block height is: target block height - current block height.
   * Useful for cross blockchain compatibility.
   */
  relativeTargetBlockHeight: string;
  nodeId: string;
  newAddress: string;
}

export interface ScheduledTransfer {
  transfer: Transfer | undefined;
  accountType: AccountType;
  reference: string;
  oneoffTransfer: Transfer1 | undefined;
}

export interface ScheduledTransferAtTime {
  deliverOn: string;
  transfers: ScheduledTransfer[];
}

export interface RecurringTransfers {
  recurringTransfers: Transfer1[];
}

export interface Banking {
  transfersAtTime: ScheduledTransferAtTime[];
  recurringTransfers: RecurringTransfers | undefined;
}

export interface Validators {
  validatorState: ValidatorState[];
  pendingKeyRotations: PendingKeyRotation[];
  pendingEthereumKeyRotations: PendingEthereumKeyRotation[];
}

export interface ValidatorState {
  validatorUpdate: ValidatorUpdate | undefined;
  status: number;
  ethEventsForwarded: string;
  validatorPower: string;
  rankingScore: RankingScore | undefined;
}

export interface Staking {
  accepted: StakeLinking[];
  lastBlockSeen: string;
}

export interface MultisigControl {
  signers: ERC20MultiSigSignerEvent[];
  thresholdSet: ERC20MultiSigThresholdSetEvent | undefined;
  lastBlockSeen: string;
}

function createBaseCheckpointState(): CheckpointState {
  return { hash: new Uint8Array(), state: new Uint8Array() };
}

export const CheckpointState = {
  encode(
    message: CheckpointState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.state.length !== 0) {
      writer.uint32(18).bytes(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CheckpointState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpointState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.state = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckpointState {
    return {
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      state: isSet(object.state)
        ? bytesFromBase64(object.state)
        : new Uint8Array(),
    };
  },

  toJSON(message: CheckpointState): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    message.state !== undefined &&
      (obj.state = base64FromBytes(
        message.state !== undefined ? message.state : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckpointState>, I>>(
    object: I
  ): CheckpointState {
    const message = createBaseCheckpointState();
    message.hash = object.hash ?? new Uint8Array();
    message.state = object.state ?? new Uint8Array();
    return message;
  },
};

function createBaseCheckpoint(): Checkpoint {
  return {
    governance: new Uint8Array(),
    assets: new Uint8Array(),
    collateral: new Uint8Array(),
    networkParameters: new Uint8Array(),
    delegation: new Uint8Array(),
    epoch: new Uint8Array(),
    block: new Uint8Array(),
    rewards: new Uint8Array(),
    banking: new Uint8Array(),
    validators: new Uint8Array(),
    staking: new Uint8Array(),
    multisigControl: new Uint8Array(),
  };
}

export const Checkpoint = {
  encode(
    message: Checkpoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.governance.length !== 0) {
      writer.uint32(10).bytes(message.governance);
    }
    if (message.assets.length !== 0) {
      writer.uint32(18).bytes(message.assets);
    }
    if (message.collateral.length !== 0) {
      writer.uint32(26).bytes(message.collateral);
    }
    if (message.networkParameters.length !== 0) {
      writer.uint32(34).bytes(message.networkParameters);
    }
    if (message.delegation.length !== 0) {
      writer.uint32(42).bytes(message.delegation);
    }
    if (message.epoch.length !== 0) {
      writer.uint32(50).bytes(message.epoch);
    }
    if (message.block.length !== 0) {
      writer.uint32(58).bytes(message.block);
    }
    if (message.rewards.length !== 0) {
      writer.uint32(66).bytes(message.rewards);
    }
    if (message.banking.length !== 0) {
      writer.uint32(74).bytes(message.banking);
    }
    if (message.validators.length !== 0) {
      writer.uint32(82).bytes(message.validators);
    }
    if (message.staking.length !== 0) {
      writer.uint32(90).bytes(message.staking);
    }
    if (message.multisigControl.length !== 0) {
      writer.uint32(98).bytes(message.multisigControl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Checkpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governance = reader.bytes();
          break;
        case 2:
          message.assets = reader.bytes();
          break;
        case 3:
          message.collateral = reader.bytes();
          break;
        case 4:
          message.networkParameters = reader.bytes();
          break;
        case 5:
          message.delegation = reader.bytes();
          break;
        case 6:
          message.epoch = reader.bytes();
          break;
        case 7:
          message.block = reader.bytes();
          break;
        case 8:
          message.rewards = reader.bytes();
          break;
        case 9:
          message.banking = reader.bytes();
          break;
        case 10:
          message.validators = reader.bytes();
          break;
        case 11:
          message.staking = reader.bytes();
          break;
        case 12:
          message.multisigControl = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Checkpoint {
    return {
      governance: isSet(object.governance)
        ? bytesFromBase64(object.governance)
        : new Uint8Array(),
      assets: isSet(object.assets)
        ? bytesFromBase64(object.assets)
        : new Uint8Array(),
      collateral: isSet(object.collateral)
        ? bytesFromBase64(object.collateral)
        : new Uint8Array(),
      networkParameters: isSet(object.networkParameters)
        ? bytesFromBase64(object.networkParameters)
        : new Uint8Array(),
      delegation: isSet(object.delegation)
        ? bytesFromBase64(object.delegation)
        : new Uint8Array(),
      epoch: isSet(object.epoch)
        ? bytesFromBase64(object.epoch)
        : new Uint8Array(),
      block: isSet(object.block)
        ? bytesFromBase64(object.block)
        : new Uint8Array(),
      rewards: isSet(object.rewards)
        ? bytesFromBase64(object.rewards)
        : new Uint8Array(),
      banking: isSet(object.banking)
        ? bytesFromBase64(object.banking)
        : new Uint8Array(),
      validators: isSet(object.validators)
        ? bytesFromBase64(object.validators)
        : new Uint8Array(),
      staking: isSet(object.staking)
        ? bytesFromBase64(object.staking)
        : new Uint8Array(),
      multisigControl: isSet(object.multisigControl)
        ? bytesFromBase64(object.multisigControl)
        : new Uint8Array(),
    };
  },

  toJSON(message: Checkpoint): unknown {
    const obj: any = {};
    message.governance !== undefined &&
      (obj.governance = base64FromBytes(
        message.governance !== undefined ? message.governance : new Uint8Array()
      ));
    message.assets !== undefined &&
      (obj.assets = base64FromBytes(
        message.assets !== undefined ? message.assets : new Uint8Array()
      ));
    message.collateral !== undefined &&
      (obj.collateral = base64FromBytes(
        message.collateral !== undefined ? message.collateral : new Uint8Array()
      ));
    message.networkParameters !== undefined &&
      (obj.networkParameters = base64FromBytes(
        message.networkParameters !== undefined
          ? message.networkParameters
          : new Uint8Array()
      ));
    message.delegation !== undefined &&
      (obj.delegation = base64FromBytes(
        message.delegation !== undefined ? message.delegation : new Uint8Array()
      ));
    message.epoch !== undefined &&
      (obj.epoch = base64FromBytes(
        message.epoch !== undefined ? message.epoch : new Uint8Array()
      ));
    message.block !== undefined &&
      (obj.block = base64FromBytes(
        message.block !== undefined ? message.block : new Uint8Array()
      ));
    message.rewards !== undefined &&
      (obj.rewards = base64FromBytes(
        message.rewards !== undefined ? message.rewards : new Uint8Array()
      ));
    message.banking !== undefined &&
      (obj.banking = base64FromBytes(
        message.banking !== undefined ? message.banking : new Uint8Array()
      ));
    message.validators !== undefined &&
      (obj.validators = base64FromBytes(
        message.validators !== undefined ? message.validators : new Uint8Array()
      ));
    message.staking !== undefined &&
      (obj.staking = base64FromBytes(
        message.staking !== undefined ? message.staking : new Uint8Array()
      ));
    message.multisigControl !== undefined &&
      (obj.multisigControl = base64FromBytes(
        message.multisigControl !== undefined
          ? message.multisigControl
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Checkpoint>, I>>(
    object: I
  ): Checkpoint {
    const message = createBaseCheckpoint();
    message.governance = object.governance ?? new Uint8Array();
    message.assets = object.assets ?? new Uint8Array();
    message.collateral = object.collateral ?? new Uint8Array();
    message.networkParameters = object.networkParameters ?? new Uint8Array();
    message.delegation = object.delegation ?? new Uint8Array();
    message.epoch = object.epoch ?? new Uint8Array();
    message.block = object.block ?? new Uint8Array();
    message.rewards = object.rewards ?? new Uint8Array();
    message.banking = object.banking ?? new Uint8Array();
    message.validators = object.validators ?? new Uint8Array();
    message.staking = object.staking ?? new Uint8Array();
    message.multisigControl = object.multisigControl ?? new Uint8Array();
    return message;
  },
};

function createBaseAssetEntry(): AssetEntry {
  return { id: "", assetDetails: undefined };
}

export const AssetEntry = {
  encode(
    message: AssetEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.assetDetails !== undefined) {
      AssetDetails.encode(
        message.assetDetails,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.assetDetails = AssetDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetEntry {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      assetDetails: isSet(object.assetDetails)
        ? AssetDetails.fromJSON(object.assetDetails)
        : undefined,
    };
  },

  toJSON(message: AssetEntry): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.assetDetails !== undefined &&
      (obj.assetDetails = message.assetDetails
        ? AssetDetails.toJSON(message.assetDetails)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetEntry>, I>>(
    object: I
  ): AssetEntry {
    const message = createBaseAssetEntry();
    message.id = object.id ?? "";
    message.assetDetails =
      object.assetDetails !== undefined && object.assetDetails !== null
        ? AssetDetails.fromPartial(object.assetDetails)
        : undefined;
    return message;
  },
};

function createBaseAssets(): Assets {
  return { assets: [] };
}

export const Assets = {
  encode(
    message: Assets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      AssetEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Assets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(AssetEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Assets {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => AssetEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Assets): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) =>
        e ? AssetEntry.toJSON(e) : undefined
      );
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Assets>, I>>(object: I): Assets {
    const message = createBaseAssets();
    message.assets = object.assets?.map((e) => AssetEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetBalance(): AssetBalance {
  return { party: "", asset: "", balance: "" };
}

export const AssetBalance = {
  encode(
    message: AssetBalance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetBalance {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
    };
  },

  toJSON(message: AssetBalance): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.asset !== undefined && (obj.asset = message.asset);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AssetBalance>, I>>(
    object: I
  ): AssetBalance {
    const message = createBaseAssetBalance();
    message.party = object.party ?? "";
    message.asset = object.asset ?? "";
    message.balance = object.balance ?? "";
    return message;
  },
};

function createBaseCollateral(): Collateral {
  return { balances: [] };
}

export const Collateral = {
  encode(
    message: Collateral,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balances) {
      AssetBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collateral {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(AssetBalance.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collateral {
    return {
      balances: Array.isArray(object?.balances)
        ? object.balances.map((e: any) => AssetBalance.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Collateral): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? AssetBalance.toJSON(e) : undefined
      );
    } else {
      obj.balances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collateral>, I>>(
    object: I
  ): Collateral {
    const message = createBaseCollateral();
    message.balances =
      object.balances?.map((e) => AssetBalance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNetParams(): NetParams {
  return { params: [] };
}

export const NetParams = {
  encode(
    message: NetParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.params) {
      NetworkParameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params.push(NetworkParameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetParams {
    return {
      params: Array.isArray(object?.params)
        ? object.params.map((e: any) => NetworkParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NetParams): unknown {
    const obj: any = {};
    if (message.params) {
      obj.params = message.params.map((e) =>
        e ? NetworkParameter.toJSON(e) : undefined
      );
    } else {
      obj.params = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetParams>, I>>(
    object: I
  ): NetParams {
    const message = createBaseNetParams();
    message.params =
      object.params?.map((e) => NetworkParameter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProposals(): Proposals {
  return { proposals: [] };
}

export const Proposals = {
  encode(
    message: Proposals,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposals {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposals();
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

  fromJSON(object: any): Proposals {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Proposals): unknown {
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

  fromPartial<I extends Exact<DeepPartial<Proposals>, I>>(
    object: I
  ): Proposals {
    const message = createBaseProposals();
    message.proposals =
      object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegateEntry(): DelegateEntry {
  return { party: "", node: "", amount: "", undelegate: false, epochSeq: "0" };
}

export const DelegateEntry = {
  encode(
    message: DelegateEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.node !== "") {
      writer.uint32(18).string(message.node);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.undelegate === true) {
      writer.uint32(32).bool(message.undelegate);
    }
    if (message.epochSeq !== "0") {
      writer.uint32(40).uint64(message.epochSeq);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegateEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegateEntry();
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
          message.amount = reader.string();
          break;
        case 4:
          message.undelegate = reader.bool();
          break;
        case 5:
          message.epochSeq = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegateEntry {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      node: isSet(object.node) ? String(object.node) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      undelegate: isSet(object.undelegate) ? Boolean(object.undelegate) : false,
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "0",
    };
  },

  toJSON(message: DelegateEntry): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.node !== undefined && (obj.node = message.node);
    message.amount !== undefined && (obj.amount = message.amount);
    message.undelegate !== undefined && (obj.undelegate = message.undelegate);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegateEntry>, I>>(
    object: I
  ): DelegateEntry {
    const message = createBaseDelegateEntry();
    message.party = object.party ?? "";
    message.node = object.node ?? "";
    message.amount = object.amount ?? "";
    message.undelegate = object.undelegate ?? false;
    message.epochSeq = object.epochSeq ?? "0";
    return message;
  },
};

function createBaseDelegate(): Delegate {
  return { active: [], pending: [], autoDelegation: [] };
}

export const Delegate = {
  encode(
    message: Delegate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.active) {
      DelegateEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pending) {
      DelegateEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.autoDelegation) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active.push(DelegateEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pending.push(DelegateEntry.decode(reader, reader.uint32()));
          break;
        case 3:
          message.autoDelegation.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegate {
    return {
      active: Array.isArray(object?.active)
        ? object.active.map((e: any) => DelegateEntry.fromJSON(e))
        : [],
      pending: Array.isArray(object?.pending)
        ? object.pending.map((e: any) => DelegateEntry.fromJSON(e))
        : [],
      autoDelegation: Array.isArray(object?.autoDelegation)
        ? object.autoDelegation.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Delegate): unknown {
    const obj: any = {};
    if (message.active) {
      obj.active = message.active.map((e) =>
        e ? DelegateEntry.toJSON(e) : undefined
      );
    } else {
      obj.active = [];
    }
    if (message.pending) {
      obj.pending = message.pending.map((e) =>
        e ? DelegateEntry.toJSON(e) : undefined
      );
    } else {
      obj.pending = [];
    }
    if (message.autoDelegation) {
      obj.autoDelegation = message.autoDelegation.map((e) => e);
    } else {
      obj.autoDelegation = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegate>, I>>(object: I): Delegate {
    const message = createBaseDelegate();
    message.active =
      object.active?.map((e) => DelegateEntry.fromPartial(e)) || [];
    message.pending =
      object.pending?.map((e) => DelegateEntry.fromPartial(e)) || [];
    message.autoDelegation = object.autoDelegation?.map((e) => e) || [];
    return message;
  },
};

function createBaseBlock(): Block {
  return { height: "0" };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== "0") {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      height: isSet(object.height) ? String(object.height) : "0",
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.height = object.height ?? "0";
    return message;
  },
};

function createBaseRewards(): Rewards {
  return { rewards: [] };
}

export const Rewards = {
  encode(
    message: Rewards,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rewards) {
      RewardPayout.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(RewardPayout.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rewards {
    return {
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => RewardPayout.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Rewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? RewardPayout.toJSON(e) : undefined
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Rewards>, I>>(object: I): Rewards {
    const message = createBaseRewards();
    message.rewards =
      object.rewards?.map((e) => RewardPayout.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRewardPayout(): RewardPayout {
  return { payoutTime: "0", rewardsPayout: [] };
}

export const RewardPayout = {
  encode(
    message: RewardPayout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payoutTime !== "0") {
      writer.uint32(8).int64(message.payoutTime);
    }
    for (const v of message.rewardsPayout) {
      PendingRewardPayout.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardPayout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payoutTime = longToString(reader.int64() as Long);
          break;
        case 2:
          message.rewardsPayout.push(
            PendingRewardPayout.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardPayout {
    return {
      payoutTime: isSet(object.payoutTime) ? String(object.payoutTime) : "0",
      rewardsPayout: Array.isArray(object?.rewardsPayout)
        ? object.rewardsPayout.map((e: any) => PendingRewardPayout.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RewardPayout): unknown {
    const obj: any = {};
    message.payoutTime !== undefined && (obj.payoutTime = message.payoutTime);
    if (message.rewardsPayout) {
      obj.rewardsPayout = message.rewardsPayout.map((e) =>
        e ? PendingRewardPayout.toJSON(e) : undefined
      );
    } else {
      obj.rewardsPayout = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RewardPayout>, I>>(
    object: I
  ): RewardPayout {
    const message = createBaseRewardPayout();
    message.payoutTime = object.payoutTime ?? "0";
    message.rewardsPayout =
      object.rewardsPayout?.map((e) => PendingRewardPayout.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBasePendingRewardPayout(): PendingRewardPayout {
  return {
    fromAccount: "",
    asset: "",
    partyAmount: [],
    totalReward: "",
    epochSeq: "",
    timestamp: "0",
  };
}

export const PendingRewardPayout = {
  encode(
    message: PendingRewardPayout,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fromAccount !== "") {
      writer.uint32(10).string(message.fromAccount);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    for (const v of message.partyAmount) {
      PartyAmount.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalReward !== "") {
      writer.uint32(34).string(message.totalReward);
    }
    if (message.epochSeq !== "") {
      writer.uint32(42).string(message.epochSeq);
    }
    if (message.timestamp !== "0") {
      writer.uint32(48).int64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingRewardPayout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingRewardPayout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAccount = reader.string();
          break;
        case 2:
          message.asset = reader.string();
          break;
        case 3:
          message.partyAmount.push(PartyAmount.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalReward = reader.string();
          break;
        case 5:
          message.epochSeq = reader.string();
          break;
        case 6:
          message.timestamp = longToString(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingRewardPayout {
    return {
      fromAccount: isSet(object.fromAccount) ? String(object.fromAccount) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      partyAmount: Array.isArray(object?.partyAmount)
        ? object.partyAmount.map((e: any) => PartyAmount.fromJSON(e))
        : [],
      totalReward: isSet(object.totalReward) ? String(object.totalReward) : "",
      epochSeq: isSet(object.epochSeq) ? String(object.epochSeq) : "",
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
    };
  },

  toJSON(message: PendingRewardPayout): unknown {
    const obj: any = {};
    message.fromAccount !== undefined &&
      (obj.fromAccount = message.fromAccount);
    message.asset !== undefined && (obj.asset = message.asset);
    if (message.partyAmount) {
      obj.partyAmount = message.partyAmount.map((e) =>
        e ? PartyAmount.toJSON(e) : undefined
      );
    } else {
      obj.partyAmount = [];
    }
    message.totalReward !== undefined &&
      (obj.totalReward = message.totalReward);
    message.epochSeq !== undefined && (obj.epochSeq = message.epochSeq);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingRewardPayout>, I>>(
    object: I
  ): PendingRewardPayout {
    const message = createBasePendingRewardPayout();
    message.fromAccount = object.fromAccount ?? "";
    message.asset = object.asset ?? "";
    message.partyAmount =
      object.partyAmount?.map((e) => PartyAmount.fromPartial(e)) || [];
    message.totalReward = object.totalReward ?? "";
    message.epochSeq = object.epochSeq ?? "";
    message.timestamp = object.timestamp ?? "0";
    return message;
  },
};

function createBasePartyAmount(): PartyAmount {
  return { party: "", amount: "" };
}

export const PartyAmount = {
  encode(
    message: PartyAmount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.party !== "") {
      writer.uint32(10).string(message.party);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PartyAmount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartyAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.party = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PartyAmount {
    return {
      party: isSet(object.party) ? String(object.party) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: PartyAmount): unknown {
    const obj: any = {};
    message.party !== undefined && (obj.party = message.party);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PartyAmount>, I>>(
    object: I
  ): PartyAmount {
    const message = createBasePartyAmount();
    message.party = object.party ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBasePendingKeyRotation(): PendingKeyRotation {
  return {
    relativeTargetBlockHeight: "0",
    nodeId: "",
    newPubKey: "",
    newPubKeyIndex: 0,
  };
}

export const PendingKeyRotation = {
  encode(
    message: PendingKeyRotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.relativeTargetBlockHeight !== "0") {
      writer.uint32(8).uint64(message.relativeTargetBlockHeight);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.newPubKey !== "") {
      writer.uint32(26).string(message.newPubKey);
    }
    if (message.newPubKeyIndex !== 0) {
      writer.uint32(32).uint32(message.newPubKeyIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingKeyRotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingKeyRotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relativeTargetBlockHeight = longToString(
            reader.uint64() as Long
          );
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.newPubKey = reader.string();
          break;
        case 4:
          message.newPubKeyIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingKeyRotation {
    return {
      relativeTargetBlockHeight: isSet(object.relativeTargetBlockHeight)
        ? String(object.relativeTargetBlockHeight)
        : "0",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      newPubKey: isSet(object.newPubKey) ? String(object.newPubKey) : "",
      newPubKeyIndex: isSet(object.newPubKeyIndex)
        ? Number(object.newPubKeyIndex)
        : 0,
    };
  },

  toJSON(message: PendingKeyRotation): unknown {
    const obj: any = {};
    message.relativeTargetBlockHeight !== undefined &&
      (obj.relativeTargetBlockHeight = message.relativeTargetBlockHeight);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey);
    message.newPubKeyIndex !== undefined &&
      (obj.newPubKeyIndex = Math.round(message.newPubKeyIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingKeyRotation>, I>>(
    object: I
  ): PendingKeyRotation {
    const message = createBasePendingKeyRotation();
    message.relativeTargetBlockHeight = object.relativeTargetBlockHeight ?? "0";
    message.nodeId = object.nodeId ?? "";
    message.newPubKey = object.newPubKey ?? "";
    message.newPubKeyIndex = object.newPubKeyIndex ?? 0;
    return message;
  },
};

function createBasePendingEthereumKeyRotation(): PendingEthereumKeyRotation {
  return { relativeTargetBlockHeight: "0", nodeId: "", newAddress: "" };
}

export const PendingEthereumKeyRotation = {
  encode(
    message: PendingEthereumKeyRotation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.relativeTargetBlockHeight !== "0") {
      writer.uint32(8).uint64(message.relativeTargetBlockHeight);
    }
    if (message.nodeId !== "") {
      writer.uint32(18).string(message.nodeId);
    }
    if (message.newAddress !== "") {
      writer.uint32(26).string(message.newAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PendingEthereumKeyRotation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingEthereumKeyRotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relativeTargetBlockHeight = longToString(
            reader.uint64() as Long
          );
          break;
        case 2:
          message.nodeId = reader.string();
          break;
        case 3:
          message.newAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PendingEthereumKeyRotation {
    return {
      relativeTargetBlockHeight: isSet(object.relativeTargetBlockHeight)
        ? String(object.relativeTargetBlockHeight)
        : "0",
      nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
    };
  },

  toJSON(message: PendingEthereumKeyRotation): unknown {
    const obj: any = {};
    message.relativeTargetBlockHeight !== undefined &&
      (obj.relativeTargetBlockHeight = message.relativeTargetBlockHeight);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingEthereumKeyRotation>, I>>(
    object: I
  ): PendingEthereumKeyRotation {
    const message = createBasePendingEthereumKeyRotation();
    message.relativeTargetBlockHeight = object.relativeTargetBlockHeight ?? "0";
    message.nodeId = object.nodeId ?? "";
    message.newAddress = object.newAddress ?? "";
    return message;
  },
};

function createBaseScheduledTransfer(): ScheduledTransfer {
  return {
    transfer: undefined,
    accountType: 0,
    reference: "",
    oneoffTransfer: undefined,
  };
}

export const ScheduledTransfer = {
  encode(
    message: ScheduledTransfer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.transfer !== undefined) {
      Transfer.encode(message.transfer, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountType !== 0) {
      writer.uint32(16).int32(message.accountType);
    }
    if (message.reference !== "") {
      writer.uint32(26).string(message.reference);
    }
    if (message.oneoffTransfer !== undefined) {
      Transfer1.encode(
        message.oneoffTransfer,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfer = Transfer.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountType = reader.int32() as any;
          break;
        case 3:
          message.reference = reader.string();
          break;
        case 4:
          message.oneoffTransfer = Transfer1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduledTransfer {
    return {
      transfer: isSet(object.transfer)
        ? Transfer.fromJSON(object.transfer)
        : undefined,
      accountType: isSet(object.accountType)
        ? accountTypeFromJSON(object.accountType)
        : 0,
      reference: isSet(object.reference) ? String(object.reference) : "",
      oneoffTransfer: isSet(object.oneoffTransfer)
        ? Transfer1.fromJSON(object.oneoffTransfer)
        : undefined,
    };
  },

  toJSON(message: ScheduledTransfer): unknown {
    const obj: any = {};
    message.transfer !== undefined &&
      (obj.transfer = message.transfer
        ? Transfer.toJSON(message.transfer)
        : undefined);
    message.accountType !== undefined &&
      (obj.accountType = accountTypeToJSON(message.accountType));
    message.reference !== undefined && (obj.reference = message.reference);
    message.oneoffTransfer !== undefined &&
      (obj.oneoffTransfer = message.oneoffTransfer
        ? Transfer1.toJSON(message.oneoffTransfer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduledTransfer>, I>>(
    object: I
  ): ScheduledTransfer {
    const message = createBaseScheduledTransfer();
    message.transfer =
      object.transfer !== undefined && object.transfer !== null
        ? Transfer.fromPartial(object.transfer)
        : undefined;
    message.accountType = object.accountType ?? 0;
    message.reference = object.reference ?? "";
    message.oneoffTransfer =
      object.oneoffTransfer !== undefined && object.oneoffTransfer !== null
        ? Transfer1.fromPartial(object.oneoffTransfer)
        : undefined;
    return message;
  },
};

function createBaseScheduledTransferAtTime(): ScheduledTransferAtTime {
  return { deliverOn: "0", transfers: [] };
}

export const ScheduledTransferAtTime = {
  encode(
    message: ScheduledTransferAtTime,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deliverOn !== "0") {
      writer.uint32(8).int64(message.deliverOn);
    }
    for (const v of message.transfers) {
      ScheduledTransfer.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScheduledTransferAtTime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledTransferAtTime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deliverOn = longToString(reader.int64() as Long);
          break;
        case 2:
          message.transfers.push(
            ScheduledTransfer.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScheduledTransferAtTime {
    return {
      deliverOn: isSet(object.deliverOn) ? String(object.deliverOn) : "0",
      transfers: Array.isArray(object?.transfers)
        ? object.transfers.map((e: any) => ScheduledTransfer.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScheduledTransferAtTime): unknown {
    const obj: any = {};
    message.deliverOn !== undefined && (obj.deliverOn = message.deliverOn);
    if (message.transfers) {
      obj.transfers = message.transfers.map((e) =>
        e ? ScheduledTransfer.toJSON(e) : undefined
      );
    } else {
      obj.transfers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScheduledTransferAtTime>, I>>(
    object: I
  ): ScheduledTransferAtTime {
    const message = createBaseScheduledTransferAtTime();
    message.deliverOn = object.deliverOn ?? "0";
    message.transfers =
      object.transfers?.map((e) => ScheduledTransfer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRecurringTransfers(): RecurringTransfers {
  return { recurringTransfers: [] };
}

export const RecurringTransfers = {
  encode(
    message: RecurringTransfers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.recurringTransfers) {
      Transfer1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecurringTransfers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecurringTransfers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recurringTransfers.push(
            Transfer1.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecurringTransfers {
    return {
      recurringTransfers: Array.isArray(object?.recurringTransfers)
        ? object.recurringTransfers.map((e: any) => Transfer1.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RecurringTransfers): unknown {
    const obj: any = {};
    if (message.recurringTransfers) {
      obj.recurringTransfers = message.recurringTransfers.map((e) =>
        e ? Transfer1.toJSON(e) : undefined
      );
    } else {
      obj.recurringTransfers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecurringTransfers>, I>>(
    object: I
  ): RecurringTransfers {
    const message = createBaseRecurringTransfers();
    message.recurringTransfers =
      object.recurringTransfers?.map((e) => Transfer1.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBanking(): Banking {
  return { transfersAtTime: [], recurringTransfers: undefined };
}

export const Banking = {
  encode(
    message: Banking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.transfersAtTime) {
      ScheduledTransferAtTime.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.recurringTransfers !== undefined) {
      RecurringTransfers.encode(
        message.recurringTransfers,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Banking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBanking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersAtTime.push(
            ScheduledTransferAtTime.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.recurringTransfers = RecurringTransfers.decode(
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

  fromJSON(object: any): Banking {
    return {
      transfersAtTime: Array.isArray(object?.transfersAtTime)
        ? object.transfersAtTime.map((e: any) =>
            ScheduledTransferAtTime.fromJSON(e)
          )
        : [],
      recurringTransfers: isSet(object.recurringTransfers)
        ? RecurringTransfers.fromJSON(object.recurringTransfers)
        : undefined,
    };
  },

  toJSON(message: Banking): unknown {
    const obj: any = {};
    if (message.transfersAtTime) {
      obj.transfersAtTime = message.transfersAtTime.map((e) =>
        e ? ScheduledTransferAtTime.toJSON(e) : undefined
      );
    } else {
      obj.transfersAtTime = [];
    }
    message.recurringTransfers !== undefined &&
      (obj.recurringTransfers = message.recurringTransfers
        ? RecurringTransfers.toJSON(message.recurringTransfers)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Banking>, I>>(object: I): Banking {
    const message = createBaseBanking();
    message.transfersAtTime =
      object.transfersAtTime?.map((e) =>
        ScheduledTransferAtTime.fromPartial(e)
      ) || [];
    message.recurringTransfers =
      object.recurringTransfers !== undefined &&
      object.recurringTransfers !== null
        ? RecurringTransfers.fromPartial(object.recurringTransfers)
        : undefined;
    return message;
  },
};

function createBaseValidators(): Validators {
  return {
    validatorState: [],
    pendingKeyRotations: [],
    pendingEthereumKeyRotations: [],
  };
}

export const Validators = {
  encode(
    message: Validators,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.validatorState) {
      ValidatorState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.pendingKeyRotations) {
      PendingKeyRotation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.pendingEthereumKeyRotations) {
      PendingEthereumKeyRotation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorState.push(
            ValidatorState.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pendingKeyRotations.push(
            PendingKeyRotation.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.pendingEthereumKeyRotations.push(
            PendingEthereumKeyRotation.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validators {
    return {
      validatorState: Array.isArray(object?.validatorState)
        ? object.validatorState.map((e: any) => ValidatorState.fromJSON(e))
        : [],
      pendingKeyRotations: Array.isArray(object?.pendingKeyRotations)
        ? object.pendingKeyRotations.map((e: any) =>
            PendingKeyRotation.fromJSON(e)
          )
        : [],
      pendingEthereumKeyRotations: Array.isArray(
        object?.pendingEthereumKeyRotations
      )
        ? object.pendingEthereumKeyRotations.map((e: any) =>
            PendingEthereumKeyRotation.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Validators): unknown {
    const obj: any = {};
    if (message.validatorState) {
      obj.validatorState = message.validatorState.map((e) =>
        e ? ValidatorState.toJSON(e) : undefined
      );
    } else {
      obj.validatorState = [];
    }
    if (message.pendingKeyRotations) {
      obj.pendingKeyRotations = message.pendingKeyRotations.map((e) =>
        e ? PendingKeyRotation.toJSON(e) : undefined
      );
    } else {
      obj.pendingKeyRotations = [];
    }
    if (message.pendingEthereumKeyRotations) {
      obj.pendingEthereumKeyRotations = message.pendingEthereumKeyRotations.map(
        (e) => (e ? PendingEthereumKeyRotation.toJSON(e) : undefined)
      );
    } else {
      obj.pendingEthereumKeyRotations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validators>, I>>(
    object: I
  ): Validators {
    const message = createBaseValidators();
    message.validatorState =
      object.validatorState?.map((e) => ValidatorState.fromPartial(e)) || [];
    message.pendingKeyRotations =
      object.pendingKeyRotations?.map((e) =>
        PendingKeyRotation.fromPartial(e)
      ) || [];
    message.pendingEthereumKeyRotations =
      object.pendingEthereumKeyRotations?.map((e) =>
        PendingEthereumKeyRotation.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseValidatorState(): ValidatorState {
  return {
    validatorUpdate: undefined,
    status: 0,
    ethEventsForwarded: "0",
    validatorPower: "0",
    rankingScore: undefined,
  };
}

export const ValidatorState = {
  encode(
    message: ValidatorState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.validatorUpdate !== undefined) {
      ValidatorUpdate.encode(
        message.validatorUpdate,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.ethEventsForwarded !== "0") {
      writer.uint32(24).uint64(message.ethEventsForwarded);
    }
    if (message.validatorPower !== "0") {
      writer.uint32(32).int64(message.validatorPower);
    }
    if (message.rankingScore !== undefined) {
      RankingScore.encode(
        message.rankingScore,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdate = ValidatorUpdate.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.status = reader.int32();
          break;
        case 3:
          message.ethEventsForwarded = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.validatorPower = longToString(reader.int64() as Long);
          break;
        case 5:
          message.rankingScore = RankingScore.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorState {
    return {
      validatorUpdate: isSet(object.validatorUpdate)
        ? ValidatorUpdate.fromJSON(object.validatorUpdate)
        : undefined,
      status: isSet(object.status) ? Number(object.status) : 0,
      ethEventsForwarded: isSet(object.ethEventsForwarded)
        ? String(object.ethEventsForwarded)
        : "0",
      validatorPower: isSet(object.validatorPower)
        ? String(object.validatorPower)
        : "0",
      rankingScore: isSet(object.rankingScore)
        ? RankingScore.fromJSON(object.rankingScore)
        : undefined,
    };
  },

  toJSON(message: ValidatorState): unknown {
    const obj: any = {};
    message.validatorUpdate !== undefined &&
      (obj.validatorUpdate = message.validatorUpdate
        ? ValidatorUpdate.toJSON(message.validatorUpdate)
        : undefined);
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.ethEventsForwarded !== undefined &&
      (obj.ethEventsForwarded = message.ethEventsForwarded);
    message.validatorPower !== undefined &&
      (obj.validatorPower = message.validatorPower);
    message.rankingScore !== undefined &&
      (obj.rankingScore = message.rankingScore
        ? RankingScore.toJSON(message.rankingScore)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorState>, I>>(
    object: I
  ): ValidatorState {
    const message = createBaseValidatorState();
    message.validatorUpdate =
      object.validatorUpdate !== undefined && object.validatorUpdate !== null
        ? ValidatorUpdate.fromPartial(object.validatorUpdate)
        : undefined;
    message.status = object.status ?? 0;
    message.ethEventsForwarded = object.ethEventsForwarded ?? "0";
    message.validatorPower = object.validatorPower ?? "0";
    message.rankingScore =
      object.rankingScore !== undefined && object.rankingScore !== null
        ? RankingScore.fromPartial(object.rankingScore)
        : undefined;
    return message;
  },
};

function createBaseStaking(): Staking {
  return { accepted: [], lastBlockSeen: "0" };
}

export const Staking = {
  encode(
    message: Staking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accepted) {
      StakeLinking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastBlockSeen !== "0") {
      writer.uint32(16).uint64(message.lastBlockSeen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accepted.push(StakeLinking.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lastBlockSeen = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Staking {
    return {
      accepted: Array.isArray(object?.accepted)
        ? object.accepted.map((e: any) => StakeLinking.fromJSON(e))
        : [],
      lastBlockSeen: isSet(object.lastBlockSeen)
        ? String(object.lastBlockSeen)
        : "0",
    };
  },

  toJSON(message: Staking): unknown {
    const obj: any = {};
    if (message.accepted) {
      obj.accepted = message.accepted.map((e) =>
        e ? StakeLinking.toJSON(e) : undefined
      );
    } else {
      obj.accepted = [];
    }
    message.lastBlockSeen !== undefined &&
      (obj.lastBlockSeen = message.lastBlockSeen);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Staking>, I>>(object: I): Staking {
    const message = createBaseStaking();
    message.accepted =
      object.accepted?.map((e) => StakeLinking.fromPartial(e)) || [];
    message.lastBlockSeen = object.lastBlockSeen ?? "0";
    return message;
  },
};

function createBaseMultisigControl(): MultisigControl {
  return { signers: [], thresholdSet: undefined, lastBlockSeen: "0" };
}

export const MultisigControl = {
  encode(
    message: MultisigControl,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.signers) {
      ERC20MultiSigSignerEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.thresholdSet !== undefined) {
      ERC20MultiSigThresholdSetEvent.encode(
        message.thresholdSet,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.lastBlockSeen !== "0") {
      writer.uint32(24).uint64(message.lastBlockSeen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultisigControl {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultisigControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(
            ERC20MultiSigSignerEvent.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.thresholdSet = ERC20MultiSigThresholdSetEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.lastBlockSeen = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultisigControl {
    return {
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => ERC20MultiSigSignerEvent.fromJSON(e))
        : [],
      thresholdSet: isSet(object.thresholdSet)
        ? ERC20MultiSigThresholdSetEvent.fromJSON(object.thresholdSet)
        : undefined,
      lastBlockSeen: isSet(object.lastBlockSeen)
        ? String(object.lastBlockSeen)
        : "0",
    };
  },

  toJSON(message: MultisigControl): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map((e) =>
        e ? ERC20MultiSigSignerEvent.toJSON(e) : undefined
      );
    } else {
      obj.signers = [];
    }
    message.thresholdSet !== undefined &&
      (obj.thresholdSet = message.thresholdSet
        ? ERC20MultiSigThresholdSetEvent.toJSON(message.thresholdSet)
        : undefined);
    message.lastBlockSeen !== undefined &&
      (obj.lastBlockSeen = message.lastBlockSeen);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultisigControl>, I>>(
    object: I
  ): MultisigControl {
    const message = createBaseMultisigControl();
    message.signers =
      object.signers?.map((e) => ERC20MultiSigSignerEvent.fromPartial(e)) || [];
    message.thresholdSet =
      object.thresholdSet !== undefined && object.thresholdSet !== null
        ? ERC20MultiSigThresholdSetEvent.fromPartial(object.thresholdSet)
        : undefined;
    message.lastBlockSeen = object.lastBlockSeen ?? "0";
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
