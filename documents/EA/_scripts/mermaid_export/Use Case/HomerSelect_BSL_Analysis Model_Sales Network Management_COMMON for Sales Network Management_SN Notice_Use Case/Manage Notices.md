# Manage Notices

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Notice/Use Case
- **Diagram ID**: 39199
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    Create_Update_Notice_Create_Notice["Create/Update Notice : Create Notice"]
    n_09_205_Create_notice(("09.205 Create notice"))
    n_09_206_Remove_notice(("09.206 Remove notice"))
    User[/"User"/]
    n_09_205_Create_notice -->|unnamed| Create_Update_Notice_Create_Notice
    User --- n_09_205_Create_notice
    User --- n_09_206_Remove_notice
```
