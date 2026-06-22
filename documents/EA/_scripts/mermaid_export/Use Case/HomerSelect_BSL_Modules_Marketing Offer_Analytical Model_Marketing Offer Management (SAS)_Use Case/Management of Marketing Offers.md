# Management of Marketing Offers

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offer Management (SAS)/Use Case
- **Diagram ID**: 148813
- **Elements**: 12
- **Connectors**: 9

```mermaid
graph LR
    Interface_Consumed_Communication_History["Interface Consumed : Communication History"]
    OSB[/"OSB"/]
    Interface_Consumed_MarketingOfferWS["Interface Consumed : MarketingOfferWS"]
    n_01_010_Choose_product_offer(("01.010 Choose product offer"))
    Campaign_system_SAS[/"Campaign system (SAS)"/]
    Use_Case_Customer_Marketing_Offers["Use Case : Customer Marketing Offers"]
    MOD_02_912_Get_Customer_Marketing_Offers(("{MOD}02.912 Get Customer Marketing Offers"))
    CIF[/"CIF"/]
    Person_customerPersonGetResponse["Person : customerPersonGetResponse"]
    User[/"User"/]
    User_Interface_Marketing_offers_management_SAS["User Interface : Marketing offers management (SAS)"]
    DEL_02_906_Marketing_Offers_Management(("{DEL}02.906 Marketing Offers Management"))
    User --- DEL_02_906_Marketing_Offers_Management
    DEL_02_906_Marketing_Offers_Management -->|unnamed| User_Interface_Marketing_offers_management_SAS
    DEL_02_906_Marketing_Offers_Management --- CIF
    DEL_02_906_Marketing_Offers_Management --- CIF
    DEL_02_906_Marketing_Offers_Management -.->|include| MOD_02_912_Get_Customer_Marketing_Offers
    MOD_02_912_Get_Customer_Marketing_Offers --- Campaign_system_SAS
    DEL_02_906_Marketing_Offers_Management --- Campaign_system_SAS
    DEL_02_906_Marketing_Offers_Management -.->|extend| n_01_010_Choose_product_offer
    DEL_02_906_Marketing_Offers_Management --- OSB
```
