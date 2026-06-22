# SettingDocumentProofCheck_v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Documents/SettingDocumentProofCheck_v2
- **Diagram ID**: 131741
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class DocumentProofCheck["DocumentProofCheck"]
    class DocumentAttribute["DocumentAttribute"]
    class DocumentData["DocumentData"]
    class SetDocumentProofCheckResponse["SetDocumentProofCheckResponse"]
    class SetDocumentProofCheckRequest_validation["SetDocumentProofCheckRequest validation"]
    class n_01_792_Set_Document_ProofCheck_service["01.792 Set Document ProofCheck service"]
    class SetDocumentProofCheckRequest["SetDocumentProofCheckRequest"]
    class Document_Services["Document Services"]
    class documents["documents"]
    DocumentData ..> DocumentProofCheck : unnamed
    DocumentData ..> DocumentAttribute : unnamed
    SetDocumentProofCheckResponse o-- DocumentData : unnamed
    n_01_792_Set_Document_ProofCheck_service ..> SetDocumentProofCheckRequest_validation : unnamed
    Document_Services ..> n_01_792_Set_Document_ProofCheck_service : unnamed
    Document_Services ..> SetDocumentProofCheckRequest : unnamed
    Document_Services ..> SetDocumentProofCheckResponse : unnamed
    documents o-- Document_Services : unnamed
```
