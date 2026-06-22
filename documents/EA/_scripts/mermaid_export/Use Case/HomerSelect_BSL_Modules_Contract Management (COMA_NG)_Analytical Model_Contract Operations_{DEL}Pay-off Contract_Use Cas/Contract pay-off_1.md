# Contract pay-off

```mermaid
graph TD
    el_1841719["Note"]
    DEL_BSL_user["{DEL}BSL user"]
    ADD_Contract_pay_off_via_API["{ADD}Contract pay-off via API"]
    ProxyConnector["ProxyConnector"]
    ProxyConnector["ProxyConnector"]
    DEL_Process_account_closure["{DEL}Process account closure"]
    Set_contract_status_to_paid_off_rule["Set contract status to paid-off rule"]
    ProcessAccountClosureResult_ProcessAccountClosureResult["ProcessAccountClosureResult : ProcessAccountClosureResult"]
    ContractPaidOff_ContractPaidOff["ContractPaidOff : ContractPaidOff"]
    ADD_Contract_pay_off["{ADD}Contract pay-off"]
    MOD_Contract_pay_off["{MOD}Contract pay-off"]
    DEL_BSL["{DEL}BSL"]
    MOD_Manage_CST_request["{MOD}Manage CST request"]
    ADD_Create_business_event["{ADD}Create business event"]
    Account_management["Account management"]
    ADD_Contract_pay_off_via_API -->|unnamed| ADD_Contract_pay_off
    ADD_Contract_pay_off_via_API -->|unnamed| MOD_Contract_pay_off
    ProcessAccountClosureResult_ProcessAccountClosureResult -->|unnamed| ProxyConnector
    ContractPaidOff_ContractPaidOff -->|unnamed| ProxyConnector
    MOD_Contract_pay_off -->|unnamed| Set_contract_status_to_paid_off_rule
    MOD_Contract_pay_off -->|unnamed| ADD_Contract_pay_off
    MOD_Contract_pay_off -->|unnamed| ADD_Create_business_event
    MOD_Contract_pay_off -->|unnamed| MOD_Manage_CST_request
    MOD_Contract_pay_off -->|unnamed| DEL_BSL
    DEL_Process_account_closure -->|unnamed| MOD_Contract_pay_off
    DEL_BSL_user -->|unnamed| ADD_Contract_pay_off_via_API
    Account_management -->|unnamed| DEL_Process_account_closure
```
