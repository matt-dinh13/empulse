# Document notification (DMS)

```mermaid
classDiagram
    class ADD_Process_DMS_DocumentNotification["{ADD}Process DMS DocumentNotification"]
    class ADD_DocumentAttribute["{ADD}DocumentAttribute"]
    class ADD_DocumentFile["{ADD}DocumentFile"]
    class ADD_Document["{ADD}Document"]
    ADD_Document --> ADD_DocumentAttribute : unnamed
    ADD_Document --> ADD_DocumentFile : unnamed
```
