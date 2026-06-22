# Contract ownership

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model
- **Diagram ID**: 164479
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Ownership_type["Ownership type"]
    class Credit_Owner["Credit Owner"]
    class Contract_Ownership["Contract Ownership"]
    class MOD_Contract["{MOD}Contract"]
    MOD_Contract o-- Contract_Ownership : unnamed
    Contract_Ownership ..> Credit_Owner : unnamed
    Contract_Ownership ..> Ownership_type : unnamed
```
