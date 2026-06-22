# ProductOfferLimitsWS - SetProductOfferLimit

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.SetProductOfferLimit
- **Diagram ID**: 111997
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class n_02_901_Set_product_offer_limits["02.901 Set product offer limits"]
    class SetProductOfferLimitResultCode["SetProductOfferLimitResultCode"]
    class SetProductOfferLimitResponse["SetProductOfferLimitResponse"]
    class SetProductOfferLimitRequest["SetProductOfferLimitRequest"]
    class Use_Case_Import_of_Product_Offer_Limits["Use Case :Import of Product Offer Limits"]
    class ProductOfferLimitWS["ProductOfferLimitWS"]
    SetProductOfferLimitResponse ..> SetProductOfferLimitResultCode : unnamed
    ProductOfferLimitWS ..> SetProductOfferLimitResponse : unnamed
    ProductOfferLimitWS ..> SetProductOfferLimitRequest : unnamed
    ProductOfferLimitWS ..> n_02_901_Set_product_offer_limits : unnamed
```
