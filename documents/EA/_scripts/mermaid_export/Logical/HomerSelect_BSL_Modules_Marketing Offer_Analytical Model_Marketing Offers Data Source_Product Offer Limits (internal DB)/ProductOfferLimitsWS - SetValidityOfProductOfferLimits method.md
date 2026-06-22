# ProductOfferLimitsWS - SetValidityOfProductOfferLimits method

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Interface Provided/ProductOfferLimitsWS.SetValidityOfProductOfferLimits
- **Diagram ID**: 90331
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class Use_Case_Import_of_Product_Offer_Limits["Use Case :Import of Product Offer Limits"]
    class SetValidityOfProductOfferLimitsRequest["SetValidityOfProductOfferLimitsRequest"]
    class SetValidityOfProductOfferLimitsResultCode["SetValidityOfProductOfferLimitsResultCode"]
    class SetValidityOfProductOfferLimitsResponse["SetValidityOfProductOfferLimitsResponse"]
    class n_02_904_Set_validity_of_product_offer_limits["02.904 Set validity of product offer limits "]
    class ProductOfferLimitWS["ProductOfferLimitWS"]
    SetValidityOfProductOfferLimitsResponse ..> SetValidityOfProductOfferLimitsResultCode : unnamed
    ProductOfferLimitWS ..> n_02_904_Set_validity_of_product_offer_limits : unnamed
    ProductOfferLimitWS ..> SetValidityOfProductOfferLimitsRequest : unnamed
    ProductOfferLimitWS ..> SetValidityOfProductOfferLimitsResponse : unnamed
```
