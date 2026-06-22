# Tariff Item Type

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Code Lists
- **Diagram ID**: 161073
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Relation_Role_Type["Relation Role Type"]
    class Tariff_item_category_type["Tariff item category type"]
    class TariffItemTypeRelationDto["TariffItemTypeRelationDto"]
    class Effective_Date_Type["Effective Date Type"]
    class Charging_Periodicity_Type["Charging Periodicity Type"]
    class Tariff_Item_Usage["Tariff Item Usage"]
    class Tariff_Item_Type_Flag_Type["Tariff Item Type Flag Type"]
    class Tariff_Item_Category["Tariff Item Category"]
    class Accounting_Representation["Accounting Representation"]
    class TariffItemTypeCodeListItemDto["TariffItemTypeCodeListItemDto"]
    TariffItemTypeCodeListItemDto ..> Accounting_Representation : unnamed
    Tariff_item_category_type ..> Tariff_Item_Category : unnamed
    TariffItemTypeCodeListItemDto ..> Tariff_Item_Type_Flag_Type : unnamed
    TariffItemTypeCodeListItemDto ..> Tariff_Item_Usage : unnamed
    TariffItemTypeCodeListItemDto ..> Charging_Periodicity_Type : unnamed
    TariffItemTypeCodeListItemDto ..> Effective_Date_Type : unnamed
    TariffItemTypeCodeListItemDto ..> TariffItemTypeRelationDto : unnamed
    TariffItemTypeCodeListItemDto ..> Tariff_item_category_type : unnamed
    TariffItemTypeRelationDto ..> Relation_Role_Type : unnamed
```
