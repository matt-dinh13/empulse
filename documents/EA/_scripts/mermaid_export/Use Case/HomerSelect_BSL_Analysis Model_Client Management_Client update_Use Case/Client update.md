# Client update

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client update/Use Case
- **Diagram ID**: 164404
- **Elements**: 14
- **Connectors**: 14

```mermaid
graph LR
    REM[/"REM"/]
    MOD_06_051_Process_customers_notification_message(("{MOD}06.051 Process customers notification message"))
    Process_ContractRegisteredSE_CLM(("Process ContractRegisteredSE [CLM]"))
    ADD_Fill_DMS_File_attributes_in_update_customer_request["{ADD}Fill DMS File attributes in update customer request"]
    MOD_Sign_contract_finalization["{MOD}Sign contract finalization"]
    n_06_021_Update_client_data_from_contract(("06.021 Update client data from contract"))
    MOD_01_187_Sign_contract(("{MOD}01.187 Sign contract"))
    UseCase_Model_Contract_signing["UseCase Model : Contract signing"]
    BSL_to_CIF_mapping["BSL-to-CIF mapping"]
    n_01_450_Receive_evaluation_result(("01.450 Receive evaluation result"))
    UseCase_Model_Receive_evaluation_results["UseCase Model : Receive evaluation results"]
    UseCase_Model_Contract_registration["UseCase Model : Contract registration"]
    CIF[/"CIF"/]
    n_06_020_Update_Client_Data(("06.020 Update Client Data"))
    n_01_450_Receive_evaluation_result -->|unnamed| n_06_020_Update_Client_Data
    MOD_06_051_Process_customers_notification_message --> n_06_020_Update_Client_Data
    n_06_020_Update_Client_Data --- CIF
    UseCase_Model_Receive_evaluation_results -->|unnamed| n_01_450_Receive_evaluation_result
    n_06_020_Update_Client_Data -->|unnamed| BSL_to_CIF_mapping
    n_06_021_Update_client_data_from_contract -->|unnamed| BSL_to_CIF_mapping
    UseCase_Model_Contract_signing -->|unnamed| MOD_01_187_Sign_contract
    MOD_01_187_Sign_contract -->|unnamed| MOD_Sign_contract_finalization
    n_06_021_Update_client_data_from_contract -->|unnamed| ADD_Fill_DMS_File_attributes_in_update_customer_request
    UseCase_Model_Contract_registration -->|unnamed| Process_ContractRegisteredSE_CLM
    MOD_Sign_contract_finalization -->|unnamed| n_06_021_Update_client_data_from_contract
    REM --> Process_ContractRegisteredSE_CLM
    CIF --- n_06_021_Update_client_data_from_contract
    CIF --> MOD_06_051_Process_customers_notification_message
```
