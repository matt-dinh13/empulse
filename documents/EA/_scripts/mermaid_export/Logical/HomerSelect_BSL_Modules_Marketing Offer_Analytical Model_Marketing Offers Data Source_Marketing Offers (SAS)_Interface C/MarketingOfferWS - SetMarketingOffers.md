# MarketingOfferWS - SetMarketingOffers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/SetMarketingOffers
- **Diagram ID**: 101411
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class ADD_ResponseAdditionalParam["{ADD}ResponseAdditionalParam"]
    class ADD_ResponseAdditionalInfo["{ADD}ResponseAdditionalInfo"]
    class ADD_HookOffer["{ADD}HookOffer"]
    class ADD_SetMarketingOffersResponse["{ADD}SetMarketingOffersResponse"]
    class ADD_SetMarketingOffersRequest["{ADD}SetMarketingOffersRequest"]
    class Marketing_Offers_external_MarketingOfferWS["Marketing Offers (external) : MarketingOfferWS"]
    class MOD_MarketingOfferWS["{MOD}MarketingOfferWS"]
    MOD_MarketingOfferWS ..> ADD_SetMarketingOffersRequest : unnamed
    MOD_MarketingOfferWS ..> ADD_SetMarketingOffersResponse : unnamed
    ADD_SetMarketingOffersRequest ..> ADD_HookOffer : unnamed
    ADD_HookOffer ..> ADD_ResponseAdditionalInfo : unnamed
    ADD_ResponseAdditionalInfo ..> ADD_ResponseAdditionalParam : unnamed
```
