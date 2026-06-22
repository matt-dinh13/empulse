# CardModificationWS.VerifyEmbossedName

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1
- **Diagram ID**: 135371
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class VerifyEmbossedNameResultCodeDto["VerifyEmbossedNameResultCodeDto"]
    class CardHolderName["CardHolderName"]
    class VerifyEmbossedNameResponse["VerifyEmbossedNameResponse"]
    class VerifyEmbossedNameRequest["VerifyEmbossedNameRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> VerifyEmbossedNameRequest : External Reference
    CardModificationWS ..> VerifyEmbossedNameResponse : External Reference
    VerifyEmbossedNameRequest ..> CardHolderName : unnamed
    VerifyEmbossedNameResponse ..> VerifyEmbossedNameResultCodeDto : unnamed
```
