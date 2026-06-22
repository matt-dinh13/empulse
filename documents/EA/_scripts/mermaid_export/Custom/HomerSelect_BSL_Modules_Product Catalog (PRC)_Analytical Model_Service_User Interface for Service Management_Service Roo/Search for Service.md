# Search for Service

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/User Interface Model
- **Diagram ID**: 163152
- **Elements**: 22
- **Connectors**: 6

```mermaid
graph TD
    Mandatory_on_contract["Mandatory on contract"]
    Evaluate_Service_search_criteria["Evaluate Service search criteria"]
    Service_category["Service category"]
    User_Interface_Model_Create_Service["User Interface Model : Create Service"]
    User_Interface_Model_Show_Service["User Interface Model :Show Service"]
    DEL_08_170_Search_for_Services["{DEL}08.170 Search for Services"]
    DEL_08_160_Show_Service_version_detail["{DEL}08.160 Show Service version detail"]
    DEL_08_120_Create_Service["{DEL}08.120 Create Service"]
    Version_activated_to["Version activated to"]
    Version_activated_from["Version activated from"]
    Service_type["Service type"]
    Version_Status["Version Status"]
    Add_service["Add service"]
    MOD_Name["{MOD}Name"]
    Service_valid_on["Service valid on"]
    MOD_Code["{MOD}Code"]
    Search_results["Search results"]
    Search_for_Service_criteria["Search for Service criteria"]
    Reset["Reset"]
    Search["Search"]
    Search_buttons["Search buttons"]
    Search_for_services["Search for services"]
    Add_service -->|unnamed| DEL_08_120_Create_Service
    Search_results -->|unnamed| DEL_08_160_Show_Service_version_detail
    Search_for_services -->|unnamed| DEL_08_170_Search_for_Services
    DEL_08_160_Show_Service_version_detail -->|unnamed| User_Interface_Model_Show_Service
    DEL_08_120_Create_Service -->|unnamed| User_Interface_Model_Create_Service
    DEL_08_170_Search_for_Services -->|unnamed| Evaluate_Service_search_criteria
```
