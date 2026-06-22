# LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-11238 (BRPH-2104)  New Zeebe workflow for selfie esign updated signature logic
- **Diagram ID**: 164676
- **Elements**: 8
- **Connectors**: 8

```mermaid
graph TD
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    MOD_01_099_Sign_contract_externally["{MOD}01.099 Sign contract externally"]
    MOD_DocumentType["{MOD}DocumentType"]
    Requirement_2_Call_PIF_in_Sign_contract_externally["Requirement #2 - Call PIF in Sign contract externally"]
    Requirement_1_Add_dmsUUID_in_sign_API["Requirement #1 - Add dmsUUID in /sign API"]
    MOD_SignAgreement["{MOD}SignAgreement"]
    Requirement_3_Call_LAP_in_Sign_contract_externally["Requirement #3 - Call LAP in Sign contract externally"]
    MOD_Save_signing_method_for_documents_signed_paperlessly["{MOD}Save signing method for documents signed paperlessly"]
    MOD_01_099_Sign_contract_externally -->|unnamed| MOD_01_187_Sign_contract
    MOD_Save_signing_method_for_documents_signed_paperlessly -->|unnamed| Requirement_3_Call_LAP_in_Sign_contract_externally
    MOD_01_187_Sign_contract -->|unnamed| Requirement_3_Call_LAP_in_Sign_contract_externally
    MOD_DocumentType -->|unnamed| Requirement_3_Call_LAP_in_Sign_contract_externally
    MOD_01_099_Sign_contract_externally -->|unnamed| Requirement_3_Call_LAP_in_Sign_contract_externally
    MOD_SignAgreement -->|unnamed| Requirement_1_Add_dmsUUID_in_sign_API
    MOD_01_099_Sign_contract_externally -->|unnamed| Requirement_1_Add_dmsUUID_in_sign_API
    MOD_01_099_Sign_contract_externally -->|unnamed| Requirement_2_Call_PIF_in_Sign_contract_externally
```
