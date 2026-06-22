# List of Eligibility Containers

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/User Interface
- **Diagram ID**: 78399
- **Elements**: 11
- **Connectors**: 9

```mermaid
graph TD
    DEL_08_368_Create_service_eligibility_container_by_copy["{DEL}08.368 Create service eligibility container by copy"]
    DEL_08_370_Deactivate_service_eligibility_container["{DEL}08.370 Deactivate service eligibility container"]
    DEL_08_374_Show_service_eligibility_container_detail["{DEL}08.374 Show service eligibility container detail"]
    DEL_08_372_Update_service_eligibility_container["{DEL}08.372 Update service eligibility container"]
    DEL_08_376_Create_service_eligibility_container["{DEL}08.376 Create service eligibility container"]
    User_Interface_Set_Eligibility_Container["User Interface : Set Eligibility Container"]
    User_Interface_Eligibility_Container_detail["User Interface : Eligibility Container detail"]
    DEL_08_378_Find_service_eligibility_containers["{DEL}08.378 Find service eligibility containers"]
    Create_Eligibility_container["Create Eligibility container"]
    List_of_Eligibility_containers["List of Eligibility containers"]
    Eligibility_Containers["Eligibility Containers"]
    User_Interface_Set_Eligibility_Container -->|unnamed| List_of_Eligibility_containers
    User_Interface_Eligibility_Container_detail -->|unnamed| List_of_Eligibility_containers
    User_Interface_Set_Eligibility_Container -->|unnamed| Create_Eligibility_container
    Eligibility_Containers -->|unnamed| DEL_08_378_Find_service_eligibility_containers
    Create_Eligibility_container -->|unnamed| DEL_08_376_Create_service_eligibility_container
    List_of_Eligibility_containers -->|unnamed| DEL_08_372_Update_service_eligibility_container
    List_of_Eligibility_containers -->|unnamed| DEL_08_374_Show_service_eligibility_container_detail
    List_of_Eligibility_containers -->|unnamed| DEL_08_370_Deactivate_service_eligibility_container
    List_of_Eligibility_containers -->|unnamed| DEL_08_368_Create_service_eligibility_container_by_copy
```
