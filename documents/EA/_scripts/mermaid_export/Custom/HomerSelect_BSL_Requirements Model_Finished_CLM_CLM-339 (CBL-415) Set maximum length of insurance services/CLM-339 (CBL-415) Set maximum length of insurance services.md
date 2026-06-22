# CLM-339 (CBL-415) Set maximum length of insurance services

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-339 (CBL-415) Set maximum length of insurance services
- **Diagram ID**: 103240
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph TD
    element_392F0356_355F_49a1_9715_BE9407B7CF22["$element://{392F0356-355F-49a1-9715-BE9407B7CF22}"]
    Use_Case_Model_Activate_Insurance_contract["Use Case Model : Activate Insurance contract"]
    Use_Case_Model_Create_and_Sign_Insurance_contract["Use Case Model : Create and Sign Insurance contract"]
    CBL_415_Set_maximum_length_of_insurance_service["CBL-415 Set maximum length of insurance service"]
    REQ_1_System_checks_the_duration_of_insurance_period_is_shor["REQ#1 - System checks the duration of insurance period is shorter than duration of contract"]
    Use_Case_Model_Create_and_Sign_Insurance_contract -->|unnamed| REQ_1_System_checks_the_duration_of_insurance_period_is_shor
    Use_Case_Model_Activate_Insurance_contract -->|unnamed| REQ_1_System_checks_the_duration_of_insurance_period_is_shor
    element_392F0356_355F_49a1_9715_BE9407B7CF22 -->|unnamed| REQ_1_System_checks_the_duration_of_insurance_period_is_shor
```
