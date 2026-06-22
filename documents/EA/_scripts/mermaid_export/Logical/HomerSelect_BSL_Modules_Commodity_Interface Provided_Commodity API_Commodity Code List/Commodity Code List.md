# Commodity Code List

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Code List
- **Diagram ID**: 138986
- **Elements**: 13
- **Connectors**: 10

```mermaid
classDiagram
    class MOD_Commodity_Validation_Event_Type["{MOD}Commodity Validation Event Type"]
    class Commodity_Validation_Event_Type["Commodity Validation Event Type"]
    class Commodity_Validation_Type["Commodity Validation Type"]
    class MOD_Commodity_Validation_Type["{MOD}Commodity Validation Type"]
    class Commodity_Validation_External_Type["Commodity Validation External Type"]
    class Risk_Category["Risk Category"]
    class Currency["Currency"]
    class LocalizedString["LocalizedString"]
    class CodeListName["CodeListName"]
    class Commodity_API_Commodity_REST_API["Commodity API :Commodity REST API"]
    class Color["Color"]
    class code_list["code-list"]
    class CommodityCodeList["CommodityCodeList"]
    code_list --> CommodityCodeList : unnamed
    CommodityCodeList ..> Color : unnamed
    code_list ..> CodeListName : unnamed
    CommodityCodeList ..> Currency : unnamed
    CommodityCodeList ..> Risk_Category : unnamed
    CommodityCodeList ..> Commodity_Validation_External_Type : unnamed
    Commodity_Validation_Type ..> MOD_Commodity_Validation_Type : unnamed
    CommodityCodeList ..> Commodity_Validation_Type : unnamed
    CommodityCodeList ..> Commodity_Validation_Event_Type : unnamed
    Commodity_Validation_Event_Type ..> MOD_Commodity_Validation_Event_Type : unnamed
```
