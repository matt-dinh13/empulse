# Service - contract detail

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Use Case Model
- **Diagram ID**: 164576
- **Elements**: 14
- **Connectors**: 10

```mermaid
graph LR
    User_Interface_Show_service_status["User Interface : Show service status"]
    n_08_010_Show_service_information(("08.010 Show service information"))
    User[/"User"/]
    diagram_Show_service_operation_status["$diagram:Show service operation status"]
    Tab_Services["Tab-Services"]
    Use_Case_Status_of_Gift_payment["Use Case : Status of Gift payment"]
    User_Interface_Model_Show_Insurance_information["User Interface Model : Show Insurance information"]
    TBD_Status_of_Fees_back["TBD : Status of Fees-back"]
    n_08_030_Show_service_operation_status(("08.030 Show service operation status"))
    Get_the_latest_Loan_Service_Request_with_Service_Operation_S["Get the latest Loan Service Request with Service Operation Status"]
    n_08_020_Display_status_of_service_on_contract(("08.020 Display status of service on contract"))
    Use_Case_Status_of_Grace_Period["Use Case : Status of Grace Period"]
    Tab_Insurance["Tab-Insurance"]
    User_Interface_Show_service_information["User Interface : Show service information"]
    User_Interface_Model_Show_Insurance_information -->|unnamed| n_08_010_Show_service_information
    n_08_010_Show_service_information -->|unnamed| User_Interface_Show_service_information
    n_08_020_Display_status_of_service_on_contract -->|unnamed| User_Interface_Show_service_status
    n_08_020_Display_status_of_service_on_contract -->|unnamed| Use_Case_Status_of_Gift_payment
    n_08_020_Display_status_of_service_on_contract -->|unnamed| Use_Case_Status_of_Grace_Period
    n_08_020_Display_status_of_service_on_contract -->|unnamed| TBD_Status_of_Fees_back
    n_08_030_Show_service_operation_status -->|unnamed| diagram_Show_service_operation_status
    User --- n_08_010_Show_service_information
    User --> n_08_030_Show_service_operation_status
    User --- n_08_020_Display_status_of_service_on_contract
```
