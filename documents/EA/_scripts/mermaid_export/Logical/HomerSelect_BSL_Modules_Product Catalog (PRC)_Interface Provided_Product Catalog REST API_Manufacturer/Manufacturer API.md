# Manufacturer API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Manufacturer
- **Diagram ID**: 147860
- **Elements**: 6
- **Connectors**: 6

```mermaid
classDiagram
    class PUT_manufacturers["PUT manufacturers"]
    class POST_manufacturers["POST manufacturers"]
    class GET_manufacturers["GET manufacturers"]
    class active["active"]
    class manufacturers["manufacturers"]
    class Product_catalog_API["Product catalog API"]
    manufacturers ..> active : /active
    GET_manufacturers <|.. manufacturers : unnamed
    GET_manufacturers <|.. active : unnamed
    POST_manufacturers <|.. manufacturers : unnamed
    PUT_manufacturers <|.. manufacturers : unnamed
    Product_catalog_API ..> manufacturers : /manufacturers
```
