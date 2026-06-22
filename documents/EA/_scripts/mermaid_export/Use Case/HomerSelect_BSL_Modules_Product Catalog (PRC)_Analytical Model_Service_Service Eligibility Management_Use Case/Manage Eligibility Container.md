# Manage Eligibility Container

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/Use Case
- **Diagram ID**: 162649
- **Elements**: 10
- **Connectors**: 9

```mermaid
graph LR
    User[/"User"/]
    DEL_08_368_Create_service_eligibility_container_by_copy(("{DEL}08.368 Create service eligibility container by copy"))
    User_Interface_Eligibility_Container_detail["User Interface : Eligibility Container detail"]
    User_Interface_List_of_Eligibility_Containers["User Interface : List of Eligibility Containers"]
    User_Interface_Set_Eligibility_Container["User Interface : Set Eligibility Container"]
    DEL_08_378_Find_service_eligibility_containers(("{DEL}08.378 Find service eligibility containers"))
    DEL_08_376_Create_service_eligibility_container(("{DEL}08.376 Create service eligibility container"))
    DEL_08_374_Show_service_eligibility_container_detail(("{DEL}08.374 Show service eligibility container detail"))
    DEL_08_372_Update_service_eligibility_container(("{DEL}08.372 Update service eligibility container"))
    DEL_08_370_Deactivate_service_eligibility_container(("{DEL}08.370 Deactivate service eligibility container"))
    DEL_08_372_Update_service_eligibility_container -->|unnamed| User_Interface_Set_Eligibility_Container
    DEL_08_378_Find_service_eligibility_containers -->|unnamed| User_Interface_List_of_Eligibility_Containers
    DEL_08_374_Show_service_eligibility_container_detail -->|unnamed| User_Interface_Eligibility_Container_detail
    User --- DEL_08_376_Create_service_eligibility_container
    User --- DEL_08_370_Deactivate_service_eligibility_container
    User --- DEL_08_368_Create_service_eligibility_container_by_copy
    User --- DEL_08_372_Update_service_eligibility_container
    User --- DEL_08_378_Find_service_eligibility_containers
    User --- DEL_08_374_Show_service_eligibility_container_detail
```
