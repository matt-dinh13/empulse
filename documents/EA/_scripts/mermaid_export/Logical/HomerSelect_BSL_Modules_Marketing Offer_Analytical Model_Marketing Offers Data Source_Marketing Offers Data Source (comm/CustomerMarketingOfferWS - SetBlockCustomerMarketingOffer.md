# CustomerMarketingOfferWS - SetBlockCustomerMarketingOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer
- **Diagram ID**: 91969
- **Elements**: 8
- **Connectors**: 5

```mermaid
classDiagram
    class MarketingOfferBlockerType["MarketingOfferBlockerType"]
    class n_02_914_Set_Block_on_Customer_Marketing_Offers["02.914 Set Block on Customer Marketing Offers"]
    class SetBlockCustomerMarketingOfferResultType["SetBlockCustomerMarketingOfferResultType"]
    class SetBlockCustomerMarketingOfferResponse["SetBlockCustomerMarketingOfferResponse"]
    class SetBlockCustomerMarketingOfferRequest["SetBlockCustomerMarketingOfferRequest"]
    class Use_Case_Customer_Marketing_Offers["Use Case : Customer Marketing Offers"]
    class Interface_Provided_CustomerMarketingOfferWS["Interface Provided : CustomerMarketingOfferWS"]
    class CustomerMarketingOfferWS["CustomerMarketingOfferWS"]
    SetBlockCustomerMarketingOfferResponse ..> SetBlockCustomerMarketingOfferResultType : unnamed
    SetBlockCustomerMarketingOfferRequest ..> MarketingOfferBlockerType : unnamed
    CustomerMarketingOfferWS ..> n_02_914_Set_Block_on_Customer_Marketing_Offers : unnamed
    CustomerMarketingOfferWS ..> SetBlockCustomerMarketingOfferRequest : unnamed
    CustomerMarketingOfferWS ..> SetBlockCustomerMarketingOfferResponse : unnamed
```
