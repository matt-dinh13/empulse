# {ADD}IsMarketingOfferAvailableForSalesroom

```mermaid
classDiagram
    class ADD_SalesFeatures["{ADD}SalesFeatures"]
    class ADD_Interface_provided_SalesFeaturesWS["{ADD}Interface provided : SalesFeaturesWS"]
    class IsMarketingOfferAvailableForSalesroomResponse["IsMarketingOfferAvailableForSalesroomResponse"]
    class ADD_09_501_Marketing_Offer_Available_For_Salesroom["{ADD}09.501 Marketing Offer Available For Salesroom"]
    class product["product"]
    class IsMarketingOfferAvailableForSalesroomRequest["IsMarketingOfferAvailableForSalesroomRequest"]
    class ADD_SalesFeaturesWS["{ADD}SalesFeaturesWS"]
    class ValidationCodeIsMarketingOfferAvailableForSalesroom["ValidationCodeIsMarketingOfferAvailableForSalesroom"]
    class checkAvailabilityResponse["checkAvailabilityResponse"]
    class CheckAvailability["CheckAvailability"]
    CheckAvailability --> product : unnamed
    checkAvailabilityResponse --> ValidationCodeIsMarketingOfferAvailableForSalesroom : unnamed
    ADD_SalesFeaturesWS --> IsMarketingOfferAvailableForSalesroomRequest : unnamed
    ADD_SalesFeaturesWS --> ADD_09_501_Marketing_Offer_Available_For_Salesroom : unnamed
    ADD_SalesFeaturesWS --> IsMarketingOfferAvailableForSalesroomResponse : unnamed
    IsMarketingOfferAvailableForSalesroomRequest --> CheckAvailability : unnamed
    IsMarketingOfferAvailableForSalesroomResponse --> checkAvailabilityResponse : unnamed
    ADD_SalesFeatures --> ADD_09_501_Marketing_Offer_Available_For_Salesroom : unnamed
    ADD_SalesFeatures --> IsMarketingOfferAvailableForSalesroomResponse : unnamed
    ADD_SalesFeatures --> IsMarketingOfferAvailableForSalesroomRequest : unnamed
```
