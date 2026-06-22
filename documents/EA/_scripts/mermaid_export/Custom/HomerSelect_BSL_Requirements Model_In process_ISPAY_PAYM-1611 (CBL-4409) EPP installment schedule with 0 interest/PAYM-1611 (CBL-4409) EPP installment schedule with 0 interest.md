# PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest
- **Diagram ID**: 110128
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    Feature_switches_Feature_switches["Feature switches : Feature switches"]
    MOD_Generate_installment_schedule_Equal_principal["{MOD}Generate installment schedule - Equal principal"]
    Use_Case_Model_Generate_installment_schedule["Use Case Model : Generate installment schedule"]
    Stop_rounding_Equal_Principal_installment_schedule_in_case_o["Stop rounding Equal Principal installment schedule in case of 0% interest"]
    PAYM_1611_CBL_4409_EPP_installment_schedule_with_0_interest["PAYM-1611 (CBL-4409) EPP installment schedule with 0 interest"]
    Stop_rounding_Equal_Principal_installment_schedule_in_case_o -->|unnamed| PAYM_1611_CBL_4409_EPP_installment_schedule_with_0_interest
    Use_Case_Model_Generate_installment_schedule -->|unnamed| Stop_rounding_Equal_Principal_installment_schedule_in_case_o
    Feature_switches_Feature_switches -->|unnamed| Stop_rounding_Equal_Principal_installment_schedule_in_case_o
```
