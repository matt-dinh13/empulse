# CBL-2439 (CLM-1160) DBS Product Bundling

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2439 (CLM-1160) DBS Product Bundling
- **Diagram ID**: 100568
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    User_Interface_Show_or_update_Bundle_service_status["User Interface : Show or update Bundle service status"]
    Tab_Services_Tab_Services["Tab-Services : Tab-Services"]
    Access_Rights_Access_Rights["Access Rights : Access Rights"]
    REQ_1_System_displays_status_of_Bundle_service_on_contract_a["REQ#1 - System displays status of Bundle service on contract and offers possibility to update status from NEW to ACTIVE or CANCELLED."]
    DBS_Product_Bundling["DBS Product Bundling"]
    Access_Rights_Access_Rights -->|unnamed| REQ_1_System_displays_status_of_Bundle_service_on_contract_a
    Tab_Services_Tab_Services -->|unnamed| REQ_1_System_displays_status_of_Bundle_service_on_contract_a
    User_Interface_Show_or_update_Bundle_service_status -->|unnamed| REQ_1_System_displays_status_of_Bundle_service_on_contract_a
    REQ_1_System_displays_status_of_Bundle_service_on_contract_a -->|unnamed| DBS_Product_Bundling
```
