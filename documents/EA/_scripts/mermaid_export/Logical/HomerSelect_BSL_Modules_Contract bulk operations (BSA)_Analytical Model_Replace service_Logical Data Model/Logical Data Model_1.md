# Logical Data Model

```mermaid
classDiagram
    class Validation_Status["Validation Status"]
    class Contract_Result["Contract Result"]
    class Replace_Service_Operation["Replace Service Operation"]
    class Bulk_Operation["Bulk Operation"]
    Replace_Service_Operation --> Bulk_Operation : unnamed
    Contract_Result --> Bulk_Operation : unnamed
    Contract_Result --> Validation_Status : unnamed
    Contract_Result --> Validation_Status : unnamed
```
