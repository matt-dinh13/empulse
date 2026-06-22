# Service SMSN Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Provided Services/Interface Provided/ProvideServiceDataWS/Service Data/Service SMSN Data
- **Diagram ID**: 107533
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class DEL_SMS_Notification_Service_To_Notification_Type["{DEL}SMS Notification Service To Notification Type"]
    class SMS_Notification_Service["SMS Notification Service "]
    class DEL_ServiceSMSNDataDto["{DEL}ServiceSMSNDataDto"]
    class Service_Data_Service_data_synchronization_mapping["Service Data : Service data synchronization mapping"]
    DEL_ServiceSMSNDataDto ..> DEL_SMS_Notification_Service_To_Notification_Type : unnamed
    SMS_Notification_Service --> DEL_SMS_Notification_Service_To_Notification_Type : unnamed
```
