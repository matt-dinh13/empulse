# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Schemes/Use Case
- **Diagram ID**: 162358
- **Elements**: 10
- **Connectors**: 11

```mermaid
graph LR
    ADD_Get_sales_description_for_versioned_entity["{ADD}Get sales description for versioned entity"]
    Wildcard_search["Wildcard search"]
    PUT_financing_scheme_activations(("PUT financing scheme activations"))
    External_Component[/"External Component"/]
    GET_financing_scheme_versions(("GET financing scheme versions"))
    DELETE_financing_schemes(("DELETE financing schemes"))
    PUT_financing_schemes(("PUT financing schemes"))
    MOD_Financing_Scheme_validation["{MOD}Financing Scheme - validation"]
    POST_financing_schemes(("POST financing schemes"))
    GET_financing_schemes(("GET financing schemes"))
    PUT_financing_schemes -->|unnamed| MOD_Financing_Scheme_validation
    PUT_financing_scheme_activations -->|unnamed| MOD_Financing_Scheme_validation
    POST_financing_schemes -->|unnamed| MOD_Financing_Scheme_validation
    GET_financing_schemes -->|unnamed| Wildcard_search
    GET_financing_schemes -->|unnamed| ADD_Get_sales_description_for_versioned_entity
    External_Component --- GET_financing_schemes
    External_Component --- DELETE_financing_schemes
    External_Component --- GET_financing_scheme_versions
    External_Component --- PUT_financing_schemes
    External_Component --- PUT_financing_scheme_activations
    External_Component --- POST_financing_schemes
```
