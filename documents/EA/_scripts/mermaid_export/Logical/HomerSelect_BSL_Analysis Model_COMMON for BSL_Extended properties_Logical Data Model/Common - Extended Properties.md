# Common - Extended Properties

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Logical Data Model
- **Diagram ID**: 136390
- **Elements**: 8
- **Connectors**: 12

```mermaid
classDiagram
    class Salesroom["Salesroom"]
    class MOD_Partner["{MOD}Partner"]
    class Client["Client"]
    class MOD_Contract["{MOD}Contract"]
    class Extended_Property_Value["Extended Property Value"]
    class Extended_Property_Item["Extended Property Item"]
    class Extended_Property_Group["Extended Property Group"]
    Salesroom ..> Extended_Property_Group : can have
    Extended_Property_Item --> Extended_Property_Group : belongs to
    MOD_Partner ..> Extended_Property_Group : can have
    Extended_Property_Value --> Extended_Property_Item : is type of
    Extended_Property_Value ..> MOD_Contract : unnamed
    Extended_Property_Value ..> Client : unnamed
    MOD_Partner o-- Salesroom : unnamed
    Extended_Property_Value ..> MOD_Partner : unnamed
    Extended_Property_Value ..> Salesroom : unnamed
    Extended_Property_Group --> unnamed : unnamed
    Client ..> Extended_Property_Group : can have
    MOD_Contract ..> Extended_Property_Group : can have
```
