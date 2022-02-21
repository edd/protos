// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: data-node/api/v2/trading_data.proto

package v2

import (
	vega "code.vegaprotocol.io/protos/vega"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	_ "google.golang.org/protobuf/types/known/wrapperspb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// A list of the properties of an account, used for grouping
type AccountField int32

const (
	AccountField_ACCOUNT_FIELD_UNSPECIFIED AccountField = 0
	AccountField_ACCOUNT_FIELD_ID          AccountField = 1
	AccountField_ACCOUNT_FIELD_PARTY_ID    AccountField = 2
	AccountField_ACCOUNT_FIELD_ASSET_ID    AccountField = 3
	AccountField_ACCOUNT_FIELD_MARKET_ID   AccountField = 4
	AccountField_ACCOUNT_FIELD_TYPE        AccountField = 5
)

// Enum value maps for AccountField.
var (
	AccountField_name = map[int32]string{
		0: "ACCOUNT_FIELD_UNSPECIFIED",
		1: "ACCOUNT_FIELD_ID",
		2: "ACCOUNT_FIELD_PARTY_ID",
		3: "ACCOUNT_FIELD_ASSET_ID",
		4: "ACCOUNT_FIELD_MARKET_ID",
		5: "ACCOUNT_FIELD_TYPE",
	}
	AccountField_value = map[string]int32{
		"ACCOUNT_FIELD_UNSPECIFIED": 0,
		"ACCOUNT_FIELD_ID":          1,
		"ACCOUNT_FIELD_PARTY_ID":    2,
		"ACCOUNT_FIELD_ASSET_ID":    3,
		"ACCOUNT_FIELD_MARKET_ID":   4,
		"ACCOUNT_FIELD_TYPE":        5,
	}
)

func (x AccountField) Enum() *AccountField {
	p := new(AccountField)
	*p = x
	return p
}

func (x AccountField) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AccountField) Descriptor() protoreflect.EnumDescriptor {
	return file_data_node_api_v2_trading_data_proto_enumTypes[0].Descriptor()
}

func (AccountField) Type() protoreflect.EnumType {
	return &file_data_node_api_v2_trading_data_proto_enumTypes[0]
}

func (x AccountField) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AccountField.Descriptor instead.
func (AccountField) EnumDescriptor() ([]byte, []int) {
	return file_data_node_api_v2_trading_data_proto_rawDescGZIP(), []int{0}
}

type QueryBalanceHistoryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Limit the accounts considered according to the filter supplied
	Filter *AccountFilter `protobuf:"bytes,1,opt,name=filter,proto3" json:"filter,omitempty"`
	// By default the net balances of all the accounts specified by the filter are returned.
	// If a list if fields is given in group_by, split out those balances by the supplied crietera.
	GroupBy []AccountField `protobuf:"varint,2,rep,packed,name=group_by,json=groupBy,proto3,enum=datanode.api.v2.AccountField" json:"group_by,omitempty"`
}

func (x *QueryBalanceHistoryRequest) Reset() {
	*x = QueryBalanceHistoryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_node_api_v2_trading_data_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryBalanceHistoryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryBalanceHistoryRequest) ProtoMessage() {}

func (x *QueryBalanceHistoryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_data_node_api_v2_trading_data_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueryBalanceHistoryRequest.ProtoReflect.Descriptor instead.
func (*QueryBalanceHistoryRequest) Descriptor() ([]byte, []int) {
	return file_data_node_api_v2_trading_data_proto_rawDescGZIP(), []int{0}
}

func (x *QueryBalanceHistoryRequest) GetFilter() *AccountFilter {
	if x != nil {
		return x.Filter
	}
	return nil
}

func (x *QueryBalanceHistoryRequest) GetGroupBy() []AccountField {
	if x != nil {
		return x.GroupBy
	}
	return nil
}

type QueryBalanceHistoryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Balances []*AggregatedBalance `protobuf:"bytes,1,rep,name=balances,proto3" json:"balances,omitempty"`
}

func (x *QueryBalanceHistoryResponse) Reset() {
	*x = QueryBalanceHistoryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_node_api_v2_trading_data_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QueryBalanceHistoryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QueryBalanceHistoryResponse) ProtoMessage() {}

func (x *QueryBalanceHistoryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_data_node_api_v2_trading_data_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QueryBalanceHistoryResponse.ProtoReflect.Descriptor instead.
func (*QueryBalanceHistoryResponse) Descriptor() ([]byte, []int) {
	return file_data_node_api_v2_trading_data_proto_rawDescGZIP(), []int{1}
}

func (x *QueryBalanceHistoryResponse) GetBalances() []*AggregatedBalance {
	if x != nil {
		return x.Balances
	}
	return nil
}

type AccountFilter struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Restrict accounts to those holding balances in this asset ID
	AssetId string `protobuf:"bytes,1,opt,name=asset_id,json=assetId,proto3" json:"asset_id,omitempty"`
	// Restrict accounts to those owned by the parties in this list (pass an empty list for no filter)
	PartyIds []string `protobuf:"bytes,2,rep,name=party_ids,json=partyIds,proto3" json:"party_ids,omitempty"`
	// Restrict accounts to those connected to the marketsin this list (pass an empty list for no filter)
	MarketIds []string `protobuf:"bytes,3,rep,name=market_ids,json=marketIds,proto3" json:"market_ids,omitempty"`
	// Restrict accounts to those connected to any of the types in this list (pass an empty list for no filter)
	AccountTypes []vega.AccountType `protobuf:"varint,4,rep,packed,name=account_types,json=accountTypes,proto3,enum=vega.AccountType" json:"account_types,omitempty"`
}

func (x *AccountFilter) Reset() {
	*x = AccountFilter{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_node_api_v2_trading_data_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccountFilter) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccountFilter) ProtoMessage() {}

func (x *AccountFilter) ProtoReflect() protoreflect.Message {
	mi := &file_data_node_api_v2_trading_data_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccountFilter.ProtoReflect.Descriptor instead.
func (*AccountFilter) Descriptor() ([]byte, []int) {
	return file_data_node_api_v2_trading_data_proto_rawDescGZIP(), []int{2}
}

func (x *AccountFilter) GetAssetId() string {
	if x != nil {
		return x.AssetId
	}
	return ""
}

func (x *AccountFilter) GetPartyIds() []string {
	if x != nil {
		return x.PartyIds
	}
	return nil
}

func (x *AccountFilter) GetMarketIds() []string {
	if x != nil {
		return x.MarketIds
	}
	return nil
}

func (x *AccountFilter) GetAccountTypes() []vega.AccountType {
	if x != nil {
		return x.AccountTypes
	}
	return nil
}

type AggregatedBalance struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Timestamp to of block the balance is referring to, in nanoseconds since the epoch
	Timestamp int64 `protobuf:"varint,1,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// The balance of the set of requested accounts at the time above
	Balance string `protobuf:"bytes,2,opt,name=balance,proto3" json:"balance,omitempty"`
	// If grouping by account ID, the account ID
	AccountId *string `protobuf:"bytes,3,opt,name=account_id,json=accountId,proto3,oneof" json:"account_id,omitempty"`
	// If grouping by party, the party ID
	PartyId *string `protobuf:"bytes,4,opt,name=party_id,json=partyId,proto3,oneof" json:"party_id,omitempty"`
	// If grouping by asset, the asset ID
	AssetId *string `protobuf:"bytes,5,opt,name=asset_id,json=assetId,proto3,oneof" json:"asset_id,omitempty"`
	// If grouping by market, the market ID
	MarketId *string `protobuf:"bytes,6,opt,name=market_id,json=marketId,proto3,oneof" json:"market_id,omitempty"`
	// If grouping by account type, the account type
	AccountType vega.AccountType `protobuf:"varint,7,opt,name=account_type,json=accountType,proto3,enum=vega.AccountType" json:"account_type,omitempty"`
}

func (x *AggregatedBalance) Reset() {
	*x = AggregatedBalance{}
	if protoimpl.UnsafeEnabled {
		mi := &file_data_node_api_v2_trading_data_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AggregatedBalance) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AggregatedBalance) ProtoMessage() {}

func (x *AggregatedBalance) ProtoReflect() protoreflect.Message {
	mi := &file_data_node_api_v2_trading_data_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AggregatedBalance.ProtoReflect.Descriptor instead.
func (*AggregatedBalance) Descriptor() ([]byte, []int) {
	return file_data_node_api_v2_trading_data_proto_rawDescGZIP(), []int{3}
}

func (x *AggregatedBalance) GetTimestamp() int64 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

func (x *AggregatedBalance) GetBalance() string {
	if x != nil {
		return x.Balance
	}
	return ""
}

func (x *AggregatedBalance) GetAccountId() string {
	if x != nil && x.AccountId != nil {
		return *x.AccountId
	}
	return ""
}

func (x *AggregatedBalance) GetPartyId() string {
	if x != nil && x.PartyId != nil {
		return *x.PartyId
	}
	return ""
}

func (x *AggregatedBalance) GetAssetId() string {
	if x != nil && x.AssetId != nil {
		return *x.AssetId
	}
	return ""
}

func (x *AggregatedBalance) GetMarketId() string {
	if x != nil && x.MarketId != nil {
		return *x.MarketId
	}
	return ""
}

func (x *AggregatedBalance) GetAccountType() vega.AccountType {
	if x != nil {
		return x.AccountType
	}
	return vega.AccountType(0)
}

var File_data_node_api_v2_trading_data_proto protoreflect.FileDescriptor

var file_data_node_api_v2_trading_data_proto_rawDesc = []byte{
	0x0a, 0x23, 0x64, 0x61, 0x74, 0x61, 0x2d, 0x6e, 0x6f, 0x64, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x32, 0x2f, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x64, 0x61, 0x74, 0x61, 0x6e, 0x6f, 0x64, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x1a, 0x0f, 0x76, 0x65, 0x67, 0x61, 0x2f, 0x76, 0x65, 0x67,
	0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x77, 0x72, 0x61, 0x70, 0x70, 0x65, 0x72,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8e, 0x01, 0x0a, 0x1a, 0x51, 0x75, 0x65, 0x72,
	0x79, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x36, 0x0a, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x6e, 0x6f, 0x64,
	0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x38,
	0x0a, 0x08, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x5f, 0x62, 0x79, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0e,
	0x32, 0x1d, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x32, 0x2e, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x52,
	0x07, 0x67, 0x72, 0x6f, 0x75, 0x70, 0x42, 0x79, 0x22, 0x5d, 0x0a, 0x1b, 0x51, 0x75, 0x65, 0x72,
	0x79, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3e, 0x0a, 0x08, 0x62, 0x61, 0x6c, 0x61, 0x6e,
	0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x64, 0x61, 0x74, 0x61,
	0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x41, 0x67, 0x67, 0x72,
	0x65, 0x67, 0x61, 0x74, 0x65, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x52, 0x08, 0x62,
	0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x73, 0x22, 0x9e, 0x01, 0x0a, 0x0d, 0x41, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x46, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x19, 0x0a, 0x08, 0x61, 0x73, 0x73,
	0x65, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x73, 0x73,
	0x65, 0x74, 0x49, 0x64, 0x12, 0x1b, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x79, 0x5f, 0x69, 0x64,
	0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x72, 0x74, 0x79, 0x49, 0x64,
	0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x73, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x09, 0x52, 0x09, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x49, 0x64, 0x73,
	0x12, 0x36, 0x0a, 0x0d, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0e, 0x32, 0x11, 0x2e, 0x76, 0x65, 0x67, 0x61, 0x2e, 0x41,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0c, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x73, 0x22, 0xbe, 0x02, 0x0a, 0x11, 0x41, 0x67, 0x67,
	0x72, 0x65, 0x67, 0x61, 0x74, 0x65, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x12, 0x1c,
	0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x18, 0x0a, 0x07,
	0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x62,
	0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x12, 0x22, 0x0a, 0x0a, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52, 0x09, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x1e, 0x0a, 0x08, 0x70, 0x61,
	0x72, 0x74, 0x79, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x07,
	0x70, 0x61, 0x72, 0x74, 0x79, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x1e, 0x0a, 0x08, 0x61, 0x73,
	0x73, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x07,
	0x61, 0x73, 0x73, 0x65, 0x74, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x20, 0x0a, 0x09, 0x6d, 0x61,
	0x72, 0x6b, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x48, 0x03, 0x52,
	0x08, 0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12, 0x34, 0x0a, 0x0c,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x11, 0x2e, 0x76, 0x65, 0x67, 0x61, 0x2e, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x0b, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x79,
	0x70, 0x65, 0x42, 0x0d, 0x0a, 0x0b, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x69,
	0x64, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x70, 0x61, 0x72, 0x74, 0x79, 0x5f, 0x69, 0x64, 0x42, 0x0b,
	0x0a, 0x09, 0x5f, 0x61, 0x73, 0x73, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x42, 0x0c, 0x0a, 0x0a, 0x5f,
	0x6d, 0x61, 0x72, 0x6b, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x2a, 0xb0, 0x01, 0x0a, 0x0c, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x12, 0x1d, 0x0a, 0x19, 0x41, 0x43,
	0x43, 0x4f, 0x55, 0x4e, 0x54, 0x5f, 0x46, 0x49, 0x45, 0x4c, 0x44, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x14, 0x0a, 0x10, 0x41, 0x43, 0x43,
	0x4f, 0x55, 0x4e, 0x54, 0x5f, 0x46, 0x49, 0x45, 0x4c, 0x44, 0x5f, 0x49, 0x44, 0x10, 0x01, 0x12,
	0x1a, 0x0a, 0x16, 0x41, 0x43, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x5f, 0x46, 0x49, 0x45, 0x4c, 0x44,
	0x5f, 0x50, 0x41, 0x52, 0x54, 0x59, 0x5f, 0x49, 0x44, 0x10, 0x02, 0x12, 0x1a, 0x0a, 0x16, 0x41,
	0x43, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x5f, 0x46, 0x49, 0x45, 0x4c, 0x44, 0x5f, 0x41, 0x53, 0x53,
	0x45, 0x54, 0x5f, 0x49, 0x44, 0x10, 0x03, 0x12, 0x1b, 0x0a, 0x17, 0x41, 0x43, 0x43, 0x4f, 0x55,
	0x4e, 0x54, 0x5f, 0x46, 0x49, 0x45, 0x4c, 0x44, 0x5f, 0x4d, 0x41, 0x52, 0x4b, 0x45, 0x54, 0x5f,
	0x49, 0x44, 0x10, 0x04, 0x12, 0x16, 0x0a, 0x12, 0x41, 0x43, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x5f,
	0x46, 0x49, 0x45, 0x4c, 0x44, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x10, 0x05, 0x32, 0x88, 0x01, 0x0a,
	0x12, 0x54, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x44, 0x61, 0x74, 0x61, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x72, 0x0a, 0x13, 0x51, 0x75, 0x65, 0x72, 0x79, 0x42, 0x61, 0x6c, 0x61,
	0x6e, 0x63, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x2b, 0x2e, 0x64, 0x61, 0x74,
	0x61, 0x6e, 0x6f, 0x64, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x51, 0x75, 0x65,
	0x72, 0x79, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x64, 0x61, 0x74, 0x61, 0x6e, 0x6f,
	0x64, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x42,
	0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x2e, 0x5a, 0x2c, 0x63, 0x6f, 0x64, 0x65, 0x2e,
	0x76, 0x65, 0x67, 0x61, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e, 0x69, 0x6f, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x61, 0x74, 0x61, 0x2d, 0x6e, 0x6f, 0x64, 0x65,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_data_node_api_v2_trading_data_proto_rawDescOnce sync.Once
	file_data_node_api_v2_trading_data_proto_rawDescData = file_data_node_api_v2_trading_data_proto_rawDesc
)

func file_data_node_api_v2_trading_data_proto_rawDescGZIP() []byte {
	file_data_node_api_v2_trading_data_proto_rawDescOnce.Do(func() {
		file_data_node_api_v2_trading_data_proto_rawDescData = protoimpl.X.CompressGZIP(file_data_node_api_v2_trading_data_proto_rawDescData)
	})
	return file_data_node_api_v2_trading_data_proto_rawDescData
}

var file_data_node_api_v2_trading_data_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_data_node_api_v2_trading_data_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_data_node_api_v2_trading_data_proto_goTypes = []interface{}{
	(AccountField)(0),                   // 0: datanode.api.v2.AccountField
	(*QueryBalanceHistoryRequest)(nil),  // 1: datanode.api.v2.QueryBalanceHistoryRequest
	(*QueryBalanceHistoryResponse)(nil), // 2: datanode.api.v2.QueryBalanceHistoryResponse
	(*AccountFilter)(nil),               // 3: datanode.api.v2.AccountFilter
	(*AggregatedBalance)(nil),           // 4: datanode.api.v2.AggregatedBalance
	(vega.AccountType)(0),               // 5: vega.AccountType
}
var file_data_node_api_v2_trading_data_proto_depIdxs = []int32{
	3, // 0: datanode.api.v2.QueryBalanceHistoryRequest.filter:type_name -> datanode.api.v2.AccountFilter
	0, // 1: datanode.api.v2.QueryBalanceHistoryRequest.group_by:type_name -> datanode.api.v2.AccountField
	4, // 2: datanode.api.v2.QueryBalanceHistoryResponse.balances:type_name -> datanode.api.v2.AggregatedBalance
	5, // 3: datanode.api.v2.AccountFilter.account_types:type_name -> vega.AccountType
	5, // 4: datanode.api.v2.AggregatedBalance.account_type:type_name -> vega.AccountType
	1, // 5: datanode.api.v2.TradingDataService.QueryBalanceHistory:input_type -> datanode.api.v2.QueryBalanceHistoryRequest
	2, // 6: datanode.api.v2.TradingDataService.QueryBalanceHistory:output_type -> datanode.api.v2.QueryBalanceHistoryResponse
	6, // [6:7] is the sub-list for method output_type
	5, // [5:6] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_data_node_api_v2_trading_data_proto_init() }
func file_data_node_api_v2_trading_data_proto_init() {
	if File_data_node_api_v2_trading_data_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_data_node_api_v2_trading_data_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueryBalanceHistoryRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_data_node_api_v2_trading_data_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QueryBalanceHistoryResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_data_node_api_v2_trading_data_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccountFilter); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_data_node_api_v2_trading_data_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AggregatedBalance); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_data_node_api_v2_trading_data_proto_msgTypes[3].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_data_node_api_v2_trading_data_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_data_node_api_v2_trading_data_proto_goTypes,
		DependencyIndexes: file_data_node_api_v2_trading_data_proto_depIdxs,
		EnumInfos:         file_data_node_api_v2_trading_data_proto_enumTypes,
		MessageInfos:      file_data_node_api_v2_trading_data_proto_msgTypes,
	}.Build()
	File_data_node_api_v2_trading_data_proto = out.File
	file_data_node_api_v2_trading_data_proto_rawDesc = nil
	file_data_node_api_v2_trading_data_proto_goTypes = nil
	file_data_node_api_v2_trading_data_proto_depIdxs = nil
}