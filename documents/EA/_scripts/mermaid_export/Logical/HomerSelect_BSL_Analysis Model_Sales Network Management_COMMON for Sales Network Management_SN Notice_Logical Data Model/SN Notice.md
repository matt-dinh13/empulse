# SN Notice

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Notice/Logical Data Model
- **Diagram ID**: 39203
- **Elements**: 3
- **Connectors**: 3

```mermaid
classDiagram
    class Salesroom["Salesroom"]
    class MOD_Partner["{MOD}Partner"]
    class Notice["Notice"]
    Salesroom o-- Notice : unnamed
    MOD_Partner o-- Notice : unnamed
    MOD_Partner o-- Salesroom : unnamed
```
