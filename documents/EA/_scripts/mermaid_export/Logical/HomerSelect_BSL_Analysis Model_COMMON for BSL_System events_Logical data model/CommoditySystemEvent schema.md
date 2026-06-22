# CommoditySystemEvent schema

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model
- **Diagram ID**: 164623
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class Logical_Data_Model_Commodity_Data["Logical Data Model : Commodity Data"]
    class MOD_Commodity["{MOD}Commodity"]
    class DEL_CommodityUpdatedSE["{DEL}CommodityUpdatedSE"]
    class DEL_CommoditySystemEvent["{DEL}CommoditySystemEvent"]
    class SystemEvent["SystemEvent"]
    SystemEvent <|-- DEL_CommoditySystemEvent : unnamed
    DEL_CommoditySystemEvent <|-- DEL_CommodityUpdatedSE : unnamed
    DEL_CommoditySystemEvent --> MOD_Commodity : unnamed
    Logical_Data_Model_Commodity_Data --> MOD_Commodity : unnamed
```
