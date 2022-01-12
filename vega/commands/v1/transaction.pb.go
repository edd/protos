// Code generated by protoc-gen-go. DO NOT EDIT.
// source: vega/commands/v1/transaction.proto

package v1

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type InputData struct {
	// A random number used to provided uniqueness and prevents against replay
	// attack.
	Nonce uint64 `protobuf:"varint,1,opt,name=nonce,proto3" json:"nonce,omitempty"`
	// The block height associated to the transaction.
	// This should always be current height of the node at the time of sending the
	// Tx. BlockHeight is used as a mechanism for replay protection.
	BlockHeight uint64 `protobuf:"varint,2,opt,name=block_height,json=blockHeight,proto3" json:"block_height,omitempty"`
	// Types that are valid to be assigned to Command:
	//	*InputData_OrderSubmission
	//	*InputData_OrderCancellation
	//	*InputData_OrderAmendment
	//	*InputData_WithdrawSubmission
	//	*InputData_ProposalSubmission
	//	*InputData_VoteSubmission
	//	*InputData_LiquidityProvisionSubmission
	//	*InputData_DelegateSubmission
	//	*InputData_UndelegateSubmission
	//	*InputData_LiquidityProvisionCancellation
	//	*InputData_LiquidityProvisionAmendment
	//	*InputData_NodeRegistration
	//	*InputData_NodeVote
	//	*InputData_NodeSignature
	//	*InputData_ChainEvent
	//	*InputData_KeyRotateSubmission
	//	*InputData_StateVariableProposal
	//	*InputData_OracleDataSubmission
	//	*InputData_RestoreSnapshotSubmission
	Command              isInputData_Command `protobuf_oneof:"command"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *InputData) Reset()         { *m = InputData{} }
func (m *InputData) String() string { return proto.CompactTextString(m) }
func (*InputData) ProtoMessage()    {}
func (*InputData) Descriptor() ([]byte, []int) {
	return fileDescriptor_73d2b9785d3e1386, []int{0}
}

func (m *InputData) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_InputData.Unmarshal(m, b)
}
func (m *InputData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_InputData.Marshal(b, m, deterministic)
}
func (m *InputData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_InputData.Merge(m, src)
}
func (m *InputData) XXX_Size() int {
	return xxx_messageInfo_InputData.Size(m)
}
func (m *InputData) XXX_DiscardUnknown() {
	xxx_messageInfo_InputData.DiscardUnknown(m)
}

var xxx_messageInfo_InputData proto.InternalMessageInfo

func (m *InputData) GetNonce() uint64 {
	if m != nil {
		return m.Nonce
	}
	return 0
}

func (m *InputData) GetBlockHeight() uint64 {
	if m != nil {
		return m.BlockHeight
	}
	return 0
}

type isInputData_Command interface {
	isInputData_Command()
}

type InputData_OrderSubmission struct {
	OrderSubmission *OrderSubmission `protobuf:"bytes,1001,opt,name=order_submission,json=orderSubmission,proto3,oneof"`
}

type InputData_OrderCancellation struct {
	OrderCancellation *OrderCancellation `protobuf:"bytes,1002,opt,name=order_cancellation,json=orderCancellation,proto3,oneof"`
}

type InputData_OrderAmendment struct {
	OrderAmendment *OrderAmendment `protobuf:"bytes,1003,opt,name=order_amendment,json=orderAmendment,proto3,oneof"`
}

type InputData_WithdrawSubmission struct {
	WithdrawSubmission *WithdrawSubmission `protobuf:"bytes,1004,opt,name=withdraw_submission,json=withdrawSubmission,proto3,oneof"`
}

type InputData_ProposalSubmission struct {
	ProposalSubmission *ProposalSubmission `protobuf:"bytes,1005,opt,name=proposal_submission,json=proposalSubmission,proto3,oneof"`
}

type InputData_VoteSubmission struct {
	VoteSubmission *VoteSubmission `protobuf:"bytes,1006,opt,name=vote_submission,json=voteSubmission,proto3,oneof"`
}

type InputData_LiquidityProvisionSubmission struct {
	LiquidityProvisionSubmission *LiquidityProvisionSubmission `protobuf:"bytes,1007,opt,name=liquidity_provision_submission,json=liquidityProvisionSubmission,proto3,oneof"`
}

type InputData_DelegateSubmission struct {
	DelegateSubmission *DelegateSubmission `protobuf:"bytes,1008,opt,name=delegate_submission,json=delegateSubmission,proto3,oneof"`
}

type InputData_UndelegateSubmission struct {
	UndelegateSubmission *UndelegateSubmission `protobuf:"bytes,1009,opt,name=undelegate_submission,json=undelegateSubmission,proto3,oneof"`
}

type InputData_LiquidityProvisionCancellation struct {
	LiquidityProvisionCancellation *LiquidityProvisionCancellation `protobuf:"bytes,1010,opt,name=liquidity_provision_cancellation,json=liquidityProvisionCancellation,proto3,oneof"`
}

type InputData_LiquidityProvisionAmendment struct {
	LiquidityProvisionAmendment *LiquidityProvisionAmendment `protobuf:"bytes,1011,opt,name=liquidity_provision_amendment,json=liquidityProvisionAmendment,proto3,oneof"`
}

type InputData_NodeRegistration struct {
	NodeRegistration *NodeRegistration `protobuf:"bytes,2001,opt,name=node_registration,json=nodeRegistration,proto3,oneof"`
}

type InputData_NodeVote struct {
	NodeVote *NodeVote `protobuf:"bytes,2002,opt,name=node_vote,json=nodeVote,proto3,oneof"`
}

type InputData_NodeSignature struct {
	NodeSignature *NodeSignature `protobuf:"bytes,2003,opt,name=node_signature,json=nodeSignature,proto3,oneof"`
}

type InputData_ChainEvent struct {
	ChainEvent *ChainEvent `protobuf:"bytes,2004,opt,name=chain_event,json=chainEvent,proto3,oneof"`
}

type InputData_KeyRotateSubmission struct {
	KeyRotateSubmission *KeyRotateSubmission `protobuf:"bytes,2005,opt,name=key_rotate_submission,json=keyRotateSubmission,proto3,oneof"`
}

type InputData_StateVariableProposal struct {
	StateVariableProposal *StateVariableProposal `protobuf:"bytes,2006,opt,name=state_variable_proposal,json=stateVariableProposal,proto3,oneof"`
}

type InputData_OracleDataSubmission struct {
	OracleDataSubmission *OracleDataSubmission `protobuf:"bytes,3001,opt,name=oracle_data_submission,json=oracleDataSubmission,proto3,oneof"`
}

type InputData_RestoreSnapshotSubmission struct {
	RestoreSnapshotSubmission *RestoreSnapshot `protobuf:"bytes,4001,opt,name=restore_snapshot_submission,json=restoreSnapshotSubmission,proto3,oneof"`
}

func (*InputData_OrderSubmission) isInputData_Command() {}

func (*InputData_OrderCancellation) isInputData_Command() {}

func (*InputData_OrderAmendment) isInputData_Command() {}

func (*InputData_WithdrawSubmission) isInputData_Command() {}

func (*InputData_ProposalSubmission) isInputData_Command() {}

func (*InputData_VoteSubmission) isInputData_Command() {}

func (*InputData_LiquidityProvisionSubmission) isInputData_Command() {}

func (*InputData_DelegateSubmission) isInputData_Command() {}

func (*InputData_UndelegateSubmission) isInputData_Command() {}

func (*InputData_LiquidityProvisionCancellation) isInputData_Command() {}

func (*InputData_LiquidityProvisionAmendment) isInputData_Command() {}

func (*InputData_NodeRegistration) isInputData_Command() {}

func (*InputData_NodeVote) isInputData_Command() {}

func (*InputData_NodeSignature) isInputData_Command() {}

func (*InputData_ChainEvent) isInputData_Command() {}

func (*InputData_KeyRotateSubmission) isInputData_Command() {}

func (*InputData_StateVariableProposal) isInputData_Command() {}

func (*InputData_OracleDataSubmission) isInputData_Command() {}

func (*InputData_RestoreSnapshotSubmission) isInputData_Command() {}

func (m *InputData) GetCommand() isInputData_Command {
	if m != nil {
		return m.Command
	}
	return nil
}

func (m *InputData) GetOrderSubmission() *OrderSubmission {
	if x, ok := m.GetCommand().(*InputData_OrderSubmission); ok {
		return x.OrderSubmission
	}
	return nil
}

func (m *InputData) GetOrderCancellation() *OrderCancellation {
	if x, ok := m.GetCommand().(*InputData_OrderCancellation); ok {
		return x.OrderCancellation
	}
	return nil
}

func (m *InputData) GetOrderAmendment() *OrderAmendment {
	if x, ok := m.GetCommand().(*InputData_OrderAmendment); ok {
		return x.OrderAmendment
	}
	return nil
}

func (m *InputData) GetWithdrawSubmission() *WithdrawSubmission {
	if x, ok := m.GetCommand().(*InputData_WithdrawSubmission); ok {
		return x.WithdrawSubmission
	}
	return nil
}

func (m *InputData) GetProposalSubmission() *ProposalSubmission {
	if x, ok := m.GetCommand().(*InputData_ProposalSubmission); ok {
		return x.ProposalSubmission
	}
	return nil
}

func (m *InputData) GetVoteSubmission() *VoteSubmission {
	if x, ok := m.GetCommand().(*InputData_VoteSubmission); ok {
		return x.VoteSubmission
	}
	return nil
}

func (m *InputData) GetLiquidityProvisionSubmission() *LiquidityProvisionSubmission {
	if x, ok := m.GetCommand().(*InputData_LiquidityProvisionSubmission); ok {
		return x.LiquidityProvisionSubmission
	}
	return nil
}

func (m *InputData) GetDelegateSubmission() *DelegateSubmission {
	if x, ok := m.GetCommand().(*InputData_DelegateSubmission); ok {
		return x.DelegateSubmission
	}
	return nil
}

func (m *InputData) GetUndelegateSubmission() *UndelegateSubmission {
	if x, ok := m.GetCommand().(*InputData_UndelegateSubmission); ok {
		return x.UndelegateSubmission
	}
	return nil
}

func (m *InputData) GetLiquidityProvisionCancellation() *LiquidityProvisionCancellation {
	if x, ok := m.GetCommand().(*InputData_LiquidityProvisionCancellation); ok {
		return x.LiquidityProvisionCancellation
	}
	return nil
}

func (m *InputData) GetLiquidityProvisionAmendment() *LiquidityProvisionAmendment {
	if x, ok := m.GetCommand().(*InputData_LiquidityProvisionAmendment); ok {
		return x.LiquidityProvisionAmendment
	}
	return nil
}

func (m *InputData) GetNodeRegistration() *NodeRegistration {
	if x, ok := m.GetCommand().(*InputData_NodeRegistration); ok {
		return x.NodeRegistration
	}
	return nil
}

func (m *InputData) GetNodeVote() *NodeVote {
	if x, ok := m.GetCommand().(*InputData_NodeVote); ok {
		return x.NodeVote
	}
	return nil
}

func (m *InputData) GetNodeSignature() *NodeSignature {
	if x, ok := m.GetCommand().(*InputData_NodeSignature); ok {
		return x.NodeSignature
	}
	return nil
}

func (m *InputData) GetChainEvent() *ChainEvent {
	if x, ok := m.GetCommand().(*InputData_ChainEvent); ok {
		return x.ChainEvent
	}
	return nil
}

func (m *InputData) GetKeyRotateSubmission() *KeyRotateSubmission {
	if x, ok := m.GetCommand().(*InputData_KeyRotateSubmission); ok {
		return x.KeyRotateSubmission
	}
	return nil
}

func (m *InputData) GetStateVariableProposal() *StateVariableProposal {
	if x, ok := m.GetCommand().(*InputData_StateVariableProposal); ok {
		return x.StateVariableProposal
	}
	return nil
}

func (m *InputData) GetOracleDataSubmission() *OracleDataSubmission {
	if x, ok := m.GetCommand().(*InputData_OracleDataSubmission); ok {
		return x.OracleDataSubmission
	}
	return nil
}

func (m *InputData) GetRestoreSnapshotSubmission() *RestoreSnapshot {
	if x, ok := m.GetCommand().(*InputData_RestoreSnapshotSubmission); ok {
		return x.RestoreSnapshotSubmission
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*InputData) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*InputData_OrderSubmission)(nil),
		(*InputData_OrderCancellation)(nil),
		(*InputData_OrderAmendment)(nil),
		(*InputData_WithdrawSubmission)(nil),
		(*InputData_ProposalSubmission)(nil),
		(*InputData_VoteSubmission)(nil),
		(*InputData_LiquidityProvisionSubmission)(nil),
		(*InputData_DelegateSubmission)(nil),
		(*InputData_UndelegateSubmission)(nil),
		(*InputData_LiquidityProvisionCancellation)(nil),
		(*InputData_LiquidityProvisionAmendment)(nil),
		(*InputData_NodeRegistration)(nil),
		(*InputData_NodeVote)(nil),
		(*InputData_NodeSignature)(nil),
		(*InputData_ChainEvent)(nil),
		(*InputData_KeyRotateSubmission)(nil),
		(*InputData_StateVariableProposal)(nil),
		(*InputData_OracleDataSubmission)(nil),
		(*InputData_RestoreSnapshotSubmission)(nil),
	}
}

// Represents a transaction to be sent to Vega.
type Transaction struct {
	// One of the set of Vega commands (proto marshalled).
	InputData []byte `protobuf:"bytes,1,opt,name=input_data,json=inputData,proto3" json:"input_data,omitempty"`
	// The signature of the inputData.
	Signature *Signature `protobuf:"bytes,2,opt,name=signature,proto3" json:"signature,omitempty"`
	// The sender of the transaction.
	// Any of the following would be valid:
	//
	// Types that are valid to be assigned to From:
	//	*Transaction_Address
	//	*Transaction_PubKey
	From isTransaction_From `protobuf_oneof:"from"`
	// A version of the transaction, to be used in the future in case we want to
	// implement changes to the Transaction format.
	Version              uint32   `protobuf:"varint,2000,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Transaction) Reset()         { *m = Transaction{} }
func (m *Transaction) String() string { return proto.CompactTextString(m) }
func (*Transaction) ProtoMessage()    {}
func (*Transaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_73d2b9785d3e1386, []int{1}
}

func (m *Transaction) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Transaction.Unmarshal(m, b)
}
func (m *Transaction) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Transaction.Marshal(b, m, deterministic)
}
func (m *Transaction) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Transaction.Merge(m, src)
}
func (m *Transaction) XXX_Size() int {
	return xxx_messageInfo_Transaction.Size(m)
}
func (m *Transaction) XXX_DiscardUnknown() {
	xxx_messageInfo_Transaction.DiscardUnknown(m)
}

var xxx_messageInfo_Transaction proto.InternalMessageInfo

func (m *Transaction) GetInputData() []byte {
	if m != nil {
		return m.InputData
	}
	return nil
}

func (m *Transaction) GetSignature() *Signature {
	if m != nil {
		return m.Signature
	}
	return nil
}

type isTransaction_From interface {
	isTransaction_From()
}

type Transaction_Address struct {
	Address string `protobuf:"bytes,1001,opt,name=address,proto3,oneof"`
}

type Transaction_PubKey struct {
	PubKey string `protobuf:"bytes,1002,opt,name=pub_key,json=pubKey,proto3,oneof"`
}

func (*Transaction_Address) isTransaction_From() {}

func (*Transaction_PubKey) isTransaction_From() {}

func (m *Transaction) GetFrom() isTransaction_From {
	if m != nil {
		return m.From
	}
	return nil
}

func (m *Transaction) GetAddress() string {
	if x, ok := m.GetFrom().(*Transaction_Address); ok {
		return x.Address
	}
	return ""
}

func (m *Transaction) GetPubKey() string {
	if x, ok := m.GetFrom().(*Transaction_PubKey); ok {
		return x.PubKey
	}
	return ""
}

func (m *Transaction) GetVersion() uint32 {
	if m != nil {
		return m.Version
	}
	return 0
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*Transaction) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*Transaction_Address)(nil),
		(*Transaction_PubKey)(nil),
	}
}

// A signature to be authenticate a transaction and to be verified by the vega
// network.
type Signature struct {
	// The bytes of the signature (hex-encoded).
	Value string `protobuf:"bytes,1,opt,name=value,proto3" json:"value,omitempty"`
	// The algorithm used to create the signature.
	Algo string `protobuf:"bytes,2,opt,name=algo,proto3" json:"algo,omitempty"`
	// The version of the signature used to create the signature.
	Version              uint32   `protobuf:"varint,3,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Signature) Reset()         { *m = Signature{} }
func (m *Signature) String() string { return proto.CompactTextString(m) }
func (*Signature) ProtoMessage()    {}
func (*Signature) Descriptor() ([]byte, []int) {
	return fileDescriptor_73d2b9785d3e1386, []int{2}
}

func (m *Signature) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Signature.Unmarshal(m, b)
}
func (m *Signature) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Signature.Marshal(b, m, deterministic)
}
func (m *Signature) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Signature.Merge(m, src)
}
func (m *Signature) XXX_Size() int {
	return xxx_messageInfo_Signature.Size(m)
}
func (m *Signature) XXX_DiscardUnknown() {
	xxx_messageInfo_Signature.DiscardUnknown(m)
}

var xxx_messageInfo_Signature proto.InternalMessageInfo

func (m *Signature) GetValue() string {
	if m != nil {
		return m.Value
	}
	return ""
}

func (m *Signature) GetAlgo() string {
	if m != nil {
		return m.Algo
	}
	return ""
}

func (m *Signature) GetVersion() uint32 {
	if m != nil {
		return m.Version
	}
	return 0
}

func init() {
	proto.RegisterType((*InputData)(nil), "vega.commands.v1.InputData")
	proto.RegisterType((*Transaction)(nil), "vega.commands.v1.Transaction")
	proto.RegisterType((*Signature)(nil), "vega.commands.v1.Signature")
}

func init() {
	proto.RegisterFile("vega/commands/v1/transaction.proto", fileDescriptor_73d2b9785d3e1386)
}

var fileDescriptor_73d2b9785d3e1386 = []byte{
	// 872 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x96, 0xdd, 0x72, 0xdb, 0x44,
	0x14, 0xc7, 0x95, 0x92, 0xc6, 0xe8, 0xa4, 0x4d, 0xd3, 0x6d, 0x42, 0xd5, 0xa4, 0x4d, 0x52, 0xf3,
	0x55, 0x66, 0xc0, 0xa6, 0x70, 0x05, 0x57, 0xd0, 0x96, 0x19, 0x75, 0xda, 0x21, 0x9d, 0x0d, 0x2d,
	0x0c, 0xc3, 0xa0, 0x59, 0x4b, 0x8b, 0xbd, 0x13, 0x79, 0x57, 0xec, 0xae, 0x94, 0xf1, 0x05, 0x8f,
	0xc1, 0x03, 0xf0, 0x18, 0x5c, 0xf3, 0x02, 0x7c, 0xbf, 0x03, 0xdf, 0x5f, 0x2f, 0xc0, 0xec, 0xae,
	0x15, 0x4b, 0x96, 0xd4, 0xc9, 0x9d, 0xf4, 0xdf, 0xff, 0xf9, 0x1d, 0x9f, 0xe3, 0xb3, 0x3e, 0x86,
	0x7e, 0x41, 0xc7, 0x64, 0x18, 0x8b, 0xe9, 0x94, 0xf0, 0x44, 0x0d, 0x8b, 0xdb, 0x43, 0x2d, 0x09,
	0x57, 0x24, 0xd6, 0x4c, 0xf0, 0x41, 0x26, 0x85, 0x16, 0x68, 0xd3, 0x78, 0x06, 0xa5, 0x67, 0x50,
	0xdc, 0xde, 0xd9, 0x6f, 0x44, 0x9d, 0x9e, 0xda, 0x90, 0x9d, 0x57, 0x1a, 0x86, 0x82, 0xa4, 0x2c,
	0x21, 0x5a, 0xc8, 0x68, 0xc9, 0xba, 0xd7, 0xb0, 0x0a, 0x49, 0xe2, 0x94, 0xce, 0xcf, 0xfb, 0x5f,
	0x6e, 0x80, 0x7f, 0x9f, 0x67, 0xb9, 0xbe, 0x47, 0x34, 0x41, 0x5b, 0x70, 0x9e, 0x0b, 0x1e, 0xd3,
	0x60, 0xe5, 0x60, 0xe5, 0xd6, 0x2a, 0x76, 0x2f, 0xe8, 0x26, 0x5c, 0x18, 0xa5, 0x22, 0x3e, 0x8e,
	0x26, 0x94, 0x8d, 0x27, 0x3a, 0x38, 0x67, 0x0f, 0xd7, 0xad, 0x16, 0x5a, 0x09, 0x1d, 0xc2, 0xa6,
	0x90, 0x09, 0x95, 0x91, 0xca, 0x47, 0x53, 0xa6, 0x14, 0x13, 0x3c, 0xf8, 0xa5, 0x77, 0xb0, 0x72,
	0x6b, 0xfd, 0x8d, 0x9b, 0x83, 0xe5, 0x02, 0x07, 0x87, 0xc6, 0x7a, 0x74, 0xea, 0x0c, 0x3d, 0x7c,
	0x49, 0xd4, 0x25, 0xf4, 0x18, 0x90, 0x03, 0xc6, 0x84, 0xc7, 0x34, 0x4d, 0x89, 0xe9, 0x58, 0xf0,
	0xab, 0x43, 0x3e, 0xdf, 0x81, 0xbc, 0x5b, 0xf1, 0x86, 0x1e, 0xbe, 0x2c, 0x96, 0x45, 0xf4, 0x10,
	0x5c, 0xa6, 0x88, 0x4c, 0x29, 0x4f, 0xa6, 0x94, 0xeb, 0xe0, 0x37, 0xc7, 0x3c, 0xe8, 0x60, 0xbe,
	0x5b, 0x1a, 0x43, 0x0f, 0x6f, 0x88, 0x9a, 0x82, 0x3e, 0x82, 0x2b, 0x27, 0x4c, 0x4f, 0x12, 0x49,
	0x4e, 0xaa, 0x85, 0xff, 0xee, 0x88, 0x2f, 0x34, 0x89, 0x1f, 0xce, 0xdd, 0xb5, 0xda, 0xd1, 0x49,
	0x43, 0x35, 0xe4, 0x4c, 0x8a, 0x4c, 0x28, 0x92, 0x56, 0xc9, 0x7f, 0x74, 0x92, 0x1f, 0xcd, 0xdd,
	0x75, 0x72, 0xd6, 0x50, 0x4d, 0x07, 0x0a, 0xa1, 0x69, 0x95, 0xfa, 0x67, 0x67, 0x07, 0x9e, 0x08,
	0x4d, 0x6b, 0xc4, 0x8d, 0xa2, 0xa6, 0xa0, 0x13, 0xd8, 0x4b, 0xd9, 0xe7, 0x39, 0x4b, 0x98, 0x9e,
	0x45, 0x99, 0x14, 0x05, 0x33, 0x72, 0x15, 0xfe, 0x97, 0x83, 0x0f, 0x9a, 0xf0, 0x87, 0x65, 0xe0,
	0xa3, 0x32, 0xae, 0x96, 0xea, 0x7a, 0xfa, 0x94, 0x73, 0xd3, 0xa0, 0x84, 0xa6, 0x74, 0x4c, 0xea,
	0xa5, 0xfc, 0xdd, 0xd9, 0xa0, 0x7b, 0x73, 0x77, 0xbd, 0x41, 0x49, 0x43, 0x45, 0x9f, 0xc2, 0x76,
	0xce, 0xdb, 0xd8, 0xff, 0x38, 0xf6, 0x4b, 0x4d, 0xf6, 0x63, 0x9e, 0xb4, 0xd1, 0xb7, 0xf2, 0x16,
	0x1d, 0x7d, 0x01, 0x07, 0x6d, 0x2d, 0xab, 0xcd, 0xf9, 0xbf, 0x2e, 0xd5, 0xeb, 0x67, 0x69, 0xda,
	0xd2, 0xd0, 0xef, 0xa5, 0x4f, 0x75, 0x20, 0x0d, 0x37, 0xda, 0xd2, 0x2f, 0xee, 0xc3, 0x7f, 0x2e,
	0xf7, 0x6b, 0x67, 0xc9, 0x5d, 0xbd, 0x1c, 0xbb, 0x69, 0xf7, 0x31, 0xc2, 0x70, 0x99, 0x8b, 0x84,
	0x46, 0x92, 0x8e, 0x99, 0xd2, 0xd2, 0x55, 0xf9, 0xdd, 0x25, 0x9b, 0xa9, 0xdf, 0xcc, 0xf4, 0xbe,
	0x48, 0x28, 0xae, 0x58, 0x43, 0x0f, 0x6f, 0xf2, 0x25, 0x0d, 0xbd, 0x0d, 0xbe, 0x65, 0x9a, 0x91,
	0x0c, 0xbe, 0x77, 0xac, 0x9d, 0x76, 0x96, 0x99, 0xe3, 0xd0, 0xc3, 0xcf, 0xf2, 0xf9, 0x33, 0xba,
	0x0f, 0x1b, 0x36, 0x56, 0xb1, 0x31, 0x27, 0x3a, 0x97, 0x34, 0xf8, 0xc1, 0x01, 0xf6, 0xdb, 0x01,
	0x47, 0xa5, 0x2f, 0xf4, 0xf0, 0x45, 0x5e, 0x15, 0xd0, 0x3b, 0xb0, 0x1e, 0x4f, 0x08, 0xe3, 0x11,
	0x2d, 0x4c, 0xfb, 0x7e, 0x74, 0x9c, 0xeb, 0x4d, 0xce, 0x5d, 0xe3, 0x7a, 0xaf, 0x70, 0xdd, 0x82,
	0xf8, 0xf4, 0x0d, 0x7d, 0x02, 0xdb, 0xc7, 0x74, 0x16, 0x49, 0xa1, 0x97, 0x26, 0xee, 0x27, 0xc7,
	0x7a, 0xb1, 0xc9, 0x7a, 0x40, 0x67, 0xd8, 0xda, 0x6b, 0x03, 0x77, 0xe5, 0xb8, 0x29, 0xa3, 0x11,
	0x5c, 0x55, 0x16, 0x5c, 0x10, 0xc9, 0xc8, 0x28, 0xa5, 0x51, 0xf9, 0xab, 0x10, 0xfc, 0xec, 0xf8,
	0x2f, 0x37, 0xf9, 0x47, 0x26, 0xe2, 0xc9, 0x3c, 0xa0, 0xfc, 0x6d, 0x09, 0x3d, 0xbc, 0xad, 0xda,
	0x0e, 0x50, 0x04, 0xcf, 0xb9, 0xb5, 0x12, 0x25, 0x44, 0x93, 0x6a, 0x09, 0x5f, 0x5f, 0xed, 0xba,
	0x34, 0x87, 0x36, 0xc0, 0xac, 0x9d, 0xfa, 0xa5, 0x11, 0x2d, 0x3a, 0x4a, 0x60, 0x57, 0x52, 0xa5,
	0x85, 0xa4, 0x91, 0xe2, 0x24, 0x53, 0x13, 0xa1, 0xab, 0x59, 0xbe, 0xda, 0xef, 0x5a, 0x35, 0xd8,
	0x45, 0x1d, 0xcd, 0x83, 0x42, 0x0f, 0x5f, 0x93, 0x75, 0x69, 0x91, 0xe5, 0x8e, 0x0f, 0xbd, 0x79,
	0x6c, 0xff, 0x9b, 0x15, 0x58, 0xff, 0x60, 0xb1, 0xab, 0xd1, 0x0d, 0x00, 0x66, 0xd6, 0xa4, 0x2d,
	0xd0, 0xae, 0xc7, 0x0b, 0xd8, 0x67, 0xa7, 0x8b, 0xf3, 0x2d, 0xf0, 0x17, 0xa3, 0x74, 0xce, 0x7e,
	0x98, 0xdd, 0x96, 0xae, 0x96, 0x16, 0xbc, 0x70, 0xa3, 0x5d, 0xe8, 0x91, 0x24, 0x91, 0x54, 0x29,
	0xb7, 0x31, 0xfd, 0xd0, 0xc3, 0xa5, 0x82, 0x76, 0xa0, 0x97, 0xe5, 0xa3, 0xe8, 0x98, 0xce, 0xdc,
	0xee, 0x33, 0x87, 0x6b, 0x59, 0x3e, 0x7a, 0x40, 0x67, 0xe8, 0x1a, 0xf4, 0x0a, 0x2a, 0x6d, 0xfd,
	0xdf, 0x9a, 0x2f, 0xf2, 0x22, 0x2e, 0xdf, 0xef, 0xac, 0xc1, 0xea, 0x67, 0x52, 0x4c, 0xfb, 0x87,
	0xe0, 0x2f, 0x06, 0x75, 0x0b, 0xce, 0x17, 0x24, 0xcd, 0xdd, 0x72, 0xf7, 0xb1, 0x7b, 0x41, 0x08,
	0x56, 0x49, 0x3a, 0x16, 0xf6, 0x43, 0xfb, 0xd8, 0x3e, 0xa3, 0x60, 0x41, 0x7e, 0xa6, 0x0e, 0x1e,
	0x7c, 0xfc, 0x6a, 0x2c, 0x12, 0x6a, 0x4b, 0xb3, 0x7f, 0x20, 0x62, 0x91, 0x0e, 0x98, 0x18, 0xda,
	0x67, 0x35, 0x5c, 0xfe, 0xb3, 0x31, 0x5a, 0xb3, 0x07, 0x6f, 0xfe, 0x1f, 0x00, 0x00, 0xff, 0xff,
	0x3f, 0x2e, 0xe2, 0x5c, 0x09, 0x09, 0x00, 0x00,
}
