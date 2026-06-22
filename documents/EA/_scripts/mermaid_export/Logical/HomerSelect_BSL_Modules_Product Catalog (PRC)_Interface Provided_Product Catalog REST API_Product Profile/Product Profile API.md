# Product Profile API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Profile
- **Diagram ID**: 147523
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class PUT_product_profiles["PUT product-profiles"]
    class POST_product_profiles["POST product-profiles"]
    class GET_product_profiles["GET product-profiles"]
    class Product_catalog_API["Product catalog API"]
    class product_profiles["product-profiles"]
    GET_product_profiles <|.. product_profiles : unnamed
    POST_product_profiles <|.. product_profiles : unnamed
    PUT_product_profiles <|.. product_profiles : unnamed
    Product_catalog_API ..> product_profiles : /product-profiles
```
