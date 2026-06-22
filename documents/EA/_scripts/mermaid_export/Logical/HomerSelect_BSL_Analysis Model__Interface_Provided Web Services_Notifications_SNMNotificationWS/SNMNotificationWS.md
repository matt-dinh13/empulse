# SNMNotificationWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Notifications/SNMNotificationWS
- **Diagram ID**: 71678
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Use_case_Synchronization_of_SNM_data["Use case : Synchronization of SNM data"]
    class SnmNotificationRequest["SnmNotificationRequest"]
    class SnmNotificationWS["SnmNotificationWS"]
    SnmNotificationWS ..> SnmNotificationRequest : unnamed
    Use_case_Synchronization_of_SNM_data --> SnmNotificationWS : unnamed
```
