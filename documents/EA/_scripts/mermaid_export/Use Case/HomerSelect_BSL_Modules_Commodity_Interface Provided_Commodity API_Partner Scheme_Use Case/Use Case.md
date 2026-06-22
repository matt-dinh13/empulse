# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Partner Scheme/Use Case
- **Diagram ID**: 158947
- **Elements**: 6
- **Connectors**: 8

```mermaid
graph LR
    User[/"User"/]
    PUT_partner_scheme(("PUT partner-scheme"))
    MOD_GET_partner_scheme_by_search(("{MOD}GET partner-scheme by search"))
    GET_partner_scheme_by_code(("GET partner-scheme by code"))
    MOD_Partner_scheme_validation["{MOD}Partner scheme - validation"]
    POST_partner_scheme(("POST partner-scheme"))
    User --- MOD_GET_partner_scheme_by_search
    User --- POST_partner_scheme
    User --- GET_partner_scheme_by_code
    User --- PUT_partner_scheme
    GET_partner_scheme_by_code -->|unnamed| MOD_Partner_scheme_validation
    POST_partner_scheme -->|unnamed| MOD_Partner_scheme_validation
    PUT_partner_scheme -->|unnamed| MOD_Partner_scheme_validation
    MOD_GET_partner_scheme_by_search -->|unnamed| MOD_Partner_scheme_validation
```
