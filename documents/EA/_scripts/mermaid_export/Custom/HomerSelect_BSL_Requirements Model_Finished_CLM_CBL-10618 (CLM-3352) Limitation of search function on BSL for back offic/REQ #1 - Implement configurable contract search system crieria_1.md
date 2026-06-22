# REQ #1 - Implement configurable contract search system crieria

```mermaid
graph TD
    REQ_1_Implement_configurable_contract_search_system_criteria["REQ #1 - Implement configurable contract search system criteria"]
    ADD_Get_system_contract_search_criteria_based_on_configurati["{ADD}Get system contract search criteria based on configuration"]
    Contract_search_filter["Contract search filter"]
    User["User"]
    ADD_Contract_Search_Criteria_Code["{ADD}Contract Search Criteria Code"]
    ADD_Contract_Search_Criteria_Configuration["{ADD}Contract Search Criteria Configuration"]
    ADD_Contract_Search_Criteria_Code -->|unnamed| ADD_Contract_Search_Criteria_Configuration
    Contract_search_filter -->|unnamed| User
    Contract_search_filter -->|unnamed| ADD_Get_system_contract_search_criteria_based_on_configurati
```
