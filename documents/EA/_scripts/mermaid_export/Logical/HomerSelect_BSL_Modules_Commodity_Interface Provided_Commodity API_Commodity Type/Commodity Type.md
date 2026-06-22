# Commodity Type

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Commodity Type
- **Diagram ID**: 138995
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class CommodityTypeCriteria["CommodityTypeCriteria"]
    class ADD_commodity_type_criteria["{ADD}commodity-type-criteria"]
    class Commodity_API["Commodity API"]
    class commodity_field_settings["commodity-field-settings"]
    class ValidationError["ValidationError"]
    class CommodityTypeResult["CommodityTypeResult"]
    class active["active"]
    class LocalizedString["LocalizedString"]
    class Commodity_API_Commodity_REST_API["Commodity API :Commodity REST API"]
    class commodity_types["commodity-types"]
    class Commodity_Field_Setting["Commodity Field Setting"]
    class CommodityType["CommodityType"]
    active ..> CommodityType : unnamed
    commodity_types ..> CommodityType : unnamed
    CommodityTypeResult ..> CommodityType : unnamed
    commodity_field_settings ..> Commodity_Field_Setting : unnamed
    commodity_types ..> active : /active
    commodity_types ..> CommodityTypeResult : unnamed
    CommodityTypeResult ..> ValidationError : unnamed
    commodity_types ..> commodity_field_settings : /commodity-field-settings
    commodity_types ..> ADD_commodity_type_criteria : /commodity-type-criteria
    ADD_commodity_type_criteria ..> CommodityTypeCriteria : unnamed
    Commodity_API ..> commodity_types : /commodityTypes
```
