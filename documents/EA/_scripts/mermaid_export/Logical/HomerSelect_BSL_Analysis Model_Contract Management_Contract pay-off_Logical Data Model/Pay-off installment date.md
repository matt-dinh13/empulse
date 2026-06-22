# Pay-off installment date 

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/Logical Data Model
- **Diagram ID**: 111366
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Contract_Status_Transitions_Reasons["Contract Status Transitions Reasons"]
    class Pay_off_Date_Calculation_Type["Pay-off Date Calculation Type"]
    class Pay_off_Date_Calculation_Parameter["Pay-off Date Calculation Parameter"]
    class MOD_Terms_And_Conditions["{MOD}Terms And Conditions"]
    Pay_off_Date_Calculation_Parameter ..> Pay_off_Date_Calculation_Type : unnamed
    Pay_off_Date_Calculation_Parameter ..> Contract_Status_Transitions_Reasons : unnamed
    MOD_Terms_And_Conditions o-- Pay_off_Date_Calculation_Parameter : unnamed
```
