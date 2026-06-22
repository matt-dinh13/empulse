# CLM-99 (CBL-31) Commodity Module separation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-99 (CBL-31) Commodity Module separation
- **Diagram ID**: 98786
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    Tab_Insurance_Tab_Insurance["Tab-Insurance : Tab-Insurance"]
    MOD_01_210_Show_contract_detail["{MOD}01.210 Show contract detail"]
    el_1221797["Note"]
    Contract_Notifications_Contract_full_info_notification["Contract Notifications : Contract full info notification"]
    REQ_3_ContractFullInfo_notification_change["REQ#3 ContractFullInfo notification change"]
    REQ_2_ContractService_REST_change["REQ#2 ContractService REST change"]
    Contract_Services_Contract_Services["Contract Services : Contract Services"]
    REQ_1_Insurance_Commodity_change["REQ#1 Insurance Commodity change"]
    Logical_Data_Model_Insurance_Contract["Logical Data Model : Insurance Contract"]
    Logical_Data_Model_Insurance_Contract -->|unnamed| REQ_1_Insurance_Commodity_change
    Tab_Insurance_Tab_Insurance -->|unnamed| REQ_1_Insurance_Commodity_change
    Contract_Services_Contract_Services -->|unnamed| REQ_2_ContractService_REST_change
    Contract_Notifications_Contract_full_info_notification -->|unnamed| REQ_3_ContractFullInfo_notification_change
    MOD_01_210_Show_contract_detail -->|unnamed| REQ_1_Insurance_Commodity_change
```
