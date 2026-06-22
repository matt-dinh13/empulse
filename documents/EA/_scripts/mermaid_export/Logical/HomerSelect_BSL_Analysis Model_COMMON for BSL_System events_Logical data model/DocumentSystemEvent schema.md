# DocumentSystemEvent schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164625
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class SystemEvent["SystemEvent"]
    class DocumentPhotoUploadedSE["DocumentPhotoUploadedSE"]
    class DocumentPhotoTakenSE["DocumentPhotoTakenSE"]
    class DocumentSystemEvent["DocumentSystemEvent"]
    DocumentSystemEvent <|-- DocumentPhotoUploadedSE : unnamed
    DocumentSystemEvent <|-- DocumentPhotoTakenSE : unnamed
    SystemEvent <|-- DocumentSystemEvent : {ADD LOR-3003/}
```
