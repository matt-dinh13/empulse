# PatchDocument

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Interface Provided/Web Service/Document Instance Services/Documents_v2
- **Diagram ID**: 162132
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class DocumentAttributeRequest["DocumentAttributeRequest"]
    class ADD_PatchDocumentItem["{ADD}PatchDocumentItem"]
    class ADD_PatchDocumentRequest["{ADD}PatchDocumentRequest"]
    class n_14_012_Patch_Document["14.012 Patch Document"]
    class Documents["Documents"]
    Documents ..> ADD_PatchDocumentRequest : unnamed
    Documents ..> n_14_012_Patch_Document : unnamed
    ADD_PatchDocumentRequest ..> ADD_PatchDocumentItem : unnamed
    ADD_PatchDocumentItem ..> DocumentAttributeRequest : unnamed
```
