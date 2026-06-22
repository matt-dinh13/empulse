# CEL Account system event schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164618
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class CELAccountBalanceChangedInternalSE["CELAccountBalanceChangedInternalSE"]
    class Debt_Catalogue["Debt Catalogue"]
    class SystemEvent["SystemEvent"]
    class DEL_CELAccountBalanceChangeSE["{DEL}CELAccountBalanceChangeSE"]
    class CELAccountSE["CELAccountSE"]
    CELAccountSE <|-- CELAccountBalanceChangedInternalSE : unnamed
    CELAccountSE <|-- DEL_CELAccountBalanceChangeSE : unnamed
    SystemEvent <|-- CELAccountSE : unnamed
    DEL_CELAccountBalanceChangeSE --> Debt_Catalogue : unnamed
```
