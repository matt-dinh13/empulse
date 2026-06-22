# CardModificationWS.VerifyEmbossedName

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2
- **Diagram ID**: 135389
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class VerifyEmbossedNameResultCodeDto["VerifyEmbossedNameResultCodeDto"]
    class CardHolderName["CardHolderName"]
    class VerifyEmbossedNameResponse["VerifyEmbossedNameResponse"]
    class VerifyEmbossedNameRequest["VerifyEmbossedNameRequest"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> VerifyEmbossedNameRequest : unnamed
    CardModificationWS ..> VerifyEmbossedNameResponse : unnamed
    VerifyEmbossedNameRequest ..> CardHolderName : unnamed
    VerifyEmbossedNameResponse ..> VerifyEmbossedNameResultCodeDto : unnamed
```
