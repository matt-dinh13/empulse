# Transaction Supplement - Cancel Transaction Supplement v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v2
- **Diagram ID**: 152889
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class CancelTransactionSupplement["CancelTransactionSupplement"]
    class n_13_104_Cancel_Transaction_Supplement_service["13.104 Cancel Transaction Supplement service"]
    class TransactionSupplement_v2["TransactionSupplement_v2"]
    class TransactionSupplements_v2["TransactionSupplements_v2"]
    TransactionSupplements_v2 --> TransactionSupplement_v2 : unnamed
    TransactionSupplements_v2 --> TransactionSupplement_v2 : unnamed
    TransactionSupplements_v2 ..> n_13_104_Cancel_Transaction_Supplement_service : unnamed
    TransactionSupplements_v2 --> CancelTransactionSupplement : unnamed
```
