# ER request history

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/User Interface/ER request history screen
- **Diagram ID**: 164354
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    n_08_359_Print_service_request_document["08.359 Print service request document"]
    MOD_03_202_Extend_or_Reactivate_ER_request["{MOD}03.202 Extend or Reactivate ER request"]
    HLINE["HLINE"]
    Cancel["Cancel"]
    Contract_detail_Tab_Services["Contract detail - Tab Services"]
    Client_s_full_name["Client's full name"]
    n_03_200_Show_ER_request_history["03.200 Show ER request history"]
    ER_request_history["ER request history"]
    ER_requests_history["ER requests history"]
    Contract_detail_Tab_Services -->|unnamed| ER_requests_history
    ER_requests_history -->|unnamed| n_03_200_Show_ER_request_history
    ER_request_history -->|unnamed| MOD_03_202_Extend_or_Reactivate_ER_request
```
