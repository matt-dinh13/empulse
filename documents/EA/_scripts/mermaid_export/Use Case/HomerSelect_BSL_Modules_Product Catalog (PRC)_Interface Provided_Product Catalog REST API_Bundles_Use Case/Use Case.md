# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles/Use Case
- **Diagram ID**: 160855
- **Elements**: 8
- **Connectors**: 8

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    Code_generation["Code generation"]
    ADD_Bundles_validation["{ADD}Bundles - validation"]
    ADD_PUT_bundle(("{ADD}PUT bundle"))
    ADD_POST_bundle(("{ADD}POST bundle"))
    ADD_POST_bundle_search(("{ADD}POST bundle search"))
    ADD_GET_bundle_by_code(("{ADD}GET bundle by code"))
    External_Component[/"External Component"/]
    ADD_POST_bundle -->|unnamed| ADD_Bundles_validation
    ADD_PUT_bundle -->|unnamed| ADD_Bundles_validation
    ADD_POST_bundle -->|unnamed| Code_generation
    ADD_POST_bundle_search -->|unnamed| Wildcard_search
    External_Component --- ADD_POST_bundle
    External_Component --- ADD_GET_bundle_by_code
    External_Component --- ADD_PUT_bundle
    External_Component --- ADD_POST_bundle_search
```
