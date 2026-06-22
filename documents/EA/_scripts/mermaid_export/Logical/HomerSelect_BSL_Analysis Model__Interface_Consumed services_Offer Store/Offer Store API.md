# Offer Store API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Offer Store
- **Diagram ID**: 154151
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Offer_Store_Offer_Store_API_Limit_Controller_Management_of_c["Offer Store :Offer Store API - Limit Controller (Management of customer limits)"]
    class Offer_Store_Offer_Store_API_Offer_Controller_Management_of_c["Offer Store :Offer Store API - Offer Controller (Management of customer offers)"]
    class OFS["OFS"]
    Offer_Store_Offer_Store_API_Offer_Controller_Management_of_c --> OFS : unnamed
    Offer_Store_Offer_Store_API_Limit_Controller_Management_of_c --> OFS : unnamed
```
