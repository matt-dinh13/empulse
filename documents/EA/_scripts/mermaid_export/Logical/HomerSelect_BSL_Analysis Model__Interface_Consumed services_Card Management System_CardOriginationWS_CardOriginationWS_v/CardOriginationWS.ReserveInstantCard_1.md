# CardOriginationWS.ReserveInstantCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2
- **Diagram ID**: 135407
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class CardHolderName["CardHolderName"]
    class TruncatedPan["TruncatedPan"]
    class ReserveCardResultCodeDto["ReserveCardResultCodeDto"]
    class ReserveInstantCardResponse["ReserveInstantCardResponse"]
    class MOD_ReserveInstantCardRequest["{MOD}ReserveInstantCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS ..> MOD_ReserveInstantCardRequest : unnamed
    CardOriginationWS ..> ReserveInstantCardResponse : unnamed
    ReserveInstantCardResponse ..> ReserveCardResultCodeDto : unnamed
    ReserveInstantCardResponse ..> TruncatedPan : unnamed
    MOD_ReserveInstantCardRequest ..> CardHolderName : unnamed
```
