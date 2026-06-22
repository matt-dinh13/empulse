# Installment schedule

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Installment schedule management/Analytical Model/Logical Data Model
- **Diagram ID**: 149261
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Installment_Schedule["Installment Schedule"]
    class Installment_Part_Type["Installment Part Type"]
    class Recalculation_Reason["Recalculation Reason"]
    class Installment_Type["Installment Type"]
    class Installment_Part["Installment Part"]
    class Installment["Installment"]
    Installment o-- Installment_Part : unnamed
    Installment ..> Installment_Type : unnamed
    Installment ..> Recalculation_Reason : unnamed
    Installment_Part ..> Installment_Part_Type : unnamed
    Installment_Schedule o-- Installment : unnamed
```
