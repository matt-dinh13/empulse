# Page flow for 2SP

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/User Interface Model/Page flow model
- **Diagram ID**: 78766
- **Elements**: 11
- **Connectors**: 20

```mermaid
graph TD
    Client_search["Client search"]
    Select_first_step["Select first step"]
    Start["Start"]
    Search_for_contract["Search for contract"]
    n_2BoD["2BoD"]
    Cancel_contract["Cancel contract"]
    Alternative_offer_detail["Alternative offer detail"]
    Draft_detail["Draft detail"]
    n_1BoD["1BoD"]
    Choose_product_offer["Choose product offer"]
    Home["Home"]
    Draft_detail -->|Refresh| Draft_detail
    Home -->|Search for contract| Search_for_contract
    Search_for_contract -->|Open draft| n_2BoD
    Draft_detail -->|Refuse negative alternative offer| Cancel_contract
    Draft_detail -->|Cancel contract| Cancel_contract
    Draft_detail -->|Display detail of alternative| Alternative_offer_detail
    Home -->|unnamed| Select_first_step
    Search_for_contract -->|Open In process| Draft_detail
    Select_first_step -->|unnamed| Client_search
    n_1BoD -->|Send to preliminary - no product| Draft_detail
    n_1BoD -->|Send application to preliminary approval| Draft_detail
    Client_search -->|unnamed| n_1BoD
    Select_first_step -->|Choose product offer| Choose_product_offer
    Client_search -->|x-sell exists| Choose_product_offer
    Draft_detail -->|Cross-sell limits| Choose_product_offer
    Draft_detail -->|Product selection (product selection or cross-sell limits)| Choose_product_offer
    Cancel_contract -->|unnamed| Home
    Start -->|unnamed| Home
    Choose_product_offer -->|unnamed| Client_search
    Alternative_offer_detail -->|Back| Draft_detail
```
