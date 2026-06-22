# Document Instance notifications

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Interface Provided/Generated Messages/Document Instance notifications
- **Diagram ID**: 164332
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_DocumentAttribute["{ADD}DocumentAttribute"]
    class ADD_DocumentFile["{ADD}DocumentFile"]
    class ADD_DocumentArchived["{ADD}DocumentArchived"]
    class ADD_Document["{ADD}Document"]
    ADD_DocumentArchived <|-- ADD_Document : unnamed
    ADD_Document --> ADD_DocumentFile : unnamed
    ADD_Document --> ADD_DocumentAttribute : unnamed
```
