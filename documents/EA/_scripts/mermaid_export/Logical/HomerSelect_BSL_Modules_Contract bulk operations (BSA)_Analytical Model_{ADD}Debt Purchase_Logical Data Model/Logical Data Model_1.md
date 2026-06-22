# Logical Data Model

```mermaid
classDiagram
    class ADD_Debt_Purchase_Result["{ADD}Debt Purchase Result"]
    class ADD_Debt_Purchase_Operation["{ADD}Debt Purchase Operation"]
    class Validation_Status["Validation Status"]
    class Contract_Result["Contract Result"]
    class Bulk_Operation["Bulk Operation"]
    ADD_Debt_Purchase_Operation --> Bulk_Operation : unnamed
    Contract_Result --> Bulk_Operation : unnamed
    ADD_Debt_Purchase_Result --> Contract_Result : unnamed
    Contract_Result --> Validation_Status : unnamed
    Contract_Result --> Validation_Status : unnamed
```
