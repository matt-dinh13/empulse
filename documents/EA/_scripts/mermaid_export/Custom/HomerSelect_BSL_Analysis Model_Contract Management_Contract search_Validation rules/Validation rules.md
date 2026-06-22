# Validation rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/Validation rules
- **Diagram ID**: 134066
- **Elements**: 18
- **Connectors**: 10

```mermaid
graph TD
    ADD_CRM_Search_criteria_restriction["{ADD}CRM Search criteria restriction"]
    ADD_CRM_Search_criteria_restriction["{ADD}CRM Search criteria restriction"]
    ADD_BO_Limited_Search_criteria_restriction["{ADD}BO Limited Search criteria restriction"]
    ADD_BO_Limited_Search_criteria_restriction["{ADD}BO Limited Search criteria restriction"]
    Sales_agent_search_criteria_restriction["Sales agent search criteria restriction"]
    Sales_agent_search_criteria_restriction["Sales agent search criteria restriction"]
    Remote_contract_search_criteria_restriction["Remote contract search criteria restriction"]
    Remote_contract_search_criteria_restriction["Remote contract search criteria restriction"]
    Custom_search_criteria_restriction_KZ["Custom search criteria restriction - KZ"]
    Contract_custom_SNM_search_criteria_restriction["Contract custom SNM search criteria restriction"]
    Contract_custom_SNM_search_criteria_restrictions["Contract custom SNM search criteria restrictions"]
    Contract_search_criteria_restrictions_IN["Contract search criteria restrictions - IN"]
    Contract_search_criteria_restrictions_common["Contract search criteria restrictions - common"]
    Contract_search_documents["Contract search - documents"]
    Contract_search_documents["Contract search - documents"]
    Contract_custom_search_criteria_restrictions["Contract custom search criteria restrictions"]
    Search_time_interval["Search time interval"]
    Contract_search_time_interval["Contract search - time interval"]
    Contract_search_time_interval -->|unnamed| Search_time_interval
    Contract_search_documents -->|unnamed| Contract_search_documents
    Contract_custom_search_criteria_restrictions -->|unnamed| Contract_search_criteria_restrictions_common
    Contract_custom_search_criteria_restrictions -->|unnamed| Contract_search_criteria_restrictions_IN
    Contract_custom_SNM_search_criteria_restrictions -->|unnamed| Contract_custom_SNM_search_criteria_restriction
    Contract_custom_search_criteria_restrictions -->|unnamed| Custom_search_criteria_restriction_KZ
    Remote_contract_search_criteria_restriction -->|unnamed| Remote_contract_search_criteria_restriction
    Sales_agent_search_criteria_restriction -->|unnamed| Sales_agent_search_criteria_restriction
    ADD_BO_Limited_Search_criteria_restriction -->|unnamed| ADD_BO_Limited_Search_criteria_restriction
    ADD_CRM_Search_criteria_restriction -->|unnamed| ADD_CRM_Search_criteria_restriction
```
