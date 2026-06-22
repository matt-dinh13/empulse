# Pay-off contracts from external system

```mermaid
graph TD
    MOD_03_120_Pay_off_installment_schedule["{MOD}03.120 Pay off installment schedule"]
    Calculate_pay_off_installment_date["Calculate pay-off installment date"]
    ADD_Process_ContractPaidOffSE_IS["{ADD}Process ContractPaidOffSE [IS]"]
    Send_ContractFullInfoRequest["Send ContractFullInfoRequest"]
    MOD_11_120_Terminate_insurance_contract["{MOD}11.120 Terminate insurance contract"]
    COMA["COMA"]
    Loxon["Loxon"]
    Check_for_unprocessed_Pay_off_request_existence["Check for unprocessed Pay-off request existence"]
    UseCase_Model_Pay_off_CEL_contract["UseCase Model : Pay-off CEL contract"]
    el_1878651["Note"]
    Check_pay_off_possibility_algorithm_GUI_RMQ["Check pay-off possibility algorithm (GUI/RMQ)"]
    Process_ContractPaidOff["Process ContractPaidOff"]
    n_01_501_Pay_off_CEL_contract_from_external_system["01.501 Pay-off CEL contract from external system"]
    n_01_502_Pay_off_CEL_contract["01.502 Pay-off CEL contract"]
    Process_ContractPaidOffSE_CLM["Process ContractPaidOffSE [CLM] "]
    n_01_502_Pay_off_CEL_contract -->|unnamed| Calculate_pay_off_installment_date
    n_01_502_Pay_off_CEL_contract -->|unnamed| MOD_03_120_Pay_off_installment_schedule
    n_01_501_Pay_off_CEL_contract_from_external_system -->|unnamed| n_01_502_Pay_off_CEL_contract
    n_01_501_Pay_off_CEL_contract_from_external_system -->|unnamed| Check_pay_off_possibility_algorithm_GUI_RMQ
    n_01_501_Pay_off_CEL_contract_from_external_system -->|unnamed| Loxon
    Check_pay_off_possibility_algorithm_GUI_RMQ -->|unnamed| Check_for_unprocessed_Pay_off_request_existence
    MOD_03_120_Pay_off_installment_schedule -->|unnamed| Calculate_pay_off_installment_date
    Process_ContractPaidOff -->|unnamed| ADD_Process_ContractPaidOffSE_IS
    Process_ContractPaidOff -->|unnamed| Process_ContractPaidOffSE_CLM
    COMA -->|unnamed| Process_ContractPaidOff
```
