# CardOriginationWS.ReplaceCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2
- **Diagram ID**: 135409
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class CardOriginationWS["CardOriginationWS"]
    class TruncatedPan["TruncatedPan"]
    class HardCheckResultDto["HardCheckResultDto"]
    class HardCheckTypeDto["HardCheckTypeDto"]
    class HardCheckDto["HardCheckDto"]
    class ReplaceCardResponse["ReplaceCardResponse"]
    class ReplaceCardRequest["ReplaceCardRequest"]
    CardOriginationWS ..> ReplaceCardRequest : unnamed
    CardOriginationWS ..> ReplaceCardResponse : unnamed
    ReplaceCardResponse ..> unnamed : unnamed
    ReplaceCardResponse ..> HardCheckDto : unnamed
    HardCheckDto --> HardCheckTypeDto : unnamed
    HardCheckDto --> HardCheckResultDto : unnamed
    ReplaceCardResponse ..> TruncatedPan : unnamed
```
