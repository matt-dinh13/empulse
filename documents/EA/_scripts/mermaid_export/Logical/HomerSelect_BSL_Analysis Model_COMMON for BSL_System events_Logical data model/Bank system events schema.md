# Bank system events schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164624
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class BankChangedSE["BankChangedSE"]
    class BankBranchChangedSE["BankBranchChangedSE"]
    class ADD_BankEvent["{ADD}BankEvent"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- ADD_BankEvent : unnamed
    ADD_BankEvent <|-- BankChangedSE : unnamed
    ADD_BankEvent <|-- BankBranchChangedSE : unnamed
```
