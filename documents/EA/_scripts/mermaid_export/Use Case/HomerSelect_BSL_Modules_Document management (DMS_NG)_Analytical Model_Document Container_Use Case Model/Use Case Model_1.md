# Use Case Model

```mermaid
graph TD
    Update_Document_Container_Validation["Update Document Container Validation"]
    Document_Container_Type_To_Document_Type_Validation["Document Container Type To Document Type Validation"]
    Create_Document_Container_Validation["Create Document Container Validation"]
    External_system["External system"]
    n_14_220_Update_Document_Container["14.220 Update Document Container"]
    n_14_210_Create_Document_Container["14.210 Create Document Container"]
    n_14_200_Get_Document_Container["14.200 Get Document Container"]
    n_14_200_Get_Document_Container -->|unnamed| External_system
    n_14_210_Create_Document_Container -->|unnamed| Create_Document_Container_Validation
    n_14_210_Create_Document_Container -->|unnamed| External_system
    n_14_220_Update_Document_Container -->|unnamed| Update_Document_Container_Validation
    n_14_220_Update_Document_Container -->|unnamed| External_system
    Create_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
    Update_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
```
