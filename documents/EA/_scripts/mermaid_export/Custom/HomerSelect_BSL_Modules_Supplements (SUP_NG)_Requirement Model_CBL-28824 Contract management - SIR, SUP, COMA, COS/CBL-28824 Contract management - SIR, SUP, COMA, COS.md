# CBL-28824 Contract management - SIR, SUP, COMA, COS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Requirement Model/CBL-28824 Contract management - SIR, SUP, COMA, COS
- **Diagram ID**: 162827
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    Use_Case_Model_Cancel_Contract_Supplement_Use_case_model["Use Case Model : Cancel Contract Supplement - Use case model"]
    DOBA_246_Cancel_Contract_Supplement_processing_E_SUP["DOBA-246 Cancel Contract Supplement processing - E-SUP"]
    Use_Case_Model_Confirm_Contract_Supplement_transactions_Use_["Use Case Model : Confirm Contract Supplement transactions - Use Case Model"]
    DOBA_218_SUP_Transaction_confirmation_in_AM["DOBA-218 SUP - Transaction confirmation in AM"]
    Use_Case_Model_Create_Contract_Supplement_documents_Use_Case["Use Case Model : Create Contract Supplement documents - Use Case Model"]
    DOBA_156_SUP_Implementation_of_PrintServer_MOCK["DOBA-156 SUP - Implementation of PrintServer MOCK"]
    Use_Case_Model_Cancel_Contract_Supplement_Use_case_model -->|unnamed| DOBA_246_Cancel_Contract_Supplement_processing_E_SUP
    Use_Case_Model_Create_Contract_Supplement_documents_Use_Case -->|unnamed| DOBA_156_SUP_Implementation_of_PrintServer_MOCK
    Use_Case_Model_Confirm_Contract_Supplement_transactions_Use_ -->|unnamed| DOBA_218_SUP_Transaction_confirmation_in_AM
```
