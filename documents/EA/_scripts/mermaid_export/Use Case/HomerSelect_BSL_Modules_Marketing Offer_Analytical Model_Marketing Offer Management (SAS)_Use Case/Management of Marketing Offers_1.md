# Management of Marketing Offers

```mermaid
graph TD
    Interface_Consumed_Communication_History["Interface Consumed : Communication History"]
    OSB["OSB"]
    Interface_Consumed_MarketingOfferWS["Interface Consumed : MarketingOfferWS"]
    n_01_010_Choose_product_offer["01.010 Choose product offer"]
    Campaign_system_SAS["Campaign system (SAS)"]
    Use_Case_Customer_Marketing_Offers["Use Case : Customer Marketing Offers"]
    MOD_02_912_Get_Customer_Marketing_Offers["{MOD}02.912 Get Customer Marketing Offers"]
    CIF["CIF"]
    Person_customerPersonGetResponse["Person : customerPersonGetResponse"]
    User["User"]
    User_Interface_Marketing_offers_management_SAS["User Interface : Marketing offers management (SAS)"]
    DEL_02_906_Marketing_Offers_Management["{DEL}02.906 Marketing Offers Management"]
    User -->|unnamed| DEL_02_906_Marketing_Offers_Management
    DEL_02_906_Marketing_Offers_Management -->|unnamed| User_Interface_Marketing_offers_management_SAS
    DEL_02_906_Marketing_Offers_Management -->|data source| CIF
    DEL_02_906_Marketing_Offers_Management -->|edit data (extension)| CIF
    DEL_02_906_Marketing_Offers_Management -->|unnamed| MOD_02_912_Get_Customer_Marketing_Offers
    MOD_02_912_Get_Customer_Marketing_Offers -->|provides data from SAS| Campaign_system_SAS
    DEL_02_906_Marketing_Offers_Management -->|sends response to SAS| Campaign_system_SAS
    DEL_02_906_Marketing_Offers_Management -->|unnamed| n_01_010_Choose_product_offer
    DEL_02_906_Marketing_Offers_Management -->|unnamed| OSB
```
