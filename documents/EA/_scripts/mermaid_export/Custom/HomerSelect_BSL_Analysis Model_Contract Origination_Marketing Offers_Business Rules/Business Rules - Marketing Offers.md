# Business Rules - Marketing Offers

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules
- **Diagram ID**: 158067
- **Elements**: 12
- **Connectors**: 7

```mermaid
graph TD
    Check_availability_of_offers_on_salesroom["Check availability of offers on salesroom"]
    Get_offer_data["Get offer data"]
    MOD_02_912_Get_Customer_Marketing_Offers["{MOD}02.912 Get Customer Marketing Offers"]
    n_02_914_Set_Block_on_Customer_Marketing_Offers["02.914 Set Block on Customer Marketing Offers"]
    Get_active_offers_of_the_party["Get active offers of the party"]
    Methods_for_blocking_unblocking_of_Marketing_Offers["Methods for blocking/unblocking of Marketing Offers"]
    Block_Marketing_Offer_by_Contract["Block Marketing Offer by Contract"]
    Disable_non_available_Consolidation_Marketing_Offers["Disable non-available Consolidation Marketing Offers"]
    Get_Product_Type_of_Marketing_Offer["Get Product Type of Marketing Offer"]
    Is_Marketing_Offer_available_on_Salesroom["Is Marketing Offer available on Salesroom"]
    Is_Marketing_Offer_to_be_Responded["Is Marketing Offer to be Responded"]
    Save_Marketing_Offer_to_BSL["Save Marketing Offer to BSL"]
    Is_Marketing_Offer_to_be_Responded -->|unnamed| Get_active_offers_of_the_party
    Is_Marketing_Offer_to_be_Responded -->|unnamed| MOD_02_912_Get_Customer_Marketing_Offers
    Is_Marketing_Offer_available_on_Salesroom -->|unnamed| MOD_02_912_Get_Customer_Marketing_Offers
    Is_Marketing_Offer_available_on_Salesroom -->|unnamed| Get_active_offers_of_the_party
    Is_Marketing_Offer_available_on_Salesroom -->|unnamed| Disable_non_available_Consolidation_Marketing_Offers
    Block_Marketing_Offer_by_Contract -->|unnamed| n_02_914_Set_Block_on_Customer_Marketing_Offers
    Get_active_offers_of_the_party -->|unnamed| Check_availability_of_offers_on_salesroom
```
