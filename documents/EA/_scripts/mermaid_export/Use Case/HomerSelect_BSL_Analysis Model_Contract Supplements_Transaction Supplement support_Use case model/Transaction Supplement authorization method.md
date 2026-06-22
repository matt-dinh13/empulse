# Transaction Supplement authorization method

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Transaction Supplement support/Use case model
- **Diagram ID**: 164665
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph LR
    Cancel_authorized_transactions_in_Transaction_Supplement["Cancel authorized transactions in Transaction Supplement"]
    Change_status_of_Contract_Supplement["Change status of Contract Supplement"]
    CaBus_AM[/"CaBus-AM"/]
    TransactionSupplements_TransactionSupplements_Authorize_tran["TransactionSupplements : TransactionSupplements - Authorize transactions in Transaction Supplement"]
    External_system[/"External system"/]
    n_13_118_Authorize_transactions_in_Transaction_Supplement(("13.118 Authorize transactions in Transaction Supplement"))
    n_13_118_Authorize_transactions_in_Transaction_Supplement -->|unnamed| Cancel_authorized_transactions_in_Transaction_Supplement
    n_13_118_Authorize_transactions_in_Transaction_Supplement -->|unnamed| Change_status_of_Contract_Supplement
    External_system --> n_13_118_Authorize_transactions_in_Transaction_Supplement
    TransactionSupplements_TransactionSupplements_Authorize_tran -->|unnamed| n_13_118_Authorize_transactions_in_Transaction_Supplement
    CaBus_AM --> n_13_118_Authorize_transactions_in_Transaction_Supplement
```
