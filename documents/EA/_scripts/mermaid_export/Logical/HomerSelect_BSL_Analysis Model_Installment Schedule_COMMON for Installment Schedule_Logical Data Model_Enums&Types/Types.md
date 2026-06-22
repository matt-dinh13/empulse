# Types

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model/Enums&Types
- **Diagram ID**: 159634
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class Generate_installment_schedule_Basic_algorithm["Generate installment schedule - Basic algorithm"]
    class Generate_installment_schedule_Extended1_algorithm["Generate installment schedule - Extended1 algorithm"]
    class MOD_Installment_Schedule_Method_Type["{MOD}Installment Schedule Method Type"]
    class Installment_Type["Installment Type"]
    class Offer_Installment["Offer Installment"]
    class Installment["Installment"]
    class Recalculation_Reason["Recalculation Reason"]
    class Offer_Installment_Part["Offer Installment Part"]
    class Installment_Priority["Installment Priority"]
    class Installment_Part["Installment Part"]
    class Installment_Part_Type["Installment Part Type"]
    MOD_Installment_Schedule_Method_Type ..> Generate_installment_schedule_Extended1_algorithm : unnamed
    MOD_Installment_Schedule_Method_Type ..> Generate_installment_schedule_Basic_algorithm : unnamed
    Installment o-- Installment_Part : unnamed
    Installment_Part ..> Installment_Part_Type : unnamed
    Installment_Priority ..> Installment_Part_Type : unnamed
    Installment ..> Installment_Type : unnamed
    Installment --> Installment : unnamed
    Installment ..> Recalculation_Reason : unnamed
    Offer_Installment_Part ..> Installment_Part_Type : unnamed
    Offer_Installment o-- Offer_Installment_Part : unnamed
    Offer_Installment ..> Installment_Type : unnamed
```
