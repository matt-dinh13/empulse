# CardOriginationWS.ActivateCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2
- **Diagram ID**: 135408
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class HardCheckResultDto["HardCheckResultDto"]
    class HardCheckTypeDto["HardCheckTypeDto"]
    class HardCheckDto["HardCheckDto"]
    class ActivateCardResultCodeDto["ActivateCardResultCodeDto"]
    class ActivateCardResponse["ActivateCardResponse"]
    class ActivateCardRequest["ActivateCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS ..> ActivateCardRequest : unnamed
    CardOriginationWS ..> ActivateCardResponse : unnamed
    ActivateCardResponse ..> ActivateCardResultCodeDto : unnamed
    ActivateCardResponse ..> HardCheckDto : unnamed
    HardCheckDto --> HardCheckTypeDto : unnamed
    HardCheckDto --> HardCheckResultDto : unnamed
```
