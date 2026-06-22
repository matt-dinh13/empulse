# SNM Notification Queue

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Logical Domain Model
- **Diagram ID**: 71517
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class SNM_Synchronization_Status_Type["SNM Synchronization Status Type"]
    class SNM_Synchronization_Entity_Type["SNM Synchronization Entity Type"]
    class SNM_Notification_Queue["SNM Notification Queue"]
    SNM_Notification_Queue ..> SNM_Synchronization_Entity_Type : unnamed
    SNM_Notification_Queue ..> SNM_Synchronization_Status_Type : unnamed
```
