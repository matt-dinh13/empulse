# CustomerOfferRestV1 - RecalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV1
- **Diagram ID**: 164363
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ServiceChoiceTO["ServiceChoiceTO"]
    class CustomerOfferRecalculationInputsTO["CustomerOfferRecalculationInputsTO"]
    class Recalculate["Recalculate"]
    class MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    class CustomerOfferReferenceTO["CustomerOfferReferenceTO"]
    class CustomerOffers["CustomerOffers"]
    class BSL["BSL"]
    BSL o-- CustomerOffers : /v1.0/customerOffers
    CustomerOffers o-- Recalculate : /recalculate
    MOD_02_830_Recalculate_Product_Offers_for_External_system <|.. Recalculate : unnamed
    Recalculate --> CustomerOfferReferenceTO : unnamed
    Recalculate ..> CustomerOfferRecalculationInputsTO : unnamed
    CustomerOfferRecalculationInputsTO ..> ServiceChoiceTO : unnamed
```
