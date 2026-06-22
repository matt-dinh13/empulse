# CEL Account System Events

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Use case model/CEL Account System Events
- **Diagram ID**: 163553
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph LR
    DEL_Process_CELAccountBalanceChangedSE(("{DEL}Process CELAccountBalanceChangedSE"))
    ADD_Process_CELAccountBalanceChangedInternalSE(("{ADD}Process CELAccountBalanceChangedInternalSE"))
    DEL_CELAccountBalanceChangeSE["{DEL}CELAccountBalanceChangeSE"]
    CELAccountBalanceChangedInternalSE["CELAccountBalanceChangedInternalSE"]
    CELAccountBalanceChangedInternalSE -->|unnamed| ADD_Process_CELAccountBalanceChangedInternalSE
    DEL_CELAccountBalanceChangeSE -->|unnamed| DEL_Process_CELAccountBalanceChangedSE
```
