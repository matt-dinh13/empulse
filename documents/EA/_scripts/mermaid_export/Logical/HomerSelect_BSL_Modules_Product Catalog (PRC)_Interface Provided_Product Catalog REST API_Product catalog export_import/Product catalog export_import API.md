# Product catalog export/import API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product catalog export/import
- **Diagram ID**: 163625
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class ADD_Import_product_catalog_settings["{ADD}Import product catalog settings"]
    class ADD_Export_product_catalog_settings["{ADD}Export product catalog settings"]
    class Product_Catalog_REST_API_Product_Catalog_REST_API["Product Catalog REST API : Product Catalog REST API"]
    class product_export["product-export"]
    class Product_catalog_API["Product catalog API"]
    ADD_Import_product_catalog_settings <|.. product_export : unnamed
    ADD_Export_product_catalog_settings <|.. product_export : unnamed
    Product_catalog_API ..> product_export : /product-export
```
