# CardModificationWS.UpdateCardDeliveryType

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2
- **Diagram ID**: 135391
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class CardDeliveryType["CardDeliveryType"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class UpdateCardDeliveryTypeResultCodeDto["UpdateCardDeliveryTypeResultCodeDto"]
    class UpdateCardDeliveryTypeResponse["UpdateCardDeliveryTypeResponse"]
    class UpdateCardDeliveryTypeRequest["UpdateCardDeliveryTypeRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> UpdateCardDeliveryTypeRequest : unnamed
    CardModificationWS ..> UpdateCardDeliveryTypeResponse : unnamed
    UpdateCardDeliveryTypeResponse ..> UpdateCardDeliveryTypeResultCodeDto : unnamed
    UpdateCardDeliveryTypeRequest ..> PosDeliveryAddressDto : unnamed
    UpdateCardDeliveryTypeRequest ..> CardDeliveryType : unnamed
```
