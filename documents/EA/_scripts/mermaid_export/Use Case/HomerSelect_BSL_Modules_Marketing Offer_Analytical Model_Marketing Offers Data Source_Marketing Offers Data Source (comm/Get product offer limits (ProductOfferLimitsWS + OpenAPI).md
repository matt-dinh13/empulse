# Get product offer limits (ProductOfferLimitsWS + OpenAPI)

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Use Case
- **Diagram ID**: 136919
- **Elements**: 6
- **Connectors**: 2

```mermaid
graph LR
    MOD_02_912_Get_Customer_Marketing_Offers(("{MOD}02.912 Get Customer Marketing Offers"))
    CustomerOfferLimits_GetCustomerOfferLimits_OpenAPI_Customer_["CustomerOfferLimits.GetCustomerOfferLimits (OpenAPI) : Customer Offer Limits - GetCustomerOfferLimits (OpenAPI)"]
    External_System[/"External System"/]
    Product_Offer_Limits_ProductOfferLimitsWS_GetProductOfferLim["Product Offer Limits :ProductOfferLimitsWS - GetProductOfferLimits"]
    n_02_902_Get_product_offer_limit(("02.902 Get product offer limit"))
    BSL["BSL"]
    External_System --- n_02_902_Get_product_offer_limit
    n_02_902_Get_product_offer_limit -.->|include| MOD_02_912_Get_Customer_Marketing_Offers
```
