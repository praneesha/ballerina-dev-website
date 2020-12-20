var docData = {"isSingleFile":false,"name":"udp","description":"\u003ch2\u003eModule Overview\u003c/h2\u003e\n\u003cp\u003eThis module provides an implementation for sending/receiving messages to/from another application process (local or remote) for connectionless protocols.\u003c/p\u003e\n\u003ch4\u003eUDP Client\u003c/h4\u003e\n\u003cp\u003eThe \u003ccode\u003eudp:Client\u003c/code\u003e is used to interact with the remote UDP host and it can be defined as follows:\u003c/p\u003e\n\u003cpre\u003e\u003ccode class\u003d\"language-ballerina\"\u003eudp:Client socketClient \u003d new;\nstring msg \u003d \u0026quot;Hello from UDP client\u0026quot;;\nbyte[] message \u003d msg.toBytes();\nint|udp:Error sendResult \u003d socketClient-\u0026gt;sendTo(message, { host: \u0026quot;localhost\u0026quot;, port: 48826 });\n\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eFor information on the operations, which you can perform with this module, see the below \u003cstrong\u003eFunctions\u003c/strong\u003e. For examples on the usage of the operations, see the following.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003ca href\u003d\"https://ballerina.io/learn/by-example/udp-socket-client.html\"\u003eBasic UDP Client Socket Example\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n","modules":[{"id":"udp","summary":"\u003cp\u003eThis module provides an implementation for sending/receiving messages to/from another application process (local or remote) for connectionless protocols.\u003c/p\u003e\n","description":"\u003ch2\u003eModule Overview\u003c/h2\u003e\n\u003cp\u003eThis module provides an implementation for sending/receiving messages to/from another application process (local or remote) for connectionless protocols.\u003c/p\u003e\n\u003ch4\u003eUDP Client\u003c/h4\u003e\n\u003cp\u003eThe \u003ccode\u003eudp:Client\u003c/code\u003e is used to interact with the remote UDP host and it can be defined as follows:\u003c/p\u003e\n\u003cpre\u003e\u003ccode class\u003d\"language-ballerina\"\u003eudp:Client socketClient \u003d new;\nstring msg \u003d \u0026quot;Hello from UDP client\u0026quot;;\nbyte[] message \u003d msg.toBytes();\nint|udp:Error sendResult \u003d socketClient-\u0026gt;sendTo(message, { host: \u0026quot;localhost\u0026quot;, port: 48826 });\n\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eFor information on the operations, which you can perform with this module, see the below \u003cstrong\u003eFunctions\u003c/strong\u003e. For examples on the usage of the operations, see the following.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003ca href\u003d\"https://ballerina.io/learn/by-example/udp-socket-client.html\"\u003eBasic UDP Client Socket Example\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n","orgName":"ballerina","version":"0.8.0","records":[{"fields":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"host","description":"\u003cp\u003eThe hostname of the Socket Address\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"port","description":"\u003cp\u003eThe port number of the Socket Address\u003c/p\u003e\n","isDeprecated":false}],"isClosed":true,"name":"Address","description":"\u003cp\u003eThis represent the IP socket address.\u003c/p\u003e\n","isDeprecated":false},{"fields":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"udp","version":"0.8.0","name":"Address","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"remoteAddress","description":"\u003cp\u003eThe remote address of the remote host\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"byte","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"data","description":"\u003cp\u003eThe content which needs to be transported to the remote host\u003c/p\u003e\n","isDeprecated":false}],"isClosed":true,"name":"Datagram","description":"\u003cp\u003eA self-contained, independent entity of data carrying sufficient information\nto be routed from the source to the destination nodes without reliance\non earlier exchanges between the nodes and the transporting network.\u003c/p\u003e\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[{"remoteMethods":[],"fields":[],"methods":[{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"()","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"localHost","description":"\u003cp\u003eLocal binding of the interface\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"30000","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"timeoutInMillis","description":"\u003cp\u003eThe socket reading timeout value to be used in milliseconds. If this is not set,\nthe default value of 300000 milliseconds (5 minutes) will be used.\u003c/p\u003e\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"udp","version":"0.8.0","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"init","description":"\u003cp\u003eInitializes the UDP connectionless client based on the provided configurations.\u003c/p\u003e\n","isDeprecated":false}],"initMethod":{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"()","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"localHost","description":"\u003cp\u003eLocal binding of the interface\u003c/p\u003e\n","isDeprecated":false},{"defaultValue":"30000","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"timeoutInMillis","description":"\u003cp\u003eThe socket reading timeout value to be used in milliseconds. If this is not set,\nthe default value of 300000 milliseconds (5 minutes) will be used.\u003c/p\u003e\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"udp","version":"0.8.0","name":"Error","category":"types","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"init","description":"\u003cp\u003eInitializes the UDP connectionless client based on the provided configurations.\u003c/p\u003e\n","isDeprecated":false},"otherMethods":[],"name":"Client","description":"\u003cp\u003eInitializes the UDP connectionless client based on the provided configurations.\u003c/p\u003e\n","isDeprecated":false}],"listeners":[],"functions":[],"constants":[],"annotations":[],"errors":[{"name":"ReadTimedOutError","description":"\u003cp\u003eThis will returns once the given read timed out time exceed for socket reads.\u003c/p\u003e\n","isDeprecated":false},{"name":"GenericError","description":"\u003cp\u003eRepresents generic socket error, which contains the information related to the error.\u003c/p\u003e\n","isDeprecated":false}],"types":[{"name":"Error","description":"\u003cp\u003eRepresents udp module related errors.\u003c/p\u003e\n","isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"orgName":"ballerina","moduleName":"udp","version":"0.8.0","name":"GenericError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"udp","version":"0.8.0","name":"ReadTimedOutError","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isRestParam":false,"isLambda":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}]}]};