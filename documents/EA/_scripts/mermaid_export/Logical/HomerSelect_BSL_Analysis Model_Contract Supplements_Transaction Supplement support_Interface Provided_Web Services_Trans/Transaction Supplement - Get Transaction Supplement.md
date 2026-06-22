# Transaction Supplement - Get Transaction Supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1
- **Diagram ID**: 152460
- **Elements**: 9
- **Connectors**: 4

```mermaid
classDiagram
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class CustomData["CustomData"]
    class RelatedSubject["RelatedSubject"]
    class SupplementDocument["SupplementDocument"]
    class n_13_106_Get_Transaction_Supplement_detail_service["13.106 Get Transaction Supplement detail service"]
    class ContractSupplement["ContractSupplement"]
    class TransactionSupplement["TransactionSupplement"]
    class GetTransactionSupplement["GetTransactionSupplement"]
    class TransactionSupplements["TransactionSupplements"]
    TransactionSupplements --> GetTransactionSupplement : unnamed
    TransactionSupplements ..> n_13_106_Get_Transaction_Supplement_detail_service : unnamed
    TransactionSupplements --> TransactionSupplement : unnamed
    TransactionSupplement --> ContractSupplement : unnamed
```
