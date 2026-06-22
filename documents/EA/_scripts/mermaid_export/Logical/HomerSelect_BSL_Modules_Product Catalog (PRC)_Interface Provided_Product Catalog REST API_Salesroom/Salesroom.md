# Salesroom

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Salesroom
- **Diagram ID**: 149789
- **Elements**: 11
- **Connectors**: 10

```mermaid
classDiagram
    class sales_packages["sales-packages"]
    class SalesroomItemResponse["SalesroomItemResponse"]
    class products["products"]
    class ValidationErrorDto["ValidationErrorDto"]
    class SalesroomRespose["SalesroomRespose"]
    class SalesroomItemDto["SalesroomItemDto"]
    class SalesroomDto["SalesroomDto"]
    class Paging["Paging"]
    class SalesroomSearchParameters["SalesroomSearchParameters"]
    class salesrooms["salesrooms"]
    class Product_catalog_API["Product catalog API"]
    SalesroomSearchParameters o-- Paging : unnamed
    salesrooms ..> SalesroomSearchParameters : unnamed
    SalesroomRespose ..> SalesroomDto : unnamed
    SalesroomDto ..> SalesroomItemDto : unnamed
    salesrooms ..> SalesroomRespose : unnamed
    salesrooms ..> products : /{codes}/products
    sales_packages ..> SalesroomItemResponse : unnamed
    products ..> SalesroomItemResponse : unnamed
    salesrooms ..> sales_packages : /{codes}/sales-packages
    Product_catalog_API ..> salesrooms : /salesrooms
```
