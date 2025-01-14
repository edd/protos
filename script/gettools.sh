#!/bin/bash -e

# Note: Make sure the versions match the ones in devops-infra/docker/cipipeline/Dockerfile

tools="github.com/bufbuild/buf/cmd/buf@v1.1.0
google.golang.org/protobuf/cmd/protoc-gen-go@v1.27.1
google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2.0
github.com/chrusty/protoc-gen-jsonschema/cmd/protoc-gen-jsonschema@latest
github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway@v2.7.3
github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.3
github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc@v1.5.1"

# Note: Make sure the above tools and versions match the ones in devops-infra/docker/cipipeline/Dockerfile
echo "$tools" | while read -r toolurl ; do
	go install "$toolurl"
done

echo "All ok."
