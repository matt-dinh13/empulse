# Access Right

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions/Access Right
- **Diagram ID**: 158449
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    PUT_promo_actions["PUT promo-actions"]
    POST_promo_actions["POST promo-actions"]
    GET_promo_actions_active["GET promo-actions active"]
    GET_promo_actions_by_search["GET promo-actions by search"]
    GET_promo_actions_by_code["GET promo-actions by code"]
    ADD_02_732_Manage_promo_action["{ADD}02.732 Manage promo action"]
    ADD_02_731_View_promo_action["{ADD}02.731 View promo action"]
    PUT_promo_actions -->|unnamed| ADD_02_732_Manage_promo_action
    POST_promo_actions -->|unnamed| ADD_02_732_Manage_promo_action
    GET_promo_actions_by_search -->|unnamed| ADD_02_731_View_promo_action
    GET_promo_actions_by_code -->|unnamed| ADD_02_731_View_promo_action
    GET_promo_actions_active -->|unnamed| ADD_02_731_View_promo_action
```
