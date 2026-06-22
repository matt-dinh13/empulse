# CBL-9757 (CLM-3028) Check Income proof document

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9757 (CLM-3028) Check Income proof document
- **Diagram ID**: 144782
- **Elements**: 10
- **Connectors**: 1

```mermaid
graph TD
    External_Reference["External Reference"]
    RegisterContractFaultType["RegisterContractFaultType"]
    BIZ_1_Support_of_the_Income_proof_document_checking_within_t["BIZ #1 -  Support of the Income proof document checking within the registration process"]
    validateIncomeProof["validateIncomeProof"]
    REQ_2_Validate_Income_proof_document_before_registration["REQ #2 - Validate Income proof document before registration"]
    MOD_Validate_documents_before_registration["{MOD}Validate documents before registration"]
    MOD_Generate_documents_list_for_contract_registration["{MOD}Generate documents list for contract registration"]
    n_01_275_Show_registration_tab["01.275 Show registration tab"]
    REQ_1_Create_client_document_type_INCOME_PROOF_configuration["REQ #1 - Create client document type INCOME_PROOF (configuration)"]
    el_1688636["Boundary"]
    n_01_275_Show_registration_tab -->|unnamed| MOD_Generate_documents_list_for_contract_registration
```
