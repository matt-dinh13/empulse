# CBL-4643 (CLM-1727) ContractDocument service extension with ProofCheck information

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4643 (CLM-1727) ContractDocument service extension with ProofCheck information
- **Diagram ID**: 110953
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    Documents_Get_Contract_Documents_detail["Documents : Get Contract Documents detail"]
    Use_Case_Model_Contract_document_services["Use Case Model : Contract document services"]
    REQ_1_Getting_Contract_Documents_service_with_proof_check_in["REQ #1 - Getting Contract Documents service with proof check info"]
    ContractDocuments_ContractDocumentWS_GetDocumentList["ContractDocuments : ContractDocumentWS - GetDocumentList"]
    Documents_Documents["Documents : Documents"]
    Documents_Get_Contract_Documents_detail -->|unnamed| REQ_1_Getting_Contract_Documents_service_with_proof_check_in
    Use_Case_Model_Contract_document_services -->|unnamed| REQ_1_Getting_Contract_Documents_service_with_proof_check_in
```
