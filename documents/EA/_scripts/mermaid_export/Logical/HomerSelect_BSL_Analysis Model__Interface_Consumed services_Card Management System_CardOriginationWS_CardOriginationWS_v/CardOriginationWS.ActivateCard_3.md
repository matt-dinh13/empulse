# CardOriginationWS.ActivateCard

```mermaid
classDiagram
    class HardCheckResultDto["HardCheckResultDto"]
    class HardCheckTypeDto["HardCheckTypeDto"]
    class HardCheckDto["HardCheckDto"]
    class ActivateCardResultCodeDto["ActivateCardResultCodeDto"]
    class ActivateCardResponse["ActivateCardResponse"]
    class ActivateCardRequest["ActivateCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS --> ActivateCardRequest : unnamed
    CardOriginationWS --> ActivateCardResponse : unnamed
    ActivateCardResponse --> ActivateCardResultCodeDto : unnamed
    ActivateCardResponse --> HardCheckDto : unnamed
    HardCheckDto --> HardCheckTypeDto : unnamed
    HardCheckDto --> HardCheckResultDto : unnamed
```
