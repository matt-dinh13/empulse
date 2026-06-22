# Sales Descriptions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions
- **Diagram ID**: 161065
- **Elements**: 9
- **Connectors**: 6

```mermaid
classDiagram
    class Sales_Descriptions_SalesDescriptionInputDto["Sales Descriptions : SalesDescriptionInputDto"]
    class SalesDescriptionInputDto["SalesDescriptionInputDto"]
    class Sales_Descriptions_SalesDescriptionDto["Sales Descriptions : SalesDescriptionDto"]
    class SalesDescriptionSearchParametersDto["SalesDescriptionSearchParametersDto"]
    class ValidationErrorDto["ValidationErrorDto"]
    class SalesDescriptionDto["SalesDescriptionDto"]
    class SalesDescriptionResponse["SalesDescriptionResponse"]
    class MOD_sales_descriptions["{MOD}sales-descriptions"]
    class Product_catalog_API["Product catalog API"]
    MOD_sales_descriptions ..> SalesDescriptionResponse : unnamed
    SalesDescriptionResponse ..> SalesDescriptionDto : unnamed
    SalesDescriptionResponse ..> ValidationErrorDto : unnamed
    MOD_sales_descriptions ..> SalesDescriptionSearchParametersDto : unnamed
    MOD_sales_descriptions ..> SalesDescriptionInputDto : unnamed
    Product_catalog_API ..> MOD_sales_descriptions : /sales-descriptions
```
