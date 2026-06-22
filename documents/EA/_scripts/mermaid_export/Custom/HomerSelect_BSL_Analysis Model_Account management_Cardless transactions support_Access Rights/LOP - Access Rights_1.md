# LOP - Access Rights

```mermaid
graph TD
    n_12_632_Create_request_for_POS_transaction_without_card["12.632 Create request for POS transaction without card"]
    ADD_12_632_Create_request_for_POS_transaction_without_card["{ADD}12.632 Create request for POS transaction without card"]
    n_12_630_Create_request_for_transaction_without_card["12.630 Create request for transaction without card"]
    n_12_630_Create_request_for_CASH_transaction_without_card["12.630 Create request for CASH transaction without card"]
    n_12_632_Create_request_for_POS_transaction_without_card -->|unnamed| ADD_12_632_Create_request_for_POS_transaction_without_card
    n_12_630_Create_request_for_CASH_transaction_without_card -->|unnamed| n_12_630_Create_request_for_transaction_without_card
```
