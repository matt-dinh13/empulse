# First Installment Due Date for Application/Contract

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules
- **Diagram ID**: 164377
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    Get_configuration_for_First_Installment_Due_Date_calculation["Get configuration for First Installment Due Date calculation"]
    Calculate_First_Installment_Due_Date["Calculate First Installment Due Date "]
    Business_rules_CEL_Installment_Schedule_Dates_determination["Business rules : CEL Installment Schedule Dates determination"]
    Evaluate_parameters_for_First_Installment_Due_Date_determina["Evaluate parameters for First Installment Due Date determination"]
    MOD_Evaluate_First_Installment_Due_Date["{MOD}Evaluate First Installment Due Date"]
    First_Installment_Due_Date_determination["First Installment Due Date determination"]
    MOD_Evaluate_First_Installment_Due_Date -->|unnamed| First_Installment_Due_Date_determination
    MOD_Evaluate_First_Installment_Due_Date -->|unnamed| Evaluate_parameters_for_First_Installment_Due_Date_determina
    First_Installment_Due_Date_determination -->|unnamed| Calculate_First_Installment_Due_Date
    First_Installment_Due_Date_determination -->|unnamed| Get_configuration_for_First_Installment_Due_Date_calculation
```
