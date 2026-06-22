# Marketing Offer Limits

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/User Interface
- **Diagram ID**: 161287
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Disable_non_available_Consolidation_Marketing_Offers["Disable non-available Consolidation Marketing Offers"]
    Choose_Product_Offer_Bound_offers_calculation_method["Choose Product Offer : Bound offers calculation method"]
    Choose_Product_Offer_X_sell_offers_calculation_method["Choose Product Offer : X-sell offers calculation method"]
    Marketing_Offer_Limits["Marketing Offer Limits"]
    CustomerMarketingOffer_GetCustomerMarketingOffer_CustomerMar["CustomerMarketingOffer.GetCustomerMarketingOffer : CustomerMarketingOfferWS - GetCustomerMarketingOffer"]
    Get_set_of_Business_Product_Types["Get set of Business Product Types"]
    Get_Product_Type_of_Marketing_Offer["Get Product Type of Marketing Offer"]
    Marketing_Offer_Limits -->|unnamed| Get_Product_Type_of_Marketing_Offer
    Marketing_Offer_Limits -->|unnamed| Get_set_of_Business_Product_Types
    Marketing_Offer_Limits -->|unnamed| Disable_non_available_Consolidation_Marketing_Offers
```
