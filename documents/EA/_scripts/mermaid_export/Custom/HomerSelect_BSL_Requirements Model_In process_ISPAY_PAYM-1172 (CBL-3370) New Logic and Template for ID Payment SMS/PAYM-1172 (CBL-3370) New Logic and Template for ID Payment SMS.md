# PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS
- **Diagram ID**: 110134
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    MOD_System_event_processing_setting["{MOD}System event processing setting"]
    Feature_switches_Feature_switches["Feature switches : Feature switches"]
    UseCase_Model_SMS_notification["UseCase Model : SMS notification"]
    Notifications_Paired_Payment_Notification["Notifications : Paired Payment Notification"]
    PairedPaymentNotification["PairedPaymentNotification"]
    Requirement1PAYM_1172_CBL_3370_New_Logic_and_Template_for_ID["Requirement1PAYM-1172 (CBL-3370) New Logic and Template for ID Payment SMS"]
    PairedPaymentNotification -->|unnamed| Requirement1PAYM_1172_CBL_3370_New_Logic_and_Template_for_ID
    PairedPaymentNotification -->|unnamed| Notifications_Paired_Payment_Notification
    Feature_switches_Feature_switches -->|unnamed| PairedPaymentNotification
    UseCase_Model_SMS_notification -->|unnamed| PairedPaymentNotification
```
