# Transaction Supplement rejection - Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model
- **Diagram ID**: 164675
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    TransactionSupplements_v2_TransactionSupplements_Reject_Tran["TransactionSupplements_v2 : TransactionSupplements - Reject Transaction Suplement v2"]
    External_system[/"External system"/]
    n_13_124_Reject_Transaction_supplement_service(("13.124 Reject Transaction supplement service"))
    n_13_124_Reject_Transaction_supplement_service -->|unnamed| Change_status_of_Contract_Supplement
    External_system --> n_13_124_Reject_Transaction_supplement_service
    TransactionSupplements_v2_TransactionSupplements_Reject_Tran -->|unnamed| n_13_124_Reject_Transaction_supplement_service
```
