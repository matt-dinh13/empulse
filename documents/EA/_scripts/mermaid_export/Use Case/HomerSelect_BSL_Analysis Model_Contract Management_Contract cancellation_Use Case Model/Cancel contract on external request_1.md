# Cancel contract on external request

```mermaid
graph TD
    Use_Case_Model_Cancel_contract_after_sign["Use Case Model : Cancel contract after sign"]
    BSL["BSL"]
    COMA["COMA"]
    Process_ContractCancelled["Process ContractCancelled"]
    Process_ContractCancellationSE["Process ContractCancellationSE"]
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    Reactivate_bonus_services_on_contract["Reactivate bonus services on contract"]
    CaBus_AM["CaBus-AM"]
    Creation_of_contract_cancellation_request_automatic_cancel["Creation of contract cancellation request - automatic cancel"]
    n_01_333_Cancel_active_contract_service["01.333 Cancel active contract service"]
    ContractOperationWS_ContractOperationWS_Cancel_contract["ContractOperationWS : ContractOperationWS - Cancel contract"]
    External_system["External system"]
    n_01_332_Cancel_signed_contract_service["01.332 Cancel signed contract service"]
    Set_contract_status_to_canceled["Set contract status to canceled"]
    n_01_360_Cancel_contract["01.360 Cancel contract"]
    ContractOperationWS_ContractOperationWS_Cancel_contract -->|unnamed| n_01_332_Cancel_signed_contract_service
    n_01_360_Cancel_contract -->|unnamed| Reactivate_bonus_services_on_contract
    Creation_of_contract_cancellation_request_automatic_cancel -->|unnamed| CaBus_AM
    n_01_332_Cancel_signed_contract_service -->|unnamed| Creation_of_contract_cancellation_request_automatic_cancel
    n_01_333_Cancel_active_contract_service -->|unnamed| Creation_of_contract_cancellation_request_automatic_cancel
    n_01_360_Cancel_contract -->|only for application| Set_contract_status_to_canceled
    n_01_333_Cancel_active_contract_service -->|unnamed| Set_contract_status_to_canceled
    n_01_332_Cancel_signed_contract_service -->|unnamed| Set_contract_status_to_canceled
    n_01_740_Process_notification_about_credit_account_closure -->|unnamed| Set_contract_status_to_canceled
    n_01_740_Process_notification_about_credit_account_closure -->|only for application| n_01_360_Cancel_contract
    External_system -->|unnamed| n_01_332_Cancel_signed_contract_service
    External_system -->|unnamed| n_01_333_Cancel_active_contract_service
    BSL -->|unnamed| Process_ContractCancelled
    CaBus_AM -->|unnamed| n_01_740_Process_notification_about_credit_account_closure
    Process_ContractCancelled -->|unnamed| Process_ContractCancellationSE
    Process_ContractCancelled -->|unnamed| COMA
```
