# Charging request

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Use Case
- **Diagram ID**: 162151
- **Elements**: 16
- **Connectors**: 15

```mermaid
graph LR
    ADD_Calculate_tariff_item_amount["{ADD} Calculate tariff item amount"]
    MOD_Charging_request_content_validation["{MOD}Charging request content validation"]
    Add_charging_requests_AddChargingRequestsWS["Add charging requests : AddChargingRequestsWS"]
    External_system[/"External system"/]
    n_04_123_Automatic_add_charging_requests(("04.123 Automatic add charging requests"))
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    ChargingRequests_ChargingRequests["ChargingRequests : ChargingRequests"]
    Same_file_content_not_imported_VAL_0709["Same file content not imported (VAL_0709)"]
    Same_file_name_not_imported_VAL_0708["Same file name not imported (VAL_0708)"]
    Structure_of_success_report_for_charging_requests["Structure of success report for charging requests"]
    Structure_of_error_report_for_charging_requests["Structure of error report for charging requests"]
    Select_file_dialog_Select_file_dialog["Select file dialog : Select file dialog"]
    MOD_03_080_Add_installment(("{MOD}03.080 Add installment"))
    n_04_110_Process_charging_requests(("04.110 Process charging requests"))
    n_04_100_Add_charging_requests(("04.100 Add charging requests"))
    User[/"User"/]
    n_04_110_Process_charging_requests -->|unnamed| Structure_of_success_report_for_charging_requests
    n_04_123_Automatic_add_charging_requests -->|unnamed| Add_charging_requests_AddChargingRequestsWS
    n_04_123_Automatic_add_charging_requests -->|unnamed| n_04_110_Process_charging_requests
    n_04_110_Process_charging_requests -.->|include| MOD_03_080_Add_installment
    n_04_110_Process_charging_requests -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    n_04_110_Process_charging_requests -->|unnamed| ADD_Calculate_tariff_item_amount
    n_04_110_Process_charging_requests -->|unnamed| Structure_of_error_report_for_charging_requests
    n_04_100_Add_charging_requests -->|unnamed| Select_file_dialog_Select_file_dialog
    n_04_100_Add_charging_requests -->|unnamed| ChargingRequests_ChargingRequests
    n_04_100_Add_charging_requests -->|unnamed| Same_file_name_not_imported_VAL_0708
    n_04_100_Add_charging_requests -->|unnamed| Same_file_content_not_imported_VAL_0709
    n_04_100_Add_charging_requests --> n_04_110_Process_charging_requests
    n_04_110_Process_charging_requests -->|unnamed| MOD_Charging_request_content_validation
    External_system --- n_04_123_Automatic_add_charging_requests
    User --> n_04_100_Add_charging_requests
```
