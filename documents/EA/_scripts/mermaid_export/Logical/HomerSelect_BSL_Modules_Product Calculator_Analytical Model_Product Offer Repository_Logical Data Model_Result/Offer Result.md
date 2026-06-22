# Offer Result

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Offer Repository/Logical Data Model/Result
- **Diagram ID**: 94203
- **Elements**: 12
- **Connectors**: 5

```mermaid
classDiagram
    class Offer_Result_Presented_Interest_Rate["Offer Result Presented Interest Rate"]
    class Offer_Result_Presented_Interest_Rate["Offer Result Presented Interest Rate"]
    class Offer_Result_Product["Offer Result Product"]
    class Offer_Result_Transaction["Offer Result Transaction"]
    class Offer_Repository["Offer Repository"]
    class Offer_Result_Tariff_Item["Offer Result Tariff Item"]
    class Offer_Result_Service["Offer Result Service"]
    class Offer_Result_Transaction["Offer Result Transaction"]
    class Offer_Result_Tariff_Item["Offer Result Tariff Item"]
    class Offer_Result_Service["Offer Result Service"]
    class Offer_Result_Product["Offer Result Product"]
    class Offer_Result["Offer Result"]
    Offer_Result o-- Offer_Result_Presented_Interest_Rate : unnamed
    Offer_Result o-- Offer_Result_Transaction : unnamed
    Offer_Result o-- Offer_Result_Tariff_Item : unnamed
    Offer_Result o-- Offer_Result_Service : unnamed
    Offer_Result o-- Offer_Result_Product : unnamed
```
