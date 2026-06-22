# PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only)

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only)
- **Diagram ID**: 113630
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    UseCase_Model_Determine_installment_schedule_processing["UseCase Model : Determine installment schedule processing"]
    Modify_the_global_parameter_installmentScheduleGenerationTri["Modify the global parameter installmentScheduleGenerationTrigger to affect only CASH loans"]
    PAYM_1046_CBL_2962_Interest_from_disbursement_date_Cash_Loan["PAYM-1046 (CBL-2962) Interest from disbursement date (Cash Loans only)"]
    Modify_the_global_parameter_installmentScheduleGenerationTri -->|unnamed| PAYM_1046_CBL_2962_Interest_from_disbursement_date_Cash_Loan
    UseCase_Model_Determine_installment_schedule_processing -->|unnamed| Modify_the_global_parameter_installmentScheduleGenerationTri
```
