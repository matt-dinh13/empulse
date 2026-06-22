# CreateDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/getDocument
- **Diagram ID**: 156832
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class DocumentAttributeRequest["DocumentAttributeRequest"]
    class Document["Document"]
    class Documents["Documents"]
    class CreateDocumentRequest["CreateDocumentRequest"]
    Documents ..> CreateDocumentRequest : unnamed
    Documents ..> Document : unnamed
    CreateDocumentRequest ..> DocumentAttributeRequest : unnamed
```
