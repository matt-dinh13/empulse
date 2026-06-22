# CardOriginationWS  - messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardOriginationWS/CardOriginationWS_v2/Messages
- **Diagram ID**: 135410
- **Elements**: 14
- **Connectors**: 6

```mermaid
classDiagram
    class ReserveCardResultCodeDto["ReserveCardResultCodeDto"]
    class ReserveInstantCardResponse["ReserveInstantCardResponse"]
    class MOD_ReserveInstantCardRequest["{MOD}ReserveInstantCardRequest"]
    class ConfirmInstantCardResultCodeDto["ConfirmInstantCardResultCodeDto"]
    class CreateInstantCardRequest["CreateInstantCardRequest"]
    class CreatePersonalizedCardResultCodeDto["CreatePersonalizedCardResultCodeDto"]
    class CreatePersonalizedCardResponse["CreatePersonalizedCardResponse"]
    class CardDeliveryType["CardDeliveryType"]
    class CreatePersonalizedCardRequest["CreatePersonalizedCardRequest"]
    class ConfirmPersonalizedCardResultCodeDto["ConfirmPersonalizedCardResultCodeDto"]
    class ConfirmPersonalizedCardResponse["ConfirmPersonalizedCardResponse"]
    class ConfirmPersonalizedCardRequest["ConfirmPersonalizedCardRequest"]
    class ConfirmInstantCardResponse["ConfirmInstantCardResponse"]
    class ConfirmInstantCardRequest["ConfirmInstantCardRequest"]
    ConfirmPersonalizedCardResponse ..> ConfirmPersonalizedCardResultCodeDto : unnamed
    CreatePersonalizedCardRequest ..> CardDeliveryType : unnamed
    ConfirmInstantCardRequest ..> CardDeliveryType : unnamed
    CreatePersonalizedCardResponse ..> CreatePersonalizedCardResultCodeDto : unnamed
    ConfirmInstantCardResponse ..> ConfirmInstantCardResultCodeDto : unnamed
    ReserveInstantCardResponse ..> ReserveCardResultCodeDto : unnamed
```
