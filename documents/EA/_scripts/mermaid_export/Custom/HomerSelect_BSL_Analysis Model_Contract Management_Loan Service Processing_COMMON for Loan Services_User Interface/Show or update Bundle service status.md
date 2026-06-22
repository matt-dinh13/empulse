# Show or update Bundle service status

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface
- **Diagram ID**: 154387
- **Elements**: 16
- **Connectors**: 5

```mermaid
graph TD
    Status_reason_description["Status reason description"]
    Status_reason["Status reason"]
    Choose_service_status["Choose service status"]
    n_08_330_Update_Bundle_service_status["08.330 Update Bundle service status"]
    n_08_300_Show_Bundle_service_status["08.300 Show Bundle service status"]
    OK["OK"]
    Status_reason_description_text["Status reason description text"]
    Bundle_service_status_reason["Bundle service status reason"]
    Contract_detail_Tab_Services["Contract detail - Tab Services"]
    Update_service_status["Update service status"]
    Cancel["Cancel"]
    Service_status["Service status"]
    Service_type["Service type"]
    Service_name["Service name"]
    Service_code["Service code"]
    Bundle_service_status["Bundle service status"]
    Contract_detail_Tab_Services -->|unnamed| Bundle_service_status
    OK -->|unnamed| Contract_detail_Tab_Services
    Cancel -->|unnamed| Contract_detail_Tab_Services
    Update_service_status -->|unnamed| Bundle_service_status_reason
    Bundle_service_status_reason -->|unnamed| n_08_330_Update_Bundle_service_status
```
