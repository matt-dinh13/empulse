# Manage contract commodities

```mermaid
graph TD
    User_Interface_Model_Edit_commodity["User Interface Model : Edit commodity"]
    ADD_01_650_Edit_Contract_Commodity_CLM["{ADD}01.650 Edit Contract Commodity [CLM]"]
    Get_validation_parameters_for_commodity_data_update["Get validation parameters for commodity data update"]
    Tab_Commodity_Tab_Commodity["Tab-Commodity : Tab-Commodity"]
    Get_event_type_for_commodity_data_update["Get event type for commodity data update"]
    Access_control_to_edit_commodity_fields["Access control to edit commodity fields"]
    Get_update_mode_for_commodity_data_update["Get update mode for commodity data update"]
    MOD_01_655_Validate_contract_Commodity["{MOD}01.655 Validate contract Commodity"]
    Unique_chassis_and_engine_numbers["Unique chassis and engine numbers"]
    Access_control_to_Commodity_by_Contract_status["Access control to Commodity by Contract status"]
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    n_01_650_Edit_Contract_Commodity["01.650 Edit Contract Commodity"]
    User["User"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    Tab_Commodity_Tab_Commodity -->|unnamed| MOD_01_655_Validate_contract_Commodity
    n_01_650_Edit_Contract_Commodity -->|{ADD LOR-3603/}| Get_validation_parameters_for_commodity_data_update
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Get_validation_parameters_for_commodity_data_update
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Get_event_type_for_commodity_data_update
    n_01_650_Edit_Contract_Commodity -->|{DEL LOR-3603/}| Get_event_type_for_commodity_data_update
    Get_validation_parameters_for_commodity_data_update -->|{ADD LOR-3603/}| Get_event_type_for_commodity_data_update
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| User_Interface_Model_Edit_commodity
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Access_control_to_edit_commodity_fields
    Get_update_mode_for_commodity_data_update -->|unnamed| Access_control_to_edit_commodity_fields
    n_01_650_Edit_Contract_Commodity -->|unnamed| Access_control_to_edit_commodity_fields
    n_01_650_Edit_Contract_Commodity -->|unnamed| Get_update_mode_for_commodity_data_update
    n_01_650_Edit_Contract_Commodity -->|unnamed| Unique_chassis_and_engine_numbers
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Unique_chassis_and_engine_numbers
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Access_control_to_Commodity_by_Contract_status
    n_01_650_Edit_Contract_Commodity -->|unnamed| Access_control_to_Commodity_by_Contract_status
    n_01_650_Edit_Contract_Commodity -->|unnamed| Access_control_to_Contract_by_Salesroom
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Access_control_to_Contract_by_Salesroom
    Tab_Commodity_Tab_Commodity -->|unnamed| n_01_650_Edit_Contract_Commodity
    ADD_01_650_Edit_Contract_Commodity_CLM -->|unnamed| Get_update_mode_for_commodity_data_update
    User -->|unnamed| n_01_650_Edit_Contract_Commodity
    User -->|unnamed| MOD_01_210_Show_contract_detail
    User -->|unnamed| MOD_01_655_Validate_contract_Commodity
    User -->|unnamed| ADD_01_650_Edit_Contract_Commodity_CLM
```
