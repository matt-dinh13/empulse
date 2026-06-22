# CSI-2226 Terminate LoanService on Account Closure notification

```mermaid
graph TD
    MOD_08_091_Terminate_Contract_Service_common["{MOD}08.091 Terminate Contract Service common"]
    MOD_08_121_Terminate_contract_insurance_common["{MOD}08.121 Terminate contract insurance common"]
    MOD_Process_ContractFinishingAutomaticallySE_CSI["{MOD}Process ContractFinishingAutomaticallySE [CSI]"]
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    CaBus_AM["CaBus-AM"]
    n_08_295_Process_Account_Closure_notifications["08.295 Process Account Closure notifications"]
    CaBus_AM -->|unnamed| n_01_740_Process_notification_about_credit_account_closure
    CaBus_AM -->|unnamed| n_08_295_Process_Account_Closure_notifications
```
