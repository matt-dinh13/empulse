# Document Type Validation

```mermaid
classDiagram
    class Logical_Data_Model_Document["Logical Data Model : Document "]
    class Related_To_Type["Related To Type"]
    class Validation_Group_Type["Validation Group Type"]
    class Document_Type_Validation["Document Type Validation"]
    class Document_Type["Document Type"]
    Document_Type_Validation --> Document_Type : unnamed
    Document_Type_Validation --> Validation_Group_Type : unnamed
    Document_Type_Validation --> Related_To_Type : unnamed
```
