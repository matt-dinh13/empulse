# CardModificationWS - messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardModificationWS/CardModificationWS_v2/Messages
- **Diagram ID**: 135393
- **Elements**: 9
- **Connectors**: 3

```mermaid
classDiagram
    class CreateEmbossedNameResultCodeDto["CreateEmbossedNameResultCodeDto"]
    class CreateEmbossedNameResponse["CreateEmbossedNameResponse"]
    class CreateEmbossedNameRequest["CreateEmbossedNameRequest"]
    class VerifyEmbossedNameResultCodeDto["VerifyEmbossedNameResultCodeDto"]
    class VerifyEmbossedNameResponse["VerifyEmbossedNameResponse"]
    class VerifyEmbossedNameRequest["VerifyEmbossedNameRequest"]
    class UpdateEmbossedNameResultCodeDto["UpdateEmbossedNameResultCodeDto"]
    class UpdateEmbossedNameResponse["UpdateEmbossedNameResponse"]
    class UpdateEmbossedNameRequest["UpdateEmbossedNameRequest"]
    UpdateEmbossedNameResponse ..> UpdateEmbossedNameResultCodeDto : unnamed
    VerifyEmbossedNameResponse ..> VerifyEmbossedNameResultCodeDto : unnamed
    CreateEmbossedNameResponse ..> CreateEmbossedNameResultCodeDto : unnamed
```
