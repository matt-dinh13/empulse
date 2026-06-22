# CardModificationWS.UpdateEmbossedName

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1
- **Diagram ID**: 135370
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
    CardModificationWS ..> UpdateEmbossedNameRequest : External Reference
    CardModificationWS ..> UpdateEmbossedNameResponse : External Reference
    UpdateEmbossedNameResponse ..> UpdateEmbossedNameResultCodeDto : unnamed
    UpdateEmbossedNameRequest ..> HolderName : unnamed
    UpdateEmbossedNameRequest ..> PaymentCardId : unnamed
    UpdateEmbossedNameResponse ..> HolderName : unnamed
    UpdateEmbossedNameResponse ..> PaymentCardId : unnamed
```
