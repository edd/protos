// Code generated by protoc-gen-go. DO NOT EDIT.
// source: vega/coreapi/v1/coreapi.proto

package v1

import (
	vega "code.vegaprotocol.io/protos/vega"
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
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

type Account struct {
	Party                string   `protobuf:"bytes,1,opt,name=party,proto3" json:"party,omitempty"`
	Market               string   `protobuf:"bytes,2,opt,name=market,proto3" json:"market,omitempty"`
	Balance              string   `protobuf:"bytes,3,opt,name=balance,proto3" json:"balance,omitempty"`
	Asset                string   `protobuf:"bytes,5,opt,name=asset,proto3" json:"asset,omitempty"`
	Type                 string   `protobuf:"bytes,6,opt,name=type,proto3" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Account) Reset()         { *m = Account{} }
func (m *Account) String() string { return proto.CompactTextString(m) }
func (*Account) ProtoMessage()    {}
func (*Account) Descriptor() ([]byte, []int) {
	return fileDescriptor_ae3976584b7b2d93, []int{0}
}

func (m *Account) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Account.Unmarshal(m, b)
}
func (m *Account) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Account.Marshal(b, m, deterministic)
}
func (m *Account) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Account.Merge(m, src)
}
func (m *Account) XXX_Size() int {
	return xxx_messageInfo_Account.Size(m)
}
func (m *Account) XXX_DiscardUnknown() {
	xxx_messageInfo_Account.DiscardUnknown(m)
}

var xxx_messageInfo_Account proto.InternalMessageInfo

func (m *Account) GetParty() string {
	if m != nil {
		return m.Party
	}
	return ""
}

func (m *Account) GetMarket() string {
	if m != nil {
		return m.Market
	}
	return ""
}

func (m *Account) GetBalance() string {
	if m != nil {
		return m.Balance
	}
	return ""
}

func (m *Account) GetAsset() string {
	if m != nil {
		return m.Asset
	}
	return ""
}

func (m *Account) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

type ListAccountsRequest struct {
	Party                string   `protobuf:"bytes,1,opt,name=party,proto3" json:"party,omitempty"`
	Market               string   `protobuf:"bytes,2,opt,name=market,proto3" json:"market,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListAccountsRequest) Reset()         { *m = ListAccountsRequest{} }
func (m *ListAccountsRequest) String() string { return proto.CompactTextString(m) }
func (*ListAccountsRequest) ProtoMessage()    {}
func (*ListAccountsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ae3976584b7b2d93, []int{1}
}

func (m *ListAccountsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListAccountsRequest.Unmarshal(m, b)
}
func (m *ListAccountsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListAccountsRequest.Marshal(b, m, deterministic)
}
func (m *ListAccountsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListAccountsRequest.Merge(m, src)
}
func (m *ListAccountsRequest) XXX_Size() int {
	return xxx_messageInfo_ListAccountsRequest.Size(m)
}
func (m *ListAccountsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListAccountsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListAccountsRequest proto.InternalMessageInfo

func (m *ListAccountsRequest) GetParty() string {
	if m != nil {
		return m.Party
	}
	return ""
}

func (m *ListAccountsRequest) GetMarket() string {
	if m != nil {
		return m.Market
	}
	return ""
}

type ListAccountsResponse struct {
	Accounts             []*Account `protobuf:"bytes,1,rep,name=accounts,proto3" json:"accounts,omitempty"`
	XXX_NoUnkeyedLiteral struct{}   `json:"-"`
	XXX_unrecognized     []byte     `json:"-"`
	XXX_sizecache        int32      `json:"-"`
}

func (m *ListAccountsResponse) Reset()         { *m = ListAccountsResponse{} }
func (m *ListAccountsResponse) String() string { return proto.CompactTextString(m) }
func (*ListAccountsResponse) ProtoMessage()    {}
func (*ListAccountsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ae3976584b7b2d93, []int{2}
}

func (m *ListAccountsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListAccountsResponse.Unmarshal(m, b)
}
func (m *ListAccountsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListAccountsResponse.Marshal(b, m, deterministic)
}
func (m *ListAccountsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListAccountsResponse.Merge(m, src)
}
func (m *ListAccountsResponse) XXX_Size() int {
	return xxx_messageInfo_ListAccountsResponse.Size(m)
}
func (m *ListAccountsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListAccountsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListAccountsResponse proto.InternalMessageInfo

func (m *ListAccountsResponse) GetAccounts() []*Account {
	if m != nil {
		return m.Accounts
	}
	return nil
}

type ListAssetsRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListAssetsRequest) Reset()         { *m = ListAssetsRequest{} }
func (m *ListAssetsRequest) String() string { return proto.CompactTextString(m) }
func (*ListAssetsRequest) ProtoMessage()    {}
func (*ListAssetsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_ae3976584b7b2d93, []int{3}
}

func (m *ListAssetsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListAssetsRequest.Unmarshal(m, b)
}
func (m *ListAssetsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListAssetsRequest.Marshal(b, m, deterministic)
}
func (m *ListAssetsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListAssetsRequest.Merge(m, src)
}
func (m *ListAssetsRequest) XXX_Size() int {
	return xxx_messageInfo_ListAssetsRequest.Size(m)
}
func (m *ListAssetsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListAssetsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListAssetsRequest proto.InternalMessageInfo

type ListAssetsResponse struct {
	Assets               []*vega.Asset `protobuf:"bytes,1,rep,name=assets,proto3" json:"assets,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *ListAssetsResponse) Reset()         { *m = ListAssetsResponse{} }
func (m *ListAssetsResponse) String() string { return proto.CompactTextString(m) }
func (*ListAssetsResponse) ProtoMessage()    {}
func (*ListAssetsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_ae3976584b7b2d93, []int{4}
}

func (m *ListAssetsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListAssetsResponse.Unmarshal(m, b)
}
func (m *ListAssetsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListAssetsResponse.Marshal(b, m, deterministic)
}
func (m *ListAssetsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListAssetsResponse.Merge(m, src)
}
func (m *ListAssetsResponse) XXX_Size() int {
	return xxx_messageInfo_ListAssetsResponse.Size(m)
}
func (m *ListAssetsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListAssetsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListAssetsResponse proto.InternalMessageInfo

func (m *ListAssetsResponse) GetAssets() []*vega.Asset {
	if m != nil {
		return m.Assets
	}
	return nil
}

func init() {
	proto.RegisterType((*Account)(nil), "vega.coreapi.v1.Account")
	proto.RegisterType((*ListAccountsRequest)(nil), "vega.coreapi.v1.ListAccountsRequest")
	proto.RegisterType((*ListAccountsResponse)(nil), "vega.coreapi.v1.ListAccountsResponse")
	proto.RegisterType((*ListAssetsRequest)(nil), "vega.coreapi.v1.ListAssetsRequest")
	proto.RegisterType((*ListAssetsResponse)(nil), "vega.coreapi.v1.ListAssetsResponse")
}

func init() { proto.RegisterFile("vega/coreapi/v1/coreapi.proto", fileDescriptor_ae3976584b7b2d93) }

var fileDescriptor_ae3976584b7b2d93 = []byte{
	// 319 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x52, 0x41, 0x4b, 0x33, 0x31,
	0x14, 0x64, 0xbf, 0x7e, 0xdd, 0xea, 0xab, 0x28, 0x4d, 0x8b, 0x84, 0x82, 0x50, 0xb6, 0x0a, 0x45,
	0x64, 0x4b, 0xab, 0x17, 0x8f, 0xb5, 0xd7, 0x9e, 0x56, 0xbc, 0xe8, 0x29, 0x8d, 0x0f, 0x59, 0xac,
	0x4d, 0x4c, 0xd2, 0x85, 0xe2, 0xdf, 0xf3, 0x87, 0x49, 0x5f, 0xb2, 0xba, 0x6a, 0x51, 0xbc, 0x65,
	0xe6, 0x4d, 0x26, 0x93, 0xe1, 0xc1, 0x51, 0x81, 0x0f, 0x62, 0x28, 0x95, 0x41, 0xa1, 0xf3, 0x61,
	0x31, 0x2a, 0x8f, 0xa9, 0x36, 0xca, 0x29, 0x76, 0xb0, 0x19, 0xa7, 0x25, 0x57, 0x8c, 0xba, 0x2d,
	0xd2, 0x0b, 0x6b, 0xd1, 0x59, 0xaf, 0x49, 0x5e, 0xa0, 0x31, 0x91, 0x52, 0xad, 0x96, 0x8e, 0x75,
	0xa0, 0xae, 0x85, 0x71, 0x6b, 0x1e, 0xf5, 0xa2, 0xc1, 0x6e, 0xe6, 0x01, 0x3b, 0x84, 0xf8, 0x49,
	0x98, 0x47, 0x74, 0xfc, 0x1f, 0xd1, 0x01, 0x31, 0x0e, 0x8d, 0xb9, 0x58, 0x88, 0xa5, 0x44, 0x5e,
	0xa3, 0x41, 0x09, 0x37, 0x3e, 0xf4, 0x04, 0xaf, 0x7b, 0x1f, 0x02, 0x8c, 0xc1, 0x7f, 0xb7, 0xd6,
	0xc8, 0x63, 0x22, 0xe9, 0x9c, 0x4c, 0xa1, 0x3d, 0xcb, 0xad, 0x0b, 0x01, 0x6c, 0x86, 0xcf, 0x2b,
	0xb4, 0x7f, 0x0c, 0x92, 0xcc, 0xa0, 0xf3, 0xd9, 0xc4, 0x6a, 0xb5, 0xb4, 0xc8, 0x2e, 0x60, 0x47,
	0x04, 0x8e, 0x47, 0xbd, 0xda, 0xa0, 0x39, 0xe6, 0xe9, 0x97, 0x42, 0xd2, 0x70, 0x29, 0x7b, 0x57,
	0x26, 0x6d, 0x68, 0x91, 0x1b, 0x75, 0x14, 0x02, 0x25, 0x97, 0xc0, 0xaa, 0x64, 0x78, 0xa0, 0x0f,
	0xb1, 0xaf, 0x32, 0xd8, 0x37, 0xbd, 0x3d, 0xa9, 0xb2, 0x30, 0x1a, 0xbf, 0x46, 0xb0, 0x3f, 0x55,
	0x06, 0x27, 0x3a, 0xbf, 0x46, 0x53, 0xe4, 0x12, 0xd9, 0x1d, 0xec, 0x55, 0x03, 0xb3, 0xe3, 0x6f,
	0xb1, 0xb6, 0x94, 0xd2, 0x3d, 0xf9, 0x45, 0x15, 0x42, 0xdd, 0x00, 0x7c, 0x44, 0x65, 0xc9, 0xf6,
	0x4b, 0xd5, 0xcf, 0x75, 0xfb, 0x3f, 0x6a, 0xbc, 0xed, 0xd5, 0xd9, 0xed, 0xa9, 0x54, 0xf7, 0x48,
	0x52, 0x5a, 0x1c, 0xa9, 0x16, 0x69, 0xae, 0x86, 0xb4, 0x50, 0x44, 0x54, 0xd6, 0x70, 0x1e, 0x13,
	0x73, 0xfe, 0x16, 0x00, 0x00, 0xff, 0xff, 0x53, 0x29, 0xa7, 0x3e, 0xa0, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// CoreApiServiceClient is the client API for CoreApiService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type CoreApiServiceClient interface {
	ListAccounts(ctx context.Context, in *ListAccountsRequest, opts ...grpc.CallOption) (*ListAccountsResponse, error)
	ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsResponse, error)
}

type coreApiServiceClient struct {
	cc *grpc.ClientConn
}

func NewCoreApiServiceClient(cc *grpc.ClientConn) CoreApiServiceClient {
	return &coreApiServiceClient{cc}
}

func (c *coreApiServiceClient) ListAccounts(ctx context.Context, in *ListAccountsRequest, opts ...grpc.CallOption) (*ListAccountsResponse, error) {
	out := new(ListAccountsResponse)
	err := c.cc.Invoke(ctx, "/vega.coreapi.v1.CoreApiService/ListAccounts", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreApiServiceClient) ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsResponse, error) {
	out := new(ListAssetsResponse)
	err := c.cc.Invoke(ctx, "/vega.coreapi.v1.CoreApiService/ListAssets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CoreApiServiceServer is the server API for CoreApiService service.
type CoreApiServiceServer interface {
	ListAccounts(context.Context, *ListAccountsRequest) (*ListAccountsResponse, error)
	ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsResponse, error)
}

func RegisterCoreApiServiceServer(s *grpc.Server, srv CoreApiServiceServer) {
	s.RegisterService(&_CoreApiService_serviceDesc, srv)
}

func _CoreApiService_ListAccounts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAccountsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreApiServiceServer).ListAccounts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.coreapi.v1.CoreApiService/ListAccounts",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreApiServiceServer).ListAccounts(ctx, req.(*ListAccountsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreApiService_ListAssets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAssetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreApiServiceServer).ListAssets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.coreapi.v1.CoreApiService/ListAssets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreApiServiceServer).ListAssets(ctx, req.(*ListAssetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _CoreApiService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "vega.coreapi.v1.CoreApiService",
	HandlerType: (*CoreApiServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListAccounts",
			Handler:    _CoreApiService_ListAccounts_Handler,
		},
		{
			MethodName: "ListAssets",
			Handler:    _CoreApiService_ListAssets_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "vega/coreapi/v1/coreapi.proto",
}
