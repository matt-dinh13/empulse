# PAYM-1053 (CBL-2595) CET_services_changes (DPD)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1053 (CBL-2595) CET_services_changes (DPD)
- **Diagram ID**: 113734
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    Use_Case_model_Common_for_Early_repayment_Request_and_Proces["Use Case model : Common for Early repayment Request and Processing "]
    Use_Case_Full_early_repayment_processing["Use Case : Full early repayment processing"]
    Use_Case_Model_Cooling_off_period_processing["Use Case Model : Cooling-off period processing"]
    Use_Case_Contract_Early_Termination_processing["Use Case : Contract Early Termination processing"]
    DEV_CBL_2595_CET_COP_FER_service_change["DEV CBL-2595 CET/COP/FER service change"]
    PAYM_1053_CBL_2595_CET_services_changes_DPD["PAYM-1053 (CBL-2595) CET_services_changes (DPD)"]
    DEV_CBL_2595_CET_COP_FER_service_change -->|unnamed| PAYM_1053_CBL_2595_CET_services_changes_DPD
    DEV_CBL_2595_CET_COP_FER_service_change -->|unnamed| Use_Case_Full_early_repayment_processing
    DEV_CBL_2595_CET_COP_FER_service_change -->|unnamed| Use_Case_Model_Cooling_off_period_processing
    DEV_CBL_2595_CET_COP_FER_service_change -->|unnamed| Use_Case_Contract_Early_Termination_processing
    Use_Case_model_Common_for_Early_repayment_Request_and_Proces -->|unnamed| DEV_CBL_2595_CET_COP_FER_service_change
```
