# COMMON Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract bulk operations (BSA)/Analytical Model/COMMON for Contract Bulk Operations/Logical Data Model
- **Diagram ID**: 164413
- **Elements**: 10
- **Connectors**: 11

```mermaid
classDiagram
    class ADD_Debt_Purchase_Result["{ADD}Debt Purchase Result"]
    class ADD_Debt_Purchase_Operation["{ADD}Debt Purchase Operation"]
    class Replace_Service_Operation["Replace Service Operation"]
    class Add_Service_Operation["Add Service Operation"]
    class Validation_Status["Validation Status"]
    class Contract_Result["Contract Result"]
    class Status_Transition["Status Transition"]
    class Bulk_Operation_Status["Bulk Operation Status"]
    class Bulk_Operation_Type["Bulk Operation Type"]
    class Bulk_Operation["Bulk Operation"]
    Bulk_Operation <|-- Replace_Service_Operation : unnamed
    Bulk_Operation <|-- Add_Service_Operation : unnamed
    Bulk_Operation o-- Contract_Result : unnamed
    Bulk_Operation o-- Status_Transition : unnamed
    Bulk_Operation ..> Bulk_Operation_Type : unnamed
    Status_Transition ..> Bulk_Operation_Status : unnamed
    Bulk_Operation ..> Bulk_Operation_Status : unnamed
    Contract_Result ..> Validation_Status : unnamed
    Contract_Result ..> Validation_Status : unnamed
    Bulk_Operation <|-- ADD_Debt_Purchase_Operation : unnamed
    Contract_Result <|-- ADD_Debt_Purchase_Result : unnamed
```
