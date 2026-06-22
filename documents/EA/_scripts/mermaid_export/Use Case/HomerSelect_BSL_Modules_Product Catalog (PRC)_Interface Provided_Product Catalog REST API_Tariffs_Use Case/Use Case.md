# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Tariffs/Use Case
- **Diagram ID**: 162759
- **Elements**: 16
- **Connectors**: 21

```mermaid
graph LR
    ADD_User_check_for_activation["{ADD}User check for activation"]
    ADD_Get_sales_description_for_versioned_entity["{ADD}Get sales description for versioned entity"]
    Wildcard_search["Wildcard search"]
    MOD_PUT_tariff_activations(("{MOD}PUT tariff activations"))
    TariffItemsSearchParametersDto_validation["TariffItemsSearchParametersDto - validation"]
    Algorithm_Find_tariff_items_by_usage["Algorithm: Find tariff items by usage"]
    GET_tariff_items(("GET tariff-items"))
    External_Component[/"External Component"/]
    Tariff_validation["Tariff - validation"]
    MOD_Tariff_activation_validation_rules["{MOD}Tariff activation validation rules"]
    Version_number["Version number"]
    MOD_PUT_tariffs(("{MOD}PUT tariffs"))
    MOD_POST_tariffs(("{MOD}POST tariffs"))
    GET_tariff_versions(("GET tariff-versions"))
    GET_tariffs(("GET tariffs"))
    DELETE_tariffs(("DELETE tariffs"))
    MOD_POST_tariffs -->|unnamed| Tariff_validation
    MOD_PUT_tariff_activations -->|unnamed| ADD_User_check_for_activation
    MOD_POST_tariffs -->|unnamed| ADD_User_check_for_activation
    GET_tariffs -->|unnamed| ADD_Get_sales_description_for_versioned_entity
    GET_tariffs -->|unnamed| Wildcard_search
    GET_tariff_items -->|unnamed| TariffItemsSearchParametersDto_validation
    GET_tariff_items -->|unnamed| Algorithm_Find_tariff_items_by_usage
    MOD_PUT_tariffs -->|unnamed| ADD_User_check_for_activation
    MOD_PUT_tariff_activations -->|unnamed| Tariff_validation
    MOD_POST_tariffs -->|unnamed| MOD_Tariff_activation_validation_rules
    MOD_PUT_tariffs -->|unnamed| MOD_Tariff_activation_validation_rules
    MOD_POST_tariffs -->|unnamed| Version_number
    MOD_PUT_tariffs -->|unnamed| Version_number
    MOD_PUT_tariffs -->|unnamed| Tariff_validation
    External_Component --- MOD_PUT_tariff_activations
    External_Component --- DELETE_tariffs
    External_Component --- MOD_PUT_tariffs
    External_Component --- GET_tariff_items
    External_Component --- GET_tariff_versions
    External_Component --- GET_tariffs
    External_Component --- MOD_POST_tariffs
```
