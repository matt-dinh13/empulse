# CardBlockWS.UnblockCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS
- **Diagram ID**: 100768
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class UnblockCardResultCodeDto["UnblockCardResultCodeDto"]
    class CardBlockWS["CardBlockWS"]
    class UnblockCardResponse["UnblockCardResponse"]
    class UnblockCardRequest["UnblockCardRequest"]
    CardBlockWS ..> UnblockCardRequest : unnamed
    CardBlockWS ..> UnblockCardResponse : unnamed
    UnblockCardResponse ..> UnblockCardResultCodeDto : unnamed
```
