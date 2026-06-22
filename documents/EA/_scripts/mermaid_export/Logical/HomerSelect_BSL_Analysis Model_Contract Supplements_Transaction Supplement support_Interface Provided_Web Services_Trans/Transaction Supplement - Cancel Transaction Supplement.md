# Transaction Supplement - Cancel Transaction Supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1
- **Diagram ID**: 152461
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class TransactionSupplement["TransactionSupplement"]
    class CancelTransactionSupplement["CancelTransactionSupplement"]
    class n_13_104_Cancel_Transaction_Supplement_service["13.104 Cancel Transaction Supplement service"]
    class TransactionSupplements["TransactionSupplements"]
    TransactionSupplements --> CancelTransactionSupplement : unnamed
    TransactionSupplements ..> n_13_104_Cancel_Transaction_Supplement_service : unnamed
    TransactionSupplements ..> TransactionSupplement : unnamed
```
