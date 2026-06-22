# Penalties Limit Parameters

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model
- **Diagram ID**: 159981
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Penalty_Limit_Parameters_validation_rules["Penalty Limit Parameters - validation rules"]
    class Penalty_Limit_Period_Type["Penalty Limit Period Type"]
    class Penalty_Limit_Parameters["Penalty Limit Parameters"]
    Penalty_Limit_Parameters ..> Penalty_Limit_Period_Type : unnamed
    Penalty_Limit_Parameters ..> Penalty_Limit_Parameters_validation_rules : unnamed
```
