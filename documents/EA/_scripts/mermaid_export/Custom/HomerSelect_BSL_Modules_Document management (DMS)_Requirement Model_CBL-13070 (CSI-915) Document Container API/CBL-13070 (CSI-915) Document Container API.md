# CBL-13070 (CSI-915) Document Container API

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-13070 (CSI-915) Document Container API
- **Diagram ID**: 141848
- **Elements**: 11
- **Connectors**: 4

```mermaid
graph TD
    Logical_Data_Model_Document_Container["Logical Data Model : Document Container"]
    Update_Document_Container_Validation["Update Document Container Validation"]
    Document_Container_Type_To_Document_Type_Validation["Document Container Type To Document Type Validation"]
    Create_Document_Container_Validation["Create Document Container Validation"]
    n_14_220_Update_Document_Container["14.220 Update Document Container"]
    n_14_210_Create_Document_Container["14.210 Create Document Container"]
    n_14_200_Get_Document_Container["14.200 Get Document Container"]
    Document_Container_Services_UpdateDocumentContainer["Document Container Services : UpdateDocumentContainer"]
    Document_Container_Services_GetDocumentContainer["Document Container Services : GetDocumentContainer"]
    Document_Container_Services_CreateDocumentContainer["Document Container Services : CreateDocumentContainer"]
    REQ_1_Enable_the_current_Document_Container_setting_for_exte["REQ#1 - Enable the current Document Container setting for external usage via an API"]
    Create_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
    Update_Document_Container_Validation -->|unnamed| Document_Container_Type_To_Document_Type_Validation
    n_14_220_Update_Document_Container -->|unnamed| Update_Document_Container_Validation
    n_14_210_Create_Document_Container -->|unnamed| Create_Document_Container_Validation
```
