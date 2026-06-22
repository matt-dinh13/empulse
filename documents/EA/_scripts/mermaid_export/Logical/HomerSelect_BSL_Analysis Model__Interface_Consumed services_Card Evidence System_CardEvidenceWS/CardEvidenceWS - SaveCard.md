# CardEvidenceWS - SaveCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Evidence System/CardEvidenceWS
- **Diagram ID**: 136014
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class CardDataType["CardDataType"]
    class ErrorCodeType["ErrorCodeType"]
    class ErrorType["ErrorType"]
    class SaveCardResponse["SaveCardResponse"]
    class SaveCardRequest["SaveCardRequest"]
    class CardEvidenceWS["CardEvidenceWS"]
    CardEvidenceWS ..> SaveCardRequest : unnamed
    CardEvidenceWS ..> SaveCardResponse : unnamed
    SaveCardResponse ..> ErrorType : unnamed
    ErrorType ..> ErrorCodeType : unnamed
    SaveCardResponse ..> CardDataType : unnamed
```
