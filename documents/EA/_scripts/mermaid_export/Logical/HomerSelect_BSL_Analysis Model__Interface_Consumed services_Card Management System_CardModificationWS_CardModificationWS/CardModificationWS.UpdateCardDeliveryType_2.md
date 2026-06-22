# CardModificationWS.UpdateCardDeliveryType

```mermaid
classDiagram
    class CardDeliveryType["CardDeliveryType"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class UpdateCardDeliveryTypeResultCodeDto["UpdateCardDeliveryTypeResultCodeDto"]
    class UpdateCardDeliveryTypeResponse["UpdateCardDeliveryTypeResponse"]
    class UpdateCardDeliveryTypeRequest["UpdateCardDeliveryTypeRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS --> UpdateCardDeliveryTypeRequest : unnamed
    CardModificationWS --> UpdateCardDeliveryTypeResponse : unnamed
    UpdateCardDeliveryTypeResponse --> UpdateCardDeliveryTypeResultCodeDto : unnamed
    UpdateCardDeliveryTypeRequest --> PosDeliveryAddressDto : unnamed
    UpdateCardDeliveryTypeRequest --> CardDeliveryType : unnamed
```
