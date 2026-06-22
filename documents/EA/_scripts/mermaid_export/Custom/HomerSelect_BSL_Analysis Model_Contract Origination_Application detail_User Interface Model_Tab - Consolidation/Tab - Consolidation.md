# Tab - Consolidation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Consolidation
- **Diagram ID**: 136937
- **Elements**: 8
- **Connectors**: 3

```mermaid
graph TD
    Create_Update_bank_account["Create/Update bank account"]
    ADD_01_368_Update_closure_information_for_refinanced_contrac["{ADD}01.368 Update closure information for refinanced contract"]
    MOD_01_366_Update_bank_account_for_refinanced_contract["{MOD}01.366 Update bank account for refinanced contract"]
    n_01_365_Add_bank_account_for_refinanced_contract["01.365 Add bank account for refinanced contract"]
    User_Interface_Model_Application_detail["User Interface Model : Application detail"]
    Internal_refinance["Internal refinance"]
    External_refinance["External refinance"]
    Tab_Consolidation["Tab - Consolidation"]
    External_refinance -->|unnamed| n_01_365_Add_bank_account_for_refinanced_contract
    External_refinance -->|unnamed| MOD_01_366_Update_bank_account_for_refinanced_contract
    External_refinance -->|{DEL LOR-5921/}| ADD_01_368_Update_closure_information_for_refinanced_contrac
```
