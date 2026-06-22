# Communication record notification setting

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Logical Data Model
- **Diagram ID**: 140375
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class Communication_Status["Communication Status"]
    class Communication_Channel["Communication Channel"]
    class Communication_Record_Notification_Rule["Communication Record Notification Rule"]
    Communication_Record_Notification_Rule ..> Communication_Channel : unnamed
    Communication_Record_Notification_Rule ..> Communication_Status : unnamed
```
