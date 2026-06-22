# Marketing Action API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Marketing Action
- **Diagram ID**: 148207
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class PUT_manufacturers["PUT manufacturers"]
    class POST_marketing_action["POST marketing action"]
    class GET_marketing_actions["GET marketing-actions"]
    class active["active"]
    class marketing_actions["marketing-actions"]
    class Product_catalog_API["Product catalog API"]
    marketing_actions ..> active : /active
    GET_marketing_actions <|.. marketing_actions : unnamed
    GET_marketing_actions <|.. active : unnamed
    POST_marketing_action <|.. marketing_actions : unnamed
    PUT_manufacturers <|.. marketing_actions : unnamed
    Product_catalog_API ..> marketing_actions : /marketing-actions
```
