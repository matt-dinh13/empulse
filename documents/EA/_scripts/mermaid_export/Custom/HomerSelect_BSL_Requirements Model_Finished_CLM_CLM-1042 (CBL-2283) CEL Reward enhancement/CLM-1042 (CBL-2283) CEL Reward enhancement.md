# CLM-1042 (CBL-2283) CEL Reward enhancement

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-1042 (CBL-2283) CEL Reward enhancement
- **Diagram ID**: 103491
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    Logical_Data_Model_CEL_Rewards_request["Logical Data Model : CEL Rewards request"]
    User_Interface_Model_CEL_Reward_preview["User Interface Model : CEL Reward preview"]
    Use_Case_Model_CEL_Rewards["Use Case Model : CEL Rewards "]
    REQ_2_System_notifies_the_client_about_CEL_Reward_via_SMS["REQ#2 - System notifies the client about CEL Reward via SMS."]
    REQ_1_System_starts_CEL_Rewards_service_only_for_contracts_w["REQ#1 - System starts CEL Rewards service only for contracts with generated installment schedule."]
    CEL_Reward_enhancement["CEL Reward enhancement"]
    REQ_1_System_starts_CEL_Rewards_service_only_for_contracts_w -->|unnamed| CEL_Reward_enhancement
    REQ_2_System_notifies_the_client_about_CEL_Reward_via_SMS -->|unnamed| CEL_Reward_enhancement
    Use_Case_Model_CEL_Rewards -->|unnamed| CEL_Reward_enhancement
    User_Interface_Model_CEL_Reward_preview -->|unnamed| CEL_Reward_enhancement
    Logical_Data_Model_CEL_Rewards_request -->|unnamed| CEL_Reward_enhancement
```
