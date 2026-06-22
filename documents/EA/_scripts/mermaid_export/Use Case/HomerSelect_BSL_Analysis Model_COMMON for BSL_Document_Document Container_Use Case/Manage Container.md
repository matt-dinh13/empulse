# Manage Container

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/Use Case
- **Diagram ID**: 67953
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    n_02_310_Find_document_containers(("02.310 Find document containers"))
    User_Interface_Document_container_detail["User Interface : Document container detail"]
    n_02_320_Create_document_container(("02.320 Create document container"))
    n_02_330_Show_document_container_detail(("02.330 Show document container detail"))
    Search_for_Document_Containers_List_of_Document_Containers["Search for Document Containers : List of Document Containers"]
    Set_Document_Container_Set_Document_Container["Set Document Container : Set Document Container"]
    n_02_340_Update_document_container(("02.340 Update document container"))
    n_02_350_Deactivate_document_container(("02.350 Deactivate document container"))
    User[/"User"/]
    n_02_340_Update_document_container -->|unnamed| Set_Document_Container_Set_Document_Container
    n_02_310_Find_document_containers -->|unnamed| Search_for_Document_Containers_List_of_Document_Containers
    n_02_330_Show_document_container_detail -->|unnamed| User_Interface_Document_container_detail
    User --- n_02_310_Find_document_containers
    User --- n_02_350_Deactivate_document_container
    User --- n_02_340_Update_document_container
    User --- n_02_320_Create_document_container
    User --- n_02_330_Show_document_container_detail
```
