# Business Rules - Provide Product Offer Limits

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Business Rules
- **Diagram ID**: 124998
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Get_Salesroom_Sales_Items["Get Salesroom Sales Items"]
    Check_if_Marketing_Offer_is_blocked["Check if Marketing Offer is blocked"]
    Available_commodity_types_for_salesroom["Available commodity types for salesroom"]
    MOD_Get_allowed_Product_Types_on_POS["{MOD}Get allowed Product Types on POS"]
    Check_if_Marketing_Offer_is_available_for_Salesroom["Check if Marketing Offer is available for Salesroom"]
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| MOD_Get_allowed_Product_Types_on_POS
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| Available_commodity_types_for_salesroom
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| Get_Salesroom_Sales_Items
    MOD_Get_allowed_Product_Types_on_POS -->|unnamed| Get_Salesroom_Sales_Items
```
