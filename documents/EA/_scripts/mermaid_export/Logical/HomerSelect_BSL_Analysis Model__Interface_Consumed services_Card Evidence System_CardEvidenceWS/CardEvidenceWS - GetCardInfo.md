# CardEvidenceWS - GetCardInfo

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Evidence System/CardEvidenceWS
- **Diagram ID**: 136012
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class ErrorType["ErrorType"]
    class CardDataType["CardDataType"]
    class ErrorCodeType["ErrorCodeType"]
    class GetCardInfoResponse["GetCardInfoResponse"]
    class GetCardInfoRequest["GetCardInfoRequest"]
    class CardEvidenceWS["CardEvidenceWS"]
    CardEvidenceWS ..> GetCardInfoRequest : unnamed
    CardEvidenceWS ..> GetCardInfoResponse : unnamed
    ErrorType ..> ErrorCodeType : unnamed
    GetCardInfoResponse ..> CardDataType : unnamed
    GetCardInfoResponse ..> ErrorType : unnamed
```
