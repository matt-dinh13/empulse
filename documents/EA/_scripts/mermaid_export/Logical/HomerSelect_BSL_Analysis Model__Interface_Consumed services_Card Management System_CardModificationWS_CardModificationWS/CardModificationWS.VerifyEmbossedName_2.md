# CardModificationWS.VerifyEmbossedName

```mermaid
classDiagram
    class VerifyEmbossedNameResultCodeDto["VerifyEmbossedNameResultCodeDto"]
    class CardHolderName["CardHolderName"]
    class VerifyEmbossedNameResponse["VerifyEmbossedNameResponse"]
    class VerifyEmbossedNameRequest["VerifyEmbossedNameRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS --> VerifyEmbossedNameRequest : unnamed
    CardModificationWS --> VerifyEmbossedNameResponse : unnamed
    VerifyEmbossedNameRequest --> CardHolderName : unnamed
    VerifyEmbossedNameResponse --> VerifyEmbossedNameResultCodeDto : unnamed
```
