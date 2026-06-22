# Contract finishing automatically

```mermaid
graph TD
    Create_small_uderpayment_request["Create small uderpayment request"]
    MOD_01_384_Finalize_contract_consolidation["{MOD}01.384 Finalize contract consolidation"]
    ADD_08_605_Update_CEL_reward_payment_channel_automatically["{ADD}08.605 Update CEL reward payment channel automatically"]
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    Use_Case_Model_Contracts_finishing["Use Case Model : Contracts finishing"]
    MOD_Manage_CST_request["{MOD}Manage CST request"]
    Set_contract_status_to_Finished_rule["Set contract status to Finished rule"]
    ProxyConnector["ProxyConnector"]
    AccountBalanceChangeRequest_ADD_AccountBalanceChangeRequest["AccountBalanceChangeRequest : {ADD}AccountBalanceChangeRequest"]
    ProxyConnector["ProxyConnector"]
    ContractChangedEvent_ContractChangedEvent["ContractChangedEvent : ContractChangedEvent"]
    BSL["BSL"]
    Debt_catalogue["Debt catalogue"]
    Finish_Contract_based_on_Account_Balance_notification["Finish Contract based on Account Balance notification"]
    MOD_Process_ContractFinishingAutomaticallySE_CSI["{MOD}Process ContractFinishingAutomaticallySE [CSI]"]
    MOD_Process_ContractFinishingAutomaticallySE_CLM["{MOD}Process ContractFinishingAutomaticallySE [CLM]"]
    ADD_Process_ContractFinishingAutomaticallySE_IS["{ADD}Process ContractFinishingAutomaticallySE [IS]"]
    Process_ContractFinished["Process ContractFinished"]
    MOD_11_120_Terminate_insurance_contract["{MOD}11.120 Terminate insurance contract"]
    COMA["COMA"]
    External_Reference["External Reference"]
    Debt_catalogue -->|unnamed| Finish_Contract_based_on_Account_Balance_notification
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| MOD_Manage_CST_request
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| Set_contract_status_to_Finished_rule
    Finish_Contract_based_on_Account_Balance_notification -->|unnamed| BSL
    ContractChangedEvent_ContractChangedEvent -->|unnamed| ProxyConnector
    ProxyConnector -->|unnamed| AccountBalanceChangeRequest_ADD_AccountBalanceChangeRequest
```
