# {ADD}SettingDocumentProofCheck_v3

```mermaid
classDiagram
    class ADD_DmsFile["{ADD}DmsFile"]
    class DocumentProofCheck["DocumentProofCheck"]
    class DocumentAttribute["DocumentAttribute"]
    class MOD_DocumentData["{MOD}DocumentData"]
    class SetDocumentProofCheckResponse["SetDocumentProofCheckResponse"]
    class SetDocumentProofCheckRequest_validation["SetDocumentProofCheckRequest validation"]
    class n_01_792_Set_Document_ProofCheck_service["01.792 Set Document ProofCheck service"]
    class SetDocumentProofCheckRequest["SetDocumentProofCheckRequest"]
    class Document_Services["Document Services"]
    class documents["documents"]
    Document_Services --> documents : unnamed
    Document_Services --> n_01_792_Set_Document_ProofCheck_service : unnamed
    n_01_792_Set_Document_ProofCheck_service --> SetDocumentProofCheckRequest_validation : unnamed
    MOD_DocumentData --> SetDocumentProofCheckResponse : unnamed
    MOD_DocumentData --> DocumentAttribute : unnamed
    MOD_DocumentData --> DocumentProofCheck : unnamed
    MOD_DocumentData --> ADD_DmsFile : unnamed
    Document_Services --> SetDocumentProofCheckResponse : unnamed
    Document_Services --> SetDocumentProofCheckRequest : unnamed
```
