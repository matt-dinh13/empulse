# CardOriginationWS.ReserveInstantCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v1
- **Diagram ID**: 135400
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class CardHolderName["CardHolderName"]
    class TruncatedPan["TruncatedPan"]
    class ReserveCardResultCodeDto["ReserveCardResultCodeDto"]
    class ReserveInstantCardResponse["ReserveInstantCardResponse"]
    class ReserveInstantCardRequest["ReserveInstantCardRequest"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS ..> ReserveInstantCardRequest : External Reference
    CardOriginationWS ..> ReserveInstantCardResponse : External Reference
    ReserveInstantCardRequest ..> CardHolderName : unnamed
    ReserveInstantCardResponse ..> ReserveCardResultCodeDto : unnamed
    ReserveInstantCardResponse ..> TruncatedPan : unnamed
```
