# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Model/Use Case
- **Diagram ID**: 160606
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    PUT_models(("PUT models"))
    POST_models(("POST models"))
    GET_models_by_code(("GET models by code"))
    GET_models_search(("GET models - search"))
    GET_models_active(("GET models - active"))
    External_Component[/"External Component"/]
    GET_models_search -->|unnamed| Wildcard_search
    External_Component --- PUT_models
    External_Component --- POST_models
    External_Component --- GET_models_active
    External_Component --- GET_models_by_code
    External_Component --- GET_models_search
```
