# rcmWS - Artajasa

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/RCM/rcmWS
- **Diagram ID**: 150060
- **Elements**: 18
- **Connectors**: 17

```mermaid
classDiagram
    class InquiryRequest["InquiryRequest"]
    class registerResponse["registerResponse"]
    class registerRequest["registerRequest"]
    class InquiryResponse["InquiryResponse"]
    class RegisterResponseMessage["RegisterResponseMessage"]
    class RegisterRequestMessage["RegisterRequestMessage"]
    class BasicRegisterResponseHeader["BasicRegisterResponseHeader"]
    class CommonRegisterResponseMessage["CommonRegisterResponseMessage"]
    class RegisterResponseHeader["RegisterResponseHeader"]
    class Result["Result"]
    class ResultDescription["ResultDescription"]
    class FoundIn["FoundIn"]
    class CommonRegisterRequestMessage["CommonRegisterRequestMessage"]
    class RegisterRequestHeader["RegisterRequestHeader"]
    class BasicRegisterRequestHeader["BasicRegisterRequestHeader"]
    class CacheSearchType["CacheSearchType"]
    class CacheBehaviour["CacheBehaviour"]
    class rcmWS["rcmWS"]
    CommonRegisterResponseMessage ..> RegisterResponseHeader : unnamed
    RegisterRequestHeader ..> CacheBehaviour : unnamed
    BasicRegisterResponseHeader ..> ResultDescription : unnamed
    BasicRegisterResponseHeader ..> FoundIn : unnamed
    CommonRegisterRequestMessage <|-- RegisterRequestMessage : unnamed
    CommonRegisterRequestMessage ..> RegisterRequestHeader : unnamed
    BasicRegisterRequestHeader <|-- RegisterRequestHeader : unnamed
    RegisterRequestHeader ..> CacheSearchType : unnamed
    CommonRegisterResponseMessage <|-- RegisterResponseMessage : unnamed
    BasicRegisterResponseHeader ..> Result : unnamed
    rcmWS ..> registerResponse : unnamed
    rcmWS ..> registerRequest : unnamed
    RegisterResponseMessage ..> InquiryResponse : unnamed
    BasicRegisterResponseHeader <|-- RegisterResponseHeader : unnamed
    RegisterRequestMessage ..> InquiryRequest : unnamed
    RegisterRequestMessage <|-- registerRequest : unnamed
    RegisterResponseMessage <|-- registerResponse : unnamed
```
