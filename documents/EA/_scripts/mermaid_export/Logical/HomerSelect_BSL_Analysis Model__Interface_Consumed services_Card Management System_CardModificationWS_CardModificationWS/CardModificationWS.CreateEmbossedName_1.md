# CardModificationWS.CreateEmbossedName

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v1
- **Diagram ID**: 135372
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class CardHolderName["CardHolderName"]
    class CreateEmbossedNameRequest["CreateEmbossedNameRequest"]
    class CreateEmbossedNameResponse["CreateEmbossedNameResponse"]
    class CreateEmbossedNameResultCodeDto["CreateEmbossedNameResultCodeDto"]
    class CardModificationWS["CardModificationWS"]
    CardModificationWS ..> CreateEmbossedNameResponse : External Reference
    CardModificationWS ..> CreateEmbossedNameRequest : External Reference
    CreateEmbossedNameRequest ..> CardHolderName : unnamed
    CreateEmbossedNameResponse ..> CreateEmbossedNameResultCodeDto : unnamed
```
