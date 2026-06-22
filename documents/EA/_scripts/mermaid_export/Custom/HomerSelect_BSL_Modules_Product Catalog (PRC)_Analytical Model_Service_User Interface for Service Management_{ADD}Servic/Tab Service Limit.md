# Tab Service Limit

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/{ADD}Service Limit/User Interface
- **Diagram ID**: 147037
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    DEL_08_436_Remove_Service_Limit_from_Service["{DEL}08.436 Remove Service Limit from Service"]
    User_Interface_Add_Service_Limit["User Interface : Add Service Limit"]
    DEL_08_435_Add_Service_Limit_to_Service["{DEL}08.435 Add Service Limit to Service"]
    Assign_service_limit["Assign service limit"]
    Service_Limits["Service Limits"]
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    UI_Control["UI Control"]
    UI_Control -->|unnamed| DEL_08_160_Show_Service_version_detail
    Assign_service_limit -->|unnamed| DEL_08_435_Add_Service_Limit_to_Service
    Service_Limits -->|unnamed| DEL_08_435_Add_Service_Limit_to_Service
    Service_Limits -->|unnamed| User_Interface_Add_Service_Limit
    Service_Limits -->|unnamed| DEL_08_436_Remove_Service_Limit_from_Service
```
