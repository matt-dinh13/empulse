# DwhNotificationService

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Notifications/DwhNotificationService
- **Diagram ID**: 71658
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Use_Case_model_Data_downloading_from_DWH["Use Case model : Data downloading from DWH"]
    class ProcessNotificationResponse["ProcessNotificationResponse"]
    class Notification["Notification"]
    class ProcessNotificationRequest["ProcessNotificationRequest"]
    class DwhNotificationService["DwhNotificationService"]
    DwhNotificationService ..> ProcessNotificationRequest : unnamed
    ProcessNotificationRequest ..> Notification : unnamed
    DwhNotificationService ..> ProcessNotificationResponse : unnamed
    DwhNotificationService --> Use_Case_model_Data_downloading_from_DWH : unnamed
```
