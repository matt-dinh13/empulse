# CBL-20217 (CSI-2597) Vanilla Kafka decommissioning - phase 1

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20217 (CSI-2597) Vanilla Kafka decommissioning - phase 1
- **Diagram ID**: 152965
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph TD
    UseCase_model_Credit_Limit_Change_via_messaging_Use_Case_mod["UseCase model : Credit Limit Change via messaging - Use Case model"]
    Contract_Supplement_Notifications_v3_Contract_Supplement_Not["Contract Supplement Notifications v3 : Contract Supplement Notifications v3"]
    CSI_2681_Credit_Limit_Change_Result_notification_in_CPS_KAFK["CSI-2681 Credit Limit Change Result notification in CPS KAFKA"]
    Contract_Supplement_Notifications_v3_Contract_Supplement_Not -->|unnamed| CSI_2681_Credit_Limit_Change_Result_notification_in_CPS_KAFK
    UseCase_model_Credit_Limit_Change_via_messaging_Use_Case_mod -->|unnamed| CSI_2681_Credit_Limit_Change_Result_notification_in_CPS_KAFK
```
