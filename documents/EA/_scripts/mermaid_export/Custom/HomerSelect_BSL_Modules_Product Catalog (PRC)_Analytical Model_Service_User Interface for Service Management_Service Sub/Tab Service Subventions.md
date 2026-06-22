# Tab Service Subventions

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Subvention/User Interface
- **Diagram ID**: 102894
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    User_Interface_Model_Show_Service["User Interface Model : Show Service"]
    User_Interface_Service_Subventions_Set["User Interface : Service Subventions-Set"]
    DEL_08_422_Show_detail_of_subvention_for_service["{DEL}08.422 Show detail of subvention for service"]
    DEL_08_424_Remove_subvention_for_service["{DEL}08.424 Remove subvention for service"]
    DEL_08_420_Set_subvention_for_service["{DEL}08.420 Set subvention for service"]
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    MOD_Subventions["{MOD}Subventions"]
    Add_subvention["Add subvention"]
    ADD_Service_Subventions["{ADD}Service Subventions"]
    ADD_Service_Subventions -->|unnamed| DEL_08_160_Show_Service_version_detail
    Add_subvention -->|unnamed| DEL_08_420_Set_subvention_for_service
    MOD_Subventions -->|unnamed| DEL_08_424_Remove_subvention_for_service
    MOD_Subventions -->|unnamed| DEL_08_420_Set_subvention_for_service
    MOD_Subventions -->|unnamed| DEL_08_422_Show_detail_of_subvention_for_service
```
