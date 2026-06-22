# CardOriginationWS.ConfirmPersonalizedCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v3
- **Diagram ID**: 135418
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ConfirmPersonalizedCardRequest["ConfirmPersonalizedCardRequest"]
    class ConfirmPersonalizedCardResultCodeDto["ConfirmPersonalizedCardResultCodeDto"]
    class ConfirmPersonalizedCardResponse["ConfirmPersonalizedCardResponse"]
    class CardOriginationWS["CardOriginationWS"]
    CardOriginationWS ..> ConfirmPersonalizedCardResponse : unnamed
    ConfirmPersonalizedCardResponse ..> ConfirmPersonalizedCardResultCodeDto : unnamed
    CardOriginationWS ..> ConfirmPersonalizedCardRequest : unnamed
```
