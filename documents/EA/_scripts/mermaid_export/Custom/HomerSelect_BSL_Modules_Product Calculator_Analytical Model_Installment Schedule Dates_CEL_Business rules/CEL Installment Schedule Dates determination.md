# CEL Installment Schedule Dates determination

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules
- **Diagram ID**: 128990
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    First_Installment_Due_Date_determination["First Installment Due Date determination"]
    Get_configuration_for_First_Installment_Due_Date_calculation["Get configuration for First Installment Due Date calculation"]
    Calculate_First_Installment_Due_Date["Calculate First Installment Due Date "]
    Examples_of_the_First_due_date_determination["Examples of the First due date determination"]
    First_due_date_calculator_for_tests["First due date calculator for tests"]
    First_Installment_Due_Date_determination -->|unnamed| Calculate_First_Installment_Due_Date
    First_Installment_Due_Date_determination -->|unnamed| Get_configuration_for_First_Installment_Due_Date_calculation
```
