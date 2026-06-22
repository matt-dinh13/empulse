# Contract Commodity

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model
- **Diagram ID**: 164488
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class Commodity_Validation_Status["Commodity Validation Status"]
    class MOD_Commodity["{MOD}Commodity"]
    class MOD_Contract["{MOD}Contract"]
    class Contract_Commodity["Contract Commodity"]
    class Commodity_module["Commodity module"]
    MOD_Contract o-- Contract_Commodity : unnamed
    Contract_Commodity ..> Commodity_Validation_Status : unnamed
```
