# Processing Account Closure notification - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Process account closure/Use Case Model
- **Diagram ID**: 163126
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Set_contract_status_to_Finished_rule_COMA["Set contract status to Finished rule (COMA)"]
    Account_management[/"Account management"/]
    ADD_Process_Account_Closure_notification(("{ADD}Process Account Closure notification"))
    Set_contract_status_to_Cancelled_rule_COMA["Set contract status to Cancelled rule (COMA)"]
    ADD_Process_Account_Closure_notification -->|unnamed| Set_contract_status_to_Finished_rule_COMA
    ADD_Process_Account_Closure_notification -->|unnamed| Set_contract_status_to_Cancelled_rule_COMA
    Account_management --- ADD_Process_Account_Closure_notification
```
