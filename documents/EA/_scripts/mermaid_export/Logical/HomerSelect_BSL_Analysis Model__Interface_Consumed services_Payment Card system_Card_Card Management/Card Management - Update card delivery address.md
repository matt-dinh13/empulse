# Card Management - Update card delivery address

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management
- **Diagram ID**: 111682
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class CardDeliveryType["CardDeliveryType"]
    class PosDeliveryAddressDto["PosDeliveryAddressDto"]
    class UpdateCardDeliveryTypeResultCodeDto["UpdateCardDeliveryTypeResultCodeDto"]
    class UpdateCardDeliveryTypeResponse["UpdateCardDeliveryTypeResponse"]
    class UpdateCardDeliveryTypeRequest["UpdateCardDeliveryTypeRequest"]
    class CardManagementWS["CardManagementWS"]
    CardManagementWS ..> UpdateCardDeliveryTypeRequest : unnamed
    CardManagementWS ..> UpdateCardDeliveryTypeResponse : unnamed
    UpdateCardDeliveryTypeResponse ..> UpdateCardDeliveryTypeResultCodeDto : unnamed
    UpdateCardDeliveryTypeRequest ..> PosDeliveryAddressDto : unnamed
    UpdateCardDeliveryTypeRequest ..> CardDeliveryType : unnamed
```
