# SMS Notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/COMMON for Service/Logical Data Model/Service Type Specific Extension/SMSN
- **Diagram ID**: 107566
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class Service["Service"]
    class DEL_SMS_Notification_Type["{DEL}SMS Notification Type"]
    class DEL_SMS_Notification_Service_To_Notification_Type["{DEL}SMS Notification Service To Notification Type"]
    class SMS_Notification_Service["SMS Notification Service "]
    class Logical_Data_Model_Service_Management["Logical Data Model : Service Management"]
    SMS_Notification_Service --> DEL_SMS_Notification_Service_To_Notification_Type : unnamed
    DEL_SMS_Notification_Service_To_Notification_Type ..> DEL_SMS_Notification_Type : unnamed
```
