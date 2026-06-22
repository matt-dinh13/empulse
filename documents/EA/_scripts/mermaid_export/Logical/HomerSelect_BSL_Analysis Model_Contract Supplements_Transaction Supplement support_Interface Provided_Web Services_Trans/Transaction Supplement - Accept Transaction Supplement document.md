# Transaction Supplement - Accept Transaction Supplement document

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Interface Provided/Web Services/TransactionSupplements/TransactionSupplements_v1
- **Diagram ID**: 152459
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class VerificationData["VerificationData"]
    class n_13_108_Accept_Transaction_Supplement_documents["13.108 Accept Transaction Supplement documents"]
    class AcceptTransactionSupplementDocument["AcceptTransactionSupplementDocument"]
    class TransactionSupplements["TransactionSupplements"]
    TransactionSupplements ..> n_13_108_Accept_Transaction_Supplement_documents : unnamed
    TransactionSupplements --> AcceptTransactionSupplementDocument : unnamed
    AcceptTransactionSupplementDocument --> VerificationData : unnamed
```
