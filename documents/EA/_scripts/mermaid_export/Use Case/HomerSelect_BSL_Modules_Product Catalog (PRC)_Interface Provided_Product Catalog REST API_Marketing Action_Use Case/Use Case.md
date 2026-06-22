# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action/Use Case
- **Diagram ID**: 160596
- **Elements**: 6
- **Connectors**: 6

```mermaid
graph LR
    Wildcard_search["Wildcard search"]
    MarketingActionDto_validation_rules["MarketingActionDto - validation rules"]
    External_Component[/"External Component"/]
    PUT_manufacturers(("PUT manufacturers"))
    POST_marketing_action(("POST marketing action"))
    GET_marketing_actions(("GET marketing-actions"))
    POST_marketing_action -->|unnamed| MarketingActionDto_validation_rules
    PUT_manufacturers -->|unnamed| MarketingActionDto_validation_rules
    GET_marketing_actions -->|unnamed| Wildcard_search
    External_Component --- PUT_manufacturers
    External_Component --- GET_marketing_actions
    External_Component --- POST_marketing_action
```
