// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.18.1
// source: vega/api/v1/corestate.proto

package v1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CoreStateServiceClient is the client API for CoreStateService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CoreStateServiceClient interface {
	ListAccounts(ctx context.Context, in *ListAccountsRequest, opts ...grpc.CallOption) (*ListAccountsResponse, error)
	ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsResponse, error)
	ListNetworkParameters(ctx context.Context, in *ListNetworkParametersRequest, opts ...grpc.CallOption) (*ListNetworkParametersResponse, error)
	ListNetworkLimits(ctx context.Context, in *ListNetworkLimitsRequest, opts ...grpc.CallOption) (*ListNetworkLimitsResponse, error)
	ListParties(ctx context.Context, in *ListPartiesRequest, opts ...grpc.CallOption) (*ListPartiesResponse, error)
	ListValidators(ctx context.Context, in *ListValidatorsRequest, opts ...grpc.CallOption) (*ListValidatorsResponse, error)
	ListMarkets(ctx context.Context, in *ListMarketsRequest, opts ...grpc.CallOption) (*ListMarketsResponse, error)
	ListProposals(ctx context.Context, in *ListProposalsRequest, opts ...grpc.CallOption) (*ListProposalsResponse, error)
	ListMarketsData(ctx context.Context, in *ListMarketsDataRequest, opts ...grpc.CallOption) (*ListMarketsDataResponse, error)
	ListVotes(ctx context.Context, in *ListVotesRequest, opts ...grpc.CallOption) (*ListVotesResponse, error)
	ListPartiesStake(ctx context.Context, in *ListPartiesStakeRequest, opts ...grpc.CallOption) (*ListPartiesStakeResponse, error)
	ListDelegations(ctx context.Context, in *ListDelegationsRequest, opts ...grpc.CallOption) (*ListDelegationsResponse, error)
}

type coreStateServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCoreStateServiceClient(cc grpc.ClientConnInterface) CoreStateServiceClient {
	return &coreStateServiceClient{cc}
}

func (c *coreStateServiceClient) ListAccounts(ctx context.Context, in *ListAccountsRequest, opts ...grpc.CallOption) (*ListAccountsResponse, error) {
	out := new(ListAccountsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListAccounts", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListAssets(ctx context.Context, in *ListAssetsRequest, opts ...grpc.CallOption) (*ListAssetsResponse, error) {
	out := new(ListAssetsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListAssets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListNetworkParameters(ctx context.Context, in *ListNetworkParametersRequest, opts ...grpc.CallOption) (*ListNetworkParametersResponse, error) {
	out := new(ListNetworkParametersResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListNetworkParameters", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListNetworkLimits(ctx context.Context, in *ListNetworkLimitsRequest, opts ...grpc.CallOption) (*ListNetworkLimitsResponse, error) {
	out := new(ListNetworkLimitsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListNetworkLimits", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListParties(ctx context.Context, in *ListPartiesRequest, opts ...grpc.CallOption) (*ListPartiesResponse, error) {
	out := new(ListPartiesResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListParties", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListValidators(ctx context.Context, in *ListValidatorsRequest, opts ...grpc.CallOption) (*ListValidatorsResponse, error) {
	out := new(ListValidatorsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListValidators", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListMarkets(ctx context.Context, in *ListMarketsRequest, opts ...grpc.CallOption) (*ListMarketsResponse, error) {
	out := new(ListMarketsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListMarkets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListProposals(ctx context.Context, in *ListProposalsRequest, opts ...grpc.CallOption) (*ListProposalsResponse, error) {
	out := new(ListProposalsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListProposals", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListMarketsData(ctx context.Context, in *ListMarketsDataRequest, opts ...grpc.CallOption) (*ListMarketsDataResponse, error) {
	out := new(ListMarketsDataResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListMarketsData", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListVotes(ctx context.Context, in *ListVotesRequest, opts ...grpc.CallOption) (*ListVotesResponse, error) {
	out := new(ListVotesResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListVotes", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListPartiesStake(ctx context.Context, in *ListPartiesStakeRequest, opts ...grpc.CallOption) (*ListPartiesStakeResponse, error) {
	out := new(ListPartiesStakeResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListPartiesStake", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *coreStateServiceClient) ListDelegations(ctx context.Context, in *ListDelegationsRequest, opts ...grpc.CallOption) (*ListDelegationsResponse, error) {
	out := new(ListDelegationsResponse)
	err := c.cc.Invoke(ctx, "/vega.api.v1.CoreStateService/ListDelegations", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CoreStateServiceServer is the server API for CoreStateService service.
// All implementations must embed UnimplementedCoreStateServiceServer
// for forward compatibility
type CoreStateServiceServer interface {
	ListAccounts(context.Context, *ListAccountsRequest) (*ListAccountsResponse, error)
	ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsResponse, error)
	ListNetworkParameters(context.Context, *ListNetworkParametersRequest) (*ListNetworkParametersResponse, error)
	ListNetworkLimits(context.Context, *ListNetworkLimitsRequest) (*ListNetworkLimitsResponse, error)
	ListParties(context.Context, *ListPartiesRequest) (*ListPartiesResponse, error)
	ListValidators(context.Context, *ListValidatorsRequest) (*ListValidatorsResponse, error)
	ListMarkets(context.Context, *ListMarketsRequest) (*ListMarketsResponse, error)
	ListProposals(context.Context, *ListProposalsRequest) (*ListProposalsResponse, error)
	ListMarketsData(context.Context, *ListMarketsDataRequest) (*ListMarketsDataResponse, error)
	ListVotes(context.Context, *ListVotesRequest) (*ListVotesResponse, error)
	ListPartiesStake(context.Context, *ListPartiesStakeRequest) (*ListPartiesStakeResponse, error)
	ListDelegations(context.Context, *ListDelegationsRequest) (*ListDelegationsResponse, error)
	mustEmbedUnimplementedCoreStateServiceServer()
}

// UnimplementedCoreStateServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCoreStateServiceServer struct {
}

func (UnimplementedCoreStateServiceServer) ListAccounts(context.Context, *ListAccountsRequest) (*ListAccountsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAccounts not implemented")
}
func (UnimplementedCoreStateServiceServer) ListAssets(context.Context, *ListAssetsRequest) (*ListAssetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAssets not implemented")
}
func (UnimplementedCoreStateServiceServer) ListNetworkParameters(context.Context, *ListNetworkParametersRequest) (*ListNetworkParametersResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListNetworkParameters not implemented")
}
func (UnimplementedCoreStateServiceServer) ListNetworkLimits(context.Context, *ListNetworkLimitsRequest) (*ListNetworkLimitsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListNetworkLimits not implemented")
}
func (UnimplementedCoreStateServiceServer) ListParties(context.Context, *ListPartiesRequest) (*ListPartiesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListParties not implemented")
}
func (UnimplementedCoreStateServiceServer) ListValidators(context.Context, *ListValidatorsRequest) (*ListValidatorsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListValidators not implemented")
}
func (UnimplementedCoreStateServiceServer) ListMarkets(context.Context, *ListMarketsRequest) (*ListMarketsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListMarkets not implemented")
}
func (UnimplementedCoreStateServiceServer) ListProposals(context.Context, *ListProposalsRequest) (*ListProposalsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListProposals not implemented")
}
func (UnimplementedCoreStateServiceServer) ListMarketsData(context.Context, *ListMarketsDataRequest) (*ListMarketsDataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListMarketsData not implemented")
}
func (UnimplementedCoreStateServiceServer) ListVotes(context.Context, *ListVotesRequest) (*ListVotesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListVotes not implemented")
}
func (UnimplementedCoreStateServiceServer) ListPartiesStake(context.Context, *ListPartiesStakeRequest) (*ListPartiesStakeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListPartiesStake not implemented")
}
func (UnimplementedCoreStateServiceServer) ListDelegations(context.Context, *ListDelegationsRequest) (*ListDelegationsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListDelegations not implemented")
}
func (UnimplementedCoreStateServiceServer) mustEmbedUnimplementedCoreStateServiceServer() {}

// UnsafeCoreStateServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CoreStateServiceServer will
// result in compilation errors.
type UnsafeCoreStateServiceServer interface {
	mustEmbedUnimplementedCoreStateServiceServer()
}

func RegisterCoreStateServiceServer(s grpc.ServiceRegistrar, srv CoreStateServiceServer) {
	s.RegisterService(&CoreStateService_ServiceDesc, srv)
}

func _CoreStateService_ListAccounts_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAccountsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListAccounts(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListAccounts",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListAccounts(ctx, req.(*ListAccountsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListAssets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAssetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListAssets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListAssets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListAssets(ctx, req.(*ListAssetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListNetworkParameters_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListNetworkParametersRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListNetworkParameters(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListNetworkParameters",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListNetworkParameters(ctx, req.(*ListNetworkParametersRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListNetworkLimits_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListNetworkLimitsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListNetworkLimits(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListNetworkLimits",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListNetworkLimits(ctx, req.(*ListNetworkLimitsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListParties_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPartiesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListParties(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListParties",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListParties(ctx, req.(*ListPartiesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListValidators_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListValidatorsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListValidators(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListValidators",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListValidators(ctx, req.(*ListValidatorsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListMarkets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListMarketsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListMarkets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListMarkets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListMarkets(ctx, req.(*ListMarketsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListProposals_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListProposalsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListProposals(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListProposals",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListProposals(ctx, req.(*ListProposalsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListMarketsData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListMarketsDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListMarketsData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListMarketsData",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListMarketsData(ctx, req.(*ListMarketsDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListVotes_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListVotesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListVotes(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListVotes",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListVotes(ctx, req.(*ListVotesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListPartiesStake_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListPartiesStakeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListPartiesStake(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListPartiesStake",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListPartiesStake(ctx, req.(*ListPartiesStakeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CoreStateService_ListDelegations_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListDelegationsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CoreStateServiceServer).ListDelegations(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/vega.api.v1.CoreStateService/ListDelegations",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CoreStateServiceServer).ListDelegations(ctx, req.(*ListDelegationsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// CoreStateService_ServiceDesc is the grpc.ServiceDesc for CoreStateService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CoreStateService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "vega.api.v1.CoreStateService",
	HandlerType: (*CoreStateServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListAccounts",
			Handler:    _CoreStateService_ListAccounts_Handler,
		},
		{
			MethodName: "ListAssets",
			Handler:    _CoreStateService_ListAssets_Handler,
		},
		{
			MethodName: "ListNetworkParameters",
			Handler:    _CoreStateService_ListNetworkParameters_Handler,
		},
		{
			MethodName: "ListNetworkLimits",
			Handler:    _CoreStateService_ListNetworkLimits_Handler,
		},
		{
			MethodName: "ListParties",
			Handler:    _CoreStateService_ListParties_Handler,
		},
		{
			MethodName: "ListValidators",
			Handler:    _CoreStateService_ListValidators_Handler,
		},
		{
			MethodName: "ListMarkets",
			Handler:    _CoreStateService_ListMarkets_Handler,
		},
		{
			MethodName: "ListProposals",
			Handler:    _CoreStateService_ListProposals_Handler,
		},
		{
			MethodName: "ListMarketsData",
			Handler:    _CoreStateService_ListMarketsData_Handler,
		},
		{
			MethodName: "ListVotes",
			Handler:    _CoreStateService_ListVotes_Handler,
		},
		{
			MethodName: "ListPartiesStake",
			Handler:    _CoreStateService_ListPartiesStake_Handler,
		},
		{
			MethodName: "ListDelegations",
			Handler:    _CoreStateService_ListDelegations_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "vega/api/v1/corestate.proto",
}
