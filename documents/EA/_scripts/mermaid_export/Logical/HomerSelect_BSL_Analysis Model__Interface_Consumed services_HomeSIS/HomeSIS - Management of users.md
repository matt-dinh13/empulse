# HomeSIS - Management of users

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/HomeSIS
- **Diagram ID**: 131247
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Users["Users"]
    class Users["Users"]
    class User["User"]
    class HomeSIS["HomeSIS"]
    Users --> Users : unnamed
    Users ..> User : unnamed
    HomeSIS o-- Users : /restful/users
```
