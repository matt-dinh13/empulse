# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Partner Scheme/Use Case
- **Diagram ID**: 161253
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    Get_partner_scheme_code["Get partner scheme code"]
    Partner_scheme_validation["Partner scheme - validation"]
    GET_partner_scheme_search(("GET partner scheme search"))
    GET_partner_scheme_search -->|unnamed| Get_partner_scheme_code
    GET_partner_scheme_search -->|unnamed| Partner_scheme_validation
```
