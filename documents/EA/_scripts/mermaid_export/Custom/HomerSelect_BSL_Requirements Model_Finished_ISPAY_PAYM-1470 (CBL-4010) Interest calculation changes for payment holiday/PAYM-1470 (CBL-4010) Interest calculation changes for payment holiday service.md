# PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service
- **Diagram ID**: 113993
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Contract_Management_Contract_Management_Global_Parameter["Contract Management : Contract Management Global Parameter"]
    Use_Case_Model_Payment_holiday_processing["Use Case Model : Payment holiday processing"]
    Stop_recalculating_PIRs_during_PAYHOL_processing["Stop recalculating PIRs during PAYHOL processing"]
    PAYM_1470_CBL_4010_Interest_calculation_changes_for_payment_["PAYM-1470 (CBL-4010) Interest calculation changes for payment holiday service"]
    Contract_Management_Contract_Management_Global_Parameter -->|unnamed| Stop_recalculating_PIRs_during_PAYHOL_processing
    Use_Case_Model_Payment_holiday_processing -->|unnamed| Stop_recalculating_PIRs_during_PAYHOL_processing
    Stop_recalculating_PIRs_during_PAYHOL_processing -->|unnamed| PAYM_1470_CBL_4010_Interest_calculation_changes_for_payment_
```
