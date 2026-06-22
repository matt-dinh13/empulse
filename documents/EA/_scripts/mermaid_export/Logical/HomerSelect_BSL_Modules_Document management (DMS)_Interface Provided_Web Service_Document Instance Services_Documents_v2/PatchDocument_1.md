# PatchDocument

```mermaid
classDiagram
    class DocumentAttributeRequest["DocumentAttributeRequest"]
    class ADD_PatchDocumentItem["{ADD}PatchDocumentItem"]
    class ADD_PatchDocumentRequest["{ADD}PatchDocumentRequest"]
    class MOD_14_012_Patch_Document["{MOD}14.012 Patch Document"]
    class Documents["Documents"]
    Documents --> ADD_PatchDocumentRequest : unnamed
    Documents --> MOD_14_012_Patch_Document : unnamed
    ADD_PatchDocumentRequest --> ADD_PatchDocumentItem : unnamed
    ADD_PatchDocumentItem --> DocumentAttributeRequest : unnamed
```
