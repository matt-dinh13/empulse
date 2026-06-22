# Find bank

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Management/Bank management/User Interface
- **Diagram ID**: 152611
- **Elements**: 28
- **Connectors**: 12

```mermaid
graph TD
    Find_bank_PH_specific["Find bank - PH specific"]
    DD_Provider_type["DD Provider type"]
    Text_with_special_characters["Text with special characters"]
    Alphanumeric["Alphanumeric"]
    n_00_180_Show_bank_detail["00.180 Show bank detail"]
    MOD_00_160_Create_bank["{MOD} 00.160 Create bank"]
    Create["Create"]
    Bank_search_result["Bank search result"]
    Basic_asterisk_search["Basic asterisk search"]
    Minimal_search_criteria_for_bank["Minimal search criteria for bank"]
    n_00_110_Find_bank["00.110 Find bank"]
    DD_Provider_or_DD_Client_or_DD_provider_type_must_be_selecte["DD Provider or DD Client or DD provider type must be selected"]
    Bank_search_criteria_evaluation["Bank search criteria evaluation"]
    DD_Providers_selection["DD Providers selection"]
    Used_DD_Provider["Used DD Provider"]
    DD_Client["DD Client"]
    DD_Provider["DD Provider"]
    Bank_status["Bank status"]
    Bank_code["Bank code"]
    Bank_name["Bank name"]
    Reset["Reset"]
    Search["Search"]
    Search_result_panel["Search result panel"]
    Button_panel["Button panel"]
    Search_criteria_panel["Search criteria panel"]
    Additional_country_specific_bank_information["Additional country specific bank information"]
    ADD_E_Mandate_Support["{ADD}E-Mandate Support"]
    Find_bank["Find bank"]
    DD_Provider -->|unnamed| DD_Provider_or_DD_Client_or_DD_provider_type_must_be_selecte
    Bank_code -->|unnamed| Alphanumeric
    Bank_search_result -->|unnamed| n_00_180_Show_bank_detail
    Create -->|unnamed| MOD_00_160_Create_bank
    Bank_name -->|unnamed| Basic_asterisk_search
    Bank_name -->|unnamed| Text_with_special_characters
    Find_bank -->|unnamed| n_00_110_Find_bank
    DD_Provider_type -->|{ADD TIN-7039}| DD_Provider_or_DD_Client_or_DD_provider_type_must_be_selecte
    DD_Client -->|unnamed| DD_Provider_or_DD_Client_or_DD_provider_type_must_be_selecte
    Search_criteria_panel -->|unnamed| Bank_search_criteria_evaluation
    Used_DD_Provider -->|unnamed| DD_Providers_selection
    Search_criteria_panel -->|unnamed| Minimal_search_criteria_for_bank
```
