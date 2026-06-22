# Get Salesroom Properties - business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants
- **Diagram ID**: 138422
- **Elements**: 6
- **Connectors**: 1

```mermaid
graph TD
    Get_Salesroom_Sales_Items["Get Salesroom Sales Items"]
    MOD_Get_allowed_Product_Types_on_POS["{MOD}Get allowed Product Types on POS"]
    Get_allowed_disbursement_channels_on_POS_for_Transaction_typ["Get allowed disbursement channels on POS for Transaction type"]
    Get_allowed_commodities_on_POS_for_a_revolving_transaction["Get allowed commodities on POS for a revolving transaction"]
    Get_allowed_Product_Transaction_Types_on_POS_for_Product_Typ["Get allowed Product Transaction Types on POS for Product Type"]
    Find_Cobrand_group_for_Salesroom["Find Cobrand group for Salesroom"]
    MOD_Get_allowed_Product_Types_on_POS -->|unnamed| Get_Salesroom_Sales_Items
```
