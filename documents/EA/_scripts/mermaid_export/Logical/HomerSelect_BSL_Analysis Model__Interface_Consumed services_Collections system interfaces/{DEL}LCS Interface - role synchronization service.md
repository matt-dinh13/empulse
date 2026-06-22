# {DEL}LCS Interface - role synchronization service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces
- **Diagram ID**: 97672
- **Elements**: 8
- **Connectors**: 8

```mermaid
classDiagram
    class roleSyncResponse["roleSyncResponse"]
    class roleSyncRS["roleSyncRS"]
    class roleSync["roleSync"]
    class role["role"]
    class resultInfo["resultInfo"]
    class resultCode["resultCode"]
    class roleSyncRQ["roleSyncRQ"]
    class DEL_RoleSynchronizationService["{DEL}RoleSynchronizationService"]
    roleSync --> roleSyncRQ : unnamed
    resultInfo --> resultCode : unnamed
    roleSyncRS --> resultInfo : unnamed
    roleSyncRQ --> role : unnamed
    roleSyncRQ --> role : unnamed
    DEL_RoleSynchronizationService ..> roleSync : unnamed
    roleSyncResponse --> roleSyncRS : unnamed
    DEL_RoleSynchronizationService ..> roleSyncResponse : unnamed
```
