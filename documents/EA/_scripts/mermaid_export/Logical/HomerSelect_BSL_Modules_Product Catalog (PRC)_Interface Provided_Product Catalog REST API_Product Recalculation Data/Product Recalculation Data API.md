# Product Recalculation Data API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Recalculation Data
- **Diagram ID**: 147044
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class service["service"]
    class POST_product_recalculation_data_service["POST product recalculation data - service"]
    class Product_catalog_API["Product catalog API"]
    class product_recalculation_data["product-recalculation-data"]
    service ..> POST_product_recalculation_data_service : unnamed
    product_recalculation_data ..> service : /service
    Product_catalog_API ..> product_recalculation_data : /product-recalculation-data
```
