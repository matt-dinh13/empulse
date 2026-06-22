# {ADD}SettingDocumentProofCheck_v3

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SettingDocumentProofCheck_v3
- **Diagram ID**: 131744
- **Elements**: 10
- **Connectors**: 9

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
    documents o-- Document_Services : unnamed
    Document_Services ..> n_01_792_Set_Document_ProofCheck_service : unnamed
    n_01_792_Set_Document_ProofCheck_service ..> SetDocumentProofCheckRequest_validation : unnamed
    SetDocumentProofCheckResponse o-- MOD_DocumentData : unnamed
    MOD_DocumentData ..> DocumentAttribute : unnamed
    MOD_DocumentData ..> DocumentProofCheck : unnamed
    MOD_DocumentData ..> ADD_DmsFile : unnamed
    Document_Services ..> SetDocumentProofCheckResponse : unnamed
    Document_Services ..> SetDocumentProofCheckRequest : unnamed
```
