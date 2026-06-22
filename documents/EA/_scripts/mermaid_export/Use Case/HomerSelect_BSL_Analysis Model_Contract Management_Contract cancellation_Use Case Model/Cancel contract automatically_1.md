# Cancel contract automatically

```mermaid
graph TD
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    BSL["BSL"]
    COMA["COMA"]
    Process_ContractCancelled["Process ContractCancelled"]
    Process_ContractCancellationSE["Process ContractCancellationSE"]
    Set_contract_status_to_canceled["Set contract status to canceled"]
    n_01_360_Cancel_contract["01.360 Cancel contract"]
    Cancel_application_credit_account["Cancel application credit account"]
    Get_contracts_by_application_creation_channels["Get contracts by application creation channels"]
    Interface_Provided_CommodityWS["Interface Provided : CommodityWS"]
    Loyalty_account_cancellation_function["Loyalty account cancellation function"]
    Logical_Data_Model_Contract_Commodity["Logical Data Model : Contract Commodity"]
    Logical_data_model_Contract_cancellation_Logical_data_model["Logical data model : Contract cancellation - Logical data model"]
    n_01_332_Cancel_signed_contract_service["01.332 Cancel signed contract service"]
    Cancel_signed_contract_with_invalid_commodity["Cancel signed contract with invalid commodity"]
    Commodity_module["Commodity module"]
    n_01_331_Cancel_signed_contract_with_invalid_commodity["01.331 Cancel signed contract with invalid commodity"]
    CaBus_AM["CaBus-AM"]
    Creation_of_contract_cancellation_request_automatic_cancel["Creation of contract cancellation request - automatic cancel"]
    n_01_445_Cancel_undisbursed_contract["01.445 Cancel undisbursed contract"]
    Time["Time"]
    n_01_670_Cancel_contract_automatically["01.670 Cancel contract automatically"]
    n_01_445_Cancel_undisbursed_contract -->|unnamed| Loyalty_account_cancellation_function
    n_01_360_Cancel_contract -->|only for application| Set_contract_status_to_canceled
    n_01_740_Process_notification_about_credit_account_closure -->|unnamed| Set_contract_status_to_canceled
    n_01_332_Cancel_signed_contract_service -->|unnamed| Set_contract_status_to_canceled
    n_01_445_Cancel_undisbursed_contract -->|unnamed| Set_contract_status_to_canceled
    n_01_670_Cancel_contract_automatically -->|unnamed| n_01_360_Cancel_contract
    n_01_740_Process_notification_about_credit_account_closure -->|only for application| n_01_360_Cancel_contract
    n_01_670_Cancel_contract_automatically -->|{ADD LOR-3636/}| Get_contracts_by_application_creation_channels
    n_01_331_Cancel_signed_contract_with_invalid_commodity -->|unnamed| n_01_332_Cancel_signed_contract_service
    n_01_331_Cancel_signed_contract_with_invalid_commodity -->|unnamed| Cancel_signed_contract_with_invalid_commodity
    Interface_Provided_CommodityWS -->|unnamed| Commodity_module
    Logical_Data_Model_Contract_Commodity -->|unnamed| n_01_331_Cancel_signed_contract_with_invalid_commodity
    Creation_of_contract_cancellation_request_automatic_cancel -->|unnamed| CaBus_AM
    n_01_332_Cancel_signed_contract_service -->|unnamed| Creation_of_contract_cancellation_request_automatic_cancel
    n_01_445_Cancel_undisbursed_contract -->|unnamed| Creation_of_contract_cancellation_request_automatic_cancel
    n_01_670_Cancel_contract_automatically -->|{ADD LOR-7679/}| Cancel_application_credit_account
    Time -->|unnamed| n_01_670_Cancel_contract_automatically
    Time -->|unnamed| n_01_445_Cancel_undisbursed_contract
    Time -->|unnamed| n_01_331_Cancel_signed_contract_with_invalid_commodity
    BSL -->|unnamed| Process_ContractCancelled
    Commodity_module -->|unnamed| n_01_331_Cancel_signed_contract_with_invalid_commodity
    CaBus_AM -->|unnamed| n_01_740_Process_notification_about_credit_account_closure
    Process_ContractCancelled -->|unnamed| Process_ContractCancellationSE
    Process_ContractCancelled -->|unnamed| COMA
```
