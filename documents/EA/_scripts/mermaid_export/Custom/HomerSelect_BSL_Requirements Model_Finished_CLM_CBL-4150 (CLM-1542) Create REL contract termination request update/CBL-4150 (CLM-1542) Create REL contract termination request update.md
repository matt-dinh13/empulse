# CBL-4150 (CLM-1542) Create REL contract termination request update

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4150 (CLM-1542) Create REL contract termination request update
- **Diagram ID**: 108474
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph TD
    Contract_Status_Transition_Request_Status_Type["Contract Status Transition Request Status Type"]
    Logical_Data_Model_Contract_finishing_LDM["Logical Data Model : Contract finishing - LDM"]
    n_01_740_Process_notification_about_credit_account_closure["01.740 Process notification about credit account closure "]
    n_01_171_Create_REL_contract_termination_request["01.171 Create REL contract termination request"]
    REQ_1_Create_REL_contract_termination_request_update["REQ#1 -  Create REL contract termination request update"]
    REQ_1_Create_REL_contract_termination_request_update -->|unnamed| n_01_740_Process_notification_about_credit_account_closure
    REQ_1_Create_REL_contract_termination_request_update -->|unnamed| n_01_171_Create_REL_contract_termination_request
    n_01_171_Create_REL_contract_termination_request -->|unnamed| Logical_Data_Model_Contract_finishing_LDM
    n_01_740_Process_notification_about_credit_account_closure -->|unnamed| Logical_Data_Model_Contract_finishing_LDM
```
