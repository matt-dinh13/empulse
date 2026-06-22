# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product/Use Case
- **Diagram ID**: 162337
- **Elements**: 16
- **Connectors**: 23

```mermaid
graph LR
    ADD_User_check_for_activation["{ADD}User check for activation"]
    ADD_Get_sales_description_for_versioned_entity["{ADD}Get sales description for versioned entity"]
    Wildcard_search["Wildcard search"]
    MOD_PUT_product_activations(("{MOD}PUT product activations"))
    POST_product_validation(("POST product-validation"))
    External_Component[/"External Component"/]
    ADD_AIR_calculation_from_flat_rate["{ADD}AIR calculation from flat rate"]
    GET_flat_rate_to_air(("GET flat-rate-to-air"))
    Product_validation["Product - validation"]
    Version_number["Version number"]
    MOD_Product_activation_validation_rules["{MOD}Product activation validation rules"]
    DELETE_products(("DELETE products"))
    MOD_PUT_products(("{MOD}PUT products"))
    MOD_POST_products(("{MOD}POST products"))
    GET_products(("GET products"))
    GET_product_versions(("GET product-versions"))
    MOD_POST_products -->|unnamed| Version_number
    MOD_PUT_product_activations -->|unnamed| ADD_User_check_for_activation
    MOD_POST_products -->|unnamed| ADD_User_check_for_activation
    GET_products -->|unnamed| ADD_Get_sales_description_for_versioned_entity
    GET_products -->|unnamed| Wildcard_search
    GET_flat_rate_to_air -->|unnamed| ADD_AIR_calculation_from_flat_rate
    MOD_PUT_product_activations -->|unnamed| Product_validation
    MOD_PUT_products -->|unnamed| ADD_User_check_for_activation
    MOD_PUT_products -->|unnamed| Product_validation
    MOD_PUT_products -->|unnamed| Version_number
    MOD_POST_products -->|unnamed| MOD_Product_activation_validation_rules
    MOD_PUT_products -->|unnamed| MOD_Product_activation_validation_rules
    Product_validation -->|unnamed| MOD_Product_activation_validation_rules
    MOD_PUT_product_activations -->|unnamed| MOD_Product_activation_validation_rules
    MOD_POST_products -->|unnamed| Product_validation
    External_Component --- GET_product_versions
    External_Component --- MOD_POST_products
    External_Component --- GET_products
    External_Component --- DELETE_products
    External_Component --- GET_flat_rate_to_air
    External_Component --- MOD_PUT_products
    External_Component --- POST_product_validation
    External_Component --- MOD_PUT_product_activations
```
