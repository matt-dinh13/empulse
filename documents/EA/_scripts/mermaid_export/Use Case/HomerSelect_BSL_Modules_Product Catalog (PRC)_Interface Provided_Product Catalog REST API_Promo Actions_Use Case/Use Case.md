# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions/Use Case
- **Diagram ID**: 160608
- **Elements**: 7
- **Connectors**: 6

```mermaid
graph LR
    External_Component[/"External Component"/]
    GET_promo_actions_active(("GET promo-actions active"))
    PUT_promo_actions(("PUT promo-actions"))
    POST_promo_actions(("POST promo-actions"))
    Wildcard_search["Wildcard search"]
    GET_promo_actions_by_search(("GET promo-actions by search"))
    GET_promo_actions_by_code(("GET promo-actions by code"))
    GET_promo_actions_by_search -->|unnamed| Wildcard_search
    External_Component --- GET_promo_actions_by_code
    External_Component --- POST_promo_actions
    External_Component --- PUT_promo_actions
    External_Component --- GET_promo_actions_active
    External_Component --- GET_promo_actions_by_search
```
