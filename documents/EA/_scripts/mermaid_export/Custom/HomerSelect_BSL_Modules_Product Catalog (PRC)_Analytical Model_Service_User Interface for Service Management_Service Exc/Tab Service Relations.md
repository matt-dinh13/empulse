# Tab Service Relations

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Exclusivity/User Interface
- **Diagram ID**: 102692
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    Service_relation_is_assigned_to_service_and_is_independent_o["Service relation is assigned to service and is independent on version"]
    DEL_08_410_Set_Service_Relation["{DEL}08.410 Set Service Relation"]
    User_Interface_Service_Relations_Set["User Interface :Service Relations - Set"]
    Assign_Service_Relation["Assign Service Relation"]
    Service_Relations["Service Relations"]
    Service_Relations["Service Relations"]
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    Service_Relations -->|unnamed| DEL_08_160_Show_Service_version_detail
    Assign_Service_Relation -->|unnamed| User_Interface_Service_Relations_Set
    Assign_Service_Relation -->|unnamed| DEL_08_410_Set_Service_Relation
```
