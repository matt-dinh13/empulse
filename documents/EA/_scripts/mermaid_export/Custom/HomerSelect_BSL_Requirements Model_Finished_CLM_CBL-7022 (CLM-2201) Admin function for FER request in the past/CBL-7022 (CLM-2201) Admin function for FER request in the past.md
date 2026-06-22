# CBL-7022 (CLM-2201) Admin function for FER request in the past

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7022 (CLM-2201) Admin function for FER request in the past
- **Diagram ID**: 119402
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    ADD_03_202_Extend_or_Reactivate_ER_request["{ADD}03.202 Extend or Reactivate ER request"]
    MOD_03_202_Extend_or_Reactivate_ER_request["{MOD}03.202 Extend or Reactivate ER request"]
    ER_request_history_screen_ER_request_history["ER request history screen : ER request history"]
    n_03_200_Show_ER_request_history["03.200 Show ER request history"]
    REQ_1_New_Extend_Reactivate_request_button_for_existing_full["REQ#1 - New 'Extend/Reactivate request' button for existing full early repayment request"]
    ER_request_history_screen_ER_request_history -->|unnamed| MOD_03_202_Extend_or_Reactivate_ER_request
    MOD_03_202_Extend_or_Reactivate_ER_request -->|unnamed| ADD_03_202_Extend_or_Reactivate_ER_request
    n_03_200_Show_ER_request_history -->|unnamed| ER_request_history_screen_ER_request_history
```
