# Transaction Supplement - Create Transaction Supplement

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1
- **Diagram ID**: 152458
- **Elements**: 11
- **Connectors**: 6

```mermaid
classDiagram
    class ContractSupplementStatusTransition["ContractSupplementStatusTransition"]
    class CustomData["CustomData"]
    class RequestSourceId["RequestSourceId"]
    class SupplementDocument["SupplementDocument"]
    class RelatedSubject["RelatedSubject"]
    class RelatedSubject["RelatedSubject"]
    class ContractSupplement["ContractSupplement"]
    class MOD_13_100_Create_Transaction_Supplement_service["{MOD}13.100 Create Transaction Supplement service"]
    class TransactionSupplement["TransactionSupplement"]
    class CreateTransactionSupplement["CreateTransactionSupplement"]
    class TransactionSupplements["TransactionSupplements"]
    TransactionSupplements ..> MOD_13_100_Create_Transaction_Supplement_service : unnamed
    TransactionSupplements --> CreateTransactionSupplement : unnamed
    TransactionSupplements --> TransactionSupplement : unnamed
    ContractSupplement --> RelatedSubject : unnamed
    TransactionSupplement --> ContractSupplement : unnamed
    CreateTransactionSupplement --> RelatedSubject : unnamed
```
