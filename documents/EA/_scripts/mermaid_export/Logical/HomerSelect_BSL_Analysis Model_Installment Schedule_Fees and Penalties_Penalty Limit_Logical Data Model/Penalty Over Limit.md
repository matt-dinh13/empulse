# Penalty Over Limit

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Penalty Limit/Logical Data Model
- **Diagram ID**: 159980
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class Logical_Data_Model_Contract_Management["Logical Data Model : Contract Management"]
    class MOD_Tariff_Item["{MOD}Tariff Item"]
    class Installment["Installment"]
    class Penalty_Over_Limit_Charging["Penalty Over Limit Charging"]
    class Penalty_Over_Limit["Penalty Over Limit"]
    class MOD_Contract["{MOD}Contract"]
    Penalty_Over_Limit o-- Penalty_Over_Limit_Charging : unnamed
    Penalty_Over_Limit --> Installment : unnamed
    Penalty_Over_Limit --> MOD_Tariff_Item : unnamed
    MOD_Contract o-- Penalty_Over_Limit : unnamed
```
