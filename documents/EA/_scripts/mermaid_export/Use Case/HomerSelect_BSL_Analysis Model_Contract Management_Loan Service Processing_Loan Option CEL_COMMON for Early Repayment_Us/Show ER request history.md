# Show ER request history

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Use Case model
- **Diagram ID**: 164165
- **Elements**: 5
- **Connectors**: 5

```mermaid
graph LR
    n_08_359_Print_service_request_document(("08.359 Print service request document"))
    MOD_03_202_Extend_or_Reactivate_ER_request(("{MOD}03.202 Extend or Reactivate ER request"))
    ER_request_history_screen_ER_request_history["ER request history screen : ER request history"]
    n_03_200_Show_ER_request_history(("03.200 Show ER request history"))
    User[/"User"/]
    ER_request_history_screen_ER_request_history -->|unnamed| n_03_200_Show_ER_request_history
    ER_request_history_screen_ER_request_history -->|unnamed| MOD_03_202_Extend_or_Reactivate_ER_request
    User --> n_03_200_Show_ER_request_history
    User --> MOD_03_202_Extend_or_Reactivate_ER_request
    User --> n_08_359_Print_service_request_document
```
