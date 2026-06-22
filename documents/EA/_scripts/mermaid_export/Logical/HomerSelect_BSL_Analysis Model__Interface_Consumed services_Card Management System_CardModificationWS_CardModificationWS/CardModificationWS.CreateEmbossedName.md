# CardModificationWS.CreateEmbossedName

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2
- **Diagram ID**: 135390
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class CardHolderName["CardHolderName"]
    class CreateEmbossedNameRequest["CreateEmbossedNameRequest"]
    class CreateEmbossedNameResponse["CreateEmbossedNameResponse"]
    class CreateEmbossedNameResultCodeDto["CreateEmbossedNameResultCodeDto"]
    class CardModificationWS["CardModificationWS"]
    CreateEmbossedNameResponse ..> CreateEmbossedNameResultCodeDto : unnamed
    CardModificationWS ..> CreateEmbossedNameResponse : unnamed
    CardModificationWS ..> CreateEmbossedNameRequest : unnamed
    CreateEmbossedNameRequest ..> CardHolderName : unnamed
```
