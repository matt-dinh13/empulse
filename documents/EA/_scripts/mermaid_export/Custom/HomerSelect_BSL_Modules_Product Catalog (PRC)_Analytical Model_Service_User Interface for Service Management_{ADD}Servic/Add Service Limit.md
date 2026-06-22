# Add Service Limit

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/{ADD}Service Limit/User Interface
- **Diagram ID**: 147038
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    MOD_Service_Limit_Type["{MOD}Service Limit Type"]
    DEL_08_435_Add_Service_Limit_to_Service["{DEL}08.435 Add Service Limit to Service"]
    User_Interface_Tab_Service_Limit["User Interface : Tab Service Limit"]
    Cancel["Cancel"]
    OK["OK"]
    Value["Value"]
    Service_Limit_Type["Service Limit Type"]
    Common_service_properties_header["Common service properties header"]
    Add_Service_Limit["Add Service Limit"]
    Cancel -->|unnamed| User_Interface_Tab_Service_Limit
    OK -->|unnamed| User_Interface_Tab_Service_Limit
    Add_Service_Limit -->|unnamed| DEL_08_435_Add_Service_Limit_to_Service
```
