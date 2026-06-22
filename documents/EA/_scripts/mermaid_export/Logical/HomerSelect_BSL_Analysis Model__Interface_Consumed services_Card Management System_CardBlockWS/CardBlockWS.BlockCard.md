# CardBlockWS.BlockCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardBlockWS
- **Diagram ID**: 100767
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class CardBlockDto["CardBlockDto"]
    class BlockCardResponse["BlockCardResponse"]
    class BlockCardRequest["BlockCardRequest"]
    class CardBlockWS["CardBlockWS"]
    CardBlockWS ..> BlockCardRequest : unnamed
    CardBlockWS ..> BlockCardResponse : unnamed
    BlockCardRequest ..> CardBlockDto : unnamed
```
