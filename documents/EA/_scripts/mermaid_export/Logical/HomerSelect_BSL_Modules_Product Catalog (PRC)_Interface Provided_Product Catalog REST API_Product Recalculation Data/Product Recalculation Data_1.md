# Product Recalculation Data

```mermaid
classDiagram
    class service["service"]
    class ValidationErrorDto["ValidationErrorDto"]
    class ProductRecalculationServicesResponse["ProductRecalculationServicesResponse"]
    class MOD_ProductRecalculationSerrviceDto["{MOD}ProductRecalculationSerrviceDto"]
    class ProductRecalculationServiceTypeDataDto["ProductRecalculationServiceTypeDataDto"]
    class ProductRecalculationServicesResponseDto["ProductRecalculationServicesResponseDto"]
    class QualificationCriteria["QualificationCriteria"]
    class MOD_ProductRecalculationServicesInputDto["{MOD}ProductRecalculationServicesInputDto"]
    class product_recalculation_data["product-recalculation-data"]
    class Product_catalog_API["Product catalog API"]
    service --> MOD_ProductRecalculationServicesInputDto : unnamed
    MOD_ProductRecalculationServicesInputDto --> QualificationCriteria : unnamed
    ProductRecalculationServicesResponse --> ProductRecalculationServicesResponseDto : unnamed
    ProductRecalculationServicesResponseDto --> ProductRecalculationServiceTypeDataDto : unnamed
    ProductRecalculationServiceTypeDataDto --> MOD_ProductRecalculationSerrviceDto : unnamed
    service --> ProductRecalculationServicesResponse : unnamed
    ProductRecalculationServicesResponse --> ValidationErrorDto : unnamed
    product_recalculation_data --> service : /service
    Product_catalog_API --> product_recalculation_data : /product-recalculation-data
```
