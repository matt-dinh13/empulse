# Service Subventions-Set

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Subvention/User Interface
- **Diagram ID**: 102893
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    DEL_08_420_Set_subvention_for_service["{DEL}08.420 Set subvention for service"]
    User_Interface_Tab_Service_Subventions["User Interface : Tab Service Subventions"]
    Subvention_Set["Subvention-Set"]
    Common_service_properties_header["Common service properties header"]
    Cancel["Cancel"]
    Save["Save"]
    ADD_Set_subvention["{ADD}Set subvention"]
    Cancel -->|unnamed| User_Interface_Tab_Service_Subventions
    Save -->|unnamed| User_Interface_Tab_Service_Subventions
    ADD_Set_subvention -->|unnamed| DEL_08_420_Set_subvention_for_service
```
