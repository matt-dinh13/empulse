# CustomerOfferRestV1 - RecalculateCustomerOffer

```mermaid
classDiagram
    class ServiceChoiceTO["ServiceChoiceTO"]
    class CustomerOfferRecalculationInputsTO["CustomerOfferRecalculationInputsTO"]
    class Recalculate["Recalculate"]
    class MOD_02_830_Recalculate_Product_Offers_for_External_system["{MOD}02.830 Recalculate Product Offers for External system"]
    class CustomerOfferReferenceTO["CustomerOfferReferenceTO"]
    class CustomerOffers["CustomerOffers"]
    class BSL["BSL"]
    CustomerOffers --> BSL : /v1.0/customerOffers
    Recalculate --> CustomerOffers : /recalculate
    Recalculate --> MOD_02_830_Recalculate_Product_Offers_for_External_system : unnamed
    Recalculate --> CustomerOfferReferenceTO : unnamed
    Recalculate --> CustomerOfferRecalculationInputsTO : unnamed
    CustomerOfferRecalculationInputsTO --> ServiceChoiceTO : unnamed
```
