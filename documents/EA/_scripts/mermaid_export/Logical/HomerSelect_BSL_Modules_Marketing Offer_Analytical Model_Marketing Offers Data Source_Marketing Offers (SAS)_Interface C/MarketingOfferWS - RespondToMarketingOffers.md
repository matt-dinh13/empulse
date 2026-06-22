# MarketingOfferWS - RespondToMarketingOffers

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers (SAS)/Interface Consumed/RespondToMarketingOffers
- **Diagram ID**: 99512
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class ResponseAdditionalInfo["ResponseAdditionalInfo"]
    class RespondToMarketingOffersResponse["RespondToMarketingOffersResponse"]
    class MarketingOfferResponseData["MarketingOfferResponseData"]
    class RespondToMarketingOffersRequest["RespondToMarketingOffersRequest"]
    class Marketing_Offers_external_MarketingOfferWS["Marketing Offers (external) : MarketingOfferWS"]
    class MOD_MarketingOfferWS["{MOD}MarketingOfferWS"]
    RespondToMarketingOffersRequest ..> MarketingOfferResponseData : unnamed
    MarketingOfferResponseData ..> ResponseAdditionalInfo : unnamed
    MOD_MarketingOfferWS ..> RespondToMarketingOffersRequest : unnamed
    MOD_MarketingOfferWS ..> RespondToMarketingOffersResponse : unnamed
```
