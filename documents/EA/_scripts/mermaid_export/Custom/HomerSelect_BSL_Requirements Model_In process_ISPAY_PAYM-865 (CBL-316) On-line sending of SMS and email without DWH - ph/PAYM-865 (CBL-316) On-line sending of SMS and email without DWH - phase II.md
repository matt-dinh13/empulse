# PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II
- **Diagram ID**: 104942
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Notifications_Reversal_Payment_Notification["Notifications : Reversal Payment Notification"]
    Logical_data_model_Notification_system_event_schema["Logical data model : Notification system event schema"]
    ReversalPaymentNotification["ReversalPaymentNotification"]
    PAYM_865_CBL_316_On_line_sending_of_SMS_and_email_without_DW["PAYM-865 (CBL-316) On-line sending of SMS and email without DWH - phase II"]
    ReversalPaymentNotification -->|unnamed| PAYM_865_CBL_316_On_line_sending_of_SMS_and_email_without_DW
    Notifications_Reversal_Payment_Notification -->|unnamed| ReversalPaymentNotification
    ReversalPaymentNotification -->|unnamed| Logical_data_model_Notification_system_event_schema
```
