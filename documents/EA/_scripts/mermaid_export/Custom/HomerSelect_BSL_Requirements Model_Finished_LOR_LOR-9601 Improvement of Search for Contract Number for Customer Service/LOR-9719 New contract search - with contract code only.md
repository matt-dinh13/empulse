# LOR-9719 New contract search - with contract code only

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9601 Improvement of Search for Contract Number for Customer Service Operators /LOR-9719 New contract search - with contract code only
- **Diagram ID**: 153837
- **Elements**: 10
- **Connectors**: 4

```mermaid
graph TD
    MOD_01_300_Search_for_contract["{MOD}01.300 Search for contract"]
    Contract_number["Contract number"]
    Search_contract_by_code["Search contract by code"]
    MOD_Predefined_search_filters["{MOD}Predefined search filters"]
    Search_contract_by_code["Search contract by code"]
    LOR_9601_Improvement_of_Search_for_Contract_Number_for_Custo["LOR-9601 Improvement of Search for Contract Number for Customer Service Operators "]
    Search_contract_by_code["Search contract by code"]
    MOD_Contract_search_filter["{MOD}Contract search filter"]
    n_01_300_Search_contract_by_code["01.300 Search contract by code"]
    LOR_9719_New_contract_search_with_contract_code_only["LOR-9719 New contract search - with contract code only"]
    LOR_9719_New_contract_search_with_contract_code_only -->|unnamed| LOR_9601_Improvement_of_Search_for_Contract_Number_for_Custo
    MOD_01_300_Search_for_contract -->|unnamed| MOD_Contract_search_filter
    MOD_01_300_Search_for_contract -->|unnamed| n_01_300_Search_contract_by_code
    Search_contract_by_code -->|unnamed| n_01_300_Search_contract_by_code
```
