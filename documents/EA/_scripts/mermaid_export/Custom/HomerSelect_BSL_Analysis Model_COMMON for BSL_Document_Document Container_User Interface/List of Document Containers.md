# List of Document Containers

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/User Interface
- **Diagram ID**: 124145
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph TD
    n_02_350_Deactivate_document_container["02.350 Deactivate document container"]
    User_Interface_Document_container_detail["User Interface : Document container detail"]
    n_02_330_Show_document_container_detail["02.330 Show document container detail"]
    Set_Document_Container_Set_Document_Container["Set Document Container : Set Document Container"]
    n_02_310_Find_document_containers["02.310 Find document containers"]
    n_02_340_Update_document_container["02.340 Update document container"]
    n_02_320_Create_document_container["02.320 Create document container"]
    Create_container["Create container"]
    List_of_document_containers["List of document containers"]
    Containers["Containers"]
    Create_container -->|unnamed| n_02_320_Create_document_container
    List_of_document_containers -->|unnamed| n_02_340_Update_document_container
    Containers -->|unnamed| n_02_310_Find_document_containers
    Create_container -->|unnamed| Set_Document_Container_Set_Document_Container
    List_of_document_containers -->|unnamed| Set_Document_Container_Set_Document_Container
    User_Interface_Document_container_detail -->|unnamed| n_02_330_Show_document_container_detail
    List_of_document_containers -->|unnamed| n_02_330_Show_document_container_detail
    List_of_document_containers -->|unnamed| User_Interface_Document_container_detail
    List_of_document_containers -->|unnamed| n_02_350_Deactivate_document_container
```
