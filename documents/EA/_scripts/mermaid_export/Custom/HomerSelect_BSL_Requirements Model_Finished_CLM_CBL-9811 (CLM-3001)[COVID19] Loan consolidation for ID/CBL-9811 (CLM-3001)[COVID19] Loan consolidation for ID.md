# CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9811 (CLM-3001)[COVID19] Loan consolidation for ID
- **Diagram ID**: 144780
- **Elements**: 8
- **Connectors**: 1

```mermaid
graph TD
    REQ_3_Assign_Loan_consolidation_service_to_affected_contract["REQ #3 - Assign Loan consolidation service to affected contracts"]
    REQ_2_Update_Insurance_Service_version_on_affected_contracts["REQ #2 - Update Insurance Service version on affected contracts"]
    MOD_01_187_Sign_contract["{MOD}01.187 Sign contract"]
    MOD_Update_data_in_contract_related_structures["{MOD}Update data in contract related structures"]
    n_01_380_Prepare_Contract_for_Consolidation["01.380 Prepare Contract for Consolidation"]
    Use_Case_Model_Loan_consolidation_use_case_model["Use Case Model : Loan consolidation - use case model"]
    MOD_Refinanced_Contract["{MOD}Refinanced Contract "]
    REQ_1_Adding_optional_FER_due_date_for_Loan_consolidation["REQ #1 - Adding optional FER due date for Loan consolidation"]
    MOD_01_187_Sign_contract -->|unnamed| MOD_Update_data_in_contract_related_structures
```
