# CBL-23420 (CLM-6038) Contract cancellation API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-23420 (CLM-6038) Contract cancellation API
- **Diagram ID**: 156887
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    ADD_Set_contract_status_to_Cancelled_rule_COMA["{ADD}Set contract status to Cancelled rule (COMA)"]
    ADD_Creation_of_contract_cancellation_request_COMA["{ADD}Creation of contract cancellation request (COMA)"]
    ADD_Check_for_active_incoming_payments_COMA["{ADD}Check for active incoming payments (COMA)"]
    ADD_Contract_cancel_via_API["{ADD}Contract cancel via API"]
    ADD_Contract_cancel["{ADD}Contract cancel"]
    Contract_cancellation_API["Contract cancellation API"]
    ADD_Contract_cancel_via_API -->|unnamed| ADD_Check_for_active_incoming_payments_COMA
    ADD_Contract_cancel_via_API -->|unnamed| ADD_Creation_of_contract_cancellation_request_COMA
    ADD_Contract_cancel_via_API -->|unnamed| ADD_Set_contract_status_to_Cancelled_rule_COMA
    ADD_Contract_cancel_via_API -->|unnamed| ADD_Contract_cancel
```
