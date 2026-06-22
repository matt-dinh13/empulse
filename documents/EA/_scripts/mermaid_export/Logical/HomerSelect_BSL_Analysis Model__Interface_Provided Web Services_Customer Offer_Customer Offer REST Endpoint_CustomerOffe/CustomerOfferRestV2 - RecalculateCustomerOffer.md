# CustomerOfferRestV2 - RecalculateCustomerOffer

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2
- **Diagram ID**: 164368
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class BSL["BSL"]
    class ServiceChoiceTO["ServiceChoiceTO"]
    class CustomerOfferRecalculationInputsTO["CustomerOfferRecalculationInputsTO"]
    class Recalculate["Recalculate"]
    class MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    class CustomerOfferReferenceTO["CustomerOfferReferenceTO"]
    class CustomerOffers["CustomerOffers"]
    BSL o-- CustomerOffers : /customerOffers
    CustomerOffers o-- Recalculate : /recalculate
    MOD_02_830_Recalculate_Product_Offers_for_External_system <|.. Recalculate : unnamed
    Recalculate ..> CustomerOfferRecalculationInputsTO : unnamed
    Recalculate --> CustomerOfferReferenceTO : unnamed
    CustomerOfferRecalculationInputsTO ..> ServiceChoiceTO : unnamed
```
