# Document notification (DMS)

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Interface Consumed/Kafka/Document (DMS)
- **Diagram ID**: 164643
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_Process_DMS_DocumentNotification["{ADD}Process DMS DocumentNotification"]
    class ADD_DocumentAttribute["{ADD}DocumentAttribute"]
    class ADD_DocumentFile["{ADD}DocumentFile"]
    class ADD_Document["{ADD}Document"]
    ADD_Document --> ADD_DocumentAttribute : unnamed
    ADD_Document --> ADD_DocumentFile : unnamed
```
