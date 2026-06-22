# CardModificationWS.UpdateEmbossedName

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2
- **Diagram ID**: 135388
- **Elements**: 6
- **Connectors**: 7

```mermaid
classDiagram
    class PaymentCardId["PaymentCardId"]
    class HolderName["HolderName"]
    class UpdateEmbossedNameResultCodeDto["UpdateEmbossedNameResultCodeDto"]
    class UpdateEmbossedNameResponse["UpdateEmbossedNameResponse"]
    class UpdateEmbossedNameRequest["UpdateEmbossedNameRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> UpdateEmbossedNameRequest : unnamed
    CardModificationWS ..> UpdateEmbossedNameResponse : unnamed
    UpdateEmbossedNameResponse ..> UpdateEmbossedNameResultCodeDto : unnamed
    UpdateEmbossedNameResponse ..> HolderName : unnamed
    UpdateEmbossedNameRequest ..> HolderName : unnamed
    UpdateEmbossedNameResponse ..> PaymentCardId : unnamed
    UpdateEmbossedNameRequest ..> PaymentCardId : unnamed
```
