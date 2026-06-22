# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Subventions/Use Case
- **Diagram ID**: 148709
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    GET_Subventions_validation["GET Subventions - validation"]
    External_Component[/"External Component"/]
    GET_Subventions(("GET Subventions"))
    GET_Subventions -->|unnamed| GET_Subventions_validation
    External_Component --- GET_Subventions
```
