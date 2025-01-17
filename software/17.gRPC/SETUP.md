# Workshop 17 - Setup

## 1 - Installation

For this workshop, you will need the following tools:

- [go](https://golang.org/) - The programming language you'll use during the workshop
- [protoc](https://developers.google.com/protocol-buffers) - The protobuf compiler

You can install both of them using the following commands respectively:

### **go**
```shell
# Will download go binaries
wget https://golang.org/dl/go1.16.6.linux-amd64.tar.gz

# Will extract and move binaries into GOPATH
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.16.6.linux-amd64.tar.gz
```

Then, open your .zshrc or .bashrc file and append the following line at the end:
```shell
export PATH=$PATH:/usr/local/go/bin
```

### **protoc**

protoc is the protocol buffer compiler, you can install it by following the instructions given [here](https://grpc.io/docs/protoc-installation/).

## 2 - Workshop

Run the following command to initialize the go project:
```shell
$ go mod init grpc-poc
```

Then run:
```shell
$ go get -u github.com/golang/protobuf/protoc-gen-go
```

Go back to the [exercise](./README.md)