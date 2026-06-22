# CardOriginationWS.ReserveInstantCard

```mermaid
classDiagram
    class CardHolderName["CardHolderName"]
    class TruncatedPan["TruncatedPan"]
    class ReserveCardResultCodeDto["ReserveCardResultCodeDto"]
    class ReserveInstantCardResponse["ReserveInstantCardResponse"]
    class ReserveInstantCardRequest["ReserveInstantCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS --> ReserveInstantCardRequest : unnamed
    CardOriginationWS --> ReserveInstantCardResponse : unnamed
    ReserveInstantCardResponse --> ReserveCardResultCodeDto : unnamed
    ReserveInstantCardResponse --> TruncatedPan : unnamed
    ReserveInstantCardRequest --> CardHolderName : unnamed
```
