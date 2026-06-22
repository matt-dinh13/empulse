# Transaction Supplement - Update Transaction Supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1
- **Diagram ID**: 152462
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class MoneyType["MoneyType"]
    class RefundTransactionSupplement["RefundTransactionSupplement"]
    class n_13_112_Refund_Transaction_Supplement["13.112 Refund Transaction Supplement"]
    class TransactionSupplements["TransactionSupplements"]
    unnamed --> RefundTransactionSupplement : unnamed
    TransactionSupplements ..> n_13_112_Refund_Transaction_Supplement : unnamed
    TransactionSupplements --> RefundTransactionSupplement : unnamed
```
