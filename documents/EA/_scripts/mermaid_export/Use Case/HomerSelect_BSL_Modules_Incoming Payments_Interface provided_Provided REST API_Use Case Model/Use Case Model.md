# Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Provided REST API/Use Case Model
- **Diagram ID**: 163683
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    External_System[/"External System"/]
    ADD_Search_payments_validation["{ADD}Search payments - validation"]
    ADD_searchPayments(("{ADD}searchPayments"))
    getActivePayments(("getActivePayments"))
    n_05_050_Show_incoming_payment_detail["05.050 Show incoming payment detail"]
    ADD_searchPayments -->|unnamed| ADD_Search_payments_validation
    ADD_searchPayments -->|unnamed| n_05_050_Show_incoming_payment_detail
    External_System --- getActivePayments
    External_System --- ADD_searchPayments
```
