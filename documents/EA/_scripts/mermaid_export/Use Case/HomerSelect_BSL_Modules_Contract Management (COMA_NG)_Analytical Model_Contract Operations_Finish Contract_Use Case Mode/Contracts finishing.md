# Contracts finishing

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Finish Contract/Use Case Model
- **Diagram ID**: 163125
- **Elements**: 12
- **Connectors**: 9

```mermaid
graph LR
    MOD_Manage_CST_request["{MOD}Manage CST request"]
    ProxyConnector["ProxyConnector"]
    AccountBalanceChangeRequest_ADD_AccountBalanceChangeRequest["AccountBalanceChangeRequest : {ADD}AccountBalanceChangeRequest"]
    ProxyConnector["ProxyConnector"]
    ContractChangedEvent_ContractChangedEvent["ContractChangedEvent : ContractChangedEvent"]
    DEL_BSL[/"{DEL}BSL"/]
    Contracts_finish["Contracts finish"]
    Debt_catalogue[/"Debt catalogue"/]
    DEL_Contracts_finish(("{DEL}Contracts finish"))
    Set_contract_status_to_Finished_rule_COMA["Set contract status to Finished rule (COMA)"]
    DEL_ALG_Contract_finishing_reason["{DEL}ALG_Contract finishing reason"]
    Tracking_changes_in_Contract_Registration_Queue["Tracking changes in Contract Registration Queue"]
    DEL_Contracts_finish -->|unnamed| Tracking_changes_in_Contract_Registration_Queue
    Set_contract_status_to_Finished_rule_COMA -->|unnamed| DEL_ALG_Contract_finishing_reason
    DEL_Contracts_finish -->|unnamed| Set_contract_status_to_Finished_rule_COMA
    Debt_catalogue --- DEL_Contracts_finish
    DEL_Contracts_finish -->|unnamed| Contracts_finish
    DEL_Contracts_finish --- DEL_BSL
    ContractChangedEvent_ContractChangedEvent -->|unnamed| ProxyConnector
    ProxyConnector -->|unnamed| AccountBalanceChangeRequest_ADD_AccountBalanceChangeRequest
    DEL_Contracts_finish -->|unnamed| MOD_Manage_CST_request
```
