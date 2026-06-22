# Authorize Contract Supplement Transactions - Use Case Model

```mermaid
graph TD
    Authorize_Contract_Supplement_Transactions_Authorize_Contrac["Authorize Contract Supplement Transactions : Authorize Contract Supplement Transactions"]
    Change_status_of_Contract_Supplement_SUP["Change status of Contract Supplement (SUP)"]
    External_system["External system"]
    Cancel_authorized_transactions_in_Transaction_Supplement_SUP["Cancel authorized transactions in Transaction Supplement (SUP)"]
    ADD_13_025_Authorize_transactions_in_Contract_Supplement["{ADD}13.025 Authorize transactions in Contract Supplement"]
    Authorize_Contract_Supplement_Transactions_Authorize_Contrac -->|unnamed| ADD_13_025_Authorize_transactions_in_Contract_Supplement
    External_system -->|unnamed| ADD_13_025_Authorize_transactions_in_Contract_Supplement
    ADD_13_025_Authorize_transactions_in_Contract_Supplement -->|unnamed| Cancel_authorized_transactions_in_Transaction_Supplement_SUP
    ADD_13_025_Authorize_transactions_in_Contract_Supplement -->|unnamed| Change_status_of_Contract_Supplement_SUP
```
