# CLM-4405 - REL Write-off - COMA - AccountClosure processing

```mermaid
graph TD
    ContractChangedEvent_ContractChangedEvent["ContractChangedEvent : ContractChangedEvent"]
    BSL["BSL"]
    ProcessAccountClosureResult_ProcessAccountClosureResult["ProcessAccountClosureResult : ProcessAccountClosureResult"]
    ADD_Contract_write_off["{ADD}Contract write-off"]
    MOD_Manage_CST_request["{MOD}Manage CST request"]
    ADD_Create_business_event["{ADD}Create business event"]
    Account_management["Account management"]
    MOD_Contract_write_off["{MOD}Contract write-off"]
    CLM_4405_REL_Write_off_COMA_AccountClosure_processing["CLM-4405 REL Write-off - COMA - AccountClosure processing"]
    MOD_Contract_write_off -->|unnamed| BSL
    MOD_Contract_write_off -->|unnamed| MOD_Manage_CST_request
    MOD_Contract_write_off -->|unnamed| ADD_Contract_write_off
    MOD_Contract_write_off -->|unnamed| ADD_Create_business_event
```
