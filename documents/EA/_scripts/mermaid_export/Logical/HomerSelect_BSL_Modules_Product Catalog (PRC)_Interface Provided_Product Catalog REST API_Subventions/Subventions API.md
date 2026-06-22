# Subventions API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Subventions
- **Diagram ID**: 148707
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class GET_Subventions["GET Subventions"]
    class subventions["subventions"]
    class Product_Catalog_REST_API_Product_Catalog_REST_API["Product Catalog REST API : Product Catalog REST API"]
    class Product_catalog_API["Product catalog API"]
    GET_Subventions <|.. subventions : unnamed
    Product_catalog_API ..> subventions : /subventions
```
