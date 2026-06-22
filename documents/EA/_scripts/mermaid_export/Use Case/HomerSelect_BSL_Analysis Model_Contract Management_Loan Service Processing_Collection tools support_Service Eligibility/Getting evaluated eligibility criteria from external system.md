# Getting evaluated eligibility criteria from external system

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Use Case
- **Diagram ID**: 158751
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    DEL_Check_evaluated_eligibility_data_from_external_system["{DEL}Check evaluated eligibility data from external system"]
    Logical_Data_Model_Service_eligibility_evaluation_from_exter["Logical Data Model : Service eligibility evaluation from external system"]
    DEL_08_366_Get_evaluated_eligibility_criteria_from_external_(("{DEL}08.366 Get evaluated eligibility criteria from external system"))
    Logical_Data_Model_Service_eligibility_evaluation_from_exter -->|unnamed| DEL_08_366_Get_evaluated_eligibility_criteria_from_external_
    DEL_08_366_Get_evaluated_eligibility_criteria_from_external_ -->|unnamed| DEL_Check_evaluated_eligibility_data_from_external_system
```
