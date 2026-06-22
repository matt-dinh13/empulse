# Contract search

```mermaid
graph TD
    ADD_Get_system_contract_search_criteria_based_on_configurati["{ADD}Get system contract search criteria based on configuration"]
    ADD_CRM_Search_criteria_restriction["{ADD}CRM Search criteria restriction"]
    ADD_Contract_search_filter_Dynamic["{ADD}Contract search filter - Dynamic"]
    ADD_BO_Limited_Search_criteria_restriction["{ADD}BO Limited Search criteria restriction"]
    Sales_agent_search_criteria_restriction["Sales agent search criteria restriction"]
    ADD_Contract_search_filter_Sales_agent_search_rule["{ADD}Contract search filter - Sales agent search rule"]
    Access_control_to_contract_search_results["Access control to contract search results"]
    n_01_083_Fill_in_application_2BoD["01.083 Fill in application - 2BoD"]
    Search_results_Search_results["Search results : Search results"]
    MOD_Contract_search_filter["{MOD}Contract search filter"]
    Access_control_to_Contract_search_panel["Access control to Contract search panel"]
    Search_with_unlimited_number_of_results["Search with unlimited number of results"]
    n_01_300_Search_for_contract_01_300_Search_for_contract["01.300 Search for contract : 01.300 Search for contract"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    MOD_01_300_Search_for_contract["{MOD}01.300 Search for contract"]
    User["User"]
    MOD_01_300_Search_for_contract -->|unnamed| n_01_083_Fill_in_application_2BoD
    ADD_Contract_search_filter_Sales_agent_search_rule -->|unnamed| Sales_agent_search_criteria_restriction
    MOD_Contract_search_filter -->|unnamed| ADD_CRM_Search_criteria_restriction
    MOD_Contract_search_filter -->|unnamed| ADD_BO_Limited_Search_criteria_restriction
    MOD_Contract_search_filter -->|unnamed| ADD_Contract_search_filter_Sales_agent_search_rule
    MOD_Contract_search_filter -->|unnamed| ADD_Get_system_contract_search_criteria_based_on_configurati
    MOD_Contract_search_filter -->|unnamed| ADD_Contract_search_filter_Dynamic
    ADD_CRM_Search_criteria_restriction -->|unnamed| ADD_Get_system_contract_search_criteria_based_on_configurati
    n_01_300_Search_for_contract_01_300_Search_for_contract -->|unnamed| MOD_01_300_Search_for_contract
    MOD_01_300_Search_for_contract -->|unnamed| MOD_01_210_Show_contract_detail
    MOD_01_300_Search_for_contract -->|unnamed| Search_with_unlimited_number_of_results
    MOD_01_300_Search_for_contract -->|unnamed| Access_control_to_contract_search_results
    MOD_01_300_Search_for_contract -->|unnamed| Access_control_to_Contract_search_panel
    MOD_01_300_Search_for_contract -->|unnamed| MOD_Contract_search_filter
    Search_with_unlimited_number_of_results -->|unnamed| Search_results_Search_results
    User -->|unnamed| MOD_01_210_Show_contract_detail
    User -->|unnamed| n_01_083_Fill_in_application_2BoD
    User -->|unnamed| MOD_01_300_Search_for_contract
```
