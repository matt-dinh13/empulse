# Contract write-off

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/{DEL}Write-off Contract/Use Case Model
- **Diagram ID**: 160619
- **Elements**: 15
- **Connectors**: 12

```mermaid
graph LR
    unnamed["unnamed"]
    DEL_BSL_user[/"{DEL}BSL user"/]
    ADD_Contract_write_off_via_API(("{ADD}Contract write-off via API"))
    ProxyConnector["ProxyConnector"]
    ProxyConnector["ProxyConnector"]
    DEL_Process_account_closure(("{DEL}Process account closure"))
    ADD_Set_contract_status_to_Written_off_rule["{ADD}Set contract status to Written-off rule"]
    diagram_63033335_3990_485f_9A30_770181BFB08D["$diagram://{63033335-3990-485f-9A30-770181BFB08D}"]
    DEL_BSL[/"{DEL}BSL"/]
    ProcessAccountClosureResult_ProcessAccountClosureResult["ProcessAccountClosureResult : ProcessAccountClosureResult"]
    ADD_Contract_write_off["{ADD}Contract write-off"]
    MOD_Manage_CST_request["{MOD}Manage CST request"]
    ADD_Create_business_event["{ADD}Create business event"]
    Account_management[/"Account management"/]
    MOD_Contract_write_off(("{MOD}Contract write-off"))
    ADD_Contract_write_off_via_API -->|unnamed| ADD_Contract_write_off
    ADD_Contract_write_off_via_API -.->|extend| MOD_Contract_write_off
    diagram_63033335_3990_485f_9A30_770181BFB08D -->|unnamed| ProxyConnector
    ProcessAccountClosureResult_ProcessAccountClosureResult -->|unnamed| ProxyConnector
    MOD_Contract_write_off -->|unnamed| DEL_BSL
    MOD_Contract_write_off -->|unnamed| ADD_Contract_write_off
    MOD_Contract_write_off -->|unnamed| MOD_Manage_CST_request
    MOD_Contract_write_off -->|unnamed| ADD_Create_business_event
    MOD_Contract_write_off -->|unnamed| ADD_Set_contract_status_to_Written_off_rule
    DEL_Process_account_closure -->|unnamed| MOD_Contract_write_off
    DEL_BSL_user --- ADD_Contract_write_off_via_API
    Account_management -->|unnamed| DEL_Process_account_closure
```
