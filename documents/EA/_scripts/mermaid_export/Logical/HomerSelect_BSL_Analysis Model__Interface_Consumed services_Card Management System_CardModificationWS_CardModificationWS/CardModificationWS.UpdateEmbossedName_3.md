# CardModificationWS.UpdateEmbossedName

```mermaid
classDiagram
    class PaymentCardId["PaymentCardId"]
    class HolderName["HolderName"]
    class UpdateEmbossedNameResultCodeDto["UpdateEmbossedNameResultCodeDto"]
    class UpdateEmbossedNameResponse["UpdateEmbossedNameResponse"]
    class UpdateEmbossedNameRequest["UpdateEmbossedNameRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS --> UpdateEmbossedNameRequest : External Reference
    CardModificationWS --> UpdateEmbossedNameResponse : External Reference
    UpdateEmbossedNameResponse --> UpdateEmbossedNameResultCodeDto : unnamed
    UpdateEmbossedNameRequest --> HolderName : unnamed
    UpdateEmbossedNameRequest --> PaymentCardId : unnamed
    UpdateEmbossedNameResponse --> HolderName : unnamed
    UpdateEmbossedNameResponse --> PaymentCardId : unnamed
```
