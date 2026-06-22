# Contract document services

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Use Case Model
- **Diagram ID**: 163432
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph LR
    Documents_Set_Document_ProofCheck["Documents : Set Document ProofCheck"]
    n_01_792_Set_Document_ProofCheck_service(("01.792 Set Document ProofCheck service"))
    Documents_Set_Document_File["Documents : Set Document File"]
    n_01_791_Set_Document_File_service(("01.791 Set Document File service"))
    GetContractDocumentsRequest_validations["GetContractDocumentsRequest validations"]
    Documents_Get_Client_Documents_v1["Documents :Get Client Documents v1"]
    Documents_Get_Contract_Documents_detail_v2["Documents :Get Contract Documents detail v2"]
    External_system[/"External system"/]
    MOD_01_763_Get_Contract_Documents_for_self_care(("{MOD}01.763 Get Contract Documents for self-care"))
    n_01_790_Get_Contract_Documents_detail_service(("01.790 Get Contract Documents detail service"))
    Documents_Get_Contract_Documents_detail_v2 -->|unnamed| n_01_790_Get_Contract_Documents_detail_service
    Documents_Get_Client_Documents_v1 -->|unnamed| MOD_01_763_Get_Contract_Documents_for_self_care
    n_01_792_Set_Document_ProofCheck_service --> External_system
    n_01_791_Set_Document_File_service --> External_system
    n_01_790_Get_Contract_Documents_detail_service -->|unnamed| GetContractDocumentsRequest_validations
    n_01_791_Set_Document_File_service -->|unnamed| Documents_Set_Document_File
    n_01_792_Set_Document_ProofCheck_service -->|unnamed| Documents_Set_Document_ProofCheck
    External_system --> MOD_01_763_Get_Contract_Documents_for_self_care
    External_system --> n_01_790_Get_Contract_Documents_detail_service
```
