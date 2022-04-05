/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  OrderSubmission,
  OrderCancellation,
  OrderAmendment,
  WithdrawSubmission,
  ProposalSubmission,
  VoteSubmission,
  LiquidityProvisionSubmission,
  DelegateSubmission,
  UndelegateSubmission,
  LiquidityProvisionCancellation,
  LiquidityProvisionAmendment,
  Transfer,
  CancelTransfer,
  RestoreSnapshot,
} from "../../../vega/commands/v1/commands";
import {
  AnnounceNode,
  NodeVote,
  NodeSignature,
  ChainEvent,
  KeyRotateSubmission,
  StateVariableProposal,
  ValidatorHeartbeat,
  EthereumKeyRotateSubmission,
} from "../../../vega/commands/v1/validator_commands";
import { OracleDataSubmission } from "../../../vega/commands/v1/oracles";
import { Signature } from "../../../vega/commands/v1/signature";

export const protobufPackage = "vega.commands.v1";

export interface InputData {
  /**
   * A number to provide uniqueness to prevent accidental replays and,
   * in combination with `block_height`, deliberate attacks.
   * A nonce provides uniqueness for otherwise identical transactions,
   * ensuring that the transaction hash uniquely identifies a specific transaction.
   * Granted all other fields are equal, the nonce can either be a counter
   * or generated at random to submit multiple transactions within the same
   * block (see below), without being identified as replays.
   * Please note that Protocol Buffers do not have a canonical, unique encoding
   * and therefore different libraries or binaries may encode the same message
   * slightly differently, causing a different hash.
   */
  nonce: string;
  /**
   * The block height at which the transaction was made.
   * This should be the current block height. The transaction will be valid
   * from the block and up to the `tolerance` block height.
   * Example: If the network has a tolerance of 150 blocks and `block_height`
   * is set to `200`, then the transaction will be valid until block `350`.
   * Note that a `block_height` that is ahead of the real block height will be
   * rejected. The tolerance can be queried from the chain's network parameters.
   * `block_height` prevents replay attacks in conjunction with `nonce` (see above).
   */
  blockHeight: string;
  /** User commands */
  orderSubmission: OrderSubmission | undefined;
  orderCancellation: OrderCancellation | undefined;
  orderAmendment: OrderAmendment | undefined;
  withdrawSubmission: WithdrawSubmission | undefined;
  proposalSubmission: ProposalSubmission | undefined;
  voteSubmission: VoteSubmission | undefined;
  liquidityProvisionSubmission: LiquidityProvisionSubmission | undefined;
  delegateSubmission: DelegateSubmission | undefined;
  undelegateSubmission: UndelegateSubmission | undefined;
  liquidityProvisionCancellation: LiquidityProvisionCancellation | undefined;
  liquidityProvisionAmendment: LiquidityProvisionAmendment | undefined;
  transfer: Transfer | undefined;
  cancelTransfer: CancelTransfer | undefined;
  announceNode: AnnounceNode | undefined;
  /** Validator commands */
  nodeVote: NodeVote | undefined;
  nodeSignature: NodeSignature | undefined;
  chainEvent: ChainEvent | undefined;
  keyRotateSubmission: KeyRotateSubmission | undefined;
  stateVariableProposal: StateVariableProposal | undefined;
  validatorHeartbeat: ValidatorHeartbeat | undefined;
  ethereumKeyRotateSubmission: EthereumKeyRotateSubmission | undefined;
  /** Oracles */
  oracleDataSubmission: OracleDataSubmission | undefined;
  /** Checkpoints */
  restoreSnapshotSubmission: RestoreSnapshot | undefined;
}

/** Represents a transaction to be sent to Vega. */
export interface Transaction {
  /** One of the set of Vega commands (proto marshalled). */
  inputData: Uint8Array;
  /** The signature of the inputData. */
  signature: Signature | undefined;
  /** The address of the sender (hex-encoded). Not supported yet. */
  address: string | undefined;
  /** The public key of the sender (hex-encoded). */
  pubKey: string | undefined;
  /**
   * A version of the transaction, to be used in the future in case changes are implemented
   * to the Transaction format.
   */
  version: number;
  /** Proof of work contains the random transaction id used by the client and the nonce. */
  pow: ProofOfWork | undefined;
}

export interface ProofOfWork {
  tid: string;
  nonce: string;
  hashFunction: string;
}

function createBaseInputData(): InputData {
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
    restoreSnapshotSubmission: undefined,
  };
}

export const InputData = {
  encode(
    message: InputData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nonce !== "0") {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.blockHeight !== "0") {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.orderSubmission !== undefined) {
      OrderSubmission.encode(
        message.orderSubmission,
        writer.uint32(8010).fork()
      ).ldelim();
    }
    if (message.orderCancellation !== undefined) {
      OrderCancellation.encode(
        message.orderCancellation,
        writer.uint32(8018).fork()
      ).ldelim();
    }
    if (message.orderAmendment !== undefined) {
      OrderAmendment.encode(
        message.orderAmendment,
        writer.uint32(8026).fork()
      ).ldelim();
    }
    if (message.withdrawSubmission !== undefined) {
      WithdrawSubmission.encode(
        message.withdrawSubmission,
        writer.uint32(8034).fork()
      ).ldelim();
    }
    if (message.proposalSubmission !== undefined) {
      ProposalSubmission.encode(
        message.proposalSubmission,
        writer.uint32(8042).fork()
      ).ldelim();
    }
    if (message.voteSubmission !== undefined) {
      VoteSubmission.encode(
        message.voteSubmission,
        writer.uint32(8050).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionSubmission !== undefined) {
      LiquidityProvisionSubmission.encode(
        message.liquidityProvisionSubmission,
        writer.uint32(8058).fork()
      ).ldelim();
    }
    if (message.delegateSubmission !== undefined) {
      DelegateSubmission.encode(
        message.delegateSubmission,
        writer.uint32(8066).fork()
      ).ldelim();
    }
    if (message.undelegateSubmission !== undefined) {
      UndelegateSubmission.encode(
        message.undelegateSubmission,
        writer.uint32(8074).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionCancellation !== undefined) {
      LiquidityProvisionCancellation.encode(
        message.liquidityProvisionCancellation,
        writer.uint32(8082).fork()
      ).ldelim();
    }
    if (message.liquidityProvisionAmendment !== undefined) {
      LiquidityProvisionAmendment.encode(
        message.liquidityProvisionAmendment,
        writer.uint32(8090).fork()
      ).ldelim();
    }
    if (message.transfer !== undefined) {
      Transfer.encode(message.transfer, writer.uint32(8098).fork()).ldelim();
    }
    if (message.cancelTransfer !== undefined) {
      CancelTransfer.encode(
        message.cancelTransfer,
        writer.uint32(8106).fork()
      ).ldelim();
    }
    if (message.announceNode !== undefined) {
      AnnounceNode.encode(
        message.announceNode,
        writer.uint32(8114).fork()
      ).ldelim();
    }
    if (message.nodeVote !== undefined) {
      NodeVote.encode(message.nodeVote, writer.uint32(16018).fork()).ldelim();
    }
    if (message.nodeSignature !== undefined) {
      NodeSignature.encode(
        message.nodeSignature,
        writer.uint32(16026).fork()
      ).ldelim();
    }
    if (message.chainEvent !== undefined) {
      ChainEvent.encode(
        message.chainEvent,
        writer.uint32(16034).fork()
      ).ldelim();
    }
    if (message.keyRotateSubmission !== undefined) {
      KeyRotateSubmission.encode(
        message.keyRotateSubmission,
        writer.uint32(16042).fork()
      ).ldelim();
    }
    if (message.stateVariableProposal !== undefined) {
      StateVariableProposal.encode(
        message.stateVariableProposal,
        writer.uint32(16050).fork()
      ).ldelim();
    }
    if (message.validatorHeartbeat !== undefined) {
      ValidatorHeartbeat.encode(
        message.validatorHeartbeat,
        writer.uint32(16058).fork()
      ).ldelim();
    }
    if (message.ethereumKeyRotateSubmission !== undefined) {
      EthereumKeyRotateSubmission.encode(
        message.ethereumKeyRotateSubmission,
        writer.uint32(16066).fork()
      ).ldelim();
    }
    if (message.oracleDataSubmission !== undefined) {
      OracleDataSubmission.encode(
        message.oracleDataSubmission,
        writer.uint32(24010).fork()
      ).ldelim();
    }
    if (message.restoreSnapshotSubmission !== undefined) {
      RestoreSnapshot.encode(
        message.restoreSnapshotSubmission,
        writer.uint32(32010).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InputData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInputData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToString(reader.uint64() as Long);
          break;
        case 1001:
          message.orderSubmission = OrderSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1002:
          message.orderCancellation = OrderCancellation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1003:
          message.orderAmendment = OrderAmendment.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1004:
          message.withdrawSubmission = WithdrawSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1005:
          message.proposalSubmission = ProposalSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1006:
          message.voteSubmission = VoteSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1007:
          message.liquidityProvisionSubmission =
            LiquidityProvisionSubmission.decode(reader, reader.uint32());
          break;
        case 1008:
          message.delegateSubmission = DelegateSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1009:
          message.undelegateSubmission = UndelegateSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1010:
          message.liquidityProvisionCancellation =
            LiquidityProvisionCancellation.decode(reader, reader.uint32());
          break;
        case 1011:
          message.liquidityProvisionAmendment =
            LiquidityProvisionAmendment.decode(reader, reader.uint32());
          break;
        case 1012:
          message.transfer = Transfer.decode(reader, reader.uint32());
          break;
        case 1013:
          message.cancelTransfer = CancelTransfer.decode(
            reader,
            reader.uint32()
          );
          break;
        case 1014:
          message.announceNode = AnnounceNode.decode(reader, reader.uint32());
          break;
        case 2002:
          message.nodeVote = NodeVote.decode(reader, reader.uint32());
          break;
        case 2003:
          message.nodeSignature = NodeSignature.decode(reader, reader.uint32());
          break;
        case 2004:
          message.chainEvent = ChainEvent.decode(reader, reader.uint32());
          break;
        case 2005:
          message.keyRotateSubmission = KeyRotateSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2006:
          message.stateVariableProposal = StateVariableProposal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2007:
          message.validatorHeartbeat = ValidatorHeartbeat.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2008:
          message.ethereumKeyRotateSubmission =
            EthereumKeyRotateSubmission.decode(reader, reader.uint32());
          break;
        case 3001:
          message.oracleDataSubmission = OracleDataSubmission.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4001:
          message.restoreSnapshotSubmission = RestoreSnapshot.decode(
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

  fromJSON(object: any): InputData {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "0",
      blockHeight: isSet(object.blockHeight) ? String(object.blockHeight) : "0",
      orderSubmission: isSet(object.orderSubmission)
        ? OrderSubmission.fromJSON(object.orderSubmission)
        : undefined,
      orderCancellation: isSet(object.orderCancellation)
        ? OrderCancellation.fromJSON(object.orderCancellation)
        : undefined,
      orderAmendment: isSet(object.orderAmendment)
        ? OrderAmendment.fromJSON(object.orderAmendment)
        : undefined,
      withdrawSubmission: isSet(object.withdrawSubmission)
        ? WithdrawSubmission.fromJSON(object.withdrawSubmission)
        : undefined,
      proposalSubmission: isSet(object.proposalSubmission)
        ? ProposalSubmission.fromJSON(object.proposalSubmission)
        : undefined,
      voteSubmission: isSet(object.voteSubmission)
        ? VoteSubmission.fromJSON(object.voteSubmission)
        : undefined,
      liquidityProvisionSubmission: isSet(object.liquidityProvisionSubmission)
        ? LiquidityProvisionSubmission.fromJSON(
            object.liquidityProvisionSubmission
          )
        : undefined,
      delegateSubmission: isSet(object.delegateSubmission)
        ? DelegateSubmission.fromJSON(object.delegateSubmission)
        : undefined,
      undelegateSubmission: isSet(object.undelegateSubmission)
        ? UndelegateSubmission.fromJSON(object.undelegateSubmission)
        : undefined,
      liquidityProvisionCancellation: isSet(
        object.liquidityProvisionCancellation
      )
        ? LiquidityProvisionCancellation.fromJSON(
            object.liquidityProvisionCancellation
          )
        : undefined,
      liquidityProvisionAmendment: isSet(object.liquidityProvisionAmendment)
        ? LiquidityProvisionAmendment.fromJSON(
            object.liquidityProvisionAmendment
          )
        : undefined,
      transfer: isSet(object.transfer)
        ? Transfer.fromJSON(object.transfer)
        : undefined,
      cancelTransfer: isSet(object.cancelTransfer)
        ? CancelTransfer.fromJSON(object.cancelTransfer)
        : undefined,
      announceNode: isSet(object.announceNode)
        ? AnnounceNode.fromJSON(object.announceNode)
        : undefined,
      nodeVote: isSet(object.nodeVote)
        ? NodeVote.fromJSON(object.nodeVote)
        : undefined,
      nodeSignature: isSet(object.nodeSignature)
        ? NodeSignature.fromJSON(object.nodeSignature)
        : undefined,
      chainEvent: isSet(object.chainEvent)
        ? ChainEvent.fromJSON(object.chainEvent)
        : undefined,
      keyRotateSubmission: isSet(object.keyRotateSubmission)
        ? KeyRotateSubmission.fromJSON(object.keyRotateSubmission)
        : undefined,
      stateVariableProposal: isSet(object.stateVariableProposal)
        ? StateVariableProposal.fromJSON(object.stateVariableProposal)
        : undefined,
      validatorHeartbeat: isSet(object.validatorHeartbeat)
        ? ValidatorHeartbeat.fromJSON(object.validatorHeartbeat)
        : undefined,
      ethereumKeyRotateSubmission: isSet(object.ethereumKeyRotateSubmission)
        ? EthereumKeyRotateSubmission.fromJSON(
            object.ethereumKeyRotateSubmission
          )
        : undefined,
      oracleDataSubmission: isSet(object.oracleDataSubmission)
        ? OracleDataSubmission.fromJSON(object.oracleDataSubmission)
        : undefined,
      restoreSnapshotSubmission: isSet(object.restoreSnapshotSubmission)
        ? RestoreSnapshot.fromJSON(object.restoreSnapshotSubmission)
        : undefined,
    };
  },

  toJSON(message: InputData): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    message.orderSubmission !== undefined &&
      (obj.orderSubmission = message.orderSubmission
        ? OrderSubmission.toJSON(message.orderSubmission)
        : undefined);
    message.orderCancellation !== undefined &&
      (obj.orderCancellation = message.orderCancellation
        ? OrderCancellation.toJSON(message.orderCancellation)
        : undefined);
    message.orderAmendment !== undefined &&
      (obj.orderAmendment = message.orderAmendment
        ? OrderAmendment.toJSON(message.orderAmendment)
        : undefined);
    message.withdrawSubmission !== undefined &&
      (obj.withdrawSubmission = message.withdrawSubmission
        ? WithdrawSubmission.toJSON(message.withdrawSubmission)
        : undefined);
    message.proposalSubmission !== undefined &&
      (obj.proposalSubmission = message.proposalSubmission
        ? ProposalSubmission.toJSON(message.proposalSubmission)
        : undefined);
    message.voteSubmission !== undefined &&
      (obj.voteSubmission = message.voteSubmission
        ? VoteSubmission.toJSON(message.voteSubmission)
        : undefined);
    message.liquidityProvisionSubmission !== undefined &&
      (obj.liquidityProvisionSubmission = message.liquidityProvisionSubmission
        ? LiquidityProvisionSubmission.toJSON(
            message.liquidityProvisionSubmission
          )
        : undefined);
    message.delegateSubmission !== undefined &&
      (obj.delegateSubmission = message.delegateSubmission
        ? DelegateSubmission.toJSON(message.delegateSubmission)
        : undefined);
    message.undelegateSubmission !== undefined &&
      (obj.undelegateSubmission = message.undelegateSubmission
        ? UndelegateSubmission.toJSON(message.undelegateSubmission)
        : undefined);
    message.liquidityProvisionCancellation !== undefined &&
      (obj.liquidityProvisionCancellation =
        message.liquidityProvisionCancellation
          ? LiquidityProvisionCancellation.toJSON(
              message.liquidityProvisionCancellation
            )
          : undefined);
    message.liquidityProvisionAmendment !== undefined &&
      (obj.liquidityProvisionAmendment = message.liquidityProvisionAmendment
        ? LiquidityProvisionAmendment.toJSON(
            message.liquidityProvisionAmendment
          )
        : undefined);
    message.transfer !== undefined &&
      (obj.transfer = message.transfer
        ? Transfer.toJSON(message.transfer)
        : undefined);
    message.cancelTransfer !== undefined &&
      (obj.cancelTransfer = message.cancelTransfer
        ? CancelTransfer.toJSON(message.cancelTransfer)
        : undefined);
    message.announceNode !== undefined &&
      (obj.announceNode = message.announceNode
        ? AnnounceNode.toJSON(message.announceNode)
        : undefined);
    message.nodeVote !== undefined &&
      (obj.nodeVote = message.nodeVote
        ? NodeVote.toJSON(message.nodeVote)
        : undefined);
    message.nodeSignature !== undefined &&
      (obj.nodeSignature = message.nodeSignature
        ? NodeSignature.toJSON(message.nodeSignature)
        : undefined);
    message.chainEvent !== undefined &&
      (obj.chainEvent = message.chainEvent
        ? ChainEvent.toJSON(message.chainEvent)
        : undefined);
    message.keyRotateSubmission !== undefined &&
      (obj.keyRotateSubmission = message.keyRotateSubmission
        ? KeyRotateSubmission.toJSON(message.keyRotateSubmission)
        : undefined);
    message.stateVariableProposal !== undefined &&
      (obj.stateVariableProposal = message.stateVariableProposal
        ? StateVariableProposal.toJSON(message.stateVariableProposal)
        : undefined);
    message.validatorHeartbeat !== undefined &&
      (obj.validatorHeartbeat = message.validatorHeartbeat
        ? ValidatorHeartbeat.toJSON(message.validatorHeartbeat)
        : undefined);
    message.ethereumKeyRotateSubmission !== undefined &&
      (obj.ethereumKeyRotateSubmission = message.ethereumKeyRotateSubmission
        ? EthereumKeyRotateSubmission.toJSON(
            message.ethereumKeyRotateSubmission
          )
        : undefined);
    message.oracleDataSubmission !== undefined &&
      (obj.oracleDataSubmission = message.oracleDataSubmission
        ? OracleDataSubmission.toJSON(message.oracleDataSubmission)
        : undefined);
    message.restoreSnapshotSubmission !== undefined &&
      (obj.restoreSnapshotSubmission = message.restoreSnapshotSubmission
        ? RestoreSnapshot.toJSON(message.restoreSnapshotSubmission)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InputData>, I>>(
    object: I
  ): InputData {
    const message = createBaseInputData();
    message.nonce = object.nonce ?? "0";
    message.blockHeight = object.blockHeight ?? "0";
    message.orderSubmission =
      object.orderSubmission !== undefined && object.orderSubmission !== null
        ? OrderSubmission.fromPartial(object.orderSubmission)
        : undefined;
    message.orderCancellation =
      object.orderCancellation !== undefined &&
      object.orderCancellation !== null
        ? OrderCancellation.fromPartial(object.orderCancellation)
        : undefined;
    message.orderAmendment =
      object.orderAmendment !== undefined && object.orderAmendment !== null
        ? OrderAmendment.fromPartial(object.orderAmendment)
        : undefined;
    message.withdrawSubmission =
      object.withdrawSubmission !== undefined &&
      object.withdrawSubmission !== null
        ? WithdrawSubmission.fromPartial(object.withdrawSubmission)
        : undefined;
    message.proposalSubmission =
      object.proposalSubmission !== undefined &&
      object.proposalSubmission !== null
        ? ProposalSubmission.fromPartial(object.proposalSubmission)
        : undefined;
    message.voteSubmission =
      object.voteSubmission !== undefined && object.voteSubmission !== null
        ? VoteSubmission.fromPartial(object.voteSubmission)
        : undefined;
    message.liquidityProvisionSubmission =
      object.liquidityProvisionSubmission !== undefined &&
      object.liquidityProvisionSubmission !== null
        ? LiquidityProvisionSubmission.fromPartial(
            object.liquidityProvisionSubmission
          )
        : undefined;
    message.delegateSubmission =
      object.delegateSubmission !== undefined &&
      object.delegateSubmission !== null
        ? DelegateSubmission.fromPartial(object.delegateSubmission)
        : undefined;
    message.undelegateSubmission =
      object.undelegateSubmission !== undefined &&
      object.undelegateSubmission !== null
        ? UndelegateSubmission.fromPartial(object.undelegateSubmission)
        : undefined;
    message.liquidityProvisionCancellation =
      object.liquidityProvisionCancellation !== undefined &&
      object.liquidityProvisionCancellation !== null
        ? LiquidityProvisionCancellation.fromPartial(
            object.liquidityProvisionCancellation
          )
        : undefined;
    message.liquidityProvisionAmendment =
      object.liquidityProvisionAmendment !== undefined &&
      object.liquidityProvisionAmendment !== null
        ? LiquidityProvisionAmendment.fromPartial(
            object.liquidityProvisionAmendment
          )
        : undefined;
    message.transfer =
      object.transfer !== undefined && object.transfer !== null
        ? Transfer.fromPartial(object.transfer)
        : undefined;
    message.cancelTransfer =
      object.cancelTransfer !== undefined && object.cancelTransfer !== null
        ? CancelTransfer.fromPartial(object.cancelTransfer)
        : undefined;
    message.announceNode =
      object.announceNode !== undefined && object.announceNode !== null
        ? AnnounceNode.fromPartial(object.announceNode)
        : undefined;
    message.nodeVote =
      object.nodeVote !== undefined && object.nodeVote !== null
        ? NodeVote.fromPartial(object.nodeVote)
        : undefined;
    message.nodeSignature =
      object.nodeSignature !== undefined && object.nodeSignature !== null
        ? NodeSignature.fromPartial(object.nodeSignature)
        : undefined;
    message.chainEvent =
      object.chainEvent !== undefined && object.chainEvent !== null
        ? ChainEvent.fromPartial(object.chainEvent)
        : undefined;
    message.keyRotateSubmission =
      object.keyRotateSubmission !== undefined &&
      object.keyRotateSubmission !== null
        ? KeyRotateSubmission.fromPartial(object.keyRotateSubmission)
        : undefined;
    message.stateVariableProposal =
      object.stateVariableProposal !== undefined &&
      object.stateVariableProposal !== null
        ? StateVariableProposal.fromPartial(object.stateVariableProposal)
        : undefined;
    message.validatorHeartbeat =
      object.validatorHeartbeat !== undefined &&
      object.validatorHeartbeat !== null
        ? ValidatorHeartbeat.fromPartial(object.validatorHeartbeat)
        : undefined;
    message.ethereumKeyRotateSubmission =
      object.ethereumKeyRotateSubmission !== undefined &&
      object.ethereumKeyRotateSubmission !== null
        ? EthereumKeyRotateSubmission.fromPartial(
            object.ethereumKeyRotateSubmission
          )
        : undefined;
    message.oracleDataSubmission =
      object.oracleDataSubmission !== undefined &&
      object.oracleDataSubmission !== null
        ? OracleDataSubmission.fromPartial(object.oracleDataSubmission)
        : undefined;
    message.restoreSnapshotSubmission =
      object.restoreSnapshotSubmission !== undefined &&
      object.restoreSnapshotSubmission !== null
        ? RestoreSnapshot.fromPartial(object.restoreSnapshotSubmission)
        : undefined;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    inputData: new Uint8Array(),
    signature: undefined,
    address: undefined,
    pubKey: undefined,
    version: 0,
    pow: undefined,
  };
}

export const Transaction = {
  encode(
    message: Transaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inputData.length !== 0) {
      writer.uint32(10).bytes(message.inputData);
    }
    if (message.signature !== undefined) {
      Signature.encode(message.signature, writer.uint32(18).fork()).ldelim();
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
      ProofOfWork.encode(message.pow, writer.uint32(24002).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputData = reader.bytes();
          break;
        case 2:
          message.signature = Signature.decode(reader, reader.uint32());
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
          message.pow = ProofOfWork.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      inputData: isSet(object.inputData)
        ? bytesFromBase64(object.inputData)
        : new Uint8Array(),
      signature: isSet(object.signature)
        ? Signature.fromJSON(object.signature)
        : undefined,
      address: isSet(object.address) ? String(object.address) : undefined,
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : undefined,
      version: isSet(object.version) ? Number(object.version) : 0,
      pow: isSet(object.pow) ? ProofOfWork.fromJSON(object.pow) : undefined,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.inputData !== undefined &&
      (obj.inputData = base64FromBytes(
        message.inputData !== undefined ? message.inputData : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature = message.signature
        ? Signature.toJSON(message.signature)
        : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.pow !== undefined &&
      (obj.pow = message.pow ? ProofOfWork.toJSON(message.pow) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(
    object: I
  ): Transaction {
    const message = createBaseTransaction();
    message.inputData = object.inputData ?? new Uint8Array();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? Signature.fromPartial(object.signature)
        : undefined;
    message.address = object.address ?? undefined;
    message.pubKey = object.pubKey ?? undefined;
    message.version = object.version ?? 0;
    message.pow =
      object.pow !== undefined && object.pow !== null
        ? ProofOfWork.fromPartial(object.pow)
        : undefined;
    return message;
  },
};

function createBaseProofOfWork(): ProofOfWork {
  return { tid: "", nonce: "0", hashFunction: "" };
}

export const ProofOfWork = {
  encode(
    message: ProofOfWork,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofOfWork {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOfWork();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tid = reader.string();
          break;
        case 2:
          message.nonce = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): ProofOfWork {
    return {
      tid: isSet(object.tid) ? String(object.tid) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "0",
      hashFunction: isSet(object.hashFunction)
        ? String(object.hashFunction)
        : "",
    };
  },

  toJSON(message: ProofOfWork): unknown {
    const obj: any = {};
    message.tid !== undefined && (obj.tid = message.tid);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.hashFunction !== undefined &&
      (obj.hashFunction = message.hashFunction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofOfWork>, I>>(
    object: I
  ): ProofOfWork {
    const message = createBaseProofOfWork();
    message.tid = object.tid ?? "";
    message.nonce = object.nonce ?? "0";
    message.hashFunction = object.hashFunction ?? "";
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
