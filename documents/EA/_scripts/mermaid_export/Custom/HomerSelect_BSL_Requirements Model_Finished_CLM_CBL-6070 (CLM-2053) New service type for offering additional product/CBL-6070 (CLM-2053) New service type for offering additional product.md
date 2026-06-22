# CBL-6070 (CLM-2053) New service type for offering additional product

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6070 (CLM-2053) New service type for offering additional product
- **Diagram ID**: 117975
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    User_Interface_Service_cancellation["User Interface : Service cancellation"]
    Use_Case_Model_Service_add_cancel_and_terminate_contract_ser["Use Case Model :Service - add, cancel and terminate contract service"]
    Tab_Services_Tab_Services["Tab-Services : Tab-Services"]
    REQ_1_Cancel_service_on_contract_new_function["REQ#1 - Cancel service on contract - new function"]
    User_Interface_Service_cancellation -->|unnamed| REQ_1_Cancel_service_on_contract_new_function
    Use_Case_Model_Service_add_cancel_and_terminate_contract_ser -->|unnamed| REQ_1_Cancel_service_on_contract_new_function
    Tab_Services_Tab_Services -->|unnamed| REQ_1_Cancel_service_on_contract_new_function
```
