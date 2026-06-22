# Contract accrued income domain model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model
- **Diagram ID**: 162147
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Installment_Part_Type["Installment Part Type"]
    class Contract_Accrued_Income["Contract Accrued Income"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Accrued_Income ..> Installment_Part_Type : unnamed
    MOD_Contract o-- Contract_Accrued_Income : unnamed
```
