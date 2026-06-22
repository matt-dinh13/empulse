# Business Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules
- **Diagram ID**: 142895
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    Update_Document_Container_Validation["Update Document Container Validation"]
    Document_Container_Type_To_Document_Type_Validation["Document Container Type To Document Type Validation"]
    Create_Document_Container_Validation["Create Document Container Validation"]
    Update_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
    Create_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
```
