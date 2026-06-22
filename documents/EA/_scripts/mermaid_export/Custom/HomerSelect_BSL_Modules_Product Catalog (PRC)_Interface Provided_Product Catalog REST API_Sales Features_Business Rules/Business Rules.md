# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Business Rules
- **Diagram ID**: 132238
- **Elements**: 8
- **Connectors**: 9

```mermaid
graph TD
    ADD_Marketing_offer_availability["{ADD}Marketing offer availability"]
    Check_if_Marketing_Offer_is_available_for_Salesroom["Check if Marketing Offer is available for Salesroom"]
    ADD_Get_allowed_commodity_types_on_salesroom["{ADD}Get allowed commodity types on salesroom"]
    Is_Marketing_Offer_available_on_Salesroom["Is Marketing Offer available on Salesroom"]
    Get_Salesroom_Sales_Items["Get Salesroom Sales Items"]
    ADD_Get_allowed_product_types_on_salesroom["{ADD}Get allowed product types on salesroom"]
    Available_commodity_types_for_salesroom["Available commodity types for salesroom"]
    MOD_Get_allowed_Product_Types_on_POS["{MOD}Get allowed Product Types on POS"]
    ADD_Marketing_offer_availability -->|unnamed| ADD_Get_allowed_commodity_types_on_salesroom
    ADD_Get_allowed_product_types_on_salesroom -->|unnamed| Get_Salesroom_Sales_Items
    ADD_Get_allowed_commodity_types_on_salesroom -->|unnamed| Get_Salesroom_Sales_Items
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| Get_Salesroom_Sales_Items
    ADD_Marketing_offer_availability -->|unnamed| Get_Salesroom_Sales_Items
    ADD_Marketing_offer_availability -->|unnamed| ADD_Get_allowed_product_types_on_salesroom
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| Available_commodity_types_for_salesroom
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| MOD_Get_allowed_Product_Types_on_POS
    MOD_Get_allowed_Product_Types_on_POS -->|unnamed| Get_Salesroom_Sales_Items
```
