# Contracts finishing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Contract Finishing/Use Case Model
- **Diagram ID**: 163119
- **Elements**: 12
- **Connectors**: 9

```mermaid
graph LR
    MOD_Manage_CST_request["{MOD}Manage CST request"]
    ProxyConnector["ProxyConnector"]
    AccountBalanceChangeRequest_ADD_AccountBalanceChangeRequest["AccountBalanceChangeRequest : {ADD}AccountBalanceChangeRequest"]
    ProxyConnector["ProxyConnector"]
    ContractChangedEvent_ContractChangedEvent["ContractChangedEvent : ContractChangedEvent"]
    BSL[/"BSL"/]
    ADD_Contracts_finish["{ADD}Contracts finish"]
    Debt_catalogue[/"Debt catalogue"/]
    Finish_Contract_based_on_Account_Balance_notification(("Finish Contract based on Account Balance notification"))
    Set_contract_status_to_Finished_rule["Set contract status to Finished rule"]
    ALG_Contract_finishing_reason["ALG_Contract finishing reason"]
    Tracking_changes_in_Contract_Registration_Queue["Tracking changes in Contract Registration Queue"]
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| Tracking_changes_in_Contract_Registration_Queue
    Set_contract_status_to_Finished_rule -->|unnamed| ALG_Contract_finishing_reason
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| Set_contract_status_to_Finished_rule
    Debt_catalogue --- Finish_Contract_based_on_Account_Balance_notification
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| ADD_Contracts_finish
    Finish_Contract_based_on_Account_Balance_notification --- BSL
    ContractChangedEvent_ContractChangedEvent -->|unnamed| ProxyConnector
    ProxyConnector -->|unnamed| AccountBalanceChangeRequest_ADD_AccountBalanceChangeRequest
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| MOD_Manage_CST_request
```
