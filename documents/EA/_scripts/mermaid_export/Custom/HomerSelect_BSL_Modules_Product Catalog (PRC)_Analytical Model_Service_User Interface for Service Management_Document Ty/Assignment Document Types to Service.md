# Assignment Document Types to Service

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Document Type Assignment/Use Case
- **Diagram ID**: 162647
- **Elements**: 6
- **Connectors**: 7

```mermaid
graph TD
    User["User"]
    User_Interface_Document_Types_Assign["User Interface : Document Types - Assign"]
    User_Interface_Tab_Document_Types["User Interface : Tab Document Types"]
    DEL_08_310_Assign_Document_type_to_Service["{DEL}08.310 Assign Document type to Service"]
    DEL_08_320_Remove_Document_type_from_Service["{DEL}08.320 Remove Document type from Service"]
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    DEL_08_320_Remove_Document_type_from_Service -->|unnamed| User_Interface_Tab_Document_Types
    DEL_08_160_Show_Service_version_detail -->|unnamed| User_Interface_Tab_Document_Types
    DEL_08_310_Assign_Document_type_to_Service -->|unnamed| User_Interface_Tab_Document_Types
    DEL_08_310_Assign_Document_type_to_Service -->|unnamed| User_Interface_Document_Types_Assign
    User -->|unnamed| DEL_08_160_Show_Service_version_detail
    User -->|unnamed| DEL_08_320_Remove_Document_type_from_Service
    User -->|unnamed| DEL_08_310_Assign_Document_type_to_Service
```
