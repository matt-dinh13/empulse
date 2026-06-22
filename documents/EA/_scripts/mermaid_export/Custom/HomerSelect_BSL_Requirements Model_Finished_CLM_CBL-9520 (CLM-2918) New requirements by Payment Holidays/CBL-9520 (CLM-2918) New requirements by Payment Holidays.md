# CBL-9520 (CLM-2918) New requirements by Payment Holidays

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9520 (CLM-2918) New requirements by Payment Holidays
- **Diagram ID**: 144776
- **Elements**: 8
- **Connectors**: 5

```mermaid
graph TD
    n_01_797_Create_ContractPayholRequest_service["01.797 Create ContractPayholRequest service"]
    n_01_796_Get_ContractPayholRequest_preview_service["01.796 Get ContractPayholRequest preview service"]
    Contract_Service_Parameter_Type["Contract Service Parameter Type"]
    n_08_354_Show_parameters_of_payment_holiday["08.354 Show parameters of payment holiday"]
    MOD_08_362_Process_payment_holiday_request["{MOD}08.362 Process payment holiday request"]
    n_08_355_Create_request_for_payment_holiday["08.355 Create request for payment holiday"]
    MOD_Determine_first_installment_for_deferral["{MOD}Determine first installment for deferral"]
    REQ_1_Setting_and_using_of_minimal_due_date_of_deferred_inst["REQ#1 - Setting and using of minimal due date of deferred installment for PAYHOL"]
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_08_355_Create_request_for_payment_holiday -->|unnamed| MOD_Determine_first_installment_for_deferral
    MOD_08_362_Process_payment_holiday_request -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_01_796_Get_ContractPayholRequest_preview_service -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_01_797_Create_ContractPayholRequest_service -->|unnamed| MOD_Determine_first_installment_for_deferral
```
