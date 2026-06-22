# REQ #2 - Implement BO Limited Search

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office
- **Diagram ID**: 144836
- **Elements**: 21
- **Connectors**: 6

```mermaid
graph TD
    ADD_Contract_search_filter_Dynamic["{ADD}Contract search filter - Dynamic"]
    Include_mistakes["Include mistakes"]
    Validation_rules_Validation_rules["Validation rules : Validation rules"]
    User_Interface_Model_Search_for_contract["User Interface Model : Search for contract"]
    Access_Rights_Contract_search_Access_Rights["Access Rights : Contract search - Access Rights"]
    ADD_BO_Limited_Search["{ADD}BO Limited Search"]
    Vin_Code["Vin Code"]
    Document_ID_number["Document ID number"]
    Document_type["Document type"]
    Contract_number["Contract number"]
    ADD_BO_Limited_Search["{ADD}BO Limited Search"]
    ADD_BO_Limited_Search["{ADD}BO Limited Search"]
    ADD_01_300_Search_for_contract_BO_Limited_Search["{ADD}01.300 Search for contract (BO Limited Search)"]
    ADD_Get_system_contract_search_criteria_based_on_configurati["{ADD}Get system contract search criteria based on configuration"]
    ADD_BO_Limited_Search_criteria_restriction["{ADD}BO Limited Search criteria restriction"]
    ADD_BO_Limited_Search_criteria_restriction["{ADD}BO Limited Search criteria restriction"]
    MOD_Contract_search_filter["{MOD}Contract search filter"]
    MOD_01_300_Search_for_contract["{MOD}01.300 Search for contract"]
    REQ_2_Implement_BO_Limited_Search["REQ #2 - Implement BO Limited Search"]
    UseCase_Model_Contract_search["UseCase Model : Contract search"]
    Contract_search["Contract search"]
    ADD_BO_Limited_Search_criteria_restriction -->|unnamed| ADD_BO_Limited_Search_criteria_restriction
    MOD_01_300_Search_for_contract -->|unnamed| MOD_Contract_search_filter
    MOD_01_300_Search_for_contract -->|unnamed| ADD_01_300_Search_for_contract_BO_Limited_Search
    MOD_Contract_search_filter -->|unnamed| ADD_Contract_search_filter_Dynamic
    MOD_Contract_search_filter -->|unnamed| ADD_Get_system_contract_search_criteria_based_on_configurati
    MOD_Contract_search_filter -->|unnamed| ADD_BO_Limited_Search_criteria_restriction
```
