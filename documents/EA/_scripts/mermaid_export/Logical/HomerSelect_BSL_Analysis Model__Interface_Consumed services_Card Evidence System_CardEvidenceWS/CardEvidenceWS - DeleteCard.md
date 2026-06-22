# CardEvidenceWS - DeleteCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Evidence System/CardEvidenceWS
- **Diagram ID**: 136015
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ErrorCodeType["ErrorCodeType"]
    class ErrorType["ErrorType"]
    class DeleteCardResponse["DeleteCardResponse"]
    class DeleteCardRequest["DeleteCardRequest"]
    class CardEvidenceWS["CardEvidenceWS"]
    CardEvidenceWS ..> DeleteCardRequest : unnamed
    CardEvidenceWS ..> DeleteCardResponse : unnamed
    DeleteCardResponse ..> ErrorType : unnamed
    ErrorType ..> ErrorCodeType : unnamed
```
