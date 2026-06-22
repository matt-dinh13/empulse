# ProductOfferLimitsWS - GetProductOfferLimits

```mermaid
classDiagram
    class Interface_Provided_ProductOfferLimitsWS["Interface Provided : ProductOfferLimitsWS"]
    class Use_Case_Get_product_offer_limits["Use Case :Get product offer limits"]
    class n_02_902_Get_product_offer_limit["02.902 Get product offer limit"]
    class OfferLimitProduct["OfferLimitProduct"]
    class OfferLimitDto["OfferLimitDto"]
    class OfferLimitRefinement["OfferLimitRefinement"]
    class GetProductOfferLimitsResponse["GetProductOfferLimitsResponse"]
    class GetProductOfferLimitsRequest["GetProductOfferLimitsRequest"]
    class ProductOfferLimitWS["ProductOfferLimitWS"]
    GetProductOfferLimitsRequest --> OfferLimitRefinement : unnamed
    GetProductOfferLimitsResponse --> OfferLimitDto : unnamed
    OfferLimitDto --> OfferLimitProduct : unnamed
    ProductOfferLimitWS --> n_02_902_Get_product_offer_limit : unnamed
    ProductOfferLimitWS --> GetProductOfferLimitsRequest : unnamed
    ProductOfferLimitWS --> GetProductOfferLimitsResponse : unnamed
```
