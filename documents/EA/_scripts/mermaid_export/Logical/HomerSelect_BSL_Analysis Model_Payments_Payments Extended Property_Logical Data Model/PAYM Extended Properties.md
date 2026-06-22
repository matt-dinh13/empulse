# PAYM Extended Properties

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payments Extended Property/Logical Data Model
- **Diagram ID**: 152267
- **Elements**: 7
- **Connectors**: 10

```mermaid
classDiagram
    class DDM_Draft["DDM Draft"]
    class DDM["DDM"]
    class Outgoing_Payment["Outgoing Payment"]
    class PAYM_Extended_Property_Value["PAYM_Extended_Property_Value"]
    class PAYM_Extended_Property_Group["PAYM_Extended_Property_Group"]
    class PAYM_Extended_Property_Item["PAYM_Extended_Property_Item"]
    PAYM_Extended_Property_Value --> PAYM_Extended_Property_Item : is type of
    PAYM_Extended_Property_Value --> PAYM_Extended_Property_Group : {ADD LOR-8567/}belongs to
    PAYM_Extended_Property_Item --> PAYM_Extended_Property_Group : belongs to
    Outgoing_Payment ..> PAYM_Extended_Property_Group : can have
    PAYM_Extended_Property_Value ..> Outgoing_Payment : unnamed
    PAYM_Extended_Property_Value ..> DDM : unnamed
    PAYM_Extended_Property_Value ..> DDM_Draft : unnamed
    PAYM_Extended_Property_Group --> unnamed : unnamed
    DDM ..> PAYM_Extended_Property_Group : can have
    DDM_Draft ..> PAYM_Extended_Property_Group : {ADD LOR-8567/}can have
```
