# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer/Use Case
- **Diagram ID**: 160590
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    ManufacturerDto_validation_rules["ManufacturerDto - validation rules"]
    External_Component[/"External Component"/]
    PUT_manufacturers(("PUT manufacturers"))
    POST_manufacturers(("POST manufacturers"))
    GET_manufacturers(("GET manufacturers"))
    POST_manufacturers -->|unnamed| ManufacturerDto_validation_rules
    PUT_manufacturers -->|unnamed| ManufacturerDto_validation_rules
    GET_manufacturers -->|unnamed| Wildcard_search
    External_Component --- GET_manufacturers
    External_Component --- POST_manufacturers
    External_Component --- PUT_manufacturers
```
