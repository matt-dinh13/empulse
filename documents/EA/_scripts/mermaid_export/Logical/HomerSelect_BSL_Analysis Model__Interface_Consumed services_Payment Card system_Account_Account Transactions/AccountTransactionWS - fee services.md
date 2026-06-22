# AccountTransactionWS - fee services

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions
- **Diagram ID**: 149532
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_04_130_Cancel_fees["{MOD}04.130 Cancel fees"]
    class MOD_04_140_Charge_fees["{MOD}04.140 Charge fees"]
    class AccountTransactionWS["AccountTransactionWS"]
    MOD_04_140_Charge_fees ..> AccountTransactionWS : unnamed
    MOD_04_130_Cancel_fees ..> AccountTransactionWS : unnamed
```
