# CBL-16042 (CSI-1090) Replace EOMBillingFinishedSE by processing of AccountBalanceChange

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16042 (CSI-1090) Replace EOMBillingFinishedSE by processing of AccountBalanceChange
- **Diagram ID**: 142359
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    REQ_1_Process_AccountBalanceChange_EOM_notification["REQ#1 - Process AccountBalanceChange EOM notification"]
    ADD_01_739_Process_Account_Balance_Change_EOM_notification["{ADD}01.739 Process Account Balance Change EOM notification"]
    n_01_739_Process_Account_Balance_Change_EOM_notification["01.739 Process Account Balance Change EOM notification"]
    Logical_Data_Model_Mapping_of_AccountBalanceChange_to_Debt_C["Logical Data Model : Mapping of AccountBalanceChange to Debt Catalog"]
    Account_Notifications_REL_Consumed_JMS_messages_REL_Account_["Account Notifications (REL) : Consumed JMS messages - REL Account balance change"]
    n_01_739_Process_Account_Balance_Change_EOM_notification -->|unnamed| ADD_01_739_Process_Account_Balance_Change_EOM_notification
```
