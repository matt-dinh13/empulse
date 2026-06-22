# CBL-5168 (CLM-2062) External Refinance contract closure information

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5168 (CLM-2062) External Refinance contract closure information
- **Diagram ID**: 117604
- **Elements**: 12
- **Connectors**: 7

```mermaid
graph TD
    n_08_392_Set_Refinanced_Contract_Closure_service["08.392 Set Refinanced Contract Closure service"]
    n_08_390_Get_Refinanced_Contracts_service["08.390 Get Refinanced Contracts service"]
    Refinanced_Contract_Refinanced_Contract["Refinanced Contract : Refinanced Contract"]
    n_08_392_Set_Refinanced_Contract_Closure_service["08.392 Set Refinanced Contract Closure service"]
    n_08_390_Get_Refinanced_Contracts_service["08.390 Get Refinanced Contracts service"]
    REQ_1_Store_Closure_information_for_External_refinanced_cont["REQ#1 - Store Closure information for External refinanced contract"]
    ADD_Update_closure_information_Update_closure_information["{ADD}Update closure information : Update closure information"]
    Logical_Data_Model_Loan_consolidation_Logical_Data_Model["Logical Data Model : Loan consolidation - Logical Data Model"]
    ADD_01_368_Update_closure_information_for_refinanced_contrac["{ADD}01.368 Update closure information for refinanced contract"]
    ADD_01_368_Update_closure_information_for_refinanced_contrac["{ADD}01.368 Update closure information for refinanced contract"]
    Use_Case_model_Consolidation_Use_case["Use Case model : Consolidation Use case"]
    Tab_Consolidation_Tab_Consolidation["Tab-Consolidation : Tab-Consolidation"]
    ADD_01_368_Update_closure_information_for_refinanced_contrac -->|unnamed| ADD_01_368_Update_closure_information_for_refinanced_contrac
    n_08_392_Set_Refinanced_Contract_Closure_service -->|unnamed| n_08_392_Set_Refinanced_Contract_Closure_service
    n_08_390_Get_Refinanced_Contracts_service -->|unnamed| n_08_390_Get_Refinanced_Contracts_service
    Tab_Consolidation_Tab_Consolidation -->|unnamed| ADD_01_368_Update_closure_information_for_refinanced_contrac
    Refinanced_Contract_Refinanced_Contract -->|unnamed| n_08_390_Get_Refinanced_Contracts_service
    Refinanced_Contract_Refinanced_Contract -->|unnamed| n_08_392_Set_Refinanced_Contract_Closure_service
    ADD_01_368_Update_closure_information_for_refinanced_contrac -->|unnamed| ADD_Update_closure_information_Update_closure_information
```
