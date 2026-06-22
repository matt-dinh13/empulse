# SNM General User Synchronization

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/SNM Synchronization/COMMON for SNM Synchronization
- **Diagram ID**: 104313
- **Elements**: 3
- **Connectors**: 4

```mermaid
classDiagram
    class User_Setting["User Setting"]
    class User_Type["User Type"]
    class User["User"]
    User_Type ..> User : unnamed
    User_Type ..> User_Setting : unnamed
    User --> User_Setting : unnamed
    User --> User : unnamed
```
