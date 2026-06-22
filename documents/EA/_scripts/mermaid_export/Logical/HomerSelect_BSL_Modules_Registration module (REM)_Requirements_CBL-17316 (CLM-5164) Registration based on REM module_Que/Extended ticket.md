# Extended ticket

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-17316 (CLM-5164) Registration based on REM module/Queues management/Logical data model
- **Diagram ID**: 156811
- **Elements**: 4
- **Connectors**: 4

```mermaid
classDiagram
    class Queue2User["Queue2User"]
    class Queue["Queue"]
    class User["User"]
    class Ticket["Ticket"]
    Queue2User ..> User : unnamed
    Ticket ..> User : unnamed
    Queue2User ..> Queue : unnamed
    Ticket ..> Queue : unnamed
```
