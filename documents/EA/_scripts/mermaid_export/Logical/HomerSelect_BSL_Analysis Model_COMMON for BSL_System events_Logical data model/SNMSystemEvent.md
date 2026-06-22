# SNMSystemEvent

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164617
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class MOD_Partner["{MOD}Partner"]
    class Salesroom["Salesroom"]
    class SNMSystemEvent["SNMSystemEvent"]
    class PartnerChangedSE["PartnerChangedSE"]
    class SalesroomChangedSE["SalesroomChangedSE"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- SNMSystemEvent : unnamed
    SNMSystemEvent <|-- SalesroomChangedSE : unnamed
    SNMSystemEvent <|-- PartnerChangedSE : unnamed
    SalesroomChangedSE --> Salesroom : unnamed
    MOD_Partner o-- Salesroom : unnamed
    PartnerChangedSE --> MOD_Partner : unnamed
```
