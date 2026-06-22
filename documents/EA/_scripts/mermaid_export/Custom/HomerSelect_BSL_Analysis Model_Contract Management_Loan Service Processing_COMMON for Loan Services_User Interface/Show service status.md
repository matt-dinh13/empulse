# Show service status

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/User Interface
- **Diagram ID**: 154380
- **Elements**: 10
- **Connectors**: 2

```mermaid
graph TD
    Contract_detail_Tab_Services["Contract detail - Tab Services"]
    Service_code["Service code"]
    el_1779787["Boundary"]
    n_08_020_Display_status_of_service_on_contract["08.020 Display status of service on contract"]
    OK["OK"]
    Status_description["Status description"]
    status_icon["status icon"]
    Service_name["Service name"]
    Service_type["Service type"]
    Service_status["Service status"]
    Contract_detail_Tab_Services -->|unnamed| Service_status
    Service_status -->|unnamed| n_08_020_Display_status_of_service_on_contract
```
