# Promo Actions API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Promo Actions
- **Diagram ID**: 158731
- **Elements**: 9
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_Promo_actions_validation["{ADD}Promo actions - validation"]
    class PUT_promo_actions["PUT promo-actions"]
    class POST_promo_actions["POST promo-actions"]
    class GET_promo_actions_by_search["GET promo-actions by search"]
    class GET_promo_actions_by_code["GET promo-actions by code"]
    class GET_promo_actions_active["GET promo-actions active"]
    class ADD_active["{ADD}active"]
    class ADD_promo_actions["{ADD}promo-actions"]
    class Product_catalog_API["Product catalog API"]
    ADD_promo_actions ..> ADD_active : /active
    ADD_active ..> GET_promo_actions_active : unnamed
    ADD_promo_actions ..> GET_promo_actions_by_code : unnamed
    ADD_promo_actions ..> GET_promo_actions_by_search : unnamed
    ADD_promo_actions ..> POST_promo_actions : unnamed
    ADD_promo_actions ..> PUT_promo_actions : unnamed
    PUT_promo_actions ..> ADD_Promo_actions_validation : unnamed
    POST_promo_actions ..> ADD_Promo_actions_validation : unnamed
    Product_catalog_API ..> ADD_promo_actions : /promo-actions
```
