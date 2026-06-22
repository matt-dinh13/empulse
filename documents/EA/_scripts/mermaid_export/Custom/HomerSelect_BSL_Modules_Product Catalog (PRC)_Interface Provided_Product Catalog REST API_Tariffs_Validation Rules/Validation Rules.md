# Validation Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Validation Rules
- **Diagram ID**: 163133
- **Elements**: 14
- **Connectors**: 15

```mermaid
graph TD
    ADD_Divide_By_Terms_rule["{ADD}Divide By Terms rule"]
    ADD_Enum_active_values["{ADD}Enum active values"]
    Base_type_validation_based_on_tariff_item_type["Base type validation based on tariff item type"]
    Get_enum_from_HomeSIS["Get enum from HomeSIS"]
    Source_for_limit_value["Source for limit value"]
    MOD_Tariff_Item_Bases_allowed_for_Product_Type["{MOD}Tariff Item Bases allowed for Product Type"]
    ADD_Get_Codelists_from_CSD["{ADD}Get Codelists from CSD"]
    MOD_Tariff_Item_activation_validation_rules["{MOD}Tariff Item activation validation rules"]
    Product_catalog_entity_activation["Product catalog entity activation"]
    TariffItemsSearchParametersDto_validation["TariffItemsSearchParametersDto - validation"]
    MOD_TariffItemDto_validation["{MOD}TariffItemDto - validation"]
    Tariff_name["Tariff name"]
    Tariff_validation["Tariff - validation"]
    Tariff_code["Tariff code"]
    MOD_TariffItemDto_validation -->|unnamed| ADD_Divide_By_Terms_rule
    Tariff_validation -->|unnamed| Tariff_code
    Tariff_validation -->|unnamed| Tariff_name
    Tariff_validation -->|unnamed| MOD_TariffItemDto_validation
    Tariff_validation -->|unnamed| Product_catalog_entity_activation
    MOD_TariffItemDto_validation -->|unnamed| MOD_Tariff_Item_activation_validation_rules
    Source_for_limit_value -->|unnamed| ADD_Get_Codelists_from_CSD
    MOD_TariffItemDto_validation -->|unnamed| MOD_Tariff_Item_Bases_allowed_for_Product_Type
    MOD_TariffItemDto_validation -->|unnamed| Source_for_limit_value
    Source_for_limit_value -->|unnamed| Get_enum_from_HomeSIS
    MOD_TariffItemDto_validation -->|unnamed| Base_type_validation_based_on_tariff_item_type
    Tariff_validation -->|unnamed| ADD_Enum_active_values
    MOD_TariffItemDto_validation -->|unnamed| ADD_Enum_active_values
    MOD_Tariff_Item_activation_validation_rules -->|unnamed| MOD_Tariff_Item_Bases_allowed_for_Product_Type
    MOD_Tariff_Item_activation_validation_rules -->|unnamed| ADD_Get_Codelists_from_CSD
```
