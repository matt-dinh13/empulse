# Validation Rules

```mermaid
graph TD
    ADD_Attribute_value_by_type["{ADD}Attribute value by type"]
    Product_catalog_enitity_code["Product catalog enitity code"]
    Product_catalog_entity_name["Product catalog entity name"]
    MOD_Sales_description_validation["{MOD}Sales description - validation"]
    MOD_Sales_description_validation -->|unnamed| Product_catalog_entity_name
    MOD_Sales_description_validation -->|unnamed| Product_catalog_enitity_code
    MOD_Sales_description_validation -->|unnamed| ADD_Attribute_value_by_type
```
