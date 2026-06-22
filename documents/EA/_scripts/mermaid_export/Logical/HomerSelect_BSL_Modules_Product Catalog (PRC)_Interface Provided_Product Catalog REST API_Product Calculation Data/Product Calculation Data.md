# Product Calculation Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Product Calculation Data
- **Diagram ID**: 138997
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class Product_Catalog_REST_API_Product_Catalog_REST_API["Product Catalog REST API : Product Catalog REST API"]
    class ValidationError["ValidationError"]
    class ProductCalculationDataDto["ProductCalculationDataDto"]
    class productCalculationDataInputDto["productCalculationDataInputDto"]
    class ProductCalculationDataResponse["ProductCalculationDataResponse"]
    class product_calculation_data["product-calculation-data"]
    class Product_catalog_API["Product catalog API"]
    product_calculation_data ..> ProductCalculationDataResponse : unnamed
    product_calculation_data ..> productCalculationDataInputDto : unnamed
    ProductCalculationDataResponse ..> ProductCalculationDataDto : unnamed
    ProductCalculationDataResponse ..> ValidationError : unnamed
    Product_catalog_API ..> product_calculation_data : /product-calculation-data
```
