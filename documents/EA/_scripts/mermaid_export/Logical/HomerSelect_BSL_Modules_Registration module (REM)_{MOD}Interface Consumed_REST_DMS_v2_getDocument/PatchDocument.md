# PatchDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/{MOD}Interface Consumed/REST/DMS/v2/getDocument
- **Diagram ID**: 156835
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class DocumentAttributeRequest["DocumentAttributeRequest"]
    class ADD_PatchDocumentItem["{ADD}PatchDocumentItem"]
    class ADD_PatchDocumentRequest["{ADD}PatchDocumentRequest"]
    class Documents["Documents"]
    Documents ..> ADD_PatchDocumentRequest : unnamed
    ADD_PatchDocumentRequest ..> ADD_PatchDocumentItem : unnamed
    ADD_PatchDocumentItem ..> DocumentAttributeRequest : unnamed
```
