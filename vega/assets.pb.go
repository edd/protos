// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.18.1
// source: vega/assets.proto

package vega

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// The Vega representation of an external asset
type Asset struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Internal identifier of the asset
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// The definition of the external source for this asset
	Details *AssetDetails `protobuf:"bytes,2,opt,name=details,proto3" json:"details,omitempty"`
}

func (x *Asset) Reset() {
	*x = Asset{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vega_assets_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Asset) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Asset) ProtoMessage() {}

func (x *Asset) ProtoReflect() protoreflect.Message {
	mi := &file_vega_assets_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Asset.ProtoReflect.Descriptor instead.
func (*Asset) Descriptor() ([]byte, []int) {
	return file_vega_assets_proto_rawDescGZIP(), []int{0}
}

func (x *Asset) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Asset) GetDetails() *AssetDetails {
	if x != nil {
		return x.Details
	}
	return nil
}

// The Vega representation of an external asset
type AssetDetails struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of the asset (e.g: Great British Pound)
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Symbol of the asset (e.g: GBP)
	Symbol string `protobuf:"bytes,2,opt,name=symbol,proto3" json:"symbol,omitempty"`
	// Total circulating supply for the asset
	TotalSupply string `protobuf:"bytes,3,opt,name=total_supply,json=totalSupply,proto3" json:"total_supply,omitempty"`
	// Number of decimal / precision handled by this asset
	Decimals uint64 `protobuf:"varint,4,opt,name=decimals,proto3" json:"decimals,omitempty"`
	// The minimum economically meaningful amount in the asset
	Quantum string `protobuf:"bytes,5,opt,name=quantum,proto3" json:"quantum,omitempty"`
	// The source
	//
	// Types that are assignable to Source:
	//	*AssetDetails_BuiltinAsset
	//	*AssetDetails_Erc20
	Source isAssetDetails_Source `protobuf_oneof:"source"`
}

func (x *AssetDetails) Reset() {
	*x = AssetDetails{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vega_assets_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AssetDetails) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AssetDetails) ProtoMessage() {}

func (x *AssetDetails) ProtoReflect() protoreflect.Message {
	mi := &file_vega_assets_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AssetDetails.ProtoReflect.Descriptor instead.
func (*AssetDetails) Descriptor() ([]byte, []int) {
	return file_vega_assets_proto_rawDescGZIP(), []int{1}
}

func (x *AssetDetails) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *AssetDetails) GetSymbol() string {
	if x != nil {
		return x.Symbol
	}
	return ""
}

func (x *AssetDetails) GetTotalSupply() string {
	if x != nil {
		return x.TotalSupply
	}
	return ""
}

func (x *AssetDetails) GetDecimals() uint64 {
	if x != nil {
		return x.Decimals
	}
	return 0
}

func (x *AssetDetails) GetQuantum() string {
	if x != nil {
		return x.Quantum
	}
	return ""
}

func (m *AssetDetails) GetSource() isAssetDetails_Source {
	if m != nil {
		return m.Source
	}
	return nil
}

func (x *AssetDetails) GetBuiltinAsset() *BuiltinAsset {
	if x, ok := x.GetSource().(*AssetDetails_BuiltinAsset); ok {
		return x.BuiltinAsset
	}
	return nil
}

func (x *AssetDetails) GetErc20() *ERC20 {
	if x, ok := x.GetSource().(*AssetDetails_Erc20); ok {
		return x.Erc20
	}
	return nil
}

type isAssetDetails_Source interface {
	isAssetDetails_Source()
}

type AssetDetails_BuiltinAsset struct {
	// A built-in asset
	BuiltinAsset *BuiltinAsset `protobuf:"bytes,101,opt,name=builtin_asset,json=builtinAsset,proto3,oneof"`
}

type AssetDetails_Erc20 struct {
	// An Ethereum ERC20 asset
	Erc20 *ERC20 `protobuf:"bytes,102,opt,name=erc20,proto3,oneof"`
}

func (*AssetDetails_BuiltinAsset) isAssetDetails_Source() {}

func (*AssetDetails_Erc20) isAssetDetails_Source() {}

// A Vega internal asset
type BuiltinAsset struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Maximum amount that can be requested by a party through the built-in asset faucet at a time
	MaxFaucetAmountMint string `protobuf:"bytes,1,opt,name=max_faucet_amount_mint,json=maxFaucetAmountMint,proto3" json:"max_faucet_amount_mint,omitempty"`
}

func (x *BuiltinAsset) Reset() {
	*x = BuiltinAsset{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vega_assets_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BuiltinAsset) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BuiltinAsset) ProtoMessage() {}

func (x *BuiltinAsset) ProtoReflect() protoreflect.Message {
	mi := &file_vega_assets_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BuiltinAsset.ProtoReflect.Descriptor instead.
func (*BuiltinAsset) Descriptor() ([]byte, []int) {
	return file_vega_assets_proto_rawDescGZIP(), []int{2}
}

func (x *BuiltinAsset) GetMaxFaucetAmountMint() string {
	if x != nil {
		return x.MaxFaucetAmountMint
	}
	return ""
}

// An ERC20 token based asset, living on the ethereum network
type ERC20 struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// The address of the contract for the token, on the ethereum network
	ContractAddress string `protobuf:"bytes,1,opt,name=contract_address,json=contractAddress,proto3" json:"contract_address,omitempty"`
}

func (x *ERC20) Reset() {
	*x = ERC20{}
	if protoimpl.UnsafeEnabled {
		mi := &file_vega_assets_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ERC20) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ERC20) ProtoMessage() {}

func (x *ERC20) ProtoReflect() protoreflect.Message {
	mi := &file_vega_assets_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ERC20.ProtoReflect.Descriptor instead.
func (*ERC20) Descriptor() ([]byte, []int) {
	return file_vega_assets_proto_rawDescGZIP(), []int{3}
}

func (x *ERC20) GetContractAddress() string {
	if x != nil {
		return x.ContractAddress
	}
	return ""
}

var File_vega_assets_proto protoreflect.FileDescriptor

var file_vega_assets_proto_rawDesc = []byte{
	0x0a, 0x11, 0x76, 0x65, 0x67, 0x61, 0x2f, 0x61, 0x73, 0x73, 0x65, 0x74, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x04, 0x76, 0x65, 0x67, 0x61, 0x22, 0x45, 0x0a, 0x05, 0x41, 0x73, 0x73,
	0x65, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x2c, 0x0a, 0x07, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x76, 0x65, 0x67, 0x61, 0x2e, 0x41, 0x73, 0x73, 0x65, 0x74,
	0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73, 0x52, 0x07, 0x64, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73,
	0x22, 0xfd, 0x01, 0x0a, 0x0c, 0x41, 0x73, 0x73, 0x65, 0x74, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c,
	0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x12, 0x21, 0x0a,
	0x0c, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x5f, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x79, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0b, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x79,
	0x12, 0x1a, 0x0a, 0x08, 0x64, 0x65, 0x63, 0x69, 0x6d, 0x61, 0x6c, 0x73, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x08, 0x64, 0x65, 0x63, 0x69, 0x6d, 0x61, 0x6c, 0x73, 0x12, 0x18, 0x0a, 0x07,
	0x71, 0x75, 0x61, 0x6e, 0x74, 0x75, 0x6d, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x71,
	0x75, 0x61, 0x6e, 0x74, 0x75, 0x6d, 0x12, 0x39, 0x0a, 0x0d, 0x62, 0x75, 0x69, 0x6c, 0x74, 0x69,
	0x6e, 0x5f, 0x61, 0x73, 0x73, 0x65, 0x74, 0x18, 0x65, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e,
	0x76, 0x65, 0x67, 0x61, 0x2e, 0x42, 0x75, 0x69, 0x6c, 0x74, 0x69, 0x6e, 0x41, 0x73, 0x73, 0x65,
	0x74, 0x48, 0x00, 0x52, 0x0c, 0x62, 0x75, 0x69, 0x6c, 0x74, 0x69, 0x6e, 0x41, 0x73, 0x73, 0x65,
	0x74, 0x12, 0x23, 0x0a, 0x05, 0x65, 0x72, 0x63, 0x32, 0x30, 0x18, 0x66, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0b, 0x2e, 0x76, 0x65, 0x67, 0x61, 0x2e, 0x45, 0x52, 0x43, 0x32, 0x30, 0x48, 0x00, 0x52,
	0x05, 0x65, 0x72, 0x63, 0x32, 0x30, 0x42, 0x08, 0x0a, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x22, 0x43, 0x0a, 0x0c, 0x42, 0x75, 0x69, 0x6c, 0x74, 0x69, 0x6e, 0x41, 0x73, 0x73, 0x65, 0x74,
	0x12, 0x33, 0x0a, 0x16, 0x6d, 0x61, 0x78, 0x5f, 0x66, 0x61, 0x75, 0x63, 0x65, 0x74, 0x5f, 0x61,
	0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x6d, 0x69, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x13, 0x6d, 0x61, 0x78, 0x46, 0x61, 0x75, 0x63, 0x65, 0x74, 0x41, 0x6d, 0x6f, 0x75, 0x6e,
	0x74, 0x4d, 0x69, 0x6e, 0x74, 0x22, 0x32, 0x0a, 0x05, 0x45, 0x52, 0x43, 0x32, 0x30, 0x12, 0x29,
	0x0a, 0x10, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61,
	0x63, 0x74, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x42, 0x22, 0x5a, 0x20, 0x63, 0x6f, 0x64,
	0x65, 0x2e, 0x76, 0x65, 0x67, 0x61, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2e, 0x69,
	0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x76, 0x65, 0x67, 0x61, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_vega_assets_proto_rawDescOnce sync.Once
	file_vega_assets_proto_rawDescData = file_vega_assets_proto_rawDesc
)

func file_vega_assets_proto_rawDescGZIP() []byte {
	file_vega_assets_proto_rawDescOnce.Do(func() {
		file_vega_assets_proto_rawDescData = protoimpl.X.CompressGZIP(file_vega_assets_proto_rawDescData)
	})
	return file_vega_assets_proto_rawDescData
}

var file_vega_assets_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_vega_assets_proto_goTypes = []interface{}{
	(*Asset)(nil),        // 0: vega.Asset
	(*AssetDetails)(nil), // 1: vega.AssetDetails
	(*BuiltinAsset)(nil), // 2: vega.BuiltinAsset
	(*ERC20)(nil),        // 3: vega.ERC20
}
var file_vega_assets_proto_depIdxs = []int32{
	1, // 0: vega.Asset.details:type_name -> vega.AssetDetails
	2, // 1: vega.AssetDetails.builtin_asset:type_name -> vega.BuiltinAsset
	3, // 2: vega.AssetDetails.erc20:type_name -> vega.ERC20
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_vega_assets_proto_init() }
func file_vega_assets_proto_init() {
	if File_vega_assets_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_vega_assets_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Asset); i {
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
		file_vega_assets_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AssetDetails); i {
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
		file_vega_assets_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BuiltinAsset); i {
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
		file_vega_assets_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ERC20); i {
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
	file_vega_assets_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*AssetDetails_BuiltinAsset)(nil),
		(*AssetDetails_Erc20)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_vega_assets_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_vega_assets_proto_goTypes,
		DependencyIndexes: file_vega_assets_proto_depIdxs,
		MessageInfos:      file_vega_assets_proto_msgTypes,
	}.Build()
	File_vega_assets_proto = out.File
	file_vega_assets_proto_rawDesc = nil
	file_vega_assets_proto_goTypes = nil
	file_vega_assets_proto_depIdxs = nil
}
