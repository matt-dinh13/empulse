# Product Calculator for External system - Provide Data

```mermaid
graph TD
    Default_document_container["Default document container"]
    Prepare_CustomerOffer["Prepare CustomerOffer"]
    MOD_Prepare_InfoForCommodityType["{MOD}Prepare InfoForCommodityType"]
    GetProductsForCommodityRequest_validation_rules["GetProductsForCommodityRequest - validation rules"]
    GetProductsForCommodity_CustomerOfferWS_GetProductsForCommod["GetProductsForCommodity : CustomerOfferWS - GetProductsForCommodity"]
    DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex["{DEL}02.845 Provide Products for Finacing of Commodity for External system"]
    GetCodeList_CustomerOfferWS_GetCodeList["GetCodeList : CustomerOfferWS - GetCodeList"]
    DEL_02_840_Provide_Offer_CodeLists_for_External_system["{DEL}02.840 Provide Offer CodeLists for External system"]
    GetCustomerOffer_CustomerOfferWS_GetCustomerOffer["GetCustomerOffer : CustomerOfferWS - GetCustomerOffer"]
    n_02_835_Provide_Product_Offers_for_External_system["02.835 Provide Product Offers for External system"]
    External_system["External system"]
    n_02_835_Provide_Product_Offers_for_External_system -->|unnamed| Prepare_CustomerOffer
    n_02_835_Provide_Product_Offers_for_External_system -->|unnamed| GetCustomerOffer_CustomerOfferWS_GetCustomerOffer
    DEL_02_840_Provide_Offer_CodeLists_for_External_system -->|unnamed| GetCodeList_CustomerOfferWS_GetCodeList
    DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex -->|unnamed| GetProductsForCommodityRequest_validation_rules
    DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex -->|unnamed| MOD_Prepare_InfoForCommodityType
    GetProductsForCommodity_CustomerOfferWS_GetProductsForCommod -->|unnamed| DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex
    External_system -->|unnamed| DEL_02_845_Provide_Products_for_Finacing_of_Commodity_for_Ex
    External_system -->|unnamed| DEL_02_840_Provide_Offer_CodeLists_for_External_system
    External_system -->|unnamed| n_02_835_Provide_Product_Offers_for_External_system
    Prepare_CustomerOffer -->|unnamed| Default_document_container
```
