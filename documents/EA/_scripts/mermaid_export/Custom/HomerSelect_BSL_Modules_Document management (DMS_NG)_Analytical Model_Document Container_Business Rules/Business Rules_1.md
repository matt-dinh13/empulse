# Business Rules

```mermaid
graph TD
    Update_Document_Container_Validation["Update Document Container Validation"]
    Document_Container_Type_To_Document_Type_Validation["Document Container Type To Document Type Validation"]
    Create_Document_Container_Validation["Create Document Container Validation"]
    Create_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
    Update_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
```
