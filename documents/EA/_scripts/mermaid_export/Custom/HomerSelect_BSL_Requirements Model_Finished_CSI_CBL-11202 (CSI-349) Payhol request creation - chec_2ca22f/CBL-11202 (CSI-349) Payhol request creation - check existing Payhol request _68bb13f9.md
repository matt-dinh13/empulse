# CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future
- **Diagram ID**: 134979
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    MOD_08_362_Process_payment_holiday_request["{MOD}08.362 Process payment holiday request"]
    n_08_355_Create_request_for_payment_holiday["08.355 Create request for payment holiday"]
    n_08_354_Show_parameters_of_payment_holiday["08.354 Show parameters of payment holiday"]
    n_01_797_Create_ContractPayholRequest_service["01.797 Create ContractPayholRequest service"]
    n_01_796_Get_ContractPayholRequest_preview_service["01.796 Get ContractPayholRequest preview service"]
    MOD_Determine_first_installment_for_deferral["{MOD}Determine first installment for deferral"]
    REQ_1_Payhol_request_creation_check_existing_Payhol_request_["REQ#1 - Payhol request creation - check existing Payhol request in the future"]
    n_08_354_Show_parameters_of_payment_holiday -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_08_355_Create_request_for_payment_holiday -->|unnamed| MOD_Determine_first_installment_for_deferral
    MOD_08_362_Process_payment_holiday_request -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_01_796_Get_ContractPayholRequest_preview_service -->|unnamed| MOD_Determine_first_installment_for_deferral
    n_01_797_Create_ContractPayholRequest_service -->|unnamed| MOD_Determine_first_installment_for_deferral
```
