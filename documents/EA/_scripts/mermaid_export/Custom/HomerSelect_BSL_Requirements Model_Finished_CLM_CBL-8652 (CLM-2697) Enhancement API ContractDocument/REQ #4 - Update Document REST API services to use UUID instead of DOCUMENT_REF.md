# REQ #4 - Update Document REST API services to use UUID instead of DOCUMENT_REF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument
- **Diagram ID**: 126634
- **Elements**: 14
- **Connectors**: 10

```mermaid
graph TD
    GetDocumentsResponse["GetDocumentsResponse"]
    Document["Document"]
    ContractDocuments["ContractDocuments"]
    SetDocumentFileResponse["SetDocumentFileResponse"]
    DocumentData["DocumentData"]
    SetDocumentProofCheckResponse["SetDocumentProofCheckResponse"]
    Document_Services["Document Services"]
    el_1869819["Note"]
    Documents_Documents["Documents : Documents"]
    REQ_4_Update_Document_REST_API_services_to_use_UUID_instead_["REQ #4 - Update Document REST API services to use UUID instead of DOCUMENT_REF"]
    n_01_792_Set_Document_ProofCheck_service["01.792 Set Document ProofCheck service"]
    n_01_791_Set_Document_File_service["01.791 Set Document File service"]
    n_01_790_Get_Contract_Documents_detail_service["01.790 Get Contract Documents detail service"]
    MOD_01_763_Get_Contract_Documents_for_self_care["{MOD}01.763 Get Contract Documents for self-care"]
    Document_Services -->|unnamed| n_01_792_Set_Document_ProofCheck_service
    Document_Services -->|unnamed| n_01_791_Set_Document_File_service
    Document_Services -->|unnamed| n_01_790_Get_Contract_Documents_detail_service
    Document_Services -->|unnamed| MOD_01_763_Get_Contract_Documents_for_self_care
    Document_Services -->|unnamed| ContractDocuments
    DocumentData -->|unnamed| SetDocumentProofCheckResponse
    Document_Services -->|unnamed| SetDocumentProofCheckResponse
    Document_Services -->|unnamed| SetDocumentFileResponse
    Document -->|unnamed| GetDocumentsResponse
    el_1869819 -->|unnamed| MOD_01_763_Get_Contract_Documents_for_self_care
```
