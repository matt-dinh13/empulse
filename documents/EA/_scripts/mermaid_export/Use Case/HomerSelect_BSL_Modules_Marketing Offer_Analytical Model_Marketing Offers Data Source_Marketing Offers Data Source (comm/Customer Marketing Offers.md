# Customer Marketing Offers

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Use Case
- **Diagram ID**: 136920
- **Elements**: 17
- **Connectors**: 12

```mermaid
graph LR
    SetCustomerMarketingOfferRequest_validation["SetCustomerMarketingOfferRequest - validation"]
    CustomerMarketingOfferWS_SetCustomerMarketingOffer_CustomerM["CustomerMarketingOfferWS.SetCustomerMarketingOffer : CustomerMarketingOfferWS - SetCustomerMarketingOffer"]
    n_02_915_Set_Customer_Marketing_Offers(("02.915 Set Customer Marketing Offers"))
    CustomerMarketingOfferWS_Get_SetBlockCustomerMarketingOffer_["CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer : CustomerMarketingOfferWS - SetBlockCustomerMarketingOffer"]
    CustomerMarketingOfferWS_Get_SetBlockCustomerMarketingOffer_["CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer : CustomerMarketingOfferWS - GetBlockCustomerMarketingOffer"]
    n_02_914_Set_Block_on_Customer_Marketing_Offers(("02.914 Set Block on Customer Marketing Offers"))
    n_02_913_Get_Block_of_Customer_Marketing_Offers(("02.913 Get Block of Customer Marketing Offers"))
    GetMarketingOffersResponse_validation_rules["GetMarketingOffersResponse - validation rules"]
    Interface_Consumed_MarketingOfferWS["Interface Consumed : MarketingOfferWS"]
    Available_commodity_types_for_salesroom["Available commodity types for salesroom"]
    MOD_Get_allowed_Product_Types_on_POS["{MOD}Get allowed Product Types on POS"]
    Check_if_Marketing_Offer_is_available_for_Salesroom["Check if Marketing Offer is available for Salesroom"]
    Check_if_Marketing_Offer_is_blocked["Check if Marketing Offer is blocked"]
    Campaign_system_SAS[/"Campaign system (SAS)"/]
    CustomerMarketingOffer_GetCustomerMarketingOffer_CustomerMar["CustomerMarketingOffer.GetCustomerMarketingOffer : CustomerMarketingOfferWS - GetCustomerMarketingOffer"]
    Internal_Component[/"Internal Component"/]
    MOD_02_912_Get_Customer_Marketing_Offers(("{MOD}02.912 Get Customer Marketing Offers"))
    Internal_Component --- MOD_02_912_Get_Customer_Marketing_Offers
    n_02_915_Set_Customer_Marketing_Offers --- Campaign_system_SAS
    MOD_02_912_Get_Customer_Marketing_Offers --- Campaign_system_SAS
    MOD_02_912_Get_Customer_Marketing_Offers -->|unnamed| Check_if_Marketing_Offer_is_blocked
    MOD_02_912_Get_Customer_Marketing_Offers -->|unnamed| Check_if_Marketing_Offer_is_available_for_Salesroom
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| MOD_Get_allowed_Product_Types_on_POS
    Check_if_Marketing_Offer_is_available_for_Salesroom -->|unnamed| Available_commodity_types_for_salesroom
    MOD_02_912_Get_Customer_Marketing_Offers -->|unnamed| GetMarketingOffersResponse_validation_rules
    Internal_Component --- n_02_913_Get_Block_of_Customer_Marketing_Offers
    Internal_Component --- n_02_914_Set_Block_on_Customer_Marketing_Offers
    Internal_Component --- n_02_915_Set_Customer_Marketing_Offers
    n_02_915_Set_Customer_Marketing_Offers -->|unnamed| SetCustomerMarketingOfferRequest_validation
```
