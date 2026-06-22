# CBL-268 (CLM-624) REL Payment holidays

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-268 (CLM-624) REL Payment holidays
- **Diagram ID**: 113482
- **Elements**: 5
- **Connectors**: 2

```mermaid
graph TD
    LoanServiceRequestTypeDto["LoanServiceRequestTypeDto"]
    Tab_Services_Tab_Services["Tab-Services : Tab-Services"]
    n_08_070_Switch_service_on_off_manually["08.070 Switch service on/off manually"]
    Loan_Service_notifications_Loan_Service_Request_notification["Loan Service notifications : Loan Service Request notifications"]
    REQ_1_show_RELPayhol_service_on_Contract_service_list_and_wi["REQ#1 -  show RELPayhol service on Contract service list and will be switchable by standard way"]
    REQ_1_show_RELPayhol_service_on_Contract_service_list_and_wi -->|unnamed| n_08_070_Switch_service_on_off_manually
    Loan_Service_notifications_Loan_Service_Request_notification -->|unnamed| n_08_070_Switch_service_on_off_manually
```
