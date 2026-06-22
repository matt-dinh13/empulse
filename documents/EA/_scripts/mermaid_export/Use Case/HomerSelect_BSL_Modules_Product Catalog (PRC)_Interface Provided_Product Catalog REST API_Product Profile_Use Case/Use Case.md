# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile/Use Case
- **Diagram ID**: 160593
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    MOD_ProductProfileInputDto_validation_rules["{MOD}ProductProfileInputDto - validation rules"]
    PUT_product_profiles(("PUT product-profiles"))
    POST_product_profiles(("POST product-profiles"))
    GET_product_profiles(("GET product-profiles"))
    External_Component[/"External Component"/]
    PUT_product_profiles -->|unnamed| MOD_ProductProfileInputDto_validation_rules
    POST_product_profiles -->|unnamed| MOD_ProductProfileInputDto_validation_rules
    GET_product_profiles -->|unnamed| Wildcard_search
    External_Component --- GET_product_profiles
    External_Component --- PUT_product_profiles
    External_Component --- POST_product_profiles
```
