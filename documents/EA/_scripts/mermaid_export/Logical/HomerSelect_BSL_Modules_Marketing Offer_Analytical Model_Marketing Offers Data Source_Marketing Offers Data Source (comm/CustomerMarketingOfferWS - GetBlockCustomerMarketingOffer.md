# CustomerMarketingOfferWS - GetBlockCustomerMarketingOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.Get/SetBlockCustomerMarketingOffer
- **Diagram ID**: 91970
- **Elements**: 9
- **Connectors**: 6

```mermaid
classDiagram
    class MarketingOfferBlockerType["MarketingOfferBlockerType"]
    class GetBlockCustomerMarketingOfferDetail["GetBlockCustomerMarketingOfferDetail"]
    class GetBlockCustomerMarketingOfferResultType["GetBlockCustomerMarketingOfferResultType"]
    class GetBlockCustomerMarketingOfferResponse["GetBlockCustomerMarketingOfferResponse"]
    class GetBlockCustomerMarketingOfferRequest["GetBlockCustomerMarketingOfferRequest"]
    class n_02_913_Get_Block_of_Customer_Marketing_Offers["02.913 Get Block of Customer Marketing Offers"]
    class Use_Case_Customer_Marketing_Offers["Use Case : Customer Marketing Offers"]
    class Interface_Provided_CustomerMarketingOfferWS["Interface Provided : CustomerMarketingOfferWS"]
    class CustomerMarketingOfferWS["CustomerMarketingOfferWS"]
    GetBlockCustomerMarketingOfferResponse ..> GetBlockCustomerMarketingOfferResultType : unnamed
    GetBlockCustomerMarketingOfferResponse ..> GetBlockCustomerMarketingOfferDetail : unnamed
    GetBlockCustomerMarketingOfferDetail ..> MarketingOfferBlockerType : unnamed
    CustomerMarketingOfferWS ..> n_02_913_Get_Block_of_Customer_Marketing_Offers : unnamed
    CustomerMarketingOfferWS ..> GetBlockCustomerMarketingOfferResponse : unnamed
    CustomerMarketingOfferWS ..> GetBlockCustomerMarketingOfferRequest : unnamed
```
