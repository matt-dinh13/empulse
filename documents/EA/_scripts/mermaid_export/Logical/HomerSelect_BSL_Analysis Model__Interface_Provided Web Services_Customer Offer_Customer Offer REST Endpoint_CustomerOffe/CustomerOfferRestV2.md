# CustomerOfferRestV2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Customer Offer/Customer Offer REST Endpoint/CustomerOfferRestV2
- **Diagram ID**: 164366
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class BSL["BSL"]
    class Services["Services"]
    class Recalculate["Recalculate"]
    class Calculate["Calculate"]
    class CustomerOffers["CustomerOffers"]
    BSL o-- CustomerOffers : /customerOffers
    CustomerOffers o-- Calculate : /calculate
    CustomerOffers o-- Recalculate : /recalculate
    CustomerOffers o-- Services : /{offerCode}/services
```
