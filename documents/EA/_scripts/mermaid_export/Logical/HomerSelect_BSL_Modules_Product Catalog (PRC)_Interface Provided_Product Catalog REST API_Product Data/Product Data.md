# Product Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Data
- **Diagram ID**: 158746
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class MOD_ProductDataDto["{MOD}ProductDataDto"]
    class ProductDataResponse["ProductDataResponse"]
    class product_data["product-data"]
    class Product_catalog_API["Product catalog API"]
    product_data ..> ProductDataResponse : unnamed
    ProductDataResponse ..> MOD_ProductDataDto : unnamed
    Product_catalog_API ..> product_data : /product-data
```
