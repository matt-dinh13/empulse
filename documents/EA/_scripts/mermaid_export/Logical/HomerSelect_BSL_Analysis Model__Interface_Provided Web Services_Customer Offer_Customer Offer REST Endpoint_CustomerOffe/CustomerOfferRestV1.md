# CustomerOfferRestV1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1
- **Diagram ID**: 164361
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class CustomerOfferRestV1_CustomerOfferRestV1_UpdateOffer["CustomerOfferRestV1 : CustomerOfferRestV1 - UpdateOffer"]
    class Services["Services"]
    class CustomerOfferRestV1_CustomerOfferRestV1_RecalculateCustomerO["CustomerOfferRestV1 : CustomerOfferRestV1 - RecalculateCustomerOffer"]
    class Recalculate["Recalculate"]
    class CustomerOfferRestV1_CustomerOfferRestV1_CalculateCustomerOff["CustomerOfferRestV1 : CustomerOfferRestV1 - CalculateCustomerOffer"]
    class Calculate["Calculate"]
    class CustomerOfferRestV1_CustomerOfferRestV1_GetCustomerOffer["CustomerOfferRestV1 : CustomerOfferRestV1 - GetCustomerOffer"]
    class CustomerOffers["CustomerOffers"]
    class BSL["BSL"]
    BSL o-- CustomerOffers : /v1.0/customerOffers
    CustomerOfferRestV1_CustomerOfferRestV1_GetCustomerOffer --> CustomerOffers : unnamed
    CustomerOffers o-- Calculate : /calculate
    CustomerOfferRestV1_CustomerOfferRestV1_CalculateCustomerOff --> Calculate : unnamed
    CustomerOffers o-- Recalculate : /recalculate
    CustomerOfferRestV1_CustomerOfferRestV1_RecalculateCustomerO --> Recalculate : unnamed
    CustomerOffers o-- Services : /{offerCode}/services
    CustomerOfferRestV1_CustomerOfferRestV1_UpdateOffer --> Services : unnamed
```
