# Bulk operation detail

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/User Interface Model
- **Diagram ID**: 145050
- **Elements**: 26
- **Connectors**: 8

```mermaid
graph TD
    ADD_Download_export_periods["{ADD}Download export periods"]
    n_08_706_Get_list_of_subperiods_for_data_export_bulk_operati["08.706 Get list of subperiods for data export bulk operation"]
    Execution_FromTime_ToTime["Execution FromTime - ToTime"]
    Validation_and_Execution_statistics["Validation and Execution statistics"]
    List_of_parameters_according_to_Operation_type["List of parameters according to Operation type
"]
    Download_errors_only["Download errors only"]
    MOD_08_711_Execute_bulk_operation["{MOD}08.711 Execute bulk operation"]
    Execute["Execute"]
    n_08_705_Get_list_of_contracts_for_bulk_operation["08.705 Get list of contracts for bulk operation"]
    Download_contract_list["Download contract list"]
    Archive["Archive"]
    n_08_715_Archive_bulk_operation["08.715 Archive bulk operation"]
    n_08_713_Resume_bulk_operation["08.713 Resume bulk operation"]
    n_08_712_Pause_bulk_operation["08.712 Pause bulk operation"]
    n_08_702_Get_bulk_operation_detail["08.702 Get bulk operation detail"]
    Resume["Resume"]
    Pause["Pause"]
    Refresh["Refresh"]
    Operation_parameters["Operation parameters"]
    Creation_Date["Creation Date"]
    Created_By["Created By"]
    Operation_Type["Operation Type"]
    Description["Description"]
    Status["Status"]
    Operation["Operation"]
    Bulk_operation_detail["Bulk operation detail"]
    ADD_Download_export_periods -->|unnamed| n_08_706_Get_list_of_subperiods_for_data_export_bulk_operati
    Refresh -->|unnamed| n_08_702_Get_bulk_operation_detail
    Bulk_operation_detail -->|unnamed| n_08_702_Get_bulk_operation_detail
    Pause -->|unnamed| n_08_712_Pause_bulk_operation
    Resume -->|unnamed| n_08_713_Resume_bulk_operation
    Archive -->|unnamed| n_08_715_Archive_bulk_operation
    Download_contract_list -->|unnamed| n_08_705_Get_list_of_contracts_for_bulk_operation
    Execute -->|unnamed| MOD_08_711_Execute_bulk_operation
```
