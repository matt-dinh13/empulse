# Full early repayment - printouts

```mermaid
graph TD
    HO_SERVICE_REQUEST_DATA_HO_SERVICE_REQUEST_DATA_FER_printout["HO_SERVICE_REQUEST_DATA : HO_SERVICE_REQUEST_DATA - FER printout usage"]
    n_08_356_Generate_service_request_document["08.356 Generate service request document"]
    Deactivate_contract_early_termination_requests["Deactivate contract early termination requests"]
    n_03_052_Create_Full_Early_repayment_request["03.052 Create Full Early repayment request"]
    Creating_of_virtual_IS_for_FER_in_status_Paid_off["Creating of virtual IS for FER in status Paid-off"]
    MOD_03_070_Calculate_early_repayment_amount["{MOD}03.070 Calculate early repayment amount"]
    DEL_03_205_Generate_ER_document["{DEL}03.205 Generate ER document"]
    n_03_052_Create_Full_Early_repayment_request -->|unnamed| Deactivate_contract_early_termination_requests
    n_03_052_Create_Full_Early_repayment_request -->|unnamed| Creating_of_virtual_IS_for_FER_in_status_Paid_off
    n_03_052_Create_Full_Early_repayment_request -->|unnamed| MOD_03_070_Calculate_early_repayment_amount
```
