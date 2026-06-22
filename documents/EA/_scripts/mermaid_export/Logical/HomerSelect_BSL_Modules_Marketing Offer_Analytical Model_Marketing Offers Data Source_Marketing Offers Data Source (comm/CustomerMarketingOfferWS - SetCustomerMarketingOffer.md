# CustomerMarketingOfferWS - SetCustomerMarketingOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerMarketingOfferWS.SetCustomerMarketingOffer
- **Diagram ID**: 111673
- **Elements**: 7
- **Connectors**: 4

```mermaid
classDiagram
    class SetCustomerMarketingOfferResultCode["SetCustomerMarketingOfferResultCode"]
    class n_02_915_Set_Customer_Marketing_Offers["02.915 Set Customer Marketing Offers"]
    class SetCustomerMarketingOfferResponse["SetCustomerMarketingOfferResponse"]
    class MOD_SetCustomerMarketingOfferRequest["{MOD}SetCustomerMarketingOfferRequest"]
    class Use_Case_Customer_Marketing_Offers["Use Case : Customer Marketing Offers"]
    class Interface_Provided_CustomerMarketingOfferWS["Interface Provided : CustomerMarketingOfferWS"]
    class CustomerMarketingOfferWS["CustomerMarketingOfferWS"]
    SetCustomerMarketingOfferResponse ..> SetCustomerMarketingOfferResultCode : unnamed
    CustomerMarketingOfferWS ..> SetCustomerMarketingOfferResponse : unnamed
    CustomerMarketingOfferWS ..> MOD_SetCustomerMarketingOfferRequest : unnamed
    CustomerMarketingOfferWS ..> n_02_915_Set_Customer_Marketing_Offers : unnamed
```
