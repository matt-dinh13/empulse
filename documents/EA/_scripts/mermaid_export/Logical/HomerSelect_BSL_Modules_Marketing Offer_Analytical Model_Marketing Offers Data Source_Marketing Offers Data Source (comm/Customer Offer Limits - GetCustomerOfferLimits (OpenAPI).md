# Customer Offer Limits - GetCustomerOfferLimits (OpenAPI)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Marketing Offers Data Source (common)/Interface Provided/CustomerOfferLimits.GetCustomerOfferLimits (OpenAPI)
- **Diagram ID**: 110070
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class GetCustomerOfferLimitsRequest["GetCustomerOfferLimitsRequest"]
    class GetCustomerOfferLimitsResponse["GetCustomerOfferLimitsResponse"]
    class CustomerOfferLimits["CustomerOfferLimits"]
    class n_02_902_Get_product_offer_limit["02.902 Get product offer limit"]
    class CustomerOfferLimits["CustomerOfferLimits"]
    class OfferLimitProduct["OfferLimitProduct"]
    class OfferLimit["OfferLimit"]
    OfferLimit ..> OfferLimitProduct : unnamed
    CustomerOfferLimits o-- CustomerOfferLimits : unnamed
    GetCustomerOfferLimitsResponse o-- OfferLimit : unnamed
    CustomerOfferLimits ..> n_02_902_Get_product_offer_limit : unnamed
    CustomerOfferLimits ..> GetCustomerOfferLimitsResponse : unnamed
    CustomerOfferLimits ..> GetCustomerOfferLimitsRequest : unnamed
```
