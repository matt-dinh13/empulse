# Create contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/User Interface Model
- **Diagram ID**: 121898
- **Elements**: 14
- **Connectors**: 11

```mermaid
graph TD
    Client_scoring["Client scoring"]
    Client_scoring["Client scoring"]
    MOD_01_160_Search_client["{MOD}01.160 Search client"]
    Application_form["Application form"]
    Client_search_optional["Client search (optional)"]
    Choose_product_offer["Choose product offer"]
    Create_contract["Create contract"]
    MOD_01_082_Fill_in_application_1BoD["{MOD}01.082 Fill in application - 1BoD"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    Please_select_how_the_process_should_start["Please select how the process should start"]
    Client_identification["Client identification"]
    Select_product["Select product"]
    Close["Close"]
    Create_contract["Create contract"]
    Select_product -->|unnamed| Choose_product_offer
    Select_product -->|unnamed| n_01_010_Choose_product_offer
    Client_identification -->|country don´t use client search| Application_form
    Client_identification -->|country uses client search| Client_search_optional
    Client_identification -->|unnamed| MOD_01_082_Fill_in_application_1BoD
    Client_identification -->|unnamed| MOD_01_160_Search_client
    Client_scoring -->|unnamed| Client_scoring
    n_01_010_Choose_product_offer -->|unnamed| MOD_01_082_Fill_in_application_1BoD
    MOD_01_160_Search_client -->|unnamed| n_01_010_Choose_product_offer
    Create_contract -->|unnamed| n_01_010_Choose_product_offer
    Create_contract -->|unnamed| Create_contract
```
