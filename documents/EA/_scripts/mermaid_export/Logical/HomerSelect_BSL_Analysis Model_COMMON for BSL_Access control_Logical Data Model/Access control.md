# Access control

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Access control/Logical Data Model
- **Diagram ID**: 81426
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class Privilege_Map["Privilege Map"]
    class Access_Right["Access Right"]
    class Privilege_Scope["Privilege Scope"]
    class Application_Role["Application Role"]
    Privilege_Map ..> Privilege_Scope : unnamed
    Application_Role ..> Privilege_Scope : unnamed
    Application_Role --> Access_Right : has
```
