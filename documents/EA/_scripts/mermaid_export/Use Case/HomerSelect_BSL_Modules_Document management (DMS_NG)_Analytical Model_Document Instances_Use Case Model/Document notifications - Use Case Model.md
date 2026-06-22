# Document notifications - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Use Case Model
- **Diagram ID**: 162124
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Document_Instance_notifications_Document_Instance_notificati["Document Instance notifications : Document Instance notifications"]
    n_14_100_Process_Contract_archiving_notification(("14.100 Process Contract archiving notification"))
    External_system[/"External system"/]
    External_system --> n_14_100_Process_Contract_archiving_notification
    Document_Instance_notifications_Document_Instance_notificati -->|unnamed| n_14_100_Process_Contract_archiving_notification
```
